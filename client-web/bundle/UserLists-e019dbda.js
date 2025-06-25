"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-e019dbda", "loader.MediaPickerWithPreview", "loader.FeedbackSheet"],
    {
        229333: (e, t, i) => {
            i.d(t, { Z: () => u });
            var n = i(202784),
                r = i(466999),
                s = i(325686),
                a = i(392237),
                o = i(111677);
            const l = i.n(o)().e5b0063d;
            let c = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        i = l({ title: t });
                    return n.createElement(s.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: a.default.visuallyHidden }, t), n.createElement(s.Z, { "aria-label": i }, e));
                }
            }
            const u = d;
        },
        399887: (e, t, i) => {
            i.d(t, { Z: () => l });
            var n = i(202784),
                r = i(154003),
                s = i(111677),
                a = i.n(s),
                o = i(437358);
            const l = () => {
                const e = a().d2826908,
                    t = a().c80cb4e4;
                return n.createElement(r.ZP, { "aria-label": e, hoverLabel: { label: t }, icon: n.createElement(o.default, null), link: "/i/lists/create", pullRight: !0, type: "primaryText" });
            };
        },
        774426: (e, t, i) => {
            i.r(t), i.d(t, { default: () => u });
            i(136728);
            var n = i(202784),
                r = i(811176),
                s = i(190286),
                a = i(111677),
                o = i.n(a),
                l = i(912021);
            const c = o().cfd2f35e;
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
                        (this._getMemoizedProcessedActionItems = (0, l.Z)((e, t, i, n) =>
                            e.reduce((e, { Icon: r, confirmation: s, disabled: a, excludeFromActionMenu: o, isEmphasized: l, link: c, onClick: d, subText: u, testID: p, text: h, withCancelButton: m }, f) => {
                                if (!o) {
                                    const o = d
                                        ? () => {
                                              s ? (s.render ? n({ cancelCallback: s.onCancel, confirmCallback: d, render: s.render }) : n({ cancelCallback: s.onCancel, confirmCallback: d, text: s.text, headline: s.headline, label: s.label, confirmButtonType: s.confirmButtonType, withCancelButton: s.withCancelButton })) : (d(), i());
                                          }
                                        : i;
                                    e.push({ disabled: a, Icon: r, isEmphasized: l, testID: p, subText: u, text: h, onClick: o, link: c, withBottomBorder: t && t.includes(f) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : n.createElement(r.Z, { cancelButtonLabel: c, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: i, label: r, text: a, withCancelButton: o } = e || {};
                        return n.createElement(s.Z, { confirmButtonLabel: r, confirmButtonType: t, headline: i, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: a, withCancelButton: o });
                    }
                }
                _getProcessedActionItems() {
                    const { actionItems: e, dividerIndices: t, onClose: i } = this.props;
                    return this._getMemoizedProcessedActionItems(e, t, i, this._handleConfirm);
                }
            }
            const u = d;
        },
        414939: (e, t, i) => {
            i.d(t, { Z: () => l });
            var n = i(202784),
                r = i(325686),
                s = i(392237);
            class a extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(r.Z, { style: o.root });
                }
            }
            const o = s.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = a;
        },
        850496: (e, t, i) => {
            i.d(t, { Z: () => y });
            var n = i(202784),
                r = i(325686),
                s = i(731708),
                a = i(15038),
                o = i(154003),
                l = i(682474),
                c = i(392237),
                d = i(111677),
                u = i.n(d),
                p = i(293615),
                h = i(837020),
                m = i(219229),
                f = i(373554),
                b = i(304059),
                g = i(751170);
            const _ = u().b87ca51a,
                v = u().eebff22c,
                C = n.createElement(p.default, null);
            class y extends n.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: i, maskStyle: o, mediaItem: l, onAddMediaFiles: c, onCrop: d, onRemove: u, rootStyle: p, withDragDrop: h } = this.props,
                        m = l && !l.uploader,
                        f = n.createElement(n.Fragment, null, this._renderPreview(), m ? null : n.createElement(n.Fragment, null, n.createElement(r.Z, { style: [Z.mask, o, E[e]] }), n.createElement(r.Z, { style: [Z.overlaidContent, i] }, n.createElement(r.Z, { style: Z.buttonsContainer }, this._renderMediaEdit(), d ? this._renderMediaCrop() : null, u ? this._renderMediaRemove() : null), t ? n.createElement(s.ZP, { align: "center", color: "gray700", size: "subtext1", style: Z.description }, t) : null)));
                    return n.createElement(r.Z, { style: [Z.container, p, E[e]] }, h && c ? n.createElement(a.ZP, { onFilesAdded: c, style: [Z.dragDropContainer, E[e]] }, f) : f);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return n.createElement(o.ZP, { "aria-label": _, hoverLabel: { label: _ }, icon: n.createElement(h.default, null), onPress: e, size: "large", style: Z.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return n.createElement(o.ZP, { "aria-label": v, icon: n.createElement(m.default, null), onPress: e, size: "large", style: Z.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: r, multiple: s, onAddMediaFiles: a, onEdit: l } = this.props;
                    return a ? n.createElement(f.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, icon: r, multiple: s, onChange: a, size: "large", style: Z.mediaPicker, type: "onMediaDominantColorFilled" }) : n.createElement(o.ZP, { "aria-label": i, icon: r, onPress: l, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: i, mediaItem: r } = this.props;
                    return r ? n.createElement(l.Z, { ratio: e }, n.createElement(b.Z, { borderRadius: t, enableGif: !1, mediaItem: r, style: Z.mediaPreview, withCloseButton: !1 })) : i;
                }
            }
            y.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: g.A.NONE, icon: C };
            const E = c.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                Z = c.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        370111: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n = i(202784),
                r = i(111677),
                s = i.n(r),
                a = i(330815);
            const o = s().b7fb6bda,
                l = s().e71cdf4e,
                c = Object.freeze({ NotStarted: "not_started", Started: "started", Completed: "completed" });
            function d({ aspectRatio: e, media: t, onCancel: i, onCropDone: r }) {
                const [s, d] = n.useState({ status: "not_started" }),
                    [u, p] = n.useState(!1),
                    [h, m] = n.useState(!1),
                    { croppedMediaId: f, status: b } = s;
                n.useEffect(() => {
                    b === c.NotStarted && (p(!0), d({ status: "started" })), b === c.Completed && t.id !== f && d({ status: "not_started", croppedMediaId: void 0 });
                }, [b, t, f]);
                const g = n.useCallback(() => {
                        p(!1), d({ status: c.Completed, croppedMediaId: t.id }), i();
                    }, [i, t]),
                    _ = n.useCallback(() => {
                        p(!1), m(!0);
                    }, []),
                    v = n.useCallback(() => {
                        m(!1), p(!0);
                    }, []),
                    C = n.useCallback(() => {
                        m(!1);
                    }, []),
                    y = n.useCallback(
                        (e) => {
                            d({ status: c.Completed, croppedMediaId: t.id }), r?.(e);
                        },
                        [r, t],
                    ),
                    E = { ...t, id: Number.MAX_SAFE_INTEGER, originalMediaFile: t.mediaFile, cropData: void 0 };
                return n.createElement(n.Fragment, null, u ? n.createElement(a.Z, { defaultAspectRatio: e, media: t, onCancel: g, onDone: _, title: o }) : null, h ? n.createElement(a.Z, { defaultAspectRatio: 1, media: E, onCancel: v, onCropDone: y, onDone: C, title: l }) : null);
            }
        },
        965245: (e, t, i) => {
            i.d(t, { Z: () => l });
            var n = i(807896),
                r = i(202784),
                s = i(229333),
                a = i(414939),
                o = i(334346);
            const l = ({ accessibilityTitle: e, footer: t = r.createElement(a.Z, null), ...i }) => {
                const l = r.createElement(o.C, (0, n.Z)({}, i, { footer: t }));
                return e ? r.createElement(s.Z, { title: e }, l) : l;
            };
        },
        349035: (e, t, i) => {
            i.d(t, { Z: () => s });
            var n = i(202784),
                r = i(272175);
            const s = (0, i(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(r.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        131779: (e, t, i) => {
            i.d(t, { Z: () => f });
            var n = i(202784),
                r = i(154003),
                s = i(111677),
                a = i.n(s),
                o = i(320588),
                l = i(71620),
                c = i(668214),
                d = i(576469);
            const u = (0, c.Z)()
                    .propsFromActions(() => ({ removeUserFromList: d.Z.removeUserFromList, addUserToList: d.Z.addUserToList, createLocalApiErrorHandler: (0, l.zr)("ADD_REMOVE_BUTTON") }))
                    .withAnalytics({ component: "user" }),
                p = a().e68b09b4,
                h = a().af40a8e0;
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAddButton = () => n.createElement(r.ZP, { "aria-label": h, onPress: this._handleAdd, size: "small", type: "primaryFilled" }, h)),
                        (this._renderRemoveButton = () => n.createElement(r.ZP, { "aria-label": p, onPress: this._handleRemove, size: "small", type: "destructiveFilled" }, p)),
                        (this._handleAdd = () => {
                            const { addUserToList: e, createLocalApiErrorHandler: t, listId: i, onAdd: n, shouldAddUserToList: r, userId: s } = this.props;
                            r()
                                ? (e(i, { userId: s, shouldInjectURTEntry: !1 })
                                      .then(() => {
                                          n && n(s);
                                      })
                                      .catch(t(o.Mt)),
                                  this._scribeAction("add"))
                                : n && n(s);
                        }),
                        (this._handleRemove = () => {
                            const { createLocalApiErrorHandler: e, listId: t, onRemove: i, removeUserFromList: n, userId: r } = this.props;
                            n(t, { userId: r, shouldRemoveURTEntry: !1 })
                                .then(() => {
                                    i && i(r);
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
            const f = u(m);
        },
        737613: (e, t, i) => {
            i.d(t, { Z: () => b });
            var n = i(202784),
                r = i(325686),
                s = i(834324),
                a = i(392237),
                o = i(111677),
                l = i.n(o),
                c = i(125363),
                d = i(390387),
                u = i(919022);
            const p = l().aacfbe55,
                h = l().ga8627cd,
                m = l().e6d2573f,
                f = l().d37a3e15,
                b = (e) => {
                    const { isReply: t, style: i, type: a } = e,
                        o = (0, c.v9)(d.Lz),
                        l = (0, c.v9)(u.ZP.selectViewerUser),
                        b = o ? l?.screen_name : void 0,
                        _ = n.useMemo(() => [g.root, i], [i]);
                    let v = p({ screenName: b });
                    return "Tweet" === a && t ? (v = h({ screenName: b })) : "DM" === a ? (v = m({ screenName: b })) : "List" === a && (v = f({ screenName: b })), b ? n.createElement(r.Z, { style: _ }, n.createElement(s.Z, { text: v })) : null;
                },
                g = a.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space12 } }));
        },
        841993: (e, t, i) => {
            i.d(t, { Z: () => h });
            var n = i(202784),
                r = i(111677),
                s = i.n(r),
                a = i(437358),
                o = i(725516),
                l = i(387524),
                c = i(635510);
            const d = s().d2826908,
                u = s().c80cb4e4,
                p = n.createElement(a.default, null),
                h = (e) => {
                    const { page: t } = e,
                        i = (0, o.z)(),
                        r = n.useCallback(
                            (e) => {
                                i.scribe({ page: t, component: "floating_action_button", element: "create_list_button", action: "click" });
                            },
                            [t, i],
                        );
                    return n.createElement(l.Z, { "aria-label": d, href: "/i/lists/create", icon: p, label: u, onPress: r, scribeComponent: "floating_list_button", testID: c.Z.createList });
                };
        },
        989816: (e, t, i) => {
            i.d(t, { Z: () => _ });
            var n = i(202784),
                r = i(970187),
                s = i(392237),
                a = i(379327),
                o = i(913973),
                l = i(320588),
                c = i(233391),
                d = i(288955),
                u = i(71620),
                p = i(668214),
                h = i(576469);
            const m = (0, p.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("FOLLOW_LIST_BUTTON"), follow: h.Z.subscribe, unfollow: h.Z.unsubscribe }))
                    .withAnalytics(),
                f = { followIcon: n.createElement(a.default, null), followingIcon: n.createElement(o.default, null) },
                b = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: i, disabled: s, follow: a, isFollowing: o, isMinimal: u, listId: p, listName: h, unfollow: m, user: b } = e,
                        _ = n.useCallback(() => {
                            t.scribeAction("follow"), a(p).catch(i(l.lg));
                        }, [t, i, a, p]),
                        v = n.useCallback(() => {
                            t.scribeAction("unfollow"), m(p).catch(i(l.Sm));
                        }, [t, i, p, m]);
                    return n.createElement(d.Z, { customText: h, displayMode: c.BH.subscribe, userFullName: b?.name }, (e) => n.createElement(r.Z, { buttonIcons: u ? f : void 0, disabled: s, displayMode: u ? "only-icon" : void 0, isFollowing: o, onFollow: e(_), onUnfollow: e(v), showRelationshipChangeConfirmation: !1, size: "small", style: g.followButton, type: "list" }));
                },
                g = s.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
                _ = m(n.memo(b));
        },
        330815: (e, t, i) => {
            i.d(t, { Z: () => I });
            var n = i(202784),
                r = i(392237),
                s = i(154003),
                a = i(111677),
                o = i.n(a),
                l = i(184605),
                c = i(980407),
                d = i(873637),
                u = i(668214),
                p = i(497294);
            const h = (e, t) => (t.media ? t.media : (0, l.Z)(t.mediaId) ? (0, p.m3)(e, t.mediaId)[0] : void 0),
                m = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                f = (0, u.Z)()
                    .propsFromState(() => ({ media: h, mediaId: m }))
                    .propsFromActions(() => ({ processMedia: p.C4, updateMediaUpload: p._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                b = "applyButton",
                g = o().gd80afba,
                _ = o().a753a870;
            class v extends n.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return n.createElement(s.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: b, type: "primaryFilled" }, _);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: i, media: n, mediaId: r, onDone: s, processMedia: a, updateMediaUpload: o } = this.props;
                                this.setState({ isProcessing: !0 });
                                const c = t.getCropData(),
                                    { originalMediaFile: d } = n || {},
                                    u = !d || (0 === c.top && 0 === c.left && c.width === d.width && c.height === d.height);
                                (0, l.Z)(r) &&
                                    (e
                                        ? (e(c), s())
                                        : (o({ id: r, cropData: u ? void 0 : c }),
                                          a(r).then(() => {
                                              this.setState({ isProcessing: !1 }), i.scribe({ action: "done" }), s();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = n.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: i, withAspectRatioOptions: r, withZoomControl: s } = this.props,
                        a = this._getMedia();
                    return n.createElement(c.Z, { backButtonType: "back", containerStyle: C.root, documentTitle: i || g, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: i || g }, n.createElement(d.Z, { defaultAspectRatio: e, media: a, ref: this._cropper, withAspectRatioOptions: r, withZoomControl: s }));
                }
            }
            const C = r.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                y = f(v);
            var E = i(757700);
            const Z = r.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                I = (e) => n.createElement(E.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: Z.modal }, n.createElement(y, e));
        },
        935167: (e, t, i) => {
            i.d(t, { ZP: () => W });
            i(136728);
            var n = i(202784),
                r = i(325686),
                s = i(601413),
                a = i(392237),
                o = i(111677),
                l = i.n(o),
                c = i(415506),
                d = i(170397),
                u = i(516951),
                p = i(805104),
                h = i(774426),
                m = i(376293),
                f = i(712816),
                b = i(879596),
                g = i(395067),
                _ = i(443781),
                v = i(688715),
                C = i(907552),
                y = i(668214),
                E = i(576469),
                Z = i(601576);
            const I = (e, t) => E.Z.selectListAuthorScreenName(e, t.list.id_str),
                w = (0, y.Z)()
                    .propsFromState(() => ({ author: I }))
                    .propsFromActions(() => ({ addToast: Z.fz }))
                    .withAnalytics(),
                M = l().i6da4f7a,
                P = l().a062ff80;
            const S = w(function (e) {
                    const {
                            list: { id_str: t },
                            scribeNamespace: i,
                        } = e,
                        r = ((s = t), (0, v.ju)(`https://x.com/i/lists/${s}`));
                    var s;
                    return n.createElement(C.ZP, { copyLinkShareLabel: P, externalShareLabel: M, scribeNamespace: i, url: r });
                }),
                k = S;
            var L = i(71620),
                A = i(286e3),
                R = i(390387),
                T = i(919022),
                x = i(510588);
            const B = (0, y.Z)()
                .propsFromState(() => ({ author: x.l1, basePath: x.$5, viewerUserId: R._h, isSubscribed: x.cx, list: x.Fz, useRanked: x._g }))
                .propsFromActions(() => ({ addToast: Z.fz, block: T.ZP.block, createLocalApiErrorHandler: (0, L.zr)("LIST_ACTIONS"), toggleMute: E.Z.toggleMute, unblock: T.ZP.unblock, updateRankMode: A.Rc }))
                .withAnalytics({ page: "spheres_detail" });
            var F = i(638537);
            l().a9ca06d2;
            const D = l().h63a5c3c,
                U = l().a367dc9a,
                N = l().dd438748,
                O = l().fe7e217c,
                z = l().ce78b698,
                H = l().i5a1628a,
                G = l().f333a93e,
                V = l().c7294984,
                $ = l().g6340998,
                Q = (e) => n.createElement(l().I18NFormatMessage, { $i18n: "aa4026bf" }, n.createElement(s.Z, { screenName: e }));
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
                            return this.props.listId && e.length > 0 ? n.createElement(p.Z, { "aria-label": D, onPress: this._handleOverflowMenuPress, renderMenu: this._renderActionMenu, style: j.overflowMenu }) : null;
                        }),
                        (this._handleOverflowMenuPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ element: "more", action: "click" });
                        }),
                        (this._renderActionMenu = (e) => (this.props.listId ? this._renderCurationActionMenu(e) : null)),
                        (this._renderCurationActionMenu = (e) => {
                            const t = this._getActionMenuItems();
                            return n.createElement(h.default, { actionItems: t, onClose: e });
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
                                r = g.C2.List;
                            if ((0, g.Yw)(n, r)) {
                                const i = (0, g.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: r, reportedList: t, reportedUser: t?.user, scribeNamespace: e.contextualScribeNamespace });
                                return { text: V, Icon: c.default, onClick: u.Z, link: { pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(i) } } } };
                            }
                            return { text: V, Icon: c.default, onClick: u.Z, link: { pathname: `/i/report/list/${i}`, state: { clientReferer: window.location.pathname, scribeNamespace: e.contextualScribeNamespace } } };
                        }),
                        (this._getUserBlockAction = () => {
                            const { author: e } = this.props;
                            if (e) return (0, m.op)({ blockAction: this._handleBlockUser, blockSubtext: Q, source: m.SC.LIST_DETAIL, unblockAction: this._handleUnblockUser, unblockSubtext: $, user: e });
                        }),
                        (this._getMuteToggleAction = () => {
                            const { addToast: e, analytics: t, isSubscribed: i, list: n, toggleMute: r } = this.props;
                            if (n && i && this._isMutingEnabled) return (0, F.Z)({ list: n, addToast: e, toggleMute: r, scribe: (e) => t.scribe({ component: "customize", ...e }) });
                        }),
                        (this._getSwitchRankModeAction = () => {
                            const { useRanked: e } = this.props;
                            return { text: e ? O : H, Icon: d.default, onClick: this._handleSwitchRankMode, subText: e ? z : G };
                        }),
                        (this._handleBlockUser = () => {
                            const { addToast: e, analytics: t, author: i, block: n, createLocalApiErrorHandler: r } = this.props;
                            i &&
                                (n(i.id_str, { promotedContent: i.promoted_content }).then(() => {
                                    e({ action: { label: m.Vt, onAction: this._handleUnblockUser }, text: m.KV });
                                }, r(f.d)),
                                t.scribe({ action: "block" }));
                        }),
                        (this._handleUnblockUser = () => {
                            const { analytics: e, author: t, createLocalApiErrorHandler: i, unblock: n } = this.props;
                            t && (n(t.id_str, { promotedContent: t.promoted_content }).catch(i(b.D)), e.scribe({ action: "unblock" }));
                        }),
                        (this._handleSwitchRankMode = () => {
                            const { addToast: e, analytics: t, listId: i, updateRankMode: n, useRanked: r } = this.props,
                                s = r ? U : N,
                                a = r ? "see_latest" : "see_top";
                            n({ listId: i, useRanked: !r }).then(() => {
                                e({ text: s });
                            }),
                                t.scribe({ action: "click", component: "customize", element: a });
                        });
                }
                render() {
                    const { list: e, scribeNamespace: t } = this.props;
                    return n.createElement(r.Z, { style: j.rightControl }, e ? n.createElement(k, { list: e, scribeNamespace: t }) : null, this._renderOverflowMenu());
                }
            }
            q.contextType = _.rC;
            const j = a.default.create((e) => ({ listInfoButton: { marginStart: e.spaces.space4 }, overflowMenu: { marginStart: e.spaces.space4 }, rightControl: { alignItems: "center", flexDirection: "row" } })),
                W = B(q);
        },
        527409: (e, t, i) => {
            i.r(t), i.d(t, { ListDetail: () => R, default: () => x, formatNumber: () => k });
            var n = i(202784),
                r = i(272175),
                s = i(325686),
                a = i(98538),
                o = i(530525),
                l = i(439592),
                c = i(392237),
                d = i(682474),
                u = i(731708),
                p = i(366635),
                h = i(154003),
                m = i(111677),
                f = i.n(m),
                b = i(121791),
                g = i(401388),
                _ = i(443781),
                v = i(989816),
                C = i(668214),
                y = i(576469),
                E = i(390387),
                Z = i(919022),
                I = i(510588);
            const w = (e, t) => {
                    const { listId: i } = t;
                    return i ? y.Z.select(e, i) : void 0;
                },
                M = (e, t) => {
                    const i = w(e, t),
                        n = i?.user;
                    return n ? Z.ZP.select(e, n) : void 0;
                },
                P = (e, t) => I.tt(e, t.listId),
                S = (0, C.Z)()
                    .propsFromState(() => ({ list: w, user: M, viewerUserId: E._h, media: P }))
                    .withAnalytics(),
                k = f().d58baa7f,
                L = f().ca5d0a82,
                A = f().j681933e;
            class R extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = () => {
                            const { media: e } = this.props,
                                { image: t } = e;
                            if (t && !(0, g.Z)(t)) {
                                const { url: e } = t;
                                return n.createElement(n.Fragment, null, n.createElement(r.ql, { prioritizeSeoTags: !0 }, n.createElement("meta", { content: e, property: "og:image" })), n.createElement(o.Z, { "aria-label": "", aspectMode: l.Z.exact(3), backgroundColor: c.default.theme.colors.gray300, image: t }));
                            }
                            return n.createElement(d.Z, { ratio: 3 }, n.createElement(s.Z, { style: T.placeholderImageContainer }));
                        }),
                        (this._renderListDescription = () => {
                            const { list: e, user: t } = this.props;
                            if (e) {
                                const { description: i, member_count: a, mode: o, name: l, subscriber_count: c } = e,
                                    d = c || 0,
                                    h = a || 0,
                                    m = "private" === o;
                                return n.createElement(s.Z, { style: T.description }, n.createElement(s.Z, { style: [T.name, T.text] }, n.createElement(u.ZP, { align: "center", size: "headline1", weight: "bold" }, l.trim()), m ? n.createElement(b.default, { "aria-label": A, style: T.iconLock }) : null), i ? n.createElement(n.Fragment, null, n.createElement(r.ql, { prioritizeSeoTags: !0 }, n.createElement("meta", { content: i.trim(), property: "og:description" })), n.createElement(u.ZP, { align: "center", style: T.text }, i.trim())) : null, t ? n.createElement(p.Z, { affiliateBadgeInfo: t.highlightedLabel, isBlueVerified: t.is_blue_verified, isProtected: t.protected, isVerified: t.verified, name: t.name, onLinkClick: this._handleUserNamePress, profileImageUrl: t.profile_image_url_https, screenName: t.screen_name, style: T.text, verifiedType: t.verified_type, withLink: !0 }) : null, this._renderCount(d, h), this._renderActionButton());
                            }
                        }),
                        (this._renderCount = (e, t) => {
                            const { basePath: i } = this.props,
                                r = k(e),
                                s = k(t);
                            return n.createElement(a.Z.Group, null, n.createElement(a.Z, { count: t, link: `${i}/members`, onPress: this._handleMembersCountPress }, n.createElement(f().I18NFormatMessage, { $i18n: "b38e130b" }, n.createElement(a.Z.Value, null, f().ibd0106e({ formattedCount: s })), n.createElement(a.Z.Label, null, f().cface2d1({ count: t })))), n.createElement(a.Z, { count: e, link: `${i}/followers`, onPress: this._handleSubscribersCountPress }, ((o = e), (l = r), n.createElement(f().I18NFormatMessage, { $i18n: "d2924acb" }, n.createElement(a.Z.Value, null, f().ec08efe4({ formattedCount: l })), n.createElement(a.Z.Label, null, f().h9f711f0({ count: o }))))));
                            var o, l;
                        }),
                        (this._handleEditPress = () => {
                            this._scribe({ element: "edit", action: "click" });
                        }),
                        (this._handleUserNamePress = () => {
                            this._scribe({ element: "user", action: "click" });
                        }),
                        (this._handleMembersCountPress = () => {
                            this._scribe({ element: "list_member", action: "click" });
                        }),
                        (this._handleSubscribersCountPress = () => {
                            this._scribe({ element: "list_subscribed", action: "click" });
                        }),
                        (this._renderActionButton = () => {
                            const { basePath: e, list: t, user: i, viewerUserId: r, withEditButton: a } = this.props;
                            if (t && t.user) {
                                const o = i?.blocking;
                                return t.user === r && a ? n.createElement(h.ZP, { link: `${e}/info`, onPress: this._handleEditPress, style: T.button, type: "primaryOutlined" }, L) : t.user !== r ? n.createElement(s.Z, { style: T.button }, n.createElement(v.Z, { disabled: o, isFollowing: !!t.following, listId: t.id_str, listName: t.name, user: i })) : null;
                            }
                        }),
                        (this._scribe = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe(e);
                        });
                }
                componentDidMount() {
                    this._scribe({ action: "impression" });
                }
                render() {
                    const { list: e, withRoundedCorners: t } = this.props;
                    return e ? n.createElement(s.Z, { style: [T.container, t && T.hoverCard] }, this._renderImage(), this._renderListDescription()) : null;
                }
            }
            (R.contextType = _.rC), (R.defaultProps = { withEditButton: !0 });
            const T = c.default.create((e) => ({ container: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderStyle: "solid" }, hoverCard: { borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, button: { marginTop: e.spaces.space20, marginBottom: e.spaces.space12 }, description: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12, alignItems: "center" }, name: { flexDirection: "row", justifyContent: "center", alignItems: "center" }, iconLock: { color: e.colors.text, marginStart: e.spaces.space2 }, text: { width: "100%", marginBottom: e.spaces.space12 }, placeholderImageContainer: { backgroundColor: e.colors.gray300, height: "100%" } })),
                x = S(R);
        },
        583957: (e, t, i) => {
            i.d(t, { Z: () => $ });
            i(136728);
            var n = i(202784),
                r = i(325686),
                s = i(733357),
                a = i(682474),
                o = i(392237),
                l = i(530525),
                c = i(439592),
                d = i(855488),
                u = i(954110),
                p = i(111677),
                h = i.n(p),
                m = i(401388),
                f = i(615656),
                b = i(370111),
                g = i(716233),
                _ = i(166677),
                v = i(538327),
                C = i(443781),
                y = i(199127),
                E = i(184605),
                Z = i(71620),
                I = i(668214),
                w = i(576469),
                M = i(497294),
                P = i(601576),
                S = i(510588);
            const k = (e, t) => {
                    const i = w.Z.selectLocalMediaId(e, t.listId || "-1"),
                        [n] = (0, E.Z)(i) ? M.m3(e, i) : [];
                    return n;
                },
                L = (e, t) => {
                    const { listId: i } = t;
                    return i ? S.tt(e, i) : void 0;
                },
                A = (e, t) => {
                    const { listId: i } = t,
                        n = i && w.Z.select(e, i);
                    return n ? n.defaultBanner : void 0;
                },
                R = (e, t) => t.location.state?.suggestedUser,
                T = (0, I.Z)()
                    .propsFromState(() => ({ suggestedUser: R, uploadedMedia: k, customMedia: L, defaultMedia: A }))
                    .propsFromActions(({ context: e }) => ({ createLocalApiErrorHandler: (0, Z.zr)(e), addToast: P.fz, addLocalMediaId: w.Z.addLocalMediaId, createList: w.Z.createList, deleteListMedia: w.Z.deleteListMedia, editList: w.Z.editList, editListMedia: w.Z.editListMedia, removeMediaUpload: M.WU, removeLocalMediaId: w.Z.removeLocalMediaId }))
                    .withAnalytics(),
                x = "public",
                B = "private",
                F = h().d4e220b4,
                D = h().e36287c6,
                U = h().f30edc68,
                N = h().df31d76a,
                O = h().h51a2cf6,
                z = h().bb10280e,
                H = h().h8885a22,
                G = h().f8132984;
            class V extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._hasListDataChanged = () => {
                            const { description: e, isPrivate: t, name: i } = this.state,
                                { list: n } = this.props,
                                r = n?.mode === B;
                            return e !== n?.description || i !== n?.name || t !== r;
                        }),
                        (this._hasMediaChanged = () => {
                            const { uploadedMedia: e } = this.props,
                                { shouldDeleteBanner: t } = this.state;
                            return !!e?.uploader || t;
                        }),
                        (this.save = () => {
                            const { description: e, isPrivate: t, name: i, shouldDeleteBanner: n } = this.state,
                                { analytics: r, createLocalApiErrorHandler: s, deleteListMedia: a, editList: o, list: l, listId: c } = this.props;
                            this.setState({ isSaving: !0 }), r.scribeAction("save");
                            const d = [];
                            if (n && c) {
                                const e = a(c).catch(s({ defaultToast: { text: O }, showToast: !0 }));
                                d.push(e);
                            }
                            if ((this._hasMediaChanged() && l && d.push(this._handleUploadMedia(l)), this._hasListDataChanged() && c)) {
                                const n = o(c, { description: e, mode: t ? B : x, name: i }).catch(s({ defaultToast: { text: z }, showToast: !0, [f.ZP.ValidationFailure]: { customAction: this._handleListUpdateFailure } }));
                                d.push(n);
                            }
                            Promise.all(d).then(() => {
                                this.state.nameError || this._goBackToListDetail();
                            }),
                                this.setState({ isSaving: !1 });
                        }),
                        (this.create = () => {
                            const { description: e, isPrivate: t, name: i } = this.state,
                                { analytics: n, createList: r, createLocalApiErrorHandler: s, onError: a, suggestedUser: o } = this.props,
                                l = t ? B : x;
                            this.setState({ isSaving: !0 }),
                                n.scribeAction("create"),
                                r({ name: i, description: e, mode: l }).then(
                                    (e) =>
                                        e &&
                                        this._handleUploadMedia(e).then((e) => {
                                            if (e) {
                                                const { history: t } = this.props,
                                                    i = { pathname: `${e.uri}/members/suggested`, state: { previousStep: v.O.Creation, suggestedUser: o } };
                                                o ? t.push(i) : t.replace(i);
                                            }
                                        }),
                                    (e) => {
                                        a && a(), s({ defaultToast: { text: z }, showToast: !0, [f.ZP.ValidationFailure]: { customAction: this._handleListUpdateFailure } })(e);
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
                                { iconCrop: r } = this.state,
                                s = e.id_str;
                            if (n && n.uploader && s) {
                                return t({ listId: s, mediaId: n.id, iconCrop: r }).then(() => (i(n.id), Promise.resolve(e)), this._handleMediaUpdateFailure(n, z));
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
                            const { addToast: n, createLocalApiErrorHandler: r, removeMediaUpload: s } = this.props,
                                a = (0, _.$r)(i);
                            if (a) {
                                const e = (0, _.ZP)(a, t);
                                e && n(e);
                            } else r({ showToast: !0 })(i);
                            s(e.id), this.setState({ isSaving: !1 });
                        }),
                        (this._handleListUpdateFailure = (e) => {
                            this.setState({ nameError: e.message || H });
                        });
                    const { list: i } = e,
                        n = i?.name || "",
                        r = i?.description || "",
                        s = i?.mode === B;
                    this.state = { description: r, isPrivate: s, isSaving: !1, name: n, nameError: "", showConfirmation: !1, shouldDeleteBanner: !1 };
                }
                componentWillUnmount() {
                    const { listId: e, removeLocalMediaId: t, uploadedMedia: i } = this.props;
                    i && (this._clearBannerMedia(i.id), t(e || "-1"));
                }
                componentDidUpdate(e, t) {
                    const { onChange: i } = this.props,
                        { isSaving: n, name: r } = this.state;
                    i(!(!!(!r || !r.length || (0, s.Z)(r)) || (!this._hasListDataChanged() && !this._hasMediaChanged()) || n));
                }
                render() {
                    const { customMedia: e, defaultMedia: t, uploadedMedia: i } = this.props,
                        { description: s, isPrivate: p, name: h, nameError: f, shouldDeleteBanner: _ } = this.state,
                        v = !(0, m.Z)(e?.image),
                        C = _ || !v ? t?.image : e?.image,
                        E = n.createElement(a.Z, { ratio: o.default.theme.aspectRatios.profileBanner }, C ? n.createElement(l.Z, { "aria-label": "", aspectMode: c.Z.exact(3), image: C }) : null);
                    return n.createElement(r.Z, null, n.createElement(y.default, { "aria-label": N, aspectRatio: 3, currentContent: E, location: g.vC.ListBanner, mediaItem: i, onChange: this._handleBannerMediaChange, onFailure: this._handleBannerMediaFailure, onRemove: v || i ? this._handleBannerMediaRemove : void 0 }), n.createElement(d.Z, { errorText: f, invalid: !!f, label: F, maxLength: 25, name: "name", onChange: this._handleNameChange, value: h }), n.createElement(d.Z, { label: D, maxLength: 100, multiline: !0, name: "description", numberOfLines: 3, onChange: this._handleDescriptionChange, value: s }), i ? n.createElement(b.Z, { aspectRatio: 3, media: i, onCancel: this._handleIconCropCancel, onCropDone: this._handleIconCropDone }) : null, n.createElement(u.Z, { checked: p, helpText: G, label: U, name: "isPrivate", onChange: this._handlePrivacyChange }));
                }
            }
            V.contextType = C.rC;
            const $ = T.forwardRef(V);
        },
        421730: (e, t, i) => {
            i.d(t, { Z: () => L });
            var n = i(807896),
                r = (i(136728), i(202784)),
                s = i(67369),
                a = i(111677),
                o = i.n(a),
                l = i(339110),
                c = i(500002),
                d = i(874088),
                u = i(325686),
                p = i(731708),
                h = i(392237);
            const m = o().g13ea02c,
                f = r.forwardRef((e, t) => r.createElement(u.Z, { style: [e.style, b.container] }, r.createElement(p.ZP, { align: "center", color: "gray700" }, m))),
                b = h.default.create((e) => ({ container: { padding: e.spaces.space12, paddingTop: e.spaces.space20 } })),
                g = f;
            var _ = i(457311);
            const v = o().d6a23192,
                C = o().hc76e8cd,
                y = o().d872881a;
            function E(e) {
                const { query: t, ...i } = e;
                return r.createElement(u.Z, i, r.createElement(_.Z, { buttonLink: "/i/lists/create", buttonText: v, buttonType: "primaryFilled", header: C({ query: t }), message: y, secondaryButtonType: "primaryOutlined" }));
            }
            var Z = i(24949),
                I = i(668214),
                w = i(204744);
            const M = (0, Z.P1)(
                    w.Ww,
                    (e, t) => t.maxItems ?? 20,
                    (e, t) => {
                        const i = e.filter((e) => e.list);
                        return i.length > t ? i.slice(0, t) : i;
                    },
                ),
                P = (0, I.Z)()
                    .propsFromState(() => ({ recentSearches: M }))
                    .propsFromActions(() => ({ addQuery: w.DI }))
                    .withAnalytics({ component: "list_search_box" }),
                S = o().j177067a,
                k = [l.my.Lists];
            const L = (0, c.ZP)(
                P(function (e) {
                    const [t, i] = r.useState(""),
                        a = (0, s.Zz)();
                    return r.createElement(d.default, {
                        filter: k,
                        initialValue: e.initialValue,
                        isCompact: a,
                        maxLists: e.maxItems ?? 20,
                        onItemClick: function (t) {
                            t.type === l.El.List && e.history.push(`/i/lists/${t.id}`);
                        },
                        onQueryChange: function (e) {
                            i(e);
                        },
                        onSubmit: function () {
                            e.history.push(`/i/lists/search?q=${t}`);
                        },
                        placeholder: S,
                        renderEmptyState: function (e) {
                            return r.createElement(g, e);
                        },
                        renderNoResultsState: function (e) {
                            return r.createElement(E, (0, n.Z)({}, e, { query: t }));
                        },
                        rounded: !0,
                        source: l._4.ListManagementPage,
                        withFixedPositioning: !0,
                        withFocusStyling: !0,
                    });
                }),
            );
        },
        199127: (e, t, i) => {
            i.r(t), i.d(t, { MediaPickerWithPreview: () => c, default: () => d });
            var n = i(202784),
                r = i(850496),
                s = i(373554),
                a = i(668214),
                o = i(497294);
            const l = (0, a.Z)().propsFromActions(() => ({ addMedia: o.rA, processMultipleMedia: o.G$ }));
            class c extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: i, onChange: n, onFailure: r, processMultipleMedia: s } = this.props,
                                a = this._getAcceptedFileInputs(),
                                o = Array.from(e).find((e) => a.includes(e.type));
                            o &&
                                t([o], { location: i }).then((e) => {
                                    n && n(e.map((e) => e.id)), s(e, { onFailure: r });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, s.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: s, borderRadius: a, currentContent: o, description: l, innerStyle: c, maskStyle: d, mediaItem: u, onCrop: p, onRemove: h, rootStyle: m } = this.props;
                    return n.createElement(r.Z, { acceptGifs: e, acceptVideo: t, "aria-label": i, aspectRatio: s, borderRadius: a, currentContent: o, description: l, innerStyle: c, maskStyle: d, mediaItem: u, onAddMediaFiles: this._handleAddMediaFiles, onCrop: p, onRemove: h, rootStyle: m, withDragDrop: !0 });
                }
            }
            c.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const d = l(c);
        },
        56851: (e, t, i) => {
            i.d(t, { Z: () => f });
            var n = i(202784),
                r = i(420740),
                s = i(108362),
                a = i(731708),
                o = i(154003),
                l = i(392237),
                c = i(111677),
                d = i.n(c),
                u = i(349035);
            const p = "error-detail",
                h = d().e49537c2,
                m = d().a9ae1e78;
            class f extends n.PureComponent {
                render() {
                    return n.createElement(r.Z, { testID: p }, n.createElement(u.Z, null), n.createElement(s.Z, { style: b.root }, n.createElement(a.ZP, { align: "center", color: "gray700", style: b.retryText }, h), n.createElement(o.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const b = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        836640: (e, t, i) => {
            i.d(t, { J: () => b });
            i(136728);
            var n = i(214636),
                r = i(202784),
                s = i(614983),
                a = i.n(s),
                o = (i(585488), i(277660)),
                l = i.n(o),
                c = i(107267),
                d = i(673510),
                u = i(44527),
                p = i(663550),
                h = i(409438),
                m = i(443781);
            const f = n.Z;
            function b(e) {
                const t = l()(f, e.user),
                    { avatar: i, core: n, legacy: s, privacy: o, relationship_perspectives: h, verification: b } = t,
                    g = t.identity_profile_labels_highlighted_label?.label ? (0, u.H)(t.identity_profile_labels_highlighted_label.label) : void 0,
                    { cellClickable: _, decoration: v, displayMode: C } = e,
                    y = (function () {
                        const { viewerUserId: e } = r.useContext(m.rC);
                        return a()(!!e, "viewerUserId is undefined!"), e;
                    })(),
                    E = (0, c.useHistory)(),
                    Z = r.useCallback(() => ("function" == typeof v ? v({ displayMode: C, viewerUserId: y, userId: s?.id_str ?? "" }) : v), [v, y, s, C]),
                    I = r.useCallback(() => {
                        n?.screen_name && E.push({ pathname: `/${n.screen_name}` });
                    }, [E, n]);
                return r.createElement(d.ZP, { affiliateBadgeInfo: g, avatarUri: i?.image_url || "", decoration: Z(), displayMode: "UserDetailed", displayNameLabel: e.displayNameLabel, isBlueVerified: !!t.is_blue_verified, isFollowedBy: h?.followed_by ?? !1, isProtected: o?.protected ?? !1, isVerified: b?.verified ?? !1, name: n?.name || "", onCellClick: _ ? I : void 0, promotedItemType: p.bj.USER, screenName: n?.screen_name || "", userId: s?.id_str ?? "", verifiedType: b?.verified_type ?? void 0, withFollowsYou: !0 });
            }
            b.defaultProps = { cellClickable: !0, decoration: null, displayMode: h.Z.UserCompact };
        },
        73834: (e, t, i) => {
            i.d(t, { e: () => s });
            var n = i(615656),
                r = i(51525);
            const s = { [n.ZP.GenericNotFound]: { customAction: r.vv } };
        },
        320588: (e, t, i) => {
            i.d(t, { Mt: () => h, Sm: () => p, lg: () => u });
            var n = i(111677),
                r = i.n(n),
                s = i(615656),
                a = i(601576);
            const o = r().add55942,
                l = r().ib8f5f3c,
                c = r().e20fc756,
                d = r().hae1c934,
                u = { customErrorHandler: () => (0, a.mf)({ text: o }), showToast: !0 },
                p = { customErrorHandler: () => (0, a.mf)({ text: l }), showToast: !0 },
                h = {
                    customErrorHandler: ({ errors: e }) => {
                        if (e) {
                            if (e.filter((e) => e?.code === s.ZP.ListAdminRightsError).length) return (0, a.mf)({ text: c });
                        }
                        return (0, a.mf)({ text: d });
                    },
                    showToast: !0,
                };
        },
        42508: (e, t, i) => {
            i.d(t, { Z: () => n });
            const n = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, i) => {
            i.d(t, { ZP: () => r, n5: () => a });
            var n = i(42508);
            const r = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: i, isWithheld: n, user: r, userProfileInterstitialType: a, viewerUserId: o }) => {
                    const l = !!o && o === r.id_str,
                        c = r.blocked_by,
                        d = r.blocking,
                        u = s({ displaySensitiveMedia: e, isOwnProfile: l, user: r, userProfileInterstitialType: a }),
                        p = (l || !n) && !i;
                    return { avatar: l || (!u && !t && !i && !n), badges: l || !n, description: l || (!d && !c && !u && !i && !n), followButton: !(l || c || u || t || i || n), followersYouKnow: !l && !c && !d && !u && !t && !i && !n && (r.following || !r.protected), followIndicator: !n, fullName: p, label: p, stats: l || (!c && !u && !i && !n), subscriptionsCount: l || !r.has_hidden_subscriptions_on_profile };
                },
                s = ({ displaySensitiveMedia: e, isOwnProfile: t, user: i, userProfileInterstitialType: r }) => (r === n.Z.SensitiveMedia || r === n.Z.OffensiveProfileContent) && !(t || i.following || e),
                a = ({ isOwnProfile: e, user: t }) => {
                    const i = t.protected && !t.following;
                    return e || !i;
                };
        },
        286e3: (e, t, i) => {
            i.d(t, { Rc: () => p, nx: () => c });
            var n = i(499627),
                r = i(576469),
                s = i(390387);
            const a = "rweb.channelsTimelineBehavior",
                o = "channelsTimelineBehavior",
                l = Object.freeze({});
            const c = (e) => e[o],
                d = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                u = (e) => ({ payload: e, type: d }),
                p =
                    ({ listId: e, useRanked: t }) =>
                    (i, n, { userPersistence: s }) => {
                        const o = n(),
                            l = { ...c(o), [e]: { useRanked: t } };
                        i(u(l));
                        const d = r.Z.select(o, e);
                        return d && d.following ? s.get(a).then((i) => s.set(a, { ...i, [e]: { useRanked: t } })) : Promise.resolve();
                    };
            n.Z.register(
                {
                    [o]: function (e = l, t) {
                        return t && t.type === d ? { ...t.payload } : e;
                    },
                },
                () =>
                    (e, t, { userPersistence: i }) =>
                        (0, s.Qb)(t())
                            ? i.get(a).then((t) => {
                                  t && e(u(t));
                              })
                            : Promise.resolve(),
            );
        },
        876963: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n = i(263428),
                r = (i(585488), i(483557)),
                s = i(703710),
                a = i(750085),
                o = i(218951);
            const l = (e) => ({ getEndpoint: (e) => e.withEndpoint(r.ZP).fetchCombinedLists, getEndpointParams: ({ count: t, cursor: i }) => ({ count: t, cursor: "string" == typeof i ? i : void 0, userId: e }) }),
                c = (e) => ({ query: n.Z, variables: ({ count: t, cursor: i }, n) => ({ count: t, cursor: "string" == typeof i ? i : void 0, isListMemberTargetUserId: "0", userId: e, timelineId: `combinedListsGraphQL-${e}`, ...(0, s.d)(n.apiClient.featureSwitches) }) }),
                d = (e, t) => (0, o.Z)({ context: "FETCH_COMBINED_LISTS", formatResponse: a.Z, network: "redux" === t ? l(e) : c(e), initialFetchCount: 100, perfKey: "combinedListsGraphQL", timelineId: `combinedListsGraphQL-${e}` });
        },
        204744: (e, t, i) => {
            i.d(t, { DI: () => C, H$: () => p, OB: () => y, Ww: () => d, YB: () => u, hj: () => b, qF: () => _ });
            i(901951);
            var n = i(499627),
                r = i(390387);
            const s = "recentSearches",
                a = "rweb.recentSearches",
                o =
                    (e) =>
                    (t, i, { userPersistence: n }) =>
                        n.set(a, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                l = (e, t) => {
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
                c = { fetched: !1, recentSearches: [] };
            const d = (e) => e[s].recentSearches,
                u = (e) => d(e)[0] || null,
                p = (e) => e[s].fetched,
                h = "rweb/recentSearches/INIT_FROM_CACHE",
                m = (e) => ({ type: h, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                b =
                    (e) =>
                    (t, i, { userPersistence: n }) => {
                        t({ payload: e, type: f });
                        const s = i(),
                            a = d(s);
                        return (0, r.Qb)(s) ? t(o(a)) : Promise.resolve();
                    },
                g = "rweb/recentSearches/CLEAR_ALL",
                _ =
                    () =>
                    (e, t, { userPersistence: i }) => {
                        e({ type: g });
                        const n = t(),
                            s = d(n);
                        return (0, r.Qb)(n) ? e(o(s)) : Promise.resolve();
                    },
                v = "rweb/recentSearches/ADD_QUERY",
                C =
                    (e) =>
                    (t, i, { userPersistence: n }) => {
                        t({ payload: e, type: v });
                        const s = i(),
                            a = d(s);
                        return (0, r.Qb)(s) ? t(o(a)) : Promise.resolve();
                    },
                y =
                    () =>
                    (e, t, { userPersistence: i }) => {
                        const n = t();
                        return p(n)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: i }) => {
                                  const n = t();
                                  return (0, r.Qb)(n)
                                      ? i
                                            .get(a)
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
                [s]: function (e = c, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case v: {
                            const i = t.payload,
                                n = i ? l(i, e.recentSearches) : [];
                            return n.length > 49 && n.splice(49, 1), i && n.unshift(i), { ...e, recentSearches: n };
                        }
                        case f: {
                            const i = t.payload,
                                n = i ? l(i, e.recentSearches) : [];
                            return { ...e, recentSearches: n };
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
        783284: (e, t, i) => {
            i.d(t, { Z: () => a });
            var n = i(644829),
                r = i(750085),
                s = i(218951);
            function a(e) {
                return (0, s.Z)({ timelineId: "list-search-timeline", context: "FETCH_LIST_SEARCH_TIMELINE", formatResponse: r.Z, network: { getEndpointParams: ({ count: t, cursor: i }) => ({ count: t, cursor: "string" == typeof i ? i : void 0, rawQuery: e }), getEndpoint: (e) => e.withEndpoint(n.Z).fetchListSearch }, perfKey: "list-search" });
            }
        },
        412171: (e, t, i) => {
            i.d(t, { Z: () => a });
            var n = i(483557),
                r = i(750085),
                s = i(218951);
            const a = () => (0, s.Z)({ timelineId: "listsDiscoveryGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchSuggestedLists, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_LISTS_DISCOVERY", perfKey: "listsDiscoveryGraphQL", formatResponse: r.Z });
        },
        688781: (e, t, i) => {
            i.d(t, { DK: () => c, ZP: () => o, i7: () => l });
            i(136728);
            var n = i(483557),
                r = i(750085),
                s = i(466015),
                a = i(218951);
            const o = ({ displayLocation: e, listDescription: t, listId: i, listName: s }) => (0, a.Z)({ timelineId: `listSuggestedUsers-graphQL-${i}`, network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchRecommendedUsersGraphQL, getEndpointParams: ({ count: t, cursor: n }) => ({ listId: i, count: t, cursor: "string" == typeof n ? n : void 0, displayLocation: e }) }, formatResponse: r.Z, context: "FETCH_LIST_SUGGESTED_USERS_GRAPHQL", perfKey: "suggestedUsersGraphQL" }),
                l = (e, t) => (i) => {
                    const n = (0, s.OD)(e),
                        r = (0, s.$0)({ entryId: n, id: e, sortIndex: Date.now().toString() });
                    i(t.injectEntry(r));
                },
                c = (e, t, i) => (n) => {
                    const r = [];
                    i.map((i) => {
                        r.push(e.removeEntry((0, s.OD)(i))), r.push(t.injectEntry((0, s.$0)({ id: i, sortIndex: Date.now().toString() })));
                    }),
                        n(r);
                };
        },
        127218: (e, t, i) => {
            i.d(t, { C: () => g });
            var n = i(202784),
                r = i(614983),
                s = i.n(r),
                a = i(437429),
                o = i.n(a),
                l = i(57074),
                c = i.n(l),
                d = i(10622),
                u = i.n(d),
                p = i(585488),
                h = i(71620),
                m = i(163889),
                f = i(312771),
                b = i(535338);
            function g(e, t, i) {
                const [r, a] = n.useState(!1),
                    [l, d] = n.useState(null),
                    g = o()(),
                    _ = c()(t),
                    v = (0, h.po)(),
                    C = (0, b.p)(e, _, i);
                return n.useMemo(() => {
                    const t = (0, p.getRequest)(e).params?.metadata?.sliceInfoPath;
                    s()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: i, previous_cursor: n } =
                            (function (e, t) {
                                try {
                                    s()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let i = e;
                                    for (const e of t) s()(!!i, "The provided path is invalid."), s()("string" == typeof e, "Unexpected value for path!"), (i = i?.[e]);
                                    return i;
                                } catch (e) {
                                    return void (0, m.ZP)(e.message);
                                }
                            })(C, t) || {},
                        o = (t) => {
                            r ||
                                (a(!0),
                                u()(g, e, { ..._, cursor: t }).subscribe({
                                    complete: () => {
                                        a(!1);
                                    },
                                    error: (e) => {
                                        a(!1), d(e), v(e);
                                    },
                                }));
                        },
                        c = () => {
                            i && o(i);
                        },
                        h = () => {
                            n && o(n);
                        },
                        b = () => {
                            o(void 0);
                        };
                    return l ? { subsequentFetchStatus: f.ZP.FAILED, error: l, fetchNext: c, fetchPrevious: h, refetch: b, data: C, hasNext: Boolean(i), hasPrevious: Boolean(n) } : { subsequentFetchStatus: r ? f.ZP.LOADING : f.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: h, refetch: b, data: C, hasNext: Boolean(i), hasPrevious: Boolean(n) };
                }, [e, C, r, l, g, _, v]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-e019dbda.1d577a3a.js.map
