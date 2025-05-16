"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.MediaPickerWithPreview"],
    {
        850496: (e, t, r) => {
            r.d(t, { Z: () => P });
            var i = r(202784),
                n = r(325686),
                a = r(731708),
                o = r(15038),
                s = r(154003),
                l = r(682474),
                d = r(392237),
                c = r(332920),
                p = r.n(c),
                u = r(293615),
                m = r(837020),
                h = r(219229),
                b = r(373554),
                f = r(304059),
                y = r(751170);
            const C = p().b87ca51a,
                g = p().eebff22c,
                M = i.createElement(u.default, null);
            class P extends i.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: r, maskStyle: s, mediaItem: l, onAddMediaFiles: d, onCrop: c, onRemove: p, rootStyle: u, withDragDrop: m } = this.props,
                        h = l && !l.uploader,
                        b = i.createElement(i.Fragment, null, this._renderPreview(), h ? null : i.createElement(i.Fragment, null, i.createElement(n.Z, { style: [R.mask, s, E[e]] }), i.createElement(n.Z, { style: [R.overlaidContent, r] }, i.createElement(n.Z, { style: R.buttonsContainer }, this._renderMediaEdit(), c ? this._renderMediaCrop() : null, p ? this._renderMediaRemove() : null), t ? i.createElement(a.ZP, { align: "center", color: "gray700", size: "subtext1", style: R.description }, t) : null)));
                    return i.createElement(n.Z, { style: [R.container, u, E[e]] }, m && d ? i.createElement(o.ZP, { onFilesAdded: d, style: [R.dragDropContainer, E[e]] }, b) : b);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return i.createElement(s.ZP, { "aria-label": C, hoverLabel: { label: C }, icon: i.createElement(m.default, null), onPress: e, size: "large", style: R.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return i.createElement(s.ZP, { "aria-label": g, icon: i.createElement(h.default, null), onPress: e, size: "large", style: R.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": r, icon: n, multiple: a, onAddMediaFiles: o, onEdit: l } = this.props;
                    return o ? i.createElement(b.Z, { acceptGifs: e, acceptVideo: t, "aria-label": r, icon: n, multiple: a, onChange: o, size: "large", style: R.mediaPicker, type: "onMediaDominantColorFilled" }) : i.createElement(s.ZP, { "aria-label": r, icon: n, onPress: l, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: r, mediaItem: n } = this.props;
                    return n ? i.createElement(l.Z, { ratio: e }, i.createElement(f.Z, { borderRadius: t, enableGif: !1, mediaItem: n, style: R.mediaPreview, withCloseButton: !1 })) : r;
                }
            }
            P.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: y.A.NONE, icon: M };
            const E = d.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                R = d.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        199127: (e, t, r) => {
            r.r(t), r.d(t, { MediaPickerWithPreview: () => d, default: () => c });
            var i = r(202784),
                n = r(850496),
                a = r(373554),
                o = r(668214),
                s = r(497294);
            const l = (0, o.Z)().propsFromActions(() => ({ addMedia: s.rA, processMultipleMedia: s.G$ }));
            class d extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: r, onChange: i, onFailure: n, processMultipleMedia: a } = this.props,
                                o = this._getAcceptedFileInputs(),
                                s = Array.from(e).find((e) => o.includes(e.type));
                            s &&
                                t([s], { location: r }).then((e) => {
                                    i && i(e.map((e) => e.id)), a(e, { onFailure: n });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, a.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": r, aspectRatio: a, borderRadius: o, currentContent: s, description: l, innerStyle: d, maskStyle: c, mediaItem: p, onCrop: u, onRemove: m, rootStyle: h } = this.props;
                    return i.createElement(n.Z, { acceptGifs: e, acceptVideo: t, "aria-label": r, aspectRatio: a, borderRadius: o, currentContent: s, description: l, innerStyle: d, maskStyle: c, mediaItem: p, onAddMediaFiles: this._handleAddMediaFiles, onCrop: u, onRemove: m, rootStyle: h, withDragDrop: !0 });
                }
            }
            d.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const c = l(d);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.MediaPickerWithPreview.8d034ada.js.map
