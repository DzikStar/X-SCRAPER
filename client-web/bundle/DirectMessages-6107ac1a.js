"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-6107ac1a", "icons/IconTicket-js"],
    {
        371706: (e, t, n) => {
            n.d(t, { Z: () => u });
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
            const u = d;
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
            const u = "inlinePrompt",
                h = "inlinePrompt-primaryAction",
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
                                { link: c, onClick: d, text: u } = e;
                            return i.createElement(o.Z, { style: [this.styles.actionContainer, a, { justifyContent: "flex-start" }], testID: s }, i.createElement(l.ZP, { link: c, onPress: d, size: t, style: { width: r ? "100%" : "auto" }, type: n }, u));
                        });
                }
                render() {
                    const { headline: e, image: t, imageActionUrl: n, imageVariants: a, primaryAction: s, rightControl: r, secondaryAction: l, shouldRenderBorder: c, subtext: d } = this.props;
                    return i.createElement(o.Z, { style: c ? [_.root, _.rootMargin] : y.root }, i.createElement(i.Fragment, null, t ? this._renderImage(t, a, n) : null, e || d || s || l ? i.createElement(o.Z, { style: this.styles.rootPadding, testID: u }, this._renderTitle(), this._renderBodyText(), s ? this._renderAction({ action: s, buttonType: "primaryFilled", style: this.styles.primaryAction, buttonSize: "large", testID: h }) : null, l ? this._renderAction({ action: l, buttonType: "primaryOutlined", style: this.styles.secondaryAction, buttonSize: "large", testID: m }) : null) : null), r ? i.createElement(o.Z, { style: y.rightControl }, r) : null);
                }
                get styles() {
                    return this.props.isCompact ? f : b;
                }
            }
            g.defaultProps = { shouldRenderBorder: !1 };
            const y = c.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, flexGrow: { flexGrow: 1 }, centeredImage: { display: "flex", flexDirection: "row", justifyContent: "center" }, rightControl: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, position: "absolute", end: 0, top: 0 } })),
                _ = c.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, rootMargin: { marginStart: e.spaces.space16, marginEnd: e.spaces.space16 } })),
                b = c.default.create((e) => ({ rootPadding: { padding: e.spaces.space32 }, body: { marginTop: e.spaces.space8 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space28 }, secondaryAction: { marginTop: e.spaces.space16 } })),
                f = c.default.create((e) => ({ rootPadding: { padding: e.spaces.space16 }, body: { marginTop: e.spaces.space2 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space4 }, secondaryAction: { marginTop: e.spaces.space2 } }));
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
                u = { ...c.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                h = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": n, checked: i, disabled: s, icon: c, name: h, onChange: m, testID: p }) => {
                    const g = (0, l.b)(),
                        y = (0, l.b)();
                    return o.createElement(a.Z, { disabled: s, style: [d.root, i && d.backgroundDefault], testID: p }, o.createElement(a.Z, { style: [d.padding4, !i && d.iconHiddenStyle] }, c), o.createElement("input", { "aria-describedby": y, "aria-label": e, "aria-labelledby": g, "aria-posinset": t, "aria-setsize": n, checked: i, disabled: s, name: h, onChange: r.Z, onClick: m, style: u, type: "radio" }));
                };
            function m(e) {
                const t = o.useCallback(({ value: e, ...t }) => o.createElement(h, (0, i.Z)({}, t, { key: e })), []);
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
                u = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
                h = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
                m = (e, t, n) => Math.min(t, Math.max(e, n)),
                p = (e, t) => Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2)),
                g = (e, t) => ({ x: (e.clientX + t.clientX) / 2, y: (e.clientY + t.clientY) / 2 });
            class y extends i.Component {
                constructor(e) {
                    super(e),
                        (this._itemDimensions = h),
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
                        (this.state = { ...u });
                }
                static getDerivedStateFromProps(e, t) {
                    return d && e.resetZoom ? (e.onZoomed(!1), { ...u }) : t;
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
                    this.props.onZoomed(!1), this.setState({ zoom: u.zoom });
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
                        { height: d, width: u } = this._zoomedDimensions;
                    let h = 0,
                        m = 0;
                    u - c > 0 && (h = t - i), d - l > 0 && (m = n - o), this.setState({ lastX: t, lastY: n, zoomCenter: { x: (0, s.Z)(a - h, 0, c), y: (0, s.Z)(r - m, 0, l) } });
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
                    const u = p(t[0], t[1]),
                        h = this._lastDistance ? u / this._lastDistance : 1,
                        y = m(c - d, r + l, o * h),
                        _ = g(t[0], t[1]),
                        b = (() => {
                            if (!this._windowDimensions || !n) return a;
                            const { height: e, width: t } = this._windowDimensions;
                            return { x: (0, s.Z)(a.x - (_.x - n), 0, t), y: (0, s.Z)(a.y - (_.y - i), 0, e) };
                        })();
                    (this._lastDistance = u), this.setState({ lastX: _.x, lastY: _.y, zoom: y, zoomCenter: b });
                }
                _handleTapStart(e) {
                    const { touches: t } = e;
                    this._tapCenter = this._getZoomCenter(t[0].clientX, t[0].clientY);
                }
                _handleDoubleTap(e) {
                    const { maxZoom: t, onZoomed: n } = this.props;
                    1 !== this.state.zoom ? this.resetZoom() : (this._updateWindowDimensions(), this.setState({ zoom: t, zoomCenter: this._tapCenter || u.zoomCenter }), n(!0));
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
        355586: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var i = n(202784),
                o = n(890601),
                a = n(783427),
                s = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { clipRule: "evenodd", d: "M2.062 9h2.876C4.77 7.643 4.261 6.393 3.5 5.335 2.74 6.393 2.231 7.644 2.062 9zm2.823-5.151C6.017 5.298 6.759 7.069 6.95 9H9V2.062c-1.554.194-2.97.833-4.115 1.787zM11 2.062V9h2.05c.191-1.931.933-3.702 2.065-5.151-1.145-.954-2.56-1.593-4.115-1.787zm5.5 3.273C15.74 6.393 15.23 7.643 15.062 9h2.876c-.169-1.356-.678-2.607-1.438-3.665zM17.938 11h-2.876c.169 1.357.677 2.607 1.438 3.665.76-1.058 1.269-2.309 1.438-3.665zm-2.823 5.151c-1.132-1.449-1.874-3.22-2.066-5.151H11v6.938c1.554-.194 2.97-.833 4.115-1.787zM9 17.938V11H6.95c-.191 1.931-.933 3.702-2.065 5.151 1.145.954 2.56 1.593 4.115 1.787zm-5.5-3.273c.76-1.058 1.27-2.308 1.438-3.665H2.062c.169 1.356.678 2.607 1.438 3.665zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const l = r;
        },
        913313: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var i = n(202784),
                o = n(890601),
                a = n(783427),
                s = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M19.77 6.34l-.7.71c-.59.59-1.54.59-2.12 0-.59-.59-.59-1.54 0-2.12l.7-.71L13.76.33.33 13.77l3.89 3.89.7-.71c.59-.59 1.54-.59 2.13 0 .58.59.58 1.54 0 2.12l-.71.71 3.89 3.89 13.43-13.44-3.89-3.89zM6.34 9.88l1.42-1.41 1.76 1.76-1.41 1.42-1.77-1.77zm3 3l1.42-1.41 1.77 1.77-1.42 1.41-1.77-1.77zm4.78 4.78l-1.77-1.77 1.42-1.41 1.76 1.77-1.41 1.41z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-6107ac1a.75bdc41a.js.map
