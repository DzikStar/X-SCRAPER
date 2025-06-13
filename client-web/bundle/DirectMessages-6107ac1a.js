"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-6107ac1a", "icons/IconEye-js"],
    {
        371706: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o,
                i,
                a,
                s,
                r,
                l,
                c,
                d = {
                    fragment: {
                        argumentDefinitions: (o = [
                            { defaultValue: null, kind: "LocalArgument", name: "addedParticipants" },
                            { defaultValue: null, kind: "LocalArgument", name: "conversationId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "AddParticipantsMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
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
                    operation: { argumentDefinitions: o, kind: "Operation", name: "AddParticipantsMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "add_participants", plural: !1, selections: [a, { kind: "InlineFragment", selections: [s, { alias: null, args: null, concreteType: "DMEventItem", kind: "LinkedField", name: "participants_join_event", plural: !1, selections: [{ alias: null, args: null, concreteType: "DMEventResults", kind: "LinkedField", name: "dm_event_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [r, (c = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "DMEvent", abstractKey: null }], storageKey: null }, c], storageKey: null }], storageKey: null }, l], type: "AddParticipantsSuccess", abstractKey: null }], storageKey: null }] },
                    params: { id: "oBwyQ0_xVbAQ8FAyG0pCRA", metadata: {}, name: "AddParticipantsMutation", operationKind: "mutation", text: null },
                };
            d.hash = "4e360bb90b3056d85e6c1492f83ce249";
            const u = d;
        },
        468032: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o,
                i,
                a = {
                    fragment: {
                        argumentDefinitions: (o = [
                            { defaultValue: null, kind: "LocalArgument", name: "conversation_id" },
                            { defaultValue: null, kind: "LocalArgument", name: "labeled_convo_collection_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "DMLabelsListToggleLabelMutation",
                        selections: (i = [
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
                    operation: { argumentDefinitions: o, kind: "Operation", name: "DMLabelsListToggleLabelMutation", selections: i },
                    params: { id: "BkE8C-TCIBC6p6zLq1J9sA", metadata: {}, name: "DMLabelsListToggleLabelMutation", operationKind: "mutation", text: null },
                };
            a.hash = "fc3b4d1f6a44ca8897470dbd3fe37b52";
            const s = a;
        },
        913309: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(202784),
                i = n(325686),
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
            class g extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = (e, t, n) => {
                            let s = o.createElement(a.Z, { "aria-label": "", aspectMode: r.Z.exact(e.width / e.height), backgroundColor: e.backgroundColor, customVariants: t, image: e });
                            return n && (s = o.createElement(d.Z, { link: n, role: "" }, " ", s)), e.isCentered ? o.createElement(i.Z, { style: y.centeredImage, testID: p }, o.createElement(i.Z, { style: { width: `${e.width}px`, height: `${e.height}px`, ...e.style } }, s)) : e.style ? o.createElement(i.Z, { style: e.style }, s) : s;
                        }),
                        (this._renderTitle = () => {
                            const { headline: e } = this.props;
                            return e ? o.createElement(s.ZP, { align: "left", role: "heading", size: "title3", style: y.flexGrow, weight: "heavy", withHashflags: !0 }, e) : null;
                        }),
                        (this._renderBodyText = () => {
                            const { subtext: e } = this.props;
                            return e ? o.createElement(s.ZP, { align: "left", color: "gray700", style: this.styles.body, withHashflags: !0 }, e) : null;
                        }),
                        (this._renderAction = ({ action: e, buttonSize: t, buttonType: n, style: a, testID: s }) => {
                            const { secondaryAction: r } = this.props,
                                { link: c, onClick: d, text: u } = e;
                            return o.createElement(i.Z, { style: [this.styles.actionContainer, a, { justifyContent: "flex-start" }], testID: s }, o.createElement(l.ZP, { link: c, onPress: d, size: t, style: { width: r ? "100%" : "auto" }, type: n }, u));
                        });
                }
                render() {
                    const { headline: e, image: t, imageActionUrl: n, imageVariants: a, primaryAction: s, rightControl: r, secondaryAction: l, shouldRenderBorder: c, subtext: d } = this.props;
                    return o.createElement(i.Z, { style: c ? [_.root, _.rootMargin] : y.root }, o.createElement(o.Fragment, null, t ? this._renderImage(t, a, n) : null, e || d || s || l ? o.createElement(i.Z, { style: this.styles.rootPadding, testID: u }, this._renderTitle(), this._renderBodyText(), s ? this._renderAction({ action: s, buttonType: "primaryFilled", style: this.styles.primaryAction, buttonSize: "large", testID: h }) : null, l ? this._renderAction({ action: l, buttonType: "primaryOutlined", style: this.styles.secondaryAction, buttonSize: "large", testID: m }) : null) : null), r ? o.createElement(i.Z, { style: y.rightControl }, r) : null);
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
            var o = n(807896),
                i = n(202784),
                a = n(325686),
                s = n(896632),
                r = n(516951),
                l = n(352924),
                c = n(392237);
            const d = c.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.elevatedBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium, borderRadius: e.borderRadii.infinite, cursor: "pointer" }, padding4: { padding: e.spaces.space4 }, iconHiddenStyle: { visibility: "hidden" }, checked: { borderColor: e.colors.primary } })),
                u = { ...c.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                h = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": n, checked: o, disabled: s, icon: c, name: h, onChange: m, testID: p }) => {
                    const g = (0, l.b)(),
                        y = (0, l.b)();
                    return i.createElement(a.Z, { disabled: s, style: [d.root, o && d.backgroundDefault], testID: p }, i.createElement(a.Z, { style: [d.padding4, !o && d.iconHiddenStyle] }, c), i.createElement("input", { "aria-describedby": y, "aria-label": e, "aria-labelledby": g, "aria-posinset": t, "aria-setsize": n, checked: o, disabled: s, name: h, onChange: r.Z, onClick: m, style: u, type: "radio" }));
                };
            function m(e) {
                const t = i.useCallback(({ value: e, ...t }) => i.createElement(h, (0, o.Z)({}, t, { key: e })), []);
                return i.createElement(a.Z, { style: p.root }, i.createElement(s.Z, (0, o.Z)({}, e, { horizontal: !0, renderSelector: t, switchStyle: !0 })));
            }
            const p = c.default.create((e) => ({ root: { width: "fit-content" } }));
        },
        7022: (e, t, n) => {
            n.d(t, { Z: () => b });
            var o = n(202784),
                i = n(196001),
                a = n(325686),
                s = n(837880),
                r = n(516951),
                l = n(933895),
                c = n(392237);
            const d = n(393058).Z.isTouchSupported(),
                u = { zoom: 1, lastX: 0, lastY: 0, zoomCenter: { x: 0, y: 0 } },
                h = { height: 0, width: 0, left: 0, right: 0, top: 0, bottom: 0 },
                m = (e, t, n) => Math.min(t, Math.max(e, n)),
                p = (e, t) => Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2)),
                g = (e, t) => ({ x: (e.clientX + t.clientX) / 2, y: (e.clientY + t.clientY) / 2 });
            class y extends o.Component {
                constructor(e) {
                    super(e),
                        (this._itemDimensions = h),
                        (this._ref = o.createRef()),
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
                            const { maxZoom: t, minZoom: n, onTap: o } = this.props,
                                i = m(n, t, this.state.zoom),
                                { zoom: a } = this.state;
                            a !== i && 1 === i ? this.resetZoom() : this.setState({ lastX: 0, lastY: 0, zoom: i }), 0 === e.touches.length ? ((this._isTouching = !1), this._lastTouchTime && this._lastTouchTime + 300 > e.timeStamp ? (this._clickTimer && clearTimeout(this._clickTimer), this._handleDoubleTap(e)) : a <= 1 && !this._moved && (this._clickTimer = setTimeout(o, 300)), (this._lastTouchTime = e.timeStamp)) : e.preventDefault();
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
                        s = { zoom: this._isTouching ? e : (0, i.ST)(e), zoomCenterX: this._isTouching ? t.x : (0, i.ST)(t.x), zoomCenterY: this._isTouching ? t.y : (0, i.ST)(t.y) };
                    return o.createElement(
                        a.Z,
                        { onTouchEnd: this._handleTouchEnd, onTouchStart: this._handleTouchStart, ref: this._setTouchableNode, style: _.fill },
                        o.createElement(i.y_, { style: s }, ({ zoom: e, zoomCenterX: i, zoomCenterY: s }) => o.createElement(a.Z, { ref: this._ref, style: [_.fill, { transform: [{ scale: e }], transformOrigin: `${n ? i : t.x}px ${n ? s : t.y}px` }] }, this.props.children)),
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
                            lastX: o,
                            lastY: i,
                            zoomCenter: { x: a, y: r },
                        } = this.state,
                        { height: l, width: c } = this._windowDimensions,
                        { height: d, width: u } = this._zoomedDimensions;
                    let h = 0,
                        m = 0;
                    u - c > 0 && (h = t - o), d - l > 0 && (m = n - i), this.setState({ lastX: t, lastY: n, zoomCenter: { x: (0, s.Z)(a - h, 0, c), y: (0, s.Z)(r - m, 0, l) } });
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
                        { lastX: n, lastY: o, zoom: i, zoomCenter: a } = this.state,
                        { maxZoom: r, maxZoomBounce: l, minZoom: c, minZoomBounce: d } = this.props;
                    if (0 === a.x && 0 === a.y) return void (2 === e.touches.length && this._handlePinchStart(e));
                    const u = p(t[0], t[1]),
                        h = this._lastDistance ? u / this._lastDistance : 1,
                        y = m(c - d, r + l, i * h),
                        _ = g(t[0], t[1]),
                        b = (() => {
                            if (!this._windowDimensions || !n) return a;
                            const { height: e, width: t } = this._windowDimensions;
                            return { x: (0, s.Z)(a.x - (_.x - n), 0, t), y: (0, s.Z)(a.y - (_.y - o), 0, e) };
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
                    const { left: n, top: o } = this._itemDimensions;
                    return { x: e - n, y: t - o };
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
            n.d(t, { Z: () => o });
            const o = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        988227: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                i = n(890601),
                a = n(783427),
                s = n(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-6107ac1a.4fc1a2fa.js.map
