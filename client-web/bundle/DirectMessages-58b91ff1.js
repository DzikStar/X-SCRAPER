"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-58b91ff1"],
    {
        548625: (e, t, n) => {
            n.r(t), n.d(t, { POLL_INTERVAL: () => Je, default: () => Ve });
            var r = n(202784),
                s = n(545457),
                o = n(147143),
                a = n(107267),
                c = n(668214),
                l = n(296196),
                i = n(189244);
            const d = (e, t) => {
                    const n = (0, a.matchPath)(t.location.pathname, { path: `/messages/${i.UE}(/.*)?`, exact: !0, strict: !1 });
                    return n?.params.conversationId;
                },
                u = (e, t) => {
                    const n = d(0, t);
                    return (0, l.selectInboxTypeByConversation)(e, n);
                },
                m = (0, c.Z)().propsFromState(() => ({ conversationId: d, inboxType: u }));
            var p = n(554518),
                h = n(271702),
                b = n(674132),
                f = n.n(b),
                E = n(640872),
                y = n(740633),
                g = n(552378),
                C = n(507990),
                I = n(71620),
                v = n(973572),
                _ = n(38562),
                x = n(5849),
                S = n(841198),
                Z = n(312771),
                w = n(593953);
            const D = (e) => (e === o._2.PRIMARY ? l.fetchTrustedInboxHistory : e === o._2.SECONDARY ? l.fetchUntrustedInboxHistory : l.fetchUntrustedLowQualityInboxHistory),
                k = (e) => (e === o._2.PRIMARY ? l.updateTrustedLastSeenEventId : e === o._2.SECONDARY ? l.updateUntrustedLastSeenEventId : () => () => Promise.resolve()),
                T = ({ inbox: e }) =>
                    (0, c.Z)()
                        .propsFromState(() => ({
                            conversationIds: (0, v.Z)(
                                (t) => l.selectConversationIdsByInbox(t, e),
                                (e) => e,
                            ),
                            cursor: (0, v.Z)(
                                (t) => ((e) => (e === o._2.PRIMARY ? l.selectInboxCursor : e === o._2.SECONDARY ? l.selectUntrustedCursor : l.selectUntrustedLowQualityCursor))(e)(t),
                                (e) => e,
                            ),
                            dmNsfwMediaFilter: _.PJ,
                            isDmNsfwMediaFilterEnabled: _.a5,
                            isDmMessageRequestEnabled: _.Kp,
                            untrustedCounts: (0, v.Z)(
                                (e) => l.selectUntrustedCounts(e),
                                (e) => e,
                            ),
                            untrustedCursor: l.selectUntrustedCursor,
                            untrustedConversationCount: l.selectUntrustedConversationCount,
                            untrustedLowQualityConversationCount: l.selectUntrustedLowQualityConversationCount,
                            untrustedLowQualityCursor: l.selectUntrustedLowQualityCursor,
                        }))
                        .adjustStateProps(({ conversationIds: e, cursor: t, dmNsfwMediaFilter: n, isDmMessageRequestEnabled: r, isDmNsfwMediaFilterEnabled: s, untrustedConversationCount: o, untrustedCounts: a, untrustedCursor: c, untrustedLowQualityConversationCount: l }) => ({ dmNsfwMediaFilter: n, isDmNsfwMediaFilterEnabled: s, conversationIds: e, untrustedCounts: a, allowUntrustedInbox: r && (o > 0 || l > 0), allowLowQualityUntrustedInbox: r && l > 0, fetchStatus: e.length > 0 ? Z.ZP.LOADED : t.fetchStatus, isAtEndOfUntrustedInbox: c && "AT_END" === c.status, isRefreshing: e.length > 0 && t.fetchStatus === Z.ZP.LOADING }))
                        .propsFromActions(() => ({ createLocalApiErrorHandler: (0, I.zr)("DIRECT_MESSAGES_INBOX"), clearSearchCache: l.clearSearchCache, clearSearchSlicesCache: S.Ev, fetchInboxHistory: D(e), setLastViewedDmInboxPath: x.EA, updateLastSeenEventId: k(e), updateDmNsfwMediaFilter: _.Ob }))
                        .withAnalytics({ page: "messages", section: "inbox", component: (0, w.Fb)(e) });
            var R = n(340130),
                M = n(288331),
                L = n(826760),
                A = n(149290),
                P = n(325686),
                B = n(392237),
                F = n(927075),
                N = n(253493),
                O = n(655352),
                H = n(691108),
                U = n(844054);
            const Y = f().a2f81050;
            function z(e) {
                (0, s.ph)();
                const t = (0, O.ZP)() ? r.createElement(P.Z, { style: W.appBarButtons }, (0, U.I0)("/messages/settings", !1), r.createElement(F.Z, { testID: H.Z.newDM })) : (0, U.I0)("/messages/settings", !0);
                return r.createElement(N.Z, { rightControl: t, screenType: "root", title: Y }, e.children);
            }
            const W = B.default.create((e) => ({ appBarButtons: { flexDirection: "row", alignItems: "center" } }));
            var Q = n(727828),
                $ = n(443781);
            const q = () => {
                    const { featureSwitches: e, userClaims: t } = (0, $.QZ)(),
                        n = t.isAnyPremiumSubscriber(),
                        s = e.isTrue("subscriptions_upsells_dm_card_enabled");
                    return n || !s ? null : r.createElement(P.Z, { style: J.container }, r.createElement(Q.Z, { variant: "DmCard" }));
                },
                J = B.default.create((e) => ({ container: { marginHorizontal: e.spaces.space8, zIndex: 1, marginBottom: e.spaces.space8 } }));
            var V = n(763526);
            f().h6beb5fb;
            class G extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderPivot = () => {
                            const { allowUntrustedInbox: e, untrustedCounts: t } = this.props;
                            return r.createElement(r.Fragment, null, r.createElement(V.J, null), r.createElement(A.Z, { allowUntrustedInbox: e, secondaryInboxCounts: t }));
                        }),
                        (this._renderEmptyDMInbox = () => r.createElement(L.Z, { messageRequestPivot: this._renderPivot() }));
                }
                componentDidMount() {
                    const { allowUntrustedInbox: e, analytics: t, location: n, setLastViewedDmInboxPath: r } = this.props;
                    r(n.pathname), e && t.scribe({ element: "requests_pivot", action: "impression" });
                }
                componentWillUnmount() {
                    this.props.clearSearchSlicesCache(R.EL), this.props.clearSearchCache();
                }
                render() {
                    const { analytics: e, conversationIds: t, fetchInboxHistory: n, fetchStatus: s, isRefreshing: o, updateLastSeenEventId: a } = this.props;
                    return r.createElement(z, null, r.createElement(q, null), r.createElement(M.Z, { accessibilityTitle: Y, analytics: e, conversationIds: t, fetchInboxHistory: n, fetchStatus: s, isRefreshing: o, renderEmptyDMInbox: this._renderEmptyDMInbox, renderStickyContent: this._renderPivot, updateLastSeenEventId: a, virtualScrollerCacheKey: "dmInbox", withDmSearch: !0, withPinnedInbox: !0, withTagsFilter: !0 }));
                }
            }
            (G.contextType = E.Z), (G.defaultProps = { conversationIds: [], untrustedCounts: C.Y });
            const K = (0, g.C)(T({ inbox: o._2.PRIMARY })(G), { directMessages: y.Z });
            var j = n(457311),
                X = n(949718);
            function ee(e) {
                return r.createElement(r.Fragment, null, r.createElement(j.Z, { header: e.tombstone ? "" : U.$e, message: X.ZP, style: te.emptyMessage }), e.tombstone);
            }
            const te = B.default.create((e) => ({ emptyMessage: { borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space16 } }));
            var ne = n(420412),
                re = n(470015),
                se = n(725516);
            const oe = (0, c.Z)()
                    .propsFromState(() => ({ dmNsfwMediaFilter: _.PJ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, I.zr)("DIRECT_MESSAGES_INBOX"), updateDmNsfwMediaFilter: _.Ob }))
                    .withAnalytics({ page: "messages", section: "inbox" }),
                ae = f().j24c37b2,
                ce = f().f5dc353c,
                le = f().daeda054,
                ie = f().fe1eaa96,
                de = oe((e) => {
                    const { createLocalApiErrorHandler: t, dmNsfwMediaFilter: n, updateDmNsfwMediaFilter: s } = e,
                        { featureSwitches: o } = r.useContext($.rC),
                        a = o.isTrue("dm_conversations_nsfw_media_filter_enabled"),
                        [c, l] = r.useState(void 0 === n && a),
                        i = (0, se.z)(),
                        d = r.useCallback(() => {
                            l(!1), s(!0).catch(t());
                        }, [s, t]);
                    return (
                        r.useEffect(
                            () => () => {
                                void 0 === n && a && d();
                            },
                            [n, a, d],
                        ),
                        c
                            ? r.createElement(
                                  r.Fragment,
                                  null,
                                  r.createElement(re.Z, {
                                      bodyText: ie,
                                      primaryAction: {
                                          onClick: () => {
                                              i.scribe({ component: "dm_nsfw_prompt", element: "primary_action", action: "click" }), d();
                                          },
                                          text: ae,
                                      },
                                      secondaryAction: {
                                          link: "/settings/direct_messages",
                                          onClick: () => {
                                              i.scribe({ component: "dm_nsfw_prompt", element: "secondary_action", action: "click" });
                                          },
                                          text: le,
                                      },
                                      titleText: ce,
                                  }),
                                  r.createElement(ne.Z, null),
                              )
                            : null
                    );
                });
            n(136728);
            var ue = n(731708),
                me = n(190286),
                pe = n(154003),
                he = n(607127),
                be = n(837020),
                fe = n(885724),
                Ee = n(125363),
                ye = n(613195);
            const ge = { headline: f().hc32acba, text: f().f9048f58, confirmButtonLabel: f().d96cf7ce };
            function Ce(e) {
                const t = (0, p.Ao)(),
                    n = (0, p.eG)(),
                    s = (0, Ee.I0)(),
                    o = (0, a.useHistory)(),
                    [c, l] = r.useState(!1),
                    i = r.useCallback(() => {
                        n({ type: p.Pq });
                    }, [n]),
                    d = r.useCallback(() => {
                        n({ type: p.Tj });
                    }, [n]),
                    u = r.useCallback(() => {
                        l(!0);
                    }, [l]),
                    m = r.useCallback(() => {
                        l(!1);
                    }, [l]),
                    h = r.useCallback(() => {
                        s(ye.S9(t.selectedConversationIds)), n({ type: p.Tj }), o.replace((0, w.k2)(e.inboxType)), l(!1);
                    }, [n, t.selectedConversationIds, s, o, e.inboxType]),
                    b = 0 === t.selectedConversationIds.length;
                return r.createElement(P.Z, { style: Ie.container }, c ? r.createElement(me.Z, { confirmButtonLabel: ge.confirmButtonLabel, confirmButtonType: "destructiveFilled", headline: ge.headline, onCancel: m, onConfirm: h, text: ge.text }) : null, t.isSelecting ? r.createElement(r.Fragment, null, r.createElement(pe.ZP, { "aria-label": _e, disabled: b, hoverLabel: xe, icon: ve, onClick: u, pullRight: !0, type: "primaryText" }), r.createElement(pe.ZP, { "aria-label": Ze, hoverLabel: we, icon: Se, onClick: d, pullRight: !0, type: "primaryText" })) : r.createElement(pe.ZP, { "aria-label": ke, hoverLabel: Te, icon: De, onClick: i, pullRight: !0, type: "primaryText" }));
            }
            const Ie = B.default.create((e) => ({ container: { flexDirection: "row", alignItems: "center" }, deleteIcon: { color: e.colors.red500 } })),
                ve = r.createElement(he.default, { style: Ie.deleteIcon }),
                _e = f().d96cf7ce,
                xe = { label: _e },
                Se = r.createElement(be.default, null),
                Ze = f().cfd2f35e,
                we = { label: Ze },
                De = r.createElement(fe.default, null),
                ke = f().a9d0d7f0,
                Te = { label: ke },
                Re = f().cf2d1048;
            function Me(e) {
                const t = (0, a.useHistory)(),
                    n = (0, a.useRouteMatch)(),
                    { featureSwitches: s } = r.useContext($.rC),
                    c = s.isTrue("dm_bulk_delete_enabled");
                return r.createElement(
                    N.Z,
                    {
                        backLocation: "/messages",
                        onBackClick: () => {
                            t.push((0, U.Jn)(o._2.PRIMARY));
                        },
                        rightControl: r.createElement(P.Z, { style: Le.rightControlRoot }, (0, U.I0)("/settings/direct_messages", !0), c ? r.createElement(Ce, { inboxType: o._2.SECONDARY }) : null),
                        screenType: "secondaryRoot",
                        title: r.createElement(ue.ZP, { size: "headline2" }, Re),
                        withDetailOpen: !n.isExact,
                    },
                    e.children,
                );
            }
            const Le = B.default.create((e) => ({ rightControlRoot: { flexDirection: "row", alignItems: "center" } }));
            var Ae = n(530732);
            const Pe = f().eb7de4aa,
                Be = f().a0e81a2e;
            function Fe(e) {
                const { isAtEndOfUntrustedInbox: t, untrustedConversationIds: n } = e,
                    s = (0, se.z)(),
                    a = (0, Ee.v9)(_.Rh);
                r.useEffect(() => {
                    a && t && s.scribe({ element: "low_quality_pivot", action: "impression" });
                }, [s, t, a]);
                return t && a
                    ? r.createElement(
                          P.Z,
                          null,
                          n.length > 0 && r.createElement(ne.Z, null),
                          r.createElement(P.Z, { style: Ne.tombstoneDescription }, r.createElement(ue.ZP, { color: "gray700", size: "subtext2" }, Pe)),
                          r.createElement(
                              Ae.Z,
                              {
                                  link: (0, U.Jn)(o._2.TERTIARY),
                                  onPress: () => {
                                      s.scribe({ element: "low_quality_pivot", action: "click" });
                                  },
                                  style: Ne.tombstoneContainer,
                              },
                              r.createElement(ue.ZP, { align: "center", color: "primary", size: "body" }, Be),
                          ),
                      )
                    : null;
            }
            const Ne = B.default.create((e) => ({ tombstoneContainer: { borderTopStyle: "solid", borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small, paddingVertical: e.spaces.space12 }, tombstoneDescription: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space16 } }));
            class Oe extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.componentDidMount = () => {
                            this.context.incrementDmDrawerSuppressorCount();
                        }),
                        (this.componentWillUnmount = () => {
                            this.context.decrementDmDrawerSuppressorCount();
                        }),
                        (this._renderTombstone = () => {
                            const { allowLowQualityUntrustedInbox: e, conversationIds: t, isAtEndOfUntrustedInbox: n } = this.props;
                            return e ? r.createElement(Fe, { isAtEndOfUntrustedInbox: n, untrustedConversationIds: t }) : null;
                        }),
                        (this._renderEmptyDMInbox = () => {
                            const e = this._renderTombstone();
                            return r.createElement(ee, { tombstone: e });
                        });
                }
                render() {
                    const { analytics: e, conversationIds: t, fetchInboxHistory: n, fetchStatus: s, isRefreshing: a, updateLastSeenEventId: c } = this.props;
                    return r.createElement(Me, null, r.createElement(de, null), r.createElement(M.Z, { accessibilityTitle: Re, analytics: e, conversationIds: t, fetchInboxHistory: n, fetchStatus: s, footer: this._renderTombstone(), inboxType: o._2.SECONDARY, isRefreshing: a, renderEmptyDMInbox: this._renderEmptyDMInbox, renderStickyContent: () => (0, U.LA)(this.props.conversationIds), updateLastSeenEventId: c, virtualScrollerCacheKey: "dmUntrustedInbox" }));
                }
            }
            (Oe.contextType = E.Z), (Oe.defaultProps = { conversationIds: [] });
            const He = (0, g.C)(T({ inbox: o._2.SECONDARY })(Oe), { directMessages: y.Z });
            function Ue(e) {
                return r.createElement(j.Z, { header: U.$e, message: X.ZP });
            }
            function Ye(e) {
                const t = (0, a.useHistory)(),
                    n = (0, a.useRouteMatch)(),
                    { featureSwitches: s } = r.useContext($.rC),
                    c = s.isTrue("dm_bulk_delete_enabled");
                return r.createElement(
                    N.Z,
                    {
                        backLocation: (0, U.Jn)(o._2.SECONDARY),
                        onBackClick: () => {
                            t.push((0, U.Jn)(o._2.SECONDARY));
                        },
                        rightControl: r.createElement(P.Z, { style: ze.rightControlRoot }, (0, U.I0)("/settings/direct_messages", !0), c ? r.createElement(Ce, { inboxType: o._2.TERTIARY }) : null),
                        screenType: "secondaryRoot",
                        title: U.lW,
                        withDetailOpen: !n.isExact,
                    },
                    e.children,
                );
            }
            const ze = B.default.create((e) => ({ rightControlRoot: { flexDirection: "row", alignItems: "center" } })),
                We = f().bece84b4,
                Qe = f().ee8c0c8a;
            class $e extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.componentDidMount = () => {
                            this.context.incrementDmDrawerSuppressorCount();
                        }),
                        (this.componentWillUnmount = () => {
                            this.context.decrementDmDrawerSuppressorCount();
                        }),
                        (this._renderEmptyDMInbox = () => r.createElement(j.Z, { header: We, message: Qe })),
                        (this._handleBackClick = () => {
                            this.props.history.push((0, U.Jn)(o._2.SECONDARY));
                        }),
                        (this._hasDetailOpen = () => {
                            const { match: e } = this.props;
                            return !e.isExact;
                        });
                }
                render() {
                    const { analytics: e, conversationIds: t, fetchInboxHistory: n, fetchStatus: s, isRefreshing: a, updateLastSeenEventId: c } = this.props;
                    return r.createElement(Ye, null, r.createElement(M.Z, { accessibilityTitle: U.lW, analytics: e, conversationIds: t, fetchInboxHistory: n, fetchStatus: s, inboxType: o._2.TERTIARY, isRefreshing: a, renderEmptyDMInbox: () => r.createElement(Ue, null), renderStickyContent: () => (0, U.LA)(this.props.conversationIds), updateLastSeenEventId: c, virtualScrollerCacheKey: "dmLowQualityUntrustedInbox" }));
                }
            }
            $e.contextType = E.Z;
            const qe = (0, g.C)(T({ inbox: o._2.TERTIARY })($e), { directMessages: y.Z }),
                Je = 8e3,
                Ve = m((e) => {
                    const { conversationId: t, inboxType: n, ...a } = e,
                        { location: c } = e;
                    (0, s.ph)();
                    const l = r.useMemo(() => (n === o._2.TERTIARY || "/messages/requests/additional" === c.pathname ? r.createElement(qe, a) : n === o._2.SECONDARY || "/messages/requests" === c.pathname ? r.createElement(He, a) : r.createElement(K, a)), [n, c.pathname, a]);
                    return r.createElement(p.OI, null, r.createElement(h.s, null, l));
                });
        },
        39718: (e, t, n) => {
            n.r(t), n.d(t, { DMMediaScreen: () => g, default: () => C });
            var r = n(202784),
                s = n(688715),
                o = n(123751),
                a = n(300234),
                c = n(827094),
                l = n(449067),
                i = n(965728),
                d = n(24949),
                u = n(668214),
                m = n(296196),
                p = n(659773);
            const h = (e, t) => t.match.params.conversationId,
                b = (e, t) => t.match.params.entryId,
                f = (e, t) => m.selectEntry(e, b(0, t));
            function E(e) {
                return e && (e.media_url_https = (0, s.ib)(e.media_url_https)), e;
            }
            const y = (0, u.Z)()
                    .propsFromState(() => ({
                        conversationId: h,
                        dataSaver: p.IX,
                        mediaItem: (0, d.P1)(f, (e) => {
                            const t = e?.message_data?.attachment;
                            return t && t.photo ? E(t.photo) : t && t.animated_gif ? E(t?.animated_gif) : t && t.video ? E(t.video) : void 0;
                        }),
                        messageId: b,
                    }))
                    .withAnalytics({ page: "messages", section: "media" }),
                g = (e) => {
                    const { conversationId: t, dataSaver: n, history: d, mediaItem: u, messageId: m } = e,
                        p = (0, i.Rb)(u),
                        { handleMediaDetailZoomed: h, handleMediaItemTapped: b, hideButtons: f } = (0, i.sI)(),
                        E = () => {
                            const e = t ? `/messages/${t}` : "/messages";
                            d.goBack({ backLocation: e });
                        };
                    return (
                        r.useEffect(() => {
                            u || d.replace(t ? `/messages/${t}` : "/messages");
                        }, [d, t, u]),
                        u && (u.media_url_https = (0, s.ib)(u.media_url_https)),
                        u ? r.createElement(l.Z.Configure, { headerless: !0 }, r.createElement(c.Z, { backgroundColor: p, hideButtons: f, mediaItem: u, onCloseButtonPress: E }, r.createElement(a.Z, { dataSaver: n, mediaItems: [u], onDismiss: E, onMediaDetailZoomed: h, onTap: b, videoId: o.Z.forDm(m) }))) : null
                    );
                },
                C = y(g);
        },
        440880: (e, t, n) => {
            n.r(t), n.d(t, { DMParticipantsScreen: () => _, default: () => S });
            var r = n(202784),
                s = n(392237),
                o = n(674132),
                a = n.n(o),
                c = n(290402),
                l = n(253493),
                i = n(715601),
                d = n(62857),
                u = n(8448),
                m = n(655352),
                p = n(71620),
                h = n(668214),
                b = n(296196),
                f = n(390387);
            const E = (e, t) => t.match.params.conversationId,
                y = (e, t) => b.selectConversationFetchStatus(e, E(0, t)),
                g = (e, t) => b.selectConversation(e, E(0, t))?.data,
                C = (0, h.Z)()
                    .propsFromState(() => ({ conversationId: E, fetchStatus: y, perspective: f._h, conversation: g }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, p.zr)("DIRECT_MESSAGES_PARTICIPANTS"), fetchConversationIfNeeded: b.fetchConversationIfNeeded }))
                    .withAnalytics({ page: "messages", section: "view_participants" }),
                I = a().g2fd3206,
                v = a().d4986f86;
            function _(e) {
                const { conversation: t, conversationId: n, createLocalApiErrorHandler: s, fetchConversationIfNeeded: o, fetchStatus: a } = e,
                    p = r.useCallback(() => {
                        o({ conversationId: n }).catch(s((0, u.q)(n)));
                    }, [s, n, o]),
                    h = r.useCallback(() => {
                        const e = (t?.participants || []).map(({ user_id: e }) => e);
                        return r.createElement(d.Z, { userIds: e });
                    }, [t]);
                return (
                    r.useEffect(() => {
                        p();
                    }, [p]),
                    r.createElement(l.Z, { backLocation: `/messages/${n}/info`, documentTitle: v, screenType: "secondaryDetail", title: I }, r.createElement(i.Z, { style: [x.root, !(0, m.ZP)() && x.bottomOffset] }, r.createElement(c.Z, { fetchStatus: a, onRequestRetry: p, render: h })))
                );
            }
            const x = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, bottomOffset: { paddingBottom: `calc(${s.default.theme.componentDimensions.appBarHeight} + ${s.default.iPhoneOffsetBottom})` } })),
                S = C(_);
        },
        356738: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(202784),
                s = n(325686),
                o = n(929028),
                a = n(731708),
                c = n(868634),
                l = n(392237),
                i = n(674132);
            const d = n.n(i)().ca9af866;
            function u(e) {
                const t = [],
                    n = o.Z.getBackgroundStyles();
                return t.length > 0
                    ? r.createElement(
                          s.Z,
                          { style: [m.container, n] },
                          r.createElement(s.Z, { style: m.label }, r.createElement(a.ZP, { size: "subtext2", weight: "heavy" }, d)),
                          r.createElement(
                              s.Z,
                              { style: m.row },
                              t.map((e) => r.createElement(c.ZP, { background: "gray700", fontSize: "subtext2", style: m.selectionPill }, e)),
                          ),
                      )
                    : null;
            }
            const m = l.default.create((e) => ({ container: { paddingStart: e.spaces.space16, paddingBottom: e.spaces.space8, display: "flex", alignItems: "center", flexDirection: "row" }, row: { flexDirection: "row", alignItems: "center" }, label: { marginEnd: e.spaces.space4 }, selectionPill: { margin: e.spaces.space2 }, selector: { display: "flex", paddingEnd: e.spaces.space16 } }));
        },
        946181: (e, t, n) => {
            n.d(t, { X: () => l });
            var r = n(202784),
                s = n(499162),
                o = n(392237),
                a = n(416955),
                c = n(121791);
            const l = (e) => {
                    const { encrypted: t, onChange: n } = e,
                        o = r.useCallback(() => {
                            n(!t);
                        }, [t, n]),
                        l = [
                            { icon: r.createElement(a.default, { style: [i.unlockIcon, t && i.switchEncryptedStyle] }), value: "regular" },
                            { icon: r.createElement(c.default, { style: i.lockIcon }), value: "encrypted" },
                        ];
                    return r.createElement(s.Z, { backgroundStyles: t && i.switchEncryptedStyle, name: "", onChange: o, options: l, value: t ? "encrypted" : "regular" });
                },
                i = o.default.create((e) => ({ lockIcon: { color: e.colors.text }, unlockIcon: { color: e.colors.gray600 }, switchEncryptedStyle: { backgroundColor: e.colors.text } }));
        },
        276032: (e, t, n) => {
            n.d(t, { Z: () => k });
            var r = n(202784),
                s = n(325686),
                o = n(952428),
                a = n(731708),
                c = n(30899),
                l = n(392237),
                i = n(468032),
                d = (n(585488), n(351743)),
                u = n.n(d),
                m = n(457311),
                p = n(682830),
                h = n(965245),
                b = n(736063),
                f = n(725516),
                E = n(792098),
                y = n(96083);
            const g = ({ checked: e, label: t, onToggleCheck: n, refetch: c }) => {
                    const l = r.useCallback(() => {
                        n(t.id);
                    }, [n, t.id]);
                    return t ? r.createElement(s.Z, { role: "listitem" }, r.createElement(o.Z, { onClick: l, style: I.root }, r.createElement(y.Z, { checked: e }), r.createElement(a.ZP, { size: "subtext2" }, t.name))) : null;
                },
                C = r.memo(g),
                I = l.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, gap: e.spaces.space4 } })),
                v = { buttonLink: "/setting/labels", buttonText: "Manage Labels", buttonType: "brandOutlined" },
                _ = i.Z;
            function x(e) {
                return e.id;
            }
            function S({ conversationId: e, footer: t }) {
                const n = (0, f.z)();
                r.useEffect(() => {
                    n.scribe({ action: "impression" });
                }, [n]);
                const [s, o, a] = (0, E.Z)(),
                    [c] = u()(_),
                    l = s.viewer.user_results.result,
                    i = r.useCallback(
                        (t) => {
                            e && c({ variables: { conversation_id: e, labeled_convo_collection_id: t } });
                        },
                        [e, c],
                    ),
                    d = r.useCallback((e) => r.createElement(C, { checked: !1, label: e, onToggleCheck: i, refetch: a }), [a, i]);
                if ("User" !== l.__typename) return null;
                const p = l.labeled_conversation_collection_slice?.items;
                return p ? (p.length ? r.createElement(h.Z, { assumedItemHeight: 64, cacheKey: "dmLabelsList", footer: t, identityFunction: x, items: p, onNearEnd: o, renderer: d, withoutHeadroom: !0 }) : r.createElement(m.Z, v)) : null;
            }
            const Z = { context: "DMLabelsList" };
            function w(e) {
                return r.createElement(b.H, { errorConfig: Z, suspenseFallback: r.createElement(p.J, null) }, r.createElement(S, e));
            }
            const D = r.memo(w);
            function k({ children: e, conversationId: t, onDismiss: n }) {
                const l = r.useCallback(() => {
                        n?.();
                    }, [n]),
                    i = r.useMemo(() => r.createElement(s.Z, { style: T.footer }, r.createElement(o.Z, { style: T.footerButton }, r.createElement(a.ZP, { align: "center", size: "subtext1" }, "Create Label")), r.createElement(o.Z, { style: T.footerButton }, r.createElement(a.ZP, { align: "center", size: "subtext1" }, "Manage Labels"))), []),
                    d = r.useCallback(() => r.createElement(D, { conversationId: t, footer: i }), [i, t]);
                return r.createElement(c.Z, { contentStyle: T.content, onDismiss: l, preferredVerticalOrientation: "down", renderContent: d, withArrow: !0, withFixedPosition: !0 }, e);
            }
            const T = l.default.create((e) => ({ footer: { borderColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, content: { maxHeight: "250px" }, footerButton: { paddingVertical: e.spaces.space8 } }));
        },
        283427: (e, t, n) => {
            n.r(t), n.d(t, { ReportMessageListQuery: () => b, default: () => E });
            n(136728);
            var r = n(949231),
                s = n(202784),
                o = n(506899),
                a = n(325686),
                c = (n(585488), n(107267)),
                l = n(731708),
                i = n(392237),
                d = n(771613),
                u = n(736063),
                m = n(125363),
                p = n(390387),
                h = n(127218);
            const b = r.Z;
            function f({ userId: e }) {
                const t = (0, m.v9)(p._h) || "";
                let n = "";
                if (e && t) {
                    n = parseInt(t, 10) > parseInt(e, 10) ? `${e}-${t}` : `${t}-${e}`;
                }
                const { data: r } = (0, h.C)(b, { id: n });
                if (!r || !n) return null;
                const c = ((e) => {
                    const t = e?.dm_conversation_by_rest_id?.result?.legacy_conversation_slice?.items;
                    if (!t || !t.length) return [];
                    const n = (0, o.Fv)(t, [d.JJ]).entities.entries,
                        r = [];
                    for (const e in n) r.push(n[e]);
                    return r;
                })(r);
                return s.createElement(
                    a.Z,
                    { style: y.reportMessageListContainer },
                    c.map((e) => {
                        if (e.message_data?.sender_id !== t) return s.createElement(a.Z, { key: e?.message_data?.id, style: y.reportMessageListSingleMessage }, s.createElement(l.ZP, null, e.message_data?.text));
                    }),
                );
            }
            function E(e) {
                const { userId: t } = (0, c.useParams)();
                return t ? s.createElement(u.H, { errorConfig: { context: "DM_REPORT_MESSAGE_LIST" } }, s.createElement(f, { userId: t })) : null;
            }
            const y = i.default.create((e) => ({ reportMessageListContainer: { backgroundColor: e.colors.cellBackground, height: "600px", overflowY: "auto", padding: "5ex", width: "600px" }, reportMessageListSingleMessage: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, display: "block", padding: e.spaces.space12 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-58b91ff1.c3779cda.js.map
