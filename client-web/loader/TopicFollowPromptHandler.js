"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TopicFollowPromptHandler"],
    {
        812736: (e, t, o) => {
            o.d(t, { Z: () => v });
            var n = o(202784),
                i = o(325686),
                c = o(952428),
                r = o(731708),
                s = o(909377),
                a = o(392237),
                l = o(111677),
                d = o.n(l),
                p = o(452693),
                m = o(443781),
                h = o(265196),
                u = o(863934),
                I = o(479506),
                g = o(903019),
                f = o(725516),
                b = o(864479);
            const _ = d().a2a3824a;
            let w = 0;
            class y extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._topicLink = { pathname: `/i/topics/${this.props.topic.id}`, state: { referringScribeNamespace: { ...this.props.analytics.contextualScribeNamespace, action: "click" } } }),
                        (this._handleOnClick = () => {
                            const {
                                saveAsRecentSearch: e,
                                shouldStoreTypeaheadItem: t,
                                topic: { description: o, id: n, name: i },
                            } = this.props;
                            e && t && t(I.Z.ItemType.TOPIC) && e({ topic: { id: n, name: i, description: o || "", type: g.g2.Topic } }), this._handleScribe("click");
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
                    return n.createElement(c.Z, { "aria-labelledby": [this._topicDomId, this._nameDomId, this._descriptionDomId, this._followButtonDomId, this._notInterestedButtonDomId].join(" "), interactiveStyles: this._topicLink ? void 0 : null, link: this._topicLink, onClick: this._topicLink ? this._handleOnClick : void 0, style: [D.root, D.flexStart], withDarkerInteractiveBackground: t }, n.createElement(i.Z, { style: D.topic }, n.createElement(i.Z, { "aria-label": _, id: this._topicDomId }), this._renderIcon(), n.createElement(i.Z, { style: D.text }, n.createElement(r.ZP, { id: this._nameDomId, weight: o, withInteractiveStyling: !!this._topicLink }, d), l ? n.createElement(r.ZP, { color: "gray700", id: this._descriptionDomId, numberOfLines: 2 }, l) : null)), n.createElement(i.Z, { style: D.buttons }, n.createElement(h.ZP, { educateOnFollow: e, id: this._followButtonDomId, topic: a }), p && s ? n.createElement(u.Z, { id: this._notInterestedButtonDomId, onPress: s, style: D.marginStart, topicId: a.id }) : null));
                }
                _renderIcon() {
                    const { withIcon: e } = this.props;
                    return e ? n.createElement(s.Z, { Icon: p.default, size: "large", style: D.icon }) : null;
                }
                _handleScribe(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            (y.contextType = m.rC), (y.defaultProps = { nameWeight: "bold", withIcon: !0 });
            const D = a.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, flexStart: { alignItems: "flex-start" }, icon: { alignSelf: "flex-start", marginEnd: e.spaces.space12 }, customIcon: { borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32 }, text: { flexShrink: 1 }, buttons: { alignItems: "center", alignSelf: "center", flexDirection: "row", paddingStart: e.spaces.space8 }, marginStart: { marginStart: e.spaces.space4 }, topic: { alignItems: "center", flexDirection: "row", flexShrink: 1, paddingEnd: e.spaces.space4 } })),
                v = (0, b.Z)((0, f.Z)(y));
        },
        736462: (e, t, o) => {
            o.r(t), o.d(t, { default: () => b });
            var n = o(942893),
                i = o(351322),
                c = o(202784),
                r = o(325686),
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
                            content: { displayType: n, followIncentiveText: i, followIncentiveTitle: a },
                        } = e,
                        m = n === d.IncentiveFocus;
                    c.useEffect(() => {
                        t && o.scribeAction("impression");
                    }, [o, t]);
                    const h = c.useMemo(() => [f.text, m ? f.noMarginBottom : f.border], [m]);
                    return t ? c.createElement(r.Z, { style: m && f.incentiveFocus }, c.createElement(l.Z, { educateOnFollow: !0, nameWeight: m ? void 0 : "heavy", topic: t, withIcon: !0 }), a || i ? c.createElement(r.Z, { style: h }, a ? c.createElement(s.ZP, { size: "headline1", weight: "bold" }, a) : null, i ? c.createElement(s.ZP, { color: "gray700" }, i) : null) : null) : null;
                },
                g = (0, m.Z)().propsFromState(() => ({ topic: u }))(c.memo(I)),
                f = a.default.create((e) => ({ border: { borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor, marginTop: 0, paddingTop: e.spaces.space12 }, incentiveFocus: { flexDirection: "column-reverse" }, noMarginBottom: { marginBottom: 0 }, text: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical } })),
                b = i.iH({ component: g, getScribeDataItem: (e) => n.Z.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo) }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TopicFollowPromptHandler.acb97f4a.js.map
