"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TopicFollowPromptHandler"],
    {
        812736: (e, t, o) => {
            o.d(t, { Z: () => D });
            var i = o(202784),
                n = o(325686),
                r = o(952428),
                c = o(731708),
                s = o(909377),
                a = o(392237),
                l = o(674132),
                d = o.n(l),
                p = o(452693),
                m = o(443781),
                h = o(265196),
                u = o(863934),
                I = o(479506),
                g = o(903019),
                b = o(725516),
                f = o(864479);
            const _ = d().a2a3824a;
            let w = 0;
            class y extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._topicLink = { pathname: `/i/topics/${this.props.topic.id}`, state: { referringScribeNamespace: { ...this.props.analytics.contextualScribeNamespace, action: "click" } } }),
                        (this._handleOnClick = () => {
                            const {
                                saveAsRecentSearch: e,
                                shouldStoreTypeaheadItem: t,
                                topic: { description: o, id: i, name: n },
                            } = this.props;
                            e && t && t(I.Z.ItemType.TOPIC) && e({ topic: { id: i, name: n, description: o || "", type: g.g2.Topic } }), this._handleScribe("click");
                        }),
                        (this._topicDomId = `topic${w}`),
                        (this._nameDomId = `topic-name${w}`),
                        (this._descriptionDomId = `topic-description${w}`),
                        (this._followButtonDomId = `topic-follow-button${w}`),
                        (this._notInterestedButtonDomId = `topic-not-interested-button${w}`),
                        (w += 1);
                }
                render() {
                    const { educateOnFollow: e, isInSidebar: t, nameWeight: o, notInterestedOnClick: s, topic: a } = this.props,
                        { description: l, name: d } = a,
                        { loggedInUserId: p } = this.context;
                    return i.createElement(r.Z, { "aria-labelledby": [this._topicDomId, this._nameDomId, this._descriptionDomId, this._followButtonDomId, this._notInterestedButtonDomId].join(" "), interactiveStyles: this._topicLink ? void 0 : null, link: this._topicLink, onClick: this._topicLink ? this._handleOnClick : void 0, style: [v.root, v.flexStart], withDarkerInteractiveBackground: t }, i.createElement(n.Z, { style: v.topic }, i.createElement(n.Z, { "aria-label": _, id: this._topicDomId }), this._renderIcon(), i.createElement(n.Z, { style: v.text }, i.createElement(c.ZP, { id: this._nameDomId, weight: o, withInteractiveStyling: !!this._topicLink }, d), l ? i.createElement(c.ZP, { color: "gray700", id: this._descriptionDomId, numberOfLines: 2 }, l) : null)), i.createElement(n.Z, { style: v.buttons }, i.createElement(h.ZP, { educateOnFollow: e, id: this._followButtonDomId, topic: a }), p && s ? i.createElement(u.Z, { id: this._notInterestedButtonDomId, onPress: s, style: v.marginStart, topicId: a.id }) : null));
                }
                _renderIcon() {
                    const { withIcon: e } = this.props;
                    return e ? i.createElement(s.Z, { Icon: p.default, size: "large", style: v.icon }) : null;
                }
                _handleScribe(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            (y.contextType = m.rC), (y.defaultProps = { nameWeight: "bold", withIcon: !0 });
            const v = a.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, flexStart: { alignItems: "flex-start" }, icon: { alignSelf: "flex-start", marginEnd: e.spaces.space12 }, customIcon: { borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32 }, text: { flexShrink: 1 }, buttons: { alignItems: "center", alignSelf: "center", flexDirection: "row", paddingStart: e.spaces.space8 }, marginStart: { marginStart: e.spaces.space4 }, topic: { alignItems: "center", flexDirection: "row", flexShrink: 1, paddingEnd: e.spaces.space4 } })),
                D = (0, f.Z)((0, b.Z)(y));
        },
        736462: (e, t, o) => {
            o.r(t), o.d(t, { default: () => f });
            var i = o(942893),
                n = o(351322),
                r = o(202784),
                c = o(325686),
                s = o(731708),
                a = o(392237),
                l = o(812736);
            const d = Object.freeze({ IncentiveFocus: "IncentiveFocus", TopicFocus: "TopicFocus" });
            var p = o(725516),
                m = o(668214),
                h = o(466380);
            const u = (e, t) => h.Z.select(e, t.entry.content.topicId),
                I = ({ entry: e, topic: t }) => {
                    const o = (0, p.z)(),
                        {
                            content: { displayType: i, followIncentiveText: n, followIncentiveTitle: a },
                        } = e,
                        m = i === d.IncentiveFocus;
                    r.useEffect(() => {
                        t && o.scribeAction("impression");
                    }, [o, t]);
                    const h = r.useMemo(() => [b.text, m ? b.noMarginBottom : b.border], [m]);
                    return t ? r.createElement(c.Z, { style: m && b.incentiveFocus }, r.createElement(l.Z, { educateOnFollow: !0, nameWeight: m ? void 0 : "heavy", topic: t, withIcon: !0 }), a || n ? r.createElement(c.Z, { style: h }, a ? r.createElement(s.ZP, { size: "headline1", weight: "bold" }, a) : null, n ? r.createElement(s.ZP, { color: "gray700" }, n) : null) : null) : null;
                },
                g = (0, m.Z)().propsFromState(() => ({ topic: u }))(r.memo(I)),
                b = a.default.create((e) => ({ border: { borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor, marginTop: 0, paddingTop: e.spaces.space12 }, incentiveFocus: { flexDirection: "column-reverse" }, noMarginBottom: { marginBottom: 0 }, text: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical } })),
                f = n.iH({ component: g, getScribeDataItem: (e) => i.Z.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo) }).getHandler();
        },
        76388: (e, t, o) => {
            o.r(t), o.d(t, { default: () => a });
            var i = o(202784),
                n = o(890601),
                r = o(783427),
                c = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const a = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TopicFollowPromptHandler.31253daa.js.map
