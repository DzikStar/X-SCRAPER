"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpacePeek", "bundle.AudioSpaceDetail", "loader.AudioContextVoiceMedia", "icons/IconFollowArrowLeft-js", "icons/IconSound-js", "icons/IconSparkle-js"],
    {
        290402: (e, t, o) => {
            o.d(t, { Z: () => p });
            var r = o(807896),
                n = o(202784),
                a = o(182056),
                s = o(879113),
                l = o(392237),
                i = o(111677),
                d = o.n(i),
                c = o(968478);
            const u = d().aa6e3300,
                m = ({ retryMessage: e, ...t }, o) => {
                    const l = a.Z.isOnline();
                    return n.createElement(s.Z, (0, r.Z)({}, t, { icon: l ? void 0 : n.createElement(c.default, { style: h.icon }), retryMessage: l ? e : u }));
                },
                h = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = n.forwardRef(m);
        },
        333241: (e, t, o) => {
            o.d(t, { Z: () => w });
            o(136728);
            var r = o(202784),
                n = o(638236),
                a = o(811176),
                s = o(111677),
                l = o.n(s),
                i = o(415506),
                d = o(516951),
                c = o(443781),
                u = o(376293),
                m = o(847607),
                h = o(417714),
                p = o(988823);
            const f = "block",
                b = "mute",
                D = "removeFollower",
                y = "report",
                g = "share",
                v = l().j7bb1a43,
                k = l().hef5960c,
                w = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, c.QZ)(),
                        { onBlock: o, onClose: s, onMute: l, onRemoveFollower: p, onReportUser: w, onShare: E, onUnblock: M, onUnmute: I, user: P } = e,
                        Z = [],
                        C = (t, o) => {
                            const { confirm: r, onClose: n } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                r({ confirmButtonLabel: e, ...a })
                                    .then(o, d.Z)
                                    .finally(n);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !P.protected &&
                        !P.blocking &&
                        !P.blocked_by &&
                        Z.push({
                            Icon: n.Z,
                            onClick: () => {
                                s(), E();
                            },
                            testID: g,
                            text: k,
                        });
                    !P.blocking &&
                        Z.push({
                            ...(0, m.N1)(
                                P,
                                () => {
                                    s(), l();
                                },
                                () => {
                                    s(), I();
                                },
                            ),
                            testID: b,
                        });
                    P.followed_by &&
                        Z.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    C(e, p);
                                },
                                user: P,
                            }),
                            testID: D,
                        }),
                        Z.push((0, u.op)({ blockAction: (e) => C(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => C(e, M), user: P })),
                        Z.push({
                            Icon: i.default,
                            onClick: () => {
                                s(), w();
                            },
                            testID: y,
                            text: v({ screenName: P.screen_name }),
                        });
                    const _ = Z.map(({ Icon: e, onClick: t, testID: o, text: r }) => ({ text: r, onClick: t, Icon: e, testID: o }));
                    return r.createElement(a.Z, { items: _, onCloseRequested: s });
                });
        },
        572067: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(202784),
                n = o(272175);
            const a = (e) => {
                const { canonical: t, description: o = "", image: a, imageAlt: s, imageH: l, imageType: i, imageW: d, title: c, ttl: u, type: m } = e;
                return r.createElement(n.ql, null, m ? r.createElement("meta", { content: m, property: "og:type" }) : null, t ? r.createElement("meta", { content: t, property: "og:url" }) : null, c ? r.createElement("meta", { content: c, property: "og:title" }) : null, r.createElement("meta", { content: o, property: "og:description" }), a ? r.createElement("meta", { content: a, property: "og:image" }) : null, i ? r.createElement("meta", { content: i, property: "og:image:type" }) : null, d ? r.createElement("meta", { content: d, property: "og:image:width" }) : null, l ? r.createElement("meta", { content: l, property: "og:image:height" }) : null, s ? r.createElement("meta", { content: s, property: "og:image:alt" }) : null, u ? r.createElement("meta", { content: u, property: "og:ttl" }) : null);
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
                d = o(709318);
            const c = (e, t) => (t.communityId ? i.ZP.select(e, t.communityId) : void 0),
                u = (e, t) => !!t.communityId && (0, d.H4)(e, t.communityId),
                m = ({ community: e, communityId: t, createLocalApiErrorHandler: o, isPinned: s, onActionButtonJoinClick: l, onPress: i, pinTimeline: d, shouldDisplayPin: c, style: u, thumbnailSize: m, unpinTimeline: h, withActionButton: p }) => {
                    const f = r.useMemo(() => e && { isPinned: s, handlePinOrUnpin: () => (s ? h({ id: t, name: e.name, type: a.FO.COMMUNITY }).catch(o) : d({ id: t, name: e.name, type: a.FO.COMMUNITY }).catch(o)) }, [e, t, o, s, d, h]),
                        b = c ? f : void 0;
                    if (e) {
                        const { is_nsfw: o, media: a, member_count: s, membersFacepileUrls: d, name: c, primary_community_topic: h } = e;
                        return r.createElement(n.Z, { communityId: t, isNsfw: o, media: a, memberCount: s, membersFacepile: d, name: c, onActionButtonJoinClick: l, onPress: i, style: u, thumbnailSize: m, topic: h?.topic_name, withActionButton: p, withPinAction: b });
                    }
                    return null;
                },
                h = (0, l.Z)()
                    .propsFromState(() => ({ community: c, isPinned: u }))
                    .propsFromActions(() => ({ pinTimeline: d.qM, unpinTimeline: d.bK, createLocalApiErrorHandler: (0, s.zr)("TOGGLE_PIN_COMMUNITY") }))(r.memo(m));
        },
        840685: (e, t, o) => {
            o.d(t, { Z: () => f });
            var r = o(202784),
                n = o(879113),
                a = o(668214),
                s = o(492057);
            const l = (0, a.Z)().propsFromState(() => ({ fetchStatus: s.tc }));
            var i = o(107267),
                d = o(71620),
                c = o(125363),
                u = o(491963);
            const m = "COMMUNITY_FETCHER",
                h = (e) => {
                    const t = e.fallbackToRouteParam ?? !0;
                    return e.communityId || t ? r.createElement(p, e) : null;
                };
            function p({ children: e, communityId: t, fetchStatus: o }) {
                const a = (function (e) {
                        const t = (0, c.I0)(),
                            o = (0, i.useRouteMatch)(),
                            n = r.useMemo(() => (0, d.zr)(m), []),
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
            o.d(t, { Z: () => E });
            var r = o(202784),
                n = o(154003),
                a = o(111677),
                s = o.n(a),
                l = o(74514),
                i = o(405303),
                d = o(684511),
                c = o(860174),
                u = o(71620),
                m = o(668214),
                h = o(257166),
                p = o(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                b = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                D = s().bdba3e1a,
                y = s().c4da7d28,
                g = s().j87c21f4,
                v = s().iebc30ca,
                k = s().dc740eb2;
            class w extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": y, hoverLabel: { label: v }, icon: r.createElement(l.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": D, hoverLabel: { label: g }, icon: r.createElement(i.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(d.Z, { fullScreen: !0, message: k }) : null, this._renderButton());
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
            const E = b(w);
        },
        62857: (e, t, o) => {
            o.d(t, { Z: () => Z });
            var r = o(807896),
                n = o(202784),
                a = o(476984),
                s = o.n(a),
                l = o(111677),
                i = o.n(l),
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
            var b = o(312771),
                D = o(71620),
                y = o(973572),
                g = o(668214),
                v = o(919022);
            const k = (e, t) => t.userIds,
                w = (e, t) => {
                    const { filterPredicate: o = (e) => !!e, userIds: r } = t;
                    return r.filter((t) => {
                        const r = v.ZP.select(e, t);
                        return !!r && o(r);
                    });
                },
                E = (e, t) => {
                    const { userIds: o } = t;
                    return o.reduce((t, o) => {
                        const r = v.ZP.selectFetchStatus(e, o);
                        return r && (t[o] = r === b.ZP.NONE ? b.ZP.LOADING : r), t;
                    }, {});
                },
                M = (0, g.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, y.Z)(w, (e) => e),
                        fetchStatus: (0, y.Z)(w, E, k, (e, t, o) => {
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
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, D.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: v.ZP.fetchManyIfNeeded })),
                I = i().f5b426c2;
            class P extends n.Component {
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
                    return n.createElement(c.Z, { "aria-label": I, fetchStatus: this.state.allUsersUnavailable ? b.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
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
            const Z = M(P);
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
        376293: (e, t, o) => {
            o.d(t, { $f: () => M, KV: () => D, LI: () => _, SC: () => E, Vt: () => v, ed: () => A, op: () => I });
            var r = o(202784),
                n = o(190286),
                a = o(111677),
                s = o.n(a),
                l = o(616894),
                i = o(314948),
                d = o(516951),
                c = o(163390);
            const u = s().cfd2f35e,
                m = s().f9e45cfb,
                h = s().fcd4d489,
                p = s().a6450e84,
                f = s().g353ad73,
                b = s().ad00a739,
                D = s().a9fd20be,
                y = s().j546fb79,
                g = s().c9623eeb,
                v = s().e133be4e,
                k = s().he43bca4,
                w = s().f5f01af6,
                E = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                M = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: p, text: t ? b({ screenName: e }) : f({ screenName: e }) }),
                I = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: r, testID: n, unblockAction: a, unblockSubtext: s, user: l }) => {
                    let i,
                        u = d.Z;
                    const m = _(l, o);
                    switch (r) {
                        case E.PROFILE:
                        case E.LIST_DETAIL:
                        case E.FOLLOWERS_LIST:
                            u = () => {
                                l.blocking ? a(m) : e(m);
                            };
                            break;
                        case E.TWEET:
                        case E.TWEET_CARET:
                        case E.RICH_FEEDBACK:
                            (i = c.uq.block),
                                (u = () => {
                                    l.blocking ? a(m) : e(m);
                                });
                    }
                    return { confirmation: m, onClick: u, testID: n, shortcutKey: i, Icon: P(l.blocking), text: C(l), subText: Z({ user: l, blockSubtext: t, unblockSubtext: s }) };
                },
                P = (e) => (e ? i.default : l.default),
                Z = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                C = (e) => (e.blocking ? g({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                _ = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: y({ screenName: e }), label: v, text: t ? w : k }))(e.screen_name, t) : M(e.screen_name, t)),
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
            o.d(t, { Aq: () => u, FK: () => y, GS: () => l, N1: () => h, PY: () => m, X6: () => g, cm: () => i });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                a = o(391366),
                s = o(40904);
            const l = n().hb568af4,
                i = n().bb1cbeb6,
                d = (n().h2f62206, n().e67b2d65),
                c = n().f05597b3,
                u = (e) => d({ screenName: e }),
                m = (e) => c({ screenName: e }),
                h = (e, t, o) => {
                    const { muting: r, screen_name: n } = e;
                    return { text: r ? m(n) : u(n), onClick: r ? o : t, Icon: r ? a.default : s.default };
                },
                p = n().h59f52ee,
                f = n().eea0cbee,
                b = n().i29533b3,
                D = n().h129c3c3,
                y = (e) => (e ? ((e) => b({ screenName: e }))(e) : p),
                g = (e) => (e ? ((e) => D({ screenName: e }))(e) : f);
        },
        417714: (e, t, o) => {
            o.d(t, { l: () => c });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                a = o(224823);
            const s = n().b3036480,
                l = n().b3036480,
                i = n().e68b09b4,
                d = n().h27b7407,
                c = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: a.default, text: s, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: l, label: i, text: d({ screenName: e.screen_name }) });
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
            o.d(t, { OX: () => m, Od: () => c, PN: () => h, uq: () => d, wR: () => f });
            var r = o(251067),
                n = o(522171),
                a = o(111677),
                s = o.n(a),
                l = o(912021),
                i = o(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, l.Z)((e) => {
                    const t = e ? [{ description: s().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: d.nextItem, universal: !0 }, { description: s().g0048656, keys: d.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: d.refresh, universal: !1 }, { description: s().ha8209bc, keys: d.goHome, universal: !1 }, { description: s().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: s().eb75875e, keys: d.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: s().fa98627a, keys: d.goProfile, universal: !1 }, { description: s().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: s().b0041756, keys: d.goLists, universal: !1 }, { description: s().d4986f86, keys: d.goMessages, universal: !1 }, { description: s().h5860a68, keys: d.goGrok, universal: !1 }, { description: s().bb081ea2, keys: d.goSettings, universal: !1 }, { description: s().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...t, { description: s().eee2ed92, keys: d.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
                }),
                u = i.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: s().ab3d53f8, keys: d.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: d.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: d.search, universal: !1 },
                    { description: s().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: d.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: d.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: d.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: s().b488758c, keys: d.toggleDMDrawer, universal: !1 },
                ],
                h = () => [
                    { description: s().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: s().b881560e, keys: d.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                p = (0, l.Z)((e) => {
                    const t = c(e),
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
            o.d(t, { cM: () => b, dS: () => f, iY: () => D });
            var r = o(370751),
                n = o(399896),
                a = o(663550),
                s = o(499627),
                l = o(917799);
            const i = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                m = (0, r.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: r }) => {
                        const { event: a, impression_id: s, promoted_trend_id: i } = e,
                            c = `trend-${i}-${a}`;
                        if (m.has(a) && p(o(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: i, event: a, impression_id: s };
                        return (0, l._O)(t, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(a)) return [h(c)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: t, itemType: o, params: r }) =>
                    (a, s, { api: i }) => {
                        const { event: c, impression_id: m } = r,
                            f = `${o}-${t ?? "undefined"}-${m ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && p(s(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            D = { ...r, earned: b, epoch_ms: Date.now() };
                        return (0, l._O)(a, { params: D, request: i.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: D }, (e, t) => {
                            if (!t && u.has(c)) return [h(f)];
                        });
                    },
                D =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, l._O)(t, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = i, t) {
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
        629196: (e, t, o) => {
            o.d(t, { r: () => d });
            o(136728);
            var r = o(161821),
                n = o(390387),
                a = o(836255),
                s = o(255117),
                l = o(166506),
                i = o(919022);
            const d =
                (e, t) =>
                (o, d, { api: c, featureSwitches: u }) =>
                    o(i.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            i = (0, r.Z)(a.Z.selectAll(t)).reduce((o, r) => {
                                if (null != r)
                                    if (r.user === e) o[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = a.Z.select(t, r.retweeted_status);
                                        n?.user === e && (o[r.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            c = (0, n._h)(d()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(i), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(i)] : [],
                            m = (0, l.k9)();
                        if (m.selectInitialFetchStatus(t) && !m.selectCanRefresh(t)) {
                            const o = (0, l.f8)(e, t, m);
                            o && u.push(o);
                        }
                        return o(u);
                    });
        },
        166506: (e, t, o) => {
            o.d(t, { du: () => c, f8: () => u, k9: () => d });
            var r = o(503768),
                n = o(750085),
                a = o(962741),
                s = o(466015),
                l = o(919022),
                i = o(218951);
            const d = () => (0, i.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                c = (e) => (t, o) => {
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
            const d = "failed",
                c = "loaded",
                u = "loading",
                m = "none";
            class h extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === c,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: n, icon: a, loadingMessage: s, onRequestRetry: c, render: h, renderFailure: p, retryMessage: f, retryable: b } = this.props;
                    switch (n) {
                        case d:
                            return b ? r.createElement(l.Z, { icon: a, onRequestRetry: c, retryMessage: f }) : o ? r.createElement(i.m, { failureMessage: o }) : p();
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
                    c = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: l.default.theme.colors[e] ?? l.default.theme.colors.borderColor };
                return o ? r.createElement(s.Z, { style: !t && d.root, withGutter: !0 }, r.createElement(n.Z, { style: d.gapColumn }, r.createElement(n.Z, { style: [d.gap, c] })), r.createElement(n.Z, { style: d.gapText }, o), r.createElement(n.Z, { style: d.gapColumn }, r.createElement(n.Z, { style: [d.gap, c] }))) : r.createElement(n.Z, { style: [!t && d.root, i() && d.rootRedesign, d.gap, c] });
            }
            const d = l.default.create((e) => ({ borderColor: { backgroundColor: l.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: l.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => d });
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
                d = l;
        },
        246492: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        264171: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        226597: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        926628: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        262009: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpacePeek.7193ed0a.js.map
