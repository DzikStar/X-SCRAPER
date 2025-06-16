"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.MediaPickerWithPreview", "icons/IconCameraPlusStroke-js"],
    {
        850496: (e, t, r) => {
            r.d(t, { Z: () => M });
            var i = r(202784),
                n = r(325686),
                a = r(731708),
                o = r(15038),
                l = r(154003),
                s = r(682474),
                d = r(392237),
                c = r(111677),
                p = r.n(c),
                m = r(293615),
                u = r(837020),
                h = r(219229),
                b = r(373554),
                f = r(304059),
                g = r(751170);
            const y = p().b87ca51a,
                C = p().eebff22c,
                v = i.createElement(m.default, null);
            class M extends i.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: r, maskStyle: l, mediaItem: s, onAddMediaFiles: d, onCrop: c, onRemove: p, rootStyle: m, withDragDrop: u } = this.props,
                        h = s && !s.uploader,
                        b = i.createElement(i.Fragment, null, this._renderPreview(), h ? null : i.createElement(i.Fragment, null, i.createElement(n.Z, { style: [P.mask, l, E[e]] }), i.createElement(n.Z, { style: [P.overlaidContent, r] }, i.createElement(n.Z, { style: P.buttonsContainer }, this._renderMediaEdit(), c ? this._renderMediaCrop() : null, p ? this._renderMediaRemove() : null), t ? i.createElement(a.ZP, { align: "center", color: "gray700", size: "subtext1", style: P.description }, t) : null)));
                    return i.createElement(n.Z, { style: [P.container, m, E[e]] }, u && d ? i.createElement(o.ZP, { onFilesAdded: d, style: [P.dragDropContainer, E[e]] }, b) : b);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return i.createElement(l.ZP, { "aria-label": y, hoverLabel: { label: y }, icon: i.createElement(u.default, null), onPress: e, size: "large", style: P.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return i.createElement(l.ZP, { "aria-label": C, icon: i.createElement(h.default, null), onPress: e, size: "large", style: P.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": r, icon: n, multiple: a, onAddMediaFiles: o, onEdit: s } = this.props;
                    return o ? i.createElement(b.Z, { acceptGifs: e, acceptVideo: t, "aria-label": r, icon: n, multiple: a, onChange: o, size: "large", style: P.mediaPicker, type: "onMediaDominantColorFilled" }) : i.createElement(l.ZP, { "aria-label": r, icon: n, onPress: s, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: r, mediaItem: n } = this.props;
                    return n ? i.createElement(s.Z, { ratio: e }, i.createElement(f.Z, { borderRadius: t, enableGif: !1, mediaItem: n, style: P.mediaPreview, withCloseButton: !1 })) : r;
                }
            }
            M.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: g.A.NONE, icon: v };
            const E = d.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                P = d.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        199127: (e, t, r) => {
            r.r(t), r.d(t, { MediaPickerWithPreview: () => d, default: () => c });
            var i = r(202784),
                n = r(850496),
                a = r(373554),
                o = r(668214),
                l = r(497294);
            const s = (0, o.Z)().propsFromActions(() => ({ addMedia: l.rA, processMultipleMedia: l.G$ }));
            class d extends i.Component {
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
                    const { acceptGifs: e, acceptVideo: t, "aria-label": r, aspectRatio: a, borderRadius: o, currentContent: l, description: s, innerStyle: d, maskStyle: c, mediaItem: p, onCrop: m, onRemove: u, rootStyle: h } = this.props;
                    return i.createElement(n.Z, { acceptGifs: e, acceptVideo: t, "aria-label": r, aspectRatio: a, borderRadius: o, currentContent: l, description: s, innerStyle: d, maskStyle: c, mediaItem: p, onAddMediaFiles: this._handleAddMediaFiles, onCrop: m, onRemove: u, rootStyle: h, withDragDrop: !0 });
                }
            }
            d.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const c = s(d);
        },
        293615: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                n = r(890601),
                a = r(783427),
                o = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.MediaPickerWithPreview.f1d0406a.js.map
