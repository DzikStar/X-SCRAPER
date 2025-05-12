"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpacePeek", "loader.AudioDock", "bundle.AudioSpaceDetail", "loader.AudioContextVoiceMedia"],
    {
        290402: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(807896),
                r = o(202784),
                a = o(182056),
                s = o(879113),
                l = o(392237),
                i = o(674132),
                c = o.n(i),
                d = o(968478);
            const u = c().aa6e3300,
                m = ({ retryMessage: e, ...t }, o) => {
                    const l = a.Z.isOnline();
                    return r.createElement(s.Z, (0, n.Z)({}, t, { icon: l ? void 0 : r.createElement(d.default, { style: h.icon }), retryMessage: l ? e : u }));
                },
                h = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = r.forwardRef(m);
        },
        333241: (e, t, o) => {
            o.d(t, { Z: () => E });
            o(136728);
            var n = o(202784),
                r = o(638236),
                a = o(811176),
                s = o(674132),
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
                k = l().j7bb1a43,
                v = l().hef5960c,
                E = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: o, onClose: s, onMute: l, onRemoveFollower: p, onReportUser: E, onShare: w, onUnblock: C, onUnmute: P, user: M } = e,
                        I = [],
                        _ = (t, o) => {
                            const { confirm: n, onClose: r } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                n({ confirmButtonLabel: e, ...a })
                                    .then(o, c.Z)
                                    .finally(r);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !M.protected &&
                        !M.blocking &&
                        !M.blocked_by &&
                        I.push({
                            Icon: r.Z,
                            onClick: () => {
                                s(), w();
                            },
                            testID: D,
                            text: v,
                        });
                    !M.blocking &&
                        I.push({
                            ...(0, m.N1)(
                                M,
                                () => {
                                    s(), l();
                                },
                                () => {
                                    s(), P();
                                },
                            ),
                            testID: b,
                        });
                    M.followed_by &&
                        I.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    _(e, p);
                                },
                                user: M,
                            }),
                            testID: y,
                        }),
                        I.push((0, u.op)({ blockAction: (e) => _(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => _(e, C), user: M })),
                        I.push({
                            Icon: i.default,
                            onClick: () => {
                                s(), E();
                            },
                            testID: g,
                            text: k({ screenName: M.screen_name }),
                        });
                    const Z = I.map(({ Icon: e, onClick: t, testID: o, text: n }) => ({ text: n, onClick: t, Icon: e, testID: o }));
                    return n.createElement(a.Z, { items: Z, onCloseRequested: s });
                });
        },
        572067: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(202784),
                r = o(272175);
            const a = (e) => {
                const { canonical: t, description: o = "", image: a, imageAlt: s, imageH: l, imageType: i, imageW: c, title: d, ttl: u, type: m } = e;
                return n.createElement(r.ql, null, m ? n.createElement("meta", { content: m, property: "og:type" }) : null, t ? n.createElement("meta", { content: t, property: "og:url" }) : null, d ? n.createElement("meta", { content: d, property: "og:title" }) : null, n.createElement("meta", { content: o, property: "og:description" }), a ? n.createElement("meta", { content: a, property: "og:image" }) : null, i ? n.createElement("meta", { content: i, property: "og:image:type" }) : null, c ? n.createElement("meta", { content: c, property: "og:image:width" }) : null, l ? n.createElement("meta", { content: l, property: "og:image:height" }) : null, s ? n.createElement("meta", { content: s, property: "og:image:alt" }) : null, u ? n.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        864479: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(807896),
                r = o(202784),
                a = o(771099);
            const s = (e) => (t) => r.createElement(a.$6, null, (o) => r.createElement(e, (0, n.Z)({}, t, { isInSidebar: o })));
        },
        812190: (e, t, o) => {
            o.d(t, { Z: () => h });
            var n = o(202784),
                r = o(544239),
                a = o(872788),
                s = o(71620),
                l = o(668214),
                i = o(491963),
                c = o(709318);
            const d = (e, t) => (t.communityId ? i.ZP.select(e, t.communityId) : void 0),
                u = (e, t) => !!t.communityId && (0, c.H4)(e, t.communityId),
                m = ({ community: e, communityId: t, createLocalApiErrorHandler: o, isPinned: s, onActionButtonJoinClick: l, onPress: i, pinTimeline: c, shouldDisplayPin: d, style: u, thumbnailSize: m, unpinTimeline: h, withActionButton: p }) => {
                    const f = n.useMemo(() => e && { isPinned: s, handlePinOrUnpin: () => (s ? h({ id: t, name: e.name, type: a.FO.COMMUNITY }).catch(o) : c({ id: t, name: e.name, type: a.FO.COMMUNITY }).catch(o)) }, [e, t, o, s, c, h]),
                        b = d ? f : void 0;
                    if (e) {
                        const { is_nsfw: o, media: a, member_count: s, membersFacepileUrls: c, name: d, primary_community_topic: h } = e;
                        return n.createElement(r.Z, { communityId: t, isNsfw: o, media: a, memberCount: s, membersFacepile: c, name: d, onActionButtonJoinClick: l, onPress: i, style: u, thumbnailSize: m, topic: h?.topic_name, withActionButton: p, withPinAction: b });
                    }
                    return null;
                },
                h = (0, l.Z)()
                    .propsFromState(() => ({ community: d, isPinned: u }))
                    .propsFromActions(() => ({ pinTimeline: c.qM, unpinTimeline: c.bK, createLocalApiErrorHandler: (0, s.zr)("TOGGLE_PIN_COMMUNITY") }))(n.memo(m));
        },
        840685: (e, t, o) => {
            o.d(t, { Z: () => f });
            var n = o(202784),
                r = o(879113),
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
                    return e.communityId || t ? n.createElement(p, e) : null;
                };
            function p({ children: e, communityId: t, fetchStatus: o }) {
                const a = (function (e) {
                        const t = (0, d.I0)(),
                            o = (0, i.useRouteMatch)(),
                            r = n.useMemo(() => (0, c.zr)(m), []),
                            a = e || o.params.communityId,
                            s = n.useCallback(() => {
                                try {
                                    a && t(u.ZP.fetchOneIfNeeded(a));
                                } catch (e) {
                                    r(e);
                                }
                            }, [a, r, t]);
                        return n.useEffect(s, [s]), s;
                    })(t),
                    s = n.useCallback(() => e || null, [e]);
                return n.createElement(r.Z, { fetchStatus: o, onRequestRetry: a, render: s });
            }
            const f = l(n.memo(h));
        },
        293988: (e, t, o) => {
            o.d(t, { Z: () => w });
            var n = o(202784),
                r = o(154003),
                a = o(674132),
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
                k = s().iebc30ca,
                v = s().dc740eb2;
            class E extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? n.createElement(r.ZP, { "aria-label": g, hoverLabel: { label: k }, icon: n.createElement(l.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : n.createElement(r.ZP, { "aria-label": y, hoverLabel: { label: D }, icon: n.createElement(i.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(c.Z, { fullScreen: !0, message: v }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: o, userId: n } = this.props;
                    return o(n, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const w = b(E);
        },
        62857: (e, t, o) => {
            o.d(t, { Z: () => I });
            var n = o(807896),
                r = o(202784),
                a = o(476984),
                s = o.n(a),
                l = o(674132),
                i = o.n(l),
                c = o(615656),
                d = o(290402),
                u = o(325686),
                m = o(240089),
                h = o(663550),
                p = o(409438);
            const f = ({ displayMode: e = p.Z.UserDetailed, renderUserCell: t, userIds: o }) =>
                r.createElement(
                    u.Z,
                    { role: "list" },
                    o.map((o, n) => (t ? t(o) : r.createElement(m.ZP, { decoration: m.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: o, promotedItemType: h.bj.USER, userId: o, withFollowsYou: !0 }))),
                );
            var b = o(312771),
                y = o(71620),
                g = o(973572),
                D = o(668214),
                k = o(919022);
            const v = (e, t) => t.userIds,
                E = (e, t) => {
                    const { filterPredicate: o = (e) => !!e, userIds: n } = t;
                    return n.filter((t) => {
                        const n = k.ZP.select(e, t);
                        return !!n && o(n);
                    });
                },
                w = (e, t) => {
                    const { userIds: o } = t;
                    return o.reduce((t, o) => {
                        const n = k.ZP.selectFetchStatus(e, o);
                        return n && (t[o] = n === b.ZP.NONE ? b.ZP.LOADING : n), t;
                    }, {});
                },
                C = (0, D.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, g.Z)(E, (e) => e),
                        fetchStatus: (0, g.Z)(E, w, v, (e, t, o) => {
                            let n = b.ZP.LOADED;
                            for (let r = 0; r < o.length; r++) {
                                const a = o[r];
                                if (-1 === e.indexOf(a)) {
                                    const e = t[a] || b.ZP.LOADING;
                                    n = n === b.ZP.LOADED ? e : n;
                                }
                                if (n === b.ZP.LOADED) break;
                            }
                            return n;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: k.ZP.fetchManyIfNeeded })),
                P = i().f5b426c2;
            class M extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: o, fetchUsersIfNeeded: a, filterPredicate: s, userIds: l, ...i } = this.props;
                            return r.createElement(f, (0, n.Z)({}, i, { userIds: e }));
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
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: o, userIds: n } = this.props;
                    o(n).then(
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
            const I = C(M);
        },
        684511: (e, t, o) => {
            o.d(t, { Z: () => n });
            o(202784);
            const n = (0, o(523561).Z)({
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
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
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
            o.d(t, { $f: () => C, KV: () => y, LI: () => Z, SC: () => w, Vt: () => k, ed: () => S, op: () => P });
            var n = o(202784),
                r = o(190286),
                a = o(674132),
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
                k = s().e133be4e,
                v = s().he43bca4,
                E = s().f5f01af6,
                w = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                C = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: p, text: t ? b({ screenName: e }) : f({ screenName: e }) }),
                P = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: n, testID: r, unblockAction: a, unblockSubtext: s, user: l }) => {
                    let i,
                        u = c.Z;
                    const m = Z(l, o);
                    switch (n) {
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
                    return { confirmation: m, onClick: u, testID: r, shortcutKey: i, Icon: M(l.blocking), text: _(l), subText: I({ user: l, blockSubtext: t, unblockSubtext: s }) };
                },
                M = (e) => (e ? i.default : l.default),
                I = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                _ = (e) => (e.blocking ? D({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                Z = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: g({ screenName: e }), label: k, text: t ? E : v }))(e.screen_name, t) : C(e.screen_name, t)),
                S = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: a, headline: s, label: l, text: i } = e;
                    return n.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: l, confirmButtonType: a, headline: s, onCancel: o, onConfirm: t, text: i });
                };
        },
        545334: (e, t, o) => {
            o.d(t, { d: () => r });
            var n = o(674132);
            const r = o.n(n)().gf5e9ea6;
        },
        916585: (e, t, o) => {
            o.d(t, { k: () => s });
            var n = o(674132),
                r = o.n(n),
                a = o(437358);
            const s = (e, t) => {
                const { id_str: o, screen_name: n } = e,
                    s = (0, r().d78131b9)({ screenName: n });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: t };
            };
        },
        847607: (e, t, o) => {
            o.d(t, { Aq: () => u, FK: () => g, GS: () => l, N1: () => h, PY: () => m, X6: () => D, cm: () => i });
            o(202784);
            var n = o(674132),
                r = o.n(n),
                a = o(391366),
                s = o(40904);
            const l = r().hb568af4,
                i = r().bb1cbeb6,
                c = (r().h2f62206, r().e67b2d65),
                d = r().f05597b3,
                u = (e) => c({ screenName: e }),
                m = (e) => d({ screenName: e }),
                h = (e, t, o) => {
                    const { muting: n, screen_name: r } = e;
                    return { text: n ? m(r) : u(r), onClick: n ? o : t, Icon: n ? a.default : s.default };
                },
                p = r().h59f52ee,
                f = r().eea0cbee,
                b = r().i29533b3,
                y = r().h129c3c3,
                g = (e) => (e ? ((e) => b({ screenName: e }))(e) : p),
                D = (e) => (e ? ((e) => y({ screenName: e }))(e) : f);
        },
        417714: (e, t, o) => {
            o.d(t, { l: () => d });
            o(202784);
            var n = o(674132),
                r = o.n(n),
                a = o(224823);
            const s = r().b3036480,
                l = r().b3036480,
                i = r().e68b09b4,
                c = r().h27b7407,
                d = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: a.default, text: s, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: l, label: i, text: c({ screenName: e.screen_name }) });
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => r });
            var n = o(674132);
            const r = { defaultToast: { text: o.n(n)().b6878b0a }, showToast: !0 };
        },
        48886: (e, t, o) => {
            o.d(t, { q: () => r });
            var n = o(674132);
            const r = { defaultToast: { text: o.n(n)().a30b63da }, showToast: !0 };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => r });
            var n = o(674132);
            const r = { defaultToast: { text: o.n(n)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(615656),
                r = o(51525);
            const a = { [n.ZP.FollowError]: { customAction: r.w1 } };
        },
        973572: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(476984),
                r = o.n(n),
                a = o(24949);
            const s = (0, a.wN)(a.PW, r());
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => m, Od: () => d, PN: () => h, uq: () => c, wR: () => f });
            var n = o(251067),
                r = o(522171),
                a = o(674132),
                s = o.n(a),
                l = o(912021),
                i = o(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, l.Z)((e) => {
                    const t = e ? [{ description: s().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: c.nextItem, universal: !0 }, { description: s().g0048656, keys: c.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: c.refresh, universal: !1 }, { description: s().ha8209bc, keys: c.goHome, universal: !1 }, { description: s().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: s().eb75875e, keys: c.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: s().fa98627a, keys: c.goProfile, universal: !1 }, { description: s().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: s().b0041756, keys: c.goLists, universal: !1 }, { description: s().d4986f86, keys: c.goMessages, universal: !1 }, { description: s().h5860a68, keys: c.goGrok, universal: !1 }, { description: s().bb081ea2, keys: c.goSettings, universal: !1 }, { description: s().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: s().eee2ed92, keys: c.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = i.ZP.isMac() ? "⌘" : "CTRL",
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
                p = (0, l.Z)((e) => {
                    const t = d(e),
                        o = m(),
                        n = h(),
                        r = {};
                    return (
                        [...o, ...n, ...t].forEach(({ description: e, keys: t }) => {
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
        409438: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, t, o) => {
            o.d(t, { M: () => s });
            var n = o(807896),
                r = o(202784),
                a = o(190286);
            const s = (e) => (t) => {
                const [o, s] = r.useState(null),
                    l = (e) =>
                        new Promise((t, o) => {
                            s({ resolve: t, reject: o, confirmationSheetProps: e });
                        });
                if (o) {
                    const { confirmationSheetProps: e, reject: t, resolve: l } = o;
                    return r.createElement(
                        a.Z,
                        (0, n.Z)({}, e, {
                            onCancel: () => {
                                t(), s(null);
                            },
                            onConfirm: () => {
                                l(), s(null);
                            },
                        }),
                    );
                }
                return r.createElement(e, (0, n.Z)({}, t, { confirm: l }));
            };
        },
        694180: (e, t, o) => {
            o.d(t, { cM: () => b, dS: () => f, iY: () => y });
            var n = o(370751),
                r = o(399896),
                a = o(663550),
                s = o(499627),
                l = o(917799);
            const i = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                d = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, n.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                m = (0, n.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: d });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: n }) => {
                        const { event: a, impression_id: s, promoted_trend_id: i } = e,
                            d = `trend-${i}-${a}`;
                        if (m.has(a) && p(o(), d)) return Promise.resolve();
                        const u = { promoted_trend_id: i, event: a, impression_id: s };
                        return (0, l._O)(t, { params: u, request: n.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && m.has(a)) return [h(d)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: t, itemType: o, params: n }) =>
                    (a, s, { api: i }) => {
                        const { event: d, impression_id: m } = n,
                            f = `${o}-${t ?? "undefined"}-${m ?? "undefined"}-${d ?? "undefined"}`;
                        if (u.has(d) && p(s(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            y = { ...n, earned: b, epoch_ms: Date.now() };
                        return (0, l._O)(a, { params: y, request: i.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: y }, (e, t) => {
                            if (!t && u.has(d)) return [h(f)];
                        });
                    },
                y =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, l._O)(t, { params: e, request: n.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
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
            var n = o(161821),
                r = o(390387),
                a = o(836255),
                s = o(255117),
                l = o(166506),
                i = o(919022);
            const c =
                (e, t) =>
                (o, c, { api: d, featureSwitches: u }) =>
                    o(i.ZP.mute(e, t)).then(() => {
                        const t = c(),
                            i = (0, n.Z)(a.Z.selectAll(t)).reduce((o, n) => {
                                if (null != n)
                                    if (n.user === e) o[n.id_str] = !0;
                                    else if (n.retweeted_status) {
                                        const r = a.Z.select(t, n.retweeted_status);
                                        r?.user === e && (o[n.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            d = (0, r._h)(c()),
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
            var n = o(503768),
                r = o(750085),
                a = o(962741),
                s = o(466015),
                l = o(919022),
                i = o(218951);
            const c = () => (0, i.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                d = (e) => (t, o) => {
                    const n = o();
                    t(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const t = e.type === a.ZP.User ? e.content.id : "",
                                    o = l.ZP.select(n, t);
                                return o && !o.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, o) => {
                    if (!o.selectEntries(t).find((t) => t.type === a.ZP.User && t.content.id === e)) {
                        const t = (0, s.OD)(e),
                            n = (0, s.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return o.injectEntry(n);
                    }
                };
        },
        661810: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(325686),
                a = o(392237);
            function s({ spacing: e, style: t }) {
                return n.createElement(r.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => h });
            var n = o(202784),
                r = o(476984),
                a = o.n(r),
                s = o(143778),
                l = o(750410),
                i = o(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class h extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: r, icon: a, loadingMessage: s, onRequestRetry: d, render: h, renderFailure: p, retryMessage: f, retryable: b } = this.props;
                    switch (r) {
                        case c:
                            return b ? n.createElement(l.Z, { icon: a, onRequestRetry: d, retryMessage: f }) : o ? n.createElement(i.m, { failureMessage: o }) : p();
                        case u:
                            return n.createElement(i.J, { "aria-label": e, color: t, loadingMessage: s });
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
            var n = o(202784),
                r = o(325686),
                a = o(235902),
                s = o(885015),
                l = o(392237);
            function i({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: i } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: l.default.theme.colors[e] ?? l.default.theme.colors.borderColor };
                return o ? n.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] })), n.createElement(r.Z, { style: c.gapText }, o), n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] }))) : n.createElement(r.Z, { style: [!t && c.root, i() && c.rootRedesign, c.gap, d] });
            }
            const c = l.default.create((e) => ({ borderColor: { backgroundColor: l.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: l.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                r = o(202784),
                a = o(325686),
                s = o(392237);
            class l extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...s } = this.props,
                        l = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, i.column, o && i.withGutterColumn] }));
                    return r.createElement(a.Z, (0, n.Z)({ style: [t, i.root, o && i.withGutter] }, s), l);
                }
            }
            l.defaultProps = { withGutter: !1 };
            const i = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = l;
        },
        941978: (e, t, o) => {
            o.d(t, { C: () => n });
            class n {
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
                    const o = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = o), this._cache[e];
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
            new n();
        },
        491915: (e, t, o) => {
            o.d(t, { ZP: () => b });
            o(571372);
            var n = o(202784),
                r = o(325686),
                a = o(392237),
                s = o(674132),
                l = o.n(s),
                i = o(643442),
                c = o(466445),
                d = o(731708),
                u = o(154003),
                m = o(173739);
            const h = l().jcf3e7a2;
            function p({ animation: e, autoplay: t }) {
                const [o, a] = n.useState(t),
                    [s, l] = n.useState(0);
                return (
                    n.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && l(Math.round(e.currentTime));
                        });
                    }, [e]),
                    n.createElement(
                        r.Z,
                        { style: f.container },
                        n.createElement(u.ZP, {
                            "aria-label": o ? "Pause" : "Play",
                            icon: o ? n.createElement(i.default, null) : n.createElement(c.default, null),
                            onClick: function () {
                                o ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        n.createElement(d.ZP, { style: f.frames }, `${s}/${e.totalFrames}`),
                        n.createElement(
                            r.Z,
                            { style: f.slider },
                            n.createElement(m.Z, {
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
                const { autoplay: t = !0, loop: o = !1, onAnimationEnd: a, onAnimationStart: s, onError: l, withControls: i } = e,
                    c = n.useRef(void 0),
                    d = n.useRef({ animationLoaded: !1 }),
                    u = n.useRef(null),
                    [m, h] = n.useState(!1);
                return (
                    n.useEffect(() => {
                        function n(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = d.current;
                        r ||
                            ((d.current.animationLoaded = !0),
                            y.load().then((r) => {
                                if (r && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: o, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        i = r.loadAnimation(a);
                                    (c.current = i),
                                        (i.onError = (e) => {
                                            const t = new g(e);
                                            "function" == typeof l && l(t), n(i, t);
                                        }),
                                        i.addEventListener("DOMLoaded", () => {
                                            h(!0), t && (i.play(), s && s());
                                        }),
                                        i.addEventListener("complete", () => {
                                            n(i);
                                        });
                                }
                            }));
                    }, [e.animation, t, o, a, s, l, i]),
                    n.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    n.createElement(r.Z, null, n.createElement(r.Z, { style: [e.animationContainerStyle, D.centerAnimation] }, n.createElement("div", { ref: u, style: e.animationStyle }), i && c.current && m && n.createElement(p, { animation: c.current, autoplay: t })))
                );
            }
            b.Prepare = function () {
                return (
                    n.useEffect(() => {
                        y.load();
                    }, []),
                    null
                );
            };
            const y = { load: () => o.e("ondemand.LottieWeb").then(o.t.bind(o, 548888, 23)) };
            class g extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, g), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const D = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(674132),
                a = o.n(r),
                s = o(149170),
                l = o(40644);
            const i = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = i, Icon: o = s.default, iconSize: r = "normal", isDisabled: a, onClick: c, preventFocusShift: d, renderActionMenu: u, style: m, testID: h, withDarkBackground: p = !1 }) {
                const f = n.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    b = n.useMemo(() => ({ label: t }), [t]);
                return n.createElement(l.ZP, { Icon: o, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: b, iconSize: r, isDisabled: a, onPress: f, preventFocusShift: d, renderMenu: u, style: m, testID: h });
            };
        },
        40644: (e, t, o) => {
            o.d(t, { ZP: () => v });
            var n = o(202784),
                r = o(325686),
                a = o(461756),
                s = o(731708),
                l = o(58881),
                i = o(530732),
                c = o(224162),
                d = o(491915),
                u = o(392237),
                m = o(551611),
                h = o(674132),
                p = o.n(h),
                f = o(891198),
                b = o(537392),
                y = o(280278);
            const g = p().e8d93005,
                D = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                k = ({ color: e, count: t }) => {
                    const o = (0, f.wl)(t, !0);
                    return n.createElement(b.ZP, null, ({ containerWidth: r }) => {
                        return n.createElement(y.ZP, { color: e, count: t, size: "subtext2", style: [D.count, ((a = r), a < u.default.theme.breakpoints.small && D.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || o.length >= 5 ? g(t) : o) : void 0);
                        var a;
                    });
                };
            class v extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: o, color: a, decoration: l } = this.props;
                            return n.createElement(c.ZP.Consumer, null, ({ direction: i }) => n.createElement(s.ZP, { color: e ? o : a, dir: i, style: [C.inner, e && "blue500" === o && C.blue500] }, n.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), l, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: o, hoverLabel: r, iconSize: a, isActive: s, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                m = l.Z.generate({ backgroundColor: u.default.theme.colors[o], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                h = d && s && !e?.isHovered;
                            return n.createElement(i.Z, { hoverLabel: r, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, w[h ? "haloBackground" : o], !c && C.iconBackground, "small" === a && C.iconSmallBoundingBox, h && C.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: o, isDisabled: r, isFaded: s, onAnimationEnd: l, onAnimationStart: i, onError: c, showAnimation: h, transitionAnimationUrl: p } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && h) return n.createElement(d.ZP, { animation: p || m.Bf, animationContainerStyle: E[t], animationStyle: M, onAnimationEnd: l, onAnimationStart: i, onError: c });
                            {
                                const a = o && e ? e : this.props.Icon;
                                return n.createElement(a, { style: [E[t], !r && s && C.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? n.createElement(k, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: o } = this.props;
                            o || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: o, isActive: s, isDisabled: l, isPresentational: c, keyboardShortcut: m, link: h, preventFocusShift: p, renderMenu: f, renderWrapper: b = n.Fragment, style: y, testID: g } = this.props,
                        D = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return n.createElement(
                        r.Z,
                        { style: [C.root, y] },
                        n.createElement(
                            b,
                            null,
                            c
                                ? this._renderContent(s)
                                : n.createElement(i.Z, { "aria-haspopup": f ? "menu" : void 0, "aria-label": e, disabled: l, enableKeyboardShortcuts: o, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: h, onClick: this._handlePress, preventFocusShift: p, renderMenu: f, style: [C.triggerAreaRoot, C.outlineNone], testID: g }, (e) => {
                                      const { isFocused: t, isHovered: o, isPressed: n } = e,
                                          r = s || o || n || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        D ? n.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            v.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const E = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                w = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                C = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                P = "224.5%",
                M = { width: P, height: P };
        },
        551611: (e, t, o) => {
            o.d(t, { Bf: () => r, ZP: () => s });
            var n = o(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends n.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const s = new a();
        },
        988227: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => r, Z: () => n });
            o(136728);
            const n = function (e, t) {
                return r(e, t);
            };
            function r(e, t) {
                return e.reduce(
                    (o, n, r) => {
                        const a = t ? t(n, r, e) : !!n;
                        return a && o[0].push(n), !a && o[1].push(n), o;
                    },
                    [[], []],
                );
            }
        },
        730895: (e, t, o) => {
            var n = o(821176);
            e.exports = function () {
                var e = n(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpacePeek.fe41afba.js.map
