"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.HomeTimeline", "icons/IconBookmarkCollectionsStroke-js", "icons/IconChevronDown-js", "icons/IconDocument-js", "icons/IconGifPillStroke-js", "icons/IconWriteStroke-js"],
    {
        789831: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(807896),
                o = a(202784),
                n = a(325686),
                l = a(392237),
                s = a(655352);
            const i = l.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                d = ({ children: e, component: t, fab: a, shouldRenderFab: l = !0, style: d, withoutBottomPadding: c, ...u }) => {
                    const m = t || n.Z,
                        p = l && !(0, s.ZP)();
                    return o.createElement(m, (0, r.Z)({}, u, { style: [p && !c && i.root, d] }), e, p ? a : null);
                };
        },
        507651: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(807896),
                o = a(202784),
                n = a(107267),
                l = a(403556),
                s = a(791632);
            const i = (e) => {
                    const t = (0, n.useHistory)(),
                        { isCompact: a, ...i } = e;
                    return o.createElement(l.Z, (0, r.Z)({}, i, { isCompact: a || (0, s.HD)(t) }));
                },
                d = o.memo(i);
        },
        920603: (e, t, a) => {
            a.d(t, { Z: () => I });
            var r = a(202784),
                o = a(325686),
                n = a(73664),
                l = a(952793),
                s = a(293115),
                i = a(725405);
            const d = (e) => {
                    let t = "/i/premium_sign_up";
                    switch (e.product_category) {
                        case "PremiumBasic":
                        case "BlueVerified":
                        case "BlueVerifiedPlus":
                            t = "/i/premium_sign_up";
                            break;
                        case "QuickFreeTrial": {
                            let a = "";
                            if ("NoAds" === e.quick_free_trial_product_type) a = "/no-ads";
                            t = `/i/quick-free-trial${a}`;
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
            var p = a(807896),
                h = a(154003),
                b = a(731708),
                g = a(392237),
                f = a(498514);
            const y = ({ renderProperties: e, wrapperStyles: t }) => {
                    const a = (0, f.U)(e.icon_type),
                        o = e.icon_color ? { color: g.default.theme.colors[e.icon_color] } : null;
                    return r.createElement(a, { style: [t, o, "CircleFill" === e.icon_type ? C.smallIcon : null] });
                },
                C = g.default.create((e) => ({ smallIcon: { height: ".6em" } })),
                D = ({ buttonProps: e, destinationLink: t, onDestinationClick: a, renderProperties: { action_label: n, icon: l } }) => r.createElement(h.ZP, { link: t, onClick: a, type: e?.type }, r.createElement(o.Z, { style: w.buttonInner }, l ? r.createElement(y, { renderProperties: l, wrapperStyles: w.iconWrapper }) : null, r.createElement(b.ZP, null, n))),
                w = g.default.create((e) => ({ buttonInner: { flexDirection: "row", alignItems: "center" }, iconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } }));
            var M = a(992942),
                E = a(439592);
            const S = ({ destinationLink: e, onDestinationClick: t, renderProperties: { cta: a, image_url: n, primary_label: l, primary_label_icon: s, secondary_label: i } }) => {
                    const d = n ? "whiteOnColor" : void 0;
                    return r.createElement(o.Z, { style: k.cardOuter }, n ? r.createElement(M.Z, { aspectMode: E.Z.COVER, source: { uri: n }, style: k.image }) : null, r.createElement(o.Z, { style: k.cardInner }, r.createElement(o.Z, { style: k.primaryLabelContainer }, s ? r.createElement(y, { renderProperties: s, wrapperStyles: k.primaryLabelIconWrapper }) : null, r.createElement(b.ZP, { color: d, size: "headline1", weight: "heavy" }, l)), i ? r.createElement(b.ZP, { color: d }, i) : null, r.createElement(D, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: t, renderProperties: a })));
                },
                k = g.default.create((e) => ({ cardOuter: { borderRadius: e.borderRadii.large, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, backgroundColor: e.colors.cellBackground }, cardInner: { gap: e.spaces.space12, alignItems: "flex-start", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, image: { position: "absolute", width: "100%", height: "100%", borderRadius: e.borderRadii.large }, primaryLabelContainer: { flexDirection: "row", alignItems: "center" }, primaryLabelIconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } })),
                v = ({ destinationLink: e, onDestinationClick: t, renderProperties: a }) => {
                    const n = r.useMemo(() => {
                        const o = { destinationLink: e, onDestinationClick: t };
                        switch (a.__typename) {
                            case "UpsellButtonRenderProperties":
                                return r.createElement(D, (0, p.Z)({}, o, { renderProperties: a }));
                            case "UpsellCardRenderProperties":
                                return r.createElement(S, (0, p.Z)({}, o, { renderProperties: a }));
                            default:
                                return null;
                        }
                    }, [a, e, t]);
                    return r.createElement(o.Z, { testID: `super-upsell-${a.__typename ?? "default"}` }, n);
                },
                _ = ({ attributionParams: e, trackClick: t, trackImpression: a, upsellContent: o }) => {
                    const s = (0, i.Z)(),
                        d = r.useRef(),
                        c = (0, n.R)(d, { threshold: 1 }),
                        u = (0, l.hC)("subscriptions_upsells_track_interactions_enabled");
                    r.useEffect(() => {
                        c && (u ? a() : s.scribeAction("impression"));
                    }, [c, s, a, u]);
                    const p = m(e, o.destination),
                        h = r.useCallback(() => {
                            u ? t() : s.scribeAction("click");
                        }, [s, t, u]);
                    return r.createElement("div", { ref: d }, r.createElement(v, { destinationLink: p, onDestinationClick: h, renderProperties: o.render_properties }));
                },
                T = (e) => r.createElement(s.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell", element: e.upsellContent.key } }, r.createElement(_, e));
            var Z = a(722517);
            const P = ({ attributionParams: e, surfaceKey: t, trackClick: a, trackDismiss: o, trackImpression: n, upsellContent: l }) => r.useMemo(() => r.createElement(T, { attributionParams: e, trackClick: a, trackDismiss: o, trackImpression: n, upsellContent: l }), [e, a, o, n, l]),
                R = ({ surfaceKey: e, wrapperStyles: t }) => {
                    const { attributionParams: a, trackClick: n, trackDismiss: l, trackImpression: s, upsellContent: i } = (0, Z.Z)(e);
                    return r.useMemo(() => (i && a ? r.createElement(o.Z, { style: t }, r.createElement(P, { attributionParams: a, surfaceKey: e, trackClick: n, trackDismiss: l, trackImpression: s, upsellContent: i })) : null), [a, i, e, n, l, s, t]);
                },
                I = r.memo(R);
        },
        387524: (e, t, a) => {
            a.d(t, { Z: () => b });
            var r = a(807896),
                o = a(202784),
                n = a(325686),
                l = a(292627),
                s = a(537392),
                i = a(392237),
                d = a(365023),
                c = a(392027),
                u = a(774654),
                m = a(725516),
                p = a(443781);
            const h = i.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${i.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                b = (e) => {
                    const { "aria-label": t, label: a, onPress: b, scribeComponent: g, ...f } = e,
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
                              l.Z.FloatingAction,
                              null,
                              o.createElement(s.ZP, null, ({ windowWidth: e }) => {
                                  const l = e > i.default.theme.breakpoints.large,
                                      s = e > i.default.theme.breakpoints.medium,
                                      u = e < i.default.theme.breakpoints.micro,
                                      m = [h.root, s && h.rootMedium, l && h.rootLarge],
                                      p = [h.fab, l && h.fabLarge, u && h.fabMicro, M];
                                  return o.createElement(
                                      n.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: m },
                                      o.createElement(d.Z, { id: "FloatingActionButtonBase" }, (e, s) => o.createElement(n.Z, (0, r.Z)({ ref: e() }, s({ style: p })), o.createElement(c.Z, (0, r.Z)({}, f, { "aria-label": t, label: l ? a : void 0, onPress: D, style: u && h.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, a) => {
            a.d(t, { Z: () => i });
            a(136728);
            var r = a(202784),
                o = a(387524),
                n = a(635510);
            const l = "/compose/post";
            class s extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: a } = this.props,
                                r = { pathname: l, state: (t && t()) || {} };
                            a.push(r);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: a, scribeComponent: s } = this.props;
                    return r.createElement(o.Z, { "aria-label": e, href: l, icon: t, label: a, onPress: this._handlePress, scribeComponent: s, testID: n.Z.tweet });
                }
            }
            const i = s;
        },
        32677: (e, t, a) => {
            a.d(t, { Z: () => u });
            var r = a(202784),
                o = a(111677),
                n = a.n(o),
                l = a(186444),
                s = a(355883);
            const i = n().j0179e90,
                d = n().ee69d769({ verb: "" }),
                c = r.createElement(l.default, null),
                u = ({ getLocationState: e, history: t }) => r.createElement(s.Z, { "aria-label": i, getLocationState: e, history: t, icon: c, label: d, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(202784),
                o = a(500002),
                n = a(668214),
                l = a(997174),
                s = a(118823);
            const i = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class d extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: r },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: n, search: l },
                            locationKey: s,
                        } = e;
                    let i = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (i = !0));
                    const d = o || s;
                    ((d && o !== s) || (!d && a !== n) || r !== l || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, o.ZP)(i(d));
        },
        438965: (e, t, a) => {
            a.d(t, { FE: () => n, Hx: () => i, Oj: () => o, P3: () => d, QO: () => s, j: () => l });
            var r = a(942893);
            const o = { component: "tweet" },
                n = { component: "thread" },
                l = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                s =
                    (e = !1) =>
                    (t) => {
                        const { conversationPosition: a, conversationTreeMetadata: r } = t;
                        return !(e || (a && !a.isEnd && (!r || !1 !== r.descendantConnector || 0 !== r.indents.filter((e) => "line" === e.displayType).length)));
                    },
                i = (e) => r.Z.getTweetURTEntryItem(e),
                d = (e, t, a) => {
                    const r = ["descendant", "ancestor"].includes(a?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === a?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: r, component: t?.component || e.component, action: t?.action || e.action, element: t?.element || e.element };
                };
        },
        383675: (e, t, a) => {
            a.d(t, { R: () => i, Z: () => s });
            var r = a(503768),
                o = a(644829),
                n = a(750085),
                l = a(218951);
            const s = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: a, timelineId: r }) => (0, l.Z)({ timelineId: r, isUserRefreshable: a, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchGeneric, getEndpointParams: ({ count: a, cursor: r }) => ({ ...e, cursor: "string" == typeof r ? r : void 0, count: a, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                i = (e, t) => (0, l.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: a }) => ({ cursor: "string" == typeof a ? a : void 0, count: t, timelineId: e }) }, formatResponse: n.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        506653: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(483557),
                o = a(750085),
                n = a(218951);
            const l = ({ listId: e, useRanked: t = !1 }) => (0, n.Z)({ timelineId: s({ listId: e, useRanked: t }), network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchTweetsGraphQL, getEndpointParams: ({ count: a, cursor: r }) => ({ listId: e, count: a, cursor: "string" == typeof r ? r : void 0, useRanked: t }) }, formatResponse: o.Z, context: "FETCH_LIST_TIMELINE_GRAPHQL", perfKey: "listTweetsGraphQL" });
            function s({ listId: e, useRanked: t = !1 }) {
                return `listTweets-GraphQL-${e}-${t ? "ranked" : "latest"}`;
            }
        },
        237983: (e, t, a) => {
            a.r(t), a.d(t, { HomeTimeline: () => Mt, default: () => St });
            var r = a(202784),
                o = a(325686),
                n = a(420412),
                l = a(108362),
                s = a(537392),
                i = a(708852),
                d = a(392237),
                c = a(111677),
                u = a.n(c),
                m = a(323265),
                p = a(718e3),
                h = a(205705),
                b = a(789831),
                g = a(143670),
                f = a(731708),
                y = a(157130),
                C = a(661810),
                D = a(154003),
                w = a(293723),
                M = a(263272),
                E = a(164174),
                S = a(487552),
                k = a(125363),
                v = a(306878);
            const _ = () => {
                    const e = (0, k.v9)(v.wB),
                        t = (0, k.I0)();
                    return [
                        e,
                        r.useCallback(
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
                    const [a] = _(),
                        [n, l] = r.useState(a),
                        s = r.useCallback(
                            (e, n) => {
                                const s = e === T;
                                return r.createElement(g.Z, {
                                    actionText: r.createElement(o.Z, { style: R.focusedModePopoverMenuItem }, r.createElement(f.ZP, null, e), a === s ? r.createElement(w.default, { style: R.focusedModeGreenCheck }) : r.createElement(M.default, null)),
                                    onClick: () => {
                                        a !== s && "Idle" === t && l(!a), n();
                                    },
                                });
                            },
                            [a, t],
                        );
                    return r.createElement(
                        y.Z,
                        {
                            animationDuration: "normal",
                            onAnimateComplete: () => {
                                a !== n && e(n ? "RotatingToHideSidebar" : "SlidingToHideSearchBar");
                            },
                            preferredHorizontalOrientation: "start",
                            preferredVerticalOrientation: "down",
                            renderContent: (e) => r.createElement(r.Fragment, null, s(Z, e), r.createElement(C.Z, { style: R.divider }), s(T, e)),
                            withMask: !0,
                        },
                        r.createElement(D.ZP, { icon: r.createElement(E.default, null), style: R.focusedModeButton }, r.createElement(f.ZP, { style: R.focusedModeButtonText }, n ? T : Z), r.createElement(S.default, null)),
                    );
                },
                R = d.default.create((e) => ({ focusedModeButton: { paddingEnd: e.spaces.space12 }, focusedModeButtonText: { marginStart: e.spaces.space4, marginEnd: e.spaces.space8 }, focusedModePopoverMenuItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", padding: e.spaces.space4 }, focusedModeGreenCheck: { color: e.colors.green500 }, divider: { marginHorizontal: e.spaces.space20 } }));
            var I = a(788994),
                x = a(727828),
                B = a(252021),
                A = a(920603),
                L = a(443781),
                H = a(32677),
                z = (a(136728), a(899667)),
                N = a(507651),
                W = a(952793),
                F = a(655352),
                O = a(872788),
                G = a(71620),
                U = a(668214),
                $ = a(709318),
                j = a(390387);
            const V = (0, U.Z)()
                .propsFromState(() => ({ pinnedTimelines: $.GE, selectedTimeline: $.br, isSubscriber: j.pG, sort: $.sI }))
                .propsFromActions(() => ({ createLocalApiErrorHandlerFetchPins: (0, G.zr)("HOME_TIMELINE_FETCH_PINS"), fetchPinnedTimelinesIfNeeded: $.Mq, updateSettings: $.VP }))
                .withAnalytics();
            var J = a(138099),
                q = a(449479);
            const K = u().a2118086,
                Q = [
                    { label: u().edf7bc2e, value: O.UO.RELEVANCE },
                    { label: u().d16c1ab6, value: O.UO.RECENCY },
                    { label: u().d3619250, value: O.UO.LIKES },
                ];
            function Y({ onChange: e, onDismiss: t, value: a }) {
                return r.createElement(
                    J.Z,
                    { onMaskClick: t, style: X.sheet, type: "bottom", withMask: !0 },
                    r.createElement(f.ZP, { align: "center", size: "headline1", weight: "bold" }, K),
                    r.createElement(q.Z, {
                        name: "sort",
                        onChange: function (a, r) {
                            e(r), t();
                        },
                        options: Q,
                        value: a,
                    }),
                );
            }
            const X = d.default.create((e) => ({ sheet: { padding: e.spaces.space16 } })),
                ee = u().d1e0a75f({ noun: "" }),
                te = u().dafd69e9({ noun: "" }),
                ae = u().d80a1c37({ noun: "" }),
                re = r.createElement(S.default, null),
                oe = r.createElement(z.default, null);
            const ne = d.default.create((e) => ({ tabsContainer: { display: "flex", flexDirection: "row" }, tabs: { flexBasis: 1, flexGrow: 1, paddingEnd: e.spaces.space4 }, rightControlContainer: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, justifyContent: "center", paddingHorizontal: e.spaces.space8 }, focusedModeRightControlContainer: { paddingHorizontal: 0 } })),
                le = V(function ({ analytics: e, createLocalApiErrorHandlerFetchPins: t, fetchPinnedTimelinesIfNeeded: a, isSubscriber: n, onRefresh: l, pinnedTimelines: s, rightControl: i, selectedTimeline: d, sort: c, updateSettings: u }) {
                    const [, m] = r.useTransition(),
                        [p, h] = r.useState(!1),
                        b = r.useRef(0);
                    function g(e) {
                        m(function () {
                            u({ sort: e });
                        });
                    }
                    function f() {
                        h(!1);
                    }
                    function y(t) {
                        const a = t.id === d.id && t.type === d.type,
                            o = t.type === O.Jz.COMMUNITY && a,
                            n = t.name,
                            s = p ? oe : re;
                        return {
                            isActive: () => a,
                            label: o ? r.createElement(r.Fragment, null, n, " ", s) : n,
                            key: `${t.type}${t.id ? `-${t.id}` : ""}`,
                            onClick: () => {
                                if (a) o ? h(!0) : l();
                                else {
                                    const a = Date.now() - b.current,
                                        { name: r, ...o } = t;
                                    m(function () {
                                        u({ selectedTimeline: o });
                                    });
                                    const n = d.type === O.Jz.GENERIC ? d.scribe : O.yu[d.type],
                                        l = t.type === O.Jz.GENERIC ? t.scribe : O.yu[t.type];
                                    e.scribe({ section: n, element: l, action: "switch", data: { duration_ms: a } });
                                }
                            },
                            retainScrollPosition: !1,
                            to: "/home",
                        };
                    }
                    r.useEffect(() => {
                        b.current = Date.now();
                    }, [d]),
                        r.useEffect(() => {
                            a().catch(t());
                        }, [t, a]);
                    const C = [y({ name: ee, type: O.Jz.HOME }), y({ name: te, type: O.Jz.HOME_LATEST })];
                    n && C.push(y({ name: ae, type: O.Jz.CREATOR_SUBSCRIPTIONS })), s.forEach((e) => C.push(y(e)));
                    const D = (0, W.hC)("rweb_sourcemap_migration"),
                        w = (0, W.hC)("rweb_sourcemap_migration_focused_mode") && D;
                    if (C.length < 2) return null;
                    const M = (0, F.ZP)();
                    return i ? r.createElement(o.Z, { style: ne.tabsContainer }, r.createElement(N.Z, { alignFirstItem: M, links: C, style: ne.tabs }), r.createElement(o.Z, { style: [ne.rightControlContainer, w && ne.focusedModeRightControlContainer] }, i), p && r.createElement(Y, { onChange: g, onDismiss: f, value: c })) : r.createElement(r.Fragment, null, r.createElement(N.Z, { alignFirstItem: M, links: C }), p && r.createElement(Y, { onChange: g, onDismiss: f, value: c }));
                });
            var se = a(652904),
                ie = a(614983),
                de = a.n(ie),
                ce = a(933083),
                ue = a(962741),
                me = a(87063),
                pe = a(500002),
                he = a(519896),
                be = a(810641),
                ge = a(438965),
                fe = a(335632);
            const ye = (0, U.Z)().propsFromState(() => ({ selectedTimeline: $.br, sort: $.sI, viewerUserId: j._h }));
            var Ce = a(807896),
                De = a(457311),
                we = a(725516);
            const Me = { header: u().a1ab9c80, message: u().b32c4fb0 },
                Ee = { buttonLink: "/i/connect_people", buttonText: u().bf17deda, header: u().defba9a4, message: u().c3fbf1da },
                Se = { header: u().a2515900, message: u().je23cdb2 };
            function ke({ timelineType: e }) {
                const t = (0, we.z)(),
                    a = r.useCallback(() => {
                        t.scribe({ action: "click", component: "empty_message", element: "primary_cta" });
                    }, [t]),
                    o = r.useCallback(() => {
                        t.scribe({ action: "impression", component: "empty_message" });
                    }, [t]),
                    n = r.useMemo(() => (e === O.Jz.COMMUNITY ? Me : e === O.Jz.LIST ? Se : Ee), [e]);
                return r.createElement(De.Z, (0, Ce.Z)({ onButtonPress: a, onImpression: o }, n));
            }
            var ve = a(791632);
            var _e = a(985366),
                Te = a(383675),
                Ze = a(255117),
                Pe = a(506653),
                Re = a(290297);
            const Ie = u().f089620c,
                xe = (0, pe.ZP)(
                    ye(({ history: e, location: t, selectedTimeline: a, sort: o, recordTTFT: n = ce.jN, timelineRef: l, viewerUserId: s }) => {
                        const { featureSwitches: i } = r.useContext(L.rC),
                            d = r.useRef(!0);
                        de()(s, "viewerUserId must be defined");
                        const c = a.type === O.Jz.HOME && i.isTrue("rweb_home_nav_single_direction_scroll_enabled"),
                            u = r.useCallback(
                                ({ entries: e, fetchStatus: t }) => {
                                    if ((t === me.Z.FAILED && (d.current = !1), d.current && e.length)) {
                                        const t = e.some(({ type: e }) => e === ue.ZP.Tweet);
                                        (d.current = !1), t && (performance?.mark?.("home-entries-rendered"), n());
                                    }
                                },
                                [n],
                            ),
                            p = r.useMemo(
                                () =>
                                    (function ({ history: e, location: t, selectedTimeline: a, sort: r, viewerUserId: o }) {
                                        const n = (0, ve.HD)(e) ? e.location.query.id : void 0,
                                            l = (0, ve.HD)(e) ? e.location.query.mode : void 0,
                                            s = l || a.type,
                                            i = n || a.id,
                                            d = l ? l === O.Jz.HOME_LATEST : a.type === O.Jz.HOME_LATEST;
                                        return s === O.Jz.COMMUNITY && i ? (0, _e.Qx)(String(i), { displayLocation: "Home", rankingMode: r }) : s === O.Jz.CREATOR_SUBSCRIPTIONS ? (0, Re.Z)({ userId: o }) : s === O.Jz.GENERIC && i ? (0, Te.R)(String(i)) : s === O.Jz.LIST && i ? (0, Pe.Z)({ listId: String(i) }) : (0, Ze.ZP)({ useLatest: d, userId: o });
                                    })({ history: e, location: t, selectedTimeline: a, sort: o, viewerUserId: s }),
                                [e, t, a, o, s],
                            ),
                            h = r.useCallback(() => r.createElement(ke, { timelineType: a.type }), [a]),
                            b = r.useMemo(() => (0, fe.G)({ hideReplyContextMode: i.isTrue("rweb_tweets_reply_context_hidden") ? ge.j.TIMELINE : void 0, isCompact: m.ZP.isMobileOS() && i.isTrue("rweb_home_compact_timeline_enabled"), withUserPresence: i.isTrue("responsive_web_audio_space_ring_home_timeline") }), [i]);
                        return r.createElement(be.Z, { entryConfiguration: b, isSingleDirection: c, module: p, onEntriesRendered: u, prerollDisplayLocation: he.Nw.TIMELINE_HOME, renderEmptyState: h, timelineRef: l, title: Ie, withNewTweetsPill: !0 });
                    }),
                );
            var Be = a(791983),
                Ae = a(523561),
                Le = a(597496),
                He = a(155727),
                ze = a(618186),
                Ne = a(872405),
                We = a(823161),
                Fe = a(473026),
                Oe = a(937450),
                Ge = a(853485),
                Ue = a(450646),
                $e = a(674306),
                je = a(665468),
                Ve = a(292484),
                Je = a(919022);
            const qe = (0, U.Z)()
                    .propsFromState(() => ({ viewerUser: Je.ZP.selectViewerUser }))
                    .adjustStateProps(({ viewerUser: e }) => ({ userAvatarURI: e && e.profile_image_url_https, userName: e && e.name })),
                Ke = u().ee69d769({ verb: "" }),
                Qe = u().e349147c,
                Ye = r.createElement(Fe.default, null),
                Xe = r.createElement(Oe.default, null),
                et = r.createElement(Ge.default, null),
                tt = r.createElement(Ue.default, null),
                at = r.createElement($e.default, null),
                rt = r.createElement(je.default, null),
                ot = d.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space8 }, avatarColumn: { paddingTop: 48 - We.default.getSizeSimple(We.default.defaultSize) + "px" }, avatar: { width: "100%" }, body: { flexDirection: "column", flexGrow: 1 }, fakeInput: { paddingTop: e.spaces.space16, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space2 }, toolbar: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space2, marginTop: e.spaces.space20 }, toolbarSection: { alignItems: "center", flexDirection: "row" }, toolbarSectionWithIconContainer: { alignItems: "center", flexDirection: "row", marginStart: e.spacesPx.space2 }, toolBarButton: { marginHorizontal: 0 }, firstToolBarButton: { marginHorizontal: 0, marginStart: `-${e.spaces.space8}` }, tweetButton: { marginStart: e.spaces.space12 } })),
                nt = qe(({ userAvatarURI: e }) => {
                    const t = r.useMemo(() => r.createElement(He.Z.Consumer, null, ({ avatarSize: t }) => r.createElement(ze.Z, { size: t, style: ot.avatar, uri: e })), [e]),
                        a = !(0, Ve.vS)();
                    return r.createElement(Ne.Z, { avatarCell: t, avatarCellStyle: ot.avatarColumn, cellStyle: ot.body, style: ot.root }, r.createElement(f.ZP, { color: "gray700", numberOfLines: 1, size: "headline1", style: ot.fakeInput }, Qe), r.createElement(o.Z, { style: ot.toolbar }, r.createElement(o.Z, { style: ot.toolbarSectionWithIconContainer }, r.createElement(D.ZP, { disabled: !0, icon: Ye, size: "medium", style: ot.firstToolBarButton, type: "brandText" }), r.createElement(D.ZP, { disabled: !0, icon: Xe, size: "medium", style: ot.toolBarButton, type: "brandText" }), a ? r.createElement(D.ZP, { disabled: !0, icon: et, size: "medium", style: ot.toolBarButton, type: "brandText" }) : null, r.createElement(D.ZP, { disabled: !0, icon: tt, size: "medium", style: ot.toolBarButton, type: "brandText" }), a ? r.createElement(D.ZP, { disabled: !0, icon: at, size: "medium", style: ot.toolBarButton, type: "brandText" }) : null, r.createElement(D.ZP, { disabled: !0, icon: rt, size: "medium", style: ot.toolBarButton, type: "brandText" })), r.createElement(o.Z, { style: ot.toolbarSection }, r.createElement(D.ZP, { disabled: !0, style: ot.tweetButton, type: "primaryFilled" }, Ke))));
                }),
                lt = (0, Ae.Z)({
                    loader: () =>
                        (Le.H1.preload() || Promise.resolve()).then(() =>
                            Promise.all([
                                a.e("icons.23"),
                                a.e("icons.0"),
                                a.e("icons.2"),
                                a.e("icons.16"),
                                a.e("icons.19"),
                                a.e("icons.10"),
                                a.e("icons.13"),
                                a.e("icons.24"),
                                a.e("icons.7"),
                                a.e("icons.22"),
                                a.e("icons.27"),
                                a.e("icons.17"),
                                a.e("modules.common-e907d115"),
                                a.e("modules.common-e019dbda"),
                                a.e("icons.11"),
                                a.e("icons.26"),
                                a.e("modules.audio-6107ac1a"),
                                a.e("modules.audio-b953418a"),
                                a.e("modules.audio-7c51e6a7"),
                                a.e("modules.audio-04db59e9"),
                                a.e("modules.audio-76583d6c"),
                                a.e("modules.audio-b7a8a5fb"),
                                a.e("modules.audio-51f6e793"),
                                a.e("modules.audio-e019dbda"),
                                a.e("modules.audio-262c94d4"),
                                a.e("modules.audio-c6fe4ea4"),
                                a.e("icons.8"),
                                a.e("icons.4"),
                                a.e("icons.14"),
                                a.e("icons.28"),
                                a.e("icons.21"),
                                a.e("icons.3"),
                                a.e("icons.1"),
                                a.e("icons.18"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSp"),
                                a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                                a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                                a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                                a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                                a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                                a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                                a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                                a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                                a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                                a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                                a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                                a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                                a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~bundle"),
                                a.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-a25e0877"),
                                a.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-0a1983f3"),
                                a.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-49ce3a1b"),
                                a.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-a9a3eb61"),
                                a.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-7b8626db"),
                                a.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-76dc24ae"),
                                a.e("shared~bundle.Compose~bundle.ConversationWithRelay~bundle.Conversation~bundle.RichTextCompose"),
                                a.e("shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose"),
                                a.e("shared~bundle.Compose~bundle.RichTextCompose-bc6ccf4c"),
                                a.e("shared~bundle.Compose~bundle.RichTextCompose-a2dee9c7"),
                                a.e("shared~bundle.Compose~bundle.RichTextCompose-42018f38"),
                                a.e("shared~bundle.Compose~bundle.RichTextCompose-07b0deba"),
                                a.e("shared~bundle.Compose~bundle.RichTextCompose-0fb8c86a"),
                                a.e("shared~bundle.Compose~bundle.RichTextCompose-e6266db0"),
                                a.e("bundle.RichTextCompose"),
                            ]).then(a.bind(a, 728455)),
                        ),
                    renderPlaceholder: () => r.createElement(nt, null),
                });
            var st = a(880647),
                it = a(485785);
            const dt = () =>
                    ct()
                        ? a
                              .e("ondemand.framerateTracking")
                              .then(a.bind(a, 172004))
                              .then(({ default: e }) => e)
                        : Promise.resolve(void 0),
                ct = () => window.performance && "function" == typeof window.performance.now;
            var ut = a(293115),
                mt = a(521514);
            const pt = 200,
                ht = 100,
                bt = (e) => {
                    const [t, a] = _(),
                        [o, n] = r.useState("Idle"),
                        [l, s] = r.useState(t),
                        i = gt(e),
                        [d, c] = r.useState(null),
                        [u, m] = r.useState(null);
                    return (
                        r.useLayoutEffect(() => {
                            "Idle" !== o && t !== l && (t ? (c(i.Primary_MountingFocusedLayout), n("SlidingToShowSearchBar")) : (m(i.Sidebar_MountingDefaultLayout), c(i.Primary_MountingDefaultLayout), n("RotatingToShowSidebar")), s(t));
                        }, [t, l, o, i.Sidebar_MountingDefaultLayout, i.Primary_MountingDefaultLayout, i.Primary_MountingFocusedLayout]),
                        r.useLayoutEffect(() => {
                            switch (o) {
                                case "RotatingToHideSidebar":
                                    m(i.Sidebar_RotatingToHideSidebar), c(i.Primary_RotatingToHideSidebar), setTimeout(() => a(!0), pt);
                                    break;
                                case "SlidingToShowSearchBar":
                                    c(i.Primary_SlidingToShowSearchBar), setTimeout(() => n("Idle"), ht);
                                    break;
                                case "SlidingToHideSearchBar":
                                    c(i.Primary_SlidingToHideSearchBar), setTimeout(() => a(!1), ht);
                                    break;
                                case "RotatingToShowSidebar":
                                    m(i.Sidebar_RotatingToShowSidebar), c(i.Primary_RotatingToShowSidebar), setTimeout(() => n("Idle"), pt);
                                    break;
                                default:
                                    c(null), m(null);
                            }
                        }, [a, o, i.Sidebar_RotatingToHideSidebar, i.Primary_RotatingToHideSidebar, i.Sidebar_RotatingToShowSidebar, i.Primary_RotatingToShowSidebar, i.Primary_SlidingToShowSearchBar, i.Primary_SlidingToHideSearchBar]),
                        [o, n, d, u]
                    );
                },
                gt = (e) => {
                    const t = mt.Z.columnWidthsRedesign.secondary.normal,
                        a = e ? mt.Z.sideNavWidthsRedesign.expanded : mt.Z.sideNavWidthsRedesign.collapsed.normal;
                    return r.useMemo(
                        () =>
                            d.default.create((e) => {
                                const r = (t - a) / 2,
                                    o = (t + a) / 2,
                                    n = e.componentDimensions.appBarHeightPx + e.spacesPx.space16;
                                return { Sidebar_RotatingToHideSidebar: { transformOrigin: "center 50vh", transition: "scale 200ms ease-out, translate 200ms ease-in", scale: 0.8, translate: -o }, Primary_RotatingToHideSidebar: { transition: "translate 200ms ease-in", translate: r, backgroundColor: e.colors.cellBackground }, Primary_MountingFocusedLayout: { translate: `0 -${n}px` }, Primary_SlidingToShowSearchBar: { translate: 0, transition: "translate 100ms ease-in-out" }, Primary_SlidingToHideSearchBar: { translate: `0 -${n}px`, transition: "translate 100ms ease-in-out" }, Primary_MountingDefaultLayout: { translate: r }, Sidebar_MountingDefaultLayout: { translate: -o, scale: 0.8 }, Primary_RotatingToShowSidebar: { translate: 0, transition: "translate 200ms ease-out", backgroundColor: e.colors.cellBackground }, Sidebar_RotatingToShowSidebar: { translate: 0, scale: 1, transition: "scale 200ms ease-in, translate 200ms ease-out" } };
                            }),
                        [t, a],
                    );
                };
            var ft = a(936572);
            const yt = (0, U.Z)()
                    .propsFromState(() => ({ selectedTimeline: $.br, isSideNavExpandedByUser: ft.op }))
                    .withAnalytics({ page: "home" }),
                Ct = u().ha8209bc,
                Dt = r.createElement(Be.c, null),
                wt = r.createElement(p.Z, null);
            function Mt({ analytics: e, history: t, isSideNavExpandedByUser: a, location: d, selectedTimeline: c }) {
                const { featureSwitches: u, isRestrictedSession: p, userClaims: g } = (0, L.QZ)(),
                    f = r.useRef(performance?.mark?.("home-page-init-start")),
                    y = r.useRef(null),
                    C = r.useRef(!1),
                    D = r.useRef(1 / 0),
                    w = r.useRef(null),
                    M = c.type === O.FO.COMMUNITY;
                r.useEffect(
                    () => (
                        (C.current = !0),
                        f.current && performance?.measure?.("home-page-init", "home-page-init-start"),
                        () => {
                            C.current = !1;
                        }
                    ),
                    [],
                ),
                    r.useEffect(() => {
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
                    r.useEffect(() => {
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
                const E = r.useCallback(() => {
                        w.current?.refreshOrGoTop();
                    }, [w]),
                    S = r.useCallback(
                        (e) => {
                            w.current = e;
                        },
                        [w],
                    ),
                    k = r.useMemo(() => r.createElement(r.Fragment, null, !(0, F.ZP)() || p || M ? null : r.createElement(r.Fragment, null, r.createElement(lt, { history: t, location: d }), r.createElement(n.Z, { isSlim: !0 })), r.createElement(b.Z, { component: l.Z, fab: r.createElement(H.Z, { history: t }) }, r.createElement(xe, { timelineRef: S }))), [t, M, p, d, S]),
                    v = { page: "home", section: c.type === O.Jz.GENERIC ? c.scribe : O.yu[c.type] },
                    T = !(0, F.ZP)(),
                    Z = T ? r.createElement(h.Z, { style: Et.icon }) : void 0,
                    R = T ? null : Ct,
                    z = u.isTrue("rweb_sourcemap_migration"),
                    N = u.isTrue("rweb_sourcemap_migration_focused_mode"),
                    W = g.isAnyPremiumSubscriber(),
                    [G, U] = (0, s.Zx)(({ windowWidth: e }) => [st.Z.isOneColumnViewportCenteredSquishedLayoutRedesign(e, !!a), st.Z.isTwoColumnOrWiderLayoutRedesign(e, !!a)]),
                    $ = z && N && W && U,
                    [j] = _(),
                    V = (0, i.$u)(),
                    [J, q, K, Q] = bt(!!a),
                    Y = r.useMemo(() => r.createElement(le, { onRefresh: E, rightControl: $ && r.createElement(P, { setTransitionState: q, transitionState: J }) }), [q, $, J, E]),
                    X = r.useMemo(() => {
                        if (T && !g.isAnyPremiumSubscriber()) {
                            if (u.isTrue("subscriptions_upsells_home_nav_migration_enabled")) return r.createElement(A.Z, { surfaceKey: "HomeNav" });
                            if ("" !== u.getStringValue("subscriptions_upsells_premium_home_nav")) return r.createElement(o.Z, { style: Et.upsellContainer }, r.createElement(x.Z, { variant: "HomeNav" }));
                        }
                        return null;
                    }, [T, g, u]),
                    ee = r.useMemo(() => r.createElement(o.Z, { style: [Et.searchContainer, it.W.contentOneColumnRedesign, G && Et.squished, K] }, r.createElement(Le.Rj, { shouldHandleSearchShortcut: !0 })), [G, K]);
                return r.createElement(ut.nO, { namespace: v }, r.createElement(se.Z, { locationKey: v.page }, $ && j && ee, r.createElement(B.Z, { centeredLogo: Z, disjointHeader: Dt, documentTitle: Ct, history: t, onTabRefresh: E, primaryContent: k, primaryContentStyles: $ && K, rightControl: X, secondaryBar: Y, sidebarContent: $ && j ? null : r.createElement(o.Z, { style: $ && Q }, wt), title: R, withAppBar: !V }), $ && j && !G && r.createElement(o.Z, { style: Et.floatingFooter }, r.createElement(I.Z, { align: "right", itemLayout: "vertical", withOverflow: !0 }))));
            }
            const Et = d.default.create((e) => ({ icon: { flexGrow: 1, height: "1.75rem", color: e.colors.brandColor }, upsellContainer: { maxWidth: "100%" }, searchContainer: { alignItems: "center", backfaceVisibility: "hidden", backgroundColor: e.colors.cellBackground, flexDirection: "row", height: e.componentDimensions.appBarHeight, minHeight: e.spaces.space32, top: 0, zIndex: e.componentZIndices.appBarZIndex, paddingHorizontal: e.spaces.space16, marginTop: e.spaces.space16 }, floatingFooter: { position: "fixed", bottom: e.spaces.space20, end: 0 }, squished: { maxWidth: "100%" } })),
                St = yt(Mt);
        },
        498514: (e, t, a) => {
            a.d(t, { U: () => T });
            a(202784);
            var r = a(521058),
                o = a(847988),
                n = a(616894),
                l = a(376021),
                s = a(625823),
                i = a(839),
                d = a(266151),
                c = a(468670),
                u = a(913973),
                m = a(1753),
                p = a(748138),
                h = a(53674),
                b = a(164174),
                g = a(926981),
                f = a(642317),
                y = a(28862),
                C = a(376278),
                D = a(511323),
                w = a(254944),
                M = a(465072),
                E = a(189700),
                S = a(520489),
                k = a(297938),
                v = a(136483),
                _ = a(457566);
            const T = (e) => {
                switch (e) {
                    case "Fire":
                        return r.default;
                    case "BookStrokeOn":
                        return o.default;
                    case "No":
                        return n.default;
                    case "WriteStroke":
                        return l.default;
                    case "AccountNft":
                        return s.default;
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
                        return E.default;
                    case "RadarStroke":
                        return S.default;
                    case "SearchPersonStroke":
                        return k.default;
                    case "CircleFill":
                        return v.default;
                    default:
                        return () => null;
                }
            };
        },
        661810: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(202784),
                o = a(325686),
                n = a(392237);
            function l({ spacing: e, style: t }) {
                return r.createElement(o.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        392027: (e, t, a) => {
            a.d(t, { Z: () => i });
            var r = a(202784),
                o = a(154003),
                n = a(392237);
            class l extends r.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: a, disabled: n, href: l, icon: i, label: d, onPress: c, renderMenu: u, style: m, testID: p } = this.props,
                        h = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, a);
                    return r.createElement(o.ZP, { "aria-label": e, backgroundColor: t, color: h, disabled: n, icon: i, link: l, onPress: c, renderMenu: u, size: "xLarge", style: [s.root, !d && s.iconOnly, m], testID: p }, d);
                }
            }
            l.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const s = n.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                i = l;
        },
        420412: (e, t, a) => {
            a.d(t, { Z: () => i });
            var r = a(202784),
                o = a(325686),
                n = a(235902),
                l = a(885015),
                s = a(392237);
            function i({ borderColor: e = "borderColor", isSlim: t = !1, label: a }) {
                const { isWebRedesign: i } = n.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return a ? r.createElement(l.Z, { style: !t && d.root, withGutter: !0 }, r.createElement(o.Z, { style: d.gapColumn }, r.createElement(o.Z, { style: [d.gap, c] })), r.createElement(o.Z, { style: d.gapText }, a), r.createElement(o.Z, { style: d.gapColumn }, r.createElement(o.Z, { style: [d.gap, c] }))) : r.createElement(o.Z, { style: [!t && d.root, i() && d.rootRedesign, d.gap, c] });
            }
            const d = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(807896),
                o = a(202784),
                n = a(325686),
                l = a(392237);
            class s extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...l } = this.props,
                        s = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, i.column, a && i.withGutterColumn] }));
                    return o.createElement(n.Z, (0, r.Z)({ style: [t, i.root, a && i.withGutter] }, l), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const i = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = s;
        },
        449479: (e, t, a) => {
            a.d(t, { Z: () => y });
            var r = a(202784),
                o = a(325686),
                n = a(913973),
                l = a(731708),
                s = a(950822),
                i = a(466792),
                d = a(58881),
                c = a(530732),
                u = a(352924),
                m = a(392237);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: a } = this.props;
                            a && !t && a(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: a, disabled: u, helpText: p, label: b, name: g, testID: f } = this.props,
                        y = d.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = d.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        D = a ? y : C;
                    return r.createElement(i.Z, { disabled: u }, (i) => r.createElement(o.Z, { role: "label", style: [h.root, !u && h.interactive], testID: f }, r.createElement(o.Z, { style: h.topContainer }, r.createElement(l.ZP, { id: this.labelId }, b), r.createElement(o.Z, { style: h.radioContainer }, r.createElement(c.Z, { interactiveStyles: D, interactivityState: i, style: h.radioBackground }, r.createElement(o.Z, { style: [h.circle, a && h.circleActive, u && h.circleDisabled, a && u && h.circleCheckedAndDisabled] }, a ? r.createElement(n.default, { style: h.checkMark }) : null)), (0, s.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: a, disabled: u, name: g, onChange: this._handleChange, ref: this._setRef, style: [h.nativeControl], type: "radio" }))), p ? r.createElement(l.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: h.helpText }, p) : null));
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
            class y extends r.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: a } = this.props;
                            a(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (a) => {
                            (this._radioRefs[e] = a), t && (this._radioRefs.checked = e);
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
                    const { "aria-label": e, description: t, disabled: a, label: n, name: s, options: i, value: d } = this.props;
                    return r.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": n && !e ? this._labelId : void 0, role: "radiogroup", style: a && C.disabled, testID: `${g}${s}` },
                        n ? r.createElement(o.Z, { id: this._labelId, role: "label", style: C.header }, r.createElement(l.ZP, { style: C.label, weight: "bold" }, n), t ? r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        i.map((e, t) => r.createElement(b, { "aria-posinset": t + 1, "aria-setsize": i.length, checked: e.value === d, disabled: a, helpText: e.helpText, key: e.value, label: e.label, name: s, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === d), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = m.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, a) => {
            a.d(t, { Z: () => k });
            var r = a(807896),
                o = a(202784),
                n = a(194504),
                l = a(235902),
                s = a(392237),
                i = a(325686),
                d = a(111677),
                c = a.n(d),
                u = a(912021),
                m = a(516951),
                p = a(731708),
                h = a(310088),
                b = a(175993),
                g = a(58881),
                f = a(530732);
            const y = c().d2414d31,
                C = () => c().ce4e85ae,
                D = c().fb9f6f39;
            class w extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: a, query: r, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: r, method: "push", state: { ...o, lockScroll: t } };
                        })),
                        (this._unlisten = m.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, a, r) => {
                            const o = s.default.theme.colors.text,
                                n = s.default.theme.colors.gray700;
                            return a || r ? (e || t ? o : n) : e ? o : n;
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
                    const { Icon: e, "aria-label": t, badgeCount: a, badgePip: r, children: n, color: l, isActive: d, isCompact: c, isPillLink: u, isRoundedRect: m, isWebRedesign: b, retainScrollPosition: w, style: E, to: S } = this.props,
                        { location: k } = this.state,
                        v = S ? this._getMemoizedLink(S, w) : void 0,
                        _ = d ? d(S) : k?.pathname === v?.pathname,
                        T = g.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? M.pillHoverStyle.backgroundColor : void 0 }),
                        Z = b ? "medium" : _ ? "bold" : "medium";
                    return o.createElement(f.Z, { "aria-label": t, "aria-selected": _, focusable: !!_, interactiveStyles: T, link: v, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [M.pillStyle] : [M.link]), ...(u && _ ? [M.pillActiveStyle] : []), c ? (u ? M.compactPill : M.compactLink) : null, m ? M.roundedRect : null, E], withoutInteractiveStyles: b }, ({ isFocused: t, isHovered: d }) => o.createElement(i.Z, { style: u && M.flexGrow }, o.createElement(p.ZP, { size: b ? "headline2" : void 0, style: [M.text, { color: this._getTextColor(_, d, b, u) }, c && M.compactText, b && t && M.focusedText, u && M.pillTextStyle, u && _ && M.pillActiveTextStyle, u && d && M.pillHoverTextStyle], weight: Z }, e && o.createElement(e, { style: M.icon }), n, b || u ? null : o.createElement(i.Z, { style: _ && [M.border, { backgroundColor: s.default.theme.colors[l] }] })), a ? o.createElement(h.Z, { count: a, standalone: !0, style: [M.badge, a >= 10 && M.multiDigitBadge, a >= 20 && M.truncatedCountBadge], truncatedCountFormatter: D, unreadCountLabel: y, withBorder: !1 }) : r ? o.createElement(h.Z, { pip: !0, standalone: !0, style: M.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (w.contextType = b.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const M = s.default.create((e) => ({
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
                E = w,
                S = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: a, isPillLink: s, isRoundedRect: i, links: d, style: c, visibleItemIndex: u }) => {
                    const m = d
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: p } = l.ZP.useProps(),
                        h = p() && !s,
                        b = o.useMemo(
                            () =>
                                d.filter(Boolean).map(({ label: t, viewType: n, ...l }, d) => {
                                    const c = h ? [S.linkRedesign, 0 === d && S.firstLinkRedesign, e && 0 === d && S.withNoPaddingStart] : void 0;
                                    return o.createElement(E, (0, r.Z)({ viewType: n }, l, { isCompact: a, isPillLink: s, isRoundedRect: i, isWebRedesign: h, style: c }), t);
                                }),
                            [e, a, s, i, h, d],
                        );
                    return o.createElement(n.Z, { "aria-label": t, buttonsContainerStyle: s && S.gap, childrenStyle: !h && S.flexGrow, key: m, style: [s ? null : S.segmentedControl, h && S.leftAligned, c], visibleItemIndex: u }, b);
                };
        },
        28862: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            var r = a(202784),
                o = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M2.998 8.5c0-1.38 1.119-2.5 2.5-2.5h9c1.381 0 2.5 1.12 2.5 2.5v14.12l-7-3.5-7 3.5V8.5zm2.5-.5c-.276 0-.5.22-.5.5v10.88l5-2.5 5 2.5V8.5c0-.28-.224-.5-.5-.5h-9zM18.5 2H8.998c-1.105 0-2 .9-2 2H18.5c.276 0 .5.22.5.5v9.82l-.002-.01v2.28L21 17.68V4.5C21 3.12 19.881 2 18.5 2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        487552: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            var r = a(202784),
                o = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        189700: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            var r = a(202784),
                o = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M8 11h8v2H8zm0-4h5v2H8z" }), r.createElement("path", { d: "M17.5 2h-11C5.12 2 4 3.12 4 4.5v15C4 20.88 5.12 22 6.5 22h6c4.14 0 7.5-3.36 7.5-7.5v-10C20 3.12 18.88 2 17.5 2zm-2.52 17.41c.01-.1.02-.21.02-.32v-1.27c0-.48.32-.82.84-.82h1.28c.09 0 .19 0 .29-.01-.53 1.04-1.39 1.89-2.43 2.42zM18 14c0 .58-.46 1-.88 1h-1.28C14.26 15 13 16.19 13 17.82v1.27c0 .46-.43.91-.97.91H6.5c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h11c.27 0 .5.22.5.5V14z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        937450: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            var r = a(202784),
                o = a(890601),
                n = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        376021: (e, t, a) => {
            a.r(t), a.d(t, { default: () => d });
            var r = a(202784),
                o = a(890601),
                n = a(783427),
                l = a(717683),
                s = a(347101);
            const i = (e = {}) => {
                const t = r.useContext(l.Z),
                    { direction: a } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, t && s.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z" })) }, { writingDirection: a });
            };
            i.metadata = { width: 24, height: 24 };
            const d = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.HomeTimeline.d3783faa.js.map
