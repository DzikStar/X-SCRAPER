"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpacePeek", "loader.AudioDock", "bundle.AudioSpaceDetail", "loader.AudioContextVoiceMedia", "icons/IconFeedback-js"],
    {
        290402: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(807896),
                r = n(202784),
                a = n(182056),
                s = n(879113),
                i = n(392237),
                l = n(111677),
                c = n.n(l),
                d = n(968478);
            const u = c().aa6e3300,
                m = ({ retryMessage: e, ...t }, n) => {
                    const i = a.Z.isOnline();
                    return r.createElement(s.Z, (0, o.Z)({}, t, { icon: i ? void 0 : r.createElement(d.default, { style: h.icon }), retryMessage: i ? e : u }));
                },
                h = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = r.forwardRef(m);
        },
        333241: (e, t, n) => {
            n.d(t, { Z: () => D });
            n(136728);
            var o = n(202784),
                r = n(638236),
                a = n(811176),
                s = n(111677),
                i = n.n(s),
                l = n(415506),
                c = n(516951),
                d = n(443781),
                u = n(376293),
                m = n(847607),
                h = n(417714),
                p = n(988823);
            const f = "block",
                b = "mute",
                y = "removeFollower",
                g = "report",
                v = "share",
                k = i().j7bb1a43,
                E = i().hef5960c,
                D = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: n, onClose: s, onMute: i, onRemoveFollower: p, onReportUser: D, onShare: w, onUnblock: C, onUnmute: P, user: Z } = e,
                        _ = [],
                        I = (t, n) => {
                            const { confirm: o, onClose: r } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                o({ confirmButtonLabel: e, ...a })
                                    .then(n, c.Z)
                                    .finally(r);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !Z.protected &&
                        !Z.blocking &&
                        !Z.blocked_by &&
                        _.push({
                            Icon: r.Z,
                            onClick: () => {
                                s(), w();
                            },
                            testID: v,
                            text: E,
                        });
                    !Z.blocking &&
                        _.push({
                            ...(0, m.N1)(
                                Z,
                                () => {
                                    s(), i();
                                },
                                () => {
                                    s(), P();
                                },
                            ),
                            testID: b,
                        });
                    Z.followed_by &&
                        _.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    I(e, p);
                                },
                                user: Z,
                            }),
                            testID: y,
                        }),
                        _.push((0, u.op)({ blockAction: (e) => I(e, n), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => I(e, C), user: Z })),
                        _.push({
                            Icon: l.default,
                            onClick: () => {
                                s(), D();
                            },
                            testID: g,
                            text: k({ screenName: Z.screen_name }),
                        });
                    const S = _.map(({ Icon: e, onClick: t, testID: n, text: o }) => ({ text: o, onClick: t, Icon: e, testID: n }));
                    return o.createElement(a.Z, { items: S, onCloseRequested: s });
                });
        },
        572067: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(202784),
                r = n(272175);
            const a = (e) => {
                const { canonical: t, description: n = "", image: a, imageAlt: s, imageH: i, imageType: l, imageW: c, title: d, ttl: u, type: m } = e;
                return o.createElement(r.ql, null, m ? o.createElement("meta", { content: m, property: "og:type" }) : null, t ? o.createElement("meta", { content: t, property: "og:url" }) : null, d ? o.createElement("meta", { content: d, property: "og:title" }) : null, o.createElement("meta", { content: n, property: "og:description" }), a ? o.createElement("meta", { content: a, property: "og:image" }) : null, l ? o.createElement("meta", { content: l, property: "og:image:type" }) : null, c ? o.createElement("meta", { content: c, property: "og:image:width" }) : null, i ? o.createElement("meta", { content: i, property: "og:image:height" }) : null, s ? o.createElement("meta", { content: s, property: "og:image:alt" }) : null, u ? o.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        864479: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(807896),
                r = n(202784),
                a = n(771099);
            const s = (e) => (t) => r.createElement(a.$6, null, (n) => r.createElement(e, (0, o.Z)({}, t, { isInSidebar: n })));
        },
        812190: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(202784),
                r = n(544239),
                a = n(872788),
                s = n(71620),
                i = n(668214),
                l = n(491963),
                c = n(709318);
            const d = (e, t) => (t.communityId ? l.ZP.select(e, t.communityId) : void 0),
                u = (e, t) => !!t.communityId && (0, c.H4)(e, t.communityId),
                m = ({ community: e, communityId: t, createLocalApiErrorHandler: n, isPinned: s, onActionButtonJoinClick: i, onPress: l, pinTimeline: c, shouldDisplayPin: d, style: u, thumbnailSize: m, unpinTimeline: h, withActionButton: p }) => {
                    const f = o.useMemo(() => e && { isPinned: s, handlePinOrUnpin: () => (s ? h({ id: t, name: e.name, type: a.FO.COMMUNITY }).catch(n) : c({ id: t, name: e.name, type: a.FO.COMMUNITY }).catch(n)) }, [e, t, n, s, c, h]),
                        b = d ? f : void 0;
                    if (e) {
                        const { is_nsfw: n, media: a, member_count: s, membersFacepileUrls: c, name: d, primary_community_topic: h } = e;
                        return o.createElement(r.Z, { communityId: t, isNsfw: n, media: a, memberCount: s, membersFacepile: c, name: d, onActionButtonJoinClick: i, onPress: l, style: u, thumbnailSize: m, topic: h?.topic_name, withActionButton: p, withPinAction: b });
                    }
                    return null;
                },
                h = (0, i.Z)()
                    .propsFromState(() => ({ community: d, isPinned: u }))
                    .propsFromActions(() => ({ pinTimeline: c.qM, unpinTimeline: c.bK, createLocalApiErrorHandler: (0, s.zr)("TOGGLE_PIN_COMMUNITY") }))(o.memo(m));
        },
        840685: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(202784),
                r = n(879113),
                a = n(668214),
                s = n(492057);
            const i = (0, a.Z)().propsFromState(() => ({ fetchStatus: s.tc }));
            var l = n(107267),
                c = n(71620),
                d = n(125363),
                u = n(491963);
            const m = "COMMUNITY_FETCHER",
                h = (e) => {
                    const t = e.fallbackToRouteParam ?? !0;
                    return e.communityId || t ? o.createElement(p, e) : null;
                };
            function p({ children: e, communityId: t, fetchStatus: n }) {
                const a = (function (e) {
                        const t = (0, d.I0)(),
                            n = (0, l.useRouteMatch)(),
                            r = o.useMemo(() => (0, c.zr)(m), []),
                            a = e || n.params.communityId,
                            s = o.useCallback(() => {
                                try {
                                    a && t(u.ZP.fetchOneIfNeeded(a));
                                } catch (e) {
                                    r(e);
                                }
                            }, [a, r, t]);
                        return o.useEffect(s, [s]), s;
                    })(t),
                    s = o.useCallback(() => e || null, [e]);
                return o.createElement(r.Z, { fetchStatus: n, onRequestRetry: a, render: s });
            }
            const f = i(o.memo(h));
        },
        293988: (e, t, n) => {
            n.d(t, { Z: () => w });
            var o = n(202784),
                r = n(154003),
                a = n(111677),
                s = n.n(a),
                i = n(74514),
                l = n(405303),
                c = n(684511),
                d = n(860174),
                u = n(71620),
                m = n(668214),
                h = n(257166),
                p = n(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                b = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                y = s().bdba3e1a,
                g = s().c4da7d28,
                v = s().j87c21f4,
                k = s().iebc30ca,
                E = s().dc740eb2;
            class D extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? o.createElement(r.ZP, { "aria-label": g, hoverLabel: { label: k }, icon: o.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : o.createElement(r.ZP, { "aria-label": y, hoverLabel: { label: v }, icon: o.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return o.createElement("div", null, this.state.showingPushPrompt ? o.createElement(c.Z, { fullScreen: !0, message: E }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: n, userId: o } = this.props;
                    return n(o, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const w = b(D);
        },
        62857: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var o = n(807896),
                r = n(202784),
                a = n(476984),
                s = n.n(a),
                i = n(111677),
                l = n.n(i),
                c = n(615656),
                d = n(290402),
                u = n(325686),
                m = n(240089),
                h = n(663550),
                p = n(409438);
            const f = ({ displayMode: e = p.Z.UserDetailed, renderUserCell: t, userIds: n }) =>
                r.createElement(
                    u.Z,
                    { role: "list" },
                    n.map((n, o) => (t ? t(n) : r.createElement(m.ZP, { decoration: m.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: n, promotedItemType: h.bj.USER, userId: n, withFollowsYou: !0 }))),
                );
            var b = n(312771),
                y = n(71620),
                g = n(973572),
                v = n(668214),
                k = n(919022);
            const E = (e, t) => t.userIds,
                D = (e, t) => {
                    const { filterPredicate: n = (e) => !!e, userIds: o } = t;
                    return o.filter((t) => {
                        const o = k.ZP.select(e, t);
                        return !!o && n(o);
                    });
                },
                w = (e, t) => {
                    const { userIds: n } = t;
                    return n.reduce((t, n) => {
                        const o = k.ZP.selectFetchStatus(e, n);
                        return o && (t[n] = o === b.ZP.NONE ? b.ZP.LOADING : o), t;
                    }, {});
                },
                C = (0, v.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, g.Z)(D, (e) => e),
                        fetchStatus: (0, g.Z)(D, w, E, (e, t, n) => {
                            let o = b.ZP.LOADED;
                            for (let r = 0; r < n.length; r++) {
                                const a = n[r];
                                if (-1 === e.indexOf(a)) {
                                    const e = t[a] || b.ZP.LOADING;
                                    o = o === b.ZP.LOADED ? e : o;
                                }
                                if (o === b.ZP.LOADED) break;
                            }
                            return o;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: k.ZP.fetchManyIfNeeded })),
                P = l().f5b426c2;
            class Z extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: n, fetchUsersIfNeeded: a, filterPredicate: s, userIds: i, ...l } = this.props;
                            return r.createElement(f, (0, o.Z)({}, l, { userIds: e }));
                        }),
                        (this._handleFetch = () => {
                            this._fetchUsersIfNeeded();
                        });
                }
                componentDidMount() {
                    this._fetchUsersIfNeeded();
                }
                componentDidUpdate(e) {
                    s()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded();
                }
                render() {
                    return r.createElement(d.Z, { "aria-label": P, fetchStatus: this.state.allUsersUnavailable ? b.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: n, userIds: o } = this.props;
                    n(o).then(
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
            const _ = C(Z);
        },
        684511: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(202784);
            const o = (0, n(523561).Z)({
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
            n.d(t, { $f: () => C, KV: () => y, LI: () => S, SC: () => w, Vt: () => k, ed: () => M, op: () => P });
            var o = n(202784),
                r = n(190286),
                a = n(111677),
                s = n.n(a),
                i = n(616894),
                l = n(314948),
                c = n(516951),
                d = n(163390);
            const u = s().cfd2f35e,
                m = s().f9e45cfb,
                h = s().fcd4d489,
                p = s().a6450e84,
                f = s().g353ad73,
                b = s().ad00a739,
                y = s().a9fd20be,
                g = s().j546fb79,
                v = s().c9623eeb,
                k = s().e133be4e,
                E = s().he43bca4,
                D = s().f5f01af6,
                w = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                C = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: p, text: t ? b({ screenName: e }) : f({ screenName: e }) }),
                P = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: n, source: o, testID: r, unblockAction: a, unblockSubtext: s, user: i }) => {
                    let l,
                        u = c.Z;
                    const m = S(i, n);
                    switch (o) {
                        case w.PROFILE:
                        case w.LIST_DETAIL:
                        case w.FOLLOWERS_LIST:
                            u = () => {
                                i.blocking ? a(m) : e(m);
                            };
                            break;
                        case w.TWEET:
                        case w.TWEET_CARET:
                        case w.RICH_FEEDBACK:
                            (l = d.uq.block),
                                (u = () => {
                                    i.blocking ? a(m) : e(m);
                                });
                    }
                    return { confirmation: m, onClick: u, testID: r, shortcutKey: l, Icon: Z(i.blocking), text: I(i), subText: _({ user: i, blockSubtext: t, unblockSubtext: s }) };
                },
                Z = (e) => (e ? l.default : i.default),
                _ = ({ blockSubtext: e, unblockSubtext: t, user: n }) => (!n.blocking && e ? e(n.screen_name) : n.blocking ? t : void 0),
                I = (e) => (e.blocking ? v({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                S = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: g({ screenName: e }), label: k, text: t ? D : E }))(e.screen_name, t) : C(e.screen_name, t)),
                M = ({ confirmation: e, handleConfirm: t, onClose: n }) => {
                    const { confirmButtonType: a, headline: s, label: i, text: l } = e;
                    return o.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: i, confirmButtonType: a, headline: s, onCancel: n, onConfirm: t, text: l });
                };
        },
        545334: (e, t, n) => {
            n.d(t, { d: () => r });
            var o = n(111677);
            const r = n.n(o)().gf5e9ea6;
        },
        916585: (e, t, n) => {
            n.d(t, { k: () => s });
            var o = n(111677),
                r = n.n(o),
                a = n(437358);
            const s = (e, t) => {
                const { id_str: n, screen_name: o } = e,
                    s = (0, r().d78131b9)({ screenName: o });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: n } }, onClick: t };
            };
        },
        847607: (e, t, n) => {
            n.d(t, { Aq: () => u, FK: () => g, GS: () => i, N1: () => h, PY: () => m, X6: () => v, cm: () => l });
            n(202784);
            var o = n(111677),
                r = n.n(o),
                a = n(391366),
                s = n(40904);
            const i = r().hb568af4,
                l = r().bb1cbeb6,
                c = (r().h2f62206, r().e67b2d65),
                d = r().f05597b3,
                u = (e) => c({ screenName: e }),
                m = (e) => d({ screenName: e }),
                h = (e, t, n) => {
                    const { muting: o, screen_name: r } = e;
                    return { text: o ? m(r) : u(r), onClick: o ? n : t, Icon: o ? a.default : s.default };
                },
                p = r().h59f52ee,
                f = r().eea0cbee,
                b = r().i29533b3,
                y = r().h129c3c3,
                g = (e) => (e ? ((e) => b({ screenName: e }))(e) : p),
                v = (e) => (e ? ((e) => y({ screenName: e }))(e) : f);
        },
        417714: (e, t, n) => {
            n.d(t, { l: () => d });
            n(202784);
            var o = n(111677),
                r = n.n(o),
                a = n(224823);
            const s = r().b3036480,
                i = r().b3036480,
                l = r().e68b09b4,
                c = r().h27b7407,
                d = ({ removeFollowerAction: e, user: t }) => {
                    const n = u(t);
                    return { Icon: a.default, text: s, onClick: () => e(n) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: l, text: c({ screenName: e.screen_name }) });
        },
        712816: (e, t, n) => {
            n.d(t, { d: () => r });
            var o = n(111677);
            const r = { defaultToast: { text: n.n(o)().b6878b0a }, showToast: !0 };
        },
        48886: (e, t, n) => {
            n.d(t, { q: () => r });
            var o = n(111677);
            const r = { defaultToast: { text: n.n(o)().a30b63da }, showToast: !0 };
        },
        879596: (e, t, n) => {
            n.d(t, { D: () => r });
            var o = n(111677);
            const r = { defaultToast: { text: n.n(o)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(615656),
                r = n(51525);
            const a = { [o.ZP.FollowError]: { customAction: r.w1 } };
        },
        973572: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(476984),
                r = n.n(o),
                a = n(24949);
            const s = (0, a.wN)(a.PW, r());
        },
        163390: (e, t, n) => {
            n.d(t, { OX: () => m, Od: () => d, PN: () => h, uq: () => c, wR: () => f });
            var o = n(251067),
                r = n(522171),
                a = n(111677),
                s = n.n(a),
                i = n(912021),
                l = n(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, i.Z)((e) => {
                    const t = e ? [{ description: s().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, o.fH)(o.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: c.nextItem, universal: !0 }, { description: s().g0048656, keys: c.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: c.refresh, universal: !1 }, { description: s().ha8209bc, keys: c.goHome, universal: !1 }, { description: s().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: s().eb75875e, keys: c.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: s().fa98627a, keys: c.goProfile, universal: !1 }, { description: s().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: s().b0041756, keys: c.goLists, universal: !1 }, { description: s().d4986f86, keys: c.goMessages, universal: !1 }, { description: s().h5860a68, keys: c.goGrok, universal: !1 }, { description: s().bb081ea2, keys: c.goSettings, universal: !1 }, { description: s().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: s().eee2ed92, keys: c.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: s().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: c.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: c.search, universal: !1 },
                    { description: s().fe731016, keys: r.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: r.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: r.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: r.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: c.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: c.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: c.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: r.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: s().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                h = () => [
                    { description: s().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: s().b881560e, keys: c.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                p = (0, i.Z)((e) => {
                    const t = d(e),
                        n = m(),
                        o = h(),
                        r = {};
                    return (
                        [...n, ...o, ...t].forEach(({ description: e, keys: t }) => {
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
                    if (t) return { dataSet: { "at-shortcutkeys": p(e) } };
                };
        },
        409438: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, t, n) => {
            n.d(t, { M: () => s });
            var o = n(807896),
                r = n(202784),
                a = n(190286);
            const s = (e) => (t) => {
                const [n, s] = r.useState(null),
                    i = (e) =>
                        new Promise((t, n) => {
                            s({ resolve: t, reject: n, confirmationSheetProps: e });
                        });
                if (n) {
                    const { confirmationSheetProps: e, reject: t, resolve: i } = n;
                    return r.createElement(
                        a.Z,
                        (0, o.Z)({}, e, {
                            onCancel: () => {
                                t(), s(null);
                            },
                            onConfirm: () => {
                                i(), s(null);
                            },
                        }),
                    );
                }
                return r.createElement(e, (0, o.Z)({}, t, { confirm: i }));
            };
        },
        694180: (e, t, n) => {
            n.d(t, { cM: () => b, dS: () => f, iY: () => y });
            var o = n(370751),
                r = n(399896),
                a = n(663550),
                s = n(499627),
                i = n(917799);
            const l = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                d = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, o.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                m = (0, o.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: d });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, n, { api: o }) => {
                        const { event: a, impression_id: s, promoted_trend_id: l } = e,
                            d = `trend-${l}-${a}`;
                        if (m.has(a) && p(n(), d)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: a, impression_id: s };
                        return (0, i._O)(t, { params: u, request: o.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(a)) return [h(d)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: t, itemType: n, params: o }) =>
                    (a, s, { api: l }) => {
                        const { event: d, impression_id: m } = o,
                            f = `${n}-${t ?? "undefined"}-${m ?? "undefined"}-${d ?? "undefined"}`;
                        if (u.has(d) && p(s(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            y = { ...o, earned: b, epoch_ms: Date.now() };
                        return (0, i._O)(a, { params: y, request: l.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: y }, (e, t) => {
                            if (!t && u.has(d)) return [h(f)];
                        });
                    },
                y =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, i._O)(t, { params: e, request: o.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = l, t) {
                    if (!t) return e;
                    if (t.type === d) {
                        if (!t.payload) return e;
                        const { eventKey: n } = t.payload;
                        return { ...e, [n]: !0 };
                    }
                    return e;
                },
            });
        },
        629196: (e, t, n) => {
            n.d(t, { r: () => c });
            n(136728);
            var o = n(161821),
                r = n(390387),
                a = n(836255),
                s = n(255117),
                i = n(166506),
                l = n(919022);
            const c =
                (e, t) =>
                (n, c, { api: d, featureSwitches: u }) =>
                    n(l.ZP.mute(e, t)).then(() => {
                        const t = c(),
                            l = (0, o.Z)(a.Z.selectAll(t)).reduce((n, o) => {
                                if (null != o)
                                    if (o.user === e) n[o.id_str] = !0;
                                    else if (o.retweeted_status) {
                                        const r = a.Z.select(t, o.retweeted_status);
                                        r?.user === e && (n[o.id_str] = !0);
                                    }
                                return n;
                            }, {}),
                            d = (0, r._h)(c()),
                            u = d ? [(0, s.ZP)({ useLatest: !1, userId: d }).removeTweets(l), (0, s.ZP)({ useLatest: !0, userId: d }).removeTweets(l)] : [],
                            m = (0, i.k9)();
                        if (m.selectInitialFetchStatus(t) && !m.selectCanRefresh(t)) {
                            const n = (0, i.f8)(e, t, m);
                            n && u.push(n);
                        }
                        return n(u);
                    });
        },
        166506: (e, t, n) => {
            n.d(t, { du: () => d, f8: () => u, k9: () => c });
            var o = n(503768),
                r = n(750085),
                a = n(962741),
                s = n(466015),
                i = n(919022),
                l = n(218951);
            const c = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(o.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                d = (e) => (t, n) => {
                    const o = n();
                    t(
                        e
                            .selectEntries(o)
                            .filter((e) => {
                                const t = e.type === a.ZP.User ? e.content.id : "",
                                    n = i.ZP.select(o, t);
                                return n && !n.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, n) => {
                    if (!n.selectEntries(t).find((t) => t.type === a.ZP.User && t.content.id === e)) {
                        const t = (0, s.OD)(e),
                            o = (0, s.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return n.injectEntry(o);
                    }
                };
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(202784),
                r = n(476984),
                a = n.n(r),
                s = n(143778),
                i = n(750410),
                l = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class h extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: a, loadingMessage: s, onRequestRetry: d, render: h, renderFailure: p, retryMessage: f, retryable: b } = this.props;
                    switch (r) {
                        case c:
                            return b ? o.createElement(i.Z, { icon: a, onRequestRetry: d, retryMessage: f }) : n ? o.createElement(l.m, { failureMessage: n }) : p();
                        case u:
                            return o.createElement(l.J, { "aria-label": e, color: t, loadingMessage: s });
                        case m:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(325686),
                a = n(235902),
                s = n(885015),
                i = n(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: l } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? o.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, o.createElement(r.Z, { style: c.gapColumn }, o.createElement(r.Z, { style: [c.gap, d] })), o.createElement(r.Z, { style: c.gapText }, n), o.createElement(r.Z, { style: c.gapColumn }, o.createElement(r.Z, { style: [c.gap, d] }))) : o.createElement(r.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                r = n(202784),
                a = n(325686),
                s = n(392237);
            class i extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...s } = this.props,
                        i = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, l.column, n && l.withGutterColumn] }));
                    return r.createElement(a.Z, (0, o.Z)({ style: [t, l.root, n && l.withGutter] }, s), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const l = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => o });
            class o {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const t = this._load(e);
                    return !(t instanceof Promise) && !!t;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, t) {
                    if (this._cache[e]) return this._cache[e];
                    const n = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = n), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((t) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(t)
                                          .catch(() => t(!1))
                                    : t(!0);
                            }),
                    );
                }
            }
            new o();
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => b });
            n(571372);
            var o = n(202784),
                r = n(325686),
                a = n(392237),
                s = n(111677),
                i = n.n(s),
                l = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                m = n(173739);
            const h = i().jcf3e7a2;
            function p({ animation: e, autoplay: t }) {
                const [n, a] = o.useState(t),
                    [s, i] = o.useState(0);
                return (
                    o.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && i(Math.round(e.currentTime));
                        });
                    }, [e]),
                    o.createElement(
                        r.Z,
                        { style: f.container },
                        o.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? o.createElement(l.default, null) : o.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        o.createElement(d.ZP, { style: f.frames }, `${s}/${e.totalFrames}`),
                        o.createElement(
                            r.Z,
                            { style: f.slider },
                            o.createElement(m.Z, {
                                "aria-label": h,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), a(!1);
                                },
                                value: s,
                            }),
                        ),
                    )
                );
            }
            const f = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function b(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: s, onError: i, withControls: l } = e,
                    c = o.useRef(void 0),
                    d = o.useRef({ animationLoaded: !1 }),
                    u = o.useRef(null),
                    [m, h] = o.useState(!1);
                return (
                    o.useEffect(() => {
                        function o(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = d.current;
                        r ||
                            ((d.current.animationLoaded = !0),
                            y.load().then((r) => {
                                if (r && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = r.loadAnimation(a);
                                    (c.current = l),
                                        (l.onError = (e) => {
                                            const t = new g(e);
                                            "function" == typeof i && i(t), o(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            h(!0), t && (l.play(), s && s());
                                        }),
                                        l.addEventListener("complete", () => {
                                            o(l);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, s, i, l]),
                    o.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    o.createElement(r.Z, null, o.createElement(r.Z, { style: [e.animationContainerStyle, v.centerAnimation] }, o.createElement("div", { ref: u, style: e.animationStyle }), l && c.current && m && o.createElement(p, { animation: c.current, autoplay: t })))
                );
            }
            b.Prepare = function () {
                return (
                    o.useEffect(() => {
                        y.load();
                    }, []),
                    null
                );
            };
            const y = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class g extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, g), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const v = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(111677),
                a = n.n(r),
                s = n(149170),
                i = n(40644);
            const l = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: n = s.default, iconSize: r = "normal", isDisabled: a, onClick: c, preventFocusShift: d, renderActionMenu: u, style: m, testID: h, withDarkBackground: p = !1 }) {
                const f = o.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    b = o.useMemo(() => ({ label: t }), [t]);
                return o.createElement(i.ZP, { Icon: n, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: b, iconSize: r, isDisabled: a, onPress: f, preventFocusShift: d, renderMenu: u, style: m, testID: h });
            };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => E });
            var o = n(202784),
                r = n(325686),
                a = n(461756),
                s = n(731708),
                i = n(58881),
                l = n(530732),
                c = n(224162),
                d = n(491915),
                u = n(392237),
                m = n(551611),
                h = n(111677),
                p = n.n(h),
                f = n(891198),
                b = n(537392),
                y = n(280278);
            const g = p().e8d93005,
                v = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                k = ({ color: e, count: t }) => {
                    const n = (0, f.wl)(t, !0);
                    return o.createElement(b.ZP, null, ({ containerWidth: r }) => {
                        return o.createElement(y.ZP, { color: e, count: t, size: "subtext2", style: [v.count, ((a = r), a < u.default.theme.breakpoints.small && v.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || n.length >= 5 ? g(t) : n) : void 0);
                        var a;
                    });
                };
            class E extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: i } = this.props;
                            return o.createElement(c.ZP.Consumer, null, ({ direction: l }) => o.createElement(s.ZP, { color: e ? n : a, dir: l, style: [C.inner, e && "blue500" === n && C.blue500] }, o.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), i, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: r, iconSize: a, isActive: s, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                m = i.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                h = d && s && !e?.isHovered;
                            return o.createElement(l.Z, { hoverLabel: r, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, w[h ? "haloBackground" : n], !c && C.iconBackground, "small" === a && C.iconSmallBoundingBox, h && C.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: r, isFaded: s, onAnimationEnd: i, onAnimationStart: l, onError: c, showAnimation: h, transitionAnimationUrl: p } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && h) return o.createElement(d.ZP, { animation: p || m.Bf, animationContainerStyle: D[t], animationStyle: Z, onAnimationEnd: i, onAnimationStart: l, onError: c });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return o.createElement(a, { style: [D[t], !r && s && C.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? o.createElement(k, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: s, isDisabled: i, isPresentational: c, keyboardShortcut: m, link: h, preventFocusShift: p, renderMenu: f, renderWrapper: b = o.Fragment, style: y, testID: g } = this.props,
                        v = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return o.createElement(
                        r.Z,
                        { style: [C.root, y] },
                        o.createElement(
                            b,
                            null,
                            c
                                ? this._renderContent(s)
                                : o.createElement(l.Z, { "aria-haspopup": f ? "menu" : void 0, "aria-label": e, disabled: i, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: h, onClick: this._handlePress, preventFocusShift: p, renderMenu: f, style: [C.triggerAreaRoot, C.outlineNone], testID: g }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: o } = e,
                                          r = s || n || o || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        v ? o.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            E.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const D = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                w = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                C = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                P = "224.5%",
                Z = { width: P, height: P };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => r, ZP: () => s });
            var o = n(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends o.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const s = new a();
        },
        790093: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                s = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                s = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
        226597: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                s = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
        155353: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                s = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
        662678: (e, t, n) => {
            n.d(t, { G: () => r, Z: () => o });
            n(136728);
            const o = function (e, t) {
                return r(e, t);
            };
            function r(e, t) {
                return e.reduce(
                    (n, o, r) => {
                        const a = t ? t(o, r, e) : !!o;
                        return a && n[0].push(o), !a && n[1].push(o), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpacePeek.dc08971a.js.map
