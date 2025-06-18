"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose-bc6ccf4c", "icons/IconAtBold-js", "icons/IconBookStrokeOff-js", "icons/IconBookmarkCloseStroke-js", "icons/IconFilterFill-js", "icons/IconThumbsUp-js"],
    {
        15038: (e, t, r) => {
            r.d(t, { ZP: () => d });
            var n = r(202784),
                a = r(325686),
                o = r(950822),
                i = r(392237);
            const s = (e) => (0, o.Z)("div", e);
            class l extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._dragEnterCount = 0),
                        (this.state = { active: !1 }),
                        (this._handleDragDrop = (e) => {
                            const { onFilesAdded: t } = this.props;
                            e.preventDefault();
                            t(Array.from(e && e.dataTransfer.files)), this._updateDragCount(0);
                        }),
                        (this._handleDragEnter = (e) => {
                            const { onDragEnter: t } = this.props;
                            e.preventDefault(), t && t(), this._updateDragCount(this._dragEnterCount + 1);
                        }),
                        (this._handleDragLeave = (e) => {
                            e.preventDefault(), this._updateDragCount(this._dragEnterCount - 1);
                        }),
                        (this._handleDragOver = (e) => {
                            e.preventDefault();
                        });
                }
                render() {
                    const { activeStyle: e, allowDragDrop: t, children: r, style: o } = this.props,
                        { active: i } = this.state,
                        l = t ? c.dragBorderValid : c.dragBorderInvalid;
                    return n.createElement(s, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [c.root, o, i && l, i && e] }, n.createElement(a.Z, { style: c.inner }, "function" == typeof r ? r(i) : r));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            l.defaultProps = { allowDragDrop: !0 };
            const c = i.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                d = l;
        },
        779610: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                a = r(325686),
                o = r(191796),
                i = r(58399),
                s = r(731708),
                l = r(952428),
                c = r(392237);
            const d = (e) => {
                    const { decoration: t, description: r, disabled: d = !1, isActive: h = !1, label: p, link: m, onPress: g, paddingHorizontal: v, renderRightContent: f, role: b = "tab", styleOverride: y, testID: E = "pivot", thumbnail: _, thumbnailSize: D, withoutArrow: w = !1 } = e,
                        S = [u.thumbnailContainer, "medium" === D && u.thumbnailContainerMedium],
                        C = "string" == typeof p ? n.createElement(s.ZP, null, p) : p,
                        Z = "object" == typeof m && m.external && !m.openInSameFrame,
                        x = r ? ("string" == typeof r ? n.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${E}-description` }, r) : r) : null,
                        z = n.useMemo(() => ("space0" === v ? { paddingHorizontal: 0 } : { paddingHorizontal: v ? c.default.theme.spaces[v] : c.default.theme.componentDimensions.gutterHorizontal }), [v]);
                    return n.createElement(l.Z, { "aria-selected": "tab" === b ? h : null, disabled: d, link: d ? void 0 : m, onPress: g, role: b, style: [u.root, z, d && u.disabled, y], testID: E, withInteractiveStyling: !!m || !!g }, n.createElement(a.Z, { style: u.contentContainer }, _ ? n.createElement(a.Z, { style: S }, _) : null, n.createElement(a.Z, { style: u.content }, C, x), f ? f() : null, (!m && !g) || d || w ? null : Z ? n.createElement(o.default, { style: u.icon }) : n.createElement(i.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        466818: (e, t, r) => {
            r.d(t, { ZP: () => f });
            var n = r(202784),
                a = r(325686),
                o = r(487552),
                i = r(302752),
                s = r(183806),
                l = r(731708),
                c = r(950822),
                d = r(224162),
                u = r(392237);
            const h = n.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                p = (e) => (0, c.Z)("option", e);
            let m = 1;
            class g extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = n.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: r } = this.props,
                                { selectedIndex: n, value: a } = e.target;
                            t && t(a, n - (r ? 1 : 0));
                        }),
                        (this._handleBlur = (e) => {
                            const { onBlur: t } = this.props;
                            this.setState({ isFocused: !1 }), t && t();
                        }),
                        (this._handleFocus = (e) => {
                            const { onFocus: t } = this.props;
                            this.setState({ isFocused: !0 }), t && t();
                        }),
                        (this._id = `SELECTOR_${m}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (m += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: t, errorText: r, hasError: c, helperText: m, options: g, style: f, testID: b, value: y, withEmptyOption: E } = this.props,
                        { isFocused: _ } = this.state,
                        D = l.ZP.getLanguage(),
                        w = void 0 === c ? !!r : c,
                        S = new Set();
                    r && S.add(this._errorID), e && S.add(e), m && S.add(this._helperID);
                    const C = S.size ? [...S].join(" ") : void 0;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === D ? u.default.theme.fontFamilies.japan : "rtl" === e || i.Z.isLocaleRTL(D) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return n.createElement(
                                a.Z,
                                { style: [s.Z.border, v.container, t && s.Z.disabled, _ && s.Z.focusedBorderValid, w && s.Z.invalidBorderColor, _ && w && s.Z.focusedBorderInvalid, f] },
                                this._renderLabel(),
                                n.createElement(
                                    h,
                                    { "aria-describedby": C, "aria-invalid": w, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [v.select, { fontFamily: l }, t && s.Z.disabled], testID: b || "", value: y },
                                    E ? n.createElement(p, { disabled: !0, style: v.option, value: "" }) : null,
                                    g.map((e) => {
                                        const { disabled: t, label: r, value: a } = e;
                                        return n.createElement(p, { disabled: t, key: `${r}-${a}`, style: v.option, value: a }, r);
                                    }),
                                ),
                                n.createElement(o.default, { style: [v.dropdownCaret, _ && s.Z.validColor, !(!c && !r) && s.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        w && r ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: r } = this.props,
                        { isFocused: a } = this.state;
                    return n.createElement(l.ZP, { color: t || e ? "red500" : a ? "primary" : "gray700", id: this._labelID, role: "label", style: v.label }, r);
                }
                _renderHelperText() {
                    return n.createElement(a.Z, { "aria-live": "polite" }, n.createElement(l.ZP, { color: "gray700", id: this._helperID, style: v.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return n.createElement(a.Z, { "aria-live": "polite" }, n.createElement(l.ZP, { color: "red500", id: this._errorID, style: v.helperText }, this.props.errorText));
                }
            }
            g.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const v = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                f = g;
        },
        388941: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 4.25c-4.28 0-7.75 3.47-7.75 7.75s3.47 7.75 7.75 7.75c1.499 0 2.894-.424 4.078-1.158l1.318 2.125c-1.568.972-3.418 1.534-5.396 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.75 12 1.75 22.25 6.339 22.25 12c0 .534-.032 1.061-.08 1.549-.223 2.285-2.31 3.65-4.378 3.471-1.128-.098-2.114-.621-2.817-1.396-1.008 1.136-2.467 1.802-4.077 1.576-2.748-.386-4.354-3.149-3.973-5.86s2.686-4.924 5.434-4.538c.793.111 1.491.421 2.074.87l.038-.32 2.482.298-.584 4.861c-.122 1.015.621 1.93 1.64 2.019.927.081 1.605-.515 1.674-1.223.042-.426.068-.869.068-1.306 0-4.28-3.47-7.75-7.75-7.75H12zm.01 5.026c-1.08-.152-2.377.746-2.611 2.41s.765 2.885 1.845 3.036c1.08.152 2.377-.746 2.611-2.41.234-1.664-.765-2.884-1.845-3.036z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        355586: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { clipRule: "evenodd", d: "M2.062 9h2.876C4.77 7.643 4.261 6.393 3.5 5.335 2.74 6.393 2.231 7.644 2.062 9zm2.823-5.151C6.017 5.298 6.759 7.069 6.95 9H9V2.062c-1.554.194-2.97.833-4.115 1.787zM11 2.062V9h2.05c.191-1.931.933-3.702 2.065-5.151-1.145-.954-2.56-1.593-4.115-1.787zm5.5 3.273C15.74 6.393 15.23 7.643 15.062 9h2.876c-.169-1.356-.678-2.607-1.438-3.665zM17.938 11h-2.876c.169 1.357.677 2.607 1.438 3.665.76-1.058 1.269-2.309 1.438-3.665zm-2.823 5.151c-1.132-1.449-1.874-3.22-2.066-5.151H11v6.938c1.554-.194 2.97-.833 4.115-1.787zM9 17.938V11H6.95c-.191 1.931-.933 3.702-2.065 5.151 1.145.954 2.56 1.593 4.115 1.787zm-5.5-3.273c.76-1.058 1.27-2.308 1.438-3.665H2.062c.169 1.356.678 2.607 1.438 3.665zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        416276: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.002 4h7.764c1.23 0 2.386.49 3.236 1.32.85-.83 2.006-1.32 3.236-1.32h7.764v16h-8.146c-.839 0-1.488.51-1.959 1.45h-1.789l-.171-.34C10.598 20.43 9.906 20 9.148 20H1.002V4zm10 3.26C10.53 6.48 9.685 6 8.766 6H3.002v12h6.146c.658 0 1.292.16 1.854.46V7.26zm2 11.21c.527-.29 1.143-.47 1.854-.47h6.146V6h-5.764c-.918 0-1.764.48-2.236 1.26v11.21zM19 11h-4V9h4v2zm0 4h-4v-2h4v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        738398: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        194417: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M16 3v8h-3V8.5H3v-3h10V3h3zm5 12.5h-9v3h9v-3zM10 21v-8H7v2.5H3v3h4V21h3zm8-12.5h3v-3h-3v3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        913315: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        226597: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        946474: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M18.36 8h-2.68l.42-2.52C16.4 3.66 15 2 13.15 2c-1.07 0-2.06.57-2.59 1.51l-3 5.24c-.04.06-.08.11-.14.15C6.96 8.35 6.27 8 5.5 8H2v13h14.2c2.1 0 3.92-1.45 4.39-3.5l1.19-5.22C22.27 10.09 20.61 8 18.36 8zM6 19H4v-9h1.5c.27 0 .5.22.5.5V19zm13.83-7.17l-1.19 5.22C18.38 18.19 17.37 19 16.2 19H8v-8.16c.54-.2 1-.58 1.3-1.1l2.99-5.24c.18-.31.5-.5.86-.5.61 0 1.07.55.97 1.15l-.8 4.85h5.04c.97 0 1.68.89 1.47 1.83z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        870798: (e, t, r) => {
            r.d(t, { W: () => g });
            var n = r(202784),
                a = r(424869),
                o = r.n(a),
                i = r(715729),
                s = r(118717),
                l = r(769471),
                c = r(503229),
                d = r(516951);
            const u = Object.freeze({ reset: { _type: "reset", type: "reset" }, set: { _type: "set", type: "set" } });
            var h = r(341110);
            (0, i.GP)();
            const p = !0;
            r(571372);
            class m extends Error {
                constructor(e, t, ...r) {
                    super(...r), Error.captureStackTrace && Error.captureStackTrace(this, m), (this.name = "KonbiniNext"), (this.message = e), (this.extra = t);
                }
            }
            function g(e, t) {
                const r = t || {};
                r.name = r.name || "KonbiniNext";
                const a = (function (e) {
                        const t = new m(e);
                        return new Proxy(
                            {},
                            {
                                get() {
                                    throw t;
                                },
                                set() {
                                    throw t;
                                },
                            },
                        );
                    })(`${r.name} must wrap a React tree, e.g. \`<${r.name}.Provider>\``),
                    g = n.createContext(a);
                const f = function (t) {
                    const a = n.useRef(!1),
                        f = n.useRef();
                    if (
                        (n.useEffect(() => {
                            if (!a.current) return;
                            const e = f.current?.setState;
                            "function" == typeof e &&
                                e((e) => {
                                    v(e, t.state);
                                });
                        }, [t.state]),
                        n.useEffect(() => {
                            a.current = !0;
                        }, []),
                        !a.current)
                    ) {
                        t.name && (r.name = t.name);
                        const n = (function (e, t) {
                            const r = (0, l.Z)({ freeze: !0 }, t),
                                n = r.freeze ? o() : c.Z,
                                a = {},
                                m = {};
                            if (r?.selectors) for (const e of Object.keys(r.selectors)) a[e] = r.selectors[e].bind({});
                            let g;
                            !p && window.__REDUX_DEVTOOLS_EXTENSION__ && (g = window.__REDUX_DEVTOOLS_EXTENSION__({ name: r.name, actionCreators: m }));
                            const v = (0, s.MT)(
                                    (t, r) => {
                                        const a = (function () {
                                            if (!t) return e;
                                            switch (r._type) {
                                                case u.reset._type:
                                                    return e;
                                                case u.set._type:
                                                    return r.nextState;
                                                default:
                                                    return t;
                                            }
                                        })();
                                        return n(a);
                                    },
                                    e,
                                    g,
                                ),
                                f = (function (e) {
                                    return function (t, r) {
                                        return (0, h.useSyncExternalStoreWithSelector)(e.subscribe, e.getState, e.getState, t, r);
                                    };
                                })(v);
                            function b(e) {
                                return function (t) {
                                    const r = v.getState(),
                                        n = (0, i.ZP)(r, t);
                                    v.dispatch({ ...u.set, type: e, nextState: n });
                                };
                            }
                            const y = v.getState,
                                E = r?.mutations;
                            if (E) {
                                const e = Object.keys(E({}));
                                for (const t of e)
                                    m[t] = function (...e) {
                                        const r = b(t);
                                        return (0, E({ getState: y, setState: r, mut: m })[t])(...e);
                                    };
                            }
                            return {
                                store: v,
                                useState: f,
                                getState: y,
                                setState: b("set"),
                                mut: m,
                                select: a,
                                undo: d.Z,
                                redo: d.Z,
                                reset: function () {
                                    v.dispatch(u.reset);
                                },
                            };
                        })(v(e(), t.init), r);
                        (f.current = n), t.onSetup && t.onSetup(n);
                    }
                    if ((n.useDebugValue(r.name), !f.current)) throw new m(`${String(r.name)} could not setup initial context`);
                    return n.createElement(g.Provider, { value: f.current }, t.children);
                };
                return {
                    Provider: f,
                    useActions: function () {
                        n.useDebugValue(r.name);
                        const e = n.useContext(g),
                            { getState: t, mut: a, redo: o, reset: i, select: s, setState: l, undo: c } = e;
                        return n.useMemo(() => ({ getState: t, mut: a, redo: o, reset: i, select: s, setState: l, undo: c }), [t, a, o, i, s, l, c]);
                    },
                    useState: function (e, t) {
                        return n.useDebugValue([r.name, String(e), { selector: e, equalityFn: t }]), n.useContext(g).useState(e, t);
                    },
                    useSelect: function (e) {
                        n.useDebugValue([r.name, String(e), { select_selector: e }]);
                        const t = n.useContext(g),
                            a = e(t.select);
                        return t.useState(a);
                    },
                };
            }
            function v(e, t) {
                return Object.assign(e, t);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose-bc6ccf4c.b2d60cda.js.map
