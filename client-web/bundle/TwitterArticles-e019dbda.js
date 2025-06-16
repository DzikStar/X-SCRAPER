"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-e019dbda"],
    {
        594897: (e, t, o) => {
            o.d(t, { ZP: () => x });
            var r = o(202784),
                n = o(782261),
                a = o(661810),
                s = o(466818),
                i = o(392237),
                c = o(111677),
                l = o.n(c),
                d = o(699721),
                u = o(977154),
                m = o(392280),
                p = o(384316),
                b = o(273107),
                h = o(810641),
                f = o(668214),
                g = o(919022);
            const k = (0, f.Z)().propsFromState(() => ({ viewerUser: g.ZP.selectViewerUser }));
            var y = o(962741),
                w = o(263863),
                Z = o(801184);
            const v = (0, o(335632).G)({}),
                E = ({ bookmarkFolderId: e, handleTweetClick: t }) => ({ ...v, [y.ZP.Tweet]: { ...v[y.ZP.Tweet], bookmarkFolderId: e, handlers: { ...v[y.ZP.Tweet].handlers, [w.Z.Tweet]: (0, Z.d2)({ onClick: t, withSelectIcon: !1 }) } } }),
                C = l().c62a27e6,
                I = l().g88b88a6,
                T = l().i282583e,
                P = l().eae4fe7a,
                _ = l().a0e81a2e,
                A = l().d2042fb6,
                S = l().iad3e15c,
                F = "likedTweets",
                M = [
                    { label: A, value: F },
                    { label: S, value: "bookmarkedTweets" },
                ],
                B = i.default.create((e) => ({ selector: { marginBottom: e.spaces.space12 }, tweetInput: { marginTop: e.spaces.space12, paddingHorizontal: 0, paddingVertical: 0 }, tweetPreview: { marginTop: e.spaces.space12, marginBottom: 0, marginHorizontal: 0 } })),
                x = k(({ onAddTweets: e, onBookmarkFolderPress: t, selectedBookmarkFolderId: o, viewerUser: i }) => {
                    const c = "string" == typeof o,
                        [l, f] = r.useState(F),
                        g = r.useCallback((t) => e([t]), [e]),
                        k = r.useMemo(() => E(c ? { handleTweetClick: g, bookmarkFolderId: o } : { handleTweetClick: g }), [c, g, o]),
                        y = i?.id_str,
                        w = r.useMemo(() => (y ? (0, m.Z)(y) : void 0), [y]);
                    if (c && o) {
                        const e = "all" === o ? u.ZP : (0, u.m)(o);
                        return r.createElement(h.Z, { entryConfiguration: k, module: e, renderEmptyState: p.V, title: I });
                    }
                    return w
                        ? r.createElement(
                              r.Fragment,
                              null,
                              r.createElement(d.Z, {
                                  checkTweet: (e) => (e.user?.protected ? T : n.Z.isQuotedTweetUnavailable(e) ? P : void 0),
                                  inputStyle: B.tweetInput,
                                  onTweetPress: (t) => {
                                      e([t]);
                                  },
                                  tweetPreviewStyle: B.tweetPreview,
                              }),
                              r.createElement(a.Z, { spacing: "space12" }),
                              r.createElement(s.ZP, {
                                  label: _,
                                  onChange: (e) => {
                                      f(e);
                                  },
                                  options: M,
                                  style: B.selector,
                                  value: l,
                              }),
                              l === F ? r.createElement(h.Z, { entryConfiguration: k, module: w, title: C }) : r.createElement(b.ZP, { onFolderPress: t }),
                          )
                        : null;
                });
        },
        901646: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var r = o(202784),
                n = o(992942),
                a = o(392237),
                s = o(741049),
                i = o(725405),
                c = o(668214),
                l = o(482176);
            const d = (e, t) => (t.bookmarkFolderId ? l.ZP.select(e, t.bookmarkFolderId) : void 0),
                u = (0, c.Z)().propsFromState(() => ({ bookmarkFolder: d })),
                m = a.default.create((e) => ({ thumbnail: { borderRadius: e.borderRadii.infinite, height: "100%", width: "100%" } })),
                p = u(({ bookmarkFolder: e, onPress: t }) => {
                    const o = (0, i.Z)();
                    return e?.media?.media_info?.original_img_url
                        ? r.createElement(s.Z, {
                              key: e.id,
                              label: e.name,
                              link: `/i/bookmarks/${e.id}`,
                              onPress: (e) => {
                                  o.scribe({ element: "bookmark_folder", action: "click" }), t(e);
                              },
                              thumbnail: r.createElement(n.Z, { source: e.media.media_info.original_img_url, style: m.thumbnail }),
                          })
                        : null;
                });
        },
        273107: (e, t, o) => {
            o.d(t, { ZP: () => _ });
            var r = o(202784),
                n = o(457311),
                a = o(111677),
                s = o.n(a),
                i = o(901646),
                c = o(325686),
                l = o(392237),
                d = o(322771),
                u = o(741049),
                m = o(725405);
            const p = s().bcc7e8c0,
                b = l.default.create((e) => ({ thumbnail: { borderRadius: e.borderRadii.infinite, backgroundColor: l.default.theme.colors.blue500, height: "100%", width: "100%", padding: l.default.theme.spaces.space12, alignItems: "center", justifyContent: "center" }, icon: { color: l.default.theme.colors.white, width: l.default.theme.fontSizes.title4, height: l.default.theme.fontSizes.title4 } })),
                h = ({ onPress: e }) => {
                    const t = (0, m.Z)();
                    return r.createElement(u.Z, {
                        key: "AllBookmarksCell",
                        label: p,
                        link: "/i/bookmarks/all",
                        onPress: (o) => {
                            t.scribe({ element: "bookmarks", action: "click" }), e(o);
                        },
                        thumbnail: r.createElement(c.Z, { style: b.thumbnail }, r.createElement(d.default, { style: b.icon })),
                    });
                };
            var f = o(26232),
                g = o(24949),
                k = o(912021),
                y = o(668214),
                w = o(583790),
                Z = o(919022);
            const v = () => {
                    const e = (0, k.Z)((e) => (0, w.Z)(e));
                    return (0, g.P1)(Z.ZP.selectViewerUser, (t) => (t?.id_str ? e(t.id_str) : void 0));
                },
                E = (0, y.Z)()
                    .propsFromState(() => ({ viewerUser: Z.ZP.selectViewerUser, sliceModule: v() }))
                    .adjustStateProps(({ sliceModule: e, viewerUser: t }) => ({ sliceModule: e, isViewerUser: !!t }))
                    .withAnalytics({ page: "bookmark_folders" }),
                C = s().adad5408,
                I = s().f44ddd2e,
                T = s().c91d2c4c,
                P = s().j45c642e,
                _ = E(({ analytics: e, isViewerUser: t, onCreateFolderPress: o, onFolderPress: a, sliceModule: s }) => {
                    s || e.scribeAction("error");
                    const c = r.useCallback(() => (e.scribePageImpression({ component: "empty", action: "impression" }), t && o ? r.createElement(n.Z, { buttonText: C, header: I, message: T, onButtonPress: o }) : null), [e, o, t]),
                        l = (e) => (t) => {
                            a && (t.preventDefault(), a(e));
                        };
                    return r.createElement(r.Fragment, null, r.createElement(h, { onPress: l("all") }), s ? r.createElement(f.Z, { alwaysFetch: !0, module: s, noItemsRenderer: c, renderer: (e) => r.createElement(i.ZP, { bookmarkFolderId: e, key: e, onPress: l(e) }), retryMessage: P }) : null);
                });
        },
        387524: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(807896),
                n = o(202784),
                a = o(325686),
                s = o(292627),
                i = o(537392),
                c = o(392237),
                l = o(365023),
                d = o(392027),
                u = o(774654),
                m = o(725516),
                p = o(443781);
            const b = c.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${c.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                h = (e) => {
                    const { "aria-label": t, label: o, onPress: h, scribeComponent: f, ...g } = e,
                        { loggedInUserId: k } = n.useContext(p.rC),
                        y = (0, m.z)(),
                        w = n.useCallback(
                            (e) => {
                                y.scribe({ component: f, action: "click" }), h && h(e);
                            },
                            [y, h, f],
                        ),
                        Z = u.ZM.useCollapsibleNavBars(),
                        v = [...u.Ah({ elementPosition: "bottom" }), Z && b.fabStaysAboveSafeArea];
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
                                      n.createElement(l.Z, { id: "FloatingActionButtonBase" }, (e, i) => n.createElement(a.Z, (0, r.Z)({ ref: e() }, i({ style: p })), n.createElement(d.Z, (0, r.Z)({}, g, { "aria-label": t, label: s ? o : void 0, onPress: w, style: u && b.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, o) => {
            o.d(t, { Z: () => c });
            o(136728);
            var r = o(202784),
                n = o(387524),
                a = o(635510);
            const s = "/compose/post";
            class i extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: o } = this.props,
                                r = { pathname: s, state: (t && t()) || {} };
                            o.push(r);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: o, scribeComponent: i } = this.props;
                    return r.createElement(n.Z, { "aria-label": e, href: s, icon: t, label: o, onPress: this._handlePress, scribeComponent: i, testID: a.Z.tweet });
                }
            }
            const c = i;
        },
        32677: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(202784),
                n = o(111677),
                a = o.n(n),
                s = o(186444),
                i = o(355883);
            const c = a().j0179e90,
                l = a().ee69d769({ verb: "" }),
                d = r.createElement(s.default, null),
                u = ({ getLocationState: e, history: t }) => r.createElement(i.Z, { "aria-label": c, getLocationState: e, history: t, icon: d, label: l, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        330815: (e, t, o) => {
            o.d(t, { Z: () => C });
            var r = o(202784),
                n = o(392237),
                a = o(154003),
                s = o(111677),
                i = o.n(s),
                c = o(184605),
                l = o(980407),
                d = o(873637),
                u = o(668214),
                m = o(497294);
            const p = (e, t) => (t.media ? t.media : (0, c.Z)(t.mediaId) ? (0, m.m3)(e, t.mediaId)[0] : void 0),
                b = (e, t) => (void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null),
                h = (0, u.Z)()
                    .propsFromState(() => ({ media: p, mediaId: b }))
                    .propsFromActions(() => ({ processMedia: m.C4, updateMediaUpload: m._J }))
                    .withAnalytics({ page: "media", section: "edit" }),
                f = "applyButton",
                g = i().gd80afba,
                k = i().a753a870;
            class y extends r.Component {
                constructor(e) {
                    super(e),
                        (this._getMedia = () => {
                            const { media: e } = this.props;
                            return e && e.mediaFile && e.mediaFile.isImage ? e : null;
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { isProcessing: e } = this.state;
                            return r.createElement(a.ZP, { disabled: e, onPress: this._handleApplyButtonClick, size: "small", testID: f, type: "primaryFilled" }, k);
                        }),
                        (this._handleBackClick = () => {
                            const { analytics: e, onCancel: t } = this.props;
                            e.scribe({ action: "cancel" }), t && t();
                        }),
                        (this._handleApplyButtonClick = () => {
                            const { onCropDone: e } = this.props,
                                t = this._cropper.current;
                            if (t) {
                                const { analytics: o, media: r, mediaId: n, onDone: a, processMedia: s, updateMediaUpload: i } = this.props;
                                this.setState({ isProcessing: !0 });
                                const l = t.getCropData(),
                                    { originalMediaFile: d } = r || {},
                                    u = !d || (0 === l.top && 0 === l.left && l.width === d.width && l.height === d.height);
                                (0, c.Z)(n) &&
                                    (e
                                        ? (e(l), a())
                                        : (i({ id: n, cropData: u ? void 0 : l }),
                                          s(n).then(() => {
                                              this.setState({ isProcessing: !1 }), o.scribe({ action: "done" }), a();
                                          })));
                            }
                        }),
                        (this.state = { isProcessing: !1 }),
                        (this._cropper = r.createRef()),
                        e.media || e.onCancel();
                }
                render() {
                    const { defaultAspectRatio: e, history: t, title: o, withAspectRatioOptions: n, withZoomControl: a } = this.props,
                        s = this._getMedia();
                    return r.createElement(l.Z, { backButtonType: "back", containerStyle: w.root, documentTitle: o || g, history: t, onBackClick: this._handleBackClick, rightControl: this._renderAppBarRightControl(), title: o || g }, r.createElement(d.Z, { defaultAspectRatio: e, media: s, ref: this._cropper, withAspectRatioOptions: n, withZoomControl: a }));
                }
            }
            const w = n.default.create((e) => ({ root: { flexShrink: 1, height: 650 } })),
                Z = h(y);
            var v = o(757700);
            const E = n.default.create((e) => ({ modal: { width: 600, maxWidth: "90vw" } })),
                C = (e) => r.createElement(v.ZP, { clickMaskToClose: !1, modalSize: "fitChildren", style: E.modal }, r.createElement(Z, e));
        },
        199127: (e, t, o) => {
            o.r(t), o.d(t, { MediaPickerWithPreview: () => l, default: () => d });
            var r = o(202784),
                n = o(850496),
                a = o(373554),
                s = o(668214),
                i = o(497294);
            const c = (0, s.Z)().propsFromActions(() => ({ addMedia: i.rA, processMultipleMedia: i.G$ }));
            class l extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, location: o, onChange: r, onFailure: n, processMultipleMedia: a } = this.props,
                                s = this._getAcceptedFileInputs(),
                                i = Array.from(e).find((e) => s.includes(e.type));
                            i &&
                                t([i], { location: o }).then((e) => {
                                    r && r(e.map((e) => e.id)), a(e, { onFailure: n });
                                });
                        }),
                        (this._getAcceptedFileInputs = () => {
                            const { acceptGifs: e, acceptVideo: t } = this.props;
                            return (0, a.h)({ acceptGifs: e, acceptVideo: t });
                        });
                }
                render() {
                    const { acceptGifs: e, acceptVideo: t, "aria-label": o, aspectRatio: a, borderRadius: s, currentContent: i, description: c, innerStyle: l, maskStyle: d, mediaItem: u, onCrop: m, onRemove: p, rootStyle: b } = this.props;
                    return r.createElement(n.Z, { acceptGifs: e, acceptVideo: t, "aria-label": o, aspectRatio: a, borderRadius: s, currentContent: i, description: c, innerStyle: l, maskStyle: d, mediaItem: u, onAddMediaFiles: this._handleAddMediaFiles, onCrop: m, onRemove: p, rootStyle: b, withDragDrop: !0 });
                }
            }
            l.defaultProps = { acceptGifs: !1, acceptVideo: !1 };
            const d = c(l);
        },
        165336: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                n = o(822399),
                a = o(668214),
                s = o(497294);
            const i = (e, t) => (0, s._T)(e, t.mediaIds);
            const c = (0, a.Z)().propsFromState(() => ({ mediaUploadProgress: i }))(function (e) {
                return r.createElement(n.Z, { progress: e.mediaUploadProgress });
            });
        },
        780589: (e, t, o) => {
            o.d(t, { ZP: () => C });
            var r = o(202784),
                n = o(325686),
                a = o(855488),
                s = o(167630),
                i = o(392237),
                c = o(111677),
                l = o.n(c),
                d = o(666536),
                u = o(702001),
                m = o(312771),
                p = o(71620),
                b = o(668214),
                h = o(836255);
            const f = (e, t) => {
                    const { tweetId: o } = t;
                    return o ? h.Z.selectHydrated(e, o) : void 0;
                },
                g = (e, t) => {
                    const { tweetId: o } = t;
                    return o ? h.Z.selectFetchStatus(e, o) : void 0;
                },
                k = (0, b.Z)()
                    .propsFromState(() => ({ tweet: f, tweetFetchStatus: g }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, p.zr)("TWEET_BY_URL"), fetchTweetIfNeeded: h.Z.fetchOneIfNeeded }));
            var y = o(734907);
            const w = l().f1c63c34,
                Z = l().a78f6310,
                v = l().fe9ddab6,
                E = i.default.create((e) => ({ activityIndicatorWrapper: { alignItems: "center", marginHorizontal: e.componentDimensions.gutterHorizontal, marginBottom: e.componentDimensions.gutterVertical, padding: e.spaces.space12 } })),
                C = k(({ checkTweet: e, createLocalApiErrorHandler: t, fetchTweetIfNeeded: o, inputStyle: i, onChangeTweetId: c, tweet: l, tweetFetchStatus: p, tweetId: b, withActivityIndicator: h }) => {
                    const [f, g] = r.useState(),
                        k = r.useMemo(
                            () =>
                                (0, d.Z)((e) => {
                                    e && o(e).catch(t(u.c));
                                }, 250),
                            [t, o],
                        );
                    r.useEffect(() => {
                        k(b);
                    }, [k, b]),
                        r.useEffect(() => {
                            if (l) {
                                const t = e?.(l);
                                t && (g(t), c(void 0));
                            } else p === m.ZP.FAILED && g(v);
                        }, [e, c, l, p]);
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(a.Z, {
                            errorText: f,
                            invalid: !!f,
                            label: w,
                            name: "TweetByUrlInput",
                            onChange: (e) => {
                                g(void 0);
                                const t = e.target.value,
                                    o = (0, y.I)(t);
                                o ? c(o) : t ? g(Z) : c(void 0);
                            },
                            style: i,
                        }),
                        h && p === m.ZP.LOADING ? r.createElement(n.Z, { style: E.activityIndicatorWrapper }, r.createElement(s.Z, { size: "large" })) : null,
                    );
                });
        },
        734907: (e, t, o) => {
            o.d(t, { I: () => n });
            var r = o(173396);
            const n = (e) => {
                if (/^\d+$/.test(e)) return e;
                const t = /(status|article)\/(\d+)/g.exec(e) || [];
                return (0, r.Z)(t);
            };
        },
        404450: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(202784),
                n = o(995145),
                a = o(530732),
                s = o(392237),
                i = o(668214),
                c = o(836255);
            const l = (e, t) => {
                    const { tweetId: o } = t;
                    return o ? c.Z.selectHydrated(e, o) : void 0;
                },
                d = (0, i.Z)().propsFromState(() => ({ tweet: l })),
                u = s.default.create((e) => ({ tweet: { backgroundColor: e.colors.cellBackground, borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.xLarge, marginBottom: e.componentDimensions.gutterVertical, marginHorizontal: e.componentDimensions.gutterHorizontal } })),
                m = d(({ onTweetPress: e, style: t, tweet: o, tweetId: s }) => {
                    if (!o) return null;
                    const i = r.createElement(n.Z, { tweet: o });
                    if (!e) return i;
                    return r.createElement(
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
        286240: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(576648),
                n = o(111677),
                a = o.n(n),
                s = o(630715),
                i = o(689985);
            const c = a().afccc67e,
                l = a().beb24e9e,
                d = ({ addToast: e, id: t, screenName: o, scribeAction: n }) => ({
                    onClick: () => {
                        r.Z.setString((0, i.JG)(t, o)), e({ text: l }), n({ element: "copy_link" });
                    },
                    Icon: s.default,
                    text: c,
                });
        },
        442907: (e, t, o) => {
            o.d(t, { Z: () => b });
            var r = o(111677),
                n = o.n(r),
                a = o(607127),
                s = o(689985);
            const i = n().gea6cc1a,
                c = n().db9cc928,
                l = n().c4e28ba6,
                d = n().ff2982d0,
                u = n().ca17beec,
                m = n().f5cbb31c,
                p = n().f0977f52,
                b = ({ addToast: e, createLocalApiErrorHandler: t, deleteTwitterArticle: o, history: r, isPublished: n, location: b, onScribeEvent: h, twitterArticleId: f }) => ({
                    confirmation: { headline: n ? i : c, label: n ? m : p, text: n ? d : l, confirmButtonType: "destructiveFilled" },
                    Icon: a.default,
                    isEmphasized: !0,
                    onClick: () => {
                        o(f)
                            .then(() => {
                                e({ text: u }), h?.(), r.replace(s.TC);
                            })
                            .catch(t({ showToast: !0 }));
                    },
                    text: m,
                });
        },
        637019: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(111677),
                n = o.n(r),
                a = o(988227),
                s = o(689985);
            const i = n().db419d4c,
                c = ({ isFocusMode: e, twitterArticleId: t }) => ({ Icon: a.default, link: (0, s.mI)(t, e), text: i });
        },
        600304: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(111677),
                n = o.n(r),
                a = o(630715),
                s = o(689985);
            const i = n().a1bc8e6c,
                c = ({ id: e, screenName: t }) => ({ Icon: a.default, link: (0, s.N3)(e, t), text: i });
        },
        583909: (e, t, o) => {
            o.d(t, { Z: () => q });
            var r = o(202784),
                n = o(457311),
                a = o(325686),
                s = o(952428),
                i = o(731708),
                c = o(392237),
                l = o(19640),
                d = o(415725),
                u = o(751632),
                m = o(201770),
                p = o(689985),
                b = o(247056),
                h = o(111677),
                f = o.n(h),
                g = o(745088),
                k = o(841972),
                y = o(774426),
                w = o(725405),
                Z = o(500002),
                v = o(641353),
                E = o(286240),
                C = o(442907),
                I = o(637019),
                T = o(600304),
                P = o(71620),
                _ = o(668214),
                A = o(143322),
                S = o(601576),
                F = o(919022);
            const M = (e, t) => t.articleEntityId,
                B = (e, t) => {
                    const o = M(0, t);
                    return A.ZP.select(e, o);
                },
                x = (e, t) => {
                    const o = M(0, t);
                    return A.ZP.selectTweetId(e, o);
                },
                L = (e, t) => {
                    const o = M(0, t);
                    return A.ZP.selectAuthor(e, o);
                },
                D = (0, _.Z)()
                    .propsFromState(() => ({ articleEntity: B, tweetId: x, author: L }))
                    .propsFromActions(() => ({ addToast: S.fz, block: F.ZP.block, createLocalApiErrorHandler: (0, P.zr)("TWITTER_ARTICLE_ACTION_MENU"), deleteTwitterArticle: A.ZP.delete, unpublishArticleEntity: A.ZP.unpublish })),
                R = f().af65c854,
                U = f().e05e2336,
                H = "article";
            const z = (0, Z.ZP)(
                    D(function (e) {
                        const [t, o] = r.useState(!1),
                            { addToast: n, articleEntity: a, articleEntityId: s, author: i, createLocalApiErrorHandler: c, deleteTwitterArticle: d, history: u, location: m, tweetId: h, unpublishArticleEntity: f } = e,
                            Z = (0, w.Z)(),
                            P = r.useCallback(() => {
                                Z.scribe({ page: H, section: "article_actions", component: "overflow_menu", element: void 0, action: "impression" });
                            }, [Z]),
                            _ = r.useCallback(
                                ({ element: e }) => {
                                    Z.scribe({ page: H, component: "overflow_menu", element: e, action: "click" });
                                },
                                [Z],
                            ),
                            A = a?.lifecycle_state?.lifecycle === l.f.Published,
                            S = r.useCallback(() => {
                                o((e) => !e);
                            }, []),
                            F = r.useCallback(() => {
                                f(s)
                                    .then(() => {
                                        _({ element: "confirm_unpublish_button" });
                                        const e = (0, p.lU)(s);
                                        u.replace(e);
                                    })
                                    .catch(c({}))
                                    .finally(S);
                            }, [_, S, s, c, u, f]),
                            M = r.useCallback(() => {
                                S(), _({ element: "unpublish_button" });
                            }, [_, S]),
                            B = r.useCallback(() => {
                                const e = A ? "delete_sheet_published" : "delete_sheet_draft";
                                Z.scribe({ component: e, element: "confirm_delete", action: "click" });
                            }, [Z, A]),
                            x = r.useCallback(() => {
                                const e = (0, C.Z)({ addToast: n, createLocalApiErrorHandler: c, deleteTwitterArticle: d, history: u, isPublished: A, location: m, onScribeEvent: B, twitterArticleId: s });
                                if (A) {
                                    const t = { onClick: M, Icon: g.default, text: U },
                                        o = h && i ? [(0, E.Z)({ addToast: n, id: h, screenName: i?.screen_name, scribeAction: _ }), (0, T.Z)({ id: h, screenName: i?.screen_name })] : null,
                                        r = [t, e];
                                    return o ? [...o, ...r] : r;
                                }
                                return [{ Icon: k.default, link: (0, p.DQ)(s), onClick: () => _({ element: "focus_button" }), text: R }, (0, I.Z)({ twitterArticleId: s }), e];
                            }, [_, B, M, n, s, i, c, d, u, A, m, h]),
                            L = r.useCallback((e) => r.createElement(y.default, { actionItems: x(), onClose: e }), [x]);
                        return a ? r.createElement(r.Fragment, null, r.createElement(b.Z, { onClick: P, renderActionMenu: L }), t ? r.createElement(v.Z, { onClose: S, onUnpublish: F, twitterArticleTitle: a.title }) : null) : null;
                    }),
                ),
                N = (e, t) => t.articleEntityId,
                O = (e, t) => {
                    const o = N(0, t);
                    return A.ZP.select(e, o);
                },
                V = (e, t) => {
                    const o = N(0, t);
                    return A.ZP.selectAuthor(e, o);
                },
                W = (0, _.Z)().propsFromState(() => ({ author: V, articleEntity: O })),
                G = c.default.create((e) => ({ container: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small, paddingHorizontal: e.componentDimensions.gutterHorizontal, minHeight: e.spaces.space80, paddingVertical: e.spaces.space12 }, coverImage: { borderRadius: e.borderRadii.small, overflow: "hidden" }, marginTopComposer: { marginTop: e.spaces.space8 }, rowAndSpaceBetween: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" } })),
                j = W((e) => {
                    const { articleEntity: t, articleEntityId: o, source: n } = e;
                    if (!t) return null;
                    const { metadata: c, preview_text: b, title: h } = t,
                        f = t?.lifecycle_state?.lifecycle === l.f.Published,
                        g = t?.lifecycle_state?.modified_at_secs,
                        k = c?.modified_at_secs,
                        y = r.createElement(m.Z, { isPublished: f, publishedAtMs: g ? "" + 1e3 * g : void 0, updatedAtMs: k ? "" + 1e3 * k : void 0 }),
                        w = (0, p.lU)(o),
                        Z = [G.rowAndSpaceBetween, G.marginTopComposer];
                    return r.createElement(d.Z, { exact: !1, path: w }, (e) => r.createElement(s.Z, { "aria-selected": e, link: w }, r.createElement(a.Z, { style: G.container }, r.createElement(a.Z, { style: G.rowAndSpaceBetween }, y, r.createElement(z, { articleEntityId: o, source: n })), r.createElement(a.Z, { style: Z }, r.createElement(u.ZP, { numberOfLines: 2, size: "body", title: h, weight: "bold" })), b ? r.createElement(i.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: G.marginTopComposer }, b) : null)));
                });
            var $ = o(26232),
                K = o(572657);
            const J = (e, t) => K.ZP.selectSliceModule(t.userId, t.lifecycle || "Draft"),
                q = (0, _.Z)().propsFromState(() => ({ sliceModule: J }))((e) => {
                    const { emptyStateHeader: t, emptyStateMessage: o, sliceModule: a, source: s } = e,
                        i = r.useCallback((e) => (e ? r.createElement(j, { articleEntityId: e, source: s }) : null), [s]),
                        c = r.useCallback(() => r.createElement(n.Z, { header: t, message: o }), [t, o]);
                    return r.createElement($.Z, { module: a, noItemsRenderer: c, renderer: i, withoutHeadroom: !0 });
                });
        },
        641353: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(202784),
                n = o(731708),
                a = o(190286),
                s = o(111677),
                i = o.n(s);
            const c = i().gea6cc1a,
                l = i().b6f72a22,
                d = i().f558d2e0,
                u = { boldElement: r.createElement(n.ZP, { weight: "bold" }) },
                m = (e) => {
                    const { onClose: t, onUnpublish: o, twitterArticleTitle: s } = e,
                        m = r.useMemo(() => r.createElement(n.ZP, null, s ? r.createElement(i().I18NFormatMessage, { $i18n: "hb16b207" }, r.cloneElement(u.boldElement, null, i().e9473589({ articleTitle: s }))) : l), [s]);
                    return r.createElement(a.Z, { confirmButtonLabel: d, headline: c, onCancel: t, onConfirm: o, text: m });
                };
        },
        376293: (e, t, o) => {
            o.d(t, { $f: () => C, KV: () => g, LI: () => A, SC: () => E, Vt: () => w, ed: () => S, op: () => I });
            var r = o(202784),
                n = o(190286),
                a = o(111677),
                s = o.n(a),
                i = o(616894),
                c = o(314948),
                l = o(516951),
                d = o(163390);
            const u = s().cfd2f35e,
                m = s().f9e45cfb,
                p = s().fcd4d489,
                b = s().a6450e84,
                h = s().g353ad73,
                f = s().ad00a739,
                g = s().a9fd20be,
                k = s().j546fb79,
                y = s().c9623eeb,
                w = s().e133be4e,
                Z = s().he43bca4,
                v = s().f5f01af6,
                E = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                C = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: m({ screenName: e }), label: b, text: t ? f({ screenName: e }) : h({ screenName: e }) }),
                I = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: r, testID: n, unblockAction: a, unblockSubtext: s, user: i }) => {
                    let c,
                        u = l.Z;
                    const m = A(i, o);
                    switch (r) {
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
                    return { confirmation: m, onClick: u, testID: n, shortcutKey: c, Icon: T(i.blocking), text: _(i), subText: P({ user: i, blockSubtext: t, unblockSubtext: s }) };
                },
                T = (e) => (e ? c.default : i.default),
                P = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                _ = (e) => (e.blocking ? y({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                A = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: k({ screenName: e }), label: w, text: t ? v : Z }))(e.screen_name, t) : C(e.screen_name, t)),
                S = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: a, headline: s, label: i, text: c } = e;
                    return r.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: i, confirmButtonType: a, headline: s, onCancel: o, onConfirm: t, text: c });
                };
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().b6878b0a }, showToast: !0 };
        },
        702001: (e, t, o) => {
            o.d(t, { c: () => a });
            var r = o(516951),
                n = o(615656);
            const a = { [n.ZP.OtherUserSuspended]: { customAction: r.Z }, [n.ZP.StatusViewForbidden]: { customAction: r.Z } };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => m, Od: () => d, PN: () => p, uq: () => l, wR: () => h });
            var r = o(251067),
                n = o(522171),
                a = o(111677),
                s = o.n(a),
                i = o(912021),
                c = o(323265);
            const l = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, i.Z)((e) => {
                    const t = e ? [{ description: s().b7fa0cfe, keys: l.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: l.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: l.nextItem, universal: !0 }, { description: s().g0048656, keys: l.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: l.refresh, universal: !1 }, { description: s().ha8209bc, keys: l.goHome, universal: !1 }, { description: s().fcf3e54c, keys: l.goExplore, universal: !1 }, { description: s().eb75875e, keys: l.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: l.goMentions, universal: !1 }, { description: s().fa98627a, keys: l.goProfile, universal: !1 }, { description: s().d4ebc798, keys: l.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: l.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: l.goLikes, universal: !1 }, { description: s().b0041756, keys: l.goLists, universal: !1 }, { description: s().d4986f86, keys: l.goMessages, universal: !1 }, { description: s().h5860a68, keys: l.goGrok, universal: !1 }, { description: s().bb081ea2, keys: l.goSettings, universal: !1 }, { description: s().i3145aa0, keys: l.goBookmarks, universal: !1 }, ...t, { description: s().eee2ed92, keys: l.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: l.goDisplay, universal: !1 }];
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
                        o = m(),
                        r = p(),
                        n = {};
                    return (
                        [...o, ...r, ...t].forEach(({ description: e, keys: t }) => {
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
        192643: (e, t, o) => {
            o.d(t, { J: () => r, P: () => n });
            o(571372);
            const r = "canceled",
                n = (e) => {
                    let t = !1;
                    return {
                        promise: new Promise((o, n) => {
                            e.then((e) => (t ? n(new Error(r)) : o(e))), e.catch((e) => n(t ? new Error(r) : e));
                        }),
                        cancel() {
                            t = !0;
                        },
                    };
                };
        },
        409438: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-e019dbda.e8da888a.js.map
