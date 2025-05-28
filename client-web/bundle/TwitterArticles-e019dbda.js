"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-e019dbda"],
    {
        594897: (e, t, r) => {
            r.d(t, { ZP: () => x });
            var o = r(202784),
                n = r(782261),
                a = r(661810),
                s = r(466818),
                i = r(392237),
                c = r(111677),
                l = r.n(c),
                d = r(699721),
                u = r(977154),
                m = r(392280),
                p = r(384316),
                b = r(273107),
                h = r(810641),
                f = r(668214),
                g = r(919022);
            const k = (0, f.Z)().propsFromState(() => ({ viewerUser: g.ZP.selectViewerUser }));
            var y = r(962741),
                Z = r(263863),
                w = r(801184);
            const v = (0, r(335632).G)({}),
                E = ({ bookmarkFolderId: e, handleTweetClick: t }) => ({ ...v, [y.ZP.Tweet]: { ...v[y.ZP.Tweet], bookmarkFolderId: e, handlers: { ...v[y.ZP.Tweet].handlers, [Z.Z.Tweet]: (0, w.d2)({ onClick: t, withSelectIcon: !1 }) } } }),
                C = l().c62a27e6,
                I = l().g88b88a6,
                P = l().i282583e,
                T = l().eae4fe7a,
                _ = l().a0e81a2e,
                A = l().d2042fb6,
                S = l().iad3e15c,
                F = "likedTweets",
                M = [
                    { label: A, value: F },
                    { label: S, value: "bookmarkedTweets" },
                ],
                B = i.default.create((e) => ({ selector: { marginBottom: e.spaces.space12 }, tweetInput: { marginTop: e.spaces.space12, paddingHorizontal: 0, paddingVertical: 0 }, tweetPreview: { marginTop: e.spaces.space12, marginBottom: 0, marginHorizontal: 0 } })),
                x = k(({ onAddTweets: e, onBookmarkFolderPress: t, selectedBookmarkFolderId: r, viewerUser: i }) => {
                    const c = "string" == typeof r,
                        [l, f] = o.useState(F),
                        g = o.useCallback((t) => e([t]), [e]),
                        k = o.useMemo(() => E(c ? { handleTweetClick: g, bookmarkFolderId: r } : { handleTweetClick: g }), [c, g, r]),
                        y = i?.id_str,
                        Z = o.useMemo(() => (y ? (0, m.Z)(y) : void 0), [y]);
                    if (c && r) {
                        const e = "all" === r ? u.ZP : (0, u.m)(r);
                        return o.createElement(h.Z, { entryConfiguration: k, module: e, renderEmptyState: p.V, title: I });
                    }
                    return Z
                        ? o.createElement(
                              o.Fragment,
                              null,
                              o.createElement(d.Z, {
                                  checkTweet: (e) => (e.user?.protected ? P : n.Z.isQuotedTweetUnavailable(e) ? T : void 0),
                                  inputStyle: B.tweetInput,
                                  onTweetPress: (t) => {
                                      e([t]);
                                  },
                                  tweetPreviewStyle: B.tweetPreview,
                              }),
                              o.createElement(a.Z, { spacing: "space12" }),
                              o.createElement(s.ZP, {
                                  label: _,
                                  onChange: (e) => {
                                      f(e);
                                  },
                                  options: M,
                                  style: B.selector,
                                  value: l,
                              }),
                              l === F ? o.createElement(h.Z, { entryConfiguration: k, module: Z, title: C }) : o.createElement(b.ZP, { onFolderPress: t }),
                          )
                        : null;
                });
        },
        901646: (e, t, r) => {
            r.d(t, { ZP: () => p });
            var o = r(202784),
                n = r(992942),
                a = r(392237),
                s = r(741049),
                i = r(725405),
                c = r(668214),
                l = r(482176);
            const d = (e, t) => (t.bookmarkFolderId ? l.ZP.select(e, t.bookmarkFolderId) : void 0),
                u = (0, c.Z)().propsFromState(() => ({ bookmarkFolder: d })),
                m = a.default.create((e) => ({ thumbnail: { borderRadius: e.borderRadii.infinite, height: "100%", width: "100%" } })),
                p = u(({ bookmarkFolder: e, onPress: t }) => {
                    const r = (0, i.Z)();
                    return e?.media?.media_info?.original_img_url
                        ? o.createElement(s.Z, {
                              key: e.id,
                              label: e.name,
                              link: `/i/bookmarks/${e.id}`,
                              onPress: (e) => {
                                  r.scribe({ element: "bookmark_folder", action: "click" }), t(e);
                              },
                              thumbnail: o.createElement(n.Z, { source: e.media.media_info.original_img_url, style: m.thumbnail }),
                          })
                        : null;
                });
        },
        273107: (e, t, r) => {
            r.d(t, { ZP: () => _ });
            var o = r(202784),
                n = r(457311),
                a = r(111677),
                s = r.n(a),
                i = r(901646),
                c = r(325686),
                l = r(392237),
                d = r(322771),
                u = r(741049),
                m = r(725405);
            const p = s().bcc7e8c0,
                b = l.default.create((e) => ({ thumbnail: { borderRadius: e.borderRadii.infinite, backgroundColor: l.default.theme.colors.blue500, height: "100%", width: "100%", padding: l.default.theme.spaces.space12, alignItems: "center", justifyContent: "center" }, icon: { color: l.default.theme.colors.white, width: l.default.theme.fontSizes.title4, height: l.default.theme.fontSizes.title4 } })),
                h = ({ onPress: e }) => {
                    const t = (0, m.Z)();
                    return o.createElement(u.Z, {
                        key: "AllBookmarksCell",
                        label: p,
                        link: "/i/bookmarks/all",
                        onPress: (r) => {
                            t.scribe({ element: "bookmarks", action: "click" }), e(r);
                        },
                        thumbnail: o.createElement(c.Z, { style: b.thumbnail }, o.createElement(d.default, { style: b.icon })),
                    });
                };
            var f = r(26232),
                g = r(24949),
                k = r(912021),
                y = r(668214),
                Z = r(583790),
                w = r(919022);
            const v = () => {
                    const e = (0, k.Z)((e) => (0, Z.Z)(e));
                    return (0, g.P1)(w.ZP.selectViewerUser, (t) => (t?.id_str ? e(t.id_str) : void 0));
                },
                E = (0, y.Z)()
                    .propsFromState(() => ({ viewerUser: w.ZP.selectViewerUser, sliceModule: v() }))
                    .adjustStateProps(({ sliceModule: e, viewerUser: t }) => ({ sliceModule: e, isViewerUser: !!t }))
                    .withAnalytics({ page: "bookmark_folders" }),
                C = s().adad5408,
                I = s().f44ddd2e,
                P = s().c91d2c4c,
                T = s().j45c642e,
                _ = E(({ analytics: e, isViewerUser: t, onCreateFolderPress: r, onFolderPress: a, sliceModule: s }) => {
                    s || e.scribeAction("error");
                    const c = o.useCallback(() => (e.scribePageImpression({ component: "empty", action: "impression" }), t && r ? o.createElement(n.Z, { buttonText: C, header: I, message: P, onButtonPress: r }) : null), [e, r, t]),
                        l = (e) => (t) => {
                            a && (t.preventDefault(), a(e));
                        };
                    return o.createElement(o.Fragment, null, o.createElement(h, { onPress: l("all") }), s ? o.createElement(f.Z, { alwaysFetch: !0, module: s, noItemsRenderer: c, renderer: (e) => o.createElement(i.ZP, { bookmarkFolderId: e, key: e, onPress: l(e) }), retryMessage: T }) : null);
                });
        },
        387524: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(807896),
                n = r(202784),
                a = r(325686),
                s = r(292627),
                i = r(537392),
                c = r(392237),
                l = r(365023),
                d = r(392027),
                u = r(774654),
                m = r(725516),
                p = r(443781);
            const b = c.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${c.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                h = (e) => {
                    const { "aria-label": t, label: r, onPress: h, scribeComponent: f, ...g } = e,
                        { loggedInUserId: k } = n.useContext(p.rC),
                        y = (0, m.z)(),
                        Z = n.useCallback(
                            (e) => {
                                y.scribe({ component: f, action: "click" }), h && h(e);
                            },
                            [y, h, f],
                        ),
                        w = u.ZM.useCollapsibleNavBars(),
                        v = [...u.Ah({ elementPosition: "bottom" }), w && b.fabStaysAboveSafeArea];
                    return k
                        ? n.createElement(
                              s.Z.FloatingAction,
                              null,
                              n.createElement(i.ZP, null, ({ windowWidth: e }) => {
                                  const s = e > c.default.theme.breakpoints.large,
                                      i = e > c.default.theme.breakpoints.medium,
                                      u = e < c.default.theme.breakpoints.micro,
                                      m = [b.root, i && b.rootMedium, s && b.rootLarge],
                                      p = [b.fab, s && b.fabLarge, u && b.fabMicro, v];
                                  return n.createElement(
                                      a.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: m },
                                      n.createElement(l.Z, { id: "FloatingActionButtonBase" }, (e, i) => n.createElement(a.Z, (0, o.Z)({ ref: e() }, i({ style: p })), n.createElement(d.Z, (0, o.Z)({}, g, { "aria-label": t, label: s ? r : void 0, onPress: Z, style: u && b.buttonMicro })))),
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
                n = r(387524),
                a = r(635510);
            const s = "/compose/post";
            class i extends o.PureComponent {
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
                    const { "aria-label": e, icon: t, label: r, scribeComponent: i } = this.props;
                    return o.createElement(n.Z, { "aria-label": e, href: s, icon: t, label: r, onPress: this._handlePress, scribeComponent: i, testID: a.Z.tweet });
                }
            }
            const c = i;
        },
        32677: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(202784),
                n = r(111677),
                a = r.n(n),
                s = r(186444),
                i = r(355883);
            const c = a().j0179e90,
                l = a().ee69d769({ verb: "" }),
                d = o.createElement(s.default, null),
                u = ({ getLocationState: e, history: t }) => o.createElement(i.Z, { "aria-label": c, getLocationState: e, history: t, icon: d, label: l, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        330815: (e, t, r) => {
            r.d(t, { Z: () => C });
            var o = r(202784),
                n = r(392237),
                a = r(154003),
                s = r(111677),
                i = r.n(s),
                c = r(184605),
                l = r(980407),
                d = r(873637),
                u = r(668214),
                m = r(497294);
            const p = (e, t) => (t.media ? t.media : (0, c.Z)(t.mediaId) ? (0, m.m3)(e, t.mediaId)[0] : void 0),
                b = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                h = (0, u.Z)()
                    .propsFromState(() => ({ media: p, mediaId: b }))
                    .propsFromActions(() => ({ processMedia: m.C4, updateMediaUpload: m._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                f = "applyButton",
                g = i().gd80afba,
                k = i().a753a870;
            class y extends o.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return o.createElement(a.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: f, type: "primaryFilled" }, k);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: r, media: o, mediaId: n, onDone: a, processMedia: s, updateMediaUpload: i } = this.props;
                                this.setState({ isProcessing: !0 });
                                const l = t.getCropData(),
                                    { originalMediaFile: d } = o || {},
                                    u = !d || (0 === l.top && 0 === l.left && l.width === d.width && l.height === d.height);
                                (0, c.Z)(n) &&
                                    (e
                                        ? (e(l), a())
                                        : (i({ id: n, cropData: u ? void 0 : l }),
                                          s(n).then(() => {
                                              this.setState({ isProcessing: !1 }), r.scribe({ action: "done" }), a();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = o.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: r, withAspectRatioOptions: n, withZoomControl: a } = this.props,
                        s = this._getMedia();
                    return o.createElement(l.Z, { backButtonType: "back", containerStyle: Z.root, documentTitle: r || g, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: r || g }, o.createElement(d.Z, { defaultAspectRatio: e, media: s, ref: this._cropper, withAspectRatioOptions: n, withZoomControl: a }));
                }
            }
            const Z = n.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                w = h(y);
            var v = r(757700);
            const E = n.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                C = (e) => o.createElement(v.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: E.modal }, o.createElement(w, e));
        },
        199127: (e, t, r) => {
            r.r(t), r.d(t, { MediaPickerWithPreview: () => l, default: () => d });
            var o = r(202784),
                n = r(850496),
                a = r(373554),
                s = r(668214),
                i = r(497294);
            const c = (0, s.Z)().propsFromActions(() => ({ addMedia: i.rA, processMultipleMedia: i.G$ }));
            class l extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: r, onChange: o, onFailure: n, processMultipleMedia: a } = this.props,
                                s = this._getAcceptedFileInputs(),
                                i = Array.from(e).find((e) => s.includes(e.type));
                            i &&
                                t([i], { location: r }).then((e) => {
                                    o && o(e.map((e) => e.id)), a(e, { onFailure: n });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, a.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": r, aspectRatio: a, borderRadius: s, currentContent: i, description: c, innerStyle: l, maskStyle: d, mediaItem: u, onCrop: m, onRemove: p, rootStyle: b } = this.props;
                    return o.createElement(n.Z, { acceptGifs: e, acceptVideo: t, "aria-label": r, aspectRatio: a, borderRadius: s, currentContent: i, description: c, innerStyle: l, maskStyle: d, mediaItem: u, onAddMediaFiles: this._handleAddMediaFiles, onCrop: m, onRemove: p, rootStyle: b, withDragDrop: !0 });
                }
            }
            l.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const d = c(l);
        },
        165336: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(202784),
                n = r(822399),
                a = r(668214),
                s = r(497294);
            const i = (e, t) => (0, s._T)(e, t.mediaIds);
            const c = (0, a.Z)().propsFromState(() => ({ mediaUploadProgress: i }))(function (e) {
                return o.createElement(n.Z, { progress: e.mediaUploadProgress });
            });
        },
        56851: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(202784),
                n = r(420740),
                a = r(108362),
                s = r(731708),
                i = r(154003),
                c = r(392237),
                l = r(111677),
                d = r.n(l),
                u = r(349035);
            const m = "error-detail",
                p = d().e49537c2,
                b = d().a9ae1e78;
            class h extends o.PureComponent {
                render() {
                    return o.createElement(n.Z, { testID: m }, o.createElement(u.Z, null), o.createElement(a.Z, { style: f.root }, o.createElement(s.ZP, { align: "center", color: "gray700", style: f.retryText }, p), o.createElement(i.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, b)));
                }
            }
            const f = c.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        780589: (e, t, r) => {
            r.d(t, { ZP: () => C });
            var o = r(202784),
                n = r(325686),
                a = r(855488),
                s = r(167630),
                i = r(392237),
                c = r(111677),
                l = r.n(c),
                d = r(666536),
                u = r(702001),
                m = r(312771),
                p = r(71620),
                b = r(668214),
                h = r(836255);
            const f = (e, t) => {
                    const { tweetId: r } = t;
                    return r ? h.Z.selectHydrated(e, r) : void 0;
                },
                g = (e, t) => {
                    const { tweetId: r } = t;
                    return r ? h.Z.selectFetchStatus(e, r) : void 0;
                },
                k = (0, b.Z)()
                    .propsFromState(() => ({ tweet: f, tweetFetchStatus: g }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, p.zr)("TWEET_BY_URL"), fetchTweetIfNeeded: h.Z.fetchOneIfNeeded }));
            var y = r(734907);
            const Z = l().f1c63c34,
                w = l().a78f6310,
                v = l().fe9ddab6,
                E = i.default.create((e) => ({ activityIndicatorWrapper: { alignItems: "center", marginHorizontal: e.componentDimensions.gutterHorizontal, marginBottom: e.componentDimensions.gutterVertical, padding: e.spaces.space12 } })),
                C = k(({ checkTweet: e, createLocalApiErrorHandler: t, fetchTweetIfNeeded: r, inputStyle: i, onChangeTweetId: c, tweet: l, tweetFetchStatus: p, tweetId: b, withActivityIndicator: h }) => {
                    const [f, g] = o.useState(),
                        k = o.useMemo(
                            () =>
                                (0, d.Z)((e) => {
                                    e && r(e).catch(t(u.c));
                                }, 250),
                            [t, r],
                        );
                    o.useEffect(() => {
                        k(b);
                    }, [k, b]),
                        o.useEffect(() => {
                            if (l) {
                                const t = e?.(l);
                                t && (g(t), c(void 0));
                            } else p === m.ZP.FAILED && g(v);
                        }, [e, c, l, p]);
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(a.Z, {
                            errorText: f,
                            invalid: !!f,
                            label: Z,
                            name: "TweetByUrlInput",
                            onChange: (e) => {
                                g(void 0);
                                const t = e.target.value,
                                    r = (0, y.I)(t);
                                r ? c(r) : t ? g(w) : c(void 0);
                            },
                            style: i,
                        }),
                        h && p === m.ZP.LOADING ? o.createElement(n.Z, { style: E.activityIndicatorWrapper }, o.createElement(s.Z, { size: "large" })) : null,
                    );
                });
        },
        734907: (e, t, r) => {
            r.d(t, { I: () => n });
            var o = r(173396);
            const n = (e) => {
                if (/^\d+$/.test(e)) return e;
                const t = /(status|article)\/(\d+)/g.exec(e) || [];
                return (0, o.Z)(t);
            };
        },
        404450: (e, t, r) => {
            r.d(t, { Z: () => m });
            var o = r(202784),
                n = r(995145),
                a = r(530732),
                s = r(392237),
                i = r(668214),
                c = r(836255);
            const l = (e, t) => {
                    const { tweetId: r } = t;
                    return r ? c.Z.selectHydrated(e, r) : void 0;
                },
                d = (0, i.Z)().propsFromState(() => ({ tweet: l })),
                u = s.default.create((e) => ({ tweet: { backgroundColor: e.colors.cellBackground, borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.xLarge, marginBottom: e.componentDimensions.gutterVertical, marginHorizontal: e.componentDimensions.gutterHorizontal } })),
                m = d(({ onTweetPress: e, style: t, tweet: r, tweetId: s }) => {
                    if (!r) return null;
                    const i = o.createElement(n.Z, { tweet: r });
                    if (!e) return i;
                    return o.createElement(
                        a.Z,
                        {
                            onPress: (t) => {
                                s && e(s);
                            },
                            style: [u.tweet, t],
                        },
                        i,
                    );
                });
        },
        286240: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(576648),
                n = r(111677),
                a = r.n(n),
                s = r(630715),
                i = r(689985);
            const c = a().afccc67e,
                l = a().beb24e9e,
                d = ({ addToast: e, id: t, screenName: r, scribeAction: n }) => ({
                    onClick: () => {
                        o.Z.setString((0, i.JG)(t, r)), e({ text: l }), n({ element: "copy_link" });
                    },
                    Icon: s.default,
                    text: c,
                });
        },
        442907: (e, t, r) => {
            r.d(t, { Z: () => b });
            var o = r(111677),
                n = r.n(o),
                a = r(607127),
                s = r(689985);
            const i = n().gea6cc1a,
                c = n().db9cc928,
                l = n().c4e28ba6,
                d = n().ff2982d0,
                u = n().ca17beec,
                m = n().f5cbb31c,
                p = n().f0977f52,
                b = ({ addToast: e, createLocalApiErrorHandler: t, deleteTwitterArticle: r, history: o, isPublished: n, location: b, onScribeEvent: h, twitterArticleId: f }) => ({
                    confirmation: { headline: n ? i : c, label: n ? m : p, text: n ? d : l, confirmButtonType: "destructiveFilled" },
                    Icon: a.default,
                    isEmphasized: !0,
                    onClick: () => {
                        r(f)
                            .then(() => {
                                e({ text: u }), h?.(), o.replace(s.TC);
                            })
                            .catch(t({ showToast: !0 }));
                    },
                    text: m,
                });
        },
        637019: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(111677),
                n = r.n(o),
                a = r(988227),
                s = r(689985);
            const i = n().db419d4c,
                c = ({ isFocusMode: e, twitterArticleId: t }) => ({ Icon: a.default, link: (0, s.mI)(t, e), text: i });
        },
        600304: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(111677),
                n = r.n(o),
                a = r(630715),
                s = r(689985);
            const i = n().a1bc8e6c,
                c = ({ id: e, screenName: t }) => ({ Icon: a.default, link: (0, s.N3)(e, t), text: i });
        },
        583909: (e, t, r) => {
            r.d(t, { Z: () => q });
            var o = r(202784),
                n = r(457311),
                a = r(325686),
                s = r(952428),
                i = r(731708),
                c = r(392237),
                l = r(19640),
                d = r(415725),
                u = r(751632),
                m = r(201770),
                p = r(689985),
                b = r(247056),
                h = r(111677),
                f = r.n(h),
                g = r(745088),
                k = r(841972),
                y = r(774426),
                Z = r(725405),
                w = r(500002),
                v = r(641353),
                E = r(286240),
                C = r(442907),
                I = r(637019),
                P = r(600304),
                T = r(71620),
                _ = r(668214),
                A = r(143322),
                S = r(601576),
                F = r(919022);
            const M = (e, t) => t.articleEntityId,
                B = (e, t) => {
                    const r = M(0, t);
                    return A.ZP.select(e, r);
                },
                x = (e, t) => {
                    const r = M(0, t);
                    return A.ZP.selectTweetId(e, r);
                },
                L = (e, t) => {
                    const r = M(0, t);
                    return A.ZP.selectAuthor(e, r);
                },
                D = (0, _.Z)()
                    .propsFromState(() => ({ articleEntity: B, tweetId: x, author: L }))
                    .propsFromActions(() => ({ addToast: S.fz, block: F.ZP.block, createLocalApiErrorHandler: (0, T.zr)("TWITTER_ARTICLE_ACTION_MENU"), deleteTwitterArticle: A.ZP.delete, unpublishArticleEntity: A.ZP.unpublish })),
                R = f().af65c854,
                U = f().e05e2336,
                H = "article";
            const z = (0, w.ZP)(
                    D(function (e) {
                        const [t, r] = o.useState(!1),
                            { addToast: n, articleEntity: a, articleEntityId: s, author: i, createLocalApiErrorHandler: c, deleteTwitterArticle: d, history: u, location: m, tweetId: h, unpublishArticleEntity: f } = e,
                            w = (0, Z.Z)(),
                            T = o.useCallback(() => {
                                w.scribe({ page: H, section: "article_actions", component: "overflow_menu", element: void 0, action: "impression" });
                            }, [w]),
                            _ = o.useCallback(
                                ({ element: e }) => {
                                    w.scribe({ page: H, component: "overflow_menu", element: e, action: "click" });
                                },
                                [w],
                            ),
                            A = a?.lifecycle_state?.lifecycle === l.f.Published,
                            S = o.useCallback(() => {
                                r((e) => !e);
                            }, []),
                            F = o.useCallback(() => {
                                f(s)
                                    .then(() => {
                                        _({ element: "confirm_unpublish_button" });
                                        const e = (0, p.lU)(s);
                                        u.replace(e);
                                    })
                                    .catch(c({}))
                                    .finally(S);
                            }, [_, S, s, c, u, f]),
                            M = o.useCallback(() => {
                                S(), _({ element: "unpublish_button" });
                            }, [_, S]),
                            B = o.useCallback(() => {
                                const e = A ? "delete_sheet_published" : "delete_sheet_draft";
                                w.scribe({ component: e, element: "confirm_delete", action: "click" });
                            }, [w, A]),
                            x = o.useCallback(() => {
                                const e = (0, C.Z)({ addToast: n, createLocalApiErrorHandler: c, deleteTwitterArticle: d, history: u, isPublished: A, location: m, onScribeEvent: B, twitterArticleId: s });
                                if (A) {
                                    const t = { onClick: M, Icon: g.default, text: U },
                                        r = h && i ? [(0, E.Z)({ addToast: n, id: h, screenName: i?.screen_name, scribeAction: _ }), (0, P.Z)({ id: h, screenName: i?.screen_name })] : null,
                                        o = [t, e];
                                    return r ? [...r, ...o] : o;
                                }
                                return [{ Icon: k.default, link: (0, p.DQ)(s), onClick: () => _({ element: "focus_button" }), text: R }, (0, I.Z)({ twitterArticleId: s }), e];
                            }, [_, B, M, n, s, i, c, d, u, A, m, h]),
                            L = o.useCallback((e) => o.createElement(y.default, { actionItems: x(), onClose: e }), [x]);
                        return a ? o.createElement(o.Fragment, null, o.createElement(b.Z, { onClick: T, renderActionMenu: L }), t ? o.createElement(v.Z, { onClose: S, onUnpublish: F, twitterArticleTitle: a.title }) : null) : null;
                    }),
                ),
                N = (e, t) => t.articleEntityId,
                O = (e, t) => {
                    const r = N(0, t);
                    return A.ZP.select(e, r);
                },
                V = (e, t) => {
                    const r = N(0, t);
                    return A.ZP.selectAuthor(e, r);
                },
                W = (0, _.Z)().propsFromState(() => ({ author: V, articleEntity: O })),
                G = c.default.create((e) => ({ container: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small, paddingHorizontal: e.componentDimensions.gutterHorizontal, minHeight: e.spaces.space80, paddingVertical: e.spaces.space12 }, coverImage: { borderRadius: e.borderRadii.small, overflow: "hidden" }, marginTopComposer: { marginTop: e.spaces.space8 }, rowAndSpaceBetween: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" } })),
                j = W((e) => {
                    const { articleEntity: t, articleEntityId: r, source: n } = e;
                    if (!t) return null;
                    const { metadata: c, preview_text: b, title: h } = t,
                        f = t?.lifecycle_state?.lifecycle === l.f.Published,
                        g = t?.lifecycle_state?.modified_at_secs,
                        k = c?.modified_at_secs,
                        y = o.createElement(m.Z, { isPublished: f, publishedAtMs: g ? "" + 1e3 * g : void 0, updatedAtMs: k ? "" + 1e3 * k : void 0 }),
                        Z = (0, p.lU)(r),
                        w = [G.rowAndSpaceBetween, G.marginTopComposer];
                    return o.createElement(d.Z, { exact: !1, path: Z }, (e) => o.createElement(s.Z, { "aria-selected": e, link: Z }, o.createElement(a.Z, { style: G.container }, o.createElement(a.Z, { style: G.rowAndSpaceBetween }, y, o.createElement(z, { articleEntityId: r, source: n })), o.createElement(a.Z, { style: w }, o.createElement(u.ZP, { numberOfLines: 2, size: "body", title: h, weight: "bold" })), b ? o.createElement(i.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: G.marginTopComposer }, b) : null)));
                });
            var $ = r(26232),
                K = r(572657);
            const J = (e, t) => K.ZP.selectSliceModule(t.userId, t.lifecycle || "Draft"),
                q = (0, _.Z)().propsFromState(() => ({ sliceModule: J }))((e) => {
                    const { emptyStateHeader: t, emptyStateMessage: r, sliceModule: a, source: s } = e,
                        i = o.useCallback((e) => (e ? o.createElement(j, { articleEntityId: e, source: s }) : null), [s]),
                        c = o.useCallback(() => o.createElement(n.Z, { header: t, message: r }), [t, r]);
                    return o.createElement($.Z, { module: a, noItemsRenderer: c, renderer: i, withoutHeadroom: !0 });
                });
        },
        641353: (e, t, r) => {
            r.d(t, { Z: () => m });
            var o = r(202784),
                n = r(731708),
                a = r(190286),
                s = r(111677),
                i = r.n(s);
            const c = i().gea6cc1a,
                l = i().b6f72a22,
                d = i().f558d2e0,
                u = { boldElement: o.createElement(n.ZP, { weight: "bold" }) },
                m = (e) => {
                    const { onClose: t, onUnpublish: r, twitterArticleTitle: s } = e,
                        m = o.useMemo(() => o.createElement(n.ZP, null, s ? o.createElement(i().I18NFormatMessage, { $i18n: "hb16b207" }, o.cloneElement(u.boldElement, null, i().e9473589({ articleTitle: s }))) : l), [s]);
                    return o.createElement(a.Z, { confirmButtonLabel: d, headline: c, onCancel: t, onConfirm: r, text: m });
                };
        },
        376293: (e, t, r) => {
            r.d(t, { $f: () => C, KV: () => g, LI: () => A, SC: () => E, Vt: () => Z, ed: () => S, op: () => I });
            var o = r(202784),
                n = r(190286),
                a = r(111677),
                s = r.n(a),
                i = r(616894),
                c = r(314948),
                l = r(516951),
                d = r(163390);
            const u = s().cfd2f35e,
                m = s().f9e45cfb,
                p = s().fcd4d489,
                b = s().a6450e84,
                h = s().g353ad73,
                f = s().ad00a739,
                g = s().a9fd20be,
                k = s().j546fb79,
                y = s().c9623eeb,
                Z = s().e133be4e,
                w = s().he43bca4,
                v = s().f5f01af6,
                E = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                C = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: b, text: t ? f({ screenName: e }) : h({ screenName: e }) }),
                I = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: r, source: o, testID: n, unblockAction: a, unblockSubtext: s, user: i }) => {
                    let c,
                        u = l.Z;
                    const m = A(i, r);
                    switch (o) {
                        case E.PROFILE:
                        case E.LIST_DETAIL:
                        case E.FOLLOWERS_LIST:
                            u = () => {
                                i.blocking ? a(m) : e(m);
                            };
                            break;
                        case E.TWEET:
                        case E.TWEET_CARET:
                        case E.RICH_FEEDBACK:
                            (c = d.uq.block),
                                (u = () => {
                                    i.blocking ? a(m) : e(m);
                                });
                    }
                    return { confirmation: m, onClick: u, testID: n, shortcutKey: c, Icon: P(i.blocking), text: _(i), subText: T({ user: i, blockSubtext: t, unblockSubtext: s }) };
                },
                P = (e) => (e ? c.default : i.default),
                T = ({ blockSubtext: e, unblockSubtext: t, user: r }) => (!r.blocking && e ? e(r.screen_name) : r.blocking ? t : void 0),
                _ = (e) => (e.blocking ? y({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                A = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: k({ screenName: e }), label: Z, text: t ? v : w }))(e.screen_name, t) : C(e.screen_name, t)),
                S = ({ confirmation: e, handleConfirm: t, onClose: r }) => {
                    const { confirmButtonType: a, headline: s, label: i, text: c } = e;
                    return o.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: i, confirmButtonType: a, headline: s, onCancel: r, onConfirm: t, text: c });
                };
        },
        712816: (e, t, r) => {
            r.d(t, { d: () => n });
            var o = r(111677);
            const n = { defaultToast: { text: r.n(o)().b6878b0a }, showToast: !0 };
        },
        702001: (e, t, r) => {
            r.d(t, { c: () => a });
            var o = r(516951),
                n = r(615656);
            const a = { [n.ZP.OtherUserSuspended]: { customAction: o.Z }, [n.ZP.StatusViewForbidden]: { customAction: o.Z } };
        },
        879596: (e, t, r) => {
            r.d(t, { D: () => n });
            var o = r(111677);
            const n = { defaultToast: { text: r.n(o)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, r) => {
            r.d(t, { OX: () => m, Od: () => d, PN: () => p, uq: () => l, wR: () => h });
            var o = r(251067),
                n = r(522171),
                a = r(111677),
                s = r.n(a),
                i = r(912021),
                c = r(323265);
            const l = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, i.Z)((e) => {
                    const t = e ? [{ description: s().b7fa0cfe, keys: l.goTopArticles, universal: !1 }] : [];
                    return [...((0, o.fH)(o.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: l.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: l.nextItem, universal: !0 }, { description: s().g0048656, keys: l.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: l.refresh, universal: !1 }, { description: s().ha8209bc, keys: l.goHome, universal: !1 }, { description: s().fcf3e54c, keys: l.goExplore, universal: !1 }, { description: s().eb75875e, keys: l.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: l.goMentions, universal: !1 }, { description: s().fa98627a, keys: l.goProfile, universal: !1 }, { description: s().d4ebc798, keys: l.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: l.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: l.goLikes, universal: !1 }, { description: s().b0041756, keys: l.goLists, universal: !1 }, { description: s().d4986f86, keys: l.goMessages, universal: !1 }, { description: s().h5860a68, keys: l.goGrok, universal: !1 }, { description: s().bb081ea2, keys: l.goSettings, universal: !1 }, { description: s().i3145aa0, keys: l.goBookmarks, universal: !1 }, ...t, { description: s().eee2ed92, keys: l.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: l.goDisplay, universal: !1 }];
                }),
                u = c.ZP.isMac() ? "⌘" : "CTRL",
                m = () => [
                    { description: s().ab3d53f8, keys: l.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: l.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: l.search, universal: !1 },
                    { description: s().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: l.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: l.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: l.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: s().b488758c, keys: l.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: s().c82314e0, keys: l.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: l.video.play2, universal: !0 },
                    { description: s().b881560e, keys: l.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: l.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: l.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: l.audio.mute, universal: !1 },
                ],
                b = (0, i.Z)((e) => {
                    const t = d(e),
                        r = m(),
                        o = p(),
                        n = {};
                    return (
                        [...r, ...o, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      n[t] = e;
                                  })
                                : (n[t] = e);
                        }),
                        JSON.stringify(n)
                    );
                }),
                h = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": b(e) } };
                };
        },
        192643: (e, t, r) => {
            r.d(t, { J: () => o, P: () => n });
            r(571372);
            const o = "canceled",
                n = (e) => {
                    let t = !1;
                    return {
                        promise: new Promise((r, n) => {
                            e.then((e) => (t ? n(new Error(o)) : r(e))), e.catch((e) => n(t ? new Error(o) : e));
                        }),
                        cancel() {
                            t = !0;
                        },
                    };
                };
        },
        409438: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-e019dbda.9f0798ba.js.map
