(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.WideLayout-9f4db315"],
    {
        544118: (e) => {
            e.exports = { queryId: "ZVA-uHHezkK6TUkHH-a6hQ", operationName: "SidebarUserRecommendations", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        616753: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { default: () => r });
            const r = o(797553).default;
        },
        333241: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => D });
            o(136728);
            var r = o(202784),
                n = o(638236),
                s = o(811176),
                a = o(674132),
                i = o.n(a),
                l = o(415506),
                d = o(516951),
                c = o(443781),
                u = o(376293),
                m = o(847607),
                h = o(417714),
                p = o(988823);
            const f = "block",
                _ = "mute",
                y = "removeFollower",
                b = "report",
                I = "share",
                g = i().j7bb1a43,
                w = i().hef5960c,
                D = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, c.QZ)(),
                        { onBlock: o, onClose: a, onMute: i, onRemoveFollower: p, onReportUser: D, onShare: E, onUnblock: P, onUnmute: v, user: S } = e,
                        Z = [],
                        k = (t, o) => {
                            const { confirm: r, onClose: n } = e;
                            if (t) {
                                const { label: e, ...s } = t;
                                r({ confirmButtonLabel: e, ...s })
                                    .then(o, d.Z)
                                    .finally(n);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !S.protected &&
                        !S.blocking &&
                        !S.blocked_by &&
                        Z.push({
                            Icon: n.Z,
                            onClick: () => {
                                a(), E();
                            },
                            testID: I,
                            text: w,
                        });
                    !S.blocking &&
                        Z.push({
                            ...(0, m.N1)(
                                S,
                                () => {
                                    a(), i();
                                },
                                () => {
                                    a(), v();
                                },
                            ),
                            testID: _,
                        });
                    S.followed_by &&
                        Z.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    k(e, p);
                                },
                                user: S,
                            }),
                            testID: y,
                        }),
                        Z.push((0, u.op)({ blockAction: (e) => k(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => k(e, P), user: S })),
                        Z.push({
                            Icon: l.default,
                            onClick: () => {
                                a(), D();
                            },
                            testID: b,
                            text: g({ screenName: S.screen_name }),
                        });
                    const M = Z.map(({ Icon: e, onClick: t, testID: o, text: r }) => ({ text: r, onClick: t, Icon: e, testID: o }));
                    return r.createElement(s.Z, { items: M, onCloseRequested: a });
                });
        },
        471957: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => Z });
            var r = o(626926),
                n = o(202784),
                s = o(325686),
                a = (o(585488), o(277660)),
                i = o.n(a),
                l = o(392237),
                d = o(725405),
                c = o(535338),
                u = o(164936),
                m = (o(136728), o(107267)),
                h = o(731708),
                p = o(519172),
                f = o(601413),
                _ = o(952428),
                y = o(823161),
                b = o(757483),
                I = o(457458),
                g = o(412876),
                w = o(549599);
            const D = ({ fallbackName: e, user: t }) => {
                    const o = i()(w.fR, t);
                    return o && o.legacy && o.legacy.name && o.legacy.screen_name ? n.createElement(h.ZP, { size: "subtext2", style: E.userName }, n.createElement(s.Z, { style: E.name }, n.createElement(h.ZP, { numberOfLines: 1 }, o.legacy.name), n.createElement(p.Z, { isVerified: o.verification?.verified ?? !1, verifiedType: o.verification?.verified_type ?? void 0 })), n.createElement(f.Z, { screenName: o.legacy.screen_name, size: "subtext2" })) : e ? n.createElement(h.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                E = l.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, inactiveItem: { borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, activeItem: { backgroundColor: b.Z.hexToCss(e.colors.primary, 0.25) }, itemRow: { display: "flex", flexDirection: "row", gap: 16 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, userName: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: 4 }, name: { flexWrap: "nowrap", flexDirection: "row", flexShrink: 1 } })),
                P = ({ companyProfile: e, formattedSalary: t, jobId: o, jobLocation: r, jobTitle: a, onClick: i, renderActions: l, salaryInterval: d, user: c, withBottomBorder: u = !0 }) => {
                    const { jobId: p } = (0, m.useParams)(),
                        f = n.useMemo(() => ({ label: a }), [a]),
                        b = n.useMemo(() => {
                            const e = [E.listContainer];
                            return p === o ? e.push(E.activeItem) : u && e.push(E.inactiveItem), e;
                        }, [p, o, u]);
                    return n.createElement(_.Z, { onClick: i, role: "listitem", style: b }, n.createElement(s.Z, { style: E.itemRow }, c ? n.createElement(g.Y, { size: "xLarge", user: c }) : n.createElement(y.default, { shape: "square", size: "xLarge", uri: e?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), n.createElement(s.Z, { style: E.items }, n.createElement(h.ZP, { hoverLabel: f, numberOfLines: 2, size: "subtext1", weight: "bold" }, a), n.createElement(D, { fallbackName: e?.core?.name, user: c }), n.createElement(h.ZP, { color: "gray700", size: "subtext2" }, r), t ? n.createElement(h.ZP, { color: "gray700", size: "subtext2" }, (0, I.M)(t, d)) : null)), l && n.createElement(s.Z, null, l()));
                },
                v = r.Z,
                S = l.default.create((e) => ({ actions: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, marginStart: e.spaces.space56, marginTop: e.spaces.space12 } })),
                Z = ({ actions: e, companyProfile: t, job: o, jobId: r, jobIndex: a, onClick: l, relayId: m, user: h, userSentiment: p, withBottomBorder: f = !0 }) => {
                    const _ = (0, d.Z)(),
                        { viewer: y } = (0, c.p)(v, {}),
                        b = i()(w.qV, o),
                        I = i()(w.dB, t),
                        g = y?.user_results?.result?.__id,
                        D = n.useCallback(() => {
                            _.scribe({ action: "click", component: "job_search_list_item", element: "job", data: { items: [{ id: r, position: a }] } }), l();
                        }, [_, r, a, l]),
                        E = n.useCallback(() => n.createElement(s.Z, { style: S.actions }, n.createElement(u.ZP, { actions: e, jobId: r, relayId: m, userRelayId: g, userSentiment: p })), [e, r, m, g, p]);
                    return b && b.title && b.location ? n.createElement(P, { companyProfile: I, formattedSalary: b.formatted_salary, jobId: r, jobLocation: b.location, jobTitle: b.title, onClick: D, renderActions: E, salaryInterval: b.salary_interval, user: h, withBottomBorder: f }) : null;
                };
        },
        549599: (e, t, o) => {
            "use strict";
            o.d(t, { KM: () => y, ZP: () => b, dB: () => f, fR: () => _, qV: () => p });
            o(136728);
            var r = o(501527),
                n = o(176811),
                s = o(436065),
                a = o(891717),
                i = o(202784),
                l = (o(585488), o(277660)),
                d = o.n(l),
                c = o(107267),
                u = o(708852),
                m = o(471957),
                h = o(512549);
            const p = a.Z,
                f = s.Z,
                _ = n.Z,
                y = r.Z,
                b = ({ item: e, itemId: t, itemIndex: o }) => {
                    const r = (0, u.Ji)(),
                        n = (0, c.useHistory)(),
                        s = (0, c.useLocation)(),
                        a = d()(y, e),
                        l = a?.core,
                        p = a?.user_results?.result,
                        f = a?.company_profile_results?.result,
                        _ = a?.id || "",
                        b = a?.user_sentiment,
                        I = i.useCallback(() => {
                            r ? n.push({ pathname: `/jobs/${t}`, query: s.query }) : n.push({ pathname: `/m/jobs/${t}`, query: s.query });
                        }, [n, r, t, s.query]);
                    return a && l ? i.createElement(m.Z, { actions: [h.h5], companyProfile: f, job: l, jobId: t, jobIndex: o, onClick: I, relayId: _, user: p, userSentiment: b }) : null;
                };
        },
        512549: (e, t, o) => {
            "use strict";
            o.d(t, { ZP: () => D, h5: () => b, pN: () => I, tv: () => y });
            var r = o(643331),
                n = o(202784),
                s = o(325686),
                a = (o(585488), o(351743)),
                i = o.n(a),
                l = o(530732),
                d = o(731708),
                c = o(392237),
                u = o(106186),
                m = o(258292),
                h = o(616894),
                p = o(443781),
                f = o(292546);
            const _ = r.Z,
                y = (e, t, o) => {
                    const { viewerUserId: r } = (0, p.QZ)(),
                        [s] = i()(_),
                        [a] = (0, f.Z)(),
                        l = a.get("twclid") || null,
                        d = n.useCallback(
                            (e, r) => {
                                const n = e.get(t);
                                if ((n && n.setValue(r, "user_sentiment"), o)) {
                                    const t = e.get(o);
                                    t && t.invalidateRecord();
                                }
                            },
                            [t, o],
                        );
                    return n.useCallback(
                        (t) => {
                            r && s({ variables: { jobId: e, userId: r, sentiment: t, twclid: l }, optimisticUpdater: (e) => d(e, t), updater: (e) => d(e, t) });
                        },
                        [s, d, e, l, r],
                    );
                },
                b = "like",
                I = "dislike",
                g = ({ Icon: e, SelectedIcon: t, activeStyle: o, hoverStyle: r, isSelected: a, label: i, onClick: c, sentiment: u }) => {
                    const m = (e) => (e ? r : a ? o : {});
                    return n.createElement(
                        s.Z,
                        null,
                        n.createElement(l.Z, { interactiveStyles: null, onClick: (e) => c(u, e), style: w.sentimentActionContainer }, ({ isHovered: o }) => n.createElement(n.Fragment, null, a ? n.createElement(t, { style: m(o) }) : n.createElement(e, { style: m(o) }), n.createElement(d.ZP, { size: "subtext2", style: { ...m(o) } }, i))),
                    );
                },
                w = c.default.create((e) => ({ sentimentActionContainer: { display: "flex", flexDirection: "row", flex: 1, gap: 6, alignItems: "center", cursor: "pointer" }, sentimentActionText: { marginTop: e.spaces.space4 }, likeActive: { color: e.colors.blue500 }, likeHover: { color: e.colors.blue700 }, dislikeActive: { color: e.colors.red500 }, dislikeHover: { color: e.colors.red700 } })),
                D = ({ jobId: e, relayId: t, type: o, userRelayId: r, userSentiment: s }) => {
                    const a = y(e, t, r),
                        i = n.useCallback(
                            (e, t) => {
                                t.stopPropagation();
                                a(e !== s ? e : "none");
                            },
                            [a, s],
                        );
                    return o === b ? n.createElement(g, { Icon: u.default, SelectedIcon: m.default, activeStyle: w.likeActive, hoverStyle: w.likeHover, isSelected: s === b, label: "Save job", onClick: i, sentiment: b }) : o === I ? n.createElement(g, { Icon: h.default, SelectedIcon: h.default, activeStyle: w.dislikeActive, hoverStyle: w.dislikeHover, isSelected: s === I, label: "Not interested", onClick: i, sentiment: I }) : null;
                };
        },
        864479: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => a });
            var r = o(807896),
                n = o(202784),
                s = o(771099);
            const a = (e) => (t) => n.createElement(s.$6, null, (o) => n.createElement(e, (0, r.Z)({}, t, { isInSidebar: o })));
        },
        893904: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { StickyView: () => m, default: () => y, roundToNearestDevicePixel: () => u, useStickyViewNotify: () => p });
            var r = o(202784),
                n = o(325686),
                s = o(67877),
                a = o(537392),
                i = o(392237),
                l = o(752624),
                d = o(323265),
                c = o(993547);
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
                            o = e.scrollY();
                        (this._prevScrollY = o), this.setState({ stickyOffset: o + t.top });
                    }
                    this._pendingScrolledBy && (this._handleProgrammaticScroll(this._pendingScrolledBy), (this._pendingScrolledBy = 0));
                }
                componentWillUnmount() {
                    (this._isMounted = !1), this._removeScrollListener && this._removeScrollListener(), this._removeProgrammaticScrollListener && this._removeProgrammaticScrollListener(), void 0 !== this._timeoutId && cancelAnimationFrame(this._timeoutId);
                }
                render() {
                    const { contentOffset: e, position: t, stickyThreshold: o, stickyTop: s } = this.state,
                        a = _[t],
                        i = window.devicePixelRatio || 1,
                        l = u({ cssPixels: o, dpr: i }),
                        d = u({ cssPixels: e, dpr: i }),
                        c = { top: s ? `${l}px` : null, bottom: s ? null : `${l}px` };
                    return r.createElement(n.Z, { ref: this._setContainerRef, style: [_.container, { minHeight: this.state.contentHeight }] }, r.createElement(f, { onNotify: this._forceUpdatePositioning }), r.createElement(n.Z, { style: { marginTop: `${d}px` } }), r.createElement(n.Z, { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, c, a] }, this.props.children));
                }
                _updatePositioning(e = !1) {
                    if (!this._contentNode || !this._containerNode) return;
                    const t = this.props.viewport.scrollY(),
                        o = t - this._prevScrollY;
                    if (Math.abs(o) < 0.5 && !e) return;
                    const { distanceFromBottom: r } = this.props;
                    this._prevScrollY = t;
                    const n = !!this._contentNode && this._contentNode.getBoundingClientRect(),
                        s = !!this._containerNode && this._containerNode.getBoundingClientRect();
                    if (!n || !s) return;
                    const { height: i } = (0, a.iv)(),
                        l = d.ZP.isIOS() ? window.innerHeight : i,
                        c = t + s.top,
                        u = Math.max(n.top - s.top, 0);
                    if (l - n.height >= c) this._updateState({ stickyTop: !0, stickyThreshold: c, contentOffset: 0, stickyOffset: c, contentHeight: n.height, position: "fixed" });
                    else {
                        const e = o > 0,
                            t = e !== this.state.stickyTop,
                            s = window.devicePixelRatio || 1,
                            a = n.bottom - l + r <= 1 / s,
                            i = c - n.top <= 1 / s;
                        if (((e && a) || (!e && i)) && d.ZP.isFirefox()) {
                            const e = r,
                                t = c;
                            this._updateState({ position: "fixed", stickyOffset: c, stickyTop: i, stickyThreshold: i ? t : e, contentOffset: u, contentHeight: n.height });
                        } else {
                            const o = l - n.height - r,
                                s = l - n.height - c;
                            this._updateState({ position: "sticky", stickyTop: e, stickyOffset: c, stickyThreshold: e ? o : s, contentOffset: t ? u : this.state.contentOffset, contentHeight: n.height });
                        }
                    }
                }
                _updateState(e) {
                    const t = this.state.stickyTop !== e.stickyTop,
                        o = this.state.stickyThreshold !== e.stickyThreshold,
                        r = Math.abs(this.state.contentOffset - e.contentOffset) > 0.5,
                        n = Math.abs(this.state.stickyOffset - e.stickyOffset) > 0.5,
                        s = this.state.position !== e.position,
                        a = this.state.contentHeight !== e.contentHeight;
                    (t || o || r || n || s || a) && this.setState(e);
                }
            }
            m.defaultProps = { distanceFromBottom: 10 };
            const h = new l.Z();
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
            const _ = i.default.create((e) => ({ container: { height: "100%" }, sticky: { position: "sticky" }, fixed: { position: "fixed" }, static: { position: "static" } })),
                y = (0, c.Z)(m);
        },
        293988: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => E });
            var r = o(202784),
                n = o(154003),
                s = o(674132),
                a = o.n(s),
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
                y = a().bdba3e1a,
                b = a().c4da7d28,
                I = a().j87c21f4,
                g = a().iebc30ca,
                w = a().dc740eb2;
            class D extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": b, hoverLabel: { label: g }, icon: r.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": y, hoverLabel: { label: I }, icon: r.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: o, userId: r } = this.props;
                    return o(r, { device: e }).catch(t(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const E = _(D);
        },
        130888: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { InThisConversationContainer: () => v, default: () => S });
            var r = o(202784),
                n = o(476984),
                s = o.n(n),
                a = o(674132),
                i = o.n(a),
                l = o(325686),
                d = o(844685),
                c = o(62857);
            const u = (e) => !e.protected || !!e.following,
                m = r.memo(function (e) {
                    const { headerText: t, participantIds: o } = e;
                    return r.createElement(l.Z, { "aria-label": t, role: "complementary" }, r.createElement(d.Z, { text: t }), r.createElement(c.Z, { filterPredicate: u, userIds: o.slice(0, 3) }));
                }),
                h = m;
            var p = o(668214),
                f = o(390387),
                _ = o(836255),
                y = o(919022),
                b = (o(136728), o(175848)),
                I = o(166852);
            const g = (e, t, o) => {
                    const r = o === t,
                        n = e.unmentioned_user_ids?.includes(t);
                    return r || !n;
                },
                w = (e, t) => (e.entities?.user_mentions || []).filter((o) => g(e, o.id_str, t)).map((e) => e.id_str) || [],
                D = (e, t) => t.focalTweetId,
                E = (0, p.Z)()
                    .propsFromState(() => ({ focalTweetId: D, viewerUserId: f._h, tweetMap: _.Z.selectAll, users: y.ZP.selectAll }))
                    .adjustStateProps(({ focalTweetId: e, tweetMap: t, users: o, viewerUserId: r }) => {
                        const n = e && t[e];
                        if (!n) return { participantIds: [] };
                        const s = [n.user, ...w(n, r), ...((a = n), b.ZP.mergeTaggedUsers((a.extended_entities && a.extended_entities.media) || []).map((e) => e.user_id))];
                        var a;
                        const i = n.quoted_status && t[n.quoted_status];
                        return i && (s.push(...((e, t) => (g(e, e.user, t) ? [e.user] : []))(i, r)), s.push(...w(i, r))), { participantIds: (0, I.Z)(s).filter((e) => "string" == typeof e && void 0 !== o[e]?.following) };
                    })
                    .withAnalytics({ component: "in_this_conversation" }),
                P = i().j88f27d8;
            function v({ participantIds: e }) {
                const t = (function (e) {
                    const t = r.useRef(e);
                    return s()(e, t.current) ? t.current : ((t.current = e), e);
                })(e);
                return t.length > 0 ? r.createElement(h, { headerText: P, participantIds: t }) : null;
            }
            const S = E(v);
        },
        741494: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { default: () => L });
            o(136728);
            var r = o(669506),
                n = o(202784),
                s = o(325686),
                a = (o(585488), o(277660)),
                i = o.n(a),
                l = o(107267),
                d = o(844685),
                c = o(731708),
                u = o(154003),
                m = o(708852),
                h = o(392237),
                p = o(674132),
                f = o.n(p),
                _ = o(293723),
                y = o(399398),
                b = o(471957),
                I = o(549599),
                g = o(535338),
                w = o(736063);
            const D = f().fb15ec28,
                E = f().ece910f0,
                P = f().jd08bc14,
                v = f().de0a4a72,
                S = f().fc5bfd96,
                Z = r.Z,
                k = () => n.createElement(s.Z, null, n.createElement(d.Z, { text: D }), n.createElement(s.Z, { style: C.content }, n.createElement(s.Z, { style: C.bulletRow }, n.createElement(c.ZP, null, n.createElement(_.default, null)), n.createElement(c.ZP, { size: "subtext1" }, E)), n.createElement(s.Z, { style: C.bulletRow }, n.createElement(c.ZP, null, n.createElement(_.default, null)), n.createElement(c.ZP, { size: "subtext1" }, P)), n.createElement(s.Z, { style: C.bulletRow }, n.createElement(c.ZP, null, n.createElement(_.default, null)), n.createElement(c.ZP, { size: "subtext1" }, v)), n.createElement(u.ZP, { link: "/jobs/get-recommendations", size: "small", type: "brandFilled" }, S))),
                M = ({ recommendation: e, recommendationId: t, recommendationIndex: o }) => {
                    const r = (0, m.Ji)(),
                        s = (0, l.useHistory)(),
                        a = i()(I.KM, e),
                        d = a?.core,
                        c = a?.user_results?.result,
                        u = a?.company_profile_results?.result,
                        h = a?.id || "",
                        p = a?.user_sentiment,
                        f = n.useCallback(() => {
                            r ? s.push(`/jobs/recommended/${t}`) : s.push(`/m/jobs/recommended/${t}`);
                        }, [s, r, t]);
                    return a && d ? n.createElement(b.Z, { actions: [], companyProfile: u, job: d, jobId: t, jobIndex: o, onClick: f, relayId: h, user: c, userSentiment: p, withBottomBorder: !1 }) : null;
                },
                C = h.default.create((e) => ({ content: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16, gap: e.spaces.space16 }, bulletRow: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center" } })),
                A = ({ isSidebarModule: e }) => {
                    const t = (0, g.p)(Z, {}),
                        o = t?.viewer_v2.user_results.result.matching_profile,
                        r = t?.viewer_v2.user_results.result.job_recommendations_results;
                    if (!t || (o?.consented_at && !r?.length)) return null;
                    const a = ({ children: t }) => (e ? n.createElement(y.g, null, t) : n.createElement(n.Fragment, null, t));
                    return n.createElement(
                        a,
                        null,
                        o?.consented_at ? null : n.createElement(k, null),
                        o?.consented_at && r?.length && r.length > 0
                            ? n.createElement(
                                  s.Z,
                                  null,
                                  n.createElement(d.Z, { text: "Recommended jobs" }),
                                  r.map((e, t) => (e.result ? n.createElement(M, { key: e.rest_id, recommendation: e.result, recommendationId: e.rest_id, recommendationIndex: t }) : null)),
                              )
                            : null,
                    );
                },
                T = { context: "JobRecommendationsModule" },
                L = (e) => n.createElement(w.H, { errorConfig: T }, n.createElement(A, e));
        },
        62857: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => Z });
            var r = o(807896),
                n = o(202784),
                s = o(476984),
                a = o.n(s),
                i = o(674132),
                l = o.n(i),
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
                    o.map((o, r) => (t ? t(o) : n.createElement(m.ZP, { decoration: m.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: o, promotedItemType: h.bj.USER, userId: o, withFollowsYou: !0 }))),
                );
            var _ = o(312771),
                y = o(71620),
                b = o(973572),
                I = o(668214),
                g = o(919022);
            const w = (e, t) => t.userIds,
                D = (e, t) => {
                    const { filterPredicate: o = (e) => !!e, userIds: r } = t;
                    return r.filter((t) => {
                        const r = g.ZP.select(e, t);
                        return !!r && o(r);
                    });
                },
                E = (e, t) => {
                    const { userIds: o } = t;
                    return o.reduce((t, o) => {
                        const r = g.ZP.selectFetchStatus(e, o);
                        return r && (t[o] = r === _.ZP.NONE ? _.ZP.LOADING : r), t;
                    }, {});
                },
                P = (0, I.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, b.Z)(D, (e) => e),
                        fetchStatus: (0, b.Z)(D, E, w, (e, t, o) => {
                            let r = _.ZP.LOADED;
                            for (let n = 0; n < o.length; n++) {
                                const s = o[n];
                                if (-1 === e.indexOf(s)) {
                                    const e = t[s] || _.ZP.LOADING;
                                    r = r === _.ZP.LOADED ? e : r;
                                }
                                if (r === _.ZP.LOADED) break;
                            }
                            return r;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: g.ZP.fetchManyIfNeeded })),
                v = l().f5b426c2;
            class S extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: o, fetchUsersIfNeeded: s, filterPredicate: a, userIds: i, ...l } = this.props;
                            return n.createElement(f, (0, r.Z)({}, l, { userIds: e }));
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
                    return n.createElement(c.Z, { "aria-label": v, fetchStatus: this.state.allUsersUnavailable ? _.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: o, userIds: r } = this.props;
                    o(r).then(
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
            const Z = P(S);
        },
        912937: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { WhoToFollowContainer: () => q, default: () => $ });
            var r = o(202784),
                n = o(325686),
                s = o(392237),
                a = o(674132),
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
            const y = r.lazy(() => window.__SSP_PROMISE__.then(() => ({ default: w }))),
                b = new Set(),
                I = {};
            let g = 0;
            function w({ fallbackSlotId: e, primarySlotId: t }) {
                const o = r.useRef("ad-" + g++).current,
                    [s, a] = r.useState(""),
                    i = r.useRef(!1),
                    l = r.useRef(!1),
                    { userClaims: d } = r.useContext(_.rC),
                    c = d.isAnyPremiumSubscriber(),
                    u = "rtl" === document?.documentElement?.getAttribute("dir"),
                    m = r.useCallback(() => {
                        window.googletag &&
                            i.current &&
                            !l.current &&
                            window.googletag.cmd.push(() => {
                                if (!i.current) return;
                                u && window.googletag.pubads().setTargeting("rtl", "true");
                                const r = `adEventHandler_${o}`;
                                I[r] && (window.googletag.pubads().removeEventListener("slotRenderEnded", I[r]), delete I[r]),
                                    (I[r] = (o) => {
                                        i.current && (o.isEmpty || (o.slot.getSlotElementId() === e ? a("fallback") : o.slot.getSlotElementId() === t && "" === s && a("primary")));
                                    }),
                                    window.googletag.pubads().addEventListener("slotRenderEnded", I[r]);
                                if (!b.has(t) || !b.has(e)) b.has(e) || (window.googletag.display(e), b.add(e)), b.has(t) || (window.googletag.display(t), b.add(t));
                                else {
                                    const o = window.googletag
                                        .pubads()
                                        .getSlots()
                                        .filter((o) => {
                                            const r = o.getSlotElementId();
                                            return r === t || r === e;
                                        });
                                    o.length > 0 && window.googletag.pubads().refresh(o);
                                }
                                l.current = !0;
                            });
                    }, [e, t, u, s, o]);
                if (
                    (r.useEffect(() => {
                        if (c) return;
                        i.current = !0;
                        const r = () => {
                            const o = document.getElementById(t),
                                r = document.getElementById(e);
                            return (
                                !(!o || !r) &&
                                (setTimeout(() => {
                                    i.current && m();
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
                            i.current = !1;
                            const e = `adEventHandler_${o}`;
                            window.googletag &&
                                I[e] &&
                                window.googletag.cmd.push(() => {
                                    try {
                                        window.googletag.pubads().removeEventListener("slotRenderEnded", I[e]), delete I[e];
                                    } catch (e) {}
                                });
                        };
                    }, [c, t, e, m, o]),
                    c)
                )
                    return null;
                const h = [D.adContainer, !s && D.emptyContainer];
                return r.createElement(n.Z, { style: h }, r.createElement(n.Z, { id: t, style: [D.adSlot, "primary" !== s && D.hiddenSlot] }), r.createElement(n.Z, { id: e, style: [D.adSlot, "fallback" !== s && D.hiddenSlot] }));
            }
            const D = s.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space12, borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, adContainer: { minHeight: 250, minWidth: 300, width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", position: "relative" }, emptyContainer: { minHeight: 0, height: 0, overflow: "hidden" }, adSlot: { width: "100%", height: "100%", position: "absolute", top: 0, start: 0, end: 0, minWidth: 300, minHeight: 250 }, hiddenSlot: { display: "none" } })),
                E = function (e) {
                    return r.createElement(f.Z, { style: D.root }, r.createElement(r.Suspense, { fallback: r.createElement(n.Z, { style: D.emptyContainer }) }, r.createElement(y, e)));
                },
                P = i().a526aa66,
                v = i().ef625010,
                S = i().d228a9a0,
                Z = (0, p.Z)(({ isInSidebar: e, userId: t, userIds: o, withProfileHeaderText: s }) => {
                    const a = (0, m.hC)("rweb_ssp_ads_enabled"),
                        i = `/i/connect_people?user_id=${t}`,
                        l = o.length > 0;
                    return r.createElement(n.Z, { "aria-label": P, role: "complementary" }, r.createElement(d.Z, { text: s ? v : P }), r.createElement(u.Z, { displayMode: h.Z.UserCompact, userIds: o }), a && l && r.createElement(E, { fallbackSlotId: "div-gpt-ad-1740520505566-0", primarySlotId: "div-gpt-ad-1738265577622-0" }), l && r.createElement(c.Z, { link: i, text: S, withBottomRadius: !0, withDarkerInteractiveBackground: e }));
                });
            var k = o(967977),
                M = o(942893),
                C = o(312771),
                A = o(71620),
                T = o(973572),
                L = o(668214),
                x = o(994305),
                U = o(919022);
            const R = "profile_accounts_sidebar",
                O = (e, t) => x.Ic(e, { displayLocation: R, similarToUserId: t.userId }),
                N = (e, t) => x.UD(e, { displayLocation: R, similarToUserId: t.userId }),
                F = (e, t) => {
                    const o = O(e, t),
                        r = [];
                    return (
                        o.forEach(({ user_id: t }) => {
                            const o = U.ZP.select(e, t);
                            o && r.push(o);
                        }),
                        r
                    );
                },
                j = (0, L.Z)()
                    .propsFromState(() => ({ fetchStatus: N, recommendations: O, users: (0, T.Z)(F, (e) => e) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, A.zr)("WHO_TO_FOLLOW_CONTAINER"), fetchRecommendationsIfNeeded: x.yY }))
                    .withAnalytics({ component: "suggest_who_to_follow" }),
                H = i().fd6473fa,
                B = { element: "user", action: "results" };
            class q extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = () => {
                            const { recommendations: e, userId: t, withProfileHeaderText: o } = this.props,
                                n = e && e.map((e) => e.user_id);
                            return r.createElement(Z, { userId: t, userIds: n, withProfileHeaderText: o });
                        }),
                        (this._handleImpression = (e) => {
                            const { analytics: t, users: o } = this.props,
                                r = e && e.map((e) => ({ ...M.Z.forUser(e.user_id), suggestion_details: { source_data: e.token } }));
                            t.scribe({ ...B, data: { items: r } }),
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
                    return e === C.ZP.FAILED || this._hasEmptySuggestionList() ? null : r.createElement(n.Z, { style: [z.root, t] }, r.createElement(l.Z, { "aria-label": H, fetchStatus: e, render: this._renderContent }));
                }
                _fetchRecommendations(e) {
                    const { createLocalApiErrorHandler: t, fetchRecommendationsIfNeeded: o, userId: r } = e;
                    o({ limit: 3, displayLocation: R, similarToUserId: r }).catch(t(k.C));
                }
                _hasEmptySuggestionList() {
                    const { fetchStatus: e, recommendations: t } = this.props;
                    return e === C.ZP.LOADED && 0 === t.length;
                }
            }
            const z = s.default.create((e) => ({ root: { minHeight: "15rem" } })),
                $ = j(q);
        },
        292546: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => s });
            o(543673), o(240753), o(128399), o(136728);
            var r = o(202784),
                n = o(107267);
            const s = () => {
                const e = (0, n.useLocation)(),
                    t = (0, n.useHistory)(),
                    [o, s] = r.useState(new URLSearchParams(e.search));
                r.useEffect(() => {
                    s(new URLSearchParams(e.search));
                }, [e.search]);
                const a = r.useCallback(
                    (r, n) => {
                        const s = new URLSearchParams(o);
                        s.set(r, n), t.push(`${e.pathname}?${s.toString()}`);
                    },
                    [t, e.pathname, o],
                );
                return [r.useMemo(() => new URLSearchParams(e.search), [e.search]), a];
            };
        },
        684511: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => r });
            o(202784);
            const r = (0, o(523561).Z)({
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
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("loader.PushNotificationsPrompt"),
                    ]).then(o.bind(o, 529629)),
            });
        },
        545334: (e, t, o) => {
            "use strict";
            o.d(t, { d: () => n });
            var r = o(674132);
            const n = o.n(r)().gf5e9ea6;
        },
        916585: (e, t, o) => {
            "use strict";
            o.d(t, { k: () => a });
            var r = o(674132),
                n = o.n(r),
                s = o(437358);
            const a = (e, t) => {
                const { id_str: o, screen_name: r } = e,
                    a = (0, n().d78131b9)({ screenName: r });
                return { Icon: s.default, text: a, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: t };
            };
        },
        847607: (e, t, o) => {
            "use strict";
            o.d(t, { Aq: () => u, FK: () => b, GS: () => i, N1: () => h, PY: () => m, X6: () => I, cm: () => l });
            o(202784);
            var r = o(674132),
                n = o.n(r),
                s = o(391366),
                a = o(40904);
            const i = n().hb568af4,
                l = n().bb1cbeb6,
                d = (n().h2f62206, n().e67b2d65),
                c = n().f05597b3,
                u = (e) => d({ screenName: e }),
                m = (e) => c({ screenName: e }),
                h = (e, t, o) => {
                    const { muting: r, screen_name: n } = e;
                    return { text: r ? m(n) : u(n), onClick: r ? o : t, Icon: r ? s.default : a.default };
                },
                p = n().h59f52ee,
                f = n().eea0cbee,
                _ = n().i29533b3,
                y = n().h129c3c3,
                b = (e) => (e ? ((e) => _({ screenName: e }))(e) : p),
                I = (e) => (e ? ((e) => y({ screenName: e }))(e) : f);
        },
        417714: (e, t, o) => {
            "use strict";
            o.d(t, { l: () => c });
            o(202784);
            var r = o(674132),
                n = o.n(r),
                s = o(224823);
            const a = n().b3036480,
                i = n().b3036480,
                l = n().e68b09b4,
                d = n().h27b7407,
                c = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: s.default, text: a, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: l, text: d({ screenName: e.screen_name }) });
        },
        967977: (e, t, o) => {
            "use strict";
            o.d(t, { C: () => s });
            var r = o(516951),
                n = o(615656);
            const s = { [n.ZP.ResourceNotFound]: { customAction: r.Z } };
        },
        48886: (e, t, o) => {
            "use strict";
            o.d(t, { q: () => n });
            var r = o(674132);
            const n = { defaultToast: { text: o.n(r)().a30b63da }, showToast: !0 };
        },
        860174: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => s });
            var r = o(615656),
                n = o(51525);
            const s = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        988823: (e, t, o) => {
            "use strict";
            o.d(t, { M: () => a });
            var r = o(807896),
                n = o(202784),
                s = o(190286);
            const a = (e) => (t) => {
                const [o, a] = n.useState(null),
                    i = (e) =>
                        new Promise((t, o) => {
                            a({ resolve: t, reject: o, confirmationSheetProps: e });
                        });
                if (o) {
                    const { confirmationSheetProps: e, reject: t, resolve: i } = o;
                    return n.createElement(
                        s.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                t(), a(null);
                            },
                            onConfirm: () => {
                                i(), a(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, r.Z)({}, t, { confirm: i }));
            };
        },
        694180: (e, t, o) => {
            "use strict";
            o.d(t, { cM: () => _, dS: () => f, iY: () => y });
            var r = o(370751),
                n = o(399896),
                s = o(663550),
                a = o(499627),
                i = o(917799);
            const l = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([s.dx.IMPRESSION, s.dx.DWELL]),
                m = (0, r.Z)([s.AJ.TREND_VIEW, s.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: r }) => {
                        const { event: s, impression_id: a, promoted_trend_id: l } = e,
                            c = `trend-${l}-${s}`;
                        if (m.has(s) && p(o(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: s, impression_id: a };
                        return (0, i._O)(t, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(s)) return [h(c)];
                        });
                    },
                _ =
                    ({ disclosureType: e, itemId: t, itemType: o, params: r }) =>
                    (s, a, { api: l }) => {
                        const { event: c, impression_id: m } = r,
                            f = `${o}-${t ?? "undefined"}-${m ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && p(a(), f)) return Promise.resolve();
                        const _ = e && "earned" === e.toLowerCase() ? "1" : null,
                            y = { ...r, earned: _, epoch_ms: Date.now() };
                        return (0, i._O)(s, { params: y, request: l.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: y }, (e, t) => {
                            if (!t && u.has(c)) return [h(f)];
                        });
                    },
                y =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, i._O)(t, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
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
            o.d(t, { yY: () => T, UD: () => A, Ic: () => C });
            var r = o(360917),
                n = o.n(r),
                s = o(506899),
                a = o(414742),
                i = o(125199);
            const l = new s.fK.Entity("recommendations", { user: i.Z }, { idAttribute: (e) => e.user?.rest_id });
            var d = o(544118),
                c = o.n(d),
                u = o(304819);
            const m = new s.fK.Entity("recommendations", { user: u.Z }, { idAttribute: (e) => e.user?.id_str });
            var h = o(387466),
                p = o(120071);
            const f = (e) => ({ ...p.k(e), excluded: [], pc: !0 }),
                _ = ({ apiClient: e, featureSwitches: t }) => ({
                    fetch(o, r = {}) {
                        const n = { ...f(t), ...o, ...(0, h.Y)(t) };
                        return e.get("users/recommendations", n, r).then((e) => (0, s.Fv)(e, [m]));
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
                                    [l],
                                );
                            }),
                });
            var y = o(499627),
                b = o(917799),
                I = o(312771),
                g = o(56519);
            const w = "recommendations",
                D = 30,
                E = "rweb/recommendations/FETCH_REQUEST",
                P = "rweb/recommendations/FETCH_SUCCESS",
                v = "rweb/recommendations/FETCH_FAILURE",
                S = {},
                Z = ({ displayLocation: e, similarToUserId: t }) => e + (t ? `_${t}` : "");
            y.Z.register({
                [w]: function (e = S, t) {
                    if (!t?.meta) return e;
                    switch (t.type) {
                        case E: {
                            const o = Z(t.meta);
                            return { ...e, [o]: { ...e[o], fetchStatus: I.ZP.LOADING } };
                        }
                        case v: {
                            const o = Z(t.meta);
                            return { ...e, [o]: { ...e[o], fetchStatus: I.ZP.FAILED } };
                        }
                        case P: {
                            const o = Z(t.meta),
                                r = t.payload && t.payload.entities ? t.payload.entities : { recommendations: n() },
                                s = (t.payload && t.payload.result ? t.payload.result : M).map((e) => r.recommendations[e]);
                            return { ...e, [o]: { ...e[o], fetchStatus: I.ZP.LOADED, recommendations: s } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const k = [],
                M = [],
                C = (e, { displayLocation: t, similarToUserId: o }) => {
                    const r = e[w][Z({ displayLocation: t, similarToUserId: o })];
                    return r && r.recommendations ? r.recommendations : k;
                },
                A = (e, { displayLocation: t, similarToUserId: o }) => {
                    const r = e[w][Z({ displayLocation: t, similarToUserId: o })];
                    return r ? r.fetchStatus : I.ZP.NONE;
                },
                T = (e) => (t, o, r) => {
                    const s = o(),
                        { displayLocation: a, similarToUserId: i } = e,
                        l = C(s, { displayLocation: a, similarToUserId: i }),
                        d = A(s, { displayLocation: a, similarToUserId: i }) === I.ZP.LOADED;
                    return l && d
                        ? Promise.resolve(n())
                        : t(
                              (
                                  (e) =>
                                  (t, o, { api: r, featureSwitches: n }) => {
                                      const { displayLocation: s, itsInterests: a, limit: i = D, similarToUserId: l } = e,
                                          d = "profile_accounts_sidebar" === s && n.isTrue("rweb_recommendations_sidebar_graphql_enabled");
                                      return (0, b._O)(t, { request: d ? r.withEndpoint(_).fetchSidebarUserRecommendations : r.withEndpoint(_).fetch, params: { display_location: s, itsInterests: a, limit: i, user_id: l } })({ actionTypes: { REQUEST: E, SUCCESS: P, FAILURE: v }, context: "FETCH_RECOMMENDATIONS", meta: { displayLocation: s, similarToUserId: l } }, (e) => {
                                          if (e && e.entities) return [(0, g.dP)(e.entities)];
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
            var r = o(161821),
                n = o(390387),
                s = o(836255),
                a = o(255117),
                i = o(166506),
                l = o(919022);
            const d =
                (e, t) =>
                (o, d, { api: c, featureSwitches: u }) =>
                    o(l.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            l = (0, r.Z)(s.Z.selectAll(t)).reduce((o, r) => {
                                if (null != r)
                                    if (r.user === e) o[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = s.Z.select(t, r.retweeted_status);
                                        n?.user === e && (o[r.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            c = (0, n._h)(d()),
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
            var r = o(503768),
                n = o(750085),
                s = o(962741),
                a = o(466015),
                i = o(919022),
                l = o(218951);
            const d = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                c = (e) => (t, o) => {
                    const r = o();
                    t(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const t = e.type === s.ZP.User ? e.content.id : "",
                                    o = i.ZP.select(r, t);
                                return o && !o.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, o) => {
                    if (!o.selectEntries(t).find((t) => t.type === s.ZP.User && t.content.id === e)) {
                        const t = (0, a.OD)(e),
                            r = (0, a.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return o.injectEntry(r);
                    }
                };
        },
        164936: (e, t, o) => {
            "use strict";
            o.d(t, { ZP: () => u, r1: () => d });
            var r = o(15022),
                n = o(202784),
                s = (o(585488), o(512549)),
                a = o(952793),
                i = o(535338);
            const l = r.Z,
                d = ({ actions: e, jobId: t }) => {
                    const { jobData: o, viewer: r } = (0, i.p)(l, { jobId: t }),
                        s = o?.result?.id ?? "",
                        a = o?.result?.user_sentiment;
                    return n.createElement(c, { actions: e, jobId: t, relayId: s, userRelayId: r?.user_results?.result?.__id, userSentiment: a });
                },
                c = ({ actions: e, jobId: t, relayId: o, userRelayId: r, userSentiment: i }) => {
                    const l = (0, a.hC)("recruiting_job_recommendations_enabled");
                    return e && 0 !== e.length && l ? n.createElement(n.Fragment, null, e.includes(s.pN) && n.createElement(s.ZP, { jobId: t, relayId: o, type: s.pN, userRelayId: r, userSentiment: i }), e.includes(s.h5) && n.createElement(s.ZP, { jobId: t, relayId: o, type: s.h5, userRelayId: r, userSentiment: i })) : null;
                },
                u = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.WideLayout-9f4db315.951428ea.js.map
