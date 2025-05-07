(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.WideLayout"],
    {
        544118: (e) => {
            e.exports = { queryId: "RSnevjRHTlp36Y-NIHWu-g", operationName: "SidebarUserRecommendations", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        616753: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => r });
            const r = n(797553).default;
        },
        333241: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => k });
            n(136728);
            var r = n(202784),
                o = n(638236),
                s = n(811176),
                a = n(674132),
                l = n.n(a),
                i = n(415506),
                d = n(516951),
                c = n(443781),
                u = n(376293),
                m = n(847607),
                h = n(417714),
                p = n(988823);
            const f = "block",
                _ = "mute",
                g = "removeFollower",
                y = "report",
                b = "share",
                D = l().j7bb1a43,
                w = l().hef5960c,
                k = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, c.QZ)(),
                        { onBlock: n, onClose: a, onMute: l, onRemoveFollower: p, onReportUser: k, onShare: I, onUnblock: E, onUnmute: P, user: S } = e,
                        v = [],
                        M = (t, n) => {
                            const { confirm: r, onClose: o } = e;
                            if (t) {
                                const { label: e, ...s } = t;
                                r({ confirmButtonLabel: e, ...s })
                                    .then(n, d.Z)
                                    .finally(o);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !S.protected &&
                        !S.blocking &&
                        !S.blocked_by &&
                        v.push({
                            Icon: o.Z,
                            onClick: () => {
                                a(), I();
                            },
                            testID: b,
                            text: w,
                        });
                    !S.blocking &&
                        v.push({
                            ...(0, m.N1)(
                                S,
                                () => {
                                    a(), l();
                                },
                                () => {
                                    a(), P();
                                },
                            ),
                            testID: _,
                        });
                    S.followed_by &&
                        v.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    M(e, p);
                                },
                                user: S,
                            }),
                            testID: g,
                        }),
                        v.push((0, u.op)({ blockAction: (e) => M(e, n), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => M(e, E), user: S })),
                        v.push({
                            Icon: i.default,
                            onClick: () => {
                                a(), k();
                            },
                            testID: y,
                            text: D({ screenName: S.screen_name }),
                        });
                    const Z = v.map(({ Icon: e, onClick: t, testID: n, text: r }) => ({ text: r, onClick: t, Icon: e, testID: n }));
                    return r.createElement(s.Z, { items: Z, onCloseRequested: a });
                });
        },
        864479: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => a });
            var r = n(807896),
                o = n(202784),
                s = n(771099);
            const a = (e) => (t) => o.createElement(s.$6, null, (n) => o.createElement(e, (0, r.Z)({}, t, { isInSidebar: n })));
        },
        893904: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { StickyView: () => m, default: () => g, roundToNearestDevicePixel: () => u, useStickyViewNotify: () => p });
            var r = n(202784),
                o = n(325686),
                s = n(67877),
                a = n(537392),
                l = n(392237),
                i = n(752624),
                d = n(323265),
                c = n(993547);
            const u = ({ cssPixels: e, dpr: t }) => Math.round(e * t) / t;
            class m extends r.PureComponent {
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
                        (this._scheduleUpdatePositioning = (0, s.Z)(this._updatePositioning.bind(this), this._singleRequestAnimationFrame));
                    const { viewport: t } = e;
                    this._removeProgrammaticScrollListener = t.addProgrammaticScrollListener(this._handleProgrammaticScroll);
                }
                componentDidMount() {
                    this._isMounted = !0;
                    const { viewport: e } = this.props;
                    if ((this._updatePositioning(), (this._removeScrollListener = e.addScrollListener(this._scheduleUpdatePositioning)), this._containerNode)) {
                        const t = this._containerNode.getBoundingClientRect(),
                            n = e.scrollY();
                        (this._prevScrollY = n), this.setState({ stickyOffset: n + t.top });
                    }
                    this._pendingScrolledBy && (this._handleProgrammaticScroll(this._pendingScrolledBy), (this._pendingScrolledBy = 0));
                }
                componentWillUnmount() {
                    (this._isMounted = !1), this._removeScrollListener && this._removeScrollListener(), this._removeProgrammaticScrollListener && this._removeProgrammaticScrollListener(), void 0 !== this._timeoutId && cancelAnimationFrame(this._timeoutId);
                }
                render() {
                    const { contentOffset: e, position: t, stickyThreshold: n, stickyTop: s } = this.state,
                        a = _[t],
                        l = window.devicePixelRatio || 1,
                        i = u({ cssPixels: n, dpr: l }),
                        d = u({ cssPixels: e, dpr: l }),
                        c = { top: s ? `${i}px` : null, bottom: s ? null : `${i}px` };
                    return r.createElement(o.Z, { ref: this._setContainerRef, style: [_.container, { minHeight: this.state.contentHeight }] }, r.createElement(f, { onNotify: this._forceUpdatePositioning }), r.createElement(o.Z, { style: { marginTop: `${d}px` } }), r.createElement(o.Z, { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, c, a] }, this.props.children));
                }
                _updatePositioning(e = !1) {
                    if (!this._contentNode || !this._containerNode) return;
                    const t = this.props.viewport.scrollY(),
                        n = t - this._prevScrollY;
                    if (Math.abs(n) < 0.5 && !e) return;
                    const { distanceFromBottom: r } = this.props;
                    this._prevScrollY = t;
                    const o = !!this._contentNode && this._contentNode.getBoundingClientRect(),
                        s = !!this._containerNode && this._containerNode.getBoundingClientRect();
                    if (!o || !s) return;
                    const { height: l } = (0, a.iv)(),
                        i = d.ZP.isIOS() ? window.innerHeight : l,
                        c = t + s.top,
                        u = Math.max(o.top - s.top, 0);
                    if (i - o.height >= c) this._updateState({ stickyTop: !0, stickyThreshold: c, contentOffset: 0, stickyOffset: c, contentHeight: o.height, position: "fixed" });
                    else {
                        const e = n > 0,
                            t = e !== this.state.stickyTop,
                            s = window.devicePixelRatio || 1,
                            a = o.bottom - i + r <= 1 / s,
                            l = c - o.top <= 1 / s;
                        if (((e && a) || (!e && l)) && d.ZP.isFirefox()) {
                            const e = r,
                                t = c;
                            this._updateState({ position: "fixed", stickyOffset: c, stickyTop: l, stickyThreshold: l ? t : e, contentOffset: u, contentHeight: o.height });
                        } else {
                            const n = i - o.height - r,
                                s = i - o.height - c;
                            this._updateState({ position: "sticky", stickyTop: e, stickyOffset: c, stickyThreshold: e ? n : s, contentOffset: t ? u : this.state.contentOffset, contentHeight: o.height });
                        }
                    }
                }
                _updateState(e) {
                    const t = this.state.stickyTop !== e.stickyTop,
                        n = this.state.stickyThreshold !== e.stickyThreshold,
                        r = Math.abs(this.state.contentOffset - e.contentOffset) > 0.5,
                        o = Math.abs(this.state.stickyOffset - e.stickyOffset) > 0.5,
                        s = this.state.position !== e.position,
                        a = this.state.contentHeight !== e.contentHeight;
                    (t || n || r || o || s || a) && this.setState(e);
                }
            }
            m.defaultProps = { distanceFromBottom: 10 };
            const h = new i.Z();
            function p() {
                r.useLayoutEffect(() => {
                    h.notify();
                }, []);
            }
            function f({ onNotify: e }) {
                return (
                    r.useEffect(() => {
                        const { unsubscribe: t } = h.subscribe(e);
                        return () => {
                            t();
                        };
                    }, [e]),
                    null
                );
            }
            const _ = l.default.create((e) => ({ container: { height: "100%" }, sticky: { position: "sticky" }, fixed: { position: "fixed" }, static: { position: "static" } })),
                g = (0, c.Z)(m);
        },
        293988: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => I });
            var r = n(202784),
                o = n(154003),
                s = n(674132),
                a = n.n(s),
                l = n(74514),
                i = n(405303),
                d = n(684511),
                c = n(860174),
                u = n(71620),
                m = n(668214),
                h = n(257166),
                p = n(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                _ = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                g = a().bdba3e1a,
                y = a().c4da7d28,
                b = a().j87c21f4,
                D = a().iebc30ca,
                w = a().dc740eb2;
            class k extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(o.ZP, { "aria-label": y, hoverLabel: { label: D }, icon: r.createElement(l.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(o.ZP, { "aria-label": g, hoverLabel: { label: b }, icon: r.createElement(i.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(d.Z, { fullScreen: !0, message: w }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: n, userId: r } = this.props;
                    return n(r, { device: e }).catch(t(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const I = _(k);
        },
        130888: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { InThisConversationContainer: () => P, default: () => S });
            var r = n(202784),
                o = n(476984),
                s = n.n(o),
                a = n(674132),
                l = n.n(a),
                i = n(325686),
                d = n(844685),
                c = n(62857);
            const u = (e) => !e.protected || !!e.following,
                m = r.memo(function (e) {
                    const { headerText: t, participantIds: n } = e;
                    return r.createElement(i.Z, { "aria-label": t, role: "complementary" }, r.createElement(d.Z, { text: t }), r.createElement(c.Z, { filterPredicate: u, userIds: n.slice(0, 3) }));
                }),
                h = m;
            var p = n(668214),
                f = n(390387),
                _ = n(836255),
                g = n(919022),
                y = (n(136728), n(175848)),
                b = n(166852);
            const D = (e, t, n) => {
                    const r = n === t,
                        o = e.unmentioned_user_ids?.includes(t);
                    return r || !o;
                },
                w = (e, t) => (e.entities?.user_mentions || []).filter((n) => D(e, n.id_str, t)).map((e) => e.id_str) || [],
                k = (e, t) => t.focalTweetId,
                I = (0, p.Z)()
                    .propsFromState(() => ({ focalTweetId: k, viewerUserId: f._h, tweetMap: _.Z.selectAll, users: g.ZP.selectAll }))
                    .adjustStateProps(({ focalTweetId: e, tweetMap: t, users: n, viewerUserId: r }) => {
                        const o = e && t[e];
                        if (!o) return { participantIds: [] };
                        const s = [o.user, ...w(o, r), ...((a = o), y.ZP.mergeTaggedUsers((a.extended_entities && a.extended_entities.media) || []).map((e) => e.user_id))];
                        var a;
                        const l = o.quoted_status && t[o.quoted_status];
                        return l && (s.push(...((e, t) => (D(e, e.user, t) ? [e.user] : []))(l, r)), s.push(...w(l, r))), { participantIds: (0, b.Z)(s).filter((e) => "string" == typeof e && void 0 !== n[e]?.following) };
                    })
                    .withAnalytics({ component: "in_this_conversation" }),
                E = l().j88f27d8;
            function P({ participantIds: e }) {
                const t = (function (e) {
                    const t = r.useRef(e);
                    return s()(e, t.current) ? t.current : ((t.current = e), e);
                })(e);
                return t.length > 0 ? r.createElement(h, { headerText: E, participantIds: t }) : null;
            }
            const S = I(P);
        },
        527969: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => H });
            n(136728);
            var r,
                o,
                s,
                a,
                l,
                i,
                d,
                c = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobRecommendationsModuleQuery", selections: [{ kind: "RequiredField", field: { alias: null, args: (r = [{ kind: "Literal", name: "s", value: "f3d8" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(o = { alias: null, args: null, concreteType: "MatchingProfile", kind: "LinkedField", name: "matching_profile", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "consented_at", storageKey: null }], storageKey: null }), { alias: null, args: (s = [{ kind: "Literal", name: "count", value: 5 }]), concreteType: "ApiJobResults", kind: "LinkedField", name: "job_recommendations_results", plural: !0, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobSearchListItem_item" }], storageKey: null }], storageKey: "job_recommendations_results(count:5)" }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"f3d8")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "JobRecommendationsModuleQuery",
                        selections: [
                            {
                                alias: null,
                                args: r,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    (l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            o,
                                                            {
                                                                alias: null,
                                                                args: s,
                                                                concreteType: "ApiJobResults",
                                                                kind: "LinkedField",
                                                                name: "job_recommendations_results",
                                                                plural: !0,
                                                                selections: [
                                                                    a,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "result",
                                                                        plural: !1,
                                                                        selections: [
                                                                            l,
                                                                            { kind: "TypeDiscriminator", abstractKey: "__isJobResult" },
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "JobCore",
                                                                                        kind: "LinkedField",
                                                                                        name: "core",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "redirect_url", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [i, a, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [i, a, { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null }, { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null },
                                                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [a, { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, d, { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }], storageKey: null }, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null }, i], type: "User", abstractKey: null }], storageKey: null }, i], storageKey: null },
                                                                                ],
                                                                                type: "ApiJob",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    i,
                                                                ],
                                                                storageKey: "job_recommendations_results(count:5)",
                                                            },
                                                            i,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            i,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"f3d8")',
                            },
                        ],
                    },
                    params: { id: "jtmCoDqbHwEWOPWH-vJNjA", metadata: {}, name: "JobRecommendationsModuleQuery", operationKind: "query", text: null },
                };
            c.hash = "37b14a1d47b77462d15eba2689e65519";
            const u = c;
            var m = n(202784),
                h = n(325686),
                p = (n(585488), n(277660)),
                f = n.n(p),
                _ = n(107267),
                g = n(844685),
                y = n(731708),
                b = n(154003),
                D = n(708852),
                w = n(392237),
                k = n(674132),
                I = n.n(k),
                E = n(293723),
                P = n(399398),
                S = n(822502),
                v = n(910113),
                M = n(535338),
                Z = n(736063);
            const T = I().fb15ec28,
                F = I().ece910f0,
                L = I().jd08bc14,
                A = I().de0a4a72,
                C = I().fc5bfd96,
                U = u,
                R = () => m.createElement(h.Z, null, m.createElement(g.Z, { text: T }), m.createElement(h.Z, { style: x.content }, m.createElement(h.Z, { style: x.bulletRow }, m.createElement(y.ZP, null, m.createElement(E.default, null)), m.createElement(y.ZP, { size: "subtext1" }, F)), m.createElement(h.Z, { style: x.bulletRow }, m.createElement(y.ZP, null, m.createElement(E.default, null)), m.createElement(y.ZP, { size: "subtext1" }, L)), m.createElement(h.Z, { style: x.bulletRow }, m.createElement(y.ZP, null, m.createElement(E.default, null)), m.createElement(y.ZP, { size: "subtext1" }, A)), m.createElement(b.ZP, { link: "/jobs/get-recommendations", size: "small", type: "brandFilled" }, C))),
                O = ({ recommendation: e, recommendationId: t, recommendationIndex: n }) => {
                    const r = (0, D.Ji)(),
                        o = (0, _.useHistory)(),
                        s = f()(v.KM, e),
                        a = s?.core,
                        l = s?.user_results?.result,
                        i = s?.company_profile_results?.result,
                        d = s?.id || "",
                        c = s?.user_sentiment,
                        u = m.useCallback(() => {
                            r ? o.push(`/jobs/recommended/${t}`) : o.push(`/m/jobs/recommended/${t}`);
                        }, [o, r, t]);
                    return s && a ? m.createElement(S.Z, { actions: [], companyProfile: i, job: a, jobId: t, jobIndex: n, onClick: u, relayId: d, user: l, userSentiment: c, withBottomBorder: !1 }) : null;
                },
                x = w.default.create((e) => ({ content: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16, gap: e.spaces.space16 }, bulletRow: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center" } })),
                N = ({ isSidebarModule: e }) => {
                    const t = (0, M.p)(U, {}),
                        n = t?.viewer_v2.user_results.result.matching_profile,
                        r = t?.viewer_v2.user_results.result.job_recommendations_results;
                    if (!t || (n?.consented_at && !r?.length)) return null;
                    const o = ({ children: t }) => (e ? m.createElement(P.g, null, t) : m.createElement(m.Fragment, null, t));
                    return m.createElement(
                        o,
                        null,
                        n?.consented_at ? null : m.createElement(R, null),
                        n?.consented_at && r?.length && r.length > 0
                            ? m.createElement(
                                  h.Z,
                                  null,
                                  m.createElement(g.Z, { text: "Recommended jobs" }),
                                  r.map((e, t) => (e.result ? m.createElement(O, { key: e.rest_id, recommendation: e.result, recommendationId: e.rest_id, recommendationIndex: t }) : null)),
                              )
                            : null,
                    );
                },
                K = { context: "JobRecommendationsModule" },
                H = (e) => m.createElement(Z.H, { errorConfig: K }, m.createElement(N, e));
        },
        62857: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => v });
            var r = n(807896),
                o = n(202784),
                s = n(476984),
                a = n.n(s),
                l = n(674132),
                i = n.n(l),
                d = n(615656),
                c = n(290402),
                u = n(325686),
                m = n(240089),
                h = n(663550),
                p = n(409438);
            const f = ({ displayMode: e = p.Z.UserDetailed, renderUserCell: t, userIds: n }) =>
                o.createElement(
                    u.Z,
                    { role: "list" },
                    n.map((n, r) => (t ? t(n) : o.createElement(m.ZP, { decoration: m.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: n, promotedItemType: h.bj.USER, userId: n, withFollowsYou: !0 }))),
                );
            var _ = n(312771),
                g = n(71620),
                y = n(973572),
                b = n(668214),
                D = n(919022);
            const w = (e, t) => t.userIds,
                k = (e, t) => {
                    const { filterPredicate: n = (e) => !!e, userIds: r } = t;
                    return r.filter((t) => {
                        const r = D.ZP.select(e, t);
                        return !!r && n(r);
                    });
                },
                I = (e, t) => {
                    const { userIds: n } = t;
                    return n.reduce((t, n) => {
                        const r = D.ZP.selectFetchStatus(e, n);
                        return (t[n] = r === _.ZP.NONE ? _.ZP.LOADING : r), t;
                    }, {});
                },
                E = (0, b.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, y.Z)(k, (e) => e),
                        fetchStatus: (0, y.Z)(k, I, w, (e, t, n) => {
                            let r = _.ZP.LOADED;
                            for (let o = 0; o < n.length; o++) {
                                const s = n[o];
                                if (-1 === e.indexOf(s)) {
                                    const e = t[s] || _.ZP.LOADING;
                                    r = r === _.ZP.LOADED ? e : r;
                                }
                                if (r === _.ZP.LOADED) break;
                            }
                            return r;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: D.ZP.fetchManyIfNeeded })),
                P = i().f5b426c2;
            class S extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: n, fetchUsersIfNeeded: s, filterPredicate: a, userIds: l, ...i } = this.props;
                            return o.createElement(f, (0, r.Z)({}, i, { userIds: e }));
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
                    return o.createElement(c.Z, { "aria-label": P, fetchStatus: this.state.allUsersUnavailable ? _.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: n, userIds: r } = this.props;
                    n(r).then(
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
            const v = E(S);
        },
        912937: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { WhoToFollowContainer: () => j, default: () => W });
            var r = n(202784),
                o = n(325686),
                s = n(392237),
                a = n(674132),
                l = n.n(a),
                i = n(290402),
                d = n(844685),
                c = n(30183),
                u = n(62857),
                m = n(952793),
                h = n(409438),
                p = n(864479),
                f = (n(136728), n(952428)),
                _ = n(443781);
            const g = r.lazy(() => window.__SSP_PROMISE__.then(() => ({ default: w }))),
                y = new Set(),
                b = {};
            let D = 0;
            function w({ fallbackSlotId: e, primarySlotId: t }) {
                const n = r.useRef("ad-" + D++).current,
                    [s, a] = r.useState(""),
                    l = r.useRef(!1),
                    i = r.useRef(!1),
                    { userClaims: d } = r.useContext(_.rC),
                    c = d.isAnyPremiumSubscriber(),
                    u = "rtl" === document?.documentElement?.getAttribute("dir"),
                    m = r.useCallback(() => {
                        window.googletag &&
                            l.current &&
                            !i.current &&
                            window.googletag.cmd.push(() => {
                                if (!l.current) return;
                                u && window.googletag.pubads().setTargeting("rtl", "true");
                                const r = `adEventHandler_${n}`;
                                b[r] && (window.googletag.pubads().removeEventListener("slotRenderEnded", b[r]), delete b[r]),
                                    (b[r] = (n) => {
                                        l.current && (n.isEmpty || (n.slot.getSlotElementId() === e ? a("fallback") : n.slot.getSlotElementId() === t && "" === s && a("primary")));
                                    }),
                                    window.googletag.pubads().addEventListener("slotRenderEnded", b[r]);
                                if (!y.has(t) || !y.has(e)) y.has(e) || (window.googletag.display(e), y.add(e)), y.has(t) || (window.googletag.display(t), y.add(t));
                                else {
                                    const n = window.googletag
                                        .pubads()
                                        .getSlots()
                                        .filter((n) => {
                                            const r = n.getSlotElementId();
                                            return r === t || r === e;
                                        });
                                    n.length > 0 && window.googletag.pubads().refresh(n);
                                }
                                i.current = !0;
                            });
                    }, [e, t, u, s, n]);
                if (
                    (r.useEffect(() => {
                        if (c) return;
                        l.current = !0;
                        const r = () => {
                            const n = document.getElementById(t),
                                r = document.getElementById(e);
                            return (
                                !(!n || !r) &&
                                (setTimeout(() => {
                                    l.current && m();
                                }, 50),
                                !0)
                            );
                        };
                        if (!r()) {
                            const e = new MutationObserver((e, t) => {
                                r() && t.disconnect();
                            });
                            return (
                                e.observe(document.body, { childList: !0, subtree: !0 }),
                                () => {
                                    e.disconnect();
                                }
                            );
                        }
                        return () => {
                            l.current = !1;
                            const e = `adEventHandler_${n}`;
                            window.googletag &&
                                b[e] &&
                                window.googletag.cmd.push(() => {
                                    try {
                                        window.googletag.pubads().removeEventListener("slotRenderEnded", b[e]), delete b[e];
                                    } catch (e) {}
                                });
                        };
                    }, [c, t, e, m, n]),
                    c)
                )
                    return null;
                const h = [k.adContainer, !s && k.emptyContainer];
                return r.createElement(o.Z, { style: h }, r.createElement(o.Z, { id: t, style: [k.adSlot, "primary" !== s && k.hiddenSlot] }), r.createElement(o.Z, { id: e, style: [k.adSlot, "fallback" !== s && k.hiddenSlot] }));
            }
            const k = s.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space12, borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, adContainer: { minHeight: 250, minWidth: 300, width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", position: "relative" }, emptyContainer: { minHeight: 0, height: 0, overflow: "hidden" }, adSlot: { width: "100%", height: "100%", position: "absolute", top: 0, start: 0, end: 0, minWidth: 300, minHeight: 250 }, hiddenSlot: { display: "none" } })),
                I = function (e) {
                    return r.createElement(f.Z, { style: k.root }, r.createElement(r.Suspense, { fallback: r.createElement(o.Z, { style: k.emptyContainer }) }, r.createElement(g, e)));
                },
                E = l().a526aa66,
                P = l().ef625010,
                S = l().d228a9a0,
                v = (0, p.Z)(({ isInSidebar: e, userId: t, userIds: n, withProfileHeaderText: s }) => {
                    const a = (0, m.hC)("rweb_ssp_ads_enabled"),
                        l = `/i/connect_people?user_id=${t}`,
                        i = n.length > 0;
                    return r.createElement(o.Z, { "aria-label": E, role: "complementary" }, r.createElement(d.Z, { text: s ? P : E }), r.createElement(u.Z, { displayMode: h.Z.UserCompact, userIds: n }), a && i && r.createElement(I, { fallbackSlotId: "div-gpt-ad-1740520505566-0", primarySlotId: "div-gpt-ad-1738265577622-0" }), i && r.createElement(c.Z, { link: l, text: S, withBottomRadius: !0, withDarkerInteractiveBackground: e }));
                });
            var M = n(967977),
                Z = n(942893),
                T = n(312771),
                F = n(71620),
                L = n(973572),
                A = n(668214),
                C = n(994305),
                U = n(919022);
            const R = "profile_accounts_sidebar",
                O = (e, t) => C.Ic(e, { displayLocation: R, similarToUserId: t.userId }),
                x = (e, t) => C.UD(e, { displayLocation: R, similarToUserId: t.userId }),
                N = (e, t) => {
                    const n = O(e, t),
                        r = [];
                    return (
                        n.forEach(({ user_id: t }) => {
                            const n = U.ZP.select(e, t);
                            n && r.push(n);
                        }),
                        r
                    );
                },
                K = (0, A.Z)()
                    .propsFromState(() => ({ fetchStatus: x, recommendations: O, users: (0, L.Z)(N, (e) => e) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, F.zr)("WHO_TO_FOLLOW_CONTAINER"), fetchRecommendationsIfNeeded: C.yY }))
                    .withAnalytics({ component: "suggest_who_to_follow" }),
                H = l().fd6473fa,
                B = { element: "user", action: "results" };
            class j extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = () => {
                            const { recommendations: e, userId: t, withProfileHeaderText: n } = this.props,
                                o = e && e.map((e) => e.user_id);
                            return r.createElement(v, { userId: t, userIds: o, withProfileHeaderText: n });
                        }),
                        (this._handleImpression = (e) => {
                            const { analytics: t, users: n } = this.props,
                                r = e && e.map((e) => ({ ...Z.Z.forUser(e.user_id), suggestion_details: { source_data: e.token } }));
                            t.scribe({ ...B, data: { items: r } }),
                                n &&
                                    n.map((e) => {
                                        const n = e ? [Z.Z.forUser(e.id_str)] : [];
                                        e.following ? t.scribe({ element: "followed_user", action: "impression", data: { items: n } }) : e.muting ? t.scribe({ element: "muted_user", action: "impression", data: { items: n } }) : e.blocking && t.scribe({ element: "blocked_user", action: "impression", data: { items: n } });
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
                    return e === T.ZP.FAILED || this._hasEmptySuggestionList() ? null : r.createElement(o.Z, { style: [q.root, t] }, r.createElement(i.Z, { "aria-label": H, fetchStatus: e, render: this._renderContent }));
                }
                _fetchRecommendations(e) {
                    const { createLocalApiErrorHandler: t, fetchRecommendationsIfNeeded: n, userId: r } = e;
                    n({ limit: 3, displayLocation: R, similarToUserId: r }).catch(t(M.C));
                }
                _hasEmptySuggestionList() {
                    const { fetchStatus: e, recommendations: t } = this.props;
                    return e === T.ZP.LOADED && 0 === t.length;
                }
            }
            const q = s.default.create((e) => ({ root: { minHeight: "15rem" } })),
                W = K(j);
        },
        684511: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => r });
            n(202784);
            const r = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5517db7c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("loader.PushNotificationsPrompt"),
                    ]).then(n.bind(n, 529629)),
            });
        },
        545334: (e, t, n) => {
            "use strict";
            n.d(t, { d: () => o });
            var r = n(674132);
            const o = n.n(r)().gf5e9ea6;
        },
        916585: (e, t, n) => {
            "use strict";
            n.d(t, { k: () => a });
            var r = n(674132),
                o = n.n(r),
                s = n(437358);
            const a = (e, t) => {
                const { id_str: n, screen_name: r } = e,
                    a = (0, o().d78131b9)({ screenName: r });
                return { Icon: s.default, text: a, link: { pathname: "/i/lists/add_member", state: { userId: n } }, onClick: t };
            };
        },
        847607: (e, t, n) => {
            "use strict";
            n.d(t, { Aq: () => u, FK: () => y, GS: () => l, N1: () => h, PY: () => m, X6: () => b, cm: () => i });
            n(202784);
            var r = n(674132),
                o = n.n(r),
                s = n(391366),
                a = n(40904);
            const l = o().hb568af4,
                i = o().bb1cbeb6,
                d = (o().h2f62206, o().e67b2d65),
                c = o().f05597b3,
                u = (e) => d({ screenName: e }),
                m = (e) => c({ screenName: e }),
                h = (e, t, n) => {
                    const { muting: r, screen_name: o } = e;
                    return { text: r ? m(o) : u(o), onClick: r ? n : t, Icon: r ? s.default : a.default };
                },
                p = o().h59f52ee,
                f = o().eea0cbee,
                _ = o().i29533b3,
                g = o().h129c3c3,
                y = (e) => (e ? ((e) => _({ screenName: e }))(e) : p),
                b = (e) => (e ? ((e) => g({ screenName: e }))(e) : f);
        },
        417714: (e, t, n) => {
            "use strict";
            n.d(t, { l: () => c });
            n(202784);
            var r = n(674132),
                o = n.n(r),
                s = n(224823);
            const a = o().b3036480,
                l = o().b3036480,
                i = o().e68b09b4,
                d = o().h27b7407,
                c = ({ removeFollowerAction: e, user: t }) => {
                    const n = u(t);
                    return { Icon: s.default, text: a, onClick: () => e(n) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: l, label: i, text: d({ screenName: e.screen_name }) });
        },
        967977: (e, t, n) => {
            "use strict";
            n.d(t, { C: () => s });
            var r = n(516951),
                o = n(615656);
            const s = { [o.ZP.ResourceNotFound]: { customAction: r.Z } };
        },
        48886: (e, t, n) => {
            "use strict";
            n.d(t, { q: () => o });
            var r = n(674132);
            const o = { defaultToast: { text: n.n(r)().a30b63da }, showToast: !0 };
        },
        860174: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var r = n(615656),
                o = n(51525);
            const s = { [r.ZP.FollowError]: { customAction: o.w1 } };
        },
        988823: (e, t, n) => {
            "use strict";
            n.d(t, { M: () => a });
            var r = n(807896),
                o = n(202784),
                s = n(190286);
            const a = (e) => (t) => {
                const [n, a] = o.useState(null),
                    l = (e) =>
                        new Promise((t, n) => {
                            a({ resolve: t, reject: n, confirmationSheetProps: e });
                        });
                if (n) {
                    const { confirmationSheetProps: e, reject: t, resolve: l } = n;
                    return o.createElement(
                        s.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                t(), a(null);
                            },
                            onConfirm: () => {
                                l(), a(null);
                            },
                        }),
                    );
                }
                return o.createElement(e, (0, r.Z)({}, t, { confirm: l }));
            };
        },
        694180: (e, t, n) => {
            "use strict";
            n.d(t, { cM: () => _, dS: () => f, iY: () => g });
            var r = n(370751),
                o = n(399896),
                s = n(663550),
                a = n(499627),
                l = n(917799);
            const i = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([s.dx.IMPRESSION, s.dx.DWELL]),
                m = (0, r.Z)([s.AJ.TREND_VIEW, s.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, n, { api: r }) => {
                        const { event: s, impression_id: a, promoted_trend_id: i } = e,
                            c = `trend-${i}-${s}`;
                        if (m.has(s) && p(n(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: i, event: s, impression_id: a };
                        return (0, l._O)(t, { params: u, request: r.withEndpoint(o.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(s)) return [h(c)];
                        });
                    },
                _ =
                    ({ disclosureType: e, itemId: t, itemType: n, params: r }) =>
                    (s, a, { api: i }) => {
                        const { event: c, impression_id: m } = r,
                            f = `${n}-${t ?? "undefined"}-${m ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && p(a(), f)) return Promise.resolve();
                        const _ = e && "earned" === e.toLowerCase() ? "1" : null,
                            g = { ...r, earned: _, epoch_ms: Date.now() };
                        return (0, l._O)(s, { params: g, request: i.withEndpoint(o.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: g }, (e, t) => {
                            if (!t && u.has(c)) return [h(f)];
                        });
                    },
                g =
                    (e) =>
                    (t, n, { api: r }) =>
                        (0, l._O)(t, { params: e, request: r.withEndpoint(o.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            a.Z.register({
                promotedContent: function (e = i, t) {
                    if (!t) return e;
                    if (t.type === c) {
                        if (!t.payload) return e;
                        const { eventKey: n } = t.payload;
                        return { ...e, [n]: !0 };
                    }
                    return e;
                },
            });
        },
        994305: (e, t, n) => {
            "use strict";
            n.d(t, { yY: () => L, UD: () => F, Ic: () => T });
            var r = n(360917),
                o = n.n(r),
                s = n(506899),
                a = n(414742),
                l = n(125199);
            const i = new s.fK.Entity("recommendations", { user: l.Z }, { idAttribute: (e) => e.user?.rest_id });
            var d = n(544118),
                c = n.n(d),
                u = n(304819);
            const m = new s.fK.Entity("recommendations", { user: u.Z }, { idAttribute: (e) => e.user?.id_str });
            var h = n(387466),
                p = n(120071);
            const f = (e) => ({ ...p.k(e), excluded: [], pc: !0 }),
                _ = ({ apiClient: e, featureSwitches: t }) => ({
                    fetch(n, r = {}) {
                        const o = { ...f(t), ...n, ...(0, h.Y)(t) };
                        return e.get("users/recommendations", o, r).then((e) => (0, s.Fv)(e, [m]));
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
                                return (0, s.Fv)(
                                    t.map(({ token: e, user_results: { result: t } }) => ({ token: e, user: t, user_id: t?.rest_id })).filter(({ user: e }) => e),
                                    [i],
                                );
                            }),
                });
            var g = n(499627),
                y = n(917799),
                b = n(312771),
                D = n(56519);
            const w = "recommendations",
                k = 30,
                I = "rweb/recommendations/FETCH_REQUEST",
                E = "rweb/recommendations/FETCH_SUCCESS",
                P = "rweb/recommendations/FETCH_FAILURE",
                S = {},
                v = ({ displayLocation: e, similarToUserId: t }) => e + (t ? `_${t}` : "");
            g.Z.register({
                [w]: function (e = S, t) {
                    if (!t?.meta) return e;
                    switch (t.type) {
                        case I: {
                            const n = v(t.meta);
                            return { ...e, [n]: { ...e[n], fetchStatus: b.ZP.LOADING } };
                        }
                        case P: {
                            const n = v(t.meta);
                            return { ...e, [n]: { ...e[n], fetchStatus: b.ZP.FAILED } };
                        }
                        case E: {
                            const n = v(t.meta),
                                r = t.payload && t.payload.entities ? t.payload.entities : { recommendations: o() },
                                s = (t.payload && t.payload.result ? t.payload.result : Z).map((e) => r.recommendations[e]);
                            return { ...e, [n]: { ...e[n], fetchStatus: b.ZP.LOADED, recommendations: s } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const M = [],
                Z = [],
                T = (e, { displayLocation: t, similarToUserId: n }) => {
                    const r = e[w][v({ displayLocation: t, similarToUserId: n })];
                    return r && r.recommendations ? r.recommendations : M;
                },
                F = (e, { displayLocation: t, similarToUserId: n }) => {
                    const r = e[w][v({ displayLocation: t, similarToUserId: n })];
                    return r ? r.fetchStatus : b.ZP.NONE;
                },
                L = (e) => (t, n, r) => {
                    const s = n(),
                        { displayLocation: a, similarToUserId: l } = e,
                        i = T(s, { displayLocation: a, similarToUserId: l }),
                        d = F(s, { displayLocation: a, similarToUserId: l }) === b.ZP.LOADED;
                    return i && d
                        ? Promise.resolve(o())
                        : t(
                              (
                                  (e) =>
                                  (t, n, { api: r, featureSwitches: o }) => {
                                      const { displayLocation: s, itsInterests: a, limit: l = k, similarToUserId: i } = e,
                                          d = "profile_accounts_sidebar" === s && o.isTrue("rweb_recommendations_sidebar_graphql_enabled");
                                      return (0, y._O)(t, { request: d ? r.withEndpoint(_).fetchSidebarUserRecommendations : r.withEndpoint(_).fetch, params: { display_location: s, itsInterests: a, limit: l, user_id: i } })({ actionTypes: { REQUEST: I, SUCCESS: E, FAILURE: P }, context: "FETCH_RECOMMENDATIONS", meta: { displayLocation: s, similarToUserId: i } }, (e) => {
                                          if (e && e.entities) return [(0, D.dP)(e.entities)];
                                      });
                                  }
                              )(e),
                          );
                };
        },
        629196: (e, t, n) => {
            "use strict";
            n.d(t, { r: () => d });
            n(136728);
            var r = n(161821),
                o = n(390387),
                s = n(836255),
                a = n(255117),
                l = n(166506),
                i = n(919022);
            const d =
                (e, t) =>
                (n, d, { api: c, featureSwitches: u }) =>
                    n(i.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            i = (0, r.Z)(s.Z.selectAll(t)).reduce((n, r) => {
                                if (null != r)
                                    if (r.user === e) n[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const o = s.Z.select(t, r.retweeted_status);
                                        o?.user === e && (n[r.id_str] = !0);
                                    }
                                return n;
                            }, {}),
                            c = (0, o._h)(d()),
                            u = c ? [(0, a.ZP)({ useLatest: !1, userId: c }).removeTweets(i), (0, a.ZP)({ useLatest: !0, userId: c }).removeTweets(i)] : [],
                            m = (0, l.k9)();
                        if (m.selectInitialFetchStatus(t) && !m.selectCanRefresh(t)) {
                            const n = (0, l.f8)(e, t, m);
                            n && u.push(n);
                        }
                        return n(u);
                    });
        },
        166506: (e, t, n) => {
            "use strict";
            n.d(t, { du: () => c, f8: () => u, k9: () => d });
            var r = n(503768),
                o = n(750085),
                s = n(962741),
                a = n(466015),
                l = n(919022),
                i = n(218951);
            const d = () => (0, i.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: o.Z }),
                c = (e) => (t, n) => {
                    const r = n();
                    t(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const t = e.type === s.ZP.User ? e.content.id : "",
                                    n = l.ZP.select(r, t);
                                return n && !n.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, n) => {
                    if (!n.selectEntries(t).find((t) => t.type === s.ZP.User && t.content.id === e)) {
                        const t = (0, a.OD)(e),
                            r = (0, a.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return n.injectEntry(r);
                    }
                };
        },
        30183: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var r = n(202784),
                o = n(731708),
                s = n(952428);
            const a = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                l = function ({ align: e, link: t, onPress: n, text: l, weight: i, withBottomRadius: d, withDarkerInteractiveBackground: c }) {
                    return r.createElement(s.Z, { link: t, onPress: n, style: [a.root, d && a.withBottomRadius], withDarkerInteractiveBackground: c }, r.createElement(o.ZP, { align: e, color: "primary", weight: i }, l));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.WideLayout.df49501a.js.map
