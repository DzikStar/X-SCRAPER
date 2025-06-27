"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.HomeTimeline", "icons/IconCameraVideoStroke-js", "icons/IconDrafts-js"],
    {
        920603: (e, a, r) => {
            r.d(a, { Z: () => Z });
            var t = r(202784),
                n = r(325686),
                o = r(73664),
                l = r(952793),
                d = r(293115),
                i = r(725405);
            const s = (e) => {
                    let a = "/i/premium_sign_up";
                    switch (e.product_category) {
                        case "PremiumBasic":
                        case "BlueVerified":
                        case "BlueVerifiedPlus":
                            a = "/i/premium_sign_up";
                            break;
                        case "QuickFreeTrial": {
                            let r = "";
                            if ("NoAds" === e.quick_free_trial_product_type) r = "/no-ads";
                            a = `/i/quick-free-trial${r}`;
                            break;
                        }
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
                m = (e, a) => ({ pathname: s(a), state: { referring_page: e.referrer, tier: c(a.product_category), plan: u(a.charge_interval) } });
            var p = r(807896),
                h = r(154003),
                b = r(731708),
                f = r(392237),
                g = r(498514);
            const D = ({ renderProperties: e, wrapperStyles: a }) => {
                    const r = (0, g.U)(e.icon_type),
                        n = e.icon_color ? { color: f.default.theme.colors[e.icon_color] } : null;
                    return t.createElement(r, { style: [a, n, "CircleFill" === e.icon_type ? y.smallIcon : null] });
                },
                y = f.default.create((e) => ({ smallIcon: { height: ".6em" } })),
                M = ({ buttonProps: e, destinationLink: a, onDestinationClick: r, renderProperties: { action_label: o, icon: l } }) => t.createElement(h.ZP, { link: a, onClick: r, type: e?.type }, t.createElement(n.Z, { style: C.buttonInner }, l ? t.createElement(D, { renderProperties: l, wrapperStyles: C.iconWrapper }) : null, t.createElement(b.ZP, null, o))),
                C = f.default.create((e) => ({ buttonInner: { flexDirection: "row", alignItems: "center" }, iconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } }));
            var w = r(992942),
                E = r(439592);
            const S = ({ destinationLink: e, onDestinationClick: a, renderProperties: { cta: r, image_url: o, primary_label: l, primary_label_icon: d, secondary_label: i } }) => {
                    const s = o ? "whiteOnColor" : void 0;
                    return t.createElement(n.Z, { style: k.cardOuter }, o ? t.createElement(w.Z, { aspectMode: E.Z.COVER, source: { uri: o }, style: k.image }) : null, t.createElement(n.Z, { style: k.cardInner }, t.createElement(n.Z, { style: k.primaryLabelContainer }, d ? t.createElement(D, { renderProperties: d, wrapperStyles: k.primaryLabelIconWrapper }) : null, t.createElement(b.ZP, { color: s, size: "headline1", weight: "heavy" }, l)), i ? t.createElement(b.ZP, { color: s }, i) : null, t.createElement(M, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: a, renderProperties: r })));
                },
                k = f.default.create((e) => ({ cardOuter: { borderRadius: e.borderRadii.large, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, backgroundColor: e.colors.cellBackground }, cardInner: { gap: e.spaces.space12, alignItems: "flex-start", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, image: { position: "absolute", width: "100%", height: "100%", borderRadius: e.borderRadii.large }, primaryLabelContainer: { flexDirection: "row", alignItems: "center" }, primaryLabelIconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } })),
                _ = ({ destinationLink: e, onDestinationClick: a, renderProperties: r }) => {
                    const o = t.useMemo(() => {
                        const n = { destinationLink: e, onDestinationClick: a };
                        switch (r.__typename) {
                            case "UpsellButtonRenderProperties":
                                return t.createElement(M, (0, p.Z)({}, n, { renderProperties: r }));
                            case "UpsellCardRenderProperties":
                                return t.createElement(S, (0, p.Z)({}, n, { renderProperties: r }));
                            default:
                                return null;
                        }
                    }, [r, e, a]);
                    return t.createElement(n.Z, { testID: `super-upsell-${r.__typename ?? "default"}` }, o);
                },
                v = ({ attributionParams: e, trackClick: a, trackImpression: r, upsellContent: n }) => {
                    const d = (0, i.Z)(),
                        s = t.useRef(),
                        c = (0, o.R)(s, { threshold: 1 }),
                        u = (0, l.hC)("subscriptions_upsells_track_interactions_enabled");
                    t.useEffect(() => {
                        c && (u ? r() : d.scribeAction("impression"));
                    }, [c, d, r, u]);
                    const p = m(e, n.destination),
                        h = t.useCallback(() => {
                            u ? a() : d.scribeAction("click");
                        }, [d, a, u]);
                    return t.createElement("div", { ref: s }, t.createElement(_, { destinationLink: p, onDestinationClick: h, renderProperties: n.render_properties }));
                },
                T = (e) => t.createElement(d.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell", element: e.upsellContent.key } }, t.createElement(v, e));
            var I = r(722517);
            const P = ({ attributionParams: e, surfaceKey: a, trackClick: r, trackDismiss: n, trackImpression: o, upsellContent: l }) => t.useMemo(() => t.createElement(T, { attributionParams: e, trackClick: r, trackDismiss: n, trackImpression: o, upsellContent: l }), [e, r, n, o, l]),
                R = ({ surfaceKey: e, wrapperStyles: a }) => {
                    const { attributionParams: r, trackClick: o, trackDismiss: l, trackImpression: d, upsellContent: i } = (0, I.Z)(e);
                    return t.useMemo(() => (i && r ? t.createElement(n.Z, { style: a }, t.createElement(P, { attributionParams: r, surfaceKey: e, trackClick: o, trackDismiss: l, trackImpression: d, upsellContent: i })) : null), [r, i, e, o, l, d, a]);
                },
                Z = t.memo(R);
        },
        652904: (e, a, r) => {
            r.d(a, { Z: () => c });
            var t = r(202784),
                n = r(500002),
                o = r(668214),
                l = r(997174),
                d = r(118823);
            const i = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: d.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class s extends t.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: r, search: t },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: o, search: l },
                            locationKey: d,
                        } = e;
                    let i = !1;
                    a.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && a.pathname === r && ((this._isInBackground = !1), (i = !0));
                    const s = n || d;
                    ((s && n !== d) || (!s && r !== o) || t !== l || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: r, updateTweetDetailNav: t } = e;
                    a.scribePageImpression(), r(a.contextualScribeNamespace, a.contextualScribeData), t(a.contextualScribeNamespace);
                }
            }
            s.defaultProps = { children: null };
            const c = (0, n.ZP)(i(s));
        },
        438965: (e, a, r) => {
            r.d(a, { FE: () => o, Hx: () => i, Oj: () => n, P3: () => s, QO: () => d, j: () => l });
            var t = r(942893);
            const n = { component: "tweet" },
                o = { component: "thread" },
                l = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                d =
                    (e = !1) =>
                    (a) => {
                        const { conversationPosition: r, conversationTreeMetadata: t } = a;
                        return !(e || (r && !r.isEnd && (!t || !1 !== t.descendantConnector || 0 !== t.indents.filter((e) => "line" === e.displayType).length)));
                    },
                i = (e) => t.Z.getTweetURTEntryItem(e),
                s = (e, a, r) => {
                    const t = ["descendant", "ancestor"].includes(r?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === r?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: t, component: a?.component || e.component, action: a?.action || e.action, element: a?.element || e.element };
                };
        },
        383675: (e, a, r) => {
            r.d(a, { R: () => i, Z: () => d });
            var t = r(503768),
                n = r(644829),
                o = r(750085),
                l = r(218951);
            const d = ({ endpointParams: e, endpointUrl: a, isUserRefreshable: r, timelineId: t }) => (0, l.Z)({ timelineId: t, isUserRefreshable: r, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchGeneric, getEndpointParams: ({ count: r, cursor: t }) => ({ ...e, cursor: "string" == typeof t ? t : void 0, count: r, endpointUrl: a }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                i = (e, a) => (0, l.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: a, network: { getEndpoint: (e) => e.withEndpoint(t.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: a, cursor: r }) => ({ cursor: "string" == typeof r ? r : void 0, count: a, timelineId: e }) }, formatResponse: o.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        237983: (e, a, r) => {
            r.r(a), r.d(a, { HomeTimeline: () => wa, default: () => Sa });
            var t = r(202784),
                n = r(325686),
                o = r(420412),
                l = r(108362),
                d = r(537392),
                i = r(708852),
                s = r(392237),
                c = r(111677),
                u = r.n(c),
                m = r(323265),
                p = r(718e3),
                h = r(205705),
                b = r(789831),
                f = r(143670),
                g = r(731708),
                D = r(157130),
                y = r(661810),
                M = r(154003),
                C = r(293723),
                w = r(263272),
                E = r(164174),
                S = r(487552),
                k = r(125363),
                _ = r(306878);
            const v = () => {
                    const e = (0, k.v9)(_.wB),
                        a = (0, k.I0)();
                    return [
                        e,
                        t.useCallback(
                            (e) => {
                                a((0, _.iT)(e)), a((0, _.KC)(e));
                            },
                            [a],
                        ),
                    ];
                },
                T = u().g53d5df6,
                I = u().j59f0b94,
                P = ({ setTransitionState: e, transitionState: a }) => {
                    const [r] = v(),
                        [o, l] = t.useState(r),
                        d = t.useCallback(
                            (e, o) => {
                                const d = e === T;
                                return t.createElement(f.Z, {
                                    actionText: t.createElement(n.Z, { style: R.focusedModePopoverMenuItem }, t.createElement(g.ZP, null, e), r === d ? t.createElement(C.default, { style: R.focusedModeGreenCheck }) : t.createElement(w.default, null)),
                                    onClick: () => {
                                        r !== d && "Idle" === a && l(!r), o();
                                    },
                                });
                            },
                            [r, a],
                        );
                    return t.createElement(
                        D.Z,
                        {
                            animationDuration: "normal",
                            onAnimateComplete: () => {
                                r !== o && e(o ? "RotatingToHideSidebar" : "SlidingToHideSearchBar");
                            },
                            preferredHorizontalOrientation: "start",
                            preferredVerticalOrientation: "down",
                            renderContent: (e) => t.createElement(t.Fragment, null, d(I, e), t.createElement(y.Z, { style: R.divider }), d(T, e)),
                            withMask: !0,
                        },
                        t.createElement(M.ZP, { icon: t.createElement(E.default, null), style: R.focusedModeButton }, t.createElement(g.ZP, { style: R.focusedModeButtonText }, o ? T : I), t.createElement(S.default, null)),
                    );
                },
                R = s.default.create((e) => ({ focusedModeButton: { paddingEnd: e.spaces.space12 }, focusedModeButtonText: { marginStart: e.spaces.space4, marginEnd: e.spaces.space8 }, focusedModePopoverMenuItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", padding: e.spaces.space4 }, focusedModeGreenCheck: { color: e.colors.green500 }, divider: { marginHorizontal: e.spaces.space20 } }));
            var Z = r(788994),
                B = r(727828),
                x = r(252021),
                A = r(920603),
                H = r(443781),
                z = r(32677),
                N = (r(136728), r(899667)),
                L = r(507651),
                O = r(952793),
                F = r(655352),
                U = r(872788),
                W = r(71620),
                V = r(668214),
                G = r(709318),
                j = r(390387);
            const J = (0, V.Z)()
                .propsFromState(() => ({ pinnedTimelines: G.GE, selectedTimeline: G.br, isSubscriber: j.pG, sort: G.sI }))
                .propsFromActions(() => ({ createLocalApiErrorHandlerFetchPins: (0, W.zr)("HOME_TIMELINE_FETCH_PINS"), fetchPinnedTimelinesIfNeeded: G.Mq, updateSettings: G.VP }))
                .withAnalytics();
            var $ = r(138099),
                K = r(449479);
            const q = u().a2118086,
                Y = [
                    { label: u().edf7bc2e, value: U.UO.RELEVANCE },
                    { label: u().d16c1ab6, value: U.UO.RECENCY },
                    { label: u().d3619250, value: U.UO.LIKES },
                ];
            function Q({ onChange: e, onDismiss: a, value: r }) {
                return t.createElement(
                    $.Z,
                    { onMaskClick: a, style: X.sheet, type: "bottom", withMask: !0 },
                    t.createElement(g.ZP, { align: "center", size: "headline1", weight: "bold" }, q),
                    t.createElement(K.Z, {
                        name: "sort",
                        onChange: function (r, t) {
                            e(t), a();
                        },
                        options: Y,
                        value: r,
                    }),
                );
            }
            const X = s.default.create((e) => ({ sheet: { padding: e.spaces.space16 } })),
                ee = u().d1e0a75f({ noun: "" }),
                ae = u().dafd69e9({ noun: "" }),
                re = u().d80a1c37({ noun: "" }),
                te = t.createElement(S.default, null),
                ne = t.createElement(N.default, null);
            const oe = s.default.create((e) => ({ tabsContainer: { display: "flex", flexDirection: "row" }, tabs: { flexBasis: 1, flexGrow: 1, paddingEnd: e.spaces.space4 }, rightControlContainer: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, justifyContent: "center", paddingHorizontal: e.spaces.space8 }, focusedModeRightControlContainer: { paddingHorizontal: 0 } })),
                le = J(function ({ analytics: e, createLocalApiErrorHandlerFetchPins: a, fetchPinnedTimelinesIfNeeded: r, isSubscriber: o, onRefresh: l, pinnedTimelines: d, rightControl: i, selectedTimeline: s, sort: c, updateSettings: u }) {
                    const [, m] = t.useTransition(),
                        [p, h] = t.useState(!1),
                        b = t.useRef(0);
                    function f(e) {
                        m(function () {
                            u({ sort: e });
                        });
                    }
                    function g() {
                        h(!1);
                    }
                    function D(a) {
                        const r = a.id === s.id && a.type === s.type,
                            n = a.type === U.Jz.COMMUNITY && r,
                            o = a.name,
                            d = p ? ne : te;
                        return {
                            isActive: () => r,
                            label: n ? t.createElement(t.Fragment, null, o, " ", d) : o,
                            key: `${a.type}${a.id ? `-${a.id}` : ""}`,
                            onClick: () => {
                                if (r) n ? h(!0) : l();
                                else {
                                    const r = Date.now() - b.current,
                                        { name: t, ...n } = a;
                                    m(function () {
                                        u({ selectedTimeline: n });
                                    });
                                    const o = s.type === U.Jz.GENERIC ? s.scribe : U.yu[s.type],
                                        l = a.type === U.Jz.GENERIC ? a.scribe : U.yu[a.type];
                                    e.scribe({ section: o, element: l, action: "switch", data: { duration_ms: r } });
                                }
                            },
                            retainScrollPosition: !1,
                            to: "/home",
                        };
                    }
                    t.useEffect(() => {
                        b.current = Date.now();
                    }, [s]),
                        t.useEffect(() => {
                            r().catch(a());
                        }, [a, r]);
                    const y = [D({ name: ee, type: U.Jz.HOME }), D({ name: ae, type: U.Jz.HOME_LATEST })];
                    o && y.push(D({ name: re, type: U.Jz.CREATOR_SUBSCRIPTIONS })), d.forEach((e) => y.push(D(e)));
                    const M = (0, O.hC)("rweb_sourcemap_migration"),
                        C = (0, O.hC)("rweb_sourcemap_migration_focused_mode") && M;
                    if (y.length < 2) return null;
                    const w = (0, F.ZP)();
                    return i ? t.createElement(n.Z, { style: oe.tabsContainer }, t.createElement(L.Z, { alignFirstItem: w, links: y, style: oe.tabs }), t.createElement(n.Z, { style: [oe.rightControlContainer, C && oe.focusedModeRightControlContainer] }, i), p && t.createElement(Q, { onChange: f, onDismiss: g, value: c })) : t.createElement(t.Fragment, null, t.createElement(L.Z, { alignFirstItem: w, links: y }), p && t.createElement(Q, { onChange: f, onDismiss: g, value: c }));
                });
            var de = r(652904),
                ie = r(614983),
                se = r.n(ie),
                ce = r(933083),
                ue = r(962741),
                me = r(87063),
                pe = r(500002),
                he = r(519896),
                be = r(810641),
                fe = r(438965),
                ge = r(335632);
            const De = (0, V.Z)().propsFromState(() => ({ selectedTimeline: G.br, sort: G.sI, viewerUserId: j._h }));
            var ye = r(807896),
                Me = r(457311),
                Ce = r(725516);
            const we = { header: u().a1ab9c80, message: u().b32c4fb0 },
                Ee = { buttonLink: "/i/connect_people", buttonText: u().bf17deda, header: u().defba9a4, message: u().c3fbf1da },
                Se = { header: u().a2515900, message: u().je23cdb2 };
            function ke({ timelineType: e }) {
                const a = (0, Ce.z)(),
                    r = t.useCallback(() => {
                        a.scribe({ action: "click", component: "empty_message", element: "primary_cta" });
                    }, [a]),
                    n = t.useCallback(() => {
                        a.scribe({ action: "impression", component: "empty_message" });
                    }, [a]),
                    o = t.useMemo(() => (e === U.Jz.COMMUNITY ? we : e === U.Jz.LIST ? Se : Ee), [e]);
                return t.createElement(Me.Z, (0, ye.Z)({ onButtonPress: r, onImpression: n }, o));
            }
            var _e = r(791632);
            var ve = r(985366),
                Te = r(383675),
                Ie = r(255117),
                Pe = r(506653),
                Re = r(290297);
            const Ze = u().f089620c,
                Be = (0, pe.ZP)(
                    De(({ history: e, location: a, selectedTimeline: r, sort: n, recordTTFT: o = ce.jN, timelineRef: l, viewerUserId: d }) => {
                        const { featureSwitches: i } = t.useContext(H.rC),
                            s = t.useRef(!0);
                        se()(d, "viewerUserId must be defined");
                        const c = r.type === U.Jz.HOME && i.isTrue("rweb_home_nav_single_direction_scroll_enabled"),
                            u = t.useCallback(
                                ({ entries: e, fetchStatus: a }) => {
                                    if ((a === me.Z.FAILED && (s.current = !1), s.current && e.length)) {
                                        const a = e.some(({ type: e }) => e === ue.ZP.Tweet);
                                        (s.current = !1), a && (performance?.mark?.("home-entries-rendered"), o());
                                    }
                                },
                                [o],
                            ),
                            p = t.useMemo(
                                () =>
                                    (function ({ history: e, location: a, selectedTimeline: r, sort: t, viewerUserId: n }) {
                                        const o = (0, _e.HD)(e) ? e.location.query.id : void 0,
                                            l = (0, _e.HD)(e) ? e.location.query.mode : void 0,
                                            d = l || r.type,
                                            i = o || r.id,
                                            s = l ? l === U.Jz.HOME_LATEST : r.type === U.Jz.HOME_LATEST;
                                        return d === U.Jz.COMMUNITY && i ? (0, ve.Qx)(String(i), { displayLocation: "Home", rankingMode: t }) : d === U.Jz.CREATOR_SUBSCRIPTIONS ? (0, Re.Z)({ userId: n }) : d === U.Jz.GENERIC && i ? (0, Te.R)(String(i)) : d === U.Jz.LIST && i ? (0, Pe.Z)({ listId: String(i) }) : (0, Ie.ZP)({ useLatest: s, userId: n });
                                    })({ history: e, location: a, selectedTimeline: r, sort: n, viewerUserId: d }),
                                [e, a, r, n, d],
                            ),
                            h = t.useCallback(() => t.createElement(ke, { timelineType: r.type }), [r]),
                            b = t.useMemo(() => (0, ge.G)({ hideReplyContextMode: i.isTrue("rweb_tweets_reply_context_hidden") ? fe.j.TIMELINE : void 0, isCompact: m.ZP.isMobileOS() && i.isTrue("rweb_home_compact_timeline_enabled"), withUserPresence: i.isTrue("responsive_web_audio_space_ring_home_timeline") }), [i]);
                        return t.createElement(be.Z, { entryConfiguration: b, isSingleDirection: c, module: p, onEntriesRendered: u, prerollDisplayLocation: he.Nw.TIMELINE_HOME, renderEmptyState: h, timelineRef: l, title: Ze, withNewTweetsPill: !0 });
                    }),
                );
            var xe = r(791983),
                Ae = r(523561),
                He = r(597496),
                ze = r(155727),
                Ne = r(618186),
                Le = r(872405),
                Oe = r(823161),
                Fe = r(473026),
                Ue = r(937450),
                We = r(853485),
                Ve = r(450646),
                Ge = r(674306),
                je = r(665468),
                Je = r(292484),
                $e = r(919022);
            const Ke = (0, V.Z)()
                    .propsFromState(() => ({ viewerUser: $e.ZP.selectViewerUser }))
                    .adjustStateProps(({ viewerUser: e }) => ({ userAvatarURI: e && e.profile_image_url_https, userName: e && e.name })),
                qe = u().ee69d769({ verb: "" }),
                Ye = u().e349147c,
                Qe = t.createElement(Fe.default, null),
                Xe = t.createElement(Ue.default, null),
                ea = t.createElement(We.default, null),
                aa = t.createElement(Ve.default, null),
                ra = t.createElement(Ge.default, null),
                ta = t.createElement(je.default, null),
                na = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space8 }, avatarColumn: { paddingTop: 48 - Oe.default.getSizeSimple(Oe.default.defaultSize) + "px" }, avatar: { width: "100%" }, body: { flexDirection: "column", flexGrow: 1 }, fakeInput: { paddingTop: e.spaces.space16, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space2 }, toolbar: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space2, marginTop: e.spaces.space20 }, toolbarSection: { alignItems: "center", flexDirection: "row" }, toolbarSectionWithIconContainer: { alignItems: "center", flexDirection: "row", marginStart: e.spacesPx.space2 }, toolBarButton: { marginHorizontal: 0 }, firstToolBarButton: { marginHorizontal: 0, marginStart: `-${e.spaces.space8}` }, tweetButton: { marginStart: e.spaces.space12 } })),
                oa = Ke(({ userAvatarURI: e }) => {
                    const a = t.useMemo(() => t.createElement(ze.Z.Consumer, null, ({ avatarSize: a }) => t.createElement(Ne.Z, { size: a, style: na.avatar, uri: e })), [e]),
                        r = !(0, Je.vS)();
                    return t.createElement(Le.Z, { avatarCell: a, avatarCellStyle: na.avatarColumn, cellStyle: na.body, style: na.root }, t.createElement(g.ZP, { color: "gray700", numberOfLines: 1, size: "headline1", style: na.fakeInput }, Ye), t.createElement(n.Z, { style: na.toolbar }, t.createElement(n.Z, { style: na.toolbarSectionWithIconContainer }, t.createElement(M.ZP, { disabled: !0, icon: Qe, size: "medium", style: na.firstToolBarButton, type: "brandText" }), t.createElement(M.ZP, { disabled: !0, icon: Xe, size: "medium", style: na.toolBarButton, type: "brandText" }), r ? t.createElement(M.ZP, { disabled: !0, icon: ea, size: "medium", style: na.toolBarButton, type: "brandText" }) : null, t.createElement(M.ZP, { disabled: !0, icon: aa, size: "medium", style: na.toolBarButton, type: "brandText" }), r ? t.createElement(M.ZP, { disabled: !0, icon: ra, size: "medium", style: na.toolBarButton, type: "brandText" }) : null, t.createElement(M.ZP, { disabled: !0, icon: ta, size: "medium", style: na.toolBarButton, type: "brandText" })), t.createElement(n.Z, { style: na.toolbarSection }, t.createElement(M.ZP, { disabled: !0, style: na.tweetButton, type: "primaryFilled" }, qe))));
                }),
                la = (0, Ae.Z)({
                    loader: () =>
                        (He.H1.preload() || Promise.resolve()).then(() =>
                            Promise.all([
                                r.e("icons.0"),
                                r.e("icons.5"),
                                r.e("icons.12"),
                                r.e("icons.20"),
                                r.e("icons.2"),
                                r.e("icons.21"),
                                r.e("icons.28"),
                                r.e("icons.10"),
                                r.e("icons.17"),
                                r.e("icons.9"),
                                r.e("icons.23"),
                                r.e("modules.common-e907d115"),
                                r.e("modules.common-e019dbda"),
                                r.e("icons.22"),
                                r.e("icons.24"),
                                r.e("icons.14"),
                                r.e("icons.25"),
                                r.e("icons.13"),
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
                                r.e("icons.6"),
                                r.e("icons.3"),
                                r.e("icons.4"),
                                r.e("icons.1"),
                                r.e("icons.8"),
                                r.e("icons.18"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5f6a80e1"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-e64ba3d4"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                                r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
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
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                                r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
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
                                r.e("shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose"),
                                r.e("shared~bundle.Compose~bundle.RichTextCompose-bc6ccf4c"),
                                r.e("shared~bundle.Compose~bundle.RichTextCompose-a2dee9c7"),
                                r.e("shared~bundle.Compose~bundle.RichTextCompose-42018f38"),
                                r.e("shared~bundle.Compose~bundle.RichTextCompose-07b0deba"),
                                r.e("shared~bundle.Compose~bundle.RichTextCompose-0fb8c86a"),
                                r.e("shared~bundle.Compose~bundle.RichTextCompose-e6266db0"),
                                r.e("bundle.RichTextCompose"),
                            ]).then(r.bind(r, 728455)),
                        ),
                    renderPlaceholder: () => t.createElement(oa, null),
                });
            var da = r(880647),
                ia = r(485785);
            const sa = () =>
                    ca()
                        ? r
                              .e("ondemand.framerateTracking")
                              .then(r.bind(r, 172004))
                              .then(({ default: e }) => e)
                        : Promise.resolve(void 0),
                ca = () => window.performance && "function" == typeof window.performance.now;
            var ua = r(293115),
                ma = r(521514);
            const pa = 200,
                ha = 100,
                ba = (e) => {
                    const [a, r] = v(),
                        [n, o] = t.useState("Idle"),
                        [l, d] = t.useState(a),
                        i = fa(e),
                        [s, c] = t.useState(null),
                        [u, m] = t.useState(null);
                    return (
                        t.useLayoutEffect(() => {
                            "Idle" !== n && a !== l && (a ? (c(i.Primary_MountingFocusedLayout), o("SlidingToShowSearchBar")) : (m(i.Sidebar_MountingDefaultLayout), c(i.Primary_MountingDefaultLayout), o("RotatingToShowSidebar")), d(a));
                        }, [a, l, n, i.Sidebar_MountingDefaultLayout, i.Primary_MountingDefaultLayout, i.Primary_MountingFocusedLayout]),
                        t.useLayoutEffect(() => {
                            switch (n) {
                                case "RotatingToHideSidebar":
                                    m(i.Sidebar_RotatingToHideSidebar), c(i.Primary_RotatingToHideSidebar), setTimeout(() => r(!0), pa);
                                    break;
                                case "SlidingToShowSearchBar":
                                    c(i.Primary_SlidingToShowSearchBar), setTimeout(() => o("Idle"), ha);
                                    break;
                                case "SlidingToHideSearchBar":
                                    c(i.Primary_SlidingToHideSearchBar), setTimeout(() => r(!1), ha);
                                    break;
                                case "RotatingToShowSidebar":
                                    m(i.Sidebar_RotatingToShowSidebar), c(i.Primary_RotatingToShowSidebar), setTimeout(() => o("Idle"), pa);
                                    break;
                                default:
                                    c(null), m(null);
                            }
                        }, [r, n, i.Sidebar_RotatingToHideSidebar, i.Primary_RotatingToHideSidebar, i.Sidebar_RotatingToShowSidebar, i.Primary_RotatingToShowSidebar, i.Primary_SlidingToShowSearchBar, i.Primary_SlidingToHideSearchBar]),
                        [n, o, s, u]
                    );
                },
                fa = (e) => {
                    const a = ma.Z.columnWidthsRedesign.secondary.normal,
                        r = e ? ma.Z.sideNavWidthsRedesign.expanded : ma.Z.sideNavWidthsRedesign.collapsed.normal;
                    return t.useMemo(
                        () =>
                            s.default.create((e) => {
                                const t = (a - r) / 2,
                                    n = (a + r) / 2,
                                    o = e.componentDimensions.appBarHeightPx + e.spacesPx.space16;
                                return { Sidebar_RotatingToHideSidebar: { transformOrigin: "center 50vh", transition: "scale 200ms ease-out, translate 200ms ease-in", scale: 0.8, translate: -n }, Primary_RotatingToHideSidebar: { transition: "translate 200ms ease-in", translate: t, backgroundColor: e.colors.cellBackground }, Primary_MountingFocusedLayout: { translate: `0 -${o}px` }, Primary_SlidingToShowSearchBar: { translate: 0, transition: "translate 100ms ease-in-out" }, Primary_SlidingToHideSearchBar: { translate: `0 -${o}px`, transition: "translate 100ms ease-in-out" }, Primary_MountingDefaultLayout: { translate: t }, Sidebar_MountingDefaultLayout: { translate: -n, scale: 0.8 }, Primary_RotatingToShowSidebar: { translate: 0, transition: "translate 200ms ease-out", backgroundColor: e.colors.cellBackground }, Sidebar_RotatingToShowSidebar: { translate: 0, scale: 1, transition: "scale 200ms ease-in, translate 200ms ease-out" } };
                            }),
                        [a, r],
                    );
                };
            var ga = r(936572);
            const Da = (0, V.Z)()
                    .propsFromState(() => ({ selectedTimeline: G.br, isSideNavExpandedByUser: ga.op }))
                    .withAnalytics({ page: "home" }),
                ya = u().ha8209bc,
                Ma = t.createElement(xe.c, null),
                Ca = t.createElement(p.Z, null);
            function wa({ analytics: e, history: a, isSideNavExpandedByUser: r, location: s, selectedTimeline: c }) {
                const { featureSwitches: u, isRestrictedSession: p, userClaims: f } = (0, H.QZ)(),
                    g = t.useRef(performance?.mark?.("home-page-init-start")),
                    D = t.useRef(null),
                    y = t.useRef(!1),
                    M = t.useRef(1 / 0),
                    C = t.useRef(null),
                    w = c.type === U.FO.COMMUNITY;
                t.useEffect(
                    () => (
                        (y.current = !0),
                        g.current && performance?.measure?.("home-page-init", "home-page-init-start"),
                        () => {
                            y.current = !1;
                        }
                    ),
                    [],
                ),
                    t.useEffect(() => {
                        function e() {
                            M.current = Date.now();
                        }
                        function a() {
                            const e = Date.now() - M.current;
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
                    t.useEffect(() => {
                        if (u.isTrue("responsive_web_framerate_tracking_home_enabled")) {
                            const e = `home${m.ZP.isDesktopOS() ? "" : "_mobile"}`;
                            sa().then((a) => {
                                y.current && a && (D.current = a({ reportNamespace: e }));
                            });
                        }
                        return () => {
                            D.current?.stop();
                        };
                    }, [u]);
                const E = t.useCallback(() => {
                        C.current?.refreshOrGoTop();
                    }, [C]),
                    S = t.useCallback(
                        (e) => {
                            C.current = e;
                        },
                        [C],
                    ),
                    k = t.useMemo(() => t.createElement(t.Fragment, null, !(0, F.ZP)() || p || w ? null : t.createElement(t.Fragment, null, t.createElement(la, { history: a, location: s }), t.createElement(o.Z, { isSlim: !0 })), t.createElement(b.Z, { component: l.Z, fab: t.createElement(z.Z, { history: a }) }, t.createElement(Be, { timelineRef: S }))), [a, w, p, s, S]),
                    _ = { page: "home", section: c.type === U.Jz.GENERIC ? c.scribe : U.yu[c.type] },
                    T = !(0, F.ZP)(),
                    I = T ? t.createElement(h.Z, { style: Ea.icon }) : void 0,
                    R = T ? null : ya,
                    N = u.isTrue("rweb_sourcemap_migration"),
                    L = u.isTrue("rweb_sourcemap_migration_focused_mode"),
                    O = f.isAnyPremiumSubscriber(),
                    [W, V] = (0, d.Zx)(({ windowWidth: e }) => [da.Z.isOneColumnViewportCenteredSquishedLayoutRedesign(e, !!r), da.Z.isTwoColumnOrWiderLayoutRedesign(e, !!r)]),
                    G = N && L && O && V,
                    [j] = v(),
                    J = (0, i.$u)(),
                    [$, K, q, Y] = ba(!!r),
                    Q = t.useMemo(() => t.createElement(le, { onRefresh: E, rightControl: G && t.createElement(P, { setTransitionState: K, transitionState: $ }) }), [K, G, $, E]),
                    X = t.useMemo(() => {
                        if (T && !f.isAnyPremiumSubscriber()) {
                            if (u.isTrue("subscriptions_upsells_home_nav_migration_enabled")) return t.createElement(A.Z, { surfaceKey: "HomeNav" });
                            if ("" !== u.getStringValue("subscriptions_upsells_premium_home_nav")) return t.createElement(n.Z, { style: Ea.upsellContainer }, t.createElement(B.Z, { variant: "HomeNav" }));
                        }
                        return null;
                    }, [T, f, u]),
                    ee = t.useMemo(() => t.createElement(n.Z, { style: [Ea.searchContainer, ia.W.contentOneColumnRedesign, W && Ea.squished, q] }, t.createElement(He.Rj, { shouldHandleSearchShortcut: !0 })), [W, q]);
                return t.createElement(ua.nO, { namespace: _ }, t.createElement(de.Z, { locationKey: _.page }, G && j && ee, t.createElement(x.Z, { centeredLogo: I, disjointHeader: Ma, documentTitle: ya, history: a, onTabRefresh: E, primaryContent: k, primaryContentStyles: G && q, rightControl: X, secondaryBar: Q, sidebarContent: G && j ? null : t.createElement(n.Z, { style: G && Y }, Ca), title: R, withAppBar: !J }), G && j && !W && t.createElement(n.Z, { style: Ea.floatingFooter }, t.createElement(Z.Z, { align: "right", itemLayout: "vertical", withOverflow: !0 }))));
            }
            const Ea = s.default.create((e) => ({ icon: { flexGrow: 1, height: "1.75rem", color: e.colors.brandColor }, upsellContainer: { maxWidth: "100%" }, searchContainer: { alignItems: "center", backfaceVisibility: "hidden", backgroundColor: e.colors.cellBackground, flexDirection: "row", height: e.componentDimensions.appBarHeight, minHeight: e.spaces.space32, top: 0, zIndex: e.componentZIndices.appBarZIndex, paddingHorizontal: e.spaces.space16, marginTop: e.spaces.space16 }, floatingFooter: { position: "fixed", bottom: e.spaces.space20, end: 0 }, squished: { maxWidth: "100%" } })),
                Sa = Da(wa);
        },
        498514: (e, a, r) => {
            r.d(a, { U: () => T });
            r(202784);
            var t = r(521058),
                n = r(847988),
                o = r(616894),
                l = r(376021),
                d = r(625823),
                i = r(839),
                s = r(266151),
                c = r(468670),
                u = r(913973),
                m = r(1753),
                p = r(748138),
                h = r(53674),
                b = r(164174),
                f = r(926981),
                g = r(642317),
                D = r(28862),
                y = r(376278),
                M = r(511323),
                C = r(254944),
                w = r(465072),
                E = r(189700),
                S = r(520489),
                k = r(297938),
                _ = r(136483),
                v = r(457566);
            const T = (e) => {
                switch (e) {
                    case "Fire":
                        return t.default;
                    case "BookStrokeOn":
                        return n.default;
                    case "No":
                        return o.default;
                    case "WriteStroke":
                        return l.default;
                    case "AccountNft":
                        return d.default;
                    case "CameraVideoStroke":
                        return i.default;
                    case "Feather":
                        return s.default;
                    case "LockStroke":
                        return c.default;
                    case "Checkmark":
                        return u.default;
                    case "NotesStroke":
                        return m.default;
                    case "Grok":
                        return v.x1;
                    case "MoneyStroke":
                        return p.default;
                    case "BarChart":
                        return h.default;
                    case "DeckStroke":
                        return b.default;
                    case "Film":
                        return f.default;
                    case "RocketStroke":
                        return g.default;
                    case "BookmarkCollectionsStroke":
                        return D.default;
                    case "FireStroke":
                        return y.default;
                    case "PersonStroke":
                        return M.default;
                    case "PaintbrushStroke":
                        return C.default;
                    case "ModeratorStroke":
                        return w.default;
                    case "Document":
                        return E.default;
                    case "RadarStroke":
                        return S.default;
                    case "SearchPersonStroke":
                        return k.default;
                    case "CircleFill":
                        return _.default;
                    default:
                        return () => null;
                }
            };
        },
        661810: (e, a, r) => {
            r.d(a, { Z: () => l });
            var t = r(202784),
                n = r(325686),
                o = r(392237);
            function l({ spacing: e, style: a }) {
                return t.createElement(n.Z, { role: "separator", style: [d.divider, { marginVertical: null != e ? o.default.theme.spaces[e] : void 0 }, a] });
            }
            const d = o.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        449479: (e, a, r) => {
            r.d(a, { Z: () => D });
            var t = r(202784),
                n = r(325686),
                o = r(913973),
                l = r(731708),
                d = r(950822),
                i = r(466792),
                s = r(58881),
                c = r(530732),
                u = r(352924),
                m = r(392237);
            class p extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: a, onChange: r } = this.props;
                            r && !a && r(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": a, checked: r, disabled: u, helpText: p, label: b, name: f, testID: g } = this.props,
                        D = s.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        y = s.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        M = r ? D : y;
                    return t.createElement(i.Z, { disabled: u }, (i) => t.createElement(n.Z, { role: "label", style: [h.root, !u && h.interactive], testID: g }, t.createElement(n.Z, { style: h.topContainer }, t.createElement(l.ZP, { id: this.labelId }, b), t.createElement(n.Z, { style: h.radioContainer }, t.createElement(c.Z, { interactiveStyles: M, interactivityState: i, style: h.radioBackground }, t.createElement(n.Z, { style: [h.circle, r && h.circleActive, u && h.circleDisabled, r && u && h.circleCheckedAndDisabled] }, r ? t.createElement(o.default, { style: h.checkMark }) : null)), (0, d.Z)("input", { "aria-posinset": e, "aria-setsize": a, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: u, name: f, onChange: this._handleChange, ref: this._setRef, style: [h.nativeControl], type: "radio" }))), p ? t.createElement(l.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: h.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const h = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                b = p,
                f = "radioGroup";
            let g = 1;
            class D extends t.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: a, onChange: r } = this.props;
                            r(a, e);
                        }),
                        (this._setRadioRef = (e, a) => (r) => {
                            (this._radioRefs[e] = r), a && (this._radioRefs.checked = e);
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
                    const { "aria-label": e, description: a, disabled: r, label: o, name: d, options: i, value: s } = this.props;
                    return t.createElement(
                        n.Z,
                        { "aria-label": e, "aria-labelledby": o && !e ? this._labelId : void 0, role: "radiogroup", style: r && y.disabled, testID: `${f}${d}` },
                        o ? t.createElement(n.Z, { id: this._labelId, role: "label", style: y.header }, t.createElement(l.ZP, { style: y.label, weight: "bold" }, o), a ? t.createElement(l.ZP, { color: "gray700", size: "subtext2" }, a) : null) : null,
                        i.map((e, a) => t.createElement(b, { "aria-posinset": a + 1, "aria-setsize": i.length, checked: e.value === s, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: d, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(a, e.value === s), testID: e.testID })),
                    );
                }
            }
            D.defaultProps = { disabled: !1 };
            const y = m.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        839: (e, a, r) => {
            r.r(a), r.d(a, { default: () => i });
            var t = r(202784),
                n = r(890601),
                o = r(783427),
                l = r(347101);
            const d = (e = {}) => {
                const { direction: a } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: a });
            };
            d.metadata = { width: 24, height: 24 };
            const i = d;
        },
        266151: (e, a, r) => {
            r.r(a), r.d(a, { default: () => i });
            var t = r(202784),
                n = r(890601),
                o = r(783427),
                l = r(347101);
            const d = (e = {}) => {
                const { direction: a } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M10 5H2V3h8v2zM7 7H2v2h5V7zm12.94 4.946C19.48 15.918 16.1 19 12 19H8.19c-.12.988-.19 1.993-.19 3H6c0-4.669 1.29-9.39 3.95-12.97C12.62 5.421 16.38 2.9 23 3c.17 3.359-.21 7.147-3.06 8.946zM21 5.033c-4.16.276-7.29 2.275-9.45 5.187-1.43 1.929-2.43 4.268-3 6.78H12c2.68 0 4.95-1.76 5.72-4.188-.52.108-1.09.172-1.72.188h-1.5v-2H16c3.9 0 4.95-2.921 5-5.967z" })) }, { writingDirection: a });
            };
            d.metadata = { width: 24, height: 24 };
            const i = d;
        },
        748138: (e, a, r) => {
            r.r(a), r.d(a, { default: () => i });
            var t = r(202784),
                n = r(890601),
                o = r(783427),
                l = r(347101);
            const d = (e = {}) => {
                const { direction: a } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: a });
            };
            d.metadata = { width: 24, height: 24 };
            const i = d;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.HomeTimeline.76660b7a.js.map
