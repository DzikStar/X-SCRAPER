(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.WideLayout-9f4db315"],
    {
        801301: (e) => {
            e.exports = { queryId: "apoLb8lvGh-n59pXrJY9aQ", operationName: "SidebarUserRecommendations", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        616753: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { default: () => n });
            const n = s(797553).default;
        },
        290402: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => h });
            var n = s(807896),
                r = s(202784),
                o = s(182056),
                i = s(879113),
                a = s(392237),
                c = s(111677),
                l = s.n(c),
                d = s(968478);
            const u = l().aa6e3300,
                m = ({ retryMessage: e, ...t }, s) => {
                    const a = o.Z.isOnline();
                    return r.createElement(i.Z, (0, n.Z)({}, t, { icon: a ? void 0 : r.createElement(d.default, { style: p.icon }), retryMessage: a ? e : u }));
                },
                p = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = r.forwardRef(m);
        },
        471957: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => C });
            var n = s(626926),
                r = s(202784),
                o = s(325686),
                i = (s(585488), s(277660)),
                a = s.n(i),
                c = s(392237),
                l = s(725405),
                d = s(535338),
                u = s(164936),
                m = (s(136728), s(107267)),
                p = s(731708),
                h = s(519172),
                f = s(601413),
                g = s(952428),
                y = s(823161),
                b = s(757483),
                _ = s(457458),
                k = s(412876),
                v = s(549599);
            const E = ({ fallbackName: e, user: t }) => {
                    const s = a()(v.fR, t);
                    return s && s.core && s.core.name && s.core.screen_name ? r.createElement(p.ZP, { size: "subtext2", style: I.userName }, r.createElement(o.Z, { style: I.name }, r.createElement(p.ZP, { numberOfLines: 1 }, s.core.name), r.createElement(h.Z, { isVerified: s.verification?.verified ?? !1, verifiedType: s.verification?.verified_type ?? void 0 })), r.createElement(f.Z, { screenName: s.core.screen_name, size: "subtext2" })) : e ? r.createElement(p.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                I = c.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, inactiveItem: { borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, activeItem: { backgroundColor: b.Z.hexToCss(e.colors.primary, 0.25) }, itemRow: { display: "flex", flexDirection: "row", gap: 16 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, userName: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: 4 }, name: { flexWrap: "nowrap", flexDirection: "row", flexShrink: 1 } })),
                S = ({ companyProfile: e, formattedSalary: t, jobId: s, jobLocation: n, jobTitle: i, onClick: a, renderActions: c, salaryInterval: l, user: d, withBottomBorder: u = !0 }) => {
                    const { jobId: h } = (0, m.useParams)(),
                        f = r.useMemo(() => ({ label: i }), [i]),
                        b = r.useMemo(() => {
                            const e = [I.listContainer];
                            return h === s ? e.push(I.activeItem) : u && e.push(I.inactiveItem), e;
                        }, [h, s, u]);
                    return r.createElement(g.Z, { onClick: a, role: "listitem", style: b }, r.createElement(o.Z, { style: I.itemRow }, d ? r.createElement(k.Y, { size: "xLarge", user: d }) : r.createElement(y.default, { shape: "square", size: "xLarge", uri: e?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), r.createElement(o.Z, { style: I.items }, r.createElement(p.ZP, { hoverLabel: f, numberOfLines: 2, size: "subtext1", weight: "bold" }, i), r.createElement(E, { fallbackName: e?.core?.name, user: d }), r.createElement(p.ZP, { color: "gray700", size: "subtext2" }, n), t ? r.createElement(p.ZP, { color: "gray700", size: "subtext2" }, (0, _.M)(t, l)) : null)), c && r.createElement(o.Z, null, c()));
                },
                w = n.Z,
                Z = c.default.create((e) => ({ actions: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, marginStart: e.spaces.space56, marginTop: e.spaces.space12 } })),
                C = ({ actions: e, companyProfile: t, job: s, jobId: n, jobIndex: i, onClick: c, relayId: m, user: p, userSentiment: h, withBottomBorder: f = !0 }) => {
                    const g = (0, l.Z)(),
                        { viewer: y } = (0, d.p)(w, {}),
                        b = a()(v.qV, s),
                        _ = a()(v.dB, t),
                        k = y?.user_results?.result?.__id,
                        E = r.useCallback(() => {
                            g.scribe({ action: "click", component: "job_search_list_item", element: "job", data: { items: [{ id: n, position: i }] } }), c();
                        }, [g, n, i, c]),
                        I = r.useCallback(() => r.createElement(o.Z, { style: Z.actions }, r.createElement(u.ZP, { actions: e, jobId: n, relayId: m, userRelayId: k, userSentiment: h })), [e, n, m, k, h]);
                    return b && b.title && b.location ? r.createElement(S, { companyProfile: _, formattedSalary: b.formatted_salary, jobId: n, jobLocation: b.location, jobTitle: b.title, onClick: E, renderActions: I, salaryInterval: b.salary_interval, user: p, withBottomBorder: f }) : null;
                };
        },
        549599: (e, t, s) => {
            "use strict";
            s.d(t, { KM: () => y, ZP: () => b, dB: () => f, fR: () => g, qV: () => h });
            s(136728);
            var n = s(501527),
                r = s(176811),
                o = s(436065),
                i = s(891717),
                a = s(202784),
                c = (s(585488), s(277660)),
                l = s.n(c),
                d = s(107267),
                u = s(708852),
                m = s(471957),
                p = s(512549);
            const h = i.Z,
                f = o.Z,
                g = r.Z,
                y = n.Z,
                b = ({ item: e, itemId: t, itemIndex: s }) => {
                    const n = (0, u.Ji)(),
                        r = (0, d.useHistory)(),
                        o = (0, d.useLocation)(),
                        i = l()(y, e),
                        c = i?.core,
                        h = i?.user_results?.result,
                        f = i?.company_profile_results?.result,
                        g = i?.id || "",
                        b = i?.user_sentiment,
                        _ = a.useCallback(() => {
                            n ? r.push({ pathname: `/jobs/${t}`, query: o.query }) : r.push({ pathname: `/m/jobs/${t}`, query: o.query });
                        }, [r, n, t, o.query]);
                    return i && c ? a.createElement(m.Z, { actions: [p.h5], companyProfile: f, job: c, jobId: t, jobIndex: s, onClick: _, relayId: g, user: h, userSentiment: b }) : null;
                };
        },
        512549: (e, t, s) => {
            "use strict";
            s.d(t, { ZP: () => E, h5: () => b, pN: () => _, tv: () => y });
            var n = s(643331),
                r = s(202784),
                o = s(325686),
                i = (s(585488), s(351743)),
                a = s.n(i),
                c = s(530732),
                l = s(731708),
                d = s(392237),
                u = s(106186),
                m = s(258292),
                p = s(616894),
                h = s(443781),
                f = s(292546);
            const g = n.Z,
                y = (e, t, s) => {
                    const { viewerUserId: n } = (0, h.QZ)(),
                        [o] = a()(g),
                        [i] = (0, f.Z)(),
                        c = i.get("twclid") || null,
                        l = r.useCallback(
                            (e, n) => {
                                const r = e.get(t);
                                if ((r && r.setValue(n, "user_sentiment"), s)) {
                                    const t = e.get(s);
                                    t && t.invalidateRecord();
                                }
                            },
                            [t, s],
                        );
                    return r.useCallback(
                        (t) => {
                            n && o({ variables: { jobId: e, userId: n, sentiment: t, twclid: c }, optimisticUpdater: (e) => l(e, t), updater: (e) => l(e, t) });
                        },
                        [o, l, e, c, n],
                    );
                },
                b = "like",
                _ = "dislike",
                k = ({ Icon: e, SelectedIcon: t, activeStyle: s, hoverStyle: n, isSelected: i, label: a, onClick: d, sentiment: u }) => {
                    const m = (e) => (e ? n : i ? s : {});
                    return r.createElement(
                        o.Z,
                        null,
                        r.createElement(c.Z, { interactiveStyles: null, onClick: (e) => d(u, e), style: v.sentimentActionContainer }, ({ isHovered: s }) => r.createElement(r.Fragment, null, i ? r.createElement(t, { style: m(s) }) : r.createElement(e, { style: m(s) }), r.createElement(l.ZP, { size: "subtext2", style: { ...m(s) } }, a))),
                    );
                },
                v = d.default.create((e) => ({ sentimentActionContainer: { display: "flex", flexDirection: "row", flex: 1, gap: 6, alignItems: "center", cursor: "pointer" }, sentimentActionText: { marginTop: e.spaces.space4 }, likeActive: { color: e.colors.blue500 }, likeHover: { color: e.colors.blue700 }, dislikeActive: { color: e.colors.red500 }, dislikeHover: { color: e.colors.red700 } })),
                E = ({ jobId: e, relayId: t, type: s, userRelayId: n, userSentiment: o }) => {
                    const i = y(e, t, n),
                        a = r.useCallback(
                            (e, t) => {
                                t.stopPropagation();
                                i(e !== o ? e : "none");
                            },
                            [i, o],
                        );
                    return s === b ? r.createElement(k, { Icon: u.default, SelectedIcon: m.default, activeStyle: v.likeActive, hoverStyle: v.likeHover, isSelected: o === b, label: "Save job", onClick: a, sentiment: b }) : s === _ ? r.createElement(k, { Icon: p.default, SelectedIcon: p.default, activeStyle: v.dislikeActive, hoverStyle: v.dislikeHover, isSelected: o === _, label: "Not interested", onClick: a, sentiment: _ }) : null;
                };
        },
        893904: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { StickyView: () => m, default: () => y, roundToNearestDevicePixel: () => u, useStickyViewNotify: () => h });
            var n = s(202784),
                r = s(325686),
                o = s(67877),
                i = s(537392),
                a = s(392237),
                c = s(752624),
                l = s(323265),
                d = s(993547);
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
                        (this._scheduleUpdatePositioning = (0, o.Z)(this._updatePositioning.bind(this), this._singleRequestAnimationFrame));
                    const { viewport: t } = e;
                    this._removeProgrammaticScrollListener = t.addProgrammaticScrollListener(this._handleProgrammaticScroll);
                }
                componentDidMount() {
                    this._isMounted = !0;
                    const { viewport: e } = this.props;
                    if ((this._updatePositioning(), (this._removeScrollListener = e.addScrollListener(this._scheduleUpdatePositioning)), this._containerNode)) {
                        const t = this._containerNode.getBoundingClientRect(),
                            s = e.scrollY();
                        (this._prevScrollY = s), this.setState({ stickyOffset: s + t.top });
                    }
                    this._pendingScrolledBy && (this._handleProgrammaticScroll(this._pendingScrolledBy), (this._pendingScrolledBy = 0));
                }
                componentWillUnmount() {
                    (this._isMounted = !1), this._removeScrollListener && this._removeScrollListener(), this._removeProgrammaticScrollListener && this._removeProgrammaticScrollListener(), void 0 !== this._timeoutId && cancelAnimationFrame(this._timeoutId);
                }
                render() {
                    const { contentOffset: e, position: t, stickyThreshold: s, stickyTop: o } = this.state,
                        i = g[t],
                        a = window.devicePixelRatio || 1,
                        c = u({ cssPixels: s, dpr: a }),
                        l = u({ cssPixels: e, dpr: a }),
                        d = { top: o ? `${c}px` : null, bottom: o ? null : `${c}px` };
                    return n.createElement(r.Z, { ref: this._setContainerRef, style: [g.container, { minHeight: this.state.contentHeight }] }, n.createElement(f, { onNotify: this._forceUpdatePositioning }), n.createElement(r.Z, { style: { marginTop: `${l}px` } }), n.createElement(r.Z, { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, d, i] }, this.props.children));
                }
                _updatePositioning(e = !1) {
                    if (!this._contentNode || !this._containerNode) return;
                    const t = this.props.viewport.scrollY(),
                        s = t - this._prevScrollY;
                    if (Math.abs(s) < 0.5 && !e) return;
                    const { distanceFromBottom: n } = this.props;
                    this._prevScrollY = t;
                    const r = !!this._contentNode && this._contentNode.getBoundingClientRect(),
                        o = !!this._containerNode && this._containerNode.getBoundingClientRect();
                    if (!r || !o) return;
                    const { height: a } = (0, i.iv)(),
                        c = l.ZP.isIOS() ? window.innerHeight : a,
                        d = t + o.top,
                        u = Math.max(r.top - o.top, 0);
                    if (c - r.height >= d) this._updateState({ stickyTop: !0, stickyThreshold: d, contentOffset: 0, stickyOffset: d, contentHeight: r.height, position: "fixed" });
                    else {
                        const e = s > 0,
                            t = e !== this.state.stickyTop,
                            o = window.devicePixelRatio || 1,
                            i = r.bottom - c + n <= 1 / o,
                            a = d - r.top <= 1 / o;
                        if (((e && i) || (!e && a)) && l.ZP.isFirefox()) {
                            const e = n,
                                t = d;
                            this._updateState({ position: "fixed", stickyOffset: d, stickyTop: a, stickyThreshold: a ? t : e, contentOffset: u, contentHeight: r.height });
                        } else {
                            const s = c - r.height - n,
                                o = c - r.height - d;
                            this._updateState({ position: "sticky", stickyTop: e, stickyOffset: d, stickyThreshold: e ? s : o, contentOffset: t ? u : this.state.contentOffset, contentHeight: r.height });
                        }
                    }
                }
                _updateState(e) {
                    const t = this.state.stickyTop !== e.stickyTop,
                        s = this.state.stickyThreshold !== e.stickyThreshold,
                        n = Math.abs(this.state.contentOffset - e.contentOffset) > 0.5,
                        r = Math.abs(this.state.stickyOffset - e.stickyOffset) > 0.5,
                        o = this.state.position !== e.position,
                        i = this.state.contentHeight !== e.contentHeight;
                    (t || s || n || r || o || i) && this.setState(e);
                }
            }
            m.defaultProps = { distanceFromBottom: 10 };
            const p = new c.Z();
            function h() {
                n.useLayoutEffect(() => {
                    p.notify();
                }, []);
            }
            function f({ onNotify: e }) {
                return (
                    n.useEffect(() => {
                        const { unsubscribe: t } = p.subscribe(e);
                        return () => {
                            t();
                        };
                    }, [e]),
                    null
                );
            }
            const g = a.default.create((e) => ({ container: { height: "100%" }, sticky: { position: "sticky" }, fixed: { position: "fixed" }, static: { position: "static" } })),
                y = (0, d.Z)(m);
        },
        130888: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { InThisConversationContainer: () => w, default: () => Z });
            var n = s(202784),
                r = s(476984),
                o = s.n(r),
                i = s(111677),
                a = s.n(i),
                c = s(325686),
                l = s(844685),
                d = s(62857);
            const u = (e) => !e.protected || !!e.following,
                m = n.memo(function (e) {
                    const { headerText: t, participantIds: s } = e;
                    return n.createElement(c.Z, { "aria-label": t, role: "complementary" }, n.createElement(l.Z, { text: t }), n.createElement(d.Z, { filterPredicate: u, userIds: s.slice(0, 3) }));
                }),
                p = m;
            var h = s(668214),
                f = s(390387),
                g = s(836255),
                y = s(919022),
                b = (s(136728), s(175848)),
                _ = s(166852);
            const k = (e, t, s) => {
                    const n = s === t,
                        r = e.unmentioned_user_ids?.includes(t);
                    return n || !r;
                },
                v = (e, t) => (e.entities?.user_mentions || []).filter((s) => k(e, s.id_str, t)).map((e) => e.id_str) || [],
                E = (e, t) => t.focalTweetId,
                I = (0, h.Z)()
                    .propsFromState(() => ({ focalTweetId: E, viewerUserId: f._h, tweetMap: g.Z.selectAll, users: y.ZP.selectAll }))
                    .adjustStateProps(({ focalTweetId: e, tweetMap: t, users: s, viewerUserId: n }) => {
                        const r = e && t[e];
                        if (!r) return { participantIds: [] };
                        const o = [r.user, ...v(r, n), ...((i = r), b.ZP.mergeTaggedUsers((i.extended_entities && i.extended_entities.media) || []).map((e) => e.user_id))];
                        var i;
                        const a = r.quoted_status && t[r.quoted_status];
                        return a && (o.push(...((e, t) => (k(e, e.user, t) ? [e.user] : []))(a, n)), o.push(...v(a, n))), { participantIds: (0, _.Z)(o).filter((e) => "string" == typeof e && void 0 !== s[e]?.following) };
                    })
                    .withAnalytics({ component: "in_this_conversation" }),
                S = a().j88f27d8;
            function w({ participantIds: e }) {
                const t = (function (e) {
                    const t = n.useRef(e);
                    return o()(e, t.current) ? t.current : ((t.current = e), e);
                })(e);
                return t.length > 0 ? n.createElement(p, { headerText: S, participantIds: t }) : null;
            }
            const Z = I(w);
        },
        741494: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { default: () => R });
            s(136728);
            var n = s(669506),
                r = s(202784),
                o = s(325686),
                i = (s(585488), s(277660)),
                a = s.n(i),
                c = s(107267),
                l = s(844685),
                d = s(731708),
                u = s(154003),
                m = s(708852),
                p = s(392237),
                h = s(111677),
                f = s.n(h),
                g = s(293723),
                y = s(399398),
                b = s(471957),
                _ = s(549599),
                k = s(535338),
                v = s(736063);
            const E = f().fb15ec28,
                I = f().ece910f0,
                S = f().jd08bc14,
                w = f().de0a4a72,
                Z = f().fc5bfd96,
                C = n.Z,
                P = () => r.createElement(o.Z, null, r.createElement(l.Z, { text: E }), r.createElement(o.Z, { style: x.content }, r.createElement(o.Z, { style: x.bulletRow }, r.createElement(d.ZP, null, r.createElement(g.default, null)), r.createElement(d.ZP, { size: "subtext1" }, I)), r.createElement(o.Z, { style: x.bulletRow }, r.createElement(d.ZP, null, r.createElement(g.default, null)), r.createElement(d.ZP, { size: "subtext1" }, S)), r.createElement(o.Z, { style: x.bulletRow }, r.createElement(d.ZP, null, r.createElement(g.default, null)), r.createElement(d.ZP, { size: "subtext1" }, w)), r.createElement(u.ZP, { link: "/jobs/get-recommendations", size: "small", type: "brandFilled" }, Z))),
                T = ({ recommendation: e, recommendationId: t, recommendationIndex: s }) => {
                    const n = (0, m.Ji)(),
                        o = (0, c.useHistory)(),
                        i = a()(_.KM, e),
                        l = i?.core,
                        d = i?.user_results?.result,
                        u = i?.company_profile_results?.result,
                        p = i?.id || "",
                        h = i?.user_sentiment,
                        f = r.useCallback(() => {
                            n ? o.push(`/jobs/recommended/${t}`) : o.push(`/m/jobs/recommended/${t}`);
                        }, [o, n, t]);
                    return i && l ? r.createElement(b.Z, { actions: [], companyProfile: u, job: l, jobId: t, jobIndex: s, onClick: f, relayId: p, user: d, userSentiment: h, withBottomBorder: !1 }) : null;
                },
                x = p.default.create((e) => ({ content: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16, gap: e.spaces.space16 }, bulletRow: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center" } })),
                L = ({ isSidebarModule: e }) => {
                    const t = (0, k.p)(C, {}),
                        s = t?.viewer_v2.user_results.result.matching_profile,
                        n = t?.viewer_v2.user_results.result.job_recommendations_results;
                    if (!t || (s?.consented_at && !n?.length)) return null;
                    const i = ({ children: t }) => (e ? r.createElement(y.g, null, t) : r.createElement(r.Fragment, null, t));
                    return r.createElement(
                        i,
                        null,
                        s?.consented_at ? null : r.createElement(P, null),
                        s?.consented_at && n?.length && n.length > 0
                            ? r.createElement(
                                  o.Z,
                                  null,
                                  r.createElement(l.Z, { text: "Recommended jobs" }),
                                  n.map((e, t) => (e.result ? r.createElement(T, { key: e.rest_id, recommendation: e.result, recommendationId: e.rest_id, recommendationIndex: t }) : null)),
                              )
                            : null,
                    );
                },
                U = { context: "JobRecommendationsModule" },
                R = (e) => r.createElement(v.H, { errorConfig: U }, r.createElement(L, e));
        },
        62857: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => C });
            var n = s(807896),
                r = s(202784),
                o = s(476984),
                i = s.n(o),
                a = s(111677),
                c = s.n(a),
                l = s(615656),
                d = s(290402),
                u = s(325686),
                m = s(240089),
                p = s(663550),
                h = s(409438);
            const f = ({ displayMode: e = h.Z.UserDetailed, renderUserCell: t, userIds: s }) =>
                r.createElement(
                    u.Z,
                    { role: "list" },
                    s.map((s, n) => (t ? t(s) : r.createElement(m.ZP, { decoration: m.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: s, promotedItemType: p.bj.USER, userId: s, withFollowsYou: !0 }))),
                );
            var g = s(312771),
                y = s(71620),
                b = s(973572),
                _ = s(668214),
                k = s(919022);
            const v = (e, t) => t.userIds,
                E = (e, t) => {
                    const { filterPredicate: s = (e) => !!e, userIds: n } = t;
                    return n.filter((t) => {
                        const n = k.ZP.select(e, t);
                        return !!n && s(n);
                    });
                },
                I = (e, t) => {
                    const { userIds: s } = t;
                    return s.reduce((t, s) => {
                        const n = k.ZP.selectFetchStatus(e, s);
                        return n && (t[s] = n === g.ZP.NONE ? g.ZP.LOADING : n), t;
                    }, {});
                },
                S = (0, _.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, b.Z)(E, (e) => e),
                        fetchStatus: (0, b.Z)(E, I, v, (e, t, s) => {
                            let n = g.ZP.LOADED;
                            for (let r = 0; r < s.length; r++) {
                                const o = s[r];
                                if (-1 === e.indexOf(o)) {
                                    const e = t[o] || g.ZP.LOADING;
                                    n = n === g.ZP.LOADED ? e : n;
                                }
                                if (n === g.ZP.LOADED) break;
                            }
                            return n;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: k.ZP.fetchManyIfNeeded })),
                w = c().f5b426c2;
            class Z extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: s, fetchUsersIfNeeded: o, filterPredicate: i, userIds: a, ...c } = this.props;
                            return r.createElement(f, (0, n.Z)({}, c, { userIds: e }));
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
                    return r.createElement(d.Z, { "aria-label": w, fetchStatus: this.state.allUsersUnavailable ? g.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: s, userIds: n } = this.props;
                    s(n).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [l.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [l.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const C = S(Z);
        },
        912937: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { WhoToFollowContainer: () => z, default: () => W });
            var n = s(202784),
                r = s(325686),
                o = s(392237),
                i = s(111677),
                a = s.n(i),
                c = s(290402),
                l = s(844685),
                d = s(30183),
                u = s(62857),
                m = s(952793),
                p = s(409438),
                h = s(864479),
                f = (s(136728), s(952428)),
                g = s(443781);
            const y = n.lazy(() => window.__SSP_PROMISE__.then(() => ({ default: v }))),
                b = new Set(),
                _ = {};
            let k = 0;
            function v({ fallbackSlotId: e, primarySlotId: t }) {
                const s = n.useRef("ad-" + k++).current,
                    [o, i] = n.useState(""),
                    a = n.useRef(!1),
                    c = n.useRef(!1),
                    { userClaims: l } = n.useContext(g.rC),
                    d = l.isAnyPremiumSubscriber(),
                    u = "rtl" === document?.documentElement?.getAttribute("dir"),
                    m = n.useCallback(() => {
                        window.googletag &&
                            a.current &&
                            !c.current &&
                            window.googletag.cmd.push(() => {
                                if (!a.current) return;
                                u && window.googletag.pubads().setTargeting("rtl", "true");
                                const n = `adEventHandler_${s}`;
                                _[n] && (window.googletag.pubads().removeEventListener("slotRenderEnded", _[n]), delete _[n]),
                                    (_[n] = (s) => {
                                        a.current && (s.isEmpty || (s.slot.getSlotElementId() === e ? i("fallback") : s.slot.getSlotElementId() === t && "" === o && i("primary")));
                                    }),
                                    window.googletag.pubads().addEventListener("slotRenderEnded", _[n]);
                                if (!b.has(t) || !b.has(e)) b.has(e) || (window.googletag.display(e), b.add(e)), b.has(t) || (window.googletag.display(t), b.add(t));
                                else {
                                    const s = window.googletag
                                        .pubads()
                                        .getSlots()
                                        .filter((s) => {
                                            const n = s.getSlotElementId();
                                            return n === t || n === e;
                                        });
                                    s.length > 0 && window.googletag.pubads().refresh(s);
                                }
                                c.current = !0;
                            });
                    }, [e, t, u, o, s]);
                if (
                    (n.useEffect(() => {
                        if (d) return;
                        a.current = !0;
                        const n = () => {
                            const s = document.getElementById(t),
                                n = document.getElementById(e);
                            return (
                                !(!s || !n) &&
                                (setTimeout(() => {
                                    a.current && m();
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
                            a.current = !1;
                            const e = `adEventHandler_${s}`;
                            window.googletag &&
                                _[e] &&
                                window.googletag.cmd.push(() => {
                                    try {
                                        window.googletag.pubads().removeEventListener("slotRenderEnded", _[e]), delete _[e];
                                    } catch (e) {}
                                });
                        };
                    }, [d, t, e, m, s]),
                    d)
                )
                    return null;
                const p = [E.adContainer, !o && E.emptyContainer];
                return n.createElement(r.Z, { style: p }, n.createElement(r.Z, { id: t, style: [E.adSlot, "primary" !== o && E.hiddenSlot] }), n.createElement(r.Z, { id: e, style: [E.adSlot, "fallback" !== o && E.hiddenSlot] }));
            }
            const E = o.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space12, borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, adContainer: { minHeight: 250, minWidth: 300, width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", position: "relative" }, emptyContainer: { minHeight: 0, height: 0, overflow: "hidden" }, adSlot: { width: "100%", height: "100%", position: "absolute", top: 0, start: 0, end: 0, minWidth: 300, minHeight: 250 }, hiddenSlot: { display: "none" } })),
                I = function (e) {
                    return n.createElement(f.Z, { style: E.root }, n.createElement(n.Suspense, { fallback: n.createElement(r.Z, { style: E.emptyContainer }) }, n.createElement(y, e)));
                },
                S = a().a526aa66,
                w = a().ef625010,
                Z = a().d228a9a0,
                C = (0, h.Z)(({ isInSidebar: e, userId: t, userIds: s, withProfileHeaderText: o }) => {
                    const i = (0, m.hC)("rweb_ssp_ads_enabled"),
                        a = `/i/connect_people?user_id=${t}`,
                        c = s.length > 0;
                    return n.createElement(r.Z, { "aria-label": S, role: "complementary" }, n.createElement(l.Z, { text: o ? w : S }), n.createElement(u.Z, { displayMode: p.Z.UserCompact, userIds: s }), i && c && n.createElement(I, { fallbackSlotId: "div-gpt-ad-1740520505566-0", primarySlotId: "div-gpt-ad-1738265577622-0" }), c && n.createElement(d.Z, { link: a, text: Z, withBottomRadius: !0, withDarkerInteractiveBackground: e }));
                });
            var P = s(967977),
                T = s(942893),
                x = s(312771),
                L = s(71620),
                U = s(973572),
                R = s(668214),
                A = s(994305),
                N = s(919022);
            const D = "profile_accounts_sidebar",
                O = (e, t) => A.Ic(e, { displayLocation: D, similarToUserId: t.userId }),
                j = (e, t) => A.UD(e, { displayLocation: D, similarToUserId: t.userId }),
                H = (e, t) => {
                    const s = O(e, t),
                        n = [];
                    return (
                        s.forEach(({ user_id: t }) => {
                            const s = N.ZP.select(e, t);
                            s && n.push(s);
                        }),
                        n
                    );
                },
                F = (0, R.Z)()
                    .propsFromState(() => ({ fetchStatus: j, recommendations: O, users: (0, U.Z)(H, (e) => e) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, L.zr)("WHO_TO_FOLLOW_CONTAINER"), fetchRecommendationsIfNeeded: A.yY }))
                    .withAnalytics({ component: "suggest_who_to_follow" }),
                M = a().fd6473fa,
                B = { element: "user", action: "results" };
            class z extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = () => {
                            const { recommendations: e, userId: t, withProfileHeaderText: s } = this.props,
                                r = e && e.map((e) => e.user_id);
                            return n.createElement(C, { userId: t, userIds: r, withProfileHeaderText: s });
                        }),
                        (this._handleImpression = (e) => {
                            const { analytics: t, users: s } = this.props,
                                n = e && e.map((e) => ({ ...T.Z.forUser(e.user_id), suggestion_details: { source_data: e.token } }));
                            t.scribe({ ...B, data: { items: n } }),
                                s &&
                                    s.map((e) => {
                                        const s = e ? [T.Z.forUser(e.id_str)] : [];
                                        e.following ? t.scribe({ element: "followed_user", action: "impression", data: { items: s } }) : e.muting ? t.scribe({ element: "muted_user", action: "impression", data: { items: s } }) : e.blocking && t.scribe({ element: "blocked_user", action: "impression", data: { items: s } });
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
                    return e === x.ZP.FAILED || this._hasEmptySuggestionList() ? null : n.createElement(r.Z, { style: [q.root, t] }, n.createElement(c.Z, { "aria-label": M, fetchStatus: e, render: this._renderContent }));
                }
                _fetchRecommendations(e) {
                    const { createLocalApiErrorHandler: t, fetchRecommendationsIfNeeded: s, userId: n } = e;
                    s({ limit: 3, displayLocation: D, similarToUserId: n }).catch(t(P.C));
                }
                _hasEmptySuggestionList() {
                    const { fetchStatus: e, recommendations: t } = this.props;
                    return e === x.ZP.LOADED && 0 === t.length;
                }
            }
            const q = o.default.create((e) => ({ root: { minHeight: "15rem" } })),
                W = F(z);
        },
        292546: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => o });
            s(543673), s(240753), s(128399), s(136728);
            var n = s(202784),
                r = s(107267);
            const o = () => {
                const e = (0, r.useLocation)(),
                    t = (0, r.useHistory)(),
                    [s, o] = n.useState(new URLSearchParams(e.search));
                n.useEffect(() => {
                    o(new URLSearchParams(e.search));
                }, [e.search]);
                const i = n.useCallback(
                    (n, r) => {
                        const o = new URLSearchParams(s);
                        o.set(n, r), t.push(`${e.pathname}?${o.toString()}`);
                    },
                    [t, e.pathname, s],
                );
                return [n.useMemo(() => new URLSearchParams(e.search), [e.search]), i];
            };
        },
        376293: (e, t, s) => {
            "use strict";
            s.d(t, { $f: () => S, KV: () => y, LI: () => T, SC: () => I, Vt: () => k, ed: () => x, op: () => w });
            var n = s(202784),
                r = s(190286),
                o = s(111677),
                i = s.n(o),
                a = s(616894),
                c = s(314948),
                l = s(516951),
                d = s(163390);
            const u = i().cfd2f35e,
                m = i().f9e45cfb,
                p = i().fcd4d489,
                h = i().a6450e84,
                f = i().g353ad73,
                g = i().ad00a739,
                y = i().a9fd20be,
                b = i().j546fb79,
                _ = i().c9623eeb,
                k = i().e133be4e,
                v = i().he43bca4,
                E = i().f5f01af6,
                I = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                S = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: h, text: t ? g({ screenName: e }) : f({ screenName: e }) }),
                w = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: s, source: n, testID: r, unblockAction: o, unblockSubtext: i, user: a }) => {
                    let c,
                        u = l.Z;
                    const m = T(a, s);
                    switch (n) {
                        case I.PROFILE:
                        case I.LIST_DETAIL:
                        case I.FOLLOWERS_LIST:
                            u = () => {
                                a.blocking ? o(m) : e(m);
                            };
                            break;
                        case I.TWEET:
                        case I.TWEET_CARET:
                        case I.RICH_FEEDBACK:
                            (c = d.uq.block),
                                (u = () => {
                                    a.blocking ? o(m) : e(m);
                                });
                    }
                    return { confirmation: m, onClick: u, testID: r, shortcutKey: c, Icon: Z(a.blocking), text: P(a), subText: C({ user: a, blockSubtext: t, unblockSubtext: i }) };
                },
                Z = (e) => (e ? c.default : a.default),
                C = ({ blockSubtext: e, unblockSubtext: t, user: s }) => (!s.blocking && e ? e(s.screen_name) : s.blocking ? t : void 0),
                P = (e) => (e.blocking ? _({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                T = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: b({ screenName: e }), label: k, text: t ? E : v }))(e.screen_name, t) : S(e.screen_name, t)),
                x = ({ confirmation: e, handleConfirm: t, onClose: s }) => {
                    const { confirmButtonType: o, headline: i, label: a, text: c } = e;
                    return n.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: a, confirmButtonType: o, headline: i, onCancel: s, onConfirm: t, text: c });
                };
        },
        712816: (e, t, s) => {
            "use strict";
            s.d(t, { d: () => r });
            var n = s(111677);
            const r = { defaultToast: { text: s.n(n)().b6878b0a }, showToast: !0 };
        },
        967977: (e, t, s) => {
            "use strict";
            s.d(t, { C: () => o });
            var n = s(516951),
                r = s(615656);
            const o = { [r.ZP.ResourceNotFound]: { customAction: n.Z } };
        },
        879596: (e, t, s) => {
            "use strict";
            s.d(t, { D: () => r });
            var n = s(111677);
            const r = { defaultToast: { text: s.n(n)().ca96fe6e }, showToast: !0 };
        },
        973572: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => i });
            var n = s(476984),
                r = s.n(n),
                o = s(24949);
            const i = (0, o.wN)(o.PW, r());
        },
        163390: (e, t, s) => {
            "use strict";
            s.d(t, { OX: () => m, Od: () => d, PN: () => p, uq: () => l, wR: () => f });
            var n = s(251067),
                r = s(522171),
                o = s(111677),
                i = s.n(o),
                a = s(912021),
                c = s(323265);
            const l = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, a.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: l.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: l.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: l.nextItem, universal: !0 }, { description: i().g0048656, keys: l.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: l.refresh, universal: !1 }, { description: i().ha8209bc, keys: l.goHome, universal: !1 }, { description: i().fcf3e54c, keys: l.goExplore, universal: !1 }, { description: i().eb75875e, keys: l.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: l.goMentions, universal: !1 }, { description: i().fa98627a, keys: l.goProfile, universal: !1 }, { description: i().d4ebc798, keys: l.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: l.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: l.goLikes, universal: !1 }, { description: i().b0041756, keys: l.goLists, universal: !1 }, { description: i().d4986f86, keys: l.goMessages, universal: !1 }, { description: i().h5860a68, keys: l.goGrok, universal: !1 }, { description: i().bb081ea2, keys: l.goSettings, universal: !1 }, { description: i().i3145aa0, keys: l.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: l.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: l.goDisplay, universal: !1 }];
                }),
                u = c.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: i().ab3d53f8, keys: l.newTweet, universal: !1 },
                    { description: i().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: i().e736990a, keys: l.newMessage, universal: !1 },
                    { description: i().a9ae1e78, keys: l.search, universal: !1 },
                    { description: i().fe731016, keys: r.Z.shortcuts.like, universal: !1 },
                    { description: i().d17df548, keys: r.Z.shortcuts.reply, universal: !1 },
                    { description: i().g062295e, keys: r.Z.shortcuts.retweet, universal: !1 },
                    { description: i().h01621a4, keys: r.Z.shortcuts.share, universal: !0 },
                    { description: i().gb303814, keys: l.bookmark, universal: !1 },
                    { description: i().c03b1126, keys: l.mute, universal: !1 },
                    { description: i().ebd2abb2, keys: l.block, universal: !1 },
                    { description: i().hc6c5510, keys: "Enter", universal: !0 },
                    { description: i().eebdef38, keys: r.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: i().b488758c, keys: l.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: i().c82314e0, keys: l.video.play1, universal: !0 },
                    { description: i().c82314e0, keys: l.video.play2, universal: !0 },
                    { description: i().b881560e, keys: l.video.mute, universal: !0 },
                    { description: i().a94f7302, keys: l.audio.dock, universal: !1 },
                    { description: i().a7e604c6, keys: l.audio.play, universal: !1 },
                    { description: i().f978c4fc, keys: l.audio.mute, universal: !1 },
                ],
                h = (0, a.Z)((e) => {
                    const t = d(e),
                        s = m(),
                        n = p(),
                        r = {};
                    return (
                        [...s, ...n, ...t].forEach(({ description: e, keys: t }) => {
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
        409438: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        994305: (e, t, s) => {
            "use strict";
            s.d(t, { yY: () => U, UD: () => L, Ic: () => x });
            var n = s(360917),
                r = s.n(n),
                o = s(506899),
                i = s(414742),
                a = s(125199);
            const c = new o.fK.Entity("recommendations", { user: a.Z }, { idAttribute: (e) => e.user?.rest_id });
            var l = s(801301),
                d = s.n(l),
                u = s(304819);
            const m = new o.fK.Entity("recommendations", { user: u.Z }, { idAttribute: (e) => e.user?.id_str });
            var p = s(387466),
                h = s(120071);
            const f = (e) => ({ ...h.k(e), excluded: [], pc: !0 }),
                g = ({ apiClient: e, featureSwitches: t }) => ({
                    fetch(s, n = {}) {
                        const r = { ...f(t), ...s, ...(0, p.Y)(t) };
                        return e.get("users/recommendations", r, n).then((e) => (0, o.Fv)(e, [m]));
                    },
                    fetchSidebarUserRecommendations: (t) =>
                        e
                            .graphQL(
                                d(),
                                { profileUserId: t.user_id },
                                (0, i.kj)((e) => !e.sidebar_user_recommendations, "GQL Sidebar User Recommendations: Failed to render Sidebar User Recommendations"),
                            )
                            .then((e) => {
                                const t = e.sidebar_user_recommendations ?? [];
                                return (0, o.Fv)(
                                    t.map(({ token: e, user_results: { result: t } }) => ({ token: e, user: t, user_id: t?.rest_id })).filter(({ user: e }) => e),
                                    [c],
                                );
                            }),
                });
            var y = s(499627),
                b = s(917799),
                _ = s(312771),
                k = s(56519);
            const v = "recommendations",
                E = 30,
                I = "rweb/recommendations/FETCH_REQUEST",
                S = "rweb/recommendations/FETCH_SUCCESS",
                w = "rweb/recommendations/FETCH_FAILURE",
                Z = {},
                C = ({ displayLocation: e, similarToUserId: t }) => e + (t ? `_${t}` : "");
            y.Z.register({
                [v]: function (e = Z, t) {
                    if (!t?.meta) return e;
                    switch (t.type) {
                        case I: {
                            const s = C(t.meta);
                            return { ...e, [s]: { ...e[s], fetchStatus: _.ZP.LOADING } };
                        }
                        case w: {
                            const s = C(t.meta);
                            return { ...e, [s]: { ...e[s], fetchStatus: _.ZP.FAILED } };
                        }
                        case S: {
                            const s = C(t.meta),
                                n = t.payload && t.payload.entities ? t.payload.entities : { recommendations: r() },
                                o = (t.payload && t.payload.result ? t.payload.result : T).map((e) => n.recommendations[e]);
                            return { ...e, [s]: { ...e[s], fetchStatus: _.ZP.LOADED, recommendations: o } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const P = [],
                T = [],
                x = (e, { displayLocation: t, similarToUserId: s }) => {
                    const n = e[v][C({ displayLocation: t, similarToUserId: s })];
                    return n && n.recommendations ? n.recommendations : P;
                },
                L = (e, { displayLocation: t, similarToUserId: s }) => {
                    const n = e[v][C({ displayLocation: t, similarToUserId: s })];
                    return n ? n.fetchStatus : _.ZP.NONE;
                },
                U = (e) => (t, s, n) => {
                    const o = s(),
                        { displayLocation: i, similarToUserId: a } = e,
                        c = x(o, { displayLocation: i, similarToUserId: a }),
                        l = L(o, { displayLocation: i, similarToUserId: a }) === _.ZP.LOADED;
                    return c && l
                        ? Promise.resolve(r())
                        : t(
                              (
                                  (e) =>
                                  (t, s, { api: n, featureSwitches: r }) => {
                                      const { displayLocation: o, itsInterests: i, limit: a = E, similarToUserId: c } = e,
                                          l = "profile_accounts_sidebar" === o && r.isTrue("rweb_recommendations_sidebar_graphql_enabled");
                                      return (0, b._O)(t, { request: l ? n.withEndpoint(g).fetchSidebarUserRecommendations : n.withEndpoint(g).fetch, params: { display_location: o, itsInterests: i, limit: a, user_id: c } })({ actionTypes: { REQUEST: I, SUCCESS: S, FAILURE: w }, context: "FETCH_RECOMMENDATIONS", meta: { displayLocation: o, similarToUserId: c } }, (e) => {
                                          if (e && e.entities) return [(0, k.dP)(e.entities)];
                                      });
                                  }
                              )(e),
                          );
                };
        },
        164936: (e, t, s) => {
            "use strict";
            s.d(t, { ZP: () => u, r1: () => l });
            var n = s(15022),
                r = s(202784),
                o = (s(585488), s(512549)),
                i = s(952793),
                a = s(535338);
            const c = n.Z,
                l = ({ actions: e, jobId: t }) => {
                    const { jobData: s, viewer: n } = (0, a.p)(c, { jobId: t }),
                        o = s?.result?.id ?? "",
                        i = s?.result?.user_sentiment;
                    return r.createElement(d, { actions: e, jobId: t, relayId: o, userRelayId: n?.user_results?.result?.__id, userSentiment: i });
                },
                d = ({ actions: e, jobId: t, relayId: s, userRelayId: n, userSentiment: a }) => {
                    const c = (0, i.hC)("recruiting_job_recommendations_enabled");
                    return e && 0 !== e.length && c ? r.createElement(r.Fragment, null, e.includes(o.pN) && r.createElement(o.ZP, { jobId: t, relayId: s, type: o.pN, userRelayId: n, userSentiment: a }), e.includes(o.h5) && r.createElement(o.ZP, { jobId: t, relayId: s, type: o.h5, userRelayId: n, userSentiment: a })) : null;
                },
                u = d;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.WideLayout-9f4db315.53fad13a.js.map
