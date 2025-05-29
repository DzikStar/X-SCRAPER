"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-e019dbda", "loader.MediaPickerWithPreview", "loader.FeedbackSheet"],
    {
        229333: (e, t, i) => {
            i.d(t, { Z: () => p });
            var n = i(202784),
                s = i(466999),
                a = i(325686),
                r = i(392237),
                o = i(111677);
            const c = i.n(o)().e5b0063d;
            let l = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${l}`), (l += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        i = c({ title: t });
                    return n.createElement(a.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(s.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: r.default.visuallyHidden }, t), n.createElement(a.Z, { "aria-label": i }, e));
                }
            }
            const p = d;
        },
        399887: (e, t, i) => {
            i.d(t, { Z: () => c });
            var n = i(202784),
                s = i(154003),
                a = i(111677),
                r = i.n(a),
                o = i(437358);
            const c = () => {
                const e = r().d2826908,
                    t = r().c80cb4e4;
                return n.createElement(s.ZP, { "aria-label": e, hoverLabel: { label: t }, icon: n.createElement(o.default, null), link: "/i/lists/create", pullRight: !0, type: "primaryText" });
            };
        },
        774426: (e, t, i) => {
            i.r(t), i.d(t, { default: () => p });
            i(136728);
            var n = i(202784),
                s = i(811176),
                a = i(190286),
                r = i(111677),
                o = i.n(r),
                c = i(912021);
            const l = o().cfd2f35e;
            class d extends n.Component {
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
                        (this._getMemoizedProcessedActionItems = (0, c.Z)((e, t, i, n) =>
                            e.reduce((e, { Icon: s, confirmation: a, disabled: r, excludeFromActionMenu: o, isEmphasized: c, link: l, onClick: d, subText: p, testID: h, text: u, withCancelButton: m }, f) => {
                                if (!o) {
                                    const o = d
                                        ? () => {
                                              a ? (a.render ? n({ cancelCallback: a.onCancel, confirmCallback: d, render: a.render }) : n({ cancelCallback: a.onCancel, confirmCallback: d, text: a.text, headline: a.headline, label: a.label, confirmButtonType: a.confirmButtonType, withCancelButton: a.withCancelButton })) : (d(), i());
                                          }
                                        : i;
                                    e.push({ disabled: r, Icon: s, isEmphasized: c, testID: h, subText: p, text: u, onClick: o, link: l, withBottomBorder: t && t.includes(f) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : n.createElement(s.Z, { cancelButtonLabel: l, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: i, label: s, text: r, withCancelButton: o } = e || {};
                        return n.createElement(a.Z, { confirmButtonLabel: s, confirmButtonType: t, headline: i, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: r, withCancelButton: o });
                    }
                }
                _getProcessedActionItems() {
                    const { actionItems: e, dividerIndices: t, onClose: i } = this.props;
                    return this._getMemoizedProcessedActionItems(e, t, i, this._handleConfirm);
                }
            }
            const p = d;
        },
        414939: (e, t, i) => {
            i.d(t, { Z: () => c });
            var n = i(202784),
                s = i(325686),
                a = i(392237);
            class r extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(s.Z, { style: o.root });
                }
            }
            const o = a.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                c = r;
        },
        850496: (e, t, i) => {
            i.d(t, { Z: () => y });
            var n = i(202784),
                s = i(325686),
                a = i(731708),
                r = i(15038),
                o = i(154003),
                c = i(682474),
                l = i(392237),
                d = i(111677),
                p = i.n(d),
                h = i(293615),
                u = i(837020),
                m = i(219229),
                f = i(373554),
                _ = i(304059),
                b = i(751170);
            const g = p().b87ca51a,
                C = p().eebff22c,
                v = n.createElement(h.default, null);
            class y extends n.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: i, maskStyle: o, mediaItem: c, onAddMediaFiles: l, onCrop: d, onRemove: p, rootStyle: h, withDragDrop: u } = this.props,
                        m = c && !c.uploader,
                        f = n.createElement(n.Fragment, null, this._renderPreview(), m ? null : n.createElement(n.Fragment, null, n.createElement(s.Z, { style: [Z.mask, o, E[e]] }), n.createElement(s.Z, { style: [Z.overlaidContent, i] }, n.createElement(s.Z, { style: Z.buttonsContainer }, this._renderMediaEdit(), d ? this._renderMediaCrop() : null, p ? this._renderMediaRemove() : null), t ? n.createElement(a.ZP, { align: "center", color: "gray700", size: "subtext1", style: Z.description }, t) : null)));
                    return n.createElement(s.Z, { style: [Z.container, h, E[e]] }, u && l ? n.createElement(r.ZP, { onFilesAdded: l, style: [Z.dragDropContainer, E[e]] }, f) : f);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return n.createElement(o.ZP, { "aria-label": g, hoverLabel: { label: g }, icon: n.createElement(u.default, null), onPress: e, size: "large", style: Z.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return n.createElement(o.ZP, { "aria-label": C, icon: n.createElement(m.default, null), onPress: e, size: "large", style: Z.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: s, multiple: a, onAddMediaFiles: r, onEdit: c } = this.props;
                    return r ? n.createElement(f.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: s, multiple: a, onChange: r, size: "large", style: Z.mediaPicker, type: "onMediaDominantColorFilled" }) : n.createElement(o.ZP, { "aria-label": i, icon: s, onPress: c, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: i, mediaItem: s } = this.props;
                    return s ? n.createElement(c.Z, { ratio: e }, n.createElement(_.Z, { borderRadius: t, enableGif: !1, mediaItem: s, style: Z.mediaPreview, withCloseButton: !1 })) : i;
                }
            }
            y.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: b.A.NONE, icon: v };
            const E = l.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                Z = l.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        370111: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n = i(202784),
                s = i(111677),
                a = i.n(s),
                r = i(330815);
            const o = a().b7fb6bda,
                c = a().e71cdf4e,
                l = Object.freeze({ NotStarted: "not_started", Started: "started", Completed: "completed" });
            function d({ aspectRatio: e, media: t, onCancel: i, onCropDone: s }) {
                const [a, d] = n.useState({ status: "not_started" }),
                    [p, h] = n.useState(!1),
                    [u, m] = n.useState(!1),
                    { croppedMediaId: f, status: _ } = a;
                n.useEffect(() => {
                    _ === l.NotStarted && (h(!0), d({ status: "started" })), _ === l.Completed && t.id !== f && d({ status: "not_started", croppedMediaId: void 0 });
                }, [_, t, f]);
                const b = n.useCallback(() => {
                        h(!1), d({ status: l.Completed, croppedMediaId: t.id }), i();
                    }, [i, t]),
                    g = n.useCallback(() => {
                        h(!1), m(!0);
                    }, []),
                    C = n.useCallback(() => {
                        m(!1), h(!0);
                    }, []),
                    v = n.useCallback(() => {
                        m(!1);
                    }, []),
                    y = n.useCallback(
                        (e) => {
                            d({ status: l.Completed, croppedMediaId: t.id }), s?.(e);
                        },
                        [s, t],
                    ),
                    E = { ...t, id: Number.MAX_SAFE_INTEGER, originalMediaFile: t.mediaFile, cropData: void 0 };
                return n.createElement(n.Fragment, null, p ? n.createElement(r.Z, { defaultAspectRatio: e, media: t, onCancel: b, onDone: g, title: o }) : null, u ? n.createElement(r.Z, { defaultAspectRatio: 1, media: E, onCancel: C, onCropDone: y, onDone: v, title: c }) : null);
            }
        },
        965245: (e, t, i) => {
            i.d(t, { Z: () => c });
            var n = i(807896),
                s = i(202784),
                a = i(229333),
                r = i(414939),
                o = i(334346);
            const c = ({ accessibilityTitle: e, footer: t = s.createElement(r.Z, null), ...i }) => {
                const c = s.createElement(o.C, (0, n.Z)({}, i, { footer: t }));
                return e ? s.createElement(a.Z, { title: e }, c) : c;
            };
        },
        349035: (e, t, i) => {
            i.d(t, { Z: () => a });
            var n = i(202784),
                s = i(272175);
            const a = (0, i(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(s.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        131779: (e, t, i) => {
            i.d(t, { Z: () => f });
            var n = i(202784),
                s = i(154003),
                a = i(111677),
                r = i.n(a),
                o = i(320588),
                c = i(71620),
                l = i(668214),
                d = i(576469);
            const p = (0, l.Z)()
                    .propsFromActions(() => ({ removeUserFromList: d.Z.removeUserFromList, addUserToList: d.Z.addUserToList, createLocalApiErrorHandler: (0, c.zr)("ADD_REMOVE_BUTTON") }))
                    .withAnalytics({ component: "user" }),
                h = r().e68b09b4,
                u = r().af40a8e0;
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAddButton = () => n.createElement(s.ZP, { "aria-label": u, onPress: this._handleAdd, size: "small", type: "primaryFilled" }, u)),
                        (this._renderRemoveButton = () => n.createElement(s.ZP, { "aria-label": h, onPress: this._handleRemove, size: "small", type: "destructiveFilled" }, h)),
                        (this._handleAdd = () => {
                            const { addUserToList: e, createLocalApiErrorHandler: t, listId: i, onAdd: n, shouldAddUserToList: s, userId: a } = this.props;
                            s()
                                ? (e(i, { userId: a, shouldInjectURTEntry: !1 })
                                      .then(() => {
                                          n && n(a);
                                      })
                                      .catch(t(o.Mt)),
                                  this._scribeAction("add"))
                                : n && n(a);
                        }),
                        (this._handleRemove = () => {
                            const { createLocalApiErrorHandler: e, listId: t, onRemove: i, removeUserFromList: n, userId: s } = this.props;
                            n(t, { userId: s, shouldRemoveURTEntry: !1 })
                                .then(() => {
                                    i && i(s);
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
        737613: (e, t, i) => {
            i.d(t, { Z: () => _ });
            var n = i(202784),
                s = i(325686),
                a = i(834324),
                r = i(392237),
                o = i(111677),
                c = i.n(o),
                l = i(125363),
                d = i(390387),
                p = i(919022);
            const h = c().aacfbe55,
                u = c().ga8627cd,
                m = c().e6d2573f,
                f = c().d37a3e15,
                _ = (e) => {
                    const { isReply: t, style: i, type: r } = e,
                        o = (0, l.v9)(d.Lz),
                        c = (0, l.v9)(p.ZP.selectViewerUser),
                        _ = o ? c?.screen_name : void 0,
                        g = n.useMemo(() => [b.root, i], [i]);
                    let C = h({ screenName: _ });
                    return "Tweet" === r && t ? (C = u({ screenName: _ })) : "DM" === r ? (C = m({ screenName: _ })) : "List" === r && (C = f({ screenName: _ })), _ ? n.createElement(s.Z, { style: g }, n.createElement(a.Z, { text: C })) : null;
                },
                b = r.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space12 } }));
        },
        841993: (e, t, i) => {
            i.d(t, { Z: () => u });
            var n = i(202784),
                s = i(111677),
                a = i.n(s),
                r = i(437358),
                o = i(725516),
                c = i(387524),
                l = i(635510);
            const d = a().d2826908,
                p = a().c80cb4e4,
                h = n.createElement(r.default, null),
                u = (e) => {
                    const { page: t } = e,
                        i = (0, o.z)(),
                        s = n.useCallback(
                            (e) => {
                                i.scribe({ page: t, component: "floating_action_button", element: "create_list_button", action: "click" });
                            },
                            [t, i],
                        );
                    return n.createElement(c.Z, { "aria-label": d, href: "/i/lists/create", icon: h, label: p, onPress: s, scribeComponent: "floating_list_button", testID: l.Z.createList });
                };
        },
        330815: (e, t, i) => {
            i.d(t, { Z: () => M });
            var n = i(202784),
                s = i(392237),
                a = i(154003),
                r = i(111677),
                o = i.n(r),
                c = i(184605),
                l = i(980407),
                d = i(873637),
                p = i(668214),
                h = i(497294);
            const u = (e, t) => (t.media ? t.media : (0, c.Z)(t.mediaId) ? (0, h.m3)(e, t.mediaId)[0] : void 0),
                m = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                f = (0, p.Z)()
                    .propsFromState(() => ({ media: u, mediaId: m }))
                    .propsFromActions(() => ({ processMedia: h.C4, updateMediaUpload: h._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                _ = "applyButton",
                b = o().gd80afba,
                g = o().a753a870;
            class C extends n.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return n.createElement(a.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: _, type: "primaryFilled" }, g);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: i, media: n, mediaId: s, onDone: a, processMedia: r, updateMediaUpload: o } = this.props;
                                this.setState({ isProcessing: !0 });
                                const l = t.getCropData(),
                                    { originalMediaFile: d } = n || {},
                                    p = !d || (0 === l.top && 0 === l.left && l.width === d.width && l.height === d.height);
                                (0, c.Z)(s) &&
                                    (e
                                        ? (e(l), a())
                                        : (o({ id: s, cropData: p ? void 0 : l }),
                                          r(s).then(() => {
                                              this.setState({ isProcessing: !1 }), i.scribe({ action: "done" }), a();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = n.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: i, withAspectRatioOptions: s, withZoomControl: a } = this.props,
                        r = this._getMedia();
                    return n.createElement(l.Z, { backButtonType: "back", containerStyle: v.root, documentTitle: i || b, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: i || b }, n.createElement(d.Z, { defaultAspectRatio: e, media: r, ref: this._cropper, withAspectRatioOptions: s, withZoomControl: a }));
                }
            }
            const v = s.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                y = f(C);
            var E = i(757700);
            const Z = s.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                M = (e) => n.createElement(E.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: Z.modal }, n.createElement(y, e));
        },
        935167: (e, t, i) => {
            i.d(t, { ZP: () => W });
            i(136728);
            var n = i(202784),
                s = i(325686),
                a = i(601413),
                r = i(392237),
                o = i(111677),
                c = i.n(o),
                l = i(415506),
                d = i(170397),
                p = i(516951),
                h = i(805104),
                u = i(774426),
                m = i(376293),
                f = i(712816),
                _ = i(879596),
                b = i(395067),
                g = i(443781),
                C = i(688715),
                v = i(907552),
                y = i(668214),
                E = i(576469),
                Z = i(601576);
            const M = (e, t) => E.Z.selectListAuthorScreenName(e, t.list.id_str),
                I = (0, y.Z)()
                    .propsFromState(() => ({ author: M }))
                    .propsFromActions(() => ({ addToast: Z.fz }))
                    .withAnalytics(),
                S = c().i6da4f7a,
                k = c().a062ff80;
            const w = I(function (e) {
                    const {
                            list: { id_str: t },
                            scribeNamespace: i,
                        } = e,
                        s = ((a = t), (0, C.ju)(`https://x.com/i/lists/${a}`));
                    var a;
                    return n.createElement(v.ZP, { copyLinkShareLabel: k, externalShareLabel: S, scribeNamespace: i, url: s });
                }),
                P = w;
            var L = i(71620),
                A = i(286e3),
                R = i(390387),
                x = i(919022),
                T = i(510588);
            const F = (0, y.Z)()
                .propsFromState(() => ({ author: T.l1, basePath: T.$5, viewerUserId: R._h, isSubscribed: T.cx, list: T.Fz, useRanked: T._g }))
                .propsFromActions(() => ({ addToast: Z.fz, block: x.ZP.block, createLocalApiErrorHandler: (0, L.zr)("LIST_ACTIONS"), toggleMute: E.Z.toggleMute, unblock: x.ZP.unblock, updateRankMode: A.Rc }))
                .withAnalytics({ page: "spheres_detail" });
            var B = i(638537);
            c().a9ca06d2;
            const D = c().h63a5c3c,
                U = c().a367dc9a,
                N = c().dd438748,
                z = c().fe7e217c,
                O = c().ce78b698,
                H = c().i5a1628a,
                G = c().f333a93e,
                V = c().c7294984,
                Q = c().g6340998,
                $ = (e) => n.createElement(c().I18NFormatMessage, { $i18n: "aa4026bf" }, n.createElement(a.Z, { screenName: e }));
            class q extends n.Component {
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
                            return this.props.listId && e.length > 0 ? n.createElement(h.Z, { "aria-label": D, onPress: this._handleOverflowMenuPress, renderMenu: this._renderActionMenu, style: j.overflowMenu }) : null;
                        }),
                        (this._handleOverflowMenuPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ element: "more", action: "click" });
                        }),
                        (this._renderActionMenu = (e) => (this.props.listId ? this._renderCurationActionMenu(e) : null)),
                        (this._renderCurationActionMenu = (e) => {
                            const t = this._getActionMenuItems();
                            return n.createElement(u.default, { actionItems: t, onClose: e });
                        }),
                        (this._getActionMenuItems = () => {
                            const { author: e, viewerUserId: t } = this.props,
                                i = [];
                            if (t) {
                                if (!this._isOwnList() && e) {
                                    const e = this._getReportListAction(),
                                        t = this._getUserBlockAction();
                                    e && i.push(e), t && i.push(t);
                                }
                                if (this._isSwitchRankingEnabled) {
                                    const e = this._getSwitchRankModeAction();
                                    i.push(e);
                                }
                                const t = this._getMuteToggleAction();
                                t && i.push(t);
                            }
                            return i;
                        }),
                        (this._getReportListAction = () => {
                            const { analytics: e, list: t, listId: i } = this.props,
                                { featureSwitches: n } = this.context,
                                s = b.C2.List;
                            if ((0, b.Yw)(n, s)) {
                                const i = (0, b.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: s, reportedList: t, reportedUser: t?.user, scribeNamespace: e.contextualScribeNamespace });
                                return { text: V, Icon: l.default, onClick: p.Z, link: { pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(i) } } } };
                            }
                            return { text: V, Icon: l.default, onClick: p.Z, link: { pathname: `/i/report/list/${i}`, state: { clientReferer: window.location.pathname, scribeNamespace: e.contextualScribeNamespace } } };
                        }),
                        (this._getUserBlockAction = () => {
                            const { author: e } = this.props;
                            if (e) return (0, m.op)({ blockAction: this._handleBlockUser, blockSubtext: $, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), source: m.SC.LIST_DETAIL, unblockAction: this._handleUnblockUser, unblockSubtext: Q, user: e });
                        }),
                        (this._getMuteToggleAction = () => {
                            const { addToast: e, analytics: t, isSubscribed: i, list: n, toggleMute: s } = this.props;
                            if (n && i && this._isMutingEnabled) return (0, B.Z)({ list: n, addToast: e, toggleMute: s, scribe: (e) => t.scribe({ component: "customize", ...e }) });
                        }),
                        (this._getSwitchRankModeAction = () => {
                            const { useRanked: e } = this.props;
                            return { text: e ? z : H, Icon: d.default, onClick: this._handleSwitchRankMode, subText: e ? O : G };
                        }),
                        (this._handleBlockUser = () => {
                            const { addToast: e, analytics: t, author: i, block: n, createLocalApiErrorHandler: s } = this.props;
                            i &&
                                (n(i.id_str, { promotedContent: i.promoted_content }).then(() => {
                                    e({ action: { label: m.Vt, onAction: this._handleUnblockUser }, text: m.KV });
                                }, s(f.d)),
                                t.scribe({ action: "block" }));
                        }),
                        (this._handleUnblockUser = () => {
                            const { analytics: e, author: t, createLocalApiErrorHandler: i, unblock: n } = this.props;
                            t && (n(t.id_str, { promotedContent: t.promoted_content }).catch(i(_.D)), e.scribe({ action: "unblock" }));
                        }),
                        (this._handleSwitchRankMode = () => {
                            const { addToast: e, analytics: t, listId: i, updateRankMode: n, useRanked: s } = this.props,
                                a = s ? U : N,
                                r = s ? "see_latest" : "see_top";
                            n({ listId: i, useRanked: !s }).then(() => {
                                e({ text: a });
                            }),
                                t.scribe({ action: "click", component: "customize", element: r });
                        });
                }
                render() {
                    const { list: e, scribeNamespace: t } = this.props;
                    return n.createElement(s.Z, { style: j.rightControl }, e ? n.createElement(P, { list: e, scribeNamespace: t }) : null, this._renderOverflowMenu());
                }
            }
            q.contextType = g.rC;
            const j = r.default.create((e) => ({ listInfoButton: { marginStart: e.spaces.space4 }, overflowMenu: { marginStart: e.spaces.space4 }, rightControl: { alignItems: "center", flexDirection: "row" } })),
                W = F(q);
        },
        583957: (e, t, i) => {
            i.d(t, { Z: () => Q });
            i(136728);
            var n = i(202784),
                s = i(325686),
                a = i(733357),
                r = i(682474),
                o = i(392237),
                c = i(530525),
                l = i(439592),
                d = i(855488),
                p = i(954110),
                h = i(111677),
                u = i.n(h),
                m = i(401388),
                f = i(615656),
                _ = i(370111),
                b = i(716233),
                g = i(166677),
                C = i(538327),
                v = i(443781),
                y = i(199127),
                E = i(184605),
                Z = i(71620),
                M = i(668214),
                I = i(576469),
                S = i(497294),
                k = i(601576),
                w = i(510588);
            const P = (e, t) => {
                    const i = I.Z.selectLocalMediaId(e, t.listId || "-1"),
                        [n] = (0, E.Z)(i) ? S.m3(e, i) : [];
                    return n;
                },
                L = (e, t) => {
                    const { listId: i } = t;
                    return i ? w.tt(e, i) : void 0;
                },
                A = (e, t) => {
                    const { listId: i } = t,
                        n = i && I.Z.select(e, i);
                    return n ? n.defaultBanner : void 0;
                },
                R = (e, t) => t.location.state?.suggestedUser,
                x = (0, M.Z)()
                    .propsFromState(() => ({ suggestedUser: R, uploadedMedia: P, customMedia: L, defaultMedia: A }))
                    .propsFromActions(({ context: e }) => ({ createLocalApiErrorHandler: (0, Z.zr)(e), addToast: k.fz, addLocalMediaId: I.Z.addLocalMediaId, createList: I.Z.createList, deleteListMedia: I.Z.deleteListMedia, editList: I.Z.editList, editListMedia: I.Z.editListMedia, removeMediaUpload: S.WU, removeLocalMediaId: I.Z.removeLocalMediaId }))
                    .withAnalytics(),
                T = "public",
                F = "private",
                B = u().d4e220b4,
                D = u().e36287c6,
                U = u().f30edc68,
                N = u().df31d76a,
                z = u().h51a2cf6,
                O = u().bb10280e,
                H = u().h8885a22,
                G = u().f8132984;
            class V extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._hasListDataChanged = () => {
                            const { description: e, isPrivate: t, name: i } = this.state,
                                { list: n } = this.props,
                                s = n?.mode === F;
                            return e !== n?.description || i !== n?.name || t !== s;
                        }),
                        (this._hasMediaChanged = () => {
                            const { uploadedMedia: e } = this.props,
                                { shouldDeleteBanner: t } = this.state;
                            return !!e?.uploader || t;
                        }),
                        (this.save = () => {
                            const { description: e, isPrivate: t, name: i, shouldDeleteBanner: n } = this.state,
                                { analytics: s, createLocalApiErrorHandler: a, deleteListMedia: r, editList: o, list: c, listId: l } = this.props;
                            this.setState({ isSaving: !0 }), s.scribeAction("save");
                            const d = [];
                            if (n && l) {
                                const e = r(l).catch(a({ defaultToast: { text: z }, showToast: !0 }));
                                d.push(e);
                            }
                            if ((this._hasMediaChanged() && c && d.push(this._handleUploadMedia(c)), this._hasListDataChanged() && l)) {
                                const n = o(l, { description: e, mode: t ? F : T, name: i }).catch(a({ defaultToast: { text: O }, showToast: !0, [f.ZP.ValidationFailure]: { customAction: this._handleListUpdateFailure } }));
                                d.push(n);
                            }
                            Promise.all(d).then(() => {
                                this.state.nameError || this._goBackToListDetail();
                            }),
                                this.setState({ isSaving: !1 });
                        }),
                        (this.create = () => {
                            const { description: e, isPrivate: t, name: i } = this.state,
                                { analytics: n, createList: s, createLocalApiErrorHandler: a, onError: r, suggestedUser: o } = this.props,
                                c = t ? F : T;
                            this.setState({ isSaving: !0 }),
                                n.scribeAction("create"),
                                s({ name: i, description: e, mode: c }).then(
                                    (e) =>
                                        e &&
                                        this._handleUploadMedia(e).then((e) => {
                                            if (e) {
                                                const { history: t } = this.props,
                                                    i = { pathname: `${e.uri}/members/suggested`, state: { previousStep: C.O.Creation, suggestedUser: o } };
                                                o ? t.push(i) : t.replace(i);
                                            }
                                        }),
                                    (e) => {
                                        r && r(), a({ defaultToast: { text: O }, showToast: !0, [f.ZP.ValidationFailure]: { customAction: this._handleListUpdateFailure } })(e);
                                    },
                                ),
                                this.setState({ isSaving: !1 });
                        }),
                        (this._goBackToListDetail = () => {
                            const { history: e, listId: t } = this.props,
                                i = t && `/i/lists/${t}`;
                            e.goBack({ backLocation: i, shouldReplaceOnFallback: !0 });
                        }),
                        (this._handleUploadMedia = (e) => {
                            const { editListMedia: t, removeMediaUpload: i, uploadedMedia: n } = this.props,
                                { iconCrop: s } = this.state,
                                a = e.id_str;
                            if (n && n.uploader && a) {
                                return t({ listId: a, mediaId: n.id, iconCrop: s }).then(() => (i(n.id), Promise.resolve(e)), this._handleMediaUpdateFailure(n, O));
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
                            const { addLocalMediaId: t, listId: i, uploadedMedia: n } = this.props;
                            n && this._clearBannerMedia(n.id), t({ listId: i || "-1", mediaId: e });
                        }),
                        (this._handleBannerMediaFailure = (e) => {
                            this._clearBannerMedia(e);
                        }),
                        (this._clearBannerMedia = (e) => {
                            const { removeMediaUpload: t, uploadedMedia: i } = this.props;
                            (i && i.uploading) || t(e), this.setState({ mediaId: void 0 });
                        }),
                        (this._handleMediaUpdateFailure = (e, t) => (i) => {
                            const { addToast: n, createLocalApiErrorHandler: s, removeMediaUpload: a } = this.props,
                                r = (0, g.$r)(i);
                            if (r) {
                                const e = (0, g.ZP)(r, t);
                                e && n(e);
                            } else s({ showToast: !0 })(i);
                            a(e.id), this.setState({ isSaving: !1 });
                        }),
                        (this._handleListUpdateFailure = (e) => {
                            this.setState({ nameError: e.message || H });
                        });
                    const { list: i } = e,
                        n = i?.name || "",
                        s = i?.description || "",
                        a = i?.mode === F;
                    this.state = { description: s, isPrivate: a, isSaving: !1, name: n, nameError: "", showConfirmation: !1, shouldDeleteBanner: !1 };
                }
                componentWillUnmount() {
                    const { listId: e, removeLocalMediaId: t, uploadedMedia: i } = this.props;
                    i && (this._clearBannerMedia(i.id), t(e || "-1"));
                }
                componentDidUpdate(e, t) {
                    const { onChange: i } = this.props,
                        { isSaving: n, name: s } = this.state;
                    i(!(!!(!s || !s.length || (0, a.Z)(s)) || (!this._hasListDataChanged() && !this._hasMediaChanged()) || n));
                }
                render() {
                    const { customMedia: e, defaultMedia: t, uploadedMedia: i } = this.props,
                        { description: a, isPrivate: h, name: u, nameError: f, shouldDeleteBanner: g } = this.state,
                        C = !(0, m.Z)(e?.image),
                        v = g || !C ? t?.image : e?.image,
                        E = n.createElement(r.Z, { ratio: o.default.theme.aspectRatios.profileBanner }, v ? n.createElement(c.Z, { "aria-label": "", aspectMode: l.Z.exact(3), image: v }) : null);
                    return n.createElement(s.Z, null, n.createElement(y.default, { "aria-label": N, aspectRatio: 3, currentContent: E, location: b.vC.ListBanner, mediaItem: i, onChange: this._handleBannerMediaChange, onFailure: this._handleBannerMediaFailure, onRemove: C || i ? this._handleBannerMediaRemove : void 0 }), n.createElement(d.Z, { errorText: f, invalid: !!f, label: B, maxLength: 25, name: "name", onChange: this._handleNameChange, value: u }), n.createElement(d.Z, { label: D, maxLength: 100, multiline: !0, name: "description", numberOfLines: 3, onChange: this._handleDescriptionChange, value: a }), i ? n.createElement(_.Z, { aspectRatio: 3, media: i, onCancel: this._handleIconCropCancel, onCropDone: this._handleIconCropDone }) : null, n.createElement(p.Z, { checked: h, helpText: G, label: U, name: "isPrivate", onChange: this._handlePrivacyChange }));
                }
            }
            V.contextType = v.rC;
            const Q = x.forwardRef(V);
        },
        421730: (e, t, i) => {
            i.d(t, { Z: () => L });
            var n = i(807896),
                s = (i(136728), i(202784)),
                a = i(67369),
                r = i(111677),
                o = i.n(r),
                c = i(339110),
                l = i(500002),
                d = i(874088),
                p = i(325686),
                h = i(731708),
                u = i(392237);
            const m = o().g13ea02c,
                f = s.forwardRef((e, t) => s.createElement(p.Z, { style: [e.style, _.container] }, s.createElement(h.ZP, { align: "center", color: "gray700" }, m))),
                _ = u.default.create((e) => ({ container: { padding: e.spaces.space12, paddingTop: e.spaces.space20 } })),
                b = f;
            var g = i(457311);
            const C = o().d6a23192,
                v = o().hc76e8cd,
                y = o().d872881a;
            function E(e) {
                const { query: t, ...i } = e;
                return s.createElement(p.Z, i, s.createElement(g.Z, { buttonLink: "/i/lists/create", buttonText: C, buttonType: "primaryFilled", header: v({ query: t }), message: y, secondaryButtonType: "primaryOutlined" }));
            }
            var Z = i(24949),
                M = i(668214),
                I = i(204744);
            const S = (0, Z.P1)(
                    I.Ww,
                    (e, t) => t.maxItems ?? 20,
                    (e, t) => {
                        const i = e.filter((e) => e.list);
                        return i.length > t ? i.slice(0, t) : i;
                    },
                ),
                k = (0, M.Z)()
                    .propsFromState(() => ({ recentSearches: S }))
                    .propsFromActions(() => ({ addQuery: I.DI }))
                    .withAnalytics({ component: "list_search_box" }),
                w = o().j177067a,
                P = [c.my.Lists];
            const L = (0, l.ZP)(
                k(function (e) {
                    const [t, i] = s.useState(""),
                        r = (0, a.Zz)();
                    return s.createElement(d.default, {
                        filter: P,
                        initialValue: e.initialValue,
                        isCompact: r,
                        maxLists: e.maxItems ?? 20,
                        onItemClick: function (t) {
                            t.type === c.El.List && e.history.push(`/i/lists/${t.id}`);
                        },
                        onQueryChange: function (e) {
                            i(e);
                        },
                        onSubmit: function () {
                            e.history.push(`/i/lists/search?q=${t}`);
                        },
                        placeholder: w,
                        renderEmptyState: function (e) {
                            return s.createElement(b, e);
                        },
                        renderNoResultsState: function (e) {
                            return s.createElement(E, (0, n.Z)({}, e, { query: t }));
                        },
                        rounded: !0,
                        source: c._4.ListManagementPage,
                        withFixedPositioning: !0,
                        withFocusStyling: !0,
                    });
                }),
            );
        },
        199127: (e, t, i) => {
            i.r(t), i.d(t, { MediaPickerWithPreview: () => l, default: () => d });
            var n = i(202784),
                s = i(850496),
                a = i(373554),
                r = i(668214),
                o = i(497294);
            const c = (0, r.Z)().propsFromActions(() => ({ addMedia: o.rA, processMultipleMedia: o.G$ }));
            class l extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: i, onChange: n, onFailure: s, processMultipleMedia: a } = this.props,
                                r = this._getAcceptedFileInputs(),
                                o = Array.from(e).find((e) => r.includes(e.type));
                            o &&
                                t([o], { location: i }).then((e) => {
                                    n && n(e.map((e) => e.id)), a(e, { onFailure: s });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, a.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: a, borderRadius: r, currentContent: o, description: c, innerStyle: l, maskStyle: d, mediaItem: p, onCrop: h, onRemove: u, rootStyle: m } = this.props;
                    return n.createElement(s.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: a, borderRadius: r, currentContent: o, description: c, innerStyle: l, maskStyle: d, mediaItem: p, onAddMediaFiles: this._handleAddMediaFiles, onCrop: h, onRemove: u, rootStyle: m, withDragDrop: !0 });
                }
            }
            l.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const d = c(l);
        },
        56851: (e, t, i) => {
            i.d(t, { Z: () => f });
            var n = i(202784),
                s = i(420740),
                a = i(108362),
                r = i(731708),
                o = i(154003),
                c = i(392237),
                l = i(111677),
                d = i.n(l),
                p = i(349035);
            const h = "error-detail",
                u = d().e49537c2,
                m = d().a9ae1e78;
            class f extends n.PureComponent {
                render() {
                    return n.createElement(s.Z, { testID: h }, n.createElement(p.Z, null), n.createElement(a.Z, { style: _.root }, n.createElement(r.ZP, { align: "center", color: "gray700", style: _.retryText }, u), n.createElement(o.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const _ = c.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        836640: (e, t, i) => {
            i.d(t, { J: () => _ });
            i(136728);
            var n = i(214636),
                s = i(202784),
                a = i(614983),
                r = i.n(a),
                o = (i(585488), i(277660)),
                c = i.n(o),
                l = i(107267),
                d = i(673510),
                p = i(44527),
                h = i(663550),
                u = i(409438),
                m = i(443781);
            const f = n.Z;
            function _(e) {
                const t = c()(f, e.user),
                    { avatar: i, core: n, legacy: a, privacy: o, relationship_perspectives: u, verification: _ } = t,
                    b = t.identity_profile_labels_highlighted_label?.label ? (0, p.H)(t.identity_profile_labels_highlighted_label.label) : void 0,
                    { cellClickable: g, decoration: C, displayMode: v } = e,
                    y = (function () {
                        const { viewerUserId: e } = s.useContext(m.rC);
                        return r()(!!e, "viewerUserId is undefined!"), e;
                    })(),
                    E = (0, l.useHistory)(),
                    Z = s.useCallback(() => ("function" == typeof C ? C({ displayMode: v, viewerUserId: y, userId: a?.id_str ?? "" }) : C), [C, y, a, v]),
                    M = s.useCallback(() => {
                        n?.screen_name && E.push({ pathname: `/${n.screen_name}` });
                    }, [E, n]);
                return s.createElement(d.ZP, { affiliateBadgeInfo: b, avatarUri: i?.image_url || "", decoration: Z(), displayMode: "UserDetailed", displayNameLabel: e.displayNameLabel, isBlueVerified: !!t.is_blue_verified, isFollowedBy: u?.followed_by ?? !1, isProtected: o?.protected ?? !1, isVerified: _?.verified ?? !1, name: n?.name || "", onCellClick: g ? M : void 0, promotedItemType: h.bj.USER, screenName: n?.screen_name || "", userId: a?.id_str ?? "", verifiedType: _?.verified_type ?? void 0, withFollowsYou: !0 });
            }
            _.defaultProps = { cellClickable: !0, decoration: null, displayMode: u.Z.UserCompact };
        },
        73834: (e, t, i) => {
            i.d(t, { e: () => a });
            var n = i(615656),
                s = i(51525);
            const a = { [n.ZP.GenericNotFound]: { customAction: s.vv } };
        },
        876963: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n = i(263428),
                s = (i(585488), i(483557)),
                a = i(703710),
                r = i(750085),
                o = i(218951);
            const c = (e) => ({ getEndpoint: (e) => e.withEndpoint(s.ZP).fetchCombinedLists, getEndpointParams: ({ count: t, cursor: i }) => ({ count: t, cursor: "string" == typeof i ? i : void 0, userId: e }) }),
                l = (e) => ({ query: n.Z, variables: ({ count: t, cursor: i }, n) => ({ count: t, cursor: "string" == typeof i ? i : void 0, isListMemberTargetUserId: "0", userId: e, timelineId: `combinedListsGraphQL-${e}`, ...(0, a.d)(n.apiClient.featureSwitches) }) }),
                d = (e, t) => (0, o.Z)({ context: "FETCH_COMBINED_LISTS", formatResponse: r.Z, network: "redux" === t ? c(e) : l(e), initialFetchCount: 100, perfKey: "combinedListsGraphQL", timelineId: `combinedListsGraphQL-${e}` });
        },
        204744: (e, t, i) => {
            i.d(t, { DI: () => v, H$: () => h, OB: () => y, Ww: () => d, YB: () => p, hj: () => _, qF: () => g });
            i(901951);
            var n = i(499627),
                s = i(390387);
            const a = "recentSearches",
                r = "rweb.recentSearches",
                o =
                    (e) =>
                    (t, i, { userPersistence: n }) =>
                        n.set(r, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                c = (e, t) => {
                    let i = [];
                    if (e.user) {
                        const n = e.user;
                        i = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== n.id));
                    } else if (e.event) {
                        const n = e.event;
                        i = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== n.id));
                    } else if (e && e.keyword) {
                        const n = e.keyword;
                        i = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== n.query));
                    } else if (e.list) {
                        const n = e.list;
                        i = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== n.id));
                    } else if (e.topic) {
                        const n = e.topic;
                        i = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== n.id));
                    }
                    return i;
                },
                l = { fetched: !1, recentSearches: [] };
            const d = (e) => e[a].recentSearches,
                p = (e) => d(e)[0] || null,
                h = (e) => e[a].fetched,
                u = "rweb/recentSearches/INIT_FROM_CACHE",
                m = (e) => ({ type: u, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                _ =
                    (e) =>
                    (t, i, { userPersistence: n }) => {
                        t({ payload: e, type: f });
                        const a = i(),
                            r = d(a);
                        return (0, s.Qb)(a) ? t(o(r)) : Promise.resolve();
                    },
                b = "rweb/recentSearches/CLEAR_ALL",
                g =
                    () =>
                    (e, t, { userPersistence: i }) => {
                        e({ type: b });
                        const n = t(),
                            a = d(n);
                        return (0, s.Qb)(n) ? e(o(a)) : Promise.resolve();
                    },
                C = "rweb/recentSearches/ADD_QUERY",
                v =
                    (e) =>
                    (t, i, { userPersistence: n }) => {
                        t({ payload: e, type: C });
                        const a = i(),
                            r = d(a);
                        return (0, s.Qb)(a) ? t(o(r)) : Promise.resolve();
                    },
                y =
                    () =>
                    (e, t, { userPersistence: i }) => {
                        const n = t();
                        return h(n)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: i }) => {
                                  const n = t();
                                  return (0, s.Qb)(n)
                                      ? i
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
            n.Z.register({
                [a]: function (e = l, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case C: {
                            const i = t.payload,
                                n = i ? c(i, e.recentSearches) : [];
                            return n.length > 49 && n.splice(49, 1), i && n.unshift(i), { ...e, recentSearches: n };
                        }
                        case f: {
                            const i = t.payload,
                                n = i ? c(i, e.recentSearches) : [];
                            return { ...e, recentSearches: n };
                        }
                        case b:
                            return { fetched: !0, recentSearches: [] };
                        case u:
                            return { ...e, ...t.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        783284: (e, t, i) => {
            i.d(t, { Z: () => r });
            var n = i(644829),
                s = i(750085),
                a = i(218951);
            function r(e) {
                return (0, a.Z)({ timelineId: "list-search-timeline", context: "FETCH_LIST_SEARCH_TIMELINE", formatResponse: s.Z, network: { getEndpointParams: ({ count: t, cursor: i }) => ({ count: t, cursor: "string" == typeof i ? i : void 0, rawQuery: e }), getEndpoint: (e) => e.withEndpoint(n.Z).fetchListSearch }, perfKey: "list-search" });
            }
        },
        412171: (e, t, i) => {
            i.d(t, { Z: () => r });
            var n = i(483557),
                s = i(750085),
                a = i(218951);
            const r = () => (0, a.Z)({ timelineId: "listsDiscoveryGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchSuggestedLists, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_LISTS_DISCOVERY", perfKey: "listsDiscoveryGraphQL", formatResponse: s.Z });
        },
        688781: (e, t, i) => {
            i.d(t, { DK: () => l, ZP: () => o, i7: () => c });
            i(136728);
            var n = i(483557),
                s = i(750085),
                a = i(466015),
                r = i(218951);
            const o = ({ displayLocation: e, listDescription: t, listId: i, listName: a }) => (0, r.Z)({ timelineId: `listSuggestedUsers-graphQL-${i}`, network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchRecommendedUsersGraphQL, getEndpointParams: ({ count: t, cursor: n }) => ({ listId: i, count: t, cursor: "string" == typeof n ? n : void 0, displayLocation: e }) }, formatResponse: s.Z, context: "FETCH_LIST_SUGGESTED_USERS_GRAPHQL", perfKey: "suggestedUsersGraphQL" }),
                c = (e, t) => (i) => {
                    const n = (0, a.OD)(e),
                        s = (0, a.$0)({ entryId: n, id: e, sortIndex: Date.now().toString() });
                    i(t.injectEntry(s));
                },
                l = (e, t, i) => (n) => {
                    const s = [];
                    i.map((i) => {
                        s.push(e.removeEntry((0, a.OD)(i))), s.push(t.injectEntry((0, a.$0)({ id: i, sortIndex: Date.now().toString() })));
                    }),
                        n(s);
                };
        },
        127218: (e, t, i) => {
            i.d(t, { C: () => b });
            var n = i(202784),
                s = i(614983),
                a = i.n(s),
                r = i(437429),
                o = i.n(r),
                c = i(57074),
                l = i.n(c),
                d = i(10622),
                p = i.n(d),
                h = i(585488),
                u = i(71620),
                m = i(163889),
                f = i(312771),
                _ = i(535338);
            function b(e, t, i) {
                const [s, r] = n.useState(!1),
                    [c, d] = n.useState(null),
                    b = o()(),
                    g = l()(t),
                    C = (0, u.po)(),
                    v = (0, _.p)(e, g, i);
                return n.useMemo(() => {
                    const t = (0, h.getRequest)(e).params?.metadata?.sliceInfoPath;
                    a()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: i, previous_cursor: n } =
                            (function (e, t) {
                                try {
                                    a()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let i = e;
                                    for (const e of t) a()(!!i, "The provided path is invalid."), a()("string" == typeof e, "Unexpected value for path!"), (i = i?.[e]);
                                    return i;
                                } catch (e) {
                                    return void (0, m.ZP)(e.message);
                                }
                            })(v, t) || {},
                        o = (t) => {
                            s ||
                                (r(!0),
                                p()(b, e, { ...g, cursor: t }).subscribe({
                                    complete: () => {
                                        r(!1);
                                    },
                                    error: (e) => {
                                        r(!1), d(e), C(e);
                                    },
                                }));
                        },
                        l = () => {
                            i && o(i);
                        },
                        u = () => {
                            n && o(n);
                        },
                        _ = () => {
                            o(void 0);
                        };
                    return c ? { subsequentFetchStatus: f.ZP.FAILED, error: c, fetchNext: l, fetchPrevious: u, refetch: _, data: v, hasNext: Boolean(i), hasPrevious: Boolean(n) } : { subsequentFetchStatus: s ? f.ZP.LOADING : f.ZP.NONE, error: void 0, fetchNext: l, fetchPrevious: u, refetch: _, data: v, hasNext: Boolean(i), hasPrevious: Boolean(n) };
                }, [e, v, s, c, b, g, C]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-e019dbda.f761a92a.js.map
