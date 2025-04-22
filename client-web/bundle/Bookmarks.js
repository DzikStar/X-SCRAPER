"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Bookmarks"],
    {
        789831: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(807896),
                a = r(202784),
                n = r(325686),
                s = r(392237),
                l = r(655352);
            const c = s.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                i = ({ children: e, component: t, fab: r, shouldRenderFab: s = !0, style: i, withoutBottomPadding: m, ...d }) => {
                    const p = t || n.Z,
                        u = s && !(0, l.ZP)();
                    return a.createElement(p, (0, o.Z)({}, d, { style: [u && !m && c.root, i] }), e, u ? r : null);
                };
        },
        387524: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(807896),
                a = r(202784),
                n = r(325686),
                s = r(292627),
                l = r(537392),
                c = r(392237),
                i = r(365023),
                m = r(392027),
                d = r(774654),
                p = r(725516),
                u = r(443781);
            const b = c.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${c.default.iPhoneOffsetBottom} - ${d.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                h = (e) => {
                    const { "aria-label": t, label: r, onPress: h, scribeComponent: k, ...Z } = e,
                        { loggedInUserId: g } = a.useContext(u.rC),
                        f = (0, p.z)(),
                        E = a.useCallback(
                            (e) => {
                                f.scribe({ component: k, action: "click" }), h && h(e);
                            },
                            [f, h, k],
                        ),
                        y = d.ZM.useCollapsibleNavBars(),
                        C = [...d.Ah({ elementPosition: "bottom" }), y && b.fabStaysAboveSafeArea];
                    return g
                        ? a.createElement(
                              s.Z.FloatingAction,
                              null,
                              a.createElement(l.ZP, null, ({ windowWidth: e }) => {
                                  const s = e > c.default.theme.breakpoints.large,
                                      l = e > c.default.theme.breakpoints.medium,
                                      d = e < c.default.theme.breakpoints.micro,
                                      p = [b.root, l && b.rootMedium, s && b.rootLarge],
                                      u = [b.fab, s && b.fabLarge, d && b.fabMicro, C];
                                  return a.createElement(
                                      n.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: p },
                                      a.createElement(i.Z, { id: "FloatingActionButtonBase" }, (e, l) => a.createElement(n.Z, (0, o.Z)({ ref: e() }, l({ style: u })), a.createElement(m.Z, (0, o.Z)({}, Z, { "aria-label": t, label: s ? r : void 0, onPress: E, style: d && b.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, r) => {
            r.d(t, { Z: () => c });
            r(136728);
            var o = r(202784),
                a = r(387524),
                n = r(635510);
            const s = "/compose/post";
            class l extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: r } = this.props,
                                o = { pathname: s, state: (t && t()) || {} };
                            r.push(o);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: r, scribeComponent: l } = this.props;
                    return o.createElement(a.Z, { "aria-label": e, href: s, icon: t, label: r, onPress: this._handlePress, scribeComponent: l, testID: n.Z.tweet });
                }
            }
            const c = l;
        },
        32677: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                a = r(674132),
                n = r.n(a),
                s = r(186444),
                l = r(355883);
            const c = n().j0179e90,
                i = n().ee69d769({ verb: "" }),
                m = o.createElement(s.default, null),
                d = ({ getLocationState: e, history: t }) => o.createElement(l.Z, { "aria-label": c, getLocationState: e, history: t, icon: m, label: i, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        546370: (e, t, r) => {
            r.r(t), r.d(t, { BookmarkFolderTimelineScreen: () => w, default: () => _ });
            r(136728);
            var o = r(202784),
                a = r(811176),
                n = r(674132),
                s = r.n(n),
                l = r(885724),
                c = r(912021),
                i = r(805104),
                m = r(718e3),
                d = r(252021),
                p = r(652904),
                u = r(977154),
                b = r(384316),
                h = r(71620),
                k = r(668214),
                Z = r(482176);
            const g = (e, t) => {
                    const r = t.match.params.bookmarkFolderId,
                        o = r ? Z.ZP.select(e, r) : void 0;
                    return o?.name;
                },
                f = (0, k.Z)()
                    .propsFromState(() => ({ bookmarkFolderName: g }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("BOOKMARK_FOLDER_TIMELINE_PAGE"), fetchBookmarkFolders: Z.zs }))
                    .withAnalytics({ page: "bookmark_folder" }),
                E = s().h63a5c3c,
                y = s().f075b0e8,
                C = ({ renderMenu: e }) => o.createElement(i.Z, { "aria-label": E, renderMenu: e });
            class w extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderPrimaryContent = (e, t, r) => o.createElement(b.Z, { bookmarkFolderId: r, history: this.props.history, title: t, urtModule: e })),
                        (this._renderMenu = (e) => o.createElement(a.Z, { items: [{ text: y, onClick: this._editFolderModal, Icon: l.default }], onCloseRequested: e })),
                        (this._getBookmarkFolderModule = (0, c.Z)((e) => {
                            if (e) return (0, u.m)(e);
                        })),
                        (this._editFolderModal = (e) => {
                            const { analytics: t, history: r, match: o } = this.props;
                            t.scribe({ element: "edit", action: "click" }), e(), o.params.bookmarkFolderId && r.push({ pathname: `/i/bookmarks/${o.params.bookmarkFolderId}/edit` });
                        });
                }
                componentDidMount() {
                    const { bookmarkFolderName: e, fetchBookmarkFolders: t, history: r, match: o } = this.props;
                    e ||
                        t().then((e) => {
                            const { result: t } = e;
                            t.includes(o.params.bookmarkFolderId) || r.replace("/i/bookmarks");
                        });
                }
                render() {
                    const { bookmarkFolderName: e, history: t } = this.props,
                        r = this.props.match.params.bookmarkFolderId || void 0,
                        a = this._getBookmarkFolderModule(r);
                    if (!e || !a) return null;
                    const n = o.createElement(C, { renderMenu: this._renderMenu });
                    return o.createElement(p.Z, null, o.createElement(d.Z, { backLocation: "/i/bookmarks", history: t, primaryContent: this._renderPrimaryContent(a, e, r), rightControl: n, sidebarContent: o.createElement(m.Z, null), title: e, withBackButton: !0 }));
                }
            }
            const _ = f(w);
        },
        384316: (e, t, r) => {
            r.d(t, { V: () => k, Z: () => Z });
            var o = r(202784),
                a = r(457311),
                n = r(108362),
                s = r(674132),
                l = r.n(s),
                c = r(789831),
                i = r(32677),
                m = r(810641),
                d = r(335632),
                p = r(725405),
                u = r(519896);
            const b = l().dd2c9034,
                h = l().cada17f8,
                k = () => o.createElement(a.Z, { header: b, message: h }),
                Z = ({ bookmarkFolderId: e, history: t, title: r, urtModule: a }) => {
                    const s = o.createElement(i.Z, { history: t }),
                        l = (0, p.Z)(),
                        b = o.useMemo(() => (0, d.G)({ withRemoveFromBookmarks: !0, bookmarkFolderId: e }), [e]);
                    return o.createElement(c.Z, { component: n.Z, fab: s }, o.createElement(m.Z, { entryConfiguration: b, module: a, prerollDisplayLocation: u.Nw.OTHER, renderEmptyState: () => (l.scribeAction("empty"), k()), title: r }));
                };
        },
        62637: (e, t, r) => {
            r.r(t), r.d(t, { BookmarksScreen: () => W, default: () => D });
            r(136728);
            var o = r(202784),
                a = r(325686),
                n = r(457311),
                s = r(420412),
                l = r(392237),
                c = r(674132),
                i = r.n(c),
                m = r(223090),
                d = r(718e3),
                p = r(252021),
                u = r(890882),
                b = r(316732),
                h = r(901646),
                k = r(598897),
                Z = r(443781),
                g = r(652904),
                f = r(26232),
                E = r(293115),
                y = r(725516),
                C = r(977154),
                w = r(384316),
                _ = r(24949),
                F = r(912021),
                B = r(71620),
                P = r(668214),
                M = r(583790),
                v = r(919022);
            const A = (e) => C.ZP.selectIsEmptyTimeline(e),
                S = () => {
                    const e = (0, F.Z)((e) => (0, M.Z)(e));
                    return (0, _.P1)(v.ZP.selectViewerUser, (t) => (t?.id_str ? e(t.id_str) : void 0));
                },
                x = (0, P.Z)()
                    .propsFromState(() => ({ isEmpty: A, viewerUser: v.ZP.selectViewerUser, sliceModule: S() }))
                    .adjustStateProps(({ isEmpty: e, sliceModule: t, viewerUser: r }) => ({ isEmpty: e, viewerUserScreenName: r?.screen_name, isViewerUser: !!r, sliceModule: t }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, B.zr)("BOOKMARK_PAGE"), removeAll: C.H$ })),
                I = { page: "bookmarks" },
                L = i().i3145aa0,
                O = i().bcc7e8c0,
                z = i().f8fc0b48,
                H = i().adad5408,
                R = i().f44ddd2e,
                G = i().c91d2c4c,
                T = i().a068008a,
                W = (e) => {
                    const t = (0, y.z)(),
                        { history: r, isViewerUser: l, sliceModule: c } = e,
                        [i, _] = o.useState(""),
                        F = o.useContext(Z.rC),
                        { featureSwitches: B, userClaims: P } = F,
                        M = P.isTrueAndEnabled("subscriptions_feature_1002"),
                        v = o.useCallback(() => {
                            r.push({ pathname: "/i/bookmarks/create_folder" });
                        }, [r]),
                        A = o.useCallback(() => (t.scribePageImpression({ component: "empty", action: "impression" }), l && v ? o.createElement(n.Z, { buttonText: H, header: R, message: G, onButtonPress: v }) : null), [t, v, l]),
                        S = (e) => o.createElement(h.ZP, { bookmarkFolderId: e, key: e, onPress: () => {} }),
                        x = M ? o.createElement(m.Z, { "aria-label": z, history: r, onCreateButtonClick: () => t.scribe({ element: "create", action: "click" }) }) : null;
                    return o.createElement(E.nO, { namespace: I }, o.createElement(g.Z, null, o.createElement(p.Z, { backLocation: "/home", history: r, primaryContent: o.createElement(a.Z, null, !M && B.isTrue("subscriptions_upsells_bookmarks_screen_enabled") ? o.createElement(b.Z, { variant: "BookmarkScreenCard", wrapperStyles: U.upsellWrapper }) : null, o.createElement(k.K, { onChange: _ }), i ? o.createElement(k.f, { query: i }) : o.createElement(o.Fragment, null, o.createElement(o.Fragment, null, M && c && o.createElement(o.Fragment, null, o.createElement(f.Z, { alwaysFetch: !0, footer: null, module: c, noItemsRenderer: A, renderer: S, retryMessage: T, withoutHeadroom: !0 }), o.createElement(s.Z, null))), o.createElement(w.Z, { history: r, title: L, urtModule: C.ZP }))), rightControl: x, sidebarContent: o.createElement(d.Z, null), title: o.createElement(u.Z, { text: M ? O : L }), withAppBar: !0 })));
                },
                D = x(W),
                U = l.default.create((e) => ({ upsellWrapper: { marginBottom: e.spaces.space8, marginHorizontal: e.spaces.space16 } }));
        },
        392027: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(202784),
                a = r(154003),
                n = r(392237);
            class s extends o.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: r, disabled: n, href: s, icon: c, label: i, onPress: m, renderMenu: d, style: p, testID: u } = this.props,
                        b = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, r);
                    return o.createElement(a.ZP, { "aria-label": e, backgroundColor: t, color: b, disabled: n, icon: c, link: s, onPress: m, renderMenu: d, size: "xLarge", style: [l.root, !i && l.iconOnly, p], testID: u }, i);
                }
            }
            s.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const l = n.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                c = s;
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(202784),
                a = r(325686),
                n = r(235902),
                s = r(885015),
                l = r(392237);
            function c({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: c } = n.ZP.useProps(),
                    m = "borderColor" === e || "nestedBorderColor" === e ? i[e] : { backgroundColor: l.default.theme.colors[e] ?? l.default.theme.colors.borderColor };
                return r ? o.createElement(s.Z, { style: !t && i.root, withGutter: !0 }, o.createElement(a.Z, { style: i.gapColumn }, o.createElement(a.Z, { style: [i.gap, m] })), o.createElement(a.Z, { style: i.gapText }, r), o.createElement(a.Z, { style: i.gapColumn }, o.createElement(a.Z, { style: [i.gap, m] }))) : o.createElement(a.Z, { style: [!t && i.root, c() && i.rootRedesign, i.gap, m] });
            }
            const i = l.default.create((e) => ({ borderColor: { backgroundColor: l.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: l.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(807896),
                a = r(202784),
                n = r(325686),
                s = r(392237);
            class l extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...s } = this.props,
                        l = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, c.column, r && c.withGutterColumn] }));
                    return a.createElement(n.Z, (0, o.Z)({ style: [t, c.root, r && c.withGutter] }, s), l);
                }
            }
            l.defaultProps = { withGutter: !1 };
            const c = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                i = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Bookmarks.6f94534a.js.map
