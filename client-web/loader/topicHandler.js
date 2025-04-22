"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.topicHandler"],
    {
        812736: (e, t, o) => {
            o.d(t, { Z: () => k });
            var r = o(202784),
                n = o(325686),
                c = o(952428),
                i = o(731708),
                a = o(909377),
                s = o(392237),
                l = o(674132),
                d = o.n(l),
                p = o(452693),
                m = o(443781),
                h = o(265196),
                u = o(863934),
                f = o(479506),
                y = o(903019),
                b = o(725516),
                v = o(864479);
            const g = d().a2a3824a;
            let w = 0;
            class I extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._topicLink = { pathname: `/i/topics/${this.props.topic.id}`, state: { referringScribeNamespace: { ...this.props.analytics.contextualScribeNamespace, action: "click" } } }),
                        (this._handleOnClick = () => {
                            const {
                                saveAsRecentSearch: e,
                                shouldStoreTypeaheadItem: t,
                                topic: { description: o, id: r, name: n },
                            } = this.props;
                            e && t && t(f.Z.ItemType.TOPIC) && e({ topic: { id: r, name: n, description: o || "", type: y.g2.Topic } }), this._handleScribe("click");
                        }),
                        (this._topicDomId = `topic${w}`),
                        (this._nameDomId = `topic-name${w}`),
                        (this._descriptionDomId = `topic-description${w}`),
                        (this._followButtonDomId = `topic-follow-button${w}`),
                        (this._notInterestedButtonDomId = `topic-not-interested-button${w}`),
                        (w += 1);
                }
                render() {
                    const { educateOnFollow: e, isInSidebar: t, nameWeight: o, notInterestedOnClick: a, topic: s } = this.props,
                        { description: l, name: d } = s,
                        { loggedInUserId: p } = this.context;
                    return r.createElement(c.Z, { "aria-labelledby": [this._topicDomId, this._nameDomId, this._descriptionDomId, this._followButtonDomId, this._notInterestedButtonDomId].join(" "), interactiveStyles: this._topicLink ? void 0 : null, link: this._topicLink, onClick: this._topicLink ? this._handleOnClick : void 0, style: [S.root, S.flexStart], withDarkerInteractiveBackground: t }, r.createElement(n.Z, { style: S.topic }, r.createElement(n.Z, { "aria-label": g, id: this._topicDomId }), this._renderIcon(), r.createElement(n.Z, { style: S.text }, r.createElement(i.ZP, { id: this._nameDomId, weight: o, withInteractiveStyling: !!this._topicLink }, d), l ? r.createElement(i.ZP, { color: "gray700", id: this._descriptionDomId, numberOfLines: 2 }, l) : null)), r.createElement(n.Z, { style: S.buttons }, r.createElement(h.ZP, { educateOnFollow: e, id: this._followButtonDomId, topic: s }), p && a ? r.createElement(u.Z, { id: this._notInterestedButtonDomId, onPress: a, style: S.marginStart, topicId: s.id }) : null));
                }
                _renderIcon() {
                    const { withIcon: e } = this.props;
                    return e ? r.createElement(a.Z, { Icon: p.default, size: "large", style: S.icon }) : null;
                }
                _handleScribe(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            (I.contextType = m.rC), (I.defaultProps = { nameWeight: "bold", withIcon: !0 });
            const S = s.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, flexStart: { alignItems: "flex-start" }, icon: { alignSelf: "flex-start", marginEnd: e.spaces.space12 }, customIcon: { borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32 }, text: { flexShrink: 1 }, buttons: { alignItems: "center", alignSelf: "center", flexDirection: "row", paddingStart: e.spaces.space8 }, marginStart: { marginStart: e.spaces.space4 }, topic: { alignItems: "center", flexDirection: "row", flexShrink: 1, paddingEnd: e.spaces.space4 } })),
                k = (0, v.Z)((0, b.Z)(I));
        },
        542981: (e, t, o) => {
            o.r(t), o.d(t, { default: () => y });
            var r = o(459643),
                n = o(351322),
                c = o(202784),
                i = o(812736),
                a = o(638090),
                s = o(725516),
                l = o(373867),
                d = o(668214),
                p = o(204744),
                m = o(466380);
            const h = (e, t) => m.Z.select(e, t.entry.content.topicId),
                u = (e) => {
                    const t = (0, s.z)(),
                        {
                            entry: { content: o },
                            feedbackItems: r,
                            saveAsRecentSearch: n,
                            shouldStoreTypeaheadItem: d,
                            topic: p,
                        } = e;
                    if (
                        (c.useEffect(() => {
                            p && t.scribeAction("impression");
                        }, [t, p]),
                        !p)
                    )
                        return null;
                    const m = (0, l.z)({ feedbackItems: r, topic: p, topicItemContent: o }),
                        h = o.topicDisplayType === a.M6.Basic;
                    return c.createElement(i.Z, { notInterestedOnClick: m, saveAsRecentSearch: n, shouldStoreTypeaheadItem: d, topic: p, withIcon: h });
                },
                f = (0, d.Z)()
                    .propsFromState(() => ({ topic: h }))
                    .propsFromActions(() => ({ saveAsRecentSearch: p.DI }))(c.memo(u)),
                y = (e) => n.iH({ component: f, isFocusable: (0, r.Z)(!0), getScribeDataItem: l.H, shouldDisplayBorder: (0, r.Z)(!1) }).getHandler(() => ({ ...e }));
        },
        373867: (e, t, o) => {
            o.d(t, { H: () => i, z: () => c });
            var r = o(942893),
                n = o(638090);
            const c = ({ feedbackItems: e, topic: t, topicItemContent: o }) => {
                    const r = o.topicFunctionalityType === n.xV.Recommendation,
                        c = 1 === e?.length ? e[0].onClick : void 0;
                    return !t?.not_interested && !t?.following && r ? c : void 0;
                },
                i = (e) => r.Z.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo);
        },
        117004: (e, t, o) => {
            o.r(t), o.d(t, { default: () => O });
            var r = o(459643),
                n = o(351322),
                c = o(202784),
                i = o(325686),
                a = o(247609),
                s = o(392237),
                l = o(638090),
                d = o(725516),
                p = o(599190),
                m = o(973014),
                h = o(674132),
                u = o.n(h),
                f = o(324688),
                y = o(443781),
                b = o(233391),
                v = o(288955),
                g = o(71620),
                w = o(668214),
                I = o(466380);
            const S = (0, w.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("TOPIC_PILL_CONTEXT"), follow: I.Z.follow, unfollow: I.Z.unfollow }))
                    .withAnalytics(),
                k = u().ge8f3043,
                C = u().aa576cbf,
                E = u().i77347d1,
                x = u().e839db3a,
                Z = (e) => {
                    const { loggedInUserId: t } = c.useContext(y.rC),
                        { analytics: o, createLocalApiErrorHandler: r, follow: n, notInterestedOnClick: a, topic: s, unfollow: l, withActionIcon: d } = e,
                        { following: h, id: u, name: g, not_interested: w } = s,
                        I = c.useRef(!1),
                        [S, Z] = c.useState(0),
                        D = c.useCallback(
                            (e) => {
                                if (0 === S) {
                                    const {
                                        nativeEvent: {
                                            layout: { width: t },
                                        },
                                    } = e;
                                    Z(t);
                                }
                            },
                            [S],
                        ),
                        A = (e) => {
                            if (!w && d) return h ? p.D.Active : p.D.Expand;
                        },
                        P = (e, t, o) => e(h ? H(o) : z(t)),
                        z = (e) => (t) => {
                            n(u)
                                .catch(r())
                                .then(e && e(u)),
                                o.scribeAction("follow");
                        },
                        H = (e) => (t) => {
                            l(u)
                                .catch(r())
                                .then(e && e(u)),
                                o.scribeAction("unfollow");
                        },
                        R = (e, o, r) => {
                            if (t && a) return { mode: p.D.Remove, onSecondaryClick: a, "aria-label": E({ topicName: g }), hoverLabel: x, disabled: h || w };
                        };
                    return c.createElement(v.Z, { customText: g, displayMode: b.BH.topic }, (e) => c.createElement(f.m.Consumer, null, ({ onFollow: t, onInitialize: o, onUnfollow: r }) => (o && !I.current && (o(u, h), (I.current = !0)), c.createElement(i.Z, { onLayout: D, style: [_.root, { minWidth: S }] }, c.createElement(m.Z, { "aria-label": h ? C({ topicName: g }) : k({ topicName: g }), disabled: w, key: u, mode: A(), onClick: P(e, t, r), secondaryAction: R(), selected: h, style: _.pill, text: g })))));
                };
            Z.defaultProps = { withActionIcon: !0 };
            const _ = s.default.create((e) => ({ root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 }, pill: { textOverflow: "ellipsis" }, roundIcon: { borderRadius: e.borderRadii.infinite, height: "100%", width: "100%" } })),
                D = S(Z);
            var A = o(373867);
            const P = (e, t) => I.Z.select(e, t.entry.content.topicId),
                z = (0, w.Z)().propsFromState(() => ({ topic: P })),
                H = (e) => {
                    const t = (0, d.z)(),
                        {
                            entry: { content: o },
                            feedbackItems: r,
                            topic: n,
                        } = e,
                        { topicDisplayType: s, topicFunctionalityType: p } = o,
                        m = c.useCallback(() => {
                            t.scribeAction("click");
                        }, [t]);
                    if (!n) return null;
                    const h = (0, A.z)({ feedbackItems: r, topic: n, topicItemContent: o }),
                        u = p !== l.xV.Pivot && s !== l.M6.PillWithoutActionIcon;
                    return p === l.xV.Pivot ? c.createElement(i.Z, { style: R.root }, c.createElement(a.Z, { link: `/i/topics/${n.id}`, onClick: m, text: n.name })) : c.createElement(D, { notInterestedOnClick: h, topic: n, withActionIcon: u });
                },
                R = s.default.create((e) => ({ root: { margin: e.spaces.space4 } })),
                L = z(c.memo(H)),
                O = ({ shouldDisplayBorder: e = !1 }) => n.iH({ component: L, isFocusable: (0, r.Z)(!0), getScribeDataItem: A.H, shouldDisplayBorder: (0, r.Z)(e) }).getHandler();
        },
        204744: (e, t, o) => {
            o.d(t, { DI: () => w, H$: () => m, OB: () => I, Ww: () => d, YB: () => p, hj: () => y, qF: () => v });
            o(901951);
            var r = o(499627),
                n = o(390387);
            const c = "recentSearches",
                i = "rweb.recentSearches",
                a =
                    (e) =>
                    (t, o, { userPersistence: r }) =>
                        r.set(i, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                s = (e, t) => {
                    let o = [];
                    if (e.user) {
                        const r = e.user;
                        o = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== r.id));
                    } else if (e.event) {
                        const r = e.event;
                        o = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== r.id));
                    } else if (e && e.keyword) {
                        const r = e.keyword;
                        o = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== r.query));
                    } else if (e.list) {
                        const r = e.list;
                        o = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== r.id));
                    } else if (e.topic) {
                        const r = e.topic;
                        o = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== r.id));
                    }
                    return o;
                },
                l = { fetched: !1, recentSearches: [] };
            const d = (e) => e[c].recentSearches,
                p = (e) => d(e)[0] || null,
                m = (e) => e[c].fetched,
                h = "rweb/recentSearches/INIT_FROM_CACHE",
                u = (e) => ({ type: h, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                y =
                    (e) =>
                    (t, o, { userPersistence: r }) => {
                        t({ payload: e, type: f });
                        const c = o(),
                            i = d(c);
                        return (0, n.Qb)(c) ? t(a(i)) : Promise.resolve();
                    },
                b = "rweb/recentSearches/CLEAR_ALL",
                v =
                    () =>
                    (e, t, { userPersistence: o }) => {
                        e({ type: b });
                        const r = t(),
                            c = d(r);
                        return (0, n.Qb)(r) ? e(a(c)) : Promise.resolve();
                    },
                g = "rweb/recentSearches/ADD_QUERY",
                w =
                    (e) =>
                    (t, o, { userPersistence: r }) => {
                        t({ payload: e, type: g });
                        const c = o(),
                            i = d(c);
                        return (0, n.Qb)(c) ? t(a(i)) : Promise.resolve();
                    },
                I =
                    () =>
                    (e, t, { userPersistence: o }) => {
                        const r = t();
                        return m(r)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: o }) => {
                                  const r = t();
                                  return (0, n.Qb)(r)
                                      ? o
                                            .get(i)
                                            .then((t) => {
                                                e(u(t));
                                            })
                                            .catch(() => {
                                                e(u());
                                            })
                                      : (e(u()), Promise.resolve());
                              });
                    };
            r.Z.register({
                [c]: function (e = l, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case g: {
                            const o = t.payload,
                                r = o ? s(o, e.recentSearches) : [];
                            return r.length > 49 && r.splice(49, 1), o && r.unshift(o), { ...e, recentSearches: r };
                        }
                        case f: {
                            const o = t.payload,
                                r = o ? s(o, e.recentSearches) : [];
                            return { ...e, recentSearches: r };
                        }
                        case b:
                            return { fetched: !0, recentSearches: [] };
                        case h:
                            return { ...e, ...t.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        324688: (e, t, o) => {
            o.d(t, { m: () => r });
            const r = o(202784).createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 });
        },
        247609: (e, t, o) => {
            o.d(t, { Z: () => p });
            var r = o(202784),
                n = o(58399),
                c = o(731708),
                i = o(58881),
                a = o(530732),
                s = o(392237);
            const l = () => {
                    const e = d.icon;
                    return r.createElement(n.default, { style: e });
                },
                d = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexDirection: "row", minHeight: e.spaces.space32 }, border: { borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1 }, content: { alignItems: "center", flexDirection: "row", flexGrow: 1, flexShrink: 1, paddingEnd: e.spaces.space12, paddingStart: e.spaces.space16, paddingVertical: e.spaces.space8 }, text: { width: "100%" }, icon: { color: e.colors.text, flexShrink: 0, marginStart: e.spaces.space4 } })),
                p = (e) => {
                    const { link: t, onClick: o, text: n } = e,
                        p = l(),
                        m = i.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text });
                    return r.createElement(a.Z, { interactiveStyles: m, link: t, onPress: o, style: [d.root, d.border, d.content] }, r.createElement(c.ZP, { numberOfLines: 1, selectable: !1, style: d.text, weight: "medium" }, n), p);
                };
        },
        973014: (e, t, o) => {
            o.d(t, { Z: () => v });
            var r = o(202784),
                n = o(325686),
                c = o(674132),
                i = o.n(c),
                a = o(837020),
                s = o(379327),
                l = o(913973),
                d = o(731708),
                p = o(58881),
                m = o(530732),
                h = o(392237),
                u = o(599190);
            const f = { active: i().e557ad8e, expand: i().e3a58c28, remove: i().h517e8d8 };
            class y extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleSecondaryClick = () => {
                            const { secondaryAction: e } = this.props;
                            e && e.onSecondaryClick();
                        });
                }
                render() {
                    const { "aria-label": e, avatar: t, compact: o, disabled: c, link: i, mode: a, onClick: s, secondaryAction: l, selected: u, style: y, testID: v, text: g } = this.props,
                        w = this._renderIcon(!0, a),
                        I = l && this._renderIcon(!1, l.mode),
                        S = [b.root, o && b.compact, c && b.disabled, u && b.selected, y],
                        k = [b.content, !!w && b.withIcon, !!t && ((o && b.withAvatarImageCompact) || b.withAvatarImage)],
                        C = p.Z.generate({ backgroundColor: u ? h.default.theme.colors.primary : "transparent", color: u ? h.default.theme.colors.white : h.default.theme.colors.primary });
                    return r.createElement(n.Z, { style: S, testID: v }, r.createElement(m.Z, { "aria-label": e || (a ? f[a] : ""), disabled: c, interactiveStyles: C, link: i, onPress: s, style: k }, this._renderAvatar(), r.createElement(d.ZP, { color: u ? "whiteOnColor" : "text", numberOfLines: 1, selectable: !1, style: b.text, weight: "bold" }, g), w), l ? r.createElement(m.Z, { "aria-label": l["aria-label"] || (l.mode ? f[l.mode] : ""), disabled: c || l.disabled, hoverLabel: { label: l.hoverLabel || (l.mode ? f[l.mode] : "") }, interactiveStyles: C, onPress: this._handleSecondaryClick, style: b.secondaryControl }, r.createElement(n.Z, { style: b.secondaryBorder }, I)) : null);
                }
                _renderIcon(e = !0, t) {
                    const { selected: o } = this.props,
                        n = [b.icon, o && b.iconSelected],
                        c = [b.icon];
                    switch (t) {
                        case u.D.Remove:
                            return r.createElement(a.default, { style: [b.dismissIcon, e && n] });
                        case u.D.Expand:
                            return r.createElement(s.default, { style: e ? n : c });
                        case u.D.Active:
                            return r.createElement(l.default, { style: n });
                        default:
                            return null;
                    }
                }
                _renderAvatar() {
                    const { avatar: e, compact: t } = this.props;
                    return e ? r.createElement(n.Z, { style: [b.avatarContainer, t ? b.avatarCompact : b.avatar] }, e) : null;
                }
            }
            y.defaultProps = { compact: !1, disabled: !1, selected: !1 };
            const b = h.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", flexDirection: "row", minHeight: e.spaces.space40, overflow: "hidden" }, content: { alignItems: "center", flexDirection: "row", flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space16 }, text: { width: "100%" }, compact: { minHeight: e.spaces.space32 }, disabled: { borderColor: e.colors.gray50 }, selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary }, avatar: { height: e.spaces.space32, width: e.spaces.space32 }, avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 }, avatarContainer: { justifyContent: "center", marginEnd: e.spaces.space8 }, withAvatarImage: { paddingStart: `calc(${e.spaces.space2} * 2)` }, withAvatarImageCompact: { paddingStart: `calc(${e.spaces.space1} * 3)` }, icon: { color: e.colors.primary, flexShrink: 0, marginStart: e.spaces.space12 }, iconSelected: { color: e.colors.whiteOnColor }, withIcon: { paddingEnd: e.spaces.space12 }, dismissIcon: { color: e.colors.gray300 }, secondaryControl: { flexShrink: 0, justifyContent: "center" }, secondaryBorder: { borderStartColor: e.colors.borderColor, borderStartWidth: e.borderWidths.small, paddingHorizontal: e.spaces.space12 } })),
                v = y;
        },
        599190: (e, t, o) => {
            o.d(t, { D: () => r });
            const r = Object.freeze({ Active: "active", Expand: "expand", Remove: "remove" });
        },
        971657: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                c = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, c.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                c = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, c.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.topicHandler.db02019a.js.map
