"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ListHandler", "icons/IconDraggable-js"],
    {
        631449: (e, t, o) => {
            o.r(t), o.d(t, { default: () => I });
            var n = o(459643),
                i = o(942893),
                l = o(351322),
                a = o(807896),
                s = {
                    argumentDefinitions: [{ kind: "RootArgument", name: "isListMemberTargetUserId" }],
                    kind: "Fragment",
                    metadata: null,
                    name: "ListCell_timelineTwitterList",
                    selections: [
                        {
                            alias: null,
                            args: null,
                            concreteType: "List",
                            kind: "LinkedField",
                            name: "list",
                            plural: !1,
                            selections: [
                                { alias: "isMember", args: [{ kind: "Variable", name: "user_id", variableName: "isListMemberTargetUserId" }], kind: "ScalarField", name: "is_member", storageKey: null },
                                { args: null, kind: "FragmentSpread", name: "relayListCell_list" },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "TimelineTwitterList",
                    abstractKey: null,
                    hash: "7e7a19762022f1028b747f9ce5709ceb",
                };
            const r = s;
            var d = o(202784),
                c = (o(585488), o(277660)),
                u = o.n(c),
                m = o(952793),
                h = o(576469),
                p = o(281743),
                b = o(53821),
                f = o(668214),
                w = o(709318),
                g = o(38562),
                y = o(919022),
                C = o(510588);
            const v = (e, t) => (t.listId ? h.Z.select(e, t.listId) : void 0),
                S = (e, t) => {
                    const o = v(e, t),
                        n = o?.user;
                    return n ? y.ZP.select(e, n) : void 0;
                },
                F = (e, t) => C.tt(e, t.listId);
            const _ = (0, f.Z)().propsFromState(() => ({ list: v, author: S, dataSaverMode: g.IX, pinnedTimelinesCount: w.Hm, media: F }))(function (e) {
                    const { list: t, onClick: o } = e;
                    return t ? d.createElement(b.Z, { dataSaverMode: e.dataSaverMode, decoration: e.decoration, facepileUrls: t.facepile_urls, followersContext: t.followers_context, isFollowing: Boolean(t.following), isListPinned: t.pinning, isSelected: e.isMember, listId: t.id_str, listVisibility: t.mode, media: e.media, memberCount: t.member_count, membersContext: t.members_context, mode: e.mode, name: t.name, onClick: o, pinnedTimelinesCount: e.pinnedTimelinesCount, role: e.role, user: e.author, withBottomBorder: e.withBottomBorder, withSubscribe: e.withSubscribe }) : null;
                }),
                T = d.memo(_);
            var B = o(269950),
                k = o(379873);
            const Z = ({ entry: e, feedbackItems: t, module: o, renderEntry: n, shouldDisplayPin: i, ...l }) => {
                    const s = i ? B.H.Pinning : void 0;
                    return e.itemContentRef ? d.createElement(M, (0, a.Z)({}, l, { itemContentRef: e.itemContentRef, mode: s })) : d.createElement(E, (0, a.Z)({}, l, { itemContent: e.content, mode: s }));
                },
                x = d.memo(Z),
                L = r,
                M = ({ itemContentRef: e, shouldDisplayPin: t, ...o }) => {
                    const n = u()(L, e);
                    return d.createElement(k.ZP, (0, a.Z)({}, o, { isMember: n.list.isMember ?? void 0, listRef: n.list }));
                },
                E = ({ itemContent: e, mode: t, shouldDisplayPin: o, ...n }) => {
                    const i = (0, m.hC)("responsive_web_redux_use_fragment_enabled"),
                        l = d.useMemo(() => (0, p.D9)(k.Dx, h.Z, e.id), [e.id]);
                    return i ? d.createElement(k.ZP, (0, a.Z)({ isMember: e.isMember, listRef: l, mode: t }, n)) : d.createElement(T, (0, a.Z)({ isMember: e.isMember, listId: e.id, mode: t }, n));
                },
                I = (e) =>
                    l
                        .iH({
                            component: x,
                            isFocusable: (0, n.Z)(!0),
                            getScribeDataItem(e) {
                                const { id: t } = e.content;
                                return i.Z.forList(t);
                            },
                        })
                        .getHandler(() => ({ ...e }));
        },
        690344: (e, t, o) => {
            o.r(t), o.d(t, { default: () => K });
            var n = o(459643),
                i = o(942893),
                l = o(351322),
                a = o(202784),
                s = o(952793),
                r = o(576469),
                d = o(281743),
                c = o(325686),
                u = o(952428),
                m = o(731708),
                h = o(392237),
                p = o(111677),
                b = o.n(p),
                f = o(121791),
                w = o(346252),
                g = o(878162),
                y = o(725516);
            const C = b().j681933e,
                v = (e) => {
                    const { dataSaverMode: t, isPrivate: o, listId: n, media: i, name: l } = e,
                        s = (0, y.z)(),
                        r = `/i/lists/${n}`,
                        d = a.useCallback(() => {
                            s.scribeAction("click");
                        }, [s]);
                    return a.createElement(g.Z, { basePath: r, listId: n }, a.createElement(u.Z, { link: r, onPress: d, style: S.root }, a.createElement(w.Z, { cropCandidates: i.crop, dataSaverMode: t, icon: "lists", image: i.image }), a.createElement(c.Z, { style: S.name }, a.createElement(m.ZP, { align: "center", numberOfLines: 1, size: "subtext2" }, l ? l.trim() : null), o ? a.createElement(f.default, { "aria-label": C, style: S.iconLock }) : null)));
                },
                S = h.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.cellBackground, padding: e.spaces.space12 }, name: { alignSelf: "stretch", paddingTop: e.spaces.space4, flexDirection: "row", justifyContent: "center", width: e.spaces.space80 }, iconLock: { color: e.colors.text, marginHorizontal: e.spaces.space4 } })),
                F = a.memo(v);
            var _ = o(668214),
                T = o(38562),
                B = o(510588);
            const k = (e, t) => t.entry.content.id,
                Z = (e, t) => r.Z.select(e, k(0, t)),
                x = (e, t) => B.tt(e, k(0, t)),
                L = (0, _.Z)()
                    .propsFromState(() => ({ listId: k, list: Z, dataSaverMode: T.IX, media: x }))
                    .adjustStateProps(({ dataSaverMode: e, list: t, listId: o, media: n }) => ({ name: t?.name, isPrivate: "private" === t?.mode, listId: o, dataSaverMode: e, media: n }))
                    .withAnalytics();
            var M = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "relayListTile_list",
                selections: [
                    { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: "mode", args: null, kind: "ScalarField", name: "accessibility", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "useBannerImage_list" },
                ],
                type: "List",
                abstractKey: null,
                hash: "542fe456d2a5eac6598eb3b9371343be",
            };
            const E = M;
            var I = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "relayListTile", selections: [{ alias: null, args: null, concreteType: "List", kind: "LinkedField", name: "list", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "relayListTile_list" }], storageKey: null }], type: "TimelineTwitterList", abstractKey: null, hash: "b432c27a6feadb4a3b7e46cb313a950d" };
            const D = I;
            o(585488);
            var P = o(277660),
                H = o.n(P),
                R = o(161082);
            const N = D,
                z = ({ dataSaverMode: e, listRef: t }) => {
                    const o = H()(N, t).list;
                    return a.createElement(W, { dataSaverMode: e, list: o });
                },
                U = a.memo(z),
                O = E,
                W = (e) => {
                    const t = H()(O, e.list),
                        o = (0, R.u)(t);
                    return a.createElement(F, { dataSaverMode: e.dataSaverMode, isPrivate: "Private" === t.mode, listId: t.id_str, media: o, name: t.name || "" });
                },
                j = (e) => {
                    const { dataSaverMode: t, entry: o, listId: n } = e,
                        { itemContentRef: i } = o,
                        l = (0, s.hC)("responsive_web_redux_use_fragment_enabled"),
                        c = a.useMemo(() => (0, d.D9)(O, r.Z, n), [n]);
                    if (i) return a.createElement(U, { dataSaverMode: t, listRef: i });
                    if (l) return a.createElement(W, { dataSaverMode: t, list: c });
                    {
                        const { isPrivate: o, media: i, name: l } = e;
                        return a.createElement(F, { dataSaverMode: t, isPrivate: o, listId: n, media: i, name: l });
                    }
                },
                A = L(a.memo(j)),
                K = l
                    .iH({
                        component: A,
                        isFocusable: (0, n.Z)(!0),
                        getScribeDataItem(e) {
                            const { id: t } = e.content;
                            return i.Z.forList(t);
                        },
                        shouldDisplayBorder: (0, n.Z)(!1),
                    })
                    .getHandler();
        },
        286e3: (e, t, o) => {
            o.d(t, { Rc: () => m, nx: () => d });
            var n = o(499627),
                i = o(576469),
                l = o(390387);
            const a = "rweb.channelsTimelineBehavior",
                s = "channelsTimelineBehavior",
                r = Object.freeze({});
            const d = (e) => e[s],
                c = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                u = (e) => ({ payload: e, type: c }),
                m =
                    ({ listId: e, useRanked: t }) =>
                    (o, n, { userPersistence: l }) => {
                        const s = n(),
                            r = { ...d(s), [e]: { useRanked: t } };
                        o(u(r));
                        const c = i.Z.select(s, e);
                        return c && c.following ? l.get(a).then((o) => l.set(a, { ...o, [e]: { useRanked: t } })) : Promise.resolve();
                    };
            n.Z.register(
                {
                    [s]: function (e = r, t) {
                        return t && t.type === c ? { ...t.payload } : e;
                    },
                },
                () =>
                    (e, t, { userPersistence: o }) =>
                        (0, l.Qb)(t())
                            ? o.get(a).then((t) => {
                                  t && e(u(t));
                              })
                            : Promise.resolve(),
            );
        },
        510588: (e, t, o) => {
            o.d(t, { $5: () => u, By: () => w, DV: () => v, Fz: () => b, Ge: () => y, Ns: () => T, Wy: () => p, _g: () => F, ax: () => g, cx: () => f, l1: () => S, tt: () => _, xh: () => h });
            var n = o(614983),
                i = o.n(n),
                l = o(842799),
                a = o(286e3),
                s = o(576469),
                r = o(919022),
                d = o(312771);
            const c = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                u = (e, t) => {
                    const o = p(e, t),
                        n = g(e, t),
                        i = y(e, t);
                    return o ? `/i/lists/${o}` : n && i ? `/${n}/lists/${i}` : "";
                },
                m = (e, t) => t.match.params.listId || void 0,
                h = (e, t) => {
                    const o = t.match.params.listId;
                    return i()(o, "listId should always be specified"), o;
                },
                p = (e, t) =>
                    m(0, t) ||
                    ((e, t) => {
                        const o = b(e, t);
                        return o && o.id_str;
                    })(e, t),
                b = (e, t) => {
                    const o = m(0, t);
                    return o ? s.Z.select(e, o) : s.Z.selectByKey(e, C(e, t));
                },
                f = (e, t) => {
                    const o = b(e, t);
                    return o && o.following;
                },
                w = (e, t) => {
                    const o = b(e, t);
                    return o && o.name;
                },
                g = (e, t) => {
                    const o = m(0, t);
                    return t.match.params.screenName || void 0 || (o && s.Z.selectListAuthorScreenName(e, o));
                },
                y = (e, t) => {
                    const o = b(e, t);
                    return t.match.params.slug || (o && o.slug);
                },
                C = (e, t) => {
                    const o = t.match.params.slug,
                        n = t.match.params.screenName;
                    return o && n ? (0, l.Z)(n, o) : "";
                },
                v = (e, t) => {
                    const o =
                        p(e, t) ||
                        ((e, t) => {
                            const o = y(e, t),
                                n = g(e, t);
                            return o && n ? (0, l.Z)(n, o) : "";
                        })(e, t);
                    return s.Z.selectFetchStatus(e, o) || d.ZP.NONE;
                },
                S = (e, t) => {
                    const o = g(e, t);
                    return o ? r.ZP.selectByScreenName(e, o) : void 0;
                },
                F = (e, t) => {
                    const o = p(e, t),
                        n = (0, a.nx)(e);
                    return (o && n[o] && n[o].useRanked) || !1;
                },
                _ = (e, t) => {
                    const o = s.Z.select(e, t);
                    if (o) {
                        const e = o.customBanner;
                        return e || o.defaultBanner;
                    }
                    return { crop: [], image: c };
                },
                T = (e, t) => {
                    const o = b(e, t);
                    return o?.mode;
                };
        },
        642153: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                i = o(325686),
                l = o(392237),
                a = o(823161);
            const s = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: o = "small", style: s, userAvatarSize: d = "medium", userAvatarUrls: c, withIncreasedSpacing: u } = e,
                        m = c.length,
                        h = "transparent" === t;
                    return n.createElement(
                        i.Z,
                        { style: [r.root, s, { height: a.default.getSizeStyle(d)?.height }] },
                        c.map((e, i) => n.createElement(a.default, { backgroundColor: t, borderColor: t, borderWidth: h ? "none" : o, key: i, size: d, style: [0 !== i && { marginStart: -1 * l.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: m - i }], uri: e })),
                    );
                },
                r = l.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        723587: (e, t, o) => {
            o.d(t, { Z: () => me });
            var n = o(202784),
                i = o(614983),
                l = o.n(i),
                a = o(111677),
                s = o.n(a),
                r = o(516951),
                d = o(616894),
                c = o(235902),
                u = o(305098);
            const m = s().i8cfb6e6,
                h = s().ea100d6a,
                p = s().fe40537f,
                b = s().ab7c3460,
                f = s().i58d8718,
                w = n.createElement(d.default, null),
                g = ({ disabled: e, displayMode: t, onUnblock: o, showRelationshipChangeConfirmation: i, size: l, style: a, testID: s, userScreenName: r }) => n.createElement(u.Z, { buttonDefaultLabel: m, buttonHoverLabel: h, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: h, confirmationSheetHeadline: p({ screenName: r }), confirmationSheetText: c.ZP.useProps().isSoftBlockEnabled() ? f : b, disabled: e, displayMode: t, icon: w, onClick: o, showRelationshipChangeConfirmation: i, size: l, style: a, testID: s });
            var y = o(466999),
                C = o(76388),
                v = o(911373),
                S = o(733357),
                F = o(352924),
                _ = o(392237);
            const T = s().ee05e96b,
                B = s().f238ba1d,
                k = s().aeb6f0a0,
                Z = s().a77a27c0,
                x = s().b4397192,
                L = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                M = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                E = _.default.create((e) => ({ hidden: { display: "none" } })),
                I = ({ "aria-describedby": e, buttonType: t, disabled: o, displayMode: i, id: l, isSuperFollowEligible: a, isSuperFollowing: s, isTransparent: r, name: d, onSuperFollow: c, onUnSuperFollow: m, size: h, style: p, testID: b }) => {
                    const f = n.useCallback(() => {
                            s ? m() : a && c();
                        }, [a, s, c, m]),
                        w = void 0 !== d ? `@${String(d)}` : "",
                        g = s ? Z : k,
                        C = w.length > 0 && void 0 !== g ? B({ followType: g, screenName: w }) : "",
                        v = s ? x : k,
                        _ = s ? M(r) : t ? void 0 : L(r),
                        I = n.useMemo(() => (void 0 !== e ? e : (0, F.F)()), [e]),
                        D = n.useCallback(() => {
                            const e = s ? Z : a ? T({ followType: k, screenName: d }) : null;
                            return e && !(0, S.Z)(e) ? n.createElement(y.Z, { id: I, style: E.hidden }, e) : null;
                        }, [s, a, I, d]);
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": I, "aria-label": C, buttonDefaultLabel: g, buttonHoverLabel: v, buttonType: t, customButtonConfig: _, disabled: o, displayMode: i, id: l, onClick: f, size: h, style: p, testID: b }), void 0 === e ? D() : null);
                },
                D = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                P = s().cda66545,
                H = s().ee05e96b,
                R = s().a8d77a25,
                N = s().d0f4f3d9,
                z = s().f238ba1d,
                U = s().j6161cab,
                O = s().i4bb9ef7,
                W = s().ge753264,
                j = s().b837c0e8,
                A = n.createElement(C.default, null),
                K = n.createElement(v.default, null),
                $ = s().ddac1f1d,
                J = s().j8e33c40;
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
                            const { buttonText: e, isFollowing: t, isSuperFollowEligible: o, isSuperFollowing: n, name: i, type: l } = this.props;
                            let a = "";
                            const s = void 0 === i ? "" : i;
                            switch (l) {
                                case D.user:
                                case D.topic:
                                case D.list:
                                    n && e.unSuperFollow ? (a = e.unSuperFollow) : t ? (a = o ? H({ followType: e.superFollow, screenName: s }) : P({ followType: e.unfollow, screenName: s })) : t || (a = P({ followType: e.follow, screenName: s }));
                                    break;
                                case D.community:
                                    a = t ? R({ screenName: s }) : P({ followType: e.follow, screenName: s });
                                    break;
                                case D.spaces:
                                    t ? (a = P({ followType: e.unfollow, screenName: s })) : t || (a = P({ followType: e.follow, screenName: s }));
                                    break;
                                default:
                                    a = "";
                            }
                            return a;
                        }),
                        (this._getText = () => {
                            const { buttonText: e, name: t, type: o } = this.props,
                                n = void 0 !== t ? t : "",
                                i = O({ title: t }),
                                l = { [D.user]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: U({ screenName: t }), confirmationSheetText: W }, [D.topic]: { ariaFollowName: n, confirmationHeadline: i, confirmationSheetText: j }, [D.list]: { ariaFollowName: n, confirmationHeadline: i, confirmationSheetText: void 0 }, [D.community]: { ariaFollowName: n, confirmationHeadline: $({ communityName: t }), confirmationSheetText: J }, [D.spaces]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: U({ screenName: t }), confirmationSheetText: W } };
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
                    const { "aria-describedby": e, buttonIcons: t, disabled: o, displayMode: i, id: l, isFollowed: a, isFollowing: s, isSuperFollowEligible: r, isSuperFollowing: d, isTransparent: c, showRelationshipChangeConfirmation: m, size: h, style: p, testID: b, type: f, withConfirmationSheetText: w } = this.props,
                        { ariaFollowName: g, confirmationHeadline: y, confirmationSheetText: C, followBackLabel: v, followLabel: S, followingLabel: F, superFollowLabel: _, superFollowingLabel: T, unSuperFollowLabel: B, unfollowLabel: k } = this._getText(),
                        { hasJustFollowed: Z } = this.state,
                        x = (t && t.followIcon) || K,
                        E = (t && t.followingIcon) || A,
                        I = "only-text" !== i ? (s ? E : x) : void 0;
                    let P = s ? F : S;
                    a && !s && v && (P = v);
                    let H = N;
                    (d || (s && r)) && (d && T ? ((H = z), (P = T)) : r && _ && ((H = z), (P = _)));
                    const R = g.length > 0 && void 0 !== P ? H({ followType: P, screenName: g }) : "",
                        U = "primaryFilled";
                    let O, W, j, $;
                    const J = c ? "brandText" : U,
                        V = c ? "destructiveText" : "destructiveOutlined",
                        G = !d && (!s || !r) && s,
                        X = s ? "onMediaWhiteFilled" : "onMediaOutlined",
                        q = s ? "onMediaOutlined" : "onMediaWhiteFilled";
                    f === D.community ? (O = s ? k : S) : f === D.spaces ? ((O = s ? k : S), (W = X), (j = q)) : d && B ? (($ = M(c)), (O = B)) : s ? ((O = Z ? F : k), (W = Z ? J : V), (j = c ? "brandText" : "primaryOutlined"), r && _ && (($ = L(c)), (O = _), (j = void 0), (W = void 0))) : ((O = a && v ? v : S), (W = c ? "brandText" : U), (j = c ? "brandText" : U));
                    const Q = this._getDescribedById();
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": Q, "aria-label": R, buttonDefaultLabel: P, buttonHoverLabel: O, buttonHoverType: W, buttonType: j, confirmationSheetConfirmLabel: k, confirmationSheetHeadline: y, confirmationSheetText: w ? C : void 0, customButtonConfig: $, disabled: o, displayMode: i, icon: I, id: l, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: G && m, size: h, style: p, testID: b }), void 0 === e ? this._renderDescribedBy(Q) : null);
                }
            }
            const G = V;
            var X = o(311687);
            const q = s().f305840e,
                Q = s().e23b20a0,
                Y = s().fe04d89a,
                ee = s().i036327c,
                te = s().j95e3097,
                oe = n.createElement(X.default, null),
                ne = ({ disabled: e, displayMode: t, onCancelPendingFollow: o, showRelationshipChangeConfirmation: i, size: l, style: a, testID: s, userScreenName: r }) => n.createElement(u.Z, { buttonDefaultLabel: q, buttonHoverLabel: Q, buttonType: "primaryOutlined", confirmationSheetCancelLabel: Q, confirmationSheetConfirmLabel: Y, confirmationSheetHeadline: ee, confirmationSheetText: te({ screenName: r }), disabled: e, displayMode: t, icon: oe, onClick: o, showRelationshipChangeConfirmation: i, size: l, style: a, testID: s }),
                ie = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                le = s().ec72e2f8,
                ae = s().a5f7ce12,
                se = s().c3befdbe,
                re = s().d3029dbc,
                de = s().aeb6f0a0,
                ce = s().a77a27c0,
                ue = s().b4397192;
            class me extends n.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, buttonText: o, buttonType: i, disabled: l, displayMode: a, id: s, isBlocking: r, isFollowRequestSent: d, isFollowed: c, isFollowing: u, isSuperFollowEligible: m, isSuperFollowing: h, isTransparent: p, name: b, onCancelPendingFollow: f, onFollow: w, onSuperFollow: y, onUnSuperFollow: C, onUnblock: v, onUnfollow: S, relationshipMode: F, showRelationshipChangeConfirmation: _, size: T, style: B, testIDs: k, type: Z, withConfirmationSheetText: x } = this.props,
                        L = r,
                        M = d,
                        E = F === ie.subscribe && (m || h);
                    return L ? n.createElement(g, { disabled: l, displayMode: a, onUnblock: v, showRelationshipChangeConfirmation: _, size: T, style: B, testID: k?.unblock, userScreenName: b }) : M ? n.createElement(ne, { disabled: l, displayMode: a, onCancelPendingFollow: f, showRelationshipChangeConfirmation: _, size: T, style: B, testID: k?.cancel, userScreenName: b }) : E ? n.createElement(I, { "aria-describedby": e, buttonType: i, disabled: l, displayMode: a, id: s, isSuperFollowEligible: m, isSuperFollowing: h, isTransparent: p, name: b, onSuperFollow: y, onUnSuperFollow: C, size: T, style: B, testID: h ? k?.manageSubscription : k?.subscribe }) : n.createElement(G, { "aria-describedby": e, buttonIcons: t, buttonText: o, disabled: l, displayMode: a, id: s, isFollowed: c, isFollowing: u, isSuperFollowEligible: m, isSuperFollowing: h, isTransparent: p, name: b, onFollow: w, onSuperFollow: y, onUnSuperFollow: C, onUnfollow: S, showRelationshipChangeConfirmation: _, size: T, style: B, testID: u ? k?.unfollow : k?.follow, type: Z, withConfirmationSheetText: x });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: t } = this.props,
                        o = t && "string" == typeof e,
                        n = !t;
                    l()(o || n, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            me.defaultProps = { buttonText: { follow: le, followBack: ae, following: se, unfollow: re, superFollow: de, superFollowing: ce, unSuperFollow: ue }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: r.Z, onSuperFollow: r.Z, onUnblock: r.Z, onUnSuperFollow: r.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
        470397: (e, t, o) => {
            o.d(t, { Z: () => s });
            o(136728);
            var n = o(202784),
                i = o(325686),
                l = o(124964),
                a = o(392237);
            const s = ({ children: e, color: t = "gray700", size: o, style: a }) => {
                    const s = [];
                    return (
                        n.Children.forEach(e, (e) => {
                            const i = s.length;
                            e && (i > 0 && s.push(n.createElement(l.Z, { color: t, key: `middot-${i}`, size: o })), s.push(e));
                        }),
                        s.length ? n.createElement(i.Z, { style: [r.middotGroup, a] }, s) : null
                    );
                },
                r = a.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        305098: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                i = o(202784),
                l = o(325686),
                a = o(154003),
                s = o(190286),
                r = o(466792);
            Object.freeze({ iconText: "icon-text", onlyIcon: "only-icon", onlyText: "only-text" });
            class d extends i.Component {
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
                    const { "aria-describedby": e, "aria-label": t, buttonDefaultLabel: o, buttonHoverLabel: d, buttonHoverType: c, buttonType: u, confirmationSheetCancelLabel: m, confirmationSheetConfirmLabel: h, confirmationSheetHeadline: p, confirmationSheetPrimaryButtonType: b, confirmationSheetText: f, disabled: w, displayMode: g, icon: y, id: C, onHoverOut: v, size: S, style: F, testID: _ } = this.props,
                        T = [F, { minWidth: this._minWidth }];
                    return i.createElement(
                        l.Z,
                        { ref: this._setContainerRef, style: T },
                        i.createElement(r.Z, { onHoverIn: this._handleHoverIn, onHoverOut: v }, ({ isHovered: l }) => {
                            const s = l ? d : o,
                                r = l && c ? c : u,
                                m = this._getCustomButtonProps(l);
                            return i.createElement(a.ZP, (0, n.Z)({ "aria-describedby": e, "aria-label": "only-icon" === g ? s : t, disabled: w, icon: "only-text" !== g ? y : void 0, id: C, onPress: this._handleButtonPress, ref: this._setButtonRef, size: S, testID: _, type: r }, m), "only-icon" === g ? void 0 : s);
                        }),
                        this.state.showConfirmation ? i.createElement(s.Z, { cancelButtonLabel: m, confirmButtonLabel: h, confirmButtonType: b, headline: p, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: f }) : null,
                    );
                }
            }
            d.defaultProps = { showRelationshipChangeConfirmation: !1 };
            const c = d;
        },
        678773: (e, t, o) => {
            o.r(t), o.d(t, { default: () => r });
            var n = o(202784),
                i = o(890601),
                l = o(783427),
                a = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ListHandler.e303460a.js.map
