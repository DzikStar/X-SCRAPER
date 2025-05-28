"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserFollowLists-bc6ccf4c", "icons/IconFeedback-js"],
    {
        723587: (e, t, o) => {
            o.d(t, { Z: () => pe });
            var i = o(202784),
                n = o(614983),
                l = o.n(n),
                a = o(111677),
                s = o.n(a),
                r = o(516951),
                c = o(616894),
                d = o(235902),
                u = o(305098);
            const p = s().i8cfb6e6,
                h = s().ea100d6a,
                m = s().fe40537f,
                b = s().ab7c3460,
                f = s().i58d8718,
                g = i.createElement(c.default, null),
                w = ({ disabled: e, displayMode: t, onUnblock: o, showRelationshipChangeConfirmation: n, size: l, style: a, testID: s, userScreenName: r }) => i.createElement(u.Z, { buttonDefaultLabel: p, buttonHoverLabel: h, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: h, confirmationSheetHeadline: m({ screenName: r }), confirmationSheetText: d.ZP.useProps().isSoftBlockEnabled() ? f : b, disabled: e, displayMode: t, icon: g, onClick: o, showRelationshipChangeConfirmation: n, size: l, style: a, testID: s });
            var y = o(466999),
                C = o(76388),
                v = o(911373),
                S = o(733357),
                x = o(352924),
                F = o(392237);
            const B = s().ee05e96b,
                T = s().f238ba1d,
                _ = s().aeb6f0a0,
                k = s().a77a27c0,
                L = s().b4397192,
                R = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                H = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                E = F.default.create((e) => ({ hidden: { display: "none" } })),
                Z = ({ "aria-describedby": e, buttonType: t, disabled: o, displayMode: n, id: l, isSuperFollowEligible: a, isSuperFollowing: s, isTransparent: r, name: c, onSuperFollow: d, onUnSuperFollow: p, size: h, style: m, testID: b }) => {
                    const f = i.useCallback(() => {
                            s ? p() : a && d();
                        }, [a, s, d, p]),
                        g = void 0 !== c ? `@${String(c)}` : "",
                        w = s ? k : _,
                        C = g.length > 0 && void 0 !== w ? T({ followType: w, screenName: g }) : "",
                        v = s ? L : _,
                        F = s ? H(r) : t ? void 0 : R(r),
                        Z = i.useMemo(() => (void 0 !== e ? e : (0, x.F)()), [e]),
                        D = i.useCallback(() => {
                            const e = s ? k : a ? B({ followType: _, screenName: c }) : null;
                            return e && !(0, S.Z)(e) ? i.createElement(y.Z, { id: Z, style: E.hidden }, e) : null;
                        }, [s, a, Z, c]);
                    return i.createElement(i.Fragment, null, i.createElement(u.Z, { "aria-describedby": Z, "aria-label": C, buttonDefaultLabel: w, buttonHoverLabel: v, buttonType: t, customButtonConfig: F, disabled: o, displayMode: n, id: l, onClick: f, size: h, style: m, testID: b }), void 0 === e ? D() : null);
                },
                D = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                M = s().cda66545,
                I = s().ee05e96b,
                P = s().a8d77a25,
                z = s().d0f4f3d9,
                N = s().f238ba1d,
                W = s().j6161cab,
                U = s().i4bb9ef7,
                $ = s().ge753264,
                O = s().b837c0e8,
                j = i.createElement(C.default, null),
                G = i.createElement(v.default, null),
                V = s().ddac1f1d,
                q = s().j8e33c40;
            class J extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getDescribedById = () => {
                            const { "aria-describedby": e } = this.props;
                            return void 0 !== e ? e : (0, x.F)();
                        }),
                        (this._renderDescribedBy = (e, t) => {
                            const o = this._getDescribedByText();
                            return (0, S.Z)(o) ? null : i.createElement(y.Z, { id: e, style: { display: "none" } }, o);
                        }),
                        (this._getDescribedByText = () => {
                            const { buttonText: e, isFollowing: t, isSuperFollowEligible: o, isSuperFollowing: i, name: n, type: l } = this.props;
                            let a = "";
                            const s = void 0 === n ? "" : n;
                            switch (l) {
                                case D.user:
                                case D.topic:
                                case D.list:
                                    i && e.unSuperFollow ? (a = e.unSuperFollow) : t ? (a = o ? I({ followType: e.superFollow, screenName: s }) : M({ followType: e.unfollow, screenName: s })) : t || (a = M({ followType: e.follow, screenName: s }));
                                    break;
                                case D.community:
                                    a = t ? P({ screenName: s }) : M({ followType: e.follow, screenName: s });
                                    break;
                                case D.spaces:
                                    t ? (a = M({ followType: e.unfollow, screenName: s })) : t || (a = M({ followType: e.follow, screenName: s }));
                                    break;
                                default:
                                    a = "";
                            }
                            return a;
                        }),
                        (this._getText = () => {
                            const { buttonText: e, name: t, type: o } = this.props,
                                i = void 0 !== t ? t : "",
                                n = U({ title: t }),
                                l = { [D.user]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: W({ screenName: t }), confirmationSheetText: $ }, [D.topic]: { ariaFollowName: i, confirmationHeadline: n, confirmationSheetText: O }, [D.list]: { ariaFollowName: i, confirmationHeadline: n, confirmationSheetText: void 0 }, [D.community]: { ariaFollowName: i, confirmationHeadline: V({ communityName: t }), confirmationSheetText: q }, [D.spaces]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: W({ screenName: t }), confirmationSheetText: $ } };
                            return { ariaFollowName: l[o].ariaFollowName, followLabel: e.follow, followBackLabel: e.followBack, followingLabel: e.following, unfollowLabel: e.unfollow, superFollowLabel: e.superFollow, superFollowingLabel: e.superFollowing, unSuperFollowLabel: e.unSuperFollow, confirmationHeadline: e.confirmationHeadline || l[o].confirmationHeadline, confirmationSheetText: e.confirmationSheetText || l[o].confirmationSheetText };
                        }),
                        (this._handlePress = () => {
                            const { isFollowing: e, isSuperFollowEligible: t, isSuperFollowing: o, onFollow: i, onSuperFollow: n, onUnSuperFollow: l, onUnfollow: a } = this.props;
                            o ? l() : e ? (t ? n() : a()) : (i(), this.setState({ hasJustFollowed: !0 }));
                        }),
                        (this._handleHoverOut = () => {
                            this.state.hasJustFollowed && this.setState({ hasJustFollowed: !1 });
                        }),
                        (this.state = { hasJustFollowed: !1 });
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, disabled: o, displayMode: n, id: l, isFollowed: a, isFollowing: s, isSuperFollowEligible: r, isSuperFollowing: c, isTransparent: d, showRelationshipChangeConfirmation: p, size: h, style: m, testID: b, type: f, withConfirmationSheetText: g } = this.props,
                        { ariaFollowName: w, confirmationHeadline: y, confirmationSheetText: C, followBackLabel: v, followLabel: S, followingLabel: x, superFollowLabel: F, superFollowingLabel: B, unSuperFollowLabel: T, unfollowLabel: _ } = this._getText(),
                        { hasJustFollowed: k } = this.state,
                        L = (t && t.followIcon) || G,
                        E = (t && t.followingIcon) || j,
                        Z = "only-text" !== n ? (s ? E : L) : void 0;
                    let M = s ? x : S;
                    a && !s && v && (M = v);
                    let I = z;
                    (c || (s && r)) && (c && B ? ((I = N), (M = B)) : r && F && ((I = N), (M = F)));
                    const P = w.length > 0 && void 0 !== M ? I({ followType: M, screenName: w }) : "",
                        W = "primaryFilled";
                    let U, $, O, V;
                    const q = d ? "brandText" : W,
                        J = d ? "destructiveText" : "destructiveOutlined",
                        A = !c && (!s || !r) && s,
                        K = s ? "onMediaWhiteFilled" : "onMediaOutlined",
                        Q = s ? "onMediaOutlined" : "onMediaWhiteFilled";
                    f === D.community ? (U = s ? _ : S) : f === D.spaces ? ((U = s ? _ : S), ($ = K), (O = Q)) : c && T ? ((V = H(d)), (U = T)) : s ? ((U = k ? x : _), ($ = k ? q : J), (O = d ? "brandText" : "primaryOutlined"), r && F && ((V = R(d)), (U = F), (O = void 0), ($ = void 0))) : ((U = a && v ? v : S), ($ = d ? "brandText" : W), (O = d ? "brandText" : W));
                    const X = this._getDescribedById();
                    return i.createElement(i.Fragment, null, i.createElement(u.Z, { "aria-describedby": X, "aria-label": P, buttonDefaultLabel: M, buttonHoverLabel: U, buttonHoverType: $, buttonType: O, confirmationSheetConfirmLabel: _, confirmationSheetHeadline: y, confirmationSheetText: g ? C : void 0, customButtonConfig: V, disabled: o, displayMode: n, icon: Z, id: l, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: A && p, size: h, style: m, testID: b }), void 0 === e ? this._renderDescribedBy(X) : null);
                }
            }
            const A = J;
            var K = o(311687);
            const Q = s().f305840e,
                X = s().e23b20a0,
                Y = s().fe04d89a,
                ee = s().i036327c,
                te = s().j95e3097,
                oe = i.createElement(K.default, null),
                ie = ({ disabled: e, displayMode: t, onCancelPendingFollow: o, showRelationshipChangeConfirmation: n, size: l, style: a, testID: s, userScreenName: r }) => i.createElement(u.Z, { buttonDefaultLabel: Q, buttonHoverLabel: X, buttonType: "primaryOutlined", confirmationSheetCancelLabel: X, confirmationSheetConfirmLabel: Y, confirmationSheetHeadline: ee, confirmationSheetText: te({ screenName: r }), disabled: e, displayMode: t, icon: oe, onClick: o, showRelationshipChangeConfirmation: n, size: l, style: a, testID: s }),
                ne = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                le = s().ec72e2f8,
                ae = s().a5f7ce12,
                se = s().c3befdbe,
                re = s().d3029dbc,
                ce = s().aeb6f0a0,
                de = s().a77a27c0,
                ue = s().b4397192;
            class pe extends i.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, buttonText: o, buttonType: n, disabled: l, displayMode: a, id: s, isBlocking: r, isFollowRequestSent: c, isFollowed: d, isFollowing: u, isSuperFollowEligible: p, isSuperFollowing: h, isTransparent: m, name: b, onCancelPendingFollow: f, onFollow: g, onSuperFollow: y, onUnSuperFollow: C, onUnblock: v, onUnfollow: S, relationshipMode: x, showRelationshipChangeConfirmation: F, size: B, style: T, testIDs: _, type: k, withConfirmationSheetText: L } = this.props,
                        R = r,
                        H = c,
                        E = x === ne.subscribe && (p || h);
                    return R ? i.createElement(w, { disabled: l, displayMode: a, onUnblock: v, showRelationshipChangeConfirmation: F, size: B, style: T, testID: _?.unblock, userScreenName: b }) : H ? i.createElement(ie, { disabled: l, displayMode: a, onCancelPendingFollow: f, showRelationshipChangeConfirmation: F, size: B, style: T, testID: _?.cancel, userScreenName: b }) : E ? i.createElement(Z, { "aria-describedby": e, buttonType: n, disabled: l, displayMode: a, id: s, isSuperFollowEligible: p, isSuperFollowing: h, isTransparent: m, name: b, onSuperFollow: y, onUnSuperFollow: C, size: B, style: T, testID: h ? _?.manageSubscription : _?.subscribe }) : i.createElement(A, { "aria-describedby": e, buttonIcons: t, buttonText: o, disabled: l, displayMode: a, id: s, isFollowed: d, isFollowing: u, isSuperFollowEligible: p, isSuperFollowing: h, isTransparent: m, name: b, onFollow: g, onSuperFollow: y, onUnSuperFollow: C, onUnfollow: S, showRelationshipChangeConfirmation: F, size: B, style: T, testID: u ? _?.unfollow : _?.follow, type: k, withConfirmationSheetText: L });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: t } = this.props,
                        o = t && "string" == typeof e,
                        i = !t;
                    l()(o || i, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            pe.defaultProps = { buttonText: { follow: le, followBack: ae, following: se, unfollow: re, superFollow: ce, superFollowing: de, unSuperFollow: ue }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: r.Z, onSuperFollow: r.Z, onUnblock: r.Z, onUnSuperFollow: r.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
        305098: (e, t, o) => {
            o.d(t, { Z: () => d });
            var i = o(807896),
                n = o(202784),
                l = o(325686),
                a = o(154003),
                s = o(190286),
                r = o(466792);
            Object.freeze({ iconText: "icon-text", onlyIcon: "only-icon", onlyText: "only-text" });
            class c extends n.Component {
                constructor(e) {
                    super(e),
                        (this._minWidth = 0),
                        (this._isMounted = !0),
                        (this._handleLabelMeasure = (e = !1) => {
                            setTimeout(() => {
                                const t = this._containerRef?.getBoundingClientRect().width,
                                    o = this._containerRef?.offsetWidth;
                                let i = 0;
                                t && o && (i = o ? t : o), (this._minWidth = Math.ceil(Math.max(this._minWidth, i))), e && this._isMounted && this.forceUpdate();
                            }, 0);
                        }),
                        (this._getCustomButtonProps = (e) => {
                            const { customButtonConfig: t } = this.props;
                            if (!t) return;
                            const { customButtonBackgroundColor: o, customButtonBorderColor: i, customButtonColor: n, customButtonHoverBackgroundColor: l, customButtonHoverBorderColor: a, customButtonHoverColor: s } = t,
                                r = { color: n, backgroundColor: o, borderColor: i };
                            return e && ((r.color = s || n), (r.backgroundColor = l || o), (r.borderColor = a || i)), r;
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
                    const { "aria-describedby": e, "aria-label": t, buttonDefaultLabel: o, buttonHoverLabel: c, buttonHoverType: d, buttonType: u, confirmationSheetCancelLabel: p, confirmationSheetConfirmLabel: h, confirmationSheetHeadline: m, confirmationSheetPrimaryButtonType: b, confirmationSheetText: f, disabled: g, displayMode: w, icon: y, id: C, onHoverOut: v, size: S, style: x, testID: F } = this.props,
                        B = [x, { minWidth: this._minWidth }];
                    return n.createElement(
                        l.Z,
                        { ref: this._setContainerRef, style: B },
                        n.createElement(r.Z, { onHoverIn: this._handleHoverIn, onHoverOut: v }, ({ isHovered: l }) => {
                            const s = l ? c : o,
                                r = l && d ? d : u,
                                p = this._getCustomButtonProps(l);
                            return n.createElement(a.ZP, (0, i.Z)({ "aria-describedby": e, "aria-label": "only-icon" === w ? s : t, disabled: g, icon: "only-text" !== w ? y : void 0, id: C, onPress: this._handleButtonPress, ref: this._setButtonRef, size: S, testID: F, type: r }, p), "only-icon" === w ? void 0 : s);
                        }),
                        this.state.showConfirmation ? n.createElement(s.Z, { cancelButtonLabel: p, confirmButtonLabel: h, confirmButtonType: b, headline: m, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: f }) : null,
                    );
                }
            }
            c.defaultProps = { showRelationshipChangeConfirmation: !1 };
            const d = c;
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => B });
            var i = o(807896),
                n = o(202784),
                l = o(194504),
                a = o(235902),
                s = o(392237),
                r = o(325686),
                c = o(111677),
                d = o.n(c),
                u = o(912021),
                p = o(516951),
                h = o(731708),
                m = o(310088),
                b = o(175993),
                f = o(58881),
                g = o(530732);
            const w = d().d2414d31,
                y = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class v extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: o, query: i, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: i, method: "push", state: { ...n, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, i) => {
                            const n = s.default.theme.colors.text,
                                l = s.default.theme.colors.gray700;
                            return o || i ? (e || t ? n : l) : e ? n : l;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: i, children: l, color: a, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: b, retainScrollPosition: v, style: x, to: F } = this.props,
                        { location: B } = this.state,
                        T = F ? this._getMemoizedLink(F, v) : void 0,
                        _ = c ? c(F) : B?.pathname === T?.pathname,
                        k = f.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        L = b ? "medium" : _ ? "bold" : "medium";
                    return n.createElement(g.Z, { "aria-label": t, "aria-selected": _, focusable: !!_, interactiveStyles: k, link: T, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? S.pill : S.link, u && _ ? S.active : null, d ? (u ? S.compactPill : S.compactLink) : null, p ? S.roundedRect : null, x], withoutInteractiveStyles: b || u }, ({ isFocused: t, isHovered: c }) => n.createElement(r.Z, { style: u && S.flexGrow }, n.createElement(h.ZP, { size: b ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(_, c, b, u) }, d && S.compactText, b && t && S.focusedText], weight: L }, e && n.createElement(e, { style: S.icon }), l, b || u ? null : n.createElement(r.Z, { style: _ && [S.border, { backgroundColor: s.default.theme.colors[a] }] })), o ? n.createElement(m.Z, { count: o, standalone: !0, style: [S.badge, o >= 10 && S.multiDigitBadge, o >= 20 && S.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: w, withBorder: !1 }) : i ? n.createElement(m.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: y, withBorder: !1 }) : null));
                }
            }
            (v.contextType = b.Z), (v.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const S = s.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                x = v,
                F = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                B = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: s, isRoundedRect: r, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = a.ZP.useProps(),
                        m = h() && !s,
                        b = n.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: l, ...a }, c) => {
                                    const d = m ? [F.linkRedesign, 0 === c && F.firstLinkRedesign, e && 0 === c && F.withNoPaddingStart] : void 0;
                                    return n.createElement(x, (0, i.Z)({ viewType: l }, a, { isCompact: o, isPillLink: s, isRoundedRect: r, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, s, r, m, c],
                        );
                    return n.createElement(l.Z, { "aria-label": t, buttonsContainerStyle: s && F.gap, childrenStyle: !m && F.flexGrow, key: p, style: [s ? null : F.segmentedControl, m && F.leftAligned, d], visibleItemIndex: u }, b);
                };
        },
        790093: (e, t, o) => {
            o.r(t), o.d(t, { default: () => r });
            var i = o(202784),
                n = o(890601),
                l = o(783427),
                a = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => r });
            var i = o(202784),
                n = o(890601),
                l = o(783427),
                a = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
        226597: (e, t, o) => {
            o.r(t), o.d(t, { default: () => r });
            var i = o(202784),
                n = o(890601),
                l = o(783427),
                a = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
        155353: (e, t, o) => {
            o.r(t), o.d(t, { default: () => r });
            var i = o(202784),
                n = o(890601),
                l = o(783427),
                a = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserFollowLists-bc6ccf4c.818953fa.js.map
