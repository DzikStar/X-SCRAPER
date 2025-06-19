"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpacePeek", "loader.AudioDock", "bundle.AudioSpaceDetail", "bundle.Live", "loader.AudioContextVoiceMedia"],
    {
        290402: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(807896),
                r = o(202784),
                a = o(182056),
                s = o(879113),
                l = o(392237),
                i = o(111677),
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
            o.d(t, { Z: () => k });
            o(136728);
            var n = o(202784),
                r = o(638236),
                a = o(811176),
                s = o(111677),
                l = o.n(s),
                i = o(415506),
                c = o(516951),
                d = o(376293),
                u = o(847607),
                m = o(417714),
                h = o(988823);
            const p = "block",
                f = "mute",
                b = "removeFollower",
                y = "report",
                g = "share",
                D = l().j7bb1a43,
                v = l().hef5960c,
                k = (0, h.M)((e) => {
                    const { onBlock: t, onClose: o, onMute: s, onRemoveFollower: l, onReportUser: h, onShare: k, onUnblock: E, onUnmute: w, user: P } = e,
                        C = [],
                        M = (t, o) => {
                            const { confirm: n, onClose: r } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                n({ confirmButtonLabel: e, ...a })
                                    .then(o, c.Z)
                                    .finally(r);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !P.protected &&
                        !P.blocking &&
                        !P.blocked_by &&
                        C.push({
                            Icon: r.Z,
                            onClick: () => {
                                o(), k();
                            },
                            testID: g,
                            text: v,
                        });
                    !P.blocking &&
                        C.push({
                            ...(0, u.N1)(
                                P,
                                () => {
                                    o(), s();
                                },
                                () => {
                                    o(), w();
                                },
                            ),
                            testID: f,
                        });
                    P.followed_by &&
                        C.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    M(e, l);
                                },
                                user: P,
                            }),
                            testID: b,
                        }),
                        C.push((0, d.op)({ blockAction: (e) => M(e, t), source: d.SC.FOLLOWERS_LIST, testID: p, unblockAction: (e) => M(e, E), user: P })),
                        C.push({
                            Icon: i.default,
                            onClick: () => {
                                o(), h();
                            },
                            testID: y,
                            text: D({ screenName: P.screen_name }),
                        });
                    const I = C.map(({ Icon: e, onClick: t, testID: o, text: n }) => ({ text: n, onClick: t, Icon: e, testID: o }));
                    return n.createElement(a.Z, { items: I, onCloseRequested: o });
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
            class E extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? n.createElement(r.ZP, { "aria-label": g, hoverLabel: { label: v }, icon: n.createElement(l.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : n.createElement(r.ZP, { "aria-label": y, hoverLabel: { label: D }, icon: n.createElement(i.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(c.Z, { fullScreen: !0, message: k }) : null, this._renderButton());
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
                l = o(111677),
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
                v = o(919022);
            const k = (e, t) => t.userIds,
                E = (e, t) => {
                    const { filterPredicate: o = (e) => !!e, userIds: n } = t;
                    return n.filter((t) => {
                        const n = v.ZP.select(e, t);
                        return !!n && o(n);
                    });
                },
                w = (e, t) => {
                    const { userIds: o } = t;
                    return o.reduce((t, o) => {
                        const n = v.ZP.selectFetchStatus(e, o);
                        return n && (t[o] = n === b.ZP.NONE ? b.ZP.LOADING : n), t;
                    }, {});
                },
                P = (0, D.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, g.Z)(E, (e) => e),
                        fetchStatus: (0, g.Z)(E, w, k, (e, t, o) => {
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
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: v.ZP.fetchManyIfNeeded })),
                C = i().f5b426c2;
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
                    return r.createElement(d.Z, { "aria-label": C, fetchStatus: this.state.allUsersUnavailable ? b.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
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
            const I = P(M);
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
            o.d(t, { $f: () => E, KV: () => b, LI: () => I, SC: () => k, Vt: () => D, ed: () => Z, op: () => w });
            var n = o(202784),
                r = o(190286),
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
                f = s().ad00a739,
                b = s().a9fd20be,
                y = s().j546fb79,
                g = s().c9623eeb,
                D = s().e133be4e,
                v = s().f5f01af6,
                k = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                E = (e) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: p, text: f({ screenName: e }) }),
                w = ({ blockAction: e, blockSubtext: t, source: o, testID: n, unblockAction: r, unblockSubtext: a, user: s }) => {
                    let l,
                        i = c.Z;
                    const u = I(s);
                    switch (o) {
                        case k.PROFILE:
                        case k.LIST_DETAIL:
                        case k.FOLLOWERS_LIST:
                            i = () => {
                                s.blocking ? r(u) : e(u);
                            };
                            break;
                        case k.TWEET:
                        case k.TWEET_CARET:
                        case k.RICH_FEEDBACK:
                            (l = d.uq.block),
                                (i = () => {
                                    s.blocking ? r(u) : e(u);
                                });
                    }
                    return { confirmation: u, onClick: i, testID: n, shortcutKey: l, Icon: P(s.blocking), text: M(s), subText: C({ user: s, blockSubtext: t, unblockSubtext: a }) };
                },
                P = (e) => (e ? i.default : l.default),
                C = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                M = (e) => (e.blocking ? g({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                I = (e) => {
                    return e.blocking ? ((t = e.screen_name), { confirmButtonType: "primary", headline: y({ screenName: t }), label: D, text: v }) : E(e.screen_name);
                    var t;
                },
                Z = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: a, headline: s, label: l, text: i } = e;
                    return n.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: l, confirmButtonType: a, headline: s, onCancel: o, onConfirm: t, text: i });
                };
        },
        545334: (e, t, o) => {
            o.d(t, { d: () => r });
            var n = o(111677);
            const r = o.n(n)().gf5e9ea6;
        },
        916585: (e, t, o) => {
            o.d(t, { k: () => s });
            var n = o(111677),
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
            var n = o(111677),
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
            var n = o(111677),
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
            var n = o(111677);
            const r = { defaultToast: { text: o.n(n)().b6878b0a }, showToast: !0 };
        },
        48886: (e, t, o) => {
            o.d(t, { q: () => r });
            var n = o(111677);
            const r = { defaultToast: { text: o.n(n)().a30b63da }, showToast: !0 };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => r });
            var n = o(111677);
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
                a = o(111677),
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
                s = o(111677),
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
                r = o(111677),
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
            o.d(t, { ZP: () => k });
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
                h = o(111677),
                p = o.n(h),
                f = o(891198),
                b = o(537392),
                y = o(280278);
            const g = p().e8d93005,
                D = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                v = ({ color: e, count: t }) => {
                    const o = (0, f.wl)(t, !0);
                    return n.createElement(b.ZP, null, ({ containerWidth: r }) => {
                        return n.createElement(y.ZP, { color: e, count: t, size: "subtext2", style: [D.count, ((a = r), a < u.default.theme.breakpoints.small && D.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || o.length >= 5 ? g(t) : o) : void 0);
                        var a;
                    });
                };
            class k extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: o, color: a, decoration: l } = this.props;
                            return n.createElement(c.ZP.Consumer, null, ({ direction: i }) => n.createElement(s.ZP, { color: e ? o : a, dir: i, style: [P.inner, e && "blue500" === o && P.blue500] }, n.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), l, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: o, hoverLabel: r, iconSize: a, isActive: s, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                m = l.Z.generate({ backgroundColor: u.default.theme.colors[o], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                h = d && s && !e?.isHovered;
                            return n.createElement(i.Z, { hoverLabel: r, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, w[h ? "haloBackground" : o], !c && P.iconBackground, "small" === a && P.iconSmallBoundingBox, h && P.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: o, isDisabled: r, isFaded: s, onAnimationEnd: l, onAnimationStart: i, onError: c, showAnimation: h, transitionAnimationUrl: p } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && h) return n.createElement(d.ZP, { animation: p || m.Bf, animationContainerStyle: E[t], animationStyle: M, onAnimationEnd: l, onAnimationStart: i, onError: c });
                            {
                                const a = o && e ? e : this.props.Icon;
                                return n.createElement(a, { style: [E[t], !r && s && P.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? n.createElement(v, { count: e }) : null;
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
                        { style: [P.root, y] },
                        n.createElement(
                            b,
                            null,
                            c
                                ? this._renderContent(s)
                                : n.createElement(i.Z, { "aria-haspopup": f ? "menu" : void 0, "aria-label": e, disabled: l, enableKeyboardShortcuts: o, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: h, onClick: this._handlePress, preventFocusShift: p, renderMenu: f, style: [P.triggerAreaRoot, P.outlineNone], testID: g }, (e) => {
                                      const { isFocused: t, isHovered: o, isPressed: n } = e,
                                          r = s || o || n || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        D ? n.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            k.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const E = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                w = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                P = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                C = "224.5%",
                M = { width: C, height: C };
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
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        226597: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        155353: (e, t, o) => {
            o.r(t), o.d(t, { default: () => i });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpacePeek.e44a564a.js.map
