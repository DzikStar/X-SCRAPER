"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.VerticalGridItemHandler"],
    {
        395267: (e, t, r) => {
            r.r(t), r.d(t, { default: () => U });
            var o = r(459643),
                l = r(942893),
                n = r(351322),
                a = r(202784),
                i = r(118101),
                c = r(725516),
                s = r(807896),
                d = r(325686),
                p = r(293723),
                u = r(731708),
                m = r(58881),
                h = r(530732),
                b = r(392237),
                f = r(165822);
            const g = b.default.create((e) => ({ base: { flexGrow: 1, backgroundColor: e.colors.cellBackground, justifyContent: "space-between" }, icon: { alignSelf: "flex-end", color: e.colors.white, marginEnd: e.spaces.space12, paddingTop: e.spaces.space12, width: e.spaces.space20, height: e.spaces.space20 }, border: { flexGrow: 1, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium }, containerClicked: { backgroundColor: e.colors.primary, borderColor: e.colors.primary, borderWidth: e.borderWidths.medium }, containerUnclicked: { flexDirection: "column-reverse" }, text: { alignSelf: "flex-start", bottom: 0, marginBottom: e.spaces.space12, marginHorizontal: e.spaces.space12, position: "absolute" }, mainContainer: { padding: 0 }, wrapper: { padding: e.spaces.space4 } })),
                w = ({ "aria-label": e, isSelected: t, link: r, onClick: o, text: l }) => {
                    const n = t ? g.containerClicked : g.containerUnclicked,
                        i = m.Z.generate({ backgroundColor: t ? b.default.theme.colors.primary : "transparent", color: t ? b.default.theme.colors.white : b.default.theme.colors.primary }),
                        c = a.createElement(d.Z, { style: g.base }, a.createElement(h.Z, { "aria-label": e, interactiveStyles: i, style: [g.border, n] }, t ? a.createElement(p.default, { style: g.icon }) : null, a.createElement(u.ZP, { color: t ? "whiteOnColor" : "text", numberOfLines: 2, style: g.text, weight: "bold" }, l)));
                    return a.createElement(d.Z, { style: g.wrapper }, a.createElement(f.Z, { "aria-label": e, containerStyle: g.mainContainer, link: r, onClick: o, upper: c, withInteractiveStyling: !0 }));
                },
                y = b.default.create((e) => ({ base: { flexGrow: 1, backgroundColor: e.colors.primary, justifyContent: "center" }, centerTile: { margin: e.spaces.space8 }, container: { padding: 0, borderRadius: e.borderRadii.large }, wrapper: { padding: e.spaces.space4, borderRadius: e.borderRadii.large } })),
                C = ({ "aria-label": e, link: t, onClick: r, text: o }) => {
                    const l = m.Z.generate({ backgroundColor: b.default.theme.colors.primary, color: b.default.theme.colors.white }),
                        n = a.createElement(h.Z, { "aria-label": e, interactiveStyles: l, style: y.base }, a.createElement(u.ZP, { align: "center", color: "whiteOnColor", numberOfLines: 3, size: "headline2", style: y.centerTile, weight: "bold" }, o));
                    return a.createElement(d.Z, { style: y.wrapper }, a.createElement(f.Z, { "aria-label": e, containerStyle: y.container, link: t, onClick: r, upper: n, withInteractiveStyling: !0 }));
                };
            var k = r(111677),
                Z = r.n(k),
                E = r(324688),
                v = r(233391),
                S = r(288955),
                x = r(71620),
                I = r(668214),
                R = r(466380);
            const T = (0, I.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, x.zr)("TOPIC_TILE_CONTEXT"), follow: R.Z.follow, unfollow: R.Z.unfollow }))
                    .withAnalytics(),
                L = Z().je808a17,
                _ = Z().ge8f3043,
                F = Z().aa576cbf,
                H = T((e) => {
                    const { analytics: t, createLocalApiErrorHandler: r, follow: o, isRecommended: l, style: n, topic: c, unfollow: d, url: p } = e,
                        { following: u, id: m, name: h } = c,
                        b = u ? F({ topicName: h }) : _({ topicName: h }),
                        f = a.useRef(!1),
                        g = (e, t, r) => (c.following ? e(k(r)) : e(y(t))),
                        y = (e) => (l) => {
                            o(c.id)
                                .catch(r())
                                .then(e && e(c.id)),
                                t.scribeAction("follow");
                        },
                        k = (e) => (o) => {
                            d(c.id)
                                .catch(r())
                                .then(e && e(c.id)),
                                t.scribeAction("unfollow");
                        },
                        Z = (e) => {
                            t.scribeAction("click");
                        };
                    return a.createElement(S.Z, { customText: h, displayMode: v.BH.topic }, (e) =>
                        a.createElement(E.m.Consumer, null, ({ onFollow: t, onInitialize: r, onUnfollow: o }) => {
                            r && !f.current && (r(m, u), (f.current = !0));
                            const c = l
                                ? ((e, t, r) => ({ "aria-label": b, onClick: g(e, t, r), text: h }))(e, t, o)
                                : ((e) => {
                                      return { "aria-label": L({ topicName: h }), onClick: e(Z), link: p?.url || ((t = m), `/i/topics/${t}`), text: h };
                                      var t;
                                  })(e);
                            return a.createElement(a.Fragment, null, n === i.pI.DoubleStateDefault ? a.createElement(w, (0, s.Z)({}, c, { isSelected: u })) : a.createElement(C, c));
                        }),
                    );
                }),
                P = (e, t) => {
                    if (t.entry.content.content.topicTile) return R.Z.select(e, t.entry.content.content?.topicTile.topicId);
                },
                A = ({ entry: e, feedbackItems: t, module: r, topic: o }) => {
                    const l = (0, c.z)(),
                        { functionalityType: n, style: s, url: d } = e.content.content.topicTile,
                        p = n === i.sv.Recommendation;
                    return (
                        a.useEffect(() => {
                            l.scribe({ action: "impression" });
                        }, [l]),
                        o ? a.createElement(H, { isRecommended: p, style: s, topic: o, url: d }) : null
                    );
                },
                D = (0, I.Z)()
                    .propsFromState(() => ({ topic: P }))
                    .withAnalytics()(a.memo(A)),
                U = n
                    .iH({
                        component: D,
                        shouldDisplayBorder: (0, o.Z)(!1),
                        isFocusable: (0, o.Z)(!0),
                        getScribeDataItem(e) {
                            const { topicId: t } = e.content.content.topicTile;
                            return l.Z.forTopic(t, e.itemMetadata.clientEventInfo);
                        },
                    })
                    .getHandler();
        },
        288955: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(807896),
                l = r(202784),
                n = r(443781),
                a = r(369241);
            class i extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showLoginPrompt: !1 }),
                        (this._getHandler =
                            (e, t) =>
                            (r, ...o) => {
                                this.props.disabled || this.context.loggedInUserId ? e && e(r, ...o) : (r && r.preventDefault && r.preventDefault(), t && t(), this.setState({ showLoginPrompt: !0 }));
                            }),
                        (this._handleClose = () => {
                            this.setState({ showLoginPrompt: !1 });
                        });
                }
                render() {
                    const { children: e, disabled: t, ...r } = this.props;
                    return l.createElement(l.Fragment, null, e(this._getHandler), this.state.showLoginPrompt && l.createElement(a.ZP, (0, o.Z)({ onClose: this._handleClose }, r)));
                }
            }
            (i.defaultProps = { disabled: !1 }), (i.contextType = n.rC);
            const c = i;
        },
        324688: (e, t, r) => {
            r.d(t, { m: () => o });
            const o = r(202784).createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 });
        },
        165822: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                l = r(325686),
                n = r(58881),
                a = r(530732),
                i = r(392237);
            const c = i.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                s = ({ "aria-label": e, containerStyle: t, disabled: r, isCompact: s, link: d, lower: p, onClick: u, stackLayoutLowerStyle: m, stackLayoutUpperStyle: h, upper: b, withInsetFocusRing: f = !0, withInteractiveStyling: g = !1 }) => {
                    const w = n.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors.primary, insetFocusRing: f }),
                        y = o.createElement(o.Fragment, null, o.createElement(l.Z, { style: [c.defaultUpperContainerStyle, h, s && { height: "auto" }] }, b), p ? o.createElement(l.Z, { style: [c.defaultLowerContainerStyle, m] }, p) : null);
                    return o.createElement(a.Z, { "aria-label": e, disabled: r, interactive: g, interactiveStyles: g ? w : void 0, link: d, onClick: u, style: [c.root, t] }, y);
                };
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                n = r(783427),
                a = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.VerticalGridItemHandler.8c65ff6a.js.map
