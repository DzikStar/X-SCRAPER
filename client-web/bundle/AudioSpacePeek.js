"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpacePeek", "loader.AudioDock", "bundle.AudioSpaceDetail", "loader.AudioContextVoiceMedia"],
    {
        290402: (e, o, t) => {
            t.d(o, { Z: () => p });
            var r = t(807896),
                n = t(202784),
                a = t(182056),
                s = t(879113),
                l = t(392237),
                d = t(674132),
                i = t.n(d),
                c = t(968478);
            const u = i().aa6e3300,
                m = ({ retryMessage: e, ...o }, t) => {
                    const l = a.Z.isOnline();
                    return n.createElement(s.Z, (0, r.Z)({}, o, { icon: l ? void 0 : n.createElement(c.default, { style: h.icon }), retryMessage: l ? e : u }));
                },
                h = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = n.forwardRef(m);
        },
        333241: (e, o, t) => {
            t.d(o, { Z: () => w });
            t(136728);
            var r = t(202784),
                n = t(638236),
                a = t(811176),
                s = t(674132),
                l = t.n(s),
                d = t(415506),
                i = t(516951),
                c = t(443781),
                u = t(376293),
                m = t(847607),
                h = t(417714),
                p = t(988823);
            const f = "block",
                D = "mute",
                b = "removeFollower",
                y = "report",
                g = "share",
                k = l().j7bb1a43,
                v = l().hef5960c,
                w = (0, p.M)((e) => {
                    const { featureSwitches: o } = (0, c.QZ)(),
                        { onBlock: t, onClose: s, onMute: l, onRemoveFollower: p, onReportUser: w, onShare: M, onUnblock: E, onUnmute: I, user: P } = e,
                        _ = [],
                        C = (o, t) => {
                            const { confirm: r, onClose: n } = e;
                            if (o) {
                                const { label: e, ...a } = o;
                                r({ confirmButtonLabel: e, ...a })
                                    .then(t, i.Z)
                                    .finally(n);
                            } else t();
                        };
                    !!window.navigator.share &&
                        !P.protected &&
                        !P.blocking &&
                        !P.blocked_by &&
                        _.push({
                            Icon: n.Z,
                            onClick: () => {
                                s(), M();
                            },
                            testID: g,
                            text: v,
                        });
                    !P.blocking &&
                        _.push({
                            ...(0, m.N1)(
                                P,
                                () => {
                                    s(), l();
                                },
                                () => {
                                    s(), I();
                                },
                            ),
                            testID: D,
                        });
                    P.followed_by &&
                        _.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    C(e, p);
                                },
                                user: P,
                            }),
                            testID: b,
                        }),
                        _.push((0, u.op)({ blockAction: (e) => C(e, t), isSoftBlockEnabled: o.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => C(e, E), user: P })),
                        _.push({
                            Icon: d.default,
                            onClick: () => {
                                s(), w();
                            },
                            testID: y,
                            text: k({ screenName: P.screen_name }),
                        });
                    const Z = _.map(({ Icon: e, onClick: o, testID: t, text: r }) => ({ text: r, onClick: o, Icon: e, testID: t }));
                    return r.createElement(a.Z, { items: Z, onCloseRequested: s });
                });
        },
        572067: (e, o, t) => {
            t.d(o, { Z: () => a });
            var r = t(202784),
                n = t(272175);
            const a = (e) => {
                const { canonical: o, description: t = "", image: a, imageAlt: s, imageH: l, imageType: d, imageW: i, title: c, ttl: u, type: m } = e;
                return r.createElement(n.ql, null, m ? r.createElement("meta", { content: m, property: "og:type" }) : null, o ? r.createElement("meta", { content: o, property: "og:url" }) : null, c ? r.createElement("meta", { content: c, property: "og:title" }) : null, r.createElement("meta", { content: t, property: "og:description" }), a ? r.createElement("meta", { content: a, property: "og:image" }) : null, d ? r.createElement("meta", { content: d, property: "og:image:type" }) : null, i ? r.createElement("meta", { content: i, property: "og:image:width" }) : null, l ? r.createElement("meta", { content: l, property: "og:image:height" }) : null, s ? r.createElement("meta", { content: s, property: "og:image:alt" }) : null, u ? r.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        864479: (e, o, t) => {
            t.d(o, { Z: () => s });
            var r = t(807896),
                n = t(202784),
                a = t(771099);
            const s = (e) => (o) => n.createElement(a.$6, null, (t) => n.createElement(e, (0, r.Z)({}, o, { isInSidebar: t })));
        },
        812190: (e, o, t) => {
            t.d(o, { Z: () => h });
            var r = t(202784),
                n = t(544239),
                a = t(872788),
                s = t(71620),
                l = t(668214),
                d = t(491963),
                i = t(709318);
            const c = (e, { communityId: o }) => (o ? d.ZP.select(e, o) : void 0),
                u = (e, { communityId: o }) => !!o && (0, i.H4)(e, o),
                m = ({ community: e, communityId: o, createLocalApiErrorHandler: t, isPinned: s, onActionButtonJoinClick: l, onPress: d, pinTimeline: i, shouldDisplayPin: c, style: u, thumbnailSize: m, unpinTimeline: h, withActionButton: p }) => {
                    const f = r.useMemo(() => e && { isPinned: s, handlePinOrUnpin: () => (s ? h({ id: o, name: e.name, type: a.FO.COMMUNITY }).catch(t) : i({ id: o, name: e.name, type: a.FO.COMMUNITY }).catch(t)) }, [e, o, t, s, i, h]),
                        D = c ? f : void 0;
                    if (e) {
                        const { is_nsfw: t, media: a, member_count: s, membersFacepileUrls: i, name: c, primary_community_topic: h } = e;
                        return r.createElement(n.Z, { communityId: o, isNsfw: t, media: a, memberCount: s, membersFacepile: i, name: c, onActionButtonJoinClick: l, onPress: d, style: u, thumbnailSize: m, topic: h?.topic_name, withActionButton: p, withPinAction: D });
                    }
                    return null;
                },
                h = (0, l.Z)()
                    .propsFromState(() => ({ community: c, isPinned: u }))
                    .propsFromActions(() => ({ pinTimeline: i.qM, unpinTimeline: i.bK, createLocalApiErrorHandler: (0, s.zr)("TOGGLE_PIN_COMMUNITY") }))(r.memo(m));
        },
        840685: (e, o, t) => {
            t.d(o, { Z: () => f });
            var r = t(202784),
                n = t(879113),
                a = t(668214),
                s = t(492057);
            const l = (0, a.Z)().propsFromState(() => ({ fetchStatus: s.tc }));
            var d = t(107267),
                i = t(71620),
                c = t(125363),
                u = t(491963);
            const m = "COMMUNITY_FETCHER",
                h = (e) => {
                    const o = e.fallbackToRouteParam ?? !0;
                    return e.communityId || o ? r.createElement(p, e) : null;
                };
            function p({ children: e, communityId: o, fetchStatus: t }) {
                const a = (function (e) {
                        const o = (0, c.I0)(),
                            t = (0, d.useRouteMatch)(),
                            n = r.useMemo(() => (0, i.zr)(m), []),
                            a = e || t.params.communityId,
                            s = r.useCallback(() => {
                                try {
                                    a && o(u.ZP.fetchOneIfNeeded(a));
                                } catch (e) {
                                    n(e);
                                }
                            }, [a, n, o]);
                        return r.useEffect(s, [s]), s;
                    })(o),
                    s = r.useCallback(() => e || null, [e]);
                return r.createElement(n.Z, { fetchStatus: t, onRequestRetry: a, render: s });
            }
            const f = l(r.memo(h));
        },
        293988: (e, o, t) => {
            t.d(o, { Z: () => M });
            var r = t(202784),
                n = t(154003),
                a = t(674132),
                s = t.n(a),
                l = t(74514),
                d = t(405303),
                i = t(684511),
                c = t(860174),
                u = t(71620),
                m = t(668214),
                h = t(257166),
                p = t(919022);
            const f = (e, o) => !(!o.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                D = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                b = s().bdba3e1a,
                y = s().c4da7d28,
                g = s().j87c21f4,
                k = s().iebc30ca,
                v = s().dc740eb2;
            class w extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: o } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": y, hoverLabel: { label: k }, icon: r.createElement(l.default, null), onPress: this._handleUnfollow, style: o, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": b, hoverLabel: { label: g }, icon: r.createElement(d.default, null), onPress: this._handleFollow, style: o, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: o } = this.props;
                            o && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((o) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((o) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(i.Z, { fullScreen: !0, message: v }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: o, updateDeviceFollowing: t, userId: r } = this.props;
                    return t(r, { device: e }).catch(o(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: o } = this.props;
                    o.scribeAction(e);
                }
            }
            const M = D(w);
        },
        62857: (e, o, t) => {
            t.d(o, { Z: () => _ });
            var r = t(807896),
                n = t(202784),
                a = t(476984),
                s = t.n(a),
                l = t(674132),
                d = t.n(l),
                i = t(615656),
                c = t(290402),
                u = t(325686),
                m = t(240089),
                h = t(663550),
                p = t(409438);
            const f = ({ displayMode: e = p.Z.UserDetailed, renderUserCell: o, userIds: t }) =>
                n.createElement(
                    u.Z,
                    { role: "list" },
                    t.map((t, r) => (o ? o(t) : n.createElement(m.ZP, { decoration: m.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: t, promotedItemType: h.bj.USER, userId: t, withFollowsYou: !0 }))),
                );
            var D = t(312771),
                b = t(71620),
                y = t(973572),
                g = t(668214),
                k = t(919022);
            const v = (e, o) => o.userIds,
                w = (e, o) => {
                    const { filterPredicate: t = (e) => !!e, userIds: r } = o;
                    return r.filter((o) => {
                        const r = k.ZP.select(e, o);
                        return !!r && t(r);
                    });
                },
                M = (e, o) => {
                    const { userIds: t } = o;
                    return t.reduce((o, t) => {
                        const r = k.ZP.selectFetchStatus(e, t);
                        return (o[t] = r === D.ZP.NONE ? D.ZP.LOADING : r), o;
                    }, {});
                },
                E = (0, g.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, y.Z)(w, (e) => e),
                        fetchStatus: (0, y.Z)(w, M, v, (e, o, t) => {
                            let r = D.ZP.LOADED;
                            for (let n = 0; n < t.length; n++) {
                                const a = t[n];
                                if (-1 === e.indexOf(a)) {
                                    const e = o[a] || D.ZP.LOADING;
                                    r = r === D.ZP.LOADED ? e : r;
                                }
                                if (r === D.ZP.LOADED) break;
                            }
                            return r;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: k.ZP.fetchManyIfNeeded })),
                I = d().f5b426c2;
            class P extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: o, fetchStatus: t, fetchUsersIfNeeded: a, filterPredicate: s, userIds: l, ...d } = this.props;
                            return n.createElement(f, (0, r.Z)({}, d, { userIds: e }));
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
                    return n.createElement(c.Z, { "aria-label": I, fetchStatus: this.state.allUsersUnavailable ? D.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: o, fetchUsersIfNeeded: t, userIds: r } = this.props;
                    t(r).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        o({
                            [i.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [i.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const _ = E(P);
        },
        684511: (e, o, t) => {
            t.d(o, { Z: () => r });
            t(202784);
            const r = (0, t(523561).Z)({
                loader: () =>
                    Promise.all([
                        t.e("modules.common-e907d115"),
                        t.e("modules.common-e019dbda"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        t.e("loader.PushNotificationsPrompt"),
                    ]).then(t.bind(t, 529629)),
            });
        },
        376293: (e, o, t) => {
            t.d(o, { $f: () => E, KV: () => b, LI: () => Z, SC: () => M, Vt: () => k, ed: () => A, op: () => I });
            var r = t(202784),
                n = t(190286),
                a = t(674132),
                s = t.n(a),
                l = t(616894),
                d = t(314948),
                i = t(516951),
                c = t(163390);
            const u = s().cfd2f35e,
                m = s().f9e45cfb,
                h = s().fcd4d489,
                p = s().a6450e84,
                f = s().g353ad73,
                D = s().ad00a739,
                b = s().a9fd20be,
                y = s().j546fb79,
                g = s().c9623eeb,
                k = s().e133be4e,
                v = s().he43bca4,
                w = s().f5f01af6,
                M = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                E = (e, o) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: p, text: o ? D({ screenName: e }) : f({ screenName: e }) }),
                I = ({ blockAction: e, blockSubtext: o, isSoftBlockEnabled: t, source: r, testID: n, unblockAction: a, unblockSubtext: s, user: l }) => {
                    let d,
                        u = i.Z;
                    const m = Z(l, t);
                    switch (r) {
                        case M.PROFILE:
                        case M.LIST_DETAIL:
                        case M.FOLLOWERS_LIST:
                            u = () => {
                                l.blocking ? a(m) : e(m);
                            };
                            break;
                        case M.TWEET:
                        case M.TWEET_CARET:
                        case M.RICH_FEEDBACK:
                            (d = c.uq.block),
                                (u = () => {
                                    l.blocking ? a(m) : e(m);
                                });
                    }
                    return { confirmation: m, onClick: u, testID: n, shortcutKey: d, Icon: P(l.blocking), text: C(l), subText: _({ user: l, blockSubtext: o, unblockSubtext: s }) };
                },
                P = (e) => (e ? d.default : l.default),
                _ = ({ blockSubtext: e, unblockSubtext: o, user: t }) => (!t.blocking && e ? e(t.screen_name) : t.blocking ? o : void 0),
                C = (e) => (e.blocking ? g({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                Z = (e, o) => (e.blocking ? ((e, o) => ({ confirmButtonType: "primary", headline: y({ screenName: e }), label: k, text: o ? w : v }))(e.screen_name, o) : E(e.screen_name, o)),
                A = ({ confirmation: e, handleConfirm: o, onClose: t }) => {
                    const { confirmButtonType: a, headline: s, label: l, text: d } = e;
                    return r.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: l, confirmButtonType: a, headline: s, onCancel: t, onConfirm: o, text: d });
                };
        },
        545334: (e, o, t) => {
            t.d(o, { d: () => n });
            var r = t(674132);
            const n = t.n(r)().gf5e9ea6;
        },
        916585: (e, o, t) => {
            t.d(o, { k: () => s });
            var r = t(674132),
                n = t.n(r),
                a = t(437358);
            const s = (e, o) => {
                const { id_str: t, screen_name: r } = e,
                    s = (0, n().d78131b9)({ screenName: r });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: t } }, onClick: o };
            };
        },
        847607: (e, o, t) => {
            t.d(o, { Aq: () => u, FK: () => y, GS: () => l, N1: () => h, PY: () => m, X6: () => g, cm: () => d });
            t(202784);
            var r = t(674132),
                n = t.n(r),
                a = t(391366),
                s = t(40904);
            const l = n().hb568af4,
                d = n().bb1cbeb6,
                i = (n().h2f62206, n().e67b2d65),
                c = n().f05597b3,
                u = (e) => i({ screenName: e }),
                m = (e) => c({ screenName: e }),
                h = (e, o, t) => {
                    const { muting: r, screen_name: n } = e;
                    return { text: r ? m(n) : u(n), onClick: r ? t : o, Icon: r ? a.default : s.default };
                },
                p = n().h59f52ee,
                f = n().eea0cbee,
                D = n().i29533b3,
                b = n().h129c3c3,
                y = (e) => (e ? ((e) => D({ screenName: e }))(e) : p),
                g = (e) => (e ? ((e) => b({ screenName: e }))(e) : f);
        },
        417714: (e, o, t) => {
            t.d(o, { l: () => c });
            t(202784);
            var r = t(674132),
                n = t.n(r),
                a = t(224823);
            const s = n().b3036480,
                l = n().b3036480,
                d = n().e68b09b4,
                i = n().h27b7407,
                c = ({ removeFollowerAction: e, user: o }) => {
                    const t = u(o);
                    return { Icon: a.default, text: s, onClick: () => e(t) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: l, label: d, text: i({ screenName: e.screen_name }) });
        },
        712816: (e, o, t) => {
            t.d(o, { d: () => n });
            var r = t(674132);
            const n = { defaultToast: { text: t.n(r)().b6878b0a }, showToast: !0 };
        },
        48886: (e, o, t) => {
            t.d(o, { q: () => n });
            var r = t(674132);
            const n = { defaultToast: { text: t.n(r)().a30b63da }, showToast: !0 };
        },
        879596: (e, o, t) => {
            t.d(o, { D: () => n });
            var r = t(674132);
            const n = { defaultToast: { text: t.n(r)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, o, t) => {
            t.d(o, { Z: () => a });
            var r = t(615656),
                n = t(51525);
            const a = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        973572: (e, o, t) => {
            t.d(o, { Z: () => s });
            var r = t(476984),
                n = t.n(r),
                a = t(24949);
            const s = (0, a.wN)(a.PW, n());
        },
        163390: (e, o, t) => {
            t.d(o, { OX: () => m, Od: () => c, PN: () => h, uq: () => i, wR: () => f });
            var r = t(251067),
                n = t(522171),
                a = t(674132),
                s = t.n(a),
                l = t(912021),
                d = t(323265);
            const i = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, l.Z)((e) => {
                    const o = e ? [{ description: s().b7fa0cfe, keys: i.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: i.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: i.nextItem, universal: !0 }, { description: s().g0048656, keys: i.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: i.refresh, universal: !1 }, { description: s().ha8209bc, keys: i.goHome, universal: !1 }, { description: s().fcf3e54c, keys: i.goExplore, universal: !0 }, { description: s().eb75875e, keys: i.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: i.goMentions, universal: !1 }, { description: s().fa98627a, keys: i.goProfile, universal: !1 }, { description: s().d4ebc798, keys: i.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: i.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: i.goLikes, universal: !1 }, { description: s().b0041756, keys: i.goLists, universal: !1 }, { description: s().d4986f86, keys: i.goMessages, universal: !1 }, { description: s().h5860a68, keys: i.goGrok, universal: !1 }, { description: s().bb081ea2, keys: i.goSettings, universal: !0 }, { description: s().i3145aa0, keys: i.goBookmarks, universal: !1 }, ...o, { description: s().eee2ed92, keys: i.goToUser, universal: !0 }, { description: s().ee5ccf3e, keys: i.goDisplay, universal: !1 }];
                }),
                u = d.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: s().ab3d53f8, keys: i.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: i.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: i.search, universal: !0 },
                    { description: s().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: i.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: i.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: i.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: s().b488758c, keys: i.toggleDMDrawer, universal: !1 },
                ],
                h = () => [
                    { description: s().c82314e0, keys: i.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: i.video.play2, universal: !0 },
                    { description: s().b881560e, keys: i.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: i.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: i.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: i.audio.mute, universal: !1 },
                ],
                p = (0, l.Z)((e) => {
                    const o = c(e),
                        t = m(),
                        r = h(),
                        n = {};
                    return (
                        [...t, ...r, ...o].forEach(({ description: e, keys: o }) => {
                            Array.isArray(o)
                                ? o.forEach((o) => {
                                      n[o] = e;
                                  })
                                : (n[o] = e);
                        }),
                        JSON.stringify(n)
                    );
                }),
                f = (e, o) => {
                    if (o) return { dataSet: { "at-shortcutkeys": p(e) } };
                };
        },
        409438: (e, o, t) => {
            t.d(o, { Z: () => r });
            const r = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, o, t) => {
            t.d(o, { M: () => s });
            var r = t(807896),
                n = t(202784),
                a = t(190286);
            const s = (e) => (o) => {
                const [t, s] = n.useState(null),
                    l = (e) =>
                        new Promise((o, t) => {
                            s({ resolve: o, reject: t, confirmationSheetProps: e });
                        });
                if (t) {
                    const { confirmationSheetProps: e, reject: o, resolve: l } = t;
                    return n.createElement(
                        a.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                o(), s(null);
                            },
                            onConfirm: () => {
                                l(), s(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, r.Z)({}, o, { confirm: l }));
            };
        },
        694180: (e, o, t) => {
            t.d(o, { cM: () => D, dS: () => f, iY: () => b });
            var r = t(370751),
                n = t(399896),
                a = t(663550),
                s = t(499627),
                l = t(917799);
            const d = {},
                i = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                m = (0, r.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, o) => !!e.promotedContent[o],
                f =
                    (e) =>
                    (o, t, { api: r }) => {
                        const { event: a, impression_id: s, promoted_trend_id: d } = e,
                            c = `trend-${d}-${a}`;
                        if (m.has(a) && p(t(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: d, event: a, impression_id: s };
                        return (0, l._O)(o, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, o) => {
                            if (!o && m.has(a)) return [h(c)];
                        });
                    },
                D =
                    ({ disclosureType: e, itemId: o, itemType: t, params: r }) =>
                    (a, s, { api: d }) => {
                        const { event: c, impression_id: m } = r,
                            f = `${t}-${o ?? "undefined"}-${m ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && p(s(), f)) return Promise.resolve();
                        const D = e && "earned" === e.toLowerCase() ? "1" : null,
                            b = { ...r, earned: D, epoch_ms: Date.now() };
                        return (0, l._O)(a, { params: b, request: d.withEndpoint(n.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: b }, (e, o) => {
                            if (!o && u.has(c)) return [h(f)];
                        });
                    },
                b =
                    (e) =>
                    (o, t, { api: r }) =>
                        (0, l._O)(o, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = d, o) {
                    if (!o) return e;
                    if (o.type === c) {
                        if (!o.payload) return e;
                        const { eventKey: t } = o.payload;
                        return { ...e, [t]: !0 };
                    }
                    return e;
                },
            });
        },
        629196: (e, o, t) => {
            t.d(o, { r: () => i });
            t(136728);
            var r = t(161821),
                n = t(390387),
                a = t(836255),
                s = t(255117),
                l = t(166506),
                d = t(919022);
            const i =
                (e, o) =>
                (t, i, { api: c, featureSwitches: u }) =>
                    t(d.ZP.mute(e, o)).then(() => {
                        const o = i(),
                            d = (0, r.Z)(a.Z.selectAll(o)).reduce((t, r) => {
                                if (null != r)
                                    if (r.user === e) t[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = a.Z.select(o, r.retweeted_status);
                                        n?.user === e && (t[r.id_str] = !0);
                                    }
                                return t;
                            }, {}),
                            c = (0, n._h)(i()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(d), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(d)] : [],
                            m = (0, l.k9)();
                        if (m.selectInitialFetchStatus(o) && !m.selectCanRefresh(o)) {
                            const t = (0, l.f8)(e, o, m);
                            t && u.push(t);
                        }
                        return t(u);
                    });
        },
        166506: (e, o, t) => {
            t.d(o, { du: () => c, f8: () => u, k9: () => i });
            var r = t(503768),
                n = t(750085),
                a = t(962741),
                s = t(466015),
                l = t(919022),
                d = t(218951);
            const i = () => (0, d.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                c = (e) => (o, t) => {
                    const r = t();
                    o(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const o = e.type === a.ZP.User ? e.content.id : "",
                                    t = l.ZP.select(r, o);
                                return t && !t.muting;
                            })
                            .map((o) => e.removeEntry(o.entryId)),
                    );
                },
                u = (e, o, t) => {
                    if (!t.selectEntries(o).find((o) => o.type === a.ZP.User && o.content.id === e)) {
                        const o = (0, s.OD)(e),
                            r = (0, s.$0)({ entryId: o, id: e, sortIndex: Date.now().toString() });
                        return t.injectEntry(r);
                    }
                };
        },
        661810: (e, o, t) => {
            t.d(o, { Z: () => s });
            var r = t(202784),
                n = t(325686),
                a = t(392237);
            function s({ spacing: e, style: o }) {
                return r.createElement(n.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, o] });
            }
            const l = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, o, t) => {
            t.d(o, { Z: () => h });
            var r = t(202784),
                n = t(476984),
                a = t.n(n),
                s = t(143778),
                l = t(750410),
                d = t(682830);
            const i = "failed",
                c = "loaded",
                u = "loading",
                m = "none";
            class h extends r.Component {
                shouldComponentUpdate(e) {
                    const o = e.fetchStatus === c,
                        t = this.props.fetchStatus !== e.fetchStatus;
                    return !(!o && !t) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: o, failureMessage: t, fetchStatus: n, icon: a, loadingMessage: s, onRequestRetry: c, render: h, renderFailure: p, retryMessage: f, retryable: D } = this.props;
                    switch (n) {
                        case i:
                            return D ? r.createElement(l.Z, { icon: a, onRequestRetry: c, retryMessage: f }) : t ? r.createElement(d.m, { failureMessage: t }) : p();
                        case u:
                            return r.createElement(d.J, { "aria-label": e, color: o, loadingMessage: s });
                        case m:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        420412: (e, o, t) => {
            t.d(o, { Z: () => d });
            var r = t(202784),
                n = t(325686),
                a = t(235902),
                s = t(885015),
                l = t(392237);
            function d({ borderColor: e = "borderColor", isSlim: o = !1, label: t }) {
                const { isWebRedesign: d } = a.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? i[e] : { backgroundColor: l.default.theme.colors[e] ?? l.default.theme.colors.borderColor };
                return t ? r.createElement(s.Z, { style: !o && i.root, withGutter: !0 }, r.createElement(n.Z, { style: i.gapColumn }, r.createElement(n.Z, { style: [i.gap, c] })), r.createElement(n.Z, { style: i.gapText }, t), r.createElement(n.Z, { style: i.gapColumn }, r.createElement(n.Z, { style: [i.gap, c] }))) : r.createElement(n.Z, { style: [!o && i.root, d() && i.rootRedesign, i.gap, c] });
            }
            const i = l.default.create((e) => ({ borderColor: { backgroundColor: l.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: l.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, o, t) => {
            t.d(o, { Z: () => i });
            var r = t(807896),
                n = t(202784),
                a = t(325686),
                s = t(392237);
            class l extends n.Component {
                render() {
                    const { children: e, style: o, withGutter: t, ...s } = this.props,
                        l = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, d.column, t && d.withGutterColumn] }));
                    return n.createElement(a.Z, (0, r.Z)({ style: [o, d.root, t && d.withGutter] }, s), l);
                }
            }
            l.defaultProps = { withGutter: !1 };
            const d = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                i = l;
        },
        678773: (e, o, t) => {
            t.r(o), t.d(o, { default: () => d });
            var r = t(202784),
                n = t(890601),
                a = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: o } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: o });
            };
            l.metadata = { width: 24, height: 24 };
            const d = l;
        },
        662678: (e, o, t) => {
            t.d(o, { G: () => n, Z: () => r });
            t(136728);
            const r = function (e, o) {
                return n(e, o);
            };
            function n(e, o) {
                return e.reduce(
                    (t, r, n) => {
                        const a = o ? o(r, n, e) : !!r;
                        return a && t[0].push(r), !a && t[1].push(r), t;
                    },
                    [[], []],
                );
            }
        },
        730895: (e, o, t) => {
            var r = t(821176);
            e.exports = function () {
                var e = r(this),
                    o = "";
                return e.hasIndices && (o += "d"), e.global && (o += "g"), e.ignoreCase && (o += "i"), e.multiline && (o += "m"), e.dotAll && (o += "s"), e.unicode && (o += "u"), e.unicodeSets && (o += "v"), e.sticky && (o += "y"), o;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpacePeek.f31e95ea.js.map
