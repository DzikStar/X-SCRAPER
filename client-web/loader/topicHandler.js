"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.topicHandler"],
    {
        812736: (e, t, o) => {
            o.d(t, { Z: () => S });
            var r = o(202784),
                n = o(325686),
                i = o(952428),
                c = o(731708),
                a = o(909377),
                s = o(392237),
                l = o(332920),
                d = o.n(l),
                p = o(452693),
                m = o(443781),
                h = o(265196),
                u = o(863934),
                f = o(479506),
                y = o(903019),
                b = o(725516),
                g = o(864479);
            const v = d().a2a3824a;
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
                    return r.createElement(i.Z, { "aria-labelledby": [this._topicDomId, this._nameDomId, this._descriptionDomId, this._followButtonDomId, this._notInterestedButtonDomId].join(" "), interactiveStyles: this._topicLink ? void 0 : null, link: this._topicLink, onClick: this._topicLink ? this._handleOnClick : void 0, style: [k.root, k.flexStart], withDarkerInteractiveBackground: t }, r.createElement(n.Z, { style: k.topic }, r.createElement(n.Z, { "aria-label": v, id: this._topicDomId }), this._renderIcon(), r.createElement(n.Z, { style: k.text }, r.createElement(c.ZP, { id: this._nameDomId, weight: o, withInteractiveStyling: !!this._topicLink }, d), l ? r.createElement(c.ZP, { color: "gray700", id: this._descriptionDomId, numberOfLines: 2 }, l) : null)), r.createElement(n.Z, { style: k.buttons }, r.createElement(h.ZP, { educateOnFollow: e, id: this._followButtonDomId, topic: s }), p && a ? r.createElement(u.Z, { id: this._notInterestedButtonDomId, onPress: a, style: k.marginStart, topicId: s.id }) : null));
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
            (I.contextType = m.rC), (I.defaultProps = { nameWeight: "bold", withIcon: !0 });
            const k = s.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, flexStart: { alignItems: "flex-start" }, icon: { alignSelf: "flex-start", marginEnd: e.spaces.space12 }, customIcon: { borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32 }, text: { flexShrink: 1 }, buttons: { alignItems: "center", alignSelf: "center", flexDirection: "row", paddingStart: e.spaces.space8 }, marginStart: { marginStart: e.spaces.space4 }, topic: { alignItems: "center", flexDirection: "row", flexShrink: 1, paddingEnd: e.spaces.space4 } })),
                S = (0, g.Z)((0, b.Z)(I));
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
                        (i.useEffect(() => {
                            p && t.scribeAction("impression");
                        }, [t, p]),
                        !p)
                    )
                        return null;
                    const m = (0, l.z)({ feedbackItems: r, topic: p, topicItemContent: o }),
                        h = o.topicDisplayType === a.M6.Basic;
                    return i.createElement(c.Z, { notInterestedOnClick: m, saveAsRecentSearch: n, shouldStoreTypeaheadItem: d, topic: p, withIcon: h });
                },
                f = (0, d.Z)()
                    .propsFromState(() => ({ topic: h }))
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
            o.r(t), o.d(t, { default: () => z });
            var r = o(459643),
                n = o(351322),
                i = o(202784),
                c = o(325686),
                a = o(247609),
                s = o(392237),
                l = o(638090),
                d = o(725516),
                p = o(599190),
                m = o(973014),
                h = o(332920),
                u = o.n(h),
                f = o(324688),
                y = o(443781),
                b = o(233391),
                g = o(288955),
                v = o(71620),
                w = o(668214),
                I = o(466380);
            const k = (0, w.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, v.zr)("TOPIC_PILL_CONTEXT"), follow: I.Z.follow, unfollow: I.Z.unfollow }))
                    .withAnalytics(),
                S = u().ge8f3043,
                C = u().aa576cbf,
                Z = u().i77347d1,
                E = u().e839db3a,
                x = (e) => {
                    const { loggedInUserId: t } = i.useContext(y.rC),
                        { analytics: o, createLocalApiErrorHandler: r, follow: n, notInterestedOnClick: a, topic: s, unfollow: l, withActionIcon: d } = e,
                        { following: h, id: u, name: v, not_interested: w } = s,
                        I = i.useRef(!1),
                        [k, x] = i.useState(0),
                        _ = i.useCallback(
                            (e) => {
                                if (0 === k) {
                                    const {
                                        nativeEvent: {
                                            layout: { width: t },
                                        },
                                    } = e;
                                    x(t);
                                }
                            },
                            [k],
                        ),
                        A = (e) => {
                            if (!w && d) return h ? p.D.Active : p.D.Expand;
                        },
                        P = (e, t, o) => e(h ? H(o) : L(t)),
                        L = (e) => (t) => {
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
                            if (t && a) return { mode: p.D.Remove, onSecondaryClick: a, "aria-label": Z({ topicName: v }), hoverLabel: E, disabled: h || w };
                        };
                    return i.createElement(g.Z, { customText: v, displayMode: b.BH.topic }, (e) => i.createElement(f.m.Consumer, null, ({ onFollow: t, onInitialize: o, onUnfollow: r }) => (o && !I.current && (o(u, h), (I.current = !0)), i.createElement(c.Z, { onLayout: _, style: [D.root, { minWidth: k }] }, i.createElement(m.Z, { "aria-label": h ? C({ topicName: v }) : S({ topicName: v }), disabled: w, key: u, mode: A(), onClick: P(e, t, r), secondaryAction: R(), selected: h, style: D.pill, text: v })))));
                };
            x.defaultProps = { withActionIcon: !0 };
            const D = s.default.create((e) => ({ root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 }, pill: { textOverflow: "ellipsis" }, roundIcon: { borderRadius: e.borderRadii.infinite, height: "100%", width: "100%" } })),
                _ = k(x);
            var A = o(373867);
            const P = (e, t) => I.Z.select(e, t.entry.content.topicId),
                L = (0, w.Z)().propsFromState(() => ({ topic: P })),
                H = (e) => {
                    const t = (0, d.z)(),
                        {
                            entry: { content: o },
                            feedbackItems: r,
                            topic: n,
                        } = e,
                        { topicDisplayType: s, topicFunctionalityType: p } = o,
                        m = i.useCallback(() => {
                            t.scribeAction("click");
                        }, [t]);
                    if (!n) return null;
                    const h = (0, A.z)({ feedbackItems: r, topic: n, topicItemContent: o }),
                        u = p !== l.xV.Pivot && s !== l.M6.PillWithoutActionIcon;
                    return p === l.xV.Pivot ? i.createElement(c.Z, { style: R.root }, i.createElement(a.Z, { link: `/i/topics/${n.id}`, onClick: m, text: n.name })) : i.createElement(_, { notInterestedOnClick: h, topic: n, withActionIcon: u });
                },
                R = s.default.create((e) => ({ root: { margin: e.spaces.space4 } })),
                B = L(i.memo(H)),
                z = ({ shouldDisplayBorder: e = !1 }) => n.iH({ component: B, isFocusable: (0, r.Z)(!0), getScribeDataItem: A.H, shouldDisplayBorder: (0, r.Z)(e) }).getHandler();
        },
        204744: (e, t, o) => {
            o.d(t, { DI: () => w, H$: () => m, OB: () => I, Ww: () => d, YB: () => p, hj: () => y, qF: () => g });
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
                m = (e) => e[i].fetched,
                h = "rweb/recentSearches/INIT_FROM_CACHE",
                u = (e) => ({ type: h, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                y =
                    (e) =>
                    (t, o, { userPersistence: r }) => {
                        t({ payload: e, type: f });
                        const i = o(),
                            c = d(i);
                        return (0, n.Qb)(i) ? t(a(c)) : Promise.resolve();
                    },
                b = "rweb/recentSearches/CLEAR_ALL",
                g =
                    () =>
                    (e, t, { userPersistence: o }) => {
                        e({ type: b });
                        const r = t(),
                            i = d(r);
                        return (0, n.Qb)(r) ? e(a(i)) : Promise.resolve();
                    },
                v = "rweb/recentSearches/ADD_QUERY",
                w =
                    (e) =>
                    (t, o, { userPersistence: r }) => {
                        t({ payload: e, type: v });
                        const i = o(),
                            c = d(i);
                        return (0, n.Qb)(i) ? t(a(c)) : Promise.resolve();
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
                        case v: {
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
                        m = c.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text });
                    return r.createElement(a.Z, { interactiveStyles: m, link: t, onPress: o, style: [d.root, d.border, d.content] }, r.createElement(i.ZP, { numberOfLines: 1, selectable: !1, style: d.text, weight: "medium" }, n), p);
                };
        },
        973014: (e, t, o) => {
            o.d(t, { Z: () => g });
            var r = o(202784),
                n = o(325686),
                i = o(332920),
                c = o.n(i),
                a = o(837020),
                s = o(379327),
                l = o(913973),
                d = o(731708),
                p = o(58881),
                m = o(530732),
                h = o(392237),
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
                    const { "aria-label": e, avatar: t, compact: o, disabled: i, link: c, mode: a, onClick: s, secondaryAction: l, selected: u, style: y, testID: g, text: v } = this.props,
                        w = this._renderIcon(!0, a),
                        I = l && this._renderIcon(!1, l.mode),
                        k = [b.root, o && b.compact, i && b.disabled, u && b.selected, y],
                        S = [b.content, !!w && b.withIcon, !!t && ((o && b.withAvatarImageCompact) || b.withAvatarImage)],
                        C = p.Z.generate({ backgroundColor: u ? h.default.theme.colors.primary : "transparent", color: u ? h.default.theme.colors.white : h.default.theme.colors.primary });
                    return r.createElement(n.Z, { style: k, testID: g }, r.createElement(m.Z, { "aria-label": e || (a ? f[a] : ""), disabled: i, interactiveStyles: C, link: c, onPress: s, style: S }, this._renderAvatar(), r.createElement(d.ZP, { color: u ? "whiteOnColor" : "text", numberOfLines: 1, selectable: !1, style: b.text, weight: "bold" }, v), w), l ? r.createElement(m.Z, { "aria-label": l["aria-label"] || (l.mode ? f[l.mode] : ""), disabled: i || l.disabled, hoverLabel: { label: l.hoverLabel || (l.mode ? f[l.mode] : "") }, interactiveStyles: C, onPress: this._handleSecondaryClick, style: b.secondaryControl }, r.createElement(n.Z, { style: b.secondaryBorder }, I)) : null);
                }
                _renderIcon(e = !0, t) {
                    const { selected: o } = this.props,
                        n = [b.icon, o && b.iconSelected],
                        i = [b.icon];
                    switch (t) {
                        case u.D.Remove:
                            return r.createElement(a.default, { style: [b.dismissIcon, e && n] });
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
                    return e ? r.createElement(n.Z, { style: [b.avatarContainer, t ? b.avatarCompact : b.avatar] }, e) : null;
                }
            }
            y.defaultProps = { compact: !1, disabled: !1, selected: !1 };
            const b = h.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", flexDirection: "row", minHeight: e.spaces.space40, overflow: "hidden" }, content: { alignItems: "center", flexDirection: "row", flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space16 }, text: { width: "100%" }, compact: { minHeight: e.spaces.space32 }, disabled: { borderColor: e.colors.gray50 }, selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary }, avatar: { height: e.spaces.space32, width: e.spaces.space32 }, avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 }, avatarContainer: { justifyContent: "center", marginEnd: e.spaces.space8 }, withAvatarImage: { paddingStart: `calc(${e.spaces.space2} * 2)` }, withAvatarImageCompact: { paddingStart: `calc(${e.spaces.space1} * 3)` }, icon: { color: e.colors.primary, flexShrink: 0, marginStart: e.spaces.space12 }, iconSelected: { color: e.colors.whiteOnColor }, withIcon: { paddingEnd: e.spaces.space12 }, dismissIcon: { color: e.colors.gray300 }, secondaryControl: { flexShrink: 0, justifyContent: "center" }, secondaryBorder: { borderStartColor: e.colors.borderColor, borderStartWidth: e.borderWidths.small, paddingHorizontal: e.spaces.space12 } })),
                g = y;
        },
        599190: (e, t, o) => {
            o.d(t, { D: () => r });
            const r = Object.freeze({ Active: "active", Expand: "expand", Remove: "remove" });
        },
        58399: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                n = o(890601),
                i = o(783427),
                c = o(717683),
                a = o(347101);
            const s = (e = {}) => {
                const t = r.useContext(c.Z),
                    { direction: o } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style, t && a.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: o });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                i = o(783427),
                c = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        258292: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                i = o(783427),
                c = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.topicHandler.c196df2a.js.map
