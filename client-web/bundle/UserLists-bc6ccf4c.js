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
                r = o(58881),
                s = o(530732),
                c = o(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: o, ...u }) => {
                    const p = r.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return i.createElement(l.Z, { style: d.container }, i.createElement(s.Z, (0, n.Z)({}, u, { interactiveStyles: p, style: d.root }), i.createElement(a.ZP, { align: e, color: t }, o)));
                };
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                i = o(154003),
                l = o(392237);
            class a extends n.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: l, href: a, icon: s, label: c, onPress: d, renderMenu: u, style: p, testID: h } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return n.createElement(i.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: l, icon: s, link: a, onPress: d, renderMenu: u, size: "xLarge", style: [r.root, !c && r.iconOnly, p], testID: h }, c);
                }
            }
            a.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const r = l.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                s = a;
        },
        723587: (e, t, o) => {
            o.d(t, { Z: () => pe });
            var n = o(202784),
                i = o(614983),
                l = o.n(i),
                a = o(111677),
                r = o.n(a),
                s = o(516951),
                c = o(616894),
                d = o(235902),
                u = o(305098);
            const p = r().i8cfb6e6,
                h = r().ea100d6a,
                m = r().fe40537f,
                b = r().ab7c3460,
                f = r().i58d8718,
                g = n.createElement(c.default, null),
                y = ({ disabled: e, displayMode: t, onUnblock: o, showRelationshipChangeConfirmation: i, size: l, style: a, testID: r, userScreenName: s }) => n.createElement(u.Z, { buttonDefaultLabel: p, buttonHoverLabel: h, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: h, confirmationSheetHeadline: m({ screenName: s }), confirmationSheetText: d.ZP.useProps().isSoftBlockEnabled() ? f : b, disabled: e, displayMode: t, icon: g, onClick: o, showRelationshipChangeConfirmation: i, size: l, style: a, testID: r });
            var w = o(466999),
                C = o(76388),
                S = o(911373),
                x = o(733357),
                v = o(352924),
                F = o(392237);
            const k = r().ee05e96b,
                B = r().f238ba1d,
                T = r().aeb6f0a0,
                E = r().a77a27c0,
                Z = r().b4397192,
                _ = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                H = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                L = F.default.create((e) => ({ hidden: { display: "none" } })),
                P = ({ "aria-describedby": e, buttonType: t, disabled: o, displayMode: i, id: l, isSuperFollowEligible: a, isSuperFollowing: r, isTransparent: s, name: c, onSuperFollow: d, onUnSuperFollow: p, size: h, style: m, testID: b }) => {
                    const f = n.useCallback(() => {
                            r ? p() : a && d();
                        }, [a, r, d, p]),
                        g = void 0 !== c ? `@${String(c)}` : "",
                        y = r ? E : T,
                        C = g.length > 0 && void 0 !== y ? B({ followType: y, screenName: g }) : "",
                        S = r ? Z : T,
                        F = r ? H(s) : t ? void 0 : _(s),
                        P = n.useMemo(() => (void 0 !== e ? e : (0, v.F)()), [e]),
                        R = n.useCallback(() => {
                            const e = r ? E : a ? k({ followType: T, screenName: c }) : null;
                            return e && !(0, x.Z)(e) ? n.createElement(w.Z, { id: P, style: L.hidden }, e) : null;
                        }, [r, a, P, c]);
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": P, "aria-label": C, buttonDefaultLabel: y, buttonHoverLabel: S, buttonType: t, customButtonConfig: F, disabled: o, displayMode: i, id: l, onClick: f, size: h, style: m, testID: b }), void 0 === e ? R() : null);
                },
                R = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                z = r().cda66545,
                D = r().ee05e96b,
                I = r().a8d77a25,
                M = r().d0f4f3d9,
                W = r().f238ba1d,
                N = r().j6161cab,
                G = r().i4bb9ef7,
                U = r().ge753264,
                O = r().b837c0e8,
                $ = n.createElement(C.default, null),
                j = n.createElement(S.default, null),
                A = r().ddac1f1d,
                V = r().j8e33c40;
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
                            const r = void 0 === i ? "" : i;
                            switch (l) {
                                case R.user:
                                case R.topic:
                                case R.list:
                                    n && e.unSuperFollow ? (a = e.unSuperFollow) : t ? (a = o ? D({ followType: e.superFollow, screenName: r }) : z({ followType: e.unfollow, screenName: r })) : t || (a = z({ followType: e.follow, screenName: r }));
                                    break;
                                case R.community:
                                    a = t ? I({ screenName: r }) : z({ followType: e.follow, screenName: r });
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
                                i = G({ title: t }),
                                l = { [R.user]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: N({ screenName: t }), confirmationSheetText: U }, [R.topic]: { ariaFollowName: n, confirmationHeadline: i, confirmationSheetText: O }, [R.list]: { ariaFollowName: n, confirmationHeadline: i, confirmationSheetText: void 0 }, [R.community]: { ariaFollowName: n, confirmationHeadline: A({ communityName: t }), confirmationSheetText: V }, [R.spaces]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: N({ screenName: t }), confirmationSheetText: U } };
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
                    const { "aria-describedby": e, buttonIcons: t, disabled: o, displayMode: i, id: l, isFollowed: a, isFollowing: r, isSuperFollowEligible: s, isSuperFollowing: c, isTransparent: d, showRelationshipChangeConfirmation: p, size: h, style: m, testID: b, type: f, withConfirmationSheetText: g } = this.props,
                        { ariaFollowName: y, confirmationHeadline: w, confirmationSheetText: C, followBackLabel: S, followLabel: x, followingLabel: v, superFollowLabel: F, superFollowingLabel: k, unSuperFollowLabel: B, unfollowLabel: T } = this._getText(),
                        { hasJustFollowed: E } = this.state,
                        Z = (t && t.followIcon) || j,
                        L = (t && t.followingIcon) || $,
                        P = "only-text" !== i ? (r ? L : Z) : void 0;
                    let z = r ? v : x;
                    a && !r && S && (z = S);
                    let D = M;
                    (c || (r && s)) && (c && k ? ((D = W), (z = k)) : s && F && ((D = W), (z = F)));
                    const I = y.length > 0 && void 0 !== z ? D({ followType: z, screenName: y }) : "",
                        N = "primaryFilled";
                    let G, U, O, A;
                    const V = d ? "brandText" : N,
                        q = d ? "destructiveText" : "destructiveOutlined",
                        J = !c && (!r || !s) && r,
                        K = r ? "onMediaWhiteFilled" : "onMediaOutlined",
                        Q = r ? "onMediaOutlined" : "onMediaWhiteFilled";
                    f === R.community ? (G = r ? T : x) : f === R.spaces ? ((G = r ? T : x), (U = K), (O = Q)) : c && B ? ((A = H(d)), (G = B)) : r ? ((G = E ? v : T), (U = E ? V : q), (O = d ? "brandText" : "primaryOutlined"), s && F && ((A = _(d)), (G = F), (O = void 0), (U = void 0))) : ((G = a && S ? S : x), (U = d ? "brandText" : N), (O = d ? "brandText" : N));
                    const X = this._getDescribedById();
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": X, "aria-label": I, buttonDefaultLabel: z, buttonHoverLabel: G, buttonHoverType: U, buttonType: O, confirmationSheetConfirmLabel: T, confirmationSheetHeadline: w, confirmationSheetText: g ? C : void 0, customButtonConfig: A, disabled: o, displayMode: i, icon: P, id: l, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: J && p, size: h, style: m, testID: b }), void 0 === e ? this._renderDescribedBy(X) : null);
                }
            }
            const J = q;
            var K = o(311687);
            const Q = r().f305840e,
                X = r().e23b20a0,
                Y = r().fe04d89a,
                ee = r().i036327c,
                te = r().j95e3097,
                oe = n.createElement(K.default, null),
                ne = ({ disabled: e, displayMode: t, onCancelPendingFollow: o, showRelationshipChangeConfirmation: i, size: l, style: a, testID: r, userScreenName: s }) => n.createElement(u.Z, { buttonDefaultLabel: Q, buttonHoverLabel: X, buttonType: "primaryOutlined", confirmationSheetCancelLabel: X, confirmationSheetConfirmLabel: Y, confirmationSheetHeadline: ee, confirmationSheetText: te({ screenName: s }), disabled: e, displayMode: t, icon: oe, onClick: o, showRelationshipChangeConfirmation: i, size: l, style: a, testID: r }),
                ie = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                le = r().ec72e2f8,
                ae = r().a5f7ce12,
                re = r().c3befdbe,
                se = r().d3029dbc,
                ce = r().aeb6f0a0,
                de = r().a77a27c0,
                ue = r().b4397192;
            class pe extends n.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, buttonText: o, buttonType: i, disabled: l, displayMode: a, id: r, isBlocking: s, isFollowRequestSent: c, isFollowed: d, isFollowing: u, isSuperFollowEligible: p, isSuperFollowing: h, isTransparent: m, name: b, onCancelPendingFollow: f, onFollow: g, onSuperFollow: w, onUnSuperFollow: C, onUnblock: S, onUnfollow: x, relationshipMode: v, showRelationshipChangeConfirmation: F, size: k, style: B, testIDs: T, type: E, withConfirmationSheetText: Z } = this.props,
                        _ = s,
                        H = c,
                        L = v === ie.subscribe && (p || h);
                    return _ ? n.createElement(y, { disabled: l, displayMode: a, onUnblock: S, showRelationshipChangeConfirmation: F, size: k, style: B, testID: T?.unblock, userScreenName: b }) : H ? n.createElement(ne, { disabled: l, displayMode: a, onCancelPendingFollow: f, showRelationshipChangeConfirmation: F, size: k, style: B, testID: T?.cancel, userScreenName: b }) : L ? n.createElement(P, { "aria-describedby": e, buttonType: i, disabled: l, displayMode: a, id: r, isSuperFollowEligible: p, isSuperFollowing: h, isTransparent: m, name: b, onSuperFollow: w, onUnSuperFollow: C, size: k, style: B, testID: h ? T?.manageSubscription : T?.subscribe }) : n.createElement(J, { "aria-describedby": e, buttonIcons: t, buttonText: o, disabled: l, displayMode: a, id: r, isFollowed: d, isFollowing: u, isSuperFollowEligible: p, isSuperFollowing: h, isTransparent: m, name: b, onFollow: g, onSuperFollow: w, onUnSuperFollow: C, onUnfollow: x, showRelationshipChangeConfirmation: F, size: k, style: B, testID: u ? T?.unfollow : T?.follow, type: E, withConfirmationSheetText: Z });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: t } = this.props,
                        o = t && "string" == typeof e,
                        n = !t;
                    l()(o || n, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            pe.defaultProps = { buttonText: { follow: le, followBack: ae, following: re, unfollow: se, superFollow: ce, superFollowing: de, unSuperFollow: ue }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: s.Z, onSuperFollow: s.Z, onUnblock: s.Z, onUnSuperFollow: s.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                i = o(325686),
                l = o(235902),
                a = o(885015),
                r = o(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: s } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: r.default.theme.colors[e] ?? r.default.theme.colors.borderColor };
                return o ? n.createElement(a.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(i.Z, { style: c.gapColumn }, n.createElement(i.Z, { style: [c.gap, d] })), n.createElement(i.Z, { style: c.gapText }, o), n.createElement(i.Z, { style: c.gapColumn }, n.createElement(i.Z, { style: [c.gap, d] }))) : n.createElement(i.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = r.default.create((e) => ({ borderColor: { backgroundColor: r.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: r.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                i = o(202784),
                l = o(325686),
                a = o(392237);
            class r extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...a } = this.props,
                        r = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, s.column, o && s.withGutterColumn] }));
                    return i.createElement(l.Z, (0, n.Z)({ style: [t, s.root, o && s.withGutter] }, a), r);
                }
            }
            r.defaultProps = { withGutter: !1 };
            const s = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = r;
        },
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                i = o(325686),
                l = o(191796),
                a = o(58399),
                r = o(731708),
                s = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: p = !1, label: h, link: m, onPress: b, paddingHorizontal: f, renderRightContent: g, role: y = "tab", styleOverride: w, testID: C = "pivot", thumbnail: S, thumbnailSize: x, withoutArrow: v = !1 } = e,
                        F = [u.thumbnailContainer, "medium" === x && u.thumbnailContainerMedium],
                        k = "string" == typeof h ? n.createElement(r.ZP, null, h) : h,
                        B = "object" == typeof m && m.external && !m.openInSameFrame,
                        T = o ? ("string" == typeof o ? n.createElement(r.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, o) : o) : null,
                        E = n.useMemo(() => ("space0" === f ? { paddingHorizontal: 0 } : { paddingHorizontal: f ? c.default.theme.spaces[f] : c.default.theme.componentDimensions.gutterHorizontal }), [f]);
                    return n.createElement(s.Z, { "aria-selected": "tab" === y ? p : null, disabled: d, link: d ? void 0 : m, onPress: b, role: y, style: [u.root, E, d && u.disabled, w], testID: C, withInteractiveStyling: !!m || !!b }, n.createElement(i.Z, { style: u.contentContainer }, S ? n.createElement(i.Z, { style: F }, S) : null, n.createElement(i.Z, { style: u.content }, k, T), g ? g() : null, (!m && !b) || d || v ? null : B ? n.createElement(l.default, { style: u.icon }) : n.createElement(a.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        98538: (e, t, o) => {
            o.d(t, { Z: () => h });
            var n = o(202784),
                i = o(325686),
                l = o(731708),
                a = o(891198),
                r = o(280278),
                s = o(392237);
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
                (u.Value = ({ animated: e, children: t, count: o, style: i, weight: a = "bold" }) => n.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? n.createElement(r.ZP, { children: t, count: o, size: c, style: i, weight: a }) : n.createElement(l.ZP, { children: t, color: s ? "white" : "text", size: c, style: i, weight: a }))));
            const p = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                h = u;
        },
        305098: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(807896),
                i = o(202784),
                l = o(325686),
                a = o(154003),
                r = o(190286),
                s = o(466792);
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
                            const { customButtonBackgroundColor: o, customButtonBorderColor: n, customButtonColor: i, customButtonHoverBackgroundColor: l, customButtonHoverBorderColor: a, customButtonHoverColor: r } = t,
                                s = { color: i, backgroundColor: o, borderColor: n };
                            return e && ((s.color = r || i), (s.backgroundColor = l || o), (s.borderColor = a || n)), s;
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
                    const { "aria-describedby": e, "aria-label": t, buttonDefaultLabel: o, buttonHoverLabel: c, buttonHoverType: d, buttonType: u, confirmationSheetCancelLabel: p, confirmationSheetConfirmLabel: h, confirmationSheetHeadline: m, confirmationSheetPrimaryButtonType: b, confirmationSheetText: f, disabled: g, displayMode: y, icon: w, id: C, onHoverOut: S, size: x, style: v, testID: F } = this.props,
                        k = [v, { minWidth: this._minWidth }];
                    return i.createElement(
                        l.Z,
                        { ref: this._setContainerRef, style: k },
                        i.createElement(s.Z, { onHoverIn: this._handleHoverIn, onHoverOut: S }, ({ isHovered: l }) => {
                            const r = l ? c : o,
                                s = l && d ? d : u,
                                p = this._getCustomButtonProps(l);
                            return i.createElement(a.ZP, (0, n.Z)({ "aria-describedby": e, "aria-label": "only-icon" === y ? r : t, disabled: g, icon: "only-text" !== y ? w : void 0, id: C, onPress: this._handleButtonPress, ref: this._setButtonRef, size: x, testID: F, type: s }, p), "only-icon" === y ? void 0 : r);
                        }),
                        this.state.showConfirmation ? i.createElement(r.Z, { cancelButtonLabel: p, confirmButtonLabel: h, confirmButtonType: b, headline: m, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: f }) : null,
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
                r = o(392237),
                s = o(325686),
                c = o(111677),
                d = o.n(c),
                u = o(912021),
                p = o(516951),
                h = o(731708),
                m = o(310088),
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
                            const i = r.default.theme.colors.text,
                                l = r.default.theme.colors.gray700;
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
                        { location: k } = this.state,
                        B = F ? this._getMemoizedLink(F, S) : void 0,
                        T = c ? c(F) : k?.pathname === B?.pathname,
                        E = f.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? x.pillHoverStyle.backgroundColor : void 0 }),
                        Z = b ? "medium" : T ? "bold" : "medium";
                    return i.createElement(g.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: E, link: B, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [x.pillStyle] : [x.link]), ...(u && T ? [x.pillActiveStyle] : []), d ? (u ? x.compactPill : x.compactLink) : null, p ? x.roundedRect : null, v], withoutInteractiveStyles: b }, ({ isFocused: t, isHovered: c }) => i.createElement(s.Z, { style: u && x.flexGrow }, i.createElement(h.ZP, { size: b ? "headline2" : void 0, style: [x.text, { color: this._getTextColor(T, c, b, u) }, d && x.compactText, b && t && x.focusedText, u && x.pillTextStyle, u && T && x.pillActiveTextStyle, u && c && x.pillHoverTextStyle], weight: Z }, e && i.createElement(e, { style: x.icon }), l, b || u ? null : i.createElement(s.Z, { style: T && [x.border, { backgroundColor: r.default.theme.colors[a] }] })), o ? i.createElement(m.Z, { count: o, standalone: !0, style: [x.badge, o >= 10 && x.multiDigitBadge, o >= 20 && x.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : n ? i.createElement(m.Z, { pip: !0, standalone: !0, style: x.badgePip, textColor: "red500", unreadCountLabel: w, withBorder: !1 }) : null));
                }
            }
            (S.contextType = b.Z), (S.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const x = r.default.create((e) => ({
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
                F = r.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: r, isRoundedRect: s, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = a.ZP.useProps(),
                        m = h() && !r,
                        b = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: l, ...a }, c) => {
                                    const d = m ? [F.linkRedesign, 0 === c && F.firstLinkRedesign, e && 0 === c && F.withNoPaddingStart] : void 0;
                                    return i.createElement(v, (0, n.Z)({ viewType: l }, a, { isCompact: o, isPillLink: r, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, r, s, m, c],
                        );
                    return i.createElement(l.Z, { "aria-label": t, buttonsContainerStyle: r && F.gap, childrenStyle: !m && F.flexGrow, key: p, style: [r ? null : F.segmentedControl, m && F.leftAligned, d], visibleItemIndex: u }, b);
                };
        },
        790093: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                i = o(890601),
                l = o(783427),
                a = o(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                i = o(890601),
                l = o(783427),
                a = o(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-bc6ccf4c.7a552b0a.js.map
