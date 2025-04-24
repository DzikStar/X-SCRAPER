"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-e019dbda"],
    {
        293988: (e, a, r) => {
            r.d(a, { Z: () => P });
            var t = r(202784),
                o = r(154003),
                n = r(674132),
                l = r.n(n),
                s = r(74514),
                d = r(405303),
                i = r(684511),
                c = r(860174),
                u = r(71620),
                m = r(668214),
                h = r(257166),
                p = r(919022);
            const _ = (e, a) => !(!a.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                D = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: _ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                g = l().bdba3e1a,
                f = l().c4da7d28,
                M = l().j87c21f4,
                w = l().iebc30ca,
                y = l().dc740eb2;
            class b extends t.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: a } = this.props;
                            return e ? t.createElement(o.ZP, { "aria-label": f, hoverLabel: { label: w }, icon: t.createElement(s.default, null), onPress: this._handleUnfollow, style: a, type: "primaryOutlined" }) : t.createElement(o.ZP, { "aria-label": g, hoverLabel: { label: M }, icon: t.createElement(d.default, null), onPress: this._handleFollow, style: a, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: a } = this.props;
                            a && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((a) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((a) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return t.createElement("div", null, this.state.showingPushPrompt ? t.createElement(i.Z, { fullScreen: !0, message: y }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: a, updateDeviceFollowing: r, userId: t } = this.props;
                    return r(t, { device: e }).catch(a(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: a } = this.props;
                    a.scribeAction(e);
                }
            }
            const P = D(b);
        },
        583335: (e, a, r) => {
            r.d(a, { Z: () => M });
            var t = r(202784),
                o = r(154003),
                n = r(40904),
                l = r(391366),
                s = r(847607),
                d = r(775412),
                i = r(837731),
                c = r(942893),
                u = r(71620),
                m = r(668214),
                h = r(629196),
                p = r(601576),
                _ = r(919022);
            const D = (e, a) => _.ZP.select(e, a.userId),
                g = (0, m.Z)()
                    .propsFromState(() => ({ user: D }))
                    .propsFromActions(() => ({ addToast: p.fz, createLocalApiErrorHandler: (0, u.zr)("MUTE_BUTTON_CONTAINER"), mute: h.r, unmute: _.ZP.unmute }))
                    .withAnalytics();
            class f extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleMutOrUnmuteToggle = () => {
                            this._handleMuteOrUnmuteToggleHelper();
                        }),
                        (this._handleMuteOrUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: a, mute: r, unmute: t, user: o, userId: n } = this.props;
                            return o
                                ? o.muting
                                    ? t(n).then((a) => {
                                          e({ text: (0, s.X6)(o.screen_name) }), this._scribeAction("unmute_user");
                                      }, a(i.G))
                                    : r(n).then((a) => {
                                          e({ text: (0, s.FK)(o.screen_name) }), this._scribeAction("mute_user");
                                      }, a(d.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const a = e.muting ? "destructiveOutlined" : "brandOutlined",
                        r = e.muting ? n.default : l.default,
                        d = e.muting ? (0, s.PY)(e.screen_name) : (0, s.Aq)(e.screen_name),
                        i = e.muting ? s.cm : s.GS;
                    return t.createElement(o.ZP, { "aria-label": d, hoverLabel: { label: i }, icon: t.createElement(r, null), onPress: this._handleMutOrUnmuteToggle, type: a });
                }
                _scribeAction(e) {
                    const { analytics: a, user: r } = this.props;
                    a.scribe({ action: e, data: { items: r ? [c.Z.getUserItem(r)] : [] } });
                }
            }
            const M = g(f);
        },
        652904: (e, a, r) => {
            r.d(a, { Z: () => c });
            var t = r(202784),
                o = r(500002),
                n = r(668214),
                l = r(997174),
                s = r(118823);
            const d = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class i extends t.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: r, search: t },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: n, search: l },
                            locationKey: s,
                        } = e;
                    let d = !1;
                    a.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && a.pathname === r && ((this._isInBackground = !1), (d = !0));
                    const i = o || s;
                    ((i && o !== s) || (!i && r !== n) || t !== l || d) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: r, updateTweetDetailNav: t } = e;
                    a.scribePageImpression(), r(a.contextualScribeNamespace, a.contextualScribeData), t(a.contextualScribeNamespace);
                }
            }
            i.defaultProps = { children: null };
            const c = (0, o.ZP)(d(i));
        },
        301410: (e, a, r) => {
            r.d(a, { i: () => p.ZP, z: () => f });
            var t = r(202784),
                o = r(928123),
                n = r.n(o),
                l = r(72845),
                s = r.n(l),
                d = r(57074),
                i = r.n(d),
                c = r(516951),
                u = r(88656),
                m = r(71620),
                h = r(163889),
                p = r(312771);
            const _ = ({ render: e }) => e({ fetchStatus: p.ZP.LOADING, data: null, error: null, retry: c.Z });
            class D extends t.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, a) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, h.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const g = ({ query: e, queryRef: a, render: r }) => {
                    const t = n()(e, a);
                    return r({ fetchStatus: p.ZP.LOADED, data: t, error: null, retry: c.Z });
                },
                f = (e, a) =>
                    function ({ fetchPolicy: r = "store-or-network", render: o, variables: n }) {
                        const [l, d] = s()(e),
                            c = (0, m.n7)(a.errorConfig.context),
                            u = i()(n),
                            h = t.useCallback(() => {
                                d(u, { fetchPolicy: "network-only" });
                            }, [d, u]);
                        return (
                            t.useLayoutEffect(() => {
                                d(u, { fetchPolicy: r });
                            }, [r, d, u]),
                            l
                                ? t.createElement(
                                      t.Suspense,
                                      { fallback: t.createElement(_, { render: o }) },
                                      t.createElement(D, { errorHandler: c(a.errorConfig.options || {}), key: l.fetchKey, retry: h }, (a, r) => (a ? o({ fetchStatus: p.ZP.FAILED, error: a, data: null, retry: r }) : t.createElement(g, { query: e, queryRef: l, render: o }))),
                                  )
                                : null
                        );
                    };
        },
        900128: (e, a, r) => {
            r.d(a, { Z: () => y });
            var t = r(202784),
                o = r(325686),
                n = r(731708),
                l = r(855488),
                s = r(420412),
                d = r(844685),
                i = r(392237),
                c = r(674132),
                u = r.n(c),
                m = r(666536),
                h = r(668214),
                p = r(395042),
                _ = r(919022);
            const D = (0, h.Z)()
                    .propsFromState(() => ({ viewerUser: _.ZP.selectViewerUser, usernameData: p.El }))
                    .adjustStateProps(({ usernameData: e, viewerUser: a }) => {
                        const r = (e.suggestions ? e.suggestions.map((e) => e.suggestion) : []).filter((a) => a !== e.username),
                            t = a?.screen_name;
                        return { viewerUser: a, suggestions: r, valid: (!!t && t.toLowerCase() === e.username?.toLowerCase()) || e.valid, validatedScreenName: e.username, validationError: e.desc };
                    })
                    .propsFromActions(() => ({ fetchUsernameAvailability: p.HR })),
                g = u().d1f6d336,
                f = u().de65c756;
            class M extends t.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUsernameStatus = (e) => {
                            const { fetchUsernameAvailability: a, viewerUser: r } = this.props;
                            r && a({ email: r.email && r.email[0] && r.email[0].address, full_name: r.name, suggest: !0, username: e });
                        }),
                        (this._handleTypedFieldChange = (e) => {
                            const { onScreenNameChanged: a } = this.props;
                            this._fetchUsernameStatusDebounced(e.target.value), this.setState({ value: e.target.value }), a(e.target.value);
                        }),
                        (this._handleItemSelect = (e) => {
                            const { onScreenNameChanged: a } = this.props;
                            if (e.target instanceof Node) {
                                const r = e.target.textContent;
                                this.setState({ value: r }), a(r);
                            }
                        }),
                        (this.state = { value: e.viewerUser && e.viewerUser.screen_name }),
                        (this._fetchUsernameStatusDebounced = (0, m.Z)((...e) => this._fetchUsernameStatus(...e), 250));
                }
                componentDidMount() {
                    const { viewerUser: e } = this.props;
                    e && this._fetchUsernameStatus(e.screen_name);
                }
                _renderOption(e, a) {
                    return t.createElement(n.ZP, { color: "link", key: a, onPress: this._handleItemSelect, role: "button", style: w.altOptionText, withInteractiveStyling: !0 }, e);
                }
                render() {
                    const { suggestions: e, valid: a, validatedScreenName: r, validationError: n, viewerUser: i } = this.props;
                    if (!i) return null;
                    const c = !(r === i.screen_name || a || !n);
                    return t.createElement(
                        o.Z,
                        null,
                        t.createElement(l.Z, { autoComplete: "off", autoCorrect: !1, errorText: n, invalid: c, label: g, name: "typedScreenName", onChange: this._handleTypedFieldChange, spellCheck: "false", value: this.state.value }),
                        t.createElement(s.Z, null),
                        t.createElement(d.Z, { text: f }),
                        t.createElement(
                            o.Z,
                            { style: w.container },
                            e.map((e, a) => this._renderOption(e, a)),
                        ),
                    );
                }
            }
            const w = i.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, altOptionText: { display: "block", paddingVertical: e.spaces.space12 } })),
                y = D(M);
        },
        733487: (e, a, r) => {
            r.d(a, { Z: () => v });
            var t = r(202784),
                o = r(154003),
                n = r(674132),
                l = r.n(n),
                s = r(40904),
                d = r(391366),
                i = r(775412),
                c = r(837731),
                u = r(942893),
                m = r(71620),
                h = r(668214),
                p = r(296196),
                _ = r(601576),
                D = r(919022);
            const g = (e, a) => D.ZP.select(e, a.userId),
                f = (0, h.Z)()
                    .propsFromState(() => ({ user: g }))
                    .propsFromActions(() => ({ addToast: _.fz, createLocalApiErrorHandler: (0, m.zr)("MUTE_DM_BUTTON_CONTAINER"), muteDMUser: p.muteDMUser, unmuteDMUser: p.unmuteDMUser }))
                    .withAnalytics(),
                M = l().e67b2d65,
                w = l().f05597b3,
                y = l().gde6b425,
                b = l().e308019b;
            class P extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleUnmuteToggle = () => {
                            this._handleUnmuteToggleHelper();
                        }),
                        (this._handleUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: a, muteDMUser: r, unmuteDMUser: t, user: o, userId: n } = this.props;
                            return o
                                ? o.dm_muting
                                    ? t(n).then((a) => {
                                          e({ text: b({ name: o.name }) }), this._scribeAction("unmute_user");
                                      }, a(c.G))
                                    : r(n).then((a) => {
                                          e({ text: y({ name: o.name }) }), this._scribeAction("mute_user");
                                      }, a(i.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const a = e.dm_muting ? "destructiveOutlined" : "brandOutlined",
                        r = e.dm_muting ? s.default : d.default,
                        n = e.dm_muting ? w({ screenName: e.screen_name }) : M({ screenName: e.screen_name });
                    return t.createElement(o.ZP, { "aria-label": n, icon: t.createElement(r, null), onPress: this._handleUnmuteToggle, type: a });
                }
                _scribeAction(e) {
                    const { analytics: a, user: r } = this.props;
                    a.scribe({ action: e, data: { items: r ? [u.Z.getUserItem(r)] : [] } });
                }
            }
            const v = f(P);
        },
        684511: (e, a, r) => {
            r.d(a, { Z: () => t });
            r(202784);
            const t = (0, r(523561).Z)({
                loader: () =>
                    Promise.all([
                        r.e("modules.common-e907d115"),
                        r.e("modules.common-e019dbda"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("loader.PushNotificationsPrompt"),
                    ]).then(r.bind(r, 529629)),
            });
        },
        545334: (e, a, r) => {
            r.d(a, { d: () => o });
            var t = r(674132);
            const o = r.n(t)().gf5e9ea6;
        },
        916585: (e, a, r) => {
            r.d(a, { k: () => l });
            var t = r(674132),
                o = r.n(t),
                n = r(437358);
            const l = (e, a) => {
                const { id_str: r, screen_name: t } = e,
                    l = (0, o().d78131b9)({ screenName: t });
                return { Icon: n.default, text: l, link: { pathname: "/i/lists/add_member", state: { userId: r } }, onClick: a };
            };
        },
        847607: (e, a, r) => {
            r.d(a, { Aq: () => u, FK: () => f, GS: () => s, N1: () => h, PY: () => m, X6: () => M, cm: () => d });
            r(202784);
            var t = r(674132),
                o = r.n(t),
                n = r(391366),
                l = r(40904);
            const s = o().hb568af4,
                d = o().bb1cbeb6,
                i = (o().h2f62206, o().e67b2d65),
                c = o().f05597b3,
                u = (e) => i({ screenName: e }),
                m = (e) => c({ screenName: e }),
                h = (e, a, r) => {
                    const { muting: t, screen_name: o } = e;
                    return { text: t ? m(o) : u(o), onClick: t ? r : a, Icon: t ? n.default : l.default };
                },
                p = o().h59f52ee,
                _ = o().eea0cbee,
                D = o().i29533b3,
                g = o().h129c3c3,
                f = (e) => (e ? ((e) => D({ screenName: e }))(e) : p),
                M = (e) => (e ? ((e) => g({ screenName: e }))(e) : _);
        },
        417714: (e, a, r) => {
            r.d(a, { l: () => c });
            r(202784);
            var t = r(674132),
                o = r.n(t),
                n = r(224823);
            const l = o().b3036480,
                s = o().b3036480,
                d = o().e68b09b4,
                i = o().h27b7407,
                c = ({ removeFollowerAction: e, user: a }) => {
                    const r = u(a);
                    return { Icon: n.default, text: l, onClick: () => e(r) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: s, label: d, text: i({ screenName: e.screen_name }) });
        },
        775412: (e, a, r) => {
            r.d(a, { W: () => s });
            var t = r(674132),
                o = r.n(t),
                n = r(615656);
            const l = o().ee87e71c,
                s = { [n.ZP.SelfMuteError]: { toast: { text: l } }, showToast: !0 };
        },
        48886: (e, a, r) => {
            r.d(a, { q: () => o });
            var t = r(674132);
            const o = { defaultToast: { text: r.n(t)().a30b63da }, showToast: !0 };
        },
        670094: (e, a, r) => {
            r.d(a, { d: () => i });
            var t = r(674132),
                o = r.n(t),
                n = r(88656),
                l = r(601576),
                s = r(163889);
            const d = o().a5d4fda0,
                i = (e = d, a = !0) => ({
                    customErrorHandler: (r) => {
                        const { context: t } = r;
                        return (!r) instanceof n.Z && (r.message = `Strato error occurred in ${t.id}: ${t.action}`), (0, s.ZP)(r, { extra: { context: t, isStrato: !0 } }), a ? (0, l.mf)({ text: e }) : [];
                    },
                });
        },
        837731: (e, a, r) => {
            r.d(a, { G: () => s });
            var t = r(674132),
                o = r.n(t),
                n = r(615656);
            const l = o().ed428a76,
                s = { [n.ZP.NotMutingTargetUser]: { toast: { text: l } }, showToast: !0 };
        },
        860174: (e, a, r) => {
            r.d(a, { Z: () => n });
            var t = r(615656),
                o = r(51525);
            const n = { [t.ZP.FollowError]: { customAction: o.w1 } };
        },
        967262: (e, a, r) => {
            r.d(a, { m: () => t });
            const t = (e, a) => {
                    const r = e?.media_info;
                    if ("ApiImage" === r?.__typename) {
                        return { altText: r.alt_text, display_url: r.original_img_url, expanded_url: a?.expandedURLFormatter?.(e.media_id) ?? r.original_img_url, ext_alt_text: r.alt_text, ...(r.color_info?.palette && { ext_media_color: { palette: r.color_info.palette } }), id: n(e.media_id), id_str: e.media_id || "", media_key: e.media_key, media_url: r.original_img_url, media_url_https: r.original_img_url, original_info: { height: r.original_img_height, width: r.original_img_width }, sizes: { original: { h: r.original_img_height, resize: "fit", w: r.original_img_width } }, type: "photo" };
                    }
                    if ("ApiVideo" === r?.__typename) {
                        const { __typename: a, ...t } = r;
                        return o(t, e.media_id, r?.__typename);
                    }
                    if ("ApiGif" === r?.__typename) {
                        const { __typename: a, ...t } = r;
                        return o(t, e.media_id, r?.__typename);
                    }
                },
                o = (e, a, r) => {
                    const t = "ApiGif" === r ? "animated_gif" : "video",
                        o = e.preview_image;
                    return { type: t, id: n(a), id_str: a || "", ext_alt_text: o?.alt_text, ext_media_color: { palette: o?.color_info?.palette || [] }, media_url: o?.original_img_url || "", media_url_https: o?.original_img_url || "", url: o?.original_img_url || "", display_url: o?.original_img_url || "", expanded_url: o?.original_img_url || "", original_info: { height: o?.original_img_height || 0, width: o?.original_img_width || 0 }, sizes: { original: { h: o?.original_img_height || 0, resize: "fit", w: o?.original_img_width || 0 } }, video_info: { aspect_ratio: [e.aspect_ratio.numerator, e.aspect_ratio.denominator], ...(e.duration_millis && { duration_millis: e.duration_millis }), variants: e.variants.map((e) => ({ bitrate: e.bit_rate, content_type: e.content_type, url: e.url })) } };
                },
                n = (e) => {
                    const a = parseInt(e, 10);
                    return Number.isNaN(a) ? 0 : a;
                };
        },
        554997: (e, a, r) => {
            r.d(a, { r: () => n });
            const t = 19,
                o = 12,
                n = (e) => e.placeType && (e.placeType.code === t || e.placeType.code === o);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-e019dbda.0e3c856a.js.map
