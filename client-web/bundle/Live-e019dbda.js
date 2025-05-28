"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Live-e019dbda", "bundle.AudioSpaceDetail"],
    {
        651930: (e, t, a) => {
            a.d(t, { Z: () => i });
            var o = a(202784),
                r = a(99107),
                n = a(272175),
                l = a(111677);
            const s = a.n(l)().c39b0e24,
                i = ({ deepLink: e }) => {
                    const t = s;
                    return e ? o.createElement(n.ql, null, o.createElement("meta", { content: e, property: "al:ios:url" }), o.createElement("meta", { content: r.AF, property: "al:ios:app_store_id" }), o.createElement("meta", { content: t, property: "al:ios:app_name" }), o.createElement("meta", { content: e, property: "al:android:url" }), o.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), o.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, t, a) => {
            a.d(t, { Z: () => n });
            var o = a(202784),
                r = a(272175);
            const n = (e) => {
                const { canonical: t, description: a = "", image: n, imageAlt: l, imageH: s, imageType: i, imageW: d, title: c, ttl: u, type: m } = e;
                return o.createElement(r.ql, null, m ? o.createElement("meta", { content: m, property: "og:type" }) : null, t ? o.createElement("meta", { content: t, property: "og:url" }) : null, c ? o.createElement("meta", { content: c, property: "og:title" }) : null, o.createElement("meta", { content: a, property: "og:description" }), n ? o.createElement("meta", { content: n, property: "og:image" }) : null, i ? o.createElement("meta", { content: i, property: "og:image:type" }) : null, d ? o.createElement("meta", { content: d, property: "og:image:width" }) : null, s ? o.createElement("meta", { content: s, property: "og:image:height" }) : null, l ? o.createElement("meta", { content: l, property: "og:image:alt" }) : null, u ? o.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        293988: (e, t, a) => {
            a.d(t, { Z: () => P });
            var o = a(202784),
                r = a(154003),
                n = a(111677),
                l = a.n(n),
                s = a(74514),
                i = a(405303),
                d = a(684511),
                c = a(860174),
                u = a(71620),
                m = a(668214),
                h = a(257166),
                p = a(919022);
            const b = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                f = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: b }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                g = l().bdba3e1a,
                w = l().c4da7d28,
                _ = l().j87c21f4,
                D = l().iebc30ca,
                y = l().dc740eb2;
            class E extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? o.createElement(r.ZP, { "aria-label": w, hoverLabel: { label: D }, icon: o.createElement(s.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : o.createElement(r.ZP, { "aria-label": g, hoverLabel: { label: _ }, icon: o.createElement(i.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return o.createElement("div", null, this.state.showingPushPrompt ? o.createElement(d.Z, { fullScreen: !0, message: y }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: a, userId: o } = this.props;
                    return a(o, { device: e }).catch(t(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const P = f(E);
        },
        23134: (e, t, a) => {
            a.d(t, { C: () => R });
            a(136728);
            var o = a(202784),
                r = a(190286),
                n = a(723587),
                l = a(111677),
                s = a.n(l),
                i = a(615656),
                d = a(666670),
                c = a(757953),
                u = a(879596),
                m = a(323683),
                h = a(479506),
                p = a(942893),
                b = a(500002),
                f = a(233391),
                g = a(288955),
                w = a(71620),
                _ = a(668214),
                D = a(390387),
                y = a(601576),
                E = a(919022);
            const P = (e, t) => t.user || E.ZP.select(e, t.userId),
                Z = (0, _.Z)()
                    .propsFromState(() => ({ isLoggedIn: D.Qb, user: P }))
                    .propsFromActions(() => ({ addToast: y.fz, cancelPendingFollow: E.ZP.cancelPendingFollow, createLocalApiErrorHandler: (0, w.zr)("FOLLOW_USER_BUTTON"), fetchOneUserIfNeeded: E.ZP.fetchOneIfNeeded, follow: E.ZP.follow, unblock: E.ZP.unblock, unfollow: E.ZP.unfollow }))
                    .withAnalytics(),
                v = (e) => `${e}-follow`,
                M = (e) => `${e}-unfollow`,
                C = (e) => `${e}-block`,
                I = (e) => `${e}-unblock`,
                T = (e) => `${e}-cancel`,
                k = (e) => `${e}-subscribe`,
                A = (e) => `${e}-manageSubscription`,
                x = s().hbe4feb5,
                F = s().df4c86b0,
                S = s().bba40ffa,
                N = s().f558829e,
                L = s().a6941096,
                U = s().j24c37b2,
                B = s().if8cd2a4,
                O = s().b5972260;
            class H extends o.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUserIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserIfNeeded: t, isRelay: a, userId: o } = this.props;
                            o && !a && t(o).catch(e(d.F));
                        }),
                        (this._handleClose = () => {
                            this.setState({ showDialog: !1, dialogText: void 0, dialogHeadline: void 0 });
                        }),
                        (this._handleCancelPendingFollow = () => {
                            const { cancelPendingFollow: e, createLocalApiErrorHandler: t, user: a } = this.props;
                            a && e(a.id_str).catch(t({ defaultToast: { text: O }, showToast: !0 }));
                        }),
                        (this._handleLoggedInFollow = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, follow: a, isFollowNudge: o, onFollowClick: r, promotedContent: n, user: l } = this.props;
                            l && a(l.id_str, { promotedContent: n, isFollowNudge: o }).then(() => (l.protected && e({ text: x({ screenName: l.screen_name }) }), r && r(), this._scribe({ action: "follow" })), t({ ...this._followApiErrorHandlingConfiguration, showToast: !0 }));
                        }),
                        (this._handleLoggedOutFollow = () => {
                            this._scribe({ action: "follow_attempt" });
                        }),
                        (this._handleUnblock = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unblock: a, user: o } = this.props;
                            o && (a(o.id_str, { promotedContent: t }).catch(e(u.D)), this._scribe({ action: "unblock" }));
                        }),
                        (this._handleUnfollow = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unfollow: a, user: o } = this.props;
                            if (o) return a(o.id_str, { promotedContent: t }).catch(e(m.X)), this._scribe({ action: "unfollow" });
                        }),
                        (this._handleSuperFollow = () => {
                            const { history: e, referringPage: t, user: a } = this.props;
                            if (a) return this._scribe({ element: "super_follow_subscribe_button", action: "click" }), e.push(`/${a.screen_name}/creator-subscriptions/subscribe`, { referring_page: t ?? "profile_intent" });
                        }),
                        (this._handleUnSuperFollow = () => {
                            const { history: e, user: t } = this.props;
                            if (t) return this._scribe({ element: "super_follow_unsubscribe_button", action: "click" }), e.push(`/${t.screen_name}/creator-subscriptions/manage`);
                        }),
                        (this.state = { showDialog: !1 });
                }
                componentDidMount() {
                    this.props.isLoggedIn && this._fetchUserIfNeeded(),
                        (this._followApiErrorHandlingConfiguration = {
                            ...c.H,
                            [i.ZP.UserMustBeAlcoholAgeScreened]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: B, dialogHeadline: S });
                                },
                            },
                            [i.ZP.CannotFollowFromCountry]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: L, dialogHeadline: S });
                                },
                            },
                            [i.ZP.BirthdateRequired]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: N, dialogHeadline: F });
                                },
                            },
                        });
                }
                render() {
                    const { buttonType: e, isLoggedIn: t, isSuperFollowSubscriptionEnabled: a, isTransparent: l, relationshipMode: s, showRelationshipChangeConfirmation: i, size: d, style: c, user: u, userId: m } = this.props,
                        { dialogHeadline: h, dialogText: p, showDialog: b } = this.state,
                        w = u?.screen_name,
                        _ = w ? `/${w}` : "",
                        D = { follow: v(m), unfollow: M(m), cancel: T(m), block: C(m), unblock: I(m), subscribe: k(m), manageSubscription: A(m) },
                        y = !(!u?.follow_request_sent || !u.protected || u.following);
                    return (
                        !!u &&
                        o.createElement(
                            o.Fragment,
                            null,
                            b ? o.createElement(r.Z, { confirmButtonLabel: U, headline: h, onCancel: this._handleClose, onConfirm: this._handleClose, text: p, withCancelButton: !1 }) : null,
                            o.createElement(g.Z, { displayMode: f.BH.follow, postLoginPath: _, userFullName: u.name, userId: m }, (r) => o.createElement(n.Z, { buttonType: e, isBlocking: u.blocking, isFollowRequestSent: y, isFollowed: !!u.followed_by, isFollowing: !!u.following, isSuperFollowEligible: !!a && u.super_follow_eligible, isSuperFollowing: u.super_following, isTransparent: l, name: w, onCancelPendingFollow: r(this._handleCancelPendingFollow), onFollow: r(this._handleLoggedInFollow, this._handleLoggedOutFollow), onSuperFollow: r(this._handleSuperFollow), onUnSuperFollow: r(this._handleUnSuperFollow), onUnblock: r(this._handleUnblock), onUnfollow: r(this._handleUnfollow), relationshipMode: s, showRelationshipChangeConfirmation: t && i, size: d, style: c, testIDs: D, type: "user" })),
                        )
                    );
                }
                _scribe(e) {
                    const { action: t, element: a } = e,
                        { analytics: o, location: r, promotedContent: n, user: l } = this.props,
                        { items: s } = o.contextualScribeData,
                        i = s?.find((e) => e.item_type === h.Z.ItemType.USER && e.id === l?.id_str),
                        d = [];
                    l ? d.push({ ...i, ...p.Z.getUserItem(l, n) }) : i && d.push(i);
                    const c = r.query && r.query.screen_name ? { items: d, context: "profile_intent" } : { items: d };
                    return o.scribe({ element: a, action: t, data: c });
                }
            }
            const R = (0, b.ZP)(Z(H));
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => c });
            var o = a(202784),
                r = a(500002),
                n = a(668214),
                l = a(997174),
                s = a(118823);
            const i = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class d extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: o },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: n, search: l },
                            locationKey: s,
                        } = e;
                    let i = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (i = !0));
                    const d = r || s;
                    ((d && r !== s) || (!d && a !== n) || o !== l || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, r.ZP)(i(d));
        },
        288955: (e, t, a) => {
            a.d(t, { Z: () => i });
            var o = a(807896),
                r = a(202784),
                n = a(443781),
                l = a(369241);
            class s extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showLoginPrompt: !1 }),
                        (this._getHandler =
                            (e, t) =>
                            (a, ...o) => {
                                this.props.disabled || this.context.loggedInUserId ? e && e(a, ...o) : (a && a.preventDefault && a.preventDefault(), t && t(), this.setState({ showLoginPrompt: !0 }));
                            }),
                        (this._handleClose = () => {
                            this.setState({ showLoginPrompt: !1 });
                        });
                }
                render() {
                    const { children: e, disabled: t, ...a } = this.props;
                    return r.createElement(r.Fragment, null, e(this._getHandler), this.state.showLoginPrompt && r.createElement(l.ZP, (0, o.Z)({ onClose: this._handleClose }, a)));
                }
            }
            (s.defaultProps = { disabled: !1 }), (s.contextType = n.rC);
            const i = s;
        },
        241304: (e, t, a) => {
            a.d(t, { Z: () => x });
            var o = a(202784),
                r = a(576648),
                n = a(325686),
                l = a(154003),
                s = a(138099),
                i = a(731708),
                d = a(392237),
                c = a(111677),
                u = a.n(c),
                m = a(652255),
                h = a(376180),
                p = a(502940),
                b = a(70962),
                f = a(933340),
                g = a(321264),
                w = a(208340),
                _ = a(707305),
                D = a(748138),
                y = a(837020),
                E = a(125363),
                P = a(601576),
                Z = a(919022);
            const v = u().ia5e7488,
                M = { label: v },
                C = u().j33d8902,
                I = { label: C },
                T = u().a8ab3d08,
                k = u().d740d2d9,
                A = { bandcamp_handle: { icon: o.createElement(m.default, null), label: u().a7cf1e98, url: "https://bandcamp.com/" }, bitcoin_handle: { icon: o.createElement(h.default, null), label: u().d876e67e }, cash_app_handle: { icon: o.createElement(p.default, null), label: u().f85f6760, url: "https://cash.app/" }, ethereum_handle: { icon: o.createElement(b.default, null), label: u().a32a7c06 }, gofundme_handle: { icon: o.createElement(f.default, null), label: u().cc1a3bc4, url: "https://gofundme.com/f/" }, patreon_handle: { icon: o.createElement(g.default, null), label: u().d4d74bb4, url: "https://patreon.com/" }, pay_pal_handle: { icon: o.createElement(w.default, null), label: u().h14fbc52, url: "https://paypal.me/" }, venmo_handle: { icon: o.createElement(_.default, null), label: u().h1198dcc, url: "https://venmo.com/" } };
            function x({ style: e, userId: t }) {
                const a = (0, E.I0)(),
                    [d, c] = o.useState(!1),
                    u = (0, E.v9)((e) => Z.ZP.select(e, t));
                if (!u) return null;
                const { tipjar_settings: m } = u;
                if (!m) return null;
                const { is_enabled: h, ...p } = m;
                if (!1 === h || !Object.keys(p).length) return null;
                function b() {
                    c(!1);
                }
                return o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(l.ZP, {
                        "aria-label": C,
                        hoverLabel: I,
                        icon: o.createElement(D.default, null),
                        onPress: function () {
                            c((e) => !e);
                        },
                        style: e,
                    }),
                    d
                        ? o.createElement(
                              s.Z,
                              { onMaskClick: b, style: F.sheet, type: "bottom", withMask: !0 },
                              o.createElement(l.ZP, { "aria-label": v, hoverLabel: M, icon: o.createElement(y.default, null), onPress: b, style: F.close, type: "primaryText" }),
                              o.createElement(n.Z, { style: F.header }, o.createElement(i.ZP, { weight: "bold" }, T), o.createElement(i.ZP, null, `@${u.screen_name}`)),
                              Object.entries(p)
                                  .filter(([e, t]) => t)
                                  .map(([e, t]) => {
                                      const n = A[e];
                                      if (n) {
                                          const l = n.url
                                                  ? void 0
                                                  : function () {
                                                        r.Z.setString(String(t)), a((0, P.fz)({ text: k({ service: n.label }) }));
                                                    },
                                              s = n.url ? `${n.url}${String(t)}` : void 0;
                                          return o.createElement(i.ZP, { color: "text", key: e, link: s, onPress: l, style: F.service, withInteractiveStyling: !1 }, n.icon, n.label);
                                      }
                                  }),
                          )
                        : null,
                );
            }
            const F = d.default.create((e) => ({ close: { end: e.spaces.space16, position: "absolute", top: e.spaces.space16 }, header: { alignItems: "center", justifyContent: "center", marginHorizontal: "auto" }, service: { display: "flex", cursor: "pointer", gap: e.spaces.space8, marginBottom: e.spaces.space16 }, sheet: { padding: e.spaces.space16 } }));
        },
        684511: (e, t, a) => {
            a.d(t, { Z: () => o });
            a(202784);
            const o = (0, a(523561).Z)({
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
        666670: (e, t, a) => {
            a.d(t, { F: () => l });
            var o = a(516951),
                r = a(615656),
                n = a(51525);
            const l = { [r.ZP.AddressBookLookupNotFound]: { customAction: n.vv }, [r.ZP.GenericUserNotFound]: { customAction: o.Z }, [r.ZP.OtherUserSuspended]: { customAction: o.Z }, showToast: !0 };
        },
        757953: (e, t, a) => {
            a.d(t, { H: () => p });
            var o = a(111677),
                r = a.n(o),
                n = a(516951),
                l = a(615656),
                s = a(51525);
            const i = r().j4292c24,
                d = r().a0ba5842,
                c = r().i859a9d4,
                u = r().a5202b82,
                m = r().f8cbf714,
                h = r().f2e66452,
                p = { defaultToast: { text: u }, [l.ZP.CurrentUserSuspended]: { toast: { text: h, action: { label: c, link: "https://support.twitter.com/articles/15790" } } }, [l.ZP.DuplicateFollowRequest]: { customAction: n.Z }, [l.ZP.FollowBlockedUserError]: { toast: { text: i } }, [l.ZP.FollowError]: { customAction: s.w1 }, [l.ZP.FollowRateLimitExceeded]: { toast: { action: { label: c, link: "https://support.twitter.com/articles/66885" }, text: d } }, [l.ZP.TargetUserNotFound]: { toast: { text: m } } };
        },
        879596: (e, t, a) => {
            a.d(t, { D: () => r });
            var o = a(111677);
            const r = { defaultToast: { text: a.n(o)().ca96fe6e }, showToast: !0 };
        },
        323683: (e, t, a) => {
            a.d(t, { X: () => r });
            var o = a(111677);
            const r = { defaultToast: { text: a.n(o)().e1a0aaca }, showToast: !0 };
        },
        860174: (e, t, a) => {
            a.d(t, { Z: () => n });
            var o = a(615656),
                r = a(51525);
            const n = { [o.ZP.FollowError]: { customAction: r.w1 } };
        },
        10195: (e, t, a) => {
            a.d(t, { Z: () => d });
            var o = a(202784),
                r = a(272175),
                n = a(276563),
                l = a(386592);
            const s = (e) =>
                    []
                        .concat(
                            (({ id: e, timecode: t, title: a, url: o }) => [
                                { name: "twitter:card", content: n.default.CardNames.BROADCAST },
                                { name: "twitter:url:broadcast_url", content: o },
                                { name: "twitter:text:broadcast_id", content: e },
                                { name: "twitter:text:broadcast_title", content: a.replaceAll('"', "&quot;") },
                                { name: "twitter:text:broadcast_timecode", content: t },
                                { name: "twitter:image:broadcast_pre_live_slate:width", content: 1280 },
                                { name: "twitter:image:broadcast_pre_live_slate:height", content: 720 },
                                { name: "twitter:maxage", content: 210 },
                            ])(e),
                        )
                        .concat(
                            (({ broadcast: e, broadcaster: t }) =>
                                e
                                    ? [
                                          { name: "twitter:text:broadcast_media_key", content: e.media_key },
                                          { name: "twitter:text:broadcast_media_id", content: e.media_key?.split("_")?.[1] },
                                          { name: "twitter:text:broadcaster_twitter_id", content: t?.id_str },
                                          { name: "twitter:text:broadcaster_display_name", content: t?.name },
                                          { name: "twitter:text:broadcaster_username", content: t?.screen_name },
                                          { name: "twitter:text:broadcast_width", content: e.width },
                                          { name: "twitter:text:broadcast_height", content: e.height },
                                          { name: "twitter:text:broadcast_source", content: e.source },
                                          { name: "twitter:text:broadcast_orientation", content: e.camera_rotation },
                                          { name: "twitter:image:broadcast_thumbnail_original:src", content: e.image_url },
                                          { name: "twitter:image:broadcast_pre_live_slate:src", content: e.pre_live_slate_url },
                                          { name: "twitter:boolean:broadcast_is_high_latency", content: e.is_high_latency },
                                          { name: "twitter:text:broadcast_replay_edited_start_time", content: e.edited_replay?.start_time },
                                          { name: "twitter:string:broadcast_scheduled_start_time", content: e.scheduled_start_time },
                                          { name: "twitter:string:broadcast_start_time", content: e.start_time },
                                          { name: "twitter:string:broadcast_end_time", content: e.end_time },
                                          { name: "twitter:site:id", content: t?.id_str },
                                          { name: "twitter:string:broadcast_state", content: l.rZ[e.state ?? l.N8.NotStarted] },
                                      ]
                                    : [])(e),
                        ),
                i = (e) => (void 0 !== e.content ? o.createElement("meta", e) : null),
                d = (e) => o.createElement(r.ql, null, ...((e) => s(e).map(i))(e));
        },
        679180: (e, t, a) => {
            a.d(t, { H: () => f });
            var o = a(202784),
                r = a(325686),
                n = a(154003),
                l = a(371344),
                s = a(451051),
                i = a(392237),
                d = a(111677),
                c = a.n(d),
                u = a(885724),
                m = a(688356),
                h = a(741810),
                p = a(782642);
            const b = { cancel: c().cfd2f35e, defaultTitle: c().jceadc3e, edit: c().abd845fe, save: c().i2209530, toastSuccessMessage: c().d39d46c4, toastErrorMessage: c().ef4602ec };
            function f(e) {
                const { broadcastId: t, canEdit: a, remoteTitle: i } = e,
                    [d, c] = o.useState({ currentTitle: i, draftTitle: i, isEditing: !1 }),
                    f = (0, p.p)();
                o.useEffect(() => {
                    c((e) => ({ ...e, currentTitle: i, draftTitle: i }));
                }, [i]);
                const w = { user_mentions: (0, m.Z)(d.draftTitle) },
                    _ = [0, d.draftTitle.length],
                    D = d.draftTitle === d.currentTitle || "" === d.draftTitle.trim(),
                    y = o.useCallback((e) => {
                        c((t) => ({ ...t, draftTitle: e.target.value }));
                    }, []),
                    E = o.useCallback(() => {
                        Promise.resolve(h.E.replayBroadcastEdit(t, { replay_edited_title: d.draftTitle }))
                            .then(() => {
                                c((e) => ({ ...e, currentTitle: d.draftTitle, isEditing: !1 })), f({ text: b.toastSuccessMessage });
                            })
                            .catch(() => {
                                c((e) => ({ ...e, draftTitle: e.currentTitle })), f({ text: b.toastErrorMessage });
                            });
                    }, [t, d.draftTitle, f]),
                    P = o.useCallback(() => {
                        c((e) => ({ ...e, draftTitle: e.currentTitle, isEditing: !1 }));
                    }, []),
                    Z = () => o.createElement(r.Z, { style: g.buttonContainer }, o.createElement(n.ZP, { onPress: P, size: "small", type: "primaryOutlined" }, b.cancel), o.createElement(n.ZP, { disabled: D, onPress: E, size: "small", type: "primaryFilled" }, b.save));
                return o.createElement(
                    r.Z,
                    { style: g.broadcastTitleRow },
                    d.isEditing
                        ? o.createElement(l.Z, { appTextSize: "headline1", inputStyle: g.titleInput, maxLength: 256, maxNumberOfLines: 3, multiline: !0, onChange: y, onSubmitEditing: D ? void 0 : E, placeholder: b.defaultTitle, rightContent: o.createElement(Z, null), styleType: "selection", value: d.draftTitle })
                        : o.createElement(
                              r.Z,
                              { style: g.broadcastTitleRow },
                              o.createElement(s.Z, { displayTextRange: _, entities: w, linkify: !0, size: "headline1", style: g.broadcastTitleText, text: d.currentTitle, weight: "bold" }),
                              a &&
                                  o.createElement(n.ZP, {
                                      "aria-label": b.edit,
                                      hoverLabel: { label: b.edit },
                                      icon: o.createElement(u.default, null),
                                      onPress: () => {
                                          c((e) => ({ ...e, isEditing: !0 }));
                                      },
                                      size: "xSmall",
                                      type: "primaryText",
                                  }),
                          ),
                );
            }
            const g = i.default.create((e) => ({ buttonContainer: { flexDirection: "row", gap: e.spaces.space8 }, titleInput: { fontWeight: e.fontWeights.heavy, padding: 0 }, broadcastTitleRow: { alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }, broadcastTitleText: { flex: 1 } }));
        },
        386592: (e, t, a) => {
            a.d(t, { N8: () => o, rZ: () => r });
            a(136728);
            const o = { Canceled: "Canceled", Ended: "Ended", NotStarted: "NotStarted", PrePublished: "PrePublished", Running: "Running", TimedOut: "TimedOut" },
                r = { Canceled: "CANCELED", Ended: "ENDED", NotStarted: "NOT_STARTED", PrePublished: "PRE_PUBLISHED", Running: "RUNNING", TimedOut: "TIMED_OUT" };
        },
        365470: (e, t, a) => {
            a.r(t), a.d(t, { LiveScreen: () => Ue, default: () => Oe });
            var o = a(202784),
                r = a(272175),
                n = a(325686),
                l = a(688715),
                s = a(537392),
                i = a(868634),
                d = a(530525),
                c = a(439592),
                u = a(392237),
                m = a(731708),
                h = a(879113),
                p = a(111677),
                b = a.n(p),
                f = a(123751),
                g = a(615656),
                w = a(545457),
                _ = a(651930),
                D = a(572067),
                y = a(443781),
                E = a(38293),
                P = a(652904),
                Z = a(382285),
                v = a(181142),
                M = a(310453),
                C = a(51525),
                I = a(655352),
                T = a(293115),
                k = a(503229),
                A = a(10195),
                x = a(679180),
                F = a(386592),
                S = a(807896),
                N = a(666305);
            const L = o.memo(({ ...e }) => {
                    const { ref: t, style: a } = B(),
                        r = o.useMemo(() => [a, e.style], [a, e.style]);
                    return o.createElement(n.Z, (0, S.Z)({ ref: t }, e, { style: r }));
                }),
                U = 16 / 9,
                B = () => {
                    const e = o.useRef(null),
                        [t, a] = o.useState(!0),
                        r = o.useCallback(() => {
                            const t = e.current,
                                o = t?.parentElement;
                            if (!t || !o) return;
                            const r = O(o),
                                n = O(t);
                            a(n >= r);
                        }, []);
                    o.useEffect(() => {
                        const t = e.current,
                            a = t?.parentElement;
                        if (t && a)
                            return (
                                N.Z.observe(t, r),
                                N.Z.observe(a, r),
                                () => {
                                    N.Z.unobserve(t, r), N.Z.unobserve(a, r);
                                }
                            );
                    }, [r]);
                    const n = o.useMemo(() => (t ? H.widthConstrained : H.heightConstrained), [t]);
                    return { ref: e, style: n };
                },
                O = (e) => {
                    const { height: t, width: a } = e.getBoundingClientRect();
                    return a / t;
                },
                H = u.default.create((e) => {
                    const t = { aspectRatio: U, marginHorizontal: "auto", top: 0 };
                    return { widthConstrained: { ...t, width: "100%", height: "auto" }, heightConstrained: { ...t, height: "100%", width: "auto" } };
                });
            var R = a(400752),
                W = a(107267),
                j = a(154003),
                z = a(978053),
                $ = a(673510),
                q = a(366635),
                V = a(360816),
                G = a(293988),
                X = a(23134),
                K = a(907552),
                Q = a(241304),
                Y = a(125363),
                J = a(427478),
                ee = a(823180),
                te = a(449998);
            const ae = b().jade381b,
                oe = b().e44095a5,
                re = b().j83f29dd,
                ne = { section: "header", component: "user_actions" },
                le = b().daca8a2c,
                se = o.memo(({ broadcast: e, broadcastId: t, broadcaster: a, isLive: r }) => {
                    const { featureSwitches: s, viewerUserId: i } = (0, y.QZ)(),
                        d = (0, W.useHistory)(),
                        c = (0, Y.I0)(),
                        u = (0, R.b9)(te.Tc),
                        h = o.useCallback(() => {
                            t && (u(t), c(J.bi(ee.N.EXPANDED)), d.goBack());
                        }, [t, c, d, u]),
                        p = o.useCallback(() => o.createElement(j.ZP, { "aria-label": le, hoverLabel: { label: le }, icon: o.createElement(V.default, null), onPress: h, type: "primaryOutlined" }), [h]),
                        b = o.useCallback((e) => {
                            const t = new Date(),
                                a = new Date(e);
                            return t.getTime() - a.getTime() > 2592e6 ? ae(a) : z.default.formatTimeSinceDate(a);
                        }, []),
                        f = o.useMemo(() => {
                            const t = e?.end_time ?? e?.timedout_time ?? e?.start_time;
                            if (!t) return null;
                            const a = b(t);
                            return o.createElement(m.ZP, { color: "gray700", size: "subtext1" }, r ? oe({ timestamp: a }) : re({ timestamp: a }));
                        }, [e, b, r]),
                        g = o.useCallback(() => (!a || i === a.id_str || a.blocked_by ? null : o.createElement(n.Z, { style: ie.userActionsWrapper }, o.createElement(p, null), s.isTrue("rweb_tipjar_consumption_enabled") && o.createElement(Q.Z, { userId: a.id_str }), a.following && o.createElement(G.Z, { allowPromptForPush: !0, isFollowing: a.notifications, userId: a.id_str }), o.createElement(X.C, { isSuperFollowSubscriptionEnabled: s.isTrue("super_follow_android_web_subscription_enabled"), promotedContent: a.promoted_content, userId: a.id_str }))), [p, a, s, i]),
                        w = o.useMemo(() => (a ? o.createElement(n.Z, { style: ie.userNameWrapper }, o.createElement($.ZP, { affiliateBadgeInfo: a.highlightedLabel, avatarUri: a.profile_image_url_https, decoration: g(), isBlueVerified: a.is_blue_verified, isProtected: a.protected, isVerified: a.verified, name: a.name, screenName: a.screen_name, style: ie.userCell, translatorType: a.translator_type, userId: a.id_str, verifiedType: a.verified_type, withLink: !0 })) : a?.profile_image_url && a?.screen_name ? o.createElement(n.Z, { style: ie.userNameWrapper }, o.createElement(q.Z, { name: a.screen_name, profileImageUrl: a.profile_image_url })) : void 0), [g, a]);
                    return o.createElement(n.Z, { style: ie.header }, w, o.createElement(n.Z, { style: ie.timeAndShareWrapper }, f, t && o.createElement(K.Tz, { scribeNamespace: ne, url: (0, l.ju)(`https://x.com/i/broadcasts/${t}`) })));
                }),
                ie = u.default.create((e) => ({ header: { flexDirection: "column", gap: e.spaces.space12, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, marginBottom: e.spaces.space48 }, userCell: { paddingHorizontal: 0, paddingVertical: 0, width: "100%" }, userActionsWrapper: { alignItems: "center", display: "flex", flexDirection: "row", gap: e.spaces.space8 }, userNameWrapper: { alignItems: "flex-start", flex: 1, justifyContent: "center" }, timeAndShareWrapper: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" } }));
            var de = a(71620),
                ce = a(2430),
                ue = a(668214),
                me = a(689642),
                he = a(919022),
                pe = a(312771);
            const be = (0, ce.cI)("t"),
                fe = (e, t) => {
                    const a = t.match.params.screenName;
                    if (a) return a;
                    const o = _e(e, t);
                    return o?.user_results?.result?.core?.screen_name || "";
                },
                ge = (e, t) => {
                    const a = t.match.params.broadcastId;
                    if (a) return a;
                    const o = we(e, t);
                    return o?.latest_broadcast?.broadcast_id;
                },
                we = (e, t) => {
                    const a = fe(e, t);
                    if (a) return he.ZP.selectByScreenName(e, a);
                    const o = _e(e, t);
                    return o?.user ? he.ZP.select(e, o.user) : void 0;
                },
                _e = (e, t) => {
                    const a = ge(e, t);
                    return a ? me.Z.select(e, a) : void 0;
                },
                De = (e, t) => he.ZP.selectViewerUser(e),
                ye = (e, t) => {
                    const a = fe(e, t);
                    return me.Z.selectLatestBroadcastFetched(e, a);
                },
                Ee = (e, t) => {
                    const a = _e(e, t),
                        o = ye(e, t),
                        r = ge(e, t);
                    return a || (!r && o) ? pe.ZP.LOADED : pe.ZP.LOADING;
                },
                Pe = (0, ue.Z)()
                    .propsFromState(() => ({ broadcast: _e, broadcastId: ge, broadcaster: we, fetchStatus: Ee, latestBroadcastFetched: ye, screenName: fe, timecode: be, viewerUser: De }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, de.zr)("LIVE_SCREEN"), fetchBroadcast: me.Z.fetchOneIfNeeded, fetchLatestBroadcast: me.Z.fetchLatestBroadcast })),
                Ze = 16 / 9,
                ve = { objectFitVideo: "contain" },
                Me = ({ windowWidth: e }) => e >= 920,
                Ce = (e) => (e ? { url: e.image_url, width: e.width, height: e.height } : null),
                Ie = b().hd0bc1eb,
                Te = b().bea1f26b,
                ke = b().jceadc3e,
                Ae = b().ab3ee97f,
                xe = b().ac4c73d8,
                Fe = b().i9028824,
                Se = { page: "broadcast" },
                Ne = { url: "https://pbs.twimg.com/lex/placeholder_live_nomargin.png", width: 1920, height: 1080 },
                Le = (e, t) => (0, l.ju)(`https://x.com/i/broadcasts/${e}${t ? `?t=${t}` : ""}`);
            function Ue(e) {
                const { broadcast: t, broadcastId: a, broadcaster: l, createLocalApiErrorHandler: p, fetchBroadcast: k, fetchLatestBroadcast: S, fetchStatus: N, latestBroadcastFetched: U, screenName: B, timecode: O } = e,
                    H = o.useContext(y.rC),
                    { viewerUserId: R } = H,
                    W = l?.id_str === R,
                    j = (0, s.Zx)(Me),
                    z = (0, I.ZP)();
                (0, w.ph)(),
                    (0, w.hB)(),
                    o.useEffect(() => {
                        B && S(B);
                    }, [S, B]);
                const $ = o.useCallback(() => {
                    a && k(a).catch(p({ [g.ZP.GenericNotFound]: { customAction: C.vv } }));
                }, [a, p, k]);
                o.useEffect(() => {
                    $();
                }, [$, a]);
                const q = o.useMemo(() => {
                        if (t && l) {
                            const { state: e, status: a } = t,
                                { name: o } = l;
                            if (a) return a;
                            if (o)
                                switch (e) {
                                    case F.N8.Running:
                                        return Ie({ name: o });
                                    case F.N8.Ended:
                                    case F.N8.TimedOut:
                                        return Te({ name: o });
                                    case F.N8.NotStarted:
                                    default:
                                        return ke;
                                }
                        }
                        return ke;
                    }, [t, l]),
                    V = b().d980e29f,
                    G = b().fc209bb7,
                    X = o.useCallback(() => {
                        const e = t && t.scheduled_start_time ? new Date(parseInt(t.scheduled_start_time, 10)) : void 0,
                            a = e ? V({ date: G(e) }) : void 0;
                        return a ? o.createElement(n.Z, { style: Be.labelOverlay }, o.createElement(i.ZP, null, a)) : null;
                    }, [t, G, V]),
                    K = o.useCallback(() => {
                        const e = t && t.pre_live_slate_url ? { url: t.pre_live_slate_url, width: 600, height: 337 } : Ne;
                        return o.createElement(n.Z, null, o.createElement(r.ql, { prioritizeSeoTags: !0 }, o.createElement("meta", { content: e.url, property: "og:image" }), o.createElement("meta", { content: e.width, property: "og:image:width" }), o.createElement("meta", { content: e.height, property: "og:image:height" })), o.createElement(d.Z, { "aria-label": xe, aspectMode: c.Z.exact(u.default.theme.aspectRatios.landscape), image: e, previewMode: !1 }), X());
                    }, [t, X]),
                    Q = o.useMemo(() => {
                        const e = t && t.media_key,
                            s = !a && l && U,
                            i = Ce(t);
                        return t && t.state === F.N8.NotStarted ? K() : s ? o.createElement(n.Z, { style: Be.offlineContainer }, o.createElement(m.ZP, { size: "title2" }, Ae({ screenName: B }))) : t && l && a && i && e ? o.createElement(o.Fragment, null, o.createElement(r.ql, { prioritizeSeoTags: !0 }, o.createElement("meta", { content: i.url, property: "og:image" }), o.createElement("meta", { content: i.width, property: "og:image:width" }), o.createElement("meta", { content: i.height, property: "og:image:height" })), o.createElement(M.Z, { "aria-label": xe, aspectRatio: Ze, displayOptions: ve, poster: i, source: { variants: [], videoId: f.Z.forBroadcast(a), contentId: e }, videoType: "video" })) : null;
                    }, [t, a, l, U, K, B]),
                    Y = o.useMemo(() => o.createElement(n.Z, { style: Be.chat }, o.createElement(Z.Z, { broadcastId: a ?? "", defaultChatNotice: Ae({ screenName: B }) })), [a, B]),
                    J = o.useCallback(() => o.createElement(v.aM, null, o.createElement(n.Z, { style: [Be.container, z ? Be.navBorder : void 0] }, o.createElement(n.Z, { style: Be.videoContainer }, o.createElement(L, null, Q), a && o.createElement(n.Z, { style: Be.title }, o.createElement(x.H, { broadcastId: a, canEdit: W, remoteTitle: q })), o.createElement(se, { broadcast: t, broadcastId: a, broadcaster: l, isLive: t?.state === F.N8.Running })), j && Y)), [Y, Q, t, a, l, W, j, z, q]);
                return o.createElement(
                    T.nO,
                    { namespace: Se },
                    o.createElement(
                        P.Z,
                        null,
                        ((e) => {
                            const r = l?.name,
                                n = `twitter://broadcasts/${a || ""}`,
                                s = Le(a || ""),
                                i = Le(a || "", O);
                            return l ? o.createElement(o.Fragment, null, o.createElement(D.Z, { canonical: s, description: e, title: r, type: "article" }), o.createElement(_.Z, { deepLink: n }), o.createElement(A.Z, { broadcast: t, broadcaster: l, id: a || "", timecode: O, title: e, url: i })) : null;
                        })(q),
                        o.createElement(E.Z, { title: q, withMeta: !1 }),
                        o.createElement(h.Z, { "aria-label": Fe, fetchStatus: N, onRequestRetry: $, render: J }),
                    ),
                );
            }
            const Be = u.default.create((e) => ({ container: { display: "flex", flexDirection: "row", height: "100vh", overflow: "hidden" }, chat: { borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor, height: "100vh", width: "340px" }, labelOverlay: { position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12 }, navBorder: { borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor }, title: { alignItems: "center", display: "flex", flexDirection: "row", gap: e.spaces.space12, justifyContent: "space-between", paddingHorizontal: e.spaces.space12, paddingTop: e.spaces.space12 }, offlineContainer: { aspectRatio: Ze, backgroundColor: e.colors.gray0, flex: 1, justifyContent: "center", alignItems: "center" }, videoContainer: { flex: 1, WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none", overflow: "auto" } })),
                Oe = Pe((0, k.Z)(Ue));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Live-e019dbda.0726e47a.js.map
