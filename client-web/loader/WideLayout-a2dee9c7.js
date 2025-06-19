(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.WideLayout-a2dee9c7"],
    {
        801301: (e) => {
            e.exports = { queryId: "IWdZXQ2Hdh_gprXkyn58ug", operationName: "SidebarUserRecommendations", operationType: "query", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        616753: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            const s = n(797553).default;
        },
        290402: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => h });
            var s = n(807896),
                r = n(202784),
                o = n(182056),
                a = n(879113),
                i = n(392237),
                l = n(111677),
                d = n.n(l),
                c = n(968478);
            const u = d().aa6e3300,
                m = ({ retryMessage: e, ...t }, n) => {
                    const i = o.Z.isOnline();
                    return r.createElement(a.Z, (0, s.Z)({}, t, { icon: i ? void 0 : r.createElement(c.default, { style: p.icon }), retryMessage: i ? e : u }));
                },
                p = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = r.forwardRef(m);
        },
        333241: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => v });
            n(136728);
            var s = n(202784),
                r = n(638236),
                o = n(811176),
                a = n(111677),
                i = n.n(a),
                l = n(415506),
                d = n(516951),
                c = n(376293),
                u = n(847607),
                m = n(417714),
                p = n(988823);
            const h = "block",
                f = "mute",
                g = "removeFollower",
                y = "report",
                _ = "share",
                b = i().j7bb1a43,
                k = i().hef5960c,
                v = (0, p.M)((e) => {
                    const { onBlock: t, onClose: n, onMute: a, onRemoveFollower: i, onReportUser: p, onShare: v, onUnblock: w, onUnmute: E, user: I } = e,
                        S = [],
                        D = (t, n) => {
                            const { confirm: s, onClose: r } = e;
                            if (t) {
                                const { label: e, ...o } = t;
                                s({ confirmButtonLabel: e, ...o })
                                    .then(n, d.Z)
                                    .finally(r);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !I.protected &&
                        !I.blocking &&
                        !I.blocked_by &&
                        S.push({
                            Icon: r.Z,
                            onClick: () => {
                                n(), v();
                            },
                            testID: _,
                            text: k,
                        });
                    !I.blocking &&
                        S.push({
                            ...(0, u.N1)(
                                I,
                                () => {
                                    n(), a();
                                },
                                () => {
                                    n(), E();
                                },
                            ),
                            testID: f,
                        });
                    I.followed_by &&
                        S.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    D(e, i);
                                },
                                user: I,
                            }),
                            testID: g,
                        }),
                        S.push((0, c.op)({ blockAction: (e) => D(e, t), source: c.SC.FOLLOWERS_LIST, testID: h, unblockAction: (e) => D(e, w), user: I })),
                        S.push({
                            Icon: l.default,
                            onClick: () => {
                                n(), p();
                            },
                            testID: y,
                            text: b({ screenName: I.screen_name }),
                        });
                    const P = S.map(({ Icon: e, onClick: t, testID: n, text: s }) => ({ text: s, onClick: t, Icon: e, testID: n }));
                    return s.createElement(o.Z, { items: P, onCloseRequested: n });
                });
        },
        864479: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => a });
            var s = n(807896),
                r = n(202784),
                o = n(771099);
            const a = (e) => (t) => r.createElement(o.$6, null, (n) => r.createElement(e, (0, s.Z)({}, t, { isInSidebar: n })));
        },
        893904: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { StickyView: () => m, default: () => y, roundToNearestDevicePixel: () => u, useStickyViewNotify: () => h });
            var s = n(202784),
                r = n(325686),
                o = n(67877),
                a = n(537392),
                i = n(392237),
                l = n(752624),
                d = n(323265),
                c = n(993547);
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
                        (this._scheduleUpdatePositioning = (0, o.Z)(this._updatePositioning.bind(this), this._singleRequestAnimationFrame));
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
                    const { contentOffset: e, position: t, stickyThreshold: n, stickyTop: o } = this.state,
                        a = g[t],
                        i = window.devicePixelRatio || 1,
                        l = u({ cssPixels: n, dpr: i }),
                        d = u({ cssPixels: e, dpr: i }),
                        c = { top: o ? `${l}px` : null, bottom: o ? null : `${l}px` };
                    return s.createElement(r.Z, { ref: this._setContainerRef, style: [g.container, { minHeight: this.state.contentHeight }] }, s.createElement(f, { onNotify: this._forceUpdatePositioning }), s.createElement(r.Z, { style: { marginTop: `${d}px` } }), s.createElement(r.Z, { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, c, a] }, this.props.children));
                }
                _updatePositioning(e = !1) {
                    if (!this._contentNode || !this._containerNode) return;
                    const t = this.props.viewport.scrollY(),
                        n = t - this._prevScrollY;
                    if (Math.abs(n) < 0.5 && !e) return;
                    const { distanceFromBottom: s } = this.props;
                    this._prevScrollY = t;
                    const r = !!this._contentNode && this._contentNode.getBoundingClientRect(),
                        o = !!this._containerNode && this._containerNode.getBoundingClientRect();
                    if (!r || !o) return;
                    const { height: i } = (0, a.iv)(),
                        l = d.ZP.isIOS() ? window.innerHeight : i,
                        c = t + o.top,
                        u = Math.max(r.top - o.top, 0);
                    if (l - r.height >= c) this._updateState({ stickyTop: !0, stickyThreshold: c, contentOffset: 0, stickyOffset: c, contentHeight: r.height, position: "fixed" });
                    else {
                        const e = n > 0,
                            t = e !== this.state.stickyTop,
                            o = window.devicePixelRatio || 1,
                            a = r.bottom - l + s <= 1 / o,
                            i = c - r.top <= 1 / o;
                        if (((e && a) || (!e && i)) && d.ZP.isFirefox()) {
                            const e = s,
                                t = c;
                            this._updateState({ position: "fixed", stickyOffset: c, stickyTop: i, stickyThreshold: i ? t : e, contentOffset: u, contentHeight: r.height });
                        } else {
                            const n = l - r.height - s,
                                o = l - r.height - c;
                            this._updateState({ position: "sticky", stickyTop: e, stickyOffset: c, stickyThreshold: e ? n : o, contentOffset: t ? u : this.state.contentOffset, contentHeight: r.height });
                        }
                    }
                }
                _updateState(e) {
                    const t = this.state.stickyTop !== e.stickyTop,
                        n = this.state.stickyThreshold !== e.stickyThreshold,
                        s = Math.abs(this.state.contentOffset - e.contentOffset) > 0.5,
                        r = Math.abs(this.state.stickyOffset - e.stickyOffset) > 0.5,
                        o = this.state.position !== e.position,
                        a = this.state.contentHeight !== e.contentHeight;
                    (t || n || s || r || o || a) && this.setState(e);
                }
            }
            m.defaultProps = { distanceFromBottom: 10 };
            const p = new l.Z();
            function h() {
                s.useLayoutEffect(() => {
                    p.notify();
                }, []);
            }
            function f({ onNotify: e }) {
                return (
                    s.useEffect(() => {
                        const { unsubscribe: t } = p.subscribe(e);
                        return () => {
                            t();
                        };
                    }, [e]),
                    null
                );
            }
            const g = i.default.create((e) => ({ container: { height: "100%" }, sticky: { position: "sticky" }, fixed: { position: "fixed" }, static: { position: "static" } })),
                y = (0, c.Z)(m);
        },
        293988: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => E });
            var s = n(202784),
                r = n(154003),
                o = n(111677),
                a = n.n(o),
                i = n(74514),
                l = n(405303),
                d = n(684511),
                c = n(860174),
                u = n(71620),
                m = n(668214),
                p = n(257166),
                h = n(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !p.selectShouldPromptBrowserPush(e)),
                g = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: h.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                y = a().bdba3e1a,
                _ = a().c4da7d28,
                b = a().j87c21f4,
                k = a().iebc30ca,
                v = a().dc740eb2;
            class w extends s.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? s.createElement(r.ZP, { "aria-label": _, hoverLabel: { label: k }, icon: s.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : s.createElement(r.ZP, { "aria-label": y, hoverLabel: { label: b }, icon: s.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return s.createElement("div", null, this.state.showingPushPrompt ? s.createElement(d.Z, { fullScreen: !0, message: v }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: n, userId: s } = this.props;
                    return n(s, { device: e }).catch(t(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const E = g(w);
        },
        130888: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { InThisConversationContainer: () => S, default: () => D });
            var s = n(202784),
                r = n(476984),
                o = n.n(r),
                a = n(111677),
                i = n.n(a),
                l = n(325686),
                d = n(844685),
                c = n(62857);
            const u = (e) => !e.protected || !!e.following,
                m = s.memo(function (e) {
                    const { headerText: t, participantIds: n } = e;
                    return s.createElement(l.Z, { "aria-label": t, role: "complementary" }, s.createElement(d.Z, { text: t }), s.createElement(c.Z, { filterPredicate: u, userIds: n.slice(0, 3) }));
                }),
                p = m;
            var h = n(668214),
                f = n(390387),
                g = n(836255),
                y = n(919022),
                _ = (n(136728), n(175848)),
                b = n(166852);
            const k = (e, t, n) => {
                    const s = n === t,
                        r = e.unmentioned_user_ids?.includes(t);
                    return s || !r;
                },
                v = (e, t) => (e.entities?.user_mentions || []).filter((n) => k(e, n.id_str, t)).map((e) => e.id_str) || [],
                w = (e, t) => t.focalTweetId,
                E = (0, h.Z)()
                    .propsFromState(() => ({ focalTweetId: w, viewerUserId: f._h, tweetMap: g.Z.selectAll, users: y.ZP.selectAll }))
                    .adjustStateProps(({ focalTweetId: e, tweetMap: t, users: n, viewerUserId: s }) => {
                        const r = e && t[e];
                        if (!r) return { participantIds: [] };
                        const o = [r.user, ...v(r, s), ...((a = r), _.ZP.mergeTaggedUsers((a.extended_entities && a.extended_entities.media) || []).map((e) => e.user_id))];
                        var a;
                        const i = r.quoted_status && t[r.quoted_status];
                        return i && (o.push(...((e, t) => (k(e, e.user, t) ? [e.user] : []))(i, s)), o.push(...v(i, s))), { participantIds: (0, b.Z)(o).filter((e) => "string" == typeof e && void 0 !== n[e]?.following) };
                    })
                    .withAnalytics({ component: "in_this_conversation" }),
                I = i().j88f27d8;
            function S({ participantIds: e }) {
                const t = (function (e) {
                    const t = s.useRef(e);
                    return o()(e, t.current) ? t.current : ((t.current = e), e);
                })(e);
                return t.length > 0 ? s.createElement(p, { headerText: I, participantIds: t }) : null;
            }
            const D = E(S);
        },
        527969: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => H });
            n(136728);
            var s,
                r,
                o,
                a,
                i,
                l,
                d,
                c = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobRecommendationsModuleQuery", selections: [{ kind: "RequiredField", field: { alias: null, args: (s = [{ kind: "Literal", name: "s", value: "f3d8" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(r = { alias: null, args: null, concreteType: "MatchingProfile", kind: "LinkedField", name: "matching_profile", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "consented_at", storageKey: null }], storageKey: null }), { alias: null, args: (o = [{ kind: "Literal", name: "count", value: 5 }]), concreteType: "ApiJobResults", kind: "LinkedField", name: "job_recommendations_results", plural: !0, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobSearchListItem_item" }], storageKey: null }], storageKey: "job_recommendations_results(count:5)" }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"f3d8")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "JobRecommendationsModuleQuery",
                        selections: [
                            {
                                alias: null,
                                args: s,
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
                                                    (i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            r,
                                                            {
                                                                alias: null,
                                                                args: o,
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
                                                                            i,
                                                                            { kind: "TypeDiscriminator", abstractKey: "__isJobResult" },
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
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
                                                                                    { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [l, a, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [l, a, { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null }, { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null },
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
                                                                                                    i,
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        selections: [
                                                                                                            a,
                                                                                                            { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, d], storageKey: null },
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "UserVerification",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "verification",
                                                                                                                plural: !1,
                                                                                                                selections: [
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                            { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                                                                            l,
                                                                                                        ],
                                                                                                        type: "User",
                                                                                                        abstractKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                            l,
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                ],
                                                                                type: "ApiJob",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    l,
                                                                ],
                                                                storageKey: "job_recommendations_results(count:5)",
                                                            },
                                                            l,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            l,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"f3d8")',
                            },
                        ],
                    },
                    params: { id: "0fTKmeS38bqgfttp4H1jSg", metadata: {}, name: "JobRecommendationsModuleQuery", operationKind: "query", text: null },
                };
            c.hash = "37b14a1d47b77462d15eba2689e65519";
            const u = c;
            var m = n(202784),
                p = n(325686),
                h = (n(585488), n(277660)),
                f = n.n(h),
                g = n(107267),
                y = n(844685),
                _ = n(731708),
                b = n(154003),
                k = n(708852),
                v = n(392237),
                w = n(111677),
                E = n.n(w),
                I = n(293723),
                S = n(399398),
                D = n(822502),
                P = n(910113),
                T = n(535338),
                Z = n(736063);
            const L = E().fb15ec28,
                C = E().ece910f0,
                F = E().jd08bc14,
                M = E().de0a4a72,
                A = E().fc5bfd96,
                U = u,
                R = () => m.createElement(p.Z, null, m.createElement(y.Z, { text: L }), m.createElement(p.Z, { style: x.content }, m.createElement(p.Z, { style: x.bulletRow }, m.createElement(_.ZP, null, m.createElement(I.default, null)), m.createElement(_.ZP, { size: "subtext1" }, C)), m.createElement(p.Z, { style: x.bulletRow }, m.createElement(_.ZP, null, m.createElement(I.default, null)), m.createElement(_.ZP, { size: "subtext1" }, F)), m.createElement(p.Z, { style: x.bulletRow }, m.createElement(_.ZP, null, m.createElement(I.default, null)), m.createElement(_.ZP, { size: "subtext1" }, M)), m.createElement(b.ZP, { link: "/jobs/get-recommendations", size: "small", type: "brandFilled" }, A))),
                O = ({ recommendation: e, recommendationId: t, recommendationIndex: n }) => {
                    const s = (0, k.Ji)(),
                        r = (0, g.useHistory)(),
                        o = f()(P.KM, e),
                        a = o?.core,
                        i = o?.user_results?.result,
                        l = o?.company_profile_results?.result,
                        d = o?.id || "",
                        c = o?.user_sentiment,
                        u = m.useCallback(() => {
                            s ? r.push(`/jobs/recommended/${t}`) : r.push(`/m/jobs/recommended/${t}`);
                        }, [r, s, t]);
                    return o && a ? m.createElement(D.Z, { actions: [], companyProfile: l, job: a, jobId: t, jobIndex: n, onClick: u, relayId: d, user: i, userSentiment: c, withBottomBorder: !1 }) : null;
                },
                x = v.default.create((e) => ({ content: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16, gap: e.spaces.space16 }, bulletRow: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center" } })),
                N = ({ isSidebarModule: e }) => {
                    const t = (0, T.p)(U, {}),
                        n = t?.viewer_v2.user_results.result.matching_profile,
                        s = t?.viewer_v2.user_results.result.job_recommendations_results;
                    if (!t || (n?.consented_at && !s?.length)) return null;
                    const r = ({ children: t }) => (e ? m.createElement(S.g, null, t) : m.createElement(m.Fragment, null, t));
                    return m.createElement(
                        r,
                        null,
                        n?.consented_at ? null : m.createElement(R, null),
                        n?.consented_at && s?.length && s.length > 0
                            ? m.createElement(
                                  p.Z,
                                  null,
                                  m.createElement(y.Z, { text: "Recommended jobs" }),
                                  s.map((e, t) => (e.result ? m.createElement(O, { key: e.rest_id, recommendation: e.result, recommendationId: e.rest_id, recommendationIndex: t }) : null)),
                              )
                            : null,
                    );
                },
                K = { context: "JobRecommendationsModule" },
                H = (e) => m.createElement(Z.H, { errorConfig: K }, m.createElement(N, e));
        },
        62857: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => P });
            var s = n(807896),
                r = n(202784),
                o = n(476984),
                a = n.n(o),
                i = n(111677),
                l = n.n(i),
                d = n(615656),
                c = n(290402),
                u = n(325686),
                m = n(240089),
                p = n(663550),
                h = n(409438);
            const f = ({ displayMode: e = h.Z.UserDetailed, renderUserCell: t, userIds: n }) =>
                r.createElement(
                    u.Z,
                    { role: "list" },
                    n.map((n, s) => (t ? t(n) : r.createElement(m.ZP, { decoration: m.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: n, promotedItemType: p.bj.USER, userId: n, withFollowsYou: !0 }))),
                );
            var g = n(312771),
                y = n(71620),
                _ = n(973572),
                b = n(668214),
                k = n(919022);
            const v = (e, t) => t.userIds,
                w = (e, t) => {
                    const { filterPredicate: n = (e) => !!e, userIds: s } = t;
                    return s.filter((t) => {
                        const s = k.ZP.select(e, t);
                        return !!s && n(s);
                    });
                },
                E = (e, t) => {
                    const { userIds: n } = t;
                    return n.reduce((t, n) => {
                        const s = k.ZP.selectFetchStatus(e, n);
                        return s && (t[n] = s === g.ZP.NONE ? g.ZP.LOADING : s), t;
                    }, {});
                },
                I = (0, b.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, _.Z)(w, (e) => e),
                        fetchStatus: (0, _.Z)(w, E, v, (e, t, n) => {
                            let s = g.ZP.LOADED;
                            for (let r = 0; r < n.length; r++) {
                                const o = n[r];
                                if (-1 === e.indexOf(o)) {
                                    const e = t[o] || g.ZP.LOADING;
                                    s = s === g.ZP.LOADED ? e : s;
                                }
                                if (s === g.ZP.LOADED) break;
                            }
                            return s;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: k.ZP.fetchManyIfNeeded })),
                S = l().f5b426c2;
            class D extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: n, fetchUsersIfNeeded: o, filterPredicate: a, userIds: i, ...l } = this.props;
                            return r.createElement(f, (0, s.Z)({}, l, { userIds: e }));
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
                    return r.createElement(c.Z, { "aria-label": S, fetchStatus: this.state.allUsersUnavailable ? g.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: n, userIds: s } = this.props;
                    n(s).then(
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
            const P = I(D);
        },
        912937: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { WhoToFollowContainer: () => j, default: () => W });
            var s = n(202784),
                r = n(325686),
                o = n(392237),
                a = n(111677),
                i = n.n(a),
                l = n(290402),
                d = n(844685),
                c = n(30183),
                u = n(62857),
                m = n(952793),
                p = n(409438),
                h = n(864479),
                f = (n(136728), n(952428)),
                g = n(443781);
            const y = s.lazy(() => window.__SSP_PROMISE__.then(() => ({ default: v }))),
                _ = new Set(),
                b = {};
            let k = 0;
            function v({ fallbackSlotId: e, primarySlotId: t }) {
                const n = s.useRef("ad-" + k++).current,
                    [o, a] = s.useState(""),
                    i = s.useRef(!1),
                    l = s.useRef(!1),
                    { userClaims: d } = s.useContext(g.rC),
                    c = d.isAnyPremiumSubscriber(),
                    u = "rtl" === document?.documentElement?.getAttribute("dir"),
                    m = s.useCallback(() => {
                        window.googletag &&
                            i.current &&
                            !l.current &&
                            window.googletag.cmd.push(() => {
                                if (!i.current) return;
                                u && window.googletag.pubads().setTargeting("rtl", "true");
                                const s = `adEventHandler_${n}`;
                                b[s] && (window.googletag.pubads().removeEventListener("slotRenderEnded", b[s]), delete b[s]),
                                    (b[s] = (n) => {
                                        i.current && (n.isEmpty || (n.slot.getSlotElementId() === e ? a("fallback") : n.slot.getSlotElementId() === t && "" === o && a("primary")));
                                    }),
                                    window.googletag.pubads().addEventListener("slotRenderEnded", b[s]);
                                if (!_.has(t) || !_.has(e)) _.has(e) || (window.googletag.display(e), _.add(e)), _.has(t) || (window.googletag.display(t), _.add(t));
                                else {
                                    const n = window.googletag
                                        .pubads()
                                        .getSlots()
                                        .filter((n) => {
                                            const s = n.getSlotElementId();
                                            return s === t || s === e;
                                        });
                                    n.length > 0 && window.googletag.pubads().refresh(n);
                                }
                                l.current = !0;
                            });
                    }, [e, t, u, o, n]);
                if (
                    (s.useEffect(() => {
                        if (c) return;
                        i.current = !0;
                        const s = () => {
                            const n = document.getElementById(t),
                                s = document.getElementById(e);
                            return (
                                !(!n || !s) &&
                                (setTimeout(() => {
                                    i.current && m();
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
                            i.current = !1;
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
                const p = [w.adContainer, !o && w.emptyContainer];
                return s.createElement(r.Z, { style: p }, s.createElement(r.Z, { id: t, style: [w.adSlot, "primary" !== o && w.hiddenSlot] }), s.createElement(r.Z, { id: e, style: [w.adSlot, "fallback" !== o && w.hiddenSlot] }));
            }
            const w = o.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space12, borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, adContainer: { minHeight: 250, minWidth: 300, width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", position: "relative" }, emptyContainer: { minHeight: 0, height: 0, overflow: "hidden" }, adSlot: { width: "100%", height: "100%", position: "absolute", top: 0, start: 0, end: 0, minWidth: 300, minHeight: 250 }, hiddenSlot: { display: "none" } })),
                E = function (e) {
                    return s.createElement(f.Z, { style: w.root }, s.createElement(s.Suspense, { fallback: s.createElement(r.Z, { style: w.emptyContainer }) }, s.createElement(y, e)));
                },
                I = i().a526aa66,
                S = i().ef625010,
                D = i().d228a9a0,
                P = (0, h.Z)(({ isInSidebar: e, userId: t, userIds: n, withProfileHeaderText: o }) => {
                    const a = (0, m.hC)("rweb_ssp_ads_enabled"),
                        i = `/i/connect_people?user_id=${t}`,
                        l = n.length > 0;
                    return s.createElement(r.Z, { "aria-label": I, role: "complementary" }, s.createElement(d.Z, { text: o ? S : I }), s.createElement(u.Z, { displayMode: p.Z.UserCompact, userIds: n }), a && l && s.createElement(E, { fallbackSlotId: "div-gpt-ad-1740520505566-0", primarySlotId: "div-gpt-ad-1738265577622-0" }), l && s.createElement(c.Z, { link: i, text: D, withBottomRadius: !0, withDarkerInteractiveBackground: e }));
                });
            var T = n(967977),
                Z = n(942893),
                L = n(312771),
                C = n(71620),
                F = n(973572),
                M = n(668214),
                A = n(994305),
                U = n(919022);
            const R = "profile_accounts_sidebar",
                O = (e, t) => A.Ic(e, { displayLocation: R, similarToUserId: t.userId }),
                x = (e, t) => A.UD(e, { displayLocation: R, similarToUserId: t.userId }),
                N = (e, t) => {
                    const n = O(e, t),
                        s = [];
                    return (
                        n.forEach(({ user_id: t }) => {
                            const n = U.ZP.select(e, t);
                            n && s.push(n);
                        }),
                        s
                    );
                },
                K = (0, M.Z)()
                    .propsFromState(() => ({ fetchStatus: x, recommendations: O, users: (0, F.Z)(N, (e) => e) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, C.zr)("WHO_TO_FOLLOW_CONTAINER"), fetchRecommendationsIfNeeded: A.yY }))
                    .withAnalytics({ component: "suggest_who_to_follow" }),
                H = i().fd6473fa,
                B = { element: "user", action: "results" };
            class j extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = () => {
                            const { recommendations: e, userId: t, withProfileHeaderText: n } = this.props,
                                r = e && e.map((e) => e.user_id);
                            return s.createElement(P, { userId: t, userIds: r, withProfileHeaderText: n });
                        }),
                        (this._handleImpression = (e) => {
                            const { analytics: t, users: n } = this.props,
                                s = e && e.map((e) => ({ ...Z.Z.forUser(e.user_id), suggestion_details: { source_data: e.token } }));
                            t.scribe({ ...B, data: { items: s } }),
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
                    return e === L.ZP.FAILED || this._hasEmptySuggestionList() ? null : s.createElement(r.Z, { style: [q.root, t] }, s.createElement(l.Z, { "aria-label": H, fetchStatus: e, render: this._renderContent }));
                }
                _fetchRecommendations(e) {
                    const { createLocalApiErrorHandler: t, fetchRecommendationsIfNeeded: n, userId: s } = e;
                    n({ limit: 3, displayLocation: R, similarToUserId: s }).catch(t(T.C));
                }
                _hasEmptySuggestionList() {
                    const { fetchStatus: e, recommendations: t } = this.props;
                    return e === L.ZP.LOADED && 0 === t.length;
                }
            }
            const q = o.default.create((e) => ({ root: { minHeight: "15rem" } })),
                W = K(j);
        },
        684511: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            n(202784);
            const s = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("loader.PushNotificationsPrompt"),
                    ]).then(n.bind(n, 529629)),
            });
        },
        376293: (e, t, n) => {
            "use strict";
            n.d(t, { $f: () => w, KV: () => g, LI: () => P, SC: () => v, Vt: () => b, ed: () => T, op: () => E });
            var s = n(202784),
                r = n(190286),
                o = n(111677),
                a = n.n(o),
                i = n(616894),
                l = n(314948),
                d = n(516951),
                c = n(163390);
            const u = a().cfd2f35e,
                m = a().f9e45cfb,
                p = a().fcd4d489,
                h = a().a6450e84,
                f = a().ad00a739,
                g = a().a9fd20be,
                y = a().j546fb79,
                _ = a().c9623eeb,
                b = a().e133be4e,
                k = a().f5f01af6,
                v = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                w = (e) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: h, text: f({ screenName: e }) }),
                E = ({ blockAction: e, blockSubtext: t, source: n, testID: s, unblockAction: r, unblockSubtext: o, user: a }) => {
                    let i,
                        l = d.Z;
                    const u = P(a);
                    switch (n) {
                        case v.PROFILE:
                        case v.LIST_DETAIL:
                        case v.FOLLOWERS_LIST:
                            l = () => {
                                a.blocking ? r(u) : e(u);
                            };
                            break;
                        case v.TWEET:
                        case v.TWEET_CARET:
                        case v.RICH_FEEDBACK:
                            (i = c.uq.block),
                                (l = () => {
                                    a.blocking ? r(u) : e(u);
                                });
                    }
                    return { confirmation: u, onClick: l, testID: s, shortcutKey: i, Icon: I(a.blocking), text: D(a), subText: S({ user: a, blockSubtext: t, unblockSubtext: o }) };
                },
                I = (e) => (e ? l.default : i.default),
                S = ({ blockSubtext: e, unblockSubtext: t, user: n }) => (!n.blocking && e ? e(n.screen_name) : n.blocking ? t : void 0),
                D = (e) => (e.blocking ? _({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                P = (e) => {
                    return e.blocking ? ((t = e.screen_name), { confirmButtonType: "primary", headline: y({ screenName: t }), label: b, text: k }) : w(e.screen_name);
                    var t;
                },
                T = ({ confirmation: e, handleConfirm: t, onClose: n }) => {
                    const { confirmButtonType: o, headline: a, label: i, text: l } = e;
                    return s.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: i, confirmButtonType: o, headline: a, onCancel: n, onConfirm: t, text: l });
                };
        },
        545334: (e, t, n) => {
            "use strict";
            n.d(t, { d: () => r });
            var s = n(111677);
            const r = n.n(s)().gf5e9ea6;
        },
        916585: (e, t, n) => {
            "use strict";
            n.d(t, { k: () => a });
            var s = n(111677),
                r = n.n(s),
                o = n(437358);
            const a = (e, t) => {
                const { id_str: n, screen_name: s } = e,
                    a = (0, r().d78131b9)({ screenName: s });
                return { Icon: o.default, text: a, link: { pathname: "/i/lists/add_member", state: { userId: n } }, onClick: t };
            };
        },
        847607: (e, t, n) => {
            "use strict";
            n.d(t, { Aq: () => u, FK: () => _, GS: () => i, N1: () => p, PY: () => m, X6: () => b, cm: () => l });
            n(202784);
            var s = n(111677),
                r = n.n(s),
                o = n(391366),
                a = n(40904);
            const i = r().hb568af4,
                l = r().bb1cbeb6,
                d = (r().h2f62206, r().e67b2d65),
                c = r().f05597b3,
                u = (e) => d({ screenName: e }),
                m = (e) => c({ screenName: e }),
                p = (e, t, n) => {
                    const { muting: s, screen_name: r } = e;
                    return { text: s ? m(r) : u(r), onClick: s ? n : t, Icon: s ? o.default : a.default };
                },
                h = r().h59f52ee,
                f = r().eea0cbee,
                g = r().i29533b3,
                y = r().h129c3c3,
                _ = (e) => (e ? ((e) => g({ screenName: e }))(e) : h),
                b = (e) => (e ? ((e) => y({ screenName: e }))(e) : f);
        },
        417714: (e, t, n) => {
            "use strict";
            n.d(t, { l: () => c });
            n(202784);
            var s = n(111677),
                r = n.n(s),
                o = n(224823);
            const a = r().b3036480,
                i = r().b3036480,
                l = r().e68b09b4,
                d = r().h27b7407,
                c = ({ removeFollowerAction: e, user: t }) => {
                    const n = u(t);
                    return { Icon: o.default, text: a, onClick: () => e(n) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: l, text: d({ screenName: e.screen_name }) });
        },
        712816: (e, t, n) => {
            "use strict";
            n.d(t, { d: () => r });
            var s = n(111677);
            const r = { defaultToast: { text: n.n(s)().b6878b0a }, showToast: !0 };
        },
        967977: (e, t, n) => {
            "use strict";
            n.d(t, { C: () => o });
            var s = n(516951),
                r = n(615656);
            const o = { [r.ZP.ResourceNotFound]: { customAction: s.Z } };
        },
        48886: (e, t, n) => {
            "use strict";
            n.d(t, { q: () => r });
            var s = n(111677);
            const r = { defaultToast: { text: n.n(s)().a30b63da }, showToast: !0 };
        },
        879596: (e, t, n) => {
            "use strict";
            n.d(t, { D: () => r });
            var s = n(111677);
            const r = { defaultToast: { text: n.n(s)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var s = n(615656),
                r = n(51525);
            const o = { [s.ZP.FollowError]: { customAction: r.w1 } };
        },
        973572: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => a });
            var s = n(476984),
                r = n.n(s),
                o = n(24949);
            const a = (0, o.wN)(o.PW, r());
        },
        163390: (e, t, n) => {
            "use strict";
            n.d(t, { OX: () => m, Od: () => c, PN: () => p, uq: () => d, wR: () => f });
            var s = n(251067),
                r = n(522171),
                o = n(111677),
                a = n.n(o),
                i = n(912021),
                l = n(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, i.Z)((e) => {
                    const t = e ? [{ description: a().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, s.fH)(s.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: a().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: a().a83d4280, keys: d.nextItem, universal: !0 }, { description: a().g0048656, keys: d.previousItem, universal: !0 }, { description: a().a690c4d0, keys: "Space", universal: !0 }, { description: a().e893811a, keys: d.refresh, universal: !1 }, { description: a().ha8209bc, keys: d.goHome, universal: !1 }, { description: a().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: a().eb75875e, keys: d.goNotifications, universal: !1 }, { description: a().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: a().fa98627a, keys: d.goProfile, universal: !1 }, { description: a().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: a().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: a().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: a().b0041756, keys: d.goLists, universal: !1 }, { description: a().d4986f86, keys: d.goMessages, universal: !1 }, { description: a().h5860a68, keys: d.goGrok, universal: !1 }, { description: a().bb081ea2, keys: d.goSettings, universal: !1 }, { description: a().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...t, { description: a().eee2ed92, keys: d.goToUser, universal: !1 }, { description: a().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: a().ab3d53f8, keys: d.newTweet, universal: !1 },
                    { description: a().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: a().e736990a, keys: d.newMessage, universal: !1 },
                    { description: a().a9ae1e78, keys: d.search, universal: !1 },
                    { description: a().fe731016, keys: r.Z.shortcuts.like, universal: !1 },
                    { description: a().d17df548, keys: r.Z.shortcuts.reply, universal: !1 },
                    { description: a().g062295e, keys: r.Z.shortcuts.retweet, universal: !1 },
                    { description: a().h01621a4, keys: r.Z.shortcuts.share, universal: !0 },
                    { description: a().gb303814, keys: d.bookmark, universal: !1 },
                    { description: a().c03b1126, keys: d.mute, universal: !1 },
                    { description: a().ebd2abb2, keys: d.block, universal: !1 },
                    { description: a().hc6c5510, keys: "Enter", universal: !0 },
                    { description: a().eebdef38, keys: r.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: a().b488758c, keys: d.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: a().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: a().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: a().b881560e, keys: d.video.mute, universal: !0 },
                    { description: a().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: a().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: a().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                h = (0, i.Z)((e) => {
                    const t = c(e),
                        n = m(),
                        s = p(),
                        r = {};
                    return (
                        [...n, ...s, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      r[t] = e;
                                  })
                                : (r[t] = e);
                        }),
                        JSON.stringify(r)
                    );
                }),
                f = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": h(e) } };
                };
        },
        409438: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            const s = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, t, n) => {
            "use strict";
            n.d(t, { M: () => a });
            var s = n(807896),
                r = n(202784),
                o = n(190286);
            const a = (e) => (t) => {
                const [n, a] = r.useState(null),
                    i = (e) =>
                        new Promise((t, n) => {
                            a({ resolve: t, reject: n, confirmationSheetProps: e });
                        });
                if (n) {
                    const { confirmationSheetProps: e, reject: t, resolve: i } = n;
                    return r.createElement(
                        o.Z,
                        (0, s.Z)({}, e, {
                            onCancel: () => {
                                t(), a(null);
                            },
                            onConfirm: () => {
                                i(), a(null);
                            },
                        }),
                    );
                }
                return r.createElement(e, (0, s.Z)({}, t, { confirm: i }));
            };
        },
        694180: (e, t, n) => {
            "use strict";
            n.d(t, { cM: () => g, dS: () => f, iY: () => y });
            var s = n(370751),
                r = n(399896),
                o = n(663550),
                a = n(499627),
                i = n(917799);
            const l = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, s.Z)([o.dx.IMPRESSION, o.dx.DWELL]),
                m = (0, s.Z)([o.AJ.TREND_VIEW, o.AJ.SPOTLIGHT_IMPRESSION]),
                p = (e) => ({ payload: { eventKey: e }, type: c });
            const h = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, n, { api: s }) => {
                        const { event: o, impression_id: a, promoted_trend_id: l } = e,
                            c = `trend-${l}-${o}`;
                        if (m.has(o) && h(n(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: o, impression_id: a };
                        return (0, i._O)(t, { params: u, request: s.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(o)) return [p(c)];
                        });
                    },
                g =
                    ({ disclosureType: e, itemId: t, itemType: n, params: s }) =>
                    (o, a, { api: l }) => {
                        const { event: c, impression_id: m } = s,
                            f = `${n}-${t ?? "undefined"}-${m ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && h(a(), f)) return Promise.resolve();
                        const g = e && "earned" === e.toLowerCase() ? "1" : null,
                            y = { ...s, earned: g, epoch_ms: Date.now() };
                        return (0, i._O)(o, { params: y, request: l.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: y }, (e, t) => {
                            if (!t && u.has(c)) return [p(f)];
                        });
                    },
                y =
                    (e) =>
                    (t, n, { api: s }) =>
                        (0, i._O)(t, { params: e, request: s.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            a.Z.register({
                promotedContent: function (e = l, t) {
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
            n.d(t, { yY: () => F, UD: () => C, Ic: () => L });
            var s = n(360917),
                r = n.n(s),
                o = n(506899),
                a = n(414742),
                i = n(125199);
            const l = new o.fK.Entity("recommendations", { user: i.Z }, { idAttribute: (e) => e.user?.rest_id });
            var d = n(801301),
                c = n.n(d),
                u = n(304819);
            const m = new o.fK.Entity("recommendations", { user: u.Z }, { idAttribute: (e) => e.user?.id_str });
            var p = n(387466),
                h = n(120071);
            const f = (e) => ({ ...h.k(e), excluded: [], pc: !0 }),
                g = ({ apiClient: e, featureSwitches: t }) => ({
                    fetch(n, s = {}) {
                        const r = { ...f(t), ...n, ...(0, p.Y)(t) };
                        return e.get("users/recommendations", r, s).then((e) => (0, o.Fv)(e, [m]));
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
                                return (0, o.Fv)(
                                    t.map(({ token: e, user_results: { result: t } }) => ({ token: e, user: t, user_id: t?.rest_id })).filter(({ user: e }) => e),
                                    [l],
                                );
                            }),
                });
            var y = n(499627),
                _ = n(917799),
                b = n(312771),
                k = n(56519);
            const v = "recommendations",
                w = 30,
                E = "rweb/recommendations/FETCH_REQUEST",
                I = "rweb/recommendations/FETCH_SUCCESS",
                S = "rweb/recommendations/FETCH_FAILURE",
                D = {},
                P = ({ displayLocation: e, similarToUserId: t }) => e + (t ? `_${t}` : "");
            y.Z.register({
                [v]: function (e = D, t) {
                    if (!t?.meta) return e;
                    switch (t.type) {
                        case E: {
                            const n = P(t.meta);
                            return { ...e, [n]: { ...e[n], fetchStatus: b.ZP.LOADING } };
                        }
                        case S: {
                            const n = P(t.meta);
                            return { ...e, [n]: { ...e[n], fetchStatus: b.ZP.FAILED } };
                        }
                        case I: {
                            const n = P(t.meta),
                                s = t.payload && t.payload.entities ? t.payload.entities : { recommendations: r() },
                                o = (t.payload && t.payload.result ? t.payload.result : Z).map((e) => s.recommendations[e]);
                            return { ...e, [n]: { ...e[n], fetchStatus: b.ZP.LOADED, recommendations: o } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const T = [],
                Z = [],
                L = (e, { displayLocation: t, similarToUserId: n }) => {
                    const s = e[v][P({ displayLocation: t, similarToUserId: n })];
                    return s && s.recommendations ? s.recommendations : T;
                },
                C = (e, { displayLocation: t, similarToUserId: n }) => {
                    const s = e[v][P({ displayLocation: t, similarToUserId: n })];
                    return s ? s.fetchStatus : b.ZP.NONE;
                },
                F = (e) => (t, n, s) => {
                    const o = n(),
                        { displayLocation: a, similarToUserId: i } = e,
                        l = L(o, { displayLocation: a, similarToUserId: i }),
                        d = C(o, { displayLocation: a, similarToUserId: i }) === b.ZP.LOADED;
                    return l && d
                        ? Promise.resolve(r())
                        : t(
                              (
                                  (e) =>
                                  (t, n, { api: s, featureSwitches: r }) => {
                                      const { displayLocation: o, itsInterests: a, limit: i = w, similarToUserId: l } = e,
                                          d = "profile_accounts_sidebar" === o && r.isTrue("rweb_recommendations_sidebar_graphql_enabled");
                                      return (0, _._O)(t, { request: d ? s.withEndpoint(g).fetchSidebarUserRecommendations : s.withEndpoint(g).fetch, params: { display_location: o, itsInterests: a, limit: i, user_id: l } })({ actionTypes: { REQUEST: E, SUCCESS: I, FAILURE: S }, context: "FETCH_RECOMMENDATIONS", meta: { displayLocation: o, similarToUserId: l } }, (e) => {
                                          if (e && e.entities) return [(0, k.dP)(e.entities)];
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
            var s = n(161821),
                r = n(390387),
                o = n(836255),
                a = n(255117),
                i = n(166506),
                l = n(919022);
            const d =
                (e, t) =>
                (n, d, { api: c, featureSwitches: u }) =>
                    n(l.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            l = (0, s.Z)(o.Z.selectAll(t)).reduce((n, s) => {
                                if (null != s)
                                    if (s.user === e) n[s.id_str] = !0;
                                    else if (s.retweeted_status) {
                                        const r = o.Z.select(t, s.retweeted_status);
                                        r?.user === e && (n[s.id_str] = !0);
                                    }
                                return n;
                            }, {}),
                            c = (0, r._h)(d()),
                            u = c ? [(0, a.ZP)({ useLatest: !1, userId: c }).removeTweets(l), (0, a.ZP)({ useLatest: !0, userId: c }).removeTweets(l)] : [],
                            m = (0, i.k9)();
                        if (m.selectInitialFetchStatus(t) && !m.selectCanRefresh(t)) {
                            const n = (0, i.f8)(e, t, m);
                            n && u.push(n);
                        }
                        return n(u);
                    });
        },
        166506: (e, t, n) => {
            "use strict";
            n.d(t, { du: () => c, f8: () => u, k9: () => d });
            var s = n(503768),
                r = n(750085),
                o = n(962741),
                a = n(466015),
                i = n(919022),
                l = n(218951);
            const d = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                c = (e) => (t, n) => {
                    const s = n();
                    t(
                        e
                            .selectEntries(s)
                            .filter((e) => {
                                const t = e.type === o.ZP.User ? e.content.id : "",
                                    n = i.ZP.select(s, t);
                                return n && !n.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, n) => {
                    if (!n.selectEntries(t).find((t) => t.type === o.ZP.User && t.content.id === e)) {
                        const t = (0, a.OD)(e),
                            s = (0, a.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return n.injectEntry(s);
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.WideLayout-a2dee9c7.9a72042a.js.map
