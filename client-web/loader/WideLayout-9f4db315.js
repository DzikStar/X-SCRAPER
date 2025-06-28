(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.WideLayout-9f4db315"],
    {
        801301: (e) => {
            e.exports = { queryId: "IWdZXQ2Hdh_gprXkyn58ug", operationName: "SidebarUserRecommendations", operationType: "query", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        616753: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { default: () => n });
            const n = o(797553).default;
        },
        290402: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => p });
            var n = o(807896),
                s = o(202784),
                r = o(182056),
                a = o(879113),
                i = o(392237),
                l = o(111677),
                d = o.n(l),
                c = o(968478);
            const u = d().aa6e3300,
                m = ({ retryMessage: e, ...t }, o) => {
                    const i = r.Z.isOnline();
                    return s.createElement(a.Z, (0, n.Z)({}, t, { icon: i ? void 0 : s.createElement(c.default, { style: h.icon }), retryMessage: i ? e : u }));
                },
                h = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = s.forwardRef(m);
        },
        333241: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => w });
            o(136728);
            var n = o(202784),
                s = o(638236),
                r = o(811176),
                a = o(111677),
                i = o.n(a),
                l = o(415506),
                d = o(516951),
                c = o(376293),
                u = o(847607),
                m = o(417714),
                h = o(988823);
            const p = "block",
                f = "mute",
                _ = "removeFollower",
                g = "report",
                b = "share",
                y = i().j7bb1a43,
                D = i().g00b4c55,
                w = (0, h.M)((e) => {
                    const { onBlock: t, onClose: o, onMute: a, onRemoveFollower: i, onReportUser: h, onShare: w, onUnblock: k, onUnmute: E, user: I } = e,
                        v = [],
                        P = (t, o) => {
                            const { confirm: n, onClose: s } = e;
                            if (t) {
                                const { label: e, ...r } = t;
                                n({ confirmButtonLabel: e, ...r })
                                    .then(o, d.Z)
                                    .finally(s);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !I.protected &&
                        !I.blocking &&
                        !I.blocked_by &&
                        v.push({
                            Icon: s.Z,
                            onClick: () => {
                                o(), w();
                            },
                            testID: b,
                            text: D({ screenName: I.screen_name }),
                        });
                    !I.blocking &&
                        v.push({
                            ...(0, u.N1)(
                                I,
                                () => {
                                    o(), a();
                                },
                                () => {
                                    o(), E();
                                },
                            ),
                            testID: f,
                        });
                    I.followed_by &&
                        v.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    P(e, i);
                                },
                                user: I,
                            }),
                            testID: _,
                        }),
                        v.push((0, c.op)({ blockAction: (e) => P(e, t), source: c.SC.FOLLOWERS_LIST, testID: p, unblockAction: (e) => P(e, k), user: I })),
                        v.push({
                            Icon: l.default,
                            onClick: () => {
                                o(), h();
                            },
                            testID: g,
                            text: y({ screenName: I.screen_name }),
                        });
                    const S = v.map(({ Icon: e, onClick: t, testID: o, text: n }) => ({ text: n, onClick: t, Icon: e, testID: o }));
                    return n.createElement(r.Z, { items: S, onCloseRequested: o });
                });
        },
        864479: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => a });
            var n = o(807896),
                s = o(202784),
                r = o(771099);
            const a = (e) => (t) => s.createElement(r.$6, null, (o) => s.createElement(e, (0, n.Z)({}, t, { isInSidebar: o })));
        },
        893904: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { StickyView: () => m, default: () => g, roundToNearestDevicePixel: () => u, useStickyViewNotify: () => p });
            var n = o(202784),
                s = o(325686),
                r = o(67877),
                a = o(537392),
                i = o(392237),
                l = o(752624),
                d = o(323265),
                c = o(993547);
            const u = ({ cssPixels: e, dpr: t }) => Math.round(e * t) / t;
            class m extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._pendingScrolledBy = 0),
                        (this._singleRequestAnimationFrame = (e) => {
                            void 0 !== this._timeoutId && cancelAnimationFrame(this._timeoutId), (this._timeoutId = requestAnimationFrame(e));
                        }),
                        (this._setContentRef = (e) => {
                            this._contentNode = e;
                        }),
                        (this._setContainerRef = (e) => {
                            this._containerNode = e;
                        }),
                        (this._handleProgrammaticScroll = (e) => {
                            this._isMounted ? ((this._prevScrollY = (this._prevScrollY || 0) + e), this.setState({ contentOffset: Math.max(0, this.state.contentOffset + e) })) : (this._pendingScrolledBy += e);
                        }),
                        (this._isMounted = !1),
                        (this._handleLayout = (e) => {
                            if (!this._isMounted) return;
                            const t = e.nativeEvent.layout.height > this.state.contentHeight;
                            this._updatePositioning(t);
                        }),
                        (this._forceUpdatePositioning = () => {
                            this._updatePositioning(!0);
                        }),
                        (this.state = { stickyTop: !0, stickyThreshold: 0, contentOffset: 0, contentHeight: 0, stickyOffset: 0, position: "sticky" }),
                        (this._scheduleUpdatePositioning = (0, r.Z)(this._updatePositioning.bind(this), this._singleRequestAnimationFrame));
                    const { viewport: t } = e;
                    this._removeProgrammaticScrollListener = t.addProgrammaticScrollListener(this._handleProgrammaticScroll);
                }
                componentDidMount() {
                    this._isMounted = !0;
                    const { viewport: e } = this.props;
                    if ((this._updatePositioning(), (this._removeScrollListener = e.addScrollListener(this._scheduleUpdatePositioning)), this._containerNode)) {
                        const t = this._containerNode.getBoundingClientRect(),
                            o = e.scrollY();
                        (this._prevScrollY = o), this.setState({ stickyOffset: o + t.top });
                    }
                    this._pendingScrolledBy && (this._handleProgrammaticScroll(this._pendingScrolledBy), (this._pendingScrolledBy = 0));
                }
                componentWillUnmount() {
                    (this._isMounted = !1), this._removeScrollListener && this._removeScrollListener(), this._removeProgrammaticScrollListener && this._removeProgrammaticScrollListener(), void 0 !== this._timeoutId && cancelAnimationFrame(this._timeoutId);
                }
                render() {
                    const { contentOffset: e, position: t, stickyThreshold: o, stickyTop: r } = this.state,
                        a = _[t],
                        i = window.devicePixelRatio || 1,
                        l = u({ cssPixels: o, dpr: i }),
                        d = u({ cssPixels: e, dpr: i }),
                        c = { top: r ? `${l}px` : null, bottom: r ? null : `${l}px` };
                    return n.createElement(s.Z, { ref: this._setContainerRef, style: [_.container, { minHeight: this.state.contentHeight }] }, n.createElement(f, { onNotify: this._forceUpdatePositioning }), n.createElement(s.Z, { style: { marginTop: `${d}px` } }), n.createElement(s.Z, { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, c, a] }, this.props.children));
                }
                _updatePositioning(e = !1) {
                    if (!this._contentNode || !this._containerNode) return;
                    const t = this.props.viewport.scrollY(),
                        o = t - this._prevScrollY;
                    if (Math.abs(o) < 0.5 && !e) return;
                    const { distanceFromBottom: n } = this.props;
                    this._prevScrollY = t;
                    const s = !!this._contentNode && this._contentNode.getBoundingClientRect(),
                        r = !!this._containerNode && this._containerNode.getBoundingClientRect();
                    if (!s || !r) return;
                    const { height: i } = (0, a.iv)(),
                        l = d.ZP.isIOS() ? window.innerHeight : i,
                        c = t + r.top,
                        u = Math.max(s.top - r.top, 0);
                    if (l - s.height >= c) this._updateState({ stickyTop: !0, stickyThreshold: c, contentOffset: 0, stickyOffset: c, contentHeight: s.height, position: "fixed" });
                    else {
                        const e = o > 0,
                            t = e !== this.state.stickyTop,
                            r = window.devicePixelRatio || 1,
                            a = s.bottom - l + n <= 1 / r,
                            i = c - s.top <= 1 / r;
                        if (((e && a) || (!e && i)) && d.ZP.isFirefox()) {
                            const e = n,
                                t = c;
                            this._updateState({ position: "fixed", stickyOffset: c, stickyTop: i, stickyThreshold: i ? t : e, contentOffset: u, contentHeight: s.height });
                        } else {
                            const o = l - s.height - n,
                                r = l - s.height - c;
                            this._updateState({ position: "sticky", stickyTop: e, stickyOffset: c, stickyThreshold: e ? o : r, contentOffset: t ? u : this.state.contentOffset, contentHeight: s.height });
                        }
                    }
                }
                _updateState(e) {
                    const t = this.state.stickyTop !== e.stickyTop,
                        o = this.state.stickyThreshold !== e.stickyThreshold,
                        n = Math.abs(this.state.contentOffset - e.contentOffset) > 0.5,
                        s = Math.abs(this.state.stickyOffset - e.stickyOffset) > 0.5,
                        r = this.state.position !== e.position,
                        a = this.state.contentHeight !== e.contentHeight;
                    (t || o || n || s || r || a) && this.setState(e);
                }
            }
            m.defaultProps = { distanceFromBottom: 10 };
            const h = new l.Z();
            function p() {
                n.useLayoutEffect(() => {
                    h.notify();
                }, []);
            }
            function f({ onNotify: e }) {
                return (
                    n.useEffect(() => {
                        const { unsubscribe: t } = h.subscribe(e);
                        return () => {
                            t();
                        };
                    }, [e]),
                    null
                );
            }
            const _ = i.default.create((e) => ({ container: { height: "100%" }, sticky: { position: "sticky" }, fixed: { position: "fixed" }, static: { position: "static" } })),
                g = (0, c.Z)(m);
        },
        293988: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => E });
            var n = o(202784),
                s = o(154003),
                r = o(111677),
                a = o.n(r),
                i = o(74514),
                l = o(405303),
                d = o(684511),
                c = o(860174),
                u = o(71620),
                m = o(668214),
                h = o(257166),
                p = o(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                _ = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                g = a().bdba3e1a,
                b = a().c4da7d28,
                y = a().j87c21f4,
                D = a().iebc30ca,
                w = a().dc740eb2;
            class k extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? n.createElement(s.ZP, { "aria-label": b, hoverLabel: { label: D }, icon: n.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : n.createElement(s.ZP, { "aria-label": g, hoverLabel: { label: y }, icon: n.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: t } = this.props;
                            t && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((t) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((t) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(d.Z, { fullScreen: !0, message: w }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: o, userId: n } = this.props;
                    return o(n, { device: e }).catch(t(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const E = _(k);
        },
        130888: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { InThisConversationContainer: () => v, default: () => P });
            var n = o(202784),
                s = o(476984),
                r = o.n(s),
                a = o(111677),
                i = o.n(a),
                l = o(325686),
                d = o(844685),
                c = o(62857);
            const u = (e) => !e.protected || !!e.following,
                m = n.memo(function (e) {
                    const { headerText: t, participantIds: o } = e;
                    return n.createElement(l.Z, { "aria-label": t, role: "complementary" }, n.createElement(d.Z, { text: t }), n.createElement(c.Z, { filterPredicate: u, userIds: o.slice(0, 3) }));
                }),
                h = m;
            var p = o(668214),
                f = o(390387),
                _ = o(836255),
                g = o(919022),
                b = (o(136728), o(175848)),
                y = o(166852);
            const D = (e, t, o) => {
                    const n = o === t,
                        s = e.unmentioned_user_ids?.includes(t);
                    return n || !s;
                },
                w = (e, t) => (e.entities?.user_mentions || []).filter((o) => D(e, o.id_str, t)).map((e) => e.id_str) || [],
                k = (e, t) => t.focalTweetId,
                E = (0, p.Z)()
                    .propsFromState(() => ({ focalTweetId: k, viewerUserId: f._h, tweetMap: _.Z.selectAll, users: g.ZP.selectAll }))
                    .adjustStateProps(({ focalTweetId: e, tweetMap: t, users: o, viewerUserId: n }) => {
                        const s = e && t[e];
                        if (!s) return { participantIds: [] };
                        const r = [s.user, ...w(s, n), ...((a = s), b.ZP.mergeTaggedUsers((a.extended_entities && a.extended_entities.media) || []).map((e) => e.user_id))];
                        var a;
                        const i = s.quoted_status && t[s.quoted_status];
                        return i && (r.push(...((e, t) => (D(e, e.user, t) ? [e.user] : []))(i, n)), r.push(...w(i, n))), { participantIds: (0, y.Z)(r).filter((e) => "string" == typeof e && void 0 !== o[e]?.following) };
                    })
                    .withAnalytics({ component: "in_this_conversation" }),
                I = i().j88f27d8;
            function v({ participantIds: e }) {
                const t = (function (e) {
                    const t = n.useRef(e);
                    return r()(e, t.current) ? t.current : ((t.current = e), e);
                })(e);
                return t.length > 0 ? n.createElement(h, { headerText: I, participantIds: t }) : null;
            }
            const P = E(v);
        },
        741494: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { default: () => L });
            o(136728);
            var n = o(669506),
                s = o(202784),
                r = o(325686),
                a = (o(585488), o(277660)),
                i = o.n(a),
                l = o(107267),
                d = o(844685),
                c = o(731708),
                u = o(154003),
                m = o(708852),
                h = o(392237),
                p = o(111677),
                f = o.n(p),
                _ = o(293723),
                g = o(399398),
                b = o(822502),
                y = o(910113),
                D = o(535338),
                w = o(736063);
            const k = f().fb15ec28,
                E = f().ece910f0,
                I = f().jd08bc14,
                v = f().de0a4a72,
                P = f().fc5bfd96,
                S = n.Z,
                Z = () => s.createElement(r.Z, null, s.createElement(d.Z, { text: k }), s.createElement(r.Z, { style: T.content }, s.createElement(r.Z, { style: T.bulletRow }, s.createElement(c.ZP, null, s.createElement(_.default, null)), s.createElement(c.ZP, { size: "subtext1" }, E)), s.createElement(r.Z, { style: T.bulletRow }, s.createElement(c.ZP, null, s.createElement(_.default, null)), s.createElement(c.ZP, { size: "subtext1" }, I)), s.createElement(r.Z, { style: T.bulletRow }, s.createElement(c.ZP, null, s.createElement(_.default, null)), s.createElement(c.ZP, { size: "subtext1" }, v)), s.createElement(u.ZP, { link: "/jobs/get-recommendations", size: "small", type: "brandFilled" }, P))),
                M = ({ recommendation: e, recommendationId: t, recommendationIndex: o }) => {
                    const n = (0, m.Ji)(),
                        r = (0, l.useHistory)(),
                        a = i()(y.KM, e),
                        d = a?.core,
                        c = a?.user_results?.result,
                        u = a?.company_profile_results?.result,
                        h = a?.id || "",
                        p = a?.user_sentiment,
                        f = s.useCallback(() => {
                            n ? r.push(`/jobs/recommended/${t}`) : r.push(`/m/jobs/recommended/${t}`);
                        }, [r, n, t]);
                    return a && d ? s.createElement(b.Z, { actions: [], companyProfile: u, job: d, jobId: t, jobIndex: o, onClick: f, relayId: h, user: c, userSentiment: p, withBottomBorder: !1 }) : null;
                },
                T = h.default.create((e) => ({ content: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16, gap: e.spaces.space16 }, bulletRow: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center" } })),
                C = ({ isSidebarModule: e }) => {
                    const t = (0, D.p)(S, {}),
                        o = t?.viewer_v2.user_results.result.matching_profile,
                        n = t?.viewer_v2.user_results.result.job_recommendations_results;
                    if (!t || (o?.consented_at && !n?.length)) return null;
                    const a = ({ children: t }) => (e ? s.createElement(g.g, null, t) : s.createElement(s.Fragment, null, t));
                    return s.createElement(
                        a,
                        null,
                        o?.consented_at ? null : s.createElement(Z, null),
                        o?.consented_at && n?.length && n.length > 0
                            ? s.createElement(
                                  r.Z,
                                  null,
                                  s.createElement(d.Z, { text: "Recommended jobs" }),
                                  n.map((e, t) => (e.result ? s.createElement(M, { key: e.rest_id, recommendation: e.result, recommendationId: e.rest_id, recommendationIndex: t }) : null)),
                              )
                            : null,
                    );
                },
                A = { context: "JobRecommendationsModule" },
                L = (e) => s.createElement(w.H, { errorConfig: A }, s.createElement(C, e));
        },
        62857: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => S });
            var n = o(807896),
                s = o(202784),
                r = o(476984),
                a = o.n(r),
                i = o(111677),
                l = o.n(i),
                d = o(615656),
                c = o(290402),
                u = o(325686),
                m = o(240089),
                h = o(663550),
                p = o(409438);
            const f = ({ displayMode: e = p.Z.UserDetailed, renderUserCell: t, userIds: o }) =>
                s.createElement(
                    u.Z,
                    { role: "list" },
                    o.map((o, n) => (t ? t(o) : s.createElement(m.ZP, { decoration: m.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: o, promotedItemType: h.bj.USER, userId: o, withFollowsYou: !0 }))),
                );
            var _ = o(312771),
                g = o(71620),
                b = o(973572),
                y = o(668214),
                D = o(919022);
            const w = (e, t) => t.userIds,
                k = (e, t) => {
                    const { filterPredicate: o = (e) => !!e, userIds: n } = t;
                    return n.filter((t) => {
                        const n = D.ZP.select(e, t);
                        return !!n && o(n);
                    });
                },
                E = (e, t) => {
                    const { userIds: o } = t;
                    return o.reduce((t, o) => {
                        const n = D.ZP.selectFetchStatus(e, o);
                        return n && (t[o] = n === _.ZP.NONE ? _.ZP.LOADING : n), t;
                    }, {});
                },
                I = (0, y.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, b.Z)(k, (e) => e),
                        fetchStatus: (0, b.Z)(k, E, w, (e, t, o) => {
                            let n = _.ZP.LOADED;
                            for (let s = 0; s < o.length; s++) {
                                const r = o[s];
                                if (-1 === e.indexOf(r)) {
                                    const e = t[r] || _.ZP.LOADING;
                                    n = n === _.ZP.LOADED ? e : n;
                                }
                                if (n === _.ZP.LOADED) break;
                            }
                            return n;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: D.ZP.fetchManyIfNeeded })),
                v = l().f5b426c2;
            class P extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: o, fetchUsersIfNeeded: r, filterPredicate: a, userIds: i, ...l } = this.props;
                            return s.createElement(f, (0, n.Z)({}, l, { userIds: e }));
                        }),
                        (this._handleFetch = () => {
                            this._fetchUsersIfNeeded();
                        });
                }
                componentDidMount() {
                    this._fetchUsersIfNeeded();
                }
                componentDidUpdate(e) {
                    a()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded();
                }
                render() {
                    return s.createElement(c.Z, { "aria-label": v, fetchStatus: this.state.allUsersUnavailable ? _.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: o, userIds: n } = this.props;
                    o(n).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [d.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [d.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const S = I(P);
        },
        912937: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { WhoToFollowContainer: () => W, default: () => $ });
            var n = o(202784),
                s = o(325686),
                r = o(392237),
                a = o(111677),
                i = o.n(a),
                l = o(290402),
                d = o(844685),
                c = o(30183),
                u = o(62857),
                m = o(952793),
                h = o(409438),
                p = o(864479),
                f = (o(136728), o(952428)),
                _ = o(443781);
            const g = n.lazy(() => window.__SSP_PROMISE__.then(() => ({ default: w }))),
                b = new Set(),
                y = {};
            let D = 0;
            function w({ fallbackSlotId: e, primarySlotId: t }) {
                const o = n.useRef("ad-" + D++).current,
                    [r, a] = n.useState(""),
                    i = n.useRef(!1),
                    l = n.useRef(!1),
                    { userClaims: d } = n.useContext(_.rC),
                    c = d.isAnyPremiumSubscriber(),
                    u = "rtl" === document?.documentElement?.getAttribute("dir"),
                    m = n.useCallback(() => {
                        window.googletag &&
                            i.current &&
                            !l.current &&
                            window.googletag.cmd.push(() => {
                                if (!i.current) return;
                                u && window.googletag.pubads().setTargeting("rtl", "true");
                                const n = `adEventHandler_${o}`;
                                y[n] && (window.googletag.pubads().removeEventListener("slotRenderEnded", y[n]), delete y[n]),
                                    (y[n] = (o) => {
                                        i.current && (o.isEmpty || (o.slot.getSlotElementId() === e ? a("fallback") : o.slot.getSlotElementId() === t && "" === r && a("primary")));
                                    }),
                                    window.googletag.pubads().addEventListener("slotRenderEnded", y[n]);
                                if (!b.has(t) || !b.has(e)) b.has(e) || (window.googletag.display(e), b.add(e)), b.has(t) || (window.googletag.display(t), b.add(t));
                                else {
                                    const o = window.googletag
                                        .pubads()
                                        .getSlots()
                                        .filter((o) => {
                                            const n = o.getSlotElementId();
                                            return n === t || n === e;
                                        });
                                    o.length > 0 && window.googletag.pubads().refresh(o);
                                }
                                l.current = !0;
                            });
                    }, [e, t, u, r, o]);
                if (
                    (n.useEffect(() => {
                        if (c) return;
                        i.current = !0;
                        const n = () => {
                            const o = document.getElementById(t),
                                n = document.getElementById(e);
                            return (
                                !(!o || !n) &&
                                (setTimeout(() => {
                                    i.current && m();
                                }, 50),
                                !0)
                            );
                        };
                        if (!n()) {
                            const e = new MutationObserver((e, t) => {
                                n() && t.disconnect();
                            });
                            return (
                                e.observe(document.body, { childList: !0, subtree: !0 }),
                                () => {
                                    e.disconnect();
                                }
                            );
                        }
                        return () => {
                            i.current = !1;
                            const e = `adEventHandler_${o}`;
                            window.googletag &&
                                y[e] &&
                                window.googletag.cmd.push(() => {
                                    try {
                                        window.googletag.pubads().removeEventListener("slotRenderEnded", y[e]), delete y[e];
                                    } catch (e) {}
                                });
                        };
                    }, [c, t, e, m, o]),
                    c)
                )
                    return null;
                const h = [k.adContainer, !r && k.emptyContainer];
                return n.createElement(s.Z, { style: h }, n.createElement(s.Z, { id: t, style: [k.adSlot, "primary" !== r && k.hiddenSlot] }), n.createElement(s.Z, { id: e, style: [k.adSlot, "fallback" !== r && k.hiddenSlot] }));
            }
            const k = r.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space12, borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, adContainer: { minHeight: 250, minWidth: 300, width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", position: "relative" }, emptyContainer: { minHeight: 0, height: 0, overflow: "hidden" }, adSlot: { width: "100%", height: "100%", position: "absolute", top: 0, start: 0, end: 0, minWidth: 300, minHeight: 250 }, hiddenSlot: { display: "none" } })),
                E = function (e) {
                    return n.createElement(f.Z, { style: k.root }, n.createElement(n.Suspense, { fallback: n.createElement(s.Z, { style: k.emptyContainer }) }, n.createElement(g, e)));
                },
                I = i().a526aa66,
                v = i().ef625010,
                P = i().d228a9a0,
                S = (0, p.Z)(({ isInSidebar: e, userId: t, userIds: o, withProfileHeaderText: r }) => {
                    const a = (0, m.hC)("rweb_ssp_ads_enabled"),
                        i = `/i/connect_people?user_id=${t}`,
                        l = o.length > 0;
                    return n.createElement(s.Z, { "aria-label": I, role: "complementary" }, n.createElement(d.Z, { text: r ? v : I }), n.createElement(u.Z, { displayMode: h.Z.UserCompact, userIds: o }), a && l && n.createElement(E, { fallbackSlotId: "div-gpt-ad-1740520505566-0", primarySlotId: "div-gpt-ad-1738265577622-0" }), l && n.createElement(c.Z, { link: i, text: P, withBottomRadius: !0, withDarkerInteractiveBackground: e }));
                });
            var Z = o(967977),
                M = o(942893),
                T = o(312771),
                C = o(71620),
                A = o(973572),
                L = o(668214),
                U = o(994305),
                O = o(919022);
            const x = "profile_accounts_sidebar",
                R = (e, t) => U.Ic(e, { displayLocation: x, similarToUserId: t.userId }),
                N = (e, t) => U.UD(e, { displayLocation: x, similarToUserId: t.userId }),
                F = (e, t) => {
                    const o = R(e, t),
                        n = [];
                    return (
                        o.forEach(({ user_id: t }) => {
                            const o = O.ZP.select(e, t);
                            o && n.push(o);
                        }),
                        n
                    );
                },
                H = (0, L.Z)()
                    .propsFromState(() => ({ fetchStatus: N, recommendations: R, users: (0, A.Z)(F, (e) => e) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, C.zr)("WHO_TO_FOLLOW_CONTAINER"), fetchRecommendationsIfNeeded: U.yY }))
                    .withAnalytics({ component: "suggest_who_to_follow" }),
                B = i().fd6473fa,
                j = { element: "user", action: "results" };
            class W extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = () => {
                            const { recommendations: e, userId: t, withProfileHeaderText: o } = this.props,
                                s = e && e.map((e) => e.user_id);
                            return n.createElement(S, { userId: t, userIds: s, withProfileHeaderText: o });
                        }),
                        (this._handleImpression = (e) => {
                            const { analytics: t, users: o } = this.props,
                                n = e && e.map((e) => ({ ...M.Z.forUser(e.user_id), suggestion_details: { source_data: e.token } }));
                            t.scribe({ ...j, data: { items: n } }),
                                o &&
                                    o.map((e) => {
                                        const o = e ? [M.Z.forUser(e.id_str)] : [];
                                        e.following ? t.scribe({ element: "followed_user", action: "impression", data: { items: o } }) : e.muting ? t.scribe({ element: "muted_user", action: "impression", data: { items: o } }) : e.blocking && t.scribe({ element: "blocked_user", action: "impression", data: { items: o } });
                                    });
                        });
                }
                componentDidMount() {
                    const { recommendations: e } = this.props;
                    this._fetchRecommendations(this.props), e && e.length > 0 && this._handleImpression(e);
                }
                componentDidUpdate(e) {
                    const { recommendations: t } = this.props;
                    this.props.userId !== e.userId && this._fetchRecommendations(this.props), t !== e.recommendations && t && t.length > 0 && this._handleImpression(t);
                }
                render() {
                    const { fetchStatus: e, style: t } = this.props;
                    return e === T.ZP.FAILED || this._hasEmptySuggestionList() ? null : n.createElement(s.Z, { style: [q.root, t] }, n.createElement(l.Z, { "aria-label": B, fetchStatus: e, render: this._renderContent }));
                }
                _fetchRecommendations(e) {
                    const { createLocalApiErrorHandler: t, fetchRecommendationsIfNeeded: o, userId: n } = e;
                    o({ limit: 3, displayLocation: x, similarToUserId: n }).catch(t(Z.C));
                }
                _hasEmptySuggestionList() {
                    const { fetchStatus: e, recommendations: t } = this.props;
                    return e === T.ZP.LOADED && 0 === t.length;
                }
            }
            const q = r.default.create((e) => ({ root: { minHeight: "15rem" } })),
                $ = H(W);
        },
        684511: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => n });
            o(202784);
            const n = (0, o(523561).Z)({
                loader: () =>
                    Promise.all([
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("loader.PushNotificationsPrompt"),
                    ]).then(o.bind(o, 529629)),
            });
        },
        376293: (e, t, o) => {
            "use strict";
            o.d(t, { $f: () => k, KV: () => _, LI: () => S, SC: () => w, Vt: () => y, ed: () => Z, op: () => E });
            var n = o(202784),
                s = o(190286),
                r = o(111677),
                a = o.n(r),
                i = o(616894),
                l = o(314948),
                d = o(516951),
                c = o(163390);
            const u = a().cfd2f35e,
                m = a().f9e45cfb,
                h = a().fcd4d489,
                p = a().a6450e84,
                f = a().ad00a739,
                _ = a().a9fd20be,
                g = a().j546fb79,
                b = a().c9623eeb,
                y = a().e133be4e,
                D = a().f5f01af6,
                w = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                k = (e) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: p, text: f({ screenName: e }) }),
                E = ({ blockAction: e, blockSubtext: t, source: o, testID: n, unblockAction: s, unblockSubtext: r, user: a }) => {
                    let i,
                        l = d.Z;
                    const u = S(a);
                    switch (o) {
                        case w.PROFILE:
                        case w.LIST_DETAIL:
                        case w.FOLLOWERS_LIST:
                            l = () => {
                                a.blocking ? s(u) : e(u);
                            };
                            break;
                        case w.TWEET:
                        case w.TWEET_CARET:
                        case w.RICH_FEEDBACK:
                            (i = c.uq.block),
                                (l = () => {
                                    a.blocking ? s(u) : e(u);
                                });
                    }
                    return { confirmation: u, onClick: l, testID: n, shortcutKey: i, Icon: I(a.blocking), text: P(a), subText: v({ user: a, blockSubtext: t, unblockSubtext: r }) };
                },
                I = (e) => (e ? l.default : i.default),
                v = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                P = (e) => (e.blocking ? b({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                S = (e) => {
                    return e.blocking ? ((t = e.screen_name), { confirmButtonType: "primary", headline: g({ screenName: t }), label: y, text: D }) : k(e.screen_name);
                    var t;
                },
                Z = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: r, headline: a, label: i, text: l } = e;
                    return n.createElement(s.Z, { cancelButtonLabel: u, confirmButtonLabel: i, confirmButtonType: r, headline: a, onCancel: o, onConfirm: t, text: l });
                };
        },
        545334: (e, t, o) => {
            "use strict";
            o.d(t, { d: () => s });
            var n = o(111677);
            const s = o.n(n)().gf5e9ea6;
        },
        916585: (e, t, o) => {
            "use strict";
            o.d(t, { k: () => a });
            var n = o(111677),
                s = o.n(n),
                r = o(437358);
            const a = (e, t) => {
                const { id_str: o } = e,
                    n = s().a599bbfa;
                return { Icon: r.default, text: n, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: t };
            };
        },
        847607: (e, t, o) => {
            "use strict";
            o.d(t, { FK: () => p, GS: () => i, N1: () => d, X6: () => f, cm: () => l });
            o(202784);
            var n = o(111677),
                s = o.n(n),
                r = o(391366),
                a = o(40904);
            const i = s().hb568af4,
                l = s().bb1cbeb6,
                d =
                    (s().h2f62206,
                    (e, t, o) => {
                        const { muting: n } = e;
                        return { text: n ? l : i, onClick: n ? o : t, Icon: n ? r.default : a.default };
                    }),
                c = s().h59f52ee,
                u = s().eea0cbee,
                m = s().i29533b3,
                h = s().h129c3c3,
                p = (e) => (e ? ((e) => m({ screenName: e }))(e) : c),
                f = (e) => (e ? ((e) => h({ screenName: e }))(e) : u);
        },
        417714: (e, t, o) => {
            "use strict";
            o.d(t, { l: () => c });
            o(202784);
            var n = o(111677),
                s = o.n(n),
                r = o(224823);
            const a = s().b3036480,
                i = s().b3036480,
                l = s().e68b09b4,
                d = s().h27b7407,
                c = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: r.default, text: a, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: l, text: d({ screenName: e.screen_name }) });
        },
        712816: (e, t, o) => {
            "use strict";
            o.d(t, { d: () => s });
            var n = o(111677);
            const s = { defaultToast: { text: o.n(n)().b6878b0a }, showToast: !0 };
        },
        967977: (e, t, o) => {
            "use strict";
            o.d(t, { C: () => r });
            var n = o(516951),
                s = o(615656);
            const r = { [s.ZP.ResourceNotFound]: { customAction: n.Z } };
        },
        48886: (e, t, o) => {
            "use strict";
            o.d(t, { q: () => s });
            var n = o(111677);
            const s = { defaultToast: { text: o.n(n)().a30b63da }, showToast: !0 };
        },
        879596: (e, t, o) => {
            "use strict";
            o.d(t, { D: () => s });
            var n = o(111677);
            const s = { defaultToast: { text: o.n(n)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => r });
            var n = o(615656),
                s = o(51525);
            const r = { [n.ZP.FollowError]: { customAction: s.w1 } };
        },
        973572: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => a });
            var n = o(476984),
                s = o.n(n),
                r = o(24949);
            const a = (0, r.wN)(r.PW, s());
        },
        163390: (e, t, o) => {
            "use strict";
            o.d(t, { OX: () => m, Od: () => c, PN: () => h, uq: () => d, wR: () => f });
            var n = o(251067),
                s = o(522171),
                r = o(111677),
                a = o.n(r),
                i = o(912021),
                l = o(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, i.Z)((e) => {
                    const t = e ? [{ description: a().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: a().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: a().a83d4280, keys: d.nextItem, universal: !0 }, { description: a().g0048656, keys: d.previousItem, universal: !0 }, { description: a().a690c4d0, keys: "Space", universal: !0 }, { description: a().e893811a, keys: d.refresh, universal: !1 }, { description: a().ha8209bc, keys: d.goHome, universal: !1 }, { description: a().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: a().eb75875e, keys: d.goNotifications, universal: !1 }, { description: a().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: a().fa98627a, keys: d.goProfile, universal: !1 }, { description: a().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: a().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: a().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: a().b0041756, keys: d.goLists, universal: !1 }, { description: a().d4986f86, keys: d.goMessages, universal: !1 }, { description: a().h5860a68, keys: d.goGrok, universal: !1 }, { description: a().bb081ea2, keys: d.goSettings, universal: !1 }, { description: a().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...t, { description: a().eee2ed92, keys: d.goToUser, universal: !1 }, { description: a().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: a().ab3d53f8, keys: d.newTweet, universal: !1 },
                    { description: a().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: a().e736990a, keys: d.newMessage, universal: !1 },
                    { description: a().a9ae1e78, keys: d.search, universal: !1 },
                    { description: a().fe731016, keys: s.Z.shortcuts.like, universal: !1 },
                    { description: a().d17df548, keys: s.Z.shortcuts.reply, universal: !1 },
                    { description: a().g062295e, keys: s.Z.shortcuts.retweet, universal: !1 },
                    { description: a().h01621a4, keys: s.Z.shortcuts.share, universal: !0 },
                    { description: a().gb303814, keys: d.bookmark, universal: !1 },
                    { description: a().c03b1126, keys: d.mute, universal: !1 },
                    { description: a().ebd2abb2, keys: d.block, universal: !1 },
                    { description: a().hc6c5510, keys: "Enter", universal: !0 },
                    { description: a().eebdef38, keys: s.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: a().b488758c, keys: d.toggleDMDrawer, universal: !1 },
                ],
                h = () => [
                    { description: a().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: a().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: a().b881560e, keys: d.video.mute, universal: !0 },
                    { description: a().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: a().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: a().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                p = (0, i.Z)((e) => {
                    const t = c(e),
                        o = m(),
                        n = h(),
                        s = {};
                    return (
                        [...o, ...n, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      s[t] = e;
                                  })
                                : (s[t] = e);
                        }),
                        JSON.stringify(s)
                    );
                }),
                f = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": p(e) } };
                };
        },
        409438: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, t, o) => {
            "use strict";
            o.d(t, { M: () => a });
            var n = o(807896),
                s = o(202784),
                r = o(190286);
            const a = (e) => (t) => {
                const [o, a] = s.useState(null),
                    i = (e) =>
                        new Promise((t, o) => {
                            a({ resolve: t, reject: o, confirmationSheetProps: e });
                        });
                if (o) {
                    const { confirmationSheetProps: e, reject: t, resolve: i } = o;
                    return s.createElement(
                        r.Z,
                        (0, n.Z)({}, e, {
                            onCancel: () => {
                                t(), a(null);
                            },
                            onConfirm: () => {
                                i(), a(null);
                            },
                        }),
                    );
                }
                return s.createElement(e, (0, n.Z)({}, t, { confirm: i }));
            };
        },
        694180: (e, t, o) => {
            "use strict";
            o.d(t, { cM: () => _, dS: () => f, iY: () => g });
            var n = o(370751),
                s = o(399896),
                r = o(663550),
                a = o(499627),
                i = o(917799);
            const l = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, n.Z)([r.dx.IMPRESSION, r.dx.DWELL]),
                m = (0, n.Z)([r.AJ.TREND_VIEW, r.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: n }) => {
                        const { event: r, impression_id: a, promoted_trend_id: l } = e,
                            c = `trend-${l}-${r}`;
                        if (m.has(r) && p(o(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: r, impression_id: a };
                        return (0, i._O)(t, { params: u, request: n.withEndpoint(s.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(r)) return [h(c)];
                        });
                    },
                _ =
                    ({ disclosureType: e, itemId: t, itemType: o, params: n }) =>
                    (r, a, { api: l }) => {
                        const { event: c, impression_id: m } = n,
                            f = `${o}-${t ?? "undefined"}-${m ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && p(a(), f)) return Promise.resolve();
                        const _ = e && "earned" === e.toLowerCase() ? "1" : null,
                            g = { ...n, earned: _, epoch_ms: Date.now() };
                        return (0, i._O)(r, { params: g, request: l.withEndpoint(s.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: g }, (e, t) => {
                            if (!t && u.has(c)) return [h(f)];
                        });
                    },
                g =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, i._O)(t, { params: e, request: n.withEndpoint(s.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            a.Z.register({
                promotedContent: function (e = l, t) {
                    if (!t) return e;
                    if (t.type === c) {
                        if (!t.payload) return e;
                        const { eventKey: o } = t.payload;
                        return { ...e, [o]: !0 };
                    }
                    return e;
                },
            });
        },
        994305: (e, t, o) => {
            "use strict";
            o.d(t, { yY: () => A, UD: () => C, Ic: () => T });
            var n = o(360917),
                s = o.n(n),
                r = o(506899),
                a = o(414742),
                i = o(125199);
            const l = new r.fK.Entity("recommendations", { user: i.Z }, { idAttribute: (e) => e.user?.rest_id });
            var d = o(801301),
                c = o.n(d),
                u = o(304819);
            const m = new r.fK.Entity("recommendations", { user: u.Z }, { idAttribute: (e) => e.user?.id_str });
            var h = o(387466),
                p = o(120071);
            const f = (e) => ({ ...p.k(e), excluded: [], pc: !0 }),
                _ = ({ apiClient: e, featureSwitches: t }) => ({
                    fetch(o, n = {}) {
                        const s = { ...f(t), ...o, ...(0, h.Y)(t) };
                        return e.get("users/recommendations", s, n).then((e) => (0, r.Fv)(e, [m]));
                    },
                    fetchSidebarUserRecommendations: (t) =>
                        e
                            .graphQL(
                                c(),
                                { profileUserId: t.user_id },
                                (0, a.kj)((e) => !e.sidebar_user_recommendations, "GQL Sidebar User Recommendations: Failed to render Sidebar User Recommendations"),
                            )
                            .then((e) => {
                                const t = e.sidebar_user_recommendations ?? [];
                                return (0, r.Fv)(
                                    t.map(({ token: e, user_results: { result: t } }) => ({ token: e, user: t, user_id: t?.rest_id })).filter(({ user: e }) => e),
                                    [l],
                                );
                            }),
                });
            var g = o(499627),
                b = o(917799),
                y = o(312771),
                D = o(56519);
            const w = "recommendations",
                k = 30,
                E = "rweb/recommendations/FETCH_REQUEST",
                I = "rweb/recommendations/FETCH_SUCCESS",
                v = "rweb/recommendations/FETCH_FAILURE",
                P = {},
                S = ({ displayLocation: e, similarToUserId: t }) => e + (t ? `_${t}` : "");
            g.Z.register({
                [w]: function (e = P, t) {
                    if (!t?.meta) return e;
                    switch (t.type) {
                        case E: {
                            const o = S(t.meta);
                            return { ...e, [o]: { ...e[o], fetchStatus: y.ZP.LOADING } };
                        }
                        case v: {
                            const o = S(t.meta);
                            return { ...e, [o]: { ...e[o], fetchStatus: y.ZP.FAILED } };
                        }
                        case I: {
                            const o = S(t.meta),
                                n = t.payload && t.payload.entities ? t.payload.entities : { recommendations: s() },
                                r = (t.payload && t.payload.result ? t.payload.result : M).map((e) => n.recommendations[e]);
                            return { ...e, [o]: { ...e[o], fetchStatus: y.ZP.LOADED, recommendations: r } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const Z = [],
                M = [],
                T = (e, { displayLocation: t, similarToUserId: o }) => {
                    const n = e[w][S({ displayLocation: t, similarToUserId: o })];
                    return n && n.recommendations ? n.recommendations : Z;
                },
                C = (e, { displayLocation: t, similarToUserId: o }) => {
                    const n = e[w][S({ displayLocation: t, similarToUserId: o })];
                    return n ? n.fetchStatus : y.ZP.NONE;
                },
                A = (e) => (t, o, n) => {
                    const r = o(),
                        { displayLocation: a, similarToUserId: i } = e,
                        l = T(r, { displayLocation: a, similarToUserId: i }),
                        d = C(r, { displayLocation: a, similarToUserId: i }) === y.ZP.LOADED;
                    return l && d
                        ? Promise.resolve(s())
                        : t(
                              (
                                  (e) =>
                                  (t, o, { api: n, featureSwitches: s }) => {
                                      const { displayLocation: r, itsInterests: a, limit: i = k, similarToUserId: l } = e,
                                          d = "profile_accounts_sidebar" === r && s.isTrue("rweb_recommendations_sidebar_graphql_enabled");
                                      return (0, b._O)(t, { request: d ? n.withEndpoint(_).fetchSidebarUserRecommendations : n.withEndpoint(_).fetch, params: { display_location: r, itsInterests: a, limit: i, user_id: l } })({ actionTypes: { REQUEST: E, SUCCESS: I, FAILURE: v }, context: "FETCH_RECOMMENDATIONS", meta: { displayLocation: r, similarToUserId: l } }, (e) => {
                                          if (e && e.entities) return [(0, D.dP)(e.entities)];
                                      });
                                  }
                              )(e),
                          );
                };
        },
        629196: (e, t, o) => {
            "use strict";
            o.d(t, { r: () => d });
            o(136728);
            var n = o(161821),
                s = o(390387),
                r = o(836255),
                a = o(255117),
                i = o(166506),
                l = o(919022);
            const d =
                (e, t) =>
                (o, d, { api: c, featureSwitches: u }) =>
                    o(l.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            l = (0, n.Z)(r.Z.selectAll(t)).reduce((o, n) => {
                                if (null != n)
                                    if (n.user === e) o[n.id_str] = !0;
                                    else if (n.retweeted_status) {
                                        const s = r.Z.select(t, n.retweeted_status);
                                        s?.user === e && (o[n.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            c = (0, s._h)(d()),
                            u = c ? [(0, a.ZP)({ useLatest: !1, userId: c }).removeTweets(l), (0, a.ZP)({ useLatest: !0, userId: c }).removeTweets(l)] : [],
                            m = (0, i.k9)();
                        if (m.selectInitialFetchStatus(t) && !m.selectCanRefresh(t)) {
                            const o = (0, i.f8)(e, t, m);
                            o && u.push(o);
                        }
                        return o(u);
                    });
        },
        166506: (e, t, o) => {
            "use strict";
            o.d(t, { du: () => c, f8: () => u, k9: () => d });
            var n = o(503768),
                s = o(750085),
                r = o(962741),
                a = o(466015),
                i = o(919022),
                l = o(218951);
            const d = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: s.Z }),
                c = (e) => (t, o) => {
                    const n = o();
                    t(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const t = e.type === r.ZP.User ? e.content.id : "",
                                    o = i.ZP.select(n, t);
                                return o && !o.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, o) => {
                    if (!o.selectEntries(t).find((t) => t.type === r.ZP.User && t.content.id === e)) {
                        const t = (0, a.OD)(e),
                            n = (0, a.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return o.injectEntry(n);
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.WideLayout-9f4db315.d236850a.js.map
