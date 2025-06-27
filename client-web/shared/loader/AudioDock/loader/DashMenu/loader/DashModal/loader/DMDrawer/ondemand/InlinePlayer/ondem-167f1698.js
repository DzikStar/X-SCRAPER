"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-167f1698"],
    {
        757483: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(295559);
            const i = { hexToCss: r.a7, hexToRgba: r.FP, rgbaToCss: r.rb, rgbToHex: r.vq };
        },
        797553: (e, t, n) => {
            n.r(t), n.d(t, { default: () => b });
            var r = n(807896),
                i = n(202784),
                o = n(878052),
                a = n(325686),
                s = n(666536),
                l = n(815858),
                d = n(67877),
                c = n(743618),
                h = n(745153),
                p = n(666305),
                u = n(667115),
                m = n(175993),
                g = n(365023),
                f = n(292627),
                w = n(224162),
                _ = n(386802),
                y = n(537392),
                C = n(392237);
            const v = C.default.create((e) => ({ rootNarrow: { maxWidth: "75%" }, rootWide: { maxWidth: `calc(${e.spaces.space64} * 6)` }, anchor: C.default.absoluteFillObject, mask: { ...C.default.absoluteFillObject, position: "fixed" }, bodyRectHelper: { ...C.default.absoluteFillObject, bottom: void 0 }, content: { borderRadius: e.borderRadii.large, position: "absolute", overflow: "hidden", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium }, contentInitialRender: { position: "fixed", opacity: 0 }, contentFixed: { position: "fixed", overflowY: "auto", overscrollBehavior: "contain" } }));
            class b extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleAnimateComplete = () => {
                            const { onAnimateComplete: e } = this.props;
                            e && e();
                        }),
                        (this._handleEsc = (e) => {
                            const { onDismiss: t } = this.props,
                                { altKey: n, ctrlKey: r, key: i, metaKey: o } = e;
                            !(n || r || o) && "Escape" === i && t();
                        }),
                        (this._receiveBodyRectHelperRef = (e) => {
                            e && this._bodyRectHelperNode !== e && ((this._bodyRectHelperNode = e), this._scheduleUpdate());
                        }),
                        (this._receiveAnchorRef = (e) => {
                            e && this._anchorNode !== e && ((this._anchorNode = e), this._scheduleUpdate());
                        }),
                        (this._receiveContentRef = (e) => {
                            e && this._contentNode !== e && ((this._contentNode = e), this._scheduleUpdate(), this._observe(e));
                        }),
                        (this._observe = (e) => {
                            const t = () => {
                                this._scheduleUpdate();
                            };
                            p.Z.observe(e, t),
                                this._disposeResizeObserver?.(),
                                (this._disposeResizeObserver = () => {
                                    p.Z.unobserve(e, t), (this._disposeResizeObserver = void 0);
                                });
                        }),
                        (this._updatePosition = () => {
                            if (!(this._mounted && (this._anchorNode || this.props.position) && this._contentNode && this._contentNode instanceof window.HTMLElement && this._bodyRectHelperNode && this._bodyRectHelperNode instanceof window.HTMLElement)) return;
                            const e = "rtl" === this._languageDirection,
                                t = this._contentNode.scrollHeight,
                                n = this._contentNode.scrollWidth,
                                { left: r, top: i, width: o } = this._bodyRectHelperNode.getBoundingClientRect(),
                                { height: a, width: s } = (0, y.iv)();
                            let l = { left: 0, top: 0, height: 0, width: 0 };
                            this.props.position ? (l = { ...l, ...this.props.position }) : this._anchorNode && this._anchorNode instanceof window.HTMLElement && (l = this._anchorNode.getBoundingClientRect());
                            const { height: d, left: c, top: h, width: p } = l,
                                u = s - o,
                                m = c - r,
                                g = h - i,
                                f = c + p >= n,
                                w = h + d >= t,
                                _ = s - c >= n,
                                C = a - h >= t,
                                v = s >= c + p / 2 + n / 2 && c >= n / 2 - p / 2,
                                b = this.props.preferredVerticalOrientation,
                                x = ((e, t) => (e && "center" !== t ? ("left" === t ? "right" : "left") : t))(e, this.props.preferredHorizontalOrientation),
                                E = this.state.verticalOrientation || (({ canOrientDown: e, canOrientUp: t, verticalPreference: n }) => ((t && e) || (!t && !e) ? n : t ? "up" : "down"))({ verticalPreference: b, canOrientUp: w, canOrientDown: C }),
                                S = this.state.horizontalOrientation || (({ canOrientCenter: e, canOrientLeft: t, canOrientRight: n, horizontalPreference: r }) => ("center" === r && e ? "center" : !t || ("left" !== r && n) ? "right" : "left"))({ horizontalPreference: x, canOrientLeft: f, canOrientRight: _, canOrientCenter: v }),
                                T = this.props.isFixed ? c : m,
                                Z = this.props.isFixed ? h : g,
                                k = "up" === E ? Z + d - t : Z;
                            let I = s - T - p - u;
                            "center" === S && (I = s - T - p / 2 - n / 2 - u), "right" === S && (I = s - T - n - u), this.setState({ top: Math.max(k, 0), right: I, verticalOrientation: E, horizontalOrientation: S });
                        }),
                        (this.state = Object.freeze({})),
                        (this._scheduleUpdate = (0, d.Z)(this._updatePosition, window.requestAnimationFrame)),
                        (this._scheduleDebouncedUpdate = (0, s.Z)(this._scheduleUpdate, 250));
                }
                componentDidMount() {
                    (this._mounted = !0), o.Z.addEventListener("change", this._scheduleDebouncedUpdate);
                }
                componentWillUnmount() {
                    (this._mounted = !1), this._disposeResizeObserver?.(), o.Z.removeEventListener("change", this._scheduleDebouncedUpdate);
                }
                render() {
                    const { animateInDuration: e, animateType: t, children: n, contentStyle: o, disableMask: s, isFixed: d, onDismiss: p, preventFocusShift: b, withKeyboardNavigation: x } = this.props,
                        { right: E, top: S, verticalOrientation: T } = this.state,
                        Z = void 0 === S,
                        k = x ? c.Z : i.Fragment,
                        I = `calc(100vh - ${S || 0}px)`,
                        P = (c) => {
                            const h = "rtl" === c,
                                u = [v.content, Z && v.contentInitialRender, d && [v.contentFixed, { maxHeight: I }], { top: S, end: h ? void 0 : E, start: h ? E : void 0 }, o];
                            return i.createElement(
                                i.Fragment,
                                null,
                                s ? null : i.createElement(a.Z, { onClick: p, style: v.mask }),
                                i.createElement(a.Z, { ref: this._receiveBodyRectHelperRef, style: v.bodyRectHelper }),
                                i.createElement(y.ZP, null, ({ windowWidth: o }) => i.createElement(a.Z, { onKeyUp: this._handleEsc, ref: this._receiveContentRef, role: "menu", style: [o < C.default.theme.breakpoints.medium ? v.rootNarrow : v.rootWide, u] }, Z && "slide" === t ? n : i.createElement(l.Z, { animateMount: "up" !== T, duration: e, onAnimateComplete: this._handleAnimateComplete, show: !0, type: t }, ({ isAnimating: e }) => i.createElement(g.Z, { id: "Dropdown", minimizeReporting: e }, (e, t) => i.createElement(a.Z, (0, r.Z)({ ref: e() }, t({})), n))))),
                            );
                        };
                    return i.createElement(
                        w.ZP.Consumer,
                        null,
                        ({ direction: e }) => (
                            (this._languageDirection = e),
                            i.createElement(
                                a.Z,
                                { ref: this._receiveAnchorRef, style: v.anchor },
                                i.createElement(
                                    f.Z.Dropdown,
                                    null,
                                    i.createElement(m.Z.Consumer, null, (t) => i.createElement(_.Z.Consumer, null, ({ isModal: n }) => i.createElement(u.Z, { history: t, isModal: n, onDismiss: p }, b ? P(e) : i.createElement(h.Z, null, i.createElement(k, null, P(e)))))),
                                ),
                            )
                        ),
                    );
                }
            }
            b.defaultProps = { preferredHorizontalOrientation: "left", preferredVerticalOrientation: "down", animateType: "slide", animateInDuration: "normal", withKeyboardNavigation: !0 };
        },
        378587: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                i = n(325686),
                o = n(295559),
                a = n(392237);
            const s = {
                Default: [
                    {
                        angle: 225,
                        stops: [
                            { color: a.default.theme.colors.plum600, alpha: 0, offset: 0 },
                            { color: a.default.theme.colors.plum600, alpha: 0.6, offset: 1 },
                        ],
                    },
                    {
                        angle: 225,
                        stops: [
                            { color: a.default.theme.colors.plum400, alpha: 0.4, offset: 0 },
                            { color: a.default.theme.colors.plum400, alpha: 0, offset: 1 },
                        ],
                    },
                    {
                        angle: 135,
                        stops: [
                            { color: a.default.theme.colors.magenta500, alpha: 1, offset: 0 },
                            { color: a.default.theme.colors.magenta500, alpha: 0, offset: 1 },
                        ],
                    },
                    {
                        angle: 135,
                        stops: [
                            { color: a.default.theme.colors.red400, alpha: 0, offset: 0 },
                            { color: a.default.theme.colors.red400, alpha: 1, offset: 1 },
                        ],
                    },
                    {
                        angle: 0,
                        stops: [
                            { color: a.default.theme.colors.orange500, alpha: 1, offset: 0 },
                            { color: a.default.theme.colors.orange500, alpha: 1, offset: 1 },
                        ],
                    },
                ],
                HighContrast: [
                    {
                        angle: 0,
                        stops: [
                            { color: a.default.theme.colors.plum600, alpha: 1, offset: 0 },
                            { color: a.default.theme.colors.plum600, alpha: 1, offset: 1 },
                        ],
                    },
                ],
            };
            function l() {
                return (a.default.theme.highContrastEnabled ? s.HighContrast : s.Default).map(({ angle: e, stops: t }) => `linear-gradient(${e}deg, ${t.map(({ alpha: e, color: t, offset: n }) => `${(0, o.a7)(t, e)} ${100 * n}%`).join(", ")})`).join(", ");
            }
            const d = {
                    Default: function (e) {
                        return r.createElement(i.Z, { style: [{ backgroundImage: l() }, e.style] }, e.children);
                    },
                    getBackgroundImage: l,
                },
                c = Object.freeze(d);
        },
        847224: (e, t, n) => {
            n.d(t, { Z: () => P });
            var r = n(202784),
                i = n(325686),
                o = n(111677),
                a = n.n(o),
                s = n(58399),
                l = n(500040),
                d = n(47086),
                c = n(187929),
                h = n(410547),
                p = n(731708),
                u = n(235902),
                m = n(638009),
                g = n(952428),
                f = n(336373),
                w = n(392237),
                _ = n(950152);
            const y = { element: "forward_pivot" },
                C = { element: "quoted_forward_pivot" },
                v = "StayInformed",
                b = a().e9f1af3a,
                x = a().d7e50a66,
                E = a().f1881d86,
                S = a().j3d37222,
                T = ({ inQuoteTweet: e, isLinkExternal: t, isTweetNonCompliant: n, onPress: o, pivotLinkObject: a, softInterventionDisplayType: l = v, text: d, scribeOnImpression: c }) => {
                    const { Icon: h, backgroundColor: u, headerText: m, iconColor: f } = I()[l] || I()[v],
                        w = "GovernmentRequested" === l,
                        _ = "gray700",
                        y = "Fosnr" === l ? x : b;
                    return (
                        r.useEffect(() => {
                            c?.();
                        }, [c]),
                        r.createElement(g.Z, { link: a, onPress: o, style: [k.softInterventionContainer, e ? k.softInterventionQTContainer : k.softInterventionContainerBorder, u] }, r.createElement(i.Z, { style: k.softInterventionHeader }, r.createElement(h, { style: [k.icon, f] }), r.createElement(p.ZP, { weight: "bold" }, m), r.createElement(s.default, { style: k.chevronIcon })), r.createElement(p.ZP, { color: _ }, `${d} `, r.createElement(p.ZP, { link: a, style: k.learnMoreLink }, y)), w || (n && !e) ? r.createElement(p.ZP, { color: _, style: k.softInterventionFooter }, w ? S : E) : null)
                    );
                },
                Z = (e, t, n, r) => ({ items: [{ id: r, forward_pivot_details: { associated_tweet_id: r, display_type: e, landing_url: t.url, soft_intervention_type: n } }] }),
                k = w.default.create((e) => ({ backgroundColorGray: { backgroundColor: e.colors.gray0 }, chevronIcon: { color: e.colors.gray300, flexShrink: 0, height: e.spaces.space16, width: e.spaces.space16, marginStart: "auto" }, icon: { flexShrink: 0, height: e.spaces.space16, width: e.spaces.space16, marginEnd: e.spaces.space4 }, iconBlue: { color: w.default.theme.colors.blue500 }, iconGray: { color: w.default.theme.colors.gray500 }, iconOrange: { color: w.default.theme.colors.orange500 }, iconRed: { color: w.default.theme.colors.red500 }, learnMoreLink: { whiteSpace: "nowrap", flexShrink: 0, paddingTop: e.spaces.space2 }, softInterventionContainer: { borderRadius: e.borderRadii.xLarge, padding: e.spaces.space12 }, softInterventionQTContainer: { borderTopStartRadius: e.borderRadii.none, borderTopEndRadius: e.borderRadii.none, borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor, borderTopStyle: "solid" }, softInterventionContainerBorder: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderStyle: "solid" }, softInterventionFooter: { marginTop: e.spaces.space8, paddingTop: e.spaces.space8, borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small }, softInterventionHeader: { alignItems: "center", flexDirection: "row", paddingBottom: e.spaces.space2 } })),
                I = () => ({ GetTheLatest: { Icon: l.default, headerText: a().e461d0ee, iconColor: k.iconBlue }, StayInformed: { Icon: d.default, headerText: a().d1386940, iconColor: k.iconOrange }, Misleading: { Icon: c.default, headerText: a().ecda5f9e, iconColor: k.iconRed }, GovernmentRequested: { Icon: h.default, backgroundColor: k.backgroundColorGray, headerText: a().a423473c, iconColor: k.iconGray }, Fosnr: { Icon: l.default, backgroundColor: k.backgroundColorGray, headerText: a().b3296688, iconColor: k.iconGray } }),
                P = ({ displayType: e, inQuoteTweet: t, isTweetNonCompliant: n, landingUrl: i, onPress: o, softInterventionDisplayType: a, text: s, tweetId: l }) => {
                    const d = f.Z.useAnalytics(),
                        c = r.useMemo(() => (t ? C : y), [t]),
                        h = r.useCallback(() => {
                            d.scribe({ ...c, action: "impression", data: Z(e, i, a, l) });
                        }, [d, c, e, i, a, l]),
                        p = () => {
                            o && o(), i && d.scribe({ ...c, action: "click", data: Z(e, i, a, l) });
                        },
                        g = u.ZP.useProps(),
                        w = e === _.x.SoftIntervention && !("Fosnr" === a && !g.fosnrSoftInterventionsEnabled());
                    return r.createElement(m.ZP.Consumer, null, (e) => {
                        const o = i ? e.getLinkFromUrtUrl(i) : void 0;
                        if (!o) return null;
                        const l = !o || !!o.external;
                        return w ? r.createElement(T, { inQuoteTweet: t, isLinkExternal: l, isTweetNonCompliant: n, onPress: p, pivotLinkObject: o, scribeOnImpression: h, softInterventionDisplayType: a, text: s.text }) : null;
                    });
                };
        },
        680665: (e, t, n) => {
            n.d(t, { ZP: () => s });
            var r = n(202784),
                i = n(325686),
                o = n(392237);
            const a = 2;
            function s(e) {
                const { count: t, max: n, selectedIndex: s } = e,
                    p = (function () {
                        const { theme: e } = o.default;
                        return 2 * c(e).px + e.borderWidthsPx.small;
                    })(),
                    u = r.useRef({ left: 0, right: n - 1 }),
                    m = r.useRef(0),
                    [g, f] = r.useState(d(u.current, t, p));
                r.useEffect(() => {
                    function e() {
                        const e = t - 1,
                            { left: n, right: r } = u.current,
                            i = r - s + 1 <= a && r !== e,
                            o = s + 1 - n <= a && 0 !== n;
                        return !(!i && !o) && (i ? ((u.current.left = n + 1), (u.current.right = r + 1)) : o && ((u.current.left = n - 1), (u.current.right = r - 1)), !0);
                    }
                    for (; e(); );
                    f(d(u.current, t, p)), (m.current = s);
                }, [s, t, n, p]);
                const w = new Array(t).fill(1).map((e, i) => {
                    const o = i === s;
                    if (t <= n) return r.createElement(l, { key: i, selected: o });
                    const a = g[i];
                    return r.createElement(l, { continuation: Boolean(a), continuationType: a, key: i, selected: o });
                });
                return r.createElement(i.Z, { style: [h.indicatorWindowContainer, { width: `calc(${n} * ${p}px)`, height: `${p}px` }] }, r.createElement(i.Z, { style: [h.indicatorsContainer, { height: `${p}px`, width: `calc(${p}px * ${t})` }, g.style] }, w));
            }
            function l(e) {
                let t = h.indicator;
                if (e.selected) t = h.indicatorSelected;
                else if (e.continuation)
                    switch (e.continuationType) {
                        case p.small:
                            t = h.indicatorContinuationSmall;
                            break;
                        case p.medium:
                            t = h.indicatorContinuationMedium;
                    }
                return r.createElement(i.Z, { style: t });
            }
            function d(e, t, n) {
                const { left: r, right: i } = e,
                    o = { style: { transform: [{ translateX: -1 * n * r }] } };
                return (o[r - 1] = p.small), (o[r] = p.small), (o[r + 1] = p.medium), (o[i - 1] = p.medium), (o[i] = p.small), (o[i + 1] = p.small), 0 === r ? (delete o[0], delete o[1]) : i > t - a && (delete o[t - 1], delete o[t - 2]), o;
            }
            function c(e) {
                return { style: e.spaces.space8, px: e.spacesPx.space8 };
            }
            const h = o.default.create((e) => {
                    const t = c(e).style,
                        n = { transition: "transform 200ms" },
                        r = { ...n, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: e.borderRadii.infinite, marginHorizontal: e.spaces.space4, width: t, height: t, transform: [{ scale: 0.5 }] },
                        i = { ...r, backgroundColor: e.colors.gray300 };
                    return { indicatorWindowContainer: { marginVertical: e.spaces.space12, overflow: "hidden", margin: "auto" }, indicatorsContainer: { ...n, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", margin: "auto" }, indicatorSelected: { ...r, borderWidth: e.borderWidths.small, borderColor: e.colors.gray300, borderStyle: "solid", backgroundColor: e.colors.white, transform: [{ scale: 1 }] }, indicator: { ...r, backgroundColor: e.colors.gray300 }, indicatorContinuationSmall: { ...i, transform: [{ scale: 0.3 }] }, indicatorContinuationMedium: { ...i, transform: [{ scale: 0.4 }] } };
                }),
                p = Object.freeze({ small: "small", medium: "medium" });
        },
        454740: (e, t, n) => {
            n.d(t, { W: () => l, Z: () => s });
            var r = n(202784),
                i = n(325686),
                o = n(731708),
                a = n(392237);
            const s = (e) => {
                    const { containerStyle: t, decoration: n, description: a, label: s, testID: d } = e,
                        c = "string" == typeof s ? r.createElement(o.ZP, { weight: "bold" }, s) : s,
                        h = a ? ("string" == typeof a ? r.createElement(o.ZP, { color: "gray700", style: l.description }, a) : a) : null;
                    return r.createElement(i.Z, { role: "listitem", style: [l.root, t], testID: d }, n ? r.createElement(i.Z, { style: l.decorationContainer }, n) : null, r.createElement(i.Z, { style: l.content }, c, h));
                },
                l = a.default.create((e) => ({ root: { alignItems: "flex-start", justifyContent: "space-between", paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.spaces.space32, flexDirection: "row", flexGrow: 1, minHeight: `calc(${a.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})` }, content: { alignSelf: "center", flexGrow: 1, flexShrink: 1 }, description: { marginTop: e.spaces.space4 }, decorationContainer: { justifyContent: "center" } }));
        },
        593866: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(807896),
                i = n(202784),
                o = n(325686),
                a = n(454740);
            const s = (e) => {
                const { "aria-label": t, containerStyle: n, items: s } = e;
                return i.createElement(
                    o.Z,
                    { "aria-label": t, role: "list" },
                    s.map((e, t) => i.createElement(a.Z, (0, r.Z)({ containerStyle: n, key: t }, e))),
                );
            };
        },
        525754: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(807896),
                i = n(202784),
                o = n(896632),
                a = n(796684);
            const s = (e) => i.createElement(o.Z, (0, r.Z)({}, e, { renderSelector: ({ value: e, ...t }) => i.createElement(a.Z, (0, r.Z)({}, t, { key: e })) }));
        },
        834324: (e, t, n) => {
            n.d(t, { Z: () => v });
            n(136728);
            var r = n(202784),
                i = n(325686),
                o = n(111677),
                a = n.n(o),
                s = n(837020),
                l = n(797681),
                d = n(731708),
                c = n(154003),
                h = n(392237),
                p = n(909377);
            const u = "icon",
                m = "thumbnail",
                g = a().af8fa2ae,
                f = Object.freeze({ primary: { "aria-live": "polite" }, exclusive: { "aria-live": "polite" }, danger: { "aria-live": "assertive" }, success: { "aria-live": "polite" }, warning: { "aria-live": "polite" } });
            class w extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { contentMidpoint: void 0 }),
                        (this._handleLayout = () => {
                            if (this._contentNode) {
                                const { left: e, width: t } = this._contentNode.getBoundingClientRect(),
                                    n = e + t / 2;
                                this.setState({ contentMidpoint: n });
                            }
                        }),
                        (this._setContentNode = (e) => {
                            this._contentNode = e;
                        });
                }
                render() {
                    const { Icon: e, headline: t, onClose: n, style: o, type: a, withCloseButton: d, withRightArrow: h, withThumbnail: p } = this.props,
                        w = f[a],
                        { "aria-live": v } = w,
                        b = p && e ? m : e && t ? u : null;
                    return r.createElement(r.Fragment, null, r.createElement(i.Z, { "aria-live": v, onLayout: this._handleLayout, ref: this._setContentNode, role: "status", style: [_.root, y[a], o] }, r.createElement(i.Z, { style: _.contentContainer, testID: b }, this._renderIconOrThumbnail(), r.createElement(i.Z, { style: _.contentTextContainer }, this._renderHeadline(), this._renderSubtext())), d && n ? r.createElement(c.ZP, { "aria-label": g, icon: r.createElement(s.default, null), onPress: n, size: "smallCompact", type: "brandText" }) : null), h ? r.createElement(l.default, { style: [{ transform: [{ rotate: "90deg" }], position: "absolute" }, C[a], this._getSideArrowStyle()] }) : null);
                }
                _renderIconOrThumbnail() {
                    const { Icon: e, action: t, headline: n, withThumbnail: i } = this.props,
                        o = n || t;
                    if (e) {
                        if (i) return r.createElement(p.Z, { Icon: e, color: this._getThumbnailColor(), size: o ? "large" : "medium", style: [_.thumbnail, o && _.thumbnailLargeMargin] });
                        if (n) return r.createElement(d.ZP, { align: "center" }, r.createElement(e, { style: _.headlineIcon }));
                    }
                }
                _renderHeadline() {
                    const { headline: e, text: t } = this.props;
                    if (e) return r.createElement(d.ZP, { style: t && _.headlineMarginBottom, weight: "bold" }, e);
                }
                _renderSubtext() {
                    const { id: e, text: t, textStyle: n } = this.props;
                    return r.createElement(r.Fragment, null, r.createElement(d.ZP, { id: e, size: "subtext1", style: n }, t), this._renderActionLabel());
                }
                _renderActionLabel() {
                    const { action: e, onAction: t } = this.props;
                    if (e) return r.createElement(d.ZP, { children: e.label, color: "text", link: e.link, onPress: t, size: "subtext1", style: _.actionText, weight: "bold", withInteractiveStyling: !0, withUnderline: !0 });
                }
                _getThumbnailColor() {
                    const { type: e } = this.props;
                    return "exclusive" === e ? "exclusive" : "danger" === e ? "danger" : "warning" === e ? "warning" : "success" === e ? "success" : void 0;
                }
                _getSideArrowStyle() {
                    if (this._contentNode) {
                        const { bottom: e, left: t, right: n, top: r } = this._contentNode.getBoundingClientRect(),
                            i = [],
                            o = n - t,
                            a = (e - r) / 2;
                        return i.push({ bottom: a - 8, start: o - 8 }), i;
                    }
                }
            }
            w.defaultProps = { type: "primary", withCloseButton: !1, withThumbnail: !1 };
            const _ = h.default.create((e) => ({ root: { borderRadius: e.borderRadii.medium, display: "flex", flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, width: "100%" }, thumbnail: { alignSelf: "start", flexBasis: "auto", marginEnd: e.spaces.space12 }, thumbnailLargeMargin: { marginEnd: e.spaces.space16 }, headlineMarginBottom: { marginBottom: e.spaces.space4 }, actionText: { marginTop: e.spaces.space12, whiteSpace: "nowrap", flexShrink: 0, textUnderlineOffset: e.spaces.space2, paddingBottom: e.spaces.space4 }, arrow: { marginBottom: `-${e.spaces.space16}`, top: `calc(-${e.spaces.space4} - ${e.spaces.space1})` }, contentContainer: { flex: 1, flexDirection: "row" }, contentTextContainer: { flex: 1, justifyContent: "center", alignItems: "flex-start" }, headlineIcon: { marginEnd: e.spaces.space8 } })),
                y = h.default.create((e) => ({ primary: { backgroundColor: e.colors.primary0 }, exclusive: { backgroundColor: e.colors.plum0 }, danger: { backgroundColor: e.colors.red0 }, success: { backgroundColor: e.colors.green0 }, warning: { backgroundColor: e.colors.orange0 } })),
                C = h.default.create((e) => ({ primary: { color: e.colors.primary0 }, exclusive: { color: e.colors.plum0 }, danger: { color: e.colors.red50 }, success: { backgroundColor: e.colors.green50 }, warning: { backgroundColor: e.colors.orange50 } })),
                v = w;
        },
        22379: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                i = n(325686),
                o = n(111677),
                a = n.n(o),
                s = n(731708),
                l = n(336373),
                d = n(366635);
            const c = a().f4393d0f,
                h = { element: "screen_name", action: "profile_click" },
                p = ({ size: e, sourceTweetId: t, style: n, userAffiliateBadgeInfo: o, userIsBlueVerified: p, userIsProtected: u, userIsVerified: m, userName: g, userScreenName: f, userVerifiedType: w }) => {
                    const _ = l.Z.useAnalytics(),
                        y = r.useCallback(() => {
                            _.scribe(h);
                        }, [_]),
                        C = r.useMemo(() => ({ pathname: `/i/status/${t || ""}` }), [t]),
                        v = t ? r.createElement(s.ZP, { link: C, onPress: y }, r.createElement(d.Z, { affiliateBadgeInfo: o, isBlueVerified: p, isProtected: u, isVerified: m, name: g, screenName: f, verifiedType: w, withHoverCard: !0, withLink: !1, withScreenName: !1 })) : r.createElement(d.Z, { affiliateBadgeInfo: o, isBlueVerified: p, isProtected: u, isVerified: m, name: g, onLinkClick: y, screenName: f, verifiedType: w, withHoverCard: !0, withLink: !0, withScreenName: !1 });
                    return r.createElement(i.Z, { "aria-label": c({ name: g }), style: n }, r.createElement(s.ZP, { color: "gray700", size: e }, r.createElement(a().I18NFormatMessage, { $i18n: "dbf19261" }, v)));
                };
        },
        309854: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(483677);
            const i = {
                getBackgroundColor: (e) => {
                    const t = e.ext_media_color && e.ext_media_color.palette,
                        n = t && r.Z.get(t);
                    return n ? n.rgb : void 0;
                },
                getCropCandidates: (e) => e.original_info && e.original_info.focus_rects,
                getOriginalImage: (e) => (e.original_info ? { url: e.media_url_https, width: e.original_info.width, height: e.original_info.height } : void 0),
            };
        },
        175848: (e, t, n) => {
            n.d(t, { ZP: () => a });
            var r = n(446503),
                i = n(166852);
            const o = (e) => e.features?.all?.tags || [],
                a = {
                    mergeTaggedUsers: (e) => {
                        const t = (0, r.Z)(e, o).filter((e) => "user" === e.type);
                        return (0, i.Z)(t, (e) => e.user_id);
                    },
                };
        },
        65118: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                i = n(325686),
                o = n(111677),
                a = n.n(o),
                s = n(25001),
                l = n(337637),
                d = n(731708),
                c = n(392237);
            const h = a().f8e8e32e;
            class p extends r.Component {
                render() {
                    const { linkPath: e, onClick: t, size: n, users: o, withIcon: a } = this.props,
                        l = this._decodeUserList(),
                        { isCurrentUserIncluded: c } = l,
                        h = c ? m.withCurrentUser : m.withoutCurrentUser,
                        p = this._selectMessage(h, l),
                        u = o.map((e) => e.user_id),
                        f = e && { pathname: e, state: { userIds: u } };
                    return o.length > 0 ? r.createElement(i.Z, { style: [g.root, this.props.style] }, r.createElement(d.ZP, { color: "gray700", link: f, onPress: t, size: n, withInteractiveStyling: !!f }, a ? r.createElement(s.default, { style: g.icon }) : null, p)) : null;
                }
                _selectMessage(e, t) {
                    const { users: n } = this.props;
                    switch (n.length) {
                        case 0:
                            return null;
                        case 1:
                            return e.single(t);
                        default:
                            return e.multiple(t);
                    }
                }
                _decodeUserList() {
                    const { loggedInUserId: e, users: t } = this.props,
                        n = e ? (0, l.Z)(t, (t) => t.user_id === e) : -1,
                        r = n >= 0,
                        i = r && t[n] ? t[n] : void 0;
                    return { isCurrentUserIncluded: r, firstName: t.length >= 1 ? (r && i ? i.name : t[0].name) : void 0, secondName: t.length >= 2 ? (r && 0 !== n ? t[0].name : t[1].name) : void 0, otherUsersCount: t.length > 0 ? t.length - 1 : 0 };
                }
            }
            const u = (e, t = "normal") => r.createElement(d.ZP, { color: "gray700", weight: t }, e),
                m = { withCurrentUser: { single: () => u(h, "bold"), multiple: ({ otherUsersCount: e, secondName: t }) => (e && t ? u(r.createElement(a().I18NFormatMessage, { $i18n: "d7b2c271" }, r.createElement(d.ZP, { weight: "bold" }, a().df6703d3), a().c20f7e9f({ otherUsersCount: e, secondName: r.createElement(d.ZP, null, t) }))) : null) }, withoutCurrentUser: { single: ({ firstName: e }) => (e ? u(e) : null), multiple: ({ firstName: e, otherUsersCount: t, secondName: n }) => (t ? u(r.createElement(a().I18NFormatMessage, { $i18n: "b035fe73" }, r.createElement(d.ZP, null, e), a().he26f627({ otherUsersCount: t, secondName: r.createElement(d.ZP, null, n) }))) : null) } },
                g = c.default.create((e) => ({ root: { flexDirection: "row" }, icon: { color: e.colors.gray700, marginEnd: e.spaces.space4 } }));
        },
        284702: (e, t, n) => {
            n.d(t, { Z: () => v });
            n(202784);
            var r = n(111677),
                i = n.n(r),
                o = n(161821),
                a = n(184605),
                s = n(309854),
                l = n(782578);
            const d = "animated_gif",
                c = "video",
                h = "vine",
                p = Object.freeze({ ANIMATED_GIF: d, VIDEO: c, VINE: h }),
                u = (0, o.Z)(p),
                m = i().fc45ccc6,
                g = (e) => (e.additional_media_info && e.additional_media_info.call_to_actions ? f(e.additional_media_info.call_to_actions) : void 0),
                f = (e) => (e.visit_site ? { type: "url", url: e.visit_site.url } : e.watch_now ? { type: "watch", url: e.watch_now.url } : void 0),
                w = (e) => _(e.mediaStats && e.mediaStats.viewCount),
                _ = (e) => {
                    const t = e && parseInt(e, 10);
                    return t && (0, a.Z)(t) && t >= 0 ? t : void 0;
                },
                y = (e) => !!e && (e.type === d || e.type === c || e.type === h),
                C = (e) => {
                    if (e.allow_download_status?.allow_download) return e.video_info.variants.reduce((e, t) => (t.bitrate && "video/mp4" === t.content_type && (!e || (e.bitrate && e.bitrate < t.bitrate)) ? t : e), void 0)?.url;
                },
                v = {
                    extractVideoProps: (e, t, n, r, i = !1) => {
                        const { duration_millis: o, variants: a } = t.video_info || {},
                            d = { "aria-label": "string" == typeof t.ext_alt_text ? t.ext_alt_text : m, additionalMediaInfo: t.additional_media_info, aspectRatio: l.Z.getAspectRatio(t.video_info, 1), backgroundColor: s.Z.getBackgroundColor(t), cta: g(t), durationMs: o, media_key: t.media_key, poster: s.Z.getOriginalImage(t), shouldShowAltLabel: !!t.ext_alt_text && i, source: { eventId: n, contentId: t.id_str, variants: a, videoId: e, downloadLink: C(t) }, videoType: t.type, viewCount: w(t), timecode: t.media_results?.result?.watch_info?.last_watched_seconds?.toString() };
                        return r && (d.forwardPivotInfo = r), d;
                    },
                    getSourceTweetId: (e) => {
                        if (y(e)) return e.source_status_id_str;
                    },
                    getVideoFromCoverMedia: (e) => (e && "photo" !== e.type ? e : void 0),
                    getViewCount: w,
                    isVideo: y,
                    VIDEO_TYPES: u,
                };
        },
        470397: (e, t, n) => {
            n.d(t, { Z: () => s });
            n(136728);
            var r = n(202784),
                i = n(325686),
                o = n(124964),
                a = n(392237);
            const s = ({ children: e, color: t = "gray700", size: n, style: a }) => {
                    const s = [];
                    return (
                        r.Children.forEach(e, (e) => {
                            const i = s.length;
                            e && (i > 0 && s.push(r.createElement(o.Z, { color: t, key: `middot-${i}`, size: n })), s.push(e));
                        }),
                        s.length ? r.createElement(i.Z, { style: [l.middotGroup, a] }, s) : null
                    );
                },
                l = a.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        844685: (e, t, n) => {
            n.d(t, { T: () => p, Z: () => m });
            var r = n(202784),
                i = n(325686),
                o = n(568320),
                a = n(731708),
                s = n(58881),
                l = n(530732),
                d = n(392237),
                c = n(452693);
            const h = d.default.create((e) => ({ icon: { color: e.colors.primary, height: e.fontSizes.title4, paddingEnd: e.spaces.space12, width: e.fontSizes.title4 } })),
                p = Object.freeze({ TopicFilled: "TOPIC_FILLED" });
            const u = d.default.create((e) => ({ root: { justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, mainContent: { flexDirection: "row", fontSize: "inherit" }, subtext: { alignSelf: "flex-start" }, withSubtext: { alignSelf: "center" }, icon: { alignSelf: "flex-start", height: e.spaces.space20, justifyContent: "center" }, iconArrow: { color: e.colors.text }, rightControlGroup: { flexDirection: "row", justifyContent: "flex-end", flexGrow: 1, marginStart: e.spaces.space4, alignSelf: "center" } })),
                m = function ({ icon: e, id: t, landingUrl: n, rightControl: m, style: g, subtext: f, testID: w, text: _ }) {
                    const y = ((e) => (e === p.TopicFilled ? r.createElement(c.default, { style: h.icon }) : null))(e),
                        C = f ? null : u.withSubtext,
                        v = s.Z.generate({ backgroundColor: d.default.theme.colors.gray0, color: d.default.theme.colors.cellBackground, customFocusBackgroundColor: d.default.theme.colors.gray0, customHoverBackgroundColor: d.default.theme.colors.gray0, customPressedBackgroundColor: d.default.theme.colors.gray0 });
                    return r.createElement(l.Z, { id: t, interactiveStyles: n ? v : null, link: n, style: [u.root, g], testID: w }, r.createElement(i.Z, { "aria-level": 2, role: "heading", style: u.mainContent }, r.createElement(i.Z, { style: u.icon }, y), r.createElement(a.ZP, { numberOfLines: 3, size: "headline1", style: C, weight: "heavy", withHashflags: !0 }, _), r.createElement(i.Z, { style: u.rightControlGroup }, n ? r.createElement(i.Z, { style: C }, r.createElement(o.default, { style: u.iconArrow })) : null, m ? r.createElement(i.Z, null, m) : null)), f ? r.createElement(a.ZP, { color: "gray700", numberOfLines: 2, size: "subtext2", style: u.subtext, withHashflags: !0 }, f) : null);
                };
        },
        521288: (e, t, n) => {
            n.d(t, { Z: () => W });
            var r = n(807896),
                i = n(202784),
                o = n(325686),
                a = n(111677),
                s = n.n(a),
                l = n(908478),
                d = n(161821),
                c = n(731708),
                h = n(766661),
                p = n(12686),
                u = n(276563),
                m = n(235902),
                g = n(847224),
                f = n(950152),
                w = n(649846),
                _ = n(952428),
                y = n(470397),
                C = n(966886),
                v = n(126962),
                b = n(287826),
                x = n(392237),
                E = n(530338),
                S = n(16037),
                T = n(103737),
                Z = n(278957),
                k = n(650028),
                I = n(451051),
                P = n(100929),
                R = n(5273),
                B = n(528647),
                L = n(782261),
                N = n(586035),
                M = n(454363),
                D = n(395379);
            const A = s().bb5c5864,
                H = s().a8b58cf4,
                O = s().i5f742fe,
                z = "quote_tweet",
                U = 16 / 9,
                W = (e) => {
                    const { shouldRenderIfBlocked: t, tweet: n, withBirdwatchPivot: o } = e,
                        a = !!n && !L.Z.isQuotedTweetUnavailable({ is_quote_status: !0, quoted_status: n }, t),
                        s = m.ZP.useProps(),
                        l = n?.extended_entities?.media,
                        d = l && l.length > 1 && s.withMediaCarousel();
                    return n && a ? i.createElement(F, (0, r.Z)({}, e, { isCarouselItem: s.isCarouselItem(), renderArticleCardInTweet: s.renderArticleCardInTweet(), tweet: n, withBirdwatchPivot: o, withEditAnatomy: n.isEdited && s.isEditTweetConsumptionEnabled(), withMediaCarousel: d })) : i.createElement(P.Z, null);
                };
            class F extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderForwardPivot = () => {
                            const { forwardPivotInfo: e, tweet: t } = this.props;
                            if (e && e.displayType === f.x.SoftIntervention) {
                                const { displayType: n, landingUrl: r, softInterventionDisplayType: o, text: a } = e;
                                return i.createElement(g.Z, { displayType: n, inQuoteTweet: !0, isTweetNonCompliant: "non_compliant" === t.limited_actions, landingUrl: r, softInterventionDisplayType: o, text: a, tweetId: t.id_str });
                            }
                        }),
                        (this._renderBirdwatchPivot = () => {
                            const { tweet: e, withBirdwatchPivot: t } = this.props;
                            if (e.birdwatch_pivot && t) return i.createElement(h.Z, (0, r.Z)({}, e.birdwatch_pivot, { isForQuoteTweet: !0, tweetId: e.id_str }));
                        }),
                        (this._renderStaleEditCallout = () => {
                            const { isCondensed: e } = this.props,
                                t = this.shouldRenderRichContent && !e;
                            return i.createElement(o.Z, { style: [V.textContentSpacing, t && V.marginTopSmall] }, i.createElement(S.Z, { editType: "stale", textMode: "inline", textSize: "subtext2" }));
                        }),
                        (this._renderLatestEditIcon = () => i.createElement(S.Z, { editType: "latest" })),
                        (this._mediaCarouselStyle = [V.marginHorizontalSmall, V.marginTopXXSmall, V.marginBottomSmall]),
                        (this._renderPreviewCta = () => {
                            const { tweet: e } = this.props;
                            return e.isPreviewDisplay && e.cta && i.createElement(o.Z, { style: [V.quotePreview, V.marginBottomSmall] }, i.createElement(Z.Z, (0, r.Z)({}, e.cta, { renderInQuoteTweet: !0 })));
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e);
                        });
                }
                shouldComponentUpdate(e) {
                    return !(0, l.Z)(e, this.props);
                }
                render() {
                    const { tweet: e } = this.props;
                    return this._isWithheldTweet(e) ? this._renderWithheldTweet() : this._renderTweet();
                }
                _getTweetLink() {
                    const { tweet: e, withEditAnatomy: t } = this.props;
                    let n = e.permalink;
                    return e.isStaleEdit && t && (n = L.Z.getTweetLatestVersionPermalink(e)), { pathname: `https://twitter.com${n}`, anchorless: !0 };
                }
                _renderTweet() {
                    const { id: e, shouldShowBorder: t, style: n, withLink: r } = this.props,
                        a = [V.quoteTweetContainer, t && V.quoteTweetContainerBorder, !r && V.quoteTweetWithoutLink, n];
                    return i.createElement(o.Z, { id: e }, i.createElement(c.ZP, { style: x.default.visuallyHidden }, A), i.createElement(_.Z, { link: r ? this._getTweetLink() : void 0, onPress: this._handlePress, style: a, withInteractiveStyling: !!r, withOutsetFocusRing: !0 }, this._renderTweetContent(), this._renderForwardPivot(), this._renderBirdwatchPivot()));
                }
                _renderTweetContent() {
                    const { isCondensed: e, tweet: t, withEditAnatomy: n } = this.props;
                    return i.createElement(o.Z, null, this._renderHeader(), e ? this._renderTweetContentCondensed() : this._renderTweetContentExpanded(), t.isStaleEdit && n ? this._renderStaleEditCallout() : null);
                }
                _renderTweetContentCondensed() {
                    return i.createElement(o.Z, { style: V.condensedContentBody }, this._renderArticleContent(), this.shouldRenderRichContent ? i.createElement(o.Z, { style: [V.marginTopXSmall, V.condensedMediaSide, this.props.isCarouselItem ? V.carouselStyleMediaSide : void 0], testID: "testCondensedMedia" }, this._renderTweetRichContent(!0)) : null, i.createElement(o.Z, { style: V.condensedContentSide }, this._renderTextContent(!0)), this._renderPreviewCta());
                }
                _renderTweetContentExpanded() {
                    const { withMediaCarousel: e } = this.props;
                    return i.createElement(i.Fragment, null, this._renderTextContent(!1), this._renderArticleContent(), this._renderPreviewCta(), this.shouldRenderRichContent ? i.createElement(o.Z, { style: e ? this._mediaCarouselStyle : V.marginTopXXSmall }, this._renderTweetRichContent(!1)) : null);
                }
                _renderHeader() {
                    const { socialContextProps: e, tweet: t } = this.props,
                        n = t.user || {};
                    return i.createElement(o.Z, { style: V.headerContainer }, e ? this._renderSocialContext() : null, i.createElement(o.Z, { style: [n.highlightedLabel ? V.attributionWrapperFlexStart : V.attributionWrapperCenter, V.attributionWrapper] }, this._renderUserName(n)));
                }
                _renderSocialContext() {
                    const { socialContextProps: e } = this.props;
                    if (e) {
                        const { iconStyle: t, style: n, ...o } = e;
                        return i.createElement(v.Z, (0, r.Z)({ iconStyle: [V.socialContextIconSpacing, t], style: [V.socialContextSpacing, n], withLeftPadding: !1 }, o));
                    }
                }
                _renderTextContent(e) {
                    const { isCarouselItem: t, tweet: n, withEditAnatomy: r } = this.props,
                        a = !this.shouldRenderRichContent && n.isStaleEdit && r;
                    return i.createElement(o.Z, { style: [V.textContentSpacing, a && V.marginBottomXXSmall] }, n.self_thread ? null : this._renderReplyContext(), this._renderTweetText(e), t ? null : this._renderShowLinks());
                }
                _renderShowLinks() {
                    const { tweet: e } = this.props;
                    return this.shouldRenderShowPollText ? this._renderShowText(O) : e.self_thread ? this._renderShowText(H) : null;
                }
                _renderTweetText(e) {
                    const { renderArticleCardInTweet: t, renderGrokTranslationHeader: n, tweet: r, withEditAnatomy: o, withMediaAsTextLinks: a } = this.props,
                        s = r.isStaleEdit && o,
                        l = r.grok_translated_post,
                        d = r.note_tweet && r.note_tweet.is_expandable,
                        c = (l ? null != l?.preview_translation : d) ? r.permalink : void 0,
                        h = l?.preview_translation ?? l?.translation ?? "",
                        p = n?.();
                    return i.createElement(i.Fragment, null, p, i.createElement(I.Z, { article: t ? r.article : void 0, color: s ? "gray700" : "text", displayTextRange: l ? [0, h.length] : r.display_text_range, entities: l ? (l?.entities ?? {}) : r.entities, isCondensed: e, isPreviewDisplay: r.isPreviewDisplay, lang: r.lang, numberOfLines: this._renderReplyContext() ? 4 : 5, quotedTweetPermalink: r.quoted_status_permalink, style: e ? V.marginTopXSmall : V.marginTopXXSmall, text: l ? h : r.text, withCardLinks: !0, withMediaLinks: a || r.possibly_sensitive || this._hasSensitiveMediaWarnings(), withQuoteLinks: !0, withShowMore: c }));
                }
                _renderUserName(e) {
                    const { tweet: t, withHeaderLinks: n, withUserHoverCard: r } = this.props,
                        a = t.author_community_relationship?.role;
                    return i.createElement(o.Z, { style: V.userNameRoot }, i.createElement(o.Z, { style: V.userNameWrapper }, i.createElement(R.Z, { onClick: this.props.onAvatarClick, onHoverCardScreenNameClick: this.props.onScreenNameClick, screenName: e.screen_name, size: "medium", style: V.userAvatar, uri: e.profile_image_url_https, withHoverCard: r, withLink: n }), i.createElement(B.Z, { onLinkClick: this.props.onScreenNameClick, onScreenNameClick: this.props.onScreenNameClick, screenNameSuffix: (() => i.createElement(y.Z, null, this._renderTimestamp(t.created_at)))(), tweetId: t.id_str, userData: { affiliateBadgeInfo: e.highlightedLabel, communityModeratorStatus: a, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, screenName: e.screen_name, userId: e.id_str, verifiedType: e.verified_type }, withHoverCard: r, withLink: n })), e.highlightedLabel ? i.createElement(w.Z, { label: e.highlightedLabel }) : null);
                }
                _renderArticleContent() {
                    const { renderArticleCardInTweet: e, tweet: t } = this.props;
                    if (e && t.article) return i.createElement(o.Z, { style: [V.quoteArticle, V.marginBottomSmall] }, i.createElement(E.Z, { articleEntity: t.article, hasSensitiveContent: t.possibly_sensitive, mediaVisibilityResults: t.mediaVisibilityResults, renderInQuoteTweet: !0 }));
                }
                _renderTweetRichContent(e) {
                    const { forwardPivotInfo: t, loggedInUserId: n, mediaContentStyles: r, mediaMaxHeight: a, nudges: s, onMediaClick: l, preventVideoPlayback: d, promotedContent: c, shouldShowAltLabelAlways: h, singleImageMaxAspectRatio: m, singleImageMinAspectRatio: g, tweet: f, withActionsDisabled: w, withCenterCrop: _, withLink: y } = this.props;
                    if (N.B(f)) return i.createElement(o.Z, { style: V.marginTopXXSmall }, i.createElement(M.Z, { tweet: f, withStraightBorders: !0 }));
                    if (f.card && u.default.isSpaceCard(f.card.name)) return i.createElement(o.Z, { style: V.marginTopXXSmall }, i.createElement(b.Z, { audioSpaceId: f.card.binding_values.id?.string_value, clipMetadata: f.card.binding_values.clip_metadata?.string_value, withStraightBorders: !0 }));
                    if (f.card && u.default.isBroadcastCard(f.card.name)) return i.createElement(p.Z, { card: f.card, cardContext: { locationKey: z, tweetId: f.id_str, tweetPermalink: f.permalink, tweetUserId: f.user.id_str, viewerUserId: n, withActionsDisabled: w }, preventVideoPlayback: d, promotedContent: c, withBorder: !1, withDetail: !1, withRoundBorder: !1 });
                    const C = e ? 1 : U,
                        v = e ? 1 : void 0,
                        x = e ? "quote_tweet_small" : z,
                        E = Boolean(f.extended_entities?.media && f.extended_entities?.media.length > 1),
                        S = { displayOptions: { badgeConfiguration: e ? { hideDuration: !1, hideDataSize: !0, hideViewCount: !0 } : void 0, hideLeftBadges: e && E }, hidePreviewPlayButton: e },
                        Z = !!a && !e;
                    return i.createElement(T.Z, { authorId: f.user.id_str, authorScreenName: f.user.screen_name, cacheLocationKey: x, containerAspectRatio: C, displayMediaTags: !1, forwardPivotInfo: t, hasSensitiveMedia: f.possibly_sensitive, hideAcceptOverlay: e, isCondensed: e, loggedInUserId: n, mediaContentStyles: r, mediaDetails: f.extended_entities?.media, mediaMaxHeight: a, mediaTagsLink: `${f.permalink}/media_tags`, mediaVisibilityResults: f.mediaVisibilityResults, nudges: s, onClick: l, preventPlayback: e || d, shouldShowAltLabelAlways: h, showBorder: e, showRoundCorners: e, singleImageMaxAspectRatio: e ? v : m, singleImageMinAspectRatio: e ? v : g, style: Z ? V.centerItems : void 0, tweetCreatedAt: f.created_at, tweetId: f.id_str, tweetText: f.text, videoAspectRatio: C, videoOptions: S, withCenterCrop: _, withLink: y, withPostPlayback: !0 });
                }
                _renderTimestamp(e) {
                    const { tweet: t, withHeaderLinks: n } = this.props,
                        r = n ? { pathname: `https://twitter.com${t.permalink}` } : void 0;
                    return i.createElement(C.Z, { link: r, timestamp: e });
                }
                _renderReplyContext() {
                    const { isCarouselItem: e, tweet: t } = this.props;
                    return t.in_reply_to_status_id_str ? i.createElement(k.ZP, { displayTextRange: t.display_text_range, inReplyToName: t.in_reply_to_name, inReplyToScreenName: t.in_reply_to_screen_name, inReplyToUserIdStr: t.in_reply_to_user_id_str, linkType: k.ZP.ReplyContextLinkTypes.none, style: [V.marginTopXXSmall, e ? V.textOverflowEllipsis : void 0], tweetPermalink: t.permalink, userMentionsEntities: t.entities?.user_mentions }) : null;
                }
                _renderShowText(e) {
                    const { withLink: t } = this.props;
                    return i.createElement(c.ZP, { color: "link", style: [V.marginTopXXSmall, !t && V.disabledLink] }, e);
                }
                _renderWithheldTweet() {
                    const { style: e, tweet: t } = this.props;
                    return i.createElement(o.Z, { style: e }, i.createElement(D.Z, { displayTextRange: t.display_text_range, entities: t.withheld_entities || t.entities, inline: !0, lang: t.lang, text: t.withheld_text || t.text }));
                }
                get shouldRenderRichContent() {
                    const { hideMedia: e, tweet: t } = this.props;
                    return !e && this._hasRichContent(t) && !t.possibly_sensitive && !this._hasSensitiveMediaWarnings();
                }
                get shouldRenderShowPollText() {
                    const { tweet: e } = this.props;
                    return e.card && u.default.isPollCard(e.card.name);
                }
                _hasRichContent(e) {
                    const { extended_entities: t } = e,
                        { withMediaAsTextLinks: n } = this.props;
                    return this._canRenderAudioSpaceCard(e) || this._canRenderBroadcastCard(e) || !!e.article || !(!(t && t.media && t.media.length) || n);
                }
                _hasSensitiveMediaWarnings() {
                    const { tweet: e } = this.props;
                    return !!e.extended_entities?.media?.flatMap((e) => (e.sensitive_media_warning ? (0, d.Z)(e.sensitive_media_warning) : [])).some(Boolean);
                }
                _canRenderAudioSpaceCard(e) {
                    return Boolean(e.card && u.default.isSpaceCard(e.card.name) && !this.props.isCondensed);
                }
                _canRenderBroadcastCard(e) {
                    return Boolean(e.card && u.default.isBroadcastCard(e.card.name) && !this.props.isCondensed);
                }
                _isWithheldTweet(e) {
                    return !!e.withheld_scope;
                }
            }
            F.defaultProps = { hideMedia: !1, onPress: void 0, onMediaClick: void 0, onAvatarClick: void 0, onScreenNameClick: void 0, shouldShowBorder: !0, withCenterCrop: !1, withEditAnatomy: !1, withMediaAsTextLinks: !1, withHeaderLinks: !1, withLink: !0, withUserHoverCard: !0, isCarouselItem: !1, withBirdwatchPivot: !1, renderArticleCardInTweet: !1 };
            const V = x.default.create((e) => ({
                attributionWrapper: { flexShrink: 1, flexDirection: "row" },
                attributionWrapperCenter: { alignItems: "center" },
                attributionWrapperFlexStart: { alignItems: "flex-start" },
                carouselStyleMediaSide: { flex: 4, maxHeight: `calc(2 * ${e.spaces.space64})`, maxWidth: `calc(2* ${e.spaces.space64})` },
                centerItems: { alignItems: "center" },
                condensedMediaSide: { flex: 2, alignSelf: "flex-start", marginVertical: e.spaces.space12, marginStart: e.spaces.space12, overflow: "hidden", borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderColor: "transparent" },
                condensedContentSide: { flex: 8, flexBasis: "0%" },
                condensedContentBody: { flexDirection: "row" },
                disabledLink: { opacity: 0.5 },
                headerContainer: { flexDirection: "column", marginHorizontal: e.spaces.space12, marginTop: e.spaces.space12 },
                marginBottomXXSmall: { marginBottom: e.spaces.space4 },
                marginTopXXSmall: { marginTop: e.spaces.space4 },
                marginTopXSmall: { marginTop: e.spaces.space8 },
                marginBottomSmall: { marginBottom: e.spaces.space12 },
                marginHorizontalSmall: { marginHorizontal: e.spaces.space12 },
                marginTopSmall: { marginTop: e.spaces.space12 },
                quoteTweetContainer: { overflow: "hidden", minHeight: e.spaces.space64 },
                quoteTweetContainerBorder: { borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge },
                quoteTweetWithoutLink: { cursor: "default" },
                socialContextIconSpacing: { marginEnd: e.spaces.space4 },
                socialContextSpacing: { marginBottom: e.spaces.space2, marginStart: e.spaces.space8 },
                textOverflowEllipsis: { textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" },
                userNameRoot: { flexShrink: 1, overflow: "hidden" },
                userNameWrapper: { alignItems: "center", flexDirection: "row", maxWidth: "100%" },
                textContentSpacing: { marginHorizontal: e.spaces.space12, marginBottom: e.spaces.space12 },
                timestampWrapper: { flexShrink: 0, whiteSpace: "pre" },
                userAvatar: { marginEnd: e.spaces.space4 },
                quoteArticle: { maxWidth: "100%", paddingHorizontal: e.spaces.space12 },
                quotePreview: { paddingHorizontal: e.spaces.space12, marginTop: e.spaces.space8 },
            }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-167f1698.fd1bdc0a.js.map
