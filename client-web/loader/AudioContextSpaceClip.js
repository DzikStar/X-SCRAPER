"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioContextSpaceClip", "loader.AudioContextVoiceMedia"],
    {
        97837: (t, e, s) => {
            s.d(e, { Z: () => h });
            var o = s(202784),
                i = s(525744),
                n = s(859799),
                r = s(390686),
                c = s(393495);
            class a {
                constructor(t, e, s) {
                    (this.placement = t), (this.obstructions = e), (this.layerId = s);
                }
                getPositionData() {
                    return { percentVisible: this.visibleFraction(), percentOfViewportOccupied: this.placement.viewportOccupiedFraction(), sizesInfo: { viewportSize: this.placement.viewport, mediaSize: this.placement.item } };
                }
                visibleFraction() {
                    const t = this.placement.visiblePart();
                    if (!t) return 0;
                    const e = this.layerId ? this.obstructions.getObstructionAboveLayer(this.layerId, t) : this.obstructions.getTotalObstruction(t),
                        s = c.Z.area(this.placement.item),
                        o = (1 - e) * c.Z.area(t);
                    return s > 0 ? o / s : 0;
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
            class l extends o.Component {
                constructor(...t) {
                    super(...t),
                        (this._handlePageVisibilityChange = () => {
                            if (this._placement) {
                                const { layerId: t, obstructionDetection: e, onPageVisibilityChange: s } = this.props,
                                    o = document.visibilityState,
                                    i = this._obstructions || e.getObstructions(),
                                    n = new a(this._placement, i, t);
                                s && s(o, n);
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
                    return o.createElement(r.ZP, { onPlacementChange: this._handlePlacementChange, ref: this._setPlacementRef, style: e, withScrollListener: !0 }, t);
                }
                componentDidMount() {
                    const { obstructionDetection: t } = this.props;
                    (this._obstructionSubscription = t.subscribe(this._handleObstructionChange)), document.addEventListener("visibilitychange", this._handlePageVisibilityChange);
                }
                componentWillUnmount() {
                    this._obstructionSubscription && (this._obstructionSubscription.unsubscribe(), (this._obstructionSubscription = void 0)), document.removeEventListener("visibilitychange", this._handlePageVisibilityChange);
                }
                _updateAndNotify({ obstructions: t, placement: e }, s) {
                    const { layerId: o, obstructionDetection: i } = this.props;
                    (this._placement = e || this._placement),
                        (this._obstructions = t || this._obstructions || i.getObstructions()),
                        this._placement
                            ? s(new a(this._placement, this._obstructions, o))
                            : this._placementRef &&
                              this._placementRef.sample((t) => {
                                  (this._placement = t), (this._obstructions = this._obstructions || i.getObstructions()), s(new a(t, this._obstructions, o));
                              });
                }
            }
            l.defaultProps = { obstructionDetection: i.Z };
            const h = (0, n.Z)(l);
        },
        420412: (t, e, s) => {
            s.d(e, { Z: () => a });
            var o = s(202784),
                i = s(325686),
                n = s(235902),
                r = s(885015),
                c = s(392237);
            function a({ borderColor: t = "borderColor", isSlim: e = !1, label: s }) {
                const { isWebRedesign: a } = n.ZP.useProps(),
                    h = "borderColor" === t || "nestedBorderColor" === t ? l[t] : { backgroundColor: c.default.theme.colors[t] ?? c.default.theme.colors.borderColor };
                return s ? o.createElement(r.Z, { style: !e && l.root, withGutter: !0 }, o.createElement(i.Z, { style: l.gapColumn }, o.createElement(i.Z, { style: [l.gap, h] })), o.createElement(i.Z, { style: l.gapText }, s), o.createElement(i.Z, { style: l.gapColumn }, o.createElement(i.Z, { style: [l.gap, h] }))) : o.createElement(i.Z, { style: [!e && l.root, a() && l.rootRedesign, l.gap, h] });
            }
            const l = c.default.create((t) => ({ borderColor: { backgroundColor: c.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: c.default.theme.colors.nestedBorderColor }, gap: { height: t.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: t.spaces.space4 }, rootRedesign: { marginHorizontal: t.spaces.space16 } }));
        },
        885015: (t, e, s) => {
            s.d(e, { Z: () => l });
            var o = s(807896),
                i = s(202784),
                n = s(325686),
                r = s(392237);
            class c extends i.Component {
                render() {
                    const { children: t, style: e, withGutter: s, ...r } = this.props,
                        c = i.Children.map(t, (t) => t && i.cloneElement(t, { style: [t.props.style, a.column, s && a.withGutterColumn] }));
                    return i.createElement(n.Z, (0, o.Z)({ style: [e, a.root, s && a.withGutter] }, r), c);
                }
            }
            c.defaultProps = { withGutter: !1 };
            const a = r.default.create((t) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${t.spaces.space4}` }, withGutterColumn: { marginHorizontal: t.spaces.space4 } })),
                l = c;
        },
        662678: (t, e, s) => {
            s.d(e, { G: () => i, Z: () => o });
            s(136728);
            const o = function (t, e) {
                return i(t, e);
            };
            function i(t, e) {
                return t.reduce(
                    (s, o, i) => {
                        const n = e ? e(o, i, t) : !!o;
                        return n && s[0].push(o), !n && s[1].push(o), s;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioContextSpaceClip.6e08306a.js.map
