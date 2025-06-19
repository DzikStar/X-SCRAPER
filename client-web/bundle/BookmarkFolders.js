"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BookmarkFolders", "icons/IconBookmarkCollections-js"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => u });
            var r = o(202784),
                a = o(614983),
                n = o.n(a),
                l = o(325686),
                i = o(370006),
                c = o(786998),
                s = o(929028),
                d = o(386802);
            function m(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            n()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: a, hideBackButton: n, isFullWidth: l, isLarge: s, leftControl: d, middleControl: u, position: k, rightControl: h, secondaryBar: p, style: b, subtitle: g, title: f, titleDomId: B, titleIconCell: y, titleIconCellSize: C, withBackground: w, withWideContainer: Z } = this.props,
                        { isModal: F } = this.context,
                        E = n ? d : r.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        _ = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!w, F, !!p);
                    return r.createElement(r.Fragment, null, r.createElement(c.Z, { centerTitle: t, centeredLogo: o, isFullWidth: l, isLarge: s, leftControl: E, middleControl: u, position: m(k, F, a), rightControl: h, style: b, subtitle: g, title: f, titleDomId: B, titleIconCell: y, titleIconCellSize: C, withBackground: _, withWideContainer: Z }), p || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = s.Z.getBackgroundStyles();
                    return t ? r.createElement(l.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => p, w: () => k });
            var r = o(202784),
                a = o(325686),
                n = o(108362),
                l = o(386802),
                i = o(392237),
                c = o(652904),
                s = o(555079),
                d = o(625661),
                m = o(449067),
                u = o(715601);
            class k extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: n, centerTitle: l, hideBackButton: i, history: c, isFullWidth: m, isLarge: u, middleControl: k, onBackClick: p, rightControl: b, secondaryBar: g, subtitle: f, title: B } = this.props,
                                { isModal: y } = this.context;
                            return r.createElement(a.Z, { style: y ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, r.createElement(d.ZP, { backButtonType: o || (y ? "close" : "back"), backLocation: n, centerTitle: l, fixed: !y, hideBackButton: i, history: c, isFullWidth: m, isLarge: u, middleControl: k, onBackClick: p, ref: e, rightControl: b, secondaryBar: g, style: [y && h.appBarModal, t], subtitle: f, title: B, titleDomId: s.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: l, documentTitle: i, isFullWidth: s, isLarge: d, renderHeader: k, title: p, withoutBottomBarMobile: b } = this.props,
                        { isModal: g } = this.context,
                        f = k ? k(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(c.Z, null, r.createElement(m.Z.Configure, { documentTitle: i, headerless: !0, title: p }), r.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, g && h.rootModal] }, !g && f, r.createElement(n.Z, { isFullWidth: s, isLarge: d, style: [h.container, g && h.containerModal, l] }, g ? r.createElement(u.Z, { style: h.viewport }, f, o) : o), t ? r.createElement(a.Z, { style: [h.bottomBarModal, !g && !b && h.bottomBarMobile] }, r.createElement(n.Z, { isFullWidth: s, isLarge: d }, t)) : null));
                }
            }
            (k.defaultProps = { isFullWidth: !1, isLarge: !1 }), (k.contextType = l.Z);
            const h = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                p = k;
        },
        273107: (e, t, o) => {
            o.d(t, { ZP: () => T });
            var r = o(202784),
                a = o(457311),
                n = o(111677),
                l = o.n(n),
                i = o(901646),
                c = o(325686),
                s = o(392237),
                d = o(322771),
                m = o(741049),
                u = o(725405);
            const k = l().bcc7e8c0,
                h = s.default.create((e) => ({ thumbnail: { borderRadius: e.borderRadii.infinite, backgroundColor: s.default.theme.colors.blue500, height: "100%", width: "100%", padding: s.default.theme.spaces.space12, alignItems: "center", justifyContent: "center" }, icon: { color: s.default.theme.colors.white, width: s.default.theme.fontSizes.title4, height: s.default.theme.fontSizes.title4 } })),
                p = ({ onPress: e }) => {
                    const t = (0, u.Z)();
                    return r.createElement(m.Z, {
                        key: "AllBookmarksCell",
                        label: k,
                        link: "/i/bookmarks/all",
                        onPress: (o) => {
                            t.scribe({ element: "bookmarks", action: "click" }), e(o);
                        },
                        thumbnail: r.createElement(c.Z, { style: h.thumbnail }, r.createElement(d.default, { style: h.icon })),
                    });
                };
            var b = o(26232),
                g = o(24949),
                f = o(912021),
                B = o(668214),
                y = o(583790),
                C = o(919022);
            const w = () => {
                    const e = (0, f.Z)((e) => (0, y.Z)(e));
                    return (0, g.P1)(C.ZP.selectViewerUser, (t) => (t?.id_str ? e(t.id_str) : void 0));
                },
                Z = (0, B.Z)()
                    .propsFromState(() => ({ viewerUser: C.ZP.selectViewerUser, sliceModule: w() }))
                    .adjustStateProps(({ sliceModule: e, viewerUser: t }) => ({ sliceModule: e, isViewerUser: !!t }))
                    .withAnalytics({ page: "bookmark_folders" }),
                F = l().adad5408,
                E = l().f44ddd2e,
                _ = l().c91d2c4c,
                x = l().j45c642e,
                T = Z(({ analytics: e, isViewerUser: t, onCreateFolderPress: o, onFolderPress: n, sliceModule: l }) => {
                    l || e.scribeAction("error");
                    const c = r.useCallback(() => (e.scribePageImpression({ component: "empty", action: "impression" }), t && o ? r.createElement(a.Z, { buttonText: F, header: E, message: _, onButtonPress: o }) : null), [e, o, t]),
                        s = (e) => (t) => {
                            n && (t.preventDefault(), n(e));
                        };
                    return r.createElement(r.Fragment, null, r.createElement(p, { onPress: s("all") }), l ? r.createElement(b.Z, { alwaysFetch: !0, module: l, noItemsRenderer: c, renderer: (e) => r.createElement(i.ZP, { bookmarkFolderId: e, key: e, onPress: s(e) }), retryMessage: x }) : null);
                });
        },
        666026: (e, t, o) => {
            o.r(t), o.d(t, { AddToBookmarkFolderModal: () => W, default: () => U });
            o(136728);
            var r = o(202784),
                a = o(325686),
                n = o(457311),
                l = o(242454),
                i = o(530732),
                c = o(731708),
                s = o(392237),
                d = o(111677),
                m = o.n(d),
                u = o(322771),
                k = o(913973),
                h = o(980407),
                p = o(890882),
                b = o(26232),
                g = o(952428),
                f = o(992942),
                B = o(725516),
                y = o(668214),
                C = o(482176),
                w = o(601576);
            const Z = (e, { bookmarkFolderId: t }) => (t ? C.ZP.select(e, t) : void 0),
                F = (0, y.Z)()
                    .propsFromState(() => ({ bookmarkFolder: Z }))
                    .propsFromActions(() => ({ addToast: w.fz, addTweetToBookmarkFolder: C.ZP.addTweetToBookmarkFolder, removeTweetFromBookmarkFolder: C.ZP.removeTweetFromBookmarkFolder })),
                E = m().e41c9b4f,
                _ = m().a2e7377f,
                x = F((e) => {
                    const { addTweetToBookmarkFolder: t, bookmarkFolder: o, removeTweetFromBookmarkFolder: a, tweetId: n } = e,
                        l = (0, B.z)();
                    if (!o?.media?.media_info?.original_img_url) return null;
                    const i = o.name,
                        s = o.media?.media_info?.original_img_url,
                        d = o?.id || "",
                        m = o.contains_requested_tweet;
                    if (!d || !n) return null;
                    return r.createElement(
                        g.Z,
                        {
                            onPress: () => {
                                const { addToast: o, history: r } = e;
                                m
                                    ? a(d, { tweetId: n }).then(
                                          () => {
                                              o({ text: _({ bookmarkFolderName: i }) }), l.scribe({ component: "bookmark_folder", element: "remove", action: "success" });
                                          },
                                          () => {
                                              l.scribe({ component: "bookmark_folder", element: "remove", action: "error" });
                                          },
                                      )
                                    : t(d, { tweetId: n }).then(
                                          () => {
                                              i && (o({ text: E({ bookmarkFolderName: i }) }), l.scribe({ component: "bookmark_folder", element: "add", action: "success" }));
                                          },
                                          () => {
                                              l.scribe({ component: "bookmark_folder", element: "add", action: "error" });
                                          },
                                      ),
                                    r.goBackThroughModals();
                            },
                            style: [T.root, T.paddingHorizontal, T.contentContainer],
                        },
                        s ? r.createElement(f.Z, { source: s, style: T.thumbnailContainer }) : null,
                        r.createElement(c.ZP, { style: T.content }, i),
                        m ? r.createElement(k.default, { style: T.icon }) : null,
                    );
                }),
                T = s.default.create((e) => ({ root: { justifyContent: "space-between", paddingVertical: e.componentDimensions.gutterVertical, borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, minHeight: `calc(${s.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})` }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.blue500, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", borderRadius: e.borderRadii.infinite, height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, paddingHorizontal: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }));
            var v = o(24949),
                S = o(583790),
                P = o(919022);
            const I = (e, t) => t.location?.state?.tweet_id,
                L = (0, y.Z)().propsFromState(() => ({ sliceModule: (0, v.P1)(P.ZP.selectViewerUser, I, (e, t) => (e?.id_str ? (0, S.Z)(e.id_str, t) : void 0)), tweetId: I })),
                M = m().c2453318,
                R = m().bcc7e8c0,
                A = m().adad5408,
                z = m().f44ddd2e,
                V = m().c91d2c4c,
                H = m().beba2a0e,
                D = m().j45c642e;
            class W extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleCreateFolderPress = () => {
                            const { history: e, tweetId: t } = this.props;
                            e.push({ pathname: "/i/bookmarks/create_folder", state: { tweet_id: t } });
                        }),
                        (this._handleBackClick = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        }),
                        (this._renderEmptyState = () => r.createElement(n.Z, { buttonText: A, header: z, message: V, onButtonPress: this._handleCreateFolderPress })),
                        (this._renderBookmarkFolder = (e) => {
                            const { history: t, tweetId: o } = this.props;
                            return r.createElement(x, { bookmarkFolderId: e, history: t, key: e, tweetId: o });
                        });
                }
                render() {
                    const { sliceModule: e } = this.props;
                    return e ? r.createElement(h.Z, { backButtonType: "close", documentTitle: M, onBackClick: this._handleBackClick, title: r.createElement(p.Z, { text: M }) }, r.createElement(l.Z, { align: "left", color: "primary", label: H, onPress: this._handleCreateFolderPress }), r.createElement(i.Z, { style: [j.root, j.paddingHorizontal, j.contentContainer] }, r.createElement(a.Z, { style: j.thumbnail }, r.createElement(u.default, { style: j.allBookmarks })), r.createElement(c.ZP, { style: j.content }, R), r.createElement(k.default, { style: j.checkmark })), r.createElement(b.Z, { alwaysFetch: !0, module: e, noItemsRenderer: this._renderEmptyState, renderer: this._renderBookmarkFolder, retryMessage: D })) : null;
                }
            }
            const U = L(W),
                j = s.default.create((e) => ({ root: { justifyContent: "space-between", paddingVertical: e.componentDimensions.gutterVertical, borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: e.colors.borderColor, minHeight: `calc(${e.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, maxHeight: `calc(${e.spaces.space48} + 2 * ${e.componentDimensions.gutterVertical})` }, allBookmarks: { color: e.colors.white, height: e.fontSizes.title4, width: e.fontSizes.title4 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, checkmark: { color: e.colors.blue500, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnail: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.blue500, padding: e.spaces.space12, alignItems: "center", justifyContent: "center", flexShrink: 0, marginEnd: e.spaces.space16 }, paddingHorizontal: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }));
        },
        937900: (e, t, o) => {
            o.r(t), o.d(t, { CreateBookmarkFolderModal: () => E, default: () => _ });
            var r = o(202784),
                a = o(154003),
                n = o(855488),
                l = o(111677),
                i = o.n(l),
                c = o(187669),
                s = o(615656),
                d = o(980407),
                m = o(163889),
                u = o(725405),
                k = o(71620),
                h = o(668214),
                p = o(482176),
                b = o(601576);
            const g = (e, t) => t.location?.state?.tweet_id || "",
                f = (0, h.Z)()
                    .propsFromState(() => ({ tweetId: g }))
                    .propsFromActions(() => ({ addToast: b.fz, addTweetToBookmarkFolder: p.ZP.addTweetToBookmarkFolder, createLocalApiErrorHandler: (0, k.zr)("CREATE_BOOKMARK_FOLDER"), createBookmarkFolder: p.SS })),
                B = i().f8fc0b48,
                y = i().i6e7e298,
                C = i().d4e220b4,
                w = i().a0ea2fa6,
                Z = i().eec37eac,
                F = i().e41c9b4f,
                E = ({ addToast: e, addTweetToBookmarkFolder: t, createBookmarkFolder: o, createLocalApiErrorHandler: l, history: i, tweetId: k }) => {
                    const [h, p] = r.useState(""),
                        b = (0, u.Z)();
                    (0, c.q)(() => {
                        b.scribePageImpression({ component: "bookmark_folders_create", action: "show" });
                    });
                    const g = (r) => {
                            b.scribe({ component: "bookmark_folders_create", element: "done", action: "click" });
                            const a = h.trim();
                            a &&
                                (o(a)
                                    .then((o) => {
                                        if (k) {
                                            const r = o?.bookmark_collection_create?.id;
                                            if (r) {
                                                t(r, { tweetId: k });
                                                const a = F({ bookmarkFolderName: o?.bookmark_collection_create?.name || "" });
                                                e({ text: a });
                                            } else (0, m.ZP)("CreateBookmarkFolderModal: Missing folderId");
                                        }
                                    })
                                    .catch((e) => f(e)),
                                i.goBackThroughModals());
                        },
                        f = (e) => {
                            b.scribe({ component: "bookmark_folders_create", action: "error" }), l({ [s.ZP.GenericBadRequest]: { toast: { text: Z } }, showToast: !0 })(e);
                        };
                    return r.createElement(
                        d.Z,
                        {
                            backButtonType: "back",
                            documentTitle: B,
                            onBackClick: () => {
                                b.scribe({ component: "bookmark_folders_create", element: "cancel", action: "click" }), i.goBack();
                            },
                            rightControl: r.createElement(a.ZP, { disabled: "" === h.trim(), onPress: g, size: "small", type: "primaryFilled" }, y),
                            title: B,
                        },
                        r.createElement(n.Z, {
                            "aria-label": C,
                            autoFocus: !0,
                            errorText: w,
                            invalid: h.length > 0 && "" === h.trim(),
                            label: C,
                            maxLength: 25,
                            name: "name",
                            onChange: (e) => {
                                p(e.target.value);
                            },
                            onSubmitEditing: g,
                        }),
                    );
                },
                _ = f(E);
        },
        563572: (e, t, o) => {
            o.r(t), o.d(t, { EditOrDeleteBookmarkFolderModalScreen: () => v, default: () => S });
            var r = o(202784),
                a = o(154003),
                n = o(855488),
                l = o(242454),
                i = o(190286),
                c = o(111677),
                s = o.n(c),
                d = o(615656),
                m = o(980407),
                u = o(71620),
                k = o(668214),
                h = o(482176),
                p = o(601576);
            const b = (e, t) => {
                    const o = t.match.params.bookmarkFolderId,
                        r = o ? h.ZP.select(e, o) : void 0;
                    return r?.name;
                },
                g = (0, k.Z)()
                    .propsFromState(() => ({ bookmarkFolderName: b }))
                    .propsFromActions(() => ({ deleteBookmarkFolder: h.ZP.deleteBookmarkFolder, editBookmarkFolder: h.ZP.editBookmarkFolder, addToast: p.fz, createLocalApiErrorHandler: (0, u.zr)("EDIT_BOOKMARK_FOLDER_MODAL") }))
                    .withAnalytics({ component: "bookmark_folder_edit" }),
                f = s().f075b0e8,
                B = s().d4e220b4,
                y = s().i2209530,
                C = s().h18f86a4,
                w = s().f4ea967a,
                Z = s().b670aa62,
                F = s().aece5462,
                E = s().e3299b94,
                _ = s().c09ea714,
                x = s().gee78816,
                T = { confirmButtonLabel: s().d96cf7ce, headline: s().h9a5daa2, text: s().ac9d5f56 },
                v = ({ addToast: e, analytics: t, bookmarkFolderName: o, createLocalApiErrorHandler: c, deleteBookmarkFolder: s, editBookmarkFolder: u, history: k, match: h }, p) => {
                    const [b, g] = r.useState(o || ""),
                        [v, S] = r.useState(""),
                        [P, I] = r.useState(!0),
                        [L, M] = r.useState(!1),
                        { bookmarkFolderId: R } = h.params,
                        A = `/i/bookmarks/${R}`,
                        z = (e) => {
                            S(e.message || x);
                        };
                    return r.createElement(
                        m.Z,
                        {
                            backButtonType: "close",
                            backLocation: A,
                            documentTitle: f,
                            history: k,
                            onBackClick: (e) => {
                                t.scribeAction("cancel"), e();
                            },
                            rightControl: r.createElement(
                                a.ZP,
                                {
                                    disabled: P,
                                    onPress: () => {
                                        t.scribeAction("save"),
                                            I(!0),
                                            u(R, { name: b })
                                                .then(() => {
                                                    e({ text: F }), k.goBack();
                                                })
                                                .catch((e) => {
                                                    c({ defaultToast: { text: E }, showToast: !0, [d.ZP.ValidationFailure]: { customAction: z } })(e), t.scribe({ element: "delete", action: "error", data: e });
                                                })
                                                .finally(() => I(!1));
                                    },
                                    type: "primaryFilled",
                                },
                                y,
                            ),
                            title: f,
                        },
                        r.createElement(n.Z, {
                            autoFocus: !0,
                            errorText: v,
                            invalid: !!v,
                            label: B,
                            maxLength: 25,
                            name: Z,
                            onChange: (e) => {
                                const { value: t } = e.target;
                                g(t), I("" === t.trim() || t.trim() === o);
                            },
                            value: b,
                        }),
                        r.createElement(l.Z, {
                            color: "red500",
                            label: C,
                            onPress: () => {
                                M(!0);
                            },
                        }),
                        L &&
                            r.createElement(i.Z, {
                                confirmButtonLabel: T.confirmButtonLabel,
                                confirmButtonType: "destructiveFilled",
                                headline: T.headline,
                                onCancel: () => {
                                    t.scribe({ element: "delete", action: "cancel" }), M(!1);
                                },
                                onConfirm: () => {
                                    t.scribeAction("delete"),
                                        s(R)
                                            .then(() => {
                                                M(!1), e({ text: w }), k.replace("/i/bookmarks");
                                            })
                                            .catch((e) => {
                                                c({ defaultToast: { text: _ }, showToast: !0 })(e), t.scribe({ element: "delete", action: "error", data: e });
                                            });
                                },
                                text: T.text,
                            }),
                    );
                },
                S = g(v);
        },
        238139: (e, t, o) => {
            o.r(t), o.d(t, { BookmarkFoldersScreen: () => y, default: () => C });
            o(136728);
            var r = o(202784),
                a = o(325686),
                n = o(601413),
                l = o(111677),
                i = o.n(l),
                c = o(223090),
                s = o(718e3),
                d = o(252021),
                m = o(890882),
                u = o(598897),
                k = o(273107),
                h = o(652904),
                p = o(668214),
                b = o(919022);
            const g = (0, p.Z)()
                    .propsFromState(() => ({ viewerUser: b.ZP.selectViewerUser }))
                    .adjustStateProps(({ viewerUser: e }) => ({ viewerUserScreenName: e?.screen_name }))
                    .withAnalytics({ page: "bookmark_folders" }),
                f = i().i3145aa0,
                B = i().f8fc0b48,
                y = ({ analytics: e, history: t, viewerUserScreenName: o }) => {
                    const [l, i] = r.useState(""),
                        p = r.useCallback(() => {
                            t.push({ pathname: "/i/bookmarks/create_folder" });
                        }, [t]),
                        b = r.createElement(c.Z, { "aria-label": B, history: t, onCreateButtonClick: () => e.scribe({ element: "create", action: "click" }), testID: "createNewBookmarkFolderAppBarButton" });
                    return r.createElement(h.Z, null, r.createElement(d.Z, { backLocation: "/home", history: t, primaryContent: r.createElement(a.Z, null, r.createElement(u.K, { onChange: i }), l ? r.createElement(u.f, { query: l }) : r.createElement(k.ZP, { onCreateFolderPress: p })), rightControl: b, sidebarContent: r.createElement(s.Z, null), subtitle: o ? r.createElement(n.Z, { screenName: o }) : null, title: r.createElement(m.Z, { text: f }), withBackButton: !1 }));
                },
                C = g(y);
        },
        242454: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(807896),
                a = o(202784),
                n = o(325686),
                l = o(731708),
                i = o(58881),
                c = o(530732),
                s = o(392237);
            const d = s.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                m = ({ align: e = "center", color: t, label: o, ...m }) => {
                    const u = i.Z.generate({ backgroundColor: s.default.theme.colors.transparent, color: s.default.theme.colors[t], insetFocusRing: !0 });
                    return a.createElement(n.Z, { style: d.container }, a.createElement(c.Z, (0, r.Z)({}, m, { interactiveStyles: u, style: d.root }), a.createElement(l.ZP, { align: e, color: t }, o)));
                };
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        322771: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                l = o(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M2.998 8.5c0-1.38 1.119-2.5 2.5-2.5h9c1.381 0 2.5 1.12 2.5 2.5v14.12l-7-3.5-7 3.5V8.5zM18.5 2H8.998c-1.105 0-2 .9-2 2H18.5c.276 0 .5.22.5.5v9.82l-.002-.01v2.28L21 17.68V4.5C21 3.12 19.881 2 18.5 2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BookmarkFolders.a276643a.js.map
