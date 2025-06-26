"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.MediaPickerWithPreview", "icons/IconFlagFill-js"],
    {
        850496: (e, t, r) => {
            r.d(t, { Z: () => E });
            var i = r(202784),
                n = r(325686),
                a = r(731708),
                o = r(15038),
                l = r(154003),
                d = r(682474),
                s = r(392237),
                c = r(111677),
                p = r.n(c),
                u = r(293615),
                m = r(837020),
                h = r(219229),
                b = r(373554),
                f = r(304059),
                g = r(751170);
            const y = p().b87ca51a,
                C = p().eebff22c,
                v = i.createElement(u.default, null);
            class E extends i.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: r, maskStyle: l, mediaItem: d, onAddMediaFiles: s, onCrop: c, onRemove: p, rootStyle: u, withDragDrop: m } = this.props,
                        h = d && !d.uploader,
                        b = i.createElement(i.Fragment, null, this._renderPreview(), h ? null : i.createElement(i.Fragment, null, i.createElement(n.Z, { style: [P.mask, l, M[e]] }), i.createElement(n.Z, { style: [P.overlaidContent, r] }, i.createElement(n.Z, { style: P.buttonsContainer }, this._renderMediaEdit(), c ? this._renderMediaCrop() : null, p ? this._renderMediaRemove() : null), t ? i.createElement(a.ZP, { align: "center", color: "gray700", size: "subtext1", style: P.description }, t) : null)));
                    return i.createElement(n.Z, { style: [P.container, u, M[e]] }, m && s ? i.createElement(o.ZP, { onFilesAdded: s, style: [P.dragDropContainer, M[e]] }, b) : b);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return i.createElement(l.ZP, { "aria-label": y, hoverLabel: { label: y }, icon: i.createElement(m.default, null), onPress: e, size: "large", style: P.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return i.createElement(l.ZP, { "aria-label": C, icon: i.createElement(h.default, null), onPress: e, size: "large", style: P.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": r, icon: n, multiple: a, onAddMediaFiles: o, onEdit: d } = this.props;
                    return o ? i.createElement(b.Z, { acceptGifs: e, acceptVideo: t, "aria-label": r, icon: n, multiple: a, onChange: o, size: "large", style: P.mediaPicker, type: "onMediaDominantColorFilled" }) : i.createElement(l.ZP, { "aria-label": r, icon: n, onPress: d, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: r, mediaItem: n } = this.props;
                    return n ? i.createElement(d.Z, { ratio: e }, i.createElement(f.Z, { borderRadius: t, enableGif: !1, mediaItem: n, style: P.mediaPreview, withCloseButton: !1 })) : r;
                }
            }
            E.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: g.A.NONE, icon: v };
            const M = s.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                P = s.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        199127: (e, t, r) => {
            r.r(t), r.d(t, { MediaPickerWithPreview: () => s, default: () => c });
            var i = r(202784),
                n = r(850496),
                a = r(373554),
                o = r(668214),
                l = r(497294);
            const d = (0, o.Z)().propsFromActions(() => ({ addMedia: l.rA, processMultipleMedia: l.G$ }));
            class s extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: r, onChange: i, onFailure: n, processMultipleMedia: a } = this.props,
                                o = this._getAcceptedFileInputs(),
                                l = Array.from(e).find((e) => o.includes(e.type));
                            l &&
                                t([l], { location: r }).then((e) => {
                                    i && i(e.map((e) => e.id)), a(e, { onFailure: n });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, a.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": r, aspectRatio: a, borderRadius: o, currentContent: l, description: d, innerStyle: s, maskStyle: c, mediaItem: p, onCrop: u, onRemove: m, rootStyle: h } = this.props;
                    return i.createElement(n.Z, { acceptGifs: e, acceptVideo: t, "aria-label": r, aspectRatio: a, borderRadius: o, currentContent: l, description: d, innerStyle: s, maskStyle: c, mediaItem: p, onAddMediaFiles: this._handleAddMediaFiles, onCrop: u, onRemove: m, rootStyle: h, withDragDrop: !0 });
                }
            }
            s.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const c = d(s);
        },
        597237: (e, t, r) => {
            r.r(t), r.d(t, { default: () => d });
            var i = r(202784),
                n = r(890601),
                a = r(783427),
                o = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M21.61 2H3v20h2v-6h16.61l-3.5-7 3.5-7z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const d = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.MediaPickerWithPreview.bb259a7a.js.map
