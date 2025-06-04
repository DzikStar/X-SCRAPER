"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationParticipants-bc6ccf4c", "icons/IconFeedback-js", "bundle.TweetMediaTags-bc6ccf4c"],
    {
        879113: (e, o, t) => {
            t.d(o, { Z: () => m });
            var n = t(202784),
                i = t(476984),
                l = t.n(i),
                a = t(143778),
                s = t(750410),
                r = t(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class m extends n.Component {
                shouldComponentUpdate(e) {
                    const o = e.fetchStatus === d,
                        t = this.props.fetchStatus !== e.fetchStatus;
                    return !(!o && !t) || !l()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: o, failureMessage: t, fetchStatus: i, icon: l, loadingMessage: a, onRequestRetry: d, render: m, renderFailure: p, retryMessage: b, retryable: f } = this.props;
                    switch (i) {
                        case c:
                            return f ? n.createElement(s.Z, { icon: l, onRequestRetry: d, retryMessage: b }) : t ? n.createElement(r.m, { failureMessage: t }) : p();
                        case u:
                            return n.createElement(r.J, { "aria-label": e, color: o, loadingMessage: a });
                        case h:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: a.Z, retryable: !0 };
        },
        723587: (e, o, t) => {
            t.d(o, { Z: () => he });
            var n = t(202784),
                i = t(614983),
                l = t.n(i),
                a = t(111677),
                s = t.n(a),
                r = t(516951),
                c = t(616894),
                d = t(235902),
                u = t(305098);
            const h = s().i8cfb6e6,
                m = s().ea100d6a,
                p = s().fe40537f,
                b = s().ab7c3460,
                f = s().i58d8718,
                w = n.createElement(c.default, null),
                y = ({ disabled: e, displayMode: o, onUnblock: t, showRelationshipChangeConfirmation: i, size: l, style: a, testID: s, userScreenName: r }) => n.createElement(u.Z, { buttonDefaultLabel: h, buttonHoverLabel: m, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: m, confirmationSheetHeadline: p({ screenName: r }), confirmationSheetText: d.ZP.useProps().isSoftBlockEnabled() ? f : b, disabled: e, displayMode: o, icon: w, onClick: t, showRelationshipChangeConfirmation: i, size: l, style: a, testID: s });
            var g = t(466999),
                C = t(76388),
                v = t(911373),
                F = t(733357),
                S = t(352924),
                T = t(392237);
            const B = s().ee05e96b,
                _ = s().f238ba1d,
                x = s().aeb6f0a0,
                M = s().a77a27c0,
                H = s().b4397192,
                L = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                E = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                k = T.default.create((e) => ({ hidden: { display: "none" } })),
                D = ({ "aria-describedby": e, buttonType: o, disabled: t, displayMode: i, id: l, isSuperFollowEligible: a, isSuperFollowing: s, isTransparent: r, name: c, onSuperFollow: d, onUnSuperFollow: h, size: m, style: p, testID: b }) => {
                    const f = n.useCallback(() => {
                            s ? h() : a && d();
                        }, [a, s, d, h]),
                        w = void 0 !== c ? `@${String(c)}` : "",
                        y = s ? M : x,
                        C = w.length > 0 && void 0 !== y ? _({ followType: y, screenName: w }) : "",
                        v = s ? H : x,
                        T = s ? E(r) : o ? void 0 : L(r),
                        D = n.useMemo(() => (void 0 !== e ? e : (0, S.F)()), [e]),
                        Z = n.useCallback(() => {
                            const e = s ? M : a ? B({ followType: x, screenName: c }) : null;
                            return e && !(0, F.Z)(e) ? n.createElement(g.Z, { id: D, style: k.hidden }, e) : null;
                        }, [s, a, D, c]);
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": D, "aria-label": C, buttonDefaultLabel: y, buttonHoverLabel: v, buttonType: o, customButtonConfig: T, disabled: t, displayMode: i, id: l, onClick: f, size: m, style: p, testID: b }), void 0 === e ? Z() : null);
                },
                Z = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                R = s().cda66545,
                z = s().ee05e96b,
                I = s().a8d77a25,
                N = s().d0f4f3d9,
                P = s().f238ba1d,
                U = s().j6161cab,
                O = s().i4bb9ef7,
                W = s().ge753264,
                j = s().b837c0e8,
                V = n.createElement(C.default, null),
                J = n.createElement(v.default, null),
                q = s().ddac1f1d,
                $ = s().j8e33c40;
            class A extends n.Component {
                constructor(e, o) {
                    super(e, o),
                        (this._getDescribedById = () => {
                            const { "aria-describedby": e } = this.props;
                            return void 0 !== e ? e : (0, S.F)();
                        }),
                        (this._renderDescribedBy = (e, o) => {
                            const t = this._getDescribedByText();
                            return (0, F.Z)(t) ? null : n.createElement(g.Z, { id: e, style: { display: "none" } }, t);
                        }),
                        (this._getDescribedByText = () => {
                            const { buttonText: e, isFollowing: o, isSuperFollowEligible: t, isSuperFollowing: n, name: i, type: l } = this.props;
                            let a = "";
                            const s = void 0 === i ? "" : i;
                            switch (l) {
                                case Z.user:
                                case Z.topic:
                                case Z.list:
                                    n && e.unSuperFollow ? (a = e.unSuperFollow) : o ? (a = t ? z({ followType: e.superFollow, screenName: s }) : R({ followType: e.unfollow, screenName: s })) : o || (a = R({ followType: e.follow, screenName: s }));
                                    break;
                                case Z.community:
                                    a = o ? I({ screenName: s }) : R({ followType: e.follow, screenName: s });
                                    break;
                                case Z.spaces:
                                    o ? (a = R({ followType: e.unfollow, screenName: s })) : o || (a = R({ followType: e.follow, screenName: s }));
                                    break;
                                default:
                                    a = "";
                            }
                            return a;
                        }),
                        (this._getText = () => {
                            const { buttonText: e, name: o, type: t } = this.props,
                                n = void 0 !== o ? o : "",
                                i = O({ title: o }),
                                l = { [Z.user]: { ariaFollowName: void 0 !== o ? `@${String(o)}` : "", confirmationHeadline: U({ screenName: o }), confirmationSheetText: W }, [Z.topic]: { ariaFollowName: n, confirmationHeadline: i, confirmationSheetText: j }, [Z.list]: { ariaFollowName: n, confirmationHeadline: i, confirmationSheetText: void 0 }, [Z.community]: { ariaFollowName: n, confirmationHeadline: q({ communityName: o }), confirmationSheetText: $ }, [Z.spaces]: { ariaFollowName: void 0 !== o ? `@${String(o)}` : "", confirmationHeadline: U({ screenName: o }), confirmationSheetText: W } };
                            return { ariaFollowName: l[t].ariaFollowName, followLabel: e.follow, followBackLabel: e.followBack, followingLabel: e.following, unfollowLabel: e.unfollow, superFollowLabel: e.superFollow, superFollowingLabel: e.superFollowing, unSuperFollowLabel: e.unSuperFollow, confirmationHeadline: e.confirmationHeadline || l[t].confirmationHeadline, confirmationSheetText: e.confirmationSheetText || l[t].confirmationSheetText };
                        }),
                        (this._handlePress = () => {
                            const { isFollowing: e, isSuperFollowEligible: o, isSuperFollowing: t, onFollow: n, onSuperFollow: i, onUnSuperFollow: l, onUnfollow: a } = this.props;
                            t ? l() : e ? (o ? i() : a()) : (n(), this.setState({ hasJustFollowed: !0 }));
                        }),
                        (this._handleHoverOut = () => {
                            this.state.hasJustFollowed && this.setState({ hasJustFollowed: !1 });
                        }),
                        (this.state = { hasJustFollowed: !1 });
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: o, disabled: t, displayMode: i, id: l, isFollowed: a, isFollowing: s, isSuperFollowEligible: r, isSuperFollowing: c, isTransparent: d, showRelationshipChangeConfirmation: h, size: m, style: p, testID: b, type: f, withConfirmationSheetText: w } = this.props,
                        { ariaFollowName: y, confirmationHeadline: g, confirmationSheetText: C, followBackLabel: v, followLabel: F, followingLabel: S, superFollowLabel: T, superFollowingLabel: B, unSuperFollowLabel: _, unfollowLabel: x } = this._getText(),
                        { hasJustFollowed: M } = this.state,
                        H = (o && o.followIcon) || J,
                        k = (o && o.followingIcon) || V,
                        D = "only-text" !== i ? (s ? k : H) : void 0;
                    let R = s ? S : F;
                    a && !s && v && (R = v);
                    let z = N;
                    (c || (s && r)) && (c && B ? ((z = P), (R = B)) : r && T && ((z = P), (R = T)));
                    const I = y.length > 0 && void 0 !== R ? z({ followType: R, screenName: y }) : "",
                        U = "primaryFilled";
                    let O, W, j, q;
                    const $ = d ? "brandText" : U,
                        A = d ? "destructiveText" : "destructiveOutlined",
                        G = !c && (!s || !r) && s,
                        K = s ? "onMediaWhiteFilled" : "onMediaOutlined",
                        Q = s ? "onMediaOutlined" : "onMediaWhiteFilled";
                    f === Z.community ? (O = s ? x : F) : f === Z.spaces ? ((O = s ? x : F), (W = K), (j = Q)) : c && _ ? ((q = E(d)), (O = _)) : s ? ((O = M ? S : x), (W = M ? $ : A), (j = d ? "brandText" : "primaryOutlined"), r && T && ((q = L(d)), (O = T), (j = void 0), (W = void 0))) : ((O = a && v ? v : F), (W = d ? "brandText" : U), (j = d ? "brandText" : U));
                    const X = this._getDescribedById();
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": X, "aria-label": I, buttonDefaultLabel: R, buttonHoverLabel: O, buttonHoverType: W, buttonType: j, confirmationSheetConfirmLabel: x, confirmationSheetHeadline: g, confirmationSheetText: w ? C : void 0, customButtonConfig: q, disabled: t, displayMode: i, icon: D, id: l, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: G && h, size: m, style: p, testID: b }), void 0 === e ? this._renderDescribedBy(X) : null);
                }
            }
            const G = A;
            var K = t(311687);
            const Q = s().f305840e,
                X = s().e23b20a0,
                Y = s().fe04d89a,
                ee = s().i036327c,
                oe = s().j95e3097,
                te = n.createElement(K.default, null),
                ne = ({ disabled: e, displayMode: o, onCancelPendingFollow: t, showRelationshipChangeConfirmation: i, size: l, style: a, testID: s, userScreenName: r }) => n.createElement(u.Z, { buttonDefaultLabel: Q, buttonHoverLabel: X, buttonType: "primaryOutlined", confirmationSheetCancelLabel: X, confirmationSheetConfirmLabel: Y, confirmationSheetHeadline: ee, confirmationSheetText: oe({ screenName: r }), disabled: e, displayMode: o, icon: te, onClick: t, showRelationshipChangeConfirmation: i, size: l, style: a, testID: s }),
                ie = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                le = s().ec72e2f8,
                ae = s().a5f7ce12,
                se = s().c3befdbe,
                re = s().d3029dbc,
                ce = s().aeb6f0a0,
                de = s().a77a27c0,
                ue = s().b4397192;
            class he extends n.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: o, buttonText: t, buttonType: i, disabled: l, displayMode: a, id: s, isBlocking: r, isFollowRequestSent: c, isFollowed: d, isFollowing: u, isSuperFollowEligible: h, isSuperFollowing: m, isTransparent: p, name: b, onCancelPendingFollow: f, onFollow: w, onSuperFollow: g, onUnSuperFollow: C, onUnblock: v, onUnfollow: F, relationshipMode: S, showRelationshipChangeConfirmation: T, size: B, style: _, testIDs: x, type: M, withConfirmationSheetText: H } = this.props,
                        L = r,
                        E = c,
                        k = S === ie.subscribe && (h || m);
                    return L ? n.createElement(y, { disabled: l, displayMode: a, onUnblock: v, showRelationshipChangeConfirmation: T, size: B, style: _, testID: x?.unblock, userScreenName: b }) : E ? n.createElement(ne, { disabled: l, displayMode: a, onCancelPendingFollow: f, showRelationshipChangeConfirmation: T, size: B, style: _, testID: x?.cancel, userScreenName: b }) : k ? n.createElement(D, { "aria-describedby": e, buttonType: i, disabled: l, displayMode: a, id: s, isSuperFollowEligible: h, isSuperFollowing: m, isTransparent: p, name: b, onSuperFollow: g, onUnSuperFollow: C, size: B, style: _, testID: m ? x?.manageSubscription : x?.subscribe }) : n.createElement(G, { "aria-describedby": e, buttonIcons: o, buttonText: t, disabled: l, displayMode: a, id: s, isFollowed: d, isFollowing: u, isSuperFollowEligible: h, isSuperFollowing: m, isTransparent: p, name: b, onFollow: w, onSuperFollow: g, onUnSuperFollow: C, onUnfollow: F, showRelationshipChangeConfirmation: T, size: B, style: _, testID: u ? x?.unfollow : x?.follow, type: M, withConfirmationSheetText: H });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: o } = this.props,
                        t = o && "string" == typeof e,
                        n = !o;
                    l()(t || n, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            he.defaultProps = { buttonText: { follow: le, followBack: ae, following: se, unfollow: re, superFollow: ce, superFollowing: de, unSuperFollow: ue }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: r.Z, onSuperFollow: r.Z, onUnblock: r.Z, onUnSuperFollow: r.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
        305098: (e, o, t) => {
            t.d(o, { Z: () => d });
            var n = t(807896),
                i = t(202784),
                l = t(325686),
                a = t(154003),
                s = t(190286),
                r = t(466792);
            Object.freeze({ iconText: "icon-text", onlyIcon: "only-icon", onlyText: "only-text" });
            class c extends i.Component {
                constructor(e) {
                    super(e),
                        (this._minWidth = 0),
                        (this._isMounted = !0),
                        (this._handleLabelMeasure = (e = !1) => {
                            setTimeout(() => {
                                const o = this._containerRef?.getBoundingClientRect().width,
                                    t = this._containerRef?.offsetWidth;
                                let n = 0;
                                o && t && (n = t ? o : t), (this._minWidth = Math.ceil(Math.max(this._minWidth, n))), e && this._isMounted && this.forceUpdate();
                            }, 0);
                        }),
                        (this._getCustomButtonProps = (e) => {
                            const { customButtonConfig: o } = this.props;
                            if (!o) return;
                            const { customButtonBackgroundColor: t, customButtonBorderColor: n, customButtonColor: i, customButtonHoverBackgroundColor: l, customButtonHoverBorderColor: a, customButtonHoverColor: s } = o,
                                r = { color: i, backgroundColor: t, borderColor: n };
                            return e && ((r.color = s || i), (r.backgroundColor = l || t), (r.borderColor = a || n)), r;
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
                    const { "aria-describedby": e, "aria-label": o, buttonDefaultLabel: t, buttonHoverLabel: c, buttonHoverType: d, buttonType: u, confirmationSheetCancelLabel: h, confirmationSheetConfirmLabel: m, confirmationSheetHeadline: p, confirmationSheetPrimaryButtonType: b, confirmationSheetText: f, disabled: w, displayMode: y, icon: g, id: C, onHoverOut: v, size: F, style: S, testID: T } = this.props,
                        B = [S, { minWidth: this._minWidth }];
                    return i.createElement(
                        l.Z,
                        { ref: this._setContainerRef, style: B },
                        i.createElement(r.Z, { onHoverIn: this._handleHoverIn, onHoverOut: v }, ({ isHovered: l }) => {
                            const s = l ? c : t,
                                r = l && d ? d : u,
                                h = this._getCustomButtonProps(l);
                            return i.createElement(a.ZP, (0, n.Z)({ "aria-describedby": e, "aria-label": "only-icon" === y ? s : o, disabled: w, icon: "only-text" !== y ? g : void 0, id: C, onPress: this._handleButtonPress, ref: this._setButtonRef, size: F, testID: T, type: r }, h), "only-icon" === y ? void 0 : s);
                        }),
                        this.state.showConfirmation ? i.createElement(s.Z, { cancelButtonLabel: h, confirmButtonLabel: m, confirmButtonType: b, headline: p, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: f }) : null,
                    );
                }
            }
            c.defaultProps = { showRelationshipChangeConfirmation: !1 };
            const d = c;
        },
        790093: (e, o, t) => {
            t.r(o), t.d(o, { default: () => r });
            var n = t(202784),
                i = t(890601),
                l = t(783427),
                a = t(347101);
            const s = (e = {}) => {
                const { direction: o } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: o });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
        98440: (e, o, t) => {
            t.r(o), t.d(o, { default: () => r });
            var n = t(202784),
                i = t(890601),
                l = t(783427),
                a = t(347101);
            const s = (e = {}) => {
                const { direction: o } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: o });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
        226597: (e, o, t) => {
            t.r(o), t.d(o, { default: () => r });
            var n = t(202784),
                i = t(890601),
                l = t(783427),
                a = t(347101);
            const s = (e = {}) => {
                const { direction: o } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: o });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
        155353: (e, o, t) => {
            t.r(o), t.d(o, { default: () => r });
            var n = t(202784),
                i = t(890601),
                l = t(783427),
                a = t(347101);
            const s = (e = {}) => {
                const { direction: o } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: o });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationParticipants-bc6ccf4c.97825cfa.js.map
