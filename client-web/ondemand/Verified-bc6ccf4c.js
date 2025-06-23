"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-bc6ccf4c", "loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconCropSquare-js"],
    {
        13720: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                a = r(325686),
                n = r(365712),
                l = r(516951),
                i = r(352924);
            const s = ({ allowMultipleToggles: e, children: t, testID: r, withKeyboardNavigation: s = !1 }) => {
                let c, d;
                const u = (0, i.b)(),
                    p = o.useMemo(() => {
                        let r = [];
                        return (
                            o.Children.map(t, (t, o) => {
                                const a = `${u}_${o}`;
                                t.props?.isExpanded && (r = e ? [...r, a] : 1 === r.length ? r : [a]);
                            }),
                            r
                        );
                    }, [u, e, t]),
                    [m, h] = o.useState(p),
                    g = () => d.indexOf(document.activeElement),
                    b = (e) => {
                        e.focus({ preventScroll: !0 });
                    },
                    f = (t) => {
                        let r = [],
                            o = [t];
                        const a = m?.includes(t);
                        e && (a ? (r = m?.filter((e) => e !== t)) : (o = [...m, t])), h(a ? r : o);
                    },
                    y = o.Children.map(t, (e, t) => {
                        const r = `${u}_${t}`;
                        return o.isValidElement(e) ? o.cloneElement(e, { accordionItemId: r, onToggle: f, isExpanded: m.includes(r) }) : e;
                    });
                return o.createElement(
                    a.Z,
                    {
                        onKeyDown: s
                            ? (e) => {
                                  if (!d.includes(e.target)) return;
                                  let t;
                                  switch (e.key) {
                                      case "ArrowDown":
                                          e.preventDefault(), (t = d[g() + 1] || d[0]), b(t);
                                          break;
                                      case "ArrowUp":
                                          e.preventDefault(), (t = d[g() - 1] || d[d.length - 1]), b(t);
                                          break;
                                      case "Home":
                                          e.preventDefault(), (t = d[0]), b(t);
                                          break;
                                      case "End":
                                          e.preventDefault(), (t = d[d.length - 1]), b(t);
                                  }
                              }
                            : l.Z,
                        ref: (e) => {
                            if (e && c !== e) {
                                c = e;
                                const t = (0, n.ht)(c);
                                d = t.filter((e) => e.id.includes("header"));
                            }
                        },
                        testID: r,
                    },
                    y,
                );
            };
        },
        108837: (e, t, r) => {
            r.d(t, { Z: () => p });
            r(136728);
            var o = r(202784),
                a = r(325686),
                n = r(487552),
                l = r(461756),
                i = r(731708),
                s = r(58881),
                c = r(530732),
                d = r(392237);
            const u = d.default.create((e) => ({ header: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, chevronMargin: { marginStart: e.spaces.space12 }, chevronExpanded: { color: e.colors.primary, transform: "rotate(-180deg)" }, chevronAnimation: { transitionDuration: "100ms" }, title: { flexDirection: "row" }, iconBefore: { marginEnd: e.spaces.space8 }, iconAfter: { marginStart: e.spaces.space8 } })),
                p = ({ accordionItemId: e = "", children: t, headerStyles: r, icon: p, iconColor: m, iconImage: h, iconSide: g, isExpanded: b = !1, onClick: f, onToggle: y, testID: C, title: E, titleColor: Z, titleStyles: w }) => {
                    const v = s.Z.generate({ backgroundColor: "transparent", color: d.default.theme.colors.primary, customFocusBackgroundColor: d.default.theme.colors.gray0, customHoverBackgroundColor: d.default.theme.colors.gray0, customPressedBackgroundColor: d.default.theme.colors.gray0, insetFocusRing: !0 }),
                        k = g || "AfterTitle",
                        x = () =>
                            p
                                ? ((e, t) => {
                                      const r = "BeforeTitle" === t ? u.iconBefore : u.iconAfter;
                                      return o.createElement(e, { style: m ? [r, { color: m }] : [r, { color: d.default.theme.colors.text }], testID: "icon" });
                                  })(p, k)
                                : h || void 0;
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                            c.Z,
                            {
                                "aria-controls": `${e}_content`,
                                "aria-expanded": b,
                                id: `${e}_header`,
                                interactiveStyles: v,
                                onClick: () => {
                                    f && f(), y && y(e);
                                },
                                style: r || u.header,
                                testID: C,
                            },
                            o.createElement(a.Z, { style: u.title }, "BeforeTitle" === k ? x() : null, o.createElement(i.ZP, { color: Z && Z, style: w, testID: "title", weight: "bold" }, E), "AfterTitle" === k ? x() : null),
                            (() => {
                                const e = [u.chevronMargin, b && u.chevronExpanded, !l.Z.reducedMotionEnabled && u.chevronAnimation];
                                return Z && !b ? e.push({ color: d.default.theme.colors[Z] }) : Z || b || e.push({ color: d.default.theme.colors.text }), o.createElement(n.default, { style: e, testID: "accordion-chevron" });
                            })(),
                        ),
                        b && o.createElement(a.Z, { "aria-hidden": !b, "aria-labelledby": `${e}_header`, id: `${e}_content}`, role: "region" }, t),
                    );
                };
        },
        507151: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                a = r(325686),
                n = r(58399),
                l = r(731708);
            const i = r(392237).default.create((e) => ({ container: { padding: e.spaces.space16, boxShadow: e.boxShadows.medium, borderRadius: e.borderRadii.large, flexDirection: "column", backgroundColor: e.colors.buttonWhite }, backgroundCursorStyle: { cursor: "pointer" }, description: { marginTop: e.spaces.space4 }, secondaryDescription: { marginTop: e.spaces.space8 }, linkContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space16 }, iconChevron: { color: e.colors.blue500 } })),
                s = function (e) {
                    const { description: t, linkLabel: r, onClick: s, secondaryDescription: c } = e,
                        d = r || s ? i.backgroundCursorStyle : null;
                    return o.createElement(a.Z, { onClick: s, style: [i.container, d], testID: "card-info-container" }, o.createElement(l.ZP, { color: "text", role: "label", size: "body", style: i.description, weight: "bold" }, t), c && o.createElement(l.ZP, { color: "gray700", role: "label", size: "body", style: i.secondaryDescription }, c), r && o.createElement(a.Z, { style: i.linkContainer }, o.createElement(l.ZP, { color: "blue500", size: "body", weight: "bold" }, r), o.createElement(n.default, { style: i.iconChevron })));
                };
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => m });
            var o = r(202784),
                a = r(476984),
                n = r.n(a),
                l = r(143778),
                i = r(750410),
                s = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class m extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: a, icon: n, loadingMessage: l, onRequestRetry: d, render: m, renderFailure: h, retryMessage: g, retryable: b } = this.props;
                    switch (a) {
                        case c:
                            return b ? o.createElement(i.Z, { icon: n, onRequestRetry: d, retryMessage: g }) : r ? o.createElement(s.m, { failureMessage: r }) : h();
                        case u:
                            return o.createElement(s.J, { "aria-label": e, color: t, loadingMessage: l });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                a = r(325686),
                n = r(235902),
                l = r(885015),
                i = r(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: s } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return r ? o.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, o.createElement(a.Z, { style: c.gapColumn }, o.createElement(a.Z, { style: [c.gap, d] })), o.createElement(a.Z, { style: c.gapText }, r), o.createElement(a.Z, { style: c.gapColumn }, o.createElement(a.Z, { style: [c.gap, d] }))) : o.createElement(a.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(807896),
                a = r(202784),
                n = r(325686),
                l = r(392237);
            class i extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...l } = this.props,
                        i = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, s.column, r && s.withGutterColumn] }));
                    return a.createElement(n.Z, (0, o.Z)({ style: [t, s.root, r && s.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        524496: (e, t, r) => {
            r.d(t, { Z: () => E });
            r(136728);
            var o = r(202784),
                a = r(301503),
                n = r(325686),
                l = r(595088),
                i = r(516951),
                s = r(731708),
                c = r(779802),
                d = r(537392),
                u = r(989272),
                p = r(925873),
                m = r(202253),
                h = r(786475),
                g = r(392237),
                b = r(135904);
            const f = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: o.createElement(s.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: o.createElement(s.ZP, null) } },
                y = (0, l.Z)(f).reduce((e, [t, r]) => e.set(t, r), a.DefaultDraftBlockRenderMap);
            let C = !1;
            const E = o.memo(function (e) {
                    const { componentByType: t, contentState: r, onScribeEvent: l, paragraphFontSizeOverride: s } = e;
                    o.useEffect(() => {
                        C || (u.fH(b.c, b.n), (C = !0));
                    }, []);
                    const g = [(0, m.ez)(l, s), m.aF, m.RU];
                    e.disable_entityLinkDecorator || g.push((0, m.NA)(l, s));
                    const f = p.Z.initEditorState(r, { decorators: g });
                    let E = i.Z;
                    return (
                        t &&
                            (E = (e) => {
                                const r = e.getType();
                                return t[r] || null;
                            }),
                        o.createElement(d.ZP, null, ({ containerWidth: e }) => o.createElement(n.Z, { style: Z.fontFamily }, o.createElement(a.Editor, { blockRenderMap: y, blockRendererFn: E, blockStyleFn: (0, c.su)(h.Z.isNarrowScreenWidth(e)), editorState: f, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                Z = g.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => y });
            var o = r(202784),
                a = r(325686),
                n = r(913973),
                l = r(731708),
                i = r(950822),
                s = r(466792),
                c = r(58881),
                d = r(530732),
                u = r(352924),
                p = r(392237);
            class m extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: r } = this.props;
                            r && !t && r(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: u, helpText: m, label: g, name: b, testID: f } = this.props,
                        y = c.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = c.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        E = r ? y : C;
                    return o.createElement(s.Z, { disabled: u }, (s) => o.createElement(a.Z, { role: "label", style: [h.root, !u && h.interactive], testID: f }, o.createElement(a.Z, { style: h.topContainer }, o.createElement(l.ZP, { id: this.labelId }, g), o.createElement(a.Z, { style: h.radioContainer }, o.createElement(d.Z, { interactiveStyles: E, interactivityState: s, style: h.radioBackground }, o.createElement(a.Z, { style: [h.circle, r && h.circleActive, u && h.circleDisabled, r && u && h.circleCheckedAndDisabled] }, r ? o.createElement(n.default, { style: h.checkMark }) : null)), (0, i.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: u, name: b, onChange: this._handleChange, ref: this._setRef, style: [h.nativeControl], type: "radio" }))), m ? o.createElement(l.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: h.helpText }, m) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            m.defaultProps = { disabled: !1, checked: !1 };
            const h = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = m,
                b = "radioGroup";
            let f = 1;
            class y extends o.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: r } = this.props;
                            r(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (r) => {
                            (this._radioRefs[e] = r), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${f}_LABEL`),
                        (f += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: r, label: n, name: i, options: s, value: c } = this.props;
                    return o.createElement(
                        a.Z,
                        { "aria-label": e, "aria-labelledby": n && !e ? this._labelId : void 0, role: "radiogroup", style: r && C.disabled, testID: `${b}${i}` },
                        n ? o.createElement(a.Z, { id: this._labelId, role: "label", style: C.header }, o.createElement(l.ZP, { style: C.label, weight: "bold" }, n), t ? o.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => o.createElement(g, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: i, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        928088: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                a = r(325686);
            const n = r(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                l = function ({ children: e }) {
                    return o.createElement(a.Z, { style: n.root }, e);
                };
        },
        101890: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                a = r(325686),
                n = r(449479),
                l = r(392237);
            const i = (e) => o.createElement(a.Z, { style: s.root }, o.createElement(n.Z, e)),
                s = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        782947: (e, t, r) => {
            r.d(t, { Z: () => f });
            var o = r(807896),
                a = r(202784),
                n = r(896632),
                l = r(325686),
                i = r(711223),
                s = r(516951),
                c = r(731708),
                d = r(868634),
                u = r(952428),
                p = r(352924),
                m = r(392237);
            const h = m.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                g = { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                b = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": r, checked: o, dedicatedPillRow: n, description: m, disabled: b, disabledInlineCallout: f, endContent: y, horizontal: C, illustration: E, infoLabel: Z, infoLabelType: w, inlineCallout: v, label: k, name: x, onChange: D, pillText: I, pillType: R, reverseLabels: S, secondaryContent: T, secondaryDescription: _, switchStyle: P, testID: z }) => {
                    const B = (0, p.b)(),
                        M = (0, p.b)(),
                        F = (0, p.b)(),
                        A = a.createElement(c.ZP, { color: P ? (o ? "text" : "gray800") : "text", id: B, role: "label", size: P ? "body" : "headline2", testID: "headline-label", weight: P ? "normal" : "bold" }, k),
                        G = !!m && a.createElement(c.ZP, { color: "gray700", id: M, size: "subtext1", style: I ? h.descriptionWithPill : h.description, testID: "description-label" }, m),
                        W = a.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: h.description }, _),
                        $ = I ? a.createElement(d.ZP, { style: n ? h.pill : h.inlinePill, type: R }, I) : null,
                        j = a.createElement(a.Fragment, null, n ? $ : null, a.createElement(l.Z, { style: [h.row, Z && h.marginBottom8] }, S ? G : A, n ? null : $), a.createElement(l.Z, { style: [h.row, S && h.marginTop4] }, S ? A : G), T || (_ ? W : void 0)),
                        H = P ? "unset" : (r ? 100 / r : 100) + "%",
                        V = P ? [h.padding8, h.borderRadiusLarge, o ? h.backgroundDefault : h.backgroundTransparent] : [h.padding16, h.boxShadow, h.borderRadiusLarge, o ? h.checked : null, h.backgroundDefault];
                    return a.createElement(a.Fragment, null, a.createElement(u.Z, { disabled: b, style: [h.root, ...V, C ? { maxWidth: H, ...h.grow } : null, 1 === t || C ? null : h.withMarginTop, t !== r && C && !P && h.withMarginEnd, !b && h.interactive], testID: z, withInteractiveStyling: !P }, !!E && a.createElement(l.Z, { style: h.iconContainer, testID: "illustration" }, E), a.createElement(l.Z, { style: [h.labelContainer, P && h.alignCenter] }, !!Z && a.createElement(l.Z, { style: h.info }, a.createElement(d.ZP, { background: "green" === w ? "green500" : "red" === w ? "magenta500" : "yellow" === w ? "orange50" : "gray500" }, a.createElement(c.ZP, { color: "yellow" === w ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, Z)), "red" !== w && "yellow" !== w && a.createElement(i.default, { style: h.infoIcon, testID: "infoIcon" })), j, o && !!v && a.createElement(l.Z, { style: h.inlineCalloutContainer, testID: "inlineCallout" }, v)), !!y && a.createElement(l.Z, { style: h.endContentContainer, testID: "endContent" }, a.createElement(c.ZP, { id: F, size: "subtext1", weight: "bold" }, y)), a.createElement("input", { "aria-describedby": `${M} ${F}`, "aria-label": e, "aria-labelledby": B, "aria-posinset": t, "aria-setsize": r, checked: o, disabled: b, name: x, onChange: o ? s.Z : D, style: g, type: "radio" })), b && f ? f : null);
                },
                f = (e) => {
                    const t = a.useCallback(({ value: e, ...t }) => a.createElement(b, (0, o.Z)({}, t, { key: e })), []);
                    return a.createElement(n.Z, (0, o.Z)({}, e, { renderSelector: t }));
                };
        },
        390587: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => a, Z: () => o });
            r(136728);
            const o = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (r, o, a) => {
                        const n = t ? t(o, a, e) : !!o;
                        return n && r[0].push(o), !n && r[1].push(o), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-bc6ccf4c.84e145ba.js.map
