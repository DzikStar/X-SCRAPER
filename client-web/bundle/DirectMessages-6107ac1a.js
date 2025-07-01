"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-6107ac1a", "icons/IconCameraPlusStroke-js", "icons/IconUnlock-js"],
    {
        371706: (e, t, n) => {
            n.d(t, { Z: () => h });
            var i,
                o,
                a,
                s,
                r,
                l,
                c,
                d = {
                    fragment: {
                        argumentDefinitions: (i = [
                            { defaultValue: null, kind: "LocalArgument", name: "addedParticipants" },
                            { defaultValue: null, kind: "LocalArgument", name: "conversationId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "AddParticipantsMutation",
                        selections: [
                            {
                                alias: null,
                                args: (o = [
                                    { kind: "Variable", name: "added_participants", variableName: "addedParticipants" },
                                    { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                    { kind: "Literal", name: "s", value: "e54f" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "add_participants",
                                plural: !1,
                                selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "added_users", storageKey: null }), { alias: null, args: null, concreteType: "DMEventItem", kind: "LinkedField", name: "participants_join_event", plural: !1, selections: [{ alias: null, args: null, concreteType: "DMEventResults", kind: "LinkedField", name: "dm_event_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], type: "DMEvent", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }, (l = { alias: null, args: null, concreteType: "UserFailures", kind: "LinkedField", name: "user_failures", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], storageKey: null })], type: "AddParticipantsSuccess", abstractKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: i, kind: "Operation", name: "AddParticipantsMutation", selections: [{ alias: null, args: o, concreteType: null, kind: "LinkedField", name: "add_participants", plural: !1, selections: [a, { kind: "InlineFragment", selections: [s, { alias: null, args: null, concreteType: "DMEventItem", kind: "LinkedField", name: "participants_join_event", plural: !1, selections: [{ alias: null, args: null, concreteType: "DMEventResults", kind: "LinkedField", name: "dm_event_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [r, (c = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "DMEvent", abstractKey: null }], storageKey: null }, c], storageKey: null }], storageKey: null }, l], type: "AddParticipantsSuccess", abstractKey: null }], storageKey: null }] },
                    params: { id: "oBwyQ0_xVbAQ8FAyG0pCRA", metadata: {}, name: "AddParticipantsMutation", operationKind: "mutation", text: null },
                };
            d.hash = "4e360bb90b3056d85e6c1492f83ce249";
            const h = d;
        },
        468032: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i,
                o,
                a = {
                    fragment: {
                        argumentDefinitions: (i = [
                            { defaultValue: null, kind: "LocalArgument", name: "conversation_id" },
                            { defaultValue: null, kind: "LocalArgument", name: "labeled_convo_collection_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "DMLabelsListToggleLabelMutation",
                        selections: (o = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "conversation_id", variableName: "conversation_id" },
                                    { kind: "Variable", name: "labeled_convo_collection_id", variableName: "labeled_convo_collection_id" },
                                ],
                                kind: "ScalarField",
                                name: "labeled_conversation_collection_entries_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: i, kind: "Operation", name: "DMLabelsListToggleLabelMutation", selections: o },
                    params: { id: "BkE8C-TCIBC6p6zLq1J9sA", metadata: {}, name: "DMLabelsListToggleLabelMutation", operationKind: "mutation", text: null },
                };
            a.hash = "fc3b4d1f6a44ca8897470dbd3fe37b52";
            const s = a;
        },
        913309: (e, t, n) => {
            n.d(t, { Z: () => g });
            var i = n(202784),
                o = n(325686),
                a = n(530525),
                s = n(731708),
                r = n(439592),
                l = n(154003),
                c = n(392237),
                d = n(444178);
            const h = "inlinePrompt",
                u = "inlinePrompt-primaryAction",
                m = "inlinePrompt-secondaryAction",
                p = "inlinePrompt-centeredImageContainer";
            class g extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = (e, t, n) => {
                            let s = i.createElement(a.Z, { "aria-label": "", aspectMode: r.Z.exact(e.width / e.height), backgroundColor: e.backgroundColor, customVariants: t, image: e });
                            return n && (s = i.createElement(d.Z, { link: n, role: "" }, " ", s)), e.isCentered ? i.createElement(o.Z, { style: y.centeredImage, testID: p }, i.createElement(o.Z, { style: { width: `${e.width}px`, height: `${e.height}px`, ...e.style } }, s)) : e.style ? i.createElement(o.Z, { style: e.style }, s) : s;
                        }),
                        (this._renderTitle = () => {
                            const { headline: e } = this.props;
                            return e ? i.createElement(s.ZP, { align: "left", role: "heading", size: "title3", style: y.flexGrow, weight: "heavy", withHashflags: !0 }, e) : null;
                        }),
                        (this._renderBodyText = () => {
                            const { subtext: e } = this.props;
                            return e ? i.createElement(s.ZP, { align: "left", color: "gray700", style: this.styles.body, withHashflags: !0 }, e) : null;
                        }),
                        (this._renderAction = ({ action: e, buttonSize: t, buttonType: n, style: a, testID: s }) => {
                            const { secondaryAction: r } = this.props,
                                { link: c, onClick: d, text: h } = e;
                            return i.createElement(o.Z, { style: [this.styles.actionContainer, a, { justifyContent: "flex-start" }], testID: s }, i.createElement(l.ZP, { link: c, onPress: d, size: t, style: { width: r ? "100%" : "auto" }, type: n }, h));
                        });
                }
                render() {
                    const { headline: e, image: t, imageActionUrl: n, imageVariants: a, primaryAction: s, rightControl: r, secondaryAction: l, shouldRenderBorder: c, subtext: d } = this.props;
                    return i.createElement(o.Z, { style: c ? [_.root, _.rootMargin] : y.root }, i.createElement(i.Fragment, null, t ? this._renderImage(t, a, n) : null, e || d || s || l ? i.createElement(o.Z, { style: this.styles.rootPadding, testID: h }, this._renderTitle(), this._renderBodyText(), s ? this._renderAction({ action: s, buttonType: "primaryFilled", style: this.styles.primaryAction, buttonSize: "large", testID: u }) : null, l ? this._renderAction({ action: l, buttonType: "primaryOutlined", style: this.styles.secondaryAction, buttonSize: "large", testID: m }) : null) : null), r ? i.createElement(o.Z, { style: y.rightControl }, r) : null);
                }
                get styles() {
                    return this.props.isCompact ? v : b;
                }
            }
            g.defaultProps = { shouldRenderBorder: !1 };
            const y = c.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, flexGrow: { flexGrow: 1 }, centeredImage: { display: "flex", flexDirection: "row", justifyContent: "center" }, rightControl: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, position: "absolute", end: 0, top: 0 } })),
                _ = c.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, rootMargin: { marginStart: e.spaces.space16, marginEnd: e.spaces.space16 } })),
                b = c.default.create((e) => ({ rootPadding: { padding: e.spaces.space32 }, body: { marginTop: e.spaces.space8 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space28 }, secondaryAction: { marginTop: e.spaces.space16 } })),
                v = c.default.create((e) => ({ rootPadding: { padding: e.spaces.space16 }, body: { marginTop: e.spaces.space2 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space4 }, secondaryAction: { marginTop: e.spaces.space2 } }));
        },
        499162: (e, t, n) => {
            n.d(t, { Z: () => m });
            var i = n(807896),
                o = n(202784),
                a = n(325686),
                s = n(896632),
                r = n(516951),
                l = n(352924),
                c = n(392237);
            const d = c.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.elevatedBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium, borderRadius: e.borderRadii.infinite, cursor: "pointer" }, padding4: { padding: e.spaces.space4 }, iconHiddenStyle: { visibility: "hidden" }, checked: { borderColor: e.colors.primary } })),
                h = { ...c.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                u = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": n, checked: i, disabled: s, icon: c, name: u, onChange: m, testID: p }) => {
                    const g = (0, l.b)(),
                        y = (0, l.b)();
                    return o.createElement(a.Z, { disabled: s, style: [d.root, i && d.backgroundDefault], testID: p }, o.createElement(a.Z, { style: [d.padding4, !i && d.iconHiddenStyle] }, c), o.createElement("input", { "aria-describedby": y, "aria-label": e, "aria-labelledby": g, "aria-posinset": t, "aria-setsize": n, checked: i, disabled: s, name: u, onChange: r.Z, onClick: m, style: h, type: "radio" }));
                };
            function m(e) {
                const t = o.useCallback(({ value: e, ...t }) => o.createElement(u, (0, i.Z)({}, t, { key: e })), []);
                return o.createElement(a.Z, { style: p.root }, o.createElement(s.Z, (0, i.Z)({}, e, { horizontal: !0, renderSelector: t, switchStyle: !0 })));
            }
            const p = c.default.create((e) => ({ root: { width: "fit-content" } }));
        },
        7022: (e, t, n) => {
            n.d(t, { Z: () => b });
            var i = n(202784),
                o = n(196001),
                a = n(325686),
                s = n(837880),
                r = n(516951),
                l = n(933895),
                c = n(392237);
            const d = n(401339).Z.isTouchSupported(),
                h = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
                u = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
                m = (e, t, n) => Math.min(t, Math.max(e, n)),
                p = (e, t) => Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2)),
                g = (e, t) => ({ x: (e.clientX + t.clientX) / 2, y: (e.clientY + t.clientY) / 2 });
            class y extends i.Component {
                constructor(e) {
                    super(e),
                        (this._itemDimensions = u),
                        (this._ref = i.createRef()),
                        (this._setTouchableNode = (e) => {
                            this._touchableNode !== e && ((this._touchableNode = e), this._removeTouchListener && this._removeTouchListener(), this._touchableNode && (this._removeTouchListener = (0, l.O)(this._touchableNode, this._handleTouchMove, !1)));
                        }),
                        (this._isTouching = !1),
                        (this._handleTouchStart = (e) => {
                            this._ref.current && (this._zoomedDimensions = this._ref.current.getBoundingClientRect()), (this._moved = !1);
                            const t = e.touches.length;
                            (this._isTouching = !0), 2 === t ? (e.preventDefault(), this._handlePinchStart(e)) : 1 === t && this._handleTapStart(e);
                        }),
                        (this._handleTouchMove = (e) => {
                            const t = e.touches.length;
                            2 === t ? (e.preventDefault(), this._handlePinchMove(e)) : 1 === t && ((this._moved = !0), this._handlePanMove(e));
                        }),
                        (this._handleTouchEnd = (e) => {
                            const { maxZoom: t, minZoom: n, onTap: i } = this.props,
                                o = m(n, t, this.state.zoom),
                                { zoom: a } = this.state;
                            a !== o && 1 === o ? this.resetZoom() : this.setState({ lastX: 0, lastY: 0, zoom: o }), 0 === e.touches.length ? ((this._isTouching = !1), this._lastTouchTime && this._lastTouchTime + 300 > e.timeStamp ? (this._clickTimer && clearTimeout(this._clickTimer), this._handleDoubleTap(e)) : a <= 1 && !this._moved && (this._clickTimer = setTimeout(i, 300)), (this._lastTouchTime = e.timeStamp)) : e.preventDefault();
                        }),
                        (this.state = { ...h });
                }
                static getDerivedStateFromProps(e, t) {
                    return d && e.resetZoom ? (e.onZoomed(!1), { ...h }) : t;
                }
                render() {
                    if (!d) return this.props.children;
                    const { zoom: e, zoomCenter: t } = this.state,
                        n = this._moved,
                        s = { zoom: this._isTouching ? e : (0, o.ST)(e), zoomCenterX: this._isTouching ? t.x : (0, o.ST)(t.x), zoomCenterY: this._isTouching ? t.y : (0, o.ST)(t.y) };
                    return i.createElement(
                        a.Z,
                        { onTouchEnd: this._handleTouchEnd, onTouchStart: this._handleTouchStart, ref: this._setTouchableNode, style: _.fill },
                        i.createElement(o.y_, { style: s }, ({ zoom: e, zoomCenterX: o, zoomCenterY: s }) => i.createElement(a.Z, { ref: this._ref, style: [_.fill, { transform: [{ scale: e }], transformOrigin: `${n ? o : t.x}px ${n ? s : t.y}px` }] }, this.props.children)),
                    );
                }
                componentDidMount() {
                    d && this._updateWindowDimensions();
                }
                componentWillUnmount() {
                    this._removeTouchListener && this._removeTouchListener();
                }
                resetZoom() {
                    this.props.onZoomed(!1), this.setState({ zoom: h.zoom });
                }
                _handlePanMove(e) {
                    if (this.state.zoom <= 1 || !this._zoomedDimensions || !this._windowDimensions) return;
                    const { clientX: t, clientY: n } = e.touches[0];
                    if (!this.state.lastX || !this.state.lastY) return void this.setState({ lastX: t, lastY: n });
                    const {
                            lastX: i,
                            lastY: o,
                            zoomCenter: { x: a, y: r },
                        } = this.state,
                        { height: l, width: c } = this._windowDimensions,
                        { height: d, width: h } = this._zoomedDimensions;
                    let u = 0,
                        m = 0;
                    h - c > 0 && (u = t - i), d - l > 0 && (m = n - o), this.setState({ lastX: t, lastY: n, zoomCenter: { x: (0, s.Z)(a - u, 0, c), y: (0, s.Z)(r - m, 0, l) } });
                }
                _handlePinchStart(e) {
                    const { touches: t } = e;
                    if ((this._updateWindowDimensions(), (this._lastDistance = p(t[0], t[1])), 1 === this.state.zoom)) {
                        const e = g(t[0], t[1]);
                        this.setState({ zoomCenter: this._getZoomCenter(e.x, e.y) }), this.props.onZoomed(!0);
                    }
                }
                _handlePinchMove(e) {
                    const { touches: t } = e,
                        { lastX: n, lastY: i, zoom: o, zoomCenter: a } = this.state,
                        { maxZoom: r, maxZoomBounce: l, minZoom: c, minZoomBounce: d } = this.props;
                    if (0 === a.x && 0 === a.y) return void (2 === e.touches.length && this._handlePinchStart(e));
                    const h = p(t[0], t[1]),
                        u = this._lastDistance ? h / this._lastDistance : 1,
                        y = m(c - d, r + l, o * u),
                        _ = g(t[0], t[1]),
                        b = (() => {
                            if (!this._windowDimensions || !n) return a;
                            const { height: e, width: t } = this._windowDimensions;
                            return { x: (0, s.Z)(a.x - (_.x - n), 0, t), y: (0, s.Z)(a.y - (_.y - i), 0, e) };
                        })();
                    (this._lastDistance = h), this.setState({ lastX: _.x, lastY: _.y, zoom: y, zoomCenter: b });
                }
                _handleTapStart(e) {
                    const { touches: t } = e;
                    this._tapCenter = this._getZoomCenter(t[0].clientX, t[0].clientY);
                }
                _handleDoubleTap(e) {
                    const { maxZoom: t, onZoomed: n } = this.props;
                    1 !== this.state.zoom ? this.resetZoom() : (this._updateWindowDimensions(), this.setState({ zoom: t, zoomCenter: this._tapCenter || h.zoomCenter }), n(!0));
                }
                _getZoomCenter(e, t) {
                    this._ref.current && (this._itemDimensions = this._ref.current.getBoundingClientRect());
                    const { left: n, top: i } = this._itemDimensions;
                    return { x: e - n, y: t - i };
                }
                _updateWindowDimensions() {
                    this._windowDimensions = { height: window.innerHeight, width: window.innerWidth };
                }
            }
            y.defaultProps = { maxZoom: 2.5, maxZoomBounce: 0.15, minZoom: 1, minZoomBounce: 0.15, onTap: r.Z, onZoomed: r.Z, resetZoom: !1 };
            const _ = c.default.create((e) => ({ fill: { flex: 1 } })),
                b = y;
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => i });
            const i = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        293615: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var i = n(202784),
                o = n(890601),
                a = n(783427),
                s = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const l = r;
        },
        913315: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var i = n(202784),
                o = n(890601),
                a = n(783427),
                s = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const l = r;
        },
        416955: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var i = n(202784),
                o = n(890601),
                a = n(783427),
                s = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M9 7.75a3 3 0 015.179-2.062l1.452-1.376A5 5 0 007 7.75V8h-.499a2.5 2.5 0 00-2.5 2.5v9a2.5 2.5 0 002.5 2.5h11a2.5 2.5 0 002.5-2.5v-9a2.5 2.5 0 00-2.5-2.5H9zM10.002 14a2 2 0 113 1.732V18h-2v-2.268a2 2 0 01-1-1.732z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const l = r;
        },
        548102: (e) => {
            var t = /[|\\{}()[\]^$+*?.]/g;
            e.exports = function (e) {
                if ("string" != typeof e) throw new TypeError("Expected a string");
                return e.replace(t, "\\$&");
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-6107ac1a.7776a8ea.js.map
