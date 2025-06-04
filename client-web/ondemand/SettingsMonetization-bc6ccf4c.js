"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-bc6ccf4c", "icons/IconFeedback-js"],
    {
        723587: (e, t, o) => {
            o.d(t, { Z: () => pe });
            var n = o(202784),
                i = o(614983),
                l = o.n(i),
                a = o(111677),
                s = o.n(a),
                r = o(516951),
                c = o(616894),
                d = o(235902),
                u = o(305098);
            const p = s().i8cfb6e6,
                m = s().ea100d6a,
                h = s().fe40537f,
                b = s().ab7c3460,
                f = s().i58d8718,
                g = n.createElement(c.default, null),
                y = ({ disabled: e, displayMode: t, onUnblock: o, showRelationshipChangeConfirmation: i, size: l, style: a, testID: s, userScreenName: r }) => n.createElement(u.Z, { buttonDefaultLabel: p, buttonHoverLabel: m, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: m, confirmationSheetHeadline: h({ screenName: r }), confirmationSheetText: d.ZP.useProps().isSoftBlockEnabled() ? f : b, disabled: e, displayMode: t, icon: g, onClick: o, showRelationshipChangeConfirmation: i, size: l, style: a, testID: s });
            var w = o(466999),
                C = o(76388),
                S = o(911373),
                x = o(733357),
                v = o(352924),
                F = o(392237);
            const B = s().ee05e96b,
                T = s().f238ba1d,
                k = s().aeb6f0a0,
                E = s().a77a27c0,
                _ = s().b4397192,
                Z = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                R = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                L = F.default.create((e) => ({ hidden: { display: "none" } })),
                H = ({ "aria-describedby": e, buttonType: t, disabled: o, displayMode: i, id: l, isSuperFollowEligible: a, isSuperFollowing: s, isTransparent: r, name: c, onSuperFollow: d, onUnSuperFollow: p, size: m, style: h, testID: b }) => {
                    const f = n.useCallback(() => {
                            s ? p() : a && d();
                        }, [a, s, d, p]),
                        g = void 0 !== c ? `@${String(c)}` : "",
                        y = s ? E : k,
                        C = g.length > 0 && void 0 !== y ? T({ followType: y, screenName: g }) : "",
                        S = s ? _ : k,
                        F = s ? R(r) : t ? void 0 : Z(r),
                        H = n.useMemo(() => (void 0 !== e ? e : (0, v.F)()), [e]),
                        z = n.useCallback(() => {
                            const e = s ? E : a ? B({ followType: k, screenName: c }) : null;
                            return e && !(0, x.Z)(e) ? n.createElement(w.Z, { id: H, style: L.hidden }, e) : null;
                        }, [s, a, H, c]);
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": H, "aria-label": C, buttonDefaultLabel: y, buttonHoverLabel: S, buttonType: t, customButtonConfig: F, disabled: o, displayMode: i, id: l, onClick: f, size: m, style: h, testID: b }), void 0 === e ? z() : null);
                },
                z = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                D = s().cda66545,
                I = s().ee05e96b,
                P = s().a8d77a25,
                M = s().d0f4f3d9,
                W = s().f238ba1d,
                N = s().j6161cab,
                U = s().i4bb9ef7,
                $ = s().ge753264,
                j = s().b837c0e8,
                G = n.createElement(C.default, null),
                O = n.createElement(S.default, null),
                A = s().ddac1f1d,
                V = s().j8e33c40;
            class q extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getDescribedById = () => {
                            const { "aria-describedby": e } = this.props;
                            return void 0 !== e ? e : (0, v.F)();
                        }),
                        (this._renderDescribedBy = (e, t) => {
                            const o = this._getDescribedByText();
                            return (0, x.Z)(o) ? null : n.createElement(w.Z, { id: e, style: { display: "none" } }, o);
                        }),
                        (this._getDescribedByText = () => {
                            const { buttonText: e, isFollowing: t, isSuperFollowEligible: o, isSuperFollowing: n, name: i, type: l } = this.props;
                            let a = "";
                            const s = void 0 === i ? "" : i;
                            switch (l) {
                                case z.user:
                                case z.topic:
                                case z.list:
                                    n && e.unSuperFollow ? (a = e.unSuperFollow) : t ? (a = o ? I({ followType: e.superFollow, screenName: s }) : D({ followType: e.unfollow, screenName: s })) : t || (a = D({ followType: e.follow, screenName: s }));
                                    break;
                                case z.community:
                                    a = t ? P({ screenName: s }) : D({ followType: e.follow, screenName: s });
                                    break;
                                case z.spaces:
                                    t ? (a = D({ followType: e.unfollow, screenName: s })) : t || (a = D({ followType: e.follow, screenName: s }));
                                    break;
                                default:
                                    a = "";
                            }
                            return a;
                        }),
                        (this._getText = () => {
                            const { buttonText: e, name: t, type: o } = this.props,
                                n = void 0 !== t ? t : "",
                                i = U({ title: t }),
                                l = { [z.user]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: N({ screenName: t }), confirmationSheetText: $ }, [z.topic]: { ariaFollowName: n, confirmationHeadline: i, confirmationSheetText: j }, [z.list]: { ariaFollowName: n, confirmationHeadline: i, confirmationSheetText: void 0 }, [z.community]: { ariaFollowName: n, confirmationHeadline: A({ communityName: t }), confirmationSheetText: V }, [z.spaces]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: N({ screenName: t }), confirmationSheetText: $ } };
                            return { ariaFollowName: l[o].ariaFollowName, followLabel: e.follow, followBackLabel: e.followBack, followingLabel: e.following, unfollowLabel: e.unfollow, superFollowLabel: e.superFollow, superFollowingLabel: e.superFollowing, unSuperFollowLabel: e.unSuperFollow, confirmationHeadline: e.confirmationHeadline || l[o].confirmationHeadline, confirmationSheetText: e.confirmationSheetText || l[o].confirmationSheetText };
                        }),
                        (this._handlePress = () => {
                            const { isFollowing: e, isSuperFollowEligible: t, isSuperFollowing: o, onFollow: n, onSuperFollow: i, onUnSuperFollow: l, onUnfollow: a } = this.props;
                            o ? l() : e ? (t ? i() : a()) : (n(), this.setState({ hasJustFollowed: !0 }));
                        }),
                        (this._handleHoverOut = () => {
                            this.state.hasJustFollowed && this.setState({ hasJustFollowed: !1 });
                        }),
                        (this.state = { hasJustFollowed: !1 });
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, disabled: o, displayMode: i, id: l, isFollowed: a, isFollowing: s, isSuperFollowEligible: r, isSuperFollowing: c, isTransparent: d, showRelationshipChangeConfirmation: p, size: m, style: h, testID: b, type: f, withConfirmationSheetText: g } = this.props,
                        { ariaFollowName: y, confirmationHeadline: w, confirmationSheetText: C, followBackLabel: S, followLabel: x, followingLabel: v, superFollowLabel: F, superFollowingLabel: B, unSuperFollowLabel: T, unfollowLabel: k } = this._getText(),
                        { hasJustFollowed: E } = this.state,
                        _ = (t && t.followIcon) || O,
                        L = (t && t.followingIcon) || G,
                        H = "only-text" !== i ? (s ? L : _) : void 0;
                    let D = s ? v : x;
                    a && !s && S && (D = S);
                    let I = M;
                    (c || (s && r)) && (c && B ? ((I = W), (D = B)) : r && F && ((I = W), (D = F)));
                    const P = y.length > 0 && void 0 !== D ? I({ followType: D, screenName: y }) : "",
                        N = "primaryFilled";
                    let U, $, j, A;
                    const V = d ? "brandText" : N,
                        q = d ? "destructiveText" : "destructiveOutlined",
                        J = !c && (!s || !r) && s,
                        K = s ? "onMediaWhiteFilled" : "onMediaOutlined",
                        Q = s ? "onMediaOutlined" : "onMediaWhiteFilled";
                    f === z.community ? (U = s ? k : x) : f === z.spaces ? ((U = s ? k : x), ($ = K), (j = Q)) : c && T ? ((A = R(d)), (U = T)) : s ? ((U = E ? v : k), ($ = E ? V : q), (j = d ? "brandText" : "primaryOutlined"), r && F && ((A = Z(d)), (U = F), (j = void 0), ($ = void 0))) : ((U = a && S ? S : x), ($ = d ? "brandText" : N), (j = d ? "brandText" : N));
                    const X = this._getDescribedById();
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": X, "aria-label": P, buttonDefaultLabel: D, buttonHoverLabel: U, buttonHoverType: $, buttonType: j, confirmationSheetConfirmLabel: k, confirmationSheetHeadline: w, confirmationSheetText: g ? C : void 0, customButtonConfig: A, disabled: o, displayMode: i, icon: H, id: l, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: J && p, size: m, style: h, testID: b }), void 0 === e ? this._renderDescribedBy(X) : null);
                }
            }
            const J = q;
            var K = o(311687);
            const Q = s().f305840e,
                X = s().e23b20a0,
                Y = s().fe04d89a,
                ee = s().i036327c,
                te = s().j95e3097,
                oe = n.createElement(K.default, null),
                ne = ({ disabled: e, displayMode: t, onCancelPendingFollow: o, showRelationshipChangeConfirmation: i, size: l, style: a, testID: s, userScreenName: r }) => n.createElement(u.Z, { buttonDefaultLabel: Q, buttonHoverLabel: X, buttonType: "primaryOutlined", confirmationSheetCancelLabel: X, confirmationSheetConfirmLabel: Y, confirmationSheetHeadline: ee, confirmationSheetText: te({ screenName: r }), disabled: e, displayMode: t, icon: oe, onClick: o, showRelationshipChangeConfirmation: i, size: l, style: a, testID: s }),
                ie = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                le = s().ec72e2f8,
                ae = s().a5f7ce12,
                se = s().c3befdbe,
                re = s().d3029dbc,
                ce = s().aeb6f0a0,
                de = s().a77a27c0,
                ue = s().b4397192;
            class pe extends n.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, buttonText: o, buttonType: i, disabled: l, displayMode: a, id: s, isBlocking: r, isFollowRequestSent: c, isFollowed: d, isFollowing: u, isSuperFollowEligible: p, isSuperFollowing: m, isTransparent: h, name: b, onCancelPendingFollow: f, onFollow: g, onSuperFollow: w, onUnSuperFollow: C, onUnblock: S, onUnfollow: x, relationshipMode: v, showRelationshipChangeConfirmation: F, size: B, style: T, testIDs: k, type: E, withConfirmationSheetText: _ } = this.props,
                        Z = r,
                        R = c,
                        L = v === ie.subscribe && (p || m);
                    return Z ? n.createElement(y, { disabled: l, displayMode: a, onUnblock: S, showRelationshipChangeConfirmation: F, size: B, style: T, testID: k?.unblock, userScreenName: b }) : R ? n.createElement(ne, { disabled: l, displayMode: a, onCancelPendingFollow: f, showRelationshipChangeConfirmation: F, size: B, style: T, testID: k?.cancel, userScreenName: b }) : L ? n.createElement(H, { "aria-describedby": e, buttonType: i, disabled: l, displayMode: a, id: s, isSuperFollowEligible: p, isSuperFollowing: m, isTransparent: h, name: b, onSuperFollow: w, onUnSuperFollow: C, size: B, style: T, testID: m ? k?.manageSubscription : k?.subscribe }) : n.createElement(J, { "aria-describedby": e, buttonIcons: t, buttonText: o, disabled: l, displayMode: a, id: s, isFollowed: d, isFollowing: u, isSuperFollowEligible: p, isSuperFollowing: m, isTransparent: h, name: b, onFollow: g, onSuperFollow: w, onUnSuperFollow: C, onUnfollow: x, showRelationshipChangeConfirmation: F, size: B, style: T, testID: u ? k?.unfollow : k?.follow, type: E, withConfirmationSheetText: _ });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: t } = this.props,
                        o = t && "string" == typeof e,
                        n = !t;
                    l()(o || n, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            pe.defaultProps = { buttonText: { follow: le, followBack: ae, following: se, unfollow: re, superFollow: ce, superFollowing: de, unSuperFollow: ue }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: r.Z, onSuperFollow: r.Z, onUnblock: r.Z, onUnSuperFollow: r.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                i = o(325686),
                l = o(191796),
                a = o(58399),
                s = o(731708),
                r = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: p = !1, label: m, link: h, onPress: b, paddingHorizontal: f, renderRightContent: g, role: y = "tab", styleOverride: w, testID: C = "pivot", thumbnail: S, thumbnailSize: x, withoutArrow: v = !1 } = e,
                        F = [u.thumbnailContainer, "medium" === x && u.thumbnailContainerMedium],
                        B = "string" == typeof m ? n.createElement(s.ZP, null, m) : m,
                        T = "object" == typeof h && h.external && !h.openInSameFrame,
                        k = o ? ("string" == typeof o ? n.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, o) : o) : null,
                        E = n.useMemo(() => ("space0" === f ? { paddingHorizontal: 0 } : { paddingHorizontal: f ? c.default.theme.spaces[f] : c.default.theme.componentDimensions.gutterHorizontal }), [f]);
                    return n.createElement(r.Z, { "aria-selected": "tab" === y ? p : null, disabled: d, link: d ? void 0 : h, onPress: b, role: y, style: [u.root, E, d && u.disabled, w], testID: C, withInteractiveStyling: !!h || !!b }, n.createElement(i.Z, { style: u.contentContainer }, S ? n.createElement(i.Z, { style: F }, S) : null, n.createElement(i.Z, { style: u.content }, B, k), g ? g() : null, (!h && !b) || d || v ? null : T ? n.createElement(l.default, { style: u.icon }) : n.createElement(a.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        536606: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(202784),
                i = o(325686),
                l = o(731708),
                a = o(352924),
                s = o(822399),
                r = o(98538),
                c = o(392237);
            const d = (e) => {
                const { decoration: t, isCompact: o, progressBarConfig: d, statConfig: p, title: m, valueCurrent: h, valueMax: b } = e,
                    f = (0, a.F)(),
                    g = ((y = d), c.default.theme.colors[y?.color || "blue900"]);
                var y;
                const w = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    C = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"], height: c.default.theme.spaces[e?.height || "space8"], backgroundColor: c.default.theme.colors.gray50 };
                    })(d);
                return n.createElement(i.Z, { style: u.root }, n.createElement(i.Z, { style: u.decoration }, t), n.createElement(i.Z, { style: u.title }, n.createElement(l.ZP, { size: "subtext2", weight: "medium" }, m)), n.createElement(i.Z, { id: f, style: u.valueLabel }, p.value ? n.createElement(r.Z, null, n.createElement(r.Z.Value, null, p.value), n.createElement(r.Z.Label, null, p.label)) : n.createElement(l.ZP, { weight: "bold" }, p.label)), n.createElement(i.Z, { style: o ? u.progressBarContainerCompact : u.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, n.createElement(s.Z, { "aria-describedby": f, "aria-valuemax": b, colorValue: g, progress: h / b, progressStyle: w, style: C })));
            };
            const u = c.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                p = n.memo(d);
        },
        98538: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(202784),
                i = o(325686),
                l = o(731708),
                a = o(891198),
                s = o(280278),
                r = o(392237);
            const c = "subtext1",
                d = n.createContext({ onMedia: !1 });
            class u extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, a.Gb)(e) !== (0, a.wl)(e) ? { label: (0, a.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: o, onPress: i } = this.props;
                    return n.createElement(l.ZP, { color: o ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: i }, n.createElement(d.Provider, { value: { onMedia: o } }, e));
                }
            }
            (u.Group = (e) =>
                n.createElement(
                    i.Z,
                    { style: [p.row, e.style] },
                    n.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, o) => n.createElement(i.Z, { key: t, style: t < o.length - 1 && p.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => n.createElement(d.Consumer, null, ({ onMedia: o }) => n.createElement(l.ZP, { children: e, color: o ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: o, style: i, weight: a = "bold" }) => n.createElement(d.Consumer, null, ({ onMedia: r }) => (e ? n.createElement(s.ZP, { children: t, count: o, size: c, style: i, weight: a }) : n.createElement(l.ZP, { children: t, color: r ? "white" : "text", size: c, style: i, weight: a }))));
            const p = r.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                m = u;
        },
        305098: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(807896),
                i = o(202784),
                l = o(325686),
                a = o(154003),
                s = o(190286),
                r = o(466792);
            Object.freeze({ iconText: "icon-text", onlyIcon: "only-icon", onlyText: "only-text" });
            class c extends i.Component {
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
                            const { customButtonBackgroundColor: o, customButtonBorderColor: n, customButtonColor: i, customButtonHoverBackgroundColor: l, customButtonHoverBorderColor: a, customButtonHoverColor: s } = t,
                                r = { color: i, backgroundColor: o, borderColor: n };
                            return e && ((r.color = s || i), (r.backgroundColor = l || o), (r.borderColor = a || n)), r;
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
                    const { "aria-describedby": e, "aria-label": t, buttonDefaultLabel: o, buttonHoverLabel: c, buttonHoverType: d, buttonType: u, confirmationSheetCancelLabel: p, confirmationSheetConfirmLabel: m, confirmationSheetHeadline: h, confirmationSheetPrimaryButtonType: b, confirmationSheetText: f, disabled: g, displayMode: y, icon: w, id: C, onHoverOut: S, size: x, style: v, testID: F } = this.props,
                        B = [v, { minWidth: this._minWidth }];
                    return i.createElement(
                        l.Z,
                        { ref: this._setContainerRef, style: B },
                        i.createElement(r.Z, { onHoverIn: this._handleHoverIn, onHoverOut: S }, ({ isHovered: l }) => {
                            const s = l ? c : o,
                                r = l && d ? d : u,
                                p = this._getCustomButtonProps(l);
                            return i.createElement(a.ZP, (0, n.Z)({ "aria-describedby": e, "aria-label": "only-icon" === y ? s : t, disabled: g, icon: "only-text" !== y ? w : void 0, id: C, onPress: this._handleButtonPress, ref: this._setButtonRef, size: x, testID: F, type: r }, p), "only-icon" === y ? void 0 : s);
                        }),
                        this.state.showConfirmation ? i.createElement(s.Z, { cancelButtonLabel: p, confirmButtonLabel: m, confirmButtonType: b, headline: h, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: f }) : null,
                    );
                }
            }
            c.defaultProps = { showRelationshipChangeConfirmation: !1 };
            const d = c;
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => B });
            var n = o(807896),
                i = o(202784),
                l = o(194504),
                a = o(235902),
                s = o(392237),
                r = o(325686),
                c = o(111677),
                d = o.n(c),
                u = o(912021),
                p = o(516951),
                m = o(731708),
                h = o(310088),
                b = o(175993),
                f = o(58881),
                g = o(530732);
            const y = d().d2414d31,
                w = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class S extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: o, query: n, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: n, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, n) => {
                            const i = s.default.theme.colors.text,
                                l = s.default.theme.colors.gray700;
                            return o || n ? (e || t ? i : l) : e ? i : l;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: n, children: l, color: a, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: b, retainScrollPosition: S, style: v, to: F } = this.props,
                        { location: B } = this.state,
                        T = F ? this._getMemoizedLink(F, S) : void 0,
                        k = c ? c(F) : B?.pathname === T?.pathname,
                        E = f.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? x.pillHoverStyle.backgroundColor : void 0 }),
                        _ = b ? "medium" : k ? "bold" : "medium";
                    return i.createElement(g.Z, { "aria-label": t, "aria-selected": k, focusable: !!k, interactiveStyles: E, link: T, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [x.pillStyle] : [x.link]), ...(u && k ? [x.pillActiveStyle] : []), d ? (u ? x.compactPill : x.compactLink) : null, p ? x.roundedRect : null, v], withoutInteractiveStyles: b }, ({ isFocused: t, isHovered: c }) => i.createElement(r.Z, { style: u && x.flexGrow }, i.createElement(m.ZP, { size: b ? "headline2" : void 0, style: [x.text, { color: this._getTextColor(k, c, b, u) }, d && x.compactText, b && t && x.focusedText, u && x.pillTextStyle, u && k && x.pillActiveTextStyle, u && c && x.pillHoverTextStyle], weight: _ }, e && i.createElement(e, { style: x.icon }), l, b || u ? null : i.createElement(r.Z, { style: k && [x.border, { backgroundColor: s.default.theme.colors[a] }] })), o ? i.createElement(h.Z, { count: o, standalone: !0, style: [x.badge, o >= 10 && x.multiDigitBadge, o >= 20 && x.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : n ? i.createElement(h.Z, { pip: !0, standalone: !0, style: x.badgePip, textColor: "red500", unreadCountLabel: w, withBorder: !1 }) : null));
                }
            }
            (S.contextType = b.Z), (S.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const x = s.default.create((e) => ({
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
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                v = S,
                F = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                B = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: s, isRoundedRect: r, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = a.ZP.useProps(),
                        h = m() && !s,
                        b = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: l, ...a }, c) => {
                                    const d = h ? [F.linkRedesign, 0 === c && F.firstLinkRedesign, e && 0 === c && F.withNoPaddingStart] : void 0;
                                    return i.createElement(v, (0, n.Z)({ viewType: l }, a, { isCompact: o, isPillLink: s, isRoundedRect: r, isWebRedesign: h, style: d }), t);
                                }),
                            [e, o, s, r, h, c],
                        );
                    return i.createElement(l.Z, { "aria-label": t, buttonsContainerStyle: s && F.gap, childrenStyle: !h && F.flexGrow, key: p, style: [s ? null : F.segmentedControl, h && F.leftAligned, d], visibleItemIndex: u }, b);
                };
        },
        790093: (e, t, o) => {
            o.r(t), o.d(t, { default: () => r });
            var n = o(202784),
                i = o(890601),
                l = o(783427),
                a = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => r });
            var n = o(202784),
                i = o(890601),
                l = o(783427),
                a = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => i, Z: () => n });
            o(136728);
            const n = function (e, t) {
                return i(e, t);
            };
            function i(e, t) {
                return e.reduce(
                    (o, n, i) => {
                        const l = t ? t(n, i, e) : !!n;
                        return l && o[0].push(n), !l && o[1].push(n), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-bc6ccf4c.e10b587a.js.map
