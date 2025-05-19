"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AppModules-bc6ccf4c"],
    {
        242454: (e, t, r) => {
            r.d(t, { Z: () => h });
            var n = r(807896),
                o = r(202784),
                i = r(325686),
                a = r(731708),
                s = r(58881),
                l = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                h = ({ align: e = "center", color: t, label: r, ...h }) => {
                    const u = s.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(i.Z, { style: d.container }, o.createElement(l.Z, (0, n.Z)({}, h, { interactiveStyles: u, style: d.root }), o.createElement(a.ZP, { align: e, color: t }, r)));
                };
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(202784),
                o = r(325686),
                i = r(392237);
            function a({ spacing: e, style: t }) {
                return n.createElement(o.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        466818: (e, t, r) => {
            r.d(t, { ZP: () => w });
            var n = r(202784),
                o = r(325686),
                i = r(487552),
                a = r(302752),
                s = r(183806),
                l = r(731708),
                c = r(950822),
                d = r(224162),
                h = r(392237);
            const u = n.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                p = (e) => (0, c.Z)("option", e);
            let g = 1;
            class m extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = n.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: r } = this.props,
                                { selectedIndex: n, value: o } = e.target;
                            t && t(o, n - (r ? 1 : 0));
                        }),
                        (this._handleBlur = (e) => {
                            const { onBlur: t } = this.props;
                            this.setState({ isFocused: !1 }), t && t();
                        }),
                        (this._handleFocus = (e) => {
                            const { onFocus: t } = this.props;
                            this.setState({ isFocused: !0 }), t && t();
                        }),
                        (this._id = `SELECTOR_${g}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (g += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: t, errorText: r, hasError: c, helperText: g, options: m, style: w, testID: b, value: _, withEmptyOption: y } = this.props,
                        { isFocused: E } = this.state,
                        T = l.ZP.getLanguage(),
                        v = void 0 === c ? !!r : c,
                        I = new Set();
                    r && I.add(this._errorID), e && I.add(e), g && I.add(this._helperID);
                    const C = I.size ? [...I].join(" ") : void 0;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === T ? h.default.theme.fontFamilies.japan : "rtl" === e || a.Z.isLocaleRTL(T) ? h.default.theme.fontFamilies.rtl : h.default.theme.fontFamilies.normal;
                            return n.createElement(
                                o.Z,
                                { style: [s.Z.border, f.container, t && s.Z.disabled, E && s.Z.focusedBorderValid, v && s.Z.invalidBorderColor, E && v && s.Z.focusedBorderInvalid, w] },
                                this._renderLabel(),
                                n.createElement(
                                    u,
                                    { "aria-describedby": C, "aria-invalid": v, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [f.select, { fontFamily: l }, t && s.Z.disabled], testID: b || "", value: _ },
                                    y ? n.createElement(p, { disabled: !0, style: f.option, value: "" }) : null,
                                    m.map((e) => {
                                        const { disabled: t, label: r, value: o } = e;
                                        return n.createElement(p, { disabled: t, key: `${r}-${o}`, style: f.option, value: o }, r);
                                    }),
                                ),
                                n.createElement(i.default, { style: [f.dropdownCaret, E && s.Z.validColor, !(!c && !r) && s.Z.invalidColor] }),
                            );
                        }),
                        g ? this._renderHelperText() : null,
                        v && r ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: r } = this.props,
                        { isFocused: o } = this.state;
                    return n.createElement(l.ZP, { color: t || e ? "red500" : o ? "primary" : "gray700", id: this._labelID, role: "label", style: f.label }, r);
                }
                _renderHelperText() {
                    return n.createElement(o.Z, { "aria-live": "polite" }, n.createElement(l.ZP, { color: "gray700", id: this._helperID, style: f.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return n.createElement(o.Z, { "aria-live": "polite" }, n.createElement(l.ZP, { color: "red500", id: this._errorID, style: f.helperText }, this.props.errorText));
                }
            }
            m.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const f = h.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                w = m;
        },
        557707: (e, t, r) => {
            r.d(t, { ZP: () => v });
            var n = r(807896),
                o = r(202784),
                i = r(466999),
                a = r(325686),
                s = r(332920),
                l = r.n(s),
                c = r(837020),
                d = r(540820),
                h = r(731708),
                u = r(154003),
                p = r(108362),
                g = r(661810),
                m = r(365023),
                f = r(292627),
                w = r(537392),
                b = r(392237);
            const _ = l().af8fa2ae,
                y = o.createElement(c.default, null);
            class E extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAriaOnly = () => {
                            const { testID: e, text: t } = this.props;
                            return o.createElement(a.Z, { role: "alert", style: b.default.visuallyHidden, testID: e }, o.createElement(i.Z, null, t));
                        }),
                        (this._renderIcon = () => {
                            const { variant: e } = this.props;
                            return "jp-holiday-labor-thanksgiving" === e?.type && o.createElement(d.default, { style: T.icon });
                        }),
                        (this._renderDecoration = () => {
                            const { variant: e } = this.props;
                            return "jp-holiday-labor-thanksgiving" === e?.type && o.createElement(a.Z, null, o.createElement(h.ZP, { color: "whiteOnColor", style: T.titleText }, e.payload.message), o.createElement(g.Z, { spacing: "space12", style: T.divider }));
                        }),
                        (this._renderContent = () => {
                            const { action: e, text: t, withAutoDismiss: r, withClearButton: n } = this.props;
                            return o.createElement(o.Fragment, null, o.createElement(h.ZP, { color: "whiteOnColor", style: T.titleText }, t), o.createElement(a.Z, { "aria-hidden": r, style: T.actionButtons }, e && this._renderActionLabel(e), n && o.createElement(u.ZP, { "aria-label": _, borderColor: "transparent", color: "white", icon: y, onPress: this._handleClose, style: T.closeButton })));
                        }),
                        (this._renderVariantContent = () => {
                            const { variant: e } = this.props;
                            if (e)
                                switch (e.type) {
                                    case "jp-holiday-labor-thanksgiving": {
                                        const e = this._renderContent();
                                        return o.createElement(o.Fragment, null, this._renderIcon(), o.createElement(a.Z, { style: T.body }, this._renderDecoration(), o.createElement(a.Z, { style: T.content }, e)));
                                    }
                                    case "jetfuel":
                                        return o.createElement(o.Fragment, null, e.payload.body);
                                }
                            return null;
                        }),
                        (this._getRootVariantStyle = () => {
                            const { variant: e } = this.props;
                            if (e)
                                switch (e.type) {
                                    case "jp-holiday-labor-thanksgiving":
                                        return T.rootVariantJp;
                                    case "jetfuel":
                                        return T.rootVariantJetfuel;
                                }
                            return null;
                        }),
                        (this._renderContentWithLayer = ({ windowWidth: e }) => {
                            const { LayerComponent: t, style: r, testID: i, variant: s } = this.props,
                                l = r?.length ? [...r] : [r],
                                c = s ? this._renderVariantContent() : this._renderContent();
                            return o.createElement(
                                t,
                                null,
                                o.createElement(
                                    p.Z,
                                    { style: T.noPointerEvents },
                                    o.createElement(m.Z, { id: "Toast" }, (t, r) => o.createElement(a.Z, (0, n.Z)({ ref: t() }, r({ role: "alert", style: [T.root, s && this._getRootVariantStyle(), ...l, e > b.default.theme.breakpoints.medium && T.rootWide], testID: i })), c)),
                                ),
                            );
                        }),
                        (this._renderContentWithoutLayer = ({ windowWidth: e }) => {
                            const { testID: t } = this.props;
                            return o.createElement(p.Z, null, o.createElement(a.Z, { role: "alert", style: [T.root, e > b.default.theme.breakpoints.medium && T.rootWide], testID: t }, this._renderContent()));
                        }),
                        (this._createTimer = () => {
                            const { action: e, autoDismissDelay: t, onClose: r, text: n, withAutoDismiss: o } = this.props;
                            if (o) {
                                const o = t || E.calculateDismissDelay(n, !!e);
                                this._timerId = setTimeout(r, o);
                            }
                        }),
                        (this._handleActionPress = (e) => {
                            this._stopTimer();
                            const { action: t, onClose: r } = this.props;
                            t?.onAction && t.onAction(e), r(e);
                        }),
                        (this._handleClose = (e) => {
                            this._stopTimer(), this.props.onClose(e);
                        });
                }
                componentDidMount() {
                    this._createTimer();
                }
                componentWillUnmount() {
                    this._stopTimer();
                }
                render() {
                    const { ariaOnly: e, withoutLayer: t } = this.props;
                    return e ? this._renderAriaOnly() : o.createElement(w.ZP, null, t ? this._renderContentWithoutLayer : this._renderContentWithLayer);
                }
                _renderActionLabel(e) {
                    const { label: t, link: r } = e;
                    return o.createElement(h.ZP, { children: t, color: "whiteOnColor", link: r, onClick: this._handleActionPress, style: [T.actionText, !r && T.actionMargin], weight: "bold", withInteractiveStyling: !0 });
                }
                static calculateDismissDelay(e, t) {
                    const r = (1e3 * ("string" == typeof e ? e.split(" ").length : 0)) / 5 + 225;
                    return (r < 4e3 ? 4e3 : r) + (t ? 2e3 : 0);
                }
                _stopTimer() {
                    clearTimeout(this._timerId);
                }
            }
            E.defaultProps = { withAutoDismiss: !0, withClearButton: !1, LayerComponent: f.Z.ModalToasts };
            const T = b.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.primary, flexDirection: "row", justifyContent: "space-between", padding: e.spaces.space12, pointerEvents: "auto" }, rootVariantJp: { alignItems: "flex-start", backgroundColor: e.colors.green500, pointerEvents: "auto", flexDirection: "row", padding: e.spaces.space12 }, rootVariantJetfuel: { flexDirection: "column", alignItems: "center", backgroundColor: "transparent" }, icon: { flexShrink: 0, width: 50, height: 50 }, noPointerEvents: { pointerEvents: "none" }, body: { flexShrink: 1 }, divider: { marginHorizontal: e.spaces.space12, backgroundColor: e.colors.white }, content: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, rootWide: { alignSelf: "center", borderRadius: e.borderRadii.small, marginBottom: e.spaces.space32 }, titleText: { flexShrink: 1, paddingHorizontal: e.spaces.space12 }, actionText: { alignSelf: "center", whiteSpace: "nowrap", marginEnd: e.spaces.space12 }, actionButtons: { flexDirection: "row" }, actionMargin: { marginHorizontal: e.spaces.space12 }, closeButton: { marginStart: e.spaces.space12, paddingHorizontal: e.spaces.space4 } })),
                v = E;
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        487552: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        522450: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14.355 9.649c-.773-.771-.774-2.023-.002-2.795L16.5 4.707c.37-.37.48-.926.28-1.409s-.671-.798-1.195-.798h-1.118c-1.725 0-3.346.672-4.566 1.892-1.531 1.53-2.191 3.711-1.766 5.834l.217 1.084c.065.327-.034.666-.273.905l-5.372 5.372c-.378.378-.585.88-.585 1.414s.208 1.036.585 1.414l.882.882c.378.377.88.585 1.414.585s1.036-.208 1.414-.585l5.372-5.372c.24-.24.578-.339.905-.273l1.084.217c2.123.425 4.304-.236 5.834-1.766 1.22-1.22 1.892-2.842 1.892-4.566V8.419c0-.523-.315-.995-.798-1.195s-1.039-.089-1.409.28L17.15 9.651c-.772.772-2.024.771-2.795-.002z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        19697: (e, t, r) => {
            r.d(t, { q8: () => c, $i: () => i });
            r(571372);
            var n = r(790187);
            const o = (e, t) => {
                const r = document.createElement("canvas");
                (r.width = e), (r.height = t);
                const n = r.getContext("2d");
                return (n.fillStyle = "#FFFFFF"), n.fillRect(0, 0, e, t), r;
            };
            function i(e, t, r, o, i) {
                return l(t, r).then(
                    (t) => (
                        (function (e, t, r, o, i, a) {
                            const s = a || { top: 0, left: 0, width: t.width, height: t.height };
                            let l = s.left,
                                c = s.top,
                                d = s.width,
                                h = s.height,
                                u = 0,
                                p = 0,
                                g = r,
                                m = o;
                            switch ((e.save(), i)) {
                                case n.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (l = t.width - s.width - s.left), (u = -r);
                                    break;
                                case n.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (l = t.width - s.width - s.left), (c = t.height - s.height - s.top), (u = -r), (p = -o);
                                    break;
                                case n.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (c = t.height - s.height - s.top), (p = -o);
                                    break;
                                case n.Z.LEFT_TOP:
                                    e.translate(r / 2, o / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (l = s.top), (c = s.left), (d = s.height), (h = s.width), (u = -o / 2), (p = -r / 2), (g = o), (m = r);
                                    break;
                                case n.Z.LEFT_BOTTOM:
                                    e.translate(r / 2, o / 2), e.rotate(Math.PI / 2), (l = s.top), (c = t.height - s.width - s.left), (d = s.height), (h = s.width), (u = -o / 2), (p = -r / 2), (g = o), (m = r);
                                    break;
                                case n.Z.RIGHT_BOTTOM:
                                    e.translate(r / 2, o / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (l = t.width - s.height - s.top), (c = t.height - s.width - s.left), (d = s.height), (h = s.width), (u = -o / 2), (p = -r / 2), (g = o), (m = r);
                                    break;
                                case n.Z.RIGHT_TOP:
                                    e.translate(r / 2, o / 2), e.rotate(-Math.PI / 2), (l = t.width - s.height - s.top), (c = s.left), (d = s.height), (h = s.width), (u = -o / 2), (p = -r / 2), (g = o), (m = r);
                            }
                            e.drawImage(t, l, c, d, h, u, p, g, m), e.restore();
                        })(t.getContext("2d"), e, t.width, t.height, o, i),
                        t
                    ),
                );
            }
            const a = 3145728,
                s = 5242880;
            function l(e, t) {
                if (window.CanvasRenderingContext2D) {
                    const r = o(e, t);
                    return c(r)
                        .then(() => r)
                        .catch(() => {
                            const r = e * t;
                            if (r > s) {
                                const r = d(s, e, t);
                                return l(r.width, r.height);
                            }
                            if (r > a) {
                                const r = d(a, e, t);
                                return l(r.width, r.height);
                            }
                            throw Error("Could not create valid canvas for resizing");
                        });
                }
                return Promise.reject(Error("Canvas is not supported in this browser"));
            }
            function c(e) {
                return new Promise((t, r) => {
                    const n = e.toDataURL("image/jpeg");
                    n && "data:," !== n ? t(n) : r(new Error("Malformed canvas"));
                });
            }
            function d(e, t, r) {
                const n = Math.sqrt((e * r) / t),
                    o = (t * n) / r;
                return { height: Math.floor(n), width: Math.floor(o) };
            }
        },
        790187: (e, t, r) => {
            r.d(t, { C: () => i, Z: () => n });
            r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157);
            const n = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                o = (e, t, r = 65536) => {
                    let n = new Uint8Array([]),
                        o = 0;
                    function i(i, a, s) {
                        const l = i - o,
                            c = l + a;
                        if (l >= 0 && c <= n.length) s(n.subarray(l, c), i);
                        else {
                            const l = new FileReader();
                            (l.onload = function () {
                                (n = new Uint8Array(this.result)), (o = i), s(n.subarray(0, a), i);
                            }),
                                (l.onerror = t.bind(null, 0)),
                                null !== e && l.readAsArrayBuffer(e.slice(i, i + Math.max(r, a)));
                        }
                    }
                    function a(e) {
                        const r = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, e.subarray(0, 4))];
                        if (void 0 === r) return void t(0);
                        function n(t, n) {
                            let o = 0;
                            for (let i = 0; i < n; i++) o = (o << 8) + e[t + (r ? i : n - 1 - i)];
                            return o;
                        }
                        const o = e.length > 8 && n(4, 4);
                        if (!o || o + 2 > e.length) return void t(0);
                        let i = n(o, 2);
                        if (o + 12 * i + 6 > e.length) return void t(0);
                        let a = o + 2;
                        for (; i > 0; ) {
                            if (((i -= 1), 274 === n(a, 2) && 3 === n(a + 2, 2) && 1 === n(a + 4, 4))) return void t(n(a + 8, 2));
                            a += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? i(0, 10, function e(r, n) {
                              const o = r[1];
                              if (r.length < 4 || 255 !== r[0] || 217 === o) return void t(0);
                              const s = o < 208 || o > 217 ? (r[2] << 8) + r[3] : 0;
                              225 === o && s > 8 && "Exif\0\0" === String.fromCharCode.apply(null, r.subarray(4, 10)) ? i(n + 10, s - 8, a) : i(n + 2 + s, 10, e);
                          })
                        : t(0);
                },
                i = (e, t) => {
                    const r = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((i) => {
                        r
                            ? i(n.TOP_LEFT)
                            : o(
                                  e,
                                  (e) => {
                                      i(e);
                                  },
                                  t,
                              );
                    });
                };
        },
        276259: (e, t, r) => {
            r.d(t, { Lw: () => o, Re: () => h, VJ: () => s, ZF: () => u, hv: () => l, ku: () => n, qp: () => i, uv: () => a, v5: () => d });
            r(571372), r(875640), r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157), r(543673), r(240753), r(128399);
            function n(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function o(e) {
                return new Promise((t, r) => {
                    const n = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== n.length) r(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, r] = n,
                                    o = atob(r),
                                    i = o.length,
                                    a = Array(i);
                                for (let e = 0; e < i; e++) a[e] = o.charCodeAt(e);
                                t(new Blob([new Uint8Array(a)], { type: e }));
                            } else r(Error("The Uint8Array type is not available"));
                        else r(Error("The atob API is not available"));
                    else r(Error("The Blob API is not available"));
                });
            }
            const i = (e, t) =>
                    new Promise((r, n) => {
                        const o = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                o.abort?.(), n(Error(u));
                            }),
                            (o.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? r(e.target.result) : n(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (o.onerror = (e) => {
                                n(e);
                            }),
                            o.readAsArrayBuffer(e);
                    }),
                a = (e, t) => {
                    const r = document.createElement("a");
                    (r.href = e), (r.download = t), (r.target = "_blank"), r.click(), r.remove();
                },
                s = (e) =>
                    ((e) =>
                        new Promise((t) => {
                            const r = new Image();
                            (r.onload = function () {
                                const e = document.createElement("canvas");
                                (e.width = r.width), (e.height = r.height), e.getContext("2d").drawImage(r, 0, 0), e.toBlob((e) => t(e), "image/png");
                            }),
                                (r.crossOrigin = "anonymous"),
                                (r.src = e);
                        }))(e).then((e) => navigator.clipboard.write([new ClipboardItem({ "image/png": e })])),
                l = async (e, t) => {
                    if (e.size <= t) return e;
                    let r = e,
                        n = 1;
                    for (; r && r.size > t; )
                        try {
                            n > 0.2 ? ((n *= 0.7), (r = await c(r, 1, n))) : (r = await c(r, 0.7, n));
                        } catch (e) {
                            r = void 0;
                        }
                    return r;
                },
                c = (e, t, r) =>
                    new Promise((n, o) => {
                        const i = new Image();
                        (i.onload = () => {
                            const e = document.createElement("canvas"),
                                o = e.getContext("2d"),
                                a = i.width * t,
                                s = i.height * t;
                            (e.width = a),
                                (e.height = s),
                                o.drawImage(i, 0, 0, a, s),
                                e.toBlob(
                                    (e) => {
                                        n(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    r,
                                );
                        }),
                            (i.onerror = () => o(new Error("Failed to load image while resizing"))),
                            (i.src = URL.createObjectURL(e));
                    }),
                d = ["image/jpeg", "image/png", "image/webp"],
                h = "image/gif",
                u = "Reading aborted";
        },
        549755: (e, t, r) => {
            r.d(t, { Z: () => n });
            r(571372);
            class n extends Error {
                constructor(e, t, r) {
                    super(e), (this.code = t), (this.type = r || null);
                }
            }
        },
        205074: (e, t, r) => {
            r.d(t, { DS: () => s, ZP: () => l });
            r(543673), r(240753), r(128399);
            var n = r(790187),
                o = r(276259),
                i = r(122123);
            function a(e, t) {
                const r = (function (e) {
                        return [n.Z.LEFT_BOTTOM, n.Z.LEFT_TOP, n.Z.RIGHT_BOTTOM, n.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [o, i] = r ? [e.height, e.width] : [e.width, e.height];
                return { width: o, height: i };
            }
            const s = (e) => {
                const t = e instanceof l,
                    r = e.isImage || e.isGif,
                    n = e.orientation,
                    o = e.width && e.height,
                    i = e.img;
                return !!(t && r && n && o && i);
            };
            class l {
                constructor(e) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === o.Re), (this.isImage = o.v5.some((e) => e === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, i.po)(this.url).then((e) => {
                              const t = (t) => {
                                  const { height: r, width: n } = a(e, t);
                                  return (this.img = e), (this.width = n), (this.height = r), (this.orientation = t), this;
                              };
                              return (0, n.C)(this.fileHandle)
                                  .then((e) => t(e === n.Z.UNKNOWN ? n.Z.TOP_LEFT : e))
                                  .catch(() => t(n.Z.TOP_LEFT));
                          })
                        : Promise.resolve(this);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        122123: (e, t, r) => {
            r.d(t, { gK: () => o, o2: () => a, po: () => i });
            var n = r(549755);
            const o = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function i(e) {
                return new Promise((t, r) => {
                    const i = (e, t) => {
                            const i = new n.Z(e, t, o.type);
                            r(i);
                        },
                        a = new Image();
                    (a.onload = () => {
                        a.width && a.height ? t(a) : i("Image lacks height or width", o.NO_DIMENSIONS);
                    }),
                        (a.onerror = () => {
                            i("Error loading image", o.LOAD_FAILED);
                        }),
                        (a.src = e);
                });
            }
            function a(e) {
                return new Promise((t, r) => {
                    const i = (e, t) => {
                            const i = new n.Z(e, t, o.type);
                            r(i);
                        },
                        a = new Image();
                    a.setAttribute("crossorigin", "anonymous"),
                        (a.onload = () => {
                            if (a.width && a.height) {
                                const e = document.createElement("canvas"),
                                    r = e.getContext("2d");
                                (e.width = a.width),
                                    (e.height = a.height),
                                    r.drawImage(a, 0, 0),
                                    e.toBlob((e) => {
                                        if (e) {
                                            const r = new File([e], "file.jpg", { type: "image/jpeg" });
                                            t(r);
                                        } else i("Failed to convert image to blob", o.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else i("Image lacks height or width", o.NO_DIMENSIONS);
                        }),
                        (a.onerror = () => {
                            i("Error loading image", o.LOAD_FAILED);
                        }),
                        (a.src = e);
                });
            }
        },
        514354: (e, t, r) => {
            r.d(t, { Q: () => l, S: () => s });
            var n = r(332775),
                o = r.n(n),
                i = r(276259),
                a = r(549755);
            const s = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                l = (e, t) =>
                    (0, i.qp)(e, t)
                        .catch((e) => {
                            throw new a.Z(`An error occurred while reading the image file: ${e}`, e.message === i.ZF ? s.HASHING_ABORTED : s.ERROR_READING_IMAGE_FILE);
                        })
                        .then((e) => {
                            const t = o()(e);
                            if (t && "string" == typeof t) return t;
                            throw new a.Z("Hash is not a non-empty string", s.INVALID_HASH);
                        });
        },
        653843: (e, t, r) => {
            r.d(t, { Y7: () => p, ZP: () => E, m2: () => b });
            var n = r(19697),
                o = r(790187),
                i = r(549755),
                a = r(205074),
                s = r(276259);
            function l(e, { maxDimension: t, maxFileSize: r, targetQuality: n }) {
                return (function (e, t, r, n) {
                    function o(i, a) {
                        return c(e, e.width, e.height, i, a).then((e) => {
                            const l = e.width > r || e.height > r,
                                c = e.toDataURL("image/jpeg", n),
                                d = c.split(";base64,")[1],
                                h = (0, s.ku)(d);
                            if (l || h > t) {
                                let e = 0.8;
                                return l && (e = i > a ? r / i : r / a), o(i * e, a * e);
                            }
                            return c;
                        });
                    }
                    return o(e.width, e.height);
                })(e, r, t, n).then(s.Lw);
            }
            function c(e, t, r, o, i) {
                const a = t / 2,
                    s = r / 2;
                return e instanceof HTMLCanvasElement && t <= o && r <= i ? Promise.resolve(e) : a <= o && s <= i ? (0, n.$i)(e, o, i) : (0, n.$i)(e, a, s).then((e) => c(e, e.width, e.height, o, i));
            }
            const d = 5242880,
                h = 4096,
                u = 0.85,
                p = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                g = (e) => e.orientation !== o.Z.TOP_LEFT && e.orientation !== o.Z.UNKNOWN,
                m = (e, t = d, r = h) => {
                    const { height: n, size: o, width: i } = e;
                    return i > r || n > r || o > t;
                },
                f = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                w = (e, t) => {
                    const { height: r, left: n, top: o, width: i } = f(e, t);
                    return !(0 === o && 0 === n && i === e.width && r === e.height);
                };
            function b(e, t) {
                const { maxFileSize: r = d, maxDimension: n = h, cropData: o, jpgPixelsPerByteForResize: i } = t || {},
                    a = "image/jpeg" === e.type,
                    s = (e.width * e.height) / e.size;
                return g(e) || m(e, r, n) || w(e, o) || (a && !!i && s < i);
            }
            const _ = (e, t) => {
                    const { height: r, width: n } = e;
                    return n <= t && r <= t ? { width: n, height: r } : n > r ? { width: t, height: Math.round(r / (n / t)) } : { width: Math.round(n / (r / t)), height: t };
                },
                y = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function E(e, t) {
                const { maxFileSize: r = d, maxDimension: o = h, targetQuality: s = u, cropData: c } = t || {},
                    g = f(e, c);
                if (!b(e, t)) return Promise.resolve(e.fileHandle);
                if (!(0, a.DS)(e)) {
                    const e = new i.Z("The provided file is not a valid image", p.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(e);
                }
                if (e.isGif) {
                    const e = new i.Z("Gifs cannot be processed.", p.GIF_IS_TOO_LARGE);
                    return Promise.reject(e);
                }
                const m = (e) => l(e, { maxFileSize: r, maxDimension: o, targetQuality: s });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const r = ({ height: r, width: o }) => (0, n.$i)(e, o, r, t, g);
                        return y(e)
                            .then(() => ((e) => e(_(g, o)))(r))
                            .then(m);
                    })
                    .catch(() => {
                        const e = new i.Z("Image cannot be processed", p.CANNOT_BE_PROCESSED);
                        return Promise.reject(e);
                    });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AppModules-bc6ccf4c.7c8d240a.js.map
