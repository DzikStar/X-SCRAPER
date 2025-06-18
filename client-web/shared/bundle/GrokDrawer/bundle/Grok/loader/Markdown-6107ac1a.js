"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6107ac1a"],
    {
        927974: (e, a, n) => {
            n.d(a, { Z: () => t });
            var o,
                r,
                l = {
                    fragment: {
                        argumentDefinitions: (o = [{ defaultValue: null, kind: "LocalArgument", name: "cursor" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "personalityHooksAllPersonalitiesQuery",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "cursor", variableName: "cursor" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: "GrokUserPersonalitiesResponse",
                                kind: "LinkedField",
                                name: "grok_user_personalities",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "GrokPersonalityWithId",
                                        kind: "LinkedField",
                                        name: "personalities",
                                        plural: !0,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "GrokPersonality",
                                                kind: "LinkedField",
                                                name: "personality",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "personality", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "initial_user_prompt", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, kind: "ScalarField", name: "personality_id", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: o, kind: "Operation", name: "personalityHooksAllPersonalitiesQuery", selections: r },
                    params: { id: "a5moJWybwfm8-u5Tx05vIw", metadata: {}, name: "personalityHooksAllPersonalitiesQuery", operationKind: "query", text: null },
                };
            l.hash = "e71ee736ad72fd1f1dcd522244f21f22";
            const t = l;
        },
        246851: (e, a, n) => {
            n.d(a, { Z: () => r });
            var o = n(202784);
            function r(e) {
                const a = o.useRef();
                return (
                    o.useEffect(() => {
                        a.current = e;
                    }),
                    a.current
                );
            }
        },
        839090: (e, a, n) => {
            n.d(a, { Z: () => o });
            n(202784);
            const o = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.21"),
                        n.e("icons.16"),
                        n.e("icons.10"),
                        n.e("icons.1"),
                        n.e("icons.19"),
                        n.e("icons.0"),
                        n.e("icons.23"),
                        n.e("icons.8"),
                        n.e("icons.2"),
                        n.e("icons.3"),
                        n.e("icons.15"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.9"),
                        n.e("icons.7"),
                        n.e("icons.24"),
                        n.e("icons.13"),
                        n.e("icons.29"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        n.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        n.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                        n.e("loader.WideLayout-6107ac1a"),
                        n.e("loader.WideLayout-a2dee9c7"),
                    ]).then(n.bind(n, 616753)),
            });
        },
        207137: (e, a, n) => {
            n.d(a, { BC: () => d, FI: () => s, Pm: () => t, gO: () => l, zk: () => r });
            const o = () => new Date(Date.now());
            function r(e, a = o()) {
                return a.getFullYear() === e.getFullYear() && a.getMonth() === e.getMonth() && a.getDate() === e.getDate();
            }
            function l(e, a = o()) {
                const n = new Date(a);
                return n.setHours(n.getHours() - 24), r(e, n);
            }
            function t(e, a = o()) {
                const n = new Date(a);
                return n.setHours(n.getHours() + 24), r(e, n);
            }
            const i = 6048e5;
            function s(e, a = o()) {
                const n = a - e;
                return n >= 0 && n <= i;
            }
            function d(e, a) {
                const n = new Date();
                return a < n || a < e ? 0 : Math.min(1, (n - e) / (a - e));
            }
        },
        525271: (e, a, n) => {
            n.d(a, { Z: () => M });
            var o = n(202784),
                r = n(325686),
                l = n(111677),
                t = n.n(l),
                i = n(837020),
                s = n(461756),
                d = n(786998),
                c = n(154003),
                u = n(950822),
                m = n(743618),
                h = n(745153),
                p = n(292627),
                g = n(224162),
                D = n(392237);
            const b = t().af8fa2ae,
                f = o.createElement(i.default, null);
            class y extends o.Component {
                constructor(e) {
                    super(),
                        (this._isMounted = !0),
                        (this._setAnimationNode = (e) => {
                            this._animationNode = e;
                        }),
                        (this._handleTransitionEnd = (e) => {
                            !1 === this.state.isVisible && e.target instanceof window.HTMLElement && e.target === this._animationNode && this.props.onDismissed();
                        }),
                        (this._handleMaskClick = () => {
                            this._handleDismiss();
                        }),
                        (this._handleEsc = (e) => {
                            const { altKey: a, ctrlKey: n, key: o, metaKey: r } = e;
                            !(a || n || r) && "Escape" === o && this._handleDismiss();
                        }),
                        (this._handleDismiss = () => {
                            this.setState({ isVisible: !1 }), s.Z.reducedMotionEnabled && this.props.onDismissed();
                        }),
                        (this.state = { isVisible: !1 });
                }
                componentDidMount() {
                    window.requestAnimationFrame(() => {
                        this._isMounted && this.setState({ isVisible: !0 });
                    });
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                render() {
                    const { additionalControl: e, align: a, buttonType: n, children: l, style: t, subtitle: i, title: c, topBarStyle: D, withBackgroundBlur: b, withTopBar: f, withTransparentMask: y } = this.props,
                        { isVisible: M } = this.state;
                    return o.createElement(g.ZP.Consumer, null, ({ direction: g }) => {
                        const C = "rtl" === g,
                            E = M ? w.visibleDrawer : ("left" === a) === C ? w.offscreenRightDrawer : w.offscreenLeftDrawer,
                            P = M && !y ? w.maskWithBg : w.maskTransparent,
                            x = M ? w.animateOpen : w.animateClose,
                            Z = s.Z.reducedMotionEnabled ? null : x;
                        return o.createElement(p.Z.Modal, null, o.createElement(h.Z, null, o.createElement(m.Z, null, o.createElement(r.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [w.mask, P, Z, b ? w.backgroundBlur : null, "left" === a ? w.alignLeft : w.alignRight] }, (0, u.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: k, style: [w.root, b ? w.backgroundRootBlur : null, E, Z, t], children: o.createElement(o.Fragment, null, f ? o.createElement(d.Z, { leftControl: "left" === a ? e : "right" === a ? this._renderCloseButton(n) : null, rightControl: "left" === a ? this._renderCloseButton(n) : "right" === a ? e : null, style: D, subtitle: i, title: c }) : null, o.createElement(r.Z, { style: w.contentContainer }, l)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return o.createElement(c.ZP, { "aria-label": b, icon: f, onPress: this._handleMaskClick, type: e });
                }
            }
            y.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const k = (e) => {
                    e.stopPropagation();
                },
                w = D.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...D.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                M = y;
        },
        782947: (e, a, n) => {
            n.d(a, { Z: () => b });
            var o = n(807896),
                r = n(202784),
                l = n(896632),
                t = n(325686),
                i = n(711223),
                s = n(516951),
                d = n(731708),
                c = n(868634),
                u = n(952428),
                m = n(352924),
                h = n(392237);
            const p = h.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                g = { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                D = ({ "aria-label": e, "aria-posinset": a, "aria-setsize": n, checked: o, dedicatedPillRow: l, description: h, disabled: D, disabledInlineCallout: b, endContent: f, horizontal: y, illustration: k, infoLabel: w, infoLabelType: M, inlineCallout: C, label: E, name: P, onChange: x, pillText: Z, pillType: I, reverseLabels: T, secondaryContent: v, secondaryDescription: _, switchStyle: A, testID: S }) => {
                    const B = (0, m.b)(),
                        F = (0, m.b)(),
                        L = (0, m.b)(),
                        R = r.createElement(d.ZP, { color: A ? (o ? "text" : "gray800") : "text", id: B, role: "label", size: A ? "body" : "headline2", testID: "headline-label", weight: A ? "normal" : "bold" }, E),
                        W = !!h && r.createElement(d.ZP, { color: "gray700", id: F, size: "subtext1", style: Z ? p.descriptionWithPill : p.description, testID: "description-label" }, h),
                        K = r.createElement(d.ZP, { color: "gray700", role: "label", size: "subtext2", style: p.description }, _),
                        H = Z ? r.createElement(c.ZP, { style: l ? p.pill : p.inlinePill, type: I }, Z) : null,
                        z = r.createElement(r.Fragment, null, l ? H : null, r.createElement(t.Z, { style: [p.row, w && p.marginBottom8] }, T ? W : R, l ? null : H), r.createElement(t.Z, { style: [p.row, T && p.marginTop4] }, T ? R : W), v || (_ ? K : void 0)),
                        G = A ? "unset" : (n ? 100 / n : 100) + "%",
                        V = A ? [p.padding8, p.borderRadiusLarge, o ? p.backgroundDefault : p.backgroundTransparent] : [p.padding16, p.boxShadow, p.borderRadiusLarge, o ? p.checked : null, p.backgroundDefault];
                    return r.createElement(r.Fragment, null, r.createElement(u.Z, { disabled: D, style: [p.root, ...V, y ? { maxWidth: G, ...p.grow } : null, 1 === a || y ? null : p.withMarginTop, a !== n && y && !A && p.withMarginEnd, !D && p.interactive], testID: S, withInteractiveStyling: !A }, !!k && r.createElement(t.Z, { style: p.iconContainer, testID: "illustration" }, k), r.createElement(t.Z, { style: [p.labelContainer, A && p.alignCenter] }, !!w && r.createElement(t.Z, { style: p.info }, r.createElement(c.ZP, { background: "green" === M ? "green500" : "red" === M ? "magenta500" : "yellow" === M ? "orange50" : "gray500" }, r.createElement(d.ZP, { color: "yellow" === M ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, w)), "red" !== M && "yellow" !== M && r.createElement(i.default, { style: p.infoIcon, testID: "infoIcon" })), z, o && !!C && r.createElement(t.Z, { style: p.inlineCalloutContainer, testID: "inlineCallout" }, C)), !!f && r.createElement(t.Z, { style: p.endContentContainer, testID: "endContent" }, r.createElement(d.ZP, { id: L, size: "subtext1", weight: "bold" }, f)), r.createElement("input", { "aria-describedby": `${F} ${L}`, "aria-label": e, "aria-labelledby": B, "aria-posinset": a, "aria-setsize": n, checked: o, disabled: D, name: P, onChange: o ? s.Z : x, style: g, type: "radio" })), D && b ? b : null);
                },
                b = (e) => {
                    const a = r.useCallback(({ value: e, ...a }) => r.createElement(D, (0, o.Z)({}, a, { key: e })), []);
                    return r.createElement(l.Z, (0, o.Z)({}, e, { renderSelector: a }));
                };
        },
        858440: (e, a, n) => {
            n.d(a, { Z: () => l });
            var o = n(878052),
                r = n(202784);
            function l() {
                var e = (0, r.useState)(() => o.Z.get("window")),
                    a = e[0],
                    n = e[1];
                return (
                    (0, r.useEffect)(() => {
                        function e(e) {
                            var a = e.window;
                            null != a && n(a);
                        }
                        return (
                            o.Z.addEventListener("change", e),
                            n(o.Z.get("window")),
                            () => {
                                o.Z.removeEventListener("change", e);
                            }
                        );
                    }, []),
                    a
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6107ac1a.9a6aba0a.js.map
