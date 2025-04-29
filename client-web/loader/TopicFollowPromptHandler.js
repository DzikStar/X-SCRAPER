"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TopicFollowPromptHandler"],
    {
        812736: (e, t, i) => {
            i.d(t, { Z: () => Z });
            var o = i(202784),
                n = i(325686),
                r = i(952428),
                c = i(731708),
                a = i(909377),
                s = i(392237),
                l = i(674132),
                d = i.n(l),
                p = i(452693),
                m = i(443781),
                h = i(265196),
                u = i(863934),
                g = i(479506),
                I = i(903019),
                v = i(725516),
                b = i(864479);
            const f = d().a2a3824a;
            let w = 0;
            class _ extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._topicLink = { pathname: `/i/topics/${this.props.topic.id}`, state: { referringScribeNamespace: { ...this.props.analytics.contextualScribeNamespace, action: "click" } } }),
                        (this._handleOnClick = () => {
                            const {
                                saveAsRecentSearch: e,
                                shouldStoreTypeaheadItem: t,
                                topic: { description: i, id: o, name: n },
                            } = this.props;
                            e && t && t(g.Z.ItemType.TOPIC) && e({ topic: { id: o, name: n, description: i || "", type: I.g2.Topic } }), this._handleScribe("click");
                        }),
                        (this._topicDomId = `topic${w}`),
                        (this._nameDomId = `topic-name${w}`),
                        (this._descriptionDomId = `topic-description${w}`),
                        (this._followButtonDomId = `topic-follow-button${w}`),
                        (this._notInterestedButtonDomId = `topic-not-interested-button${w}`),
                        (w += 1);
                }
                render() {
                    const { educateOnFollow: e, isInSidebar: t, nameWeight: i, notInterestedOnClick: a, topic: s } = this.props,
                        { description: l, name: d } = s,
                        { loggedInUserId: p } = this.context;
                    return o.createElement(r.Z, { "aria-labelledby": [this._topicDomId, this._nameDomId, this._descriptionDomId, this._followButtonDomId, this._notInterestedButtonDomId].join(" "), interactiveStyles: this._topicLink ? void 0 : null, link: this._topicLink, onClick: this._topicLink ? this._handleOnClick : void 0, style: [y.root, y.flexStart], withDarkerInteractiveBackground: t }, o.createElement(n.Z, { style: y.topic }, o.createElement(n.Z, { "aria-label": f, id: this._topicDomId }), this._renderIcon(), o.createElement(n.Z, { style: y.text }, o.createElement(c.ZP, { id: this._nameDomId, weight: i, withInteractiveStyling: !!this._topicLink }, d), l ? o.createElement(c.ZP, { color: "gray700", id: this._descriptionDomId, numberOfLines: 2 }, l) : null)), o.createElement(n.Z, { style: y.buttons }, o.createElement(h.ZP, { educateOnFollow: e, id: this._followButtonDomId, topic: s }), p && a ? o.createElement(u.Z, { id: this._notInterestedButtonDomId, onPress: a, style: y.marginStart, topicId: s.id }) : null));
                }
                _renderIcon() {
                    const { withIcon: e } = this.props;
                    return e ? o.createElement(a.Z, { Icon: p.default, size: "large", style: y.icon }) : null;
                }
                _handleScribe(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            (_.contextType = m.rC), (_.defaultProps = { nameWeight: "bold", withIcon: !0 });
            const y = s.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, flexStart: { alignItems: "flex-start" }, icon: { alignSelf: "flex-start", marginEnd: e.spaces.space12 }, customIcon: { borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32 }, text: { flexShrink: 1 }, buttons: { alignItems: "center", alignSelf: "center", flexDirection: "row", paddingStart: e.spaces.space8 }, marginStart: { marginStart: e.spaces.space4 }, topic: { alignItems: "center", flexDirection: "row", flexShrink: 1, paddingEnd: e.spaces.space4 } })),
                Z = (0, b.Z)((0, v.Z)(_));
        },
        736462: (e, t, i) => {
            i.r(t), i.d(t, { default: () => b });
            var o = i(942893),
                n = i(351322),
                r = i(202784),
                c = i(325686),
                a = i(731708),
                s = i(392237),
                l = i(812736);
            const d = Object.freeze({ IncentiveFocus: "IncentiveFocus", TopicFocus: "TopicFocus" });
            var p = i(725516),
                m = i(668214),
                h = i(466380);
            const u = (e, t) => h.Z.select(e, t.entry.content.topicId),
                g = ({ entry: e, topic: t }) => {
                    const i = (0, p.z)(),
                        {
                            content: { displayType: o, followIncentiveText: n, followIncentiveTitle: s },
                        } = e,
                        m = o === d.IncentiveFocus;
                    r.useEffect(() => {
                        t && i.scribeAction("impression");
                    }, [i, t]);
                    const h = r.useMemo(() => [v.text, m ? v.noMarginBottom : v.border], [m]);
                    return t ? r.createElement(c.Z, { style: m && v.incentiveFocus }, r.createElement(l.Z, { educateOnFollow: !0, nameWeight: m ? void 0 : "heavy", topic: t, withIcon: !0 }), s || n ? r.createElement(c.Z, { style: h }, s ? r.createElement(a.ZP, { size: "headline1", weight: "bold" }, s) : null, n ? r.createElement(a.ZP, { color: "gray700" }, n) : null) : null) : null;
                },
                I = (0, m.Z)().propsFromState(() => ({ topic: u }))(r.memo(g)),
                v = s.default.create((e) => ({ border: { borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor, marginTop: 0, paddingTop: e.spaces.space12 }, incentiveFocus: { flexDirection: "column-reverse" }, noMarginBottom: { marginBottom: 0 }, text: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical } })),
                b = n.iH({ component: I, getScribeDataItem: (e) => o.Z.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo) }).getHandler();
        },
        971657: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var o = i(202784),
                n = i(890601),
                r = i(783427),
                c = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        98440: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var o = i(202784),
                n = i(890601),
                r = i(783427),
                c = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TopicFollowPromptHandler.6c7daa2a.js.map
