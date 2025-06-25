"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DMDrawer"],
    {
        761693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => it });
            var n = r(202784),
                a = r(107267),
                i = r(528840),
                o = r(401388),
                s = r(71620),
                l = r(125363),
                c = r(296196),
                d = r(550293),
                u = r(807896),
                h = r(325686),
                p = r(292627),
                g = r(365023),
                m = r(235902),
                v = r(461756),
                E = r(609927),
                f = r(521514),
                w = r(511582),
                b = r(390387),
                D = r(441790),
                C = r(715913),
                y = r(601413),
                x = r(392237),
                H = r(323265),
                Z = r(443781),
                S = r(740633);
            const T = (0, r(523561).Z)({ loader: () => r.e("ondemand.RichText").then(r.bind(r, 687184)) });
            var P = r(111311),
                I = r(198506),
                R = r(768572),
                _ = r(275365),
                M = r(255534),
                U = r(164383),
                A = r(587521),
                k = r(806960),
                O = r(786998),
                N = r(516951),
                L = r(933794),
                W = r(163390),
                F = r(725516);
            const B = { header: "DMDrawerHeader", headerHighlighted: "DMDrawerHeaderHighlighted", root: "DMDrawer" };
            var q = r(154003),
                X = r(310088),
                G = r(111677),
                z = r.n(G),
                V = r(894966);
            const K = z().b08821f4;
            function Y({ buttonType: e, hasNewMessages: t, inboxUnreadCount: r }) {
                const a = (0, l.I0)(),
                    i = t || (void 0 !== r && r > 0);
                return n.createElement(
                    h.Z,
                    null,
                    n.createElement(q.ZP, {
                        "aria-label": K,
                        icon: n.createElement(V.default, null),
                        onPress: () => {
                            a(d.DO(null));
                        },
                        type: e,
                    }),
                    i ? n.createElement(X.Z, { pip: !0, style: j.newMessagePip, truncatedCountFormatter: () => "", unreadCountLabel: () => "" }) : null,
                );
            }
            const j = x.default.create((e) => ({ newMessagePip: { end: e.spaces.space4, top: e.spaces.space4 } }));
            r(136728);
            var Q = r(324922),
                $ = r(867492),
                J = r(377782);
            const ee = z().d227d19e,
                te = z().c64c1884,
                re = z().j7d0e836,
                ne = z().cdcebd22;
            function ae({ analytics: e, buttonType: t, conversationTitle: r, handleToggleVisibility: i, isExpanded: o }) {
                const s = (0, a.useHistory)();
                return n.createElement(
                    h.Z,
                    { style: ie.rightControls },
                    r
                        ? null
                        : n.createElement(q.ZP, {
                              "aria-label": te,
                              hoverLabel: { label: ne },
                              icon: n.createElement(Q.default, null),
                              onPress: () => {
                                  e.scribe({ section: "compose_drawer", component: "dm", action: "show" }), s.push({ pathname: "/messages/compose", state: { source: "drawer" } });
                              },
                              type: t,
                          }),
                    r && o && n.createElement(U.fK, null),
                    o ? n.createElement(q.ZP, { "aria-label": ee, hoverLabel: { label: ee }, icon: n.createElement($.default, null), onPress: i, type: t }) : n.createElement(q.ZP, { "aria-label": re, hoverLabel: { label: re }, icon: n.createElement(J.default, null), onPress: i, type: t }),
                );
            }
            const ie = x.default.create((e) => ({ rightControls: { flexDirection: "row" } }));
            var oe = r(731708),
                se = r(136483);
            const le = z().a2f81050,
                ce = z().e736990a;
            function de({ conversationTitle: e, hasNewMessages: t, isConversationUnread: r, isHighlighted: a }) {
                const i = e || n.createElement(oe.ZP, null, le),
                    o = r || (!e && t);
                return n.createElement(h.Z, { style: ue.titleContainer }, n.createElement(h.Z, { style: [ue.titleTextRoot, a && o ? ue.titleTextHighlighted : null] }, i), o ? n.createElement(h.Z, { style: ue.newMessageDotContainer }, n.createElement(se.default, { "aria-label": ce, style: [ue.newMessageDotRoot, a ? ue.newMessageDotHighlighted : ue.newMessageDotRegular] })) : null);
            }
            const ue = x.default.create((e) => ({ newMessageDotContainer: { flexGrow: 1 }, newMessageDotRoot: { width: e.spaces.space12, height: e.spaces.space12, marginStart: e.spaces.space4 }, newMessageDotRegular: { color: e.colors.primary }, newMessageDotHighlighted: { color: e.colors.white }, titleContainer: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1 }, titleTextRoot: { flexGrow: 1, flexShrink: 1 }, titleTextHighlighted: { color: e.colors.white } }));
            function he({ conversationSubtitle: e, conversationTitle: t, inboxUnreadCount: r = 0, isConversationUnread: a = !1, isHighlighted: i, onDrawerOpen: o, triggerHighlight: s }) {
                const c = n.createRef(),
                    u = (0, F.z)(),
                    p = (0, l.I0)(),
                    g = (0, l.v9)(d.kX),
                    m = pe(r > 0, i),
                    v = g === w.S.EXPANDED,
                    E = n.useRef(0);
                n.useEffect(() => {
                    const e = E.current;
                    !i && s && (null === e || r > e) && s(), (E.current = r);
                }, [r, s, i]);
                const f = () => {
                        const e = v ? w.S.COLLAPSED : w.S.EXPANDED;
                        e === w.S.COLLAPSED ? u.scribe({ action: "collapse" }) : e === w.S.EXPANDED && (u.scribe({ action: "expand" }), o && o()), p(d.bi(e));
                    },
                    b = 0 === r ? [] : i ? [ge.headerHighlighted] : [ge.headerActive];
                return n.createElement(
                    L.Z,
                    {
                        enabled: !0,
                        handlers: {
                            [W.uq.goLists]: N.Z,
                            [W.uq.toggleDMDrawer]: () => {
                                f(), c && c.current && c.current.focus();
                            },
                        },
                    },
                    n.createElement(h.Z, { ref: c, style: [ge.headerRoot, !v && ge.headerBorderClosed, ...b, ge.cursor], testID: i ? B.headerHighlighted : B.header }, n.createElement(O.Z, { leftControl: t && v ? n.createElement(Y, { buttonType: m, hasNewMessages: r > 0, inboxUnreadCount: r }) : null, onMiddleControlClick: f, rightControl: n.createElement(ae, { analytics: u, buttonType: m, conversationTitle: t, handleToggleVisibility: f, isExpanded: v }), style: ge.roundedAppBarCorners, subtitle: e, title: n.createElement(de, { conversationTitle: t, hasNewMessages: r > 0, isConversationUnread: a, isHighlighted: i }), withBackground: !i })),
                );
            }
            const pe = (e, t) => (e && t ? "onMediaText" : "primaryText"),
                ge = x.default.create((e) => ({ cursor: { cursor: "pointer" }, headerRoot: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge, transition: "all 0.3s ease" }, headerBorderClosed: { borderColor: e.colors.navigationBackground }, headerActive: { backgroundColor: e.colors.unreadCellBackground }, headerHighlighted: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, roundedAppBarCorners: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge } }));
            function me({ conversationSubtitle: e, conversationTitle: t, inboxUnreadCount: r, isConversationUnread: a = !1, isHighlighted: i, onDrawerOpen: o, triggerHighlight: s }) {
                const c = (0, l.v9)(k.QA),
                    u = (0, l.v9)(d.gw);
                return n.createElement(he, { conversationSubtitle: e, conversationTitle: t, inboxUnreadCount: c, isConversationUnread: !!u && a, isHighlighted: i, onDrawerOpen: o, triggerHighlight: s });
            }
            var ve = r(24949),
                Ee = r(297436),
                fe = r(668214),
                we = r(289405),
                be = r(798538),
                De = r(38562),
                Ce = r(131290),
                ye = r(601576),
                xe = r(919022),
                He = r(593953);
            const Ze = (e, t) => t.conversationId,
                Se = (0, ve.P1)(
                    (e, t) => c.selectEntriesForConversation(e, Ze(0, t)),
                    b._h,
                    (e, t) => (t ? (0, He.y9)(e, t) : void 0),
                ),
                Te = (e) => (t) => be.De(e, t),
                Pe = (e) => (t, r) => be.rA(e, t, r),
                Ie = { conversation: (e, t) => c.selectConversation(e, Ze(0, t)), entries: c.selectEntries, perspective: b._h, users: xe.ZP.selectAll, dataSaverMode: De.IX, dtabBarInfo: we.U6, quickReplyOptions: Se, visibility: d.kX, inboxUnreadCount: k.QA, isUnread: (e, t) => !c.selectConversationIsRead(e, Ze(0, t)), isDmReceiptSettingEnabled: Ce.cn },
                Re = { draftText: (e, t) => be.vb(e, Ze(0, t)), gifMetadata: (e, t) => be.Tu(e, Ze(0, t)), isUploading: (e, t) => be.q9(e, Ze(0, t)), media: (e, t) => be.W8(e, Ze(0, t)), mediaUploadProgress: (e, t) => be.Ah(e, Ze(0, t)) },
                _e = (0, fe.Z)()
                    .propsFromState(() => ({ ...Ie, ...Re }))
                    .adjustStateProps(({ conversation: e, dataSaverMode: t, draftText: r, dtabBarInfo: n, entries: a, gifMetadata: i, inboxUnreadCount: o, isDmReceiptSettingEnabled: s, isUnread: l, isUploading: c, media: d, mediaUploadProgress: u, perspective: h, quickReplyOptions: p, users: g, visibility: m }) => {
                        const v = e?.data;
                        return { conversation: v && (0, Ee.lk)(v, a, g), perspective: h, dataSaverMode: t, draftText: r, dtabBarInfo: n, gifMetadata: i, inboxUnreadCount: o, isDmReceiptSettingEnabled: s, isUploading: c, isUnread: l, media: d, mediaUploadProgress: u, quickReplyOptions: p, visibility: m };
                    })
                    .propsFromActions(({ conversationId: e }) => ({ addMedia: Pe(e), addToast: ye.fz, createLocalApiErrorHandler: (0, s.zr)("DIRECT_MESSAGES_CONVERSATION"), fetchConversationHistory: c.fetchConversationHistory, removeMedia: Te(e), saveText: be.E4, sendMessage: be.bG, updateConversationReadState: c.updateConversationReadState, fetchUpdatesIfNeeded: c.fetchUpdatesIfNeeded }))
                    .withAnalytics({ page: "messages", section: "thread_drawer" });
            class Me extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._composer = n.createRef()),
                        (this._renderConversation = (e, t) => {
                            const { conversationId: r, history: a, location: i, typingNotifier: o } = this.props;
                            return n.createElement(A.Z, { conversationId: r, drawerHeader: this._renderHeader(), history: a, isWide: !1, location: i, richTextInputContext: e, typeaheadWrapper: t, typingNotifier: o });
                        }),
                        (this._isExpanded = () => {
                            const { visibility: e } = this.props;
                            return e === w.S.EXPANDED;
                        }),
                        (this._fetchUpdatesIfNeeded = () => {
                            const { conversationId: e, createLocalApiErrorHandler: t, fetchUpdatesIfNeeded: r, isDmReceiptSettingEnabled: n } = this.props;
                            r(n ? { active_conversation_id: e, dm_users: !0 } : {}).catch(t());
                        }),
                        (0, S.Z)();
                }
                componentDidMount() {
                    this._updatePolling();
                }
                componentDidUpdate(e) {
                    e.visibility !== this.props.visibility && this._updatePolling();
                }
                render() {
                    const e = this._isExpanded();
                    return n.createElement(R.y3.Provider, { value: void 0 }, !e && this._renderHeader(), e ? (H.ZP.isDesktopOS() ? n.createElement(T, null, ({ richTextInputContext: e, typeaheadWrapper: t }) => this._renderConversation(e, t)) : this._renderConversation()) : null);
                }
                _renderHeader() {
                    const { conversation: e, conversationId: t, inboxUnreadCount: r, isHeaderHighlighted: a, isUnread: i, onDrawerOpen: o, perspective: s, triggerHeaderHighlight: l } = this.props,
                        c = a ? "white" : "text",
                        d = a ? "white" : "gray700",
                        u = e && (e.type === _.eD.ONE_TO_ONE || e.type === _.eD.SECRET_ONE_TO_ONE) && s && (0, I.Z)(e, s).map(({ user: e }) => e.screen_name),
                        p = u ? n.createElement(y.Z, { color: d, screenName: u[0] }) : void 0;
                    return n.createElement(h.Z, { style: Ue.headerRoot }, n.createElement(U._g.Provider, { value: t }, n.createElement(me, { conversationSubtitle: p, conversationTitle: n.createElement(M.Z, { conversation: e, perspective: s, textColor: c, withScreenName: !1 }), inboxUnreadCount: r, isConversationUnread: i, isHighlighted: a, onDrawerOpen: o, triggerHighlight: l })));
                }
                _updatePolling() {
                    this._pollingTimer && this._pollingTimer.stop(), this.props.visibility === w.S.COLLAPSED && ((this._pollingTimer = new P.Z(this._fetchUpdatesIfNeeded, { interval: 3e3 })), this._pollingTimer.start());
                }
            }
            Me.contextType = Z.rC;
            const Ue = x.default.create((e) => ({ headerRoot: { position: "sticky", top: 0, zIndex: e.componentZIndices.appBarZIndex } })),
                Ae = _e(Me);
            var ke = r(293115),
                Oe = r(715601),
                Ne = r(602920),
                Le = r(161821),
                We = r(973572),
                Fe = r(234296),
                Be = r(288331),
                qe = r(826760),
                Xe = r(149290),
                Ge = r(763526);
            const ze = z().a2f81050;
            function Ve({ dmDrawerOnClick: e, drawerCacheKey: t }) {
                const r = (0, F.z)(),
                    a = (0, l.I0)(),
                    i = (0, l.v9)(c.selectConversations),
                    o = [];
                for (const e of (0, Le.Z)(i)) !e.isDeleted && e.data?.trusted && o.push(e.data);
                o.sort(Fe.Z);
                const s = o.map((e) => e.conversation_id),
                    d = (0, l.v9)(De.Kp),
                    u = (0, l.v9)(c.selectUntrustedLowQualityConversationCount),
                    h = (0, l.v9)(
                        (0, We.Z)(
                            (e) => c.selectUntrustedCounts(e),
                            (e) => e,
                        ),
                    ),
                    p = h.newUntrustedWithSocialProof + h.oldUntrustedWithSocialProof + h.newUntrustedWithoutSocialProof + h.oldUntrustedWithoutSocialProof,
                    g = d && (p > 0 || u > 0),
                    m = () => n.createElement(n.Fragment, null, n.createElement(Ge.J, null), n.createElement(Xe.Z, { allowUntrustedInbox: g, secondaryInboxCounts: h }));
                return n.createElement(Be.Z, { accessibilityTitle: ze, analytics: r, conversationIds: s, customCellClick: e, fetchInboxHistory: () => a(c.fetchTrustedInboxHistory()), isDrawer: !0, renderEmptyDMInbox: () => n.createElement(qe.Z, { messageRequestPivot: m() }), renderStickyContent: m, updateLastSeenEventId: () => a(c.updateTrustedLastSeenEventId()), virtualScrollerCacheKey: t, withPinnedInbox: !0 });
            }
            const Ke = "dmDrawerInbox";
            function Ye({ renderHeader: e }) {
                const t = (0, l.I0)();
                return n.createElement(
                    h.Z,
                    { style: je.fill },
                    n.createElement(
                        h.Z,
                        { style: [je.viewportView, Ne.Z.drawerHeaderRadius] },
                        n.createElement(
                            Oe.Z,
                            { style: [je.viewportView, Ne.Z.drawerHeaderRadius] },
                            e(),
                            n.createElement(Ve, {
                                dmDrawerOnClick: (e, r) => {
                                    t(d.DO(r)), e.preventDefault();
                                },
                                drawerCacheKey: Ke,
                            }),
                        ),
                    ),
                );
            }
            const je = x.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...x.default.absoluteFillObject, overflowY: "auto" } })),
                Qe = { page: "messages", section: "inbox_drawer" };
            function $e({ isHeaderHighlighted: e, onDrawerOpen: t, triggerHeaderHighlight: r }) {
                const a = (0, l.v9)(d.kX) === w.S.EXPANDED;
                n.useEffect(() => {
                    a && (0, S.Z)();
                }, [a]);
                const i = () => n.createElement(h.Z, { style: Je.headerRoot }, n.createElement(me, { isHighlighted: e, onDrawerOpen: t, triggerHighlight: r }));
                return n.createElement(ke.nO, { namespace: Qe }, n.createElement(n.Fragment, null, !a && i(), a && n.createElement(Ye, { renderHeader: i })));
            }
            const Je = x.default.create((e) => ({ headerRoot: { position: "sticky", top: 0, zIndex: e.componentZIndices.appBarZIndex } })),
                et = 3e3,
                tt = { isGlobal: !0, isSticky: !0 },
                rt = { isGlobal: !0, isSticky: !1 };
            function nt({ hasConversations: e, isHideDMDrawerPath: t, width: r = f.Z.dmDrawerWidth.max }) {
                const i = n.useRef(null),
                    o = (0, a.useHistory)(),
                    s = (0, a.useLocation)(),
                    c = (0, l.v9)(b._h),
                    y = (0, l.v9)(d.gw),
                    x = (0, l.v9)((e) => d.kX(e)),
                    H = (0, D.N)(),
                    [Z, S] = n.useState(!1),
                    [T, P] = n.useState(void 0),
                    I = x === w.S.EXPANDED,
                    R = () => {
                        Z && (S(!1), clearTimeout(i.current));
                    },
                    _ = (e) => {
                        const {
                            nativeEvent: {
                                layout: { height: t },
                            },
                        } = e;
                        I || void 0 !== T || P(t);
                    },
                    M = n.useCallback(() => {
                        I ||
                            Z ||
                            i.current ||
                            (S(!0),
                            (i.current = setTimeout(() => {
                                S(!1), (i.current = null);
                            }, et)));
                    }, [I, Z]);
                n.useEffect(
                    () => () => {
                        clearTimeout(i.current);
                    },
                    [i],
                );
                const U = (function (e) {
                        const [t, r] = n.useState(e);
                        if (
                            (n.useEffect(() => {
                                if (!e && t) {
                                    let t;
                                    const n = window.requestAnimationFrame(() => {
                                        t = window.requestAnimationFrame(() => {
                                            r(e);
                                        });
                                    });
                                    return () => {
                                        cancelAnimationFrame(n), cancelAnimationFrame(t);
                                    };
                                }
                            }, [t, e]),
                            !e && t)
                        )
                            return !0;
                        e && !t && r(e);
                        return !1;
                    })(I),
                    A = n.useRef(),
                    k = I ? { transform: [{ translateY: 0 }] } : U ? { transition: "none", transform: [{ translateY: `calc(100% - ${A.current?.getBoundingClientRect().height ?? 0}px` }] } : { transform: [{ translateY: `calc(100% - ${T ?? 0}px` }] },
                    O = (function (e) {
                        const [t, r] = n.useState(!1);
                        return (
                            n.useEffect(() => {
                                if (e) {
                                    let e;
                                    const t = window.requestAnimationFrame(() => {
                                        e = window.requestAnimationFrame(() => {
                                            r(!0);
                                        });
                                    });
                                    return () => {
                                        cancelAnimationFrame(t), cancelAnimationFrame(e);
                                    };
                                }
                            }, [e]),
                            t
                        );
                    })(!!T);
                return (() => {
                    const r = x === w.S.CLOSED;
                    return !t() && e && !r;
                })()
                    ? n.createElement(
                          p.Z.Drawer,
                          null,
                          n.createElement(g.Z, { id: "DMDrawer" }, (e, t) => n.createElement(C.Z.Provider, { value: { isDrawer: !0 } }, n.createElement(m.ZP.Provider, { value: { isDMDrawer: () => !0 } }, n.createElement(h.Z, (0, u.Z)({ ref: e() }, t({ style: [Ne.Z.root, O && Ne.Z.expandable, !I && T && { height: T, maxHeight: T }, { width: r }, k, v.Z.reducedMotionEnabled && Ne.Z.reducedMotion], testID: B.root })), n.createElement(h.Z, { onLayout: T ? void 0 : _, ref: A, style: [I ? Ne.Z.expanded : null, Ne.Z.main] }, y ? n.createElement(E.Z.Provider, { value: rt }, n.createElement(Ae, { conversationId: y, history: o, isHeaderHighlighted: Z, location: s, onDrawerOpen: R, perspective: c, triggerHeaderHighlight: M, typingNotifier: H })) : n.createElement(E.Z.Provider, { value: tt }, n.createElement($e, { isHeaderHighlighted: Z, onDrawerOpen: R, triggerHeaderHighlight: M }))))))),
                      )
                    : null;
            }
            function at({ isHideDMDrawerPath: e, width: t }) {
                const r = (0, s.n7)("DIRECT_MESSAGES_DRAWER"),
                    a = (0, l.I0)(),
                    [i, u] = n.useState(!1),
                    h = (0, l.v9)(c.selectConversations),
                    p = !(0, o.Z)(h),
                    g = n.useCallback(() => {
                        e() || i || (a(d.VP()), a(c.fetchInboxIfNeeded()).catch(r({})), u(!0));
                    }, [r, a, i, e]);
                return (
                    n.useEffect(() => {
                        g();
                    }, [g]),
                    n.createElement(nt, { hasConversations: p, isHideDMDrawerPath: e, width: t })
                );
            }
            function it({ width: e }) {
                const t = (0, a.useHistory)(),
                    r = t.getLastNonModalLocationPathname() ?? t.location.pathname,
                    o = n.useCallback(() => (0, i.z)(r) || r.startsWith("/i/chat") || r.startsWith("/i/communitynotes") || r.startsWith("/i/money") || r.startsWith("/i/verified") || r.startsWith("/i/conferences-room") || r.startsWith("/i/grok"), [r]);
                return n.createElement(at, { isHideDMDrawerPath: o, width: e });
            }
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => a, Z: () => n });
            r(136728);
            const n = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (r, n, a) => {
                        const i = t ? t(n, a, e) : !!n;
                        return i && r[0].push(n), !i && r[1].push(n), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DMDrawer.a62ce5da.js.map
