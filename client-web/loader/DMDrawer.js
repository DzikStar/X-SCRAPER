"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DMDrawer", "icons/IconDoubleChevronUp-js"],
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
                y = r(715913),
                C = r(601413),
                x = r(392237),
                Z = r(323265),
                H = r(443781),
                S = r(740633);
            const T = (0, r(523561).Z)({ loader: () => r.e("ondemand.RichText").then(r.bind(r, 687184)) });
            var I = r(111311),
                P = r(198506),
                R = r(768572),
                _ = r(275365),
                M = r(255534),
                U = r(164383),
                A = r(587521),
                k = r(806960),
                O = r(786998),
                L = r(516951),
                N = r(933794),
                W = r(163390),
                F = r(725516);
            const B = { header: "DMDrawerHeader", headerHighlighted: "DMDrawerHeaderHighlighted", root: "DMDrawer" };
            var q = r(154003),
                X = r(310088),
                z = r(111677),
                G = r.n(z),
                V = r(894966);
            const K = G().b08821f4;
            function j({ buttonType: e, hasNewMessages: t, inboxUnreadCount: r }) {
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
                    i ? n.createElement(X.Z, { pip: !0, style: Y.newMessagePip, truncatedCountFormatter: () => "", unreadCountLabel: () => "" }) : null,
                );
            }
            const Y = x.default.create((e) => ({ newMessagePip: { end: e.spaces.space4, top: e.spaces.space4 } }));
            r(136728);
            var Q = r(324922),
                $ = r(867492),
                J = r(377782);
            const ee = G().d227d19e,
                te = G().c64c1884,
                re = G().j7d0e836,
                ne = G().cdcebd22;
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
            const le = G().a2f81050,
                ce = G().e736990a;
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
                    N.Z,
                    {
                        enabled: !0,
                        handlers: {
                            [W.uq.goLists]: L.Z,
                            [W.uq.toggleDMDrawer]: () => {
                                f(), c && c.current && c.current.focus();
                            },
                        },
                    },
                    n.createElement(h.Z, { ref: c, style: [ge.headerRoot, !v && ge.headerBorderClosed, ...b, ge.cursor], testID: i ? B.headerHighlighted : B.header }, n.createElement(O.Z, { leftControl: t && v ? n.createElement(j, { buttonType: m, hasNewMessages: r > 0, inboxUnreadCount: r }) : null, onMiddleControlClick: f, rightControl: n.createElement(ae, { analytics: u, buttonType: m, conversationTitle: t, handleToggleVisibility: f, isExpanded: v }), style: ge.roundedAppBarCorners, subtitle: e, title: n.createElement(de, { conversationTitle: t, hasNewMessages: r > 0, isConversationUnread: a, isHighlighted: i }), withBackground: !i })),
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
                ye = r(131290),
                Ce = r(601576),
                xe = r(919022),
                Ze = r(593953);
            const He = (e, t) => t.conversationId,
                Se = (0, ve.P1)(
                    (e, t) => c.selectEntriesForConversation(e, He(0, t)),
                    b._h,
                    (e, t) => (t ? (0, Ze.y9)(e, t) : void 0),
                ),
                Te = (e) => (t) => be.De(e, t),
                Ie = (e) => (t, r) => be.rA(e, t, r),
                Pe = { conversation: (e, t) => c.selectConversation(e, He(0, t)), entries: c.selectEntries, perspective: b._h, users: xe.ZP.selectAll, dataSaverMode: De.IX, dtabBarInfo: we.U6, quickReplyOptions: Se, visibility: d.kX, inboxUnreadCount: k.QA, isUnread: (e, t) => !c.selectConversationIsRead(e, He(0, t)), isDmReceiptSettingEnabled: ye.cn },
                Re = { draftText: (e, t) => be.vb(e, He(0, t)), gifMetadata: (e, t) => be.Tu(e, He(0, t)), isUploading: (e, t) => be.q9(e, He(0, t)), media: (e, t) => be.W8(e, He(0, t)), mediaUploadProgress: (e, t) => be.Ah(e, He(0, t)) },
                _e = (0, fe.Z)()
                    .propsFromState(() => ({ ...Pe, ...Re }))
                    .adjustStateProps(({ conversation: e, dataSaverMode: t, draftText: r, dtabBarInfo: n, entries: a, gifMetadata: i, inboxUnreadCount: o, isDmReceiptSettingEnabled: s, isUnread: l, isUploading: c, media: d, mediaUploadProgress: u, perspective: h, quickReplyOptions: p, users: g, visibility: m }) => {
                        const v = e?.data;
                        return { conversation: v && (0, Ee.lk)(v, a, g), perspective: h, dataSaverMode: t, draftText: r, dtabBarInfo: n, gifMetadata: i, inboxUnreadCount: o, isDmReceiptSettingEnabled: s, isUploading: c, isUnread: l, media: d, mediaUploadProgress: u, quickReplyOptions: p, visibility: m };
                    })
                    .propsFromActions(({ conversationId: e }) => ({ addMedia: Ie(e), addToast: Ce.fz, createLocalApiErrorHandler: (0, s.zr)("DIRECT_MESSAGES_CONVERSATION"), fetchConversationHistory: c.fetchConversationHistory, removeMedia: Te(e), saveText: be.E4, sendMessage: be.bG, updateConversationReadState: c.updateConversationReadState, fetchUpdatesIfNeeded: c.fetchUpdatesIfNeeded }))
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
                    return n.createElement(R.y3.Provider, { value: void 0 }, !e && this._renderHeader(), e ? (Z.ZP.isDesktopOS() ? n.createElement(T, null, ({ richTextInputContext: e, typeaheadWrapper: t }) => this._renderConversation(e, t)) : this._renderConversation()) : null);
                }
                _renderHeader() {
                    const { conversation: e, conversationId: t, inboxUnreadCount: r, isHeaderHighlighted: a, isUnread: i, onDrawerOpen: o, perspective: s, triggerHeaderHighlight: l } = this.props,
                        c = a ? "white" : "text",
                        d = a ? "white" : "gray700",
                        u = e && (e.type === _.eD.ONE_TO_ONE || e.type === _.eD.SECRET_ONE_TO_ONE) && s && (0, P.Z)(e, s).map(({ user: e }) => e.screen_name),
                        p = u ? n.createElement(C.Z, { color: d, screenName: u[0] }) : void 0;
                    return n.createElement(h.Z, { style: Ue.headerRoot }, n.createElement(U._g.Provider, { value: t }, n.createElement(me, { conversationSubtitle: p, conversationTitle: n.createElement(M.Z, { conversation: e, perspective: s, textColor: c, withScreenName: !1 }), inboxUnreadCount: r, isConversationUnread: i, isHighlighted: a, onDrawerOpen: o, triggerHighlight: l })));
                }
                _updatePolling() {
                    this._pollingTimer && this._pollingTimer.stop(), this.props.visibility === w.S.COLLAPSED && ((this._pollingTimer = new I.Z(this._fetchUpdatesIfNeeded, { interval: 3e3 })), this._pollingTimer.start());
                }
            }
            Me.contextType = H.rC;
            const Ue = x.default.create((e) => ({ headerRoot: { position: "sticky", top: 0, zIndex: e.componentZIndices.appBarZIndex } })),
                Ae = _e(Me);
            var ke = r(293115),
                Oe = r(715601),
                Le = r(602920),
                Ne = r(161821),
                We = r(973572),
                Fe = r(234296),
                Be = r(288331),
                qe = r(826760),
                Xe = r(149290),
                ze = r(763526);
            const Ge = G().a2f81050;
            function Ve({ dmDrawerOnClick: e, drawerCacheKey: t }) {
                const r = (0, F.z)(),
                    a = (0, l.I0)(),
                    i = (0, l.v9)(c.selectConversations),
                    o = [];
                for (const e of (0, Ne.Z)(i)) !e.isDeleted && e.data?.trusted && o.push(e.data);
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
                    m = () => n.createElement(n.Fragment, null, n.createElement(ze.J, null), n.createElement(Xe.Z, { allowUntrustedInbox: g, secondaryInboxCounts: h }));
                return n.createElement(Be.Z, { accessibilityTitle: Ge, analytics: r, conversationIds: s, customCellClick: e, fetchInboxHistory: () => a(c.fetchTrustedInboxHistory()), isDrawer: !0, renderEmptyDMInbox: () => n.createElement(qe.Z, { messageRequestPivot: m() }), renderStickyContent: m, updateLastSeenEventId: () => a(c.updateTrustedLastSeenEventId()), virtualScrollerCacheKey: t, withPinnedInbox: !0 });
            }
            const Ke = "dmDrawerInbox";
            function je({ renderHeader: e }) {
                const t = (0, l.I0)();
                return n.createElement(
                    h.Z,
                    { style: Ye.fill },
                    n.createElement(
                        h.Z,
                        { style: [Ye.viewportView, Le.Z.drawerHeaderRadius] },
                        n.createElement(
                            Oe.Z,
                            { style: [Ye.viewportView, Le.Z.drawerHeaderRadius] },
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
            const Ye = x.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...x.default.absoluteFillObject, overflowY: "auto" } })),
                Qe = { page: "messages", section: "inbox_drawer" };
            function $e({ isHeaderHighlighted: e, onDrawerOpen: t, triggerHeaderHighlight: r }) {
                const a = (0, l.v9)(d.kX) === w.S.EXPANDED;
                n.useEffect(() => {
                    a && (0, S.Z)();
                }, [a]);
                const i = () => n.createElement(h.Z, { style: Je.headerRoot }, n.createElement(me, { isHighlighted: e, onDrawerOpen: t, triggerHighlight: r }));
                return n.createElement(ke.nO, { namespace: Qe }, n.createElement(n.Fragment, null, !a && i(), a && n.createElement(je, { renderHeader: i })));
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
                    C = (0, l.v9)(d.gw),
                    x = (0, l.v9)((e) => d.kX(e)),
                    Z = (0, D.N)(),
                    [H, S] = n.useState(!1),
                    [T, I] = n.useState(void 0),
                    P = x === w.S.EXPANDED,
                    R = () => {
                        H && (S(!1), clearTimeout(i.current));
                    },
                    _ = (e) => {
                        const {
                            nativeEvent: {
                                layout: { height: t },
                            },
                        } = e;
                        P || void 0 !== T || I(t);
                    },
                    M = n.useCallback(() => {
                        P ||
                            H ||
                            i.current ||
                            (S(!0),
                            (i.current = setTimeout(() => {
                                S(!1), (i.current = null);
                            }, et)));
                    }, [P, H]);
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
                    })(P),
                    A = n.useRef(),
                    k = P ? { transform: [{ translateY: 0 }] } : U ? { transition: "none", transform: [{ translateY: `calc(100% - ${A.current?.getBoundingClientRect().height ?? 0}px` }] } : { transform: [{ translateY: `calc(100% - ${T ?? 0}px` }] },
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
                          n.createElement(g.Z, { id: "DMDrawer" }, (e, t) => n.createElement(y.Z.Provider, { value: { isDrawer: !0 } }, n.createElement(m.ZP.Provider, { value: { isDMDrawer: () => !0 } }, n.createElement(h.Z, (0, u.Z)({ ref: e() }, t({ style: [Le.Z.root, O && Le.Z.expandable, !P && T && { height: T, maxHeight: T }, { width: r }, k, v.Z.reducedMotionEnabled && Le.Z.reducedMotion], testID: B.root })), n.createElement(h.Z, { onLayout: T ? void 0 : _, ref: A, style: [P ? Le.Z.expanded : null, Le.Z.main] }, C ? n.createElement(E.Z.Provider, { value: rt }, n.createElement(Ae, { conversationId: C, history: o, isHeaderHighlighted: H, location: s, onDrawerOpen: R, perspective: c, triggerHeaderHighlight: M, typingNotifier: Z })) : n.createElement(E.Z.Provider, { value: tt }, n.createElement($e, { isHeaderHighlighted: H, onDrawerOpen: R, triggerHeaderHighlight: M }))))))),
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
        377782: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                i = r(783427),
                o = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2.59l9.46 9.45-1.42 1.42L12 5.41l-8.04 8.05-1.42-1.42L12 2.59zm0 7l9.46 9.45-1.42 1.42L12 12.41l-8.04 8.05-1.42-1.42L12 9.59z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DMDrawer.5714183a.js.map
