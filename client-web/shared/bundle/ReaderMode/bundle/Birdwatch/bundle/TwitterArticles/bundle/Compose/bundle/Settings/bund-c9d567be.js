"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"],
    {
        495232: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(202784);
            const o = {
                getEducationType: (e, t) => {
                    switch (e) {
                        case "followers":
                            return t ? "conversationControlsFollowersCanEngage" : "conversationControlsFollowersCannotEngage";
                        case "community":
                            return t ? "conversationControlsCommunityCanEngage" : "conversationControlsCommunityCannotEngage";
                        case "by_invitation":
                            return t ? "conversationControlsByInvitationCanEngage" : "conversationControlsByInvitationCannotEngage";
                        case "subscribers":
                            return t ? "conversationControlsSubscribersCanEngage" : "conversationControlsSubscribersCannotEngage";
                        case "community_hidden_tweet":
                            return "communityHiddenTweetEducation";
                        case "community_tweet_member_removed":
                            return "communityRemovedMemberEducation";
                        case "verified":
                            return t ? "conversationControlsVerifiedCanEngage" : "conversationControlsVerifiedCannotEngage";
                        default:
                            return;
                    }
                },
            };
        },
        696591: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(325686),
                l = n(2138),
                i = n(731708),
                a = n(666305),
                s = n(392237);
            const c = o.memo(({ align: e = "center", equiTextTestID: t, ...n }) => {
                const s = o.useRef(null),
                    c = o.useCallback((e) => {
                        s.current = e;
                    }, []);
                return (
                    (function (e) {
                        o.useEffect(() => {
                            const t = e.current,
                                n = e.current?.parentElement?.parentElement;
                            if (!t || !n) return;
                            let o = 0,
                                r = 0;
                            function i() {
                                a.Z.unobserveAll(t),
                                    (function (e) {
                                        e.style.width = "";
                                        try {
                                            const { height: t } = e.getBoundingClientRect();
                                            let n = e.offsetWidth,
                                                o = n / 2;
                                            e.style.width = `${o}px`;
                                            const { height: r } = e.getBoundingClientRect();
                                            if (r === t) return void (e.style.width = "");
                                            for (let r = 0; r < 15; ++r) {
                                                const r = (n + o) / 2;
                                                e.style.width = `${r}px`;
                                                const { height: l } = e.getBoundingClientRect();
                                                if ((l === t ? (n = r) : (o = r), n - o < 1)) return void (e.style.width = `${Math.ceil(n) + 1}px`);
                                            }
                                            e.style.width = "";
                                        } catch {
                                            e.style.width = "";
                                        }
                                    })(t),
                                    u(t, () => {
                                        window.cancelAnimationFrame(o),
                                            (o = requestAnimationFrame(() => {
                                                s();
                                            }));
                                    });
                            }
                            const s = (0, l.Z)(i, 100);
                            return (
                                s(),
                                u(n, () => {
                                    window.cancelAnimationFrame(r),
                                        (r = requestAnimationFrame(() => {
                                            s();
                                        }));
                                }),
                                () => {
                                    a.Z.unobserveAll(t), a.Z.unobserveAll(n), window.cancelAnimationFrame(o), window.cancelAnimationFrame(r), s.cancel();
                                }
                            );
                        }, [e]);
                    })(s),
                    o.createElement(r.Z, { style: "center" === e ? d.centerElement : null, testID: t }, o.createElement(r.Z, { ref: c }, o.createElement(i.ZP, n)))
                );
            });
            const d = s.default.create((e) => ({ centerElement: { alignItems: "center" } }));
            function u(e, t) {
                let n = !1;
                a.Z.observe(e, () => {
                    if (n) return t();
                    n = !0;
                });
            }
        },
        723587: (e, t, n) => {
            n.d(t, { Z: () => me });
            var o = n(202784),
                r = n(614983),
                l = n.n(r),
                i = n(111677),
                a = n.n(i),
                s = n(516951),
                c = n(616894),
                d = n(235902),
                u = n(305098);
            const m = a().i8cfb6e6,
                p = a().ea100d6a,
                f = a().fe40537f,
                h = a().ab7c3460,
                b = a().i58d8718,
                g = o.createElement(c.default, null),
                w = ({ disabled: e, displayMode: t, onUnblock: n, showRelationshipChangeConfirmation: r, size: l, style: i, testID: a, userScreenName: s }) => o.createElement(u.Z, { buttonDefaultLabel: m, buttonHoverLabel: p, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: p, confirmationSheetHeadline: f({ screenName: s }), confirmationSheetText: d.ZP.useProps().isSoftBlockEnabled() ? b : h, disabled: e, displayMode: t, icon: g, onClick: n, showRelationshipChangeConfirmation: r, size: l, style: i, testID: a });
            var y = n(466999),
                C = n(76388),
                S = n(911373),
                k = n(733357),
                D = n(352924),
                E = n(392237);
            const v = a().ee05e96b,
                F = a().f238ba1d,
                T = a().aeb6f0a0,
                x = a().a77a27c0,
                I = a().b4397192,
                $ = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                Z = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                P = E.default.create((e) => ({ hidden: { display: "none" } })),
                z = ({ "aria-describedby": e, buttonType: t, disabled: n, displayMode: r, id: l, isSuperFollowEligible: i, isSuperFollowing: a, isTransparent: s, name: c, onSuperFollow: d, onUnSuperFollow: m, size: p, style: f, testID: h }) => {
                    const b = o.useCallback(() => {
                            a ? m() : i && d();
                        }, [i, a, d, m]),
                        g = void 0 !== c ? `@${String(c)}` : "",
                        w = a ? x : T,
                        C = g.length > 0 && void 0 !== w ? F({ followType: w, screenName: g }) : "",
                        S = a ? I : T,
                        E = a ? Z(s) : t ? void 0 : $(s),
                        z = o.useMemo(() => (void 0 !== e ? e : (0, D.F)()), [e]),
                        _ = o.useCallback(() => {
                            const e = a ? x : i ? v({ followType: T, screenName: c }) : null;
                            return e && !(0, k.Z)(e) ? o.createElement(y.Z, { id: z, style: P.hidden }, e) : null;
                        }, [a, i, z, c]);
                    return o.createElement(o.Fragment, null, o.createElement(u.Z, { "aria-describedby": z, "aria-label": C, buttonDefaultLabel: w, buttonHoverLabel: S, buttonType: t, customButtonConfig: E, disabled: n, displayMode: r, id: l, onClick: b, size: p, style: f, testID: h }), void 0 === e ? _() : null);
                },
                _ = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                B = a().cda66545,
                L = a().ee05e96b,
                M = a().a8d77a25,
                H = a().d0f4f3d9,
                N = a().f238ba1d,
                R = a().j6161cab,
                U = a().i4bb9ef7,
                O = a().ge753264,
                W = a().b837c0e8,
                A = o.createElement(C.default, null),
                q = o.createElement(S.default, null),
                Q = a().ddac1f1d,
                j = a().j8e33c40;
            class J extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getDescribedById = () => {
                            const { "aria-describedby": e } = this.props;
                            return void 0 !== e ? e : (0, D.F)();
                        }),
                        (this._renderDescribedBy = (e, t) => {
                            const n = this._getDescribedByText();
                            return (0, k.Z)(n) ? null : o.createElement(y.Z, { id: e, style: { display: "none" } }, n);
                        }),
                        (this._getDescribedByText = () => {
                            const { buttonText: e, isFollowing: t, isSuperFollowEligible: n, isSuperFollowing: o, name: r, type: l } = this.props;
                            let i = "";
                            const a = void 0 === r ? "" : r;
                            switch (l) {
                                case _.user:
                                case _.topic:
                                case _.list:
                                    o && e.unSuperFollow ? (i = e.unSuperFollow) : t ? (i = n ? L({ followType: e.superFollow, screenName: a }) : B({ followType: e.unfollow, screenName: a })) : t || (i = B({ followType: e.follow, screenName: a }));
                                    break;
                                case _.community:
                                    i = t ? M({ screenName: a }) : B({ followType: e.follow, screenName: a });
                                    break;
                                case _.spaces:
                                    t ? (i = B({ followType: e.unfollow, screenName: a })) : t || (i = B({ followType: e.follow, screenName: a }));
                                    break;
                                default:
                                    i = "";
                            }
                            return i;
                        }),
                        (this._getText = () => {
                            const { buttonText: e, name: t, type: n } = this.props,
                                o = void 0 !== t ? t : "",
                                r = U({ title: t }),
                                l = { [_.user]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: R({ screenName: t }), confirmationSheetText: O }, [_.topic]: { ariaFollowName: o, confirmationHeadline: r, confirmationSheetText: W }, [_.list]: { ariaFollowName: o, confirmationHeadline: r, confirmationSheetText: void 0 }, [_.community]: { ariaFollowName: o, confirmationHeadline: Q({ communityName: t }), confirmationSheetText: j }, [_.spaces]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: R({ screenName: t }), confirmationSheetText: O } };
                            return { ariaFollowName: l[n].ariaFollowName, followLabel: e.follow, followBackLabel: e.followBack, followingLabel: e.following, unfollowLabel: e.unfollow, superFollowLabel: e.superFollow, superFollowingLabel: e.superFollowing, unSuperFollowLabel: e.unSuperFollow, confirmationHeadline: e.confirmationHeadline || l[n].confirmationHeadline, confirmationSheetText: e.confirmationSheetText || l[n].confirmationSheetText };
                        }),
                        (this._handlePress = () => {
                            const { isFollowing: e, isSuperFollowEligible: t, isSuperFollowing: n, onFollow: o, onSuperFollow: r, onUnSuperFollow: l, onUnfollow: i } = this.props;
                            n ? l() : e ? (t ? r() : i()) : (o(), this.setState({ hasJustFollowed: !0 }));
                        }),
                        (this._handleHoverOut = () => {
                            this.state.hasJustFollowed && this.setState({ hasJustFollowed: !1 });
                        }),
                        (this.state = { hasJustFollowed: !1 });
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, disabled: n, displayMode: r, id: l, isFollowed: i, isFollowing: a, isSuperFollowEligible: s, isSuperFollowing: c, isTransparent: d, showRelationshipChangeConfirmation: m, size: p, style: f, testID: h, type: b, withConfirmationSheetText: g } = this.props,
                        { ariaFollowName: w, confirmationHeadline: y, confirmationSheetText: C, followBackLabel: S, followLabel: k, followingLabel: D, superFollowLabel: E, superFollowingLabel: v, unSuperFollowLabel: F, unfollowLabel: T } = this._getText(),
                        { hasJustFollowed: x } = this.state,
                        I = (t && t.followIcon) || q,
                        P = (t && t.followingIcon) || A,
                        z = "only-text" !== r ? (a ? P : I) : void 0;
                    let B = a ? D : k;
                    i && !a && S && (B = S);
                    let L = H;
                    (c || (a && s)) && (c && v ? ((L = N), (B = v)) : s && E && ((L = N), (B = E)));
                    const M = w.length > 0 && void 0 !== B ? L({ followType: B, screenName: w }) : "",
                        R = "primaryFilled";
                    let U, O, W, Q;
                    const j = d ? "brandText" : R,
                        J = d ? "destructiveText" : "destructiveOutlined",
                        V = !c && (!a || !s) && a,
                        K = a ? "onMediaWhiteFilled" : "onMediaOutlined",
                        G = a ? "onMediaOutlined" : "onMediaWhiteFilled";
                    b === _.community ? (U = a ? T : k) : b === _.spaces ? ((U = a ? T : k), (O = K), (W = G)) : c && F ? ((Q = Z(d)), (U = F)) : a ? ((U = x ? D : T), (O = x ? j : J), (W = d ? "brandText" : "primaryOutlined"), s && E && ((Q = $(d)), (U = E), (W = void 0), (O = void 0))) : ((U = i && S ? S : k), (O = d ? "brandText" : R), (W = d ? "brandText" : R));
                    const X = this._getDescribedById();
                    return o.createElement(o.Fragment, null, o.createElement(u.Z, { "aria-describedby": X, "aria-label": M, buttonDefaultLabel: B, buttonHoverLabel: U, buttonHoverType: O, buttonType: W, confirmationSheetConfirmLabel: T, confirmationSheetHeadline: y, confirmationSheetText: g ? C : void 0, customButtonConfig: Q, disabled: n, displayMode: r, icon: z, id: l, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: V && m, size: p, style: f, testID: h }), void 0 === e ? this._renderDescribedBy(X) : null);
                }
            }
            const V = J;
            var K = n(311687);
            const G = a().f305840e,
                X = a().e23b20a0,
                Y = a().fe04d89a,
                ee = a().i036327c,
                te = a().j95e3097,
                ne = o.createElement(K.default, null),
                oe = ({ disabled: e, displayMode: t, onCancelPendingFollow: n, showRelationshipChangeConfirmation: r, size: l, style: i, testID: a, userScreenName: s }) => o.createElement(u.Z, { buttonDefaultLabel: G, buttonHoverLabel: X, buttonType: "primaryOutlined", confirmationSheetCancelLabel: X, confirmationSheetConfirmLabel: Y, confirmationSheetHeadline: ee, confirmationSheetText: te({ screenName: s }), disabled: e, displayMode: t, icon: ne, onClick: n, showRelationshipChangeConfirmation: r, size: l, style: i, testID: a }),
                re = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                le = a().ec72e2f8,
                ie = a().a5f7ce12,
                ae = a().c3befdbe,
                se = a().d3029dbc,
                ce = a().aeb6f0a0,
                de = a().a77a27c0,
                ue = a().b4397192;
            class me extends o.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, buttonText: n, buttonType: r, disabled: l, displayMode: i, id: a, isBlocking: s, isFollowRequestSent: c, isFollowed: d, isFollowing: u, isSuperFollowEligible: m, isSuperFollowing: p, isTransparent: f, name: h, onCancelPendingFollow: b, onFollow: g, onSuperFollow: y, onUnSuperFollow: C, onUnblock: S, onUnfollow: k, relationshipMode: D, showRelationshipChangeConfirmation: E, size: v, style: F, testIDs: T, type: x, withConfirmationSheetText: I } = this.props,
                        $ = s,
                        Z = c,
                        P = D === re.subscribe && (m || p);
                    return $ ? o.createElement(w, { disabled: l, displayMode: i, onUnblock: S, showRelationshipChangeConfirmation: E, size: v, style: F, testID: T?.unblock, userScreenName: h }) : Z ? o.createElement(oe, { disabled: l, displayMode: i, onCancelPendingFollow: b, showRelationshipChangeConfirmation: E, size: v, style: F, testID: T?.cancel, userScreenName: h }) : P ? o.createElement(z, { "aria-describedby": e, buttonType: r, disabled: l, displayMode: i, id: a, isSuperFollowEligible: m, isSuperFollowing: p, isTransparent: f, name: h, onSuperFollow: y, onUnSuperFollow: C, size: v, style: F, testID: p ? T?.manageSubscription : T?.subscribe }) : o.createElement(V, { "aria-describedby": e, buttonIcons: t, buttonText: n, disabled: l, displayMode: i, id: a, isFollowed: d, isFollowing: u, isSuperFollowEligible: m, isSuperFollowing: p, isTransparent: f, name: h, onFollow: g, onSuperFollow: y, onUnSuperFollow: C, onUnfollow: k, showRelationshipChangeConfirmation: E, size: v, style: F, testID: u ? T?.unfollow : T?.follow, type: x, withConfirmationSheetText: I });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: t } = this.props,
                        n = t && "string" == typeof e,
                        o = !t;
                    l()(n || o, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            me.defaultProps = { buttonText: { follow: le, followBack: ie, following: ae, unfollow: se, superFollow: ce, superFollowing: de, unSuperFollow: ue }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: s.Z, onSuperFollow: s.Z, onUnblock: s.Z, onUnSuperFollow: s.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
        254554: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                r = n(325686),
                l = n(731708),
                i = n(879891);
            const a = n(392237).default.create((e) => ({ root: { flexDirection: "row", backgroundColor: e.colors.navigationBackground, borderStyle: "solid", borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.large, borderColor: e.colors.gray50, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, justifyContent: "space-between" }, containerDown: { marginTop: e.spaces.space12 }, containerUp: { marginTop: e.spaces.space20 }, text: { flexShrink: 1, alignSelf: "center", alignItems: "flex-start" }, actionsContainer: { flexDirection: "row", alignItems: "center", marginStart: e.spaces.space12 }, arrowContainer: { position: "absolute", display: "flex", width: "100%", alignItems: "center" }, arrowDirectionUp: { top: `calc(-${e.spaces.space8} + ${e.spaces.space1})` }, arrowDirectionDown: { bottom: `calc(-${e.spaces.space8} + ${e.spaces.space1})` }, arrow: { borderStyle: "solid", borderTopWidth: 0, borderEndWidth: e.spaces.space1, borderBottomWidth: e.spaces.space1, borderStartWidth: 0, borderColor: e.colors.gray50, width: e.spaces.space12, height: e.spaces.space12, backgroundColor: e.colors.navigationBackground } })),
                s = ({ containerRef: e, primaryAction: t, secondaryAction: n, text: s }) => {
                    const [c, d] = o.useState(void 0),
                        { direction: u } = (0, i.Z)(),
                        m = "rtl" === u,
                        p = o.useRef(0),
                        f = o.useRef(0),
                        h = (() => {
                            if (e?.current && c) {
                                const { left: t, top: n, width: o } = e.current.getBoundingClientRect();
                                p.current = n;
                                const r = t + o / 2 - c;
                                return { start: m ? void 0 : r, end: m ? r : void 0 };
                            }
                        })(),
                        b = f.current < p.current,
                        g = b ? [a.arrowDirectionDown] : [a.arrowDirectionUp],
                        w = b ? (m ? { transform: [{ rotate: "-45deg" }] } : { transform: [{ rotate: "45deg" }] }) : m ? { transform: [{ rotate: "135deg" }] } : { transform: [{ rotate: "-135deg" }] },
                        y = b ? [a.containerDown] : [a.containerUp];
                    return o.createElement(
                        r.Z,
                        {
                            onLayout: (e) => {
                                const {
                                    nativeEvent: {
                                        layout: { left: t, top: n, width: o },
                                    },
                                } = e;
                                f.current = n;
                                d(t + o / 2);
                            },
                            role: "text",
                            style: [a.root, y],
                        },
                        e?.current ? o.createElement(r.Z, { style: [g, a.arrowContainer, h] }, o.createElement(r.Z, { style: [a.arrow, w] })) : null,
                        o.createElement(l.ZP, { style: a.text }, s),
                        o.createElement(r.Z, { style: a.actionsContainer }, t, n),
                    );
                };
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(202784),
                r = n(325686),
                l = n(111677),
                i = n.n(l),
                a = n(815858),
                s = n(731708),
                c = n(642153),
                d = n(530732),
                u = n(392237);
            const m = i().a35a5b10,
                p = i().fc8cd112,
                f = (e) => o.createElement(s.ZP, null, e);
            class h extends o.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: l, userScreenName: i, withFacepile: u } = this.props,
                        p = this._renderMessage();
                    return o.createElement(a.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? o.createElement(d.Z, { "aria-label": m, interactiveStyles: null, link: i ? ((f = i), `/${f}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: a }) => o.createElement(r.Z, { style: b.content }, !e && u ? o.createElement(c.Z, { userAvatarUrls: t }) : null, o.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && b.message, (n || a) && !!i && b.underline, l] }, e && u ? o.createElement(c.Z, { style: b.inlineFacepile, userAvatarUrls: t }) : null, p))) : o.createElement(r.Z, { style: b.content }, o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, p)));
                    var f;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : p;
                }
                _renderOneUsername(e) {
                    return o.createElement(i().I18NFormatMessage, { $i18n: "c9e6167d" }, f(e[0]));
                }
                _renderTwoUsernames(e) {
                    return o.createElement(i().I18NFormatMessage, { $i18n: "ha91d1eb" }, f(e[0]), f(e[1]));
                }
                _renderThreeUsernames(e) {
                    return o.createElement(i().I18NFormatMessage, { $i18n: "f1069f9b" }, f(e[0]), f(e[1]), f(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return o.createElement(i().I18NFormatMessage, { $i18n: "e8404c1f" }, f(e[0]), f(e[1]), n);
                }
            }
            h.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const b = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        135904: (e, t, n) => {
            n.d(t, { c: () => l, n: () => r });
            var o = n(392237);
            const r = "longform-styles",
                l = `\n    .longform-header-one {\n        font-size: ${o.default.theme.fontSizes.title2};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${o.default.theme.fontSizes.title3};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title2};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: ${o.default.theme.spaces.space12};\n        margin-left: calc(${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${o.default.theme.spaces.space12} / 2);\n        margin-left: ${o.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${o.default.theme.spaces.space24} + ${o.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${o.default.theme.spaces.space2});\n        padding-left: calc(${o.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${o.default.theme.colors.gray900};\n        border-radius: ${o.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            n.d(t, { Z: () => C });
            n(136728);
            var o = n(202784),
                r = n(301503),
                l = n(325686),
                i = n(595088),
                a = n(516951),
                s = n(731708),
                c = n(779802),
                d = n(537392),
                u = n(989272),
                m = n(925873),
                p = n(202253),
                f = n(786475),
                h = n(392237),
                b = n(135904);
            const g = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: o.createElement(s.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: o.createElement(s.ZP, null) } },
                w = (0, i.Z)(g).reduce((e, [t, n]) => e.set(t, n), r.DefaultDraftBlockRenderMap);
            let y = !1;
            const C = o.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: i, paragraphFontSizeOverride: s } = e;
                    o.useEffect(() => {
                        y || (u.fH(b.c, b.n), (y = !0));
                    }, []);
                    const h = [(0, p.ez)(i, s), p.aF, p.RU];
                    e.disable_entityLinkDecorator || h.push((0, p.NA)(i, s));
                    const g = m.Z.initEditorState(n, { decorators: h });
                    let C = a.Z;
                    return (
                        t &&
                            (C = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        o.createElement(d.ZP, null, ({ containerWidth: e }) => o.createElement(l.Z, { style: S.fontFamily }, o.createElement(r.Editor, { blockRenderMap: w, blockRendererFn: C, blockStyleFn: (0, c.su)(f.Z.isNarrowScreenWidth(e)), editorState: g, onChange: a.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                S = h.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => E, Ak: () => I, KJ: () => C, LI: () => v, P7: () => b, PW: () => D, QF: () => g, Qm: () => y, Tr: () => F, b$: () => h, db: () => Z, et: () => k, fR: () => f, iH: () => T, lD: () => w, su: () => S, u4: () => $, wX: () => x });
            var o = n(202784),
                r = n(111677),
                l = n.n(r),
                i = n(394123),
                a = n(856661),
                s = n(69893),
                c = n(474761),
                d = n(428259),
                u = n(89085),
                m = n(630715),
                p = n(731708);
            const f = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                h = (e) => [
                    { buttonTestId: "btn-bold", Icon: i.default, key: f.bold, onPress: e(f.bold) },
                    { buttonTestId: "btn-italic", Icon: a.default, key: f.italic, onPress: e(f.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: f.strikethrough, onPress: e(f.strikethrough) },
                ],
                b = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                g = (e) => [{ buttonTestId: "btn-blockquote", Icon: c.default, key: b.blockquote, onPress: e(b.blockquote) }],
                w = (e) => [
                    { buttonTestId: "btn-ul", Icon: d.default, key: b.bulleted, onPress: e(b.bulleted) },
                    { buttonTestId: "btn-ol", Icon: u.default, key: b.numbered, onPress: e(b.numbered) },
                ],
                y = "LINK",
                C = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: y, onPress: e }],
                S = (e, t) => (n) => {
                    const o = (t) => (e ? `${t}-narrow` : t);
                    switch (n.getType()) {
                        case b.bulleted:
                            return o("longform-unordered-list-item");
                        case b.blockquote:
                            return o("longform-blockquote");
                        case b.header1:
                            return o("longform-header-one");
                        case b.header2:
                            return o("longform-header-two");
                        case b.numbered:
                            return o("longform-ordered-list-item");
                        case b.paragraph:
                            return o("longform-unstyled");
                        default:
                            return t?.(n) || "";
                    }
                },
                k = l().d5a48014,
                D = l().b92b6156,
                E = l().ec5ed598,
                v = ({ children: e, extendedWidth: t, size: n, weight: r }) => o.createElement(p.ZP, { extendedWidth: t, size: n, weight: r }, e),
                F = { blockType: b.paragraph, label: E, component: v({ size: "body", children: E }) },
                T = [{ blockType: b.header1, label: k, component: v({ size: "title1", extendedWidth: !0, children: k }) }, { blockType: b.header2, label: D, component: v({ size: "title3", weight: "heavy", children: D }) }, F],
                x = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                I = ["delete", "delete-word", "delete-to-start-of-line"],
                $ = "increase-text-size",
                Z = "decrease-text-size";
        },
        459667: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(325686),
                l = n(731708),
                i = n(952428),
                a = n(336373),
                s = n(392237);
            const c = (e, t) => ({ items: [{ id: t, post_pivot_details: { destination_url: e } }] });
            function d({ destinationUrl: e, element: t, Icon: n, entityId: s, getScribeData: d = c, isForQuoteTweet: m, label: p }) {
                const f = a.Z.useAnalytics();
                o.useEffect(() => {
                    f.scribe({ element: t, action: "impression", data: d(e, s) });
                }, [f, s, t, d, e]);
                const h = o.useCallback(
                    (n) => {
                        f.scribe({ element: t, action: "click", data: d(e, s) });
                    },
                    [f, t, d, e, s],
                );
                return o.createElement(o.Fragment, null, o.createElement(i.Z, { link: e, onPress: h, style: [u.pivotContainer, m && u.pivotQuoteTweetContainer], testID: t, withInteractiveStyling: !0, withOutsetFocusRing: !0 }, o.createElement(r.Z, { style: [u.headerContainer, m && u.headerQuoteTweetContainer] }, o.createElement(n, { style: u.icon }), o.createElement(l.ZP, { size: "subtext1", style: u.headerAppText, weight: "bold" }, p))));
            }
            const u = s.default.create((e) => ({ pivotContainer: { borderColor: e.colors.nestedBorderColor, borderRadius: e.borderRadii.xLarge, borderWidth: e.borderWidths.small, marginVertical: e.spaces.space8, flex: 1 }, pivotQuoteTweetContainer: { borderWidth: "none", backgroundColor: e.colors.gray700, borderRadius: "none", borderTopWidth: e.borderWidths.none }, headerContainer: { borderRadius: e.borderRadii.xLarge, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, alignItems: "center", display: "flex", flexDirection: "row", height: "100%", backgroundColor: "darker" === e.paletteName ? e.colors.gray0 : e.colors.hoverBlack }, headerAppText: { alignItems: "center", display: "flex", paddingVertical: e.spaces.space2, width: "100%" }, headerQuoteTweetContainer: { backgroundColor: e.colors.transparent }, arrowIcon: { color: e.colors.text, flexShrink: 0, paddingStart: e.spaces.space8, marginTop: "0.25rem" }, icon: { color: e.colors.text, flexShrink: 0, marginTop: "0.1rem", height: "1.75em", marginEnd: e.spacesPx.space8 } }));
        },
        32471: (e, t, n) => {
            n.d(t, { Z: () => w });
            var o = n(202784),
                r = n(325686),
                l = n(530732),
                i = n(111677),
                a = n.n(i),
                s = n(731708),
                c = n(966582),
                d = n(392237);
            const u = a().d7e50a66,
                m = "INDIRECT",
                p = "NO_SPONSORSHIP",
                f = "ISSUE";
            class h extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderDisclaimerDetails = () => {
                            const { onPoliticalSponsorWebsiteClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n, sponsorshipCandidate: r, sponsorshipOrganization: l, sponsorshipOrganizationWebsite: i, sponsorshipType: c } = t.adMetadataContainer ?? {},
                                d = i && n !== f ? o.createElement(s.ZP, { link: i, onClick: e }) : o.createElement(s.ZP, { color: "gray700", size: "subtext2" });
                            if (!l) return null;
                            const u = o.createElement(a().I18NFormatMessage, { $i18n: "e1e348dd" }, o.cloneElement(d, null, a().hdd29d51({ sponsorshipOrganization: l }))),
                                h = o.createElement(a().I18NFormatMessage, { $i18n: "c7dea0d1" }, o.cloneElement(d, null, a().b97f7079({ sponsorshipOrganization: l }))),
                                b = r ? o.createElement(a().I18NFormatMessage, { $i18n: "b5c2371b", sponsorshipCandidate: r }, o.cloneElement(d, null, a().b02627a9({ sponsorshipOrganization: l }))) : null;
                            return o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, n === f ? u : c === p ? h : c === m ? b : u);
                        }),
                        (this._renderLearnMoreLink = () => {
                            const { onPromotedDisclaimerLearnMoreClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n } = t.adMetadataContainer ?? {},
                                r = n === f ? "issue_ad" : "political_ad";
                            return o.createElement(s.ZP, { link: "https://business.twitter.com/en/help/ads-policies/ads-content-policies/political-content/political-ads-disclosure.html", onClick: e?.(r), size: "subtext2", style: b.learnMore }, u);
                        });
                }
                render() {
                    const { promotedContent: e } = this.props;
                    if (!e.adMetadataContainer) return null;
                    const { disclaimerType: t } = e.adMetadataContainer,
                        n = c.Z.getDisclosureType(e);
                    return "POLITICAL" !== t && "ISSUE" !== t && "political" !== n && "issue" !== n ? null : o.createElement(o.Fragment, null, this._renderDisclaimerDetails(), this._renderLearnMoreLink());
                }
            }
            const b = d.default.create((e) => ({ learnMore: { alignSelf: "flex-start" } }));
            var g = n(378729);
            const w = function (e) {
                const { contentAuthorId: t, id: n, onPoliticalSponsorWebsiteClick: i, onPromotedDisclaimerLearnMoreClick: a, onPromotedIndicatorClick: s, promotedContent: d, promotedContentAdvertiser: u, screenName: m, style: p, testID: f, withoutDisclaimerDetails: b } = e;
                if (!c.Z.isPromoted(d)) return null;
                let w = null;
                return !b && d && (w = o.createElement(h, { contentAuthorId: t, onPoliticalSponsorWebsiteClick: i, onPromotedDisclaimerLearnMoreClick: a, promotedContent: d, screenName: m })), o.createElement(r.Z, { id: n, style: p, testID: f }, u && d ? o.createElement(l.Z, { interactiveStyles: null, link: { pathname: `https://twitter.com/${u.screen_name}`, state: { promotedTweetState: d } }, onPress: s }, o.createElement(g.Z, { contentAuthorId: t, promotedContent: d })) : !!d && o.createElement(g.Z, { contentAuthorId: t, promotedContent: d }), w);
            };
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => r, fH: () => i, w3: () => l });
            n(136728);
            var o = n(392237);
            const r = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function l(e) {
                i(
                    (function () {
                        const e = o.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${r.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${r.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${r.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    a,
                );
                const t = s(e);
                return (
                    i(
                        (function (e) {
                            const t = s(e);
                            let n = e.placeholderTextColor;
                            const r = e.contentHorizontalPadding;
                            n || (n = o.default.theme.colors.gray700);
                            return `\n    .${t} .public-DraftEditorPlaceholder-root {\n      color: ${n};\n    }\n\n    .${t} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${n};\n    }\n\n    ${r ? `\n        .${t} .public-DraftEditor-content,\n        .${t} .public-DraftEditorPlaceholder-root {\n          padding-left: ${r};\n          padding-right: ${r};\n        }\n      ` : ""}\n  `;
                        })(e),
                        t,
                    ),
                    t
                );
            }
            function i(e, t) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(t)
                ) {
                    const n = document.createElement("style");
                    n.setAttribute("id", t), (n.innerHTML = e);
                    const o = document.head;
                    o && o.insertBefore(n, o.firstChild);
                }
            }
            const a = "draftjs-styles";
            function s(e) {
                const t = (function (e) {
                    for (let t = 0; t < c.length; t++) {
                        if (c[t] === e) return String(t);
                    }
                    return c.push(e), String(c.length - 1);
                })(JSON.stringify(e));
                return `${a}_${t}`;
            }
            const c = [];
        },
        471754: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                r = n(487606),
                l = n(235902),
                i = n(459667);
            const a = (e, t) => ({ items: [{ id: t, similar_posts_pivot_details: { destination_url: e } }] });
            function s({ destinationUrl: e, isForQuoteTweet: t, label: n, tweetId: s }) {
                return l.ZP.useProps().showSimilarPostsPivotEnabled() ? o.createElement(i.Z, { Icon: r.default, destinationUrl: e, element: "similar_posts_pivot", entityId: s, getScribeData: a, isForQuoteTweet: t, label: n }) : null;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be.03d64dda.js.map
