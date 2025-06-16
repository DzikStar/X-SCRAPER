(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.WideLayout-9f4db315"],
    {
        801301: (e) => {
            e.exports = { queryId: "IWdZXQ2Hdh_gprXkyn58ug", operationName: "SidebarUserRecommendations", operationType: "query", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        616753: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { default: () => o });
            const o = s(797553).default;
        },
        290402: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => h });
            var o = s(807896),
                n = s(202784),
                r = s(182056),
                i = s(879113),
                a = s(392237),
                l = s(111677),
                c = s.n(l),
                d = s(968478);
            const u = c().aa6e3300,
                m = ({ retryMessage: e, ...t }, s) => {
                    const a = r.Z.isOnline();
                    return n.createElement(i.Z, (0, o.Z)({}, t, { icon: a ? void 0 : n.createElement(d.default, { style: p.icon }), retryMessage: a ? e : u }));
                },
                p = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = n.forwardRef(m);
        },
        333241: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => v });
            s(136728);
            var o = s(202784),
                n = s(638236),
                r = s(811176),
                i = s(111677),
                a = s.n(i),
                l = s(415506),
                c = s(516951),
                d = s(443781),
                u = s(376293),
                m = s(847607),
                p = s(417714),
                h = s(988823);
            const f = "block",
                b = "mute",
                y = "removeFollower",
                _ = "report",
                g = "share",
                E = a().j7bb1a43,
                I = a().hef5960c,
                v = (0, h.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: s, onClose: i, onMute: a, onRemoveFollower: h, onReportUser: v, onShare: k, onUnblock: w, onUnmute: S, user: D } = e,
                        Z = [],
                        P = (t, s) => {
                            const { confirm: o, onClose: n } = e;
                            if (t) {
                                const { label: e, ...r } = t;
                                o({ confirmButtonLabel: e, ...r })
                                    .then(s, c.Z)
                                    .finally(n);
                            } else s();
                        };
                    !!window.navigator.share &&
                        !D.protected &&
                        !D.blocking &&
                        !D.blocked_by &&
                        Z.push({
                            Icon: n.Z,
                            onClick: () => {
                                i(), k();
                            },
                            testID: g,
                            text: I,
                        });
                    !D.blocking &&
                        Z.push({
                            ...(0, m.N1)(
                                D,
                                () => {
                                    i(), a();
                                },
                                () => {
                                    i(), S();
                                },
                            ),
                            testID: b,
                        });
                    D.followed_by &&
                        Z.push({
                            ...(0, p.l)({
                                removeFollowerAction: (e) => {
                                    P(e, h);
                                },
                                user: D,
                            }),
                            testID: y,
                        }),
                        Z.push((0, u.op)({ blockAction: (e) => P(e, s), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => P(e, w), user: D })),
                        Z.push({
                            Icon: l.default,
                            onClick: () => {
                                i(), v();
                            },
                            testID: _,
                            text: E({ screenName: D.screen_name }),
                        });
                    const C = Z.map(({ Icon: e, onClick: t, testID: s, text: o }) => ({ text: o, onClick: t, Icon: e, testID: s }));
                    return o.createElement(r.Z, { items: C, onCloseRequested: i });
                });
        },
        471957: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => Z });
            var o = s(626926),
                n = s(202784),
                r = s(325686),
                i = (s(585488), s(277660)),
                a = s.n(i),
                l = s(392237),
                c = s(725405),
                d = s(535338),
                u = s(164936),
                m = (s(136728), s(107267)),
                p = s(731708),
                h = s(519172),
                f = s(601413),
                b = s(952428),
                y = s(823161),
                _ = s(757483),
                g = s(457458),
                E = s(412876),
                I = s(549599);
            const v = ({ fallbackName: e, user: t }) => {
                    const s = a()(I.fR, t);
                    return s && s.core && s.core.name && s.core.screen_name ? n.createElement(p.ZP, { size: "subtext2", style: k.userName }, n.createElement(r.Z, { style: k.name }, n.createElement(p.ZP, { numberOfLines: 1 }, s.core.name), n.createElement(h.Z, { isVerified: s.verification?.verified ?? !1, verifiedType: s.verification?.verified_type ?? void 0 })), n.createElement(f.Z, { screenName: s.core.screen_name, size: "subtext2" })) : e ? n.createElement(p.ZP, { size: "subtext2", weight: "normal" }, e) : null;
                },
                k = l.default.create((e) => ({ listContainer: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, inactiveItem: { borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, activeItem: { backgroundColor: _.Z.hexToCss(e.colors.primary, 0.25) }, itemRow: { display: "flex", flexDirection: "row", gap: 16 }, items: { display: "flex", flexDirection: "column", gap: 4, flex: 1 }, userName: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: 4 }, name: { flexWrap: "nowrap", flexDirection: "row", flexShrink: 1 } })),
                w = ({ companyProfile: e, formattedSalary: t, jobId: s, jobLocation: o, jobTitle: i, onClick: a, renderActions: l, salaryInterval: c, user: d, withBottomBorder: u = !0 }) => {
                    const { jobId: h } = (0, m.useParams)(),
                        f = n.useMemo(() => ({ label: i }), [i]),
                        _ = n.useMemo(() => {
                            const e = [k.listContainer];
                            return h === s ? e.push(k.activeItem) : u && e.push(k.inactiveItem), e;
                        }, [h, s, u]);
                    return n.createElement(b.Z, { onClick: a, role: "listitem", style: _ }, n.createElement(r.Z, { style: k.itemRow }, d ? n.createElement(E.Y, { size: "xLarge", user: d }) : n.createElement(y.default, { shape: "square", size: "xLarge", uri: e?.logo?.normal_url || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), n.createElement(r.Z, { style: k.items }, n.createElement(p.ZP, { hoverLabel: f, numberOfLines: 2, size: "subtext1", weight: "bold" }, i), n.createElement(v, { fallbackName: e?.core?.name, user: d }), n.createElement(p.ZP, { color: "gray700", size: "subtext2" }, o), t ? n.createElement(p.ZP, { color: "gray700", size: "subtext2" }, (0, g.M)(t, c)) : null)), l && n.createElement(r.Z, null, l()));
                },
                S = o.Z,
                D = l.default.create((e) => ({ actions: { display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1, marginStart: e.spaces.space56, marginTop: e.spaces.space12 } })),
                Z = ({ actions: e, companyProfile: t, job: s, jobId: o, jobIndex: i, onClick: l, relayId: m, user: p, userSentiment: h, withBottomBorder: f = !0 }) => {
                    const b = (0, c.Z)(),
                        { viewer: y } = (0, d.p)(S, {}),
                        _ = a()(I.qV, s),
                        g = a()(I.dB, t),
                        E = y?.user_results?.result?.__id,
                        v = n.useCallback(() => {
                            b.scribe({ action: "click", component: "job_search_list_item", element: "job", data: { items: [{ id: o, position: i }] } }), l();
                        }, [b, o, i, l]),
                        k = n.useCallback(() => n.createElement(r.Z, { style: D.actions }, n.createElement(u.ZP, { actions: e, jobId: o, relayId: m, userRelayId: E, userSentiment: h })), [e, o, m, E, h]);
                    return _ && _.title && _.location ? n.createElement(w, { companyProfile: g, formattedSalary: _.formatted_salary, jobId: o, jobLocation: _.location, jobTitle: _.title, onClick: v, renderActions: k, salaryInterval: _.salary_interval, user: p, withBottomBorder: f }) : null;
                };
        },
        549599: (e, t, s) => {
            "use strict";
            s.d(t, { KM: () => y, ZP: () => _, dB: () => f, fR: () => b, qV: () => h });
            s(136728);
            var o = s(501527),
                n = s(176811),
                r = s(436065),
                i = s(891717),
                a = s(202784),
                l = (s(585488), s(277660)),
                c = s.n(l),
                d = s(107267),
                u = s(708852),
                m = s(471957),
                p = s(512549);
            const h = i.Z,
                f = r.Z,
                b = n.Z,
                y = o.Z,
                _ = ({ item: e, itemId: t, itemIndex: s }) => {
                    const o = (0, u.Ji)(),
                        n = (0, d.useHistory)(),
                        r = (0, d.useLocation)(),
                        i = c()(y, e),
                        l = i?.core,
                        h = i?.user_results?.result,
                        f = i?.company_profile_results?.result,
                        b = i?.id || "",
                        _ = i?.user_sentiment,
                        g = a.useCallback(() => {
                            o ? n.push({ pathname: `/jobs/${t}`, query: r.query }) : n.push({ pathname: `/m/jobs/${t}`, query: r.query });
                        }, [n, o, t, r.query]);
                    return i && l ? a.createElement(m.Z, { actions: [p.h5], companyProfile: f, job: l, jobId: t, jobIndex: s, onClick: g, relayId: b, user: h, userSentiment: _ }) : null;
                };
        },
        512549: (e, t, s) => {
            "use strict";
            s.d(t, { ZP: () => v, h5: () => _, pN: () => g, tv: () => y });
            var o = s(643331),
                n = s(202784),
                r = s(325686),
                i = (s(585488), s(351743)),
                a = s.n(i),
                l = s(530732),
                c = s(731708),
                d = s(392237),
                u = s(106186),
                m = s(258292),
                p = s(616894),
                h = s(443781),
                f = s(292546);
            const b = o.Z,
                y = (e, t, s) => {
                    const { viewerUserId: o } = (0, h.QZ)(),
                        [r] = a()(b),
                        [i] = (0, f.Z)(),
                        l = i.get("twclid") || null,
                        c = n.useCallback(
                            (e, o) => {
                                const n = e.get(t);
                                if ((n && n.setValue(o, "user_sentiment"), s)) {
                                    const t = e.get(s);
                                    t && t.invalidateRecord();
                                }
                            },
                            [t, s],
                        );
                    return n.useCallback(
                        (t) => {
                            o && r({ variables: { jobId: e, userId: o, sentiment: t, twclid: l }, optimisticUpdater: (e) => c(e, t), updater: (e) => c(e, t) });
                        },
                        [r, c, e, l, o],
                    );
                },
                _ = "like",
                g = "dislike",
                E = ({ Icon: e, SelectedIcon: t, activeStyle: s, hoverStyle: o, isSelected: i, label: a, onClick: d, sentiment: u }) => {
                    const m = (e) => (e ? o : i ? s : {});
                    return n.createElement(
                        r.Z,
                        null,
                        n.createElement(l.Z, { interactiveStyles: null, onClick: (e) => d(u, e), style: I.sentimentActionContainer }, ({ isHovered: s }) => n.createElement(n.Fragment, null, i ? n.createElement(t, { style: m(s) }) : n.createElement(e, { style: m(s) }), n.createElement(c.ZP, { size: "subtext2", style: { ...m(s) } }, a))),
                    );
                },
                I = d.default.create((e) => ({ sentimentActionContainer: { display: "flex", flexDirection: "row", flex: 1, gap: 6, alignItems: "center", cursor: "pointer" }, sentimentActionText: { marginTop: e.spaces.space4 }, likeActive: { color: e.colors.blue500 }, likeHover: { color: e.colors.blue700 }, dislikeActive: { color: e.colors.red500 }, dislikeHover: { color: e.colors.red700 } })),
                v = ({ jobId: e, relayId: t, type: s, userRelayId: o, userSentiment: r }) => {
                    const i = y(e, t, o),
                        a = n.useCallback(
                            (e, t) => {
                                t.stopPropagation();
                                i(e !== r ? e : "none");
                            },
                            [i, r],
                        );
                    return s === _ ? n.createElement(E, { Icon: u.default, SelectedIcon: m.default, activeStyle: I.likeActive, hoverStyle: I.likeHover, isSelected: r === _, label: "Save job", onClick: a, sentiment: _ }) : s === g ? n.createElement(E, { Icon: p.default, SelectedIcon: p.default, activeStyle: I.dislikeActive, hoverStyle: I.dislikeHover, isSelected: r === g, label: "Not interested", onClick: a, sentiment: g }) : null;
                };
        },
        864479: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => i });
            var o = s(807896),
                n = s(202784),
                r = s(771099);
            const i = (e) => (t) => n.createElement(r.$6, null, (s) => n.createElement(e, (0, o.Z)({}, t, { isInSidebar: s })));
        },
        893904: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { StickyView: () => m, default: () => y, roundToNearestDevicePixel: () => u, useStickyViewNotify: () => h });
            var o = s(202784),
                n = s(325686),
                r = s(67877),
                i = s(537392),
                a = s(392237),
                l = s(752624),
                c = s(323265),
                d = s(993547);
            const u = ({ cssPixels: e, dpr: t }) => Math.round(e * t) / t;
            class m extends o.PureComponent {
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
                            s = e.scrollY();
                        (this._prevScrollY = s), this.setState({ stickyOffset: s + t.top });
                    }
                    this._pendingScrolledBy && (this._handleProgrammaticScroll(this._pendingScrolledBy), (this._pendingScrolledBy = 0));
                }
                componentWillUnmount() {
                    (this._isMounted = !1), this._removeScrollListener && this._removeScrollListener(), this._removeProgrammaticScrollListener && this._removeProgrammaticScrollListener(), void 0 !== this._timeoutId && cancelAnimationFrame(this._timeoutId);
                }
                render() {
                    const { contentOffset: e, position: t, stickyThreshold: s, stickyTop: r } = this.state,
                        i = b[t],
                        a = window.devicePixelRatio || 1,
                        l = u({ cssPixels: s, dpr: a }),
                        c = u({ cssPixels: e, dpr: a }),
                        d = { top: r ? `${l}px` : null, bottom: r ? null : `${l}px` };
                    return o.createElement(n.Z, { ref: this._setContainerRef, style: [b.container, { minHeight: this.state.contentHeight }] }, o.createElement(f, { onNotify: this._forceUpdatePositioning }), o.createElement(n.Z, { style: { marginTop: `${c}px` } }), o.createElement(n.Z, { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, d, i] }, this.props.children));
                }
                _updatePositioning(e = !1) {
                    if (!this._contentNode || !this._containerNode) return;
                    const t = this.props.viewport.scrollY(),
                        s = t - this._prevScrollY;
                    if (Math.abs(s) < 0.5 && !e) return;
                    const { distanceFromBottom: o } = this.props;
                    this._prevScrollY = t;
                    const n = !!this._contentNode && this._contentNode.getBoundingClientRect(),
                        r = !!this._containerNode && this._containerNode.getBoundingClientRect();
                    if (!n || !r) return;
                    const { height: a } = (0, i.iv)(),
                        l = c.ZP.isIOS() ? window.innerHeight : a,
                        d = t + r.top,
                        u = Math.max(n.top - r.top, 0);
                    if (l - n.height >= d) this._updateState({ stickyTop: !0, stickyThreshold: d, contentOffset: 0, stickyOffset: d, contentHeight: n.height, position: "fixed" });
                    else {
                        const e = s > 0,
                            t = e !== this.state.stickyTop,
                            r = window.devicePixelRatio || 1,
                            i = n.bottom - l + o <= 1 / r,
                            a = d - n.top <= 1 / r;
                        if (((e && i) || (!e && a)) && c.ZP.isFirefox()) {
                            const e = o,
                                t = d;
                            this._updateState({ position: "fixed", stickyOffset: d, stickyTop: a, stickyThreshold: a ? t : e, contentOffset: u, contentHeight: n.height });
                        } else {
                            const s = l - n.height - o,
                                r = l - n.height - d;
                            this._updateState({ position: "sticky", stickyTop: e, stickyOffset: d, stickyThreshold: e ? s : r, contentOffset: t ? u : this.state.contentOffset, contentHeight: n.height });
                        }
                    }
                }
                _updateState(e) {
                    const t = this.state.stickyTop !== e.stickyTop,
                        s = this.state.stickyThreshold !== e.stickyThreshold,
                        o = Math.abs(this.state.contentOffset - e.contentOffset) > 0.5,
                        n = Math.abs(this.state.stickyOffset - e.stickyOffset) > 0.5,
                        r = this.state.position !== e.position,
                        i = this.state.contentHeight !== e.contentHeight;
                    (t || s || o || n || r || i) && this.setState(e);
                }
            }
            m.defaultProps = { distanceFromBottom: 10 };
            const p = new l.Z();
            function h() {
                o.useLayoutEffect(() => {
                    p.notify();
                }, []);
            }
            function f({ onNotify: e }) {
                return (
                    o.useEffect(() => {
                        const { unsubscribe: t } = p.subscribe(e);
                        return () => {
                            t();
                        };
                    }, [e]),
                    null
                );
            }
            const b = a.default.create((e) => ({ container: { height: "100%" }, sticky: { position: "sticky" }, fixed: { position: "fixed" }, static: { position: "static" } })),
                y = (0, d.Z)(m);
        },
        293988: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => k });
            var o = s(202784),
                n = s(154003),
                r = s(111677),
                i = s.n(r),
                a = s(74514),
                l = s(405303),
                c = s(684511),
                d = s(860174),
                u = s(71620),
                m = s(668214),
                p = s(257166),
                h = s(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !p.selectShouldPromptBrowserPush(e)),
                b = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: h.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                y = i().bdba3e1a,
                _ = i().c4da7d28,
                g = i().j87c21f4,
                E = i().iebc30ca,
                I = i().dc740eb2;
            class v extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? o.createElement(n.ZP, { "aria-label": _, hoverLabel: { label: E }, icon: o.createElement(a.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : o.createElement(n.ZP, { "aria-label": y, hoverLabel: { label: g }, icon: o.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return o.createElement("div", null, this.state.showingPushPrompt ? o.createElement(c.Z, { fullScreen: !0, message: I }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: s, userId: o } = this.props;
                    return s(o, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const k = b(v);
        },
        130888: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { InThisConversationContainer: () => S, default: () => D });
            var o = s(202784),
                n = s(476984),
                r = s.n(n),
                i = s(111677),
                a = s.n(i),
                l = s(325686),
                c = s(844685),
                d = s(62857);
            const u = (e) => !e.protected || !!e.following,
                m = o.memo(function (e) {
                    const { headerText: t, participantIds: s } = e;
                    return o.createElement(l.Z, { "aria-label": t, role: "complementary" }, o.createElement(c.Z, { text: t }), o.createElement(d.Z, { filterPredicate: u, userIds: s.slice(0, 3) }));
                }),
                p = m;
            var h = s(668214),
                f = s(390387),
                b = s(836255),
                y = s(919022),
                _ = (s(136728), s(175848)),
                g = s(166852);
            const E = (e, t, s) => {
                    const o = s === t,
                        n = e.unmentioned_user_ids?.includes(t);
                    return o || !n;
                },
                I = (e, t) => (e.entities?.user_mentions || []).filter((s) => E(e, s.id_str, t)).map((e) => e.id_str) || [],
                v = (e, t) => t.focalTweetId,
                k = (0, h.Z)()
                    .propsFromState(() => ({ focalTweetId: v, viewerUserId: f._h, tweetMap: b.Z.selectAll, users: y.ZP.selectAll }))
                    .adjustStateProps(({ focalTweetId: e, tweetMap: t, users: s, viewerUserId: o }) => {
                        const n = e && t[e];
                        if (!n) return { participantIds: [] };
                        const r = [n.user, ...I(n, o), ...((i = n), _.ZP.mergeTaggedUsers((i.extended_entities && i.extended_entities.media) || []).map((e) => e.user_id))];
                        var i;
                        const a = n.quoted_status && t[n.quoted_status];
                        return a && (r.push(...((e, t) => (E(e, e.user, t) ? [e.user] : []))(a, o)), r.push(...I(a, o))), { participantIds: (0, g.Z)(r).filter((e) => "string" == typeof e && void 0 !== s[e]?.following) };
                    })
                    .withAnalytics({ component: "in_this_conversation" }),
                w = a().j88f27d8;
            function S({ participantIds: e }) {
                const t = (function (e) {
                    const t = o.useRef(e);
                    return r()(e, t.current) ? t.current : ((t.current = e), e);
                })(e);
                return t.length > 0 ? o.createElement(p, { headerText: w, participantIds: t }) : null;
            }
            const D = k(S);
        },
        741494: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { default: () => M });
            s(136728);
            var o = s(669506),
                n = s(202784),
                r = s(325686),
                i = (s(585488), s(277660)),
                a = s.n(i),
                l = s(107267),
                c = s(844685),
                d = s(731708),
                u = s(154003),
                m = s(708852),
                p = s(392237),
                h = s(111677),
                f = s.n(h),
                b = s(293723),
                y = s(399398),
                _ = s(471957),
                g = s(549599),
                E = s(535338),
                I = s(736063);
            const v = f().fb15ec28,
                k = f().ece910f0,
                w = f().jd08bc14,
                S = f().de0a4a72,
                D = f().fc5bfd96,
                Z = o.Z,
                P = () => n.createElement(r.Z, null, n.createElement(c.Z, { text: v }), n.createElement(r.Z, { style: T.content }, n.createElement(r.Z, { style: T.bulletRow }, n.createElement(d.ZP, null, n.createElement(b.default, null)), n.createElement(d.ZP, { size: "subtext1" }, k)), n.createElement(r.Z, { style: T.bulletRow }, n.createElement(d.ZP, null, n.createElement(b.default, null)), n.createElement(d.ZP, { size: "subtext1" }, w)), n.createElement(r.Z, { style: T.bulletRow }, n.createElement(d.ZP, null, n.createElement(b.default, null)), n.createElement(d.ZP, { size: "subtext1" }, S)), n.createElement(u.ZP, { link: "/jobs/get-recommendations", size: "small", type: "brandFilled" }, D))),
                C = ({ recommendation: e, recommendationId: t, recommendationIndex: s }) => {
                    const o = (0, m.Ji)(),
                        r = (0, l.useHistory)(),
                        i = a()(g.KM, e),
                        c = i?.core,
                        d = i?.user_results?.result,
                        u = i?.company_profile_results?.result,
                        p = i?.id || "",
                        h = i?.user_sentiment,
                        f = n.useCallback(() => {
                            o ? r.push(`/jobs/recommended/${t}`) : r.push(`/m/jobs/recommended/${t}`);
                        }, [r, o, t]);
                    return i && c ? n.createElement(_.Z, { actions: [], companyProfile: u, job: c, jobId: t, jobIndex: s, onClick: f, relayId: p, user: d, userSentiment: h, withBottomBorder: !1 }) : null;
                },
                T = p.default.create((e) => ({ content: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space16, gap: e.spaces.space16 }, bulletRow: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center" } })),
                L = ({ isSidebarModule: e }) => {
                    const t = (0, E.p)(Z, {}),
                        s = t?.viewer_v2.user_results.result.matching_profile,
                        o = t?.viewer_v2.user_results.result.job_recommendations_results;
                    if (!t || (s?.consented_at && !o?.length)) return null;
                    const i = ({ children: t }) => (e ? n.createElement(y.g, null, t) : n.createElement(n.Fragment, null, t));
                    return n.createElement(
                        i,
                        null,
                        s?.consented_at ? null : n.createElement(P, null),
                        s?.consented_at && o?.length && o.length > 0
                            ? n.createElement(
                                  r.Z,
                                  null,
                                  n.createElement(c.Z, { text: "Recommended jobs" }),
                                  o.map((e, t) => (e.result ? n.createElement(C, { key: e.rest_id, recommendation: e.result, recommendationId: e.rest_id, recommendationIndex: t }) : null)),
                              )
                            : null,
                    );
                },
                x = { context: "JobRecommendationsModule" },
                M = (e) => n.createElement(I.H, { errorConfig: x }, n.createElement(L, e));
        },
        62857: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => Z });
            var o = s(807896),
                n = s(202784),
                r = s(476984),
                i = s.n(r),
                a = s(111677),
                l = s.n(a),
                c = s(615656),
                d = s(290402),
                u = s(325686),
                m = s(240089),
                p = s(663550),
                h = s(409438);
            const f = ({ displayMode: e = h.Z.UserDetailed, renderUserCell: t, userIds: s }) =>
                n.createElement(
                    u.Z,
                    { role: "list" },
                    s.map((s, o) => (t ? t(s) : n.createElement(m.ZP, { decoration: m.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: s, promotedItemType: p.bj.USER, userId: s, withFollowsYou: !0 }))),
                );
            var b = s(312771),
                y = s(71620),
                _ = s(973572),
                g = s(668214),
                E = s(919022);
            const I = (e, t) => t.userIds,
                v = (e, t) => {
                    const { filterPredicate: s = (e) => !!e, userIds: o } = t;
                    return o.filter((t) => {
                        const o = E.ZP.select(e, t);
                        return !!o && s(o);
                    });
                },
                k = (e, t) => {
                    const { userIds: s } = t;
                    return s.reduce((t, s) => {
                        const o = E.ZP.selectFetchStatus(e, s);
                        return o && (t[s] = o === b.ZP.NONE ? b.ZP.LOADING : o), t;
                    }, {});
                },
                w = (0, g.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, _.Z)(v, (e) => e),
                        fetchStatus: (0, _.Z)(v, k, I, (e, t, s) => {
                            let o = b.ZP.LOADED;
                            for (let n = 0; n < s.length; n++) {
                                const r = s[n];
                                if (-1 === e.indexOf(r)) {
                                    const e = t[r] || b.ZP.LOADING;
                                    o = o === b.ZP.LOADED ? e : o;
                                }
                                if (o === b.ZP.LOADED) break;
                            }
                            return o;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: E.ZP.fetchManyIfNeeded })),
                S = l().f5b426c2;
            class D extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: s, fetchUsersIfNeeded: r, filterPredicate: i, userIds: a, ...l } = this.props;
                            return n.createElement(f, (0, o.Z)({}, l, { userIds: e }));
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
                    return n.createElement(d.Z, { "aria-label": S, fetchStatus: this.state.allUsersUnavailable ? b.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: s, userIds: o } = this.props;
                    s(o).then(
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
            const Z = w(D);
        },
        912937: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, { WhoToFollowContainer: () => q, default: () => W });
            var o = s(202784),
                n = s(325686),
                r = s(392237),
                i = s(111677),
                a = s.n(i),
                l = s(290402),
                c = s(844685),
                d = s(30183),
                u = s(62857),
                m = s(952793),
                p = s(409438),
                h = s(864479),
                f = (s(136728), s(952428)),
                b = s(443781);
            const y = o.lazy(() => window.__SSP_PROMISE__.then(() => ({ default: I }))),
                _ = new Set(),
                g = {};
            let E = 0;
            function I({ fallbackSlotId: e, primarySlotId: t }) {
                const s = o.useRef("ad-" + E++).current,
                    [r, i] = o.useState(""),
                    a = o.useRef(!1),
                    l = o.useRef(!1),
                    { userClaims: c } = o.useContext(b.rC),
                    d = c.isAnyPremiumSubscriber(),
                    u = "rtl" === document?.documentElement?.getAttribute("dir"),
                    m = o.useCallback(() => {
                        window.googletag &&
                            a.current &&
                            !l.current &&
                            window.googletag.cmd.push(() => {
                                if (!a.current) return;
                                u && window.googletag.pubads().setTargeting("rtl", "true");
                                const o = `adEventHandler_${s}`;
                                g[o] && (window.googletag.pubads().removeEventListener("slotRenderEnded", g[o]), delete g[o]),
                                    (g[o] = (s) => {
                                        a.current && (s.isEmpty || (s.slot.getSlotElementId() === e ? i("fallback") : s.slot.getSlotElementId() === t && "" === r && i("primary")));
                                    }),
                                    window.googletag.pubads().addEventListener("slotRenderEnded", g[o]);
                                if (!_.has(t) || !_.has(e)) _.has(e) || (window.googletag.display(e), _.add(e)), _.has(t) || (window.googletag.display(t), _.add(t));
                                else {
                                    const s = window.googletag
                                        .pubads()
                                        .getSlots()
                                        .filter((s) => {
                                            const o = s.getSlotElementId();
                                            return o === t || o === e;
                                        });
                                    s.length > 0 && window.googletag.pubads().refresh(s);
                                }
                                l.current = !0;
                            });
                    }, [e, t, u, r, s]);
                if (
                    (o.useEffect(() => {
                        if (d) return;
                        a.current = !0;
                        const o = () => {
                            const s = document.getElementById(t),
                                o = document.getElementById(e);
                            return (
                                !(!s || !o) &&
                                (setTimeout(() => {
                                    a.current && m();
                                }, 50),
                                !0)
                            );
                        };
                        if (!o()) {
                            const e = new MutationObserver((e, t) => {
                                o() && t.disconnect();
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
                                g[e] &&
                                window.googletag.cmd.push(() => {
                                    try {
                                        window.googletag.pubads().removeEventListener("slotRenderEnded", g[e]), delete g[e];
                                    } catch (e) {}
                                });
                        };
                    }, [d, t, e, m, s]),
                    d)
                )
                    return null;
                const p = [v.adContainer, !r && v.emptyContainer];
                return o.createElement(n.Z, { style: p }, o.createElement(n.Z, { id: t, style: [v.adSlot, "primary" !== r && v.hiddenSlot] }), o.createElement(n.Z, { id: e, style: [v.adSlot, "fallback" !== r && v.hiddenSlot] }));
            }
            const v = r.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space12, borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, adContainer: { minHeight: 250, minWidth: 300, width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", position: "relative" }, emptyContainer: { minHeight: 0, height: 0, overflow: "hidden" }, adSlot: { width: "100%", height: "100%", position: "absolute", top: 0, start: 0, end: 0, minWidth: 300, minHeight: 250 }, hiddenSlot: { display: "none" } })),
                k = function (e) {
                    return o.createElement(f.Z, { style: v.root }, o.createElement(o.Suspense, { fallback: o.createElement(n.Z, { style: v.emptyContainer }) }, o.createElement(y, e)));
                },
                w = a().a526aa66,
                S = a().ef625010,
                D = a().d228a9a0,
                Z = (0, h.Z)(({ isInSidebar: e, userId: t, userIds: s, withProfileHeaderText: r }) => {
                    const i = (0, m.hC)("rweb_ssp_ads_enabled"),
                        a = `/i/connect_people?user_id=${t}`,
                        l = s.length > 0;
                    return o.createElement(n.Z, { "aria-label": w, role: "complementary" }, o.createElement(c.Z, { text: r ? S : w }), o.createElement(u.Z, { displayMode: p.Z.UserCompact, userIds: s }), i && l && o.createElement(k, { fallbackSlotId: "div-gpt-ad-1740520505566-0", primarySlotId: "div-gpt-ad-1738265577622-0" }), l && o.createElement(d.Z, { link: a, text: D, withBottomRadius: !0, withDarkerInteractiveBackground: e }));
                });
            var P = s(967977),
                C = s(942893),
                T = s(312771),
                L = s(71620),
                x = s(973572),
                M = s(668214),
                A = s(994305),
                U = s(919022);
            const R = "profile_accounts_sidebar",
                O = (e, t) => A.Ic(e, { displayLocation: R, similarToUserId: t.userId }),
                N = (e, t) => A.UD(e, { displayLocation: R, similarToUserId: t.userId }),
                F = (e, t) => {
                    const s = O(e, t),
                        o = [];
                    return (
                        s.forEach(({ user_id: t }) => {
                            const s = U.ZP.select(e, t);
                            s && o.push(s);
                        }),
                        o
                    );
                },
                j = (0, M.Z)()
                    .propsFromState(() => ({ fetchStatus: N, recommendations: O, users: (0, x.Z)(F, (e) => e) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, L.zr)("WHO_TO_FOLLOW_CONTAINER"), fetchRecommendationsIfNeeded: A.yY }))
                    .withAnalytics({ component: "suggest_who_to_follow" }),
                B = a().fd6473fa,
                H = { element: "user", action: "results" };
            class q extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = () => {
                            const { recommendations: e, userId: t, withProfileHeaderText: s } = this.props,
                                n = e && e.map((e) => e.user_id);
                            return o.createElement(Z, { userId: t, userIds: n, withProfileHeaderText: s });
                        }),
                        (this._handleImpression = (e) => {
                            const { analytics: t, users: s } = this.props,
                                o = e && e.map((e) => ({ ...C.Z.forUser(e.user_id), suggestion_details: { source_data: e.token } }));
                            t.scribe({ ...H, data: { items: o } }),
                                s &&
                                    s.map((e) => {
                                        const s = e ? [C.Z.forUser(e.id_str)] : [];
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
                    return e === T.ZP.FAILED || this._hasEmptySuggestionList() ? null : o.createElement(n.Z, { style: [z.root, t] }, o.createElement(l.Z, { "aria-label": B, fetchStatus: e, render: this._renderContent }));
                }
                _fetchRecommendations(e) {
                    const { createLocalApiErrorHandler: t, fetchRecommendationsIfNeeded: s, userId: o } = e;
                    s({ limit: 3, displayLocation: R, similarToUserId: o }).catch(t(P.C));
                }
                _hasEmptySuggestionList() {
                    const { fetchStatus: e, recommendations: t } = this.props;
                    return e === T.ZP.LOADED && 0 === t.length;
                }
            }
            const z = r.default.create((e) => ({ root: { minHeight: "15rem" } })),
                W = j(q);
        },
        292546: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            s(543673), s(240753), s(128399), s(136728);
            var o = s(202784),
                n = s(107267);
            const r = () => {
                const e = (0, n.useLocation)(),
                    t = (0, n.useHistory)(),
                    [s, r] = o.useState(new URLSearchParams(e.search));
                o.useEffect(() => {
                    r(new URLSearchParams(e.search));
                }, [e.search]);
                const i = o.useCallback(
                    (o, n) => {
                        const r = new URLSearchParams(s);
                        r.set(o, n), t.push(`${e.pathname}?${r.toString()}`);
                    },
                    [t, e.pathname, s],
                );
                return [o.useMemo(() => new URLSearchParams(e.search), [e.search]), i];
            };
        },
        684511: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => o });
            s(202784);
            const o = (0, s(523561).Z)({
                loader: () =>
                    Promise.all([
                        s.e("modules.common-e907d115"),
                        s.e("modules.common-e019dbda"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        s.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        s.e("loader.PushNotificationsPrompt"),
                    ]).then(s.bind(s, 529629)),
            });
        },
        376293: (e, t, s) => {
            "use strict";
            s.d(t, { $f: () => w, KV: () => y, LI: () => C, SC: () => k, Vt: () => E, ed: () => T, op: () => S });
            var o = s(202784),
                n = s(190286),
                r = s(111677),
                i = s.n(r),
                a = s(616894),
                l = s(314948),
                c = s(516951),
                d = s(163390);
            const u = i().cfd2f35e,
                m = i().f9e45cfb,
                p = i().fcd4d489,
                h = i().a6450e84,
                f = i().g353ad73,
                b = i().ad00a739,
                y = i().a9fd20be,
                _ = i().j546fb79,
                g = i().c9623eeb,
                E = i().e133be4e,
                I = i().he43bca4,
                v = i().f5f01af6,
                k = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                w = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: h, text: t ? b({ screenName: e }) : f({ screenName: e }) }),
                S = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: s, source: o, testID: n, unblockAction: r, unblockSubtext: i, user: a }) => {
                    let l,
                        u = c.Z;
                    const m = C(a, s);
                    switch (o) {
                        case k.PROFILE:
                        case k.LIST_DETAIL:
                        case k.FOLLOWERS_LIST:
                            u = () => {
                                a.blocking ? r(m) : e(m);
                            };
                            break;
                        case k.TWEET:
                        case k.TWEET_CARET:
                        case k.RICH_FEEDBACK:
                            (l = d.uq.block),
                                (u = () => {
                                    a.blocking ? r(m) : e(m);
                                });
                    }
                    return { confirmation: m, onClick: u, testID: n, shortcutKey: l, Icon: D(a.blocking), text: P(a), subText: Z({ user: a, blockSubtext: t, unblockSubtext: i }) };
                },
                D = (e) => (e ? l.default : a.default),
                Z = ({ blockSubtext: e, unblockSubtext: t, user: s }) => (!s.blocking && e ? e(s.screen_name) : s.blocking ? t : void 0),
                P = (e) => (e.blocking ? g({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                C = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: _({ screenName: e }), label: E, text: t ? v : I }))(e.screen_name, t) : w(e.screen_name, t)),
                T = ({ confirmation: e, handleConfirm: t, onClose: s }) => {
                    const { confirmButtonType: r, headline: i, label: a, text: l } = e;
                    return o.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: a, confirmButtonType: r, headline: i, onCancel: s, onConfirm: t, text: l });
                };
        },
        545334: (e, t, s) => {
            "use strict";
            s.d(t, { d: () => n });
            var o = s(111677);
            const n = s.n(o)().gf5e9ea6;
        },
        916585: (e, t, s) => {
            "use strict";
            s.d(t, { k: () => i });
            var o = s(111677),
                n = s.n(o),
                r = s(437358);
            const i = (e, t) => {
                const { id_str: s, screen_name: o } = e,
                    i = (0, n().d78131b9)({ screenName: o });
                return { Icon: r.default, text: i, link: { pathname: "/i/lists/add_member", state: { userId: s } }, onClick: t };
            };
        },
        847607: (e, t, s) => {
            "use strict";
            s.d(t, { Aq: () => u, FK: () => _, GS: () => a, N1: () => p, PY: () => m, X6: () => g, cm: () => l });
            s(202784);
            var o = s(111677),
                n = s.n(o),
                r = s(391366),
                i = s(40904);
            const a = n().hb568af4,
                l = n().bb1cbeb6,
                c = (n().h2f62206, n().e67b2d65),
                d = n().f05597b3,
                u = (e) => c({ screenName: e }),
                m = (e) => d({ screenName: e }),
                p = (e, t, s) => {
                    const { muting: o, screen_name: n } = e;
                    return { text: o ? m(n) : u(n), onClick: o ? s : t, Icon: o ? r.default : i.default };
                },
                h = n().h59f52ee,
                f = n().eea0cbee,
                b = n().i29533b3,
                y = n().h129c3c3,
                _ = (e) => (e ? ((e) => b({ screenName: e }))(e) : h),
                g = (e) => (e ? ((e) => y({ screenName: e }))(e) : f);
        },
        417714: (e, t, s) => {
            "use strict";
            s.d(t, { l: () => d });
            s(202784);
            var o = s(111677),
                n = s.n(o),
                r = s(224823);
            const i = n().b3036480,
                a = n().b3036480,
                l = n().e68b09b4,
                c = n().h27b7407,
                d = ({ removeFollowerAction: e, user: t }) => {
                    const s = u(t);
                    return { Icon: r.default, text: i, onClick: () => e(s) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: a, label: l, text: c({ screenName: e.screen_name }) });
        },
        712816: (e, t, s) => {
            "use strict";
            s.d(t, { d: () => n });
            var o = s(111677);
            const n = { defaultToast: { text: s.n(o)().b6878b0a }, showToast: !0 };
        },
        967977: (e, t, s) => {
            "use strict";
            s.d(t, { C: () => r });
            var o = s(516951),
                n = s(615656);
            const r = { [n.ZP.ResourceNotFound]: { customAction: o.Z } };
        },
        48886: (e, t, s) => {
            "use strict";
            s.d(t, { q: () => n });
            var o = s(111677);
            const n = { defaultToast: { text: s.n(o)().a30b63da }, showToast: !0 };
        },
        879596: (e, t, s) => {
            "use strict";
            s.d(t, { D: () => n });
            var o = s(111677);
            const n = { defaultToast: { text: s.n(o)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => r });
            var o = s(615656),
                n = s(51525);
            const r = { [o.ZP.FollowError]: { customAction: n.w1 } };
        },
        973572: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => i });
            var o = s(476984),
                n = s.n(o),
                r = s(24949);
            const i = (0, r.wN)(r.PW, n());
        },
        163390: (e, t, s) => {
            "use strict";
            s.d(t, { OX: () => m, Od: () => d, PN: () => p, uq: () => c, wR: () => f });
            var o = s(251067),
                n = s(522171),
                r = s(111677),
                i = s.n(r),
                a = s(912021),
                l = s(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, a.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, o.fH)(o.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: c.nextItem, universal: !0 }, { description: i().g0048656, keys: c.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: c.refresh, universal: !1 }, { description: i().ha8209bc, keys: c.goHome, universal: !1 }, { description: i().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: i().eb75875e, keys: c.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: i().fa98627a, keys: c.goProfile, universal: !1 }, { description: i().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: i().b0041756, keys: c.goLists, universal: !1 }, { description: i().d4986f86, keys: c.goMessages, universal: !1 }, { description: i().h5860a68, keys: c.goGrok, universal: !1 }, { description: i().bb081ea2, keys: c.goSettings, universal: !1 }, { description: i().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: c.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: i().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: i().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: i().e736990a, keys: c.newMessage, universal: !1 },
                    { description: i().a9ae1e78, keys: c.search, universal: !1 },
                    { description: i().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: i().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: i().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: i().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: i().gb303814, keys: c.bookmark, universal: !1 },
                    { description: i().c03b1126, keys: c.mute, universal: !1 },
                    { description: i().ebd2abb2, keys: c.block, universal: !1 },
                    { description: i().hc6c5510, keys: "Enter", universal: !0 },
                    { description: i().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: i().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: i().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: i().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: i().b881560e, keys: c.video.mute, universal: !0 },
                    { description: i().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: i().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: i().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                h = (0, a.Z)((e) => {
                    const t = d(e),
                        s = m(),
                        o = p(),
                        n = {};
                    return (
                        [...s, ...o, ...t].forEach(({ description: e, keys: t }) => {
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
                    if (t) return { dataSet: { "at-shortcutkeys": h(e) } };
                };
        },
        409438: (e, t, s) => {
            "use strict";
            s.d(t, { Z: () => o });
            const o = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, t, s) => {
            "use strict";
            s.d(t, { M: () => i });
            var o = s(807896),
                n = s(202784),
                r = s(190286);
            const i = (e) => (t) => {
                const [s, i] = n.useState(null),
                    a = (e) =>
                        new Promise((t, s) => {
                            i({ resolve: t, reject: s, confirmationSheetProps: e });
                        });
                if (s) {
                    const { confirmationSheetProps: e, reject: t, resolve: a } = s;
                    return n.createElement(
                        r.Z,
                        (0, o.Z)({}, e, {
                            onCancel: () => {
                                t(), i(null);
                            },
                            onConfirm: () => {
                                a(), i(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, o.Z)({}, t, { confirm: a }));
            };
        },
        694180: (e, t, s) => {
            "use strict";
            s.d(t, { cM: () => b, dS: () => f, iY: () => y });
            var o = s(370751),
                n = s(399896),
                r = s(663550),
                i = s(499627),
                a = s(917799);
            const l = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                d = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, o.Z)([r.dx.IMPRESSION, r.dx.DWELL]),
                m = (0, o.Z)([r.AJ.TREND_VIEW, r.AJ.SPOTLIGHT_IMPRESSION]),
                p = (e) => ({ payload: { eventKey: e }, type: d });
            const h = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, s, { api: o }) => {
                        const { event: r, impression_id: i, promoted_trend_id: l } = e,
                            d = `trend-${l}-${r}`;
                        if (m.has(r) && h(s(), d)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: r, impression_id: i };
                        return (0, a._O)(t, { params: u, request: o.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(r)) return [p(d)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: t, itemType: s, params: o }) =>
                    (r, i, { api: l }) => {
                        const { event: d, impression_id: m } = o,
                            f = `${s}-${t ?? "undefined"}-${m ?? "undefined"}-${d ?? "undefined"}`;
                        if (u.has(d) && h(i(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            y = { ...o, earned: b, epoch_ms: Date.now() };
                        return (0, a._O)(r, { params: y, request: l.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: y }, (e, t) => {
                            if (!t && u.has(d)) return [p(f)];
                        });
                    },
                y =
                    (e) =>
                    (t, s, { api: o }) =>
                        (0, a._O)(t, { params: e, request: o.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            i.Z.register({
                promotedContent: function (e = l, t) {
                    if (!t) return e;
                    if (t.type === d) {
                        if (!t.payload) return e;
                        const { eventKey: s } = t.payload;
                        return { ...e, [s]: !0 };
                    }
                    return e;
                },
            });
        },
        994305: (e, t, s) => {
            "use strict";
            s.d(t, { yY: () => x, UD: () => L, Ic: () => T });
            var o = s(360917),
                n = s.n(o),
                r = s(506899),
                i = s(414742),
                a = s(125199);
            const l = new r.fK.Entity("recommendations", { user: a.Z }, { idAttribute: (e) => e.user?.rest_id });
            var c = s(801301),
                d = s.n(c),
                u = s(304819);
            const m = new r.fK.Entity("recommendations", { user: u.Z }, { idAttribute: (e) => e.user?.id_str });
            var p = s(387466),
                h = s(120071);
            const f = (e) => ({ ...h.k(e), excluded: [], pc: !0 }),
                b = ({ apiClient: e, featureSwitches: t }) => ({
                    fetch(s, o = {}) {
                        const n = { ...f(t), ...s, ...(0, p.Y)(t) };
                        return e.get("users/recommendations", n, o).then((e) => (0, r.Fv)(e, [m]));
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
                                return (0, r.Fv)(
                                    t.map(({ token: e, user_results: { result: t } }) => ({ token: e, user: t, user_id: t?.rest_id })).filter(({ user: e }) => e),
                                    [l],
                                );
                            }),
                });
            var y = s(499627),
                _ = s(917799),
                g = s(312771),
                E = s(56519);
            const I = "recommendations",
                v = 30,
                k = "rweb/recommendations/FETCH_REQUEST",
                w = "rweb/recommendations/FETCH_SUCCESS",
                S = "rweb/recommendations/FETCH_FAILURE",
                D = {},
                Z = ({ displayLocation: e, similarToUserId: t }) => e + (t ? `_${t}` : "");
            y.Z.register({
                [I]: function (e = D, t) {
                    if (!t?.meta) return e;
                    switch (t.type) {
                        case k: {
                            const s = Z(t.meta);
                            return { ...e, [s]: { ...e[s], fetchStatus: g.ZP.LOADING } };
                        }
                        case S: {
                            const s = Z(t.meta);
                            return { ...e, [s]: { ...e[s], fetchStatus: g.ZP.FAILED } };
                        }
                        case w: {
                            const s = Z(t.meta),
                                o = t.payload && t.payload.entities ? t.payload.entities : { recommendations: n() },
                                r = (t.payload && t.payload.result ? t.payload.result : C).map((e) => o.recommendations[e]);
                            return { ...e, [s]: { ...e[s], fetchStatus: g.ZP.LOADED, recommendations: r } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const P = [],
                C = [],
                T = (e, { displayLocation: t, similarToUserId: s }) => {
                    const o = e[I][Z({ displayLocation: t, similarToUserId: s })];
                    return o && o.recommendations ? o.recommendations : P;
                },
                L = (e, { displayLocation: t, similarToUserId: s }) => {
                    const o = e[I][Z({ displayLocation: t, similarToUserId: s })];
                    return o ? o.fetchStatus : g.ZP.NONE;
                },
                x = (e) => (t, s, o) => {
                    const r = s(),
                        { displayLocation: i, similarToUserId: a } = e,
                        l = T(r, { displayLocation: i, similarToUserId: a }),
                        c = L(r, { displayLocation: i, similarToUserId: a }) === g.ZP.LOADED;
                    return l && c
                        ? Promise.resolve(n())
                        : t(
                              (
                                  (e) =>
                                  (t, s, { api: o, featureSwitches: n }) => {
                                      const { displayLocation: r, itsInterests: i, limit: a = v, similarToUserId: l } = e,
                                          c = "profile_accounts_sidebar" === r && n.isTrue("rweb_recommendations_sidebar_graphql_enabled");
                                      return (0, _._O)(t, { request: c ? o.withEndpoint(b).fetchSidebarUserRecommendations : o.withEndpoint(b).fetch, params: { display_location: r, itsInterests: i, limit: a, user_id: l } })({ actionTypes: { REQUEST: k, SUCCESS: w, FAILURE: S }, context: "FETCH_RECOMMENDATIONS", meta: { displayLocation: r, similarToUserId: l } }, (e) => {
                                          if (e && e.entities) return [(0, E.dP)(e.entities)];
                                      });
                                  }
                              )(e),
                          );
                };
        },
        629196: (e, t, s) => {
            "use strict";
            s.d(t, { r: () => c });
            s(136728);
            var o = s(161821),
                n = s(390387),
                r = s(836255),
                i = s(255117),
                a = s(166506),
                l = s(919022);
            const c =
                (e, t) =>
                (s, c, { api: d, featureSwitches: u }) =>
                    s(l.ZP.mute(e, t)).then(() => {
                        const t = c(),
                            l = (0, o.Z)(r.Z.selectAll(t)).reduce((s, o) => {
                                if (null != o)
                                    if (o.user === e) s[o.id_str] = !0;
                                    else if (o.retweeted_status) {
                                        const n = r.Z.select(t, o.retweeted_status);
                                        n?.user === e && (s[o.id_str] = !0);
                                    }
                                return s;
                            }, {}),
                            d = (0, n._h)(c()),
                            u = d ? [(0, i.ZP)({ useLatest: !1, userId: d }).removeTweets(l), (0, i.ZP)({ useLatest: !0, userId: d }).removeTweets(l)] : [],
                            m = (0, a.k9)();
                        if (m.selectInitialFetchStatus(t) && !m.selectCanRefresh(t)) {
                            const s = (0, a.f8)(e, t, m);
                            s && u.push(s);
                        }
                        return s(u);
                    });
        },
        166506: (e, t, s) => {
            "use strict";
            s.d(t, { du: () => d, f8: () => u, k9: () => c });
            var o = s(503768),
                n = s(750085),
                r = s(962741),
                i = s(466015),
                a = s(919022),
                l = s(218951);
            const c = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(o.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                d = (e) => (t, s) => {
                    const o = s();
                    t(
                        e
                            .selectEntries(o)
                            .filter((e) => {
                                const t = e.type === r.ZP.User ? e.content.id : "",
                                    s = a.ZP.select(o, t);
                                return s && !s.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, s) => {
                    if (!s.selectEntries(t).find((t) => t.type === r.ZP.User && t.content.id === e)) {
                        const t = (0, i.OD)(e),
                            o = (0, i.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return s.injectEntry(o);
                    }
                };
        },
        164936: (e, t, s) => {
            "use strict";
            s.d(t, { ZP: () => u, r1: () => c });
            var o = s(15022),
                n = s(202784),
                r = (s(585488), s(512549)),
                i = s(952793),
                a = s(535338);
            const l = o.Z,
                c = ({ actions: e, jobId: t }) => {
                    const { jobData: s, viewer: o } = (0, a.p)(l, { jobId: t }),
                        r = s?.result?.id ?? "",
                        i = s?.result?.user_sentiment;
                    return n.createElement(d, { actions: e, jobId: t, relayId: r, userRelayId: o?.user_results?.result?.__id, userSentiment: i });
                },
                d = ({ actions: e, jobId: t, relayId: s, userRelayId: o, userSentiment: a }) => {
                    const l = (0, i.hC)("recruiting_job_recommendations_enabled");
                    return e && 0 !== e.length && l ? n.createElement(n.Fragment, null, e.includes(r.pN) && n.createElement(r.ZP, { jobId: t, relayId: s, type: r.pN, userRelayId: o, userSentiment: a }), e.includes(r.h5) && n.createElement(r.ZP, { jobId: t, relayId: s, type: r.h5, userRelayId: o, userSentiment: a })) : null;
                },
                u = d;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.WideLayout-9f4db315.22d639ba.js.map
