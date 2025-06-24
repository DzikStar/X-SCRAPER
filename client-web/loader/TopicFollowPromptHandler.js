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
                l = i(111677),
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
        748138: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var o = i(202784),
                n = i(890601),
                r = i(783427),
                c = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        452693: (e, t, i) => {
            i.r(t), i.d(t, { default: () => s });
            var o = i(202784),
                n = i(890601),
                r = i(783427),
                c = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TopicFollowPromptHandler.f7dea59a.js.map
