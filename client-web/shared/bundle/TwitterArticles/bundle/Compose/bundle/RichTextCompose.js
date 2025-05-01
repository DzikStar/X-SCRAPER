(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose"],
    {
        136092: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => he });
            var n = {};
            r.r(n), r.d(n, { anchorOffsetContextText: () => P, composerEditorContent: () => B, editorStateJson: () => I.G, editorState_2_json: () => I.c, parseTwitterText: () => R });
            var i = {};
            r.r(i), r.d(i, { ConvertEmojiEffect: () => M, DeveloperDebug: () => A, InlineStyleButton: () => N, OverflowHighlightEffect: () => Q, PreserveUnstyledEntitiesEffect: () => ae, Separator: () => ue, TextChangeEffect: () => de, TrackFocusView: () => te });
            var o = {};
            r.r(o), r.d(o, { useRichEnabled: () => oe, useTransform: () => O });
            var s = r(202784),
                a = r(925873),
                l = r(370751),
                c = r(424869),
                d = r.n(c),
                u = r(715729),
                p = r(118717),
                m = r(769471),
                h = r(503229),
                f = r(516951);
            const g = Object.freeze({ reset: { _type: "reset", type: "reset" }, set: { _type: "set", type: "set" } });
            var y = r(341110);
            (0, u.GP)();
            r(571372);
            class b extends Error {
                constructor(e, t, ...r) {
                    super(...r), Error.captureStackTrace && Error.captureStackTrace(this, b), (this.name = "KonbiniNext"), (this.message = e), (this.extra = t);
                }
            }
            function E(e, t) {
                return Object.assign(e, t);
            }
            function S(e) {
                return function (t) {
                    e.setState((e) => {
                        e.editorState = t;
                        for (const t of e.transform.order) {
                            (0, e.transform.lookup[t])(e);
                        }
                    });
                };
            }
            function x(e) {
                return function (t) {
                    e.setState((e) => {
                        e.editorState = a.Z.initEditorState(t);
                        for (const t of e.transform.order) {
                            (0, e.transform.lookup[t])(e);
                        }
                    });
                };
            }
            var _ = r(301503),
                v = r(835305);
            function w(e) {
                return function (t) {
                    const r = e.getState(),
                        n = v.wK(t),
                        i = _.RichUtils.toggleInlineStyle(r.editorState, n);
                    e.mut.editorState(i);
                };
            }
            function C(e) {
                return function (t) {
                    window.requestAnimationFrame(() => {
                        window.requestAnimationFrame(() => {
                            const r = e.getState(),
                                n = t(r);
                            e.mut.editorState(n);
                        });
                    });
                };
            }
            var I = r(873793),
                Z = r(24949),
                T = r(791134);
            const R = (0, Z.P1)([(e) => e.editorState.getCurrentContent().getPlainText(), (e) => e.isThread, (e, t) => t.featureSwitches, (e, t) => t.userClaims], (e, t, r, n) => {
                    const i = { isThread: t, featureSwitches: r, userClaims: n };
                    return T.k2(e, i);
                }),
                P = (0, Z.P1)([(e) => e.editorState], (e) => {
                    const t = e.getCurrentContent(),
                        r = e.getSelection(),
                        n = r.getAnchorKey(),
                        i = t.getBlockForKey(n);
                    let o = 0;
                    for (const e of t.getBlocksAsArray()) {
                        if (i === e) break;
                        o += e.getText().length + 1;
                    }
                    const s = o + r.getAnchorOffset(),
                        a = t.getPlainText(),
                        l = a.length - s;
                    let c, d;
                    l < F ? ((c = l), (d = k - l)) : s < F ? ((c = k - s), (d = s)) : ((c = F), (d = F));
                    const u = s - d,
                        p = s + c;
                    return a.substring(u, p);
                }),
                k = 280,
                F = k / 2,
                B = (0, Z.P1)(
                    [
                        (e) => {
                            const t = e.editorState.getCurrentContent(),
                                r = { text: t.getPlainText(), editorStateRaw: (0, _.convertToRaw)(t) };
                            return JSON.stringify(r);
                        },
                    ],
                    (e) => JSON.parse(e),
                ),
                D = (function (e, t) {
                    const r = t || {};
                    r.name = r.name || "KonbiniNext";
                    const n = (function (e) {
                            const t = new b(e);
                            return new Proxy(
                                {},
                                {
                                    get() {
                                        throw t;
                                    },
                                    set() {
                                        throw t;
                                    },
                                },
                            );
                        })(`${r.name} must wrap a React tree, e.g. \`<${r.name}.Provider>\``),
                        i = s.createContext(n);
                    return {
                        Provider: function (t) {
                            const n = s.useRef(!1),
                                o = s.useRef();
                            if (
                                (s.useEffect(() => {
                                    if (!n.current) return;
                                    const e = o.current?.setState;
                                    "function" == typeof e &&
                                        e((e) => {
                                            E(e, t.state);
                                        });
                                }, [t.state]),
                                s.useEffect(() => {
                                    n.current = !0;
                                }, []),
                                !n.current)
                            ) {
                                t.name && (r.name = t.name);
                                const n = (function (e, t) {
                                    const r = (0, m.Z)({ freeze: !0 }, t),
                                        n = r.freeze ? d() : h.Z,
                                        i = {},
                                        o = {};
                                    if (r?.selectors) for (const e of Object.keys(r.selectors)) i[e] = r.selectors[e].bind({});
                                    let s;
                                    const a = (0, p.MT)(
                                            (t, r) => {
                                                const i = (function () {
                                                    if (!t) return e;
                                                    switch (r._type) {
                                                        case g.reset._type:
                                                            return e;
                                                        case g.set._type:
                                                            return r.nextState;
                                                        default:
                                                            return t;
                                                    }
                                                })();
                                                return n(i);
                                            },
                                            e,
                                            s,
                                        ),
                                        l = (function (e) {
                                            return function (t, r) {
                                                return (0, y.useSyncExternalStoreWithSelector)(e.subscribe, e.getState, e.getState, t, r);
                                            };
                                        })(a);
                                    function c(e) {
                                        return function (t) {
                                            const r = a.getState(),
                                                n = (0, u.ZP)(r, t);
                                            a.dispatch({ ...g.set, type: e, nextState: n });
                                        };
                                    }
                                    const b = a.getState,
                                        E = r?.mutations;
                                    if (E) {
                                        const e = Object.keys(E({}));
                                        for (const t of e)
                                            o[t] = function (...e) {
                                                const r = c(t);
                                                return (0, E({ getState: b, setState: r, mut: o })[t])(...e);
                                            };
                                    }
                                    return {
                                        store: a,
                                        useState: l,
                                        getState: b,
                                        setState: c("set"),
                                        mut: o,
                                        select: i,
                                        undo: f.Z,
                                        redo: f.Z,
                                        reset: function () {
                                            a.dispatch(g.reset);
                                        },
                                    };
                                })(E(e(), t.init), r);
                                (o.current = n), t.onSetup && t.onSetup(n);
                            }
                            if ((s.useDebugValue(r.name), !o.current)) throw new b(`${String(r.name)} could not setup initial context`);
                            return s.createElement(i.Provider, { value: o.current }, t.children);
                        },
                        useActions: function () {
                            s.useDebugValue(r.name);
                            const e = s.useContext(i),
                                { getState: t, mut: n, redo: o, reset: a, select: l, setState: c, undo: d } = e;
                            return s.useMemo(() => ({ getState: t, mut: n, redo: o, reset: a, select: l, setState: c, undo: d }), [t, n, o, a, l, c, d]);
                        },
                        useState: function (e, t) {
                            return s.useDebugValue([r.name, String(e), { selector: e, equalityFn: t }]), s.useContext(i).useState(e, t);
                        },
                        useSelect: function (e) {
                            s.useDebugValue([r.name, String(e), { select_selector: e }]);
                            const t = s.useContext(i),
                                n = e(t.select);
                            return t.useState(n);
                        },
                    };
                })(() => ({ editorState: a.Z.initEditorState(""), hasOverflowStyle: !1, isThread: !1, isFocused: !1, isEditorFocused: !1, isRichTextInput: !0, transform: { lookup: {}, order: [] } }), { name: "ComposerStore", freeze: !1, selectors: n, mutations: (e) => ({ editorState: S(e), editorStateRaw: x(e), toggleInlineStyle: w(e), defer_editorState: C(e) }) });
            function O(e, t) {
                const r = D.useActions(),
                    n = s.useRef(t);
                (n.current = t),
                    s.useEffect(() => {
                        function t(...e) {
                            return n.current(...e);
                        }
                        return (
                            r.setState((r) => {
                                r.transform.lookup[e] = t;
                                const n = (0, l.Z)(r.transform.order);
                                n.add(e), (r.transform.order = Array.from(n));
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
            function M() {
                return (
                    O("ConvertEmojiEffect", (e) => {
                        e.editorState = a.Z.convertEmojiToEntities(e.editorState);
                    }),
                    null
                );
            }
            let A;
            A = () => null;
            var z = r(976145),
                L = r(154003),
                H = r(392237),
                G = r(674132),
                j = r.n(G),
                U = r(394123),
                W = r(856661);
            function N({ isWebRedesign: e, style: t }) {
                const r = he.useActions(),
                    n = he.useRichEnabled(),
                    i = he.useState((e) => {
                        const r = e.editorState.getCurrentInlineStyle(),
                            n = v.wK(t);
                        return r.contains(n);
                    });
                if (!n.write) return null;
                const o = $(t),
                    a = (function (e) {
                        function t(e) {
                            return `(${[V, e].join("+")})`;
                        }
                        switch (e) {
                            case v.xs.Bold:
                                return t("B");
                            case v.xs.Italic:
                                return t("I");
                            default:
                                throw new Error(`unrecognized style [${e}]`);
                        }
                    })(t),
                    l = [o, a].join(" "),
                    c = [o, i && $("active"), a].filter(Boolean),
                    d = (0, z.Z)(c, !0),
                    u = (function (e) {
                        switch (e) {
                            case v.xs.Bold:
                                return U.default;
                            case v.xs.Italic:
                                return W.default;
                            default:
                                throw new Error(`unrecognized style [${e}]`);
                        }
                    })(t),
                    p = e ? [i ? K.newIconActive : K.newIconInactive] : [i ? K.iconActive : K.iconInactive];
                return s.createElement(L.ZP, {
                    "aria-label": d,
                    hoverLabel: { label: l },
                    icon: s.createElement(u, { style: p }),
                    onClick: function () {
                        r.mut.toggleInlineStyle(t);
                    },
                    preventFocusShift: !0,
                    size: "medium",
                    type: e ? "primaryText" : "brandText",
                });
            }
            function $(e, t) {
                return (0, q[e])({ ...t, ttc_rich_text_composer: "" });
            }
            const V = r(323265).ZP.isMac() ? "⌘" : "CTRL",
                q = { [v.xs.Bold]: j().aeca1239, [v.xs.Italic]: j().i7dc66dd, active: j().ad89b831 },
                K = H.default.create((e) => {
                    const t = { borderRadius: e.borderRadiiPx.small };
                    return { iconActive: { ...t, backgroundColor: e.colors.primary, color: e.colors.navigationBackground }, newIconActive: { ...t, backgroundColor: e.colors.gray700, color: e.colors.navigationBackground }, iconInactive: { ...t, color: e.colors.primary }, newIconInactive: { ...t, color: e.colors.gray700 } };
                });
            var J = r(443781);
            function X() {
                return { ...(0, J.QZ)(), isThread: D.useState((e) => e.isThread) };
            }
            function Q() {
                const e = D.useActions(),
                    t = X(),
                    r = s.useRef({ context: t, actions: e });
                return (
                    (r.current.context = t),
                    (r.current.actions = e),
                    O("OverflowHighlightEffect", (e) => {
                        !(function (e, t) {
                            const { parseTwitterText: r } = t.actions.select,
                                n = r(e, t.context),
                                { validRangeEnd: i, weightedLength: o } = n,
                                s = i + 1,
                                l = e.hasOverflowStyle,
                                c = s < o;
                            e.hasOverflowStyle = c;
                            if (c || l) {
                                const t = c ? i + 1 : -1;
                                e.editorState = a.Z.updateOverflowStyle(e.editorState, t, l);
                            }
                        })(e, r.current);
                    }),
                    s.useEffect(() => {
                        const { editorState: t } = e.getState();
                        t && e.mut.editorState(t);
                    }, [e, t.isThread]),
                    null
                );
            }
            var Y = r(807896),
                ee = r(325686);
            function te(e) {
                const t = D.useActions(),
                    r = s.useRef();
                return s.createElement(
                    ee.Z,
                    (0, Y.Z)({}, e, {
                        onBlur: function (n) {
                            clearTimeout(r.current),
                                (r.current = setTimeout(() => {
                                    t.setState((e) => {
                                        e.isEditorFocused = !1;
                                    }),
                                        "function" == typeof e.onBlur && e.onBlur(n);
                                }, re));
                        },
                        onFocus: function (n) {
                            clearTimeout(r.current),
                                t.setState((e) => {
                                    (e.isFocused = !0), (e.isEditorFocused = !0);
                                }),
                                "function" == typeof e.onFocus && e.onFocus(n);
                        },
                    }),
                    e.children,
                );
            }
            const re = 200;
            r(136728);
            var ne = r(584713),
                ie = r(507824);
            function oe() {
                const e = X(),
                    t = D.useState((e) => e.isRichTextInput),
                    r = { isRichTextInput: t };
                return ie.v$.enabled({ context: e, state: r });
            }
            const se = [v.DraftJS.Bold, v.DraftJS.Italic];
            function ae() {
                return O("PreserveUnstyledEntitiesEffect", oe().write ? le : f.Z), null;
            }
            function le(e) {
                let t = e.editorState;
                const r = { selection: t.getSelection(), inline_style: t.getCurrentInlineStyle(), last_change_type: t.getLastChangeType() },
                    n = r.selection.getStartOffset() - r.selection.getEndOffset() != 0,
                    i = "change-inline-style" === r.last_change_type;
                if (n || i) {
                    t = _.EditorState.set(t, { allowUndo: !1 });
                    let n = t.getCurrentContent();
                    for (const e of t.getCurrentContent().getBlocksAsArray()) {
                        const t = e.getText(),
                            r = (0, ne.Z)(t),
                            i = e.key;
                        for (const e of r) {
                            const t = ce(i, e.indices);
                            for (const e of se) n = _.Modifier.removeInlineStyle(n, t, e);
                        }
                    }
                    (t = _.EditorState.push(t, n, "change-inline-style")), r.selection.getHasFocus() && (t = _.EditorState.forceSelection(t, r.selection)), (t = _.EditorState.setInlineStyleOverride(t, r.inline_style)), (t = _.EditorState.set(t, { allowUndo: !0 })), (e.editorState = t);
                }
            }
            function ce(e, t) {
                const [r, n] = t,
                    [i, o] = [r, n];
                let s = _.SelectionState.createEmpty(e);
                return (s = s.merge({ anchorOffset: i, focusOffset: o })), s;
            }
            function de(e) {
                const t = s.useRef({}),
                    r = s.useRef(e);
                r.current = e;
                const n = he.useSelect((e) => e.composerEditorContent),
                    i = he.useState((e) => e.isRichTextInput);
                return (
                    s.useEffect(() => {
                        i && (t.current.first_pass ? r.current.onTextChange(n) : (t.current.first_pass = !0));
                    }, [n, i]),
                    null
                );
            }
            function ue() {
                return he.useRichEnabled().write ? s.createElement("div", { style: pe.container }) : null;
            }
            const pe = H.default.create((e) => ({ container: { backgroundColor: e.colors.gray400, borderRadius: e.borderRadii.infinite, height: e.spaces.space16, margin: "auto", width: "2px" } }));
            var me = r(972689);
            const he = { ...D, ...o, ...i, T: me };
        },
        972689: () => {},
        113545: (e, t, r) => {
            "use strict";
            r.d(t, { _: () => l, q: () => c });
            var n = r(807896),
                i = r(202784),
                o = r(370751),
                s = r(386742),
                a = r(136092);
            function l(e) {
                const { children: t, flex: r, ...o } = e;
                return a.Z.useRichEnabled().features.inline_media
                    ? i.createElement(s._l, o, (t, r) => {
                          const o = { ...t.draggableProps.style };
                          if (o.transform) {
                              const e = `translate(0px${o.transform.slice(o.transform.indexOf(","), o.transform.length)}`;
                              o.transform = e;
                          }
                          return e.flex && ((o.display = "flex"), r.isDragging || ((o.width = e.widthOverride || "100%"), (o.height = "100%"))), r.isDragging ? (o.opacity = 0.4) : (delete o.scale, delete o.opacity), i.createElement("div", (0, n.Z)({ ref: t.innerRef }, t.draggableProps, t.dragHandleProps, { style: o }), e.children);
                      })
                    : e.children;
            }
            function c(e) {
                const t = i.Children.toArray(e.children),
                    r = (function (e) {
                        const t = {};
                        if (!e.length) return t;
                        const [r] = e,
                            n = u(r).contentState.getBlocksAsArray();
                        for (let e = 0; e < n.length; e++) {
                            t[n[e].key] = e;
                        }
                        return t;
                    })(t);
                return t.map((e, t) => {
                    const n = u(e),
                        o = n.block.key,
                        s = r[o],
                        a = !d.has(n.block.type);
                    return i.createElement(l, { draggableId: o, index: s, isDragDisabled: a, key: o }, e);
                });
            }
            const d = (0, o.Z)(["atomic"]),
                u = (e) => e.props.children.props;
        },
        942910: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => m });
            var n = r(202784),
                i = r(325686),
                o = r(682474),
                s = r(392237),
                a = r(174326),
                l = r(782578),
                c = r(443781),
                d = r(490834),
                u = r(113545),
                p = r(304059);
            class m extends n.Component {
                constructor(e, t) {
                    super(e, t), (this.state = { visibleItemIndex: 0, media: e.media });
                }
                static getDerivedStateFromProps(e, t) {
                    const r = e.media,
                        n = t.media;
                    return r.length <= 2
                        ? null
                        : r.length > n.length
                          ? { visibleItemIndex: r.length - 1 }
                          : (r.length < n.length &&
                                n.forEach((e, t) => {
                                    if (!r.includes(e)) return { visibleItemIndex: Math.max(t - 1, 0) };
                                }),
                            null);
                }
                render() {
                    return n.createElement(i.Z, { style: [h.container, this.props.style] }, this.props.mixedMediaUploadsEnabled ? this._renderMediaGroup() : this._renderImageGroup());
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
                        : n.createElement(
                              o.Z,
                              { ratio: s.default.theme.aspectRatios.landscape },
                              n.createElement(
                                  i.Z,
                                  { style: h.mediaPreviewWrapper },
                                  n.createElement(
                                      a.Z,
                                      { childrenStyle: [h.carouselChild], showNavButtonsOnHover: !1, style: h.carousel, updateObserverWithChildren: !0, visibleItemIndex: this.state.visibleItemIndex },
                                      e.map((e, t) => n.createElement(i.Z, { key: e.id, style: h.fullSize }, this._renderMediaAtIndex(t, h))),
                                  ),
                              ),
                          );
                }
                _renderGroupOf1() {
                    const { media: e } = this.props,
                        t = e && !!e[0].mediaFile,
                        { height: r, width: a } = (e && !t && e[0].externalMediaDetails) || {};
                    let c = s.default.theme.aspectRatios.landscape;
                    if (t) {
                        const t = s.default.theme.aspectRatios.minTimelineImage,
                            r = s.default.theme.aspectRatios.maxTimelineImage;
                        c = l.Z.getImageAspectRatio(t, r, { width: e[0].mediaFile?.width, height: e[0].mediaFile?.height });
                    }
                    return n.createElement(o.Z, { ratio: t ? c : a / r }, n.createElement(i.Z, { style: h.mediaPreviewWrapperSingle }, this._renderMediaAtIndex(0)));
                }
                _renderGroupOf2() {
                    return n.createElement(o.Z, { ratio: s.default.theme.aspectRatios.landscape }, n.createElement(i.Z, { style: h.mediaPreviewWrapper }, this._renderMediaAtIndex(0, h.gutterRight), this._renderMediaAtIndex(1)));
                }
                _renderGroupOf3() {
                    return n.createElement(o.Z, { ratio: s.default.theme.aspectRatios.landscape }, n.createElement(i.Z, { style: h.mediaPreviewWrapper }, this._renderMediaAtIndex(0, h.gutterRight), this._renderColumnWithIndices([1, 2])));
                }
                _renderGroupOf4() {
                    return n.createElement(o.Z, { ratio: s.default.theme.aspectRatios.landscape }, n.createElement(i.Z, { style: h.mediaPreviewWrapper }, this._renderColumnWithIndices([0, 2], h.gutterRight), this._renderColumnWithIndices([1, 3])));
                }
                _renderColumnWithIndices(e, t) {
                    return n.createElement(i.Z, { style: [h.column, t] }, this._renderMediaAtIndex(e[0], h.gutterBottom), this._renderMediaAtIndex(e[1]));
                }
                _renderMediaAtIndex(e, t) {
                    const { editable: r, isActive: i, isInline: o, media: s, mixedMediaUploadsEnabled: a, onClickMedia: l, onEditMedia: c, onEditSensitiveWarning: m, onRemoveMedia: f, onSetMediaPreviewRef: g } = this.props,
                        y = s[e],
                        b = y.mediaMetadata?.altText,
                        E = y.mediaMetadata?.defaultAltText,
                        S = !!y.mediaMetadata?.sensitiveMediaWarning?.size,
                        x = c?.(y.id),
                        _ = l?.(y.id),
                        v = m?.(y.id),
                        w = x && r && i,
                        C = w && S && !!v,
                        { containsOnlyImages: I, getDraggableIndex: Z } = this.props,
                        T = y.originalMediaFile?.isImage,
                        R = n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(p.Z, { "aria-label": b || E, enableGif: i, mediaItem: y, mixedMediaUploadsEnabled: a, onClick: _, onEdit: x, onEditSensitiveWarning: C ? v : void 0, onRemove: f(y.id), ref: g, role: "group", style: [h.mediaContainer, t], withAltTextLabel: !!b, withCloseButton: r && i, withDragAndDropIndicator: (Z || o) && T && I, withEditButton: w, withEditSensitiveWarningButton: C }),
                            (() => {
                                const e = y.mediaMetadata?.gifMetadata;
                                return e?.url && e?.provider && a ? n.createElement(d.Z, { gifUrl: e.url, provider: e.provider }) : null;
                            })(),
                        );
                    if (Z && T && I) {
                        const t = ["MediaPreview", y.id].join("-"),
                            r = 0 === e,
                            i = 3 === s.length,
                            o = r && i && !a ? "50%" : "100%";
                        return n.createElement(u._, { draggableId: t, flex: !0, index: Z(y.id), widthOverride: o }, R);
                    }
                    return R;
                }
            }
            m.contextType = c.rC;
            const h = s.default.create((e) => ({ container: { width: "100%" }, carousel: { height: "100%", width: "100%" }, carouselChild: { height: "100%", width: "50%", paddingRight: e.spaces.space8 }, column: { flexDirection: "column", flexGrow: 1, flexBasis: 0 }, fullSize: { height: "100%", width: "100%" }, gutterRight: { marginEnd: e.spaces.space12 }, gutterBottom: { marginBottom: e.spaces.space12 }, mediaContainer: { borderRadius: e.borderRadii.xLarge, transitionProperty: "width", transitionDuration: "0.1s", transitionTimingFunction: "ease-out", overflow: "hidden", flexGrow: 1, flexBasis: 0 }, mediaPreviewWrapper: { flexDirection: "row", height: "100%", width: "100%" }, mediaPreviewWrapperSingle: { flexDirection: "column", height: "100%", width: "100%" } }));
        },
        727186: (e, t, r) => {
            "use strict";
            r.d(t, { ZP: () => c });
            var n = r(807896),
                i = r(202784),
                o = r(325686),
                s = r(392237),
                a = r(386742);
            const l = s.default.create(() => ({ hidden: { opacity: 0 } })),
                c = (e) => {
                    const { children: t, disableInteractiveElementBlocking: r, draggableId: s, fromVirtualList: c, index: d, isBeingDragged: u, isDragDisabled: p, lockYAxis: m } = e;
                    return c && u
                        ? i.createElement(o.Z, { style: l.hidden }, t)
                        : i.createElement(a.lL, { disableInteractiveElementBlocking: r, draggableId: s, index: d, isDragDisabled: p }, (e) => {
                              const r = e.draggableProps.style,
                                  o = m
                                      ? ((e) => {
                                            if (e.transform) {
                                                const t = `translate(0px${e.transform.slice(e.transform.indexOf(","), e.transform.length)}`;
                                                return { ...e, transform: t };
                                            }
                                            return e;
                                        })(r)
                                      : r;
                              return i.createElement("div", (0, n.Z)({ ref: e.innerRef }, e.draggableProps, e.dragHandleProps, { style: o }), t);
                          });
                };
        },
        490834: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => P });
            var n = r(202784),
                i = r(576648),
                o = r(811176),
                s = r(731708),
                a = r(530732),
                l = r(992942),
                c = r(392237),
                d = r(674132),
                u = r.n(d),
                p = r(630715),
                m = r(950822),
                h = r(138099),
                f = r(154003);
            const g = u().cfd2f35e;
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleOnFocus = (e) => {
                            e.currentTarget.select();
                        });
                }
                render() {
                    const { cancelButtonLabel: e, description: t, headerText: r, link: i, onCancel: o } = this.props,
                        a = (0, m.Z)("input", { autoFocus: !0, onFocus: this._handleOnFocus, readOnly: !0, style: b.linkInput, value: i });
                    return n.createElement(h.Z, { onMaskClick: o, style: b.container, type: "center", withMask: !0 }, r && n.createElement(s.ZP, { align: "center", style: b.headerText, weight: "bold" }, r), t && n.createElement(s.ZP, { align: "center", color: "gray700", style: b.labelText }, t), a, n.createElement(f.ZP, { onPress: o, size: "xLarge", style: b.cancelButton, type: "brandText" }, e));
                }
            }
            y.defaultProps = { cancelButtonLabel: g };
            const b = c.default.create((e) => ({ container: { alignItems: "center", paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space12, position: "relative" }, headerText: { marginBottom: e.spaces.space16 }, labelText: { marginBottom: e.spaces.space16, width: "100%" }, linkInput: { backgroundColor: e.colors.gray0, borderColor: "transparent", color: e.colors.gray700, fontSize: e.fontSizes.body, marginBottom: e.spaces.space12, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space20 }, cancelButton: { width: "100%" } })),
                E = y,
                S = u().e05c00b4,
                x = u().eabf2209,
                _ = u().a613e720,
                v = u().f88553c8,
                w = { riffsy: "https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png", giphy: "https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png" };
            class C extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderMenu = (e) => n.createElement(o.Z, { items: [{ text: _, Icon: p.default, onClick: this._handleCopyGifLinkButtonClick }], onCloseRequested: e })),
                        (this._handleCopyGifLinkButtonClick = (e) => {
                            const { addToast: t, gifUrl: r } = this.props;
                            i.Z.isAvailable() ? (i.Z.setString(r), t({ text: v })) : this.setState({ showCopyLinkSheet: !0 }), e && e();
                        }),
                        (this._handleCopyLinkSheetCancel = () => {
                            this.setState({ showCopyLinkSheet: !1 });
                        }),
                        (this.state = { showCopyLinkSheet: !1 });
                }
                render() {
                    const { showCopyLinkSheet: e } = this.state,
                        { gifUrl: t, provider: r } = this.props,
                        { display_name: i, name: o } = r,
                        a = w[o];
                    return a ? n.createElement(n.Fragment, null, e ? n.createElement(E, { description: x({ providerName: i }), headerText: S, link: t, onCancel: this._handleCopyLinkSheetCancel }) : null, n.createElement(s.ZP, { align: "center", color: "gray700", style: [I.root, I.verticalAlign] }, n.createElement(u().I18NFormatMessage, { $i18n: "e2e6ea0d" }, this._renderAttribution(i, a)))) : null;
                }
                _renderAttribution(e, t) {
                    return n.createElement(a.Z, { interactiveStyles: null, renderMenu: this._renderMenu }, n.createElement(s.ZP, { style: I.verticalAlign, weight: "bold", withInteractiveStyling: !0 }, n.createElement(l.Z, { source: { uri: t }, style: I.image }), n.createElement(s.ZP, null, e.toUpperCase())));
                }
            }
            const I = c.default.create((e) => ({ button: { marginStart: e.spaces.space12 }, image: { display: "inline-block", height: e.spaces.space16, marginHorizontal: e.spaces.space4, width: e.spaces.space16 }, root: { marginHorizontal: e.spaces.space8 }, verticalAlign: { display: "flex", alignItems: "center", flexDirection: "row" }, alignLeft: { textAlign: "start" } })),
                Z = C;
            var T = r(668214),
                R = r(601576);
            const P = (0, T.Z)().propsFromActions(() => ({ addToast: R.fz }))(({ addToast: e, gifUrl: t, provider: r }) => n.createElement(Z, { addToast: e, gifUrl: t, provider: r }));
        },
        26232: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => b });
            var n = r(202784),
                i = r(555874),
                o = r(674132),
                s = r.n(o),
                a = r(290402),
                l = r(965245),
                c = r(71620),
                d = r(668214);
            const u = (e, { module: t }) => t.selectFetchStatus(e),
                p = (e, { module: t }) => t.selectItems(e),
                m = (0, d.Z)()
                    .propsFromState((e) => ({ fetchStatus: u, items: p }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, c.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                h = s().i9028824,
                f = (e) => e,
                g = (e) => (t) => e(t.item);
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { footer: e, items: t, noItemsRenderer: r, numColumns: o, onScrollEnd: s, renderer: a, withoutHeadroom: c } = this.props;
                            return !t || o < 1 ? null : 1 === o ? n.createElement(l.Z, { cacheKey: "sliceTimeline", footer: e, identityFunction: f, items: t, noItemsRenderer: r, onNearEnd: this._handleNearEnd, onScrollEnd: s, renderer: a, withoutHeadroom: c }) : n.createElement(i.Z, { ListEmptyComponent: r, data: t, keyExtractor: f, numColumns: o, renderItem: g(a) });
                        }),
                        (this._handleNearEnd = () => {
                            const { createLocalApiErrorHandler: e, fetchBottom: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleFetch = () => {
                            const { alwaysFetch: e, createLocalApiErrorHandler: t, fetch: r, fetchIfNeeded: n } = this.props;
                            (e ? r : n)().catch(t());
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
                    return t ? n.createElement(a.Z, { "aria-label": h, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: r, retryable: !0 }) : null;
                }
            }
            y.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const b = m(y);
        },
        513313: (e, t, r) => {
            "use strict";
            r.d(t, { P: () => n });
            const n = Object.freeze({ Crop: "crop", AltText: "alt_text", SensitiveMedia: "sensitive_media", Subtitles: "subtitles", Trimmer: "trimmer" });
        },
        386742: (e, t, r) => {
            "use strict";
            r.d(t, { $p: () => d, Xi: () => s, _l: () => c, _y: () => a, bK: () => u, lL: () => l });
            var n = r(202784),
                i = r(523561),
                o = r(195560);
            const s = (0, i.Z)({ loader: () => Promise.all([r.e("ondemand.ReactBeautifulDnd-e96e9bea"), r.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(r.bind(r, 391426)), renderPlaceholder: (e, t) => n.createElement(o.Z, { hasError: e, onRetry: t }) }),
                a = s,
                l = (0, i.Z)({ noErrorBoundary: !0, loader: () => Promise.all([r.e("ondemand.ReactBeautifulDnd-e96e9bea"), r.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(r.bind(r, 797546)), renderPlaceholder: (e, t) => n.createElement(o.Z, { hasError: e, onRetry: t }) }),
                c = l,
                d = (0, i.Z)({ loader: () => Promise.all([r.e("ondemand.ReactBeautifulDnd-e96e9bea"), r.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(r.bind(r, 896830)), renderPlaceholder: (e, t) => n.createElement(o.Z, { hasError: e, onRetry: t }) }),
                u = d;
        },
        566220: (e, t, r) => {
            "use strict";
            r.d(t, { R: () => s });
            var n = r(202784);
            const i = () => new Date(),
                o = n.createContext(i),
                s = () => n.useContext(o);
        },
        481681: (e, t, r) => {
            "use strict";
            r.d(t, { Bp: () => i, NF: () => n, nO: () => o });
            const n = "send-tweet",
                i = "dismiss-composer",
                o = 4;
        },
        47743: (e, t, r) => {
            "use strict";
            r.d(t, { nO: () => n.nO, YT: () => y, yN: () => E, X2: () => S, FI: () => x });
            var n = r(481681),
                i = r(205074);
            function o(e) {
                return (t) => t.some((t) => !!t && e(t));
            }
            const s = (e) => !!e.mediaFile?.isGif,
                a = (e) => !!e.externalMediaDetails,
                l = (e) => !!e.mediaFile?.isImage,
                c = (e) => !(!e.mediaFile?.isVideo || e.mediaFile instanceof i.ZP),
                d = o((e) => s(e) || l(e) || c(e) || a(e));
            o(s), o(l), o(c), o(a);
            n.nO;
            var u = r(175848),
                p = r(276563),
                m = r(166852),
                h = r(450681),
                f = r(575211),
                g = r(456910);
            const y = ({ excludeReplyUser: e, inReplyToStatus: t, viewerUserId: r }) => {
                    const { retweeted_status: n } = t,
                        { entities: i, unmentioned_user_ids: o, user: s } = n || t,
                        a = n ? n.user : {},
                        l = n ? t.user : {},
                        c = i?.user_mentions || [],
                        d = u.ZP.mergeTaggedUsers(i?.media || []),
                        p = b(n || t) || {},
                        f = { [a.id_str]: a, [l.id_str]: l, [s.id_str]: s, [p.id_str]: p };
                    c.forEach((e) => {
                        f[e.id_str] = e;
                    }),
                        d.forEach(({ name: e, screen_name: t, user_id: r }) => {
                            f[r] = { id_str: r, name: e, screen_name: t };
                        });
                    const g = (e) => {
                            const t = o?.includes(e.id_str),
                                r = e.id_str === s.id_str;
                            return !t || r ? [e.id_str] : [];
                        },
                        y = (0, m.Z)((0, h.Z)([...g(a), ...g(l), s.id_str, ...c.flatMap((e) => g(e)), ...d.map((e) => e.user_id)])).filter((e) => e !== r);
                    let E = r && s.id_str === r ? [r, ...y] : y;
                    return e && (E = E.filter((e) => e !== s.id_str)), E.map((e) => f[e]);
                },
                b = ({ card: e }) => {
                    let t = null;
                    if (e) {
                        const r = p.default.getBindingValue(e.binding_values, "site");
                        r && e.users && (t = e.users[r.id_str]);
                    }
                    return t;
                },
                E =
                    ({ maxNumberOfMedia: e, mixedMediaUploadEnabled: t = !1 }) =>
                    (r) => {
                        if (0 === r.length) return !0;
                        if (t) {
                            return r.length <= e;
                        }
                        const n = r.some((e) => !!e.externalMediaDetails),
                            o = !n && r.some((e) => e.mediaFile && e.mediaFile.isGif),
                            s = r.some((e) => e.mediaFile && !(e.mediaFile instanceof i.ZP) && e.mediaFile.isVideo);
                        if (o || n || s) return 1 === r.length;
                        {
                            const t = r.length <= e,
                                n = r.every((e) => e.mediaFile && e.mediaFile.isImage);
                            return t && n;
                        }
                    },
                S = (e, t = !1, r = n.nO) => E({ mixedMediaUploadEnabled: t, maxNumberOfMedia: r })(e),
                x = (e, t = !1) => {
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
        128225: (e, t, r) => {
            "use strict";
            r.d(t, { f: () => n });
            r(543673), r(240753), r(128399), r(571372);
            const n = (e, t = !1, r = !1) =>
                new Promise((n, i) => {
                    const o = new URL(e);
                    r && !e.startsWith("blob:") && o.searchParams.set("grok_timestamp", Date.now().toString());
                    const s = new window.XMLHttpRequest();
                    (s.responseType = "blob"),
                        (s.onreadystatechange = () => {
                            s.readyState === window.XMLHttpRequest.DONE && (200 === s.status ? n(s.response) : i(new Error("Unexpected status code")));
                        }),
                        (s.withCredentials = t),
                        (s.onerror = (e) => i(e)),
                        (s.ontimeout = (e) => i(e)),
                        s.open("GET", o.toString(), !0),
                        s.send();
                });
        },
        511985: (e, t, r) => {
            "use strict";
            r.d(t, { AD: () => n, Qy: () => o, _f: () => s, zH: () => i });
            const n = Object.freeze({ Composition: "composition", DMComposition: "dm_composition", NoteComposition: "note_composition" }),
                i = 500,
                o = (e) => Object.values(n).indexOf(e) >= 0,
                s = (e, t) => ("boolean" == typeof e ? e : t);
        },
        779610: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => d });
            var n = r(202784),
                i = r(325686),
                o = r(191796),
                s = r(58399),
                a = r(731708),
                l = r(952428),
                c = r(392237);
            const d = (e) => {
                    const { decoration: t, description: r, disabled: d = !1, isActive: p = !1, label: m, link: h, onPress: f, paddingHorizontal: g, renderRightContent: y, role: b = "tab", styleOverride: E, testID: S = "pivot", thumbnail: x, thumbnailSize: _, withoutArrow: v = !1 } = e,
                        w = [u.thumbnailContainer, "medium" === _ && u.thumbnailContainerMedium],
                        C = "string" == typeof m ? n.createElement(a.ZP, null, m) : m,
                        I = "object" == typeof h && h.external && !h.openInSameFrame,
                        Z = r ? ("string" == typeof r ? n.createElement(a.ZP, { color: "gray700", size: "subtext2", testID: `${S}-description` }, r) : r) : null,
                        T = n.useMemo(() => ("space0" === g ? { paddingHorizontal: 0 } : { paddingHorizontal: g ? c.default.theme.spaces[g] : c.default.theme.componentDimensions.gutterHorizontal }), [g]);
                    return n.createElement(l.Z, { "aria-selected": "tab" === b ? p : null, disabled: d, link: d ? void 0 : h, onPress: f, role: b, style: [u.root, T, d && u.disabled, E], testID: S, withInteractiveStyling: !!h || !!f }, n.createElement(i.Z, { style: u.contentContainer }, x ? n.createElement(i.Z, { style: w }, x) : null, n.createElement(i.Z, { style: u.content }, C, Z), y ? y() : null, (!h && !f) || d || v ? null : I ? n.createElement(o.default, { style: u.icon }) : n.createElement(s.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        466818: (e, t, r) => {
            "use strict";
            r.d(t, { ZP: () => y });
            var n = r(202784),
                i = r(325686),
                o = r(487552),
                s = r(302752),
                a = r(183806),
                l = r(731708),
                c = r(950822),
                d = r(224162),
                u = r(392237);
            const p = n.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                m = (e) => (0, c.Z)("option", e);
            let h = 1;
            class f extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = n.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: r } = this.props,
                                { selectedIndex: n, value: i } = e.target;
                            t && t(i, n - (r ? 1 : 0));
                        }),
                        (this._handleBlur = (e) => {
                            const { onBlur: t } = this.props;
                            this.setState({ isFocused: !1 }), t && t();
                        }),
                        (this._handleFocus = (e) => {
                            const { onFocus: t } = this.props;
                            this.setState({ isFocused: !0 }), t && t();
                        }),
                        (this._id = `SELECTOR_${h}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (h += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: t, errorText: r, hasError: c, helperText: h, options: f, style: y, testID: b, value: E, withEmptyOption: S } = this.props,
                        { isFocused: x } = this.state,
                        _ = l.ZP.getLanguage(),
                        v = void 0 === c ? !!r : c,
                        w = new Set();
                    r && w.add(this._errorID), e && w.add(e), h && w.add(this._helperID);
                    const C = w.size ? [...w].join(" ") : void 0;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === _ ? u.default.theme.fontFamilies.japan : "rtl" === e || s.Z.isLocaleRTL(_) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return n.createElement(
                                i.Z,
                                { style: [a.Z.border, g.container, t && a.Z.disabled, x && a.Z.focusedBorderValid, v && a.Z.invalidBorderColor, x && v && a.Z.focusedBorderInvalid, y] },
                                this._renderLabel(),
                                n.createElement(
                                    p,
                                    { "aria-describedby": C, "aria-invalid": v, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [g.select, { fontFamily: l }, t && a.Z.disabled], testID: b || "", value: E },
                                    S ? n.createElement(m, { disabled: !0, style: g.option, value: "" }) : null,
                                    f.map((e) => {
                                        const { disabled: t, label: r, value: i } = e;
                                        return n.createElement(m, { disabled: t, key: `${r}-${i}`, style: g.option, value: i }, r);
                                    }),
                                ),
                                n.createElement(o.default, { style: [g.dropdownCaret, x && a.Z.validColor, !(!c && !r) && a.Z.invalidColor] }),
                            );
                        }),
                        h ? this._renderHelperText() : null,
                        v && r ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: r } = this.props,
                        { isFocused: i } = this.state;
                    return n.createElement(l.ZP, { color: t || e ? "red500" : i ? "primary" : "gray700", id: this._labelID, role: "label", style: g.label }, r);
                }
                _renderHelperText() {
                    return n.createElement(i.Z, { "aria-live": "polite" }, n.createElement(l.ZP, { color: "gray700", id: this._helperID, style: g.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return n.createElement(i.Z, { "aria-live": "polite" }, n.createElement(l.ZP, { color: "red500", id: this._errorID, style: g.helperText }, this.props.errorText));
                }
            }
            f.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const g = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                y = f;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose.221df0fa.js.map
