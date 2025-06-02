"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.topicHandler", "icons/IconPlus-js"],
    {
        812736: (e, t, o) => {
            o.d(t, { Z: () => S });
            var r = o(202784),
                n = o(325686),
                i = o(952428),
                c = o(731708),
                a = o(909377),
                s = o(392237),
                l = o(111677),
                d = o.n(l),
                p = o(452693),
                h = o(443781),
                m = o(265196),
                u = o(863934),
                f = o(479506),
                y = o(903019),
                v = o(725516),
                b = o(864479);
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
                    return r.createElement(i.Z, { "aria-labelledby": [this._topicDomId, this._nameDomId, this._descriptionDomId, this._followButtonDomId, this._notInterestedButtonDomId].join(" "), interactiveStyles: this._topicLink ? void 0 : null, link: this._topicLink, onClick: this._topicLink ? this._handleOnClick : void 0, style: [k.root, k.flexStart], withDarkerInteractiveBackground: t }, r.createElement(n.Z, { style: k.topic }, r.createElement(n.Z, { "aria-label": g, id: this._topicDomId }), this._renderIcon(), r.createElement(n.Z, { style: k.text }, r.createElement(c.ZP, { id: this._nameDomId, weight: o, withInteractiveStyling: !!this._topicLink }, d), l ? r.createElement(c.ZP, { color: "gray700", id: this._descriptionDomId, numberOfLines: 2 }, l) : null)), r.createElement(n.Z, { style: k.buttons }, r.createElement(m.ZP, { educateOnFollow: e, id: this._followButtonDomId, topic: s }), p && a ? r.createElement(u.Z, { id: this._notInterestedButtonDomId, onPress: a, style: k.marginStart, topicId: s.id }) : null));
                }
                _renderIcon() {
                    const { withIcon: e } = this.props;
                    return e ? r.createElement(a.Z, { Icon: p.default, size: "large", style: k.icon }) : null;
                }
                _handleScribe(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            (I.contextType = h.rC), (I.defaultProps = { nameWeight: "bold", withIcon: !0 });
            const k = s.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, flexStart: { alignItems: "flex-start" }, icon: { alignSelf: "flex-start", marginEnd: e.spaces.space12 }, customIcon: { borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32 }, text: { flexShrink: 1 }, buttons: { alignItems: "center", alignSelf: "center", flexDirection: "row", paddingStart: e.spaces.space8 }, marginStart: { marginStart: e.spaces.space4 }, topic: { alignItems: "center", flexDirection: "row", flexShrink: 1, paddingEnd: e.spaces.space4 } })),
                S = (0, b.Z)((0, v.Z)(I));
        },
        542981: (e, t, o) => {
            o.r(t), o.d(t, { default: () => y });
            var r = o(459643),
                n = o(351322),
                i = o(202784),
                c = o(812736),
                a = o(638090),
                s = o(725516),
                l = o(373867),
                d = o(668214),
                p = o(204744),
                h = o(466380);
            const m = (e, t) => h.Z.select(e, t.entry.content.topicId),
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
                        (i.useEffect(() => {
                            p && t.scribeAction("impression");
                        }, [t, p]),
                        !p)
                    )
                        return null;
                    const h = (0, l.z)({ feedbackItems: r, topic: p, topicItemContent: o }),
                        m = o.topicDisplayType === a.M6.Basic;
                    return i.createElement(c.Z, { notInterestedOnClick: h, saveAsRecentSearch: n, shouldStoreTypeaheadItem: d, topic: p, withIcon: m });
                },
                f = (0, d.Z)()
                    .propsFromState(() => ({ topic: m }))
                    .propsFromActions(() => ({ saveAsRecentSearch: p.DI }))(i.memo(u)),
                y = (e) => n.iH({ component: f, isFocusable: (0, r.Z)(!0), getScribeDataItem: l.H, shouldDisplayBorder: (0, r.Z)(!1) }).getHandler(() => ({ ...e }));
        },
        373867: (e, t, o) => {
            o.d(t, { H: () => c, z: () => i });
            var r = o(942893),
                n = o(638090);
            const i = ({ feedbackItems: e, topic: t, topicItemContent: o }) => {
                    const r = o.topicFunctionalityType === n.xV.Recommendation,
                        i = 1 === e?.length ? e[0].onClick : void 0;
                    return !t?.not_interested && !t?.following && r ? i : void 0;
                },
                c = (e) => r.Z.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo);
        },
        117004: (e, t, o) => {
            o.r(t), o.d(t, { default: () => O });
            var r = o(459643),
                n = o(351322),
                i = o(202784),
                c = o(325686),
                a = o(247609),
                s = o(392237),
                l = o(638090),
                d = o(725516),
                p = o(599190),
                h = o(973014),
                m = o(111677),
                u = o.n(m),
                f = o(324688),
                y = o(443781),
                v = o(233391),
                b = o(288955),
                g = o(71620),
                w = o(668214),
                I = o(466380);
            const k = (0, w.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("TOPIC_PILL_CONTEXT"), follow: I.Z.follow, unfollow: I.Z.unfollow }))
                    .withAnalytics(),
                S = u().ge8f3043,
                C = u().aa576cbf,
                E = u().i77347d1,
                x = u().e839db3a,
                Z = (e) => {
                    const { loggedInUserId: t } = i.useContext(y.rC),
                        { analytics: o, createLocalApiErrorHandler: r, follow: n, notInterestedOnClick: a, topic: s, unfollow: l, withActionIcon: d } = e,
                        { following: m, id: u, name: g, not_interested: w } = s,
                        I = i.useRef(!1),
                        [k, Z] = i.useState(0),
                        _ = i.useCallback(
                            (e) => {
                                if (0 === k) {
                                    const {
                                        nativeEvent: {
                                            layout: { width: t },
                                        },
                                    } = e;
                                    Z(t);
                                }
                            },
                            [k],
                        ),
                        A = (e) => {
                            if (!w && d) return m ? p.D.Active : p.D.Expand;
                        },
                        P = (e, t, o) => e(m ? z(o) : H(t)),
                        H = (e) => (t) => {
                            n(u)
                                .catch(r())
                                .then(e && e(u)),
                                o.scribeAction("follow");
                        },
                        z = (e) => (t) => {
                            l(u)
                                .catch(r())
                                .then(e && e(u)),
                                o.scribeAction("unfollow");
                        },
                        R = (e, o, r) => {
                            if (t && a) return { mode: p.D.Remove, onSecondaryClick: a, "aria-label": E({ topicName: g }), hoverLabel: x, disabled: m || w };
                        };
                    return i.createElement(b.Z, { customText: g, displayMode: v.BH.topic }, (e) => i.createElement(f.m.Consumer, null, ({ onFollow: t, onInitialize: o, onUnfollow: r }) => (o && !I.current && (o(u, m), (I.current = !0)), i.createElement(c.Z, { onLayout: _, style: [D.root, { minWidth: k }] }, i.createElement(h.Z, { "aria-label": m ? C({ topicName: g }) : S({ topicName: g }), disabled: w, key: u, mode: A(), onClick: P(e, t, r), secondaryAction: R(), selected: m, style: D.pill, text: g })))));
                };
            Z.defaultProps = { withActionIcon: !0 };
            const D = s.default.create((e) => ({ root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 }, pill: { textOverflow: "ellipsis" }, roundIcon: { borderRadius: e.borderRadii.infinite, height: "100%", width: "100%" } })),
                _ = k(Z);
            var A = o(373867);
            const P = (e, t) => I.Z.select(e, t.entry.content.topicId),
                H = (0, w.Z)().propsFromState(() => ({ topic: P })),
                z = (e) => {
                    const t = (0, d.z)(),
                        {
                            entry: { content: o },
                            feedbackItems: r,
                            topic: n,
                        } = e,
                        { topicDisplayType: s, topicFunctionalityType: p } = o,
                        h = i.useCallback(() => {
                            t.scribeAction("click");
                        }, [t]);
                    if (!n) return null;
                    const m = (0, A.z)({ feedbackItems: r, topic: n, topicItemContent: o }),
                        u = p !== l.xV.Pivot && s !== l.M6.PillWithoutActionIcon;
                    return p === l.xV.Pivot ? i.createElement(c.Z, { style: R.root }, i.createElement(a.Z, { link: `/i/topics/${n.id}`, onClick: h, text: n.name })) : i.createElement(_, { notInterestedOnClick: m, topic: n, withActionIcon: u });
                },
                R = s.default.create((e) => ({ root: { margin: e.spaces.space4 } })),
                B = H(i.memo(z)),
                O = ({ shouldDisplayBorder: e = !1 }) => n.iH({ component: B, isFocusable: (0, r.Z)(!0), getScribeDataItem: A.H, shouldDisplayBorder: (0, r.Z)(e) }).getHandler();
        },
        204744: (e, t, o) => {
            o.d(t, { DI: () => w, H$: () => h, OB: () => I, Ww: () => d, YB: () => p, hj: () => y, qF: () => b });
            o(901951);
            var r = o(499627),
                n = o(390387);
            const i = "recentSearches",
                c = "rweb.recentSearches",
                a =
                    (e) =>
                    (t, o, { userPersistence: r }) =>
                        r.set(c, { recentSearches: e }).catch(() => {
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
            const d = (e) => e[i].recentSearches,
                p = (e) => d(e)[0] || null,
                h = (e) => e[i].fetched,
                m = "rweb/recentSearches/INIT_FROM_CACHE",
                u = (e) => ({ type: m, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                y =
                    (e) =>
                    (t, o, { userPersistence: r }) => {
                        t({ payload: e, type: f });
                        const i = o(),
                            c = d(i);
                        return (0, n.Qb)(i) ? t(a(c)) : Promise.resolve();
                    },
                v = "rweb/recentSearches/CLEAR_ALL",
                b =
                    () =>
                    (e, t, { userPersistence: o }) => {
                        e({ type: v });
                        const r = t(),
                            i = d(r);
                        return (0, n.Qb)(r) ? e(a(i)) : Promise.resolve();
                    },
                g = "rweb/recentSearches/ADD_QUERY",
                w =
                    (e) =>
                    (t, o, { userPersistence: r }) => {
                        t({ payload: e, type: g });
                        const i = o(),
                            c = d(i);
                        return (0, n.Qb)(i) ? t(a(c)) : Promise.resolve();
                    },
                I =
                    () =>
                    (e, t, { userPersistence: o }) => {
                        const r = t();
                        return h(r)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: o }) => {
                                  const r = t();
                                  return (0, n.Qb)(r)
                                      ? o
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
            r.Z.register({
                [i]: function (e = l, t) {
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
                        case v:
                            return { fetched: !0, recentSearches: [] };
                        case m:
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
                i = o(731708),
                c = o(58881),
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
                        h = c.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text });
                    return r.createElement(a.Z, { interactiveStyles: h, link: t, onPress: o, style: [d.root, d.border, d.content] }, r.createElement(i.ZP, { numberOfLines: 1, selectable: !1, style: d.text, weight: "medium" }, n), p);
                };
        },
        973014: (e, t, o) => {
            o.d(t, { Z: () => b });
            var r = o(202784),
                n = o(325686),
                i = o(111677),
                c = o.n(i),
                a = o(837020),
                s = o(379327),
                l = o(913973),
                d = o(731708),
                p = o(58881),
                h = o(530732),
                m = o(392237),
                u = o(599190);
            const f = { active: c().e557ad8e, expand: c().e3a58c28, remove: c().h517e8d8 };
            class y extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleSecondaryClick = () => {
                            const { secondaryAction: e } = this.props;
                            e && e.onSecondaryClick();
                        });
                }
                render() {
                    const { "aria-label": e, avatar: t, compact: o, disabled: i, link: c, mode: a, onClick: s, secondaryAction: l, selected: u, style: y, testID: b, text: g } = this.props,
                        w = this._renderIcon(!0, a),
                        I = l && this._renderIcon(!1, l.mode),
                        k = [v.root, o && v.compact, i && v.disabled, u && v.selected, y],
                        S = [v.content, !!w && v.withIcon, !!t && ((o && v.withAvatarImageCompact) || v.withAvatarImage)],
                        C = p.Z.generate({ backgroundColor: u ? m.default.theme.colors.primary : "transparent", color: u ? m.default.theme.colors.white : m.default.theme.colors.primary });
                    return r.createElement(n.Z, { style: k, testID: b }, r.createElement(h.Z, { "aria-label": e || (a ? f[a] : ""), disabled: i, interactiveStyles: C, link: c, onPress: s, style: S }, this._renderAvatar(), r.createElement(d.ZP, { color: u ? "whiteOnColor" : "text", numberOfLines: 1, selectable: !1, style: v.text, weight: "bold" }, g), w), l ? r.createElement(h.Z, { "aria-label": l["aria-label"] || (l.mode ? f[l.mode] : ""), disabled: i || l.disabled, hoverLabel: { label: l.hoverLabel || (l.mode ? f[l.mode] : "") }, interactiveStyles: C, onPress: this._handleSecondaryClick, style: v.secondaryControl }, r.createElement(n.Z, { style: v.secondaryBorder }, I)) : null);
                }
                _renderIcon(e = !0, t) {
                    const { selected: o } = this.props,
                        n = [v.icon, o && v.iconSelected],
                        i = [v.icon];
                    switch (t) {
                        case u.D.Remove:
                            return r.createElement(a.default, { style: [v.dismissIcon, e && n] });
                        case u.D.Expand:
                            return r.createElement(s.default, { style: e ? n : i });
                        case u.D.Active:
                            return r.createElement(l.default, { style: n });
                        default:
                            return null;
                    }
                }
                _renderAvatar() {
                    const { avatar: e, compact: t } = this.props;
                    return e ? r.createElement(n.Z, { style: [v.avatarContainer, t ? v.avatarCompact : v.avatar] }, e) : null;
                }
            }
            y.defaultProps = { compact: !1, disabled: !1, selected: !1 };
            const v = m.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", flexDirection: "row", minHeight: e.spaces.space40, overflow: "hidden" }, content: { alignItems: "center", flexDirection: "row", flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space16 }, text: { width: "100%" }, compact: { minHeight: e.spaces.space32 }, disabled: { borderColor: e.colors.gray50 }, selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary }, avatar: { height: e.spaces.space32, width: e.spaces.space32 }, avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 }, avatarContainer: { justifyContent: "center", marginEnd: e.spaces.space8 }, withAvatarImage: { paddingStart: `calc(${e.spaces.space2} * 2)` }, withAvatarImageCompact: { paddingStart: `calc(${e.spaces.space1} * 3)` }, icon: { color: e.colors.primary, flexShrink: 0, marginStart: e.spaces.space12 }, iconSelected: { color: e.colors.whiteOnColor }, withIcon: { paddingEnd: e.spaces.space12 }, dismissIcon: { color: e.colors.gray300 }, secondaryControl: { flexShrink: 0, justifyContent: "center" }, secondaryBorder: { borderStartColor: e.colors.borderColor, borderStartWidth: e.borderWidths.small, paddingHorizontal: e.spaces.space12 } })),
                b = y;
        },
        599190: (e, t, o) => {
            o.d(t, { D: () => r });
            const r = Object.freeze({ Active: "active", Expand: "expand", Remove: "remove" });
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                i = o(783427),
                c = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        379327: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                i = o(783427),
                c = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        452693: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                i = o(783427),
                c = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.topicHandler.f1be30ca.js.map
