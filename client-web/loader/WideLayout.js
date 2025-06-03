(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.WideLayout"],
    {
        801301: (e) => {
            e.exports = { queryId: "apoLb8lvGh-n59pXrJY9aQ", operationName: "SidebarUserRecommendations", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        616753: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            const s = n(797553).default;
        },
        290402: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => g });
            var s = n(807896),
                r = n(202784),
                i = n(182056),
                a = n(879113),
                o = n(392237),
                l = n(111677),
                c = n.n(l),
                d = n(968478);
            const u = c().aa6e3300,
                m = ({ retryMessage: e, ...t }, n) => {
                    const o = i.Z.isOnline();
                    return r.createElement(a.Z, (0, s.Z)({}, t, { icon: o ? void 0 : r.createElement(d.default, { style: p.icon }), retryMessage: o ? e : u }));
                },
                p = o.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                g = r.forwardRef(m);
        },
        893904: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { StickyView: () => m, default: () => y, roundToNearestDevicePixel: () => u, useStickyViewNotify: () => g });
            var s = n(202784),
                r = n(325686),
                i = n(67877),
                a = n(537392),
                o = n(392237),
                l = n(752624),
                c = n(323265),
                d = n(993547);
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
                        (this._scheduleUpdatePositioning = (0, i.Z)(this._updatePositioning.bind(this), this._singleRequestAnimationFrame));
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
                    const { contentOffset: e, position: t, stickyThreshold: n, stickyTop: i } = this.state,
                        a = f[t],
                        o = window.devicePixelRatio || 1,
                        l = u({ cssPixels: n, dpr: o }),
                        c = u({ cssPixels: e, dpr: o }),
                        d = { top: i ? `${l}px` : null, bottom: i ? null : `${l}px` };
                    return s.createElement(r.Z, { ref: this._setContainerRef, style: [f.container, { minHeight: this.state.contentHeight }] }, s.createElement(h, { onNotify: this._forceUpdatePositioning }), s.createElement(r.Z, { style: { marginTop: `${c}px` } }), s.createElement(r.Z, { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, d, a] }, this.props.children));
                }
                _updatePositioning(e = !1) {
                    if (!this._contentNode || !this._containerNode) return;
                    const t = this.props.viewport.scrollY(),
                        n = t - this._prevScrollY;
                    if (Math.abs(n) < 0.5 && !e) return;
                    const { distanceFromBottom: s } = this.props;
                    this._prevScrollY = t;
                    const r = !!this._contentNode && this._contentNode.getBoundingClientRect(),
                        i = !!this._containerNode && this._containerNode.getBoundingClientRect();
                    if (!r || !i) return;
                    const { height: o } = (0, a.iv)(),
                        l = c.ZP.isIOS() ? window.innerHeight : o,
                        d = t + i.top,
                        u = Math.max(r.top - i.top, 0);
                    if (l - r.height >= d) this._updateState({ stickyTop: !0, stickyThreshold: d, contentOffset: 0, stickyOffset: d, contentHeight: r.height, position: "fixed" });
                    else {
                        const e = n > 0,
                            t = e !== this.state.stickyTop,
                            i = window.devicePixelRatio || 1,
                            a = r.bottom - l + s <= 1 / i,
                            o = d - r.top <= 1 / i;
                        if (((e && a) || (!e && o)) && c.ZP.isFirefox()) {
                            const e = s,
                                t = d;
                            this._updateState({ position: "fixed", stickyOffset: d, stickyTop: o, stickyThreshold: o ? t : e, contentOffset: u, contentHeight: r.height });
                        } else {
                            const n = l - r.height - s,
                                i = l - r.height - d;
                            this._updateState({ position: "sticky", stickyTop: e, stickyOffset: d, stickyThreshold: e ? n : i, contentOffset: t ? u : this.state.contentOffset, contentHeight: r.height });
                        }
                    }
                }
                _updateState(e) {
                    const t = this.state.stickyTop !== e.stickyTop,
                        n = this.state.stickyThreshold !== e.stickyThreshold,
                        s = Math.abs(this.state.contentOffset - e.contentOffset) > 0.5,
                        r = Math.abs(this.state.stickyOffset - e.stickyOffset) > 0.5,
                        i = this.state.position !== e.position,
                        a = this.state.contentHeight !== e.contentHeight;
                    (t || n || s || r || i || a) && this.setState(e);
                }
            }
            m.defaultProps = { distanceFromBottom: 10 };
            const p = new l.Z();
            function g() {
                s.useLayoutEffect(() => {
                    p.notify();
                }, []);
            }
            function h({ onNotify: e }) {
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
            const f = o.default.create((e) => ({ container: { height: "100%" }, sticky: { position: "sticky" }, fixed: { position: "fixed" }, static: { position: "static" } })),
                y = (0, d.Z)(m);
        },
        130888: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { InThisConversationContainer: () => I, default: () => T });
            var s = n(202784),
                r = n(476984),
                i = n.n(r),
                a = n(111677),
                o = n.n(a),
                l = n(325686),
                c = n(844685),
                d = n(62857);
            const u = (e) => !e.protected || !!e.following,
                m = s.memo(function (e) {
                    const { headerText: t, participantIds: n } = e;
                    return s.createElement(l.Z, { "aria-label": t, role: "complementary" }, s.createElement(c.Z, { text: t }), s.createElement(d.Z, { filterPredicate: u, userIds: n.slice(0, 3) }));
                }),
                p = m;
            var g = n(668214),
                h = n(390387),
                f = n(836255),
                y = n(919022),
                _ = (n(136728), n(175848)),
                k = n(166852);
            const b = (e, t, n) => {
                    const s = n === t,
                        r = e.unmentioned_user_ids?.includes(t);
                    return s || !r;
                },
                v = (e, t) => (e.entities?.user_mentions || []).filter((n) => b(e, n.id_str, t)).map((e) => e.id_str) || [],
                E = (e, t) => t.focalTweetId,
                S = (0, g.Z)()
                    .propsFromState(() => ({ focalTweetId: E, viewerUserId: h._h, tweetMap: f.Z.selectAll, users: y.ZP.selectAll }))
                    .adjustStateProps(({ focalTweetId: e, tweetMap: t, users: n, viewerUserId: s }) => {
                        const r = e && t[e];
                        if (!r) return { participantIds: [] };
                        const i = [r.user, ...v(r, s), ...((a = r), _.ZP.mergeTaggedUsers((a.extended_entities && a.extended_entities.media) || []).map((e) => e.user_id))];
                        var a;
                        const o = r.quoted_status && t[r.quoted_status];
                        return o && (i.push(...((e, t) => (b(e, e.user, t) ? [e.user] : []))(o, s)), i.push(...v(o, s))), { participantIds: (0, k.Z)(i).filter((e) => "string" == typeof e && void 0 !== n[e]?.following) };
                    })
                    .withAnalytics({ component: "in_this_conversation" }),
                w = o().j88f27d8;
            function I({ participantIds: e }) {
                const t = (function (e) {
                    const t = s.useRef(e);
                    return i()(e, t.current) ? t.current : ((t.current = e), e);
                })(e);
                return t.length > 0 ? s.createElement(p, { headerText: w, participantIds: t }) : null;
            }
            const T = S(I);
        },
        527969: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => H });
            n(136728);
            var s,
                r,
                i,
                a,
                o,
                l,
                c,
                d = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobRecommendationsModuleQuery", selections: [{ kind: "RequiredField", field: { alias: null, args: (s = [{ kind: "Literal", name: "s", value: "f3d8" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(r = { alias: null, args: null, concreteType: "MatchingProfile", kind: "LinkedField", name: "matching_profile", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "consented_at", storageKey: null }], storageKey: null }), { alias: null, args: (i = [{ kind: "Literal", name: "count", value: 5 }]), concreteType: "ApiJobResults", kind: "LinkedField", name: "job_recommendations_results", plural: !0, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobSearchListItem_item" }], storageKey: null }], storageKey: "job_recommendations_results(count:5)" }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"f3d8")' }, action: "THROW" }], type: "Query", abstractKey: null },
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
                                                    (o = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            r,
                                                            {
                                                                alias: null,
                                                                args: i,
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
                                                                            o,
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
                                                                                    { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [l, a, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [o, { kind: "InlineFragment", selections: [l, a, { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null }, { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
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
                                                                                                    o,
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        selections: [
                                                                                                            a,
                                                                                                            { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, c], storageKey: null },
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
            d.hash = "37b14a1d47b77462d15eba2689e65519";
            const u = d;
            var m = n(202784),
                p = n(325686),
                g = (n(585488), n(277660)),
                h = n.n(g),
                f = n(107267),
                y = n(844685),
                _ = n(731708),
                k = n(154003),
                b = n(708852),
                v = n(392237),
                E = n(111677),
                S = n.n(E),
                w = n(293723),
                I = n(399398),
                T = n(822502),
                Z = n(910113),
                L = n(535338),
                C = n(736063);
            const F = S().fb15ec28,
                P = S().ece910f0,
                R = S().jd08bc14,
                U = S().de0a4a72,
                x = S().fc5bfd96,
                A = u,
                D = () => m.createElement(p.Z, null, m.createElement(y.Z, { text: F }), m.createElement(p.Z, { style: K.content }, m.createElement(p.Z, { style: K.bulletRow }, m.createElement(_.ZP, null, m.createElement(w.default, null)), m.createElement(_.ZP, { size: "subtext1" }, P)), m.createElement(p.Z, { style: K.bulletRow }, m.createElement(_.ZP, null, m.createElement(w.default, null)), m.createElement(_.ZP, { size: "subtext1" }, R)), m.createElement(p.Z, { style: K.bulletRow }, m.createElement(_.ZP, null, m.createElement(w.default, null)), m.createElement(_.ZP, { size: "subtext1" }, U)), m.createElement(k.ZP, { link: "/jobs/get-recommendations", size: "small", type: "brandFilled" }, x))),
                O = ({ recommendation: e, recommendationId: t, recommendationIndex: n }) => {
                    const s = (0, b.Ji)(),
                        r = (0, f.useHistory)(),
                        i = h()(Z.KM, e),
                        a = i?.core,
                        o = i?.user_results?.result,
                        l = i?.company_profile_results?.result,
                        c = i?.id || "",
                        d = i?.user_sentiment,
                        u = m.useCallback(() => {
                            s ? r.push(`/jobs/recommended/${t}`) : r.push(`/m/jobs/recommended/${t}`);
                        }, [r, s, t]);
                    return i && a ? m.createElement(T.Z, { actions: [], companyProfile: l, job: a, jobId: t, jobIndex: n, onClick: u, relayId: c, user: o, userSentiment: d, withBottomBorder: !1 }) : null;
                },
                K = v.default.create((e) => ({ content: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16, gap: e.spaces.space16 }, bulletRow: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center" } })),
                M = ({ isSidebarModule: e }) => {
                    const t = (0, L.p)(A, {}),
                        n = t?.viewer_v2.user_results.result.matching_profile,
                        s = t?.viewer_v2.user_results.result.job_recommendations_results;
                    if (!t || (n?.consented_at && !s?.length)) return null;
                    const r = ({ children: t }) => (e ? m.createElement(I.g, null, t) : m.createElement(m.Fragment, null, t));
                    return m.createElement(
                        r,
                        null,
                        n?.consented_at ? null : m.createElement(D, null),
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
                N = { context: "JobRecommendationsModule" },
                H = (e) => m.createElement(C.H, { errorConfig: N }, m.createElement(M, e));
        },
        62857: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => Z });
            var s = n(807896),
                r = n(202784),
                i = n(476984),
                a = n.n(i),
                o = n(111677),
                l = n.n(o),
                c = n(615656),
                d = n(290402),
                u = n(325686),
                m = n(240089),
                p = n(663550),
                g = n(409438);
            const h = ({ displayMode: e = g.Z.UserDetailed, renderUserCell: t, userIds: n }) =>
                r.createElement(
                    u.Z,
                    { role: "list" },
                    n.map((n, s) => (t ? t(n) : r.createElement(m.ZP, { decoration: m.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: n, promotedItemType: p.bj.USER, userId: n, withFollowsYou: !0 }))),
                );
            var f = n(312771),
                y = n(71620),
                _ = n(973572),
                k = n(668214),
                b = n(919022);
            const v = (e, t) => t.userIds,
                E = (e, t) => {
                    const { filterPredicate: n = (e) => !!e, userIds: s } = t;
                    return s.filter((t) => {
                        const s = b.ZP.select(e, t);
                        return !!s && n(s);
                    });
                },
                S = (e, t) => {
                    const { userIds: n } = t;
                    return n.reduce((t, n) => {
                        const s = b.ZP.selectFetchStatus(e, n);
                        return s && (t[n] = s === f.ZP.NONE ? f.ZP.LOADING : s), t;
                    }, {});
                },
                w = (0, k.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, _.Z)(E, (e) => e),
                        fetchStatus: (0, _.Z)(E, S, v, (e, t, n) => {
                            let s = f.ZP.LOADED;
                            for (let r = 0; r < n.length; r++) {
                                const i = n[r];
                                if (-1 === e.indexOf(i)) {
                                    const e = t[i] || f.ZP.LOADING;
                                    s = s === f.ZP.LOADED ? e : s;
                                }
                                if (s === f.ZP.LOADED) break;
                            }
                            return s;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: b.ZP.fetchManyIfNeeded })),
                I = l().f5b426c2;
            class T extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: n, fetchUsersIfNeeded: i, filterPredicate: a, userIds: o, ...l } = this.props;
                            return r.createElement(h, (0, s.Z)({}, l, { userIds: e }));
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
                    return r.createElement(d.Z, { "aria-label": I, fetchStatus: this.state.allUsersUnavailable ? f.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: n, userIds: s } = this.props;
                    n(s).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [c.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [c.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const Z = w(T);
        },
        912937: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { WhoToFollowContainer: () => j, default: () => q });
            var s = n(202784),
                r = n(325686),
                i = n(392237),
                a = n(111677),
                o = n.n(a),
                l = n(290402),
                c = n(844685),
                d = n(30183),
                u = n(62857),
                m = n(952793),
                p = n(409438),
                g = n(864479),
                h = (n(136728), n(952428)),
                f = n(443781);
            const y = s.lazy(() => window.__SSP_PROMISE__.then(() => ({ default: v }))),
                _ = new Set(),
                k = {};
            let b = 0;
            function v({ fallbackSlotId: e, primarySlotId: t }) {
                const n = s.useRef("ad-" + b++).current,
                    [i, a] = s.useState(""),
                    o = s.useRef(!1),
                    l = s.useRef(!1),
                    { userClaims: c } = s.useContext(f.rC),
                    d = c.isAnyPremiumSubscriber(),
                    u = "rtl" === document?.documentElement?.getAttribute("dir"),
                    m = s.useCallback(() => {
                        window.googletag &&
                            o.current &&
                            !l.current &&
                            window.googletag.cmd.push(() => {
                                if (!o.current) return;
                                u && window.googletag.pubads().setTargeting("rtl", "true");
                                const s = `adEventHandler_${n}`;
                                k[s] && (window.googletag.pubads().removeEventListener("slotRenderEnded", k[s]), delete k[s]),
                                    (k[s] = (n) => {
                                        o.current && (n.isEmpty || (n.slot.getSlotElementId() === e ? a("fallback") : n.slot.getSlotElementId() === t && "" === i && a("primary")));
                                    }),
                                    window.googletag.pubads().addEventListener("slotRenderEnded", k[s]);
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
                    }, [e, t, u, i, n]);
                if (
                    (s.useEffect(() => {
                        if (d) return;
                        o.current = !0;
                        const s = () => {
                            const n = document.getElementById(t),
                                s = document.getElementById(e);
                            return (
                                !(!n || !s) &&
                                (setTimeout(() => {
                                    o.current && m();
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
                            o.current = !1;
                            const e = `adEventHandler_${n}`;
                            window.googletag &&
                                k[e] &&
                                window.googletag.cmd.push(() => {
                                    try {
                                        window.googletag.pubads().removeEventListener("slotRenderEnded", k[e]), delete k[e];
                                    } catch (e) {}
                                });
                        };
                    }, [d, t, e, m, n]),
                    d)
                )
                    return null;
                const p = [E.adContainer, !i && E.emptyContainer];
                return s.createElement(r.Z, { style: p }, s.createElement(r.Z, { id: t, style: [E.adSlot, "primary" !== i && E.hiddenSlot] }), s.createElement(r.Z, { id: e, style: [E.adSlot, "fallback" !== i && E.hiddenSlot] }));
            }
            const E = i.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space12, borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, adContainer: { minHeight: 250, minWidth: 300, width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", position: "relative" }, emptyContainer: { minHeight: 0, height: 0, overflow: "hidden" }, adSlot: { width: "100%", height: "100%", position: "absolute", top: 0, start: 0, end: 0, minWidth: 300, minHeight: 250 }, hiddenSlot: { display: "none" } })),
                S = function (e) {
                    return s.createElement(h.Z, { style: E.root }, s.createElement(s.Suspense, { fallback: s.createElement(r.Z, { style: E.emptyContainer }) }, s.createElement(y, e)));
                },
                w = o().a526aa66,
                I = o().ef625010,
                T = o().d228a9a0,
                Z = (0, g.Z)(({ isInSidebar: e, userId: t, userIds: n, withProfileHeaderText: i }) => {
                    const a = (0, m.hC)("rweb_ssp_ads_enabled"),
                        o = `/i/connect_people?user_id=${t}`,
                        l = n.length > 0;
                    return s.createElement(r.Z, { "aria-label": w, role: "complementary" }, s.createElement(c.Z, { text: i ? I : w }), s.createElement(u.Z, { displayMode: p.Z.UserCompact, userIds: n }), a && l && s.createElement(S, { fallbackSlotId: "div-gpt-ad-1740520505566-0", primarySlotId: "div-gpt-ad-1738265577622-0" }), l && s.createElement(d.Z, { link: o, text: T, withBottomRadius: !0, withDarkerInteractiveBackground: e }));
                });
            var L = n(967977),
                C = n(942893),
                F = n(312771),
                P = n(71620),
                R = n(973572),
                U = n(668214),
                x = n(994305),
                A = n(919022);
            const D = "profile_accounts_sidebar",
                O = (e, t) => x.Ic(e, { displayLocation: D, similarToUserId: t.userId }),
                K = (e, t) => x.UD(e, { displayLocation: D, similarToUserId: t.userId }),
                M = (e, t) => {
                    const n = O(e, t),
                        s = [];
                    return (
                        n.forEach(({ user_id: t }) => {
                            const n = A.ZP.select(e, t);
                            n && s.push(n);
                        }),
                        s
                    );
                },
                N = (0, U.Z)()
                    .propsFromState(() => ({ fetchStatus: K, recommendations: O, users: (0, R.Z)(M, (e) => e) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, P.zr)("WHO_TO_FOLLOW_CONTAINER"), fetchRecommendationsIfNeeded: x.yY }))
                    .withAnalytics({ component: "suggest_who_to_follow" }),
                H = o().fd6473fa,
                B = { element: "user", action: "results" };
            class j extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = () => {
                            const { recommendations: e, userId: t, withProfileHeaderText: n } = this.props,
                                r = e && e.map((e) => e.user_id);
                            return s.createElement(Z, { userId: t, userIds: r, withProfileHeaderText: n });
                        }),
                        (this._handleImpression = (e) => {
                            const { analytics: t, users: n } = this.props,
                                s = e && e.map((e) => ({ ...C.Z.forUser(e.user_id), suggestion_details: { source_data: e.token } }));
                            t.scribe({ ...B, data: { items: s } }),
                                n &&
                                    n.map((e) => {
                                        const n = e ? [C.Z.forUser(e.id_str)] : [];
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
                    return e === F.ZP.FAILED || this._hasEmptySuggestionList() ? null : s.createElement(r.Z, { style: [z.root, t] }, s.createElement(l.Z, { "aria-label": H, fetchStatus: e, render: this._renderContent }));
                }
                _fetchRecommendations(e) {
                    const { createLocalApiErrorHandler: t, fetchRecommendationsIfNeeded: n, userId: s } = e;
                    n({ limit: 3, displayLocation: D, similarToUserId: s }).catch(t(L.C));
                }
                _hasEmptySuggestionList() {
                    const { fetchStatus: e, recommendations: t } = this.props;
                    return e === F.ZP.LOADED && 0 === t.length;
                }
            }
            const z = i.default.create((e) => ({ root: { minHeight: "15rem" } })),
                q = N(j);
        },
        376293: (e, t, n) => {
            "use strict";
            n.d(t, { $f: () => w, KV: () => y, LI: () => C, SC: () => S, Vt: () => b, ed: () => F, op: () => I });
            var s = n(202784),
                r = n(190286),
                i = n(111677),
                a = n.n(i),
                o = n(616894),
                l = n(314948),
                c = n(516951),
                d = n(163390);
            const u = a().cfd2f35e,
                m = a().f9e45cfb,
                p = a().fcd4d489,
                g = a().a6450e84,
                h = a().g353ad73,
                f = a().ad00a739,
                y = a().a9fd20be,
                _ = a().j546fb79,
                k = a().c9623eeb,
                b = a().e133be4e,
                v = a().he43bca4,
                E = a().f5f01af6,
                S = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                w = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: g, text: t ? f({ screenName: e }) : h({ screenName: e }) }),
                I = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: n, source: s, testID: r, unblockAction: i, unblockSubtext: a, user: o }) => {
                    let l,
                        u = c.Z;
                    const m = C(o, n);
                    switch (s) {
                        case S.PROFILE:
                        case S.LIST_DETAIL:
                        case S.FOLLOWERS_LIST:
                            u = () => {
                                o.blocking ? i(m) : e(m);
                            };
                            break;
                        case S.TWEET:
                        case S.TWEET_CARET:
                        case S.RICH_FEEDBACK:
                            (l = d.uq.block),
                                (u = () => {
                                    o.blocking ? i(m) : e(m);
                                });
                    }
                    return { confirmation: m, onClick: u, testID: r, shortcutKey: l, Icon: T(o.blocking), text: L(o), subText: Z({ user: o, blockSubtext: t, unblockSubtext: a }) };
                },
                T = (e) => (e ? l.default : o.default),
                Z = ({ blockSubtext: e, unblockSubtext: t, user: n }) => (!n.blocking && e ? e(n.screen_name) : n.blocking ? t : void 0),
                L = (e) => (e.blocking ? k({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                C = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: _({ screenName: e }), label: b, text: t ? E : v }))(e.screen_name, t) : w(e.screen_name, t)),
                F = ({ confirmation: e, handleConfirm: t, onClose: n }) => {
                    const { confirmButtonType: i, headline: a, label: o, text: l } = e;
                    return s.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: o, confirmButtonType: i, headline: a, onCancel: n, onConfirm: t, text: l });
                };
        },
        712816: (e, t, n) => {
            "use strict";
            n.d(t, { d: () => r });
            var s = n(111677);
            const r = { defaultToast: { text: n.n(s)().b6878b0a }, showToast: !0 };
        },
        967977: (e, t, n) => {
            "use strict";
            n.d(t, { C: () => i });
            var s = n(516951),
                r = n(615656);
            const i = { [r.ZP.ResourceNotFound]: { customAction: s.Z } };
        },
        879596: (e, t, n) => {
            "use strict";
            n.d(t, { D: () => r });
            var s = n(111677);
            const r = { defaultToast: { text: n.n(s)().ca96fe6e }, showToast: !0 };
        },
        973572: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => a });
            var s = n(476984),
                r = n.n(s),
                i = n(24949);
            const a = (0, i.wN)(i.PW, r());
        },
        163390: (e, t, n) => {
            "use strict";
            n.d(t, { OX: () => m, Od: () => d, PN: () => p, uq: () => c, wR: () => h });
            var s = n(251067),
                r = n(522171),
                i = n(111677),
                a = n.n(i),
                o = n(912021),
                l = n(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, o.Z)((e) => {
                    const t = e ? [{ description: a().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, s.fH)(s.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: a().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: a().a83d4280, keys: c.nextItem, universal: !0 }, { description: a().g0048656, keys: c.previousItem, universal: !0 }, { description: a().a690c4d0, keys: "Space", universal: !0 }, { description: a().e893811a, keys: c.refresh, universal: !1 }, { description: a().ha8209bc, keys: c.goHome, universal: !1 }, { description: a().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: a().eb75875e, keys: c.goNotifications, universal: !1 }, { description: a().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: a().fa98627a, keys: c.goProfile, universal: !1 }, { description: a().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: a().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: a().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: a().b0041756, keys: c.goLists, universal: !1 }, { description: a().d4986f86, keys: c.goMessages, universal: !1 }, { description: a().h5860a68, keys: c.goGrok, universal: !1 }, { description: a().bb081ea2, keys: c.goSettings, universal: !1 }, { description: a().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: a().eee2ed92, keys: c.goToUser, universal: !1 }, { description: a().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: a().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: a().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: a().e736990a, keys: c.newMessage, universal: !1 },
                    { description: a().a9ae1e78, keys: c.search, universal: !1 },
                    { description: a().fe731016, keys: r.Z.shortcuts.like, universal: !1 },
                    { description: a().d17df548, keys: r.Z.shortcuts.reply, universal: !1 },
                    { description: a().g062295e, keys: r.Z.shortcuts.retweet, universal: !1 },
                    { description: a().h01621a4, keys: r.Z.shortcuts.share, universal: !0 },
                    { description: a().gb303814, keys: c.bookmark, universal: !1 },
                    { description: a().c03b1126, keys: c.mute, universal: !1 },
                    { description: a().ebd2abb2, keys: c.block, universal: !1 },
                    { description: a().hc6c5510, keys: "Enter", universal: !0 },
                    { description: a().eebdef38, keys: r.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: a().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: a().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: a().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: a().b881560e, keys: c.video.mute, universal: !0 },
                    { description: a().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: a().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: a().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                g = (0, o.Z)((e) => {
                    const t = d(e),
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
                h = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": g(e) } };
                };
        },
        409438: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            const s = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        994305: (e, t, n) => {
            "use strict";
            n.d(t, { yY: () => R, UD: () => P, Ic: () => F });
            var s = n(360917),
                r = n.n(s),
                i = n(506899),
                a = n(414742),
                o = n(125199);
            const l = new i.fK.Entity("recommendations", { user: o.Z }, { idAttribute: (e) => e.user?.rest_id });
            var c = n(801301),
                d = n.n(c),
                u = n(304819);
            const m = new i.fK.Entity("recommendations", { user: u.Z }, { idAttribute: (e) => e.user?.id_str });
            var p = n(387466),
                g = n(120071);
            const h = (e) => ({ ...g.k(e), excluded: [], pc: !0 }),
                f = ({ apiClient: e, featureSwitches: t }) => ({
                    fetch(n, s = {}) {
                        const r = { ...h(t), ...n, ...(0, p.Y)(t) };
                        return e.get("users/recommendations", r, s).then((e) => (0, i.Fv)(e, [m]));
                    },
                    fetchSidebarUserRecommendations: (t) =>
                        e
                            .graphQL(
                                d(),
                                { profileUserId: t.user_id },
                                (0, a.kj)((e) => !e.sidebar_user_recommendations, "GQL Sidebar User Recommendations: Failed to render Sidebar User Recommendations"),
                            )
                            .then((e) => {
                                const t = e.sidebar_user_recommendations ?? [];
                                return (0, i.Fv)(
                                    t.map(({ token: e, user_results: { result: t } }) => ({ token: e, user: t, user_id: t?.rest_id })).filter(({ user: e }) => e),
                                    [l],
                                );
                            }),
                });
            var y = n(499627),
                _ = n(917799),
                k = n(312771),
                b = n(56519);
            const v = "recommendations",
                E = 30,
                S = "rweb/recommendations/FETCH_REQUEST",
                w = "rweb/recommendations/FETCH_SUCCESS",
                I = "rweb/recommendations/FETCH_FAILURE",
                T = {},
                Z = ({ displayLocation: e, similarToUserId: t }) => e + (t ? `_${t}` : "");
            y.Z.register({
                [v]: function (e = T, t) {
                    if (!t?.meta) return e;
                    switch (t.type) {
                        case S: {
                            const n = Z(t.meta);
                            return { ...e, [n]: { ...e[n], fetchStatus: k.ZP.LOADING } };
                        }
                        case I: {
                            const n = Z(t.meta);
                            return { ...e, [n]: { ...e[n], fetchStatus: k.ZP.FAILED } };
                        }
                        case w: {
                            const n = Z(t.meta),
                                s = t.payload && t.payload.entities ? t.payload.entities : { recommendations: r() },
                                i = (t.payload && t.payload.result ? t.payload.result : C).map((e) => s.recommendations[e]);
                            return { ...e, [n]: { ...e[n], fetchStatus: k.ZP.LOADED, recommendations: i } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const L = [],
                C = [],
                F = (e, { displayLocation: t, similarToUserId: n }) => {
                    const s = e[v][Z({ displayLocation: t, similarToUserId: n })];
                    return s && s.recommendations ? s.recommendations : L;
                },
                P = (e, { displayLocation: t, similarToUserId: n }) => {
                    const s = e[v][Z({ displayLocation: t, similarToUserId: n })];
                    return s ? s.fetchStatus : k.ZP.NONE;
                },
                R = (e) => (t, n, s) => {
                    const i = n(),
                        { displayLocation: a, similarToUserId: o } = e,
                        l = F(i, { displayLocation: a, similarToUserId: o }),
                        c = P(i, { displayLocation: a, similarToUserId: o }) === k.ZP.LOADED;
                    return l && c
                        ? Promise.resolve(r())
                        : t(
                              (
                                  (e) =>
                                  (t, n, { api: s, featureSwitches: r }) => {
                                      const { displayLocation: i, itsInterests: a, limit: o = E, similarToUserId: l } = e,
                                          c = "profile_accounts_sidebar" === i && r.isTrue("rweb_recommendations_sidebar_graphql_enabled");
                                      return (0, _._O)(t, { request: c ? s.withEndpoint(f).fetchSidebarUserRecommendations : s.withEndpoint(f).fetch, params: { display_location: i, itsInterests: a, limit: o, user_id: l } })({ actionTypes: { REQUEST: S, SUCCESS: w, FAILURE: I }, context: "FETCH_RECOMMENDATIONS", meta: { displayLocation: i, similarToUserId: l } }, (e) => {
                                          if (e && e.entities) return [(0, b.dP)(e.entities)];
                                      });
                                  }
                              )(e),
                          );
                };
        },
        879113: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => p });
            var s = n(202784),
                r = n(476984),
                i = n.n(r),
                a = n(143778),
                o = n(750410),
                l = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class p extends s.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: i, loadingMessage: a, onRequestRetry: d, render: p, renderFailure: g, retryMessage: h, retryable: f } = this.props;
                    switch (r) {
                        case c:
                            return f ? s.createElement(o.Z, { icon: i, onRequestRetry: d, retryMessage: h }) : n ? s.createElement(l.m, { failureMessage: n }) : g();
                        case u:
                            return s.createElement(l.J, { "aria-label": e, color: t, loadingMessage: a });
                        case m:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: a.Z, retryable: !0 };
        },
        30183: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var s = n(202784),
                r = n(731708),
                i = n(952428);
            const a = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                o = function ({ align: e, link: t, onPress: n, text: o, weight: l, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return s.createElement(i.Z, { link: t, onPress: n, style: [a.root, c && a.withBottomRadius], withDarkerInteractiveBackground: d }, s.createElement(r.ZP, { align: e, color: "primary", weight: l }, o));
                };
        },
        391366: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => l });
            var s = n(202784),
                r = n(890601),
                i = n(783427),
                a = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M18 1.2v21.6L8.71 17H5.5C4.12 17 3 15.88 3 14.5v-5C3 8.12 4.12 7 5.5 7h3.21L18 1.2zM8 9H5.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H8V9zm2 6.45l6 3.75V4.8l-6 3.75v6.9z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const l = o;
        },
        452693: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => l });
            var s = n(202784),
                r = n(890601),
                i = n(783427),
                a = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const l = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.WideLayout.e3451f5a.js.map
