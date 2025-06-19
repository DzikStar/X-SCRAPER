(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.WideLayout-9f4db315"],
    {
        801301: (e) => {
            e.exports = { queryId: "IWdZXQ2Hdh_gprXkyn58ug", operationName: "SidebarUserRecommendations", operationType: "query", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        616753: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { default: () => r });
            const r = o(797553).default;
        },
        290402: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => p });
            var r = o(807896),
                n = o(202784),
                s = o(182056),
                a = o(879113),
                i = o(392237),
                l = o(111677),
                c = o.n(l),
                d = o(968478);
            const u = c().aa6e3300,
                m = ({ retryMessage: e, ...t }, o) => {
                    const i = s.Z.isOnline();
                    return n.createElement(a.Z, (0, r.Z)({}, t, { icon: i ? void 0 : n.createElement(d.default, { style: h.icon }), retryMessage: i ? e : u }));
                },
                h = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = n.forwardRef(m);
        },
        333241: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => k });
            o(136728);
            var r = o(202784),
                n = o(638236),
                s = o(811176),
                a = o(111677),
                i = o.n(a),
                l = o(415506),
                c = o(516951),
                d = o(376293),
                u = o(847607),
                m = o(417714),
                h = o(988823);
            const p = "block",
                f = "mute",
                b = "removeFollower",
                y = "report",
                _ = "share",
                g = i().j7bb1a43,
                I = i().hef5960c,
                k = (0, h.M)((e) => {
                    const { onBlock: t, onClose: o, onMute: a, onRemoveFollower: i, onReportUser: h, onShare: k, onUnblock: E, onUnmute: v, user: w } = e,
                        D = [],
                        S = (t, o) => {
                            const { confirm: r, onClose: n } = e;
                            if (t) {
                                const { label: e, ...s } = t;
                                r({ confirmButtonLabel: e, ...s })
                                    .then(o, c.Z)
                                    .finally(n);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !w.protected &&
                        !w.blocking &&
                        !w.blocked_by &&
                        D.push({
                            Icon: n.Z,
                            onClick: () => {
                                o(), k();
                            },
                            testID: _,
                            text: I,
                        });
                    !w.blocking &&
                        D.push({
                            ...(0, u.N1)(
                                w,
                                () => {
                                    o(), a();
                                },
                                () => {
                                    o(), v();
                                },
                            ),
                            testID: f,
                        });
                    w.followed_by &&
                        D.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    S(e, i);
                                },
                                user: w,
                            }),
                            testID: b,
                        }),
                        D.push((0, d.op)({ blockAction: (e) => S(e, t), source: d.SC.FOLLOWERS_LIST, testID: p, unblockAction: (e) => S(e, E), user: w })),
                        D.push({
                            Icon: l.default,
                            onClick: () => {
                                o(), h();
                            },
                            testID: y,
                            text: g({ screenName: w.screen_name }),
                        });
                    const P = D.map(({ Icon: e, onClick: t, testID: o, text: r }) => ({ text: r, onClick: t, Icon: e, testID: o }));
                    return r.createElement(s.Z, { items: P, onCloseRequested: o });
                });
        },
        471957: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => P });
            var r = o(626926),
                n = o(202784),
                s = o(325686),
                a = (o(585488), o(277660)),
                i = o.n(a),
                l = o(392237),
                c = o(725405),
                d = o(535338),
                u = o(164936),
                m = (o(136728), o(107267)),
                h = o(731708),
                p = o(519172),
                f = o(601413),
                b = o(952428),
                y = o(823161),
                _ = o(757483),
                g = o(457458),
                I = o(412876),
                k = o(549599);
            const E = ({ fallbackName: e, user: t }) => {
                    const o = i()(k.fR, t);
                    return o && o.core && o.core.name && o.core.screen_name ? n.createElement(h.ZP, { size: "subtext2", style: v.userName }, n.createElement(s.Z, { style: v.name }, n.createElement(h.ZP, { numberOfLines: 1 }, o.core.name), n.createElement(p.Z, { isVerified: o.verification?.verified ?? !1, verifiedType: o.verification?.verified_type ?? void 0 })), n.createElement(f.Z, { screenName: o.core.screen_name, size: "subtext2" })) : e ? n.createElement(h.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                v = l.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, inactiveItem: { borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, activeItem: { backgroundColor: _.Z.hexToCss(e.colors.primary, 0.25) }, itemRow: { display: "flex", flexDirection: "row", gap: 16 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, userName: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: 4 }, name: { flexWrap: "nowrap", flexDirection: "row", flexShrink: 1 } })),
                w = ({ companyProfile: e, formattedSalary: t, jobId: o, jobLocation: r, jobTitle: a, onClick: i, renderActions: l, salaryInterval: c, user: d, withBottomBorder: u = !0 }) => {
                    const { jobId: p } = (0, m.useParams)(),
                        f = n.useMemo(() => ({ label: a }), [a]),
                        _ = n.useMemo(() => {
                            const e = [v.listContainer];
                            return p === o ? e.push(v.activeItem) : u && e.push(v.inactiveItem), e;
                        }, [p, o, u]);
                    return n.createElement(b.Z, { onClick: i, role: "listitem", style: _ }, n.createElement(s.Z, { style: v.itemRow }, d ? n.createElement(I.Y, { size: "xLarge", user: d }) : n.createElement(y.default, { shape: "square", size: "xLarge", uri: e?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), n.createElement(s.Z, { style: v.items }, n.createElement(h.ZP, { hoverLabel: f, numberOfLines: 2, size: "subtext1", weight: "bold" }, a), n.createElement(E, { fallbackName: e?.core?.name, user: d }), n.createElement(h.ZP, { color: "gray700", size: "subtext2" }, r), t ? n.createElement(h.ZP, { color: "gray700", size: "subtext2" }, (0, g.M)(t, c)) : null)), l && n.createElement(s.Z, null, l()));
                },
                D = r.Z,
                S = l.default.create((e) => ({ actions: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, marginStart: e.spaces.space56, marginTop: e.spaces.space12 } })),
                P = ({ actions: e, companyProfile: t, job: o, jobId: r, jobIndex: a, onClick: l, relayId: m, user: h, userSentiment: p, withBottomBorder: f = !0 }) => {
                    const b = (0, c.Z)(),
                        { viewer: y } = (0, d.p)(D, {}),
                        _ = i()(k.qV, o),
                        g = i()(k.dB, t),
                        I = y?.user_results?.result?.__id,
                        E = n.useCallback(() => {
                            b.scribe({ action: "click", component: "job_search_list_item", element: "job", data: { items: [{ id: r, position: a }] } }), l();
                        }, [b, r, a, l]),
                        v = n.useCallback(() => n.createElement(s.Z, { style: S.actions }, n.createElement(u.ZP, { actions: e, jobId: r, relayId: m, userRelayId: I, userSentiment: p })), [e, r, m, I, p]);
                    return _ && _.title && _.location ? n.createElement(w, { companyProfile: g, formattedSalary: _.formatted_salary, jobId: r, jobLocation: _.location, jobTitle: _.title, onClick: E, renderActions: v, salaryInterval: _.salary_interval, user: h, withBottomBorder: f }) : null;
                };
        },
        549599: (e, t, o) => {
            "use strict";
            o.d(t, { KM: () => y, ZP: () => _, dB: () => f, fR: () => b, qV: () => p });
            o(136728);
            var r = o(501527),
                n = o(176811),
                s = o(436065),
                a = o(891717),
                i = o(202784),
                l = (o(585488), o(277660)),
                c = o.n(l),
                d = o(107267),
                u = o(708852),
                m = o(471957),
                h = o(512549);
            const p = a.Z,
                f = s.Z,
                b = n.Z,
                y = r.Z,
                _ = ({ item: e, itemId: t, itemIndex: o }) => {
                    const r = (0, u.Ji)(),
                        n = (0, d.useHistory)(),
                        s = (0, d.useLocation)(),
                        a = c()(y, e),
                        l = a?.core,
                        p = a?.user_results?.result,
                        f = a?.company_profile_results?.result,
                        b = a?.id || "",
                        _ = a?.user_sentiment,
                        g = i.useCallback(() => {
                            r ? n.push({ pathname: `/jobs/${t}`, query: s.query }) : n.push({ pathname: `/m/jobs/${t}`, query: s.query });
                        }, [n, r, t, s.query]);
                    return a && l ? i.createElement(m.Z, { actions: [h.h5], companyProfile: f, job: l, jobId: t, jobIndex: o, onClick: g, relayId: b, user: p, userSentiment: _ }) : null;
                };
        },
        512549: (e, t, o) => {
            "use strict";
            o.d(t, { ZP: () => E, h5: () => _, pN: () => g, tv: () => y });
            var r = o(643331),
                n = o(202784),
                s = o(325686),
                a = (o(585488), o(351743)),
                i = o.n(a),
                l = o(530732),
                c = o(731708),
                d = o(392237),
                u = o(106186),
                m = o(258292),
                h = o(616894),
                p = o(443781),
                f = o(292546);
            const b = r.Z,
                y = (e, t, o) => {
                    const { viewerUserId: r } = (0, p.QZ)(),
                        [s] = i()(b),
                        [a] = (0, f.Z)(),
                        l = a.get("twclid") || null,
                        c = n.useCallback(
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
                            r && s({ variables: { jobId: e, userId: r, sentiment: t, twclid: l }, optimisticUpdater: (e) => c(e, t), updater: (e) => c(e, t) });
                        },
                        [s, c, e, l, r],
                    );
                },
                _ = "like",
                g = "dislike",
                I = ({ Icon: e, SelectedIcon: t, activeStyle: o, hoverStyle: r, isSelected: a, label: i, onClick: d, sentiment: u }) => {
                    const m = (e) => (e ? r : a ? o : {});
                    return n.createElement(
                        s.Z,
                        null,
                        n.createElement(l.Z, { interactiveStyles: null, onClick: (e) => d(u, e), style: k.sentimentActionContainer }, ({ isHovered: o }) => n.createElement(n.Fragment, null, a ? n.createElement(t, { style: m(o) }) : n.createElement(e, { style: m(o) }), n.createElement(c.ZP, { size: "subtext2", style: { ...m(o) } }, i))),
                    );
                },
                k = d.default.create((e) => ({ sentimentActionContainer: { display: "flex", flexDirection: "row", flex: 1, gap: 6, alignItems: "center", cursor: "pointer" }, sentimentActionText: { marginTop: e.spaces.space4 }, likeActive: { color: e.colors.blue500 }, likeHover: { color: e.colors.blue700 }, dislikeActive: { color: e.colors.red500 }, dislikeHover: { color: e.colors.red700 } })),
                E = ({ jobId: e, relayId: t, type: o, userRelayId: r, userSentiment: s }) => {
                    const a = y(e, t, r),
                        i = n.useCallback(
                            (e, t) => {
                                t.stopPropagation();
                                a(e !== s ? e : "none");
                            },
                            [a, s],
                        );
                    return o === _ ? n.createElement(I, { Icon: u.default, SelectedIcon: m.default, activeStyle: k.likeActive, hoverStyle: k.likeHover, isSelected: s === _, label: "Save job", onClick: i, sentiment: _ }) : o === g ? n.createElement(I, { Icon: h.default, SelectedIcon: h.default, activeStyle: k.dislikeActive, hoverStyle: k.dislikeHover, isSelected: s === g, label: "Not interested", onClick: i, sentiment: g }) : null;
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
                c = o(323265),
                d = o(993547);
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
                        a = b[t],
                        i = window.devicePixelRatio || 1,
                        l = u({ cssPixels: o, dpr: i }),
                        c = u({ cssPixels: e, dpr: i }),
                        d = { top: s ? `${l}px` : null, bottom: s ? null : `${l}px` };
                    return r.createElement(n.Z, { ref: this._setContainerRef, style: [b.container, { minHeight: this.state.contentHeight }] }, r.createElement(f, { onNotify: this._forceUpdatePositioning }), r.createElement(n.Z, { style: { marginTop: `${c}px` } }), r.createElement(n.Z, { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, d, a] }, this.props.children));
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
                        l = c.ZP.isIOS() ? window.innerHeight : i,
                        d = t + s.top,
                        u = Math.max(n.top - s.top, 0);
                    if (l - n.height >= d) this._updateState({ stickyTop: !0, stickyThreshold: d, contentOffset: 0, stickyOffset: d, contentHeight: n.height, position: "fixed" });
                    else {
                        const e = o > 0,
                            t = e !== this.state.stickyTop,
                            s = window.devicePixelRatio || 1,
                            a = n.bottom - l + r <= 1 / s,
                            i = d - n.top <= 1 / s;
                        if (((e && a) || (!e && i)) && c.ZP.isFirefox()) {
                            const e = r,
                                t = d;
                            this._updateState({ position: "fixed", stickyOffset: d, stickyTop: i, stickyThreshold: i ? t : e, contentOffset: u, contentHeight: n.height });
                        } else {
                            const o = l - n.height - r,
                                s = l - n.height - d;
                            this._updateState({ position: "sticky", stickyTop: e, stickyOffset: d, stickyThreshold: e ? o : s, contentOffset: t ? u : this.state.contentOffset, contentHeight: n.height });
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
            const b = i.default.create((e) => ({ container: { height: "100%" }, sticky: { position: "sticky" }, fixed: { position: "fixed" }, static: { position: "static" } })),
                y = (0, d.Z)(m);
        },
        293988: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => v });
            var r = o(202784),
                n = o(154003),
                s = o(111677),
                a = o.n(s),
                i = o(74514),
                l = o(405303),
                c = o(684511),
                d = o(860174),
                u = o(71620),
                m = o(668214),
                h = o(257166),
                p = o(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                b = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                y = a().bdba3e1a,
                _ = a().c4da7d28,
                g = a().j87c21f4,
                I = a().iebc30ca,
                k = a().dc740eb2;
            class E extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": _, hoverLabel: { label: I }, icon: r.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": y, hoverLabel: { label: g }, icon: r.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(c.Z, { fullScreen: !0, message: k }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: o, userId: r } = this.props;
                    return o(r, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const v = b(E);
        },
        130888: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { InThisConversationContainer: () => D, default: () => S });
            var r = o(202784),
                n = o(476984),
                s = o.n(n),
                a = o(111677),
                i = o.n(a),
                l = o(325686),
                c = o(844685),
                d = o(62857);
            const u = (e) => !e.protected || !!e.following,
                m = r.memo(function (e) {
                    const { headerText: t, participantIds: o } = e;
                    return r.createElement(l.Z, { "aria-label": t, role: "complementary" }, r.createElement(c.Z, { text: t }), r.createElement(d.Z, { filterPredicate: u, userIds: o.slice(0, 3) }));
                }),
                h = m;
            var p = o(668214),
                f = o(390387),
                b = o(836255),
                y = o(919022),
                _ = (o(136728), o(175848)),
                g = o(166852);
            const I = (e, t, o) => {
                    const r = o === t,
                        n = e.unmentioned_user_ids?.includes(t);
                    return r || !n;
                },
                k = (e, t) => (e.entities?.user_mentions || []).filter((o) => I(e, o.id_str, t)).map((e) => e.id_str) || [],
                E = (e, t) => t.focalTweetId,
                v = (0, p.Z)()
                    .propsFromState(() => ({ focalTweetId: E, viewerUserId: f._h, tweetMap: b.Z.selectAll, users: y.ZP.selectAll }))
                    .adjustStateProps(({ focalTweetId: e, tweetMap: t, users: o, viewerUserId: r }) => {
                        const n = e && t[e];
                        if (!n) return { participantIds: [] };
                        const s = [n.user, ...k(n, r), ...((a = n), _.ZP.mergeTaggedUsers((a.extended_entities && a.extended_entities.media) || []).map((e) => e.user_id))];
                        var a;
                        const i = n.quoted_status && t[n.quoted_status];
                        return i && (s.push(...((e, t) => (I(e, e.user, t) ? [e.user] : []))(i, r)), s.push(...k(i, r))), { participantIds: (0, g.Z)(s).filter((e) => "string" == typeof e && void 0 !== o[e]?.following) };
                    })
                    .withAnalytics({ component: "in_this_conversation" }),
                w = i().j88f27d8;
            function D({ participantIds: e }) {
                const t = (function (e) {
                    const t = r.useRef(e);
                    return s()(e, t.current) ? t.current : ((t.current = e), e);
                })(e);
                return t.length > 0 ? r.createElement(h, { headerText: w, participantIds: t }) : null;
            }
            const S = v(D);
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
                c = o(844685),
                d = o(731708),
                u = o(154003),
                m = o(708852),
                h = o(392237),
                p = o(111677),
                f = o.n(p),
                b = o(293723),
                y = o(399398),
                _ = o(471957),
                g = o(549599),
                I = o(535338),
                k = o(736063);
            const E = f().fb15ec28,
                v = f().ece910f0,
                w = f().jd08bc14,
                D = f().de0a4a72,
                S = f().fc5bfd96,
                P = r.Z,
                Z = () => n.createElement(s.Z, null, n.createElement(c.Z, { text: E }), n.createElement(s.Z, { style: T.content }, n.createElement(s.Z, { style: T.bulletRow }, n.createElement(d.ZP, null, n.createElement(b.default, null)), n.createElement(d.ZP, { size: "subtext1" }, v)), n.createElement(s.Z, { style: T.bulletRow }, n.createElement(d.ZP, null, n.createElement(b.default, null)), n.createElement(d.ZP, { size: "subtext1" }, w)), n.createElement(s.Z, { style: T.bulletRow }, n.createElement(d.ZP, null, n.createElement(b.default, null)), n.createElement(d.ZP, { size: "subtext1" }, D)), n.createElement(u.ZP, { link: "/jobs/get-recommendations", size: "small", type: "brandFilled" }, S))),
                C = ({ recommendation: e, recommendationId: t, recommendationIndex: o }) => {
                    const r = (0, m.Ji)(),
                        s = (0, l.useHistory)(),
                        a = i()(g.KM, e),
                        c = a?.core,
                        d = a?.user_results?.result,
                        u = a?.company_profile_results?.result,
                        h = a?.id || "",
                        p = a?.user_sentiment,
                        f = n.useCallback(() => {
                            r ? s.push(`/jobs/recommended/${t}`) : s.push(`/m/jobs/recommended/${t}`);
                        }, [s, r, t]);
                    return a && c ? n.createElement(_.Z, { actions: [], companyProfile: u, job: c, jobId: t, jobIndex: o, onClick: f, relayId: h, user: d, userSentiment: p, withBottomBorder: !1 }) : null;
                },
                T = h.default.create((e) => ({ content: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16, gap: e.spaces.space16 }, bulletRow: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center" } })),
                M = ({ isSidebarModule: e }) => {
                    const t = (0, I.p)(P, {}),
                        o = t?.viewer_v2.user_results.result.matching_profile,
                        r = t?.viewer_v2.user_results.result.job_recommendations_results;
                    if (!t || (o?.consented_at && !r?.length)) return null;
                    const a = ({ children: t }) => (e ? n.createElement(y.g, null, t) : n.createElement(n.Fragment, null, t));
                    return n.createElement(
                        a,
                        null,
                        o?.consented_at ? null : n.createElement(Z, null),
                        o?.consented_at && r?.length && r.length > 0
                            ? n.createElement(
                                  s.Z,
                                  null,
                                  n.createElement(c.Z, { text: "Recommended jobs" }),
                                  r.map((e, t) => (e.result ? n.createElement(C, { key: e.rest_id, recommendation: e.result, recommendationId: e.rest_id, recommendationIndex: t }) : null)),
                              )
                            : null,
                    );
                },
                A = { context: "JobRecommendationsModule" },
                L = (e) => n.createElement(k.H, { errorConfig: A }, n.createElement(M, e));
        },
        62857: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => P });
            var r = o(807896),
                n = o(202784),
                s = o(476984),
                a = o.n(s),
                i = o(111677),
                l = o.n(i),
                c = o(615656),
                d = o(290402),
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
            var b = o(312771),
                y = o(71620),
                _ = o(973572),
                g = o(668214),
                I = o(919022);
            const k = (e, t) => t.userIds,
                E = (e, t) => {
                    const { filterPredicate: o = (e) => !!e, userIds: r } = t;
                    return r.filter((t) => {
                        const r = I.ZP.select(e, t);
                        return !!r && o(r);
                    });
                },
                v = (e, t) => {
                    const { userIds: o } = t;
                    return o.reduce((t, o) => {
                        const r = I.ZP.selectFetchStatus(e, o);
                        return r && (t[o] = r === b.ZP.NONE ? b.ZP.LOADING : r), t;
                    }, {});
                },
                w = (0, g.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, _.Z)(E, (e) => e),
                        fetchStatus: (0, _.Z)(E, v, k, (e, t, o) => {
                            let r = b.ZP.LOADED;
                            for (let n = 0; n < o.length; n++) {
                                const s = o[n];
                                if (-1 === e.indexOf(s)) {
                                    const e = t[s] || b.ZP.LOADING;
                                    r = r === b.ZP.LOADED ? e : r;
                                }
                                if (r === b.ZP.LOADED) break;
                            }
                            return r;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: I.ZP.fetchManyIfNeeded })),
                D = l().f5b426c2;
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
                    return n.createElement(d.Z, { "aria-label": D, fetchStatus: this.state.allUsersUnavailable ? b.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: o, userIds: r } = this.props;
                    o(r).then(
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
            const P = w(S);
        },
        912937: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { WhoToFollowContainer: () => q, default: () => W });
            var r = o(202784),
                n = o(325686),
                s = o(392237),
                a = o(111677),
                i = o.n(a),
                l = o(290402),
                c = o(844685),
                d = o(30183),
                u = o(62857),
                m = o(952793),
                h = o(409438),
                p = o(864479),
                f = (o(136728), o(952428)),
                b = o(443781);
            const y = r.lazy(() => window.__SSP_PROMISE__.then(() => ({ default: k }))),
                _ = new Set(),
                g = {};
            let I = 0;
            function k({ fallbackSlotId: e, primarySlotId: t }) {
                const o = r.useRef("ad-" + I++).current,
                    [s, a] = r.useState(""),
                    i = r.useRef(!1),
                    l = r.useRef(!1),
                    { userClaims: c } = r.useContext(b.rC),
                    d = c.isAnyPremiumSubscriber(),
                    u = "rtl" === document?.documentElement?.getAttribute("dir"),
                    m = r.useCallback(() => {
                        window.googletag &&
                            i.current &&
                            !l.current &&
                            window.googletag.cmd.push(() => {
                                if (!i.current) return;
                                u && window.googletag.pubads().setTargeting("rtl", "true");
                                const r = `adEventHandler_${o}`;
                                g[r] && (window.googletag.pubads().removeEventListener("slotRenderEnded", g[r]), delete g[r]),
                                    (g[r] = (o) => {
                                        i.current && (o.isEmpty || (o.slot.getSlotElementId() === e ? a("fallback") : o.slot.getSlotElementId() === t && "" === s && a("primary")));
                                    }),
                                    window.googletag.pubads().addEventListener("slotRenderEnded", g[r]);
                                if (!_.has(t) || !_.has(e)) _.has(e) || (window.googletag.display(e), _.add(e)), _.has(t) || (window.googletag.display(t), _.add(t));
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
                        if (d) return;
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
                                g[e] &&
                                window.googletag.cmd.push(() => {
                                    try {
                                        window.googletag.pubads().removeEventListener("slotRenderEnded", g[e]), delete g[e];
                                    } catch (e) {}
                                });
                        };
                    }, [d, t, e, m, o]),
                    d)
                )
                    return null;
                const h = [E.adContainer, !s && E.emptyContainer];
                return r.createElement(n.Z, { style: h }, r.createElement(n.Z, { id: t, style: [E.adSlot, "primary" !== s && E.hiddenSlot] }), r.createElement(n.Z, { id: e, style: [E.adSlot, "fallback" !== s && E.hiddenSlot] }));
            }
            const E = s.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space12, borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, adContainer: { minHeight: 250, minWidth: 300, width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", position: "relative" }, emptyContainer: { minHeight: 0, height: 0, overflow: "hidden" }, adSlot: { width: "100%", height: "100%", position: "absolute", top: 0, start: 0, end: 0, minWidth: 300, minHeight: 250 }, hiddenSlot: { display: "none" } })),
                v = function (e) {
                    return r.createElement(f.Z, { style: E.root }, r.createElement(r.Suspense, { fallback: r.createElement(n.Z, { style: E.emptyContainer }) }, r.createElement(y, e)));
                },
                w = i().a526aa66,
                D = i().ef625010,
                S = i().d228a9a0,
                P = (0, p.Z)(({ isInSidebar: e, userId: t, userIds: o, withProfileHeaderText: s }) => {
                    const a = (0, m.hC)("rweb_ssp_ads_enabled"),
                        i = `/i/connect_people?user_id=${t}`,
                        l = o.length > 0;
                    return r.createElement(n.Z, { "aria-label": w, role: "complementary" }, r.createElement(c.Z, { text: s ? D : w }), r.createElement(u.Z, { displayMode: h.Z.UserCompact, userIds: o }), a && l && r.createElement(v, { fallbackSlotId: "div-gpt-ad-1740520505566-0", primarySlotId: "div-gpt-ad-1738265577622-0" }), l && r.createElement(d.Z, { link: i, text: S, withBottomRadius: !0, withDarkerInteractiveBackground: e }));
                });
            var Z = o(967977),
                C = o(942893),
                T = o(312771),
                M = o(71620),
                A = o(973572),
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
                    .propsFromState(() => ({ fetchStatus: N, recommendations: O, users: (0, A.Z)(F, (e) => e) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, M.zr)("WHO_TO_FOLLOW_CONTAINER"), fetchRecommendationsIfNeeded: x.yY }))
                    .withAnalytics({ component: "suggest_who_to_follow" }),
                H = i().fd6473fa,
                B = { element: "user", action: "results" };
            class q extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = () => {
                            const { recommendations: e, userId: t, withProfileHeaderText: o } = this.props,
                                n = e && e.map((e) => e.user_id);
                            return r.createElement(P, { userId: t, userIds: n, withProfileHeaderText: o });
                        }),
                        (this._handleImpression = (e) => {
                            const { analytics: t, users: o } = this.props,
                                r = e && e.map((e) => ({ ...C.Z.forUser(e.user_id), suggestion_details: { source_data: e.token } }));
                            t.scribe({ ...B, data: { items: r } }),
                                o &&
                                    o.map((e) => {
                                        const o = e ? [C.Z.forUser(e.id_str)] : [];
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
                    return e === T.ZP.FAILED || this._hasEmptySuggestionList() ? null : r.createElement(n.Z, { style: [z.root, t] }, r.createElement(l.Z, { "aria-label": H, fetchStatus: e, render: this._renderContent }));
                }
                _fetchRecommendations(e) {
                    const { createLocalApiErrorHandler: t, fetchRecommendationsIfNeeded: o, userId: r } = e;
                    o({ limit: 3, displayLocation: R, similarToUserId: r }).catch(t(Z.C));
                }
                _hasEmptySuggestionList() {
                    const { fetchStatus: e, recommendations: t } = this.props;
                    return e === T.ZP.LOADED && 0 === t.length;
                }
            }
            const z = s.default.create((e) => ({ root: { minHeight: "15rem" } })),
                W = j(q);
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
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bd26965e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
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
            o.d(t, { $f: () => E, KV: () => b, LI: () => P, SC: () => k, Vt: () => g, ed: () => Z, op: () => v });
            var r = o(202784),
                n = o(190286),
                s = o(111677),
                a = o.n(s),
                i = o(616894),
                l = o(314948),
                c = o(516951),
                d = o(163390);
            const u = a().cfd2f35e,
                m = a().f9e45cfb,
                h = a().fcd4d489,
                p = a().a6450e84,
                f = a().ad00a739,
                b = a().a9fd20be,
                y = a().j546fb79,
                _ = a().c9623eeb,
                g = a().e133be4e,
                I = a().f5f01af6,
                k = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                E = (e) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: p, text: f({ screenName: e }) }),
                v = ({ blockAction: e, blockSubtext: t, source: o, testID: r, unblockAction: n, unblockSubtext: s, user: a }) => {
                    let i,
                        l = c.Z;
                    const u = P(a);
                    switch (o) {
                        case k.PROFILE:
                        case k.LIST_DETAIL:
                        case k.FOLLOWERS_LIST:
                            l = () => {
                                a.blocking ? n(u) : e(u);
                            };
                            break;
                        case k.TWEET:
                        case k.TWEET_CARET:
                        case k.RICH_FEEDBACK:
                            (i = d.uq.block),
                                (l = () => {
                                    a.blocking ? n(u) : e(u);
                                });
                    }
                    return { confirmation: u, onClick: l, testID: r, shortcutKey: i, Icon: w(a.blocking), text: S(a), subText: D({ user: a, blockSubtext: t, unblockSubtext: s }) };
                },
                w = (e) => (e ? l.default : i.default),
                D = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                S = (e) => (e.blocking ? _({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                P = (e) => {
                    return e.blocking ? ((t = e.screen_name), { confirmButtonType: "primary", headline: y({ screenName: t }), label: g, text: I }) : E(e.screen_name);
                    var t;
                },
                Z = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: s, headline: a, label: i, text: l } = e;
                    return r.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: i, confirmButtonType: s, headline: a, onCancel: o, onConfirm: t, text: l });
                };
        },
        545334: (e, t, o) => {
            "use strict";
            o.d(t, { d: () => n });
            var r = o(111677);
            const n = o.n(r)().gf5e9ea6;
        },
        916585: (e, t, o) => {
            "use strict";
            o.d(t, { k: () => a });
            var r = o(111677),
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
            o.d(t, { Aq: () => u, FK: () => _, GS: () => i, N1: () => h, PY: () => m, X6: () => g, cm: () => l });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                s = o(391366),
                a = o(40904);
            const i = n().hb568af4,
                l = n().bb1cbeb6,
                c = (n().h2f62206, n().e67b2d65),
                d = n().f05597b3,
                u = (e) => c({ screenName: e }),
                m = (e) => d({ screenName: e }),
                h = (e, t, o) => {
                    const { muting: r, screen_name: n } = e;
                    return { text: r ? m(n) : u(n), onClick: r ? o : t, Icon: r ? s.default : a.default };
                },
                p = n().h59f52ee,
                f = n().eea0cbee,
                b = n().i29533b3,
                y = n().h129c3c3,
                _ = (e) => (e ? ((e) => b({ screenName: e }))(e) : p),
                g = (e) => (e ? ((e) => y({ screenName: e }))(e) : f);
        },
        417714: (e, t, o) => {
            "use strict";
            o.d(t, { l: () => d });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                s = o(224823);
            const a = n().b3036480,
                i = n().b3036480,
                l = n().e68b09b4,
                c = n().h27b7407,
                d = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: s.default, text: a, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: l, text: c({ screenName: e.screen_name }) });
        },
        712816: (e, t, o) => {
            "use strict";
            o.d(t, { d: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().b6878b0a }, showToast: !0 };
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
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().a30b63da }, showToast: !0 };
        },
        879596: (e, t, o) => {
            "use strict";
            o.d(t, { D: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => s });
            var r = o(615656),
                n = o(51525);
            const s = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        973572: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => a });
            var r = o(476984),
                n = o.n(r),
                s = o(24949);
            const a = (0, s.wN)(s.PW, n());
        },
        163390: (e, t, o) => {
            "use strict";
            o.d(t, { OX: () => m, Od: () => d, PN: () => h, uq: () => c, wR: () => f });
            var r = o(251067),
                n = o(522171),
                s = o(111677),
                a = o.n(s),
                i = o(912021),
                l = o(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, i.Z)((e) => {
                    const t = e ? [{ description: a().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: a().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: a().a83d4280, keys: c.nextItem, universal: !0 }, { description: a().g0048656, keys: c.previousItem, universal: !0 }, { description: a().a690c4d0, keys: "Space", universal: !0 }, { description: a().e893811a, keys: c.refresh, universal: !1 }, { description: a().ha8209bc, keys: c.goHome, universal: !1 }, { description: a().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: a().eb75875e, keys: c.goNotifications, universal: !1 }, { description: a().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: a().fa98627a, keys: c.goProfile, universal: !1 }, { description: a().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: a().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: a().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: a().b0041756, keys: c.goLists, universal: !1 }, { description: a().d4986f86, keys: c.goMessages, universal: !1 }, { description: a().h5860a68, keys: c.goGrok, universal: !1 }, { description: a().bb081ea2, keys: c.goSettings, universal: !1 }, { description: a().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: a().eee2ed92, keys: c.goToUser, universal: !1 }, { description: a().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: a().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: a().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: a().e736990a, keys: c.newMessage, universal: !1 },
                    { description: a().a9ae1e78, keys: c.search, universal: !1 },
                    { description: a().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: a().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: a().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: a().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: a().gb303814, keys: c.bookmark, universal: !1 },
                    { description: a().c03b1126, keys: c.mute, universal: !1 },
                    { description: a().ebd2abb2, keys: c.block, universal: !1 },
                    { description: a().hc6c5510, keys: "Enter", universal: !0 },
                    { description: a().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: a().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                h = () => [
                    { description: a().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: a().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: a().b881560e, keys: c.video.mute, universal: !0 },
                    { description: a().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: a().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: a().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                p = (0, i.Z)((e) => {
                    const t = d(e),
                        o = m(),
                        r = h(),
                        n = {};
                    return (
                        [...o, ...r, ...t].forEach(({ description: e, keys: t }) => {
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
            o.d(t, { Z: () => r });
            const r = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
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
            o.d(t, { cM: () => b, dS: () => f, iY: () => y });
            var r = o(370751),
                n = o(399896),
                s = o(663550),
                a = o(499627),
                i = o(917799);
            const l = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                d = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([s.dx.IMPRESSION, s.dx.DWELL]),
                m = (0, r.Z)([s.AJ.TREND_VIEW, s.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: d });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: r }) => {
                        const { event: s, impression_id: a, promoted_trend_id: l } = e,
                            d = `trend-${l}-${s}`;
                        if (m.has(s) && p(o(), d)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: s, impression_id: a };
                        return (0, i._O)(t, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(s)) return [h(d)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: t, itemType: o, params: r }) =>
                    (s, a, { api: l }) => {
                        const { event: d, impression_id: m } = r,
                            f = `${o}-${t ?? "undefined"}-${m ?? "undefined"}-${d ?? "undefined"}`;
                        if (u.has(d) && p(a(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            y = { ...r, earned: b, epoch_ms: Date.now() };
                        return (0, i._O)(s, { params: y, request: l.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: y }, (e, t) => {
                            if (!t && u.has(d)) return [h(f)];
                        });
                    },
                y =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, i._O)(t, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            a.Z.register({
                promotedContent: function (e = l, t) {
                    if (!t) return e;
                    if (t.type === d) {
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
            o.d(t, { yY: () => A, UD: () => M, Ic: () => T });
            var r = o(360917),
                n = o.n(r),
                s = o(506899),
                a = o(414742),
                i = o(125199);
            const l = new s.fK.Entity("recommendations", { user: i.Z }, { idAttribute: (e) => e.user?.rest_id });
            var c = o(801301),
                d = o.n(c),
                u = o(304819);
            const m = new s.fK.Entity("recommendations", { user: u.Z }, { idAttribute: (e) => e.user?.id_str });
            var h = o(387466),
                p = o(120071);
            const f = (e) => ({ ...p.k(e), excluded: [], pc: !0 }),
                b = ({ apiClient: e, featureSwitches: t }) => ({
                    fetch(o, r = {}) {
                        const n = { ...f(t), ...o, ...(0, h.Y)(t) };
                        return e.get("users/recommendations", n, r).then((e) => (0, s.Fv)(e, [m]));
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
                                return (0, s.Fv)(
                                    t.map(({ token: e, user_results: { result: t } }) => ({ token: e, user: t, user_id: t?.rest_id })).filter(({ user: e }) => e),
                                    [l],
                                );
                            }),
                });
            var y = o(499627),
                _ = o(917799),
                g = o(312771),
                I = o(56519);
            const k = "recommendations",
                E = 30,
                v = "rweb/recommendations/FETCH_REQUEST",
                w = "rweb/recommendations/FETCH_SUCCESS",
                D = "rweb/recommendations/FETCH_FAILURE",
                S = {},
                P = ({ displayLocation: e, similarToUserId: t }) => e + (t ? `_${t}` : "");
            y.Z.register({
                [k]: function (e = S, t) {
                    if (!t?.meta) return e;
                    switch (t.type) {
                        case v: {
                            const o = P(t.meta);
                            return { ...e, [o]: { ...e[o], fetchStatus: g.ZP.LOADING } };
                        }
                        case D: {
                            const o = P(t.meta);
                            return { ...e, [o]: { ...e[o], fetchStatus: g.ZP.FAILED } };
                        }
                        case w: {
                            const o = P(t.meta),
                                r = t.payload && t.payload.entities ? t.payload.entities : { recommendations: n() },
                                s = (t.payload && t.payload.result ? t.payload.result : C).map((e) => r.recommendations[e]);
                            return { ...e, [o]: { ...e[o], fetchStatus: g.ZP.LOADED, recommendations: s } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const Z = [],
                C = [],
                T = (e, { displayLocation: t, similarToUserId: o }) => {
                    const r = e[k][P({ displayLocation: t, similarToUserId: o })];
                    return r && r.recommendations ? r.recommendations : Z;
                },
                M = (e, { displayLocation: t, similarToUserId: o }) => {
                    const r = e[k][P({ displayLocation: t, similarToUserId: o })];
                    return r ? r.fetchStatus : g.ZP.NONE;
                },
                A = (e) => (t, o, r) => {
                    const s = o(),
                        { displayLocation: a, similarToUserId: i } = e,
                        l = T(s, { displayLocation: a, similarToUserId: i }),
                        c = M(s, { displayLocation: a, similarToUserId: i }) === g.ZP.LOADED;
                    return l && c
                        ? Promise.resolve(n())
                        : t(
                              (
                                  (e) =>
                                  (t, o, { api: r, featureSwitches: n }) => {
                                      const { displayLocation: s, itsInterests: a, limit: i = E, similarToUserId: l } = e,
                                          c = "profile_accounts_sidebar" === s && n.isTrue("rweb_recommendations_sidebar_graphql_enabled");
                                      return (0, _._O)(t, { request: c ? r.withEndpoint(b).fetchSidebarUserRecommendations : r.withEndpoint(b).fetch, params: { display_location: s, itsInterests: a, limit: i, user_id: l } })({ actionTypes: { REQUEST: v, SUCCESS: w, FAILURE: D }, context: "FETCH_RECOMMENDATIONS", meta: { displayLocation: s, similarToUserId: l } }, (e) => {
                                          if (e && e.entities) return [(0, I.dP)(e.entities)];
                                      });
                                  }
                              )(e),
                          );
                };
        },
        629196: (e, t, o) => {
            "use strict";
            o.d(t, { r: () => c });
            o(136728);
            var r = o(161821),
                n = o(390387),
                s = o(836255),
                a = o(255117),
                i = o(166506),
                l = o(919022);
            const c =
                (e, t) =>
                (o, c, { api: d, featureSwitches: u }) =>
                    o(l.ZP.mute(e, t)).then(() => {
                        const t = c(),
                            l = (0, r.Z)(s.Z.selectAll(t)).reduce((o, r) => {
                                if (null != r)
                                    if (r.user === e) o[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = s.Z.select(t, r.retweeted_status);
                                        n?.user === e && (o[r.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            d = (0, n._h)(c()),
                            u = d ? [(0, a.ZP)({ useLatest: !1, userId: d }).removeTweets(l), (0, a.ZP)({ useLatest: !0, userId: d }).removeTweets(l)] : [],
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
            o.d(t, { du: () => d, f8: () => u, k9: () => c });
            var r = o(503768),
                n = o(750085),
                s = o(962741),
                a = o(466015),
                i = o(919022),
                l = o(218951);
            const c = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                d = (e) => (t, o) => {
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
            o.d(t, { ZP: () => u, r1: () => c });
            var r = o(15022),
                n = o(202784),
                s = (o(585488), o(512549)),
                a = o(952793),
                i = o(535338);
            const l = r.Z,
                c = ({ actions: e, jobId: t }) => {
                    const { jobData: o, viewer: r } = (0, i.p)(l, { jobId: t }),
                        s = o?.result?.id ?? "",
                        a = o?.result?.user_sentiment;
                    return n.createElement(d, { actions: e, jobId: t, relayId: s, userRelayId: r?.user_results?.result?.__id, userSentiment: a });
                },
                d = ({ actions: e, jobId: t, relayId: o, userRelayId: r, userSentiment: i }) => {
                    const l = (0, a.hC)("recruiting_job_recommendations_enabled");
                    return e && 0 !== e.length && l ? n.createElement(n.Fragment, null, e.includes(s.pN) && n.createElement(s.ZP, { jobId: t, relayId: o, type: s.pN, userRelayId: r, userSentiment: i }), e.includes(s.h5) && n.createElement(s.ZP, { jobId: t, relayId: o, type: s.h5, userRelayId: r, userSentiment: i })) : null;
                },
                u = d;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.WideLayout-9f4db315.fe9c1c0a.js.map
