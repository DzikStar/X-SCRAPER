"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-e019dbda", "loader.MediaPickerWithPreview", "loader.FeedbackSheet"],
    {
        229333: (e, t, n) => {
            n.d(t, { Z: () => p });
            var s = n(202784),
                a = n(466999),
                i = n(325686),
                r = n(392237),
                o = n(111677);
            const c = n.n(o)().e5b0063d;
            let l = 0;
            class d extends s.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${l}`), (l += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = c({ title: t });
                    return s.createElement(i.Z, { "aria-labelledby": this._listDomId, role: "region" }, s.createElement(a.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: r.default.visuallyHidden }, t), s.createElement(i.Z, { "aria-label": n }, e));
                }
            }
            const p = d;
        },
        399887: (e, t, n) => {
            n.d(t, { Z: () => c });
            var s = n(202784),
                a = n(154003),
                i = n(111677),
                r = n.n(i),
                o = n(437358);
            const c = () => {
                const e = r().d2826908,
                    t = r().c80cb4e4;
                return s.createElement(a.ZP, { "aria-label": e, hoverLabel: { label: t }, icon: s.createElement(o.default, null), link: "/i/lists/create", pullRight: !0, type: "primaryText" });
            };
        },
        774426: (e, t, n) => {
            n.r(t), n.d(t, { default: () => p });
            n(136728);
            var s = n(202784),
                a = n(811176),
                i = n(190286),
                r = n(111677),
                o = n.n(r),
                c = n(912021);
            const l = o().cfd2f35e;
            class d extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { activeConfirmation: null }),
                        (this._handleConfirm = (e) => {
                            this.setState({ activeConfirmation: e });
                        }),
                        (this._handleConfirmed = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.confirmCallback(), this.setState({ activeConfirmation: null }), this.props.onClose();
                        }),
                        (this._handleCancelConfirm = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.cancelCallback?.(), this.setState({ activeConfirmation: null });
                        }),
                        (this._getMemoizedProcessedActionItems = (0, c.Z)((e, t, n, s) =>
                            e.reduce((e, { Icon: a, confirmation: i, disabled: r, excludeFromActionMenu: o, isEmphasized: c, link: l, onClick: d, subText: p, testID: h, text: u, withCancelButton: m }, f) => {
                                if (!o) {
                                    const o = d
                                        ? () => {
                                              i ? (i.render ? s({ cancelCallback: i.onCancel, confirmCallback: d, render: i.render }) : s({ cancelCallback: i.onCancel, confirmCallback: d, text: i.text, headline: i.headline, label: i.label, confirmButtonType: i.confirmButtonType, withCancelButton: i.withCancelButton })) : (d(), n());
                                          }
                                        : n;
                                    e.push({ disabled: r, Icon: a, isEmphasized: c, testID: h, subText: p, text: u, onClick: o, link: l, withBottomBorder: t && t.includes(f) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : s.createElement(a.Z, { cancelButtonLabel: l, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: n, label: a, text: r, withCancelButton: o } = e || {};
                        return s.createElement(i.Z, { confirmButtonLabel: a, confirmButtonType: t, headline: n, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: r, withCancelButton: o });
                    }
                }
                _getProcessedActionItems() {
                    const { actionItems: e, dividerIndices: t, onClose: n } = this.props;
                    return this._getMemoizedProcessedActionItems(e, t, n, this._handleConfirm);
                }
            }
            const p = d;
        },
        414939: (e, t, n) => {
            n.d(t, { Z: () => c });
            var s = n(202784),
                a = n(325686),
                i = n(392237);
            class r extends s.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return s.createElement(a.Z, { style: o.root });
                }
            }
            const o = i.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                c = r;
        },
        789831: (e, t, n) => {
            n.d(t, { Z: () => l });
            var s = n(807896),
                a = n(202784),
                i = n(325686),
                r = n(392237),
                o = n(655352);
            const c = r.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                l = ({ children: e, component: t, fab: n, shouldRenderFab: r = !0, style: l, withoutBottomPadding: d, ...p }) => {
                    const h = t || i.Z,
                        u = r && !(0, o.ZP)();
                    return a.createElement(h, (0, s.Z)({}, p, { style: [u && !d && c.root, l] }), e, u ? n : null);
                };
        },
        850496: (e, t, n) => {
            n.d(t, { Z: () => y });
            var s = n(202784),
                a = n(325686),
                i = n(731708),
                r = n(15038),
                o = n(154003),
                c = n(682474),
                l = n(392237),
                d = n(111677),
                p = n.n(d),
                h = n(293615),
                u = n(837020),
                m = n(219229),
                f = n(373554),
                b = n(304059),
                g = n(751170);
            const _ = p().b87ca51a,
                v = p().eebff22c,
                C = s.createElement(h.default, null);
            class y extends s.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: n, maskStyle: o, mediaItem: c, onAddMediaFiles: l, onCrop: d, onRemove: p, rootStyle: h, withDragDrop: u } = this.props,
                        m = c && !c.uploader,
                        f = s.createElement(s.Fragment, null, this._renderPreview(), m ? null : s.createElement(s.Fragment, null, s.createElement(a.Z, { style: [E.mask, o, Z[e]] }), s.createElement(a.Z, { style: [E.overlaidContent, n] }, s.createElement(a.Z, { style: E.buttonsContainer }, this._renderMediaEdit(), d ? this._renderMediaCrop() : null, p ? this._renderMediaRemove() : null), t ? s.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext1", style: E.description }, t) : null)));
                    return s.createElement(a.Z, { style: [E.container, h, Z[e]] }, u && l ? s.createElement(r.ZP, { onFilesAdded: l, style: [E.dragDropContainer, Z[e]] }, f) : f);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return s.createElement(o.ZP, { "aria-label": _, hoverLabel: { label: _ }, icon: s.createElement(u.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return s.createElement(o.ZP, { "aria-label": v, icon: s.createElement(m.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": n, icon: a, multiple: i, onAddMediaFiles: r, onEdit: c } = this.props;
                    return r ? s.createElement(f.Z, { acceptGifs: e, acceptVideo: t, "aria-label": n, icon: a, multiple: i, onChange: r, size: "large", style: E.mediaPicker, type: "onMediaDominantColorFilled" }) : s.createElement(o.ZP, { "aria-label": n, icon: a, onPress: c, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: n, mediaItem: a } = this.props;
                    return a ? s.createElement(c.Z, { ratio: e }, s.createElement(b.Z, { borderRadius: t, enableGif: !1, mediaItem: a, style: E.mediaPreview, withCloseButton: !1 })) : n;
                }
            }
            y.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: g.A.NONE, icon: C };
            const Z = l.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                E = l.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        370111: (e, t, n) => {
            n.d(t, { Z: () => d });
            var s = n(202784),
                a = n(111677),
                i = n.n(a),
                r = n(330815);
            const o = i().b7fb6bda,
                c = i().e71cdf4e,
                l = Object.freeze({ NotStarted: "not_started", Started: "started", Completed: "completed" });
            function d({ aspectRatio: e, media: t, onCancel: n, onCropDone: a }) {
                const [i, d] = s.useState({ status: "not_started" }),
                    [p, h] = s.useState(!1),
                    [u, m] = s.useState(!1),
                    { croppedMediaId: f, status: b } = i;
                s.useEffect(() => {
                    b === l.NotStarted && (h(!0), d({ status: "started" })), b === l.Completed && t.id !== f && d({ status: "not_started", croppedMediaId: void 0 });
                }, [b, t, f]);
                const g = s.useCallback(() => {
                        h(!1), d({ status: l.Completed, croppedMediaId: t.id }), n();
                    }, [n, t]),
                    _ = s.useCallback(() => {
                        h(!1), m(!0);
                    }, []),
                    v = s.useCallback(() => {
                        m(!1), h(!0);
                    }, []),
                    C = s.useCallback(() => {
                        m(!1);
                    }, []),
                    y = s.useCallback(
                        (e) => {
                            d({ status: l.Completed, croppedMediaId: t.id }), a?.(e);
                        },
                        [a, t],
                    ),
                    Z = { ...t, id: Number.MAX_SAFE_INTEGER, originalMediaFile: t.mediaFile, cropData: void 0 };
                return s.createElement(s.Fragment, null, p ? s.createElement(r.Z, { defaultAspectRatio: e, media: t, onCancel: g, onDone: _, title: o }) : null, u ? s.createElement(r.Z, { defaultAspectRatio: 1, media: Z, onCancel: v, onCropDone: y, onDone: C, title: c }) : null);
            }
        },
        965245: (e, t, n) => {
            n.d(t, { Z: () => c });
            var s = n(807896),
                a = n(202784),
                i = n(229333),
                r = n(414939),
                o = n(334346);
            const c = ({ accessibilityTitle: e, footer: t = a.createElement(r.Z, null), ...n }) => {
                const c = a.createElement(o.C, (0, s.Z)({}, n, { footer: t }));
                return e ? a.createElement(i.Z, { title: e }, c) : c;
            };
        },
        349035: (e, t, n) => {
            n.d(t, { Z: () => i });
            var s = n(202784),
                a = n(272175);
            const i = (0, n(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), s.createElement(a.ql, null, s.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => l });
            var s = n(807896),
                a = n(202784),
                i = n(107267),
                r = n(403556),
                o = n(791632);
            const c = (e) => {
                    const t = (0, i.useHistory)();
                    return a.createElement(r.Z, (0, s.Z)({}, e, { isCompact: (0, o.HD)(t) }));
                },
                l = a.memo(c);
        },
        131779: (e, t, n) => {
            n.d(t, { Z: () => f });
            var s = n(202784),
                a = n(154003),
                i = n(111677),
                r = n.n(i),
                o = n(320588),
                c = n(71620),
                l = n(668214),
                d = n(576469);
            const p = (0, l.Z)()
                    .propsFromActions(() => ({ removeUserFromList: d.Z.removeUserFromList, addUserToList: d.Z.addUserToList, createLocalApiErrorHandler: (0, c.zr)("ADD_REMOVE_BUTTON") }))
                    .withAnalytics({ component: "user" }),
                h = r().e68b09b4,
                u = r().af40a8e0;
            class m extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAddButton = () => s.createElement(a.ZP, { "aria-label": u, onPress: this._handleAdd, size: "small", type: "primaryFilled" }, u)),
                        (this._renderRemoveButton = () => s.createElement(a.ZP, { "aria-label": h, onPress: this._handleRemove, size: "small", type: "destructiveFilled" }, h)),
                        (this._handleAdd = () => {
                            const { addUserToList: e, createLocalApiErrorHandler: t, listId: n, onAdd: s, shouldAddUserToList: a, userId: i } = this.props;
                            a()
                                ? (e(n, { userId: i, shouldInjectURTEntry: !1 })
                                      .then(() => {
                                          s && s(i);
                                      })
                                      .catch(t(o.Mt)),
                                  this._scribeAction("add"))
                                : s && s(i);
                        }),
                        (this._handleRemove = () => {
                            const { createLocalApiErrorHandler: e, listId: t, onRemove: n, removeUserFromList: s, userId: a } = this.props;
                            s(t, { userId: a, shouldRemoveURTEntry: !1 })
                                .then(() => {
                                    n && n(a);
                                })
                                .catch(e()),
                                this._scribeAction("remove");
                        }),
                        (this._scribeAction = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe({ element: e, action: "click" });
                        });
                }
                render() {
                    const { getIsMember: e, userId: t } = this.props;
                    return e(t) ? this._renderRemoveButton() : this._renderAddButton();
                }
            }
            const f = p(m);
        },
        737613: (e, t, n) => {
            n.d(t, { Z: () => b });
            var s = n(202784),
                a = n(325686),
                i = n(834324),
                r = n(392237),
                o = n(111677),
                c = n.n(o),
                l = n(125363),
                d = n(390387),
                p = n(919022);
            const h = c().aacfbe55,
                u = c().ga8627cd,
                m = c().e6d2573f,
                f = c().d37a3e15,
                b = (e) => {
                    const { isReply: t, style: n, type: r } = e,
                        o = (0, l.v9)(d.Lz),
                        c = (0, l.v9)(p.ZP.selectViewerUser),
                        b = o ? c?.screen_name : void 0,
                        _ = s.useMemo(() => [g.root, n], [n]);
                    let v = h({ screenName: b });
                    return "Tweet" === r && t ? (v = u({ screenName: b })) : "DM" === r ? (v = m({ screenName: b })) : "List" === r && (v = f({ screenName: b })), b ? s.createElement(a.Z, { style: _ }, s.createElement(i.Z, { text: v })) : null;
                },
                g = r.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space12 } }));
        },
        387524: (e, t, n) => {
            n.d(t, { Z: () => f });
            var s = n(807896),
                a = n(202784),
                i = n(325686),
                r = n(292627),
                o = n(537392),
                c = n(392237),
                l = n(365023),
                d = n(392027),
                p = n(774654),
                h = n(725516),
                u = n(443781);
            const m = c.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${c.default.iPhoneOffsetBottom} - ${p.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                f = (e) => {
                    const { "aria-label": t, label: n, onPress: f, scribeComponent: b, ...g } = e,
                        { loggedInUserId: _ } = a.useContext(u.rC),
                        v = (0, h.z)(),
                        C = a.useCallback(
                            (e) => {
                                v.scribe({ component: b, action: "click" }), f && f(e);
                            },
                            [v, f, b],
                        ),
                        y = p.ZM.useCollapsibleNavBars(),
                        Z = [...p.Ah({ elementPosition: "bottom" }), y && m.fabStaysAboveSafeArea];
                    return _
                        ? a.createElement(
                              r.Z.FloatingAction,
                              null,
                              a.createElement(o.ZP, null, ({ windowWidth: e }) => {
                                  const r = e > c.default.theme.breakpoints.large,
                                      o = e > c.default.theme.breakpoints.medium,
                                      p = e < c.default.theme.breakpoints.micro,
                                      h = [m.root, o && m.rootMedium, r && m.rootLarge],
                                      u = [m.fab, r && m.fabLarge, p && m.fabMicro, Z];
                                  return a.createElement(
                                      i.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: h },
                                      a.createElement(l.Z, { id: "FloatingActionButtonBase" }, (e, o) => a.createElement(i.Z, (0, s.Z)({ ref: e() }, o({ style: u })), a.createElement(d.Z, (0, s.Z)({}, g, { "aria-label": t, label: r ? n : void 0, onPress: C, style: p && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, n) => {
            n.d(t, { Z: () => c });
            n(136728);
            var s = n(202784),
                a = n(387524),
                i = n(635510);
            const r = "/compose/post";
            class o extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: n } = this.props,
                                s = { pathname: r, state: (t && t()) || {} };
                            n.push(s);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: n, scribeComponent: o } = this.props;
                    return s.createElement(a.Z, { "aria-label": e, href: r, icon: t, label: n, onPress: this._handlePress, scribeComponent: o, testID: i.Z.tweet });
                }
            }
            const c = o;
        },
        32677: (e, t, n) => {
            n.d(t, { Z: () => p });
            var s = n(202784),
                a = n(111677),
                i = n.n(a),
                r = n(186444),
                o = n(355883);
            const c = i().j0179e90,
                l = i().ee69d769({ verb: "" }),
                d = s.createElement(r.default, null),
                p = ({ getLocationState: e, history: t }) => s.createElement(o.Z, { "aria-label": c, getLocationState: e, history: t, icon: d, label: l, scribeComponent: "floating_compose_button" });
        },
        841993: (e, t, n) => {
            n.d(t, { Z: () => u });
            var s = n(202784),
                a = n(111677),
                i = n.n(a),
                r = n(437358),
                o = n(725516),
                c = n(387524),
                l = n(635510);
            const d = i().d2826908,
                p = i().c80cb4e4,
                h = s.createElement(r.default, null),
                u = (e) => {
                    const { page: t } = e,
                        n = (0, o.z)(),
                        a = s.useCallback(
                            (e) => {
                                n.scribe({ page: t, component: "floating_action_button", element: "create_list_button", action: "click" });
                            },
                            [t, n],
                        );
                    return s.createElement(c.Z, { "aria-label": d, href: "/i/lists/create", icon: h, label: p, onPress: a, scribeComponent: "floating_list_button", testID: l.Z.createList });
                };
        },
        635510: (e, t, n) => {
            n.d(t, { Z: () => s });
            const s = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        330815: (e, t, n) => {
            n.d(t, { Z: () => I });
            var s = n(202784),
                a = n(392237),
                i = n(154003),
                r = n(111677),
                o = n.n(r),
                c = n(184605),
                l = n(980407),
                d = n(873637),
                p = n(668214),
                h = n(497294);
            const u = (e, t) => (t.media ? t.media : (0, c.Z)(t.mediaId) ? (0, h.m3)(e, t.mediaId)[0] : void 0),
                m = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                f = (0, p.Z)()
                    .propsFromState(() => ({ media: u, mediaId: m }))
                    .propsFromActions(() => ({ processMedia: h.C4, updateMediaUpload: h._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                b = "applyButton",
                g = o().gd80afba,
                _ = o().a753a870;
            class v extends s.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return s.createElement(i.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: b, type: "primaryFilled" }, _);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: n, media: s, mediaId: a, onDone: i, processMedia: r, updateMediaUpload: o } = this.props;
                                this.setState({ isProcessing: !0 });
                                const l = t.getCropData(),
                                    { originalMediaFile: d } = s || {},
                                    p = !d || (0 === l.top && 0 === l.left && l.width === d.width && l.height === d.height);
                                (0, c.Z)(a) &&
                                    (e
                                        ? (e(l), i())
                                        : (o({ id: a, cropData: p ? void 0 : l }),
                                          r(a).then(() => {
                                              this.setState({ isProcessing: !1 }), n.scribe({ action: "done" }), i();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = s.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: n, withAspectRatioOptions: a, withZoomControl: i } = this.props,
                        r = this._getMedia();
                    return s.createElement(l.Z, { backButtonType: "back", containerStyle: C.root, documentTitle: n || g, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: n || g }, s.createElement(d.Z, { defaultAspectRatio: e, media: r, ref: this._cropper, withAspectRatioOptions: a, withZoomControl: i }));
                }
            }
            const C = a.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                y = f(v);
            var Z = n(757700);
            const E = a.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                I = (e) => s.createElement(Z.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: E.modal }, s.createElement(y, e));
        },
        935167: (e, t, n) => {
            n.d(t, { ZP: () => W });
            n(136728);
            var s = n(202784),
                a = n(325686),
                i = n(601413),
                r = n(392237),
                o = n(111677),
                c = n.n(o),
                l = n(415506),
                d = n(170397),
                p = n(516951),
                h = n(805104),
                u = n(774426),
                m = n(376293),
                f = n(712816),
                b = n(879596),
                g = n(395067),
                _ = n(443781),
                v = n(688715),
                C = n(907552),
                y = n(668214),
                Z = n(576469),
                E = n(601576);
            const I = (e, t) => Z.Z.selectListAuthorScreenName(e, t.list.id_str),
                M = (0, y.Z)()
                    .propsFromState(() => ({ author: I }))
                    .propsFromActions(() => ({ addToast: E.fz }))
                    .withAnalytics(),
                S = c().i6da4f7a,
                w = c().a062ff80;
            const P = M(function (e) {
                    const {
                            list: { id_str: t },
                            scribeNamespace: n,
                        } = e,
                        a = ((i = t), (0, v.ju)(`https://x.com/i/lists/${i}`));
                    var i;
                    return s.createElement(C.ZP, { copyLinkShareLabel: w, externalShareLabel: S, scribeNamespace: n, url: a });
                }),
                k = P;
            var L = n(71620),
                A = n(286e3),
                R = n(390387),
                x = n(919022),
                T = n(510588);
            const B = (0, y.Z)()
                .propsFromState(() => ({ author: T.l1, basePath: T.$5, viewerUserId: R._h, isSubscribed: T.cx, list: T.Fz, useRanked: T._g }))
                .propsFromActions(() => ({ addToast: E.fz, block: x.ZP.block, createLocalApiErrorHandler: (0, L.zr)("LIST_ACTIONS"), toggleMute: Z.Z.toggleMute, unblock: x.ZP.unblock, updateRankMode: A.Rc }))
                .withAnalytics({ page: "spheres_detail" });
            var F = n(638537);
            c().a9ca06d2;
            const D = c().h63a5c3c,
                U = c().a367dc9a,
                N = c().dd438748,
                H = c().fe7e217c,
                z = c().ce78b698,
                G = c().i5a1628a,
                O = c().f333a93e,
                $ = c().c7294984,
                Q = c().g6340998,
                V = (e) => s.createElement(c().I18NFormatMessage, { $i18n: "aa4026bf" }, s.createElement(i.Z, { screenName: e }));
            class q extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._isMutingEnabled = this.context.featureSwitches.isTrue("home_timeline_spheres_detail_page_muting_enabled")),
                        (this._isSwitchRankingEnabled = this.context.featureSwitches.isTrue("home_timeline_spheres_ranking_mode_control_enabled")),
                        (this._isOwnList = () => {
                            const { author: e, viewerUserId: t } = this.props;
                            return e && e.id_str === t;
                        }),
                        (this._renderOverflowMenu = () => {
                            const e = this._getActionMenuItems();
                            return this.props.listId && e.length > 0 ? s.createElement(h.Z, { "aria-label": D, onPress: this._handleOverflowMenuPress, renderMenu: this._renderActionMenu, style: j.overflowMenu }) : null;
                        }),
                        (this._handleOverflowMenuPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ element: "more", action: "click" });
                        }),
                        (this._renderActionMenu = (e) => (this.props.listId ? this._renderCurationActionMenu(e) : null)),
                        (this._renderCurationActionMenu = (e) => {
                            const t = this._getActionMenuItems();
                            return s.createElement(u.default, { actionItems: t, onClose: e });
                        }),
                        (this._getActionMenuItems = () => {
                            const { author: e, viewerUserId: t } = this.props,
                                n = [];
                            if (t) {
                                if (!this._isOwnList() && e) {
                                    const e = this._getReportListAction(),
                                        t = this._getUserBlockAction();
                                    e && n.push(e), t && n.push(t);
                                }
                                if (this._isSwitchRankingEnabled) {
                                    const e = this._getSwitchRankModeAction();
                                    n.push(e);
                                }
                                const t = this._getMuteToggleAction();
                                t && n.push(t);
                            }
                            return n;
                        }),
                        (this._getReportListAction = () => {
                            const { analytics: e, list: t, listId: n } = this.props,
                                { featureSwitches: s } = this.context,
                                a = g.C2.List;
                            if ((0, g.Yw)(s, a)) {
                                const n = (0, g.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: a, reportedList: t, reportedUser: t?.user, scribeNamespace: e.contextualScribeNamespace });
                                return { text: $, Icon: l.default, onClick: p.Z, link: { pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(n) } } } };
                            }
                            return { text: $, Icon: l.default, onClick: p.Z, link: { pathname: `/i/report/list/${n}`, state: { clientReferer: window.location.pathname, scribeNamespace: e.contextualScribeNamespace } } };
                        }),
                        (this._getUserBlockAction = () => {
                            const { author: e } = this.props;
                            if (e) return (0, m.op)({ blockAction: this._handleBlockUser, blockSubtext: V, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), source: m.SC.LIST_DETAIL, unblockAction: this._handleUnblockUser, unblockSubtext: Q, user: e });
                        }),
                        (this._getMuteToggleAction = () => {
                            const { addToast: e, analytics: t, isSubscribed: n, list: s, toggleMute: a } = this.props;
                            if (s && n && this._isMutingEnabled) return (0, F.Z)({ list: s, addToast: e, toggleMute: a, scribe: (e) => t.scribe({ component: "customize", ...e }) });
                        }),
                        (this._getSwitchRankModeAction = () => {
                            const { useRanked: e } = this.props;
                            return { text: e ? H : G, Icon: d.default, onClick: this._handleSwitchRankMode, subText: e ? z : O };
                        }),
                        (this._handleBlockUser = () => {
                            const { addToast: e, analytics: t, author: n, block: s, createLocalApiErrorHandler: a } = this.props;
                            n &&
                                (s(n.id_str, { promotedContent: n.promoted_content }).then(() => {
                                    e({ action: { label: m.Vt, onAction: this._handleUnblockUser }, text: m.KV });
                                }, a(f.d)),
                                t.scribe({ action: "block" }));
                        }),
                        (this._handleUnblockUser = () => {
                            const { analytics: e, author: t, createLocalApiErrorHandler: n, unblock: s } = this.props;
                            t && (s(t.id_str, { promotedContent: t.promoted_content }).catch(n(b.D)), e.scribe({ action: "unblock" }));
                        }),
                        (this._handleSwitchRankMode = () => {
                            const { addToast: e, analytics: t, listId: n, updateRankMode: s, useRanked: a } = this.props,
                                i = a ? U : N,
                                r = a ? "see_latest" : "see_top";
                            s({ listId: n, useRanked: !a }).then(() => {
                                e({ text: i });
                            }),
                                t.scribe({ action: "click", component: "customize", element: r });
                        });
                }
                render() {
                    const { list: e, scribeNamespace: t } = this.props;
                    return s.createElement(a.Z, { style: j.rightControl }, e ? s.createElement(k, { list: e, scribeNamespace: t }) : null, this._renderOverflowMenu());
                }
            }
            q.contextType = _.rC;
            const j = r.default.create((e) => ({ listInfoButton: { marginStart: e.spaces.space4 }, overflowMenu: { marginStart: e.spaces.space4 }, rightControl: { alignItems: "center", flexDirection: "row" } })),
                W = B(q);
        },
        583957: (e, t, n) => {
            n.d(t, { Z: () => Q });
            n(136728);
            var s = n(202784),
                a = n(325686),
                i = n(733357),
                r = n(682474),
                o = n(392237),
                c = n(530525),
                l = n(439592),
                d = n(855488),
                p = n(954110),
                h = n(111677),
                u = n.n(h),
                m = n(401388),
                f = n(615656),
                b = n(370111),
                g = n(716233),
                _ = n(166677),
                v = n(538327),
                C = n(443781),
                y = n(199127),
                Z = n(184605),
                E = n(71620),
                I = n(668214),
                M = n(576469),
                S = n(497294),
                w = n(601576),
                P = n(510588);
            const k = (e, t) => {
                    const n = M.Z.selectLocalMediaId(e, t.listId || "-1"),
                        [s] = (0, Z.Z)(n) ? S.m3(e, n) : [];
                    return s;
                },
                L = (e, t) => {
                    const { listId: n } = t;
                    return n ? P.tt(e, n) : void 0;
                },
                A = (e, t) => {
                    const { listId: n } = t,
                        s = n && M.Z.select(e, n);
                    return s ? s.defaultBanner : void 0;
                },
                R = (e, t) => t.location.state?.suggestedUser,
                x = (0, I.Z)()
                    .propsFromState(() => ({ suggestedUser: R, uploadedMedia: k, customMedia: L, defaultMedia: A }))
                    .propsFromActions(({ context: e }) => ({ createLocalApiErrorHandler: (0, E.zr)(e), addToast: w.fz, addLocalMediaId: M.Z.addLocalMediaId, createList: M.Z.createList, deleteListMedia: M.Z.deleteListMedia, editList: M.Z.editList, editListMedia: M.Z.editListMedia, removeMediaUpload: S.WU, removeLocalMediaId: M.Z.removeLocalMediaId }))
                    .withAnalytics(),
                T = "public",
                B = "private",
                F = u().d4e220b4,
                D = u().e36287c6,
                U = u().f30edc68,
                N = u().df31d76a,
                H = u().h51a2cf6,
                z = u().bb10280e,
                G = u().h8885a22,
                O = u().f8132984;
            class $ extends s.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._hasListDataChanged = () => {
                            const { description: e, isPrivate: t, name: n } = this.state,
                                { list: s } = this.props,
                                a = s?.mode === B;
                            return e !== s?.description || n !== s?.name || t !== a;
                        }),
                        (this._hasMediaChanged = () => {
                            const { uploadedMedia: e } = this.props,
                                { shouldDeleteBanner: t } = this.state;
                            return !!e?.uploader || t;
                        }),
                        (this.save = () => {
                            const { description: e, isPrivate: t, name: n, shouldDeleteBanner: s } = this.state,
                                { analytics: a, createLocalApiErrorHandler: i, deleteListMedia: r, editList: o, list: c, listId: l } = this.props;
                            this.setState({ isSaving: !0 }), a.scribeAction("save");
                            const d = [];
                            if (s && l) {
                                const e = r(l).catch(i({ defaultToast: { text: H }, showToast: !0 }));
                                d.push(e);
                            }
                            if ((this._hasMediaChanged() && c && d.push(this._handleUploadMedia(c)), this._hasListDataChanged() && l)) {
                                const s = o(l, { description: e, mode: t ? B : T, name: n }).catch(i({ defaultToast: { text: z }, showToast: !0, [f.ZP.ValidationFailure]: { customAction: this._handleListUpdateFailure } }));
                                d.push(s);
                            }
                            Promise.all(d).then(() => {
                                this.state.nameError || this._goBackToListDetail();
                            }),
                                this.setState({ isSaving: !1 });
                        }),
                        (this.create = () => {
                            const { description: e, isPrivate: t, name: n } = this.state,
                                { analytics: s, createList: a, createLocalApiErrorHandler: i, onError: r, suggestedUser: o } = this.props,
                                c = t ? B : T;
                            this.setState({ isSaving: !0 }),
                                s.scribeAction("create"),
                                a({ name: n, description: e, mode: c }).then(
                                    (e) =>
                                        e &&
                                        this._handleUploadMedia(e).then((e) => {
                                            if (e) {
                                                const { history: t } = this.props,
                                                    n = { pathname: `${e.uri}/members/suggested`, state: { previousStep: v.O.Creation, suggestedUser: o } };
                                                o ? t.push(n) : t.replace(n);
                                            }
                                        }),
                                    (e) => {
                                        r && r(), i({ defaultToast: { text: z }, showToast: !0, [f.ZP.ValidationFailure]: { customAction: this._handleListUpdateFailure } })(e);
                                    },
                                ),
                                this.setState({ isSaving: !1 });
                        }),
                        (this._goBackToListDetail = () => {
                            const { history: e, listId: t } = this.props,
                                n = t && `/i/lists/${t}`;
                            e.goBack({ backLocation: n, shouldReplaceOnFallback: !0 });
                        }),
                        (this._handleUploadMedia = (e) => {
                            const { editListMedia: t, removeMediaUpload: n, uploadedMedia: s } = this.props,
                                { iconCrop: a } = this.state,
                                i = e.id_str;
                            if (s && s.uploader && i) {
                                return t({ listId: i, mediaId: s.id, iconCrop: a }).then(() => (n(s.id), Promise.resolve(e)), this._handleMediaUpdateFailure(s, z));
                            }
                            return Promise.resolve(e);
                        }),
                        (this._handleIconCropCancel = () => {
                            this.setState({ iconCrop: void 0 });
                        }),
                        (this._handleIconCropDone = (e) => {
                            const { analytics: t } = this.props;
                            (0, m.Z)(e) || this.setState({ iconCrop: e }), t.scribe({ element: "banner_image", action: "select" });
                        }),
                        (this._handlePrivacyChange = (e, t) => {
                            this.setState({ isPrivate: t });
                        }),
                        (this._handleNameChange = (e) => {
                            this.setState({ name: e.target.value, nameError: void 0 });
                        }),
                        (this._handleDescriptionChange = (e) => {
                            this.setState({ description: e.target.value });
                        }),
                        (this._handleBannerMediaRemove = () => {
                            const { analytics: e, uploadedMedia: t } = this.props;
                            e.scribe({ element: "banner_image", action: "remove" }), t ? this._clearBannerMedia(t.id) : this.setState({ shouldDeleteBanner: !0 });
                        }),
                        (this._handleBannerMediaChange = ([e]) => {
                            const { addLocalMediaId: t, listId: n, uploadedMedia: s } = this.props;
                            s && this._clearBannerMedia(s.id), t({ listId: n || "-1", mediaId: e });
                        }),
                        (this._handleBannerMediaFailure = (e) => {
                            this._clearBannerMedia(e);
                        }),
                        (this._clearBannerMedia = (e) => {
                            const { removeMediaUpload: t, uploadedMedia: n } = this.props;
                            (n && n.uploading) || t(e), this.setState({ mediaId: void 0 });
                        }),
                        (this._handleMediaUpdateFailure = (e, t) => (n) => {
                            const { addToast: s, createLocalApiErrorHandler: a, removeMediaUpload: i } = this.props,
                                r = (0, _.$r)(n);
                            if (r) {
                                const e = (0, _.ZP)(r, t);
                                e && s(e);
                            } else a({ showToast: !0 })(n);
                            i(e.id), this.setState({ isSaving: !1 });
                        }),
                        (this._handleListUpdateFailure = (e) => {
                            this.setState({ nameError: e.message || G });
                        });
                    const { list: n } = e,
                        s = n?.name || "",
                        a = n?.description || "",
                        i = n?.mode === B;
                    this.state = { description: a, isPrivate: i, isSaving: !1, name: s, nameError: "", showConfirmation: !1, shouldDeleteBanner: !1 };
                }
                componentWillUnmount() {
                    const { listId: e, removeLocalMediaId: t, uploadedMedia: n } = this.props;
                    n && (this._clearBannerMedia(n.id), t(e || "-1"));
                }
                componentDidUpdate(e, t) {
                    const { onChange: n } = this.props,
                        { isSaving: s, name: a } = this.state;
                    n(!(!!(!a || !a.length || (0, i.Z)(a)) || (!this._hasListDataChanged() && !this._hasMediaChanged()) || s));
                }
                render() {
                    const { customMedia: e, defaultMedia: t, uploadedMedia: n } = this.props,
                        { description: i, isPrivate: h, name: u, nameError: f, shouldDeleteBanner: _ } = this.state,
                        v = !(0, m.Z)(e?.image),
                        C = _ || !v ? t?.image : e?.image,
                        Z = s.createElement(r.Z, { ratio: o.default.theme.aspectRatios.profileBanner }, C ? s.createElement(c.Z, { "aria-label": "", aspectMode: l.Z.exact(3), image: C }) : null);
                    return s.createElement(a.Z, null, s.createElement(y.default, { "aria-label": N, aspectRatio: 3, currentContent: Z, location: g.vC.ListBanner, mediaItem: n, onChange: this._handleBannerMediaChange, onFailure: this._handleBannerMediaFailure, onRemove: v || n ? this._handleBannerMediaRemove : void 0 }), s.createElement(d.Z, { errorText: f, invalid: !!f, label: F, maxLength: 25, name: "name", onChange: this._handleNameChange, value: u }), s.createElement(d.Z, { label: D, maxLength: 100, multiline: !0, name: "description", numberOfLines: 3, onChange: this._handleDescriptionChange, value: i }), n ? s.createElement(b.Z, { aspectRatio: 3, media: n, onCancel: this._handleIconCropCancel, onCropDone: this._handleIconCropDone }) : null, s.createElement(p.Z, { checked: h, helpText: O, label: U, name: "isPrivate", onChange: this._handlePrivacyChange }));
                }
            }
            $.contextType = C.rC;
            const Q = x.forwardRef($);
        },
        421730: (e, t, n) => {
            n.d(t, { Z: () => L });
            var s = n(807896),
                a = (n(136728), n(202784)),
                i = n(67369),
                r = n(111677),
                o = n.n(r),
                c = n(339110),
                l = n(500002),
                d = n(874088),
                p = n(325686),
                h = n(731708),
                u = n(392237);
            const m = o().g13ea02c,
                f = a.forwardRef((e, t) => a.createElement(p.Z, { style: [e.style, b.container] }, a.createElement(h.ZP, { align: "center", color: "gray700" }, m))),
                b = u.default.create((e) => ({ container: { padding: e.spaces.space12, paddingTop: e.spaces.space20 } })),
                g = f;
            var _ = n(457311);
            const v = o().d6a23192,
                C = o().hc76e8cd,
                y = o().d872881a;
            function Z(e) {
                const { query: t, ...n } = e;
                return a.createElement(p.Z, n, a.createElement(_.Z, { buttonLink: "/i/lists/create", buttonText: v, buttonType: "primaryFilled", header: C({ query: t }), message: y, secondaryButtonType: "primaryOutlined" }));
            }
            var E = n(24949),
                I = n(668214),
                M = n(204744);
            const S = (0, E.P1)(
                    M.Ww,
                    (e, t) => t.maxItems ?? 20,
                    (e, t) => {
                        const n = e.filter((e) => e.list);
                        return n.length > t ? n.slice(0, t) : n;
                    },
                ),
                w = (0, I.Z)()
                    .propsFromState(() => ({ recentSearches: S }))
                    .propsFromActions(() => ({ addQuery: M.DI }))
                    .withAnalytics({ component: "list_search_box" }),
                P = o().j177067a,
                k = [c.my.Lists];
            const L = (0, l.ZP)(
                w(function (e) {
                    const [t, n] = a.useState(""),
                        r = (0, i.Zz)();
                    return a.createElement(d.default, {
                        filter: k,
                        initialValue: e.initialValue,
                        isCompact: r,
                        maxLists: e.maxItems ?? 20,
                        onItemClick: function (t) {
                            t.type === c.El.List && e.history.push(`/i/lists/${t.id}`);
                        },
                        onQueryChange: function (e) {
                            n(e);
                        },
                        onSubmit: function () {
                            e.history.push(`/i/lists/search?q=${t}`);
                        },
                        placeholder: P,
                        renderEmptyState: function (e) {
                            return a.createElement(g, e);
                        },
                        renderNoResultsState: function (e) {
                            return a.createElement(Z, (0, s.Z)({}, e, { query: t }));
                        },
                        rounded: !0,
                        source: c._4.ListManagementPage,
                        withFixedPositioning: !0,
                        withFocusStyling: !0,
                    });
                }),
            );
        },
        199127: (e, t, n) => {
            n.r(t), n.d(t, { MediaPickerWithPreview: () => l, default: () => d });
            var s = n(202784),
                a = n(850496),
                i = n(373554),
                r = n(668214),
                o = n(497294);
            const c = (0, r.Z)().propsFromActions(() => ({ addMedia: o.rA, processMultipleMedia: o.G$ }));
            class l extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: n, onChange: s, onFailure: a, processMultipleMedia: i } = this.props,
                                r = this._getAcceptedFileInputs(),
                                o = Array.from(e).find((e) => r.includes(e.type));
                            o &&
                                t([o], { location: n }).then((e) => {
                                    s && s(e.map((e) => e.id)), i(e, { onFailure: a });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, i.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": n, aspectRatio: i, borderRadius: r, currentContent: o, description: c, innerStyle: l, maskStyle: d, mediaItem: p, onCrop: h, onRemove: u, rootStyle: m } = this.props;
                    return s.createElement(a.Z, { acceptGifs: e, acceptVideo: t, "aria-label": n, aspectRatio: i, borderRadius: r, currentContent: o, description: c, innerStyle: l, maskStyle: d, mediaItem: p, onAddMediaFiles: this._handleAddMediaFiles, onCrop: h, onRemove: u, rootStyle: m, withDragDrop: !0 });
                }
            }
            l.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const d = c(l);
        },
        56851: (e, t, n) => {
            n.d(t, { Z: () => f });
            var s = n(202784),
                a = n(420740),
                i = n(108362),
                r = n(731708),
                o = n(154003),
                c = n(392237),
                l = n(111677),
                d = n.n(l),
                p = n(349035);
            const h = "error-detail",
                u = d().e49537c2,
                m = d().a9ae1e78;
            class f extends s.PureComponent {
                render() {
                    return s.createElement(a.Z, { testID: h }, s.createElement(p.Z, null), s.createElement(i.Z, { style: b.root }, s.createElement(r.ZP, { align: "center", color: "gray700", style: b.retryText }, u), s.createElement(o.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const b = c.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        288955: (e, t, n) => {
            n.d(t, { Z: () => c });
            var s = n(807896),
                a = n(202784),
                i = n(443781),
                r = n(369241);
            class o extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showLoginPrompt: !1 }),
                        (this._getHandler =
                            (e, t) =>
                            (n, ...s) => {
                                this.props.disabled || this.context.loggedInUserId ? e && e(n, ...s) : (n && n.preventDefault && n.preventDefault(), t && t(), this.setState({ showLoginPrompt: !0 }));
                            }),
                        (this._handleClose = () => {
                            this.setState({ showLoginPrompt: !1 });
                        });
                }
                render() {
                    const { children: e, disabled: t, ...n } = this.props;
                    return a.createElement(a.Fragment, null, e(this._getHandler), this.state.showLoginPrompt && a.createElement(r.ZP, (0, s.Z)({ onClose: this._handleClose }, n)));
                }
            }
            (o.defaultProps = { disabled: !1 }), (o.contextType = i.rC);
            const c = o;
        },
        836640: (e, t, n) => {
            n.d(t, { J: () => b });
            n(136728);
            var s = n(214636),
                a = n(202784),
                i = n(614983),
                r = n.n(i),
                o = (n(585488), n(277660)),
                c = n.n(o),
                l = n(107267),
                d = n(673510),
                p = n(44527),
                h = n(663550),
                u = n(409438),
                m = n(443781);
            const f = s.Z;
            function b(e) {
                const t = c()(f, e.user),
                    { avatar: n, core: s, legacy: i, privacy: o, relationship_perspectives: u, verification: b } = t,
                    g = t.identity_profile_labels_highlighted_label?.label ? (0, p.H)(t.identity_profile_labels_highlighted_label.label) : void 0,
                    { cellClickable: _, decoration: v, displayMode: C } = e,
                    y = (function () {
                        const { viewerUserId: e } = a.useContext(m.rC);
                        return r()(!!e, "viewerUserId is undefined!"), e;
                    })(),
                    Z = (0, l.useHistory)(),
                    E = a.useCallback(() => ("function" == typeof v ? v({ displayMode: C, viewerUserId: y, userId: i?.id_str ?? "" }) : v), [v, y, i, C]),
                    I = a.useCallback(() => {
                        s?.screen_name && Z.push({ pathname: `/${s.screen_name}` });
                    }, [Z, s]);
                return a.createElement(d.ZP, { affiliateBadgeInfo: g, avatarUri: n?.image_url || "", decoration: E(), displayMode: "UserDetailed", displayNameLabel: e.displayNameLabel, isBlueVerified: !!t.is_blue_verified, isFollowedBy: u?.followed_by ?? !1, isProtected: o?.protected ?? !1, isVerified: b?.verified ?? !1, name: s?.name || "", onCellClick: _ ? I : void 0, promotedItemType: h.bj.USER, screenName: s?.screen_name || "", userId: i?.id_str ?? "", verifiedType: b?.verified_type ?? void 0, withFollowsYou: !0 });
            }
            b.defaultProps = { cellClickable: !0, decoration: null, displayMode: u.Z.UserCompact };
        },
        73834: (e, t, n) => {
            n.d(t, { e: () => i });
            var s = n(615656),
                a = n(51525);
            const i = { [s.ZP.GenericNotFound]: { customAction: a.vv } };
        },
        666670: (e, t, n) => {
            n.d(t, { F: () => r });
            var s = n(516951),
                a = n(615656),
                i = n(51525);
            const r = { [a.ZP.AddressBookLookupNotFound]: { customAction: i.vv }, [a.ZP.GenericUserNotFound]: { customAction: s.Z }, [a.ZP.OtherUserSuspended]: { customAction: s.Z }, showToast: !0 };
        },
        876963: (e, t, n) => {
            n.d(t, { Z: () => d });
            var s = n(263428),
                a = (n(585488), n(483557)),
                i = n(703710),
                r = n(750085),
                o = n(218951);
            const c = (e) => ({ getEndpoint: (e) => e.withEndpoint(a.ZP).fetchCombinedLists, getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, userId: e }) }),
                l = (e) => ({ query: s.Z, variables: ({ count: t, cursor: n }, s) => ({ count: t, cursor: "string" == typeof n ? n : void 0, isListMemberTargetUserId: "0", userId: e, timelineId: `combinedListsGraphQL-${e}`, ...(0, i.d)(s.apiClient.featureSwitches) }) }),
                d = (e, t) => (0, o.Z)({ context: "FETCH_COMBINED_LISTS", formatResponse: r.Z, network: "redux" === t ? c(e) : l(e), initialFetchCount: 100, perfKey: "combinedListsGraphQL", timelineId: `combinedListsGraphQL-${e}` });
        },
        204744: (e, t, n) => {
            n.d(t, { DI: () => C, H$: () => h, OB: () => y, Ww: () => d, YB: () => p, hj: () => b, qF: () => _ });
            n(901951);
            var s = n(499627),
                a = n(390387);
            const i = "recentSearches",
                r = "rweb.recentSearches",
                o =
                    (e) =>
                    (t, n, { userPersistence: s }) =>
                        s.set(r, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                c = (e, t) => {
                    let n = [];
                    if (e.user) {
                        const s = e.user;
                        n = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== s.id));
                    } else if (e.event) {
                        const s = e.event;
                        n = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== s.id));
                    } else if (e && e.keyword) {
                        const s = e.keyword;
                        n = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== s.query));
                    } else if (e.list) {
                        const s = e.list;
                        n = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== s.id));
                    } else if (e.topic) {
                        const s = e.topic;
                        n = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== s.id));
                    }
                    return n;
                },
                l = { fetched: !1, recentSearches: [] };
            const d = (e) => e[i].recentSearches,
                p = (e) => d(e)[0] || null,
                h = (e) => e[i].fetched,
                u = "rweb/recentSearches/INIT_FROM_CACHE",
                m = (e) => ({ type: u, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                b =
                    (e) =>
                    (t, n, { userPersistence: s }) => {
                        t({ payload: e, type: f });
                        const i = n(),
                            r = d(i);
                        return (0, a.Qb)(i) ? t(o(r)) : Promise.resolve();
                    },
                g = "rweb/recentSearches/CLEAR_ALL",
                _ =
                    () =>
                    (e, t, { userPersistence: n }) => {
                        e({ type: g });
                        const s = t(),
                            i = d(s);
                        return (0, a.Qb)(s) ? e(o(i)) : Promise.resolve();
                    },
                v = "rweb/recentSearches/ADD_QUERY",
                C =
                    (e) =>
                    (t, n, { userPersistence: s }) => {
                        t({ payload: e, type: v });
                        const i = n(),
                            r = d(i);
                        return (0, a.Qb)(i) ? t(o(r)) : Promise.resolve();
                    },
                y =
                    () =>
                    (e, t, { userPersistence: n }) => {
                        const s = t();
                        return h(s)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: n }) => {
                                  const s = t();
                                  return (0, a.Qb)(s)
                                      ? n
                                            .get(r)
                                            .then((t) => {
                                                e(m(t));
                                            })
                                            .catch(() => {
                                                e(m());
                                            })
                                      : (e(m()), Promise.resolve());
                              });
                    };
            s.Z.register({
                [i]: function (e = l, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case v: {
                            const n = t.payload,
                                s = n ? c(n, e.recentSearches) : [];
                            return s.length > 49 && s.splice(49, 1), n && s.unshift(n), { ...e, recentSearches: s };
                        }
                        case f: {
                            const n = t.payload,
                                s = n ? c(n, e.recentSearches) : [];
                            return { ...e, recentSearches: s };
                        }
                        case g:
                            return { fetched: !0, recentSearches: [] };
                        case u:
                            return { ...e, ...t.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        783284: (e, t, n) => {
            n.d(t, { Z: () => r });
            var s = n(644829),
                a = n(750085),
                i = n(218951);
            function r(e) {
                return (0, i.Z)({ timelineId: "list-search-timeline", context: "FETCH_LIST_SEARCH_TIMELINE", formatResponse: a.Z, network: { getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, rawQuery: e }), getEndpoint: (e) => e.withEndpoint(s.Z).fetchListSearch }, perfKey: "list-search" });
            }
        },
        412171: (e, t, n) => {
            n.d(t, { Z: () => r });
            var s = n(483557),
                a = n(750085),
                i = n(218951);
            const r = () => (0, i.Z)({ timelineId: "listsDiscoveryGraphQL", network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchSuggestedLists, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_LISTS_DISCOVERY", perfKey: "listsDiscoveryGraphQL", formatResponse: a.Z });
        },
        688781: (e, t, n) => {
            n.d(t, { DK: () => l, ZP: () => o, i7: () => c });
            n(136728);
            var s = n(483557),
                a = n(750085),
                i = n(466015),
                r = n(218951);
            const o = ({ displayLocation: e, listDescription: t, listId: n, listName: i }) => (0, r.Z)({ timelineId: `listSuggestedUsers-graphQL-${n}`, network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchRecommendedUsersGraphQL, getEndpointParams: ({ count: t, cursor: s }) => ({ listId: n, count: t, cursor: "string" == typeof s ? s : void 0, displayLocation: e }) }, formatResponse: a.Z, context: "FETCH_LIST_SUGGESTED_USERS_GRAPHQL", perfKey: "suggestedUsersGraphQL" }),
                c = (e, t) => (n) => {
                    const s = (0, i.OD)(e),
                        a = (0, i.$0)({ entryId: s, id: e, sortIndex: Date.now().toString() });
                    n(t.injectEntry(a));
                },
                l = (e, t, n) => (s) => {
                    const a = [];
                    n.map((n) => {
                        a.push(e.removeEntry((0, i.OD)(n))), a.push(t.injectEntry((0, i.$0)({ id: n, sortIndex: Date.now().toString() })));
                    }),
                        s(a);
                };
        },
        506653: (e, t, n) => {
            n.d(t, { Z: () => r });
            var s = n(483557),
                a = n(750085),
                i = n(218951);
            const r = ({ listId: e, useRanked: t = !1 }) => (0, i.Z)({ timelineId: o({ listId: e, useRanked: t }), network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchTweetsGraphQL, getEndpointParams: ({ count: n, cursor: s }) => ({ listId: e, count: n, cursor: "string" == typeof s ? s : void 0, useRanked: t }) }, formatResponse: a.Z, context: "FETCH_LIST_TIMELINE_GRAPHQL", perfKey: "listTweetsGraphQL" });
            function o({ listId: e, useRanked: t = !1 }) {
                return `listTweets-GraphQL-${e}-${t ? "ranked" : "latest"}`;
            }
        },
        127218: (e, t, n) => {
            n.d(t, { C: () => g });
            var s = n(202784),
                a = n(614983),
                i = n.n(a),
                r = n(437429),
                o = n.n(r),
                c = n(57074),
                l = n.n(c),
                d = n(10622),
                p = n.n(d),
                h = n(585488),
                u = n(71620),
                m = n(163889),
                f = n(312771),
                b = n(535338);
            function g(e, t, n) {
                const [a, r] = s.useState(!1),
                    [c, d] = s.useState(null),
                    g = o()(),
                    _ = l()(t),
                    v = (0, u.po)(),
                    C = (0, b.p)(e, _, n);
                return s.useMemo(() => {
                    const t = (0, h.getRequest)(e).params?.metadata?.sliceInfoPath;
                    i()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: n, previous_cursor: s } =
                            (function (e, t) {
                                try {
                                    i()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let n = e;
                                    for (const e of t) i()(!!n, "The provided path is invalid."), i()("string" == typeof e, "Unexpected value for path!"), (n = n?.[e]);
                                    return n;
                                } catch (e) {
                                    return void (0, m.ZP)(e.message);
                                }
                            })(C, t) || {},
                        o = (t) => {
                            a ||
                                (r(!0),
                                p()(g, e, { ..._, cursor: t }).subscribe({
                                    complete: () => {
                                        r(!1);
                                    },
                                    error: (e) => {
                                        r(!1), d(e), v(e);
                                    },
                                }));
                        },
                        l = () => {
                            n && o(n);
                        },
                        u = () => {
                            s && o(s);
                        },
                        b = () => {
                            o(void 0);
                        };
                    return c ? { subsequentFetchStatus: f.ZP.FAILED, error: c, fetchNext: l, fetchPrevious: u, refetch: b, data: C, hasNext: Boolean(n), hasPrevious: Boolean(s) } : { subsequentFetchStatus: a ? f.ZP.LOADING : f.ZP.NONE, error: void 0, fetchNext: l, fetchPrevious: u, refetch: b, data: C, hasNext: Boolean(n), hasPrevious: Boolean(s) };
                }, [e, C, a, c, g, _, v]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-e019dbda.eebe713a.js.map
