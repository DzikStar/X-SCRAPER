"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.HomeTimeline"],
    {
        789831: (e, a, t) => {
            t.d(a, { Z: () => s });
            var r = t(807896),
                o = t(202784),
                n = t(325686),
                d = t(392237),
                l = t(655352);
            const i = d.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                s = ({ children: e, component: a, fab: t, shouldRenderFab: d = !0, style: s, withoutBottomPadding: c, ...u }) => {
                    const p = a || n.Z,
                        b = d && !(0, l.ZP)();
                    return o.createElement(p, (0, r.Z)({}, u, { style: [b && !c && i.root, s] }), e, b ? t : null);
                };
        },
        507651: (e, a, t) => {
            t.d(a, { Z: () => s });
            var r = t(807896),
                o = t(202784),
                n = t(107267),
                d = t(403556),
                l = t(791632);
            const i = (e) => {
                    const a = (0, n.useHistory)();
                    return o.createElement(d.Z, (0, r.Z)({}, e, { isCompact: (0, l.HD)(a) }));
                },
                s = o.memo(i);
        },
        463236: (e, a, t) => {
            t.d(a, { Z: () => k });
            var r = t(202784),
                o = t(325686),
                n = t(73664),
                d = t(952793),
                l = t(293115),
                i = t(725405);
            const s = (e) => {
                    let a = "/i/premium_sign_up";
                    switch (e) {
                        case "PremiumBasic":
                        case "BlueVerified":
                        case "BlueVerifiedPlus":
                            a = "/i/premium_sign_up";
                    }
                    return a;
                },
                c = (e) => {
                    let a = "premium";
                    switch (e) {
                        case "PremiumBasic":
                            a = "premium_basic";
                            break;
                        case "BlueVerified":
                            a = "premium";
                            break;
                        case "BlueVerifiedPlus":
                            a = "premium_plus";
                    }
                    return a;
                },
                u = (e) => {
                    let a = "Year";
                    switch (e) {
                        case "Year":
                            a = "Year";
                            break;
                        case "Month":
                            a = "Month";
                    }
                    return a;
                },
                p = (e, a) => ({ pathname: s(a.product_category), state: { referring_page: e.referrer, tier: c(a.product_category), plan: u(a.charge_interval) } });
            var b = t(807896),
                m = t(154003);
            const h = ({ buttonProps: e, destinationLink: a, onDestinationClick: t, renderProperties: { action_label: o } }) => r.createElement(m.ZP, { link: a, onClick: t, type: e?.type }, o);
            var g = t(992942),
                f = t(439592),
                S = t(731708),
                D = t(392237);
            const y = ({ destinationLink: e, onDestinationClick: a, renderProperties: { cta: t, image_url: n, primary_label: d, secondary_label: l } }) => {
                    const i = n ? "whiteOnColor" : void 0;
                    return r.createElement(o.Z, { style: w.cardOuter }, n ? r.createElement(g.Z, { aspectMode: f.Z.COVER, source: { uri: n }, style: w.image }) : null, r.createElement(o.Z, { style: w.cardInner }, r.createElement(S.ZP, { color: i, size: "headline1", weight: "heavy" }, d), l ? r.createElement(S.ZP, { color: i }, l) : null, r.createElement(h, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: a, renderProperties: t })));
                },
                w = D.default.create((e) => ({ cardOuter: { borderRadius: e.borderRadii.large, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, backgroundColor: e.colors.cellBackground }, cardInner: { gap: e.spaces.space12, alignItems: "flex-start", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, image: { position: "absolute", width: "100%", height: "100%", borderRadius: e.borderRadii.large } })),
                C = ({ destinationLink: e, onDestinationClick: a, renderProperties: t }) => {
                    const n = r.useMemo(() => {
                        const o = { destinationLink: e, onDestinationClick: a };
                        switch (t.__typename) {
                            case "UpsellButtonRenderProperties":
                                return r.createElement(h, (0, b.Z)({}, o, { renderProperties: t }));
                            case "UpsellCardRenderProperties":
                                return r.createElement(y, (0, b.Z)({}, o, { renderProperties: t }));
                            default:
                                return null;
                        }
                    }, [t, e, a]);
                    return r.createElement(o.Z, { testID: `super-upsell-${t.__typename ?? "default"}` }, n);
                },
                M = ({ attributionParams: e, trackClick: a, trackImpression: t, upsellContent: o }) => {
                    const l = (0, i.Z)(),
                        s = r.useRef(),
                        c = (0, n.R)(s, { threshold: 1 }),
                        u = (0, d.hC)("subscriptions_upsells_track_interactions_enabled");
                    r.useEffect(() => {
                        c && (u ? t() : l.scribeAction("impression"));
                    }, [c, l, t, u]);
                    const b = p(e, o.destination),
                        m = r.useCallback(() => {
                            u ? a() : l.scribeAction("click");
                        }, [l, a, u]);
                    return r.createElement("div", { ref: s }, r.createElement(C, { destinationLink: b, onDestinationClick: m, renderProperties: o.render_properties }));
                },
                A = (e) => r.createElement(l.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell", element: e.upsellContent.key } }, r.createElement(M, e));
            var E = t(722517);
            const v = ({ attributionParams: e, surfaceKey: a, trackClick: t, trackDismiss: o, trackImpression: n, upsellContent: d }) => r.useMemo(() => r.createElement(A, { attributionParams: e, trackClick: t, trackDismiss: o, trackImpression: n, upsellContent: d }), [e, t, o, n, d]),
                _ = ({ surfaceKey: e, wrapperStyles: a }) => {
                    const { attributionParams: t, trackClick: n, trackDismiss: d, trackImpression: l, upsellContent: i } = (0, E.Z)(e);
                    return r.useMemo(() => (i && t ? r.createElement(o.Z, { style: a }, r.createElement(v, { attributionParams: t, surfaceKey: e, trackClick: n, trackDismiss: d, trackImpression: l, upsellContent: i })) : null), [t, i, e, n, d, l, a]);
                },
                k = r.memo(_);
        },
        387524: (e, a, t) => {
            t.d(a, { Z: () => h });
            var r = t(807896),
                o = t(202784),
                n = t(325686),
                d = t(292627),
                l = t(537392),
                i = t(392237),
                s = t(365023),
                c = t(392027),
                u = t(774654),
                p = t(725516),
                b = t(443781);
            const m = i.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${i.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                h = (e) => {
                    const { "aria-label": a, label: t, onPress: h, scribeComponent: g, ...f } = e,
                        { loggedInUserId: S } = o.useContext(b.rC),
                        D = (0, p.z)(),
                        y = o.useCallback(
                            (e) => {
                                D.scribe({ component: g, action: "click" }), h && h(e);
                            },
                            [D, h, g],
                        ),
                        w = u.ZM.useCollapsibleNavBars(),
                        C = [...u.Ah({ elementPosition: "bottom" }), w && m.fabStaysAboveSafeArea];
                    return S
                        ? o.createElement(
                              d.Z.FloatingAction,
                              null,
                              o.createElement(l.ZP, null, ({ windowWidth: e }) => {
                                  const d = e > i.default.theme.breakpoints.large,
                                      l = e > i.default.theme.breakpoints.medium,
                                      u = e < i.default.theme.breakpoints.micro,
                                      p = [m.root, l && m.rootMedium, d && m.rootLarge],
                                      b = [m.fab, d && m.fabLarge, u && m.fabMicro, C];
                                  return o.createElement(
                                      n.Z,
                                      { "aria-label": a, pointerEvents: "box-none", role: "complementary", style: p },
                                      o.createElement(s.Z, { id: "FloatingActionButtonBase" }, (e, l) => o.createElement(n.Z, (0, r.Z)({ ref: e() }, l({ style: b })), o.createElement(c.Z, (0, r.Z)({}, f, { "aria-label": a, label: d ? t : void 0, onPress: y, style: u && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, a, t) => {
            t.d(a, { Z: () => i });
            t(136728);
            var r = t(202784),
                o = t(387524),
                n = t(635510);
            const d = "/compose/post";
            class l extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: a, history: t } = this.props,
                                r = { pathname: d, state: (a && a()) || {} };
                            t.push(r);
                        });
                }
                render() {
                    const { "aria-label": e, icon: a, label: t, scribeComponent: l } = this.props;
                    return r.createElement(o.Z, { "aria-label": e, href: d, icon: a, label: t, onPress: this._handlePress, scribeComponent: l, testID: n.Z.tweet });
                }
            }
            const i = l;
        },
        32677: (e, a, t) => {
            t.d(a, { Z: () => u });
            var r = t(202784),
                o = t(332920),
                n = t.n(o),
                d = t(186444),
                l = t(355883);
            const i = n().j0179e90,
                s = n().ee69d769({ verb: "" }),
                c = r.createElement(d.default, null),
                u = ({ getLocationState: e, history: a }) => r.createElement(l.Z, { "aria-label": i, getLocationState: e, history: a, icon: c, label: s, scribeComponent: "floating_compose_button" });
        },
        635510: (e, a, t) => {
            t.d(a, { Z: () => r });
            const r = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        652904: (e, a, t) => {
            t.d(a, { Z: () => c });
            var r = t(202784),
                o = t(500002),
                n = t(668214),
                d = t(997174),
                l = t(118823);
            const i = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: d.NH }))
                .withAnalytics();
            class s extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: t, search: r },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: n, search: d },
                            locationKey: l,
                        } = e;
                    let i = !1;
                    a.pathname !== t ? (this._isInBackground = !0) : this._isInBackground && a.pathname === t && ((this._isInBackground = !1), (i = !0));
                    const s = o || l;
                    ((s && o !== l) || (!s && t !== n) || r !== d || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: t, updateTweetDetailNav: r } = e;
                    a.scribePageImpression(), t(a.contextualScribeNamespace, a.contextualScribeData), r(a.contextualScribeNamespace);
                }
            }
            s.defaultProps = { children: null };
            const c = (0, o.ZP)(i(s));
        },
        438965: (e, a, t) => {
            t.d(a, { FE: () => n, Hx: () => i, Oj: () => o, P3: () => s, QO: () => l, j: () => d });
            var r = t(942893);
            const o = { component: "tweet" },
                n = { component: "thread" },
                d = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                l =
                    (e = !1) =>
                    (a) => {
                        const { conversationPosition: t, conversationTreeMetadata: r } = a;
                        return !(e || (t && !t.isEnd && (!r || !1 !== r.descendantConnector || 0 !== r.indents.filter((e) => "line" === e.displayType).length)));
                    },
                i = (e) => r.Z.getTweetURTEntryItem(e),
                s = (e, a, t) => {
                    const r = ["descendant", "ancestor"].includes(t?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === t?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: r, component: a?.component || e.component, action: a?.action || e.action, element: a?.element || e.element };
                };
        },
        506653: (e, a, t) => {
            t.d(a, { Z: () => d });
            var r = t(483557),
                o = t(750085),
                n = t(218951);
            const d = ({ listId: e, useRanked: a = !1 }) => (0, n.Z)({ timelineId: l({ listId: e, useRanked: a }), network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchTweetsGraphQL, getEndpointParams: ({ count: t, cursor: r }) => ({ listId: e, count: t, cursor: "string" == typeof r ? r : void 0, useRanked: a }) }, formatResponse: o.Z, context: "FETCH_LIST_TIMELINE_GRAPHQL", perfKey: "listTweetsGraphQL" });
            function l({ listId: e, useRanked: a = !1 }) {
                return `listTweets-GraphQL-${e}-${a ? "ranked" : "latest"}`;
            }
        },
        237983: (e, a, t) => {
            t.r(a), t.d(a, { HomeTimeline: () => Ca, default: () => Aa });
            var r = t(202784),
                o = t(325686),
                n = t(420412),
                d = t(108362),
                l = t(537392),
                i = t(708852),
                s = t(392237),
                c = t(332920),
                u = t.n(c),
                p = t(323265),
                b = t(718e3),
                m = t(205705),
                h = t(789831),
                g = t(143670),
                f = t(731708),
                S = t(157130),
                D = t(661810),
                y = t(154003),
                w = t(293723),
                C = t(263272),
                M = t(164174),
                A = t(487552),
                E = t(125363),
                v = t(306878);
            const _ = () => {
                    const e = (0, E.v9)(v.wB),
                        a = (0, E.I0)();
                    return [
                        e,
                        r.useCallback(
                            (e) => {
                                a((0, v.iT)(e)), a((0, v.KC)(e));
                            },
                            [a],
                        ),
                    ];
                },
                k = u().g53d5df6,
                T = u().j59f0b94,
                P = ({ setTransitionState: e, transitionState: a }) => {
                    const [t] = _(),
                        [n, d] = r.useState(t),
                        l = r.useCallback(
                            (e, n) => {
                                const l = e === k;
                                return r.createElement(g.Z, {
                                    actionText: r.createElement(o.Z, { style: R.focusedModePopoverMenuItem }, r.createElement(f.ZP, null, e), t === l ? r.createElement(w.default, { style: R.focusedModeGreenCheck }) : r.createElement(C.default, null)),
                                    onClick: () => {
                                        t !== l && "Idle" === a && d(!t), n();
                                    },
                                });
                            },
                            [t, a],
                        );
                    return r.createElement(
                        S.Z,
                        {
                            animationDuration: "normal",
                            onAnimateComplete: () => {
                                t !== n && e(n ? "RotatingToHideSidebar" : "SlidingToHideSearchBar");
                            },
                            preferredHorizontalOrientation: "start",
                            preferredVerticalOrientation: "down",
                            renderContent: (e) => r.createElement(r.Fragment, null, l(T, e), r.createElement(D.Z, { style: R.divider }), l(k, e)),
                            withMask: !0,
                        },
                        r.createElement(y.ZP, { icon: r.createElement(M.default, null), style: R.focusedModeButton }, r.createElement(f.ZP, { style: R.focusedModeButtonText }, n ? k : T), r.createElement(A.default, null)),
                    );
                },
                R = s.default.create((e) => ({ focusedModeButton: { paddingEnd: e.spaces.space12 }, focusedModeButtonText: { marginStart: e.spaces.space4, marginEnd: e.spaces.space8 }, focusedModePopoverMenuItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", padding: e.spaces.space4 }, focusedModeGreenCheck: { color: e.colors.green500 }, divider: { marginHorizontal: e.spaces.space20 } }));
            var B = t(788994),
                Z = t(727828),
                I = t(252021),
                x = t(463236),
                L = t(443781),
                H = t(32677),
                z = (t(136728), t(899667)),
                N = t(507651),
                O = t(952793),
                W = t(655352),
                F = t(872788),
                G = t(71620),
                U = t(668214),
                $ = t(709318),
                j = t(390387);
            const V = (0, U.Z)()
                .propsFromState(() => ({ pinnedTimelines: $.GE, selectedTimeline: $.br, isSubscriber: j.pG, sort: $.sI }))
                .propsFromActions(() => ({ createLocalApiErrorHandlerFetchPins: (0, G.zr)("HOME_TIMELINE_FETCH_PINS"), fetchPinnedTimelinesIfNeeded: $.Mq, updateSettings: $.VP }))
                .withAnalytics();
            var J = t(138099),
                K = t(449479);
            const q = u().a2118086,
                Y = [
                    { label: u().edf7bc2e, value: F.UO.RELEVANCE },
                    { label: u().d16c1ab6, value: F.UO.RECENCY },
                    { label: u().d3619250, value: F.UO.LIKES },
                ];
            function Q({ onChange: e, onDismiss: a, value: t }) {
                return r.createElement(
                    J.Z,
                    { onMaskClick: a, style: X.sheet, type: "bottom", withMask: !0 },
                    r.createElement(f.ZP, { align: "center", size: "headline1", weight: "bold" }, q),
                    r.createElement(K.Z, {
                        name: "sort",
                        onChange: function (t, r) {
                            e(r), a();
                        },
                        options: Y,
                        value: t,
                    }),
                );
            }
            const X = s.default.create((e) => ({ sheet: { padding: e.spaces.space16 } })),
                ee = u().d1e0a75f({ noun: "" }),
                ae = u().dafd69e9({ noun: "" }),
                te = u().d80a1c37({ noun: "" }),
                re = r.createElement(A.default, null),
                oe = r.createElement(z.default, null);
            const ne = s.default.create((e) => ({ tabsContainer: { display: "flex", flexDirection: "row" }, tabs: { flexBasis: 1, flexGrow: 1, paddingEnd: e.spaces.space4 }, rightControlContainer: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, justifyContent: "center", paddingHorizontal: e.spaces.space8 }, focusedModeRightControlContainer: { paddingHorizontal: 0 } })),
                de = V(function ({ analytics: e, createLocalApiErrorHandlerFetchPins: a, fetchPinnedTimelinesIfNeeded: t, isSubscriber: n, onRefresh: d, pinnedTimelines: l, rightControl: i, selectedTimeline: s, sort: c, updateSettings: u }) {
                    const [, p] = r.useTransition(),
                        [b, m] = r.useState(!1),
                        h = r.useRef(0);
                    function g(e) {
                        p(function () {
                            u({ sort: e });
                        });
                    }
                    function f() {
                        m(!1);
                    }
                    function S(a) {
                        const t = a.id === s.id && a.type === s.type,
                            o = a.type === F.Jz.COMMUNITY && t,
                            n = a.name,
                            l = b ? oe : re;
                        return {
                            isActive: () => t,
                            label: o ? r.createElement(r.Fragment, null, n, " ", l) : n,
                            key: `${a.type}${a.id ? `-${a.id}` : ""}`,
                            onClick: () => {
                                if (t) o ? m(!0) : d();
                                else {
                                    const t = Date.now() - h.current,
                                        { name: r, ...o } = a;
                                    p(function () {
                                        u({ selectedTimeline: o });
                                    });
                                    const n = s.type === F.Jz.GENERIC ? s.scribe : F.yu[s.type],
                                        d = a.type === F.Jz.GENERIC ? a.scribe : F.yu[a.type];
                                    e.scribe({ section: n, element: d, action: "switch", data: { duration_ms: t } });
                                }
                            },
                            retainScrollPosition: !1,
                            to: "/home",
                        };
                    }
                    r.useEffect(() => {
                        h.current = Date.now();
                    }, [s]),
                        r.useEffect(() => {
                            t().catch(a());
                        }, [a, t]);
                    const D = [S({ name: ee, type: F.Jz.HOME }), S({ name: ae, type: F.Jz.HOME_LATEST })];
                    n && D.push(S({ name: te, type: F.Jz.CREATOR_SUBSCRIPTIONS })), l.forEach((e) => D.push(S(e)));
                    const y = (0, O.hC)("rweb_sourcemap_migration"),
                        w = (0, O.hC)("rweb_sourcemap_migration_focused_mode") && y;
                    if (D.length < 2) return null;
                    const C = (0, W.ZP)();
                    return i ? r.createElement(o.Z, { style: ne.tabsContainer }, r.createElement(N.Z, { alignFirstItem: C, links: D, style: ne.tabs }), r.createElement(o.Z, { style: [ne.rightControlContainer, w && ne.focusedModeRightControlContainer] }, i), b && r.createElement(Q, { onChange: g, onDismiss: f, value: c })) : r.createElement(r.Fragment, null, r.createElement(N.Z, { alignFirstItem: C, links: D }), b && r.createElement(Q, { onChange: g, onDismiss: f, value: c }));
                });
            var le = t(652904),
                ie = t(614983),
                se = t.n(ie),
                ce = t(933083),
                ue = t(962741),
                pe = t(87063),
                be = t(500002),
                me = t(519896),
                he = t(810641),
                ge = t(438965),
                fe = t(335632);
            const Se = (0, U.Z)().propsFromState(() => ({ selectedTimeline: $.br, sort: $.sI, viewerUserId: j._h }));
            var De = t(807896),
                ye = t(457311),
                we = t(725516);
            const Ce = { header: u().a1ab9c80, message: u().b32c4fb0 },
                Me = { buttonLink: "/i/connect_people", buttonText: u().bf17deda, header: u().defba9a4, message: u().c3fbf1da },
                Ae = { header: u().a2515900, message: u().je23cdb2 };
            function Ee({ timelineType: e }) {
                const a = (0, we.z)(),
                    t = r.useCallback(() => {
                        a.scribe({ action: "click", component: "empty_message", element: "primary_cta" });
                    }, [a]),
                    o = r.useCallback(() => {
                        a.scribe({ action: "impression", component: "empty_message" });
                    }, [a]),
                    n = r.useMemo(() => (e === F.Jz.COMMUNITY ? Ce : e === F.Jz.LIST ? Ae : Me), [e]);
                return r.createElement(ye.Z, (0, De.Z)({ onButtonPress: t, onImpression: o }, n));
            }
            var ve = t(791632);
            var _e = t(985366),
                ke = t(383675),
                Te = t(255117),
                Pe = t(506653),
                Re = t(290297);
            const Be = u().f089620c,
                Ze = (0, be.ZP)(
                    Se(({ history: e, location: a, selectedTimeline: t, sort: o, recordTTFT: n = ce.jN, timelineRef: d, viewerUserId: l }) => {
                        const { featureSwitches: i } = r.useContext(L.rC),
                            s = r.useRef(!0);
                        se()(l, "viewerUserId must be defined");
                        const c = t.type === F.Jz.HOME && i.isTrue("rweb_home_nav_single_direction_scroll_enabled"),
                            u = r.useCallback(
                                ({ entries: e, fetchStatus: a }) => {
                                    if ((a === pe.Z.FAILED && (s.current = !1), s.current && e.length)) {
                                        const a = e.some(({ type: e }) => e === ue.ZP.Tweet);
                                        (s.current = !1), a && (performance?.mark?.("home-entries-rendered"), n());
                                    }
                                },
                                [n],
                            ),
                            b = r.useMemo(
                                () =>
                                    (function ({ history: e, location: a, selectedTimeline: t, sort: r, viewerUserId: o }) {
                                        const n = (0, ve.HD)(e) ? e.location.query.id : void 0,
                                            d = (0, ve.HD)(e) ? e.location.query.mode : void 0,
                                            l = d || t.type,
                                            i = n || t.id,
                                            s = d ? d === F.Jz.HOME_LATEST : t.type === F.Jz.HOME_LATEST;
                                        return l === F.Jz.COMMUNITY && i ? (0, _e.Qx)(String(i), { displayLocation: "Home", rankingMode: r }) : l === F.Jz.CREATOR_SUBSCRIPTIONS ? (0, Re.Z)({ userId: o }) : l === F.Jz.GENERIC && i ? (0, ke.R)(String(i)) : l === F.Jz.LIST && i ? (0, Pe.Z)({ listId: String(i) }) : (0, Te.ZP)({ useLatest: s, userId: o });
                                    })({ history: e, location: a, selectedTimeline: t, sort: o, viewerUserId: l }),
                                [e, a, t, o, l],
                            ),
                            m = r.useCallback(() => r.createElement(Ee, { timelineType: t.type }), [t]),
                            h = r.useMemo(() => (0, fe.G)({ hideReplyContextMode: i.isTrue("rweb_tweets_reply_context_hidden") ? ge.j.TIMELINE : void 0, isCompact: p.ZP.isMobileOS() && i.isTrue("rweb_home_compact_timeline_enabled"), withUserPresence: i.isTrue("responsive_web_audio_space_ring_home_timeline") }), [i]);
                        return r.createElement(he.Z, { entryConfiguration: h, isSingleDirection: c, module: b, onEntriesRendered: u, prerollDisplayLocation: me.Nw.TIMELINE_HOME, renderEmptyState: m, timelineRef: d, title: Be, withNewTweetsPill: !0 });
                    }),
                );
            var Ie = t(791983),
                xe = t(523561),
                Le = t(597496),
                He = t(155727),
                ze = t(618186),
                Ne = t(872405),
                Oe = t(823161),
                We = t(473026),
                Fe = t(937450),
                Ge = t(853485),
                Ue = t(450646),
                $e = t(674306),
                je = t(665468),
                Ve = t(292484),
                Je = t(919022);
            const Ke = (0, U.Z)()
                    .propsFromState(() => ({ viewerUser: Je.ZP.selectViewerUser }))
                    .adjustStateProps(({ viewerUser: e }) => ({ userAvatarURI: e && e.profile_image_url_https, userName: e && e.name })),
                qe = u().ee69d769({ verb: "" }),
                Ye = u().e349147c,
                Qe = r.createElement(We.default, null),
                Xe = r.createElement(Fe.default, null),
                ea = r.createElement(Ge.default, null),
                aa = r.createElement(Ue.default, null),
                ta = r.createElement($e.default, null),
                ra = r.createElement(je.default, null),
                oa = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space8 }, avatarColumn: { paddingTop: 48 - Oe.default.getSizeSimple(Oe.default.defaultSize) + "px" }, avatar: { width: "100%" }, body: { flexDirection: "column", flexGrow: 1 }, fakeInput: { paddingTop: e.spaces.space16, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space2 }, toolbar: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space2, marginTop: e.spaces.space20 }, toolbarSection: { alignItems: "center", flexDirection: "row" }, toolbarSectionWithIconContainer: { alignItems: "center", flexDirection: "row", marginStart: e.spacesPx.space2 }, toolBarButton: { marginHorizontal: 0 }, firstToolBarButton: { marginHorizontal: 0, marginStart: `-${e.spaces.space8}` }, tweetButton: { marginStart: e.spaces.space12 } })),
                na = Ke(({ userAvatarURI: e }) => {
                    const a = r.useMemo(() => r.createElement(He.Z.Consumer, null, ({ avatarSize: a }) => r.createElement(ze.Z, { size: a, style: oa.avatar, uri: e })), [e]),
                        t = !(0, Ve.vS)();
                    return r.createElement(Ne.Z, { avatarCell: a, avatarCellStyle: oa.avatarColumn, cellStyle: oa.body, style: oa.root }, r.createElement(f.ZP, { color: "gray700", numberOfLines: 1, size: "headline1", style: oa.fakeInput }, Ye), r.createElement(o.Z, { style: oa.toolbar }, r.createElement(o.Z, { style: oa.toolbarSectionWithIconContainer }, r.createElement(y.ZP, { disabled: !0, icon: Qe, size: "medium", style: oa.firstToolBarButton, type: "brandText" }), r.createElement(y.ZP, { disabled: !0, icon: Xe, size: "medium", style: oa.toolBarButton, type: "brandText" }), t ? r.createElement(y.ZP, { disabled: !0, icon: ea, size: "medium", style: oa.toolBarButton, type: "brandText" }) : null, r.createElement(y.ZP, { disabled: !0, icon: aa, size: "medium", style: oa.toolBarButton, type: "brandText" }), t ? r.createElement(y.ZP, { disabled: !0, icon: ta, size: "medium", style: oa.toolBarButton, type: "brandText" }) : null, r.createElement(y.ZP, { disabled: !0, icon: ra, size: "medium", style: oa.toolBarButton, type: "brandText" })), r.createElement(o.Z, { style: oa.toolbarSection }, r.createElement(y.ZP, { disabled: !0, style: oa.tweetButton, type: "primaryFilled" }, qe))));
                }),
                da = (0, xe.Z)({
                    loader: () =>
                        (Le.H1.preload() || Promise.resolve()).then(() =>
                            Promise.all([
                                t.e("icons.5"),
                                t.e("icons.12"),
                                t.e("icons.20"),
                                t.e("icons.0"),
                                t.e("icons.21"),
                                t.e("icons.28"),
                                t.e("icons.17"),
                                t.e("modules.common-e907d115"),
                                t.e("modules.common-e019dbda"),
                                t.e("icons.22"),
                                t.e("icons.25"),
                                t.e("modules.audio-6107ac1a"),
                                t.e("modules.audio-b953418a"),
                                t.e("modules.audio-7c51e6a7"),
                                t.e("modules.audio-04db59e9"),
                                t.e("modules.audio-76583d6c"),
                                t.e("modules.audio-b7a8a5fb"),
                                t.e("modules.audio-51f6e793"),
                                t.e("modules.audio-e019dbda"),
                                t.e("modules.audio-262c94d4"),
                                t.e("modules.audio-c6fe4ea4"),
                                t.e("icons.24"),
                                t.e("icons.14"),
                                t.e("icons.23"),
                                t.e("icons.1"),
                                t.e("icons.18"),
                                t.e("icons.8"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-34cda585"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1bce2d5d"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9e2532"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b73bd0e3"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e0a7c12b"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-627162af"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-286dfed9"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-162a9ab0"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-cbd8f64c"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f943ab46"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-91216611"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                                t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                                t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                                t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                                t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                                t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                                t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                                t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                                t.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                                t.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                                t.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                                t.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                                t.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                                t.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~bundle"),
                                t.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-a25e0877"),
                                t.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-0a1983f3"),
                                t.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-49ce3a1b"),
                                t.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-a9a3eb61"),
                                t.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-0657330d"),
                                t.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-76dc24ae"),
                                t.e("shared~bundle.AccountVerification~bundle.SettingsProfile~bundle.UserLists~loader.MediaPickerWithPreview~bundl"),
                                t.e("shared~bundle.Compose~bundle.ConversationWithRelay~bundle.Conversation~bundle.RichTextCompose"),
                                t.e("shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose"),
                                t.e("shared~bundle.Compose~bundle.RichTextCompose-bc6ccf4c"),
                                t.e("shared~bundle.Compose~bundle.RichTextCompose-a2dee9c7"),
                                t.e("shared~bundle.Compose~bundle.RichTextCompose-42018f38"),
                                t.e("shared~bundle.Compose~bundle.RichTextCompose-07b0deba"),
                                t.e("shared~bundle.Compose~bundle.RichTextCompose-0fb8c86a"),
                                t.e("shared~bundle.Compose~bundle.RichTextCompose-e6266db0"),
                                t.e("bundle.RichTextCompose"),
                            ]).then(t.bind(t, 728455)),
                        ),
                    renderPlaceholder: () => r.createElement(na, null),
                });
            var la = t(880647),
                ia = t(485785);
            const sa = () =>
                    ca()
                        ? t
                              .e("ondemand.framerateTracking")
                              .then(t.bind(t, 172004))
                              .then(({ default: e }) => e)
                        : Promise.resolve(void 0),
                ca = () => window.performance && "function" == typeof window.performance.now;
            var ua = t(293115),
                pa = t(521514);
            const ba = 200,
                ma = 100,
                ha = (e) => {
                    const [a, t] = _(),
                        [o, n] = r.useState("Idle"),
                        [d, l] = r.useState(a),
                        i = ga(e),
                        [s, c] = r.useState(null),
                        [u, p] = r.useState(null);
                    return (
                        r.useLayoutEffect(() => {
                            "Idle" !== o && a !== d && (a ? (c(i.Primary_MountingFocusedLayout), n("SlidingToShowSearchBar")) : (p(i.Sidebar_MountingDefaultLayout), c(i.Primary_MountingDefaultLayout), n("RotatingToShowSidebar")), l(a));
                        }, [a, d, o, i.Sidebar_MountingDefaultLayout, i.Primary_MountingDefaultLayout, i.Primary_MountingFocusedLayout]),
                        r.useLayoutEffect(() => {
                            switch (o) {
                                case "RotatingToHideSidebar":
                                    p(i.Sidebar_RotatingToHideSidebar), c(i.Primary_RotatingToHideSidebar), setTimeout(() => t(!0), ba);
                                    break;
                                case "SlidingToShowSearchBar":
                                    c(i.Primary_SlidingToShowSearchBar), setTimeout(() => n("Idle"), ma);
                                    break;
                                case "SlidingToHideSearchBar":
                                    c(i.Primary_SlidingToHideSearchBar), setTimeout(() => t(!1), ma);
                                    break;
                                case "RotatingToShowSidebar":
                                    p(i.Sidebar_RotatingToShowSidebar), c(i.Primary_RotatingToShowSidebar), setTimeout(() => n("Idle"), ba);
                                    break;
                                default:
                                    c(null), p(null);
                            }
                        }, [t, o, i.Sidebar_RotatingToHideSidebar, i.Primary_RotatingToHideSidebar, i.Sidebar_RotatingToShowSidebar, i.Primary_RotatingToShowSidebar, i.Primary_SlidingToShowSearchBar, i.Primary_SlidingToHideSearchBar]),
                        [o, n, s, u]
                    );
                },
                ga = (e) => {
                    const a = pa.Z.columnWidthsRedesign.secondary.normal,
                        t = e ? pa.Z.sideNavWidthsRedesign.expanded : pa.Z.sideNavWidthsRedesign.collapsed.normal;
                    return r.useMemo(
                        () =>
                            s.default.create((e) => {
                                const r = (a - t) / 2,
                                    o = (a + t) / 2,
                                    n = e.componentDimensions.appBarHeightPx + e.spacesPx.space16;
                                return { Sidebar_RotatingToHideSidebar: { transformOrigin: "center 50vh", transition: "scale 200ms ease-out, translate 200ms ease-in", scale: 0.8, translate: -o }, Primary_RotatingToHideSidebar: { transition: "translate 200ms ease-in", translate: r, backgroundColor: e.colors.cellBackground }, Primary_MountingFocusedLayout: { translate: `0 -${n}px` }, Primary_SlidingToShowSearchBar: { translate: 0, transition: "translate 100ms ease-in-out" }, Primary_SlidingToHideSearchBar: { translate: `0 -${n}px`, transition: "translate 100ms ease-in-out" }, Primary_MountingDefaultLayout: { translate: r }, Sidebar_MountingDefaultLayout: { translate: -o, scale: 0.8 }, Primary_RotatingToShowSidebar: { translate: 0, transition: "translate 200ms ease-out", backgroundColor: e.colors.cellBackground }, Sidebar_RotatingToShowSidebar: { translate: 0, scale: 1, transition: "scale 200ms ease-in, translate 200ms ease-out" } };
                            }),
                        [a, t],
                    );
                };
            var fa = t(936572);
            const Sa = (0, U.Z)()
                    .propsFromState(() => ({ selectedTimeline: $.br, isSideNavExpandedByUser: fa.op }))
                    .withAnalytics({ page: "home" }),
                Da = u().ha8209bc,
                ya = r.createElement(Ie.c, null),
                wa = r.createElement(b.Z, null);
            function Ca({ analytics: e, history: a, isSideNavExpandedByUser: t, location: s, selectedTimeline: c }) {
                const { featureSwitches: u, isRestrictedSession: b, userClaims: g } = (0, L.QZ)(),
                    f = r.useRef(performance?.mark?.("home-page-init-start")),
                    S = r.useRef(null),
                    D = r.useRef(!1),
                    y = r.useRef(1 / 0),
                    w = r.useRef(null),
                    C = c.type === F.FO.COMMUNITY;
                r.useEffect(
                    () => (
                        (D.current = !0),
                        f.current && performance?.measure?.("home-page-init", "home-page-init-start"),
                        () => {
                            D.current = !1;
                        }
                    ),
                    [],
                ),
                    r.useEffect(() => {
                        function e() {
                            y.current = Date.now();
                        }
                        function a() {
                            const e = Date.now() - y.current;
                            u.isTrue("rweb_home_nav_single_direction_scroll_enabled") || (e > 1e3 * u.getNumberValue("rweb_home_refetch_on_refocus_min_delay_seconds", 30) && w.current?.fetchTop({ onlyIfStale: !0 }));
                        }
                        return (
                            window.addEventListener("blur", e),
                            window.addEventListener("focus", a),
                            () => {
                                window.removeEventListener("blur", e), window.removeEventListener("focus", a);
                            }
                        );
                    }, [u]),
                    r.useEffect(() => {
                        if (u.isTrue("responsive_web_framerate_tracking_home_enabled")) {
                            const e = `home${p.ZP.isDesktopOS() ? "" : "_mobile"}`;
                            sa().then((a) => {
                                D.current && a && (S.current = a({ reportNamespace: e }));
                            });
                        }
                        return () => {
                            S.current?.stop();
                        };
                    }, [u]);
                const M = r.useCallback(() => {
                        w.current?.refreshOrGoTop();
                    }, [w]),
                    A = r.useCallback(
                        (e) => {
                            w.current = e;
                        },
                        [w],
                    ),
                    E = r.useMemo(() => r.createElement(r.Fragment, null, !(0, W.ZP)() || b || C ? null : r.createElement(r.Fragment, null, r.createElement(da, { history: a, location: s }), r.createElement(n.Z, { isSlim: !0 })), r.createElement(h.Z, { component: d.Z, fab: r.createElement(H.Z, { history: a }) }, r.createElement(Ze, { timelineRef: A }))), [a, C, b, s, A]),
                    v = { page: "home", section: c.type === F.Jz.GENERIC ? c.scribe : F.yu[c.type] },
                    k = !(0, W.ZP)(),
                    T = k ? r.createElement(m.Z, { style: Ma.icon }) : void 0,
                    R = k ? null : Da,
                    z = u.isTrue("rweb_sourcemap_migration"),
                    N = u.isTrue("rweb_sourcemap_migration_focused_mode"),
                    O = g.isAnyPremiumSubscriber(),
                    [G, U] = (0, l.Zx)(({ windowWidth: e }) => [la.Z.isOneColumnViewportCenteredSquishedLayoutRedesign(e, !!t), la.Z.isTwoColumnOrWiderLayoutRedesign(e, !!t)]),
                    $ = z && N && O && U,
                    [j] = _(),
                    V = (0, i.$u)(),
                    [J, K, q, Y] = ha(!!t),
                    Q = r.useMemo(() => r.createElement(de, { onRefresh: M, rightControl: $ && r.createElement(P, { setTransitionState: K, transitionState: J }) }), [K, $, J, M]),
                    X = r.useMemo(() => {
                        if (k && !g.isAnyPremiumSubscriber()) {
                            if (u.isTrue("subscriptions_upsells_home_nav_migration_enabled")) return r.createElement(x.Z, { surfaceKey: "HomeNav" });
                            if ("" !== u.getStringValue("subscriptions_upsells_premium_home_nav")) return r.createElement(o.Z, { style: Ma.upsellContainer }, r.createElement(Z.Z, { variant: "HomeNav" }));
                        }
                        return null;
                    }, [k, g, u]),
                    ee = r.useMemo(() => r.createElement(o.Z, { style: [Ma.searchContainer, ia.W.contentOneColumnRedesign, G && Ma.squished, q] }, r.createElement(Le.Rj, { shouldHandleSearchShortcut: !0 })), [G, q]);
                return r.createElement(ua.nO, { namespace: v }, r.createElement(le.Z, { locationKey: v.page }, $ && j && ee, r.createElement(I.Z, { centeredLogo: T, disjointHeader: ya, documentTitle: Da, history: a, onTabRefresh: M, primaryContent: E, primaryContentStyles: $ && q, rightControl: X, secondaryBar: Q, sidebarContent: $ && j ? null : r.createElement(o.Z, { style: $ && Y }, wa), title: R, withAppBar: !V }), $ && j && !G && r.createElement(o.Z, { style: Ma.floatingFooter }, r.createElement(B.Z, { align: "right", itemLayout: "vertical", withOverflow: !0 }))));
            }
            const Ma = s.default.create((e) => ({ icon: { flexGrow: 1, height: "1.75rem", color: e.colors.brandColor }, upsellContainer: { maxWidth: "100%" }, searchContainer: { alignItems: "center", backfaceVisibility: "hidden", backgroundColor: e.colors.cellBackground, flexDirection: "row", height: e.componentDimensions.appBarHeight, minHeight: e.spaces.space32, top: 0, zIndex: e.componentZIndices.appBarZIndex, paddingHorizontal: e.spaces.space16, marginTop: e.spaces.space16 }, floatingFooter: { position: "fixed", bottom: e.spaces.space20, end: 0 }, squished: { maxWidth: "100%" } })),
                Aa = Sa(Ca);
        },
        392027: (e, a, t) => {
            t.d(a, { Z: () => i });
            var r = t(202784),
                o = t(154003),
                n = t(392237);
            class d extends r.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: a, color: t, disabled: n, href: d, icon: i, label: s, onPress: c, renderMenu: u, style: p, testID: b } = this.props,
                        m = ((e, a) => ("primary" === e && "white" === a ? "whiteOnColor" : "white" === e && "primary" === a ? "primaryOnWhite" : a))(a, t);
                    return r.createElement(o.ZP, { "aria-label": e, backgroundColor: a, color: m, disabled: n, icon: i, link: d, onPress: c, renderMenu: u, size: "xLarge", style: [l.root, !s && l.iconOnly, p], testID: b }, s);
                }
            }
            d.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const l = n.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                i = d;
        },
        420412: (e, a, t) => {
            t.d(a, { Z: () => i });
            var r = t(202784),
                o = t(325686),
                n = t(235902),
                d = t(885015),
                l = t(392237);
            function i({ borderColor: e = "borderColor", isSlim: a = !1, label: t }) {
                const { isWebRedesign: i } = n.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? s[e] : { backgroundColor: l.default.theme.colors[e] ?? l.default.theme.colors.borderColor };
                return t ? r.createElement(d.Z, { style: !a && s.root, withGutter: !0 }, r.createElement(o.Z, { style: s.gapColumn }, r.createElement(o.Z, { style: [s.gap, c] })), r.createElement(o.Z, { style: s.gapText }, t), r.createElement(o.Z, { style: s.gapColumn }, r.createElement(o.Z, { style: [s.gap, c] }))) : r.createElement(o.Z, { style: [!a && s.root, i() && s.rootRedesign, s.gap, c] });
            }
            const s = l.default.create((e) => ({ borderColor: { backgroundColor: l.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: l.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, a, t) => {
            t.d(a, { Z: () => s });
            var r = t(807896),
                o = t(202784),
                n = t(325686),
                d = t(392237);
            class l extends o.Component {
                render() {
                    const { children: e, style: a, withGutter: t, ...d } = this.props,
                        l = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, i.column, t && i.withGutterColumn] }));
                    return o.createElement(n.Z, (0, r.Z)({ style: [a, i.root, t && i.withGutter] }, d), l);
                }
            }
            l.defaultProps = { withGutter: !1 };
            const i = d.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                s = l;
        },
        449479: (e, a, t) => {
            t.d(a, { Z: () => S });
            var r = t(202784),
                o = t(325686),
                n = t(913973),
                d = t(731708),
                l = t(950822),
                i = t(466792),
                s = t(58881),
                c = t(530732),
                u = t(352924),
                p = t(392237);
            class b extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: a, onChange: t } = this.props;
                            t && !a && t(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": a, checked: t, disabled: u, helpText: b, label: h, name: g, testID: f } = this.props,
                        S = s.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        D = s.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        y = t ? S : D;
                    return r.createElement(i.Z, { disabled: u }, (i) => r.createElement(o.Z, { role: "label", style: [m.root, !u && m.interactive], testID: f }, r.createElement(o.Z, { style: m.topContainer }, r.createElement(d.ZP, { id: this.labelId }, h), r.createElement(o.Z, { style: m.radioContainer }, r.createElement(c.Z, { interactiveStyles: y, interactivityState: i, style: m.radioBackground }, r.createElement(o.Z, { style: [m.circle, t && m.circleActive, u && m.circleDisabled, t && u && m.circleCheckedAndDisabled] }, t ? r.createElement(n.default, { style: m.checkMark }) : null)), (0, l.Z)("input", { "aria-posinset": e, "aria-setsize": a, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: t, disabled: u, name: g, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), b ? r.createElement(d.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, b) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            b.defaultProps = { disabled: !1, checked: !1 };
            const m = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                h = b,
                g = "radioGroup";
            let f = 1;
            class S extends r.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: a, onChange: t } = this.props;
                            t(a, e);
                        }),
                        (this._setRadioRef = (e, a) => (t) => {
                            (this._radioRefs[e] = t), a && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                a = e ? this._radioRefs[e] : this._radioRefs[0];
                            a && a.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${f}_LABEL`),
                        (f += 1);
                }
                render() {
                    const { "aria-label": e, description: a, disabled: t, label: n, name: l, options: i, value: s } = this.props;
                    return r.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": n && !e ? this._labelId : void 0, role: "radiogroup", style: t && D.disabled, testID: `${g}${l}` },
                        n ? r.createElement(o.Z, { id: this._labelId, role: "label", style: D.header }, r.createElement(d.ZP, { style: D.label, weight: "bold" }, n), a ? r.createElement(d.ZP, { color: "gray700", size: "subtext2" }, a) : null) : null,
                        i.map((e, a) => r.createElement(h, { "aria-posinset": a + 1, "aria-setsize": i.length, checked: e.value === s, disabled: t, helpText: e.helpText, key: e.value, label: e.label, name: l, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(a, e.value === s), testID: e.testID })),
                    );
                }
            }
            S.defaultProps = { disabled: !1 };
            const D = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, a, t) => {
            t.d(a, { Z: () => E });
            var r = t(807896),
                o = t(202784),
                n = t(194504),
                d = t(235902),
                l = t(392237),
                i = t(325686),
                s = t(332920),
                c = t.n(s),
                u = t(912021),
                p = t(516951),
                b = t(731708),
                m = t(310088),
                h = t(175993),
                g = t(58881),
                f = t(530732);
            const S = c().d2414d31,
                D = () => c().ce4e85ae,
                y = c().fb9f6f39;
            class w extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, a) => {
                            const { pathname: t, query: r, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: t, query: r, method: "push", state: { ...o, lockScroll: a } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, a, t, r) => {
                            const o = l.default.theme.colors.text,
                                n = l.default.theme.colors.gray700;
                            return t || r ? (e || a ? o : n) : e ? o : n;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: a } = this.props;
                            a && a(e);
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
                    const { Icon: e, "aria-label": a, badgeCount: t, badgePip: r, children: n, color: d, isActive: s, isCompact: c, isPillLink: u, isRoundedRect: p, isWebRedesign: h, retainScrollPosition: w, style: M, to: A } = this.props,
                        { location: E } = this.state,
                        v = A ? this._getMemoizedLink(A, w) : void 0,
                        _ = s ? s(A) : E?.pathname === v?.pathname,
                        k = g.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0 }),
                        T = h ? "medium" : _ ? "bold" : "medium";
                    return o.createElement(f.Z, { "aria-label": a, "aria-selected": _, focusable: !!_, interactiveStyles: k, link: v, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? C.pill : C.link, u && _ ? C.active : null, c ? (u ? C.compactPill : C.compactLink) : null, p ? C.roundedRect : null, M], withoutInteractiveStyles: h || u }, ({ isFocused: a, isHovered: s }) => o.createElement(i.Z, { style: u && C.flexGrow }, o.createElement(b.ZP, { size: h ? "headline2" : void 0, style: [C.text, { color: this._getTextColor(_, s, h, u) }, c && C.compactText, h && a && C.focusedText], weight: T }, e && o.createElement(e, { style: C.icon }), n, h || u ? null : o.createElement(i.Z, { style: _ && [C.border, { backgroundColor: l.default.theme.colors[d] }] })), t ? o.createElement(m.Z, { count: t, standalone: !0, style: [C.badge, t >= 10 && C.multiDigitBadge, t >= 20 && C.truncatedCountBadge], truncatedCountFormatter: y, unreadCountLabel: S, withBorder: !1 }) : r ? o.createElement(m.Z, { pip: !0, standalone: !0, style: C.badgePip, textColor: "red500", unreadCountLabel: D, withBorder: !1 }) : null));
                }
            }
            (w.contextType = h.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const C = l.default.create((e) => ({
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
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                M = w,
                A = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                E = ({ alignFirstItem: e, "aria-label": a, isCompact: t, isPillLink: l, isRoundedRect: i, links: s, style: c, visibleItemIndex: u }) => {
                    const p = s
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: b } = d.ZP.useProps(),
                        m = b() && !l,
                        h = o.useMemo(
                            () =>
                                s.filter(Boolean).map(({ label: a, viewType: n, ...d }, s) => {
                                    const c = m ? [A.linkRedesign, 0 === s && A.firstLinkRedesign, e && 0 === s && A.withNoPaddingStart] : void 0;
                                    return o.createElement(M, (0, r.Z)({ viewType: n }, d, { isCompact: t, isPillLink: l, isRoundedRect: i, isWebRedesign: m, style: c }), a);
                                }),
                            [e, t, l, i, m, s],
                        );
                    return o.createElement(n.Z, { "aria-label": a, buttonsContainerStyle: l && A.gap, childrenStyle: !m && A.flexGrow, key: p, style: [l ? null : A.segmentedControl, m && A.leftAligned, c], visibleItemIndex: u }, h);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.HomeTimeline.11e758ca.js.map
