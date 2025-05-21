"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TopicFollowPromptHandler"],
    {
        812736: (e, t, i) => {
            i.d(t, { Z: () => _ });
            var o = i(202784),
                n = i(325686),
                r = i(952428),
                c = i(731708),
                a = i(909377),
                l = i(392237),
                s = i(332920),
                d = i.n(s),
                m = i(452693),
                p = i(443781),
                h = i(265196),
                u = i(863934),
                g = i(479506),
                v = i(903019),
                I = i(725516),
                b = i(864479);
            const w = d().a2a3824a;
            let f = 0;
            class Z extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._topicLink = { pathname: `/i/topics/${this.props.topic.id}`, state: { referringScribeNamespace: { ...this.props.analytics.contextualScribeNamespace, action: "click" } } }),
                        (this._handleOnClick = () => {
                            const {
                                saveAsRecentSearch: e,
                                shouldStoreTypeaheadItem: t,
                                topic: { description: i, id: o, name: n },
                            } = this.props;
                            e && t && t(g.Z.ItemType.TOPIC) && e({ topic: { id: o, name: n, description: i || "", type: v.g2.Topic } }), this._handleScribe("click");
                        }),
                        (this._topicDomId = `topic${f}`),
                        (this._nameDomId = `topic-name${f}`),
                        (this._descriptionDomId = `topic-description${f}`),
                        (this._followButtonDomId = `topic-follow-button${f}`),
                        (this._notInterestedButtonDomId = `topic-not-interested-button${f}`),
                        (f += 1);
                }
                render() {
                    const { educateOnFollow: e, isInSidebar: t, nameWeight: i, notInterestedOnClick: a, topic: l } = this.props,
                        { description: s, name: d } = l,
                        { loggedInUserId: m } = this.context;
                    return o.createElement(r.Z, { "aria-labelledby": [this._topicDomId, this._nameDomId, this._descriptionDomId, this._followButtonDomId, this._notInterestedButtonDomId].join(" "), interactiveStyles: this._topicLink ? void 0 : null, link: this._topicLink, onClick: this._topicLink ? this._handleOnClick : void 0, style: [y.root, y.flexStart], withDarkerInteractiveBackground: t }, o.createElement(n.Z, { style: y.topic }, o.createElement(n.Z, { "aria-label": w, id: this._topicDomId }), this._renderIcon(), o.createElement(n.Z, { style: y.text }, o.createElement(c.ZP, { id: this._nameDomId, weight: i, withInteractiveStyling: !!this._topicLink }, d), s ? o.createElement(c.ZP, { color: "gray700", id: this._descriptionDomId, numberOfLines: 2 }, s) : null)), o.createElement(n.Z, { style: y.buttons }, o.createElement(h.ZP, { educateOnFollow: e, id: this._followButtonDomId, topic: l }), m && a ? o.createElement(u.Z, { id: this._notInterestedButtonDomId, onPress: a, style: y.marginStart, topicId: l.id }) : null));
                }
                _renderIcon() {
                    const { withIcon: e } = this.props;
                    return e ? o.createElement(a.Z, { Icon: m.default, size: "large", style: y.icon }) : null;
                }
                _handleScribe(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            (Z.contextType = p.rC), (Z.defaultProps = { nameWeight: "bold", withIcon: !0 });
            const y = l.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, flexStart: { alignItems: "flex-start" }, icon: { alignSelf: "flex-start", marginEnd: e.spaces.space12 }, customIcon: { borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32 }, text: { flexShrink: 1 }, buttons: { alignItems: "center", alignSelf: "center", flexDirection: "row", paddingStart: e.spaces.space8 }, marginStart: { marginStart: e.spaces.space4 }, topic: { alignItems: "center", flexDirection: "row", flexShrink: 1, paddingEnd: e.spaces.space4 } })),
                _ = (0, b.Z)((0, I.Z)(Z));
        },
        736462: (e, t, i) => {
            i.r(t), i.d(t, { default: () => b });
            var o = i(942893),
                n = i(351322),
                r = i(202784),
                c = i(325686),
                a = i(731708),
                l = i(392237),
                s = i(812736);
            const d = Object.freeze({ IncentiveFocus: "IncentiveFocus", TopicFocus: "TopicFocus" });
            var m = i(725516),
                p = i(668214),
                h = i(466380);
            const u = (e, t) => h.Z.select(e, t.entry.content.topicId),
                g = ({ entry: e, topic: t }) => {
                    const i = (0, m.z)(),
                        {
                            content: { displayType: o, followIncentiveText: n, followIncentiveTitle: l },
                        } = e,
                        p = o === d.IncentiveFocus;
                    r.useEffect(() => {
                        t && i.scribeAction("impression");
                    }, [i, t]);
                    const h = r.useMemo(() => [I.text, p ? I.noMarginBottom : I.border], [p]);
                    return t ? r.createElement(c.Z, { style: p && I.incentiveFocus }, r.createElement(s.Z, { educateOnFollow: !0, nameWeight: p ? void 0 : "heavy", topic: t, withIcon: !0 }), l || n ? r.createElement(c.Z, { style: h }, l ? r.createElement(a.ZP, { size: "headline1", weight: "bold" }, l) : null, n ? r.createElement(a.ZP, { color: "gray700" }, n) : null) : null) : null;
                },
                v = (0, p.Z)().propsFromState(() => ({ topic: u }))(r.memo(g)),
                I = l.default.create((e) => ({ border: { borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor, marginTop: 0, paddingTop: e.spaces.space12 }, incentiveFocus: { flexDirection: "column-reverse" }, noMarginBottom: { marginBottom: 0 }, text: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical } })),
                b = n.iH({ component: v, getScribeDataItem: (e) => o.Z.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo) }).getHandler();
        },
        971657: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var o = i(202784),
                n = i(890601),
                r = i(783427),
                c = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        41065: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var o = i(202784),
                n = i(890601),
                r = i(783427),
                c = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        98440: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var o = i(202784),
                n = i(890601),
                r = i(783427),
                c = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        258292: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var o = i(202784),
                n = i(890601),
                r = i(783427),
                c = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        452693: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var o = i(202784),
                n = i(890601),
                r = i(783427),
                c = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TopicFollowPromptHandler.53f04eda.js.map
