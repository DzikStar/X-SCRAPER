"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-e907d115"],
    {
        13720: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                n = r(325686),
                a = r(365712),
                l = r(516951),
                i = r(352924);
            const s = ({ allowMultipleToggles: e, children: t, testID: r, withKeyboardNavigation: s = !1 }) => {
                let c, d;
                const p = (0, i.b)(),
                    u = o.useMemo(() => {
                        let r = [];
                        return (
                            o.Children.map(t, (t, o) => {
                                const n = `${p}_${o}`;
                                t.props?.isExpanded && (r = e ? [...r, n] : 1 === r.length ? r : [n]);
                            }),
                            r
                        );
                    }, [p, e, t]),
                    [m, h] = o.useState(u),
                    g = () => d.indexOf(document.activeElement),
                    b = (e) => {
                        e.focus({ preventScroll: !0 });
                    },
                    f = (t) => {
                        let r = [],
                            o = [t];
                        const n = m?.includes(t);
                        e && (n ? (r = m?.filter((e) => e !== t)) : (o = [...m, t])), h(n ? r : o);
                    },
                    y = o.Children.map(t, (e, t) => {
                        const r = `${p}_${t}`;
                        return o.isValidElement(e) ? o.cloneElement(e, { accordionItemId: r, onToggle: f, isExpanded: m.includes(r) }) : e;
                    });
                return o.createElement(
                    n.Z,
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
                                const t = (0, a.ht)(c);
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
            r.d(t, { Z: () => u });
            r(136728);
            var o = r(202784),
                n = r(325686),
                a = r(487552),
                l = r(461756),
                i = r(731708),
                s = r(58881),
                c = r(530732),
                d = r(392237);
            const p = d.default.create((e) => ({ header: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, chevronMargin: { marginStart: e.spaces.space12 }, chevronExpanded: { color: e.colors.primary, transform: "rotate(-180deg)" }, chevronAnimation: { transitionDuration: "100ms" }, title: { flexDirection: "row" }, iconBefore: { marginEnd: e.spaces.space8 }, iconAfter: { marginStart: e.spaces.space8 } })),
                u = ({ accordionItemId: e = "", children: t, headerStyles: r, icon: u, iconColor: m, iconImage: h, iconSide: g, isExpanded: b = !1, onClick: f, onToggle: y, testID: C, title: E, titleColor: Z, titleStyles: w }) => {
                    const k = s.Z.generate({ backgroundColor: "transparent", color: d.default.theme.colors.primary, customFocusBackgroundColor: d.default.theme.colors.gray0, customHoverBackgroundColor: d.default.theme.colors.gray0, customPressedBackgroundColor: d.default.theme.colors.gray0, insetFocusRing: !0 }),
                        x = g || "AfterTitle",
                        D = () =>
                            u
                                ? ((e, t) => {
                                      const r = "BeforeTitle" === t ? p.iconBefore : p.iconAfter;
                                      return o.createElement(e, { style: m ? [r, { color: m }] : [r, { color: d.default.theme.colors.text }], testID: "icon" });
                                  })(u, x)
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
                                interactiveStyles: k,
                                onClick: () => {
                                    f && f(), y && y(e);
                                },
                                style: r || p.header,
                                testID: C,
                            },
                            o.createElement(n.Z, { style: p.title }, "BeforeTitle" === x ? D() : null, o.createElement(i.ZP, { color: Z && Z, style: w, testID: "title", weight: "bold" }, E), "AfterTitle" === x ? D() : null),
                            (() => {
                                const e = [p.chevronMargin, b && p.chevronExpanded, !l.Z.reducedMotionEnabled && p.chevronAnimation];
                                return Z && !b ? e.push({ color: d.default.theme.colors[Z] }) : Z || b || e.push({ color: d.default.theme.colors.text }), o.createElement(a.default, { style: e, testID: "accordion-chevron" });
                            })(),
                        ),
                        b && o.createElement(n.Z, { "aria-hidden": !b, "aria-labelledby": `${e}_header`, id: `${e}_content}`, role: "region" }, t),
                    );
                };
        },
        507151: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                n = r(325686),
                a = r(58399),
                l = r(731708);
            const i = r(392237).default.create((e) => ({ container: { padding: e.spaces.space16, boxShadow: e.boxShadows.medium, borderRadius: e.borderRadii.large, flexDirection: "column", backgroundColor: e.colors.buttonWhite }, backgroundCursorStyle: { cursor: "pointer" }, description: { marginTop: e.spaces.space4 }, secondaryDescription: { marginTop: e.spaces.space8 }, linkContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space16 }, iconChevron: { color: e.colors.blue500 } })),
                s = function (e) {
                    const { description: t, linkLabel: r, onClick: s, secondaryDescription: c } = e,
                        d = r || s ? i.backgroundCursorStyle : null;
                    return o.createElement(n.Z, { onClick: s, style: [i.container, d], testID: "card-info-container" }, o.createElement(l.ZP, { color: "text", role: "label", size: "body", style: i.description, weight: "bold" }, t), c && o.createElement(l.ZP, { color: "gray700", role: "label", size: "body", style: i.secondaryDescription }, c), r && o.createElement(n.Z, { style: i.linkContainer }, o.createElement(l.ZP, { color: "blue500", size: "body", weight: "bold" }, r), o.createElement(a.default, { style: i.iconChevron })));
                };
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                n = r(325686),
                a = r(235902),
                l = r(885015),
                i = r(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: s } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return r ? o.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, o.createElement(n.Z, { style: c.gapColumn }, o.createElement(n.Z, { style: [c.gap, d] })), o.createElement(n.Z, { style: c.gapText }, r), o.createElement(n.Z, { style: c.gapColumn }, o.createElement(n.Z, { style: [c.gap, d] }))) : o.createElement(n.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(807896),
                n = r(202784),
                a = r(325686),
                l = r(392237);
            class i extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...l } = this.props,
                        i = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, s.column, r && s.withGutterColumn] }));
                    return n.createElement(a.Z, (0, o.Z)({ style: [t, s.root, r && s.withGutter] }, l), i);
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
                n = r(301503),
                a = r(325686),
                l = r(595088),
                i = r(516951),
                s = r(731708),
                c = r(779802),
                d = r(537392),
                p = r(989272),
                u = r(925873),
                m = r(202253),
                h = r(786475),
                g = r(392237),
                b = r(135904);
            const f = { [c.P7.atomic]: { element: "section" }, [c.P7.header1]: { element: "h1", wrapper: o.createElement(s.ZP, null) }, [c.P7.header2]: { element: "h2", wrapper: o.createElement(s.ZP, null) } },
                y = (0, l.Z)(f).reduce((e, [t, r]) => e.set(t, r), n.DefaultDraftBlockRenderMap);
            let C = !1;
            const E = o.memo(function (e) {
                    const { componentByType: t, contentState: r, onScribeEvent: l, paragraphFontSizeOverride: s } = e;
                    o.useEffect(() => {
                        C || (p.fH(b.c, b.n), (C = !0));
                    }, []);
                    const g = [(0, m.ez)(l, s), m.aF, m.RU];
                    e.disable_entityLinkDecorator || g.push((0, m.NA)(l, s));
                    const f = u.Z.initEditorState(r, { decorators: g });
                    let E = i.Z;
                    return (
                        t &&
                            (E = (e) => {
                                const r = e.getType();
                                return t[r] || null;
                            }),
                        o.createElement(d.ZP, null, ({ containerWidth: e }) => o.createElement(a.Z, { style: Z.fontFamily }, o.createElement(n.Editor, { blockRenderMap: y, blockRendererFn: E, blockStyleFn: (0, c.su)(h.Z.isNarrowScreenWidth(e)), editorState: f, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                Z = g.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779610: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                n = r(325686),
                a = r(191796),
                l = r(58399),
                i = r(731708),
                s = r(952428),
                c = r(392237);
            const d = (e) => {
                    const { decoration: t, description: r, disabled: d = !1, isActive: u = !1, label: m, link: h, onPress: g, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: C, testID: E = "pivot", thumbnail: Z, thumbnailSize: w, withoutArrow: k = !1 } = e,
                        x = [p.thumbnailContainer, "medium" === w && p.thumbnailContainerMedium],
                        D = "string" == typeof m ? o.createElement(i.ZP, null, m) : m,
                        v = "object" == typeof h && h.external && !h.openInSameFrame,
                        I = r ? ("string" == typeof r ? o.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${E}-description` }, r) : r) : null,
                        S = o.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return o.createElement(s.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : h, onPress: g, role: y, style: [p.root, S, d && p.disabled, C], testID: E, withInteractiveStyling: !!h || !!g }, o.createElement(n.Z, { style: p.contentContainer }, Z ? o.createElement(n.Z, { style: x }, Z) : null, o.createElement(n.Z, { style: p.content }, D, I), f ? f() : null, (!h && !g) || d || k ? null : v ? o.createElement(a.default, { style: p.icon }) : o.createElement(l.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => y });
            var o = r(202784),
                n = r(325686),
                a = r(913973),
                l = r(731708),
                i = r(950822),
                s = r(466792),
                c = r(58881),
                d = r(530732),
                p = r(352924),
                u = r(392237);
            class m extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, p.F)()),
                        (this.descriptionId = (0, p.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: r } = this.props;
                            r && !t && r(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: p, helpText: m, label: g, name: b, testID: f } = this.props,
                        y = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        E = r ? y : C;
                    return o.createElement(s.Z, { disabled: p }, (s) => o.createElement(n.Z, { role: "label", style: [h.root, !p && h.interactive], testID: f }, o.createElement(n.Z, { style: h.topContainer }, o.createElement(l.ZP, { id: this.labelId }, g), o.createElement(n.Z, { style: h.radioContainer }, o.createElement(d.Z, { interactiveStyles: E, interactivityState: s, style: h.radioBackground }, o.createElement(n.Z, { style: [h.circle, r && h.circleActive, p && h.circleDisabled, r && p && h.circleCheckedAndDisabled] }, r ? o.createElement(a.default, { style: h.checkMark }) : null)), (0, i.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: p, name: b, onChange: this._handleChange, ref: this._setRef, style: [h.nativeControl], type: "radio" }))), m ? o.createElement(l.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: h.helpText }, m) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            m.defaultProps = { disabled: !1, checked: !1 };
            const h = u.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
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
                    const { "aria-label": e, description: t, disabled: r, label: a, name: i, options: s, value: c } = this.props;
                    return o.createElement(
                        n.Z,
                        { "aria-label": e, "aria-labelledby": a && !e ? this._labelId : void 0, role: "radiogroup", style: r && C.disabled, testID: `${b}${i}` },
                        a ? o.createElement(n.Z, { id: this._labelId, role: "label", style: C.header }, o.createElement(l.ZP, { style: C.label, weight: "bold" }, a), t ? o.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => o.createElement(g, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: i, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = u.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        943401: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                n = r(731708),
                a = r(392237);
            class l extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return o.createElement(n.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: r } = this.props,
                        a = i.root;
                    return t && r ? o.createElement(n.ZP, { color: "gray700", size: "subtext2", style: a }, e, " ", this._renderLearnMore()) : o.createElement(n.ZP, { color: "gray700", size: "subtext2", style: a }, e);
                }
            }
            const i = a.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                s = l;
        },
        928088: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                n = r(325686);
            const a = r(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                l = function ({ children: e }) {
                    return o.createElement(n.Z, { style: a.root }, e);
                };
        },
        101890: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                n = r(325686),
                a = r(449479),
                l = r(392237);
            const i = (e) => o.createElement(n.Z, { style: s.root }, o.createElement(a.Z, e)),
                s = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        782947: (e, t, r) => {
            r.d(t, { Z: () => f });
            var o = r(807896),
                n = r(202784),
                a = r(896632),
                l = r(325686),
                i = r(711223),
                s = r(516951),
                c = r(731708),
                d = r(868634),
                p = r(952428),
                u = r(352924),
                m = r(392237);
            const h = m.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                g = { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                b = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": r, checked: o, dedicatedPillRow: a, description: m, disabled: b, disabledInlineCallout: f, endContent: y, horizontal: C, illustration: E, infoLabel: Z, infoLabelType: w, inlineCallout: k, label: x, name: D, onChange: v, pillText: I, pillType: S, reverseLabels: P, secondaryContent: R, secondaryDescription: z, switchStyle: _, testID: T }) => {
                    const B = (0, u.b)(),
                        F = (0, u.b)(),
                        M = (0, u.b)(),
                        H = n.createElement(c.ZP, { color: "text", id: B, role: "label", size: _ ? "body" : "headline2", testID: "headline-label", weight: _ ? "medium" : "bold" }, x),
                        $ = !!m && n.createElement(c.ZP, { color: "gray700", id: F, size: "subtext1", style: I ? h.descriptionWithPill : h.description, testID: "description-label" }, m),
                        A = n.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: h.description }, z),
                        G = I ? n.createElement(d.ZP, { style: a ? h.pill : h.inlinePill, type: S }, I) : null,
                        j = n.createElement(n.Fragment, null, a ? G : null, n.createElement(l.Z, { style: [h.row, Z && h.marginBottom8] }, P ? $ : H, a ? null : G), n.createElement(l.Z, { style: [h.row, P && h.marginTop4] }, P ? H : $), R || (z ? A : void 0)),
                        L = _ ? "unset" : (r ? 100 / r : 100) + "%",
                        W = _ ? [h.padding8, h.borderRadiusInfinite, o ? h.backgroundDefault : h.backgroundTransparent] : [h.padding16, h.boxShadow, h.borderRadiusLarge, o ? h.checked : null, h.backgroundDefault];
                    return n.createElement(n.Fragment, null, n.createElement(p.Z, { disabled: b, style: [h.root, ...W, C ? { maxWidth: L, ...h.grow } : null, 1 === t || C ? null : h.withMarginTop, t !== r && C && !_ && h.withMarginEnd, !b && h.interactive], testID: T, withInteractiveStyling: !_ }, !!E && n.createElement(l.Z, { style: h.iconContainer, testID: "illustration" }, E), n.createElement(l.Z, { style: [h.labelContainer, _ && h.alignCenter] }, !!Z && n.createElement(l.Z, { style: h.info }, n.createElement(d.ZP, { background: "green" === w ? "green500" : "red" === w ? "magenta500" : "yellow" === w ? "orange50" : "gray500" }, n.createElement(c.ZP, { color: "yellow" === w ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, Z)), "red" !== w && "yellow" !== w && n.createElement(i.default, { style: h.infoIcon, testID: "infoIcon" })), j, o && !!k && n.createElement(l.Z, { style: h.inlineCalloutContainer, testID: "inlineCallout" }, k)), !!y && n.createElement(l.Z, { style: h.endContentContainer, testID: "endContent" }, n.createElement(c.ZP, { id: M, size: "subtext1", weight: "bold" }, y)), n.createElement("input", { "aria-describedby": `${F} ${M}`, "aria-label": e, "aria-labelledby": B, "aria-posinset": t, "aria-setsize": r, checked: o, disabled: b, name: D, onChange: o ? s.Z : v, style: g, type: "radio" })), b && f ? f : null);
                },
                f = (e) => {
                    const t = n.useCallback(({ value: e, ...t }) => n.createElement(b, (0, o.Z)({}, t, { key: e })), []);
                    return n.createElement(a.Z, (0, o.Z)({}, e, { renderSelector: t }));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-e907d115.5a30eb7a.js.map
