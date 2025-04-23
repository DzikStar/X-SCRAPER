"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.HomeTimeline"],
    {
        789831: (e, a, t) => {
            t.d(a, { Z: () => s });
            var r = t(807896),
                n = t(202784),
                o = t(325686),
                d = t(392237),
                i = t(655352);
            const l = d.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                s = ({ children: e, component: a, fab: t, shouldRenderFab: d = !0, style: s, withoutBottomPadding: c, ...u }) => {
                    const p = a || o.Z,
                        b = d && !(0, i.ZP)();
                    return n.createElement(p, (0, r.Z)({}, u, { style: [b && !c && l.root, s] }), e, b ? t : null);
                };
        },
        341979: (e, a, t) => {
            t.d(a, { Z: () => N });
            var r = t(202784),
                n = t(325686),
                o = t(73664),
                d = t(952793),
                i = t(293115),
                l = t(725405);
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
            const h = ({ buttonProps: e, destinationLink: a, onDestinationClick: t, renderProperties: { action_label: n } }) => r.createElement(m.ZP, { link: a, onClick: t, type: e?.type }, n);
            var f = t(731708),
                g = t(392237);
            const D = ({ destinationLink: e, onDestinationClick: a, renderProperties: { cta: t, primary_label: o, secondary_label: d } }) => r.createElement(n.Z, { style: S.card }, r.createElement(f.ZP, { size: "headline1", weight: "heavy" }, o), d ? r.createElement(f.ZP, null, d) : null, r.createElement(h, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: a, renderProperties: t })),
                S = g.default.create((e) => ({ card: { gap: e.spaces.space12, alignItems: "flex-start", borderRadius: e.borderRadii.large, backgroundColor: e.colors.cellBackground, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } })),
                y = ({ destinationLink: e, onDestinationClick: a, renderProperties: t }) => {
                    const o = r.useMemo(() => {
                        const n = { destinationLink: e, onDestinationClick: a };
                        switch (t.__typename) {
                            case "UpsellButtonRenderProperties":
                                return r.createElement(h, (0, b.Z)({}, n, { renderProperties: t }));
                            case "UpsellCardRenderProperties":
                                return r.createElement(D, (0, b.Z)({}, n, { renderProperties: t }));
                            default:
                                return null;
                        }
                    }, [t, e, a]);
                    return r.createElement(n.Z, { testID: `super-upsell-${t.__typename}` }, o);
                },
                C = ({ attributionParams: e, trackClick: a, trackImpression: t, upsellContent: n }) => {
                    const s = (0, l.Z)(),
                        c = r.useRef(),
                        u = (0, o.R)(c, { threshold: 1 }),
                        b = (0, d.hC)("subscriptions_upsells_track_interactions_enabled");
                    r.useEffect(() => {
                        u && (b ? t() : s.scribeAction("impression"));
                    }, [u, s, t, b]);
                    const m = p(e, n.destination),
                        h = r.useCallback(() => {
                            b ? a() : s.scribeAction("click");
                        }, [s, a, b]);
                    return r.createElement("div", { ref: c }, r.createElement(i.nO, { data: { referer: e.referrer }, namespace: { component: "unified-upsell" } }, r.createElement(y, { destinationLink: m, onDestinationClick: h, renderProperties: n.render_properties })));
                },
                w = (e) => r.createElement(i.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell" } }, r.createElement(C, e));
            var M = t(443781),
                k = t(125363),
                A = t(390387);
            const v = (e, a) => {
                if (!e) return null;
                const {
                    value: { default_content: t, variant_config: r },
                } = e;
                let n = t;
                if (r) {
                    const e = a.getStringValue(r.ddg_experiment_gate, void 0),
                        t = r?.variants.find((a) => a.key === e);
                    t && (n = t);
                }
                return n;
            };
            var E,
                _,
                T = {
                    fragment: {
                        argumentDefinitions: (E = [
                            { defaultValue: null, kind: "LocalArgument", name: "interactionType" },
                            { defaultValue: null, kind: "LocalArgument", name: "surfaceKey" },
                            { defaultValue: null, kind: "LocalArgument", name: "upsellContentKey" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useSuperUpsellTrackingMutation",
                        selections: (_ = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "interaction_type", variableName: "interactionType" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "surface_key", variableName: "surfaceKey" },
                                    { kind: "Variable", name: "upsell_content_key", variableName: "upsellContentKey" },
                                ],
                                kind: "ScalarField",
                                name: "user_upsell_interact",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: E, kind: "Operation", name: "useSuperUpsellTrackingMutation", selections: _ },
                    params: { id: "l9d9OtMg46Lt3efR1aqgEg", metadata: {}, name: "useSuperUpsellTrackingMutation", operationKind: "mutation", text: null },
                };
            T.hash = "e05753868b52fdcfa31057ee6aa957ff";
            const P = T;
            t(585488);
            var R = t(351743),
                B = t.n(R),
                Z = t(516951);
            const I = P,
                x = ({ attributionParams: e, surfaceKey: a, upsellContentKey: t }) => {
                    const [n] = B()(I),
                        o = (0, l.Z)(),
                        d = r.useCallback(
                            (r) => () => {
                                const d = "unified-upsell",
                                    i = { referer: e?.referrer };
                                switch (r) {
                                    case "Impression":
                                        o.scribe({ component: d, action: "impression", data: i });
                                        break;
                                    case "Dismiss":
                                        o.scribe({ component: d, action: "dismiss", data: i });
                                        break;
                                    case "Click":
                                        o.scribe({ component: d, action: "click", data: i });
                                }
                                n({ variables: { surfaceKey: a, upsellContentKey: t, interactionType: r }, onCompleted: Z.Z, onError: Z.Z });
                            },
                            [n, a, t, o, e],
                        );
                    return { trackImpression: r.useMemo(() => d("Impression"), [d]), trackDismiss: r.useMemo(() => d("Dismiss"), [d]), trackClick: r.useMemo(() => d("Click"), [d]) };
                },
                L = (e) => {
                    const { featureSwitches: a } = (0, M.QZ)(),
                        t = (0, k.v9)(A.as),
                        r = t?.find((a) => a.key === e),
                        n = r?.value.attribution_params,
                        o = v(r, a),
                        { trackClick: d, trackDismiss: i, trackImpression: l } = x({ upsellContentKey: o?.key || "undefined", surfaceKey: e, attributionParams: n });
                    return { attributionParams: n, upsellContent: o, trackClick: d, trackImpression: l, trackDismiss: i };
                },
                H = ({ attributionParams: e, surfaceKey: a, trackClick: t, trackDismiss: n, trackImpression: o, upsellContent: d }) => r.useMemo(() => r.createElement(w, { attributionParams: e, trackClick: t, trackDismiss: n, trackImpression: o, upsellContent: d }), [e, t, n, o, d]),
                z = ({ surfaceKey: e, wrapperStyles: a }) => {
                    const { attributionParams: t, trackClick: o, trackDismiss: d, trackImpression: i, upsellContent: l } = L(e);
                    return r.useMemo(() => (l && t ? r.createElement(n.Z, { style: a }, r.createElement(H, { attributionParams: t, surfaceKey: e, trackClick: o, trackDismiss: d, trackImpression: i, upsellContent: l })) : null), [t, l, e, o, d, i, a]);
                },
                N = r.memo(z);
        },
        507651: (e, a, t) => {
            t.d(a, { Z: () => s });
            var r = t(807896),
                n = t(202784),
                o = t(107267),
                d = t(403556),
                i = t(791632);
            const l = (e) => {
                    const a = (0, o.useHistory)();
                    return n.createElement(d.Z, (0, r.Z)({}, e, { isCompact: (0, i.HD)(a) }));
                },
                s = n.memo(l);
        },
        387524: (e, a, t) => {
            t.d(a, { Z: () => h });
            var r = t(807896),
                n = t(202784),
                o = t(325686),
                d = t(292627),
                i = t(537392),
                l = t(392237),
                s = t(365023),
                c = t(392027),
                u = t(774654),
                p = t(725516),
                b = t(443781);
            const m = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                h = (e) => {
                    const { "aria-label": a, label: t, onPress: h, scribeComponent: f, ...g } = e,
                        { loggedInUserId: D } = n.useContext(b.rC),
                        S = (0, p.z)(),
                        y = n.useCallback(
                            (e) => {
                                S.scribe({ component: f, action: "click" }), h && h(e);
                            },
                            [S, h, f],
                        ),
                        C = u.ZM.useCollapsibleNavBars(),
                        w = [...u.Ah({ elementPosition: "bottom" }), C && m.fabStaysAboveSafeArea];
                    return D
                        ? n.createElement(
                              d.Z.FloatingAction,
                              null,
                              n.createElement(i.ZP, null, ({ windowWidth: e }) => {
                                  const d = e > l.default.theme.breakpoints.large,
                                      i = e > l.default.theme.breakpoints.medium,
                                      u = e < l.default.theme.breakpoints.micro,
                                      p = [m.root, i && m.rootMedium, d && m.rootLarge],
                                      b = [m.fab, d && m.fabLarge, u && m.fabMicro, w];
                                  return n.createElement(
                                      o.Z,
                                      { "aria-label": a, pointerEvents: "box-none", role: "complementary", style: p },
                                      n.createElement(s.Z, { id: "FloatingActionButtonBase" }, (e, i) => n.createElement(o.Z, (0, r.Z)({ ref: e() }, i({ style: b })), n.createElement(c.Z, (0, r.Z)({}, g, { "aria-label": a, label: d ? t : void 0, onPress: y, style: u && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, a, t) => {
            t.d(a, { Z: () => l });
            t(136728);
            var r = t(202784),
                n = t(387524),
                o = t(635510);
            const d = "/compose/post";
            class i extends r.PureComponent {
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
                    const { "aria-label": e, icon: a, label: t, scribeComponent: i } = this.props;
                    return r.createElement(n.Z, { "aria-label": e, href: d, icon: a, label: t, onPress: this._handlePress, scribeComponent: i, testID: o.Z.tweet });
                }
            }
            const l = i;
        },
        32677: (e, a, t) => {
            t.d(a, { Z: () => u });
            var r = t(202784),
                n = t(674132),
                o = t.n(n),
                d = t(186444),
                i = t(355883);
            const l = o().j0179e90,
                s = o().ee69d769({ verb: "" }),
                c = r.createElement(d.default, null),
                u = ({ getLocationState: e, history: a }) => r.createElement(i.Z, { "aria-label": l, getLocationState: e, history: a, icon: c, label: s, scribeComponent: "floating_compose_button" });
        },
        635510: (e, a, t) => {
            t.d(a, { Z: () => r });
            const r = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        652904: (e, a, t) => {
            t.d(a, { Z: () => c });
            var r = t(202784),
                n = t(500002),
                o = t(668214),
                d = t(997174),
                i = t(118823);
            const l = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: d.NH }))
                .withAnalytics();
            class s extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: t, search: r },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: o, search: d },
                            locationKey: i,
                        } = e;
                    let l = !1;
                    a.pathname !== t ? (this._isInBackground = !0) : this._isInBackground && a.pathname === t && ((this._isInBackground = !1), (l = !0));
                    const s = n || i;
                    ((s && n !== i) || (!s && t !== o) || r !== d || l) && this._performPageUpdates(this.props);
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
            const c = (0, n.ZP)(l(s));
        },
        438965: (e, a, t) => {
            t.d(a, { FE: () => o, Hx: () => l, Oj: () => n, P3: () => s, QO: () => i, j: () => d });
            var r = t(942893);
            const n = { component: "tweet" },
                o = { component: "thread" },
                d = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                i =
                    (e = !1) =>
                    (a) => {
                        const { conversationPosition: t, conversationTreeMetadata: r } = a;
                        return !(e || (t && !t.isEnd && (!r || !1 !== r.descendantConnector || 0 !== r.indents.filter((e) => "line" === e.displayType).length)));
                    },
                l = (e) => r.Z.getTweetURTEntryItem(e),
                s = (e, a, t) => {
                    const r = ["descendant", "ancestor"].includes(t?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === t?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: r, component: a?.component || e.component, action: a?.action || e.action, element: a?.element || e.element };
                };
        },
        506653: (e, a, t) => {
            t.d(a, { Z: () => d });
            var r = t(483557),
                n = t(750085),
                o = t(218951);
            const d = ({ listId: e, useRanked: a = !1 }) => (0, o.Z)({ timelineId: i({ listId: e, useRanked: a }), network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchTweetsGraphQL, getEndpointParams: ({ count: t, cursor: r }) => ({ listId: e, count: t, cursor: "string" == typeof r ? r : void 0, useRanked: a }) }, formatResponse: n.Z, context: "FETCH_LIST_TIMELINE_GRAPHQL", perfKey: "listTweetsGraphQL" });
            function i({ listId: e, useRanked: a = !1 }) {
                return `listTweets-GraphQL-${e}-${a ? "ranked" : "latest"}`;
            }
        },
        237983: (e, a, t) => {
            t.r(a), t.d(a, { HomeTimeline: () => wa, default: () => ka });
            var r = t(202784),
                n = t(325686),
                o = t(420412),
                d = t(108362),
                i = t(537392),
                l = t(708852),
                s = t(392237),
                c = t(674132),
                u = t.n(c),
                p = t(323265),
                b = t(718e3),
                m = t(205705),
                h = t(789831),
                f = t(143670),
                g = t(731708),
                D = t(157130),
                S = t(661810),
                y = t(154003),
                C = t(293723),
                w = t(263272),
                M = t(164174),
                k = t(487552),
                A = t(125363),
                v = t(306878);
            const E = () => {
                    const e = (0, A.v9)(v.wB),
                        a = (0, A.I0)();
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
                _ = u().g53d5df6,
                T = u().j59f0b94,
                P = ({ setTransitionState: e, transitionState: a }) => {
                    const [t] = E(),
                        [o, d] = r.useState(t),
                        i = r.useCallback(
                            (e, o) => {
                                const i = e === _;
                                return r.createElement(f.Z, {
                                    actionText: r.createElement(n.Z, { style: R.focusedModePopoverMenuItem }, r.createElement(g.ZP, null, e), t === i ? r.createElement(C.default, { style: R.focusedModeGreenCheck }) : r.createElement(w.default, null)),
                                    onClick: () => {
                                        t !== i && "Idle" === a && d(!t), o();
                                    },
                                });
                            },
                            [t, a],
                        );
                    return r.createElement(
                        D.Z,
                        {
                            animationDuration: "normal",
                            onAnimateComplete: () => {
                                t !== o && e(o ? "RotatingToHideSidebar" : "SlidingToHideSearchBar");
                            },
                            preferredHorizontalOrientation: "start",
                            preferredVerticalOrientation: "down",
                            renderContent: (e) => r.createElement(r.Fragment, null, i(T, e), r.createElement(S.Z, { style: R.divider }), i(_, e)),
                            withMask: !0,
                        },
                        r.createElement(y.ZP, { icon: r.createElement(M.default, null), style: R.focusedModeButton }, r.createElement(g.ZP, { style: R.focusedModeButtonText }, o ? _ : T), r.createElement(k.default, null)),
                    );
                },
                R = s.default.create((e) => ({ focusedModeButton: { paddingEnd: e.spaces.space12 }, focusedModeButtonText: { marginStart: e.spaces.space4, marginEnd: e.spaces.space8 }, focusedModePopoverMenuItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", padding: e.spaces.space4 }, focusedModeGreenCheck: { color: e.colors.green500 }, divider: { marginHorizontal: e.spaces.space20 } }));
            var B = t(788994),
                Z = t(252021),
                I = t(341979),
                x = t(316732),
                L = t(443781),
                H = t(32677),
                z = (t(136728), t(899667)),
                N = t(507651),
                W = t(952793),
                O = t(655352),
                F = t(872788),
                G = t(71620),
                U = t(668214),
                $ = t(709318),
                V = t(390387);
            const j = (0, U.Z)()
                .propsFromState(() => ({ pinnedTimelines: $.GE, selectedTimeline: $.br, isSubscriber: V.pG, sort: $.sI }))
                .propsFromActions(() => ({ createLocalApiErrorHandlerFetchPins: (0, G.zr)("HOME_TIMELINE_FETCH_PINS"), fetchPinnedTimelinesIfNeeded: $.Mq, updateSettings: $.VP }))
                .withAnalytics();
            var K = t(138099),
                J = t(449479);
            const q = u().a2118086,
                Y = [
                    { label: u().edf7bc2e, value: F.UO.RELEVANCE },
                    { label: u().d16c1ab6, value: F.UO.RECENCY },
                    { label: u().d3619250, value: F.UO.LIKES },
                ];
            function Q({ onChange: e, onDismiss: a, value: t }) {
                return r.createElement(
                    K.Z,
                    { onMaskClick: a, style: X.sheet, type: "bottom", withMask: !0 },
                    r.createElement(g.ZP, { align: "center", size: "headline1", weight: "bold" }, q),
                    r.createElement(J.Z, {
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
                re = r.createElement(k.default, null),
                ne = r.createElement(z.default, null);
            const oe = s.default.create((e) => ({ tabsContainer: { display: "flex", flexDirection: "row" }, tabs: { flexBasis: 1, flexGrow: 1, paddingEnd: e.spaces.space4 }, rightControlContainer: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, justifyContent: "center", paddingHorizontal: e.spaces.space8 }, focusedModeRightControlContainer: { paddingHorizontal: 0 } })),
                de = j(function ({ analytics: e, createLocalApiErrorHandlerFetchPins: a, fetchPinnedTimelinesIfNeeded: t, isSubscriber: o, onRefresh: d, pinnedTimelines: i, rightControl: l, selectedTimeline: s, sort: c, updateSettings: u }) {
                    const [, p] = r.useTransition(),
                        [b, m] = r.useState(!1),
                        h = r.useRef(0);
                    function f(e) {
                        p(function () {
                            u({ sort: e });
                        });
                    }
                    function g() {
                        m(!1);
                    }
                    function D(a) {
                        const t = a.id === s.id && a.type === s.type,
                            n = a.type === F.Jz.COMMUNITY && t,
                            o = a.name,
                            i = b ? ne : re;
                        return {
                            isActive: () => t,
                            label: n ? r.createElement(r.Fragment, null, o, " ", i) : o,
                            key: `${a.type}${a.id ? `-${a.id}` : ""}`,
                            onClick: () => {
                                if (t) n ? m(!0) : d();
                                else {
                                    const t = Date.now() - h.current,
                                        { name: r, ...n } = a;
                                    p(function () {
                                        u({ selectedTimeline: n });
                                    });
                                    const o = s.type === F.Jz.GENERIC ? s.scribe : F.yu[s.type],
                                        d = a.type === F.Jz.GENERIC ? a.scribe : F.yu[a.type];
                                    e.scribe({ section: o, element: d, action: "switch", data: { duration_ms: t } });
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
                    const S = [D({ name: ee, type: F.Jz.HOME }), D({ name: ae, type: F.Jz.HOME_LATEST })];
                    o && S.push(D({ name: te, type: F.Jz.CREATOR_SUBSCRIPTIONS })), i.forEach((e) => S.push(D(e)));
                    const y = (0, W.hC)("rweb_sourcemap_migration"),
                        C = (0, W.hC)("rweb_sourcemap_migration_focused_mode") && y;
                    if (S.length < 2) return null;
                    const w = (0, O.ZP)();
                    return l ? r.createElement(n.Z, { style: oe.tabsContainer }, r.createElement(N.Z, { alignFirstItem: w, links: S, style: oe.tabs }), r.createElement(n.Z, { style: [oe.rightControlContainer, C && oe.focusedModeRightControlContainer] }, l), b && r.createElement(Q, { onChange: f, onDismiss: g, value: c })) : r.createElement(r.Fragment, null, r.createElement(N.Z, { alignFirstItem: w, links: S }), b && r.createElement(Q, { onChange: f, onDismiss: g, value: c }));
                });
            var ie = t(652904),
                le = t(614983),
                se = t.n(le),
                ce = t(933083),
                ue = t(962741),
                pe = t(87063),
                be = t(500002),
                me = t(519896),
                he = t(810641),
                fe = t(438965),
                ge = t(335632);
            const De = (0, U.Z)().propsFromState(() => ({ selectedTimeline: $.br, sort: $.sI, viewerUserId: V._h }));
            var Se = t(807896),
                ye = t(457311),
                Ce = t(725516);
            const we = { header: u().a1ab9c80, message: u().b32c4fb0 },
                Me = { buttonLink: "/i/connect_people", buttonText: u().bf17deda, header: u().defba9a4, message: u().c3fbf1da },
                ke = { header: u().a2515900, message: u().je23cdb2 };
            function Ae({ timelineType: e }) {
                const a = (0, Ce.z)(),
                    t = r.useCallback(() => {
                        a.scribe({ action: "click", component: "empty_message", element: "primary_cta" });
                    }, [a]),
                    n = r.useCallback(() => {
                        a.scribe({ action: "impression", component: "empty_message" });
                    }, [a]),
                    o = r.useMemo(() => (e === F.Jz.COMMUNITY ? we : e === F.Jz.LIST ? ke : Me), [e]);
                return r.createElement(ye.Z, (0, Se.Z)({ onButtonPress: t, onImpression: n }, o));
            }
            var ve = t(791632);
            var Ee = t(985366),
                _e = t(383675),
                Te = t(255117),
                Pe = t(506653),
                Re = t(290297);
            const Be = u().f089620c,
                Ze = (0, be.ZP)(
                    De(({ history: e, location: a, selectedTimeline: t, sort: n, recordTTFT: o = ce.jN, timelineRef: d, viewerUserId: i }) => {
                        const { featureSwitches: l } = r.useContext(L.rC),
                            s = r.useRef(!0);
                        se()(i, "viewerUserId must be defined");
                        const c = t.type === F.Jz.HOME && l.isTrue("rweb_home_nav_single_direction_scroll_enabled"),
                            u = r.useCallback(
                                ({ entries: e, fetchStatus: a }) => {
                                    if ((a === pe.Z.FAILED && (s.current = !1), s.current && e.length)) {
                                        const a = e.some(({ type: e }) => e === ue.ZP.Tweet);
                                        (s.current = !1), a && (performance?.mark?.("home-entries-rendered"), o());
                                    }
                                },
                                [o],
                            ),
                            b = r.useMemo(
                                () =>
                                    (function ({ history: e, location: a, selectedTimeline: t, sort: r, viewerUserId: n }) {
                                        const o = (0, ve.HD)(e) ? e.location.query.id : void 0,
                                            d = (0, ve.HD)(e) ? e.location.query.mode : void 0,
                                            i = d || t.type,
                                            l = o || t.id,
                                            s = d ? d === F.Jz.HOME_LATEST : t.type === F.Jz.HOME_LATEST;
                                        return i === F.Jz.COMMUNITY && l ? (0, Ee.Qx)(String(l), { displayLocation: "Home", rankingMode: r }) : i === F.Jz.CREATOR_SUBSCRIPTIONS ? (0, Re.Z)({ userId: n }) : i === F.Jz.GENERIC && l ? (0, _e.R)(String(l)) : i === F.Jz.LIST && l ? (0, Pe.Z)({ listId: String(l) }) : (0, Te.ZP)({ useLatest: s, userId: n });
                                    })({ history: e, location: a, selectedTimeline: t, sort: n, viewerUserId: i }),
                                [e, a, t, n, i],
                            ),
                            m = r.useCallback(() => r.createElement(Ae, { timelineType: t.type }), [t]),
                            h = r.useMemo(() => (0, ge.G)({ hideReplyContextMode: l.isTrue("rweb_tweets_reply_context_hidden") ? fe.j.TIMELINE : void 0, isCompact: p.ZP.isMobileOS() && l.isTrue("rweb_home_compact_timeline_enabled"), withUserPresence: l.isTrue("responsive_web_audio_space_ring_home_timeline") }), [l]);
                        return r.createElement(he.Z, { entryConfiguration: h, isSingleDirection: c, module: b, onEntriesRendered: u, prerollDisplayLocation: me.Nw.TIMELINE_HOME, renderEmptyState: m, timelineRef: d, title: Be, withNewTweetsPill: !0 });
                    }),
                );
            var Ie = t(791983),
                xe = t(523561),
                Le = t(597496),
                He = t(155727),
                ze = t(618186),
                Ne = t(872405),
                We = t(823161),
                Oe = t(473026),
                Fe = t(937450),
                Ge = t(853485),
                Ue = t(450646),
                $e = t(674306),
                Ve = t(665468),
                je = t(292484),
                Ke = t(919022);
            const Je = (0, U.Z)()
                    .propsFromState(() => ({ viewerUser: Ke.ZP.selectViewerUser }))
                    .adjustStateProps(({ viewerUser: e }) => ({ userAvatarURI: e && e.profile_image_url_https, userName: e && e.name })),
                qe = u().ee69d769({ verb: "" }),
                Ye = u().e349147c,
                Qe = r.createElement(Oe.default, null),
                Xe = r.createElement(Fe.default, null),
                ea = r.createElement(Ge.default, null),
                aa = r.createElement(Ue.default, null),
                ta = r.createElement($e.default, null),
                ra = r.createElement(Ve.default, null),
                na = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space8 }, avatarColumn: { paddingTop: 48 - We.default.getSizeSimple(We.default.defaultSize) + "px" }, avatar: { width: "100%" }, body: { flexDirection: "column", flexGrow: 1 }, fakeInput: { paddingTop: e.spaces.space16, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space2 }, toolbar: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space2, marginTop: e.spaces.space20 }, toolbarSection: { alignItems: "center", flexDirection: "row" }, toolbarSectionWithIconContainer: { alignItems: "center", flexDirection: "row", marginStart: e.spacesPx.space2 }, toolBarButton: { marginHorizontal: 0 }, firstToolBarButton: { marginHorizontal: 0, marginStart: `-${e.spaces.space8}` }, tweetButton: { marginStart: e.spaces.space12 } })),
                oa = Je(({ userAvatarURI: e }) => {
                    const a = r.useMemo(() => r.createElement(He.Z.Consumer, null, ({ avatarSize: a }) => r.createElement(ze.Z, { size: a, style: na.avatar, uri: e })), [e]),
                        t = !(0, je.vS)();
                    return r.createElement(Ne.Z, { avatarCell: a, avatarCellStyle: na.avatarColumn, cellStyle: na.body, style: na.root }, r.createElement(g.ZP, { color: "gray700", numberOfLines: 1, size: "headline1", style: na.fakeInput }, Ye), r.createElement(n.Z, { style: na.toolbar }, r.createElement(n.Z, { style: na.toolbarSectionWithIconContainer }, r.createElement(y.ZP, { disabled: !0, icon: Qe, size: "medium", style: na.firstToolBarButton, type: "brandText" }), r.createElement(y.ZP, { disabled: !0, icon: Xe, size: "medium", style: na.toolBarButton, type: "brandText" }), t ? r.createElement(y.ZP, { disabled: !0, icon: ea, size: "medium", style: na.toolBarButton, type: "brandText" }) : null, r.createElement(y.ZP, { disabled: !0, icon: aa, size: "medium", style: na.toolBarButton, type: "brandText" }), t ? r.createElement(y.ZP, { disabled: !0, icon: ta, size: "medium", style: na.toolBarButton, type: "brandText" }) : null, r.createElement(y.ZP, { disabled: !0, icon: ra, size: "medium", style: na.toolBarButton, type: "brandText" })), r.createElement(n.Z, { style: na.toolbarSection }, r.createElement(y.ZP, { disabled: !0, style: na.tweetButton, type: "primaryFilled" }, qe))));
                }),
                da = (0, xe.Z)({
                    loader: () =>
                        (Le.H1.preload() || Promise.resolve()).then(() =>
                            Promise.all([
                                t.e("icons.5"),
                                t.e("icons.6"),
                                t.e("icons.25"),
                                t.e("icons.15"),
                                t.e("icons.20"),
                                t.e("icons.0"),
                                t.e("modules.common-e907d115"),
                                t.e("modules.common-e019dbda"),
                                t.e("icons.11"),
                                t.e("icons.27"),
                                t.e("icons.17"),
                                t.e("icons.12"),
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
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2f4a3d25"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aeee0c9e"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                                t.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"),
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
                                t.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2b309ab6"),
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
                                t.e("shared~bundle.Compose~bundle.ConversationWithRelay~bundle.Conversation~bundle.RichTextCompose"),
                                t.e("shared~bundle.AccountVerification~bundle.SettingsProfile~loader.MediaPickerWithPreview~bundle.RichTextCompose"),
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
                    renderPlaceholder: () => r.createElement(oa, null),
                });
            var ia = t(880647),
                la = t(485785);
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
                    const [a, t] = E(),
                        [n, o] = r.useState("Idle"),
                        [d, i] = r.useState(a),
                        l = fa(e),
                        [s, c] = r.useState(null),
                        [u, p] = r.useState(null);
                    return (
                        r.useLayoutEffect(() => {
                            "Idle" !== n && a !== d && (a ? (c(l.Primary_MountingFocusedLayout), o("SlidingToShowSearchBar")) : (p(l.Sidebar_MountingDefaultLayout), c(l.Primary_MountingDefaultLayout), o("RotatingToShowSidebar")), i(a));
                        }, [a, d, n, l.Sidebar_MountingDefaultLayout, l.Primary_MountingDefaultLayout, l.Primary_MountingFocusedLayout]),
                        r.useLayoutEffect(() => {
                            switch (n) {
                                case "RotatingToHideSidebar":
                                    p(l.Sidebar_RotatingToHideSidebar), c(l.Primary_RotatingToHideSidebar), setTimeout(() => t(!0), ba);
                                    break;
                                case "SlidingToShowSearchBar":
                                    c(l.Primary_SlidingToShowSearchBar), setTimeout(() => o("Idle"), ma);
                                    break;
                                case "SlidingToHideSearchBar":
                                    c(l.Primary_SlidingToHideSearchBar), setTimeout(() => t(!1), ma);
                                    break;
                                case "RotatingToShowSidebar":
                                    p(l.Sidebar_RotatingToShowSidebar), c(l.Primary_RotatingToShowSidebar), setTimeout(() => o("Idle"), ba);
                                    break;
                                default:
                                    c(null), p(null);
                            }
                        }, [t, n, l.Sidebar_RotatingToHideSidebar, l.Primary_RotatingToHideSidebar, l.Sidebar_RotatingToShowSidebar, l.Primary_RotatingToShowSidebar, l.Primary_SlidingToShowSearchBar, l.Primary_SlidingToHideSearchBar]),
                        [n, o, s, u]
                    );
                },
                fa = (e) => {
                    const a = pa.Z.columnWidthsRedesign.secondary.normal,
                        t = e ? pa.Z.sideNavWidthsRedesign.expanded : pa.Z.sideNavWidthsRedesign.collapsed.normal;
                    return r.useMemo(
                        () =>
                            s.default.create((e) => {
                                const r = (a - t) / 2,
                                    n = (a + t) / 2,
                                    o = e.componentDimensions.appBarHeightPx + e.spacesPx.space16;
                                return { Sidebar_RotatingToHideSidebar: { transformOrigin: "center 50vh", transition: "scale 200ms ease-out, translate 200ms ease-in", scale: 0.8, translate: -n }, Primary_RotatingToHideSidebar: { transition: "translate 200ms ease-in", translate: r, backgroundColor: e.colors.cellBackground }, Primary_MountingFocusedLayout: { translate: `0 -${o}px` }, Primary_SlidingToShowSearchBar: { translate: 0, transition: "translate 100ms ease-in-out" }, Primary_SlidingToHideSearchBar: { translate: `0 -${o}px`, transition: "translate 100ms ease-in-out" }, Primary_MountingDefaultLayout: { translate: r }, Sidebar_MountingDefaultLayout: { translate: -n, scale: 0.8 }, Primary_RotatingToShowSidebar: { translate: 0, transition: "translate 200ms ease-out", backgroundColor: e.colors.cellBackground }, Sidebar_RotatingToShowSidebar: { translate: 0, scale: 1, transition: "scale 200ms ease-in, translate 200ms ease-out" } };
                            }),
                        [a, t],
                    );
                };
            var ga = t(936572);
            const Da = (0, U.Z)()
                    .propsFromState(() => ({ selectedTimeline: $.br, isSideNavExpandedByUser: ga.op }))
                    .withAnalytics({ page: "home" }),
                Sa = u().ha8209bc,
                ya = r.createElement(Ie.c, null),
                Ca = r.createElement(b.Z, null);
            function wa({ analytics: e, history: a, isSideNavExpandedByUser: t, location: s, selectedTimeline: c }) {
                const { featureSwitches: u, isRestrictedSession: b, userClaims: f } = (0, L.QZ)(),
                    g = r.useRef(performance?.mark?.("home-page-init-start")),
                    D = r.useRef(null),
                    S = r.useRef(!1),
                    y = r.useRef(1 / 0),
                    C = r.useRef(null),
                    w = c.type === F.FO.COMMUNITY;
                r.useEffect(
                    () => (
                        (S.current = !0),
                        g.current && performance?.measure?.("home-page-init", "home-page-init-start"),
                        () => {
                            S.current = !1;
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
                            u.isTrue("rweb_home_nav_single_direction_scroll_enabled") || (e > 1e3 * u.getNumberValue("rweb_home_refetch_on_refocus_min_delay_seconds", 30) && C.current?.fetchTop({ onlyIfStale: !0 }));
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
                                S.current && a && (D.current = a({ reportNamespace: e }));
                            });
                        }
                        return () => {
                            D.current?.stop();
                        };
                    }, [u]);
                const M = r.useCallback(() => {
                        C.current?.refreshOrGoTop();
                    }, [C]),
                    k = r.useCallback(
                        (e) => {
                            C.current = e;
                        },
                        [C],
                    ),
                    A = r.useMemo(() => r.createElement(r.Fragment, null, !(0, O.ZP)() || b || w ? null : r.createElement(r.Fragment, null, r.createElement(da, { history: a, location: s }), r.createElement(o.Z, { isSlim: !0 })), r.createElement(h.Z, { component: d.Z, fab: r.createElement(H.Z, { history: a }) }, r.createElement(Ze, { timelineRef: k }))), [a, w, b, s, k]),
                    v = { page: "home", section: c.type === F.Jz.GENERIC ? c.scribe : F.yu[c.type] },
                    _ = !(0, O.ZP)(),
                    T = _ ? r.createElement(m.Z, { style: Ma.icon }) : void 0,
                    R = _ ? null : Sa,
                    z = u.isTrue("rweb_sourcemap_migration"),
                    N = u.isTrue("rweb_sourcemap_migration_focused_mode"),
                    W = f.isAnyPremiumSubscriber(),
                    [G, U] = (0, i.Zx)(({ windowWidth: e }) => [ia.Z.isOneColumnViewportCenteredSquishedLayoutRedesign(e, !!t), ia.Z.isTwoColumnOrWiderLayoutRedesign(e, !!t)]),
                    $ = z && N && W && U,
                    [V] = E(),
                    j = (0, l.$u)(),
                    [K, J, q, Y] = ha(!!t),
                    Q = r.useMemo(() => r.createElement(de, { onRefresh: M, rightControl: $ && r.createElement(P, { setTransitionState: J, transitionState: K }) }), [J, $, K, M]),
                    X = r.useMemo(() => {
                        if (_ && !f.isAnyPremiumSubscriber()) {
                            if (u.isTrue("subscriptions_upsells_home_nav_migration_enabled")) return r.createElement(I.Z, { surfaceKey: "HomeNav" });
                            if ("" !== u.getStringValue("subscriptions_upsells_premium_home_nav")) return r.createElement(n.Z, { style: Ma.upsellContainer }, r.createElement(x.Z, { variant: "HomeNav" }));
                        }
                        return null;
                    }, [_, f, u]),
                    ee = r.useMemo(() => r.createElement(n.Z, { style: [Ma.searchContainer, la.W.contentOneColumnRedesign, G && Ma.squished, q] }, r.createElement(Le.Rj, { shouldHandleSearchShortcut: !0 })), [G, q]);
                return r.createElement(ua.nO, { namespace: v }, r.createElement(ie.Z, { locationKey: v.page }, $ && V && ee, r.createElement(Z.Z, { centeredLogo: T, disjointHeader: ya, documentTitle: Sa, history: a, onTabRefresh: M, primaryContent: A, primaryContentStyles: $ && q, rightControl: X, secondaryBar: Q, sidebarContent: $ && V ? null : r.createElement(n.Z, { style: $ && Y }, Ca), title: R, withAppBar: !j }), $ && V && !G && r.createElement(n.Z, { style: Ma.floatingFooter }, r.createElement(B.Z, { align: "right", itemLayout: "vertical", withOverflow: !0 }))));
            }
            const Ma = s.default.create((e) => ({ icon: { flexGrow: 1, height: "1.75rem", color: e.colors.brandColor }, upsellContainer: { maxWidth: "100%" }, searchContainer: { alignItems: "center", backfaceVisibility: "hidden", backgroundColor: e.colors.cellBackground, flexDirection: "row", height: e.componentDimensions.appBarHeight, minHeight: e.spaces.space32, top: 0, zIndex: e.componentZIndices.appBarZIndex, paddingHorizontal: e.spaces.space16, marginTop: e.spaces.space16 }, floatingFooter: { position: "fixed", bottom: e.spaces.space20, end: 0 }, squished: { maxWidth: "100%" } })),
                ka = Da(wa);
        },
        392027: (e, a, t) => {
            t.d(a, { Z: () => l });
            var r = t(202784),
                n = t(154003),
                o = t(392237);
            class d extends r.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: a, color: t, disabled: o, href: d, icon: l, label: s, onPress: c, renderMenu: u, style: p, testID: b } = this.props,
                        m = ((e, a) => ("primary" === e && "white" === a ? "whiteOnColor" : "white" === e && "primary" === a ? "primaryOnWhite" : a))(a, t);
                    return r.createElement(n.ZP, { "aria-label": e, backgroundColor: a, color: m, disabled: o, icon: l, link: d, onPress: c, renderMenu: u, size: "xLarge", style: [i.root, !s && i.iconOnly, p], testID: b }, s);
                }
            }
            d.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const i = o.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = d;
        },
        420412: (e, a, t) => {
            t.d(a, { Z: () => l });
            var r = t(202784),
                n = t(325686),
                o = t(235902),
                d = t(885015),
                i = t(392237);
            function l({ borderColor: e = "borderColor", isSlim: a = !1, label: t }) {
                const { isWebRedesign: l } = o.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? s[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return t ? r.createElement(d.Z, { style: !a && s.root, withGutter: !0 }, r.createElement(n.Z, { style: s.gapColumn }, r.createElement(n.Z, { style: [s.gap, c] })), r.createElement(n.Z, { style: s.gapText }, t), r.createElement(n.Z, { style: s.gapColumn }, r.createElement(n.Z, { style: [s.gap, c] }))) : r.createElement(n.Z, { style: [!a && s.root, l() && s.rootRedesign, s.gap, c] });
            }
            const s = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, a, t) => {
            t.d(a, { Z: () => s });
            var r = t(807896),
                n = t(202784),
                o = t(325686),
                d = t(392237);
            class i extends n.Component {
                render() {
                    const { children: e, style: a, withGutter: t, ...d } = this.props,
                        i = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, l.column, t && l.withGutterColumn] }));
                    return n.createElement(o.Z, (0, r.Z)({ style: [a, l.root, t && l.withGutter] }, d), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const l = d.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                s = i;
        },
        449479: (e, a, t) => {
            t.d(a, { Z: () => D });
            var r = t(202784),
                n = t(325686),
                o = t(913973),
                d = t(731708),
                i = t(950822),
                l = t(466792),
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
                    const { "aria-posinset": e, "aria-setsize": a, checked: t, disabled: u, helpText: b, label: h, name: f, testID: g } = this.props,
                        D = s.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        S = s.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        y = t ? D : S;
                    return r.createElement(l.Z, { disabled: u }, (l) => r.createElement(n.Z, { role: "label", style: [m.root, !u && m.interactive], testID: g }, r.createElement(n.Z, { style: m.topContainer }, r.createElement(d.ZP, { id: this.labelId }, h), r.createElement(n.Z, { style: m.radioContainer }, r.createElement(c.Z, { interactiveStyles: y, interactivityState: l, style: m.radioBackground }, r.createElement(n.Z, { style: [m.circle, t && m.circleActive, u && m.circleDisabled, t && u && m.circleCheckedAndDisabled] }, t ? r.createElement(o.default, { style: m.checkMark }) : null)), (0, i.Z)("input", { "aria-posinset": e, "aria-setsize": a, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: t, disabled: u, name: f, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), b ? r.createElement(d.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, b) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            b.defaultProps = { disabled: !1, checked: !1 };
            const m = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                h = b,
                f = "radioGroup";
            let g = 1;
            class D extends r.Component {
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
                        (this._labelId = `RADIO_GROUP_${g}_LABEL`),
                        (g += 1);
                }
                render() {
                    const { "aria-label": e, description: a, disabled: t, label: o, name: i, options: l, value: s } = this.props;
                    return r.createElement(
                        n.Z,
                        { "aria-label": e, "aria-labelledby": o && !e ? this._labelId : void 0, role: "radiogroup", style: t && S.disabled, testID: `${f}${i}` },
                        o ? r.createElement(n.Z, { id: this._labelId, role: "label", style: S.header }, r.createElement(d.ZP, { style: S.label, weight: "bold" }, o), a ? r.createElement(d.ZP, { color: "gray700", size: "subtext2" }, a) : null) : null,
                        l.map((e, a) => r.createElement(h, { "aria-posinset": a + 1, "aria-setsize": l.length, checked: e.value === s, disabled: t, helpText: e.helpText, key: e.value, label: e.label, name: i, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(a, e.value === s), testID: e.testID })),
                    );
                }
            }
            D.defaultProps = { disabled: !1 };
            const S = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, a, t) => {
            t.d(a, { Z: () => A });
            var r = t(807896),
                n = t(202784),
                o = t(194504),
                d = t(235902),
                i = t(392237),
                l = t(325686),
                s = t(674132),
                c = t.n(s),
                u = t(912021),
                p = t(516951),
                b = t(731708),
                m = t(310088),
                h = t(175993),
                f = t(58881),
                g = t(530732);
            const D = c().d2414d31,
                S = () => c().ce4e85ae,
                y = c().fb9f6f39;
            class C extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, a) => {
                            const { pathname: t, query: r, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: t, query: r, method: "push", state: { ...n, lockScroll: a } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, a, t, r) => {
                            const n = i.default.theme.colors.text,
                                o = i.default.theme.colors.gray700;
                            return t || r ? (e || a ? n : o) : e ? n : o;
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
                    const { Icon: e, "aria-label": a, badgeCount: t, badgePip: r, children: o, color: d, isActive: s, isCompact: c, isPillLink: u, isRoundedRect: p, isWebRedesign: h, retainScrollPosition: C, style: M, to: k } = this.props,
                        { location: A } = this.state,
                        v = k ? this._getMemoizedLink(k, C) : void 0,
                        E = s ? s(k) : A?.pathname === v?.pathname,
                        _ = f.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text, insetFocusRing: !0 }),
                        T = h ? "medium" : E ? "bold" : "medium";
                    return n.createElement(g.Z, { "aria-label": a, "aria-selected": E, focusable: !!E, interactiveStyles: _, link: v, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? w.pill : w.link, u && E ? w.active : null, c ? (u ? w.compactPill : w.compactLink) : null, p ? w.roundedRect : null, M], withoutInteractiveStyles: h || u }, ({ isFocused: a, isHovered: s }) => n.createElement(l.Z, { style: u && w.flexGrow }, n.createElement(b.ZP, { size: h ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(E, s, h, u) }, c && w.compactText, h && a && w.focusedText], weight: T }, e && n.createElement(e, { style: w.icon }), o, h || u ? null : n.createElement(l.Z, { style: E && [w.border, { backgroundColor: i.default.theme.colors[d] }] })), t ? n.createElement(m.Z, { count: t, standalone: !0, style: [w.badge, t >= 10 && w.multiDigitBadge, t >= 20 && w.truncatedCountBadge], truncatedCountFormatter: y, unreadCountLabel: D, withBorder: !1 }) : r ? n.createElement(m.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: S, withBorder: !1 }) : null));
                }
            }
            (C.contextType = h.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const w = i.default.create((e) => ({
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
                M = C,
                k = i.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                A = ({ alignFirstItem: e, "aria-label": a, isCompact: t, isPillLink: i, isRoundedRect: l, links: s, style: c, visibleItemIndex: u }) => {
                    const p = s
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: b } = d.ZP.useProps(),
                        m = b() && !i,
                        h = n.useMemo(
                            () =>
                                s.filter(Boolean).map(({ label: a, viewType: o, ...d }, s) => {
                                    const c = m ? [k.linkRedesign, 0 === s && k.firstLinkRedesign, e && 0 === s && k.withNoPaddingStart] : void 0;
                                    return n.createElement(M, (0, r.Z)({ viewType: o }, d, { isCompact: t, isPillLink: i, isRoundedRect: l, isWebRedesign: m, style: c }), a);
                                }),
                            [e, t, i, l, m, s],
                        );
                    return n.createElement(o.Z, { "aria-label": a, buttonsContainerStyle: i && k.gap, childrenStyle: !m && k.flexGrow, key: p, style: [i ? null : k.segmentedControl, m && k.leftAligned, c], visibleItemIndex: u }, h);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.HomeTimeline.cc6a0dea.js.map
