(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.WideLayout-9f4db315"],
    {
        801301: (e) => {
            e.exports = { queryId: "apoLb8lvGh-n59pXrJY9aQ", operationName: "SidebarUserRecommendations", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        616753: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { default: () => s });
            const s = o(797553).default;
        },
        290402: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => p });
            var s = o(807896),
                n = o(202784),
                r = o(182056),
                i = o(879113),
                a = o(392237),
                l = o(111677),
                d = o.n(l),
                c = o(968478);
            const u = d().aa6e3300,
                m = ({ retryMessage: e, ...t }, o) => {
                    const a = r.Z.isOnline();
                    return n.createElement(i.Z, (0, s.Z)({}, t, { icon: a ? void 0 : n.createElement(c.default, { style: h.icon }), retryMessage: a ? e : u }));
                },
                h = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = n.forwardRef(m);
        },
        333241: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => k });
            o(136728);
            var s = o(202784),
                n = o(638236),
                r = o(811176),
                i = o(111677),
                a = o.n(i),
                l = o(415506),
                d = o(516951),
                c = o(443781),
                u = o(376293),
                m = o(847607),
                h = o(417714),
                p = o(988823);
            const f = "block",
                _ = "mute",
                g = "removeFollower",
                b = "report",
                y = "share",
                w = a().j7bb1a43,
                E = a().hef5960c,
                k = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, c.QZ)(),
                        { onBlock: o, onClose: i, onMute: a, onRemoveFollower: p, onReportUser: k, onShare: v, onUnblock: I, onUnmute: D, user: S } = e,
                        P = [],
                        Z = (t, o) => {
                            const { confirm: s, onClose: n } = e;
                            if (t) {
                                const { label: e, ...r } = t;
                                s({ confirmButtonLabel: e, ...r })
                                    .then(o, d.Z)
                                    .finally(n);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !S.protected &&
                        !S.blocking &&
                        !S.blocked_by &&
                        P.push({
                            Icon: n.Z,
                            onClick: () => {
                                i(), v();
                            },
                            testID: y,
                            text: E,
                        });
                    !S.blocking &&
                        P.push({
                            ...(0, m.N1)(
                                S,
                                () => {
                                    i(), a();
                                },
                                () => {
                                    i(), D();
                                },
                            ),
                            testID: _,
                        });
                    S.followed_by &&
                        P.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    Z(e, p);
                                },
                                user: S,
                            }),
                            testID: g,
                        }),
                        P.push((0, u.op)({ blockAction: (e) => Z(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => Z(e, I), user: S })),
                        P.push({
                            Icon: l.default,
                            onClick: () => {
                                i(), k();
                            },
                            testID: b,
                            text: w({ screenName: S.screen_name }),
                        });
                    const T = P.map(({ Icon: e, onClick: t, testID: o, text: s }) => ({ text: s, onClick: t, Icon: e, testID: o }));
                    return s.createElement(r.Z, { items: T, onCloseRequested: i });
                });
        },
        864479: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => i });
            var s = o(807896),
                n = o(202784),
                r = o(771099);
            const i = (e) => (t) => n.createElement(r.$6, null, (o) => n.createElement(e, (0, s.Z)({}, t, { isInSidebar: o })));
        },
        893904: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { StickyView: () => m, default: () => g, roundToNearestDevicePixel: () => u, useStickyViewNotify: () => p });
            var s = o(202784),
                n = o(325686),
                r = o(67877),
                i = o(537392),
                a = o(392237),
                l = o(752624),
                d = o(323265),
                c = o(993547);
            const u = ({ cssPixels: e, dpr: t }) => Math.round(e * t) / t;
            class m extends s.PureComponent {
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
                        i = _[t],
                        a = window.devicePixelRatio || 1,
                        l = u({ cssPixels: o, dpr: a }),
                        d = u({ cssPixels: e, dpr: a }),
                        c = { top: r ? `${l}px` : null, bottom: r ? null : `${l}px` };
                    return s.createElement(n.Z, { ref: this._setContainerRef, style: [_.container, { minHeight: this.state.contentHeight }] }, s.createElement(f, { onNotify: this._forceUpdatePositioning }), s.createElement(n.Z, { style: { marginTop: `${d}px` } }), s.createElement(n.Z, { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, c, i] }, this.props.children));
                }
                _updatePositioning(e = !1) {
                    if (!this._contentNode || !this._containerNode) return;
                    const t = this.props.viewport.scrollY(),
                        o = t - this._prevScrollY;
                    if (Math.abs(o) < 0.5 && !e) return;
                    const { distanceFromBottom: s } = this.props;
                    this._prevScrollY = t;
                    const n = !!this._contentNode && this._contentNode.getBoundingClientRect(),
                        r = !!this._containerNode && this._containerNode.getBoundingClientRect();
                    if (!n || !r) return;
                    const { height: a } = (0, i.iv)(),
                        l = d.ZP.isIOS() ? window.innerHeight : a,
                        c = t + r.top,
                        u = Math.max(n.top - r.top, 0);
                    if (l - n.height >= c) this._updateState({ stickyTop: !0, stickyThreshold: c, contentOffset: 0, stickyOffset: c, contentHeight: n.height, position: "fixed" });
                    else {
                        const e = o > 0,
                            t = e !== this.state.stickyTop,
                            r = window.devicePixelRatio || 1,
                            i = n.bottom - l + s <= 1 / r,
                            a = c - n.top <= 1 / r;
                        if (((e && i) || (!e && a)) && d.ZP.isFirefox()) {
                            const e = s,
                                t = c;
                            this._updateState({ position: "fixed", stickyOffset: c, stickyTop: a, stickyThreshold: a ? t : e, contentOffset: u, contentHeight: n.height });
                        } else {
                            const o = l - n.height - s,
                                r = l - n.height - c;
                            this._updateState({ position: "sticky", stickyTop: e, stickyOffset: c, stickyThreshold: e ? o : r, contentOffset: t ? u : this.state.contentOffset, contentHeight: n.height });
                        }
                    }
                }
                _updateState(e) {
                    const t = this.state.stickyTop !== e.stickyTop,
                        o = this.state.stickyThreshold !== e.stickyThreshold,
                        s = Math.abs(this.state.contentOffset - e.contentOffset) > 0.5,
                        n = Math.abs(this.state.stickyOffset - e.stickyOffset) > 0.5,
                        r = this.state.position !== e.position,
                        i = this.state.contentHeight !== e.contentHeight;
                    (t || o || s || n || r || i) && this.setState(e);
                }
            }
            m.defaultProps = { distanceFromBottom: 10 };
            const h = new l.Z();
            function p() {
                s.useLayoutEffect(() => {
                    h.notify();
                }, []);
            }
            function f({ onNotify: e }) {
                return (
                    s.useEffect(() => {
                        const { unsubscribe: t } = h.subscribe(e);
                        return () => {
                            t();
                        };
                    }, [e]),
                    null
                );
            }
            const _ = a.default.create((e) => ({ container: { height: "100%" }, sticky: { position: "sticky" }, fixed: { position: "fixed" }, static: { position: "static" } })),
                g = (0, c.Z)(m);
        },
        293988: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => v });
            var s = o(202784),
                n = o(154003),
                r = o(111677),
                i = o.n(r),
                a = o(74514),
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
                g = i().bdba3e1a,
                b = i().c4da7d28,
                y = i().j87c21f4,
                w = i().iebc30ca,
                E = i().dc740eb2;
            class k extends s.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? s.createElement(n.ZP, { "aria-label": b, hoverLabel: { label: w }, icon: s.createElement(a.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : s.createElement(n.ZP, { "aria-label": g, hoverLabel: { label: y }, icon: s.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return s.createElement("div", null, this.state.showingPushPrompt ? s.createElement(d.Z, { fullScreen: !0, message: E }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: o, userId: s } = this.props;
                    return o(s, { device: e }).catch(t(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const v = _(k);
        },
        130888: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { InThisConversationContainer: () => D, default: () => S });
            var s = o(202784),
                n = o(476984),
                r = o.n(n),
                i = o(111677),
                a = o.n(i),
                l = o(325686),
                d = o(844685),
                c = o(62857);
            const u = (e) => !e.protected || !!e.following,
                m = s.memo(function (e) {
                    const { headerText: t, participantIds: o } = e;
                    return s.createElement(l.Z, { "aria-label": t, role: "complementary" }, s.createElement(d.Z, { text: t }), s.createElement(c.Z, { filterPredicate: u, userIds: o.slice(0, 3) }));
                }),
                h = m;
            var p = o(668214),
                f = o(390387),
                _ = o(836255),
                g = o(919022),
                b = (o(136728), o(175848)),
                y = o(166852);
            const w = (e, t, o) => {
                    const s = o === t,
                        n = e.unmentioned_user_ids?.includes(t);
                    return s || !n;
                },
                E = (e, t) => (e.entities?.user_mentions || []).filter((o) => w(e, o.id_str, t)).map((e) => e.id_str) || [],
                k = (e, t) => t.focalTweetId,
                v = (0, p.Z)()
                    .propsFromState(() => ({ focalTweetId: k, viewerUserId: f._h, tweetMap: _.Z.selectAll, users: g.ZP.selectAll }))
                    .adjustStateProps(({ focalTweetId: e, tweetMap: t, users: o, viewerUserId: s }) => {
                        const n = e && t[e];
                        if (!n) return { participantIds: [] };
                        const r = [n.user, ...E(n, s), ...((i = n), b.ZP.mergeTaggedUsers((i.extended_entities && i.extended_entities.media) || []).map((e) => e.user_id))];
                        var i;
                        const a = n.quoted_status && t[n.quoted_status];
                        return a && (r.push(...((e, t) => (w(e, e.user, t) ? [e.user] : []))(a, s)), r.push(...E(a, s))), { participantIds: (0, y.Z)(r).filter((e) => "string" == typeof e && void 0 !== o[e]?.following) };
                    })
                    .withAnalytics({ component: "in_this_conversation" }),
                I = a().j88f27d8;
            function D({ participantIds: e }) {
                const t = (function (e) {
                    const t = s.useRef(e);
                    return r()(e, t.current) ? t.current : ((t.current = e), e);
                })(e);
                return t.length > 0 ? s.createElement(h, { headerText: I, participantIds: t }) : null;
            }
            const S = v(D);
        },
        741494: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { default: () => A });
            o(136728);
            var s = o(669506),
                n = o(202784),
                r = o(325686),
                i = (o(585488), o(277660)),
                a = o.n(i),
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
                w = o(535338),
                E = o(736063);
            const k = f().fb15ec28,
                v = f().ece910f0,
                I = f().jd08bc14,
                D = f().de0a4a72,
                S = f().fc5bfd96,
                P = s.Z,
                Z = () => n.createElement(r.Z, null, n.createElement(d.Z, { text: k }), n.createElement(r.Z, { style: C.content }, n.createElement(r.Z, { style: C.bulletRow }, n.createElement(c.ZP, null, n.createElement(_.default, null)), n.createElement(c.ZP, { size: "subtext1" }, v)), n.createElement(r.Z, { style: C.bulletRow }, n.createElement(c.ZP, null, n.createElement(_.default, null)), n.createElement(c.ZP, { size: "subtext1" }, I)), n.createElement(r.Z, { style: C.bulletRow }, n.createElement(c.ZP, null, n.createElement(_.default, null)), n.createElement(c.ZP, { size: "subtext1" }, D)), n.createElement(u.ZP, { link: "/jobs/get-recommendations", size: "small", type: "brandFilled" }, S))),
                T = ({ recommendation: e, recommendationId: t, recommendationIndex: o }) => {
                    const s = (0, m.Ji)(),
                        r = (0, l.useHistory)(),
                        i = a()(y.KM, e),
                        d = i?.core,
                        c = i?.user_results?.result,
                        u = i?.company_profile_results?.result,
                        h = i?.id || "",
                        p = i?.user_sentiment,
                        f = n.useCallback(() => {
                            s ? r.push(`/jobs/recommended/${t}`) : r.push(`/m/jobs/recommended/${t}`);
                        }, [r, s, t]);
                    return i && d ? n.createElement(b.Z, { actions: [], companyProfile: u, job: d, jobId: t, jobIndex: o, onClick: f, relayId: h, user: c, userSentiment: p, withBottomBorder: !1 }) : null;
                },
                C = h.default.create((e) => ({ content: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16, gap: e.spaces.space16 }, bulletRow: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center" } })),
                M = ({ isSidebarModule: e }) => {
                    const t = (0, w.p)(P, {}),
                        o = t?.viewer_v2.user_results.result.matching_profile,
                        s = t?.viewer_v2.user_results.result.job_recommendations_results;
                    if (!t || (o?.consented_at && !s?.length)) return null;
                    const i = ({ children: t }) => (e ? n.createElement(g.g, null, t) : n.createElement(n.Fragment, null, t));
                    return n.createElement(
                        i,
                        null,
                        o?.consented_at ? null : n.createElement(Z, null),
                        o?.consented_at && s?.length && s.length > 0
                            ? n.createElement(
                                  r.Z,
                                  null,
                                  n.createElement(d.Z, { text: "Recommended jobs" }),
                                  s.map((e, t) => (e.result ? n.createElement(T, { key: e.rest_id, recommendation: e.result, recommendationId: e.rest_id, recommendationIndex: t }) : null)),
                              )
                            : null,
                    );
                },
                L = { context: "JobRecommendationsModule" },
                A = (e) => n.createElement(E.H, { errorConfig: L }, n.createElement(M, e));
        },
        62857: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => P });
            var s = o(807896),
                n = o(202784),
                r = o(476984),
                i = o.n(r),
                a = o(111677),
                l = o.n(a),
                d = o(615656),
                c = o(290402),
                u = o(325686),
                m = o(240089),
                h = o(663550),
                p = o(409438);
            const f = ({ displayMode: e = p.Z.UserDetailed, renderUserCell: t, userIds: o }) =>
                n.createElement(
                    u.Z,
                    { role: "list" },
                    o.map((o, s) => (t ? t(o) : n.createElement(m.ZP, { decoration: m.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: o, promotedItemType: h.bj.USER, userId: o, withFollowsYou: !0 }))),
                );
            var _ = o(312771),
                g = o(71620),
                b = o(973572),
                y = o(668214),
                w = o(919022);
            const E = (e, t) => t.userIds,
                k = (e, t) => {
                    const { filterPredicate: o = (e) => !!e, userIds: s } = t;
                    return s.filter((t) => {
                        const s = w.ZP.select(e, t);
                        return !!s && o(s);
                    });
                },
                v = (e, t) => {
                    const { userIds: o } = t;
                    return o.reduce((t, o) => {
                        const s = w.ZP.selectFetchStatus(e, o);
                        return s && (t[o] = s === _.ZP.NONE ? _.ZP.LOADING : s), t;
                    }, {});
                },
                I = (0, y.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, b.Z)(k, (e) => e),
                        fetchStatus: (0, b.Z)(k, v, E, (e, t, o) => {
                            let s = _.ZP.LOADED;
                            for (let n = 0; n < o.length; n++) {
                                const r = o[n];
                                if (-1 === e.indexOf(r)) {
                                    const e = t[r] || _.ZP.LOADING;
                                    s = s === _.ZP.LOADED ? e : s;
                                }
                                if (s === _.ZP.LOADED) break;
                            }
                            return s;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: w.ZP.fetchManyIfNeeded })),
                D = l().f5b426c2;
            class S extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: o, fetchUsersIfNeeded: r, filterPredicate: i, userIds: a, ...l } = this.props;
                            return n.createElement(f, (0, s.Z)({}, l, { userIds: e }));
                        }),
                        (this._handleFetch = () => {
                            this._fetchUsersIfNeeded();
                        });
                }
                componentDidMount() {
                    this._fetchUsersIfNeeded();
                }
                componentDidUpdate(e) {
                    i()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded();
                }
                render() {
                    return n.createElement(c.Z, { "aria-label": D, fetchStatus: this.state.allUsersUnavailable ? _.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: o, userIds: s } = this.props;
                    o(s).then(
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
            const P = I(S);
        },
        912937: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { WhoToFollowContainer: () => W, default: () => $ });
            var s = o(202784),
                n = o(325686),
                r = o(392237),
                i = o(111677),
                a = o.n(i),
                l = o(290402),
                d = o(844685),
                c = o(30183),
                u = o(62857),
                m = o(952793),
                h = o(409438),
                p = o(864479),
                f = (o(136728), o(952428)),
                _ = o(443781);
            const g = s.lazy(() => window.__SSP_PROMISE__.then(() => ({ default: E }))),
                b = new Set(),
                y = {};
            let w = 0;
            function E({ fallbackSlotId: e, primarySlotId: t }) {
                const o = s.useRef("ad-" + w++).current,
                    [r, i] = s.useState(""),
                    a = s.useRef(!1),
                    l = s.useRef(!1),
                    { userClaims: d } = s.useContext(_.rC),
                    c = d.isAnyPremiumSubscriber(),
                    u = "rtl" === document?.documentElement?.getAttribute("dir"),
                    m = s.useCallback(() => {
                        window.googletag &&
                            a.current &&
                            !l.current &&
                            window.googletag.cmd.push(() => {
                                if (!a.current) return;
                                u && window.googletag.pubads().setTargeting("rtl", "true");
                                const s = `adEventHandler_${o}`;
                                y[s] && (window.googletag.pubads().removeEventListener("slotRenderEnded", y[s]), delete y[s]),
                                    (y[s] = (o) => {
                                        a.current && (o.isEmpty || (o.slot.getSlotElementId() === e ? i("fallback") : o.slot.getSlotElementId() === t && "" === r && i("primary")));
                                    }),
                                    window.googletag.pubads().addEventListener("slotRenderEnded", y[s]);
                                if (!b.has(t) || !b.has(e)) b.has(e) || (window.googletag.display(e), b.add(e)), b.has(t) || (window.googletag.display(t), b.add(t));
                                else {
                                    const o = window.googletag
                                        .pubads()
                                        .getSlots()
                                        .filter((o) => {
                                            const s = o.getSlotElementId();
                                            return s === t || s === e;
                                        });
                                    o.length > 0 && window.googletag.pubads().refresh(o);
                                }
                                l.current = !0;
                            });
                    }, [e, t, u, r, o]);
                if (
                    (s.useEffect(() => {
                        if (c) return;
                        a.current = !0;
                        const s = () => {
                            const o = document.getElementById(t),
                                s = document.getElementById(e);
                            return (
                                !(!o || !s) &&
                                (setTimeout(() => {
                                    a.current && m();
                                }, 50),
                                !0)
                            );
                        };
                        if (!s()) {
                            const e = new MutationObserver((e, t) => {
                                s() && t.disconnect();
                            });
                            return (
                                e.observe(document.body, { childList: !0, subtree: !0 }),
                                () => {
                                    e.disconnect();
                                }
                            );
                        }
                        return () => {
                            a.current = !1;
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
                return s.createElement(n.Z, { style: h }, s.createElement(n.Z, { id: t, style: [k.adSlot, "primary" !== r && k.hiddenSlot] }), s.createElement(n.Z, { id: e, style: [k.adSlot, "fallback" !== r && k.hiddenSlot] }));
            }
            const k = r.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space12, borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, adContainer: { minHeight: 250, minWidth: 300, width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", position: "relative" }, emptyContainer: { minHeight: 0, height: 0, overflow: "hidden" }, adSlot: { width: "100%", height: "100%", position: "absolute", top: 0, start: 0, end: 0, minWidth: 300, minHeight: 250 }, hiddenSlot: { display: "none" } })),
                v = function (e) {
                    return s.createElement(f.Z, { style: k.root }, s.createElement(s.Suspense, { fallback: s.createElement(n.Z, { style: k.emptyContainer }) }, s.createElement(g, e)));
                },
                I = a().a526aa66,
                D = a().ef625010,
                S = a().d228a9a0,
                P = (0, p.Z)(({ isInSidebar: e, userId: t, userIds: o, withProfileHeaderText: r }) => {
                    const i = (0, m.hC)("rweb_ssp_ads_enabled"),
                        a = `/i/connect_people?user_id=${t}`,
                        l = o.length > 0;
                    return s.createElement(n.Z, { "aria-label": I, role: "complementary" }, s.createElement(d.Z, { text: r ? D : I }), s.createElement(u.Z, { displayMode: h.Z.UserCompact, userIds: o }), i && l && s.createElement(v, { fallbackSlotId: "div-gpt-ad-1740520505566-0", primarySlotId: "div-gpt-ad-1738265577622-0" }), l && s.createElement(c.Z, { link: a, text: S, withBottomRadius: !0, withDarkerInteractiveBackground: e }));
                });
            var Z = o(967977),
                T = o(942893),
                C = o(312771),
                M = o(71620),
                L = o(973572),
                A = o(668214),
                U = o(994305),
                O = o(919022);
            const x = "profile_accounts_sidebar",
                R = (e, t) => U.Ic(e, { displayLocation: x, similarToUserId: t.userId }),
                N = (e, t) => U.UD(e, { displayLocation: x, similarToUserId: t.userId }),
                F = (e, t) => {
                    const o = R(e, t),
                        s = [];
                    return (
                        o.forEach(({ user_id: t }) => {
                            const o = O.ZP.select(e, t);
                            o && s.push(o);
                        }),
                        s
                    );
                },
                H = (0, A.Z)()
                    .propsFromState(() => ({ fetchStatus: N, recommendations: R, users: (0, L.Z)(F, (e) => e) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, M.zr)("WHO_TO_FOLLOW_CONTAINER"), fetchRecommendationsIfNeeded: U.yY }))
                    .withAnalytics({ component: "suggest_who_to_follow" }),
                B = a().fd6473fa,
                j = { element: "user", action: "results" };
            class W extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = () => {
                            const { recommendations: e, userId: t, withProfileHeaderText: o } = this.props,
                                n = e && e.map((e) => e.user_id);
                            return s.createElement(P, { userId: t, userIds: n, withProfileHeaderText: o });
                        }),
                        (this._handleImpression = (e) => {
                            const { analytics: t, users: o } = this.props,
                                s = e && e.map((e) => ({ ...T.Z.forUser(e.user_id), suggestion_details: { source_data: e.token } }));
                            t.scribe({ ...j, data: { items: s } }),
                                o &&
                                    o.map((e) => {
                                        const o = e ? [T.Z.forUser(e.id_str)] : [];
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
                    return e === C.ZP.FAILED || this._hasEmptySuggestionList() ? null : s.createElement(n.Z, { style: [q.root, t] }, s.createElement(l.Z, { "aria-label": B, fetchStatus: e, render: this._renderContent }));
                }
                _fetchRecommendations(e) {
                    const { createLocalApiErrorHandler: t, fetchRecommendationsIfNeeded: o, userId: s } = e;
                    o({ limit: 3, displayLocation: x, similarToUserId: s }).catch(t(Z.C));
                }
                _hasEmptySuggestionList() {
                    const { fetchStatus: e, recommendations: t } = this.props;
                    return e === C.ZP.LOADED && 0 === t.length;
                }
            }
            const q = r.default.create((e) => ({ root: { minHeight: "15rem" } })),
                $ = H(W);
        },
        684511: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => s });
            o(202784);
            const s = (0, o(523561).Z)({
                loader: () =>
                    Promise.all([
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
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
            o.d(t, { $f: () => I, KV: () => g, LI: () => T, SC: () => v, Vt: () => w, ed: () => C, op: () => D });
            var s = o(202784),
                n = o(190286),
                r = o(111677),
                i = o.n(r),
                a = o(616894),
                l = o(314948),
                d = o(516951),
                c = o(163390);
            const u = i().cfd2f35e,
                m = i().f9e45cfb,
                h = i().fcd4d489,
                p = i().a6450e84,
                f = i().g353ad73,
                _ = i().ad00a739,
                g = i().a9fd20be,
                b = i().j546fb79,
                y = i().c9623eeb,
                w = i().e133be4e,
                E = i().he43bca4,
                k = i().f5f01af6,
                v = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                I = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: p, text: t ? _({ screenName: e }) : f({ screenName: e }) }),
                D = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: s, testID: n, unblockAction: r, unblockSubtext: i, user: a }) => {
                    let l,
                        u = d.Z;
                    const m = T(a, o);
                    switch (s) {
                        case v.PROFILE:
                        case v.LIST_DETAIL:
                        case v.FOLLOWERS_LIST:
                            u = () => {
                                a.blocking ? r(m) : e(m);
                            };
                            break;
                        case v.TWEET:
                        case v.TWEET_CARET:
                        case v.RICH_FEEDBACK:
                            (l = c.uq.block),
                                (u = () => {
                                    a.blocking ? r(m) : e(m);
                                });
                    }
                    return { confirmation: m, onClick: u, testID: n, shortcutKey: l, Icon: S(a.blocking), text: Z(a), subText: P({ user: a, blockSubtext: t, unblockSubtext: i }) };
                },
                S = (e) => (e ? l.default : a.default),
                P = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                Z = (e) => (e.blocking ? y({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                T = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: b({ screenName: e }), label: w, text: t ? k : E }))(e.screen_name, t) : I(e.screen_name, t)),
                C = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: r, headline: i, label: a, text: l } = e;
                    return s.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: a, confirmButtonType: r, headline: i, onCancel: o, onConfirm: t, text: l });
                };
        },
        545334: (e, t, o) => {
            "use strict";
            o.d(t, { d: () => n });
            var s = o(111677);
            const n = o.n(s)().gf5e9ea6;
        },
        916585: (e, t, o) => {
            "use strict";
            o.d(t, { k: () => i });
            var s = o(111677),
                n = o.n(s),
                r = o(437358);
            const i = (e, t) => {
                const { id_str: o, screen_name: s } = e,
                    i = (0, n().d78131b9)({ screenName: s });
                return { Icon: r.default, text: i, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: t };
            };
        },
        847607: (e, t, o) => {
            "use strict";
            o.d(t, { Aq: () => u, FK: () => b, GS: () => a, N1: () => h, PY: () => m, X6: () => y, cm: () => l });
            o(202784);
            var s = o(111677),
                n = o.n(s),
                r = o(391366),
                i = o(40904);
            const a = n().hb568af4,
                l = n().bb1cbeb6,
                d = (n().h2f62206, n().e67b2d65),
                c = n().f05597b3,
                u = (e) => d({ screenName: e }),
                m = (e) => c({ screenName: e }),
                h = (e, t, o) => {
                    const { muting: s, screen_name: n } = e;
                    return { text: s ? m(n) : u(n), onClick: s ? o : t, Icon: s ? r.default : i.default };
                },
                p = n().h59f52ee,
                f = n().eea0cbee,
                _ = n().i29533b3,
                g = n().h129c3c3,
                b = (e) => (e ? ((e) => _({ screenName: e }))(e) : p),
                y = (e) => (e ? ((e) => g({ screenName: e }))(e) : f);
        },
        417714: (e, t, o) => {
            "use strict";
            o.d(t, { l: () => c });
            o(202784);
            var s = o(111677),
                n = o.n(s),
                r = o(224823);
            const i = n().b3036480,
                a = n().b3036480,
                l = n().e68b09b4,
                d = n().h27b7407,
                c = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: r.default, text: i, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: a, label: l, text: d({ screenName: e.screen_name }) });
        },
        712816: (e, t, o) => {
            "use strict";
            o.d(t, { d: () => n });
            var s = o(111677);
            const n = { defaultToast: { text: o.n(s)().b6878b0a }, showToast: !0 };
        },
        967977: (e, t, o) => {
            "use strict";
            o.d(t, { C: () => r });
            var s = o(516951),
                n = o(615656);
            const r = { [n.ZP.ResourceNotFound]: { customAction: s.Z } };
        },
        48886: (e, t, o) => {
            "use strict";
            o.d(t, { q: () => n });
            var s = o(111677);
            const n = { defaultToast: { text: o.n(s)().a30b63da }, showToast: !0 };
        },
        879596: (e, t, o) => {
            "use strict";
            o.d(t, { D: () => n });
            var s = o(111677);
            const n = { defaultToast: { text: o.n(s)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => r });
            var s = o(615656),
                n = o(51525);
            const r = { [s.ZP.FollowError]: { customAction: n.w1 } };
        },
        973572: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => i });
            var s = o(476984),
                n = o.n(s),
                r = o(24949);
            const i = (0, r.wN)(r.PW, n());
        },
        163390: (e, t, o) => {
            "use strict";
            o.d(t, { OX: () => m, Od: () => c, PN: () => h, uq: () => d, wR: () => f });
            var s = o(251067),
                n = o(522171),
                r = o(111677),
                i = o.n(r),
                a = o(912021),
                l = o(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, a.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, s.fH)(s.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: d.nextItem, universal: !0 }, { description: i().g0048656, keys: d.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: d.refresh, universal: !1 }, { description: i().ha8209bc, keys: d.goHome, universal: !1 }, { description: i().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: i().eb75875e, keys: d.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: i().fa98627a, keys: d.goProfile, universal: !1 }, { description: i().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: i().b0041756, keys: d.goLists, universal: !1 }, { description: i().d4986f86, keys: d.goMessages, universal: !1 }, { description: i().h5860a68, keys: d.goGrok, universal: !1 }, { description: i().bb081ea2, keys: d.goSettings, universal: !1 }, { description: i().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: d.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: i().ab3d53f8, keys: d.newTweet, universal: !1 },
                    { description: i().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: i().e736990a, keys: d.newMessage, universal: !1 },
                    { description: i().a9ae1e78, keys: d.search, universal: !1 },
                    { description: i().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: i().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: i().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: i().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: i().gb303814, keys: d.bookmark, universal: !1 },
                    { description: i().c03b1126, keys: d.mute, universal: !1 },
                    { description: i().ebd2abb2, keys: d.block, universal: !1 },
                    { description: i().hc6c5510, keys: "Enter", universal: !0 },
                    { description: i().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: i().b488758c, keys: d.toggleDMDrawer, universal: !1 },
                ],
                h = () => [
                    { description: i().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: i().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: i().b881560e, keys: d.video.mute, universal: !0 },
                    { description: i().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: i().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: i().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                p = (0, a.Z)((e) => {
                    const t = c(e),
                        o = m(),
                        s = h(),
                        n = {};
                    return (
                        [...o, ...s, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      n[t] = e;
                                  })
                                : (n[t] = e);
                        }),
                        JSON.stringify(n)
                    );
                }),
                f = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": p(e) } };
                };
        },
        409438: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => s });
            const s = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, t, o) => {
            "use strict";
            o.d(t, { M: () => i });
            var s = o(807896),
                n = o(202784),
                r = o(190286);
            const i = (e) => (t) => {
                const [o, i] = n.useState(null),
                    a = (e) =>
                        new Promise((t, o) => {
                            i({ resolve: t, reject: o, confirmationSheetProps: e });
                        });
                if (o) {
                    const { confirmationSheetProps: e, reject: t, resolve: a } = o;
                    return n.createElement(
                        r.Z,
                        (0, s.Z)({}, e, {
                            onCancel: () => {
                                t(), i(null);
                            },
                            onConfirm: () => {
                                a(), i(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, s.Z)({}, t, { confirm: a }));
            };
        },
        694180: (e, t, o) => {
            "use strict";
            o.d(t, { cM: () => _, dS: () => f, iY: () => g });
            var s = o(370751),
                n = o(399896),
                r = o(663550),
                i = o(499627),
                a = o(917799);
            const l = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, s.Z)([r.dx.IMPRESSION, r.dx.DWELL]),
                m = (0, s.Z)([r.AJ.TREND_VIEW, r.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: s }) => {
                        const { event: r, impression_id: i, promoted_trend_id: l } = e,
                            c = `trend-${l}-${r}`;
                        if (m.has(r) && p(o(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: r, impression_id: i };
                        return (0, a._O)(t, { params: u, request: s.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(r)) return [h(c)];
                        });
                    },
                _ =
                    ({ disclosureType: e, itemId: t, itemType: o, params: s }) =>
                    (r, i, { api: l }) => {
                        const { event: c, impression_id: m } = s,
                            f = `${o}-${t ?? "undefined"}-${m ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && p(i(), f)) return Promise.resolve();
                        const _ = e && "earned" === e.toLowerCase() ? "1" : null,
                            g = { ...s, earned: _, epoch_ms: Date.now() };
                        return (0, a._O)(r, { params: g, request: l.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: g }, (e, t) => {
                            if (!t && u.has(c)) return [h(f)];
                        });
                    },
                g =
                    (e) =>
                    (t, o, { api: s }) =>
                        (0, a._O)(t, { params: e, request: s.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            i.Z.register({
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
            o.d(t, { yY: () => L, UD: () => M, Ic: () => C });
            var s = o(360917),
                n = o.n(s),
                r = o(506899),
                i = o(414742),
                a = o(125199);
            const l = new r.fK.Entity("recommendations", { user: a.Z }, { idAttribute: (e) => e.user?.rest_id });
            var d = o(801301),
                c = o.n(d),
                u = o(304819);
            const m = new r.fK.Entity("recommendations", { user: u.Z }, { idAttribute: (e) => e.user?.id_str });
            var h = o(387466),
                p = o(120071);
            const f = (e) => ({ ...p.k(e), excluded: [], pc: !0 }),
                _ = ({ apiClient: e, featureSwitches: t }) => ({
                    fetch(o, s = {}) {
                        const n = { ...f(t), ...o, ...(0, h.Y)(t) };
                        return e.get("users/recommendations", n, s).then((e) => (0, r.Fv)(e, [m]));
                    },
                    fetchSidebarUserRecommendations: (t) =>
                        e
                            .graphQL(
                                c(),
                                { profileUserId: t.user_id },
                                (0, i.kj)((e) => !e.sidebar_user_recommendations, "GQL Sidebar User Recommendations: Failed to render Sidebar User Recommendations"),
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
                w = o(56519);
            const E = "recommendations",
                k = 30,
                v = "rweb/recommendations/FETCH_REQUEST",
                I = "rweb/recommendations/FETCH_SUCCESS",
                D = "rweb/recommendations/FETCH_FAILURE",
                S = {},
                P = ({ displayLocation: e, similarToUserId: t }) => e + (t ? `_${t}` : "");
            g.Z.register({
                [E]: function (e = S, t) {
                    if (!t?.meta) return e;
                    switch (t.type) {
                        case v: {
                            const o = P(t.meta);
                            return { ...e, [o]: { ...e[o], fetchStatus: y.ZP.LOADING } };
                        }
                        case D: {
                            const o = P(t.meta);
                            return { ...e, [o]: { ...e[o], fetchStatus: y.ZP.FAILED } };
                        }
                        case I: {
                            const o = P(t.meta),
                                s = t.payload && t.payload.entities ? t.payload.entities : { recommendations: n() },
                                r = (t.payload && t.payload.result ? t.payload.result : T).map((e) => s.recommendations[e]);
                            return { ...e, [o]: { ...e[o], fetchStatus: y.ZP.LOADED, recommendations: r } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const Z = [],
                T = [],
                C = (e, { displayLocation: t, similarToUserId: o }) => {
                    const s = e[E][P({ displayLocation: t, similarToUserId: o })];
                    return s && s.recommendations ? s.recommendations : Z;
                },
                M = (e, { displayLocation: t, similarToUserId: o }) => {
                    const s = e[E][P({ displayLocation: t, similarToUserId: o })];
                    return s ? s.fetchStatus : y.ZP.NONE;
                },
                L = (e) => (t, o, s) => {
                    const r = o(),
                        { displayLocation: i, similarToUserId: a } = e,
                        l = C(r, { displayLocation: i, similarToUserId: a }),
                        d = M(r, { displayLocation: i, similarToUserId: a }) === y.ZP.LOADED;
                    return l && d
                        ? Promise.resolve(n())
                        : t(
                              (
                                  (e) =>
                                  (t, o, { api: s, featureSwitches: n }) => {
                                      const { displayLocation: r, itsInterests: i, limit: a = k, similarToUserId: l } = e,
                                          d = "profile_accounts_sidebar" === r && n.isTrue("rweb_recommendations_sidebar_graphql_enabled");
                                      return (0, b._O)(t, { request: d ? s.withEndpoint(_).fetchSidebarUserRecommendations : s.withEndpoint(_).fetch, params: { display_location: r, itsInterests: i, limit: a, user_id: l } })({ actionTypes: { REQUEST: v, SUCCESS: I, FAILURE: D }, context: "FETCH_RECOMMENDATIONS", meta: { displayLocation: r, similarToUserId: l } }, (e) => {
                                          if (e && e.entities) return [(0, w.dP)(e.entities)];
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
            var s = o(161821),
                n = o(390387),
                r = o(836255),
                i = o(255117),
                a = o(166506),
                l = o(919022);
            const d =
                (e, t) =>
                (o, d, { api: c, featureSwitches: u }) =>
                    o(l.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            l = (0, s.Z)(r.Z.selectAll(t)).reduce((o, s) => {
                                if (null != s)
                                    if (s.user === e) o[s.id_str] = !0;
                                    else if (s.retweeted_status) {
                                        const n = r.Z.select(t, s.retweeted_status);
                                        n?.user === e && (o[s.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            c = (0, n._h)(d()),
                            u = c ? [(0, i.ZP)({ useLatest: !1, userId: c }).removeTweets(l), (0, i.ZP)({ useLatest: !0, userId: c }).removeTweets(l)] : [],
                            m = (0, a.k9)();
                        if (m.selectInitialFetchStatus(t) && !m.selectCanRefresh(t)) {
                            const o = (0, a.f8)(e, t, m);
                            o && u.push(o);
                        }
                        return o(u);
                    });
        },
        166506: (e, t, o) => {
            "use strict";
            o.d(t, { du: () => c, f8: () => u, k9: () => d });
            var s = o(503768),
                n = o(750085),
                r = o(962741),
                i = o(466015),
                a = o(919022),
                l = o(218951);
            const d = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                c = (e) => (t, o) => {
                    const s = o();
                    t(
                        e
                            .selectEntries(s)
                            .filter((e) => {
                                const t = e.type === r.ZP.User ? e.content.id : "",
                                    o = a.ZP.select(s, t);
                                return o && !o.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, o) => {
                    if (!o.selectEntries(t).find((t) => t.type === r.ZP.User && t.content.id === e)) {
                        const t = (0, i.OD)(e),
                            s = (0, i.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return o.injectEntry(s);
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.WideLayout-9f4db315.fd28629a.js.map
