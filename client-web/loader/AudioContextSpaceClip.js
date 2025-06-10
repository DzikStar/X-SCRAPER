"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioContextSpaceClip", "loader.AudioContextVoiceMedia"],
    {
        97837: (t, e, i) => {
            i.d(e, { Z: () => h });
            var s = i(202784),
                o = i(525744),
                n = i(859799),
                r = i(390686),
                c = i(393495);
            class a {
                constructor(t, e, i) {
                    (this.placement = t), (this.obstructions = e), (this.layerId = i);
                }
                getPositionData() {
                    return { percentVisible: this.visibleFraction(), percentOfViewportOccupied: this.placement.viewportOccupiedFraction(), sizesInfo: { viewportSize: this.placement.viewport, mediaSize: this.placement.item } };
                }
                visibleFraction() {
                    const t = this.placement.visiblePart();
                    if (!t) return 0;
                    const e = this.layerId ? this.obstructions.getObstructionAboveLayer(this.layerId, t) : this.obstructions.getTotalObstruction(t),
                        i = c.Z.area(this.placement.item),
                        s = (1 - e) * c.Z.area(t);
                    return i > 0 ? s / i : 0;
                }
                top() {
                    return this.placement.item.top;
                }
                distanceToCenter() {
                    return this.placement.verticalDistanceToViewportCenter();
                }
                distanceToTop() {
                    return this.placement.verticalDistanceToViewportTop();
                }
                scrollY() {
                    return this.placement.scrollY;
                }
            }
            class l extends s.Component {
                constructor(...t) {
                    super(...t),
                        (this._handlePageVisibilityChange = () => {
                            if (this._placement) {
                                const { layerId: t, obstructionDetection: e, onPageVisibilityChange: i } = this.props,
                                    s = document.visibilityState,
                                    o = this._obstructions || e.getObstructions(),
                                    n = new a(this._placement, o, t);
                                i && i(s, n);
                            }
                        }),
                        (this._handlePlacementChange = (t) => {
                            this._updateAndNotify({ placement: t }, this.props.onChange);
                        }),
                        (this._handleObstructionChange = () => {
                            const { obstructionDetection: t, onChange: e } = this.props;
                            this._updateAndNotify({ obstructions: t.getObstructions() }, e);
                        }),
                        (this._setPlacementRef = (t) => {
                            this._placementRef = t;
                        });
                }
                sample(t) {
                    this._placementRef &&
                        this._placementRef.sample((e) => {
                            this._updateAndNotify({ placement: e }, t);
                        });
                }
                render() {
                    const { children: t, style: e } = this.props;
                    return s.createElement(r.ZP, { onPlacementChange: this._handlePlacementChange, ref: this._setPlacementRef, style: e, withScrollListener: !0 }, t);
                }
                componentDidMount() {
                    const { obstructionDetection: t } = this.props;
                    (this._obstructionSubscription = t.subscribe(this._handleObstructionChange)), document.addEventListener("visibilitychange", this._handlePageVisibilityChange);
                }
                componentWillUnmount() {
                    this._obstructionSubscription && (this._obstructionSubscription.unsubscribe(), (this._obstructionSubscription = void 0)), document.removeEventListener("visibilitychange", this._handlePageVisibilityChange);
                }
                _updateAndNotify({ obstructions: t, placement: e }, i) {
                    const { layerId: s, obstructionDetection: o } = this.props;
                    (this._placement = e || this._placement),
                        (this._obstructions = t || this._obstructions || o.getObstructions()),
                        this._placement
                            ? i(new a(this._placement, this._obstructions, s))
                            : this._placementRef &&
                              this._placementRef.sample((t) => {
                                  (this._placement = t), (this._obstructions = this._obstructions || o.getObstructions()), i(new a(t, this._obstructions, s));
                              });
                }
            }
            l.defaultProps = { obstructionDetection: o.Z };
            const h = (0, n.Z)(l);
        },
        420412: (t, e, i) => {
            i.d(e, { Z: () => a });
            var s = i(202784),
                o = i(325686),
                n = i(235902),
                r = i(885015),
                c = i(392237);
            function a({ borderColor: t = "borderColor", isSlim: e = !1, label: i }) {
                const { isWebRedesign: a } = n.ZP.useProps(),
                    h = "borderColor" === t || "nestedBorderColor" === t ? l[t] : { backgroundColor: c.default.theme.colors[t] ?? c.default.theme.colors.borderColor };
                return i ? s.createElement(r.Z, { style: !e && l.root, withGutter: !0 }, s.createElement(o.Z, { style: l.gapColumn }, s.createElement(o.Z, { style: [l.gap, h] })), s.createElement(o.Z, { style: l.gapText }, i), s.createElement(o.Z, { style: l.gapColumn }, s.createElement(o.Z, { style: [l.gap, h] }))) : s.createElement(o.Z, { style: [!e && l.root, a() && l.rootRedesign, l.gap, h] });
            }
            const l = c.default.create((t) => ({ borderColor: { backgroundColor: c.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: c.default.theme.colors.nestedBorderColor }, gap: { height: t.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: t.spaces.space4 }, rootRedesign: { marginHorizontal: t.spaces.space16 } }));
        },
        885015: (t, e, i) => {
            i.d(e, { Z: () => l });
            var s = i(807896),
                o = i(202784),
                n = i(325686),
                r = i(392237);
            class c extends o.Component {
                render() {
                    const { children: t, style: e, withGutter: i, ...r } = this.props,
                        c = o.Children.map(t, (t) => t && o.cloneElement(t, { style: [t.props.style, a.column, i && a.withGutterColumn] }));
                    return o.createElement(n.Z, (0, s.Z)({ style: [e, a.root, i && a.withGutter] }, r), c);
                }
            }
            c.defaultProps = { withGutter: !1 };
            const a = r.default.create((t) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${t.spaces.space4}` }, withGutterColumn: { marginHorizontal: t.spaces.space4 } })),
                l = c;
        },
        41065: (t, e, i) => {
            i.r(e), i.d(e, { default: () => a });
            var s = i(202784),
                o = i(890601),
                n = i(783427),
                r = i(347101);
            const c = (t = {}) => {
                const { direction: e } = (0, n.Z)();
                return (0, o.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [r.Z.root, t.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: e });
            };
            c.metadata = { width: 24, height: 24 };
            const a = c;
        },
        662678: (t, e, i) => {
            i.d(e, { G: () => o, Z: () => s });
            i(136728);
            const s = function (t, e) {
                return o(t, e);
            };
            function o(t, e) {
                return t.reduce(
                    (i, s, o) => {
                        const n = e ? e(s, o, t) : !!s;
                        return n && i[0].push(s), !n && i[1].push(s), i;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioContextSpaceClip.0c38170a.js.map
