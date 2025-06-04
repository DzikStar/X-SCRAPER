"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-bc6ccf4c", "icons/IconFeedback-js"],
    {
        642153: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(202784),
                r = o(325686),
                a = o(392237),
                l = o(823161);
            const i = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: o = "small", style: i, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        m = d.length,
                        p = "transparent" === t;
                    return n.createElement(
                        r.Z,
                        { style: [s.root, i, { height: l.default.getSizeStyle(c)?.height }] },
                        d.map((e, r) => n.createElement(l.default, { backgroundColor: t, borderColor: t, borderWidth: p ? "none" : o, key: r, size: c, style: [0 !== r && { marginStart: -1 * a.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: m - r }], uri: e })),
                    );
                },
                s = a.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(202784),
                r = o(476984),
                a = o.n(r),
                l = o(143778),
                i = o(750410),
                s = o(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class p extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: r, icon: a, loadingMessage: l, onRequestRetry: d, render: p, renderFailure: h, retryMessage: f, retryable: b } = this.props;
                    switch (r) {
                        case c:
                            return b ? n.createElement(i.Z, { icon: a, onRequestRetry: d, retryMessage: f }) : o ? n.createElement(s.m, { failureMessage: o }) : h();
                        case u:
                            return n.createElement(s.J, { "aria-label": e, color: t, loadingMessage: l });
                        case m:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        723587: (e, t, o) => {
            o.d(t, { Z: () => me });
            var n = o(202784),
                r = o(614983),
                a = o.n(r),
                l = o(111677),
                i = o.n(l),
                s = o(516951),
                c = o(616894),
                d = o(235902),
                u = o(305098);
            const m = i().i8cfb6e6,
                p = i().ea100d6a,
                h = i().fe40537f,
                f = i().ab7c3460,
                b = i().i58d8718,
                y = n.createElement(c.default, null),
                w = ({ disabled: e, displayMode: t, onUnblock: o, showRelationshipChangeConfirmation: r, size: a, style: l, testID: i, userScreenName: s }) => n.createElement(u.Z, { buttonDefaultLabel: m, buttonHoverLabel: p, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: p, confirmationSheetHeadline: h({ screenName: s }), confirmationSheetText: d.ZP.useProps().isSoftBlockEnabled() ? b : f, disabled: e, displayMode: t, icon: y, onClick: o, showRelationshipChangeConfirmation: r, size: a, style: l, testID: i });
            var g = o(466999),
                C = o(76388),
                v = o(911373),
                x = o(733357),
                S = o(352924),
                E = o(392237);
            const F = i().ee05e96b,
                T = i().f238ba1d,
                k = i().aeb6f0a0,
                B = i().a77a27c0,
                Z = i().b4397192,
                I = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                L = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                _ = E.default.create((e) => ({ hidden: { display: "none" } })),
                R = ({ "aria-describedby": e, buttonType: t, disabled: o, displayMode: r, id: a, isSuperFollowEligible: l, isSuperFollowing: i, isTransparent: s, name: c, onSuperFollow: d, onUnSuperFollow: m, size: p, style: h, testID: f }) => {
                    const b = n.useCallback(() => {
                            i ? m() : l && d();
                        }, [l, i, d, m]),
                        y = void 0 !== c ? `@${String(c)}` : "",
                        w = i ? B : k,
                        C = y.length > 0 && void 0 !== w ? T({ followType: w, screenName: y }) : "",
                        v = i ? Z : k,
                        E = i ? L(s) : t ? void 0 : I(s),
                        R = n.useMemo(() => (void 0 !== e ? e : (0, S.F)()), [e]),
                        D = n.useCallback(() => {
                            const e = i ? B : l ? F({ followType: k, screenName: c }) : null;
                            return e && !(0, x.Z)(e) ? n.createElement(g.Z, { id: R, style: _.hidden }, e) : null;
                        }, [i, l, R, c]);
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": R, "aria-label": C, buttonDefaultLabel: w, buttonHoverLabel: v, buttonType: t, customButtonConfig: E, disabled: o, displayMode: r, id: a, onClick: b, size: p, style: h, testID: f }), void 0 === e ? D() : null);
                },
                D = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                P = i().cda66545,
                H = i().ee05e96b,
                M = i().a8d77a25,
                N = i().d0f4f3d9,
                z = i().f238ba1d,
                W = i().j6161cab,
                U = i().i4bb9ef7,
                Q = i().ge753264,
                O = i().b837c0e8,
                A = n.createElement(C.default, null),
                j = n.createElement(v.default, null),
                G = i().ddac1f1d,
                $ = i().j8e33c40;
            class V extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getDescribedById = () => {
                            const { "aria-describedby": e } = this.props;
                            return void 0 !== e ? e : (0, S.F)();
                        }),
                        (this._renderDescribedBy = (e, t) => {
                            const o = this._getDescribedByText();
                            return (0, x.Z)(o) ? null : n.createElement(g.Z, { id: e, style: { display: "none" } }, o);
                        }),
                        (this._getDescribedByText = () => {
                            const { buttonText: e, isFollowing: t, isSuperFollowEligible: o, isSuperFollowing: n, name: r, type: a } = this.props;
                            let l = "";
                            const i = void 0 === r ? "" : r;
                            switch (a) {
                                case D.user:
                                case D.topic:
                                case D.list:
                                    n && e.unSuperFollow ? (l = e.unSuperFollow) : t ? (l = o ? H({ followType: e.superFollow, screenName: i }) : P({ followType: e.unfollow, screenName: i })) : t || (l = P({ followType: e.follow, screenName: i }));
                                    break;
                                case D.community:
                                    l = t ? M({ screenName: i }) : P({ followType: e.follow, screenName: i });
                                    break;
                                case D.spaces:
                                    t ? (l = P({ followType: e.unfollow, screenName: i })) : t || (l = P({ followType: e.follow, screenName: i }));
                                    break;
                                default:
                                    l = "";
                            }
                            return l;
                        }),
                        (this._getText = () => {
                            const { buttonText: e, name: t, type: o } = this.props,
                                n = void 0 !== t ? t : "",
                                r = U({ title: t }),
                                a = { [D.user]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: W({ screenName: t }), confirmationSheetText: Q }, [D.topic]: { ariaFollowName: n, confirmationHeadline: r, confirmationSheetText: O }, [D.list]: { ariaFollowName: n, confirmationHeadline: r, confirmationSheetText: void 0 }, [D.community]: { ariaFollowName: n, confirmationHeadline: G({ communityName: t }), confirmationSheetText: $ }, [D.spaces]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: W({ screenName: t }), confirmationSheetText: Q } };
                            return { ariaFollowName: a[o].ariaFollowName, followLabel: e.follow, followBackLabel: e.followBack, followingLabel: e.following, unfollowLabel: e.unfollow, superFollowLabel: e.superFollow, superFollowingLabel: e.superFollowing, unSuperFollowLabel: e.unSuperFollow, confirmationHeadline: e.confirmationHeadline || a[o].confirmationHeadline, confirmationSheetText: e.confirmationSheetText || a[o].confirmationSheetText };
                        }),
                        (this._handlePress = () => {
                            const { isFollowing: e, isSuperFollowEligible: t, isSuperFollowing: o, onFollow: n, onSuperFollow: r, onUnSuperFollow: a, onUnfollow: l } = this.props;
                            o ? a() : e ? (t ? r() : l()) : (n(), this.setState({ hasJustFollowed: !0 }));
                        }),
                        (this._handleHoverOut = () => {
                            this.state.hasJustFollowed && this.setState({ hasJustFollowed: !1 });
                        }),
                        (this.state = { hasJustFollowed: !1 });
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, disabled: o, displayMode: r, id: a, isFollowed: l, isFollowing: i, isSuperFollowEligible: s, isSuperFollowing: c, isTransparent: d, showRelationshipChangeConfirmation: m, size: p, style: h, testID: f, type: b, withConfirmationSheetText: y } = this.props,
                        { ariaFollowName: w, confirmationHeadline: g, confirmationSheetText: C, followBackLabel: v, followLabel: x, followingLabel: S, superFollowLabel: E, superFollowingLabel: F, unSuperFollowLabel: T, unfollowLabel: k } = this._getText(),
                        { hasJustFollowed: B } = this.state,
                        Z = (t && t.followIcon) || j,
                        _ = (t && t.followingIcon) || A,
                        R = "only-text" !== r ? (i ? _ : Z) : void 0;
                    let P = i ? S : x;
                    l && !i && v && (P = v);
                    let H = N;
                    (c || (i && s)) && (c && F ? ((H = z), (P = F)) : s && E && ((H = z), (P = E)));
                    const M = w.length > 0 && void 0 !== P ? H({ followType: P, screenName: w }) : "",
                        W = "primaryFilled";
                    let U, Q, O, G;
                    const $ = d ? "brandText" : W,
                        V = d ? "destructiveText" : "destructiveOutlined",
                        J = !c && (!i || !s) && i,
                        q = i ? "onMediaWhiteFilled" : "onMediaOutlined",
                        X = i ? "onMediaOutlined" : "onMediaWhiteFilled";
                    b === D.community ? (U = i ? k : x) : b === D.spaces ? ((U = i ? k : x), (Q = q), (O = X)) : c && T ? ((G = L(d)), (U = T)) : i ? ((U = B ? S : k), (Q = B ? $ : V), (O = d ? "brandText" : "primaryOutlined"), s && E && ((G = I(d)), (U = E), (O = void 0), (Q = void 0))) : ((U = l && v ? v : x), (Q = d ? "brandText" : W), (O = d ? "brandText" : W));
                    const K = this._getDescribedById();
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": K, "aria-label": M, buttonDefaultLabel: P, buttonHoverLabel: U, buttonHoverType: Q, buttonType: O, confirmationSheetConfirmLabel: k, confirmationSheetHeadline: g, confirmationSheetText: y ? C : void 0, customButtonConfig: G, disabled: o, displayMode: r, icon: R, id: a, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: J && m, size: p, style: h, testID: f }), void 0 === e ? this._renderDescribedBy(K) : null);
                }
            }
            const J = V;
            var q = o(311687);
            const X = i().f305840e,
                K = i().e23b20a0,
                Y = i().fe04d89a,
                ee = i().i036327c,
                te = i().j95e3097,
                oe = n.createElement(q.default, null),
                ne = ({ disabled: e, displayMode: t, onCancelPendingFollow: o, showRelationshipChangeConfirmation: r, size: a, style: l, testID: i, userScreenName: s }) => n.createElement(u.Z, { buttonDefaultLabel: X, buttonHoverLabel: K, buttonType: "primaryOutlined", confirmationSheetCancelLabel: K, confirmationSheetConfirmLabel: Y, confirmationSheetHeadline: ee, confirmationSheetText: te({ screenName: s }), disabled: e, displayMode: t, icon: oe, onClick: o, showRelationshipChangeConfirmation: r, size: a, style: l, testID: i }),
                re = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                ae = i().ec72e2f8,
                le = i().a5f7ce12,
                ie = i().c3befdbe,
                se = i().d3029dbc,
                ce = i().aeb6f0a0,
                de = i().a77a27c0,
                ue = i().b4397192;
            class me extends n.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, buttonText: o, buttonType: r, disabled: a, displayMode: l, id: i, isBlocking: s, isFollowRequestSent: c, isFollowed: d, isFollowing: u, isSuperFollowEligible: m, isSuperFollowing: p, isTransparent: h, name: f, onCancelPendingFollow: b, onFollow: y, onSuperFollow: g, onUnSuperFollow: C, onUnblock: v, onUnfollow: x, relationshipMode: S, showRelationshipChangeConfirmation: E, size: F, style: T, testIDs: k, type: B, withConfirmationSheetText: Z } = this.props,
                        I = s,
                        L = c,
                        _ = S === re.subscribe && (m || p);
                    return I ? n.createElement(w, { disabled: a, displayMode: l, onUnblock: v, showRelationshipChangeConfirmation: E, size: F, style: T, testID: k?.unblock, userScreenName: f }) : L ? n.createElement(ne, { disabled: a, displayMode: l, onCancelPendingFollow: b, showRelationshipChangeConfirmation: E, size: F, style: T, testID: k?.cancel, userScreenName: f }) : _ ? n.createElement(R, { "aria-describedby": e, buttonType: r, disabled: a, displayMode: l, id: i, isSuperFollowEligible: m, isSuperFollowing: p, isTransparent: h, name: f, onSuperFollow: g, onUnSuperFollow: C, size: F, style: T, testID: p ? k?.manageSubscription : k?.subscribe }) : n.createElement(J, { "aria-describedby": e, buttonIcons: t, buttonText: o, disabled: a, displayMode: l, id: i, isFollowed: d, isFollowing: u, isSuperFollowEligible: m, isSuperFollowing: p, isTransparent: h, name: f, onFollow: y, onSuperFollow: g, onUnSuperFollow: C, onUnfollow: x, showRelationshipChangeConfirmation: E, size: F, style: T, testID: u ? k?.unfollow : k?.follow, type: B, withConfirmationSheetText: Z });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: t } = this.props,
                        o = t && "string" == typeof e,
                        n = !t;
                    a()(o || n, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            me.defaultProps = { buttonText: { follow: ae, followBack: le, following: ie, unfollow: se, superFollow: ce, superFollowing: de, unSuperFollow: ue }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: s.Z, onSuperFollow: s.Z, onUnblock: s.Z, onUnSuperFollow: s.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(325686),
                a = o(235902),
                l = o(885015),
                i = o(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: s } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return o ? n.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] })), n.createElement(r.Z, { style: c.gapText }, o), n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] }))) : n.createElement(r.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                r = o(202784),
                a = o(325686),
                l = o(392237);
            class i extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...l } = this.props,
                        i = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, s.column, o && s.withGutterColumn] }));
                    return r.createElement(a.Z, (0, n.Z)({ style: [t, s.root, o && s.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        215337: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(325686);
            class a extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, o) => {
                                    const n = t[o];
                                    let r = "";
                                    return n && (r = ` ${100 * n}%`), e + r;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: o, style: a } = this.props;
                    return n.createElement(r.Z, { style: [a, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, o);
                }
            }
            a.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const l = a;
        },
        470397: (e, t, o) => {
            o.d(t, { Z: () => i });
            o(136728);
            var n = o(202784),
                r = o(325686),
                a = o(124964),
                l = o(392237);
            const i = ({ children: e, color: t = "gray700", size: o, style: l }) => {
                    const i = [];
                    return (
                        n.Children.forEach(e, (e) => {
                            const r = i.length;
                            e && (r > 0 && i.push(n.createElement(a.Z, { color: t, key: `middot-${r}`, size: o })), i.push(e));
                        }),
                        i.length ? n.createElement(r.Z, { style: [s.middotGroup, l] }, i) : null
                    );
                },
                s = l.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        378729: (e, t, o) => {
            o.d(t, { Z: () => b });
            var n = o(202784),
                r = o(325686),
                a = o(111677),
                l = o.n(a),
                i = o(283379),
                s = o(731708),
                c = o(392237);
            const d = l().f1a1b791,
                u = l().if2bf8b4,
                m = l().f3624b5c,
                p = l().b4b3b113,
                h = l().be222050,
                f = l().hcbbe447;
            class b extends n.Component {
                render() {
                    const { color: e, id: t, style: o } = this.props;
                    return n.createElement(r.Z, { style: [y.root, o] }, n.createElement(i.default, { style: [y.icon, e && y[e]] }), n.createElement(s.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: o } = this.props,
                        { adMetadataContainer: n, advertiser: r, advertiser_name: a, disclosure_type: l } = o,
                        i = e && r && e === r.id_str,
                        s = "string" == typeof l && "political" === l.toLowerCase(),
                        c = "string" == typeof l && "issue" === l.toLowerCase(),
                        b = !(!n || "POLITICAL" !== n.disclaimerType) || s,
                        y = !(!n || "ISSUE" !== n.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: w } = n || {};
                    let g;
                    return (g = t || (!a || i || w ? (b ? m : y ? h : u) : b ? p({ fullName: a }) : y ? f({ fullName: a }) : d({ fullName: a }))), g;
                }
            }
            b.defaultProps = { color: "gray700" };
            const y = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        973014: (e, t, o) => {
            o.d(t, { Z: () => w });
            var n = o(202784),
                r = o(325686),
                a = o(111677),
                l = o.n(a),
                i = o(837020),
                s = o(379327),
                c = o(913973),
                d = o(731708),
                u = o(58881),
                m = o(530732),
                p = o(392237),
                h = o(599190);
            const f = { active: l().e557ad8e, expand: l().e3a58c28, remove: l().h517e8d8 };
            class b extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleSecondaryClick = () => {
                            const { secondaryAction: e } = this.props;
                            e && e.onSecondaryClick();
                        });
                }
                render() {
                    const { "aria-label": e, avatar: t, compact: o, disabled: a, link: l, mode: i, onClick: s, secondaryAction: c, selected: h, style: b, testID: w, text: g } = this.props,
                        C = this._renderIcon(!0, i),
                        v = c && this._renderIcon(!1, c.mode),
                        x = [y.root, o && y.compact, a && y.disabled, h && y.selected, b],
                        S = [y.content, !!C && y.withIcon, !!t && ((o && y.withAvatarImageCompact) || y.withAvatarImage)],
                        E = u.Z.generate({ backgroundColor: h ? p.default.theme.colors.primary : "transparent", color: h ? p.default.theme.colors.white : p.default.theme.colors.primary });
                    return n.createElement(r.Z, { style: x, testID: w }, n.createElement(m.Z, { "aria-label": e || (i ? f[i] : ""), disabled: a, interactiveStyles: E, link: l, onPress: s, style: S }, this._renderAvatar(), n.createElement(d.ZP, { color: h ? "whiteOnColor" : "text", numberOfLines: 1, selectable: !1, style: y.text, weight: "bold" }, g), C), c ? n.createElement(m.Z, { "aria-label": c["aria-label"] || (c.mode ? f[c.mode] : ""), disabled: a || c.disabled, hoverLabel: { label: c.hoverLabel || (c.mode ? f[c.mode] : "") }, interactiveStyles: E, onPress: this._handleSecondaryClick, style: y.secondaryControl }, n.createElement(r.Z, { style: y.secondaryBorder }, v)) : null);
                }
                _renderIcon(e = !0, t) {
                    const { selected: o } = this.props,
                        r = [y.icon, o && y.iconSelected],
                        a = [y.icon];
                    switch (t) {
                        case h.D.Remove:
                            return n.createElement(i.default, { style: [y.dismissIcon, e && r] });
                        case h.D.Expand:
                            return n.createElement(s.default, { style: e ? r : a });
                        case h.D.Active:
                            return n.createElement(c.default, { style: r });
                        default:
                            return null;
                    }
                }
                _renderAvatar() {
                    const { avatar: e, compact: t } = this.props;
                    return e ? n.createElement(r.Z, { style: [y.avatarContainer, t ? y.avatarCompact : y.avatar] }, e) : null;
                }
            }
            b.defaultProps = { compact: !1, disabled: !1, selected: !1 };
            const y = p.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", flexDirection: "row", minHeight: e.spaces.space40, overflow: "hidden" }, content: { alignItems: "center", flexDirection: "row", flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space16 }, text: { width: "100%" }, compact: { minHeight: e.spaces.space32 }, disabled: { borderColor: e.colors.gray50 }, selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary }, avatar: { height: e.spaces.space32, width: e.spaces.space32 }, avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 }, avatarContainer: { justifyContent: "center", marginEnd: e.spaces.space8 }, withAvatarImage: { paddingStart: `calc(${e.spaces.space2} * 2)` }, withAvatarImageCompact: { paddingStart: `calc(${e.spaces.space1} * 3)` }, icon: { color: e.colors.primary, flexShrink: 0, marginStart: e.spaces.space12 }, iconSelected: { color: e.colors.whiteOnColor }, withIcon: { paddingEnd: e.spaces.space12 }, dismissIcon: { color: e.colors.gray300 }, secondaryControl: { flexShrink: 0, justifyContent: "center" }, secondaryBorder: { borderStartColor: e.colors.borderColor, borderStartWidth: e.borderWidths.small, paddingHorizontal: e.spaces.space12 } })),
                w = b;
        },
        599190: (e, t, o) => {
            o.d(t, { D: () => n });
            const n = Object.freeze({ Active: "active", Expand: "expand", Remove: "remove" });
        },
        537439: (e, t, o) => {
            o.d(t, { Z: () => N });
            var n = o(202784),
                r = o(111677),
                a = o.n(r),
                l = o(492140),
                i = o(720600),
                s = o(761744),
                c = o(25001),
                d = o(453333),
                u = o(136483),
                m = o(98440),
                p = o(790093),
                h = o(452693),
                f = o(544367),
                b = o(264171),
                y = o(159340),
                w = o(404971),
                g = o(262009),
                C = o(76388),
                v = o(488746),
                x = o(246492),
                S = o(520913),
                E = o(731708),
                F = o(642153),
                T = o(879891),
                k = o(392237),
                B = o(54606);
            const Z = a().ae408b76,
                I = a().j355f008,
                L = a().habf9678,
                _ = a().db0798ed,
                R = a().dc716ec9,
                D = ({ text: e }) => {
                    const { direction: t } = (0, T.Z)();
                    return n.createElement(E.ZP, { dir: t, withHashflags: !0 }, e);
                },
                P = (e, t) =>
                    t
                        ? Z
                        : ((e) => {
                              const t = n.createElement(D, { text: e });
                              return n.createElement(a().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                H = k.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                M = k.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                N = ({ contextType: e, iconColor: t, iconSize: o, link: r, retweetData: a, text: E, topicData: T, userAvatarUrls: Z }) => {
                    const { isSelfRetweet: N, name: z, screenName: W } = a || {},
                        U = ((e, t, o, r = []) => {
                            const a = H[t],
                                E = [o ? { color: k.default.theme.colors[o] } : M.colorDeepGray, a],
                                T = n.createElement(l.default, { style: E }),
                                Z = n.createElement(i.default, { style: E }),
                                I = n.createElement(s.default, { style: E }),
                                L = n.createElement(c.default, { style: E }),
                                _ = n.createElement(d.default, { style: E }),
                                R = n.createElement(u.default, { style: M.circle }),
                                D = n.createElement(m.default, { style: E }),
                                P = n.createElement(p.default, { style: E }),
                                N = n.createElement(h.default, { style: E }),
                                z = n.createElement(f.default, { style: E }),
                                W = n.createElement(b.default, { style: E }),
                                U = n.createElement(y.default, { style: E }),
                                Q = n.createElement(w.default, { style: E }),
                                O = n.createElement(g.default, { style: E }),
                                A = n.createElement(C.default, { style: E }),
                                j = n.createElement(v.default, { style: E }),
                                G = n.createElement(x.default, { style: E }),
                                $ = n.createElement(F.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: r }),
                                V = n.createElement(S.default, { style: E });
                            switch (e) {
                                case B.Q.Pin:
                                case B.Q.ReplyPin:
                                    return T;
                                case B.Q.Retweet:
                                    return Z;
                                case B.Q.Like:
                                    return I;
                                case B.Q.Follow:
                                    return L;
                                case B.Q.Moment:
                                    return _;
                                case B.Q.NewTweets:
                                    return R;
                                case B.Q.Reply:
                                case B.Q.Conversation:
                                    return D;
                                case B.Q.Feedback:
                                    return P;
                                case B.Q.Topic:
                                    return N;
                                case B.Q.List:
                                    return z;
                                case B.Q.Location:
                                    return W;
                                case B.Q.Community:
                                    return U;
                                case B.Q.Spaces:
                                    return Q;
                                case B.Q.Sparkle:
                                    return O;
                                case B.Q.SocialProof:
                                case B.Q.FollowFollowed:
                                    return G;
                                case B.Q.FollowMutual:
                                    return j;
                                case B.Q.FollowFollowing:
                                    return A;
                                case B.Q.Facepile:
                                    return $;
                                case B.Q.Bird:
                                    return V;
                                case B.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, o, t, Z);
                    switch (e) {
                        case B.Q.Retweet:
                            return { Icon: U, text: E || P(z, N), link: W ? `https://twitter.com/${W}` : void 0 };
                        case B.Q.Pin:
                            return { Icon: U, text: E || I };
                        case B.Q.ReplyPin:
                            return { Icon: U, text: L };
                        case B.Q.Topic:
                            return { Icon: U, "aria-label": "Recommendation" === T?.functionalityType || "RecWithEducation" === T?.functionalityType ? R({ topicName: E }) : _({ topicName: E }), text: E ? n.createElement(D, { text: E }) : null, link: r };
                        default:
                            return { Icon: U, text: E ? n.createElement(D, { text: E }) : null, link: r };
                    }
                };
        },
        126962: (e, t, o) => {
            o.d(t, { Z: () => f });
            o(136728);
            var n = o(202784),
                r = o(325686),
                a = o(731708),
                l = o(872405),
                i = o(235902),
                s = o(392237),
                c = o(139052),
                d = o(488684),
                u = o(537439),
                m = o(54606);
            class p extends n.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: o, id: s, onLayout: c, rightControl: d, style: m, testID: p, textColor: f, textSize: b, topControl: y, weight: w, withBottomBorder: g, withLeftPadding: C, withTextCentered: v, ...x } = this.props,
                        { Icon: S, "aria-label": E, link: F, text: T } = (0, u.Z)(x),
                        k = n.createElement(a.ZP, { "aria-label": E, color: f, id: s, numberOfLines: 2, size: b, testID: p, weight: w, withoutTwemojiAndHashflags: !0 }, T),
                        { cellStyle: B, viewStyle: Z } = this._getStyles();
                    return T ? n.createElement(i.ZP.UseProps, null, (a) => n.createElement(n.Fragment, null, y || null, n.createElement(r.Z, { onLayout: c, style: [m, Z, a.socialContextRefreshEnabled() && !C && h.socialContextRefresh] }, n.createElement(l.Z, { avatarCell: S || (C ? null : void 0), avatarCellStyle: [o, h.socialContextIconColumn, !C && h.unsetIconWidth, a.socialContextRefreshEnabled() && !C && h.socialContextRefreshIcon], avatarSize: e, cellStyle: B }, n.createElement(r.Z, { style: h.cellWrapper }, n.createElement(r.Z, { style: [h.socialContextTextColumn, a.socialContextRefreshEnabled() && !C && h.socialContextRefreshTextColumn] }, F ? this._renderLink(F, k) : k), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: o, id: r, onClick: l, retweetData: i, textColor: s, topicData: u } = this.props,
                        { screenName: p } = i || {},
                        h = n.createElement(a.ZP, { color: s, id: r, link: e, onClick: l, withoutTwemojiAndHashflags: !0 }, t);
                    return o === m.Q.Topic && u ? n.createElement(c.Z, { topicId: u.topicId }, h) : o === m.Q.Retweet && p ? n.createElement(d.Z, { screenName: p }, h) : h;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: o, withTextCentered: n } = this.props,
                        r = t === m.Q.TextOnly,
                        a = o ? [h.bottomBorderMargin, !!e && h.bottomBorder] : [],
                        l = o && !e ? [h.bottomBorder] : [];
                    return r && l.push(h.topicContext), n && l.push(h.socialContextTextCentered), { viewStyle: a, cellStyle: l };
                }
            }
            p.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const h = s.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                f = p;
        },
        54606: (e, t, o) => {
            o.d(t, { Q: () => n });
            o(202784);
            const n = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, o) => {
            o.d(t, { Z: () => h });
            var n = o(807896),
                r = o(202784),
                a = o(325686),
                l = o(215337),
                i = o(392237),
                s = o(977220);
            const c = (e) => `${e}%`,
                d = i.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: c(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: c(-80) }] } } } }));
            function u() {
                const e = (0, s.ai)();
                return r.createElement("defs", null, r.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: m, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, r.createElement("stop", { stopColor: e.primary }), r.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const m = "space-gradient";
            u.fill = `url(#${m})`;
            const p = {
                    Default: function ({ children: e, style: t, type: o = "audiospace" }) {
                        return r.createElement(
                            l.Z,
                            (0, n.Z)(
                                {},
                                (function (e) {
                                    const t = (0, s.ai)(e);
                                    return { ...(0, s.Cs)(), colors: [t.primary, t.secondary], locations: [-0.1505, 1.0496] };
                                })(o),
                                { style: t },
                            ),
                            e,
                        );
                    },
                    Animated: function (e) {
                        return r.createElement(
                            a.Z,
                            { style: [d.container, e.style] },
                            r.createElement(
                                l.Z,
                                (0, n.Z)(
                                    {},
                                    (function () {
                                        const e = (0, s.ai)();
                                        return { ...(0, s.Cs)(), colors: [e.primary, e.secondary, e.primary, e.secondary, e.primary], locations: [0.16, 0.24, 0.54, 0.62, 0.88] };
                                    })(),
                                    { style: d.animate },
                                ),
                                e.children,
                            ),
                        );
                    },
                    SVGLinearGradient: u,
                    getColors: s.ai,
                    getDarkModeColors: s.K,
                },
                h = Object.freeze(p);
        },
        977220: (e, t, o) => {
            o.d(t, { Cs: () => d, K: () => i, ai: () => s });
            var n = o(465233),
                r = o(483054),
                a = o(295559),
                l = o(392237);
            function i(e = "audiospace") {
                return l.default.theme.highContrastEnabled ? m(u.HighContrast[e]) : m(u.Default[e]);
            }
            function s(e = "audiospace") {
                return l.default.theme.highContrastEnabled ? u.HighContrast[e] : u.Default[e];
            }
            const c = { angle: 61.63, angleUnit: "deg" };
            function d() {
                return (0, n.Z)(c);
            }
            const u = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function m(e) {
                return { primary: p(e.primary), secondary: p(e.secondary) };
            }
            function p(e) {
                const t = a.xO(e),
                    o = r.$n({ color: t, coefficient: 0.5 });
                return a.vq(a.rb(o)).slice(0, -2);
            }
        },
        305098: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(807896),
                r = o(202784),
                a = o(325686),
                l = o(154003),
                i = o(190286),
                s = o(466792);
            Object.freeze({ iconText: "icon-text", onlyIcon: "only-icon", onlyText: "only-text" });
            class c extends r.Component {
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
                            const { customButtonBackgroundColor: o, customButtonBorderColor: n, customButtonColor: r, customButtonHoverBackgroundColor: a, customButtonHoverBorderColor: l, customButtonHoverColor: i } = t,
                                s = { color: r, backgroundColor: o, borderColor: n };
                            return e && ((s.color = i || r), (s.backgroundColor = a || o), (s.borderColor = l || n)), s;
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
                    const { "aria-describedby": e, "aria-label": t, buttonDefaultLabel: o, buttonHoverLabel: c, buttonHoverType: d, buttonType: u, confirmationSheetCancelLabel: m, confirmationSheetConfirmLabel: p, confirmationSheetHeadline: h, confirmationSheetPrimaryButtonType: f, confirmationSheetText: b, disabled: y, displayMode: w, icon: g, id: C, onHoverOut: v, size: x, style: S, testID: E } = this.props,
                        F = [S, { minWidth: this._minWidth }];
                    return r.createElement(
                        a.Z,
                        { ref: this._setContainerRef, style: F },
                        r.createElement(s.Z, { onHoverIn: this._handleHoverIn, onHoverOut: v }, ({ isHovered: a }) => {
                            const i = a ? c : o,
                                s = a && d ? d : u,
                                m = this._getCustomButtonProps(a);
                            return r.createElement(l.ZP, (0, n.Z)({ "aria-describedby": e, "aria-label": "only-icon" === w ? i : t, disabled: y, icon: "only-text" !== w ? g : void 0, id: C, onPress: this._handleButtonPress, ref: this._setButtonRef, size: x, testID: E, type: s }, m), "only-icon" === w ? void 0 : i);
                        }),
                        this.state.showConfirmation ? r.createElement(i.Z, { cancelButtonLabel: m, confirmButtonLabel: p, confirmButtonType: f, headline: h, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: b }) : null,
                    );
                }
            }
            c.defaultProps = { showRelationshipChangeConfirmation: !1 };
            const d = c;
        },
        433460: (e, t, o) => {
            o.d(t, { Z: () => h });
            var n = o(807896),
                r = o(202784),
                a = o(325686),
                l = o(111677),
                i = o.n(l),
                s = o(404971),
                c = o(868634),
                d = o(336373),
                u = o(181054),
                m = o(392237),
                p = o(823161);
            const h = function (e) {
                const t = d.Z.useAnalytics(),
                    [o, a] = r.useState(),
                    l = !!(o && o > 70),
                    { "aria-label": i, presenceRingType: s, spaceId: c, ...m } = e,
                    h =
                        i ||
                        (function (e, t) {
                            switch (e) {
                                case "audiospace":
                                    return w.activeAudioSpace({ screenName: t });
                                case "livevideo":
                                    return w.activeLiveVideo({ screenName: t });
                                default:
                                    return;
                            }
                        })(s, e.screenName);
                r.useEffect(() => {
                    switch (s) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [t, s]);
                const b = r.useCallback((e) => r.createElement(u.Z.Default, (0, n.Z)({}, e, { type: s })), [s]);
                return r.createElement(
                    p.default,
                    (0, n.Z)({}, m, {
                        BorderComponent: b,
                        "aria-label": h,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== o && a(t.width);
                            }
                        },
                        borderWidth: l ? "large" : "medium",
                        decoration: r.createElement(f, { isWide: l, type: s }),
                        gapWidth: l ? "space4" : "space2",
                        onClick: function () {
                            switch (s) {
                                case "audiospace":
                                    t.scribe({ action: "click", element: "audiospace_ring" });
                                    break;
                                case "livevideo":
                                    t.scribe({ action: "click", element: "livevideo_ring" });
                            }
                        },
                        withLink: !0,
                    }),
                );
            };
            function f(e) {
                switch (e.type) {
                    case "audiospace":
                    case "livevideo":
                        return r.createElement(b, e);
                    default:
                        return null;
                }
            }
            function b(e) {
                return "livevideo" === e.type ? r.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [y.liveVideoLabelContainer, y.borderNarrow, e.isWide ? y.liveVideoLabel : y.liveVideoLabelNarrow], type: "live" }) : r.createElement(a.Z, { style: [y.root, e.isWide ? y.rootWide : y.rootNarrow] }, r.createElement(u.Z.Default, { style: [y.spaceGradient, e.isWide ? y.borderWide : y.borderNarrow] }, r.createElement(s.default, { style: y.spaceIcon })));
            }
            const y = m.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        o = "100%",
                        n = e.spacesPx.space4,
                        r = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * n, bottom: -1 * n }, rootNarrow: { end: -1 * r, bottom: -1 * r }, borderWide: { borderWidth: n }, borderNarrow: { borderWidth: r }, spaceGradient: { justifyContent: "center", width: o, height: o, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                w = { withoutUsernameFallback: i().b3688156, activeAudioSpace: i().c0eb8825, activeLiveVideo: i().d068dc6d };
        },
        238406: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(731708),
                a = o(354149),
                l = o(310452),
                i = o(720283);
            const s = ({ animateIn: e, description: t, entities: o, isConcise: s, style: c, testID: d, userId: u, withheldDescription: m, withheldEntities: p }) => {
                const { description: h, entities: f } = (0, i.H)({ description: t, entities: o, withheldDescription: m, withheldEntities: p }),
                    b = l.ZP.descriptionTextParts(h, f);
                return b.length
                    ? n.createElement(
                          r.ZP,
                          { dir: "auto", numberOfLines: s ? 2 : void 0, style: c, testID: d },
                          b.map((t, o) => n.createElement(a.ZP, { animateIn: e, key: `user_${u}_textpart_${o}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, o) => {
            o.d(t, { H: () => n });
            const n = ({ description: e, entities: t, withheldDescription: o, withheldEntities: n }) => (o ? { description: o, entities: n } : { description: e, entities: t });
        },
        790093: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                l = o(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                l = o(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-bc6ccf4c.0d9d921a.js.map
