"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Live-bc6ccf4c", "icons/IconFeedback-js"],
    {
        978053: (e, t, o) => {
            o.d(t, { default: () => f });
            var n = o(111677),
                l = o.n(n);
            const i = l().e3098e07,
                a = l().fea16a51,
                r = l().a4f2d94d,
                s = l().hf9bc787,
                c = l().efcd5885,
                d = l().c37228b5,
                u = 2592e3,
                h = 604800,
                m = 86400,
                p = 3600,
                f = {
                    formatTimeSinceDate: (e, t) => {
                        const o = ((t || new Date()).getTime() - e.getTime()) / 1e3;
                        if (o >= 31104e3) {
                            const e = Math.max(1, Math.round(o / 31536e3));
                            return d({ years: e });
                        }
                        if (o >= u) {
                            const e = Math.max(1, Math.floor(o / u));
                            return c({ months: e });
                        }
                        if (o >= 561600) {
                            const e = Math.max(1, Math.round(o / h));
                            return s({ weeks: e });
                        }
                        if (o >= 84600) {
                            const e = Math.max(1, Math.round(o / m));
                            return r({ days: e });
                        }
                        if (o >= 3570) {
                            const e = Math.max(1, Math.round(o / p));
                            return a({ hours: e });
                        }
                        {
                            const e = Math.max(1, Math.round(o / 60));
                            return i({ minutes: e });
                        }
                    },
                    formatWeekRange: (e) => {
                        const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())),
                            o = t.getUTCDay(),
                            n = new Date(t);
                        n.setUTCDate(n.getUTCDate() - o);
                        const l = new Date(n);
                        l.setUTCDate(l.getUTCDate() + 6);
                        const i = new Date(Date.UTC(n.getUTCFullYear(), 0, 4)),
                            a = Math.floor((n.getTime() - i.getTime()) / 6048e5 + 1),
                            r = new Date(),
                            s = l > r ? r : l,
                            c = `${n.toLocaleString("en-US", { month: "short", day: "numeric" })} - ${s.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
                        return [n.getUTCFullYear(), a, c];
                    },
                };
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(202784),
                l = o(476984),
                i = o.n(l),
                a = o(143778),
                r = o(750410),
                s = o(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class m extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: l, icon: i, loadingMessage: a, onRequestRetry: d, render: m, renderFailure: p, retryMessage: f, retryable: b } = this.props;
                    switch (l) {
                        case c:
                            return b ? n.createElement(r.Z, { icon: i, onRequestRetry: d, retryMessage: f }) : o ? n.createElement(s.m, { failureMessage: o }) : p();
                        case u:
                            return n.createElement(s.J, { "aria-label": e, color: t, loadingMessage: a });
                        case h:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: a.Z, retryable: !0 };
        },
        723587: (e, t, o) => {
            o.d(t, { Z: () => he });
            var n = o(202784),
                l = o(614983),
                i = o.n(l),
                a = o(111677),
                r = o.n(a),
                s = o(516951),
                c = o(616894),
                d = o(235902),
                u = o(305098);
            const h = r().i8cfb6e6,
                m = r().ea100d6a,
                p = r().fe40537f,
                f = r().ab7c3460,
                b = r().i58d8718,
                w = n.createElement(c.default, null),
                g = ({ disabled: e, displayMode: t, onUnblock: o, showRelationshipChangeConfirmation: l, size: i, style: a, testID: r, userScreenName: s }) => n.createElement(u.Z, { buttonDefaultLabel: h, buttonHoverLabel: m, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: m, confirmationSheetHeadline: p({ screenName: s }), confirmationSheetText: d.ZP.useProps().isSoftBlockEnabled() ? b : f, disabled: e, displayMode: t, icon: w, onClick: o, showRelationshipChangeConfirmation: l, size: i, style: a, testID: r });
            var y = o(466999),
                v = o(76388),
                C = o(911373),
                S = o(733357),
                F = o(352924),
                T = o(392237);
            const B = r().ee05e96b,
                M = r().f238ba1d,
                x = r().aeb6f0a0,
                D = r().a77a27c0,
                _ = r().b4397192,
                L = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                E = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                Z = T.default.create((e) => ({ hidden: { display: "none" } })),
                H = ({ "aria-describedby": e, buttonType: t, disabled: o, displayMode: l, id: i, isSuperFollowEligible: a, isSuperFollowing: r, isTransparent: s, name: c, onSuperFollow: d, onUnSuperFollow: h, size: m, style: p, testID: f }) => {
                    const b = n.useCallback(() => {
                            r ? h() : a && d();
                        }, [a, r, d, h]),
                        w = void 0 !== c ? `@${String(c)}` : "",
                        g = r ? D : x,
                        v = w.length > 0 && void 0 !== g ? M({ followType: g, screenName: w }) : "",
                        C = r ? _ : x,
                        T = r ? E(s) : t ? void 0 : L(s),
                        H = n.useMemo(() => (void 0 !== e ? e : (0, F.F)()), [e]),
                        R = n.useCallback(() => {
                            const e = r ? D : a ? B({ followType: x, screenName: c }) : null;
                            return e && !(0, S.Z)(e) ? n.createElement(y.Z, { id: H, style: Z.hidden }, e) : null;
                        }, [r, a, H, c]);
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": H, "aria-label": v, buttonDefaultLabel: g, buttonHoverLabel: C, buttonType: t, customButtonConfig: T, disabled: o, displayMode: l, id: i, onClick: b, size: m, style: p, testID: f }), void 0 === e ? R() : null);
                },
                R = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                z = r().cda66545,
                k = r().ee05e96b,
                U = r().a8d77a25,
                I = r().d0f4f3d9,
                N = r().f238ba1d,
                P = r().j6161cab,
                O = r().i4bb9ef7,
                W = r().ge753264,
                j = r().b837c0e8,
                J = n.createElement(v.default, null),
                $ = n.createElement(C.default, null),
                q = r().ddac1f1d,
                Y = r().j8e33c40;
            class V extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getDescribedById = () => {
                            const { "aria-describedby": e } = this.props;
                            return void 0 !== e ? e : (0, F.F)();
                        }),
                        (this._renderDescribedBy = (e, t) => {
                            const o = this._getDescribedByText();
                            return (0, S.Z)(o) ? null : n.createElement(y.Z, { id: e, style: { display: "none" } }, o);
                        }),
                        (this._getDescribedByText = () => {
                            const { buttonText: e, isFollowing: t, isSuperFollowEligible: o, isSuperFollowing: n, name: l, type: i } = this.props;
                            let a = "";
                            const r = void 0 === l ? "" : l;
                            switch (i) {
                                case R.user:
                                case R.topic:
                                case R.list:
                                    n && e.unSuperFollow ? (a = e.unSuperFollow) : t ? (a = o ? k({ followType: e.superFollow, screenName: r }) : z({ followType: e.unfollow, screenName: r })) : t || (a = z({ followType: e.follow, screenName: r }));
                                    break;
                                case R.community:
                                    a = t ? U({ screenName: r }) : z({ followType: e.follow, screenName: r });
                                    break;
                                case R.spaces:
                                    t ? (a = z({ followType: e.unfollow, screenName: r })) : t || (a = z({ followType: e.follow, screenName: r }));
                                    break;
                                default:
                                    a = "";
                            }
                            return a;
                        }),
                        (this._getText = () => {
                            const { buttonText: e, name: t, type: o } = this.props,
                                n = void 0 !== t ? t : "",
                                l = O({ title: t }),
                                i = { [R.user]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: P({ screenName: t }), confirmationSheetText: W }, [R.topic]: { ariaFollowName: n, confirmationHeadline: l, confirmationSheetText: j }, [R.list]: { ariaFollowName: n, confirmationHeadline: l, confirmationSheetText: void 0 }, [R.community]: { ariaFollowName: n, confirmationHeadline: q({ communityName: t }), confirmationSheetText: Y }, [R.spaces]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: P({ screenName: t }), confirmationSheetText: W } };
                            return { ariaFollowName: i[o].ariaFollowName, followLabel: e.follow, followBackLabel: e.followBack, followingLabel: e.following, unfollowLabel: e.unfollow, superFollowLabel: e.superFollow, superFollowingLabel: e.superFollowing, unSuperFollowLabel: e.unSuperFollow, confirmationHeadline: e.confirmationHeadline || i[o].confirmationHeadline, confirmationSheetText: e.confirmationSheetText || i[o].confirmationSheetText };
                        }),
                        (this._handlePress = () => {
                            const { isFollowing: e, isSuperFollowEligible: t, isSuperFollowing: o, onFollow: n, onSuperFollow: l, onUnSuperFollow: i, onUnfollow: a } = this.props;
                            o ? i() : e ? (t ? l() : a()) : (n(), this.setState({ hasJustFollowed: !0 }));
                        }),
                        (this._handleHoverOut = () => {
                            this.state.hasJustFollowed && this.setState({ hasJustFollowed: !1 });
                        }),
                        (this.state = { hasJustFollowed: !1 });
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, disabled: o, displayMode: l, id: i, isFollowed: a, isFollowing: r, isSuperFollowEligible: s, isSuperFollowing: c, isTransparent: d, showRelationshipChangeConfirmation: h, size: m, style: p, testID: f, type: b, withConfirmationSheetText: w } = this.props,
                        { ariaFollowName: g, confirmationHeadline: y, confirmationSheetText: v, followBackLabel: C, followLabel: S, followingLabel: F, superFollowLabel: T, superFollowingLabel: B, unSuperFollowLabel: M, unfollowLabel: x } = this._getText(),
                        { hasJustFollowed: D } = this.state,
                        _ = (t && t.followIcon) || $,
                        Z = (t && t.followingIcon) || J,
                        H = "only-text" !== l ? (r ? Z : _) : void 0;
                    let z = r ? F : S;
                    a && !r && C && (z = C);
                    let k = I;
                    (c || (r && s)) && (c && B ? ((k = N), (z = B)) : s && T && ((k = N), (z = T)));
                    const U = g.length > 0 && void 0 !== z ? k({ followType: z, screenName: g }) : "",
                        P = "primaryFilled";
                    let O, W, j, q;
                    const Y = d ? "brandText" : P,
                        V = d ? "destructiveText" : "destructiveOutlined",
                        A = !c && (!r || !s) && r,
                        G = r ? "onMediaWhiteFilled" : "onMediaOutlined",
                        K = r ? "onMediaOutlined" : "onMediaWhiteFilled";
                    b === R.community ? (O = r ? x : S) : b === R.spaces ? ((O = r ? x : S), (W = G), (j = K)) : c && M ? ((q = E(d)), (O = M)) : r ? ((O = D ? F : x), (W = D ? Y : V), (j = d ? "brandText" : "primaryOutlined"), s && T && ((q = L(d)), (O = T), (j = void 0), (W = void 0))) : ((O = a && C ? C : S), (W = d ? "brandText" : P), (j = d ? "brandText" : P));
                    const Q = this._getDescribedById();
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": Q, "aria-label": U, buttonDefaultLabel: z, buttonHoverLabel: O, buttonHoverType: W, buttonType: j, confirmationSheetConfirmLabel: x, confirmationSheetHeadline: y, confirmationSheetText: w ? v : void 0, customButtonConfig: q, disabled: o, displayMode: l, icon: H, id: i, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: A && h, size: m, style: p, testID: f }), void 0 === e ? this._renderDescribedBy(Q) : null);
                }
            }
            const A = V;
            var G = o(311687);
            const K = r().f305840e,
                Q = r().e23b20a0,
                X = r().fe04d89a,
                ee = r().i036327c,
                te = r().j95e3097,
                oe = n.createElement(G.default, null),
                ne = ({ disabled: e, displayMode: t, onCancelPendingFollow: o, showRelationshipChangeConfirmation: l, size: i, style: a, testID: r, userScreenName: s }) => n.createElement(u.Z, { buttonDefaultLabel: K, buttonHoverLabel: Q, buttonType: "primaryOutlined", confirmationSheetCancelLabel: Q, confirmationSheetConfirmLabel: X, confirmationSheetHeadline: ee, confirmationSheetText: te({ screenName: s }), disabled: e, displayMode: t, icon: oe, onClick: o, showRelationshipChangeConfirmation: l, size: i, style: a, testID: r }),
                le = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                ie = r().ec72e2f8,
                ae = r().a5f7ce12,
                re = r().c3befdbe,
                se = r().d3029dbc,
                ce = r().aeb6f0a0,
                de = r().a77a27c0,
                ue = r().b4397192;
            class he extends n.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, buttonText: o, buttonType: l, disabled: i, displayMode: a, id: r, isBlocking: s, isFollowRequestSent: c, isFollowed: d, isFollowing: u, isSuperFollowEligible: h, isSuperFollowing: m, isTransparent: p, name: f, onCancelPendingFollow: b, onFollow: w, onSuperFollow: y, onUnSuperFollow: v, onUnblock: C, onUnfollow: S, relationshipMode: F, showRelationshipChangeConfirmation: T, size: B, style: M, testIDs: x, type: D, withConfirmationSheetText: _ } = this.props,
                        L = s,
                        E = c,
                        Z = F === le.subscribe && (h || m);
                    return L ? n.createElement(g, { disabled: i, displayMode: a, onUnblock: C, showRelationshipChangeConfirmation: T, size: B, style: M, testID: x?.unblock, userScreenName: f }) : E ? n.createElement(ne, { disabled: i, displayMode: a, onCancelPendingFollow: b, showRelationshipChangeConfirmation: T, size: B, style: M, testID: x?.cancel, userScreenName: f }) : Z ? n.createElement(H, { "aria-describedby": e, buttonType: l, disabled: i, displayMode: a, id: r, isSuperFollowEligible: h, isSuperFollowing: m, isTransparent: p, name: f, onSuperFollow: y, onUnSuperFollow: v, size: B, style: M, testID: m ? x?.manageSubscription : x?.subscribe }) : n.createElement(A, { "aria-describedby": e, buttonIcons: t, buttonText: o, disabled: i, displayMode: a, id: r, isFollowed: d, isFollowing: u, isSuperFollowEligible: h, isSuperFollowing: m, isTransparent: p, name: f, onFollow: w, onSuperFollow: y, onUnSuperFollow: v, onUnfollow: S, showRelationshipChangeConfirmation: T, size: B, style: M, testID: u ? x?.unfollow : x?.follow, type: D, withConfirmationSheetText: _ });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: t } = this.props,
                        o = t && "string" == typeof e,
                        n = !t;
                    i()(o || n, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            he.defaultProps = { buttonText: { follow: ie, followBack: ae, following: re, unfollow: se, superFollow: ce, superFollowing: de, unSuperFollow: ue }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: s.Z, onSuperFollow: s.Z, onUnblock: s.Z, onUnSuperFollow: s.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
        305098: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(807896),
                l = o(202784),
                i = o(325686),
                a = o(154003),
                r = o(190286),
                s = o(466792);
            Object.freeze({ iconText: "icon-text", onlyIcon: "only-icon", onlyText: "only-text" });
            class c extends l.Component {
                constructor(e) {
                    super(e),
                        (this._minWidth = 0),
                        (this._isMounted = !0),
                        (this._handleLabelMeasure = (e = !1) => {
                            setTimeout(() => {
                                const t = this._containerRef?.getBoundingClientRect().width,
                                    o = this._containerRef?.offsetWidth;
                                let n = 0;
                                t && o && (n = o ? t : o), (this._minWidth = Math.ceil(Math.max(this._minWidth, n))), e && this._isMounted && this.forceUpdate();
                            }, 0);
                        }),
                        (this._getCustomButtonProps = (e) => {
                            const { customButtonConfig: t } = this.props;
                            if (!t) return;
                            const { customButtonBackgroundColor: o, customButtonBorderColor: n, customButtonColor: l, customButtonHoverBackgroundColor: i, customButtonHoverBorderColor: a, customButtonHoverColor: r } = t,
                                s = { color: l, backgroundColor: o, borderColor: n };
                            return e && ((s.color = r || l), (s.backgroundColor = i || o), (s.borderColor = a || n)), s;
                        }),
                        (this._handleButtonPress = (e) => {
                            e.preventDefault(), this.props.showRelationshipChangeConfirmation ? this.setState({ showConfirmation: !0 }) : ((this._minWidth = 0), this.forceUpdate(), this.props.onClick());
                        }),
                        (this._handleConfirm = (e) => {
                            (this._minWidth = 0), this.setState({ showConfirmation: !1 }), this.props.onClick(), this._buttonRef?.focus();
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 }), this._buttonRef?.focus();
                        }),
                        (this._handleHoverIn = () => {
                            this._handleLabelMeasure(!0);
                        }),
                        (this._setButtonRef = (e) => {
                            this._buttonRef = e;
                        }),
                        (this._setContainerRef = (e) => {
                            (this._containerRef = e), this._handleLabelMeasure();
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                componentDidUpdate(e) {
                    e.buttonDefaultLabel !== this.props.buttonDefaultLabel && this._handleLabelMeasure();
                }
                render() {
                    const { "aria-describedby": e, "aria-label": t, buttonDefaultLabel: o, buttonHoverLabel: c, buttonHoverType: d, buttonType: u, confirmationSheetCancelLabel: h, confirmationSheetConfirmLabel: m, confirmationSheetHeadline: p, confirmationSheetPrimaryButtonType: f, confirmationSheetText: b, disabled: w, displayMode: g, icon: y, id: v, onHoverOut: C, size: S, style: F, testID: T } = this.props,
                        B = [F, { minWidth: this._minWidth }];
                    return l.createElement(
                        i.Z,
                        { ref: this._setContainerRef, style: B },
                        l.createElement(s.Z, { onHoverIn: this._handleHoverIn, onHoverOut: C }, ({ isHovered: i }) => {
                            const r = i ? c : o,
                                s = i && d ? d : u,
                                h = this._getCustomButtonProps(i);
                            return l.createElement(a.ZP, (0, n.Z)({ "aria-describedby": e, "aria-label": "only-icon" === g ? r : t, disabled: w, icon: "only-text" !== g ? y : void 0, id: v, onPress: this._handleButtonPress, ref: this._setButtonRef, size: S, testID: T, type: s }, h), "only-icon" === g ? void 0 : r);
                        }),
                        this.state.showConfirmation ? l.createElement(r.Z, { cancelButtonLabel: h, confirmButtonLabel: m, confirmButtonType: f, headline: p, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: b }) : null,
                    );
                }
            }
            c.defaultProps = { showRelationshipChangeConfirmation: !1 };
            const d = c;
        },
        652255: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                l = o(890601),
                i = o(783427),
                a = o(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { clipRule: "evenodd", d: "M11.999 1C18.075 1 23 5.925 23 12s-4.925 11-11.001 11C5.999 23 1.12 18.198 1 12.228v-.456C1.121 5.802 6 1 11.999 1zm5.887 7.54H9.86l-3.75 6.92h8.027l3.748-6.92z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        502940: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                l = o(890601),
                i = o(783427),
                a = o(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15.985 8.264c.215.227.573.227.775 0l1.077-1.181c.228-.227.215-.636-.026-.881-.846-.778-1.83-1.37-2.894-1.745l.34-1.726c.073-.377-.194-.731-.551-.731H12.62c-.13.001-.256.05-.356.138-.1.087-.17.209-.195.343l-.301 1.536c-2.774.15-5.125 1.635-5.125 4.678 0 2.635 1.942 3.766 3.996 4.543 1.942.781 2.972 1.072 2.972 2.171 0 1.131-1.025 1.794-2.541 1.794-1.378 0-2.825-.486-3.945-1.671-.052-.055-.114-.099-.182-.129-.068-.03-.14-.045-.214-.045-.074 0-.147.016-.215.045-.068.03-.13.074-.181.129L5.17 16.758c-.11.116-.171.273-.171.436 0 .164.061.32.17.436.905.94 2.05 1.622 3.357 1.999l-.32 1.621c-.072.378.19.727.548.732l2.088.018c.132 0 .26-.047.362-.135.102-.088.172-.21.198-.346l.302-1.54c3.337-.237 5.37-2.176 5.37-5.006 0-2.607-2.025-3.707-4.48-4.601-1.404-.55-2.618-.927-2.618-2.058 0-1.1 1.133-1.535 2.27-1.535 1.447 0 2.838.631 3.746 1.494l-.008-.01z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        790093: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                l = o(890601),
                i = o(783427),
                a = o(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        933340: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                l = o(890601),
                i = o(783427),
                a = o(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)(
                    "svg",
                    {
                        ...e,
                        role: e["aria-label"] ? e.role || "img" : void 0,
                        "aria-hidden": void 0 === e["aria-label"],
                        style: [a.Z.root, e.style],
                        viewBox: "0 0 24 24",
                        children: n.createElement(
                            "g",
                            null,
                            n.createElement("path", {
                                clipRule: "evenodd",
                                d: "M12.026 9.017c.772 0 1.42-.352 1.603-1.005.024-.09.036-.181.036-.275l.017-2.353v-.03l.002-.03c0-.904-.73-1.324-1.645-1.324-.91 0-1.65.488-1.657 1.384l-.002 2.372c-.001.093.008.185.027.275.158.68.822.986 1.619.986zm-4.248-.138c.034.303 0 .553-.264.824-.6.61-1.657.613-2.16.306-.464-.281-3.523-2.542-4.02-2.911l-.13-.13c-.148-.203-.405-.812.067-1.38.412-.496 1.386-.619 1.99-.335.03.014.06.028.092.041.097.043.194.086.28.15l3.618 2.623c.257.225.49.48.527.812zm14.95-3.197c-.412-.498-1.387-.62-1.99-.337-.031.015-.063.03-.095.043-.096.043-.192.086-.278.148L16.748 8.16c-.258.225-.491.48-.528.812-.033.303 0 .553.265.823.599.61 1.656.614 2.16.307.45-.273 3.346-2.412 3.971-2.874l.05-.037.13-.13c.148-.203.404-.812-.067-1.38zm-5.543 12.314h2.127v-.001h2.151c.048 0 .09.001.09-.076.005-.386-.01-.769-.113-1.142-.29-1.052-.923-1.79-1.991-2.093-.863-.246-1.734-.225-2.59.05-.632.204-1.133.594-1.49 1.156-.466.735-.575 1.544-.425 2.386.198 1.103.856 1.836 1.896 2.23.53.202 1.085.252 1.648.242.326-.006.647-.034.963-.113.97-.243 1.663-.798 1.99-1.767.03-.085.024-.115-.078-.115-.621.002-1.242.002-1.863 0-.073 0-.114.026-.156.082-.145.194-.33.336-.565.406-.325.098-.648.078-.967-.02-.369-.114-.59-.369-.689-.737-.023-.086-.033-.174-.044-.263l-.01-.09c-.017-.123-.006-.135.116-.135zm2.268-1.169h-1.418l-.824.001c-.069 0-.09-.01-.072-.088.117-.538.533-.89 1.083-.91.301-.011.59.017.847.197.256.181.385.441.464.734.019.07-.024.068-.064.066h-.016zM5.479 15.41v-.172c-.001-.151-.002-.293.003-.433.002-.085-.019-.114-.11-.114-.645.003-1.29.003-1.936 0-.084 0-.114.017-.114.109.002 1.873.002 3.745 0 5.618 0 .087.021.112.11.112.64-.005 1.277-.005 1.916 0 .105.001.134-.022.134-.132-.004-1.023-.003-2.046.005-3.069.001-.235.03-.473.162-.68.22-.344.635-.502 1.054-.398.355.09.572.316.643.678.038.194.044.391.044.588v.753l-.001 2.147c0 .085.018.113.11.113.648-.002 1.297-.002 1.946 0 .087.001.105-.027.105-.108-.002-.779-.003-1.558-.002-2.338v-.18c-.002-.208-.004-.416.02-.622.035-.315.116-.605.36-.833.395-.37 1.284-.366 1.469.417.05.224.074.451.072.68.002.957.002 1.912-.002 2.868 0 .094.025.117.118.117.638-.005 1.277-.005 1.915 0 .1 0 .13-.024.13-.127-.003-.662-.003-1.323-.003-1.984l-.001-1.656c0-.24-.019-.478-.059-.715-.063-.354-.213-.665-.48-.907-.531-.48-1.171-.614-1.859-.53-.694.086-1.26.41-1.655 1-.043.065-.062.053-.101-.002-.231-.34-.514-.614-.895-.784-.267-.116-.546-.186-.836-.208-.617-.054-1.199.048-1.732.377-.185.115-.349.258-.53.415zm6.352-5.619c2.118 0 3.74.384 4.968.995v.001c.955.474 1.67 1.084 2.191 1.759l-14.285.001.005-.007h-.018c1.21-1.628 3.59-2.749 7.139-2.749z",
                                fillRule: "evenodd",
                            }),
                        ),
                    },
                    { writingDirection: t },
                );
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        321264: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                l = o(890601),
                i = o(783427),
                a = o(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { clipRule: "evenodd", d: "M6 3H2v18h4V3zm9 14c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        208340: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                l = o(890601),
                i = o(783427),
                a = o(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { clipRule: "evenodd", d: "M19.595 7.664c.205.138.396.288.553.467.665.758.864 1.795.716 3.029-.017.11-.035.22-.057.33-.717 3.681-3.17 4.955-6.304 4.955h-.484c-.383 0-.709.278-.768.656l-.68 4.242c-.06.378-.386.657-.77.657H8.997c-.259 0-.505-.231-.463-.516.026-.172.29-1.838.557-3.524l.033-.21.55-3.466c.068-.433.437-.751.875-.751h.031l.59.002h.11l.633.002h.034c5.64 0 7.144-3.434 7.649-5.873zM13.26 2c2.142 0 3.8.466 4.742 1.508.642.71 1.014 1.64.916 2.971-.063-.024-.124-.05-.19-.07-.064-.022-.13-.043-.197-.062-.133-.04-.272-.075-.413-.106-.14-.032-.286-.059-.434-.083-.504-.081-1.067-.122-1.673-.122h-4.873c-.179 0-.351.039-.513.116-.352.17-.599.5-.66.886L7.943 19.781h-3.41c-.327 0-.577-.293-.526-.617L6.595 2.751c.068-.433.44-.751.878-.751h5.788zm2.75 4.855c.564 0 1.083.037 1.544.112.132.02.26.045.387.073.123.028.243.058.36.093.058.016.115.034.17.052.115.039.225.08.331.126-.074.382-.18.791-.324 1.233-.65 1.998-1.949 3.255-3.88 3.81-.763.218-1.627.327-2.595.327H10.18c-.1 0-.193.01-.28.026l.818-5.196c.04-.26.207-.473.432-.58.102-.05.216-.076.336-.076h4.525z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                l = o(890601),
                i = o(783427),
                a = o(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        707305: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                l = o(890601),
                i = o(783427),
                a = o(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.1 4c.62 1.02.9 2.072.9 3.4 0 4.235-3.629 9.737-6.574 13.6H6.698L4 4.927l5.89-.557 1.427 11.437c1.333-2.163 2.978-5.563 2.978-7.88 0-1.27-.218-2.134-.56-2.845L19.1 4z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Live-bc6ccf4c.db5509aa.js.map
