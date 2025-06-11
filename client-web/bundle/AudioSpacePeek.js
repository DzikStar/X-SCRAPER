"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpacePeek", "loader.AudioDock", "bundle.AudioSpaceDetail", "loader.AudioContextVoiceMedia"],
    {
        290402: (e, t, o) => {
            o.d(t, { Z: () => p });
            var r = o(807896),
                n = o(202784),
                a = o(182056),
                s = o(879113),
                l = o(392237),
                i = o(111677),
                c = o.n(i),
                d = o(968478);
            const u = c().aa6e3300,
                m = ({ retryMessage: e, ...t }, o) => {
                    const l = a.Z.isOnline();
                    return n.createElement(s.Z, (0, r.Z)({}, t, { icon: l ? void 0 : n.createElement(d.default, { style: h.icon }), retryMessage: l ? e : u }));
                },
                h = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = n.forwardRef(m);
        },
        333241: (e, t, o) => {
            o.d(t, { Z: () => E });
            o(136728);
            var r = o(202784),
                n = o(638236),
                a = o(811176),
                s = o(111677),
                l = o.n(s),
                i = o(415506),
                c = o(516951),
                d = o(443781),
                u = o(376293),
                m = o(847607),
                h = o(417714),
                p = o(988823);
            const f = "block",
                b = "mute",
                y = "removeFollower",
                g = "report",
                D = "share",
                v = l().j7bb1a43,
                k = l().hef5960c,
                E = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: o, onClose: s, onMute: l, onRemoveFollower: p, onReportUser: E, onShare: w, onUnblock: I, onUnmute: P, user: Z } = e,
                        _ = [],
                        C = (t, o) => {
                            const { confirm: r, onClose: n } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                r({ confirmButtonLabel: e, ...a })
                                    .then(o, c.Z)
                                    .finally(n);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !Z.protected &&
                        !Z.blocking &&
                        !Z.blocked_by &&
                        _.push({
                            Icon: n.Z,
                            onClick: () => {
                                s(), w();
                            },
                            testID: D,
                            text: k,
                        });
                    !Z.blocking &&
                        _.push({
                            ...(0, m.N1)(
                                Z,
                                () => {
                                    s(), l();
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
                                    C(e, p);
                                },
                                user: Z,
                            }),
                            testID: y,
                        }),
                        _.push((0, u.op)({ blockAction: (e) => C(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => C(e, I), user: Z })),
                        _.push({
                            Icon: i.default,
                            onClick: () => {
                                s(), E();
                            },
                            testID: g,
                            text: v({ screenName: Z.screen_name }),
                        });
                    const M = _.map(({ Icon: e, onClick: t, testID: o, text: r }) => ({ text: r, onClick: t, Icon: e, testID: o }));
                    return r.createElement(a.Z, { items: M, onCloseRequested: s });
                });
        },
        572067: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(202784),
                n = o(272175);
            const a = (e) => {
                const { canonical: t, description: o = "", image: a, imageAlt: s, imageH: l, imageType: i, imageW: c, title: d, ttl: u, type: m } = e;
                return r.createElement(n.ql, null, m ? r.createElement("meta", { content: m, property: "og:type" }) : null, t ? r.createElement("meta", { content: t, property: "og:url" }) : null, d ? r.createElement("meta", { content: d, property: "og:title" }) : null, r.createElement("meta", { content: o, property: "og:description" }), a ? r.createElement("meta", { content: a, property: "og:image" }) : null, i ? r.createElement("meta", { content: i, property: "og:image:type" }) : null, c ? r.createElement("meta", { content: c, property: "og:image:width" }) : null, l ? r.createElement("meta", { content: l, property: "og:image:height" }) : null, s ? r.createElement("meta", { content: s, property: "og:image:alt" }) : null, u ? r.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        864479: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(807896),
                n = o(202784),
                a = o(771099);
            const s = (e) => (t) => n.createElement(a.$6, null, (o) => n.createElement(e, (0, r.Z)({}, t, { isInSidebar: o })));
        },
        812190: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(202784),
                n = o(544239),
                a = o(872788),
                s = o(71620),
                l = o(668214),
                i = o(491963),
                c = o(709318);
            const d = (e, t) => (t.communityId ? i.ZP.select(e, t.communityId) : void 0),
                u = (e, t) => !!t.communityId && (0, c.H4)(e, t.communityId),
                m = ({ community: e, communityId: t, createLocalApiErrorHandler: o, isPinned: s, onActionButtonJoinClick: l, onPress: i, pinTimeline: c, shouldDisplayPin: d, style: u, thumbnailSize: m, unpinTimeline: h, withActionButton: p }) => {
                    const f = r.useMemo(() => e && { isPinned: s, handlePinOrUnpin: () => (s ? h({ id: t, name: e.name, type: a.FO.COMMUNITY }).catch(o) : c({ id: t, name: e.name, type: a.FO.COMMUNITY }).catch(o)) }, [e, t, o, s, c, h]),
                        b = d ? f : void 0;
                    if (e) {
                        const { is_nsfw: o, media: a, member_count: s, membersFacepileUrls: c, name: d, primary_community_topic: h } = e;
                        return r.createElement(n.Z, { communityId: t, isNsfw: o, media: a, memberCount: s, membersFacepile: c, name: d, onActionButtonJoinClick: l, onPress: i, style: u, thumbnailSize: m, topic: h?.topic_name, withActionButton: p, withPinAction: b });
                    }
                    return null;
                },
                h = (0, l.Z)()
                    .propsFromState(() => ({ community: d, isPinned: u }))
                    .propsFromActions(() => ({ pinTimeline: c.qM, unpinTimeline: c.bK, createLocalApiErrorHandler: (0, s.zr)("TOGGLE_PIN_COMMUNITY") }))(r.memo(m));
        },
        840685: (e, t, o) => {
            o.d(t, { Z: () => f });
            var r = o(202784),
                n = o(879113),
                a = o(668214),
                s = o(492057);
            const l = (0, a.Z)().propsFromState(() => ({ fetchStatus: s.tc }));
            var i = o(107267),
                c = o(71620),
                d = o(125363),
                u = o(491963);
            const m = "COMMUNITY_FETCHER",
                h = (e) => {
                    const t = e.fallbackToRouteParam ?? !0;
                    return e.communityId || t ? r.createElement(p, e) : null;
                };
            function p({ children: e, communityId: t, fetchStatus: o }) {
                const a = (function (e) {
                        const t = (0, d.I0)(),
                            o = (0, i.useRouteMatch)(),
                            n = r.useMemo(() => (0, c.zr)(m), []),
                            a = e || o.params.communityId,
                            s = r.useCallback(() => {
                                try {
                                    a && t(u.ZP.fetchOneIfNeeded(a));
                                } catch (e) {
                                    n(e);
                                }
                            }, [a, n, t]);
                        return r.useEffect(s, [s]), s;
                    })(t),
                    s = r.useCallback(() => e || null, [e]);
                return r.createElement(n.Z, { fetchStatus: o, onRequestRetry: a, render: s });
            }
            const f = l(r.memo(h));
        },
        293988: (e, t, o) => {
            o.d(t, { Z: () => w });
            var r = o(202784),
                n = o(154003),
                a = o(111677),
                s = o.n(a),
                l = o(74514),
                i = o(405303),
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
                y = s().bdba3e1a,
                g = s().c4da7d28,
                D = s().j87c21f4,
                v = s().iebc30ca,
                k = s().dc740eb2;
            class E extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": g, hoverLabel: { label: v }, icon: r.createElement(l.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": y, hoverLabel: { label: D }, icon: r.createElement(i.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
            const w = b(E);
        },
        62857: (e, t, o) => {
            o.d(t, { Z: () => _ });
            var r = o(807896),
                n = o(202784),
                a = o(476984),
                s = o.n(a),
                l = o(111677),
                i = o.n(l),
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
                g = o(973572),
                D = o(668214),
                v = o(919022);
            const k = (e, t) => t.userIds,
                E = (e, t) => {
                    const { filterPredicate: o = (e) => !!e, userIds: r } = t;
                    return r.filter((t) => {
                        const r = v.ZP.select(e, t);
                        return !!r && o(r);
                    });
                },
                w = (e, t) => {
                    const { userIds: o } = t;
                    return o.reduce((t, o) => {
                        const r = v.ZP.selectFetchStatus(e, o);
                        return r && (t[o] = r === b.ZP.NONE ? b.ZP.LOADING : r), t;
                    }, {});
                },
                I = (0, D.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, g.Z)(E, (e) => e),
                        fetchStatus: (0, g.Z)(E, w, k, (e, t, o) => {
                            let r = b.ZP.LOADED;
                            for (let n = 0; n < o.length; n++) {
                                const a = o[n];
                                if (-1 === e.indexOf(a)) {
                                    const e = t[a] || b.ZP.LOADING;
                                    r = r === b.ZP.LOADED ? e : r;
                                }
                                if (r === b.ZP.LOADED) break;
                            }
                            return r;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: v.ZP.fetchManyIfNeeded })),
                P = i().f5b426c2;
            class Z extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: o, fetchUsersIfNeeded: a, filterPredicate: s, userIds: l, ...i } = this.props;
                            return n.createElement(f, (0, r.Z)({}, i, { userIds: e }));
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
                    return n.createElement(d.Z, { "aria-label": P, fetchStatus: this.state.allUsersUnavailable ? b.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
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
            const _ = I(Z);
        },
        684511: (e, t, o) => {
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
            o.d(t, { $f: () => I, KV: () => y, LI: () => M, SC: () => w, Vt: () => v, ed: () => A, op: () => P });
            var r = o(202784),
                n = o(190286),
                a = o(111677),
                s = o.n(a),
                l = o(616894),
                i = o(314948),
                c = o(516951),
                d = o(163390);
            const u = s().cfd2f35e,
                m = s().f9e45cfb,
                h = s().fcd4d489,
                p = s().a6450e84,
                f = s().g353ad73,
                b = s().ad00a739,
                y = s().a9fd20be,
                g = s().j546fb79,
                D = s().c9623eeb,
                v = s().e133be4e,
                k = s().he43bca4,
                E = s().f5f01af6,
                w = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                I = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: p, text: t ? b({ screenName: e }) : f({ screenName: e }) }),
                P = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: r, testID: n, unblockAction: a, unblockSubtext: s, user: l }) => {
                    let i,
                        u = c.Z;
                    const m = M(l, o);
                    switch (r) {
                        case w.PROFILE:
                        case w.LIST_DETAIL:
                        case w.FOLLOWERS_LIST:
                            u = () => {
                                l.blocking ? a(m) : e(m);
                            };
                            break;
                        case w.TWEET:
                        case w.TWEET_CARET:
                        case w.RICH_FEEDBACK:
                            (i = d.uq.block),
                                (u = () => {
                                    l.blocking ? a(m) : e(m);
                                });
                    }
                    return { confirmation: m, onClick: u, testID: n, shortcutKey: i, Icon: Z(l.blocking), text: C(l), subText: _({ user: l, blockSubtext: t, unblockSubtext: s }) };
                },
                Z = (e) => (e ? i.default : l.default),
                _ = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                C = (e) => (e.blocking ? D({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                M = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: g({ screenName: e }), label: v, text: t ? E : k }))(e.screen_name, t) : I(e.screen_name, t)),
                A = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: a, headline: s, label: l, text: i } = e;
                    return r.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: l, confirmButtonType: a, headline: s, onCancel: o, onConfirm: t, text: i });
                };
        },
        545334: (e, t, o) => {
            o.d(t, { d: () => n });
            var r = o(111677);
            const n = o.n(r)().gf5e9ea6;
        },
        916585: (e, t, o) => {
            o.d(t, { k: () => s });
            var r = o(111677),
                n = o.n(r),
                a = o(437358);
            const s = (e, t) => {
                const { id_str: o, screen_name: r } = e,
                    s = (0, n().d78131b9)({ screenName: r });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: t };
            };
        },
        847607: (e, t, o) => {
            o.d(t, { Aq: () => u, FK: () => g, GS: () => l, N1: () => h, PY: () => m, X6: () => D, cm: () => i });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                a = o(391366),
                s = o(40904);
            const l = n().hb568af4,
                i = n().bb1cbeb6,
                c = (n().h2f62206, n().e67b2d65),
                d = n().f05597b3,
                u = (e) => c({ screenName: e }),
                m = (e) => d({ screenName: e }),
                h = (e, t, o) => {
                    const { muting: r, screen_name: n } = e;
                    return { text: r ? m(n) : u(n), onClick: r ? o : t, Icon: r ? a.default : s.default };
                },
                p = n().h59f52ee,
                f = n().eea0cbee,
                b = n().i29533b3,
                y = n().h129c3c3,
                g = (e) => (e ? ((e) => b({ screenName: e }))(e) : p),
                D = (e) => (e ? ((e) => y({ screenName: e }))(e) : f);
        },
        417714: (e, t, o) => {
            o.d(t, { l: () => d });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                a = o(224823);
            const s = n().b3036480,
                l = n().b3036480,
                i = n().e68b09b4,
                c = n().h27b7407,
                d = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: a.default, text: s, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: l, label: i, text: c({ screenName: e.screen_name }) });
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().b6878b0a }, showToast: !0 };
        },
        48886: (e, t, o) => {
            o.d(t, { q: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().a30b63da }, showToast: !0 };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(615656),
                n = o(51525);
            const a = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        973572: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(476984),
                n = o.n(r),
                a = o(24949);
            const s = (0, a.wN)(a.PW, n());
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => m, Od: () => d, PN: () => h, uq: () => c, wR: () => f });
            var r = o(251067),
                n = o(522171),
                a = o(111677),
                s = o.n(a),
                l = o(912021),
                i = o(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, l.Z)((e) => {
                    const t = e ? [{ description: s().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: c.nextItem, universal: !0 }, { description: s().g0048656, keys: c.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: c.refresh, universal: !1 }, { description: s().ha8209bc, keys: c.goHome, universal: !1 }, { description: s().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: s().eb75875e, keys: c.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: s().fa98627a, keys: c.goProfile, universal: !1 }, { description: s().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: s().b0041756, keys: c.goLists, universal: !1 }, { description: s().d4986f86, keys: c.goMessages, universal: !1 }, { description: s().h5860a68, keys: c.goGrok, universal: !1 }, { description: s().bb081ea2, keys: c.goSettings, universal: !1 }, { description: s().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: s().eee2ed92, keys: c.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = i.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: s().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: c.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: c.search, universal: !1 },
                    { description: s().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: c.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: c.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: c.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
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
                p = (0, l.Z)((e) => {
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
            o.d(t, { Z: () => r });
            const r = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, t, o) => {
            o.d(t, { M: () => s });
            var r = o(807896),
                n = o(202784),
                a = o(190286);
            const s = (e) => (t) => {
                const [o, s] = n.useState(null),
                    l = (e) =>
                        new Promise((t, o) => {
                            s({ resolve: t, reject: o, confirmationSheetProps: e });
                        });
                if (o) {
                    const { confirmationSheetProps: e, reject: t, resolve: l } = o;
                    return n.createElement(
                        a.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                t(), s(null);
                            },
                            onConfirm: () => {
                                l(), s(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, r.Z)({}, t, { confirm: l }));
            };
        },
        694180: (e, t, o) => {
            o.d(t, { cM: () => b, dS: () => f, iY: () => y });
            var r = o(370751),
                n = o(399896),
                a = o(663550),
                s = o(499627),
                l = o(917799);
            const i = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                d = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                m = (0, r.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: d });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: r }) => {
                        const { event: a, impression_id: s, promoted_trend_id: i } = e,
                            d = `trend-${i}-${a}`;
                        if (m.has(a) && p(o(), d)) return Promise.resolve();
                        const u = { promoted_trend_id: i, event: a, impression_id: s };
                        return (0, l._O)(t, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(a)) return [h(d)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: t, itemType: o, params: r }) =>
                    (a, s, { api: i }) => {
                        const { event: d, impression_id: m } = r,
                            f = `${o}-${t ?? "undefined"}-${m ?? "undefined"}-${d ?? "undefined"}`;
                        if (u.has(d) && p(s(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            y = { ...r, earned: b, epoch_ms: Date.now() };
                        return (0, l._O)(a, { params: y, request: i.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: y }, (e, t) => {
                            if (!t && u.has(d)) return [h(f)];
                        });
                    },
                y =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, l._O)(t, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = i, t) {
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
        629196: (e, t, o) => {
            o.d(t, { r: () => c });
            o(136728);
            var r = o(161821),
                n = o(390387),
                a = o(836255),
                s = o(255117),
                l = o(166506),
                i = o(919022);
            const c =
                (e, t) =>
                (o, c, { api: d, featureSwitches: u }) =>
                    o(i.ZP.mute(e, t)).then(() => {
                        const t = c(),
                            i = (0, r.Z)(a.Z.selectAll(t)).reduce((o, r) => {
                                if (null != r)
                                    if (r.user === e) o[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = a.Z.select(t, r.retweeted_status);
                                        n?.user === e && (o[r.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            d = (0, n._h)(c()),
                            u = d ? [(0, s.ZP)({ useLatest: !1, userId: d }).removeTweets(i), (0, s.ZP)({ useLatest: !0, userId: d }).removeTweets(i)] : [],
                            m = (0, l.k9)();
                        if (m.selectInitialFetchStatus(t) && !m.selectCanRefresh(t)) {
                            const o = (0, l.f8)(e, t, m);
                            o && u.push(o);
                        }
                        return o(u);
                    });
        },
        166506: (e, t, o) => {
            o.d(t, { du: () => d, f8: () => u, k9: () => c });
            var r = o(503768),
                n = o(750085),
                a = o(962741),
                s = o(466015),
                l = o(919022),
                i = o(218951);
            const c = () => (0, i.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                d = (e) => (t, o) => {
                    const r = o();
                    t(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const t = e.type === a.ZP.User ? e.content.id : "",
                                    o = l.ZP.select(r, t);
                                return o && !o.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, o) => {
                    if (!o.selectEntries(t).find((t) => t.type === a.ZP.User && t.content.id === e)) {
                        const t = (0, s.OD)(e),
                            r = (0, s.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return o.injectEntry(r);
                    }
                };
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(202784),
                n = o(476984),
                a = o.n(n),
                s = o(143778),
                l = o(750410),
                i = o(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class h extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: n, icon: a, loadingMessage: s, onRequestRetry: d, render: h, renderFailure: p, retryMessage: f, retryable: b } = this.props;
                    switch (n) {
                        case c:
                            return b ? r.createElement(l.Z, { icon: a, onRequestRetry: d, retryMessage: f }) : o ? r.createElement(i.m, { failureMessage: o }) : p();
                        case u:
                            return r.createElement(i.J, { "aria-label": e, color: t, loadingMessage: s });
                        case m:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(202784),
                n = o(325686),
                a = o(235902),
                s = o(885015),
                l = o(392237);
            function i({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: i } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: l.default.theme.colors[e] ?? l.default.theme.colors.borderColor };
                return o ? r.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(n.Z, { style: c.gapColumn }, r.createElement(n.Z, { style: [c.gap, d] })), r.createElement(n.Z, { style: c.gapText }, o), r.createElement(n.Z, { style: c.gapColumn }, r.createElement(n.Z, { style: [c.gap, d] }))) : r.createElement(n.Z, { style: [!t && c.root, i() && c.rootRedesign, c.gap, d] });
            }
            const c = l.default.create((e) => ({ borderColor: { backgroundColor: l.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: l.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(807896),
                n = o(202784),
                a = o(325686),
                s = o(392237);
            class l extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...s } = this.props,
                        l = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, i.column, o && i.withGutterColumn] }));
                    return n.createElement(a.Z, (0, r.Z)({ style: [t, i.root, o && i.withGutter] }, s), l);
                }
            }
            l.defaultProps = { withGutter: !1 };
            const i = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = l;
        },
        314948: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08l2.8-2.79 1.41 1.42-2.79 2.79c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08l-2.79 2.79-1.41-1.42 2.79-2.79C15.68 4.4 13.92 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        74514: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2C7.93 2 4.51 5.02 4 9.05L2.87 18H7.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4h4.24l-.64-5h-2.02l.38 3H5.13l.85-6.7C6.36 6.27 8.94 4 12 4V2zm0 18c-1.31 0-2.42-.83-2.83-2h5.66c-.41 1.17-1.52 2-2.83 2zm.3-12.29l1.41-1.42 1.76 1.76 4.29-4.72 1.48 1.34-5.7 6.28-3.24-3.24z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        155353: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        452693: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => n, Z: () => r });
            o(136728);
            const r = function (e, t) {
                return n(e, t);
            };
            function n(e, t) {
                return e.reduce(
                    (o, r, n) => {
                        const a = t ? t(r, n, e) : !!r;
                        return a && o[0].push(r), !a && o[1].push(r), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpacePeek.ee257fca.js.map
