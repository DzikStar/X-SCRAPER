"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-e019dbda"],
    {
        293988: (e, r, a) => {
            a.d(r, { Z: () => P });
            var t = a(202784),
                o = a(154003),
                n = a(674132),
                l = a.n(n),
                s = a(74514),
                d = a(405303),
                i = a(684511),
                c = a(860174),
                u = a(71620),
                m = a(668214),
                h = a(257166),
                p = a(919022);
            const _ = (e, r) => !(!r.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
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
                            const { isFollowing: e, style: r } = this.props;
                            return e ? t.createElement(o.ZP, { "aria-label": f, hoverLabel: { label: w }, icon: t.createElement(s.default, null), onPress: this._handleUnfollow, style: r, type: "primaryOutlined" }) : t.createElement(o.ZP, { "aria-label": g, hoverLabel: { label: M }, icon: t.createElement(d.default, null), onPress: this._handleFollow, style: r, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: r } = this.props;
                            r && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((r) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((r) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return t.createElement("div", null, this.state.showingPushPrompt ? t.createElement(i.Z, { fullScreen: !0, message: y }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: r, updateDeviceFollowing: a, userId: t } = this.props;
                    return a(t, { device: e }).catch(r(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: r } = this.props;
                    r.scribeAction(e);
                }
            }
            const P = D(b);
        },
        583335: (e, r, a) => {
            a.d(r, { Z: () => M });
            var t = a(202784),
                o = a(154003),
                n = a(40904),
                l = a(391366),
                s = a(847607),
                d = a(775412),
                i = a(837731),
                c = a(942893),
                u = a(71620),
                m = a(668214),
                h = a(629196),
                p = a(601576),
                _ = a(919022);
            const D = (e, r) => _.ZP.select(e, r.userId),
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
                            const { addToast: e, createLocalApiErrorHandler: r, mute: a, unmute: t, user: o, userId: n } = this.props;
                            return o
                                ? o.muting
                                    ? t(n).then((r) => {
                                          e({ text: (0, s.X6)(o.screen_name) }), this._scribeAction("unmute_user");
                                      }, r(i.G))
                                    : a(n).then((r) => {
                                          e({ text: (0, s.FK)(o.screen_name) }), this._scribeAction("mute_user");
                                      }, r(d.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const r = e.muting ? "destructiveOutlined" : "brandOutlined",
                        a = e.muting ? n.default : l.default,
                        d = e.muting ? (0, s.PY)(e.screen_name) : (0, s.Aq)(e.screen_name),
                        i = e.muting ? s.cm : s.GS;
                    return t.createElement(o.ZP, { "aria-label": d, hoverLabel: { label: i }, icon: t.createElement(a, null), onPress: this._handleMutOrUnmuteToggle, type: r });
                }
                _scribeAction(e) {
                    const { analytics: r, user: a } = this.props;
                    r.scribe({ action: e, data: { items: a ? [c.Z.getUserItem(a)] : [] } });
                }
            }
            const M = g(f);
        },
        652904: (e, r, a) => {
            a.d(r, { Z: () => c });
            var t = a(202784),
                o = a(500002),
                n = a(668214),
                l = a(997174),
                s = a(118823);
            const d = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class i extends t.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: r },
                            location: { pathname: a, search: t },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: n, search: l },
                            locationKey: s,
                        } = e;
                    let d = !1;
                    r.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && r.pathname === a && ((this._isInBackground = !1), (d = !0));
                    const i = o || s;
                    ((i && o !== s) || (!i && a !== n) || t !== l || d) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: r, updateLocation: a, updateTweetDetailNav: t } = e;
                    r.scribePageImpression(), a(r.contextualScribeNamespace, r.contextualScribeData), t(r.contextualScribeNamespace);
                }
            }
            i.defaultProps = { children: null };
            const c = (0, o.ZP)(d(i));
        },
        301410: (e, r, a) => {
            a.d(r, { i: () => p.ZP, z: () => f });
            var t = a(202784),
                o = a(928123),
                n = a.n(o),
                l = a(72845),
                s = a.n(l),
                d = a(57074),
                i = a.n(d),
                c = a(516951),
                u = a(88656),
                m = a(71620),
                h = a(163889),
                p = a(312771);
            const _ = ({ render: e }) => e({ fetchStatus: p.ZP.LOADING, data: null, error: null, retry: c.Z });
            class D extends t.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, r) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, h.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const g = ({ query: e, queryRef: r, render: a }) => {
                    const t = n()(e, r);
                    return a({ fetchStatus: p.ZP.LOADED, data: t, error: null, retry: c.Z });
                },
                f = (e, r) =>
                    function ({ fetchPolicy: a = "store-or-network", render: o, variables: n }) {
                        const [l, d] = s()(e),
                            c = (0, m.n7)(r.errorConfig.context),
                            u = i()(n),
                            h = t.useCallback(() => {
                                d(u, { fetchPolicy: "network-only" });
                            }, [d, u]);
                        return (
                            t.useLayoutEffect(() => {
                                d(u, { fetchPolicy: a });
                            }, [a, d, u]),
                            l
                                ? t.createElement(
                                      t.Suspense,
                                      { fallback: t.createElement(_, { render: o }) },
                                      t.createElement(D, { errorHandler: c(r.errorConfig.options || {}), key: l.fetchKey, retry: h }, (r, a) => (r ? o({ fetchStatus: p.ZP.FAILED, error: r, data: null, retry: a }) : t.createElement(g, { query: e, queryRef: l, render: o }))),
                                  )
                                : null
                        );
                    };
        },
        900128: (e, r, a) => {
            a.d(r, { Z: () => y });
            var t = a(202784),
                o = a(325686),
                n = a(731708),
                l = a(855488),
                s = a(420412),
                d = a(844685),
                i = a(392237),
                c = a(674132),
                u = a.n(c),
                m = a(666536),
                h = a(668214),
                p = a(395042),
                _ = a(919022);
            const D = (0, h.Z)()
                    .propsFromState(() => ({ viewerUser: _.ZP.selectViewerUser, usernameData: p.El }))
                    .adjustStateProps(({ usernameData: e, viewerUser: r }) => {
                        const a = (e.suggestions ? e.suggestions.map((e) => e.suggestion) : []).filter((r) => r !== e.username),
                            t = r?.screen_name;
                        return { viewerUser: r, suggestions: a, valid: (!!t && t.toLowerCase() === e.username?.toLowerCase()) || e.valid, validatedScreenName: e.username, validationError: e.desc };
                    })
                    .propsFromActions(() => ({ fetchUsernameAvailability: p.HR })),
                g = u().d1f6d336,
                f = u().de65c756;
            class M extends t.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUsernameStatus = (e) => {
                            const { fetchUsernameAvailability: r, viewerUser: a } = this.props;
                            a && r({ email: a.email && a.email[0] && a.email[0].address, full_name: a.name, suggest: !0, username: e });
                        }),
                        (this._handleTypedFieldChange = (e) => {
                            const { onScreenNameChanged: r } = this.props;
                            this._fetchUsernameStatusDebounced(e.target.value), this.setState({ value: e.target.value }), r(e.target.value);
                        }),
                        (this._handleItemSelect = (e) => {
                            const { onScreenNameChanged: r } = this.props;
                            if (e.target instanceof Node) {
                                const a = e.target.textContent;
                                this.setState({ value: a }), r(a);
                            }
                        }),
                        (this.state = { value: e.viewerUser && e.viewerUser.screen_name }),
                        (this._fetchUsernameStatusDebounced = (0, m.Z)((...e) => this._fetchUsernameStatus(...e), 250));
                }
                componentDidMount() {
                    const { viewerUser: e } = this.props;
                    e && this._fetchUsernameStatus(e.screen_name);
                }
                _renderOption(e, r) {
                    return t.createElement(n.ZP, { color: "link", key: r, onPress: this._handleItemSelect, role: "button", style: w.altOptionText, withInteractiveStyling: !0 }, e);
                }
                render() {
                    const { suggestions: e, valid: r, validatedScreenName: a, validationError: n, viewerUser: i } = this.props;
                    if (!i) return null;
                    const c = !(a === i.screen_name || r || !n);
                    return t.createElement(
                        o.Z,
                        null,
                        t.createElement(l.Z, { autoComplete: "off", autoCorrect: !1, errorText: n, invalid: c, label: g, name: "typedScreenName", onChange: this._handleTypedFieldChange, spellCheck: "false", value: this.state.value }),
                        t.createElement(s.Z, null),
                        t.createElement(d.Z, { text: f }),
                        t.createElement(
                            o.Z,
                            { style: w.container },
                            e.map((e, r) => this._renderOption(e, r)),
                        ),
                    );
                }
            }
            const w = i.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, altOptionText: { display: "block", paddingVertical: e.spaces.space12 } })),
                y = D(M);
        },
        733487: (e, r, a) => {
            a.d(r, { Z: () => v });
            var t = a(202784),
                o = a(154003),
                n = a(674132),
                l = a.n(n),
                s = a(40904),
                d = a(391366),
                i = a(775412),
                c = a(837731),
                u = a(942893),
                m = a(71620),
                h = a(668214),
                p = a(296196),
                _ = a(601576),
                D = a(919022);
            const g = (e, r) => D.ZP.select(e, r.userId),
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
                            const { addToast: e, createLocalApiErrorHandler: r, muteDMUser: a, unmuteDMUser: t, user: o, userId: n } = this.props;
                            return o
                                ? o.dm_muting
                                    ? t(n).then((r) => {
                                          e({ text: b({ name: o.name }) }), this._scribeAction("unmute_user");
                                      }, r(c.G))
                                    : a(n).then((r) => {
                                          e({ text: y({ name: o.name }) }), this._scribeAction("mute_user");
                                      }, r(i.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const r = e.dm_muting ? "destructiveOutlined" : "brandOutlined",
                        a = e.dm_muting ? s.default : d.default,
                        n = e.dm_muting ? w({ screenName: e.screen_name }) : M({ screenName: e.screen_name });
                    return t.createElement(o.ZP, { "aria-label": n, icon: t.createElement(a, null), onPress: this._handleUnmuteToggle, type: r });
                }
                _scribeAction(e) {
                    const { analytics: r, user: a } = this.props;
                    r.scribe({ action: e, data: { items: a ? [u.Z.getUserItem(a)] : [] } });
                }
            }
            const v = f(P);
        },
        684511: (e, r, a) => {
            a.d(r, { Z: () => t });
            a(202784);
            const t = (0, a(523561).Z)({
                loader: () =>
                    Promise.all([
                        a.e("modules.common-e907d115"),
                        a.e("modules.common-e019dbda"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        a.e("loader.PushNotificationsPrompt"),
                    ]).then(a.bind(a, 529629)),
            });
        },
        545334: (e, r, a) => {
            a.d(r, { d: () => o });
            var t = a(674132);
            const o = a.n(t)().gf5e9ea6;
        },
        916585: (e, r, a) => {
            a.d(r, { k: () => l });
            var t = a(674132),
                o = a.n(t),
                n = a(437358);
            const l = (e, r) => {
                const { id_str: a, screen_name: t } = e,
                    l = (0, o().d78131b9)({ screenName: t });
                return { Icon: n.default, text: l, link: { pathname: "/i/lists/add_member", state: { userId: a } }, onClick: r };
            };
        },
        847607: (e, r, a) => {
            a.d(r, { Aq: () => u, FK: () => f, GS: () => s, N1: () => h, PY: () => m, X6: () => M, cm: () => d });
            a(202784);
            var t = a(674132),
                o = a.n(t),
                n = a(391366),
                l = a(40904);
            const s = o().hb568af4,
                d = o().bb1cbeb6,
                i = (o().h2f62206, o().e67b2d65),
                c = o().f05597b3,
                u = (e) => i({ screenName: e }),
                m = (e) => c({ screenName: e }),
                h = (e, r, a) => {
                    const { muting: t, screen_name: o } = e;
                    return { text: t ? m(o) : u(o), onClick: t ? a : r, Icon: t ? n.default : l.default };
                },
                p = o().h59f52ee,
                _ = o().eea0cbee,
                D = o().i29533b3,
                g = o().h129c3c3,
                f = (e) => (e ? ((e) => D({ screenName: e }))(e) : p),
                M = (e) => (e ? ((e) => g({ screenName: e }))(e) : _);
        },
        417714: (e, r, a) => {
            a.d(r, { l: () => c });
            a(202784);
            var t = a(674132),
                o = a.n(t),
                n = a(224823);
            const l = o().b3036480,
                s = o().b3036480,
                d = o().e68b09b4,
                i = o().h27b7407,
                c = ({ removeFollowerAction: e, user: r }) => {
                    const a = u(r);
                    return { Icon: n.default, text: l, onClick: () => e(a) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: s, label: d, text: i({ screenName: e.screen_name }) });
        },
        775412: (e, r, a) => {
            a.d(r, { W: () => s });
            var t = a(674132),
                o = a.n(t),
                n = a(615656);
            const l = o().ee87e71c,
                s = { [n.ZP.SelfMuteError]: { toast: { text: l } }, showToast: !0 };
        },
        48886: (e, r, a) => {
            a.d(r, { q: () => o });
            var t = a(674132);
            const o = { defaultToast: { text: a.n(t)().a30b63da }, showToast: !0 };
        },
        670094: (e, r, a) => {
            a.d(r, { d: () => i });
            var t = a(674132),
                o = a.n(t),
                n = a(88656),
                l = a(601576),
                s = a(163889);
            const d = o().a5d4fda0,
                i = (e = d, r = !0) => ({
                    customErrorHandler: (a) => {
                        const { context: t } = a;
                        return (!a) instanceof n.Z && (a.message = `Strato error occurred in ${t.id}: ${t.action}`), (0, s.ZP)(a, { extra: { context: t, isStrato: !0 } }), r ? (0, l.mf)({ text: e }) : [];
                    },
                });
        },
        837731: (e, r, a) => {
            a.d(r, { G: () => s });
            var t = a(674132),
                o = a.n(t),
                n = a(615656);
            const l = o().ed428a76,
                s = { [n.ZP.NotMutingTargetUser]: { toast: { text: l } }, showToast: !0 };
        },
        860174: (e, r, a) => {
            a.d(r, { Z: () => n });
            var t = a(615656),
                o = a(51525);
            const n = { [t.ZP.FollowError]: { customAction: o.w1 } };
        },
        967262: (e, r, a) => {
            a.d(r, { m: () => t });
            const t = (e, r) => {
                    const a = e?.media_info;
                    if ("ApiImage" === a?.__typename) {
                        return { altText: a.alt_text, display_url: a.original_img_url, expanded_url: r?.expandedURLFormatter?.(e.media_id) ?? a.original_img_url, ext_alt_text: a.alt_text, ...(a.color_info?.palette && { ext_media_color: { palette: a.color_info.palette } }), id: n(e.media_id), id_str: e.media_id || "", media_key: e.media_key, media_url: a.original_img_url, media_url_https: a.original_img_url, original_info: { height: a.original_img_height, width: a.original_img_width }, sizes: { original: { h: a.original_img_height, resize: "fit", w: a.original_img_width } }, type: "photo" };
                    }
                    if ("ApiVideo" === a?.__typename) {
                        const { __typename: r, ...t } = a;
                        return o(t, e.media_id, a?.__typename);
                    }
                    if ("ApiGif" === a?.__typename) {
                        const { __typename: r, ...t } = a;
                        return o(t, e.media_id, a?.__typename);
                    }
                },
                o = (e, r, a) => {
                    const t = "ApiGif" === a ? "animated_gif" : "video",
                        o = e.preview_image;
                    return { type: t, id: n(r), id_str: r || "", ext_alt_text: o?.alt_text, ext_media_color: { palette: o?.color_info?.palette || [] }, media_url: o?.original_img_url || "", media_url_https: o?.original_img_url || "", url: o?.original_img_url || "", display_url: o?.original_img_url || "", expanded_url: o?.original_img_url || "", original_info: { height: o?.original_img_height || 0, width: o?.original_img_width || 0 }, sizes: { original: { h: o?.original_img_height || 0, resize: "fit", w: o?.original_img_width || 0 } }, video_info: { aspect_ratio: [e.aspect_ratio.numerator, e.aspect_ratio.denominator], ...(e.duration_millis && { duration_millis: e.duration_millis }), variants: e.variants.map((e) => ({ bitrate: e.bit_rate, content_type: e.content_type, url: e.url })) } };
                },
                n = (e) => {
                    const r = parseInt(e, 10);
                    return Number.isNaN(r) ? 0 : r;
                };
        },
        554997: (e, r, a) => {
            a.d(r, { r: () => n });
            const t = 19,
                o = 12,
                n = (e) => e.placeType && (e.placeType.code === t || e.placeType.code === o);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-e019dbda.0d46bfea.js.map
