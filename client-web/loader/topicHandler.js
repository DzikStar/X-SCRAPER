"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.topicHandler"],
    {
        812736: (e, t, r) => {
            r.d(t, { Z: () => k });
            var o = r(202784),
                n = r(325686),
                i = r(952428),
                c = r(731708),
                a = r(909377),
                s = r(392237),
                l = r(332920),
                d = r.n(l),
                p = r(452693),
                h = r(443781),
                m = r(265196),
                u = r(863934),
                v = r(479506),
                y = r(903019),
                f = r(725516),
                g = r(864479);
            const b = d().a2a3824a;
            let w = 0;
            class I extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._topicLink = { pathname: `/i/topics/${this.props.topic.id}`, state: { referringScribeNamespace: { ...this.props.analytics.contextualScribeNamespace, action: "click" } } }),
                        (this._handleOnClick = () => {
                            const {
                                saveAsRecentSearch: e,
                                shouldStoreTypeaheadItem: t,
                                topic: { description: r, id: o, name: n },
                            } = this.props;
                            e && t && t(v.Z.ItemType.TOPIC) && e({ topic: { id: o, name: n, description: r || "", type: y.g2.Topic } }), this._handleScribe("click");
                        }),
                        (this._topicDomId = `topic${w}`),
                        (this._nameDomId = `topic-name${w}`),
                        (this._descriptionDomId = `topic-description${w}`),
                        (this._followButtonDomId = `topic-follow-button${w}`),
                        (this._notInterestedButtonDomId = `topic-not-interested-button${w}`),
                        (w += 1);
                }
                render() {
                    const { educateOnFollow: e, isInSidebar: t, nameWeight: r, notInterestedOnClick: a, topic: s } = this.props,
                        { description: l, name: d } = s,
                        { loggedInUserId: p } = this.context;
                    return o.createElement(i.Z, { "aria-labelledby": [this._topicDomId, this._nameDomId, this._descriptionDomId, this._followButtonDomId, this._notInterestedButtonDomId].join(" "), interactiveStyles: this._topicLink ? void 0 : null, link: this._topicLink, onClick: this._topicLink ? this._handleOnClick : void 0, style: [S.root, S.flexStart], withDarkerInteractiveBackground: t }, o.createElement(n.Z, { style: S.topic }, o.createElement(n.Z, { "aria-label": b, id: this._topicDomId }), this._renderIcon(), o.createElement(n.Z, { style: S.text }, o.createElement(c.ZP, { id: this._nameDomId, weight: r, withInteractiveStyling: !!this._topicLink }, d), l ? o.createElement(c.ZP, { color: "gray700", id: this._descriptionDomId, numberOfLines: 2 }, l) : null)), o.createElement(n.Z, { style: S.buttons }, o.createElement(m.ZP, { educateOnFollow: e, id: this._followButtonDomId, topic: s }), p && a ? o.createElement(u.Z, { id: this._notInterestedButtonDomId, onPress: a, style: S.marginStart, topicId: s.id }) : null));
                }
                _renderIcon() {
                    const { withIcon: e } = this.props;
                    return e ? o.createElement(a.Z, { Icon: p.default, size: "large", style: S.icon }) : null;
                }
                _handleScribe(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            (I.contextType = h.rC), (I.defaultProps = { nameWeight: "bold", withIcon: !0 });
            const S = s.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, flexStart: { alignItems: "flex-start" }, icon: { alignSelf: "flex-start", marginEnd: e.spaces.space12 }, customIcon: { borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32 }, text: { flexShrink: 1 }, buttons: { alignItems: "center", alignSelf: "center", flexDirection: "row", paddingStart: e.spaces.space8 }, marginStart: { marginStart: e.spaces.space4 }, topic: { alignItems: "center", flexDirection: "row", flexShrink: 1, paddingEnd: e.spaces.space4 } })),
                k = (0, g.Z)((0, f.Z)(I));
        },
        542981: (e, t, r) => {
            r.r(t), r.d(t, { default: () => y });
            var o = r(459643),
                n = r(351322),
                i = r(202784),
                c = r(812736),
                a = r(638090),
                s = r(725516),
                l = r(373867),
                d = r(668214),
                p = r(204744),
                h = r(466380);
            const m = (e, t) => h.Z.select(e, t.entry.content.topicId),
                u = (e) => {
                    const t = (0, s.z)(),
                        {
                            entry: { content: r },
                            feedbackItems: o,
                            saveAsRecentSearch: n,
                            shouldStoreTypeaheadItem: d,
                            topic: p,
                        } = e;
                    if (
                        (i.useEffect(() => {
                            p && t.scribeAction("impression");
                        }, [t, p]),
                        !p)
                    )
                        return null;
                    const h = (0, l.z)({ feedbackItems: o, topic: p, topicItemContent: r }),
                        m = r.topicDisplayType === a.M6.Basic;
                    return i.createElement(c.Z, { notInterestedOnClick: h, saveAsRecentSearch: n, shouldStoreTypeaheadItem: d, topic: p, withIcon: m });
                },
                v = (0, d.Z)()
                    .propsFromState(() => ({ topic: m }))
                    .propsFromActions(() => ({ saveAsRecentSearch: p.DI }))(i.memo(u)),
                y = (e) => n.iH({ component: v, isFocusable: (0, o.Z)(!0), getScribeDataItem: l.H, shouldDisplayBorder: (0, o.Z)(!1) }).getHandler(() => ({ ...e }));
        },
        373867: (e, t, r) => {
            r.d(t, { H: () => c, z: () => i });
            var o = r(942893),
                n = r(638090);
            const i = ({ feedbackItems: e, topic: t, topicItemContent: r }) => {
                    const o = r.topicFunctionalityType === n.xV.Recommendation,
                        i = 1 === e?.length ? e[0].onClick : void 0;
                    return !t?.not_interested && !t?.following && o ? i : void 0;
                },
                c = (e) => o.Z.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo);
        },
        117004: (e, t, r) => {
            r.r(t), r.d(t, { default: () => R });
            var o = r(459643),
                n = r(351322),
                i = r(202784),
                c = r(325686),
                a = r(247609),
                s = r(392237),
                l = r(638090),
                d = r(725516),
                p = r(599190),
                h = r(973014),
                m = r(332920),
                u = r.n(m),
                v = r(324688),
                y = r(443781),
                f = r(233391),
                g = r(288955),
                b = r(71620),
                w = r(668214),
                I = r(466380);
            const S = (0, w.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("TOPIC_PILL_CONTEXT"), follow: I.Z.follow, unfollow: I.Z.unfollow }))
                    .withAnalytics(),
                k = u().ge8f3043,
                C = u().aa576cbf,
                Z = u().i77347d1,
                E = u().e839db3a,
                x = (e) => {
                    const { loggedInUserId: t } = i.useContext(y.rC),
                        { analytics: r, createLocalApiErrorHandler: o, follow: n, notInterestedOnClick: a, topic: s, unfollow: l, withActionIcon: d } = e,
                        { following: m, id: u, name: b, not_interested: w } = s,
                        I = i.useRef(!1),
                        [S, x] = i.useState(0),
                        _ = i.useCallback(
                            (e) => {
                                if (0 === S) {
                                    const {
                                        nativeEvent: {
                                            layout: { width: t },
                                        },
                                    } = e;
                                    x(t);
                                }
                            },
                            [S],
                        ),
                        z = (e) => {
                            if (!w && d) return m ? p.D.Active : p.D.Expand;
                        },
                        A = (e, t, r) => e(m ? H(r) : P(t)),
                        P = (e) => (t) => {
                            n(u)
                                .catch(o())
                                .then(e && e(u)),
                                r.scribeAction("follow");
                        },
                        H = (e) => (t) => {
                            l(u)
                                .catch(o())
                                .then(e && e(u)),
                                r.scribeAction("unfollow");
                        },
                        L = (e, r, o) => {
                            if (t && a) return { mode: p.D.Remove, onSecondaryClick: a, "aria-label": Z({ topicName: b }), hoverLabel: E, disabled: m || w };
                        };
                    return i.createElement(g.Z, { customText: b, displayMode: f.BH.topic }, (e) => i.createElement(v.m.Consumer, null, ({ onFollow: t, onInitialize: r, onUnfollow: o }) => (r && !I.current && (r(u, m), (I.current = !0)), i.createElement(c.Z, { onLayout: _, style: [D.root, { minWidth: S }] }, i.createElement(h.Z, { "aria-label": m ? C({ topicName: b }) : k({ topicName: b }), disabled: w, key: u, mode: z(), onClick: A(e, t, o), secondaryAction: L(), selected: m, style: D.pill, text: b })))));
                };
            x.defaultProps = { withActionIcon: !0 };
            const D = s.default.create((e) => ({ root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 }, pill: { textOverflow: "ellipsis" }, roundIcon: { borderRadius: e.borderRadii.infinite, height: "100%", width: "100%" } })),
                _ = S(x);
            var z = r(373867);
            const A = (e, t) => I.Z.select(e, t.entry.content.topicId),
                P = (0, w.Z)().propsFromState(() => ({ topic: A })),
                H = (e) => {
                    const t = (0, d.z)(),
                        {
                            entry: { content: r },
                            feedbackItems: o,
                            topic: n,
                        } = e,
                        { topicDisplayType: s, topicFunctionalityType: p } = r,
                        h = i.useCallback(() => {
                            t.scribeAction("click");
                        }, [t]);
                    if (!n) return null;
                    const m = (0, z.z)({ feedbackItems: o, topic: n, topicItemContent: r }),
                        u = p !== l.xV.Pivot && s !== l.M6.PillWithoutActionIcon;
                    return p === l.xV.Pivot ? i.createElement(c.Z, { style: L.root }, i.createElement(a.Z, { link: `/i/topics/${n.id}`, onClick: h, text: n.name })) : i.createElement(_, { notInterestedOnClick: m, topic: n, withActionIcon: u });
                },
                L = s.default.create((e) => ({ root: { margin: e.spaces.space4 } })),
                B = P(i.memo(H)),
                R = ({ shouldDisplayBorder: e = !1 }) => n.iH({ component: B, isFocusable: (0, o.Z)(!0), getScribeDataItem: z.H, shouldDisplayBorder: (0, o.Z)(e) }).getHandler();
        },
        204744: (e, t, r) => {
            r.d(t, { DI: () => w, H$: () => h, OB: () => I, Ww: () => d, YB: () => p, hj: () => y, qF: () => g });
            r(901951);
            var o = r(499627),
                n = r(390387);
            const i = "recentSearches",
                c = "rweb.recentSearches",
                a =
                    (e) =>
                    (t, r, { userPersistence: o }) =>
                        o.set(c, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                s = (e, t) => {
                    let r = [];
                    if (e.user) {
                        const o = e.user;
                        r = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== o.id));
                    } else if (e.event) {
                        const o = e.event;
                        r = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== o.id));
                    } else if (e && e.keyword) {
                        const o = e.keyword;
                        r = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== o.query));
                    } else if (e.list) {
                        const o = e.list;
                        r = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== o.id));
                    } else if (e.topic) {
                        const o = e.topic;
                        r = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== o.id));
                    }
                    return r;
                },
                l = { fetched: !1, recentSearches: [] };
            const d = (e) => e[i].recentSearches,
                p = (e) => d(e)[0] || null,
                h = (e) => e[i].fetched,
                m = "rweb/recentSearches/INIT_FROM_CACHE",
                u = (e) => ({ type: m, payload: e }),
                v = "rweb/recentSearches/REMOVE_QUERY",
                y =
                    (e) =>
                    (t, r, { userPersistence: o }) => {
                        t({ payload: e, type: v });
                        const i = r(),
                            c = d(i);
                        return (0, n.Qb)(i) ? t(a(c)) : Promise.resolve();
                    },
                f = "rweb/recentSearches/CLEAR_ALL",
                g =
                    () =>
                    (e, t, { userPersistence: r }) => {
                        e({ type: f });
                        const o = t(),
                            i = d(o);
                        return (0, n.Qb)(o) ? e(a(i)) : Promise.resolve();
                    },
                b = "rweb/recentSearches/ADD_QUERY",
                w =
                    (e) =>
                    (t, r, { userPersistence: o }) => {
                        t({ payload: e, type: b });
                        const i = r(),
                            c = d(i);
                        return (0, n.Qb)(i) ? t(a(c)) : Promise.resolve();
                    },
                I =
                    () =>
                    (e, t, { userPersistence: r }) => {
                        const o = t();
                        return h(o)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: r }) => {
                                  const o = t();
                                  return (0, n.Qb)(o)
                                      ? r
                                            .get(c)
                                            .then((t) => {
                                                e(u(t));
                                            })
                                            .catch(() => {
                                                e(u());
                                            })
                                      : (e(u()), Promise.resolve());
                              });
                    };
            o.Z.register({
                [i]: function (e = l, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case b: {
                            const r = t.payload,
                                o = r ? s(r, e.recentSearches) : [];
                            return o.length > 49 && o.splice(49, 1), r && o.unshift(r), { ...e, recentSearches: o };
                        }
                        case v: {
                            const r = t.payload,
                                o = r ? s(r, e.recentSearches) : [];
                            return { ...e, recentSearches: o };
                        }
                        case f:
                            return { fetched: !0, recentSearches: [] };
                        case m:
                            return { ...e, ...t.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        324688: (e, t, r) => {
            r.d(t, { m: () => o });
            const o = r(202784).createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 });
        },
        247609: (e, t, r) => {
            r.d(t, { Z: () => p });
            var o = r(202784),
                n = r(58399),
                i = r(731708),
                c = r(58881),
                a = r(530732),
                s = r(392237);
            const l = () => {
                    const e = d.icon;
                    return o.createElement(n.default, { style: e });
                },
                d = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexDirection: "row", minHeight: e.spaces.space32 }, border: { borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1 }, content: { alignItems: "center", flexDirection: "row", flexGrow: 1, flexShrink: 1, paddingEnd: e.spaces.space12, paddingStart: e.spaces.space16, paddingVertical: e.spaces.space8 }, text: { width: "100%" }, icon: { color: e.colors.text, flexShrink: 0, marginStart: e.spaces.space4 } })),
                p = (e) => {
                    const { link: t, onClick: r, text: n } = e,
                        p = l(),
                        h = c.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text });
                    return o.createElement(a.Z, { interactiveStyles: h, link: t, onPress: r, style: [d.root, d.border, d.content] }, o.createElement(i.ZP, { numberOfLines: 1, selectable: !1, style: d.text, weight: "medium" }, n), p);
                };
        },
        973014: (e, t, r) => {
            r.d(t, { Z: () => g });
            var o = r(202784),
                n = r(325686),
                i = r(332920),
                c = r.n(i),
                a = r(837020),
                s = r(379327),
                l = r(913973),
                d = r(731708),
                p = r(58881),
                h = r(530732),
                m = r(392237),
                u = r(599190);
            const v = { active: c().e557ad8e, expand: c().e3a58c28, remove: c().h517e8d8 };
            class y extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleSecondaryClick = () => {
                            const { secondaryAction: e } = this.props;
                            e && e.onSecondaryClick();
                        });
                }
                render() {
                    const { "aria-label": e, avatar: t, compact: r, disabled: i, link: c, mode: a, onClick: s, secondaryAction: l, selected: u, style: y, testID: g, text: b } = this.props,
                        w = this._renderIcon(!0, a),
                        I = l && this._renderIcon(!1, l.mode),
                        S = [f.root, r && f.compact, i && f.disabled, u && f.selected, y],
                        k = [f.content, !!w && f.withIcon, !!t && ((r && f.withAvatarImageCompact) || f.withAvatarImage)],
                        C = p.Z.generate({ backgroundColor: u ? m.default.theme.colors.primary : "transparent", color: u ? m.default.theme.colors.white : m.default.theme.colors.primary });
                    return o.createElement(n.Z, { style: S, testID: g }, o.createElement(h.Z, { "aria-label": e || (a ? v[a] : ""), disabled: i, interactiveStyles: C, link: c, onPress: s, style: k }, this._renderAvatar(), o.createElement(d.ZP, { color: u ? "whiteOnColor" : "text", numberOfLines: 1, selectable: !1, style: f.text, weight: "bold" }, b), w), l ? o.createElement(h.Z, { "aria-label": l["aria-label"] || (l.mode ? v[l.mode] : ""), disabled: i || l.disabled, hoverLabel: { label: l.hoverLabel || (l.mode ? v[l.mode] : "") }, interactiveStyles: C, onPress: this._handleSecondaryClick, style: f.secondaryControl }, o.createElement(n.Z, { style: f.secondaryBorder }, I)) : null);
                }
                _renderIcon(e = !0, t) {
                    const { selected: r } = this.props,
                        n = [f.icon, r && f.iconSelected],
                        i = [f.icon];
                    switch (t) {
                        case u.D.Remove:
                            return o.createElement(a.default, { style: [f.dismissIcon, e && n] });
                        case u.D.Expand:
                            return o.createElement(s.default, { style: e ? n : i });
                        case u.D.Active:
                            return o.createElement(l.default, { style: n });
                        default:
                            return null;
                    }
                }
                _renderAvatar() {
                    const { avatar: e, compact: t } = this.props;
                    return e ? o.createElement(n.Z, { style: [f.avatarContainer, t ? f.avatarCompact : f.avatar] }, e) : null;
                }
            }
            y.defaultProps = { compact: !1, disabled: !1, selected: !1 };
            const f = m.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", flexDirection: "row", minHeight: e.spaces.space40, overflow: "hidden" }, content: { alignItems: "center", flexDirection: "row", flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space16 }, text: { width: "100%" }, compact: { minHeight: e.spaces.space32 }, disabled: { borderColor: e.colors.gray50 }, selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary }, avatar: { height: e.spaces.space32, width: e.spaces.space32 }, avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 }, avatarContainer: { justifyContent: "center", marginEnd: e.spaces.space8 }, withAvatarImage: { paddingStart: `calc(${e.spaces.space2} * 2)` }, withAvatarImageCompact: { paddingStart: `calc(${e.spaces.space1} * 3)` }, icon: { color: e.colors.primary, flexShrink: 0, marginStart: e.spaces.space12 }, iconSelected: { color: e.colors.whiteOnColor }, withIcon: { paddingEnd: e.spaces.space12 }, dismissIcon: { color: e.colors.gray300 }, secondaryControl: { flexShrink: 0, justifyContent: "center" }, secondaryBorder: { borderStartColor: e.colors.borderColor, borderStartWidth: e.borderWidths.small, paddingHorizontal: e.spaces.space12 } })),
                g = y;
        },
        599190: (e, t, r) => {
            r.d(t, { D: () => o });
            const o = Object.freeze({ Active: "active", Expand: "expand", Remove: "remove" });
        },
        971657: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                n = r(890601),
                i = r(783427),
                c = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        41065: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                n = r(890601),
                i = r(783427),
                c = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        379327: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                n = r(890601),
                i = r(783427),
                c = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                n = r(890601),
                i = r(783427),
                c = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        258292: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                n = r(890601),
                i = r(783427),
                c = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                n = r(890601),
                i = r(783427),
                c = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.topicHandler.a35700fa.js.map
