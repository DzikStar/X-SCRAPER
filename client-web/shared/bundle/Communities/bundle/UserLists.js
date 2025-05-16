"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Communities~bundle.UserLists"],
    {
        229333: (e, t, o) => {
            o.d(t, { Z: () => h });
            var s = o(202784),
                i = o(466999),
                a = o(325686),
                n = o(392237),
                r = o(332920);
            const l = o.n(r)().e5b0063d;
            let c = 0;
            class d extends s.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        o = l({ title: t });
                    return s.createElement(a.Z, { "aria-labelledby": this._listDomId, role: "region" }, s.createElement(i.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: n.default.visuallyHidden }, t), s.createElement(a.Z, { "aria-label": o }, e));
                }
            }
            const h = d;
        },
        414939: (e, t, o) => {
            o.d(t, { Z: () => l });
            var s = o(202784),
                i = o(325686),
                a = o(392237);
            class n extends s.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return s.createElement(i.Z, { style: r.root });
                }
            }
            const r = a.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = n;
        },
        789831: (e, t, o) => {
            o.d(t, { Z: () => c });
            var s = o(807896),
                i = o(202784),
                a = o(325686),
                n = o(392237),
                r = o(655352);
            const l = n.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: o, shouldRenderFab: n = !0, style: c, withoutBottomPadding: d, ...h }) => {
                    const p = t || a.Z,
                        u = n && !(0, r.ZP)();
                    return i.createElement(p, (0, s.Z)({}, h, { style: [u && !d && l.root, c] }), e, u ? o : null);
                };
        },
        873637: (e, t, o) => {
            o.d(t, { Z: () => f });
            var s = o(807896),
                i = o(202784),
                a = o(325686),
                n = o(167630),
                r = o(548485),
                l = o(392237),
                c = o(332920),
                d = o.n(c),
                h = o(205074),
                p = o(653843);
            const u = d().gff1f69e;
            class m extends i.Component {
                constructor(e) {
                    super(e), (this.state = { orientedImage: null });
                }
                componentDidMount() {
                    const { media: e } = this.props,
                        { originalMediaFile: t = {} } = e || {};
                    t &&
                        t instanceof h.ZP &&
                        (0, p.ZP)(t).then((e) =>
                            new h.ZP(e).withDimensionsAndOrientation().then((e) => {
                                this.setState({ orientedImage: e });
                            }),
                        );
                }
                render() {
                    return this.state.orientedImage ? this._renderCropper() : i.createElement(n.Z, { "aria-label": u, style: g.activityIndicator });
                }
                _renderCropper() {
                    const { cropperRef: e, defaultAspectRatio: t, defaultCropData: o, media: s, withAspectRatioOptions: n, withZoomControl: l } = this.props,
                        { orientedImage: c } = this.state,
                        { cropData: d, originalMediaFile: h = {} } = s || {};
                    return c ? i.createElement(a.Z, { style: g.cropper }, i.createElement(r.Z, { circle: this.props.circle, defaultAspectRatio: (o && o.aspectRatio) || (d && d.aspectRatio) || t, defaultCropData: o || d, image: { src: c.url, width: h.width, height: h.height }, ref: e, withAspectRatioOptions: n, withZoomControl: l })) : null;
                }
            }
            const g = l.default.create((e) => ({ cropper: { backgroundColor: e.colors.navigationBackground, flexGrow: 1 }, activityIndicator: { flexGrow: 1 } })),
                f = i.forwardRef((e, t) => i.createElement(m, (0, s.Z)({}, e, { cropperRef: t })));
        },
        370111: (e, t, o) => {
            o.d(t, { Z: () => d });
            var s = o(202784),
                i = o(332920),
                a = o.n(i),
                n = o(330815);
            const r = a().b7fb6bda,
                l = a().e71cdf4e,
                c = Object.freeze({ NotStarted: "not_started", Started: "started", Completed: "completed" });
            function d({ aspectRatio: e, media: t, onCancel: o, onCropDone: i }) {
                const [a, d] = s.useState({ status: "not_started" }),
                    [h, p] = s.useState(!1),
                    [u, m] = s.useState(!1),
                    { croppedMediaId: g, status: f } = a;
                s.useEffect(() => {
                    f === c.NotStarted && (p(!0), d({ status: "started" })), f === c.Completed && t.id !== g && d({ status: "not_started", croppedMediaId: void 0 });
                }, [f, t, g]);
                const b = s.useCallback(() => {
                        p(!1), d({ status: c.Completed, croppedMediaId: t.id }), o();
                    }, [o, t]),
                    _ = s.useCallback(() => {
                        p(!1), m(!0);
                    }, []),
                    y = s.useCallback(() => {
                        m(!1), p(!0);
                    }, []),
                    v = s.useCallback(() => {
                        m(!1);
                    }, []),
                    C = s.useCallback(
                        (e) => {
                            d({ status: c.Completed, croppedMediaId: t.id }), i?.(e);
                        },
                        [i, t],
                    ),
                    w = { ...t, id: Number.MAX_SAFE_INTEGER, originalMediaFile: t.mediaFile, cropData: void 0 };
                return s.createElement(s.Fragment, null, h ? s.createElement(n.Z, { defaultAspectRatio: e, media: t, onCancel: b, onDone: _, title: r }) : null, u ? s.createElement(n.Z, { defaultAspectRatio: 1, media: w, onCancel: y, onCropDone: C, onDone: v, title: l }) : null);
            }
        },
        965245: (e, t, o) => {
            o.d(t, { Z: () => l });
            var s = o(807896),
                i = o(202784),
                a = o(229333),
                n = o(414939),
                r = o(334346);
            const l = ({ accessibilityTitle: e, footer: t = i.createElement(n.Z, null), ...o }) => {
                const l = i.createElement(r.C, (0, s.Z)({}, o, { footer: t }));
                return e ? i.createElement(a.Z, { title: e }, l) : l;
            };
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var s = o(807896),
                i = o(202784),
                a = o(107267),
                n = o(403556),
                r = o(791632);
            const l = (e) => {
                    const t = (0, a.useHistory)();
                    return i.createElement(n.Z, (0, s.Z)({}, e, { isCompact: (0, r.HD)(t) }));
                },
                c = i.memo(l);
        },
        387524: (e, t, o) => {
            o.d(t, { Z: () => g });
            var s = o(807896),
                i = o(202784),
                a = o(325686),
                n = o(292627),
                r = o(537392),
                l = o(392237),
                c = o(365023),
                d = o(392027),
                h = o(774654),
                p = o(725516),
                u = o(443781);
            const m = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${h.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                g = (e) => {
                    const { "aria-label": t, label: o, onPress: g, scribeComponent: f, ...b } = e,
                        { loggedInUserId: _ } = i.useContext(u.rC),
                        y = (0, p.z)(),
                        v = i.useCallback(
                            (e) => {
                                y.scribe({ component: f, action: "click" }), g && g(e);
                            },
                            [y, g, f],
                        ),
                        C = h.ZM.useCollapsibleNavBars(),
                        w = [...h.Ah({ elementPosition: "bottom" }), C && m.fabStaysAboveSafeArea];
                    return _
                        ? i.createElement(
                              n.Z.FloatingAction,
                              null,
                              i.createElement(r.ZP, null, ({ windowWidth: e }) => {
                                  const n = e > l.default.theme.breakpoints.large,
                                      r = e > l.default.theme.breakpoints.medium,
                                      h = e < l.default.theme.breakpoints.micro,
                                      p = [m.root, r && m.rootMedium, n && m.rootLarge],
                                      u = [m.fab, n && m.fabLarge, h && m.fabMicro, w];
                                  return i.createElement(
                                      a.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: p },
                                      i.createElement(c.Z, { id: "FloatingActionButtonBase" }, (e, r) => i.createElement(a.Z, (0, s.Z)({ ref: e() }, r({ style: u })), i.createElement(d.Z, (0, s.Z)({}, b, { "aria-label": t, label: n ? o : void 0, onPress: v, style: h && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, o) => {
            o.d(t, { Z: () => l });
            o(136728);
            var s = o(202784),
                i = o(387524),
                a = o(635510);
            const n = "/compose/post";
            class r extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: o } = this.props,
                                s = { pathname: n, state: (t && t()) || {} };
                            o.push(s);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: o, scribeComponent: r } = this.props;
                    return s.createElement(i.Z, { "aria-label": e, href: n, icon: t, label: o, onPress: this._handlePress, scribeComponent: r, testID: a.Z.tweet });
                }
            }
            const l = r;
        },
        32677: (e, t, o) => {
            o.d(t, { Z: () => h });
            var s = o(202784),
                i = o(332920),
                a = o.n(i),
                n = o(186444),
                r = o(355883);
            const l = a().j0179e90,
                c = a().ee69d769({ verb: "" }),
                d = s.createElement(n.default, null),
                h = ({ getLocationState: e, history: t }) => s.createElement(r.Z, { "aria-label": l, getLocationState: e, history: t, icon: d, label: c, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, o) => {
            o.d(t, { Z: () => s });
            const s = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        989816: (e, t, o) => {
            o.d(t, { Z: () => _ });
            var s = o(202784),
                i = o(970187),
                a = o(392237),
                n = o(379327),
                r = o(913973),
                l = o(320588),
                c = o(233391),
                d = o(288955),
                h = o(71620),
                p = o(668214),
                u = o(576469);
            const m = (0, p.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("FOLLOW_LIST_BUTTON"), follow: u.Z.subscribe, unfollow: u.Z.unsubscribe }))
                    .withAnalytics(),
                g = { followIcon: s.createElement(n.default, null), followingIcon: s.createElement(r.default, null) },
                f = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: o, disabled: a, follow: n, isFollowing: r, isMinimal: h, listId: p, listName: u, unfollow: m, user: f } = e,
                        _ = s.useCallback(() => {
                            t.scribeAction("follow"), n(p).catch(o(l.lg));
                        }, [t, o, n, p]),
                        y = s.useCallback(() => {
                            t.scribeAction("unfollow"), m(p).catch(o(l.Sm));
                        }, [t, o, p, m]);
                    return s.createElement(d.Z, { customText: u, displayMode: c.BH.subscribe, userFullName: f?.name }, (e) => s.createElement(i.Z, { buttonIcons: h ? g : void 0, disabled: a, displayMode: h ? "only-icon" : void 0, isFollowing: r, onFollow: e(_), onUnfollow: e(y), showRelationshipChangeConfirmation: !1, size: "small", style: b.followButton, type: "list" }));
                },
                b = a.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
                _ = m(s.memo(f));
        },
        330815: (e, t, o) => {
            o.d(t, { Z: () => Z });
            var s = o(202784),
                i = o(392237),
                a = o(154003),
                n = o(332920),
                r = o.n(n),
                l = o(184605),
                c = o(980407),
                d = o(873637),
                h = o(668214),
                p = o(497294);
            const u = (e, t) => (t.media ? t.media : (0, l.Z)(t.mediaId) ? (0, p.m3)(e, t.mediaId)[0] : void 0),
                m = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                g = (0, h.Z)()
                    .propsFromState(() => ({ media: u, mediaId: m }))
                    .propsFromActions(() => ({ processMedia: p.C4, updateMediaUpload: p._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                f = "applyButton",
                b = r().gd80afba,
                _ = r().a753a870;
            class y extends s.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return s.createElement(a.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: f, type: "primaryFilled" }, _);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: o, media: s, mediaId: i, onDone: a, processMedia: n, updateMediaUpload: r } = this.props;
                                this.setState({ isProcessing: !0 });
                                const c = t.getCropData(),
                                    { originalMediaFile: d } = s || {},
                                    h = !d || (0 === c.top && 0 === c.left && c.width === d.width && c.height === d.height);
                                (0, l.Z)(i) &&
                                    (e
                                        ? (e(c), a())
                                        : (r({ id: i, cropData: h ? void 0 : c }),
                                          n(i).then(() => {
                                              this.setState({ isProcessing: !1 }), o.scribe({ action: "done" }), a();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = s.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: o, withAspectRatioOptions: i, withZoomControl: a } = this.props,
                        n = this._getMedia();
                    return s.createElement(c.Z, { backButtonType: "back", containerStyle: v.root, documentTitle: o || b, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: o || b }, s.createElement(d.Z, { defaultAspectRatio: e, media: n, ref: this._cropper, withAspectRatioOptions: i, withZoomControl: a }));
                }
            }
            const v = i.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                C = g(y);
            var w = o(757700);
            const S = i.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                Z = (e) => s.createElement(w.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: S.modal }, s.createElement(C, e));
        },
        320588: (e, t, o) => {
            o.d(t, { Mt: () => u, Sm: () => p, lg: () => h });
            var s = o(332920),
                i = o.n(s),
                a = o(615656),
                n = o(601576);
            const r = i().add55942,
                l = i().ib8f5f3c,
                c = i().e20fc756,
                d = i().hae1c934,
                h = { customErrorHandler: () => (0, n.mf)({ text: r }), showToast: !0 },
                p = { customErrorHandler: () => (0, n.mf)({ text: l }), showToast: !0 },
                u = {
                    customErrorHandler: ({ errors: e }) => {
                        if (e) {
                            if (e.filter((e) => e?.code === a.ZP.ListAdminRightsError).length) return (0, n.mf)({ text: c });
                        }
                        return (0, n.mf)({ text: d });
                    },
                    showToast: !0,
                };
        },
        127218: (e, t, o) => {
            o.d(t, { C: () => b });
            var s = o(202784),
                i = o(614983),
                a = o.n(i),
                n = o(437429),
                r = o.n(n),
                l = o(57074),
                c = o.n(l),
                d = o(10622),
                h = o.n(d),
                p = o(585488),
                u = o(71620),
                m = o(163889),
                g = o(312771),
                f = o(535338);
            function b(e, t, o) {
                const [i, n] = s.useState(!1),
                    [l, d] = s.useState(null),
                    b = r()(),
                    _ = c()(t),
                    y = (0, u.po)(),
                    v = (0, f.p)(e, _, o);
                return s.useMemo(() => {
                    const t = (0, p.getRequest)(e).params?.metadata?.sliceInfoPath;
                    a()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: o, previous_cursor: s } =
                            (function (e, t) {
                                try {
                                    a()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let o = e;
                                    for (const e of t) a()(!!o, "The provided path is invalid."), a()("string" == typeof e, "Unexpected value for path!"), (o = o?.[e]);
                                    return o;
                                } catch (e) {
                                    return void (0, m.ZP)(e.message);
                                }
                            })(v, t) || {},
                        r = (t) => {
                            i ||
                                (n(!0),
                                h()(b, e, { ..._, cursor: t }).subscribe({
                                    complete: () => {
                                        n(!1);
                                    },
                                    error: (e) => {
                                        n(!1), d(e), y(e);
                                    },
                                }));
                        },
                        c = () => {
                            o && r(o);
                        },
                        u = () => {
                            s && r(s);
                        },
                        f = () => {
                            r(void 0);
                        };
                    return l ? { subsequentFetchStatus: g.ZP.FAILED, error: l, fetchNext: c, fetchPrevious: u, refetch: f, data: v, hasNext: Boolean(o), hasPrevious: Boolean(s) } : { subsequentFetchStatus: i ? g.ZP.LOADING : g.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: u, refetch: f, data: v, hasNext: Boolean(o), hasPrevious: Boolean(s) };
                }, [e, v, i, l, b, _, y]);
            }
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => l });
            var s = o(202784),
                i = o(154003),
                a = o(392237);
            class n extends s.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: a, href: n, icon: l, label: c, onPress: d, renderMenu: h, style: p, testID: u } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return s.createElement(i.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: a, icon: l, link: n, onPress: d, renderMenu: h, size: "xLarge", style: [r.root, !c && r.iconOnly, p], testID: u }, c);
                }
            }
            n.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const r = a.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = n;
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => l });
            var s = o(202784),
                i = o(325686),
                a = o(235902),
                n = o(885015),
                r = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: r.default.theme.colors[e] ?? r.default.theme.colors.borderColor };
                return o ? s.createElement(n.Z, { style: !t && c.root, withGutter: !0 }, s.createElement(i.Z, { style: c.gapColumn }, s.createElement(i.Z, { style: [c.gap, d] })), s.createElement(i.Z, { style: c.gapText }, o), s.createElement(i.Z, { style: c.gapColumn }, s.createElement(i.Z, { style: [c.gap, d] }))) : s.createElement(i.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = r.default.create((e) => ({ borderColor: { backgroundColor: r.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: r.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var s = o(807896),
                i = o(202784),
                a = o(325686),
                n = o(392237);
            class r extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...n } = this.props,
                        r = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, l.column, o && l.withGutterColumn] }));
                    return i.createElement(a.Z, (0, s.Z)({ style: [t, l.root, o && l.withGutter] }, n), r);
                }
            }
            r.defaultProps = { withGutter: !1 };
            const l = n.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = r;
        },
        548485: (e, t, o) => {
            o.d(t, { Z: () => W });
            var s = o(202784),
                i = o(928316),
                a = o(325686),
                n = o(332920),
                r = o.n(n),
                l = o(553007),
                c = o(723951),
                d = o(390587),
                h = o(158910),
                p = o(614991),
                u = o(323265),
                m = o(154003),
                g = o(992942),
                f = o(782578),
                b = o(173739),
                _ = o(392237),
                y = o(393058);
            const v = _.default.create((e) => ({ mask: { backgroundColor: "transparent", borderWidth: e.spaces.space4, borderColor: e.colors.primary, boxShadow: `0 0 0 9999px ${e.colors.activeFaintGray}` }, circle: { borderRadius: e.borderRadii.infinite } })),
                C = ({ circle: e, height: t, width: o }) => s.createElement(a.Z, { pointerEvents: "none", style: [v.mask, { width: o, height: t }, e && v.circle] });
            var w = o(807896),
                S = o(151624),
                Z = o(933895);
            class P extends s.Component {
                constructor(e) {
                    super(e),
                        (this._previousTouchDistance = 0),
                        (this._previousPositionX = 0),
                        (this._previousPositionY = 0),
                        (this._centerPosition = { x: 0, y: 0 }),
                        (this._panResponder = {}),
                        (this._setRef = (e) => {
                            const { onPanEnd: t, onPanMove: o, onPinchMove: s, onWheel: i } = this.props;
                            if (e) {
                                (o || t || s) && (this._removeTouchMoveToScrollListener = (0, Z.O)(e, this._preventDefaultEvent, !1)), i && (this._removeScrollToScaleListener = (0, Z.Y)(e, this._preventDefaultEvent, !1));
                                const a = e.getBoundingClientRect();
                                this._centerPosition = { x: a.width / 2 + a.left, y: a.height / 2 + a.top };
                            }
                        }),
                        (this._preventDefaultEvent = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            const { onPanMove: o, onPinchMove: s } = this.props,
                                i = e.nativeEvent.touches;
                            if (2 === t.numberActiveTouches) {
                                if (s) {
                                    const e = ((a = i[0]), (n = i[1]), Math.sqrt(Math.pow(a.pageY - n.pageY, 2) + Math.pow(a.pageX - n.pageX, 2))),
                                        { pageX: t, pageY: o } = ((e, t) => ({ pageX: Math.min(t.pageX, e.pageX) + Math.abs(t.pageX - e.pageX) / 2, pageY: Math.min(t.pageY, e.pageY) + Math.abs(t.pageY - e.pageY) / 2 }))(i[0], i[1]),
                                        r = this._previousPositionX ? t - this._previousPositionX : 0,
                                        l = this._previousPositionY ? o - this._previousPositionY : 0,
                                        c = this._previousTouchDistance ? e - this._previousTouchDistance : 0;
                                    (this._previousPositionX = t), (this._previousPositionY = o), (this._previousTouchDistance = e);
                                    const { x: d, y: h } = this._centerPosition;
                                    s(c, d - t, h - o, r, l);
                                }
                            } else o && o(t.dx, t.dy);
                            var a, n;
                            document.addEventListener("selectstart", this._preventDefaultEvent, !1);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this.props.onPanEnd && this.props.onPanEnd(t.dx, t.dy), this.props.onPinchMove && (this._previousTouchDistance = 0), (this._previousPositionX = 0), (this._previousPositionY = 0), this._removeSelectStartListener();
                        }),
                        (this._handleWheel = (e) => {
                            const { clientX: t, clientY: o, deltaX: s, deltaY: i } = e,
                                { x: a, y: n } = this._centerPosition,
                                r = a - t,
                                l = n - o;
                            this.props.onWheel && this.props.onWheel(s, i, r, l);
                        }),
                        (this._panResponder = S.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd })),
                        (this._removeSelectStartListener = () => document.removeEventListener("selectstart", this._preventDefaultEvent, !1));
                }
                render() {
                    const { children: e, onPanEnd: t, onPanMove: o, onPinchMove: i, onWheel: n, ...r } = this.props;
                    return s.createElement(a.Z, (0, w.Z)({}, r, { onWheel: this._handleWheel, ref: this._setRef }, this._panResponder.panHandlers), this.props.children);
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeScrollToScaleListener && this._removeScrollToScaleListener(), this._removeSelectStartListener();
                }
            }
            const x = P,
                E = r().d85bc1b8,
                M = r().f596ace8,
                R = r().df031fca,
                k = r().b40332c6,
                D = r().e547b368,
                I = r().f7571204,
                B = r().e6e16812,
                L =
                    Math.log2 ||
                    function (e) {
                        return Math.log(e) * Math.LOG2E;
                    };
            class T extends s.Component {
                constructor(e) {
                    var t;
                    super(e),
                        (this._previousLeft = 0),
                        (this._previousTop = 0),
                        (this._panStyles = { top: 0, left: 0 }),
                        (this._shouldShowZoomControl = () => (!u.ZP.isMobileOS() || !y.Z.isTouchSupported()) && this.props.withZoomControl),
                        (this._renderControls = () => {
                            const { image: e, withAspectRatioOptions: t } = this.props,
                                { aspectRatio: o } = this.state,
                                i = e.width / e.height,
                                n = this._shouldShowZoomControl();
                            return t || n ? s.createElement(a.Z, { style: A.controlsContainer }, t ? s.createElement(a.Z, { style: A.ratioContainer }, s.createElement(m.ZP, { "aria-label": M, borderColor: "transparent", color: o === i ? "primary" : "gray700", hoverLabel: { label: D }, icon: s.createElement(l.default, null), onPress: this._setAspectRatio(i), size: "medium" }), s.createElement(m.ZP, { "aria-label": R, borderColor: "transparent", color: o === 16 / 9 ? "primary" : "gray700", hoverLabel: { label: I }, icon: s.createElement(c.default, null), onPress: this._setAspectRatio(16 / 9), size: "medium" }), s.createElement(m.ZP, { "aria-label": k, borderColor: "transparent", color: 1 === o ? "primary" : "gray700", hoverLabel: { label: B }, icon: s.createElement(d.default, null), onPress: this._setAspectRatio(1), size: "medium" })) : null, n ? s.createElement(a.Z, { style: A.zoomContainer }, s.createElement(b.Z, { "aria-label": E, max: this._maxScale, maxIcon: s.createElement(h.default, { style: A.icon }), min: 0, minIcon: s.createElement(p.default, { style: A.icon }), onChange: this._handleScaleChange, step: "any", value: this.state.imageScale })) : null) : null;
                        }),
                        (this._handleScaleChange = (e) => {
                            this.setState({ imageScale: e });
                        }),
                        (this._getImageDimensions = () => {
                            const { imageScale: e } = this.state,
                                t = this.props.image.width / this.props.image.height,
                                { height: o, width: s } = this._getMaskDimensions(),
                                { height: i, width: a } = f.Z.getCoverDimensions({ width: s, height: o }, t);
                            return { width: a * Math.pow(2, e), height: i * Math.pow(2, e) };
                        }),
                        (this._getMaskDimensions = () => {
                            const { aspectRatio: e, containerHeight: t, containerWidth: o } = this.state,
                                { height: s, width: i } = f.Z.getContainDimensions({ width: o - 50, height: t - 50 }, e);
                            return { width: i, height: s };
                        }),
                        (this._handleLayout = (e) => {
                            const { height: t, width: o } = e.nativeEvent.layout;
                            this.state.containerHeight || this.state.containerWidth ? this.setState({ containerHeight: t, containerWidth: o }) : (this.setState({ containerHeight: t, containerWidth: o }), this._setDefaultCropData());
                        }),
                        (this._setDefaultCropData = () => {
                            const { defaultCropData: e, image: t } = this.props;
                            if (!e) return;
                            const { width: o } = this._getImageDimensions(),
                                { width: s } = this._getMaskDimensions(),
                                i = o / t.width,
                                a = L(s / (e.width * i));
                            this.setState({ imageScale: a });
                            const { left: n, top: r } = this._getUnscaledCropData();
                            (this._panStyles.top = r - e.top * i * Math.pow(2, a)), (this._previousTop = this._panStyles.top), (this._panStyles.left = n - e.left * i * Math.pow(2, a)), (this._previousLeft = this._panStyles.left), this._updateStyles();
                        }),
                        (this._handleWheel = (e, t, o, s) => {
                            const i = (-1 * t) / 500;
                            this.setState(({ imageScale: e }) => {
                                const t = Math.min(this._maxScale, Math.max(e + i, 0));
                                return (this._panStyles.left += o * (t - e)), (this._panStyles.top += s * (t - e)), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: t };
                            });
                        }),
                        (this._handlePanMove = (e, t) => {
                            (this._panStyles.left = this._previousLeft + e), (this._panStyles.top = this._previousTop + t), this._updateStyles(), this._adjustToInBounds();
                        }),
                        (this._handlePanEnd = (e, t) => {
                            (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top);
                        }),
                        (this._handlePinchMove = (e, t, o, s, i) => {
                            const a = e / 200;
                            this.setState(({ imageScale: e }) => {
                                const n = Math.min(this._maxScale, Math.max(e + a, 0));
                                return (this._panStyles.left += t * (n - e) + s), (this._panStyles.top += o * (n - e) + i), (this._previousLeft = this._panStyles.left), (this._previousTop = this._panStyles.top), { imageScale: n };
                            });
                        }),
                        (this._adjustToInBounds = () => {
                            const e = this._getUnscaledCropData(),
                                t = this._getImageDimensions(),
                                o = e.left,
                                s = e.top,
                                i = e.left + e.width - t.width,
                                a = e.top + e.height - t.height;
                            let n = !1;
                            o < 0 && ((n = !0), (this._panStyles.left += o), (this._previousLeft += o)), s < 0 && ((n = !0), (this._panStyles.top += s), (this._previousTop += s)), i > 0 && ((n = !0), (this._panStyles.left += i), (this._previousLeft += i)), a > 0 && ((n = !0), (this._panStyles.top += a), (this._previousTop += a)), n && this._updateStyles();
                        }),
                        (this._updateStyles = () => {
                            const { left: e, top: t } = this._panStyles,
                                { transformStyle: o } = this.state,
                                s = o?.transform[0]?.translate3d,
                                a = `${e}px, ${t}px, 0`;
                            s !== a &&
                                (0, i.flushSync)(() => {
                                    this.setState({ transformStyle: { transform: [{ translate3d: a }] } });
                                });
                        }),
                        (this._getUnscaledCropData = () => {
                            const { height: e, width: t } = this._getImageDimensions(),
                                { height: o, width: s } = this._getMaskDimensions(),
                                { left: i, top: a } = this._panStyles;
                            return { top: (e - o) / 2 - a, left: (t - s) / 2 - i, width: s, height: o };
                        }),
                        (this._setAspectRatio = (e) => () => {
                            this.setState({ aspectRatio: e });
                        }),
                        (this.state = { aspectRatio: e.defaultAspectRatio || e.image.width / e.image.height, imageScale: 0, containerHeight: 0, containerWidth: 0 }),
                        (this._maxScale = ((t = e.image), Math.max(Math.min(L(t.width / 150), L(t.height / 150), 3), 0.5)));
                }
                render() {
                    const { circle: e, image: t, withZoomControl: o } = this.props,
                        { transformStyle: i } = this.state,
                        { height: n, width: r } = this._getImageDimensions(),
                        { height: l, width: c } = this._getMaskDimensions(),
                        d = this.state.containerWidth && this.state.containerHeight;
                    return s.createElement(a.Z, { style: A.container }, s.createElement(x, { onLayout: this._handleLayout, onPanEnd: this._handlePanEnd, onPanMove: this._handlePanMove, onPinchMove: o ? this._handlePinchMove : void 0, onWheel: o ? this._handleWheel : void 0, style: A.root }, d ? s.createElement(s.Fragment, null, s.createElement(g.Z, { source: { uri: t.src, width: r, height: n }, style: [A.image, i] }), s.createElement(C, { circle: e, height: l, width: c })) : null), d ? this._renderControls() : null);
                }
                componentDidUpdate(e, t) {
                    this._updateStyles(), this._adjustToInBounds();
                }
                getCropData() {
                    const { width: e } = this._getImageDimensions(),
                        t = this.props.image.width / e,
                        o = this._getUnscaledCropData();
                    return { aspectRatio: this.state.aspectRatio, top: Math.round(t * o.top), left: Math.round(t * o.left), width: Math.round(t * o.width), height: Math.round(t * o.height) };
                }
            }
            T.defaultProps = { circle: !1, withZoomControl: !0 };
            const A = _.default.create((e) => ({ container: { flexGrow: 1, flexShrink: 1 }, controlsContainer: { backgroundColor: e.colors.navigationBackground, minHeight: e.spaces.space20, flexDirection: "row", paddingVertical: e.spaces.space4, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, ratioContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 0, flexDirection: "row", justifyContent: "space-around" }, zoomContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1, justifyContent: "center", height: e.spaces.space40, paddingHorizontal: e.spaces.space20, maxWidth: 400 }, root: { flexGrow: 1, flexShrink: 1, overflow: "hidden", justifyContent: "center", alignItems: "center", cursor: "move" }, image: { position: "absolute" }, icon: { color: e.colors.gray700 } })),
                W = T;
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => P });
            var s = o(807896),
                i = o(202784),
                a = o(194504),
                n = o(235902),
                r = o(392237),
                l = o(325686),
                c = o(332920),
                d = o.n(c),
                h = o(912021),
                p = o(516951),
                u = o(731708),
                m = o(310088),
                g = o(175993),
                f = o(58881),
                b = o(530732);
            const _ = d().d2414d31,
                y = () => d().ce4e85ae,
                v = d().fb9f6f39;
            class C extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, h.Z)((e, t) => {
                            const { pathname: o, query: s, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: s, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, s) => {
                            const i = r.default.theme.colors.text,
                                a = r.default.theme.colors.gray700;
                            return o || s ? (e || t ? i : a) : e ? i : a;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: s, children: a, color: n, isActive: c, isCompact: d, isPillLink: h, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: C, style: S, to: Z } = this.props,
                        { location: P } = this.state,
                        x = Z ? this._getMemoizedLink(Z, C) : void 0,
                        E = c ? c(Z) : P?.pathname === x?.pathname,
                        M = f.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0 }),
                        R = g ? "medium" : E ? "bold" : "medium";
                    return i.createElement(b.Z, { "aria-label": t, "aria-selected": E, focusable: !!E, interactiveStyles: M, link: x, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [h ? w.pill : w.link, h && E ? w.active : null, d ? (h ? w.compactPill : w.compactLink) : null, p ? w.roundedRect : null, S], withoutInteractiveStyles: g || h }, ({ isFocused: t, isHovered: c }) => i.createElement(l.Z, { style: h && w.flexGrow }, i.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(E, c, g, h) }, d && w.compactText, g && t && w.focusedText], weight: R }, e && i.createElement(e, { style: w.icon }), a, g || h ? null : i.createElement(l.Z, { style: E && [w.border, { backgroundColor: r.default.theme.colors[n] }] })), o ? i.createElement(m.Z, { count: o, standalone: !0, style: [w.badge, o >= 10 && w.multiDigitBadge, o >= 20 && w.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: _, withBorder: !1 }) : s ? i.createElement(m.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: y, withBorder: !1 }) : null));
                }
            }
            (C.contextType = g.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const w = r.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                S = C,
                Z = r.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                P = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: r, isRoundedRect: l, links: c, style: d, visibleItemIndex: h }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = n.ZP.useProps(),
                        m = u() && !r,
                        g = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...n }, c) => {
                                    const d = m ? [Z.linkRedesign, 0 === c && Z.firstLinkRedesign, e && 0 === c && Z.withNoPaddingStart] : void 0;
                                    return i.createElement(S, (0, s.Z)({ viewType: a }, n, { isCompact: o, isPillLink: r, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, r, l, m, c],
                        );
                    return i.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: r && Z.gap, childrenStyle: !m && Z.flexGrow, key: p, style: [r ? null : Z.segmentedControl, m && Z.leftAligned, d], visibleItemIndex: h }, g);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Communities~bundle.UserLists.3165258a.js.map
