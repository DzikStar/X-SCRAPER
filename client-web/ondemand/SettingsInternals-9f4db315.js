"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-9f4db315"],
    {
        121363: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(506899),
                o = r(676145),
                s = r(588960),
                a = r.n(s),
                l = r(318752);
            const i = (e, t, r) => {
                    const n = (0, l.Z)(e, t, r);
                    if (e && "string" == typeof n.vcard) {
                        const e = a().parse(n.vcard),
                            t = (e && e[0]) || null;
                        return { ...n, vcard: t };
                    }
                    return n;
                },
                c = new n.fK.Entity("vcards", {}, { idAttribute: (e) => ((0, o.Z)(e.id) ? e.id : e.id_str), processStrategy: i });
        },
        229333: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(202784),
                o = r(466999),
                s = r(325686),
                a = r(392237),
                l = r(111677);
            const i = r.n(l)().e5b0063d;
            let c = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        r = i({ title: t });
                    return n.createElement(s.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(o.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: a.default.visuallyHidden }, t), n.createElement(s.Z, { "aria-label": r }, e));
                }
            }
            const u = d;
        },
        917009: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(202784),
                o = r(154003),
                s = r(111677),
                a = r.n(s),
                l = r(379327);
            const i = a().af40a8e0,
                c = (e) => {
                    const { "aria-label": t, link: r } = e;
                    return n.createElement(o.ZP, { "aria-label": t, hoverLabel: { label: i }, icon: n.createElement(l.default, null), link: r, pullRight: !0, type: "primaryText" });
                };
        },
        947135: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(202784),
                o = r(242454),
                s = r(190286);
            class a extends n.Component {
                constructor(e) {
                    super(e),
                        (this._handleClick = (e) => {
                            this.setState({ showConfirmation: !0 });
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 });
                        }),
                        (this._handleConfirm = () => {
                            this.setState({ showConfirmation: !1 }), this.props.onConfirmationSheetConfirm();
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                render() {
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: r, confirmationSheetConfirmButtonType: a, confirmationSheetHeadline: l, confirmationSheetText: i, label: c } = this.props;
                    return n.createElement(n.Fragment, null, n.createElement(o.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? n.createElement(s.Z, { confirmButtonLabel: r, confirmButtonType: a, headline: l, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: i }) : null);
                }
            }
            a.defaultProps = { color: "red500", align: "center" };
        },
        414939: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(202784),
                o = r(325686),
                s = r(392237);
            class a extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(o.Z, { style: l.root });
                }
            }
            const l = s.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                i = a;
        },
        333241: (e, t, r) => {
            r.d(t, { Z: () => v });
            r(136728);
            var n = r(202784),
                o = r(638236),
                s = r(811176),
                a = r(111677),
                l = r.n(a),
                i = r(415506),
                c = r(516951),
                d = r(376293),
                u = r(847607),
                m = r(417714),
                h = r(988823);
            const p = "block",
                b = "mute",
                g = "removeFollower",
                f = "report",
                y = "share",
                Z = l().j7bb1a43,
                _ = l().g00b4c55,
                v = (0, h.M)((e) => {
                    const { onBlock: t, onClose: r, onMute: a, onRemoveFollower: l, onReportUser: h, onShare: v, onUnblock: E, onUnmute: w, user: C } = e,
                        k = [],
                        S = (t, r) => {
                            const { confirm: n, onClose: o } = e;
                            if (t) {
                                const { label: e, ...s } = t;
                                n({ confirmButtonLabel: e, ...s })
                                    .then(r, c.Z)
                                    .finally(o);
                            } else r();
                        };
                    !!window.navigator.share &&
                        !C.protected &&
                        !C.blocking &&
                        !C.blocked_by &&
                        k.push({
                            Icon: o.Z,
                            onClick: () => {
                                r(), v();
                            },
                            testID: y,
                            text: _({ screenName: C.screen_name }),
                        });
                    !C.blocking &&
                        k.push({
                            ...(0, u.N1)(
                                C,
                                () => {
                                    r(), a();
                                },
                                () => {
                                    r(), w();
                                },
                            ),
                            testID: b,
                        });
                    C.followed_by &&
                        k.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    S(e, l);
                                },
                                user: C,
                            }),
                            testID: g,
                        }),
                        k.push((0, d.op)({ blockAction: (e) => S(e, t), source: d.SC.FOLLOWERS_LIST, testID: p, unblockAction: (e) => S(e, E), user: C })),
                        k.push({
                            Icon: i.default,
                            onClick: () => {
                                r(), h();
                            },
                            testID: f,
                            text: Z({ screenName: C.screen_name }),
                        });
                    const x = k.map(({ Icon: e, onClick: t, testID: r, text: n }) => ({ text: n, onClick: t, Icon: e, testID: r }));
                    return n.createElement(s.Z, { items: x, onCloseRequested: r });
                });
        },
        980407: (e, t, r) => {
            r.d(t, { Z: () => b, w: () => h });
            var n = r(202784),
                o = r(325686),
                s = r(108362),
                a = r(386802),
                l = r(392237),
                i = r(652904),
                c = r(555079),
                d = r(625661),
                u = r(449067),
                m = r(715601);
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: r, backLocation: s, centerTitle: a, hideBackButton: l, history: i, isFullWidth: u, isLarge: m, middleControl: h, onBackClick: b, rightControl: g, secondaryBar: f, subtitle: y, title: Z } = this.props,
                                { isModal: _ } = this.context;
                            return n.createElement(o.Z, { style: _ ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, n.createElement(d.ZP, { backButtonType: r || (_ ? "close" : "back"), backLocation: s, centerTitle: a, fixed: !_, hideBackButton: l, history: i, isFullWidth: u, isLarge: m, middleControl: h, onBackClick: b, ref: e, rightControl: g, secondaryBar: f, style: [_ && p.appBarModal, t], subtitle: y, title: Z, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: r } = this.context;
                            t && (r ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: r, containerStyle: a, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: h, title: b, withoutBottomBarMobile: g } = this.props,
                        { isModal: f } = this.context,
                        y = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(i.Z, null, n.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: b }), n.createElement(o.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, f && p.rootModal] }, !f && y, n.createElement(s.Z, { isFullWidth: c, isLarge: d, style: [p.container, f && p.containerModal, a] }, f ? n.createElement(m.Z, { style: p.viewport }, y, r) : r), t ? n.createElement(o.Z, { style: [p.bottomBarModal, !f && !g && p.bottomBarMobile] }, n.createElement(s.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = a.Z);
            const p = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = h;
        },
        965245: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(807896),
                o = r(202784),
                s = r(229333),
                a = r(414939),
                l = r(334346);
            const i = ({ accessibilityTitle: e, footer: t = o.createElement(a.Z, null), ...r }) => {
                const i = o.createElement(l.C, (0, n.Z)({}, r, { footer: t }));
                return e ? o.createElement(s.Z, { title: e }, i) : i;
            };
        },
        349035: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(202784),
                o = r(272175);
            const s = (0, r(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(o.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        811105: (e, t, r) => {
            r.d(t, { Z: () => m });
            var n = r(202784),
                o = r(325686),
                s = r(731708),
                a = r(392237),
                l = r(111677),
                i = r.n(l);
            const c = i().c174e46e,
                d = i().a39075ff,
                u = a.default.create((e) => ({ listItem: { display: "list-item", listStyleType: "disc", marginBottom: e.spaces.space12, marginStart: e.spaces.space12 }, scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, toggleMoreLink: { color: e.colors.link, weight: "bold" } })),
                m = (e) => {
                    const { scopes: t, size: r, title: a } = e,
                        [l, i] = n.useState(!1),
                        m = n.useCallback(() => {
                            i((e) => !e);
                        }, []),
                        h = l ? t : t.slice(0, 3),
                        p = t.length > 3;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(s.ZP, { style: u.scopesHeader, weight: "bold" }, a),
                        n.createElement(
                            o.Z,
                            { role: "list" },
                            h.map((e) => n.createElement(s.ZP, { color: "subtext2" === r ? "gray700" : void 0, key: e.name, role: "listitem", size: r, style: u.listItem }, e.description)),
                        ),
                        p && l ? n.createElement(s.ZP, { onPress: m, style: u.toggleMoreLink }, c) : null,
                        p && !l ? n.createElement(s.ZP, { onPress: m, style: u.toggleMoreLink }, d({ n: t.length - 3 })) : null,
                    );
                };
        },
        534763: (e, t, r) => {
            r.d(t, { H: () => c, b: () => d });
            var n = r(807896),
                o = r(202784),
                s = r(392237),
                a = r(779610);
            const l = (e) => {
                    const { Icon: t, iconColor: r, testID: n } = e;
                    return o.createElement(t, { style: r ? { color: s.default.theme.colors[r] } : i.thumbnail, testID: n });
                },
                i = s.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function c(e) {
                const { Icon: t, iconColor: r, testID: s, ...i } = e;
                return o.createElement(a.Z, (0, n.Z)({}, i, { thumbnail: o.createElement(l, { Icon: t, iconColor: r, testID: s }), thumbnailSize: "large" }));
            }
            function d(e) {
                const { link: t, ...r } = e;
                return o.createElement(a.Z, (0, n.Z)({}, r, { link: { external: !0, pathname: e.link } }));
            }
        },
        864479: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(807896),
                o = r(202784),
                s = r(771099);
            const a = (e) => (t) => o.createElement(s.$6, null, (r) => o.createElement(e, (0, n.Z)({}, t, { isInSidebar: r })));
        },
        507651: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(807896),
                o = r(202784),
                s = r(107267),
                a = r(403556),
                l = r(791632);
            const i = (e) => {
                    const t = (0, s.useHistory)(),
                        { isCompact: r, ...i } = e;
                    return o.createElement(a.Z, (0, n.Z)({}, i, { isCompact: r || (0, l.HD)(t) }));
                },
                c = o.memo(i);
        },
        293988: (e, t, r) => {
            r.d(t, { Z: () => w });
            var n = r(202784),
                o = r(154003),
                s = r(111677),
                a = r.n(s),
                l = r(74514),
                i = r(405303),
                c = r(684511),
                d = r(860174),
                u = r(71620),
                m = r(668214),
                h = r(257166),
                p = r(919022);
            const b = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                g = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: b }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                f = a().bdba3e1a,
                y = a().c4da7d28,
                Z = a().j87c21f4,
                _ = a().iebc30ca,
                v = a().dc740eb2;
            class E extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? n.createElement(o.ZP, { "aria-label": y, hoverLabel: { label: _ }, icon: n.createElement(l.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : n.createElement(o.ZP, { "aria-label": f, hoverLabel: { label: Z }, icon: n.createElement(i.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: r, userId: n } = this.props;
                    return r(n, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const w = g(E);
        },
        583335: (e, t, r) => {
            r.d(t, { Z: () => Z });
            var n = r(202784),
                o = r(154003),
                s = r(40904),
                a = r(391366),
                l = r(847607),
                i = r(775412),
                c = r(837731),
                d = r(942893),
                u = r(71620),
                m = r(668214),
                h = r(629196),
                p = r(601576),
                b = r(919022);
            const g = (e, t) => b.ZP.select(e, t.userId),
                f = (0, m.Z)()
                    .propsFromState(() => ({ user: g }))
                    .propsFromActions(() => ({ addToast: p.fz, createLocalApiErrorHandler: (0, u.zr)("MUTE_BUTTON_CONTAINER"), mute: h.r, unmute: b.ZP.unmute }))
                    .withAnalytics();
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleMutOrUnmuteToggle = () => {
                            this._handleMuteOrUnmuteToggleHelper();
                        }),
                        (this._handleMuteOrUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, mute: r, unmute: n, user: o, userId: s } = this.props;
                            return o
                                ? o.muting
                                    ? n(s).then((t) => {
                                          e({ text: (0, l.X6)(o.screen_name) }), this._scribeAction("unmute_user");
                                      }, t(c.G))
                                    : r(s).then((t) => {
                                          e({ text: (0, l.FK)(o.screen_name) }), this._scribeAction("mute_user");
                                      }, t(i.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.muting ? "destructiveOutlined" : "brandOutlined",
                        r = e.muting ? s.default : a.default,
                        i = e.muting ? l.cm : l.GS,
                        c = e.muting ? l.cm : l.GS;
                    return n.createElement(o.ZP, { "aria-label": i, hoverLabel: { label: c }, icon: n.createElement(r, null), onPress: this._handleMutOrUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: r } = this.props;
                    t.scribe({ action: e, data: { items: r ? [d.Z.getUserItem(r)] : [] } });
                }
            }
            const Z = f(y);
        },
        56851: (e, t, r) => {
            r.d(t, { Z: () => b });
            var n = r(202784),
                o = r(420740),
                s = r(108362),
                a = r(731708),
                l = r(154003),
                i = r(392237),
                c = r(111677),
                d = r.n(c),
                u = r(349035);
            const m = "error-detail",
                h = d().e49537c2,
                p = d().a9ae1e78;
            class b extends n.PureComponent {
                render() {
                    return n.createElement(o.Z, { testID: m }, n.createElement(u.Z, null), n.createElement(s.Z, { style: g.root }, n.createElement(a.ZP, { align: "center", color: "gray700", style: g.retryText }, h), n.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, p)));
                }
            }
            const g = i.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        301410: (e, t, r) => {
            r.d(t, { i: () => p.ZP, z: () => y });
            var n = r(202784),
                o = r(928123),
                s = r.n(o),
                a = r(72845),
                l = r.n(a),
                i = r(57074),
                c = r.n(i),
                d = r(516951),
                u = r(88656),
                m = r(71620),
                h = r(163889),
                p = r(312771);
            const b = ({ render: e }) => e({ fetchStatus: p.ZP.LOADING, data: null, error: null, retry: d.Z });
            class g extends n.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, h.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const f = ({ query: e, queryRef: t, render: r }) => {
                    const n = s()(e, t);
                    return r({ fetchStatus: p.ZP.LOADED, data: n, error: null, retry: d.Z });
                },
                y = (e, t) =>
                    function ({ fetchPolicy: r = "store-or-network", render: o, variables: s }) {
                        const [a, i] = l()(e),
                            d = (0, m.n7)(t.errorConfig.context),
                            u = c()(s),
                            h = n.useCallback(() => {
                                i(u, { fetchPolicy: "network-only" });
                            }, [i, u]);
                        return (
                            n.useLayoutEffect(() => {
                                i(u, { fetchPolicy: r });
                            }, [r, i, u]),
                            a
                                ? n.createElement(
                                      n.Suspense,
                                      { fallback: n.createElement(b, { render: o }) },
                                      n.createElement(g, { errorHandler: d(t.errorConfig.options || {}), key: a.fetchKey, retry: h }, (t, r) => (t ? o({ fetchStatus: p.ZP.FAILED, error: t, data: null, retry: r }) : n.createElement(f, { query: e, queryRef: a, render: o }))),
                                  )
                                : null
                        );
                    };
        },
        900128: (e, t, r) => {
            r.d(t, { Z: () => v });
            var n = r(202784),
                o = r(325686),
                s = r(731708),
                a = r(855488),
                l = r(420412),
                i = r(844685),
                c = r(392237),
                d = r(111677),
                u = r.n(d),
                m = r(666536),
                h = r(668214),
                p = r(395042),
                b = r(919022);
            const g = (0, h.Z)()
                    .propsFromState(() => ({ viewerUser: b.ZP.selectViewerUser, usernameData: p.El }))
                    .adjustStateProps(({ usernameData: e, viewerUser: t }) => {
                        const r = (e.suggestions ? e.suggestions.map((e) => e.suggestion) : []).filter((t) => t !== e.username),
                            n = t?.screen_name;
                        return { viewerUser: t, suggestions: r, valid: (!!n && n.toLowerCase() === e.username?.toLowerCase()) || e.valid, validatedScreenName: e.username, validationError: e.desc };
                    })
                    .propsFromActions(() => ({ fetchUsernameAvailability: p.HR })),
                f = u().d1f6d336,
                y = u().de65c756;
            class Z extends n.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUsernameStatus = (e) => {
                            const { fetchUsernameAvailability: t, viewerUser: r } = this.props;
                            r && t({ email: r.email && r.email[0] && r.email[0].address, full_name: r.name, suggest: !0, username: e });
                        }),
                        (this._handleTypedFieldChange = (e) => {
                            const { onScreenNameChanged: t } = this.props;
                            this._fetchUsernameStatusDebounced(e.target.value), this.setState({ value: e.target.value }), t(e.target.value);
                        }),
                        (this._handleItemSelect = (e) => {
                            const { onScreenNameChanged: t } = this.props;
                            if (e.target instanceof Node) {
                                const r = e.target.textContent;
                                this.setState({ value: r }), t(r);
                            }
                        }),
                        (this.state = { value: e.viewerUser && e.viewerUser.screen_name }),
                        (this._fetchUsernameStatusDebounced = (0, m.Z)((...e) => this._fetchUsernameStatus(...e), 250));
                }
                componentDidMount() {
                    const { viewerUser: e } = this.props;
                    e && this._fetchUsernameStatus(e.screen_name);
                }
                _renderOption(e, t) {
                    return n.createElement(s.ZP, { color: "link", key: t, onPress: this._handleItemSelect, role: "button", style: _.altOptionText, withInteractiveStyling: !0 }, e);
                }
                render() {
                    const { suggestions: e, valid: t, validatedScreenName: r, validationError: s, viewerUser: c } = this.props;
                    if (!c) return null;
                    const d = !(r === c.screen_name || t || !s);
                    return n.createElement(
                        o.Z,
                        null,
                        n.createElement(a.Z, { autoComplete: "off", autoCorrect: !1, errorText: s, invalid: d, label: f, name: "typedScreenName", onChange: this._handleTypedFieldChange, spellCheck: "false", value: this.state.value }),
                        n.createElement(l.Z, null),
                        n.createElement(i.Z, { text: y }),
                        n.createElement(
                            o.Z,
                            { style: _.container },
                            e.map((e, t) => this._renderOption(e, t)),
                        ),
                    );
                }
            }
            const _ = c.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, altOptionText: { display: "block", paddingVertical: e.spaces.space12 } })),
                v = g(Z);
        },
        733487: (e, t, r) => {
            r.d(t, { Z: () => C });
            var n = r(202784),
                o = r(154003),
                s = r(111677),
                a = r.n(s),
                l = r(40904),
                i = r(391366),
                c = r(775412),
                d = r(837731),
                u = r(942893),
                m = r(71620),
                h = r(668214),
                p = r(296196),
                b = r(601576),
                g = r(919022);
            const f = (e, t) => g.ZP.select(e, t.userId),
                y = (0, h.Z)()
                    .propsFromState(() => ({ user: f }))
                    .propsFromActions(() => ({ addToast: b.fz, createLocalApiErrorHandler: (0, m.zr)("MUTE_DM_BUTTON_CONTAINER"), muteDMUser: p.muteDMUser, unmuteDMUser: p.unmuteDMUser }))
                    .withAnalytics(),
                Z = a().hb568af4,
                _ = a().bb1cbeb6,
                v = a().gde6b425,
                E = a().e308019b;
            class w extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleUnmuteToggle = () => {
                            this._handleUnmuteToggleHelper();
                        }),
                        (this._handleUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, muteDMUser: r, unmuteDMUser: n, user: o, userId: s } = this.props;
                            return o
                                ? o.dm_muting
                                    ? n(s).then((t) => {
                                          e({ text: E({ name: o.name }) }), this._scribeAction("unmute_user");
                                      }, t(d.G))
                                    : r(s).then((t) => {
                                          e({ text: v({ name: o.name }) }), this._scribeAction("mute_user");
                                      }, t(c.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.dm_muting ? "destructiveOutlined" : "brandOutlined",
                        r = e.dm_muting ? l.default : i.default,
                        s = e.dm_muting ? _ : Z;
                    return n.createElement(o.ZP, { "aria-label": s, icon: n.createElement(r, null), onPress: this._handleUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: r } = this.props;
                    t.scribe({ action: e, data: { items: r ? [u.Z.getUserItem(r)] : [] } });
                }
            }
            const C = y(w);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-9f4db315.b1d9702a.js.map
