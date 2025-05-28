"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-bc6ccf4c", "icons/IconFeedback-js"],
    {
        242454: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(807896),
                i = o(202784),
                l = o(325686),
                a = o(731708),
                s = o(58881),
                r = o(530732),
                c = o(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: o, ...u }) => {
                    const p = s.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return i.createElement(l.Z, { style: d.container }, i.createElement(r.Z, (0, n.Z)({}, u, { interactiveStyles: p, style: d.root }), i.createElement(a.ZP, { align: e, color: t }, o)));
                };
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => r });
            var n = o(202784),
                i = o(154003),
                l = o(392237);
            class a extends n.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: l, href: a, icon: r, label: c, onPress: d, renderMenu: u, style: p, testID: h } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return n.createElement(i.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: l, icon: r, link: a, onPress: d, renderMenu: u, size: "xLarge", style: [s.root, !c && s.iconOnly, p], testID: h }, c);
                }
            }
            a.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const s = l.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                r = a;
        },
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
                h = s().ea100d6a,
                m = s().fe40537f,
                b = s().ab7c3460,
                f = s().i58d8718,
                g = n.createElement(c.default, null),
                w = ({ disabled: e, displayMode: t, onUnblock: o, showRelationshipChangeConfirmation: i, size: l, style: a, testID: s, userScreenName: r }) => n.createElement(u.Z, { buttonDefaultLabel: p, buttonHoverLabel: h, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: h, confirmationSheetHeadline: m({ screenName: r }), confirmationSheetText: d.ZP.useProps().isSoftBlockEnabled() ? f : b, disabled: e, displayMode: t, icon: g, onClick: o, showRelationshipChangeConfirmation: i, size: l, style: a, testID: s });
            var y = o(466999),
                C = o(76388),
                x = o(911373),
                S = o(733357),
                v = o(352924),
                F = o(392237);
            const k = s().ee05e96b,
                B = s().f238ba1d,
                E = s().aeb6f0a0,
                T = s().a77a27c0,
                Z = s().b4397192,
                _ = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                H = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                L = F.default.create((e) => ({ hidden: { display: "none" } })),
                P = ({ "aria-describedby": e, buttonType: t, disabled: o, displayMode: i, id: l, isSuperFollowEligible: a, isSuperFollowing: s, isTransparent: r, name: c, onSuperFollow: d, onUnSuperFollow: p, size: h, style: m, testID: b }) => {
                    const f = n.useCallback(() => {
                            s ? p() : a && d();
                        }, [a, s, d, p]),
                        g = void 0 !== c ? `@${String(c)}` : "",
                        w = s ? T : E,
                        C = g.length > 0 && void 0 !== w ? B({ followType: w, screenName: g }) : "",
                        x = s ? Z : E,
                        F = s ? H(r) : t ? void 0 : _(r),
                        P = n.useMemo(() => (void 0 !== e ? e : (0, v.F)()), [e]),
                        R = n.useCallback(() => {
                            const e = s ? T : a ? k({ followType: E, screenName: c }) : null;
                            return e && !(0, S.Z)(e) ? n.createElement(y.Z, { id: P, style: L.hidden }, e) : null;
                        }, [s, a, P, c]);
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": P, "aria-label": C, buttonDefaultLabel: w, buttonHoverLabel: x, buttonType: t, customButtonConfig: F, disabled: o, displayMode: i, id: l, onClick: f, size: h, style: m, testID: b }), void 0 === e ? R() : null);
                },
                R = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                D = s().cda66545,
                I = s().ee05e96b,
                M = s().a8d77a25,
                z = s().d0f4f3d9,
                W = s().f238ba1d,
                N = s().j6161cab,
                G = s().i4bb9ef7,
                U = s().ge753264,
                O = s().b837c0e8,
                $ = n.createElement(C.default, null),
                j = n.createElement(x.default, null),
                V = s().ddac1f1d,
                A = s().j8e33c40;
            class q extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getDescribedById = () => {
                            const { "aria-describedby": e } = this.props;
                            return void 0 !== e ? e : (0, v.F)();
                        }),
                        (this._renderDescribedBy = (e, t) => {
                            const o = this._getDescribedByText();
                            return (0, S.Z)(o) ? null : n.createElement(y.Z, { id: e, style: { display: "none" } }, o);
                        }),
                        (this._getDescribedByText = () => {
                            const { buttonText: e, isFollowing: t, isSuperFollowEligible: o, isSuperFollowing: n, name: i, type: l } = this.props;
                            let a = "";
                            const s = void 0 === i ? "" : i;
                            switch (l) {
                                case R.user:
                                case R.topic:
                                case R.list:
                                    n && e.unSuperFollow ? (a = e.unSuperFollow) : t ? (a = o ? I({ followType: e.superFollow, screenName: s }) : D({ followType: e.unfollow, screenName: s })) : t || (a = D({ followType: e.follow, screenName: s }));
                                    break;
                                case R.community:
                                    a = t ? M({ screenName: s }) : D({ followType: e.follow, screenName: s });
                                    break;
                                case R.spaces:
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
                                i = G({ title: t }),
                                l = { [R.user]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: N({ screenName: t }), confirmationSheetText: U }, [R.topic]: { ariaFollowName: n, confirmationHeadline: i, confirmationSheetText: O }, [R.list]: { ariaFollowName: n, confirmationHeadline: i, confirmationSheetText: void 0 }, [R.community]: { ariaFollowName: n, confirmationHeadline: V({ communityName: t }), confirmationSheetText: A }, [R.spaces]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: N({ screenName: t }), confirmationSheetText: U } };
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
                    const { "aria-describedby": e, buttonIcons: t, disabled: o, displayMode: i, id: l, isFollowed: a, isFollowing: s, isSuperFollowEligible: r, isSuperFollowing: c, isTransparent: d, showRelationshipChangeConfirmation: p, size: h, style: m, testID: b, type: f, withConfirmationSheetText: g } = this.props,
                        { ariaFollowName: w, confirmationHeadline: y, confirmationSheetText: C, followBackLabel: x, followLabel: S, followingLabel: v, superFollowLabel: F, superFollowingLabel: k, unSuperFollowLabel: B, unfollowLabel: E } = this._getText(),
                        { hasJustFollowed: T } = this.state,
                        Z = (t && t.followIcon) || j,
                        L = (t && t.followingIcon) || $,
                        P = "only-text" !== i ? (s ? L : Z) : void 0;
                    let D = s ? v : S;
                    a && !s && x && (D = x);
                    let I = z;
                    (c || (s && r)) && (c && k ? ((I = W), (D = k)) : r && F && ((I = W), (D = F)));
                    const M = w.length > 0 && void 0 !== D ? I({ followType: D, screenName: w }) : "",
                        N = "primaryFilled";
                    let G, U, O, V;
                    const A = d ? "brandText" : N,
                        q = d ? "destructiveText" : "destructiveOutlined",
                        J = !c && (!s || !r) && s,
                        K = s ? "onMediaWhiteFilled" : "onMediaOutlined",
                        Q = s ? "onMediaOutlined" : "onMediaWhiteFilled";
                    f === R.community ? (G = s ? E : S) : f === R.spaces ? ((G = s ? E : S), (U = K), (O = Q)) : c && B ? ((V = H(d)), (G = B)) : s ? ((G = T ? v : E), (U = T ? A : q), (O = d ? "brandText" : "primaryOutlined"), r && F && ((V = _(d)), (G = F), (O = void 0), (U = void 0))) : ((G = a && x ? x : S), (U = d ? "brandText" : N), (O = d ? "brandText" : N));
                    const X = this._getDescribedById();
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": X, "aria-label": M, buttonDefaultLabel: D, buttonHoverLabel: G, buttonHoverType: U, buttonType: O, confirmationSheetConfirmLabel: E, confirmationSheetHeadline: y, confirmationSheetText: g ? C : void 0, customButtonConfig: V, disabled: o, displayMode: i, icon: P, id: l, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: J && p, size: h, style: m, testID: b }), void 0 === e ? this._renderDescribedBy(X) : null);
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
                    const { "aria-describedby": e, buttonIcons: t, buttonText: o, buttonType: i, disabled: l, displayMode: a, id: s, isBlocking: r, isFollowRequestSent: c, isFollowed: d, isFollowing: u, isSuperFollowEligible: p, isSuperFollowing: h, isTransparent: m, name: b, onCancelPendingFollow: f, onFollow: g, onSuperFollow: y, onUnSuperFollow: C, onUnblock: x, onUnfollow: S, relationshipMode: v, showRelationshipChangeConfirmation: F, size: k, style: B, testIDs: E, type: T, withConfirmationSheetText: Z } = this.props,
                        _ = r,
                        H = c,
                        L = v === ie.subscribe && (p || h);
                    return _ ? n.createElement(w, { disabled: l, displayMode: a, onUnblock: x, showRelationshipChangeConfirmation: F, size: k, style: B, testID: E?.unblock, userScreenName: b }) : H ? n.createElement(ne, { disabled: l, displayMode: a, onCancelPendingFollow: f, showRelationshipChangeConfirmation: F, size: k, style: B, testID: E?.cancel, userScreenName: b }) : L ? n.createElement(P, { "aria-describedby": e, buttonType: i, disabled: l, displayMode: a, id: s, isSuperFollowEligible: p, isSuperFollowing: h, isTransparent: m, name: b, onSuperFollow: y, onUnSuperFollow: C, size: k, style: B, testID: h ? E?.manageSubscription : E?.subscribe }) : n.createElement(J, { "aria-describedby": e, buttonIcons: t, buttonText: o, disabled: l, displayMode: a, id: s, isFollowed: d, isFollowing: u, isSuperFollowEligible: p, isSuperFollowing: h, isTransparent: m, name: b, onFollow: g, onSuperFollow: y, onUnSuperFollow: C, onUnfollow: S, showRelationshipChangeConfirmation: F, size: k, style: B, testID: u ? E?.unfollow : E?.follow, type: T, withConfirmationSheetText: Z });
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
        420412: (e, t, o) => {
            o.d(t, { Z: () => r });
            var n = o(202784),
                i = o(325686),
                l = o(235902),
                a = o(885015),
                s = o(392237);
            function r({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: r } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return o ? n.createElement(a.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(i.Z, { style: c.gapColumn }, n.createElement(i.Z, { style: [c.gap, d] })), n.createElement(i.Z, { style: c.gapText }, o), n.createElement(i.Z, { style: c.gapColumn }, n.createElement(i.Z, { style: [c.gap, d] }))) : n.createElement(i.Z, { style: [!t && c.root, r() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                i = o(202784),
                l = o(325686),
                a = o(392237);
            class s extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...a } = this.props,
                        s = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, r.column, o && r.withGutterColumn] }));
                    return i.createElement(l.Z, (0, n.Z)({ style: [t, r.root, o && r.withGutter] }, a), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const r = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
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
                    const { decoration: t, description: o, disabled: d = !1, isActive: p = !1, label: h, link: m, onPress: b, paddingHorizontal: f, renderRightContent: g, role: w = "tab", styleOverride: y, testID: C = "pivot", thumbnail: x, thumbnailSize: S, withoutArrow: v = !1 } = e,
                        F = [u.thumbnailContainer, "medium" === S && u.thumbnailContainerMedium],
                        k = "string" == typeof h ? n.createElement(s.ZP, null, h) : h,
                        B = "object" == typeof m && m.external && !m.openInSameFrame,
                        E = o ? ("string" == typeof o ? n.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, o) : o) : null,
                        T = n.useMemo(() => ("space0" === f ? { paddingHorizontal: 0 } : { paddingHorizontal: f ? c.default.theme.spaces[f] : c.default.theme.componentDimensions.gutterHorizontal }), [f]);
                    return n.createElement(r.Z, { "aria-selected": "tab" === w ? p : null, disabled: d, link: d ? void 0 : m, onPress: b, role: w, style: [u.root, T, d && u.disabled, y], testID: C, withInteractiveStyling: !!m || !!b }, n.createElement(i.Z, { style: u.contentContainer }, x ? n.createElement(i.Z, { style: F }, x) : null, n.createElement(i.Z, { style: u.content }, k, E), g ? g() : null, (!m && !b) || d || v ? null : B ? n.createElement(l.default, { style: u.icon }) : n.createElement(a.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        98538: (e, t, o) => {
            o.d(t, { Z: () => h });
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
                h = u;
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
                    const { "aria-describedby": e, "aria-label": t, buttonDefaultLabel: o, buttonHoverLabel: c, buttonHoverType: d, buttonType: u, confirmationSheetCancelLabel: p, confirmationSheetConfirmLabel: h, confirmationSheetHeadline: m, confirmationSheetPrimaryButtonType: b, confirmationSheetText: f, disabled: g, displayMode: w, icon: y, id: C, onHoverOut: x, size: S, style: v, testID: F } = this.props,
                        k = [v, { minWidth: this._minWidth }];
                    return i.createElement(
                        l.Z,
                        { ref: this._setContainerRef, style: k },
                        i.createElement(r.Z, { onHoverIn: this._handleHoverIn, onHoverOut: x }, ({ isHovered: l }) => {
                            const s = l ? c : o,
                                r = l && d ? d : u,
                                p = this._getCustomButtonProps(l);
                            return i.createElement(a.ZP, (0, n.Z)({ "aria-describedby": e, "aria-label": "only-icon" === w ? s : t, disabled: g, icon: "only-text" !== w ? y : void 0, id: C, onPress: this._handleButtonPress, ref: this._setButtonRef, size: S, testID: F, type: r }, p), "only-icon" === w ? void 0 : s);
                        }),
                        this.state.showConfirmation ? i.createElement(s.Z, { cancelButtonLabel: p, confirmButtonLabel: h, confirmButtonType: b, headline: m, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: f }) : null,
                    );
                }
            }
            c.defaultProps = { showRelationshipChangeConfirmation: !1 };
            const d = c;
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => k });
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
                h = o(731708),
                m = o(310088),
                b = o(175993),
                f = o(58881),
                g = o(530732);
            const w = d().d2414d31,
                y = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class x extends i.Component {
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: n, children: l, color: a, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: b, retainScrollPosition: x, style: v, to: F } = this.props,
                        { location: k } = this.state,
                        B = F ? this._getMemoizedLink(F, x) : void 0,
                        E = c ? c(F) : k?.pathname === B?.pathname,
                        T = f.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        Z = b ? "medium" : E ? "bold" : "medium";
                    return i.createElement(g.Z, { "aria-label": t, "aria-selected": E, focusable: !!E, interactiveStyles: T, link: B, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? S.pill : S.link, u && E ? S.active : null, d ? (u ? S.compactPill : S.compactLink) : null, p ? S.roundedRect : null, v], withoutInteractiveStyles: b || u }, ({ isFocused: t, isHovered: c }) => i.createElement(r.Z, { style: u && S.flexGrow }, i.createElement(h.ZP, { size: b ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(E, c, b, u) }, d && S.compactText, b && t && S.focusedText], weight: Z }, e && i.createElement(e, { style: S.icon }), l, b || u ? null : i.createElement(r.Z, { style: E && [S.border, { backgroundColor: s.default.theme.colors[a] }] })), o ? i.createElement(m.Z, { count: o, standalone: !0, style: [S.badge, o >= 10 && S.multiDigitBadge, o >= 20 && S.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: w, withBorder: !1 }) : n ? i.createElement(m.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: y, withBorder: !1 }) : null));
                }
            }
            (x.contextType = b.Z), (x.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                v = x,
                F = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: s, isRoundedRect: r, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = a.ZP.useProps(),
                        m = h() && !s,
                        b = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: l, ...a }, c) => {
                                    const d = m ? [F.linkRedesign, 0 === c && F.firstLinkRedesign, e && 0 === c && F.withNoPaddingStart] : void 0;
                                    return i.createElement(v, (0, n.Z)({ viewType: l }, a, { isCompact: o, isPillLink: s, isRoundedRect: r, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, s, r, m, c],
                        );
                    return i.createElement(l.Z, { "aria-label": t, buttonsContainerStyle: s && F.gap, childrenStyle: !m && F.flexGrow, key: p, style: [s ? null : F.segmentedControl, m && F.leftAligned, d], visibleItemIndex: u }, b);
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-bc6ccf4c.05fb2dba.js.map
