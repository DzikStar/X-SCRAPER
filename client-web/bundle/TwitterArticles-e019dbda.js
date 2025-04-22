"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-e019dbda"],
    {
        594897: (e, t, r) => {
            r.d(t, { ZP: () => x });
            var o = r(202784),
                a = r(782261),
                n = r(661810),
                i = r(466818),
                l = r(392237),
                s = r(674132),
                c = r.n(s),
                d = r(699721),
                m = r(977154),
                u = r(392280),
                p = r(384316),
                h = r(273107),
                b = r(810641),
                f = r(668214),
                Z = r(919022);
            const g = (0, f.Z)().propsFromState(() => ({ viewerUser: Z.ZP.selectViewerUser }));
            var w = r(962741),
                k = r(263863),
                y = r(801184);
            const E = (0, r(335632).G)({}),
                C = ({ bookmarkFolderId: e, handleTweetClick: t }) => ({ ...E, [w.ZP.Tweet]: { ...E[w.ZP.Tweet], bookmarkFolderId: e, handlers: { ...E[w.ZP.Tweet].handlers, [k.Z.Tweet]: (0, y.d2)({ onClick: t, withSelectIcon: !1 }) } } }),
                P = c().c62a27e6,
                v = c().g88b88a6,
                I = c().i282583e,
                _ = c().eae4fe7a,
                A = c().a0e81a2e,
                T = c().d2042fb6,
                F = c().iad3e15c,
                S = "likedTweets",
                M = [
                    { label: T, value: S },
                    { label: F, value: "bookmarkedTweets" },
                ],
                B = l.default.create((e) => ({ selector: { marginBottom: e.spaces.space12 }, tweetInput: { marginTop: e.spaces.space12, paddingHorizontal: 0, paddingVertical: 0 }, tweetPreview: { marginTop: e.spaces.space12, marginBottom: 0, marginHorizontal: 0 } })),
                x = g(({ onAddTweets: e, onBookmarkFolderPress: t, selectedBookmarkFolderId: r, viewerUser: l }) => {
                    const s = "string" == typeof r,
                        [c, f] = o.useState(S),
                        Z = o.useCallback((t) => e([t]), [e]),
                        g = o.useMemo(() => C(s ? { handleTweetClick: Z, bookmarkFolderId: r } : { handleTweetClick: Z }), [s, Z, r]),
                        w = l?.id_str,
                        k = o.useMemo(() => (w ? (0, u.Z)(w) : void 0), [w]);
                    if (s && r) {
                        const e = "all" === r ? m.ZP : (0, m.m)(r);
                        return o.createElement(b.Z, { entryConfiguration: g, module: e, renderEmptyState: p.V, title: v });
                    }
                    return k
                        ? o.createElement(
                              o.Fragment,
                              null,
                              o.createElement(d.Z, {
                                  checkTweet: (e) => (e.user?.protected ? I : a.Z.isQuotedTweetUnavailable(e) ? _ : void 0),
                                  inputStyle: B.tweetInput,
                                  onTweetPress: (t) => {
                                      e([t]);
                                  },
                                  tweetPreviewStyle: B.tweetPreview,
                              }),
                              o.createElement(n.Z, { spacing: "space12" }),
                              o.createElement(i.ZP, {
                                  label: A,
                                  onChange: (e) => {
                                      f(e);
                                  },
                                  options: M,
                                  style: B.selector,
                                  value: c,
                              }),
                              c === S ? o.createElement(b.Z, { entryConfiguration: g, module: k, title: P }) : o.createElement(h.ZP, { onFolderPress: t }),
                          )
                        : null;
                });
        },
        901646: (e, t, r) => {
            r.d(t, { ZP: () => p });
            var o = r(202784),
                a = r(992942),
                n = r(392237),
                i = r(741049),
                l = r(725405),
                s = r(668214),
                c = r(482176);
            const d = (e, { bookmarkFolderId: t }) => (t ? c.ZP.select(e, t) : void 0),
                m = (0, s.Z)().propsFromState(() => ({ bookmarkFolder: d })),
                u = n.default.create((e) => ({ thumbnail: { borderRadius: e.borderRadii.infinite, height: "100%", width: "100%" } })),
                p = m(({ bookmarkFolder: e, onPress: t }) => {
                    const r = (0, l.Z)();
                    return e?.media?.media_info?.original_img_url
                        ? o.createElement(i.Z, {
                              key: e.id,
                              label: e.name,
                              link: `/i/bookmarks/${e.id}`,
                              onPress: (e) => {
                                  r.scribe({ element: "bookmark_folder", action: "click" }), t(e);
                              },
                              thumbnail: o.createElement(a.Z, { source: e.media.media_info.original_img_url, style: u.thumbnail }),
                          })
                        : null;
                });
        },
        273107: (e, t, r) => {
            r.d(t, { ZP: () => A });
            var o = r(202784),
                a = r(457311),
                n = r(674132),
                i = r.n(n),
                l = r(901646),
                s = r(325686),
                c = r(392237),
                d = r(322771),
                m = r(741049),
                u = r(725405);
            const p = i().bcc7e8c0,
                h = c.default.create((e) => ({ thumbnail: { borderRadius: e.borderRadii.infinite, backgroundColor: c.default.theme.colors.blue500, height: "100%", width: "100%", padding: c.default.theme.spaces.space12, alignItems: "center", justifyContent: "center" }, icon: { color: c.default.theme.colors.white, width: c.default.theme.fontSizes.title4, height: c.default.theme.fontSizes.title4 } })),
                b = ({ onPress: e }) => {
                    const t = (0, u.Z)();
                    return o.createElement(m.Z, {
                        key: "AllBookmarksCell",
                        label: p,
                        link: "/i/bookmarks/all",
                        onPress: (r) => {
                            t.scribe({ element: "bookmarks", action: "click" }), e(r);
                        },
                        thumbnail: o.createElement(s.Z, { style: h.thumbnail }, o.createElement(d.default, { style: h.icon })),
                    });
                };
            var f = r(26232),
                Z = r(24949),
                g = r(912021),
                w = r(668214),
                k = r(583790),
                y = r(919022);
            const E = () => {
                    const e = (0, g.Z)((e) => (0, k.Z)(e));
                    return (0, Z.P1)(y.ZP.selectViewerUser, (t) => (t?.id_str ? e(t.id_str) : void 0));
                },
                C = (0, w.Z)()
                    .propsFromState(() => ({ viewerUser: y.ZP.selectViewerUser, sliceModule: E() }))
                    .adjustStateProps(({ sliceModule: e, viewerUser: t }) => ({ sliceModule: e, isViewerUser: !!t }))
                    .withAnalytics({ page: "bookmark_folders" }),
                P = i().adad5408,
                v = i().f44ddd2e,
                I = i().c91d2c4c,
                _ = i().j45c642e,
                A = C(({ analytics: e, isViewerUser: t, onCreateFolderPress: r, onFolderPress: n, sliceModule: i }) => {
                    i || e.scribeAction("error");
                    const s = o.useCallback(() => (e.scribePageImpression({ component: "empty", action: "impression" }), t && r ? o.createElement(a.Z, { buttonText: P, header: v, message: I, onButtonPress: r }) : null), [e, r, t]),
                        c = (e) => (t) => {
                            n && (t.preventDefault(), n(e));
                        };
                    return o.createElement(o.Fragment, null, o.createElement(b, { onPress: c("all") }), i ? o.createElement(f.Z, { alwaysFetch: !0, module: i, noItemsRenderer: s, renderer: (e) => o.createElement(l.ZP, { bookmarkFolderId: e, key: e, onPress: c(e) }), retryMessage: _ }) : null);
                });
        },
        387524: (e, t, r) => {
            r.d(t, { Z: () => b });
            var o = r(807896),
                a = r(202784),
                n = r(325686),
                i = r(292627),
                l = r(537392),
                s = r(392237),
                c = r(365023),
                d = r(392027),
                m = r(774654),
                u = r(725516),
                p = r(443781);
            const h = s.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${s.default.iPhoneOffsetBottom} - ${m.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                b = (e) => {
                    const { "aria-label": t, label: r, onPress: b, scribeComponent: f, ...Z } = e,
                        { loggedInUserId: g } = a.useContext(p.rC),
                        w = (0, u.z)(),
                        k = a.useCallback(
                            (e) => {
                                w.scribe({ component: f, action: "click" }), b && b(e);
                            },
                            [w, b, f],
                        ),
                        y = m.ZM.useCollapsibleNavBars(),
                        E = [...m.Ah({ elementPosition: "bottom" }), y && h.fabStaysAboveSafeArea];
                    return g
                        ? a.createElement(
                              i.Z.FloatingAction,
                              null,
                              a.createElement(l.ZP, null, ({ windowWidth: e }) => {
                                  const i = e > s.default.theme.breakpoints.large,
                                      l = e > s.default.theme.breakpoints.medium,
                                      m = e < s.default.theme.breakpoints.micro,
                                      u = [h.root, l && h.rootMedium, i && h.rootLarge],
                                      p = [h.fab, i && h.fabLarge, m && h.fabMicro, E];
                                  return a.createElement(
                                      n.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: u },
                                      a.createElement(c.Z, { id: "FloatingActionButtonBase" }, (e, l) => a.createElement(n.Z, (0, o.Z)({ ref: e() }, l({ style: p })), a.createElement(d.Z, (0, o.Z)({}, Z, { "aria-label": t, label: i ? r : void 0, onPress: k, style: m && h.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, r) => {
            r.d(t, { Z: () => s });
            r(136728);
            var o = r(202784),
                a = r(387524),
                n = r(635510);
            const i = "/compose/post";
            class l extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: r } = this.props,
                                o = { pathname: i, state: (t && t()) || {} };
                            r.push(o);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: r, scribeComponent: l } = this.props;
                    return o.createElement(a.Z, { "aria-label": e, href: i, icon: t, label: r, onPress: this._handlePress, scribeComponent: l, testID: n.Z.tweet });
                }
            }
            const s = l;
        },
        32677: (e, t, r) => {
            r.d(t, { Z: () => m });
            var o = r(202784),
                a = r(674132),
                n = r.n(a),
                i = r(186444),
                l = r(355883);
            const s = n().j0179e90,
                c = n().ee69d769({ verb: "" }),
                d = o.createElement(i.default, null),
                m = ({ getLocationState: e, history: t }) => o.createElement(l.Z, { "aria-label": s, getLocationState: e, history: t, icon: d, label: c, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        330815: (e, t, r) => {
            r.d(t, { Z: () => P });
            var o = r(202784),
                a = r(392237),
                n = r(154003),
                i = r(674132),
                l = r.n(i),
                s = r(184605),
                c = r(980407),
                d = r(873637),
                m = r(668214),
                u = r(497294);
            const p = (e, t) => (t.media ? t.media : (0, s.Z)(t.mediaId) ? (0, u.m3)(e, t.mediaId)[0] : void 0),
                h = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                b = (0, m.Z)()
                    .propsFromState(() => ({ media: p, mediaId: h }))
                    .propsFromActions(() => ({ processMedia: u.C4, updateMediaUpload: u._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                f = "applyButton",
                Z = l().gd80afba,
                g = l().a753a870;
            class w extends o.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return o.createElement(n.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: f, type: "primaryFilled" }, g);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: r, media: o, mediaId: a, onDone: n, processMedia: i, updateMediaUpload: l } = this.props;
                                this.setState({ isProcessing: !0 });
                                const c = t.getCropData(),
                                    { originalMediaFile: d } = o || {},
                                    m = !d || (0 === c.top && 0 === c.left && c.width === d.width && c.height === d.height);
                                (0, s.Z)(a) &&
                                    (e
                                        ? (e(c), n())
                                        : (l({ id: a, cropData: m ? void 0 : c }),
                                          i(a).then(() => {
                                              this.setState({ isProcessing: !1 }), r.scribe({ action: "done" }), n();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = o.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: r, withAspectRatioOptions: a, withZoomControl: n } = this.props,
                        i = this._getMedia();
                    return o.createElement(c.Z, { backButtonType: "back", containerStyle: k.root, documentTitle: r || Z, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: r || Z }, o.createElement(d.Z, { defaultAspectRatio: e, media: i, ref: this._cropper, withAspectRatioOptions: a, withZoomControl: n }));
                }
            }
            const k = a.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                y = b(w);
            var E = r(757700);
            const C = a.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                P = (e) => o.createElement(E.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: C.modal }, o.createElement(y, e));
        },
        199127: (e, t, r) => {
            r.r(t), r.d(t, { MediaPickerWithPreview: () => c, default: () => d });
            var o = r(202784),
                a = r(850496),
                n = r(373554),
                i = r(668214),
                l = r(497294);
            const s = (0, i.Z)().propsFromActions(() => ({ addMedia: l.rA, processMultipleMedia: l.G$ }));
            class c extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: r, onChange: o, onFailure: a, processMultipleMedia: n } = this.props,
                                i = this._getAcceptedFileInputs(),
                                l = Array.from(e).find((e) => i.includes(e.type));
                            l &&
                                t([l], { location: r }).then((e) => {
                                    o && o(e.map((e) => e.id)), n(e, { onFailure: a });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, n.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": r, aspectRatio: n, borderRadius: i, currentContent: l, description: s, innerStyle: c, maskStyle: d, mediaItem: m, onCrop: u, onRemove: p, rootStyle: h } = this.props;
                    return o.createElement(a.Z, { acceptGifs: e, acceptVideo: t, "aria-label": r, aspectRatio: n, borderRadius: i, currentContent: l, description: s, innerStyle: c, maskStyle: d, mediaItem: m, onAddMediaFiles: this._handleAddMediaFiles, onCrop: u, onRemove: p, rootStyle: h, withDragDrop: !0 });
                }
            }
            c.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const d = s(c);
        },
        165336: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                a = r(822399),
                n = r(668214),
                i = r(497294);
            const l = (e, t) => (0, i._T)(e, t.mediaIds);
            const s = (0, n.Z)().propsFromState(() => ({ mediaUploadProgress: l }))(function (e) {
                return o.createElement(a.Z, { progress: e.mediaUploadProgress });
            });
        },
        780589: (e, t, r) => {
            r.d(t, { ZP: () => P });
            var o = r(202784),
                a = r(325686),
                n = r(855488),
                i = r(167630),
                l = r(392237),
                s = r(674132),
                c = r.n(s),
                d = r(666536),
                m = r(702001),
                u = r(312771),
                p = r(71620),
                h = r(668214),
                b = r(836255);
            const f = (e, t) => {
                    const { tweetId: r } = t;
                    return r ? b.Z.selectHydrated(e, r) : void 0;
                },
                Z = (e, t) => {
                    const { tweetId: r } = t;
                    return r ? b.Z.selectFetchStatus(e, r) : void 0;
                },
                g = (0, h.Z)()
                    .propsFromState(() => ({ tweet: f, tweetFetchStatus: Z }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, p.zr)("TWEET_BY_URL"), fetchTweetIfNeeded: b.Z.fetchOneIfNeeded }));
            var w = r(734907);
            const k = c().f1c63c34,
                y = c().a78f6310,
                E = c().fe9ddab6,
                C = l.default.create((e) => ({ activityIndicatorWrapper: { alignItems: "center", marginHorizontal: e.componentDimensions.gutterHorizontal, marginBottom: e.componentDimensions.gutterVertical, padding: e.spaces.space12 } })),
                P = g(({ checkTweet: e, createLocalApiErrorHandler: t, fetchTweetIfNeeded: r, inputStyle: l, onChangeTweetId: s, tweet: c, tweetFetchStatus: p, tweetId: h, withActivityIndicator: b }) => {
                    const [f, Z] = o.useState(),
                        g = o.useMemo(
                            () =>
                                (0, d.Z)((e) => {
                                    e && r(e).catch(t(m.c));
                                }, 250),
                            [t, r],
                        );
                    o.useEffect(() => {
                        g(h);
                    }, [g, h]),
                        o.useEffect(() => {
                            if (c) {
                                const t = e?.(c);
                                t && (Z(t), s(void 0));
                            } else p === u.ZP.FAILED && Z(E);
                        }, [e, s, c, p]);
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(n.Z, {
                            errorText: f,
                            invalid: !!f,
                            label: k,
                            name: "TweetByUrlInput",
                            onChange: (e) => {
                                Z(void 0);
                                const t = e.target.value,
                                    r = (0, w.I)(t);
                                r ? s(r) : t ? Z(y) : s(void 0);
                            },
                            style: l,
                        }),
                        b && p === u.ZP.LOADING ? o.createElement(a.Z, { style: C.activityIndicatorWrapper }, o.createElement(i.Z, { size: "large" })) : null,
                    );
                });
        },
        734907: (e, t, r) => {
            r.d(t, { I: () => a });
            var o = r(173396);
            const a = (e) => {
                if (/^\d+$/.test(e)) return e;
                const t = /(status|article)\/(\d+)/g.exec(e) || [];
                return (0, o.Z)(t);
            };
        },
        404450: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(202784),
                a = r(995145),
                n = r(530732),
                i = r(392237),
                l = r(668214),
                s = r(836255);
            const c = (e, t) => {
                    const { tweetId: r } = t;
                    return r ? s.Z.selectHydrated(e, r) : void 0;
                },
                d = (0, l.Z)().propsFromState(() => ({ tweet: c })),
                m = i.default.create((e) => ({ tweet: { backgroundColor: e.colors.cellBackground, borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.xLarge, marginBottom: e.componentDimensions.gutterVertical, marginHorizontal: e.componentDimensions.gutterHorizontal } })),
                u = d(({ onTweetPress: e, style: t, tweet: r, tweetId: i }) => {
                    if (!r) return null;
                    const l = o.createElement(a.Z, { tweet: r });
                    if (!e) return l;
                    return o.createElement(
                        n.Z,
                        {
                            onPress: (t) => {
                                i && e(i);
                            },
                            style: [m.tweet, t],
                        },
                        l,
                    );
                });
        },
        286240: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(576648),
                a = r(674132),
                n = r.n(a),
                i = r(630715),
                l = r(689985);
            const s = n().afccc67e,
                c = n().beb24e9e,
                d = ({ addToast: e, id: t, screenName: r, scribeAction: a }) => ({
                    onClick: () => {
                        o.Z.setString((0, l.JG)(t, r)), e({ text: c }), a({ element: "copy_link" });
                    },
                    Icon: i.default,
                    text: s,
                });
        },
        442907: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(674132),
                a = r.n(o),
                n = r(607127),
                i = r(689985);
            const l = a().gea6cc1a,
                s = a().db9cc928,
                c = a().c4e28ba6,
                d = a().ff2982d0,
                m = a().ca17beec,
                u = a().f5cbb31c,
                p = a().f0977f52,
                h = ({ addToast: e, createLocalApiErrorHandler: t, deleteTwitterArticle: r, history: o, isPublished: a, location: h, onScribeEvent: b, twitterArticleId: f }) => ({
                    confirmation: { headline: a ? l : s, label: a ? u : p, text: a ? d : c, confirmButtonType: "destructiveFilled" },
                    Icon: n.default,
                    isEmphasized: !0,
                    onClick: () => {
                        r(f)
                            .then(() => {
                                e({ text: m }), b?.(), o.replace(i.TC);
                            })
                            .catch(t({ showToast: !0 }));
                    },
                    text: u,
                });
        },
        637019: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(674132),
                a = r.n(o),
                n = r(988227),
                i = r(689985);
            const l = a().db419d4c,
                s = ({ isFocusMode: e, twitterArticleId: t }) => ({ Icon: n.default, link: (0, i.mI)(t, e), text: l });
        },
        600304: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(674132),
                a = r.n(o),
                n = r(630715),
                i = r(689985);
            const l = a().a1bc8e6c,
                s = ({ id: e, screenName: t }) => ({ Icon: n.default, link: (0, i.N3)(e, t), text: l });
        },
        583909: (e, t, r) => {
            r.d(t, { Z: () => Y });
            var o = r(202784),
                a = r(457311),
                n = r(325686),
                i = r(952428),
                l = r(731708),
                s = r(392237),
                c = r(19640),
                d = r(415725),
                m = r(751632),
                u = r(201770),
                p = r(689985),
                h = r(247056),
                b = r(674132),
                f = r.n(b),
                Z = r(745088),
                g = r(841972),
                w = r(774426),
                k = r(725405),
                y = r(500002),
                E = r(641353),
                C = r(286240),
                P = r(442907),
                v = r(637019),
                I = r(600304),
                _ = r(71620),
                A = r(668214),
                T = r(143322),
                F = r(601576),
                S = r(919022);
            const M = (e, t) => t.articleEntityId,
                B = (e, t) => {
                    const r = M(0, t);
                    return T.ZP.select(e, r);
                },
                x = (e, t) => {
                    const r = M(0, t);
                    return T.ZP.selectTweetId(e, r);
                },
                R = (e, t) => {
                    const r = M(0, t);
                    return T.ZP.selectAuthor(e, r);
                },
                L = (0, A.Z)()
                    .propsFromState(() => ({ articleEntity: B, tweetId: x, author: R }))
                    .propsFromActions(() => ({ addToast: F.fz, block: S.ZP.block, createLocalApiErrorHandler: (0, _.zr)("TWITTER_ARTICLE_ACTION_MENU"), deleteTwitterArticle: T.ZP.delete, unpublishArticleEntity: T.ZP.unpublish })),
                U = f().af65c854,
                z = f().e05e2336,
                H = "article";
            const D = (0, y.ZP)(
                    L(function (e) {
                        const [t, r] = o.useState(!1),
                            { addToast: a, articleEntity: n, articleEntityId: i, author: l, createLocalApiErrorHandler: s, deleteTwitterArticle: d, history: m, location: u, tweetId: b, unpublishArticleEntity: f } = e,
                            y = (0, k.Z)(),
                            _ = o.useCallback(() => {
                                y.scribe({ page: H, section: "article_actions", component: "overflow_menu", element: void 0, action: "impression" });
                            }, [y]),
                            A = o.useCallback(
                                ({ element: e }) => {
                                    y.scribe({ page: H, component: "overflow_menu", element: e, action: "click" });
                                },
                                [y],
                            ),
                            T = n?.lifecycle_state?.lifecycle === c.f.Published,
                            F = o.useCallback(() => {
                                r((e) => !e);
                            }, []),
                            S = o.useCallback(() => {
                                f(i)
                                    .then(() => {
                                        A({ element: "confirm_unpublish_button" });
                                        const e = (0, p.lU)(i);
                                        m.replace(e);
                                    })
                                    .catch(s({}))
                                    .finally(F);
                            }, [A, F, i, s, m, f]),
                            M = o.useCallback(() => {
                                F(), A({ element: "unpublish_button" });
                            }, [A, F]),
                            B = o.useCallback(() => {
                                const e = T ? "delete_sheet_published" : "delete_sheet_draft";
                                y.scribe({ component: e, element: "confirm_delete", action: "click" });
                            }, [y, T]),
                            x = o.useCallback(() => {
                                const e = (0, P.Z)({ addToast: a, createLocalApiErrorHandler: s, deleteTwitterArticle: d, history: m, isPublished: T, location: u, onScribeEvent: B, twitterArticleId: i });
                                if (T) {
                                    const t = { onClick: M, Icon: Z.default, text: z },
                                        r = b && l ? [(0, C.Z)({ addToast: a, id: b, screenName: l?.screen_name, scribeAction: A }), (0, I.Z)({ id: b, screenName: l?.screen_name })] : null,
                                        o = [t, e];
                                    return r ? [...r, ...o] : o;
                                }
                                return [{ Icon: g.default, link: (0, p.DQ)(i), onClick: () => A({ element: "focus_button" }), text: U }, (0, v.Z)({ twitterArticleId: i }), e];
                            }, [A, B, M, a, i, l, s, d, m, T, u, b]),
                            R = o.useCallback((e) => o.createElement(w.default, { actionItems: x(), onClose: e }), [x]);
                        return n ? o.createElement(o.Fragment, null, o.createElement(h.Z, { onClick: _, renderActionMenu: R }), t ? o.createElement(E.Z, { onClose: F, onUnpublish: S, twitterArticleTitle: n.title }) : null) : null;
                    }),
                ),
                V = (e, t) => t.articleEntityId,
                N = (e, t) => {
                    const r = V(0, t);
                    return T.ZP.select(e, r);
                },
                W = (e, t) => {
                    const r = V(0, t);
                    return T.ZP.selectAuthor(e, r);
                },
                G = (0, A.Z)().propsFromState(() => ({ author: W, articleEntity: N })),
                O = s.default.create((e) => ({ container: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small, paddingHorizontal: e.componentDimensions.gutterHorizontal, minHeight: e.spaces.space80, paddingVertical: e.spaces.space12 }, coverImage: { borderRadius: e.borderRadii.small, overflow: "hidden" }, marginTopComposer: { marginTop: e.spaces.space8 }, rowAndSpaceBetween: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" } })),
                $ = G((e) => {
                    const { articleEntity: t, articleEntityId: r, source: a } = e;
                    if (!t) return null;
                    const { metadata: s, preview_text: h, title: b } = t,
                        f = t?.lifecycle_state?.lifecycle === c.f.Published,
                        Z = t?.lifecycle_state?.modified_at_secs,
                        g = s?.modified_at_secs,
                        w = o.createElement(u.Z, { isPublished: f, publishedAtMs: Z ? "" + 1e3 * Z : void 0, updatedAtMs: g ? "" + 1e3 * g : void 0 }),
                        k = (0, p.lU)(r),
                        y = [O.rowAndSpaceBetween, O.marginTopComposer];
                    return o.createElement(d.Z, { exact: !1, path: k }, (e) => o.createElement(i.Z, { "aria-selected": e, link: k }, o.createElement(n.Z, { style: O.container }, o.createElement(n.Z, { style: O.rowAndSpaceBetween }, w, o.createElement(D, { articleEntityId: r, source: a })), o.createElement(n.Z, { style: y }, o.createElement(m.ZP, { numberOfLines: 2, size: "body", title: b, weight: "bold" })), h ? o.createElement(l.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: O.marginTopComposer }, h) : null)));
                });
            var j = r(26232),
                J = r(572657);
            const Q = (e, t) => J.ZP.selectSliceModule(t.userId, t.lifecycle || "Draft"),
                Y = (0, A.Z)().propsFromState(() => ({ sliceModule: Q }))((e) => {
                    const { emptyStateHeader: t, emptyStateMessage: r, sliceModule: n, source: i } = e,
                        l = o.useCallback((e) => (e ? o.createElement($, { articleEntityId: e, source: i }) : null), [i]),
                        s = o.useCallback(() => o.createElement(a.Z, { header: t, message: r }), [t, r]);
                    return o.createElement(j.Z, { module: n, noItemsRenderer: s, renderer: l, withoutHeadroom: !0 });
                });
        },
        641353: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(202784),
                a = r(731708),
                n = r(190286),
                i = r(674132),
                l = r.n(i);
            const s = l().gea6cc1a,
                c = l().b6f72a22,
                d = l().f558d2e0,
                m = { boldElement: o.createElement(a.ZP, { weight: "bold" }) },
                u = (e) => {
                    const { onClose: t, onUnpublish: r, twitterArticleTitle: i } = e,
                        u = o.useMemo(() => o.createElement(a.ZP, null, i ? o.createElement(l().I18NFormatMessage, { $i18n: "hb16b207" }, o.cloneElement(m.boldElement, null, l().e9473589({ articleTitle: i }))) : c), [i]);
                    return o.createElement(n.Z, { confirmButtonLabel: d, headline: s, onCancel: t, onConfirm: r, text: u });
                };
        },
        702001: (e, t, r) => {
            r.d(t, { c: () => n });
            var o = r(516951),
                a = r(615656);
            const n = { [a.ZP.OtherUserSuspended]: { customAction: o.Z }, [a.ZP.StatusViewForbidden]: { customAction: o.Z } };
        },
        192643: (e, t, r) => {
            r.d(t, { J: () => o, P: () => a });
            r(571372);
            const o = "canceled",
                a = (e) => {
                    let t = !1;
                    return {
                        promise: new Promise((r, a) => {
                            e.then((e) => (t ? a(new Error(o)) : r(e))), e.catch((e) => a(t ? new Error(o) : e));
                        }),
                        cancel() {
                            t = !0;
                        },
                    };
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-e019dbda.6cca124a.js.map
