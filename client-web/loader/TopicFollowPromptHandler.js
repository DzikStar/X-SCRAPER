"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TopicFollowPromptHandler"],
    {
        812736: (e, t, o) => {
            o.d(t, { Z: () => D });
            var i = o(202784),
                n = o(325686),
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
                b = o(725516),
                f = o(864479);
            const v = d().a2a3824a;
            let _ = 0;
            class w extends i.Component {
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
                        (this._topicDomId = `topic${_}`),
                        (this._nameDomId = `topic-name${_}`),
                        (this._descriptionDomId = `topic-description${_}`),
                        (this._followButtonDomId = `topic-follow-button${_}`),
                        (this._notInterestedButtonDomId = `topic-not-interested-button${_}`),
                        (_ += 1);
                }
                render() {
                    const { educateOnFollow: e, isInSidebar: t, nameWeight: o, notInterestedOnClick: s, topic: a } = this.props,
                        { description: l, name: d } = a,
                        { loggedInUserId: p } = this.context;
                    return i.createElement(c.Z, { "aria-labelledby": [this._topicDomId, this._nameDomId, this._descriptionDomId, this._followButtonDomId, this._notInterestedButtonDomId].join(" "), interactiveStyles: this._topicLink ? void 0 : null, link: this._topicLink, onClick: this._topicLink ? this._handleOnClick : void 0, style: [y.root, y.flexStart], withDarkerInteractiveBackground: t }, i.createElement(n.Z, { style: y.topic }, i.createElement(n.Z, { "aria-label": v, id: this._topicDomId }), this._renderIcon(), i.createElement(n.Z, { style: y.text }, i.createElement(r.ZP, { id: this._nameDomId, weight: o, withInteractiveStyling: !!this._topicLink }, d), l ? i.createElement(r.ZP, { color: "gray700", id: this._descriptionDomId, numberOfLines: 2 }, l) : null)), i.createElement(n.Z, { style: y.buttons }, i.createElement(h.ZP, { educateOnFollow: e, id: this._followButtonDomId, topic: a }), p && s ? i.createElement(u.Z, { id: this._notInterestedButtonDomId, onPress: s, style: y.marginStart, topicId: a.id }) : null));
                }
                _renderIcon() {
                    const { withIcon: e } = this.props;
                    return e ? i.createElement(s.Z, { Icon: p.default, size: "large", style: y.icon }) : null;
                }
                _handleScribe(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            (w.contextType = m.rC), (w.defaultProps = { nameWeight: "bold", withIcon: !0 });
            const y = a.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, flexStart: { alignItems: "flex-start" }, icon: { alignSelf: "flex-start", marginEnd: e.spaces.space12 }, customIcon: { borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32 }, text: { flexShrink: 1 }, buttons: { alignItems: "center", alignSelf: "center", flexDirection: "row", paddingStart: e.spaces.space8 }, marginStart: { marginStart: e.spaces.space4 }, topic: { alignItems: "center", flexDirection: "row", flexShrink: 1, paddingEnd: e.spaces.space4 } })),
                D = (0, f.Z)((0, b.Z)(w));
        },
        736462: (e, t, o) => {
            o.r(t), o.d(t, { default: () => f });
            var i = o(942893),
                n = o(351322),
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
                            content: { displayType: i, followIncentiveText: n, followIncentiveTitle: a },
                        } = e,
                        m = i === d.IncentiveFocus;
                    c.useEffect(() => {
                        t && o.scribeAction("impression");
                    }, [o, t]);
                    const h = c.useMemo(() => [b.text, m ? b.noMarginBottom : b.border], [m]);
                    return t ? c.createElement(r.Z, { style: m && b.incentiveFocus }, c.createElement(l.Z, { educateOnFollow: !0, nameWeight: m ? void 0 : "heavy", topic: t, withIcon: !0 }), a || n ? c.createElement(r.Z, { style: h }, a ? c.createElement(s.ZP, { size: "headline1", weight: "bold" }, a) : null, n ? c.createElement(s.ZP, { color: "gray700" }, n) : null) : null) : null;
                },
                g = (0, m.Z)().propsFromState(() => ({ topic: u }))(c.memo(I)),
                b = a.default.create((e) => ({ border: { borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor, marginTop: 0, paddingTop: e.spaces.space12 }, incentiveFocus: { flexDirection: "column-reverse" }, noMarginBottom: { marginBottom: 0 }, text: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical } })),
                f = n.iH({ component: g, getScribeDataItem: (e) => i.Z.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo) }).getHandler();
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => a });
            var i = o(202784),
                n = o(890601),
                c = o(783427),
                r = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, c.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const a = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TopicFollowPromptHandler.8d4a19aa.js.map
