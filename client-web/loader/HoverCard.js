(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.HoverCard"],
    {
        67877: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => r });
            const r = (e, t) => {
                let o = null;
                const r = () => {
                    (o = null), e();
                };
                return () => (o || (o = t(r)), o);
            };
        },
        879985: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { default: () => _ });
            var r = o(807896),
                n = (o(136728), o(202784)),
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
            class _ extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderContent = () => {
                            const { animationDuration: e, animationType: t, enableClickOutsideToDismiss: o, onAnimateComplete: i, onDismiss: a, show: d, withArrow: c, withContentOverflow: p, withFixedPosition: w, withFocusTrapView: f, withMask: _, withRoundedSides: g, withoutLayer: y } = this.props,
                                { bottom: C, left: x, right: Z, top: k } = this.state,
                                E = void 0 === k && void 0 === C,
                                D = E || !f ? n.Fragment : u.Z,
                                R = { top: k, bottom: C, start: x, end: Z },
                                A = [E ? v.initialRenderWrapper : w ? v.contentWrapperFixed : v.contentWrapperAbsolute, R],
                                S = g ? v.infiniteCornerRadius : v.defaultCornerRadius,
                                P = [v.contentRoot, S, !p && !c && v.overflowHidden];
                            return n.createElement(
                                m.ZP.Consumer,
                                null,
                                ({ direction: c }) => (
                                    (this._languageDirection = c),
                                    n.createElement(
                                        b.Z.Provider,
                                        { value: { isInHoverCard: !0 } },
                                        o ? n.createElement(s.Z, { onClick: a, style: [v.mask, _ && v.withMask] }) : null,
                                        n.createElement(
                                            s.Z,
                                            { onKeyUp: this._handleEsc, ref: this._setContentNode, style: A, testID: "hoverCardParent" },
                                            n.createElement(
                                                D,
                                                null,
                                                n.createElement(l.Z, { animateMount: !0, duration: e || "long", onAnimateComplete: i, show: d, type: t || "fade" }, ({ isAnimating: e }) => (_ || y ? n.createElement(s.Z, { style: P }, this._renderInnerBody(c)) : n.createElement(h.Z, { id: "HoverCard", minimizeReporting: e }, (e, t) => n.createElement(s.Z, (0, r.Z)({ ref: e() }, t({ style: P })), this._renderInnerBody(c))))),
                                            ),
                                        ),
                                    )
                                ),
                            );
                        }),
                        (this._renderInnerBody = (e) => {
                            const { children: t, withArrow: o } = this.props;
                            return n.createElement(n.Fragment, null, o && n.createElement(a.default, { style: this._getArrowStyle(e) }), t);
                        }),
                        (this._setContentNode = (e) => {
                            (this._contentNode = e || void 0), this._scheduleUpdate();
                        }),
                        (this._handleEsc = (e) => {
                            const { onDismiss: t } = this.props,
                                { altKey: o, ctrlKey: r, key: n, metaKey: i } = e;
                            !(o || r || i) && "Escape" === n && t && t();
                        }),
                        (this._updatePosition = () => {
                            if (!this._mounted) return;
                            const { anchorNode: e, preferredHorizontalOrientation: t, preferredVerticalOrientation: o, withArrow: r, withFixedPosition: n } = this.props,
                                i = "rtl" === this._languageDirection,
                                s = w.default.theme.borderRadiiPx.large,
                                a = (0, f.kl)({ anchorNode: e, contentNode: this._contentNode, preferredHorizontalOrientation: t, preferredVerticalOrientation: o, withArrow: r, withFixedPosition: n, borderRadius: s, isRTL: i });
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
                    return e ? this._renderContent() : n.createElement(p.Z.Dropdown, null, this._renderContent());
                }
                _getArrowStyle(e) {
                    const { arrowPositionStart: t, bottom: o } = this.state;
                    let r;
                    const n = "rtl" === e;
                    if (t) {
                        r = [v.arrow, o ? v.downArrow : v.upArrow];
                        const e = `calc(${t}px - ${a.default.metadata.width / 2}px)`;
                        n ? r.push({ end: e }) : r.push({ start: e });
                    }
                    return r;
                }
            }
            const v = w.default.create((e) => ({ arrow: { color: e.colors.cellBackground, filter: `drop-shadow(${e.spaces.space1} -${e.spaces.space1} ${e.spaces.space1} ${e.colors.gray200})`, fontSize: e.fontSizes.subtext2, position: "absolute", width: `${a.default.metadata.width}px` }, contentWrapperAbsolute: { position: "absolute" }, contentWrapperFixed: { backfaceVisibility: "hidden", position: "fixed" }, initialRenderWrapper: { opacity: 0, position: "fixed" }, contentRoot: { backgroundColor: e.colors.cellBackground, boxShadow: e.boxShadows.medium }, overflowHidden: { overflow: "hidden" }, defaultCornerRadius: { borderRadius: e.borderRadii.xLarge }, infiniteCornerRadius: { borderRadius: e.borderRadii.infinite }, mask: { ...w.default.absoluteFillObject, position: "fixed", userSelect: "none" }, withMask: { backgroundColor: e.colors.maskColor }, downArrow: { bottom: `-${e.fontSizes.subtext3}`, transform: "rotate(180deg)" }, upArrow: { top: `-${e.fontSizes.subtext3}` } }));
        },
        797681: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { default: () => d });
            var r = o(202784),
                n = o(890601),
                i = o(783427),
                s = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M22 17H2L12 6l10 11z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const d = a;
        },
        666536: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => i });
            var r = o(936386),
                n = o.n(r);
            const i = (e, t, o) => n()(e, t, o);
        },
        936386: (e) => {
            function t(e, t, o) {
                var r, n, i, s, a;
                function d() {
                    var l = Date.now() - s;
                    l < t && l >= 0 ? (r = setTimeout(d, t - l)) : ((r = null), o || ((a = e.apply(i, n)), (i = n = null)));
                }
                null == t && (t = 100);
                var l = function () {
                    (i = this), (n = arguments), (s = Date.now());
                    var l = o && !r;
                    return r || (r = setTimeout(d, t)), l && ((a = e.apply(i, n)), (i = n = null)), a;
                };
                return (
                    (l.clear = function () {
                        r && (clearTimeout(r), (r = null));
                    }),
                    (l.flush = function () {
                        r && ((a = e.apply(i, n)), (i = n = null), clearTimeout(r), (r = null));
                    }),
                    l
                );
            }
            (t.debounce = t), (e.exports = t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.HoverCard.c0f3533a.js.map
