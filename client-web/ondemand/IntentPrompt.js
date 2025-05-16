"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.IntentPrompt"],
    {
        958679: (e, t, n) => {
            n.r(t), n.d(t, { IntentPrompt: () => me, default: () => fe });
            n(136728);
            var o = n(202784),
                i = n(190286),
                r = n(332920),
                s = n.n(r),
                c = n(325686),
                a = n(731708),
                d = n(470397),
                l = n(688715),
                p = n(154003),
                h = n(138099),
                u = n(392237);
            const g = "IntentLoginSheet_Login_Sheet",
                m = s().d1091f50,
                f = s().bec9cff8,
                _ = s().hd50e064,
                y = s().e919c3bc;
            class w extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { autoSubmit: !1 }),
                        (this._renderHeader = () => {
                            const { Icon: e, description: t, heading: n, iconStyle: i } = this.props;
                            return o.createElement(c.Z, null, o.createElement(c.Z, { style: b.contentHeader }, e ? o.createElement(e, { style: [b.icon, i] }) : null, n ? o.createElement(a.ZP, { size: "headline1", weight: "bold" }, n) : null), t ? o.createElement(a.ZP, { color: "gray700", style: b.secondaryText }, t) : null);
                        }),
                        (this._renderLinks = () => {
                            const { showSignUpLink: e } = this.props;
                            return e ? o.createElement(d.Z, null, this._renderForgotPasswordLink(), this._renderSignUpLink()) : this._renderForgotPasswordLink();
                        }),
                        (this._renderForgotPasswordLink = () => {
                            const e = { pathname: (0, l.ju)("https://x.com/i/flow/password_reset"), external: !0 };
                            return o.createElement(a.ZP, { link: e }, m);
                        }),
                        (this._renderSignUpLink = () => o.createElement(a.ZP, { link: "/i/flow/signup" }, f)),
                        (this._renderLoginButton = () => {
                            const { onLoginFlowAction: e, submitButtonLabel: t } = this.props;
                            return o.createElement(p.ZP, { onPress: e, size: "medium", type: "brandFilled" }, o.createElement(a.ZP, { numberOfLines: 1 }, t));
                        }),
                        (this._renderFooter = () => {
                            const { onSecondaryAction: e, secondaryActionButtonLabel: t } = this.props;
                            return o.createElement(c.Z, { style: b.footer }, o.createElement(p.ZP, { onPress: e, size: "medium", type: "brandOutlined" }, o.createElement(a.ZP, { numberOfLines: 1 }, t)), this._renderLoginButton());
                        }),
                        (this._handleSubmit = () => {
                            this.props.onLoginSubmission && this.props.onLoginSubmission(), this.setState({ autoSubmit: !0 });
                        });
                }
                componentDidMount() {
                    this.props.onImpression && this.props.onImpression();
                }
                render() {
                    const { onMaskClick: e } = this.props;
                    return o.createElement(h.Z, { onMaskClick: e, type: "bottom", withMask: !0 }, o.createElement(c.Z, { style: b.sheetContent, testID: g }, o.createElement(c.Z, { style: b.content }, this._renderHeader()), this._renderFooter()));
                }
            }
            w.defaultProps = { secondaryActionButtonLabel: _, submitButtonLabel: y };
            const b = u.default.create((e) => ({ content: { padding: e.spaces.space20 }, contentHeader: { flexDirection: "row" }, icon: { paddingEnd: e.spaces.space12, fontSize: e.spaces.space20 }, footer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px", flexDirection: "row", justifyContent: "space-between", paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space20 }, secondaryText: { paddingTop: e.spaces.space12 }, sheetContent: { justifyContent: "space-between" } })),
                k = w;
            var I = n(443781),
                A = n(965283),
                P = n(71620),
                T = n(668214),
                L = n(137855),
                S = n(601576),
                C = n(836255),
                N = n(919022),
                E = n(911373),
                x = n(761744),
                Z = n(98440),
                v = n(720600),
                F = n(186444),
                B = n(467691),
                O = n(757953),
                U = n(200770),
                M = n(758600);
            const R = "follow",
                z = "like",
                H = "reply",
                $ = "retweet",
                D = "tweet",
                G = { [z]: B.S.like, [$]: B.S.retweet },
                j = s().c150ba68,
                q = s().cfd2f35e,
                V = s().f8e2163e,
                W = s().e919c3bc,
                J = s().f9f9210c,
                K = s().fe731016,
                Q = s().g062295e,
                X = s().a108c147,
                Y = s().c66afdc3,
                ee = { follow: E.default, like: x.default, reply: Z.default, retweet: v.default, tweet: F.default },
                te = u.default.create((e) => ({ follow: { color: e.colors.primary }, like: { color: e.colors.magenta500 }, reply: { color: e.colors.primary }, retweet: { color: e.colors.green500 }, tweet: { color: e.colors.primary } })),
                ne = (e, t) => ({ ...e, description: t?.subheading.text || e.description, confirm: t?.cta_title || e.confirm }),
                oe = (e, t) => {
                    const n = t?.cta_url?.url,
                        o = e?.landingUrl.url;
                    return n || o;
                },
                ie = ({ forwardPivotInfo: e, intentType: t, loggedIn: n, nudgePayload: o, screenName: i = "", withNudge: r = !1 }) => {
                    const c = (({ screenName: e }) => ({ follow: { loggedIn: { description: X({ screenName: e }), confirm: Y({ screenName: e }), cancel: q }, loggedOut: { heading: V, description: s().feccfd6e, confirm: W, secondaryAction: J } }, like: { loggedIn: { heading: j, description: s().dedce756, confirm: K, cancel: q }, loggedInNudged: { heading: s().ha5987e0, description: s().g7135e44, confirm: s().af5cd00e, cancel: K }, loggedOut: { heading: V, description: s().f98f4e00, confirm: W, secondaryAction: J } }, reply: { loggedOut: { heading: V, description: s().b459ba4c, confirm: W, secondaryAction: s().a565833e } }, retweet: { loggedIn: { heading: j, description: s().f3e1093a, confirm: Q, cancel: q }, loggedInNudged: { heading: s().i1d8723c, description: s().h9b6d468, confirm: s().af5cd00e, cancel: Q }, loggedOut: { heading: V, description: s().h19f38de, confirm: W, secondaryAction: J } }, tweet: { loggedOut: { heading: V, description: s().e289d950, confirm: W, secondaryAction: s().a565833e } } }))({ screenName: i })[t];
                    return n ? (r ? { icon: void 0, iconStyle: void 0, text: ne(c.loggedInNudged, o), confirmLink: oe(e, o) } : { icon: ee[t], iconStyle: te[t], text: c.loggedIn }) : { icon: ee[t], iconStyle: te[t], text: c.loggedOut };
                },
                re = { follow: O.H, like: U.o, retweet: M.l },
                se = (e, t) => {
                    const { location: n } = t;
                    switch (n.pathname) {
                        case "/intent/follow":
                        case "/intent/user":
                            return R;
                        case "/intent/like":
                        case "/intent/favorite":
                            return z;
                        case "/intent/retweet":
                            return $;
                        case "/intent/post":
                            return ce(n);
                        default:
                            return;
                    }
                },
                ce = (e) => {
                    const { query: t } = e;
                    return t && t.in_reply_to ? H : D;
                },
                ae = (e, t) => {
                    const { location: n } = t;
                    return `${n.pathname}${n.search}`;
                },
                de = (e, t) => {
                    const n = se(0, t);
                    if (n) return (0, A.p)(G[n], t.forwardPivotInfo, t.nudges, !1);
                },
                le = (e, t) => Boolean(de(0, t)?.source),
                pe = (e, t) => de(0, t)?.payload,
                he = (e, t) => {
                    const n = t.tweetId;
                    return !!n && (0, L.HP)(e, n);
                },
                ue = (0, T.Z)()
                    .propsFromState(() => ({ nudgePayload: pe, hasNudge: le, intentType: se, loginReturnPath: ae, nudgeActionTaken: he }))
                    .propsFromActions(() => ({ addToast: S.fz, createLocalApiErrorHandler: (0, P.zr)("INTENT_PROMPT_CONTAINER"), onFollow: N.ZP.follow, onLike: C.Z.like, onRetweet: C.Z.retweet, setTweetNudgeActionTaken: L.NR }))
                    .withAnalytics(),
                ge = s().e29c651e;
            class me extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showPrompt: !1 }),
                        (this._isComposeIntentType = () => {
                            const { intentType: e } = this.props;
                            return e === H || e === D;
                        }),
                        (this._handleSecondaryAction = () => {
                            const { intentType: e } = this.props;
                            e && this._isComposeIntentType() ? this._handleSignUp() : this._handleCancel();
                        }),
                        (this._handleSignUp = () => {
                            const { history: e } = this.props;
                            this.setState({ showPrompt: !1 }), this._scribeAction("signup"), e.push("/i/flow/signup");
                        }),
                        (this._handleLoginFlow = () => {
                            const { history: e, loginReturnPath: t } = this.props;
                            this.setState({ showPrompt: !1 }), this._scribeAction("login"), e.push(`/i/flow/login?redirect_after_login=${encodeURIComponent(t)}`);
                        }),
                        (this._handleCancel = () => {
                            const { hasNudge: e, nudgeActionTaken: t } = this.props;
                            this.setState({ showPrompt: !1 }), this._scribeAction("dismiss"), e && this._scribeNudgeAction({ element: t ? "after_read" : void 0, action: "cancel" });
                        }),
                        (this._handleLoginSubmission = () => {
                            this._scribeAction("login");
                        }),
                        (this._maybeGetTweetId = () => {
                            const { intentType: e, tweetId: t } = this.props;
                            return e && (e === z || e === $) && t ? t : void 0;
                        }),
                        (this._maybeGetUserId = () => {
                            const { intentType: e, userId: t } = this.props;
                            return e && e === R && t ? t : void 0;
                        }),
                        (this._handleIntentAction = () => {
                            const { createLocalApiErrorHandler: e, hasNudge: t, intentType: n, nudgeActionTaken: o } = this.props,
                                i = this._maybeGetTweetId() || this._maybeGetUserId(),
                                r = this._getIntentAction();
                            if (
                                n &&
                                i &&
                                r &&
                                (r(i, { promotedContent: void 0 }).catch((t) => {
                                    e(((e) => re[e])(n))(t);
                                }),
                                this._scribeAction(n),
                                t)
                            ) {
                                const e = `${G[n]}${o ? "_after_read" : ""}`;
                                this._scribeNudgeAction({ element: e, action: "click" });
                            }
                            this.setState({ showPrompt: !1 });
                        }),
                        (this._handleNudgeAction = () => {
                            const { addToast: e, nudgeActionTaken: t, nudgePayload: n, setTweetNudgeActionTaken: o, tweetId: i } = this.props;
                            this._scribeNudgeAction({ element: "read_article", action: "click" }), i && !t && (o(i), e({ text: n?.post_cta_text?.text || ge }));
                        }),
                        (this._scribeNudgeAction = ({ action: e, element: t }) => {
                            const { analytics: n } = this.props;
                            n.scribe({ component: "soft_intervention_nudge", element: t, action: e });
                        }),
                        (this._handleMaskClick = () => {
                            const { intentType: e } = this.props;
                            e && !this._isComposeIntentType() && this._handleCancel();
                        }),
                        (this._getIntentAction = () => {
                            const { intentType: e, onFollow: t, onLike: n, onRetweet: o } = this.props;
                            switch (e) {
                                case R:
                                    return t;
                                case z:
                                    return n;
                                case $:
                                    return o;
                                default:
                                    return;
                            }
                        });
                }
                componentDidMount() {
                    const { hasNudge: e, intentType: t, nudgeActionTaken: n } = this.props;
                    t && (this.setState({ showPrompt: !0 }), this._scribeAction("open"), e && this._scribeNudgeAction({ element: n ? "after_read" : void 0, action: "impression" }));
                }
                render() {
                    const { showPrompt: e } = this.state;
                    return e ? this._renderPrompt() : null;
                }
                _renderPrompt() {
                    const { loggedInUserId: e } = this.context;
                    return e ? this._renderLoggedInPrompt() : this._renderLoggedOutPrompt();
                }
                _renderLoggedOutPrompt() {
                    const { intentType: e, loginReturnPath: t, screenName: n } = this.props;
                    if (e) {
                        const { icon: i, iconStyle: r, text: s } = ie({ intentType: e, screenName: n, loggedIn: !1 });
                        return o.createElement(k, { Icon: i, description: s.description, heading: s.heading, iconStyle: r, loginReturnPath: t, onLoginFlowAction: this._handleLoginFlow, onLoginSubmission: this._handleLoginSubmission, onMaskClick: this._handleMaskClick, onSecondaryAction: this._handleSecondaryAction, secondaryActionButtonLabel: s.secondaryAction, showSignUpLink: !this._isComposeIntentType(), submitButtonLabel: s.confirm });
                    }
                    return null;
                }
                _renderLoggedInPrompt() {
                    const { forwardPivotInfo: e, hasNudge: t, intentType: n, nudgePayload: r, screenName: s } = this.props;
                    if (n && !this._isComposeIntentType()) {
                        const { confirmLink: c, icon: a, iconStyle: d, text: l } = ie({ intentType: n, loggedIn: !0, forwardPivotInfo: e, nudgePayload: r, withNudge: t, screenName: s });
                        return o.createElement(i.Z, { Icon: a, cancelButtonLabel: l.cancel, confirmButtonLabel: l.confirm, confirmButtonLink: c, headline: l.heading, iconStyle: d, onCancel: t ? this._handleIntentAction : this._handleCancel, onConfirm: t ? this._handleNudgeAction : this._handleIntentAction, onMaskClick: this._handleCancel, text: l.description, withCancelButton: !0 });
                    }
                    return null;
                }
                _scribeAction(e) {
                    const { analytics: t, intentType: n } = this.props,
                        { loggedInUserId: o } = this.context,
                        i = n ? { component: `${n}_intent`, element: o ? "confirmation_prompt" : "login_prompt", action: e } : { action: e };
                    t.scribe(i);
                }
            }
            me.contextType = I.rC;
            const fe = ue(me);
        },
        470397: (e, t, n) => {
            n.d(t, { Z: () => c });
            n(136728);
            var o = n(202784),
                i = n(325686),
                r = n(124964),
                s = n(392237);
            const c = ({ children: e, color: t = "gray700", size: n, style: s }) => {
                    const c = [];
                    return (
                        o.Children.forEach(e, (e) => {
                            const i = c.length;
                            e && (i > 0 && c.push(o.createElement(r.Z, { color: t, key: `middot-${i}`, size: n })), c.push(e));
                        }),
                        c.length ? o.createElement(i.Z, { style: [a.middotGroup, s] }, c) : null
                    );
                },
                a = s.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.IntentPrompt.71591c6a.js.map
