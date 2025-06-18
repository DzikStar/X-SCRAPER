(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose-e96e9bea"],
    {
        539596: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => ae });
            var i = {};
            r.r(i), r.d(i, { anchorOffsetContextText: () => E, composerEditorContent: () => S, editorStateJson: () => g.G, editorState_2_json: () => g.c, parseTwitterText: () => v });
            var n = {};
            r.r(n), r.d(n, { ConvertEmojiEffect: () => C, DeveloperDebug: () => P, InlineStyleButton: () => O, OverflowHighlightEffect: () => U, PreserveUnstyledEntitiesEffect: () => X, Separator: () => re, TextChangeEffect: () => te, TrackFocusView: () => H });
            var a = {};
            r.r(a), r.d(a, { useRichEnabled: () => Q, useTransform: () => I });
            var o = r(202784),
                s = r(925873),
                l = r(370751),
                d = r(870798);
            function c(e) {
                return function (t) {
                    e.setState((e) => {
                        e.editorState = t;
                        for (const t of e.transform.order) {
                            (0, e.transform.lookup[t])(e);
                        }
                    });
                };
            }
            function u(e) {
                return function (t) {
                    e.setState((e) => {
                        e.editorState = s.Z.initEditorState(t);
                        for (const t of e.transform.order) {
                            (0, e.transform.lookup[t])(e);
                        }
                    });
                };
            }
            var h = r(301503),
                m = r(835305);
            function p(e) {
                return function (t) {
                    const r = e.getState(),
                        i = m.wK(t),
                        n = h.RichUtils.toggleInlineStyle(r.editorState, i);
                    e.mut.editorState(n);
                };
            }
            function f(e) {
                return function (t) {
                    window.requestAnimationFrame(() => {
                        window.requestAnimationFrame(() => {
                            const r = e.getState(),
                                i = t(r);
                            e.mut.editorState(i);
                        });
                    });
                };
            }
            var g = r(873793),
                y = r(24949),
                b = r(791134);
            const v = (0, y.P1)([(e) => e.editorState.getCurrentContent().getPlainText(), (e) => e.isThread, (e, t) => t.featureSwitches, (e, t) => t.userClaims], (e, t, r, i) => {
                    const n = { isThread: t, featureSwitches: r, userClaims: i };
                    return b.k2(e, n);
                }),
                E = (0, y.P1)([(e) => e.editorState], (e) => {
                    const t = e.getCurrentContent(),
                        r = e.getSelection(),
                        i = r.getAnchorKey(),
                        n = t.getBlockForKey(i);
                    let a = 0;
                    for (const e of t.getBlocksAsArray()) {
                        if (n === e) break;
                        a += e.getText().length + 1;
                    }
                    const o = a + r.getAnchorOffset(),
                        s = t.getPlainText(),
                        l = s.length - o;
                    let d, c;
                    l < _ ? ((d = l), (c = w - l)) : o < _ ? ((d = w - o), (c = o)) : ((d = _), (c = _));
                    const u = o - c,
                        h = o + d;
                    return s.substring(u, h);
                }),
                w = 280,
                _ = w / 2,
                S = (0, y.P1)(
                    [
                        (e) => {
                            const t = e.editorState.getCurrentContent(),
                                r = { text: t.getPlainText(), editorStateRaw: (0, h.convertToRaw)(t) };
                            return JSON.stringify(r);
                        },
                    ],
                    (e) => JSON.parse(e),
                ),
                x = (0, d.W)(() => ({ editorState: s.Z.initEditorState(""), hasOverflowStyle: !1, isThread: !1, isFocused: !1, isEditorFocused: !1, isRichTextInput: !0, transform: { lookup: {}, order: [] } }), { name: "ComposerStore", freeze: !1, selectors: i, mutations: (e) => ({ editorState: c(e), editorStateRaw: u(e), toggleInlineStyle: p(e), defer_editorState: f(e) }) });
            function I(e, t) {
                const r = x.useActions(),
                    i = o.useRef(t);
                (i.current = t),
                    o.useEffect(() => {
                        function t(...e) {
                            return i.current(...e);
                        }
                        return (
                            r.setState((r) => {
                                r.transform.lookup[e] = t;
                                const i = (0, l.Z)(r.transform.order);
                                i.add(e), (r.transform.order = Array.from(i));
                            }),
                            function () {
                                r.setState((t) => {
                                    delete t.transform.lookup[e];
                                    const r = (0, l.Z)(t.transform.order);
                                    r.delete(e), (t.transform.order = Array.from(r));
                                });
                            }
                        );
                    }, [e, r]);
            }
            function C() {
                return (
                    I("ConvertEmojiEffect", (e) => {
                        e.editorState = s.Z.convertEmojiToEntities(e.editorState);
                    }),
                    null
                );
            }
            let P;
            P = () => null;
            r(571372);
            var M = r(976145),
                Z = r(154003),
                D = r(392237),
                R = r(111677),
                T = r.n(R),
                k = r(394123),
                F = r(856661);
            function O({ isWebRedesign: e, style: t }) {
                const r = ae.useActions(),
                    i = ae.useRichEnabled(),
                    n = ae.useState((e) => {
                        const r = e.editorState.getCurrentInlineStyle(),
                            i = m.wK(t);
                        return r.contains(i);
                    });
                if (!i.write) return null;
                const a = A(t),
                    s = (function (e) {
                        function t(e) {
                            return `(${[B, e].join("+")})`;
                        }
                        switch (e) {
                            case m.xs.Bold:
                                return t("B");
                            case m.xs.Italic:
                                return t("I");
                            default:
                                throw new Error(`unrecognized style [${e}]`);
                        }
                    })(t),
                    l = [a, s].join(" "),
                    d = [a, n && A("active"), s].filter(Boolean),
                    c = (0, M.Z)(d, !0),
                    u = (function (e) {
                        switch (e) {
                            case m.xs.Bold:
                                return k.default;
                            case m.xs.Italic:
                                return F.default;
                            default:
                                throw new Error(`unrecognized style [${e}]`);
                        }
                    })(t),
                    h = e ? [n ? L.newIconActive : L.newIconInactive] : [n ? L.iconActive : L.iconInactive];
                return o.createElement(Z.ZP, {
                    "aria-label": c,
                    hoverLabel: { label: l },
                    icon: o.createElement(u, { style: h }),
                    onClick: function () {
                        r.mut.toggleInlineStyle(t);
                    },
                    preventFocusShift: !0,
                    size: "medium",
                    type: e ? "primaryText" : "brandText",
                });
            }
            function A(e, t) {
                return (0, G[e])({ ...t, ttc_rich_text_composer: "" });
            }
            const B = r(323265).ZP.isMac() ? "⌘" : "CTRL",
                G = { [m.xs.Bold]: T().aeca1239, [m.xs.Italic]: T().i7dc66dd, active: T().ad89b831 },
                L = D.default.create((e) => {
                    const t = { borderRadius: e.borderRadiiPx.small };
                    return { iconActive: { ...t, backgroundColor: e.colors.primary, color: e.colors.navigationBackground }, newIconActive: { ...t, backgroundColor: e.colors.gray700, color: e.colors.navigationBackground }, iconInactive: { ...t, color: e.colors.primary }, newIconInactive: { ...t, color: e.colors.gray700 } };
                });
            var V = r(443781);
            function z() {
                return { ...(0, V.QZ)(), isThread: x.useState((e) => e.isThread) };
            }
            function U() {
                const e = x.useActions(),
                    t = z(),
                    r = o.useRef({ context: t, actions: e });
                return (
                    (r.current.context = t),
                    (r.current.actions = e),
                    I("OverflowHighlightEffect", (e) => {
                        !(function (e, t) {
                            const { parseTwitterText: r } = t.actions.select,
                                i = r(e, t.context),
                                { validRangeEnd: n, weightedLength: a } = i,
                                o = n + 1,
                                l = e.hasOverflowStyle,
                                d = o < a;
                            e.hasOverflowStyle = d;
                            if (d || l) {
                                const t = d ? n + 1 : -1;
                                e.editorState = s.Z.updateOverflowStyle(e.editorState, t, l);
                            }
                        })(e, r.current);
                    }),
                    o.useEffect(() => {
                        const { editorState: t } = e.getState();
                        t && e.mut.editorState(t);
                    }, [e, t.isThread]),
                    null
                );
            }
            var W = r(807896),
                N = r(325686);
            function H(e) {
                const t = x.useActions(),
                    r = o.useRef();
                return o.createElement(
                    N.Z,
                    (0, W.Z)({}, e, {
                        onBlur: function (i) {
                            clearTimeout(r.current),
                                (r.current = setTimeout(() => {
                                    t.setState((e) => {
                                        e.isEditorFocused = !1;
                                    }),
                                        "function" == typeof e.onBlur && e.onBlur(i);
                                }, j));
                        },
                        onFocus: function (i) {
                            clearTimeout(r.current),
                                t.setState((e) => {
                                    (e.isFocused = !0), (e.isEditorFocused = !0);
                                }),
                                "function" == typeof e.onFocus && e.onFocus(i);
                        },
                    }),
                    e.children,
                );
            }
            const j = 200;
            r(136728);
            var q = r(516951),
                $ = r(584713),
                K = r(507824);
            function Q() {
                const e = z(),
                    t = x.useState((e) => e.isRichTextInput),
                    r = { isRichTextInput: t };
                return K.v$.enabled({ context: e, state: r });
            }
            const J = [m.DraftJS.Bold, m.DraftJS.Italic];
            function X() {
                return I("PreserveUnstyledEntitiesEffect", Q().write ? Y : q.Z), null;
            }
            function Y(e) {
                let t = e.editorState;
                const r = { selection: t.getSelection(), inline_style: t.getCurrentInlineStyle(), last_change_type: t.getLastChangeType() },
                    i = r.selection.getStartOffset() - r.selection.getEndOffset() != 0,
                    n = "change-inline-style" === r.last_change_type;
                if (i || n) {
                    t = h.EditorState.set(t, { allowUndo: !1 });
                    let i = t.getCurrentContent();
                    for (const e of t.getCurrentContent().getBlocksAsArray()) {
                        const t = e.getText(),
                            r = (0, $.Z)(t),
                            n = e.key;
                        for (const e of r) {
                            const t = ee(n, e.indices);
                            for (const e of J) i = h.Modifier.removeInlineStyle(i, t, e);
                        }
                    }
                    (t = h.EditorState.push(t, i, "change-inline-style")), r.selection.getHasFocus() && (t = h.EditorState.forceSelection(t, r.selection)), (t = h.EditorState.setInlineStyleOverride(t, r.inline_style)), (t = h.EditorState.set(t, { allowUndo: !0 })), (e.editorState = t);
                }
            }
            function ee(e, t) {
                const [r, i] = t,
                    [n, a] = [r, i];
                let o = h.SelectionState.createEmpty(e);
                return (o = o.merge({ anchorOffset: n, focusOffset: a })), o;
            }
            function te(e) {
                const t = o.useRef({}),
                    r = o.useRef(e);
                r.current = e;
                const i = ae.useSelect((e) => e.composerEditorContent),
                    n = ae.useState((e) => e.isRichTextInput);
                return (
                    o.useEffect(() => {
                        n && (t.current.first_pass ? r.current.onTextChange(i) : (t.current.first_pass = !0));
                    }, [i, n]),
                    null
                );
            }
            function re() {
                return ae.useRichEnabled().write ? o.createElement("div", { style: ie.container }) : null;
            }
            const ie = D.default.create((e) => ({ container: { backgroundColor: e.colors.gray400, borderRadius: e.borderRadii.infinite, height: e.spaces.space16, margin: "auto", width: "2px" } }));
            var ne = r(972689);
            const ae = { ...x, ...a, ...n, T: ne };
        },
        972689: () => {},
        113545: (e, t, r) => {
            "use strict";
            r.d(t, { _: () => l, q: () => d });
            var i = r(807896),
                n = r(202784),
                a = r(370751),
                o = r(386742),
                s = r(539596);
            function l(e) {
                const { children: t, flex: r, ...a } = e;
                return s.Z.useRichEnabled().features.inline_media
                    ? n.createElement(o._l, a, (t, r) => {
                          const a = { ...t.draggableProps.style };
                          if (a.transform) {
                              const e = `translate(0px${a.transform.slice(a.transform.indexOf(","), a.transform.length)}`;
                              a.transform = e;
                          }
                          return e.flex && ((a.display = "flex"), r.isDragging || ((a.width = e.widthOverride || "100%"), (a.height = "100%"))), r.isDragging ? (a.opacity = 0.4) : (delete a.scale, delete a.opacity), n.createElement("div", (0, i.Z)({ ref: t.innerRef }, t.draggableProps, t.dragHandleProps, { style: a }), e.children);
                      })
                    : e.children;
            }
            function d(e) {
                const t = n.Children.toArray(e.children),
                    r = (function (e) {
                        const t = {};
                        if (!e.length) return t;
                        const [r] = e,
                            i = u(r).contentState.getBlocksAsArray();
                        for (let e = 0; e < i.length; e++) {
                            t[i[e].key] = e;
                        }
                        return t;
                    })(t);
                return t.map((e, t) => {
                    const i = u(e),
                        a = i.block.key,
                        o = r[a],
                        s = !c.has(i.block.type);
                    return n.createElement(l, { draggableId: a, index: o, isDragDisabled: s, key: a }, e);
                });
            }
            const c = (0, a.Z)(["atomic"]),
                u = (e) => e.props.children.props;
        },
        373554: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => y, h: () => f });
            var i = r(807896),
                n = r(202784),
                a = r(449161),
                o = r(392237),
                s = r(111677),
                l = r.n(s),
                d = r(473026),
                c = r(276259),
                u = r(540387);
            const h = "fileInput",
                m = l().b9960f32,
                p = n.createElement(d.default, null),
                f = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: r }) => (t ? c.v5 : []).concat(e ? [c.Re] : []).concat(r ? u.jn : []);
            const g = o.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                y = function ({ "aria-label": e = m, acceptGifs: t = !0, acceptImages: r = !0, acceptVideo: o = !0, customMimeTypes: s = [], icon: l = p, size: d = "medium", style: c, withIcon: u = !0, ...y }) {
                    const b = f({ acceptGifs: t, acceptImages: r, acceptVideo: o }).concat(s).join(",");
                    return n.createElement(a.Z, (0, i.Z)({}, y, { accept: b, "aria-label": e, icon: u ? l : void 0, size: d, style: [g.root, c], testID: h }));
                };
        },
        751170: (e, t, r) => {
            "use strict";
            r.d(t, { A: () => p, Z: () => b });
            var i = r(202784),
                n = r(325686),
                a = r(167630),
                o = r(992942),
                s = r(392237),
                l = r(111677),
                d = r.n(l),
                c = r(205074),
                u = r(364837),
                h = r(908478);
            const m = d().gff1f69e,
                p = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
            class f extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imagePreviewUrl: null }),
                        (this._getImageSrc = () => {
                            const { enableGif: e, mediaItem: t } = this.props,
                                { imagePreviewUrl: r } = this.state;
                            if (t && t.mediaFile) return t.mediaFile.isGif && !e ? r : t.mediaFile.url;
                        });
                }
                componentDidUpdate() {
                    const {
                            enableGif: e,
                            mediaItem: { mediaFile: t },
                        } = this.props,
                        { imagePreviewUrl: r } = this.state;
                    e ||
                        r ||
                        (t instanceof c.ZP &&
                            t.isGif &&
                            (0, u.R)(t).then((e) => {
                                this.setState({ imagePreviewUrl: e });
                            }));
                }
                shouldComponentUpdate(e, t) {
                    return !(0, h.Z)(e, this.props) || !(0, h.Z)(t, this.state);
                }
                render() {
                    const { borderRadius: e, enableGif: t, mediaItem: r, onClick: s, resizeMode: l } = this.props,
                        { imagePreviewUrl: d } = this.state || {},
                        c = r.mediaFile && r.mediaFile.isGif && !t && !d,
                        u = r.needsProcessing || c,
                        h = [y.root, g[e], u && y.loadingBorder],
                        p = this._getImageSrc();
                    return i.createElement(n.Z, { onClick: s, style: h }, u || !p ? i.createElement(a.Z, { "aria-label": m, style: y.activityIndicator }) : i.createElement(o.Z, { resizeMode: l, source: p, style: y.image }));
                }
            }
            f.defaultProps = { borderRadius: p.NONE, enableGif: !0, resizeMode: "cover" };
            const g = s.default.create((e) => ({ [p.INFINITE]: { borderRadius: e.borderRadii.infinite }, [p.MEDIUM]: { borderRadius: e.borderRadii.small }, [p.NONE]: { borderRadius: e.borderRadii.none } })),
                y = s.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                b = f;
        },
        304059: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => U });
            var i = r(202784),
                n = r(325686),
                a = r(537392),
                o = r(336961),
                s = r(659651),
                l = r(154003),
                d = r(392237),
                c = r(992942),
                u = r(111677),
                h = r.n(u),
                m = r(678773),
                p = r(597237),
                f = r(254944),
                g = r(837020),
                y = r(276259),
                b = r(443781),
                v = r(10656),
                E = r(716233),
                w = r(946208),
                _ = r(540387),
                S = r(950822),
                x = r(303186),
                I = r(954300);
            class C extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: r, style: n, variants: a, ...o } = this.props,
                        s = (0, x.IM)((0, I.rD)(a), t);
                    return (0, S.Z)("video", { ...o, children: [s.map((e) => i.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: n });
                }
            }
            C.defaultProps = { dataSaverMode: !1, variants: [] };
            var P = r(959587),
                M = r(751170),
                Z = r(523561),
                D = r(195560);
            const R = (0, Z.Z)({
                    loader: () =>
                        Promise.all([r.e("icons.2"), r.e("icons.9"), r.e("modules.common-e907d115"), r.e("modules.common-e019dbda"), r.e("icons.14"), r.e("icons.5"), r.e("modules.audio-6107ac1a"), r.e("modules.audio-b953418a"), r.e("modules.audio-7c51e6a7"), r.e("modules.audio-04db59e9"), r.e("modules.audio-76583d6c"), r.e("modules.audio-b7a8a5fb"), r.e("modules.audio-51f6e793"), r.e("modules.audio-e019dbda"), r.e("modules.audio-262c94d4"), r.e("modules.audio-c6fe4ea4"), r.e("icons.17"), r.e("icons.27"), r.e("icons.19"), r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"), r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"), r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"), r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"), r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"), r.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"), r.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"), r.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"), r.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"), r.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), r.e("loader.MediaPreviewVideoPlayer")])
                            .then(r.bind(r, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => i.createElement(D.Z, { hasError: e, onRetry: t }),
                }),
                T = h().gd80afba,
                k = h().j322caee,
                F = h().abd845fe,
                O = h().df1b0708,
                A = h().cd959e5c,
                B = h().e68b09b4,
                G = h().add55c98,
                L = h().f350cf46;
            class V extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isVideoPaused: !0, playGif: !1 }),
                        (this._handleGifClick = () => {
                            this.setState({ playGif: !this.state.playGif });
                        }),
                        (this._handleMediaPreviewLayout = (e) => {
                            const { mediaItem: t, resizeIfNeeded: r } = this.props,
                                i = t.mediaFile || t.externalMediaDetails;
                            if (!i) return;
                            const {
                                    nativeEvent: {
                                        layout: { height: n, width: a },
                                    },
                                } = e,
                                { height: o, width: s } = i,
                                l = s / o;
                            Math.abs(l - a / n) > 0.05 && ("width" === r ? this.setState({ mediaContainerSizeStyle: { width: n * l } }) : "height" === r && this.setState({ mediaContainerSizeStyle: { height: a / l } }));
                        }),
                        (this._handleVideoOnPlay = (e) => {
                            this.setState({ isVideoPaused: !1 });
                        }),
                        (this._handleVideoOnPause = (e) => {
                            this.setState({ isVideoPaused: !0 });
                        }),
                        (this._setVideoRef = (e) => {
                            this._video = e;
                        }),
                        (this.playVideo = () => {
                            if (this._video) {
                                const e = this._video.play();
                                void 0 !== e &&
                                    e
                                        .then((e) => {
                                            this._handleVideoOnPlay();
                                        })
                                        .catch();
                            }
                        }),
                        (this.pauseVideo = () => {
                            this._video && (this._video.pause(), this._handleVideoOnPause());
                        });
                }
                render() {
                    const { "aria-label": e, enableGif: t, mediaItem: r, onEdit: d, onEditSensitiveWarning: c, onRemove: u, role: h, style: b, withAltTextLabel: E, withCloseButton: w, withDragAndDropIndicator: _, withEditButton: S, withEditIcon: x, withEditSensitiveWarningButton: I } = this.props,
                        { mediaContainerSizeStyle: C, playGif: M } = this.state,
                        Z = r.externalMediaDetails && r.externalMediaDetails.mediaType === y.Re,
                        D = Z || (t && r.mediaFile && r.mediaFile.isGif),
                        R = !!r.mediaFile?.isVideo;
                    return i.createElement(a.ZP, null, ({ windowWidth: t }) => {
                        const r = void 0 !== x ? x : !v.Z.isTwoColumnLayout(t);
                        return i.createElement(n.Z, { "aria-label": e || G, onLayout: this._handleMediaPreviewLayout, role: h, style: [b, z.cursor, Z && z.gifPlayButton, C] }, this._renderPreview(), Z && !M && i.createElement(o.Z, { "aria-label": O, onPress: this._handleGifClick, size: "small" }), D ? i.createElement(P.ZP, { type: P.AM }) : null, E && !R ? i.createElement(s.Z, { align: "left", altLabel: e }) : null, i.createElement(n.Z, { style: z.editMedia }, _ ? i.createElement(l.ZP, { "aria-label": L, hoverLabel: { label: L }, icon: i.createElement(m.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, S && I ? i.createElement(l.ZP, { "aria-label": k, icon: i.createElement(p.default, { style: z.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, S ? i.createElement(l.ZP, { "aria-label": T, icon: r ? i.createElement(f.default, null) : void 0, onPress: d, size: r ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, r ? void 0 : F) : null), w ? i.createElement(l.ZP, { "aria-label": A, hoverLabel: { label: B }, icon: i.createElement(g.default, null), onPress: u, size: "small", style: z.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            r = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, r);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : i.createElement(n.Z, { style: d.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: r } = this.state,
                        a = { uri: r ? e : t };
                    return i.createElement(n.Z, { onClick: this._handleGifClick, style: d.default.absoluteFill }, i.createElement(c.Z, { resizeMode: "cover", source: a, style: z.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: r, mediaItem: n, onClick: a } = this.props;
                    return i.createElement(M.Z, { borderRadius: e, enableGif: t, mediaItem: n, onClick: a, resizeMode: r });
                }
                _renderVideoPreview(e, t, r, n) {
                    const { mediaItem: a } = this.props,
                        o = a.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && n instanceof _.ZP) {
                        let o = [];
                        (0, E.TO)(n.fileHandle) && (o = [{ src: t, type: e }]);
                        const s = a.mediaMetadata?.subtitles,
                            l = a?.trimData;
                        return i.createElement(R, { mediaFile: n, mediaId: String(r), mediaItem: a, subtitles: s, trimData: l, variants: o });
                    }
                    {
                        const r = (0, E.TO)(n.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return i.createElement(C, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: n instanceof _.ZP ? n.thumbnail : "", style: z.video, variants: r }, o?.upload?.mediaFile instanceof w.ZP ? i.createElement("track", { default: !0, kind: "subtitles", label: o.displayName, src: o.upload.mediaFile.vtt, srcLang: o.lang }) : null);
                    }
                }
            }
            (V.contextType = b.rC), (V.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const z = d.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                U = V;
        },
        942910: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => m });
            var i = r(202784),
                n = r(325686),
                a = r(682474),
                o = r(392237),
                s = r(174326),
                l = r(782578),
                d = r(443781),
                c = r(490834),
                u = r(113545),
                h = r(304059);
            class m extends i.Component {
                constructor(e, t) {
                    super(e, t), (this.state = { visibleItemIndex: 0, media: e.media });
                }
                static getDerivedStateFromProps(e, t) {
                    const r = e.media,
                        i = t.media;
                    return r.length <= 2
                        ? null
                        : r.length > i.length
                          ? { visibleItemIndex: r.length - 1 }
                          : (r.length < i.length &&
                                i.forEach((e, t) => {
                                    if (!r.includes(e)) return { visibleItemIndex: Math.max(t - 1, 0) };
                                }),
                            null);
                }
                render() {
                    return i.createElement(n.Z, { style: [p.container, this.props.style] }, this.props.mixedMediaUploadsEnabled ? this._renderMediaGroup() : this._renderImageGroup());
                }
                _renderImageGroup() {
                    switch (this.props.media.length) {
                        case 1:
                            return this._renderGroupOf1();
                        case 2:
                            return this._renderGroupOf2();
                        case 3:
                            return this._renderGroupOf3();
                        case 4:
                            return this._renderGroupOf4();
                        default:
                            return null;
                    }
                }
                _renderMediaGroup() {
                    const { media: e } = this.props;
                    return 1 === e.length
                        ? this._renderGroupOf1()
                        : i.createElement(
                              a.Z,
                              { ratio: o.default.theme.aspectRatios.landscape },
                              i.createElement(
                                  n.Z,
                                  { style: p.mediaPreviewWrapper },
                                  i.createElement(
                                      s.Z,
                                      { childrenStyle: [p.carouselChild], showNavButtonsOnHover: !1, style: p.carousel, updateObserverWithChildren: !0, visibleItemIndex: this.state.visibleItemIndex },
                                      e.map((e, t) => i.createElement(n.Z, { key: e.id, style: p.fullSize }, this._renderMediaAtIndex(t, p))),
                                  ),
                              ),
                          );
                }
                _renderGroupOf1() {
                    const { media: e } = this.props,
                        t = e && !!e[0].mediaFile,
                        { height: r, width: s } = (e && !t && e[0].externalMediaDetails) || {};
                    let d = o.default.theme.aspectRatios.landscape;
                    if (t) {
                        const t = o.default.theme.aspectRatios.minTimelineImage,
                            r = o.default.theme.aspectRatios.maxTimelineImage;
                        d = l.Z.getImageAspectRatio(t, r, { width: e[0].mediaFile?.width, height: e[0].mediaFile?.height });
                    }
                    return i.createElement(a.Z, { ratio: t ? d : s / r }, i.createElement(n.Z, { style: p.mediaPreviewWrapperSingle }, this._renderMediaAtIndex(0)));
                }
                _renderGroupOf2() {
                    return i.createElement(a.Z, { ratio: o.default.theme.aspectRatios.landscape }, i.createElement(n.Z, { style: p.mediaPreviewWrapper }, this._renderMediaAtIndex(0, p.gutterRight), this._renderMediaAtIndex(1)));
                }
                _renderGroupOf3() {
                    return i.createElement(a.Z, { ratio: o.default.theme.aspectRatios.landscape }, i.createElement(n.Z, { style: p.mediaPreviewWrapper }, this._renderMediaAtIndex(0, p.gutterRight), this._renderColumnWithIndices([1, 2])));
                }
                _renderGroupOf4() {
                    return i.createElement(a.Z, { ratio: o.default.theme.aspectRatios.landscape }, i.createElement(n.Z, { style: p.mediaPreviewWrapper }, this._renderColumnWithIndices([0, 2], p.gutterRight), this._renderColumnWithIndices([1, 3])));
                }
                _renderColumnWithIndices(e, t) {
                    return i.createElement(n.Z, { style: [p.column, t] }, this._renderMediaAtIndex(e[0], p.gutterBottom), this._renderMediaAtIndex(e[1]));
                }
                _renderMediaAtIndex(e, t) {
                    const { editable: r, isActive: n, isInline: a, media: o, mixedMediaUploadsEnabled: s, onClickMedia: l, onEditMedia: d, onEditSensitiveWarning: m, onRemoveMedia: f, onSetMediaPreviewRef: g } = this.props,
                        y = o[e],
                        b = y.mediaMetadata?.altText,
                        v = y.mediaMetadata?.defaultAltText,
                        E = !!y.mediaMetadata?.sensitiveMediaWarning?.size,
                        w = d?.(y.id),
                        _ = l?.(y.id),
                        S = m?.(y.id),
                        x = w && r && n,
                        I = x && E && !!S,
                        { containsOnlyImages: C, getDraggableIndex: P } = this.props,
                        M = y.originalMediaFile?.isImage,
                        Z = i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(h.Z, { "aria-label": b || v, enableGif: n, mediaItem: y, mixedMediaUploadsEnabled: s, onClick: _, onEdit: w, onEditSensitiveWarning: I ? S : void 0, onRemove: f(y.id), ref: g, role: "group", style: [p.mediaContainer, t], withAltTextLabel: !!b, withCloseButton: r && n, withDragAndDropIndicator: (P || a) && M && C, withEditButton: x, withEditSensitiveWarningButton: I }),
                            (() => {
                                const e = y.mediaMetadata?.gifMetadata;
                                return e?.url && e?.provider && s ? i.createElement(c.Z, { gifUrl: e.url, provider: e.provider }) : null;
                            })(),
                        );
                    if (P && M && C) {
                        const t = ["MediaPreview", y.id].join("-"),
                            r = 0 === e,
                            n = 3 === o.length,
                            a = r && n && !s ? "50%" : "100%";
                        return i.createElement(u._, { draggableId: t, flex: !0, index: P(y.id), widthOverride: a }, Z);
                    }
                    return Z;
                }
            }
            m.contextType = d.rC;
            const p = o.default.create((e) => ({ container: { width: "100%" }, carousel: { height: "100%", width: "100%" }, carouselChild: { height: "100%", width: "50%", paddingRight: e.spaces.space8 }, column: { flexDirection: "column", flexGrow: 1, flexBasis: 0 }, fullSize: { height: "100%", width: "100%" }, gutterRight: { marginEnd: e.spaces.space12 }, gutterBottom: { marginBottom: e.spaces.space12 }, mediaContainer: { borderRadius: e.borderRadii.xLarge, transitionProperty: "width", transitionDuration: "0.1s", transitionTimingFunction: "ease-out", overflow: "hidden", flexGrow: 1, flexBasis: 0 }, mediaPreviewWrapper: { flexDirection: "row", height: "100%", width: "100%" }, mediaPreviewWrapperSingle: { flexDirection: "column", height: "100%", width: "100%" } }));
        },
        727186: (e, t, r) => {
            "use strict";
            r.d(t, { ZP: () => d });
            var i = r(807896),
                n = r(202784),
                a = r(325686),
                o = r(392237),
                s = r(386742);
            const l = o.default.create(() => ({ hidden: { opacity: 0 } })),
                d = (e) => {
                    const { children: t, disableInteractiveElementBlocking: r, draggableId: o, fromVirtualList: d, index: c, isBeingDragged: u, isDragDisabled: h, lockYAxis: m } = e;
                    return d && u
                        ? n.createElement(a.Z, { style: l.hidden }, t)
                        : n.createElement(s.lL, { disableInteractiveElementBlocking: r, draggableId: o, index: c, isDragDisabled: h }, (e) => {
                              const r = e.draggableProps.style,
                                  a = m
                                      ? ((e) => {
                                            if (e.transform) {
                                                const t = `translate(0px${e.transform.slice(e.transform.indexOf(","), e.transform.length)}`;
                                                return { ...e, transform: t };
                                            }
                                            return e;
                                        })(r)
                                      : r;
                              return n.createElement("div", (0, i.Z)({ ref: e.innerRef }, e.draggableProps, e.dragHandleProps, { style: a }), t);
                          });
                };
        },
        536790: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => u });
            r(571372), r(136728);
            var i = r(202784),
                n = r(301503),
                a = r(597496),
                o = r(339110),
                s = r(456910),
                l = r(230295),
                d = r(267446);
            class c extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = i.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: r, isInline: n, isInlineReply: s, onTypeaheadStateChange: l, source: d } = this.props,
                                { canShowTypeahead: c, queryContext: u } = this.state,
                                h = c && u ? { word: u.word, resultType: u.resultType } : void 0;
                            return i.createElement(a.H1, { composeCommunityId: t, contextText: r, isInline: n, isInlineReply: s, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: l, query: h, ref: this._genericWrapperRef, source: d || o._4.Compose }, e(this._handleInputChange));
                        }),
                        (this._getCaret = (e) => e.getSelection().getStartOffset()),
                        (this._getPlaintextFromCurrentBlock = (e) => {
                            const t = e.getSelection().anchorKey;
                            return e.getCurrentContent().getBlockForKey(t).getText();
                        }),
                        (this._handleSelectItem = (e) => {
                            const { onTextUpdated: t } = this.props,
                                { queryContext: r } = this.state;
                            if (r) {
                                const i = (0, d.k)(e, r.resultType);
                                t(this._replaceToken(i, r));
                            }
                            this._setQueryContext(void 0);
                        }),
                        (this._handleInputChange = (e) => {
                            if (!(0, l.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: t } = this.state,
                                    r = t && t.word,
                                    i = this._getPlaintextFromCurrentBlock(e),
                                    { end: n, start: a, word: o } = s.si(this._getCaret(e), i),
                                    l = s.bR(o || "", "compose");
                                if (l?.q === r) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === a)) this._setQueryContext(void 0);
                                else if (l) {
                                    const { q: t, result_type: r } = l;
                                    this._setQueryContext({ word: t, resultType: r, editorState: e, startIndex: a, endIndex: n });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, t) {
                    const { editorState: r, endIndex: i, startIndex: a } = t,
                        o = r.getSelection().merge({ anchorKey: r.getSelection().getFocusKey(), anchorOffset: a, focusOffset: i }),
                        s = n.Modifier.replaceText(r.getCurrentContent(), o, e),
                        l = n.EditorState.push(r, s, "insert-characters"),
                        d = a + e.length,
                        c = l.getSelection().merge({ anchorOffset: d, focusOffset: d });
                    return n.EditorState.forceSelection(l, c);
                }
            }
            const u = c;
        },
        959587: (e, t, r) => {
            "use strict";
            r.d(t, { AM: () => l, ZP: () => h, pX: () => d });
            var i = r(202784),
                n = r(731708),
                a = r(659651),
                o = r(392237),
                s = r(548721);
            const l = "animated_gif",
                d = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: r } = e;
                    let o;
                    if (r === l) o = i.createElement(n.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === r) o = i.createElement(s.default, { "aria-label": "Vine", style: u.icon });
                    else if (r === d && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            r = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        o = i.createElement(n.ZP, { color: "white" }, `${e}:${r}`);
                    }
                    return o ? i.createElement(a.Z, { align: "left" }, o) : null;
                },
                u = o.default.create((e) => ({ icon: { color: e.colors.white } })),
                h = i.memo(c);
        },
        490834: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => D });
            var i = r(202784),
                n = r(576648),
                a = r(811176),
                o = r(731708),
                s = r(530732),
                l = r(992942),
                d = r(392237),
                c = r(111677),
                u = r.n(c),
                h = r(630715),
                m = r(950822),
                p = r(138099),
                f = r(154003);
            const g = u().cfd2f35e;
            class y extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleOnFocus = (e) => {
                            e.currentTarget.select();
                        });
                }
                render() {
                    const { cancelButtonLabel: e, description: t, headerText: r, link: n, onCancel: a } = this.props,
                        s = (0, m.Z)("input", { autoFocus: !0, onFocus: this._handleOnFocus, readOnly: !0, style: b.linkInput, value: n });
                    return i.createElement(p.Z, { onMaskClick: a, style: b.container, type: "center", withMask: !0 }, r && i.createElement(o.ZP, { align: "center", style: b.headerText, weight: "bold" }, r), t && i.createElement(o.ZP, { align: "center", color: "gray700", style: b.labelText }, t), s, i.createElement(f.ZP, { onPress: a, size: "xLarge", style: b.cancelButton, type: "brandText" }, e));
                }
            }
            y.defaultProps = { cancelButtonLabel: g };
            const b = d.default.create((e) => ({ container: { alignItems: "center", paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space12, position: "relative" }, headerText: { marginBottom: e.spaces.space16 }, labelText: { marginBottom: e.spaces.space16, width: "100%" }, linkInput: { backgroundColor: e.colors.gray0, borderColor: "transparent", color: e.colors.gray700, fontSize: e.fontSizes.body, marginBottom: e.spaces.space12, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space20 }, cancelButton: { width: "100%" } })),
                v = y,
                E = u().e05c00b4,
                w = u().eabf2209,
                _ = u().a613e720,
                S = u().f88553c8,
                x = { riffsy: "https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png", giphy: "https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png" };
            class I extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderMenu = (e) => i.createElement(a.Z, { items: [{ text: _, Icon: h.default, onClick: this._handleCopyGifLinkButtonClick }], onCloseRequested: e })),
                        (this._handleCopyGifLinkButtonClick = (e) => {
                            const { addToast: t, gifUrl: r } = this.props;
                            n.Z.isAvailable() ? (n.Z.setString(r), t({ text: S })) : this.setState({ showCopyLinkSheet: !0 }), e && e();
                        }),
                        (this._handleCopyLinkSheetCancel = () => {
                            this.setState({ showCopyLinkSheet: !1 });
                        }),
                        (this.state = { showCopyLinkSheet: !1 });
                }
                render() {
                    const { showCopyLinkSheet: e } = this.state,
                        { gifUrl: t, provider: r } = this.props,
                        { display_name: n, name: a } = r,
                        s = x[a];
                    return s ? i.createElement(i.Fragment, null, e ? i.createElement(v, { description: w({ providerName: n }), headerText: E, link: t, onCancel: this._handleCopyLinkSheetCancel }) : null, i.createElement(o.ZP, { align: "center", color: "gray700", style: [C.root, C.verticalAlign] }, i.createElement(u().I18NFormatMessage, { $i18n: "e2e6ea0d" }, this._renderAttribution(n, s)))) : null;
                }
                _renderAttribution(e, t) {
                    return i.createElement(s.Z, { interactiveStyles: null, renderMenu: this._renderMenu }, i.createElement(o.ZP, { style: C.verticalAlign, weight: "bold", withInteractiveStyling: !0 }, i.createElement(l.Z, { source: { uri: t }, style: C.image }), i.createElement(o.ZP, null, e.toUpperCase())));
                }
            }
            const C = d.default.create((e) => ({ button: { marginStart: e.spaces.space12 }, image: { display: "inline-block", height: e.spaces.space16, marginHorizontal: e.spaces.space4, width: e.spaces.space16 }, root: { marginHorizontal: e.spaces.space8 }, verticalAlign: { display: "flex", alignItems: "center", flexDirection: "row" }, alignLeft: { textAlign: "start" } })),
                P = I;
            var M = r(668214),
                Z = r(601576);
            const D = (0, M.Z)().propsFromActions(() => ({ addToast: Z.fz }))(({ addToast: e, gifUrl: t, provider: r }) => i.createElement(P, { addToast: e, gifUrl: t, provider: r }));
        },
        26232: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => b });
            var i = r(202784),
                n = r(555874),
                a = r(111677),
                o = r.n(a),
                s = r(290402),
                l = r(965245),
                d = r(71620),
                c = r(668214);
            const u = (e, t) => t.module.selectFetchStatus(e),
                h = (e, t) => t.module.selectItems(e),
                m = (0, c.Z)()
                    .propsFromState((e) => ({ fetchStatus: u, items: h }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, d.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                p = o().i9028824,
                f = (e) => e,
                g = (e) => (t) => e(t.item);
            class y extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { footer: e, items: t, noItemsRenderer: r, numColumns: a, onScrollEnd: o, renderer: s, withoutHeadroom: d } = this.props;
                            return !t || a < 1 ? null : 1 === a ? i.createElement(l.Z, { cacheKey: "sliceTimeline", footer: e, identityFunction: f, items: t, noItemsRenderer: r, onNearEnd: this._handleNearEnd, onScrollEnd: o, renderer: s, withoutHeadroom: d }) : i.createElement(n.Z, { ListEmptyComponent: r, data: t, keyExtractor: f, numColumns: a, renderItem: g(s) });
                        }),
                        (this._handleNearEnd = () => {
                            const { createLocalApiErrorHandler: e, fetchBottom: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleFetch = () => {
                            const { alwaysFetch: e, createLocalApiErrorHandler: t, fetch: r, fetchIfNeeded: i } = this.props;
                            (e ? r : i)().catch(t());
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                componentDidUpdate(e) {
                    const { module: t } = this.props;
                    e.module !== t && this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, module: t, retryMessage: r } = this.props;
                    return t ? i.createElement(s.Z, { "aria-label": p, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: r, retryable: !0 }) : null;
                }
            }
            y.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const b = m(y);
        },
        513313: (e, t, r) => {
            "use strict";
            r.d(t, { P: () => i });
            const i = Object.freeze({ Crop: "crop", AltText: "alt_text", SensitiveMedia: "sensitive_media", Subtitles: "subtitles", Trimmer: "trimmer" });
        },
        386742: (e, t, r) => {
            "use strict";
            r.d(t, { $p: () => c, Xi: () => o, _l: () => d, _y: () => s, bK: () => u, lL: () => l });
            var i = r(202784),
                n = r(523561),
                a = r(195560);
            const o = (0, n.Z)({ loader: () => Promise.all([r.e("ondemand.ReactBeautifulDnd-e96e9bea"), r.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(r.bind(r, 391426)), renderPlaceholder: (e, t) => i.createElement(a.Z, { hasError: e, onRetry: t }) }),
                s = o,
                l = (0, n.Z)({ noErrorBoundary: !0, loader: () => Promise.all([r.e("ondemand.ReactBeautifulDnd-e96e9bea"), r.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(r.bind(r, 797546)), renderPlaceholder: (e, t) => i.createElement(a.Z, { hasError: e, onRetry: t }) }),
                d = l,
                c = (0, n.Z)({ loader: () => Promise.all([r.e("ondemand.ReactBeautifulDnd-e96e9bea"), r.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(r.bind(r, 896830)), renderPlaceholder: (e, t) => i.createElement(a.Z, { hasError: e, onRetry: t }) }),
                u = c;
        },
        566220: (e, t, r) => {
            "use strict";
            r.d(t, { R: () => o });
            var i = r(202784);
            const n = () => new Date(),
                a = i.createContext(n),
                o = () => i.useContext(a);
        },
        481681: (e, t, r) => {
            "use strict";
            r.d(t, { Bp: () => n, NF: () => i, nO: () => a });
            const i = "send-tweet",
                n = "dismiss-composer",
                a = 4;
        },
        47743: (e, t, r) => {
            "use strict";
            r.d(t, { nO: () => i.nO, YT: () => y, yN: () => v, X2: () => E, FI: () => w });
            var i = r(481681),
                n = r(205074);
            function a(e) {
                return (t) => t.some((t) => !!t && e(t));
            }
            const o = (e) => !!e.mediaFile?.isGif,
                s = (e) => !!e.externalMediaDetails,
                l = (e) => !!e.mediaFile?.isImage,
                d = (e) => !(!e.mediaFile?.isVideo || e.mediaFile instanceof n.ZP),
                c = a((e) => o(e) || l(e) || d(e) || s(e));
            a(o), a(l), a(d), a(s);
            i.nO;
            var u = r(175848),
                h = r(276563),
                m = r(166852),
                p = r(450681),
                f = r(575211),
                g = r(456910);
            const y = ({ excludeReplyUser: e, inReplyToStatus: t, viewerUserId: r }) => {
                    const { retweeted_status: i } = t,
                        { entities: n, unmentioned_user_ids: a, user: o } = i || t,
                        s = i ? i.user : {},
                        l = i ? t.user : {},
                        d = n?.user_mentions || [],
                        c = u.ZP.mergeTaggedUsers(n?.media || []),
                        h = b(i || t) || {},
                        f = { [s.id_str]: s, [l.id_str]: l, [o.id_str]: o, [h.id_str]: h };
                    d.forEach((e) => {
                        f[e.id_str] = e;
                    }),
                        c.forEach(({ name: e, screen_name: t, user_id: r }) => {
                            f[r] = { id_str: r, name: e, screen_name: t };
                        });
                    const g = (e) => {
                            const t = a?.includes(e.id_str),
                                r = e.id_str === o.id_str;
                            return !t || r ? [e.id_str] : [];
                        },
                        y = (0, m.Z)((0, p.Z)([...g(s), ...g(l), o.id_str, ...d.flatMap((e) => g(e)), ...c.map((e) => e.user_id)])).filter((e) => e !== r);
                    let v = r && o.id_str === r ? [r, ...y] : y;
                    return e && (v = v.filter((e) => e !== o.id_str)), v.map((e) => f[e]);
                },
                b = ({ card: e }) => {
                    let t = null;
                    if (e) {
                        const r = h.default.getBindingValue(e.binding_values, "site");
                        r && e.users && (t = e.users[r.id_str]);
                    }
                    return t;
                },
                v =
                    ({ maxNumberOfMedia: e, mixedMediaUploadEnabled: t = !1 }) =>
                    (r) => {
                        if (0 === r.length) return !0;
                        if (t) {
                            return r.length <= e;
                        }
                        const i = r.some((e) => !!e.externalMediaDetails),
                            a = !i && r.some((e) => e.mediaFile && e.mediaFile.isGif),
                            o = r.some((e) => e.mediaFile && !(e.mediaFile instanceof n.ZP) && e.mediaFile.isVideo);
                        if (a || i || o) return 1 === r.length;
                        {
                            const t = r.length <= e,
                                i = r.every((e) => e.mediaFile && e.mediaFile.isImage);
                            return t && i;
                        }
                    },
                E = (e, t = !1, r = i.nO) => v({ mixedMediaUploadEnabled: t, maxNumberOfMedia: r })(e),
                w = (e, t = !1) => {
                    const r = e.split(f.V.WordBoundary);
                    return (
                        t && r.pop(),
                        !!r.find((e) => {
                            const t = (0, g.bR)(e, "compose");
                            return t && "users" === t.result_type;
                        })
                    );
                };
        },
        511985: (e, t, r) => {
            "use strict";
            r.d(t, { AD: () => i, Qy: () => a, _f: () => o, zH: () => n });
            const i = Object.freeze({ Composition: "composition", DMComposition: "dm_composition", NoteComposition: "note_composition" }),
                n = 500,
                a = (e) => Object.values(i).indexOf(e) >= 0,
                o = (e, t) => ("boolean" == typeof e ? e : t);
        },
        424869: (e) => {
            e.exports = function e(t) {
                return (
                    Object.freeze(t),
                    Object.getOwnPropertyNames(t).forEach(function (r) {
                        !t.hasOwnProperty(r) || null === t[r] || ("object" != typeof t[r] && "function" != typeof t[r]) || Object.isFrozen(t[r]) || e(t[r]);
                    }),
                    t
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose-e96e9bea.a487f5ca.js.map
