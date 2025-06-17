"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-e019dbda", "loader.MediaPickerWithPreview", "loader.FeedbackSheet"],
    {
        229333: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                s = n(466999),
                i = n(325686),
                r = n(392237),
                o = n(111677);
            const c = n.n(o)().e5b0063d;
            let l = 0;
            class d extends a.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${l}`), (l += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = c({ title: t });
                    return a.createElement(i.Z, { "aria-labelledby": this._listDomId, role: "region" }, a.createElement(s.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: r.default.visuallyHidden }, t), a.createElement(i.Z, { "aria-label": n }, e));
                }
            }
            const p = d;
        },
        399887: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(202784),
                s = n(154003),
                i = n(111677),
                r = n.n(i),
                o = n(437358);
            const c = () => {
                const e = r().d2826908,
                    t = r().c80cb4e4;
                return a.createElement(s.ZP, { "aria-label": e, hoverLabel: { label: t }, icon: a.createElement(o.default, null), link: "/i/lists/create", pullRight: !0, type: "primaryText" });
            };
        },
        774426: (e, t, n) => {
            n.r(t), n.d(t, { default: () => p });
            n(136728);
            var a = n(202784),
                s = n(811176),
                i = n(190286),
                r = n(111677),
                o = n.n(r),
                c = n(912021);
            const l = o().cfd2f35e;
            class d extends a.Component {
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
                        (this._getMemoizedProcessedActionItems = (0, c.Z)((e, t, n, a) =>
                            e.reduce((e, { Icon: s, confirmation: i, disabled: r, excludeFromActionMenu: o, isEmphasized: c, link: l, onClick: d, subText: p, testID: u, text: h, withCancelButton: m }, f) => {
                                if (!o) {
                                    const o = d
                                        ? () => {
                                              i ? (i.render ? a({ cancelCallback: i.onCancel, confirmCallback: d, render: i.render }) : a({ cancelCallback: i.onCancel, confirmCallback: d, text: i.text, headline: i.headline, label: i.label, confirmButtonType: i.confirmButtonType, withCancelButton: i.withCancelButton })) : (d(), n());
                                          }
                                        : n;
                                    e.push({ disabled: r, Icon: s, isEmphasized: c, testID: u, subText: p, text: h, onClick: o, link: l, withBottomBorder: t && t.includes(f) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : a.createElement(s.Z, { cancelButtonLabel: l, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: n, label: s, text: r, withCancelButton: o } = e || {};
                        return a.createElement(i.Z, { confirmButtonLabel: s, confirmButtonType: t, headline: n, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: r, withCancelButton: o });
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
            var a = n(202784),
                s = n(325686),
                i = n(392237);
            class r extends a.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return a.createElement(s.Z, { style: o.root });
                }
            }
            const o = i.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                c = r;
        },
        789831: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(807896),
                s = n(202784),
                i = n(325686),
                r = n(392237),
                o = n(655352);
            const c = r.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                l = ({ children: e, component: t, fab: n, shouldRenderFab: r = !0, style: l, withoutBottomPadding: d, ...p }) => {
                    const u = t || i.Z,
                        h = r && !(0, o.ZP)();
                    return s.createElement(u, (0, a.Z)({}, p, { style: [h && !d && c.root, l] }), e, h ? n : null);
                };
        },
        850496: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(202784),
                s = n(325686),
                i = n(731708),
                r = n(15038),
                o = n(154003),
                c = n(682474),
                l = n(392237),
                d = n(111677),
                p = n.n(d),
                u = n(293615),
                h = n(837020),
                m = n(219229),
                f = n(373554),
                b = n(304059),
                g = n(751170);
            const _ = p().b87ca51a,
                C = p().eebff22c,
                v = a.createElement(u.default, null);
            class y extends a.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: n, maskStyle: o, mediaItem: c, onAddMediaFiles: l, onCrop: d, onRemove: p, rootStyle: u, withDragDrop: h } = this.props,
                        m = c && !c.uploader,
                        f = a.createElement(a.Fragment, null, this._renderPreview(), m ? null : a.createElement(a.Fragment, null, a.createElement(s.Z, { style: [E.mask, o, Z[e]] }), a.createElement(s.Z, { style: [E.overlaidContent, n] }, a.createElement(s.Z, { style: E.buttonsContainer }, this._renderMediaEdit(), d ? this._renderMediaCrop() : null, p ? this._renderMediaRemove() : null), t ? a.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext1", style: E.description }, t) : null)));
                    return a.createElement(s.Z, { style: [E.container, u, Z[e]] }, h && l ? a.createElement(r.ZP, { onFilesAdded: l, style: [E.dragDropContainer, Z[e]] }, f) : f);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return a.createElement(o.ZP, { "aria-label": _, hoverLabel: { label: _ }, icon: a.createElement(h.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return a.createElement(o.ZP, { "aria-label": C, icon: a.createElement(m.default, null), onPress: e, size: "large", style: E.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": n, icon: s, multiple: i, onAddMediaFiles: r, onEdit: c } = this.props;
                    return r ? a.createElement(f.Z, { acceptGifs: e, acceptVideo: t, "aria-label": n, icon: s, multiple: i, onChange: r, size: "large", style: E.mediaPicker, type: "onMediaDominantColorFilled" }) : a.createElement(o.ZP, { "aria-label": n, icon: s, onPress: c, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: n, mediaItem: s } = this.props;
                    return s ? a.createElement(c.Z, { ratio: e }, a.createElement(b.Z, { borderRadius: t, enableGif: !1, mediaItem: s, style: E.mediaPreview, withCloseButton: !1 })) : n;
                }
            }
            y.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: g.A.NONE, icon: v };
            const Z = l.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                E = l.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        370111: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                s = n(111677),
                i = n.n(s),
                r = n(330815);
            const o = i().b7fb6bda,
                c = i().e71cdf4e,
                l = Object.freeze({ NotStarted: "not_started", Started: "started", Completed: "completed" });
            function d({ aspectRatio: e, media: t, onCancel: n, onCropDone: s }) {
                const [i, d] = a.useState({ status: "not_started" }),
                    [p, u] = a.useState(!1),
                    [h, m] = a.useState(!1),
                    { croppedMediaId: f, status: b } = i;
                a.useEffect(() => {
                    b === l.NotStarted && (u(!0), d({ status: "started" })), b === l.Completed && t.id !== f && d({ status: "not_started", croppedMediaId: void 0 });
                }, [b, t, f]);
                const g = a.useCallback(() => {
                        u(!1), d({ status: l.Completed, croppedMediaId: t.id }), n();
                    }, [n, t]),
                    _ = a.useCallback(() => {
                        u(!1), m(!0);
                    }, []),
                    C = a.useCallback(() => {
                        m(!1), u(!0);
                    }, []),
                    v = a.useCallback(() => {
                        m(!1);
                    }, []),
                    y = a.useCallback(
                        (e) => {
                            d({ status: l.Completed, croppedMediaId: t.id }), s?.(e);
                        },
                        [s, t],
                    ),
                    Z = { ...t, id: Number.MAX_SAFE_INTEGER, originalMediaFile: t.mediaFile, cropData: void 0 };
                return a.createElement(a.Fragment, null, p ? a.createElement(r.Z, { defaultAspectRatio: e, media: t, onCancel: g, onDone: _, title: o }) : null, h ? a.createElement(r.Z, { defaultAspectRatio: 1, media: Z, onCancel: C, onCropDone: y, onDone: v, title: c }) : null);
            }
        },
        965245: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(807896),
                s = n(202784),
                i = n(229333),
                r = n(414939),
                o = n(334346);
            const c = ({ accessibilityTitle: e, footer: t = s.createElement(r.Z, null), ...n }) => {
                const c = s.createElement(o.C, (0, a.Z)({}, n, { footer: t }));
                return e ? s.createElement(i.Z, { title: e }, c) : c;
            };
        },
        349035: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                s = n(272175);
            const i = (0, n(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), a.createElement(s.ql, null, a.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(807896),
                s = n(202784),
                i = n(107267),
                r = n(403556),
                o = n(791632);
            const c = (e) => {
                    const t = (0, i.useHistory)(),
                        { isCompact: n, ...c } = e;
                    return s.createElement(r.Z, (0, a.Z)({}, c, { isCompact: n || (0, o.HD)(t) }));
                },
                l = s.memo(c);
        },
        131779: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                s = n(154003),
                i = n(111677),
                r = n.n(i),
                o = n(320588),
                c = n(71620),
                l = n(668214),
                d = n(576469);
            const p = (0, l.Z)()
                    .propsFromActions(() => ({ removeUserFromList: d.Z.removeUserFromList, addUserToList: d.Z.addUserToList, createLocalApiErrorHandler: (0, c.zr)("ADD_REMOVE_BUTTON") }))
                    .withAnalytics({ component: "user" }),
                u = r().e68b09b4,
                h = r().af40a8e0;
            class m extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAddButton = () => a.createElement(s.ZP, { "aria-label": h, onPress: this._handleAdd, size: "small", type: "primaryFilled" }, h)),
                        (this._renderRemoveButton = () => a.createElement(s.ZP, { "aria-label": u, onPress: this._handleRemove, size: "small", type: "destructiveFilled" }, u)),
                        (this._handleAdd = () => {
                            const { addUserToList: e, createLocalApiErrorHandler: t, listId: n, onAdd: a, shouldAddUserToList: s, userId: i } = this.props;
                            s()
                                ? (e(n, { userId: i, shouldInjectURTEntry: !1 })
                                      .then(() => {
                                          a && a(i);
                                      })
                                      .catch(t(o.Mt)),
                                  this._scribeAction("add"))
                                : a && a(i);
                        }),
                        (this._handleRemove = () => {
                            const { createLocalApiErrorHandler: e, listId: t, onRemove: n, removeUserFromList: a, userId: s } = this.props;
                            a(t, { userId: s, shouldRemoveURTEntry: !1 })
                                .then(() => {
                                    n && n(s);
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
            var a = n(202784),
                s = n(325686),
                i = n(834324),
                r = n(392237),
                o = n(111677),
                c = n.n(o),
                l = n(125363),
                d = n(390387),
                p = n(919022);
            const u = c().aacfbe55,
                h = c().ga8627cd,
                m = c().e6d2573f,
                f = c().d37a3e15,
                b = (e) => {
                    const { isReply: t, style: n, type: r } = e,
                        o = (0, l.v9)(d.Lz),
                        c = (0, l.v9)(p.ZP.selectViewerUser),
                        b = o ? c?.screen_name : void 0,
                        _ = a.useMemo(() => [g.root, n], [n]);
                    let C = u({ screenName: b });
                    return "Tweet" === r && t ? (C = h({ screenName: b })) : "DM" === r ? (C = m({ screenName: b })) : "List" === r && (C = f({ screenName: b })), b ? a.createElement(s.Z, { style: _ }, a.createElement(i.Z, { text: C })) : null;
                },
                g = r.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space12 } }));
        },
        387524: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(807896),
                s = n(202784),
                i = n(325686),
                r = n(292627),
                o = n(537392),
                c = n(392237),
                l = n(365023),
                d = n(392027),
                p = n(774654),
                u = n(725516),
                h = n(443781);
            const m = c.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${c.default.iPhoneOffsetBottom} - ${p.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                f = (e) => {
                    const { "aria-label": t, label: n, onPress: f, scribeComponent: b, ...g } = e,
                        { loggedInUserId: _ } = s.useContext(h.rC),
                        C = (0, u.z)(),
                        v = s.useCallback(
                            (e) => {
                                C.scribe({ component: b, action: "click" }), f && f(e);
                            },
                            [C, f, b],
                        ),
                        y = p.ZM.useCollapsibleNavBars(),
                        Z = [...p.Ah({ elementPosition: "bottom" }), y && m.fabStaysAboveSafeArea];
                    return _
                        ? s.createElement(
                              r.Z.FloatingAction,
                              null,
                              s.createElement(o.ZP, null, ({ windowWidth: e }) => {
                                  const r = e > c.default.theme.breakpoints.large,
                                      o = e > c.default.theme.breakpoints.medium,
                                      p = e < c.default.theme.breakpoints.micro,
                                      u = [m.root, o && m.rootMedium, r && m.rootLarge],
                                      h = [m.fab, r && m.fabLarge, p && m.fabMicro, Z];
                                  return s.createElement(
                                      i.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: u },
                                      s.createElement(l.Z, { id: "FloatingActionButtonBase" }, (e, o) => s.createElement(i.Z, (0, a.Z)({ ref: e() }, o({ style: h })), s.createElement(d.Z, (0, a.Z)({}, g, { "aria-label": t, label: r ? n : void 0, onPress: v, style: p && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, n) => {
            n.d(t, { Z: () => c });
            n(136728);
            var a = n(202784),
                s = n(387524),
                i = n(635510);
            const r = "/compose/post";
            class o extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: n } = this.props,
                                a = { pathname: r, state: (t && t()) || {} };
                            n.push(a);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: n, scribeComponent: o } = this.props;
                    return a.createElement(s.Z, { "aria-label": e, href: r, icon: t, label: n, onPress: this._handlePress, scribeComponent: o, testID: i.Z.tweet });
                }
            }
            const c = o;
        },
        32677: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                s = n(111677),
                i = n.n(s),
                r = n(186444),
                o = n(355883);
            const c = i().j0179e90,
                l = i().ee69d769({ verb: "" }),
                d = a.createElement(r.default, null),
                p = ({ getLocationState: e, history: t }) => a.createElement(o.Z, { "aria-label": c, getLocationState: e, history: t, icon: d, label: l, scribeComponent: "floating_compose_button" });
        },
        841993: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(202784),
                s = n(111677),
                i = n.n(s),
                r = n(437358),
                o = n(725516),
                c = n(387524),
                l = n(635510);
            const d = i().d2826908,
                p = i().c80cb4e4,
                u = a.createElement(r.default, null),
                h = (e) => {
                    const { page: t } = e,
                        n = (0, o.z)(),
                        s = a.useCallback(
                            (e) => {
                                n.scribe({ page: t, component: "floating_action_button", element: "create_list_button", action: "click" });
                            },
                            [t, n],
                        );
                    return a.createElement(c.Z, { "aria-label": d, href: "/i/lists/create", icon: u, label: p, onPress: s, scribeComponent: "floating_list_button", testID: l.Z.createList });
                };
        },
        635510: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        330815: (e, t, n) => {
            n.d(t, { Z: () => M });
            var a = n(202784),
                s = n(392237),
                i = n(154003),
                r = n(111677),
                o = n.n(r),
                c = n(184605),
                l = n(980407),
                d = n(873637),
                p = n(668214),
                u = n(497294);
            const h = (e, t) => (t.media ? t.media : (0, c.Z)(t.mediaId) ? (0, u.m3)(e, t.mediaId)[0] : void 0),
                m = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                f = (0, p.Z)()
                    .propsFromState(() => ({ media: h, mediaId: m }))
                    .propsFromActions(() => ({ processMedia: u.C4, updateMediaUpload: u._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                b = "applyButton",
                g = o().gd80afba,
                _ = o().a753a870;
            class C extends a.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return a.createElement(i.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: b, type: "primaryFilled" }, _);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: n, media: a, mediaId: s, onDone: i, processMedia: r, updateMediaUpload: o } = this.props;
                                this.setState({ isProcessing: !0 });
                                const l = t.getCropData(),
                                    { originalMediaFile: d } = a || {},
                                    p = !d || (0 === l.top && 0 === l.left && l.width === d.width && l.height === d.height);
                                (0, c.Z)(s) &&
                                    (e
                                        ? (e(l), i())
                                        : (o({ id: s, cropData: p ? void 0 : l }),
                                          r(s).then(() => {
                                              this.setState({ isProcessing: !1 }), n.scribe({ action: "done" }), i();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = a.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: n, withAspectRatioOptions: s, withZoomControl: i } = this.props,
                        r = this._getMedia();
                    return a.createElement(l.Z, { backButtonType: "back", containerStyle: v.root, documentTitle: n || g, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: n || g }, a.createElement(d.Z, { defaultAspectRatio: e, media: r, ref: this._cropper, withAspectRatioOptions: s, withZoomControl: i }));
                }
            }
            const v = s.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                y = f(C);
            var Z = n(757700);
            const E = s.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                M = (e) => a.createElement(Z.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: E.modal }, a.createElement(y, e));
        },
        935167: (e, t, n) => {
            n.d(t, { ZP: () => W });
            n(136728);
            var a = n(202784),
                s = n(325686),
                i = n(601413),
                r = n(392237),
                o = n(111677),
                c = n.n(o),
                l = n(415506),
                d = n(170397),
                p = n(516951),
                u = n(805104),
                h = n(774426),
                m = n(376293),
                f = n(712816),
                b = n(879596),
                g = n(395067),
                _ = n(443781),
                C = n(688715),
                v = n(907552),
                y = n(668214),
                Z = n(576469),
                E = n(601576);
            const M = (e, t) => Z.Z.selectListAuthorScreenName(e, t.list.id_str),
                I = (0, y.Z)()
                    .propsFromState(() => ({ author: M }))
                    .propsFromActions(() => ({ addToast: E.fz }))
                    .withAnalytics(),
                S = c().i6da4f7a,
                w = c().a062ff80;
            const k = I(function (e) {
                    const {
                            list: { id_str: t },
                            scribeNamespace: n,
                        } = e,
                        s = ((i = t), (0, C.ju)(`https://x.com/i/lists/${i}`));
                    var i;
                    return a.createElement(v.ZP, { copyLinkShareLabel: w, externalShareLabel: S, scribeNamespace: n, url: s });
                }),
                P = k;
            var L = n(71620),
                A = n(286e3),
                R = n(390387),
                x = n(919022),
                B = n(510588);
            const T = (0, y.Z)()
                .propsFromState(() => ({ author: B.l1, basePath: B.$5, viewerUserId: R._h, isSubscribed: B.cx, list: B.Fz, useRanked: B._g }))
                .propsFromActions(() => ({ addToast: E.fz, block: x.ZP.block, createLocalApiErrorHandler: (0, L.zr)("LIST_ACTIONS"), toggleMute: Z.Z.toggleMute, unblock: x.ZP.unblock, updateRankMode: A.Rc }))
                .withAnalytics({ page: "spheres_detail" });
            var F = n(638537);
            c().a9ca06d2;
            const D = c().h63a5c3c,
                U = c().a367dc9a,
                N = c().dd438748,
                z = c().fe7e217c,
                H = c().ce78b698,
                G = c().i5a1628a,
                O = c().f333a93e,
                $ = c().c7294984,
                Q = c().g6340998,
                V = (e) => a.createElement(c().I18NFormatMessage, { $i18n: "aa4026bf" }, a.createElement(i.Z, { screenName: e }));
            class q extends a.Component {
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
                            return this.props.listId && e.length > 0 ? a.createElement(u.Z, { "aria-label": D, onPress: this._handleOverflowMenuPress, renderMenu: this._renderActionMenu, style: j.overflowMenu }) : null;
                        }),
                        (this._handleOverflowMenuPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ element: "more", action: "click" });
                        }),
                        (this._renderActionMenu = (e) => (this.props.listId ? this._renderCurationActionMenu(e) : null)),
                        (this._renderCurationActionMenu = (e) => {
                            const t = this._getActionMenuItems();
                            return a.createElement(h.default, { actionItems: t, onClose: e });
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
                                { featureSwitches: a } = this.context,
                                s = g.C2.List;
                            if ((0, g.Yw)(a, s)) {
                                const n = (0, g.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: s, reportedList: t, reportedUser: t?.user, scribeNamespace: e.contextualScribeNamespace });
                                return { text: $, Icon: l.default, onClick: p.Z, link: { pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(n) } } } };
                            }
                            return { text: $, Icon: l.default, onClick: p.Z, link: { pathname: `/i/report/list/${n}`, state: { clientReferer: window.location.pathname, scribeNamespace: e.contextualScribeNamespace } } };
                        }),
                        (this._getUserBlockAction = () => {
                            const { author: e } = this.props;
                            if (e) return (0, m.op)({ blockAction: this._handleBlockUser, blockSubtext: V, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), source: m.SC.LIST_DETAIL, unblockAction: this._handleUnblockUser, unblockSubtext: Q, user: e });
                        }),
                        (this._getMuteToggleAction = () => {
                            const { addToast: e, analytics: t, isSubscribed: n, list: a, toggleMute: s } = this.props;
                            if (a && n && this._isMutingEnabled) return (0, F.Z)({ list: a, addToast: e, toggleMute: s, scribe: (e) => t.scribe({ component: "customize", ...e }) });
                        }),
                        (this._getSwitchRankModeAction = () => {
                            const { useRanked: e } = this.props;
                            return { text: e ? z : G, Icon: d.default, onClick: this._handleSwitchRankMode, subText: e ? H : O };
                        }),
                        (this._handleBlockUser = () => {
                            const { addToast: e, analytics: t, author: n, block: a, createLocalApiErrorHandler: s } = this.props;
                            n &&
                                (a(n.id_str, { promotedContent: n.promoted_content }).then(() => {
                                    e({ action: { label: m.Vt, onAction: this._handleUnblockUser }, text: m.KV });
                                }, s(f.d)),
                                t.scribe({ action: "block" }));
                        }),
                        (this._handleUnblockUser = () => {
                            const { analytics: e, author: t, createLocalApiErrorHandler: n, unblock: a } = this.props;
                            t && (a(t.id_str, { promotedContent: t.promoted_content }).catch(n(b.D)), e.scribe({ action: "unblock" }));
                        }),
                        (this._handleSwitchRankMode = () => {
                            const { addToast: e, analytics: t, listId: n, updateRankMode: a, useRanked: s } = this.props,
                                i = s ? U : N,
                                r = s ? "see_latest" : "see_top";
                            a({ listId: n, useRanked: !s }).then(() => {
                                e({ text: i });
                            }),
                                t.scribe({ action: "click", component: "customize", element: r });
                        });
                }
                render() {
                    const { list: e, scribeNamespace: t } = this.props;
                    return a.createElement(s.Z, { style: j.rightControl }, e ? a.createElement(P, { list: e, scribeNamespace: t }) : null, this._renderOverflowMenu());
                }
            }
            q.contextType = _.rC;
            const j = r.default.create((e) => ({ listInfoButton: { marginStart: e.spaces.space4 }, overflowMenu: { marginStart: e.spaces.space4 }, rightControl: { alignItems: "center", flexDirection: "row" } })),
                W = T(q);
        },
        583957: (e, t, n) => {
            n.d(t, { Z: () => Q });
            n(136728);
            var a = n(202784),
                s = n(325686),
                i = n(733357),
                r = n(682474),
                o = n(392237),
                c = n(530525),
                l = n(439592),
                d = n(855488),
                p = n(954110),
                u = n(111677),
                h = n.n(u),
                m = n(401388),
                f = n(615656),
                b = n(370111),
                g = n(716233),
                _ = n(166677),
                C = n(538327),
                v = n(443781),
                y = n(199127),
                Z = n(184605),
                E = n(71620),
                M = n(668214),
                I = n(576469),
                S = n(497294),
                w = n(601576),
                k = n(510588);
            const P = (e, t) => {
                    const n = I.Z.selectLocalMediaId(e, t.listId || "-1"),
                        [a] = (0, Z.Z)(n) ? S.m3(e, n) : [];
                    return a;
                },
                L = (e, t) => {
                    const { listId: n } = t;
                    return n ? k.tt(e, n) : void 0;
                },
                A = (e, t) => {
                    const { listId: n } = t,
                        a = n && I.Z.select(e, n);
                    return a ? a.defaultBanner : void 0;
                },
                R = (e, t) => t.location.state?.suggestedUser,
                x = (0, M.Z)()
                    .propsFromState(() => ({ suggestedUser: R, uploadedMedia: P, customMedia: L, defaultMedia: A }))
                    .propsFromActions(({ context: e }) => ({ createLocalApiErrorHandler: (0, E.zr)(e), addToast: w.fz, addLocalMediaId: I.Z.addLocalMediaId, createList: I.Z.createList, deleteListMedia: I.Z.deleteListMedia, editList: I.Z.editList, editListMedia: I.Z.editListMedia, removeMediaUpload: S.WU, removeLocalMediaId: I.Z.removeLocalMediaId }))
                    .withAnalytics(),
                B = "public",
                T = "private",
                F = h().d4e220b4,
                D = h().e36287c6,
                U = h().f30edc68,
                N = h().df31d76a,
                z = h().h51a2cf6,
                H = h().bb10280e,
                G = h().h8885a22,
                O = h().f8132984;
            class $ extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._hasListDataChanged = () => {
                            const { description: e, isPrivate: t, name: n } = this.state,
                                { list: a } = this.props,
                                s = a?.mode === T;
                            return e !== a?.description || n !== a?.name || t !== s;
                        }),
                        (this._hasMediaChanged = () => {
                            const { uploadedMedia: e } = this.props,
                                { shouldDeleteBanner: t } = this.state;
                            return !!e?.uploader || t;
                        }),
                        (this.save = () => {
                            const { description: e, isPrivate: t, name: n, shouldDeleteBanner: a } = this.state,
                                { analytics: s, createLocalApiErrorHandler: i, deleteListMedia: r, editList: o, list: c, listId: l } = this.props;
                            this.setState({ isSaving: !0 }), s.scribeAction("save");
                            const d = [];
                            if (a && l) {
                                const e = r(l).catch(i({ defaultToast: { text: z }, showToast: !0 }));
                                d.push(e);
                            }
                            if ((this._hasMediaChanged() && c && d.push(this._handleUploadMedia(c)), this._hasListDataChanged() && l)) {
                                const a = o(l, { description: e, mode: t ? T : B, name: n }).catch(i({ defaultToast: { text: H }, showToast: !0, [f.ZP.ValidationFailure]: { customAction: this._handleListUpdateFailure } }));
                                d.push(a);
                            }
                            Promise.all(d).then(() => {
                                this.state.nameError || this._goBackToListDetail();
                            }),
                                this.setState({ isSaving: !1 });
                        }),
                        (this.create = () => {
                            const { description: e, isPrivate: t, name: n } = this.state,
                                { analytics: a, createList: s, createLocalApiErrorHandler: i, onError: r, suggestedUser: o } = this.props,
                                c = t ? T : B;
                            this.setState({ isSaving: !0 }),
                                a.scribeAction("create"),
                                s({ name: n, description: e, mode: c }).then(
                                    (e) =>
                                        e &&
                                        this._handleUploadMedia(e).then((e) => {
                                            if (e) {
                                                const { history: t } = this.props,
                                                    n = { pathname: `${e.uri}/members/suggested`, state: { previousStep: C.O.Creation, suggestedUser: o } };
                                                o ? t.push(n) : t.replace(n);
                                            }
                                        }),
                                    (e) => {
                                        r && r(), i({ defaultToast: { text: H }, showToast: !0, [f.ZP.ValidationFailure]: { customAction: this._handleListUpdateFailure } })(e);
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
                            const { editListMedia: t, removeMediaUpload: n, uploadedMedia: a } = this.props,
                                { iconCrop: s } = this.state,
                                i = e.id_str;
                            if (a && a.uploader && i) {
                                return t({ listId: i, mediaId: a.id, iconCrop: s }).then(() => (n(a.id), Promise.resolve(e)), this._handleMediaUpdateFailure(a, H));
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
                            const { addLocalMediaId: t, listId: n, uploadedMedia: a } = this.props;
                            a && this._clearBannerMedia(a.id), t({ listId: n || "-1", mediaId: e });
                        }),
                        (this._handleBannerMediaFailure = (e) => {
                            this._clearBannerMedia(e);
                        }),
                        (this._clearBannerMedia = (e) => {
                            const { removeMediaUpload: t, uploadedMedia: n } = this.props;
                            (n && n.uploading) || t(e), this.setState({ mediaId: void 0 });
                        }),
                        (this._handleMediaUpdateFailure = (e, t) => (n) => {
                            const { addToast: a, createLocalApiErrorHandler: s, removeMediaUpload: i } = this.props,
                                r = (0, _.$r)(n);
                            if (r) {
                                const e = (0, _.ZP)(r, t);
                                e && a(e);
                            } else s({ showToast: !0 })(n);
                            i(e.id), this.setState({ isSaving: !1 });
                        }),
                        (this._handleListUpdateFailure = (e) => {
                            this.setState({ nameError: e.message || G });
                        });
                    const { list: n } = e,
                        a = n?.name || "",
                        s = n?.description || "",
                        i = n?.mode === T;
                    this.state = { description: s, isPrivate: i, isSaving: !1, name: a, nameError: "", showConfirmation: !1, shouldDeleteBanner: !1 };
                }
                componentWillUnmount() {
                    const { listId: e, removeLocalMediaId: t, uploadedMedia: n } = this.props;
                    n && (this._clearBannerMedia(n.id), t(e || "-1"));
                }
                componentDidUpdate(e, t) {
                    const { onChange: n } = this.props,
                        { isSaving: a, name: s } = this.state;
                    n(!(!!(!s || !s.length || (0, i.Z)(s)) || (!this._hasListDataChanged() && !this._hasMediaChanged()) || a));
                }
                render() {
                    const { customMedia: e, defaultMedia: t, uploadedMedia: n } = this.props,
                        { description: i, isPrivate: u, name: h, nameError: f, shouldDeleteBanner: _ } = this.state,
                        C = !(0, m.Z)(e?.image),
                        v = _ || !C ? t?.image : e?.image,
                        Z = a.createElement(r.Z, { ratio: o.default.theme.aspectRatios.profileBanner }, v ? a.createElement(c.Z, { "aria-label": "", aspectMode: l.Z.exact(3), image: v }) : null);
                    return a.createElement(s.Z, null, a.createElement(y.default, { "aria-label": N, aspectRatio: 3, currentContent: Z, location: g.vC.ListBanner, mediaItem: n, onChange: this._handleBannerMediaChange, onFailure: this._handleBannerMediaFailure, onRemove: C || n ? this._handleBannerMediaRemove : void 0 }), a.createElement(d.Z, { errorText: f, invalid: !!f, label: F, maxLength: 25, name: "name", onChange: this._handleNameChange, value: h }), a.createElement(d.Z, { label: D, maxLength: 100, multiline: !0, name: "description", numberOfLines: 3, onChange: this._handleDescriptionChange, value: i }), n ? a.createElement(b.Z, { aspectRatio: 3, media: n, onCancel: this._handleIconCropCancel, onCropDone: this._handleIconCropDone }) : null, a.createElement(p.Z, { checked: u, helpText: O, label: U, name: "isPrivate", onChange: this._handlePrivacyChange }));
                }
            }
            $.contextType = v.rC;
            const Q = x.forwardRef($);
        },
        421730: (e, t, n) => {
            n.d(t, { Z: () => L });
            var a = n(807896),
                s = (n(136728), n(202784)),
                i = n(67369),
                r = n(111677),
                o = n.n(r),
                c = n(339110),
                l = n(500002),
                d = n(874088),
                p = n(325686),
                u = n(731708),
                h = n(392237);
            const m = o().g13ea02c,
                f = s.forwardRef((e, t) => s.createElement(p.Z, { style: [e.style, b.container] }, s.createElement(u.ZP, { align: "center", color: "gray700" }, m))),
                b = h.default.create((e) => ({ container: { padding: e.spaces.space12, paddingTop: e.spaces.space20 } })),
                g = f;
            var _ = n(457311);
            const C = o().d6a23192,
                v = o().hc76e8cd,
                y = o().d872881a;
            function Z(e) {
                const { query: t, ...n } = e;
                return s.createElement(p.Z, n, s.createElement(_.Z, { buttonLink: "/i/lists/create", buttonText: C, buttonType: "primaryFilled", header: v({ query: t }), message: y, secondaryButtonType: "primaryOutlined" }));
            }
            var E = n(24949),
                M = n(668214),
                I = n(204744);
            const S = (0, E.P1)(
                    I.Ww,
                    (e, t) => t.maxItems ?? 20,
                    (e, t) => {
                        const n = e.filter((e) => e.list);
                        return n.length > t ? n.slice(0, t) : n;
                    },
                ),
                w = (0, M.Z)()
                    .propsFromState(() => ({ recentSearches: S }))
                    .propsFromActions(() => ({ addQuery: I.DI }))
                    .withAnalytics({ component: "list_search_box" }),
                k = o().j177067a,
                P = [c.my.Lists];
            const L = (0, l.ZP)(
                w(function (e) {
                    const [t, n] = s.useState(""),
                        r = (0, i.Zz)();
                    return s.createElement(d.default, {
                        filter: P,
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
                        placeholder: k,
                        renderEmptyState: function (e) {
                            return s.createElement(g, e);
                        },
                        renderNoResultsState: function (e) {
                            return s.createElement(Z, (0, a.Z)({}, e, { query: t }));
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
            var a = n(202784),
                s = n(850496),
                i = n(373554),
                r = n(668214),
                o = n(497294);
            const c = (0, r.Z)().propsFromActions(() => ({ addMedia: o.rA, processMultipleMedia: o.G$ }));
            class l extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: n, onChange: a, onFailure: s, processMultipleMedia: i } = this.props,
                                r = this._getAcceptedFileInputs(),
                                o = Array.from(e).find((e) => r.includes(e.type));
                            o &&
                                t([o], { location: n }).then((e) => {
                                    a && a(e.map((e) => e.id)), i(e, { onFailure: s });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, i.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": n, aspectRatio: i, borderRadius: r, currentContent: o, description: c, innerStyle: l, maskStyle: d, mediaItem: p, onCrop: u, onRemove: h, rootStyle: m } = this.props;
                    return a.createElement(s.Z, { acceptGifs: e, acceptVideo: t, "aria-label": n, aspectRatio: i, borderRadius: r, currentContent: o, description: c, innerStyle: l, maskStyle: d, mediaItem: p, onAddMediaFiles: this._handleAddMediaFiles, onCrop: u, onRemove: h, rootStyle: m, withDragDrop: !0 });
                }
            }
            l.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const d = c(l);
        },
        56851: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                s = n(420740),
                i = n(108362),
                r = n(731708),
                o = n(154003),
                c = n(392237),
                l = n(111677),
                d = n.n(l),
                p = n(349035);
            const u = "error-detail",
                h = d().e49537c2,
                m = d().a9ae1e78;
            class f extends a.PureComponent {
                render() {
                    return a.createElement(s.Z, { testID: u }, a.createElement(p.Z, null), a.createElement(i.Z, { style: b.root }, a.createElement(r.ZP, { align: "center", color: "gray700", style: b.retryText }, h), a.createElement(o.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const b = c.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        836640: (e, t, n) => {
            n.d(t, { J: () => b });
            n(136728);
            var a = n(214636),
                s = n(202784),
                i = n(614983),
                r = n.n(i),
                o = (n(585488), n(277660)),
                c = n.n(o),
                l = n(107267),
                d = n(673510),
                p = n(44527),
                u = n(663550),
                h = n(409438),
                m = n(443781);
            const f = a.Z;
            function b(e) {
                const t = c()(f, e.user),
                    { avatar: n, core: a, legacy: i, privacy: o, relationship_perspectives: h, verification: b } = t,
                    g = t.identity_profile_labels_highlighted_label?.label ? (0, p.H)(t.identity_profile_labels_highlighted_label.label) : void 0,
                    { cellClickable: _, decoration: C, displayMode: v } = e,
                    y = (function () {
                        const { viewerUserId: e } = s.useContext(m.rC);
                        return r()(!!e, "viewerUserId is undefined!"), e;
                    })(),
                    Z = (0, l.useHistory)(),
                    E = s.useCallback(() => ("function" == typeof C ? C({ displayMode: v, viewerUserId: y, userId: i?.id_str ?? "" }) : C), [C, y, i, v]),
                    M = s.useCallback(() => {
                        a?.screen_name && Z.push({ pathname: `/${a.screen_name}` });
                    }, [Z, a]);
                return s.createElement(d.ZP, { affiliateBadgeInfo: g, avatarUri: n?.image_url || "", decoration: E(), displayMode: "UserDetailed", displayNameLabel: e.displayNameLabel, isBlueVerified: !!t.is_blue_verified, isFollowedBy: h?.followed_by ?? !1, isProtected: o?.protected ?? !1, isVerified: b?.verified ?? !1, name: a?.name || "", onCellClick: _ ? M : void 0, promotedItemType: u.bj.USER, screenName: a?.screen_name || "", userId: i?.id_str ?? "", verifiedType: b?.verified_type ?? void 0, withFollowsYou: !0 });
            }
            b.defaultProps = { cellClickable: !0, decoration: null, displayMode: h.Z.UserCompact };
        },
        73834: (e, t, n) => {
            n.d(t, { e: () => i });
            var a = n(615656),
                s = n(51525);
            const i = { [a.ZP.GenericNotFound]: { customAction: s.vv } };
        },
        876963: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(263428),
                s = (n(585488), n(483557)),
                i = n(703710),
                r = n(750085),
                o = n(218951);
            const c = (e) => ({ getEndpoint: (e) => e.withEndpoint(s.ZP).fetchCombinedLists, getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, userId: e }) }),
                l = (e) => ({ query: a.Z, variables: ({ count: t, cursor: n }, a) => ({ count: t, cursor: "string" == typeof n ? n : void 0, isListMemberTargetUserId: "0", userId: e, timelineId: `combinedListsGraphQL-${e}`, ...(0, i.d)(a.apiClient.featureSwitches) }) }),
                d = (e, t) => (0, o.Z)({ context: "FETCH_COMBINED_LISTS", formatResponse: r.Z, network: "redux" === t ? c(e) : l(e), initialFetchCount: 100, perfKey: "combinedListsGraphQL", timelineId: `combinedListsGraphQL-${e}` });
        },
        204744: (e, t, n) => {
            n.d(t, { DI: () => v, H$: () => u, OB: () => y, Ww: () => d, YB: () => p, hj: () => b, qF: () => _ });
            n(901951);
            var a = n(499627),
                s = n(390387);
            const i = "recentSearches",
                r = "rweb.recentSearches",
                o =
                    (e) =>
                    (t, n, { userPersistence: a }) =>
                        a.set(r, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                c = (e, t) => {
                    let n = [];
                    if (e.user) {
                        const a = e.user;
                        n = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== a.id));
                    } else if (e.event) {
                        const a = e.event;
                        n = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== a.id));
                    } else if (e && e.keyword) {
                        const a = e.keyword;
                        n = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== a.query));
                    } else if (e.list) {
                        const a = e.list;
                        n = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== a.id));
                    } else if (e.topic) {
                        const a = e.topic;
                        n = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== a.id));
                    }
                    return n;
                },
                l = { fetched: !1, recentSearches: [] };
            const d = (e) => e[i].recentSearches,
                p = (e) => d(e)[0] || null,
                u = (e) => e[i].fetched,
                h = "rweb/recentSearches/INIT_FROM_CACHE",
                m = (e) => ({ type: h, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                b =
                    (e) =>
                    (t, n, { userPersistence: a }) => {
                        t({ payload: e, type: f });
                        const i = n(),
                            r = d(i);
                        return (0, s.Qb)(i) ? t(o(r)) : Promise.resolve();
                    },
                g = "rweb/recentSearches/CLEAR_ALL",
                _ =
                    () =>
                    (e, t, { userPersistence: n }) => {
                        e({ type: g });
                        const a = t(),
                            i = d(a);
                        return (0, s.Qb)(a) ? e(o(i)) : Promise.resolve();
                    },
                C = "rweb/recentSearches/ADD_QUERY",
                v =
                    (e) =>
                    (t, n, { userPersistence: a }) => {
                        t({ payload: e, type: C });
                        const i = n(),
                            r = d(i);
                        return (0, s.Qb)(i) ? t(o(r)) : Promise.resolve();
                    },
                y =
                    () =>
                    (e, t, { userPersistence: n }) => {
                        const a = t();
                        return u(a)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: n }) => {
                                  const a = t();
                                  return (0, s.Qb)(a)
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
            a.Z.register({
                [i]: function (e = l, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case C: {
                            const n = t.payload,
                                a = n ? c(n, e.recentSearches) : [];
                            return a.length > 49 && a.splice(49, 1), n && a.unshift(n), { ...e, recentSearches: a };
                        }
                        case f: {
                            const n = t.payload,
                                a = n ? c(n, e.recentSearches) : [];
                            return { ...e, recentSearches: a };
                        }
                        case g:
                            return { fetched: !0, recentSearches: [] };
                        case h:
                            return { ...e, ...t.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        783284: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(644829),
                s = n(750085),
                i = n(218951);
            function r(e) {
                return (0, i.Z)({ timelineId: "list-search-timeline", context: "FETCH_LIST_SEARCH_TIMELINE", formatResponse: s.Z, network: { getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, rawQuery: e }), getEndpoint: (e) => e.withEndpoint(a.Z).fetchListSearch }, perfKey: "list-search" });
            }
        },
        412171: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(483557),
                s = n(750085),
                i = n(218951);
            const r = () => (0, i.Z)({ timelineId: "listsDiscoveryGraphQL", network: { getEndpoint: (e) => e.withEndpoint(a.ZP).fetchSuggestedLists, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_LISTS_DISCOVERY", perfKey: "listsDiscoveryGraphQL", formatResponse: s.Z });
        },
        688781: (e, t, n) => {
            n.d(t, { DK: () => l, ZP: () => o, i7: () => c });
            n(136728);
            var a = n(483557),
                s = n(750085),
                i = n(466015),
                r = n(218951);
            const o = ({ displayLocation: e, listDescription: t, listId: n, listName: i }) => (0, r.Z)({ timelineId: `listSuggestedUsers-graphQL-${n}`, network: { getEndpoint: (e) => e.withEndpoint(a.ZP).fetchRecommendedUsersGraphQL, getEndpointParams: ({ count: t, cursor: a }) => ({ listId: n, count: t, cursor: "string" == typeof a ? a : void 0, displayLocation: e }) }, formatResponse: s.Z, context: "FETCH_LIST_SUGGESTED_USERS_GRAPHQL", perfKey: "suggestedUsersGraphQL" }),
                c = (e, t) => (n) => {
                    const a = (0, i.OD)(e),
                        s = (0, i.$0)({ entryId: a, id: e, sortIndex: Date.now().toString() });
                    n(t.injectEntry(s));
                },
                l = (e, t, n) => (a) => {
                    const s = [];
                    n.map((n) => {
                        s.push(e.removeEntry((0, i.OD)(n))), s.push(t.injectEntry((0, i.$0)({ id: n, sortIndex: Date.now().toString() })));
                    }),
                        a(s);
                };
        },
        506653: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(483557),
                s = n(750085),
                i = n(218951);
            const r = ({ listId: e, useRanked: t = !1 }) => (0, i.Z)({ timelineId: o({ listId: e, useRanked: t }), network: { getEndpoint: (e) => e.withEndpoint(a.ZP).fetchTweetsGraphQL, getEndpointParams: ({ count: n, cursor: a }) => ({ listId: e, count: n, cursor: "string" == typeof a ? a : void 0, useRanked: t }) }, formatResponse: s.Z, context: "FETCH_LIST_TIMELINE_GRAPHQL", perfKey: "listTweetsGraphQL" });
            function o({ listId: e, useRanked: t = !1 }) {
                return `listTweets-GraphQL-${e}-${t ? "ranked" : "latest"}`;
            }
        },
        127218: (e, t, n) => {
            n.d(t, { C: () => g });
            var a = n(202784),
                s = n(614983),
                i = n.n(s),
                r = n(437429),
                o = n.n(r),
                c = n(57074),
                l = n.n(c),
                d = n(10622),
                p = n.n(d),
                u = n(585488),
                h = n(71620),
                m = n(163889),
                f = n(312771),
                b = n(535338);
            function g(e, t, n) {
                const [s, r] = a.useState(!1),
                    [c, d] = a.useState(null),
                    g = o()(),
                    _ = l()(t),
                    C = (0, h.po)(),
                    v = (0, b.p)(e, _, n);
                return a.useMemo(() => {
                    const t = (0, u.getRequest)(e).params?.metadata?.sliceInfoPath;
                    i()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: n, previous_cursor: a } =
                            (function (e, t) {
                                try {
                                    i()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let n = e;
                                    for (const e of t) i()(!!n, "The provided path is invalid."), i()("string" == typeof e, "Unexpected value for path!"), (n = n?.[e]);
                                    return n;
                                } catch (e) {
                                    return void (0, m.ZP)(e.message);
                                }
                            })(v, t) || {},
                        o = (t) => {
                            s ||
                                (r(!0),
                                p()(g, e, { ..._, cursor: t }).subscribe({
                                    complete: () => {
                                        r(!1);
                                    },
                                    error: (e) => {
                                        r(!1), d(e), C(e);
                                    },
                                }));
                        },
                        l = () => {
                            n && o(n);
                        },
                        h = () => {
                            a && o(a);
                        },
                        b = () => {
                            o(void 0);
                        };
                    return c ? { subsequentFetchStatus: f.ZP.FAILED, error: c, fetchNext: l, fetchPrevious: h, refetch: b, data: v, hasNext: Boolean(n), hasPrevious: Boolean(a) } : { subsequentFetchStatus: s ? f.ZP.LOADING : f.ZP.NONE, error: void 0, fetchNext: l, fetchPrevious: h, refetch: b, data: v, hasNext: Boolean(n), hasPrevious: Boolean(a) };
                }, [e, v, s, c, g, _, C]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-e019dbda.6564214a.js.map
