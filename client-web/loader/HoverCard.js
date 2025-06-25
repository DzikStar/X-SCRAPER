(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.HoverCard"],
    {
        67877: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => n });
            const n = (e, t) => {
                let o = null;
                const n = () => {
                    (o = null), e();
                };
                return () => (o || (o = t(n)), o);
            };
        },
        879985: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { default: () => _ });
            var n = o(807896),
                r = (o(136728), o(202784)),
                i = o(878052),
                s = o(325686),
                a = o(797681),
                d = o(666536),
                l = o(815858),
                c = o(67877),
                u = o(745153),
                h = o(365023),
                p = o(292627),
                m = o(224162),
                w = o(392237),
                f = o(985163),
                b = o(308569);
            class _ extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderContent = () => {
                            const { animationDuration: e, animationType: t, enableClickOutsideToDismiss: o, onAnimateComplete: i, onDismiss: a, show: d, withArrow: c, withContentOverflow: p, withFixedPosition: w, withFocusTrapView: f, withMask: _, withRoundedSides: v, withoutLayer: y } = this.props,
                                { bottom: g, left: x, right: k, top: E } = this.state,
                                R = void 0 === E && void 0 === g,
                                Z = R || !f ? r.Fragment : u.Z,
                                A = { top: E, bottom: g, start: x, end: k },
                                D = [R ? C.initialRenderWrapper : w ? C.contentWrapperFixed : C.contentWrapperAbsolute, A],
                                S = v ? C.infiniteCornerRadius : C.defaultCornerRadius,
                                P = [C.contentRoot, S, !p && !c && C.overflowHidden];
                            return r.createElement(
                                m.ZP.Consumer,
                                null,
                                ({ direction: c }) => (
                                    (this._languageDirection = c),
                                    r.createElement(
                                        b.Z.Provider,
                                        { value: { isInHoverCard: !0 } },
                                        o ? r.createElement(s.Z, { onClick: a, style: [C.mask, _ && C.withMask] }) : null,
                                        r.createElement(
                                            s.Z,
                                            { onKeyUp: this._handleEsc, ref: this._setContentNode, style: D, testID: "hoverCardParent" },
                                            r.createElement(
                                                Z,
                                                null,
                                                r.createElement(l.Z, { animateMount: !0, duration: e || "long", onAnimateComplete: i, show: d, type: t || "fade" }, ({ isAnimating: e }) => (_ || y ? r.createElement(s.Z, { style: P }, this._renderInnerBody(c)) : r.createElement(h.Z, { id: "HoverCard", minimizeReporting: e }, (e, t) => r.createElement(s.Z, (0, n.Z)({ ref: e() }, t({ style: P })), this._renderInnerBody(c))))),
                                            ),
                                        ),
                                    )
                                ),
                            );
                        }),
                        (this._renderInnerBody = (e) => {
                            const { children: t, withArrow: o } = this.props;
                            return r.createElement(r.Fragment, null, o && r.createElement(a.default, { style: this._getArrowStyle(e) }), t);
                        }),
                        (this._setContentNode = (e) => {
                            (this._contentNode = e || void 0), this._scheduleUpdate();
                        }),
                        (this._handleEsc = (e) => {
                            const { onDismiss: t } = this.props,
                                { altKey: o, ctrlKey: n, key: r, metaKey: i } = e;
                            !(o || n || i) && "Escape" === r && t && t();
                        }),
                        (this._updatePosition = () => {
                            if (!this._mounted) return;
                            const { anchorNode: e, preferredHorizontalOrientation: t, preferredVerticalOrientation: o, withArrow: n, withFixedPosition: r } = this.props,
                                i = "rtl" === this._languageDirection,
                                s = w.default.theme.borderRadiiPx.large,
                                a = (0, f.kl)({ anchorNode: e, contentNode: this._contentNode, preferredHorizontalOrientation: t, preferredVerticalOrientation: o, withArrow: n, withFixedPosition: r, borderRadius: s, isRTL: i });
                            if (!a) return;
                            const { arrowPositionStart: d, bottom: l, left: c, right: u, top: h } = a;
                            this.setState({ arrowPositionStart: d, bottom: l, left: c, right: u, top: h });
                        }),
                        (this.state = Object.freeze({})),
                        (this._scheduleUpdate = (0, c.Z)(this._updatePosition, window.requestAnimationFrame)),
                        (this._scheduleDebouncedUpdate = (0, d.Z)(this._scheduleUpdate, 250));
                }
                componentDidMount() {
                    (this._mounted = !0), i.Z.addEventListener("change", this._scheduleDebouncedUpdate);
                }
                componentDidUpdate(e) {
                    const { anchorNode: t } = this.props;
                    e.anchorNode !== t && this._scheduleDebouncedUpdate();
                }
                componentWillUnmount() {
                    const { onHoverCardUnmount: e } = this.props;
                    (this._mounted = !1), i.Z.removeEventListener("change", this._scheduleDebouncedUpdate), e && e();
                }
                render() {
                    const { withoutLayer: e } = this.props;
                    return e ? this._renderContent() : r.createElement(p.Z.Dropdown, null, this._renderContent());
                }
                _getArrowStyle(e) {
                    const { arrowPositionStart: t, bottom: o } = this.state;
                    let n;
                    const r = "rtl" === e;
                    if (t) {
                        n = [C.arrow, o ? C.downArrow : C.upArrow];
                        const e = `calc(${t}px - ${a.default.metadata.width / 2}px)`;
                        r ? n.push({ end: e }) : n.push({ start: e });
                    }
                    return n;
                }
            }
            const C = w.default.create((e) => ({ arrow: { color: e.colors.cellBackground, filter: `drop-shadow(${e.spaces.space1} -${e.spaces.space1} ${e.spaces.space1} ${e.colors.gray200})`, fontSize: e.fontSizes.subtext2, position: "absolute", width: `${a.default.metadata.width}px` }, contentWrapperAbsolute: { position: "absolute" }, contentWrapperFixed: { backfaceVisibility: "hidden", position: "fixed" }, initialRenderWrapper: { opacity: 0, position: "fixed" }, contentRoot: { backgroundColor: e.colors.cellBackground, boxShadow: e.boxShadows.medium }, overflowHidden: { overflow: "hidden" }, defaultCornerRadius: { borderRadius: e.borderRadii.xLarge }, infiniteCornerRadius: { borderRadius: e.borderRadii.infinite }, mask: { ...w.default.absoluteFillObject, position: "fixed", userSelect: "none" }, withMask: { backgroundColor: e.colors.maskColor }, downArrow: { bottom: `-${e.fontSizes.subtext3}`, transform: "rotate(180deg)" }, upArrow: { top: `-${e.fontSizes.subtext3}` } }));
        },
        666536: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => i });
            var n = o(936386),
                r = o.n(n);
            const i = (e, t, o) => r()(e, t, o);
        },
        936386: (e) => {
            function t(e, t, o) {
                var n, r, i, s, a;
                function d() {
                    var l = Date.now() - s;
                    l < t && l >= 0 ? (n = setTimeout(d, t - l)) : ((n = null), o || ((a = e.apply(i, r)), (i = r = null)));
                }
                null == t && (t = 100);
                var l = function () {
                    (i = this), (r = arguments), (s = Date.now());
                    var l = o && !n;
                    return n || (n = setTimeout(d, t)), l && ((a = e.apply(i, r)), (i = r = null)), a;
                };
                return (
                    (l.clear = function () {
                        n && (clearTimeout(n), (n = null));
                    }),
                    (l.flush = function () {
                        n && ((a = e.apply(i, r)), (i = r = null), clearTimeout(n), (n = null));
                    }),
                    l
                );
            }
            (t.debounce = t), (e.exports = t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.HoverCard.cef767aa.js.map
