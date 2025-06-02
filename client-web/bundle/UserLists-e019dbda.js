"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-e019dbda", "loader.FeedbackSheet"],
    {
        229333: (e, t, n) => {
            n.d(t, { Z: () => u });
            var s = n(202784),
                i = n(466999),
                r = n(325686),
                a = n(392237),
                o = n(111677);
            const l = n.n(o)().e5b0063d;
            let c = 0;
            class d extends s.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = l({ title: t });
                    return s.createElement(r.Z, { "aria-labelledby": this._listDomId, role: "region" }, s.createElement(i.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: a.default.visuallyHidden }, t), s.createElement(r.Z, { "aria-label": n }, e));
                }
            }
            const u = d;
        },
        399887: (e, t, n) => {
            n.d(t, { Z: () => l });
            var s = n(202784),
                i = n(154003),
                r = n(111677),
                a = n.n(r),
                o = n(437358);
            const l = () => {
                const e = a().d2826908,
                    t = a().c80cb4e4;
                return s.createElement(i.ZP, { "aria-label": e, hoverLabel: { label: t }, icon: s.createElement(o.default, null), link: "/i/lists/create", pullRight: !0, type: "primaryText" });
            };
        },
        774426: (e, t, n) => {
            n.r(t), n.d(t, { default: () => u });
            n(136728);
            var s = n(202784),
                i = n(811176),
                r = n(190286),
                a = n(111677),
                o = n.n(a),
                l = n(912021);
            const c = o().cfd2f35e;
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
                        (this._getMemoizedProcessedActionItems = (0, l.Z)((e, t, n, s) =>
                            e.reduce((e, { Icon: i, confirmation: r, disabled: a, excludeFromActionMenu: o, isEmphasized: l, link: c, onClick: d, subText: u, testID: p, text: h, withCancelButton: m }, f) => {
                                if (!o) {
                                    const o = d
                                        ? () => {
                                              r ? (r.render ? s({ cancelCallback: r.onCancel, confirmCallback: d, render: r.render }) : s({ cancelCallback: r.onCancel, confirmCallback: d, text: r.text, headline: r.headline, label: r.label, confirmButtonType: r.confirmButtonType, withCancelButton: r.withCancelButton })) : (d(), n());
                                          }
                                        : n;
                                    e.push({ disabled: a, Icon: i, isEmphasized: l, testID: p, subText: u, text: h, onClick: o, link: c, withBottomBorder: t && t.includes(f) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : s.createElement(i.Z, { cancelButtonLabel: c, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: n, label: i, text: a, withCancelButton: o } = e || {};
                        return s.createElement(r.Z, { confirmButtonLabel: i, confirmButtonType: t, headline: n, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: a, withCancelButton: o });
                    }
                }
                _getProcessedActionItems() {
                    const { actionItems: e, dividerIndices: t, onClose: n } = this.props;
                    return this._getMemoizedProcessedActionItems(e, t, n, this._handleConfirm);
                }
            }
            const u = d;
        },
        414939: (e, t, n) => {
            n.d(t, { Z: () => l });
            var s = n(202784),
                i = n(325686),
                r = n(392237);
            class a extends s.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return s.createElement(i.Z, { style: o.root });
                }
            }
            const o = r.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = a;
        },
        789831: (e, t, n) => {
            n.d(t, { Z: () => c });
            var s = n(807896),
                i = n(202784),
                r = n(325686),
                a = n(392237),
                o = n(655352);
            const l = a.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: n, shouldRenderFab: a = !0, style: c, withoutBottomPadding: d, ...u }) => {
                    const p = t || r.Z,
                        h = a && !(0, o.ZP)();
                    return i.createElement(p, (0, s.Z)({}, u, { style: [h && !d && l.root, c] }), e, h ? n : null);
                };
        },
        850496: (e, t, n) => {
            n.d(t, { Z: () => C });
            var s = n(202784),
                i = n(325686),
                r = n(731708),
                a = n(15038),
                o = n(154003),
                l = n(682474),
                c = n(392237),
                d = n(111677),
                u = n.n(d),
                p = n(293615),
                h = n(837020),
                m = n(219229),
                f = n(373554),
                b = n(304059),
                g = n(751170);
            const _ = u().b87ca51a,
                v = u().eebff22c,
                y = s.createElement(p.default, null);
            class C extends s.Component {
                render() {
                    const { borderRadius: e, description: t, innerStyle: n, maskStyle: o, mediaItem: l, onAddMediaFiles: c, onCrop: d, onRemove: u, rootStyle: p, withDragDrop: h } = this.props,
                        m = l && !l.uploader,
                        f = s.createElement(s.Fragment, null, this._renderPreview(), m ? null : s.createElement(s.Fragment, null, s.createElement(i.Z, { style: [Z.mask, o, E[e]] }), s.createElement(i.Z, { style: [Z.overlaidContent, n] }, s.createElement(i.Z, { style: Z.buttonsContainer }, this._renderMediaEdit(), d ? this._renderMediaCrop() : null, u ? this._renderMediaRemove() : null), t ? s.createElement(r.ZP, { align: "center", color: "gray700", size: "subtext1", style: Z.description }, t) : null)));
                    return s.createElement(i.Z, { style: [Z.container, p, E[e]] }, h && c ? s.createElement(a.ZP, { onFilesAdded: c, style: [Z.dragDropContainer, E[e]] }, f) : f);
                }
                _renderMediaRemove() {
                    const { onRemove: e } = this.props;
                    return s.createElement(o.ZP, { "aria-label": _, hoverLabel: { label: _ }, icon: s.createElement(h.default, null), onPress: e, size: "large", style: Z.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaCrop() {
                    const { onCrop: e } = this.props;
                    return s.createElement(o.ZP, { "aria-label": v, icon: s.createElement(m.default, null), onPress: e, size: "large", style: Z.buttonLeftPadding, type: "onMediaDominantColorFilled" });
                }
                _renderMediaEdit() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": n, icon: i, multiple: r, onAddMediaFiles: a, onEdit: l } = this.props;
                    return a ? s.createElement(f.Z, { acceptGifs: e, acceptVideo: t, "aria-label": n, icon: i, multiple: r, onChange: a, size: "large", style: Z.mediaPicker, type: "onMediaDominantColorFilled" }) : s.createElement(o.ZP, { "aria-label": n, icon: i, onPress: l, size: "large", type: "onMediaDominantColorFilled" });
                }
                _renderPreview() {
                    const { aspectRatio: e, borderRadius: t, currentContent: n, mediaItem: i } = this.props;
                    return i ? s.createElement(l.Z, { ratio: e }, s.createElement(b.Z, { borderRadius: t, enableGif: !1, mediaItem: i, style: Z.mediaPreview, withCloseButton: !1 })) : n;
                }
            }
            C.defaultProps = { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: g.A.NONE, icon: y };
            const E = c.default.create((e) => ({ infinite: { borderRadius: e.borderRadii.infinite }, medium: { borderRadius: e.borderRadii.small }, none: { borderRadius: e.borderRadii.none } })),
                Z = c.default.create((e) => ({ mediaPreview: { height: "100%" }, overlaidContent: { alignItems: "center", height: "100%", justifyContent: "center", opacity: 0.75, position: "absolute", top: 0, width: "100%" }, buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" }, buttonLeftPadding: { marginStart: e.spaces.space20 }, mask: { backgroundColor: e.colors.translucentBlack30, height: "100%", position: "absolute", top: 0, width: "100%" }, container: { justifyContent: "center", overflow: "hidden" }, dragDropContainer: { borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent, borderStyle: "solid" }, mediaPicker: { margin: 0 }, description: { marginTop: e.spaces.space16 } }));
        },
        370111: (e, t, n) => {
            n.d(t, { Z: () => d });
            var s = n(202784),
                i = n(111677),
                r = n.n(i),
                a = n(330815);
            const o = r().b7fb6bda,
                l = r().e71cdf4e,
                c = Object.freeze({ NotStarted: "not_started", Started: "started", Completed: "completed" });
            function d({ aspectRatio: e, media: t, onCancel: n, onCropDone: i }) {
                const [r, d] = s.useState({ status: "not_started" }),
                    [u, p] = s.useState(!1),
                    [h, m] = s.useState(!1),
                    { croppedMediaId: f, status: b } = r;
                s.useEffect(() => {
                    b === c.NotStarted && (p(!0), d({ status: "started" })), b === c.Completed && t.id !== f && d({ status: "not_started", croppedMediaId: void 0 });
                }, [b, t, f]);
                const g = s.useCallback(() => {
                        p(!1), d({ status: c.Completed, croppedMediaId: t.id }), n();
                    }, [n, t]),
                    _ = s.useCallback(() => {
                        p(!1), m(!0);
                    }, []),
                    v = s.useCallback(() => {
                        m(!1), p(!0);
                    }, []),
                    y = s.useCallback(() => {
                        m(!1);
                    }, []),
                    C = s.useCallback(
                        (e) => {
                            d({ status: c.Completed, croppedMediaId: t.id }), i?.(e);
                        },
                        [i, t],
                    ),
                    E = { ...t, id: Number.MAX_SAFE_INTEGER, originalMediaFile: t.mediaFile, cropData: void 0 };
                return s.createElement(s.Fragment, null, u ? s.createElement(a.Z, { defaultAspectRatio: e, media: t, onCancel: g, onDone: _, title: o }) : null, h ? s.createElement(a.Z, { defaultAspectRatio: 1, media: E, onCancel: v, onCropDone: C, onDone: y, title: l }) : null);
            }
        },
        965245: (e, t, n) => {
            n.d(t, { Z: () => l });
            var s = n(807896),
                i = n(202784),
                r = n(229333),
                a = n(414939),
                o = n(334346);
            const l = ({ accessibilityTitle: e, footer: t = i.createElement(a.Z, null), ...n }) => {
                const l = i.createElement(o.C, (0, s.Z)({}, n, { footer: t }));
                return e ? i.createElement(r.Z, { title: e }, l) : l;
            };
        },
        349035: (e, t, n) => {
            n.d(t, { Z: () => r });
            var s = n(202784),
                i = n(272175);
            const r = (0, n(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), s.createElement(i.ql, null, s.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => c });
            var s = n(807896),
                i = n(202784),
                r = n(107267),
                a = n(403556),
                o = n(791632);
            const l = (e) => {
                    const t = (0, r.useHistory)(),
                        { isCompact: n, ...l } = e;
                    return i.createElement(a.Z, (0, s.Z)({}, l, { isCompact: n || (0, o.HD)(t) }));
                },
                c = i.memo(l);
        },
        131779: (e, t, n) => {
            n.d(t, { Z: () => f });
            var s = n(202784),
                i = n(154003),
                r = n(111677),
                a = n.n(r),
                o = n(320588),
                l = n(71620),
                c = n(668214),
                d = n(576469);
            const u = (0, c.Z)()
                    .propsFromActions(() => ({ removeUserFromList: d.Z.removeUserFromList, addUserToList: d.Z.addUserToList, createLocalApiErrorHandler: (0, l.zr)("ADD_REMOVE_BUTTON") }))
                    .withAnalytics({ component: "user" }),
                p = a().e68b09b4,
                h = a().af40a8e0;
            class m extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAddButton = () => s.createElement(i.ZP, { "aria-label": h, onPress: this._handleAdd, size: "small", type: "primaryFilled" }, h)),
                        (this._renderRemoveButton = () => s.createElement(i.ZP, { "aria-label": p, onPress: this._handleRemove, size: "small", type: "destructiveFilled" }, p)),
                        (this._handleAdd = () => {
                            const { addUserToList: e, createLocalApiErrorHandler: t, listId: n, onAdd: s, shouldAddUserToList: i, userId: r } = this.props;
                            i()
                                ? (e(n, { userId: r, shouldInjectURTEntry: !1 })
                                      .then(() => {
                                          s && s(r);
                                      })
                                      .catch(t(o.Mt)),
                                  this._scribeAction("add"))
                                : s && s(r);
                        }),
                        (this._handleRemove = () => {
                            const { createLocalApiErrorHandler: e, listId: t, onRemove: n, removeUserFromList: s, userId: i } = this.props;
                            s(t, { userId: i, shouldRemoveURTEntry: !1 })
                                .then(() => {
                                    n && n(i);
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
        737613: (e, t, n) => {
            n.d(t, { Z: () => b });
            var s = n(202784),
                i = n(325686),
                r = n(834324),
                a = n(392237),
                o = n(111677),
                l = n.n(o),
                c = n(125363),
                d = n(390387),
                u = n(919022);
            const p = l().aacfbe55,
                h = l().ga8627cd,
                m = l().e6d2573f,
                f = l().d37a3e15,
                b = (e) => {
                    const { isReply: t, style: n, type: a } = e,
                        o = (0, c.v9)(d.Lz),
                        l = (0, c.v9)(u.ZP.selectViewerUser),
                        b = o ? l?.screen_name : void 0,
                        _ = s.useMemo(() => [g.root, n], [n]);
                    let v = p({ screenName: b });
                    return "Tweet" === a && t ? (v = h({ screenName: b })) : "DM" === a ? (v = m({ screenName: b })) : "List" === a && (v = f({ screenName: b })), b ? s.createElement(i.Z, { style: _ }, s.createElement(r.Z, { text: v })) : null;
                },
                g = a.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space12 } }));
        },
        387524: (e, t, n) => {
            n.d(t, { Z: () => f });
            var s = n(807896),
                i = n(202784),
                r = n(325686),
                a = n(292627),
                o = n(537392),
                l = n(392237),
                c = n(365023),
                d = n(392027),
                u = n(774654),
                p = n(725516),
                h = n(443781);
            const m = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                f = (e) => {
                    const { "aria-label": t, label: n, onPress: f, scribeComponent: b, ...g } = e,
                        { loggedInUserId: _ } = i.useContext(h.rC),
                        v = (0, p.z)(),
                        y = i.useCallback(
                            (e) => {
                                v.scribe({ component: b, action: "click" }), f && f(e);
                            },
                            [v, f, b],
                        ),
                        C = u.ZM.useCollapsibleNavBars(),
                        E = [...u.Ah({ elementPosition: "bottom" }), C && m.fabStaysAboveSafeArea];
                    return _
                        ? i.createElement(
                              a.Z.FloatingAction,
                              null,
                              i.createElement(o.ZP, null, ({ windowWidth: e }) => {
                                  const a = e > l.default.theme.breakpoints.large,
                                      o = e > l.default.theme.breakpoints.medium,
                                      u = e < l.default.theme.breakpoints.micro,
                                      p = [m.root, o && m.rootMedium, a && m.rootLarge],
                                      h = [m.fab, a && m.fabLarge, u && m.fabMicro, E];
                                  return i.createElement(
                                      r.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: p },
                                      i.createElement(c.Z, { id: "FloatingActionButtonBase" }, (e, o) => i.createElement(r.Z, (0, s.Z)({ ref: e() }, o({ style: h })), i.createElement(d.Z, (0, s.Z)({}, g, { "aria-label": t, label: a ? n : void 0, onPress: y, style: u && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, n) => {
            n.d(t, { Z: () => l });
            n(136728);
            var s = n(202784),
                i = n(387524),
                r = n(635510);
            const a = "/compose/post";
            class o extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: n } = this.props,
                                s = { pathname: a, state: (t && t()) || {} };
                            n.push(s);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: n, scribeComponent: o } = this.props;
                    return s.createElement(i.Z, { "aria-label": e, href: a, icon: t, label: n, onPress: this._handlePress, scribeComponent: o, testID: r.Z.tweet });
                }
            }
            const l = o;
        },
        32677: (e, t, n) => {
            n.d(t, { Z: () => u });
            var s = n(202784),
                i = n(111677),
                r = n.n(i),
                a = n(186444),
                o = n(355883);
            const l = r().j0179e90,
                c = r().ee69d769({ verb: "" }),
                d = s.createElement(a.default, null),
                u = ({ getLocationState: e, history: t }) => s.createElement(o.Z, { "aria-label": l, getLocationState: e, history: t, icon: d, label: c, scribeComponent: "floating_compose_button" });
        },
        841993: (e, t, n) => {
            n.d(t, { Z: () => h });
            var s = n(202784),
                i = n(111677),
                r = n.n(i),
                a = n(437358),
                o = n(725516),
                l = n(387524),
                c = n(635510);
            const d = r().d2826908,
                u = r().c80cb4e4,
                p = s.createElement(a.default, null),
                h = (e) => {
                    const { page: t } = e,
                        n = (0, o.z)(),
                        i = s.useCallback(
                            (e) => {
                                n.scribe({ page: t, component: "floating_action_button", element: "create_list_button", action: "click" });
                            },
                            [t, n],
                        );
                    return s.createElement(l.Z, { "aria-label": d, href: "/i/lists/create", icon: p, label: u, onPress: i, scribeComponent: "floating_list_button", testID: c.Z.createList });
                };
        },
        635510: (e, t, n) => {
            n.d(t, { Z: () => s });
            const s = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        989816: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var s = n(202784),
                i = n(970187),
                r = n(392237),
                a = n(379327),
                o = n(913973),
                l = n(320588),
                c = n(233391),
                d = n(288955),
                u = n(71620),
                p = n(668214),
                h = n(576469);
            const m = (0, p.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("FOLLOW_LIST_BUTTON"), follow: h.Z.subscribe, unfollow: h.Z.unsubscribe }))
                    .withAnalytics(),
                f = { followIcon: s.createElement(a.default, null), followingIcon: s.createElement(o.default, null) },
                b = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: n, disabled: r, follow: a, isFollowing: o, isMinimal: u, listId: p, listName: h, unfollow: m, user: b } = e,
                        _ = s.useCallback(() => {
                            t.scribeAction("follow"), a(p).catch(n(l.lg));
                        }, [t, n, a, p]),
                        v = s.useCallback(() => {
                            t.scribeAction("unfollow"), m(p).catch(n(l.Sm));
                        }, [t, n, p, m]);
                    return s.createElement(d.Z, { customText: h, displayMode: c.BH.subscribe, userFullName: b?.name }, (e) => s.createElement(i.Z, { buttonIcons: u ? f : void 0, disabled: r, displayMode: u ? "only-icon" : void 0, isFollowing: o, onFollow: e(_), onUnfollow: e(v), showRelationshipChangeConfirmation: !1, size: "small", style: g.followButton, type: "list" }));
                },
                g = r.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
                _ = m(s.memo(b));
        },
        330815: (e, t, n) => {
            n.d(t, { Z: () => w });
            var s = n(202784),
                i = n(392237),
                r = n(154003),
                a = n(111677),
                o = n.n(a),
                l = n(184605),
                c = n(980407),
                d = n(873637),
                u = n(668214),
                p = n(497294);
            const h = (e, t) => (t.media ? t.media : (0, l.Z)(t.mediaId) ? (0, p.m3)(e, t.mediaId)[0] : void 0),
                m = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                f = (0, u.Z)()
                    .propsFromState(() => ({ media: h, mediaId: m }))
                    .propsFromActions(() => ({ processMedia: p.C4, updateMediaUpload: p._J }))
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
                            return s.createElement(r.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: b, type: "primaryFilled" }, _);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: n, media: s, mediaId: i, onDone: r, processMedia: a, updateMediaUpload: o } = this.props;
                                this.setState({ isProcessing: !0 });
                                const c = t.getCropData(),
                                    { originalMediaFile: d } = s || {},
                                    u = !d || (0 === c.top && 0 === c.left && c.width === d.width && c.height === d.height);
                                (0, l.Z)(i) &&
                                    (e
                                        ? (e(c), r())
                                        : (o({ id: i, cropData: u ? void 0 : c }),
                                          a(i).then(() => {
                                              this.setState({ isProcessing: !1 }), n.scribe({ action: "done" }), r();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = s.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: n, withAspectRatioOptions: i, withZoomControl: r } = this.props,
                        a = this._getMedia();
                    return s.createElement(c.Z, { backButtonType: "back", containerStyle: y.root, documentTitle: n || g, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: n || g }, s.createElement(d.Z, { defaultAspectRatio: e, media: a, ref: this._cropper, withAspectRatioOptions: i, withZoomControl: r }));
                }
            }
            const y = i.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                C = f(v);
            var E = n(757700);
            const Z = i.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                w = (e) => s.createElement(E.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: Z.modal }, s.createElement(C, e));
        },
        935167: (e, t, n) => {
            n.d(t, { ZP: () => W });
            n(136728);
            var s = n(202784),
                i = n(325686),
                r = n(601413),
                a = n(392237),
                o = n(111677),
                l = n.n(o),
                c = n(415506),
                d = n(170397),
                u = n(516951),
                p = n(805104),
                h = n(774426),
                m = n(376293),
                f = n(712816),
                b = n(879596),
                g = n(395067),
                _ = n(443781),
                v = n(688715),
                y = n(907552),
                C = n(668214),
                E = n(576469),
                Z = n(601576);
            const w = (e, t) => E.Z.selectListAuthorScreenName(e, t.list.id_str),
                I = (0, C.Z)()
                    .propsFromState(() => ({ author: w }))
                    .propsFromActions(() => ({ addToast: Z.fz }))
                    .withAnalytics(),
                M = l().i6da4f7a,
                P = l().a062ff80;
            const k = I(function (e) {
                    const {
                            list: { id_str: t },
                            scribeNamespace: n,
                        } = e,
                        i = ((r = t), (0, v.ju)(`https://x.com/i/lists/${r}`));
                    var r;
                    return s.createElement(y.ZP, { copyLinkShareLabel: P, externalShareLabel: M, scribeNamespace: n, url: i });
                }),
                S = k;
            var L = n(71620),
                A = n(286e3),
                R = n(390387),
                T = n(919022),
                x = n(510588);
            const B = (0, C.Z)()
                .propsFromState(() => ({ author: x.l1, basePath: x.$5, viewerUserId: R._h, isSubscribed: x.cx, list: x.Fz, useRanked: x._g }))
                .propsFromActions(() => ({ addToast: Z.fz, block: T.ZP.block, createLocalApiErrorHandler: (0, L.zr)("LIST_ACTIONS"), toggleMute: E.Z.toggleMute, unblock: T.ZP.unblock, updateRankMode: A.Rc }))
                .withAnalytics({ page: "spheres_detail" });
            var F = n(638537);
            l().a9ca06d2;
            const D = l().h63a5c3c,
                U = l().a367dc9a,
                N = l().dd438748,
                z = l().fe7e217c,
                O = l().ce78b698,
                H = l().i5a1628a,
                G = l().f333a93e,
                $ = l().c7294984,
                V = l().g6340998,
                Q = (e) => s.createElement(l().I18NFormatMessage, { $i18n: "aa4026bf" }, s.createElement(r.Z, { screenName: e }));
            class j extends s.Component {
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
                            return this.props.listId && e.length > 0 ? s.createElement(p.Z, { "aria-label": D, onPress: this._handleOverflowMenuPress, renderMenu: this._renderActionMenu, style: q.overflowMenu }) : null;
                        }),
                        (this._handleOverflowMenuPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ element: "more", action: "click" });
                        }),
                        (this._renderActionMenu = (e) => (this.props.listId ? this._renderCurationActionMenu(e) : null)),
                        (this._renderCurationActionMenu = (e) => {
                            const t = this._getActionMenuItems();
                            return s.createElement(h.default, { actionItems: t, onClose: e });
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
                                i = g.C2.List;
                            if ((0, g.Yw)(s, i)) {
                                const n = (0, g.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: i, reportedList: t, reportedUser: t?.user, scribeNamespace: e.contextualScribeNamespace });
                                return { text: $, Icon: c.default, onClick: u.Z, link: { pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(n) } } } };
                            }
                            return { text: $, Icon: c.default, onClick: u.Z, link: { pathname: `/i/report/list/${n}`, state: { clientReferer: window.location.pathname, scribeNamespace: e.contextualScribeNamespace } } };
                        }),
                        (this._getUserBlockAction = () => {
                            const { author: e } = this.props;
                            if (e) return (0, m.op)({ blockAction: this._handleBlockUser, blockSubtext: Q, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), source: m.SC.LIST_DETAIL, unblockAction: this._handleUnblockUser, unblockSubtext: V, user: e });
                        }),
                        (this._getMuteToggleAction = () => {
                            const { addToast: e, analytics: t, isSubscribed: n, list: s, toggleMute: i } = this.props;
                            if (s && n && this._isMutingEnabled) return (0, F.Z)({ list: s, addToast: e, toggleMute: i, scribe: (e) => t.scribe({ component: "customize", ...e }) });
                        }),
                        (this._getSwitchRankModeAction = () => {
                            const { useRanked: e } = this.props;
                            return { text: e ? z : H, Icon: d.default, onClick: this._handleSwitchRankMode, subText: e ? O : G };
                        }),
                        (this._handleBlockUser = () => {
                            const { addToast: e, analytics: t, author: n, block: s, createLocalApiErrorHandler: i } = this.props;
                            n &&
                                (s(n.id_str, { promotedContent: n.promoted_content }).then(() => {
                                    e({ action: { label: m.Vt, onAction: this._handleUnblockUser }, text: m.KV });
                                }, i(f.d)),
                                t.scribe({ action: "block" }));
                        }),
                        (this._handleUnblockUser = () => {
                            const { analytics: e, author: t, createLocalApiErrorHandler: n, unblock: s } = this.props;
                            t && (s(t.id_str, { promotedContent: t.promoted_content }).catch(n(b.D)), e.scribe({ action: "unblock" }));
                        }),
                        (this._handleSwitchRankMode = () => {
                            const { addToast: e, analytics: t, listId: n, updateRankMode: s, useRanked: i } = this.props,
                                r = i ? U : N,
                                a = i ? "see_latest" : "see_top";
                            s({ listId: n, useRanked: !i }).then(() => {
                                e({ text: r });
                            }),
                                t.scribe({ action: "click", component: "customize", element: a });
                        });
                }
                render() {
                    const { list: e, scribeNamespace: t } = this.props;
                    return s.createElement(i.Z, { style: q.rightControl }, e ? s.createElement(S, { list: e, scribeNamespace: t }) : null, this._renderOverflowMenu());
                }
            }
            j.contextType = _.rC;
            const q = a.default.create((e) => ({ listInfoButton: { marginStart: e.spaces.space4 }, overflowMenu: { marginStart: e.spaces.space4 }, rightControl: { alignItems: "center", flexDirection: "row" } })),
                W = B(j);
        },
        527409: (e, t, n) => {
            n.r(t), n.d(t, { ListDetail: () => R, default: () => x, formatNumber: () => S });
            var s = n(202784),
                i = n(272175),
                r = n(325686),
                a = n(98538),
                o = n(530525),
                l = n(439592),
                c = n(392237),
                d = n(682474),
                u = n(731708),
                p = n(366635),
                h = n(154003),
                m = n(111677),
                f = n.n(m),
                b = n(121791),
                g = n(401388),
                _ = n(443781),
                v = n(989816),
                y = n(668214),
                C = n(576469),
                E = n(390387),
                Z = n(919022),
                w = n(510588);
            const I = (e, t) => {
                    const { listId: n } = t;
                    return n ? C.Z.select(e, n) : void 0;
                },
                M = (e, t) => {
                    const n = I(e, t),
                        s = n?.user;
                    return s ? Z.ZP.select(e, s) : void 0;
                },
                P = (e, t) => w.tt(e, t.listId),
                k = (0, y.Z)()
                    .propsFromState(() => ({ list: I, user: M, viewerUserId: E._h, media: P }))
                    .withAnalytics(),
                S = f().d58baa7f,
                L = f().ca5d0a82,
                A = f().j681933e;
            class R extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = () => {
                            const { media: e } = this.props,
                                { image: t } = e;
                            if (t && !(0, g.Z)(t)) {
                                const { url: e } = t;
                                return s.createElement(s.Fragment, null, s.createElement(i.ql, { prioritizeSeoTags: !0 }, s.createElement("meta", { content: e, property: "og:image" })), s.createElement(o.Z, { "aria-label": "", aspectMode: l.Z.exact(3), backgroundColor: c.default.theme.colors.gray300, image: t }));
                            }
                            return s.createElement(d.Z, { ratio: 3 }, s.createElement(r.Z, { style: T.placeholderImageContainer }));
                        }),
                        (this._renderListDescription = () => {
                            const { list: e, user: t } = this.props;
                            if (e) {
                                const { description: n, member_count: a, mode: o, name: l, subscriber_count: c } = e,
                                    d = c || 0,
                                    h = a || 0,
                                    m = "private" === o;
                                return s.createElement(r.Z, { style: T.description }, s.createElement(r.Z, { style: [T.name, T.text] }, s.createElement(u.ZP, { align: "center", size: "headline1", weight: "bold" }, l.trim()), m ? s.createElement(b.default, { "aria-label": A, style: T.iconLock }) : null), n ? s.createElement(s.Fragment, null, s.createElement(i.ql, { prioritizeSeoTags: !0 }, s.createElement("meta", { content: n.trim(), property: "og:description" })), s.createElement(u.ZP, { align: "center", style: T.text }, n.trim())) : null, t ? s.createElement(p.Z, { affiliateBadgeInfo: t.highlightedLabel, isBlueVerified: t.is_blue_verified, isProtected: t.protected, isVerified: t.verified, name: t.name, onLinkClick: this._handleUserNamePress, profileImageUrl: t.profile_image_url_https, screenName: t.screen_name, style: T.text, verifiedType: t.verified_type, withLink: !0 }) : null, this._renderCount(d, h), this._renderActionButton());
                            }
                        }),
                        (this._renderCount = (e, t) => {
                            const { basePath: n } = this.props,
                                i = S(e),
                                r = S(t);
                            return s.createElement(a.Z.Group, null, s.createElement(a.Z, { count: t, link: `${n}/members`, onPress: this._handleMembersCountPress }, s.createElement(f().I18NFormatMessage, { $i18n: "b38e130b" }, s.createElement(a.Z.Value, null, f().ibd0106e({ formattedCount: r })), s.createElement(a.Z.Label, null, f().cface2d1({ count: t })))), s.createElement(a.Z, { count: e, link: `${n}/followers`, onPress: this._handleSubscribersCountPress }, ((o = e), (l = i), s.createElement(f().I18NFormatMessage, { $i18n: "d2924acb" }, s.createElement(a.Z.Value, null, f().ec08efe4({ formattedCount: l })), s.createElement(a.Z.Label, null, f().h9f711f0({ count: o }))))));
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
                            const { basePath: e, list: t, user: n, viewerUserId: i, withEditButton: a } = this.props;
                            if (t && t.user) {
                                const o = n?.blocking;
                                return t.user === i && a ? s.createElement(h.ZP, { link: `${e}/info`, onPress: this._handleEditPress, style: T.button, type: "primaryOutlined" }, L) : t.user !== i ? s.createElement(r.Z, { style: T.button }, s.createElement(v.Z, { disabled: o, isFollowing: !!t.following, listId: t.id_str, listName: t.name, user: n })) : null;
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
                    return e ? s.createElement(r.Z, { style: [T.container, t && T.hoverCard] }, this._renderImage(), this._renderListDescription()) : null;
                }
            }
            (R.contextType = _.rC), (R.defaultProps = { withEditButton: !0 });
            const T = c.default.create((e) => ({ container: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderStyle: "solid" }, hoverCard: { borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, button: { marginTop: e.spaces.space20, marginBottom: e.spaces.space12 }, description: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12, alignItems: "center" }, name: { flexDirection: "row", justifyContent: "center", alignItems: "center" }, iconLock: { color: e.colors.text, marginStart: e.spaces.space2 }, text: { width: "100%", marginBottom: e.spaces.space12 }, placeholderImageContainer: { backgroundColor: e.colors.gray300, height: "100%" } })),
                x = k(R);
        },
        583957: (e, t, n) => {
            n.d(t, { Z: () => V });
            n(136728);
            var s = n(202784),
                i = n(325686),
                r = n(733357),
                a = n(682474),
                o = n(392237),
                l = n(530525),
                c = n(439592),
                d = n(855488),
                u = n(954110),
                p = n(111677),
                h = n.n(p),
                m = n(401388),
                f = n(615656),
                b = n(370111),
                g = n(716233),
                _ = n(166677),
                v = n(538327),
                y = n(443781),
                C = n(199127),
                E = n(184605),
                Z = n(71620),
                w = n(668214),
                I = n(576469),
                M = n(497294),
                P = n(601576),
                k = n(510588);
            const S = (e, t) => {
                    const n = I.Z.selectLocalMediaId(e, t.listId || "-1"),
                        [s] = (0, E.Z)(n) ? M.m3(e, n) : [];
                    return s;
                },
                L = (e, t) => {
                    const { listId: n } = t;
                    return n ? k.tt(e, n) : void 0;
                },
                A = (e, t) => {
                    const { listId: n } = t,
                        s = n && I.Z.select(e, n);
                    return s ? s.defaultBanner : void 0;
                },
                R = (e, t) => t.location.state?.suggestedUser,
                T = (0, w.Z)()
                    .propsFromState(() => ({ suggestedUser: R, uploadedMedia: S, customMedia: L, defaultMedia: A }))
                    .propsFromActions(({ context: e }) => ({ createLocalApiErrorHandler: (0, Z.zr)(e), addToast: P.fz, addLocalMediaId: I.Z.addLocalMediaId, createList: I.Z.createList, deleteListMedia: I.Z.deleteListMedia, editList: I.Z.editList, editListMedia: I.Z.editListMedia, removeMediaUpload: M.WU, removeLocalMediaId: I.Z.removeLocalMediaId }))
                    .withAnalytics(),
                x = "public",
                B = "private",
                F = h().d4e220b4,
                D = h().e36287c6,
                U = h().f30edc68,
                N = h().df31d76a,
                z = h().h51a2cf6,
                O = h().bb10280e,
                H = h().h8885a22,
                G = h().f8132984;
            class $ extends s.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._hasListDataChanged = () => {
                            const { description: e, isPrivate: t, name: n } = this.state,
                                { list: s } = this.props,
                                i = s?.mode === B;
                            return e !== s?.description || n !== s?.name || t !== i;
                        }),
                        (this._hasMediaChanged = () => {
                            const { uploadedMedia: e } = this.props,
                                { shouldDeleteBanner: t } = this.state;
                            return !!e?.uploader || t;
                        }),
                        (this.save = () => {
                            const { description: e, isPrivate: t, name: n, shouldDeleteBanner: s } = this.state,
                                { analytics: i, createLocalApiErrorHandler: r, deleteListMedia: a, editList: o, list: l, listId: c } = this.props;
                            this.setState({ isSaving: !0 }), i.scribeAction("save");
                            const d = [];
                            if (s && c) {
                                const e = a(c).catch(r({ defaultToast: { text: z }, showToast: !0 }));
                                d.push(e);
                            }
                            if ((this._hasMediaChanged() && l && d.push(this._handleUploadMedia(l)), this._hasListDataChanged() && c)) {
                                const s = o(c, { description: e, mode: t ? B : x, name: n }).catch(r({ defaultToast: { text: O }, showToast: !0, [f.ZP.ValidationFailure]: { customAction: this._handleListUpdateFailure } }));
                                d.push(s);
                            }
                            Promise.all(d).then(() => {
                                this.state.nameError || this._goBackToListDetail();
                            }),
                                this.setState({ isSaving: !1 });
                        }),
                        (this.create = () => {
                            const { description: e, isPrivate: t, name: n } = this.state,
                                { analytics: s, createList: i, createLocalApiErrorHandler: r, onError: a, suggestedUser: o } = this.props,
                                l = t ? B : x;
                            this.setState({ isSaving: !0 }),
                                s.scribeAction("create"),
                                i({ name: n, description: e, mode: l }).then(
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
                                        a && a(), r({ defaultToast: { text: O }, showToast: !0, [f.ZP.ValidationFailure]: { customAction: this._handleListUpdateFailure } })(e);
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
                                { iconCrop: i } = this.state,
                                r = e.id_str;
                            if (s && s.uploader && r) {
                                return t({ listId: r, mediaId: s.id, iconCrop: i }).then(() => (n(s.id), Promise.resolve(e)), this._handleMediaUpdateFailure(s, O));
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
                            const { addToast: s, createLocalApiErrorHandler: i, removeMediaUpload: r } = this.props,
                                a = (0, _.$r)(n);
                            if (a) {
                                const e = (0, _.ZP)(a, t);
                                e && s(e);
                            } else i({ showToast: !0 })(n);
                            r(e.id), this.setState({ isSaving: !1 });
                        }),
                        (this._handleListUpdateFailure = (e) => {
                            this.setState({ nameError: e.message || H });
                        });
                    const { list: n } = e,
                        s = n?.name || "",
                        i = n?.description || "",
                        r = n?.mode === B;
                    this.state = { description: i, isPrivate: r, isSaving: !1, name: s, nameError: "", showConfirmation: !1, shouldDeleteBanner: !1 };
                }
                componentWillUnmount() {
                    const { listId: e, removeLocalMediaId: t, uploadedMedia: n } = this.props;
                    n && (this._clearBannerMedia(n.id), t(e || "-1"));
                }
                componentDidUpdate(e, t) {
                    const { onChange: n } = this.props,
                        { isSaving: s, name: i } = this.state;
                    n(!(!!(!i || !i.length || (0, r.Z)(i)) || (!this._hasListDataChanged() && !this._hasMediaChanged()) || s));
                }
                render() {
                    const { customMedia: e, defaultMedia: t, uploadedMedia: n } = this.props,
                        { description: r, isPrivate: p, name: h, nameError: f, shouldDeleteBanner: _ } = this.state,
                        v = !(0, m.Z)(e?.image),
                        y = _ || !v ? t?.image : e?.image,
                        E = s.createElement(a.Z, { ratio: o.default.theme.aspectRatios.profileBanner }, y ? s.createElement(l.Z, { "aria-label": "", aspectMode: c.Z.exact(3), image: y }) : null);
                    return s.createElement(i.Z, null, s.createElement(C.default, { "aria-label": N, aspectRatio: 3, currentContent: E, location: g.vC.ListBanner, mediaItem: n, onChange: this._handleBannerMediaChange, onFailure: this._handleBannerMediaFailure, onRemove: v || n ? this._handleBannerMediaRemove : void 0 }), s.createElement(d.Z, { errorText: f, invalid: !!f, label: F, maxLength: 25, name: "name", onChange: this._handleNameChange, value: h }), s.createElement(d.Z, { label: D, maxLength: 100, multiline: !0, name: "description", numberOfLines: 3, onChange: this._handleDescriptionChange, value: r }), n ? s.createElement(b.Z, { aspectRatio: 3, media: n, onCancel: this._handleIconCropCancel, onCropDone: this._handleIconCropDone }) : null, s.createElement(u.Z, { checked: p, helpText: G, label: U, name: "isPrivate", onChange: this._handlePrivacyChange }));
                }
            }
            $.contextType = y.rC;
            const V = T.forwardRef($);
        },
        421730: (e, t, n) => {
            n.d(t, { Z: () => L });
            var s = n(807896),
                i = (n(136728), n(202784)),
                r = n(67369),
                a = n(111677),
                o = n.n(a),
                l = n(339110),
                c = n(500002),
                d = n(874088),
                u = n(325686),
                p = n(731708),
                h = n(392237);
            const m = o().g13ea02c,
                f = i.forwardRef((e, t) => i.createElement(u.Z, { style: [e.style, b.container] }, i.createElement(p.ZP, { align: "center", color: "gray700" }, m))),
                b = h.default.create((e) => ({ container: { padding: e.spaces.space12, paddingTop: e.spaces.space20 } })),
                g = f;
            var _ = n(457311);
            const v = o().d6a23192,
                y = o().hc76e8cd,
                C = o().d872881a;
            function E(e) {
                const { query: t, ...n } = e;
                return i.createElement(u.Z, n, i.createElement(_.Z, { buttonLink: "/i/lists/create", buttonText: v, buttonType: "primaryFilled", header: y({ query: t }), message: C, secondaryButtonType: "primaryOutlined" }));
            }
            var Z = n(24949),
                w = n(668214),
                I = n(204744);
            const M = (0, Z.P1)(
                    I.Ww,
                    (e, t) => t.maxItems ?? 20,
                    (e, t) => {
                        const n = e.filter((e) => e.list);
                        return n.length > t ? n.slice(0, t) : n;
                    },
                ),
                P = (0, w.Z)()
                    .propsFromState(() => ({ recentSearches: M }))
                    .propsFromActions(() => ({ addQuery: I.DI }))
                    .withAnalytics({ component: "list_search_box" }),
                k = o().j177067a,
                S = [l.my.Lists];
            const L = (0, c.ZP)(
                P(function (e) {
                    const [t, n] = i.useState(""),
                        a = (0, r.Zz)();
                    return i.createElement(d.default, {
                        filter: S,
                        initialValue: e.initialValue,
                        isCompact: a,
                        maxLists: e.maxItems ?? 20,
                        onItemClick: function (t) {
                            t.type === l.El.List && e.history.push(`/i/lists/${t.id}`);
                        },
                        onQueryChange: function (e) {
                            n(e);
                        },
                        onSubmit: function () {
                            e.history.push(`/i/lists/search?q=${t}`);
                        },
                        placeholder: k,
                        renderEmptyState: function (e) {
                            return i.createElement(g, e);
                        },
                        renderNoResultsState: function (e) {
                            return i.createElement(E, (0, s.Z)({}, e, { query: t }));
                        },
                        rounded: !0,
                        source: l._4.ListManagementPage,
                        withFixedPositioning: !0,
                        withFocusStyling: !0,
                    });
                }),
            );
        },
        199127: (e, t, n) => {
            n.r(t), n.d(t, { MediaPickerWithPreview: () => c, default: () => d });
            var s = n(202784),
                i = n(850496),
                r = n(373554),
                a = n(668214),
                o = n(497294);
            const l = (0, a.Z)().propsFromActions(() => ({ addMedia: o.rA, processMultipleMedia: o.G$ }));
            class c extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: n, onChange: s, onFailure: i, processMultipleMedia: r } = this.props,
                                a = this._getAcceptedFileInputs(),
                                o = Array.from(e).find((e) => a.includes(e.type));
                            o &&
                                t([o], { location: n }).then((e) => {
                                    s && s(e.map((e) => e.id)), r(e, { onFailure: i });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, r.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": n, aspectRatio: r, borderRadius: a, currentContent: o, description: l, innerStyle: c, maskStyle: d, mediaItem: u, onCrop: p, onRemove: h, rootStyle: m } = this.props;
                    return s.createElement(i.Z, { acceptGifs: e, acceptVideo: t, "aria-label": n, aspectRatio: r, borderRadius: a, currentContent: o, description: l, innerStyle: c, maskStyle: d, mediaItem: u, onAddMediaFiles: this._handleAddMediaFiles, onCrop: p, onRemove: h, rootStyle: m, withDragDrop: !0 });
                }
            }
            c.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const d = l(c);
        },
        56851: (e, t, n) => {
            n.d(t, { Z: () => f });
            var s = n(202784),
                i = n(420740),
                r = n(108362),
                a = n(731708),
                o = n(154003),
                l = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(349035);
            const p = "error-detail",
                h = d().e49537c2,
                m = d().a9ae1e78;
            class f extends s.PureComponent {
                render() {
                    return s.createElement(i.Z, { testID: p }, s.createElement(u.Z, null), s.createElement(r.Z, { style: b.root }, s.createElement(a.ZP, { align: "center", color: "gray700", style: b.retryText }, h), s.createElement(o.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const b = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        836640: (e, t, n) => {
            n.d(t, { J: () => b });
            n(136728);
            var s = n(214636),
                i = n(202784),
                r = n(614983),
                a = n.n(r),
                o = (n(585488), n(277660)),
                l = n.n(o),
                c = n(107267),
                d = n(673510),
                u = n(44527),
                p = n(663550),
                h = n(409438),
                m = n(443781);
            const f = s.Z;
            function b(e) {
                const t = l()(f, e.user),
                    { avatar: n, core: s, legacy: r, privacy: o, relationship_perspectives: h, verification: b } = t,
                    g = t.identity_profile_labels_highlighted_label?.label ? (0, u.H)(t.identity_profile_labels_highlighted_label.label) : void 0,
                    { cellClickable: _, decoration: v, displayMode: y } = e,
                    C = (function () {
                        const { viewerUserId: e } = i.useContext(m.rC);
                        return a()(!!e, "viewerUserId is undefined!"), e;
                    })(),
                    E = (0, c.useHistory)(),
                    Z = i.useCallback(() => ("function" == typeof v ? v({ displayMode: y, viewerUserId: C, userId: r?.id_str ?? "" }) : v), [v, C, r, y]),
                    w = i.useCallback(() => {
                        s?.screen_name && E.push({ pathname: `/${s.screen_name}` });
                    }, [E, s]);
                return i.createElement(d.ZP, { affiliateBadgeInfo: g, avatarUri: n?.image_url || "", decoration: Z(), displayMode: "UserDetailed", displayNameLabel: e.displayNameLabel, isBlueVerified: !!t.is_blue_verified, isFollowedBy: h?.followed_by ?? !1, isProtected: o?.protected ?? !1, isVerified: b?.verified ?? !1, name: s?.name || "", onCellClick: _ ? w : void 0, promotedItemType: p.bj.USER, screenName: s?.screen_name || "", userId: r?.id_str ?? "", verifiedType: b?.verified_type ?? void 0, withFollowsYou: !0 });
            }
            b.defaultProps = { cellClickable: !0, decoration: null, displayMode: h.Z.UserCompact };
        },
        73834: (e, t, n) => {
            n.d(t, { e: () => r });
            var s = n(615656),
                i = n(51525);
            const r = { [s.ZP.GenericNotFound]: { customAction: i.vv } };
        },
        320588: (e, t, n) => {
            n.d(t, { Mt: () => h, Sm: () => p, lg: () => u });
            var s = n(111677),
                i = n.n(s),
                r = n(615656),
                a = n(601576);
            const o = i().add55942,
                l = i().ib8f5f3c,
                c = i().e20fc756,
                d = i().hae1c934,
                u = { customErrorHandler: () => (0, a.mf)({ text: o }), showToast: !0 },
                p = { customErrorHandler: () => (0, a.mf)({ text: l }), showToast: !0 },
                h = {
                    customErrorHandler: ({ errors: e }) => {
                        if (e) {
                            if (e.filter((e) => e?.code === r.ZP.ListAdminRightsError).length) return (0, a.mf)({ text: c });
                        }
                        return (0, a.mf)({ text: d });
                    },
                    showToast: !0,
                };
        },
        42508: (e, t, n) => {
            n.d(t, { Z: () => s });
            const s = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, n) => {
            n.d(t, { ZP: () => i, n5: () => a });
            var s = n(42508);
            const i = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: n, isWithheld: s, user: i, userProfileInterstitialType: a, viewerUserId: o }) => {
                    const l = !!o && o === i.id_str,
                        c = i.blocked_by,
                        d = i.blocking,
                        u = r({ displaySensitiveMedia: e, isOwnProfile: l, user: i, userProfileInterstitialType: a }),
                        p = (l || !s) && !n;
                    return { avatar: l || (!u && !t && !n && !s), badges: l || !s, description: l || (!d && !c && !u && !n && !s), followButton: !(l || c || u || t || n || s), followersYouKnow: !l && !c && !d && !u && !t && !n && !s && (i.following || !i.protected), followIndicator: !s, fullName: p, label: p, stats: l || (!c && !u && !n && !s), subscriptionsCount: l || !i.has_hidden_subscriptions_on_profile };
                },
                r = ({ displaySensitiveMedia: e, isOwnProfile: t, user: n, userProfileInterstitialType: i }) => (i === s.Z.SensitiveMedia || i === s.Z.OffensiveProfileContent) && !(t || n.following || e),
                a = ({ isOwnProfile: e, isSoftBlockEnabled: t = !1, user: n }) => {
                    const s = n.blocked_by,
                        i = n.protected && !n.following;
                    return t ? e || !i : e || (!i && !s);
                };
        },
        286e3: (e, t, n) => {
            n.d(t, { Rc: () => p, nx: () => c });
            var s = n(499627),
                i = n(576469),
                r = n(390387);
            const a = "rweb.channelsTimelineBehavior",
                o = "channelsTimelineBehavior",
                l = Object.freeze({});
            const c = (e) => e[o],
                d = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                u = (e) => ({ payload: e, type: d }),
                p =
                    ({ listId: e, useRanked: t }) =>
                    (n, s, { userPersistence: r }) => {
                        const o = s(),
                            l = { ...c(o), [e]: { useRanked: t } };
                        n(u(l));
                        const d = i.Z.select(o, e);
                        return d && d.following ? r.get(a).then((n) => r.set(a, { ...n, [e]: { useRanked: t } })) : Promise.resolve();
                    };
            s.Z.register(
                {
                    [o]: function (e = l, t) {
                        return t && t.type === d ? { ...t.payload } : e;
                    },
                },
                () =>
                    (e, t, { userPersistence: n }) =>
                        (0, r.Qb)(t())
                            ? n.get(a).then((t) => {
                                  t && e(u(t));
                              })
                            : Promise.resolve(),
            );
        },
        876963: (e, t, n) => {
            n.d(t, { Z: () => d });
            var s = n(263428),
                i = (n(585488), n(483557)),
                r = n(703710),
                a = n(750085),
                o = n(218951);
            const l = (e) => ({ getEndpoint: (e) => e.withEndpoint(i.ZP).fetchCombinedLists, getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, userId: e }) }),
                c = (e) => ({ query: s.Z, variables: ({ count: t, cursor: n }, s) => ({ count: t, cursor: "string" == typeof n ? n : void 0, isListMemberTargetUserId: "0", userId: e, timelineId: `combinedListsGraphQL-${e}`, ...(0, r.d)(s.apiClient.featureSwitches) }) }),
                d = (e, t) => (0, o.Z)({ context: "FETCH_COMBINED_LISTS", formatResponse: a.Z, network: "redux" === t ? l(e) : c(e), initialFetchCount: 100, perfKey: "combinedListsGraphQL", timelineId: `combinedListsGraphQL-${e}` });
        },
        204744: (e, t, n) => {
            n.d(t, { DI: () => y, H$: () => p, OB: () => C, Ww: () => d, YB: () => u, hj: () => b, qF: () => _ });
            n(901951);
            var s = n(499627),
                i = n(390387);
            const r = "recentSearches",
                a = "rweb.recentSearches",
                o =
                    (e) =>
                    (t, n, { userPersistence: s }) =>
                        s.set(a, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                l = (e, t) => {
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
                c = { fetched: !1, recentSearches: [] };
            const d = (e) => e[r].recentSearches,
                u = (e) => d(e)[0] || null,
                p = (e) => e[r].fetched,
                h = "rweb/recentSearches/INIT_FROM_CACHE",
                m = (e) => ({ type: h, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                b =
                    (e) =>
                    (t, n, { userPersistence: s }) => {
                        t({ payload: e, type: f });
                        const r = n(),
                            a = d(r);
                        return (0, i.Qb)(r) ? t(o(a)) : Promise.resolve();
                    },
                g = "rweb/recentSearches/CLEAR_ALL",
                _ =
                    () =>
                    (e, t, { userPersistence: n }) => {
                        e({ type: g });
                        const s = t(),
                            r = d(s);
                        return (0, i.Qb)(s) ? e(o(r)) : Promise.resolve();
                    },
                v = "rweb/recentSearches/ADD_QUERY",
                y =
                    (e) =>
                    (t, n, { userPersistence: s }) => {
                        t({ payload: e, type: v });
                        const r = n(),
                            a = d(r);
                        return (0, i.Qb)(r) ? t(o(a)) : Promise.resolve();
                    },
                C =
                    () =>
                    (e, t, { userPersistence: n }) => {
                        const s = t();
                        return p(s)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: n }) => {
                                  const s = t();
                                  return (0, i.Qb)(s)
                                      ? n
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
            s.Z.register({
                [r]: function (e = c, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case v: {
                            const n = t.payload,
                                s = n ? l(n, e.recentSearches) : [];
                            return s.length > 49 && s.splice(49, 1), n && s.unshift(n), { ...e, recentSearches: s };
                        }
                        case f: {
                            const n = t.payload,
                                s = n ? l(n, e.recentSearches) : [];
                            return { ...e, recentSearches: s };
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
            n.d(t, { Z: () => a });
            var s = n(644829),
                i = n(750085),
                r = n(218951);
            function a(e) {
                return (0, r.Z)({ timelineId: "list-search-timeline", context: "FETCH_LIST_SEARCH_TIMELINE", formatResponse: i.Z, network: { getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, rawQuery: e }), getEndpoint: (e) => e.withEndpoint(s.Z).fetchListSearch }, perfKey: "list-search" });
            }
        },
        412171: (e, t, n) => {
            n.d(t, { Z: () => a });
            var s = n(483557),
                i = n(750085),
                r = n(218951);
            const a = () => (0, r.Z)({ timelineId: "listsDiscoveryGraphQL", network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchSuggestedLists, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_LISTS_DISCOVERY", perfKey: "listsDiscoveryGraphQL", formatResponse: i.Z });
        },
        688781: (e, t, n) => {
            n.d(t, { DK: () => c, ZP: () => o, i7: () => l });
            n(136728);
            var s = n(483557),
                i = n(750085),
                r = n(466015),
                a = n(218951);
            const o = ({ displayLocation: e, listDescription: t, listId: n, listName: r }) => (0, a.Z)({ timelineId: `listSuggestedUsers-graphQL-${n}`, network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchRecommendedUsersGraphQL, getEndpointParams: ({ count: t, cursor: s }) => ({ listId: n, count: t, cursor: "string" == typeof s ? s : void 0, displayLocation: e }) }, formatResponse: i.Z, context: "FETCH_LIST_SUGGESTED_USERS_GRAPHQL", perfKey: "suggestedUsersGraphQL" }),
                l = (e, t) => (n) => {
                    const s = (0, r.OD)(e),
                        i = (0, r.$0)({ entryId: s, id: e, sortIndex: Date.now().toString() });
                    n(t.injectEntry(i));
                },
                c = (e, t, n) => (s) => {
                    const i = [];
                    n.map((n) => {
                        i.push(e.removeEntry((0, r.OD)(n))), i.push(t.injectEntry((0, r.$0)({ id: n, sortIndex: Date.now().toString() })));
                    }),
                        s(i);
                };
        },
        506653: (e, t, n) => {
            n.d(t, { Z: () => a });
            var s = n(483557),
                i = n(750085),
                r = n(218951);
            const a = ({ listId: e, useRanked: t = !1 }) => (0, r.Z)({ timelineId: o({ listId: e, useRanked: t }), network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchTweetsGraphQL, getEndpointParams: ({ count: n, cursor: s }) => ({ listId: e, count: n, cursor: "string" == typeof s ? s : void 0, useRanked: t }) }, formatResponse: i.Z, context: "FETCH_LIST_TIMELINE_GRAPHQL", perfKey: "listTweetsGraphQL" });
            function o({ listId: e, useRanked: t = !1 }) {
                return `listTweets-GraphQL-${e}-${t ? "ranked" : "latest"}`;
            }
        },
        127218: (e, t, n) => {
            n.d(t, { C: () => g });
            var s = n(202784),
                i = n(614983),
                r = n.n(i),
                a = n(437429),
                o = n.n(a),
                l = n(57074),
                c = n.n(l),
                d = n(10622),
                u = n.n(d),
                p = n(585488),
                h = n(71620),
                m = n(163889),
                f = n(312771),
                b = n(535338);
            function g(e, t, n) {
                const [i, a] = s.useState(!1),
                    [l, d] = s.useState(null),
                    g = o()(),
                    _ = c()(t),
                    v = (0, h.po)(),
                    y = (0, b.p)(e, _, n);
                return s.useMemo(() => {
                    const t = (0, p.getRequest)(e).params?.metadata?.sliceInfoPath;
                    r()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: n, previous_cursor: s } =
                            (function (e, t) {
                                try {
                                    r()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let n = e;
                                    for (const e of t) r()(!!n, "The provided path is invalid."), r()("string" == typeof e, "Unexpected value for path!"), (n = n?.[e]);
                                    return n;
                                } catch (e) {
                                    return void (0, m.ZP)(e.message);
                                }
                            })(y, t) || {},
                        o = (t) => {
                            i ||
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
                            n && o(n);
                        },
                        h = () => {
                            s && o(s);
                        },
                        b = () => {
                            o(void 0);
                        };
                    return l ? { subsequentFetchStatus: f.ZP.FAILED, error: l, fetchNext: c, fetchPrevious: h, refetch: b, data: y, hasNext: Boolean(n), hasPrevious: Boolean(s) } : { subsequentFetchStatus: i ? f.ZP.LOADING : f.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: h, refetch: b, data: y, hasNext: Boolean(n), hasPrevious: Boolean(s) };
                }, [e, y, i, l, g, _, v]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-e019dbda.27a168da.js.map
