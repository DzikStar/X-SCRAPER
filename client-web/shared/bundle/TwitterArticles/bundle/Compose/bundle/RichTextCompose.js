(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose"],
    {
        136092: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => me });
            var n = {};
            r.r(n), r.d(n, { anchorOffsetContextText: () => D, composerEditorContent: () => M, editorStateJson: () => I.G, editorState_2_json: () => I.c, parseTwitterText: () => T });
            var i = {};
            r.r(i), r.d(i, { ConvertEmojiEffect: () => B, DeveloperDebug: () => A, InlineStyleButton: () => N, OverflowHighlightEffect: () => X, PreserveUnstyledEntitiesEffect: () => se, Separator: () => ue, TextChangeEffect: () => ce, TrackFocusView: () => te });
            var a = {};
            r.r(a), r.d(a, { useRichEnabled: () => ae, useTransform: () => O });
            var o = r(202784),
                s = r(925873),
                l = r(370751),
                d = r(424869),
                c = r.n(d),
                u = r(715729),
                h = r(118717),
                p = r(769471),
                m = r(503229),
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
            function v(e, t) {
                return Object.assign(e, t);
            }
            function E(e) {
                return function (t) {
                    e.setState((e) => {
                        e.editorState = t;
                        for (const t of e.transform.order) {
                            (0, e.transform.lookup[t])(e);
                        }
                    });
                };
            }
            function _(e) {
                return function (t) {
                    e.setState((e) => {
                        e.editorState = s.Z.initEditorState(t);
                        for (const t of e.transform.order) {
                            (0, e.transform.lookup[t])(e);
                        }
                    });
                };
            }
            var S = r(301503),
                x = r(835305);
            function w(e) {
                return function (t) {
                    const r = e.getState(),
                        n = x.wK(t),
                        i = S.RichUtils.toggleInlineStyle(r.editorState, n);
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
                P = r(791134);
            const T = (0, Z.P1)([(e) => e.editorState.getCurrentContent().getPlainText(), (e) => e.isThread, (e, t) => t.featureSwitches, (e, t) => t.userClaims], (e, t, r, n) => {
                    const i = { isThread: t, featureSwitches: r, userClaims: n };
                    return P.k2(e, i);
                }),
                D = (0, Z.P1)([(e) => e.editorState], (e) => {
                    const t = e.getCurrentContent(),
                        r = e.getSelection(),
                        n = r.getAnchorKey(),
                        i = t.getBlockForKey(n);
                    let a = 0;
                    for (const e of t.getBlocksAsArray()) {
                        if (i === e) break;
                        a += e.getText().length + 1;
                    }
                    const o = a + r.getAnchorOffset(),
                        s = t.getPlainText(),
                        l = s.length - o;
                    let d, c;
                    l < F ? ((d = l), (c = R - l)) : o < F ? ((d = R - o), (c = o)) : ((d = F), (c = F));
                    const u = o - c,
                        h = o + d;
                    return s.substring(u, h);
                }),
                R = 280,
                F = R / 2,
                M = (0, Z.P1)(
                    [
                        (e) => {
                            const t = e.editorState.getCurrentContent(),
                                r = { text: t.getPlainText(), editorStateRaw: (0, S.convertToRaw)(t) };
                            return JSON.stringify(r);
                        },
                    ],
                    (e) => JSON.parse(e),
                ),
                k = (function (e, t) {
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
                        i = o.createContext(n);
                    return {
                        Provider: function (t) {
                            const n = o.useRef(!1),
                                a = o.useRef();
                            if (
                                (o.useEffect(() => {
                                    if (!n.current) return;
                                    const e = a.current?.setState;
                                    "function" == typeof e &&
                                        e((e) => {
                                            v(e, t.state);
                                        });
                                }, [t.state]),
                                o.useEffect(() => {
                                    n.current = !0;
                                }, []),
                                !n.current)
                            ) {
                                t.name && (r.name = t.name);
                                const n = (function (e, t) {
                                    const r = (0, p.Z)({ freeze: !0 }, t),
                                        n = r.freeze ? c() : m.Z,
                                        i = {},
                                        a = {};
                                    if (r?.selectors) for (const e of Object.keys(r.selectors)) i[e] = r.selectors[e].bind({});
                                    let o;
                                    const s = (0, h.MT)(
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
                                            o,
                                        ),
                                        l = (function (e) {
                                            return function (t, r) {
                                                return (0, y.useSyncExternalStoreWithSelector)(e.subscribe, e.getState, e.getState, t, r);
                                            };
                                        })(s);
                                    function d(e) {
                                        return function (t) {
                                            const r = s.getState(),
                                                n = (0, u.ZP)(r, t);
                                            s.dispatch({ ...g.set, type: e, nextState: n });
                                        };
                                    }
                                    const b = s.getState,
                                        v = r?.mutations;
                                    if (v) {
                                        const e = Object.keys(v({}));
                                        for (const t of e)
                                            a[t] = function (...e) {
                                                const r = d(t);
                                                return (0, v({ getState: b, setState: r, mut: a })[t])(...e);
                                            };
                                    }
                                    return {
                                        store: s,
                                        useState: l,
                                        getState: b,
                                        setState: d("set"),
                                        mut: a,
                                        select: i,
                                        undo: f.Z,
                                        redo: f.Z,
                                        reset: function () {
                                            s.dispatch(g.reset);
                                        },
                                    };
                                })(v(e(), t.init), r);
                                (a.current = n), t.onSetup && t.onSetup(n);
                            }
                            if ((o.useDebugValue(r.name), !a.current)) throw new b(`${String(r.name)} could not setup initial context`);
                            return o.createElement(i.Provider, { value: a.current }, t.children);
                        },
                        useActions: function () {
                            o.useDebugValue(r.name);
                            const e = o.useContext(i),
                                { getState: t, mut: n, redo: a, reset: s, select: l, setState: d, undo: c } = e;
                            return o.useMemo(() => ({ getState: t, mut: n, redo: a, reset: s, select: l, setState: d, undo: c }), [t, n, a, s, l, d, c]);
                        },
                        useState: function (e, t) {
                            return o.useDebugValue([r.name, String(e), { selector: e, equalityFn: t }]), o.useContext(i).useState(e, t);
                        },
                        useSelect: function (e) {
                            o.useDebugValue([r.name, String(e), { select_selector: e }]);
                            const t = o.useContext(i),
                                n = e(t.select);
                            return t.useState(n);
                        },
                    };
                })(() => ({ editorState: s.Z.initEditorState(""), hasOverflowStyle: !1, isThread: !1, isFocused: !1, isEditorFocused: !1, isRichTextInput: !0, transform: { lookup: {}, order: [] } }), { name: "ComposerStore", freeze: !1, selectors: n, mutations: (e) => ({ editorState: E(e), editorStateRaw: _(e), toggleInlineStyle: w(e), defer_editorState: C(e) }) });
            function O(e, t) {
                const r = k.useActions(),
                    n = o.useRef(t);
                (n.current = t),
                    o.useEffect(() => {
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
            function B() {
                return (
                    O("ConvertEmojiEffect", (e) => {
                        e.editorState = s.Z.convertEmojiToEntities(e.editorState);
                    }),
                    null
                );
            }
            let A;
            A = () => null;
            var z = r(976145),
                G = r(154003),
                L = r(392237),
                V = r(111677),
                H = r.n(V),
                W = r(394123),
                U = r(856661);
            function N({ isWebRedesign: e, style: t }) {
                const r = me.useActions(),
                    n = me.useRichEnabled(),
                    i = me.useState((e) => {
                        const r = e.editorState.getCurrentInlineStyle(),
                            n = x.wK(t);
                        return r.contains(n);
                    });
                if (!n.write) return null;
                const a = j(t),
                    s = (function (e) {
                        function t(e) {
                            return `(${[$, e].join("+")})`;
                        }
                        switch (e) {
                            case x.xs.Bold:
                                return t("B");
                            case x.xs.Italic:
                                return t("I");
                            default:
                                throw new Error(`unrecognized style [${e}]`);
                        }
                    })(t),
                    l = [a, s].join(" "),
                    d = [a, i && j("active"), s].filter(Boolean),
                    c = (0, z.Z)(d, !0),
                    u = (function (e) {
                        switch (e) {
                            case x.xs.Bold:
                                return W.default;
                            case x.xs.Italic:
                                return U.default;
                            default:
                                throw new Error(`unrecognized style [${e}]`);
                        }
                    })(t),
                    h = e ? [i ? K.newIconActive : K.newIconInactive] : [i ? K.iconActive : K.iconInactive];
                return o.createElement(G.ZP, {
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
            function j(e, t) {
                return (0, q[e])({ ...t, ttc_rich_text_composer: "" });
            }
            const $ = r(323265).ZP.isMac() ? "⌘" : "CTRL",
                q = { [x.xs.Bold]: H().aeca1239, [x.xs.Italic]: H().i7dc66dd, active: H().ad89b831 },
                K = L.default.create((e) => {
                    const t = { borderRadius: e.borderRadiiPx.small };
                    return { iconActive: { ...t, backgroundColor: e.colors.primary, color: e.colors.navigationBackground }, newIconActive: { ...t, backgroundColor: e.colors.gray700, color: e.colors.navigationBackground }, iconInactive: { ...t, color: e.colors.primary }, newIconInactive: { ...t, color: e.colors.gray700 } };
                });
            var Q = r(443781);
            function J() {
                return { ...(0, Q.QZ)(), isThread: k.useState((e) => e.isThread) };
            }
            function X() {
                const e = k.useActions(),
                    t = J(),
                    r = o.useRef({ context: t, actions: e });
                return (
                    (r.current.context = t),
                    (r.current.actions = e),
                    O("OverflowHighlightEffect", (e) => {
                        !(function (e, t) {
                            const { parseTwitterText: r } = t.actions.select,
                                n = r(e, t.context),
                                { validRangeEnd: i, weightedLength: a } = n,
                                o = i + 1,
                                l = e.hasOverflowStyle,
                                d = o < a;
                            e.hasOverflowStyle = d;
                            if (d || l) {
                                const t = d ? i + 1 : -1;
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
            var Y = r(807896),
                ee = r(325686);
            function te(e) {
                const t = k.useActions(),
                    r = o.useRef();
                return o.createElement(
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
            function ae() {
                const e = J(),
                    t = k.useState((e) => e.isRichTextInput),
                    r = { isRichTextInput: t };
                return ie.v$.enabled({ context: e, state: r });
            }
            const oe = [x.DraftJS.Bold, x.DraftJS.Italic];
            function se() {
                return O("PreserveUnstyledEntitiesEffect", ae().write ? le : f.Z), null;
            }
            function le(e) {
                let t = e.editorState;
                const r = { selection: t.getSelection(), inline_style: t.getCurrentInlineStyle(), last_change_type: t.getLastChangeType() },
                    n = r.selection.getStartOffset() - r.selection.getEndOffset() != 0,
                    i = "change-inline-style" === r.last_change_type;
                if (n || i) {
                    t = S.EditorState.set(t, { allowUndo: !1 });
                    let n = t.getCurrentContent();
                    for (const e of t.getCurrentContent().getBlocksAsArray()) {
                        const t = e.getText(),
                            r = (0, ne.Z)(t),
                            i = e.key;
                        for (const e of r) {
                            const t = de(i, e.indices);
                            for (const e of oe) n = S.Modifier.removeInlineStyle(n, t, e);
                        }
                    }
                    (t = S.EditorState.push(t, n, "change-inline-style")), r.selection.getHasFocus() && (t = S.EditorState.forceSelection(t, r.selection)), (t = S.EditorState.setInlineStyleOverride(t, r.inline_style)), (t = S.EditorState.set(t, { allowUndo: !0 })), (e.editorState = t);
                }
            }
            function de(e, t) {
                const [r, n] = t,
                    [i, a] = [r, n];
                let o = S.SelectionState.createEmpty(e);
                return (o = o.merge({ anchorOffset: i, focusOffset: a })), o;
            }
            function ce(e) {
                const t = o.useRef({}),
                    r = o.useRef(e);
                r.current = e;
                const n = me.useSelect((e) => e.composerEditorContent),
                    i = me.useState((e) => e.isRichTextInput);
                return (
                    o.useEffect(() => {
                        i && (t.current.first_pass ? r.current.onTextChange(n) : (t.current.first_pass = !0));
                    }, [n, i]),
                    null
                );
            }
            function ue() {
                return me.useRichEnabled().write ? o.createElement("div", { style: he.container }) : null;
            }
            const he = L.default.create((e) => ({ container: { backgroundColor: e.colors.gray400, borderRadius: e.borderRadii.infinite, height: e.spaces.space16, margin: "auto", width: "2px" } }));
            var pe = r(972689);
            const me = { ...k, ...a, ...i, T: pe };
        },
        972689: () => {},
        113545: (e, t, r) => {
            "use strict";
            r.d(t, { _: () => l, q: () => d });
            var n = r(807896),
                i = r(202784),
                a = r(370751),
                o = r(386742),
                s = r(136092);
            function l(e) {
                const { children: t, flex: r, ...a } = e;
                return s.Z.useRichEnabled().features.inline_media
                    ? i.createElement(o._l, a, (t, r) => {
                          const a = { ...t.draggableProps.style };
                          if (a.transform) {
                              const e = `translate(0px${a.transform.slice(a.transform.indexOf(","), a.transform.length)}`;
                              a.transform = e;
                          }
                          return e.flex && ((a.display = "flex"), r.isDragging || ((a.width = e.widthOverride || "100%"), (a.height = "100%"))), r.isDragging ? (a.opacity = 0.4) : (delete a.scale, delete a.opacity), i.createElement("div", (0, n.Z)({ ref: t.innerRef }, t.draggableProps, t.dragHandleProps, { style: a }), e.children);
                      })
                    : e.children;
            }
            function d(e) {
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
                        a = n.block.key,
                        o = r[a],
                        s = !c.has(n.block.type);
                    return i.createElement(l, { draggableId: a, index: o, isDragDisabled: s, key: a }, e);
                });
            }
            const c = (0, a.Z)(["atomic"]),
                u = (e) => e.props.children.props;
        },
        373554: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => y, h: () => f });
            var n = r(807896),
                i = r(202784),
                a = r(449161),
                o = r(392237),
                s = r(111677),
                l = r.n(s),
                d = r(473026),
                c = r(276259),
                u = r(540387);
            const h = "fileInput",
                p = l().b9960f32,
                m = i.createElement(d.default, null),
                f = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: r }) => (t ? c.v5 : []).concat(e ? [c.Re] : []).concat(r ? u.jn : []);
            const g = o.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                y = function ({ "aria-label": e = p, acceptGifs: t = !0, acceptImages: r = !0, acceptVideo: o = !0, customMimeTypes: s = [], icon: l = m, size: d = "medium", style: c, withIcon: u = !0, ...y }) {
                    const b = f({ acceptGifs: t, acceptImages: r, acceptVideo: o }).concat(s).join(",");
                    return i.createElement(a.Z, (0, n.Z)({}, y, { accept: b, "aria-label": e, icon: u ? l : void 0, size: d, style: [g.root, c], testID: h }));
                };
        },
        751170: (e, t, r) => {
            "use strict";
            r.d(t, { A: () => m, Z: () => b });
            var n = r(202784),
                i = r(325686),
                a = r(167630),
                o = r(992942),
                s = r(392237),
                l = r(111677),
                d = r.n(l),
                c = r(205074),
                u = r(364837),
                h = r(908478);
            const p = d().gff1f69e,
                m = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
            class f extends n.Component {
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
                        m = this._getImageSrc();
                    return n.createElement(i.Z, { onClick: s, style: h }, u || !m ? n.createElement(a.Z, { "aria-label": p, style: y.activityIndicator }) : n.createElement(o.Z, { resizeMode: l, source: m, style: y.image }));
                }
            }
            f.defaultProps = { borderRadius: m.NONE, enableGif: !0, resizeMode: "cover" };
            const g = s.default.create((e) => ({ [m.INFINITE]: { borderRadius: e.borderRadii.infinite }, [m.MEDIUM]: { borderRadius: e.borderRadii.small }, [m.NONE]: { borderRadius: e.borderRadii.none } })),
                y = s.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                b = f;
        },
        304059: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => H });
            var n = r(202784),
                i = r(325686),
                a = r(537392),
                o = r(336961),
                s = r(659651),
                l = r(154003),
                d = r(392237),
                c = r(992942),
                u = r(111677),
                h = r.n(u),
                p = r(678773),
                m = r(597237),
                f = r(254944),
                g = r(837020),
                y = r(276259),
                b = r(443781),
                v = r(10656),
                E = r(716233),
                _ = r(946208),
                S = r(540387),
                x = r(950822),
                w = r(303186),
                C = r(954300);
            class I extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: r, style: i, variants: a, ...o } = this.props,
                        s = (0, w.IM)((0, C.rD)(a), t);
                    return (0, x.Z)("video", { ...o, children: [s.map((e) => n.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: i });
                }
            }
            I.defaultProps = { dataSaverMode: !1, variants: [] };
            var Z = r(959587),
                P = r(751170),
                T = r(523561),
                D = r(195560);
            const R = (0, T.Z)({
                    loader: () =>
                        Promise.all([r.e("icons.0"), r.e("icons.16"), r.e("icons.10"), r.e("icons.13"), r.e("icons.22"), r.e("modules.common-e907d115"), r.e("modules.common-e019dbda"), r.e("icons.26"), r.e("modules.audio-6107ac1a"), r.e("modules.audio-b953418a"), r.e("modules.audio-7c51e6a7"), r.e("modules.audio-04db59e9"), r.e("modules.audio-76583d6c"), r.e("modules.audio-b7a8a5fb"), r.e("modules.audio-51f6e793"), r.e("modules.audio-e019dbda"), r.e("modules.audio-262c94d4"), r.e("modules.audio-c6fe4ea4"), r.e("icons.4"), r.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"), r.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"), r.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"), r.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"), r.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), r.e("loader.MediaPreviewVideoPlayer")])
                            .then(r.bind(r, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => n.createElement(D.Z, { hasError: e, onRetry: t }),
                }),
                F = h().gd80afba,
                M = h().j322caee,
                k = h().abd845fe,
                O = h().df1b0708,
                B = h().cd959e5c,
                A = h().e68b09b4,
                z = h().add55c98,
                G = h().f350cf46;
            class L extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isVideoPaused: !0, playGif: !1 }),
                        (this._handleGifClick = () => {
                            this.setState({ playGif: !this.state.playGif });
                        }),
                        (this._handleMediaPreviewLayout = (e) => {
                            const { mediaItem: t, resizeIfNeeded: r } = this.props,
                                n = t.mediaFile || t.externalMediaDetails;
                            if (!n) return;
                            const {
                                    nativeEvent: {
                                        layout: { height: i, width: a },
                                    },
                                } = e,
                                { height: o, width: s } = n,
                                l = s / o;
                            Math.abs(l - a / i) > 0.05 && ("width" === r ? this.setState({ mediaContainerSizeStyle: { width: i * l } }) : "height" === r && this.setState({ mediaContainerSizeStyle: { height: a / l } }));
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
                    const { "aria-label": e, enableGif: t, mediaItem: r, onEdit: d, onEditSensitiveWarning: c, onRemove: u, role: h, style: b, withAltTextLabel: E, withCloseButton: _, withDragAndDropIndicator: S, withEditButton: x, withEditIcon: w, withEditSensitiveWarningButton: C } = this.props,
                        { mediaContainerSizeStyle: I, playGif: P } = this.state,
                        T = r.externalMediaDetails && r.externalMediaDetails.mediaType === y.Re,
                        D = T || (t && r.mediaFile && r.mediaFile.isGif),
                        R = !!r.mediaFile?.isVideo;
                    return n.createElement(a.ZP, null, ({ windowWidth: t }) => {
                        const r = void 0 !== w ? w : !v.Z.isTwoColumnLayout(t);
                        return n.createElement(i.Z, { "aria-label": e || z, onLayout: this._handleMediaPreviewLayout, role: h, style: [b, V.cursor, T && V.gifPlayButton, I] }, this._renderPreview(), T && !P && n.createElement(o.Z, { "aria-label": O, onPress: this._handleGifClick, size: "small" }), D ? n.createElement(Z.ZP, { type: Z.AM }) : null, E && !R ? n.createElement(s.Z, { align: "left", altLabel: e }) : null, n.createElement(i.Z, { style: V.editMedia }, S ? n.createElement(l.ZP, { "aria-label": G, hoverLabel: { label: G }, icon: n.createElement(p.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, x && C ? n.createElement(l.ZP, { "aria-label": M, icon: n.createElement(m.default, { style: V.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, x ? n.createElement(l.ZP, { "aria-label": F, icon: r ? n.createElement(f.default, null) : void 0, onPress: d, size: r ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, r ? void 0 : k) : null), _ ? n.createElement(l.ZP, { "aria-label": B, hoverLabel: { label: A }, icon: n.createElement(g.default, null), onPress: u, size: "small", style: V.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            r = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, r);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : n.createElement(i.Z, { style: d.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: r } = this.state,
                        a = { uri: r ? e : t };
                    return n.createElement(i.Z, { onClick: this._handleGifClick, style: d.default.absoluteFill }, n.createElement(c.Z, { resizeMode: "cover", source: a, style: V.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: r, mediaItem: i, onClick: a } = this.props;
                    return n.createElement(P.Z, { borderRadius: e, enableGif: t, mediaItem: i, onClick: a, resizeMode: r });
                }
                _renderVideoPreview(e, t, r, i) {
                    const { mediaItem: a } = this.props,
                        o = a.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && i instanceof S.ZP) {
                        let o = [];
                        (0, E.TO)(i.fileHandle) && (o = [{ src: t, type: e }]);
                        const s = a.mediaMetadata?.subtitles,
                            l = a?.trimData;
                        return n.createElement(R, { mediaFile: i, mediaId: String(r), mediaItem: a, subtitles: s, trimData: l, variants: o });
                    }
                    {
                        const r = (0, E.TO)(i.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return n.createElement(I, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: i instanceof S.ZP ? i.thumbnail : "", style: V.video, variants: r }, o?.upload?.mediaFile instanceof _.ZP ? n.createElement("track", { default: !0, kind: "subtitles", label: o.displayName, src: o.upload.mediaFile.vtt, srcLang: o.lang }) : null);
                    }
                }
            }
            (L.contextType = b.rC), (L.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const V = d.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                H = L;
        },
        942910: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => p });
            var n = r(202784),
                i = r(325686),
                a = r(682474),
                o = r(392237),
                s = r(174326),
                l = r(782578),
                d = r(443781),
                c = r(490834),
                u = r(113545),
                h = r(304059);
            class p extends n.Component {
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
                    return n.createElement(i.Z, { style: [m.container, this.props.style] }, this.props.mixedMediaUploadsEnabled ? this._renderMediaGroup() : this._renderImageGroup());
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
                              a.Z,
                              { ratio: o.default.theme.aspectRatios.landscape },
                              n.createElement(
                                  i.Z,
                                  { style: m.mediaPreviewWrapper },
                                  n.createElement(
                                      s.Z,
                                      { childrenStyle: [m.carouselChild], showNavButtonsOnHover: !1, style: m.carousel, updateObserverWithChildren: !0, visibleItemIndex: this.state.visibleItemIndex },
                                      e.map((e, t) => n.createElement(i.Z, { key: e.id, style: m.fullSize }, this._renderMediaAtIndex(t, m))),
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
                    return n.createElement(a.Z, { ratio: t ? d : s / r }, n.createElement(i.Z, { style: m.mediaPreviewWrapperSingle }, this._renderMediaAtIndex(0)));
                }
                _renderGroupOf2() {
                    return n.createElement(a.Z, { ratio: o.default.theme.aspectRatios.landscape }, n.createElement(i.Z, { style: m.mediaPreviewWrapper }, this._renderMediaAtIndex(0, m.gutterRight), this._renderMediaAtIndex(1)));
                }
                _renderGroupOf3() {
                    return n.createElement(a.Z, { ratio: o.default.theme.aspectRatios.landscape }, n.createElement(i.Z, { style: m.mediaPreviewWrapper }, this._renderMediaAtIndex(0, m.gutterRight), this._renderColumnWithIndices([1, 2])));
                }
                _renderGroupOf4() {
                    return n.createElement(a.Z, { ratio: o.default.theme.aspectRatios.landscape }, n.createElement(i.Z, { style: m.mediaPreviewWrapper }, this._renderColumnWithIndices([0, 2], m.gutterRight), this._renderColumnWithIndices([1, 3])));
                }
                _renderColumnWithIndices(e, t) {
                    return n.createElement(i.Z, { style: [m.column, t] }, this._renderMediaAtIndex(e[0], m.gutterBottom), this._renderMediaAtIndex(e[1]));
                }
                _renderMediaAtIndex(e, t) {
                    const { editable: r, isActive: i, isInline: a, media: o, mixedMediaUploadsEnabled: s, onClickMedia: l, onEditMedia: d, onEditSensitiveWarning: p, onRemoveMedia: f, onSetMediaPreviewRef: g } = this.props,
                        y = o[e],
                        b = y.mediaMetadata?.altText,
                        v = y.mediaMetadata?.defaultAltText,
                        E = !!y.mediaMetadata?.sensitiveMediaWarning?.size,
                        _ = d?.(y.id),
                        S = l?.(y.id),
                        x = p?.(y.id),
                        w = _ && r && i,
                        C = w && E && !!x,
                        { containsOnlyImages: I, getDraggableIndex: Z } = this.props,
                        P = y.originalMediaFile?.isImage,
                        T = n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(h.Z, { "aria-label": b || v, enableGif: i, mediaItem: y, mixedMediaUploadsEnabled: s, onClick: S, onEdit: _, onEditSensitiveWarning: C ? x : void 0, onRemove: f(y.id), ref: g, role: "group", style: [m.mediaContainer, t], withAltTextLabel: !!b, withCloseButton: r && i, withDragAndDropIndicator: (Z || a) && P && I, withEditButton: w, withEditSensitiveWarningButton: C }),
                            (() => {
                                const e = y.mediaMetadata?.gifMetadata;
                                return e?.url && e?.provider && s ? n.createElement(c.Z, { gifUrl: e.url, provider: e.provider }) : null;
                            })(),
                        );
                    if (Z && P && I) {
                        const t = ["MediaPreview", y.id].join("-"),
                            r = 0 === e,
                            i = 3 === o.length,
                            a = r && i && !s ? "50%" : "100%";
                        return n.createElement(u._, { draggableId: t, flex: !0, index: Z(y.id), widthOverride: a }, T);
                    }
                    return T;
                }
            }
            p.contextType = d.rC;
            const m = o.default.create((e) => ({ container: { width: "100%" }, carousel: { height: "100%", width: "100%" }, carouselChild: { height: "100%", width: "50%", paddingRight: e.spaces.space8 }, column: { flexDirection: "column", flexGrow: 1, flexBasis: 0 }, fullSize: { height: "100%", width: "100%" }, gutterRight: { marginEnd: e.spaces.space12 }, gutterBottom: { marginBottom: e.spaces.space12 }, mediaContainer: { borderRadius: e.borderRadii.xLarge, transitionProperty: "width", transitionDuration: "0.1s", transitionTimingFunction: "ease-out", overflow: "hidden", flexGrow: 1, flexBasis: 0 }, mediaPreviewWrapper: { flexDirection: "row", height: "100%", width: "100%" }, mediaPreviewWrapperSingle: { flexDirection: "column", height: "100%", width: "100%" } }));
        },
        727186: (e, t, r) => {
            "use strict";
            r.d(t, { ZP: () => d });
            var n = r(807896),
                i = r(202784),
                a = r(325686),
                o = r(392237),
                s = r(386742);
            const l = o.default.create(() => ({ hidden: { opacity: 0 } })),
                d = (e) => {
                    const { children: t, disableInteractiveElementBlocking: r, draggableId: o, fromVirtualList: d, index: c, isBeingDragged: u, isDragDisabled: h, lockYAxis: p } = e;
                    return d && u
                        ? i.createElement(a.Z, { style: l.hidden }, t)
                        : i.createElement(s.lL, { disableInteractiveElementBlocking: r, draggableId: o, index: c, isDragDisabled: h }, (e) => {
                              const r = e.draggableProps.style,
                                  a = p
                                      ? ((e) => {
                                            if (e.transform) {
                                                const t = `translate(0px${e.transform.slice(e.transform.indexOf(","), e.transform.length)}`;
                                                return { ...e, transform: t };
                                            }
                                            return e;
                                        })(r)
                                      : r;
                              return i.createElement("div", (0, n.Z)({ ref: e.innerRef }, e.draggableProps, e.dragHandleProps, { style: a }), t);
                          });
                };
        },
        536790: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => u });
            r(571372), r(136728);
            var n = r(202784),
                i = r(301503),
                a = r(597496),
                o = r(339110),
                s = r(456910),
                l = r(230295),
                d = r(267446);
            class c extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = n.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: t, contextText: r, isInline: i, isInlineReply: s, onTypeaheadStateChange: l, source: d } = this.props,
                                { canShowTypeahead: c, queryContext: u } = this.state,
                                h = c && u ? { word: u.word, resultType: u.resultType } : void 0;
                            return n.createElement(a.H1, { composeCommunityId: t, contextText: r, isInline: i, isInlineReply: s, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: l, query: h, ref: this._genericWrapperRef, source: d || o._4.Compose }, e(this._handleInputChange));
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
                                const n = (0, d.k)(e, r.resultType);
                                t(this._replaceToken(n, r));
                            }
                            this._setQueryContext(void 0);
                        }),
                        (this._handleInputChange = (e) => {
                            if (!(0, l.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: t } = this.state,
                                    r = t && t.word,
                                    n = this._getPlaintextFromCurrentBlock(e),
                                    { end: i, start: a, word: o } = s.si(this._getCaret(e), n),
                                    l = s.bR(o || "", "compose");
                                if (l?.q === r) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === a)) this._setQueryContext(void 0);
                                else if (l) {
                                    const { q: t, result_type: r } = l;
                                    this._setQueryContext({ word: t, resultType: r, editorState: e, startIndex: a, endIndex: i });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, t) {
                    const { editorState: r, endIndex: n, startIndex: a } = t,
                        o = r.getSelection().merge({ anchorKey: r.getSelection().getFocusKey(), anchorOffset: a, focusOffset: n }),
                        s = i.Modifier.replaceText(r.getCurrentContent(), o, e),
                        l = i.EditorState.push(r, s, "insert-characters"),
                        d = a + e.length,
                        c = l.getSelection().merge({ anchorOffset: d, focusOffset: d });
                    return i.EditorState.forceSelection(l, c);
                }
            }
            const u = c;
        },
        959587: (e, t, r) => {
            "use strict";
            r.d(t, { AM: () => l, ZP: () => h, pX: () => d });
            var n = r(202784),
                i = r(731708),
                a = r(659651),
                o = r(392237),
                s = r(548721);
            const l = "animated_gif",
                d = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: r } = e;
                    let o;
                    if (r === l) o = n.createElement(i.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === r) o = n.createElement(s.default, { "aria-label": "Vine", style: u.icon });
                    else if (r === d && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            r = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        o = n.createElement(i.ZP, { color: "white" }, `${e}:${r}`);
                    }
                    return o ? n.createElement(a.Z, { align: "left" }, o) : null;
                },
                u = o.default.create((e) => ({ icon: { color: e.colors.white } })),
                h = n.memo(c);
        },
        490834: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => D });
            var n = r(202784),
                i = r(576648),
                a = r(811176),
                o = r(731708),
                s = r(530732),
                l = r(992942),
                d = r(392237),
                c = r(111677),
                u = r.n(c),
                h = r(630715),
                p = r(950822),
                m = r(138099),
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
                    const { cancelButtonLabel: e, description: t, headerText: r, link: i, onCancel: a } = this.props,
                        s = (0, p.Z)("input", { autoFocus: !0, onFocus: this._handleOnFocus, readOnly: !0, style: b.linkInput, value: i });
                    return n.createElement(m.Z, { onMaskClick: a, style: b.container, type: "center", withMask: !0 }, r && n.createElement(o.ZP, { align: "center", style: b.headerText, weight: "bold" }, r), t && n.createElement(o.ZP, { align: "center", color: "gray700", style: b.labelText }, t), s, n.createElement(f.ZP, { onPress: a, size: "xLarge", style: b.cancelButton, type: "brandText" }, e));
                }
            }
            y.defaultProps = { cancelButtonLabel: g };
            const b = d.default.create((e) => ({ container: { alignItems: "center", paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space12, position: "relative" }, headerText: { marginBottom: e.spaces.space16 }, labelText: { marginBottom: e.spaces.space16, width: "100%" }, linkInput: { backgroundColor: e.colors.gray0, borderColor: "transparent", color: e.colors.gray700, fontSize: e.fontSizes.body, marginBottom: e.spaces.space12, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space20 }, cancelButton: { width: "100%" } })),
                v = y,
                E = u().e05c00b4,
                _ = u().eabf2209,
                S = u().a613e720,
                x = u().f88553c8,
                w = { riffsy: "https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png", giphy: "https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png" };
            class C extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderMenu = (e) => n.createElement(a.Z, { items: [{ text: S, Icon: h.default, onClick: this._handleCopyGifLinkButtonClick }], onCloseRequested: e })),
                        (this._handleCopyGifLinkButtonClick = (e) => {
                            const { addToast: t, gifUrl: r } = this.props;
                            i.Z.isAvailable() ? (i.Z.setString(r), t({ text: x })) : this.setState({ showCopyLinkSheet: !0 }), e && e();
                        }),
                        (this._handleCopyLinkSheetCancel = () => {
                            this.setState({ showCopyLinkSheet: !1 });
                        }),
                        (this.state = { showCopyLinkSheet: !1 });
                }
                render() {
                    const { showCopyLinkSheet: e } = this.state,
                        { gifUrl: t, provider: r } = this.props,
                        { display_name: i, name: a } = r,
                        s = w[a];
                    return s ? n.createElement(n.Fragment, null, e ? n.createElement(v, { description: _({ providerName: i }), headerText: E, link: t, onCancel: this._handleCopyLinkSheetCancel }) : null, n.createElement(o.ZP, { align: "center", color: "gray700", style: [I.root, I.verticalAlign] }, n.createElement(u().I18NFormatMessage, { $i18n: "e2e6ea0d" }, this._renderAttribution(i, s)))) : null;
                }
                _renderAttribution(e, t) {
                    return n.createElement(s.Z, { interactiveStyles: null, renderMenu: this._renderMenu }, n.createElement(o.ZP, { style: I.verticalAlign, weight: "bold", withInteractiveStyling: !0 }, n.createElement(l.Z, { source: { uri: t }, style: I.image }), n.createElement(o.ZP, null, e.toUpperCase())));
                }
            }
            const I = d.default.create((e) => ({ button: { marginStart: e.spaces.space12 }, image: { display: "inline-block", height: e.spaces.space16, marginHorizontal: e.spaces.space4, width: e.spaces.space16 }, root: { marginHorizontal: e.spaces.space8 }, verticalAlign: { display: "flex", alignItems: "center", flexDirection: "row" }, alignLeft: { textAlign: "start" } })),
                Z = C;
            var P = r(668214),
                T = r(601576);
            const D = (0, P.Z)().propsFromActions(() => ({ addToast: T.fz }))(({ addToast: e, gifUrl: t, provider: r }) => n.createElement(Z, { addToast: e, gifUrl: t, provider: r }));
        },
        26232: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => b });
            var n = r(202784),
                i = r(555874),
                a = r(111677),
                o = r.n(a),
                s = r(290402),
                l = r(965245),
                d = r(71620),
                c = r(668214);
            const u = (e, t) => t.module.selectFetchStatus(e),
                h = (e, t) => t.module.selectItems(e),
                p = (0, c.Z)()
                    .propsFromState((e) => ({ fetchStatus: u, items: h }))
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, d.zr)("SLICES_TIMELINE"), fetch: e.fetch, fetchIfNeeded: e.fetchIfNeeded, fetchBottom: e.fetchBottom })),
                m = o().i9028824,
                f = (e) => e,
                g = (e) => (t) => e(t.item);
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { footer: e, items: t, noItemsRenderer: r, numColumns: a, onScrollEnd: o, renderer: s, withoutHeadroom: d } = this.props;
                            return !t || a < 1 ? null : 1 === a ? n.createElement(l.Z, { cacheKey: "sliceTimeline", footer: e, identityFunction: f, items: t, noItemsRenderer: r, onNearEnd: this._handleNearEnd, onScrollEnd: o, renderer: s, withoutHeadroom: d }) : n.createElement(i.Z, { ListEmptyComponent: r, data: t, keyExtractor: f, numColumns: a, renderItem: g(s) });
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
                    return t ? n.createElement(s.Z, { "aria-label": m, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render, retryMessage: r, retryable: !0 }) : null;
                }
            }
            y.defaultProps = { numColumns: 1, alwaysFetch: !1 };
            const b = p(y);
        },
        513313: (e, t, r) => {
            "use strict";
            r.d(t, { P: () => n });
            const n = Object.freeze({ Crop: "crop", AltText: "alt_text", SensitiveMedia: "sensitive_media", Subtitles: "subtitles", Trimmer: "trimmer" });
        },
        386742: (e, t, r) => {
            "use strict";
            r.d(t, { $p: () => c, Xi: () => o, _l: () => d, _y: () => s, bK: () => u, lL: () => l });
            var n = r(202784),
                i = r(523561),
                a = r(195560);
            const o = (0, i.Z)({ loader: () => Promise.all([r.e("ondemand.ReactBeautifulDnd-e96e9bea"), r.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(r.bind(r, 391426)), renderPlaceholder: (e, t) => n.createElement(a.Z, { hasError: e, onRetry: t }) }),
                s = o,
                l = (0, i.Z)({ noErrorBoundary: !0, loader: () => Promise.all([r.e("ondemand.ReactBeautifulDnd-e96e9bea"), r.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(r.bind(r, 797546)), renderPlaceholder: (e, t) => n.createElement(a.Z, { hasError: e, onRetry: t }) }),
                d = l,
                c = (0, i.Z)({ loader: () => Promise.all([r.e("ondemand.ReactBeautifulDnd-e96e9bea"), r.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(r.bind(r, 896830)), renderPlaceholder: (e, t) => n.createElement(a.Z, { hasError: e, onRetry: t }) }),
                u = c;
        },
        566220: (e, t, r) => {
            "use strict";
            r.d(t, { R: () => o });
            var n = r(202784);
            const i = () => new Date(),
                a = n.createContext(i),
                o = () => n.useContext(a);
        },
        481681: (e, t, r) => {
            "use strict";
            r.d(t, { Bp: () => i, NF: () => n, nO: () => a });
            const n = "send-tweet",
                i = "dismiss-composer",
                a = 4;
        },
        47743: (e, t, r) => {
            "use strict";
            r.d(t, { nO: () => n.nO, YT: () => y, yN: () => v, X2: () => E, FI: () => _ });
            var n = r(481681),
                i = r(205074);
            function a(e) {
                return (t) => t.some((t) => !!t && e(t));
            }
            const o = (e) => !!e.mediaFile?.isGif,
                s = (e) => !!e.externalMediaDetails,
                l = (e) => !!e.mediaFile?.isImage,
                d = (e) => !(!e.mediaFile?.isVideo || e.mediaFile instanceof i.ZP),
                c = a((e) => o(e) || l(e) || d(e) || s(e));
            a(o), a(l), a(d), a(s);
            n.nO;
            var u = r(175848),
                h = r(276563),
                p = r(166852),
                m = r(450681),
                f = r(575211),
                g = r(456910);
            const y = ({ excludeReplyUser: e, inReplyToStatus: t, viewerUserId: r }) => {
                    const { retweeted_status: n } = t,
                        { entities: i, unmentioned_user_ids: a, user: o } = n || t,
                        s = n ? n.user : {},
                        l = n ? t.user : {},
                        d = i?.user_mentions || [],
                        c = u.ZP.mergeTaggedUsers(i?.media || []),
                        h = b(n || t) || {},
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
                        y = (0, p.Z)((0, m.Z)([...g(s), ...g(l), o.id_str, ...d.flatMap((e) => g(e)), ...c.map((e) => e.user_id)])).filter((e) => e !== r);
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
                        const n = r.some((e) => !!e.externalMediaDetails),
                            a = !n && r.some((e) => e.mediaFile && e.mediaFile.isGif),
                            o = r.some((e) => e.mediaFile && !(e.mediaFile instanceof i.ZP) && e.mediaFile.isVideo);
                        if (a || n || o) return 1 === r.length;
                        {
                            const t = r.length <= e,
                                n = r.every((e) => e.mediaFile && e.mediaFile.isImage);
                            return t && n;
                        }
                    },
                E = (e, t = !1, r = n.nO) => v({ mixedMediaUploadEnabled: t, maxNumberOfMedia: r })(e),
                _ = (e, t = !1) => {
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
            r.d(t, { AD: () => n, Qy: () => a, _f: () => o, zH: () => i });
            const n = Object.freeze({ Composition: "composition", DMComposition: "dm_composition", NoteComposition: "note_composition" }),
                i = 500,
                a = (e) => Object.values(n).indexOf(e) >= 0,
                o = (e, t) => ("boolean" == typeof e ? e : t);
        },
        15038: (e, t, r) => {
            "use strict";
            r.d(t, { ZP: () => c });
            var n = r(202784),
                i = r(325686),
                a = r(950822),
                o = r(392237);
            const s = (e) => (0, a.Z)("div", e);
            class l extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._dragEnterCount = 0),
                        (this.state = { active: !1 }),
                        (this._handleDragDrop = (e) => {
                            const { onFilesAdded: t } = this.props;
                            e.preventDefault();
                            t(Array.from(e && e.dataTransfer.files)), this._updateDragCount(0);
                        }),
                        (this._handleDragEnter = (e) => {
                            const { onDragEnter: t } = this.props;
                            e.preventDefault(), t && t(), this._updateDragCount(this._dragEnterCount + 1);
                        }),
                        (this._handleDragLeave = (e) => {
                            e.preventDefault(), this._updateDragCount(this._dragEnterCount - 1);
                        }),
                        (this._handleDragOver = (e) => {
                            e.preventDefault();
                        });
                }
                render() {
                    const { activeStyle: e, allowDragDrop: t, children: r, style: a } = this.props,
                        { active: o } = this.state,
                        l = t ? d.dragBorderValid : d.dragBorderInvalid;
                    return n.createElement(s, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [d.root, a, o && l, o && e] }, n.createElement(i.Z, { style: d.inner }, "function" == typeof r ? r(o) : r));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            l.defaultProps = { allowDragDrop: !0 };
            const d = o.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                c = l;
        },
        779610: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => c });
            var n = r(202784),
                i = r(325686),
                a = r(191796),
                o = r(58399),
                s = r(731708),
                l = r(952428),
                d = r(392237);
            const c = (e) => {
                    const { decoration: t, description: r, disabled: c = !1, isActive: h = !1, label: p, link: m, onPress: f, paddingHorizontal: g, renderRightContent: y, role: b = "tab", styleOverride: v, testID: E = "pivot", thumbnail: _, thumbnailSize: S, withoutArrow: x = !1 } = e,
                        w = [u.thumbnailContainer, "medium" === S && u.thumbnailContainerMedium],
                        C = "string" == typeof p ? n.createElement(s.ZP, null, p) : p,
                        I = "object" == typeof m && m.external && !m.openInSameFrame,
                        Z = r ? ("string" == typeof r ? n.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${E}-description` }, r) : r) : null,
                        P = n.useMemo(() => ("space0" === g ? { paddingHorizontal: 0 } : { paddingHorizontal: g ? d.default.theme.spaces[g] : d.default.theme.componentDimensions.gutterHorizontal }), [g]);
                    return n.createElement(l.Z, { "aria-selected": "tab" === b ? h : null, disabled: c, link: c ? void 0 : m, onPress: f, role: b, style: [u.root, P, c && u.disabled, v], testID: E, withInteractiveStyling: !!m || !!f }, n.createElement(i.Z, { style: u.contentContainer }, _ ? n.createElement(i.Z, { style: w }, _) : null, n.createElement(i.Z, { style: u.content }, C, Z), y ? y() : null, (!m && !f) || c || x ? null : I ? n.createElement(a.default, { style: u.icon }) : n.createElement(o.default, { style: u.icon })), t);
                },
                u = d.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${d.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        466818: (e, t, r) => {
            "use strict";
            r.d(t, { ZP: () => y });
            var n = r(202784),
                i = r(325686),
                a = r(487552),
                o = r(302752),
                s = r(183806),
                l = r(731708),
                d = r(950822),
                c = r(224162),
                u = r(392237);
            const h = n.forwardRef((e, t) => (0, d.Z)("select", { ...e, ref: t })),
                p = (e) => (0, d.Z)("option", e);
            let m = 1;
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
                        (this._id = `SELECTOR_${m}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (m += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: t, errorText: r, hasError: d, helperText: m, options: f, style: y, testID: b, value: v, withEmptyOption: E } = this.props,
                        { isFocused: _ } = this.state,
                        S = l.ZP.getLanguage(),
                        x = void 0 === d ? !!r : d,
                        w = new Set();
                    r && w.add(this._errorID), e && w.add(e), m && w.add(this._helperID);
                    const C = w.size ? [...w].join(" ") : void 0;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(c.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === S ? u.default.theme.fontFamilies.japan : "rtl" === e || o.Z.isLocaleRTL(S) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return n.createElement(
                                i.Z,
                                { style: [s.Z.border, g.container, t && s.Z.disabled, _ && s.Z.focusedBorderValid, x && s.Z.invalidBorderColor, _ && x && s.Z.focusedBorderInvalid, y] },
                                this._renderLabel(),
                                n.createElement(
                                    h,
                                    { "aria-describedby": C, "aria-invalid": x, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [g.select, { fontFamily: l }, t && s.Z.disabled], testID: b || "", value: v },
                                    E ? n.createElement(p, { disabled: !0, style: g.option, value: "" }) : null,
                                    f.map((e) => {
                                        const { disabled: t, label: r, value: i } = e;
                                        return n.createElement(p, { disabled: t, key: `${r}-${i}`, style: g.option, value: i }, r);
                                    }),
                                ),
                                n.createElement(a.default, { style: [g.dropdownCaret, _ && s.Z.validColor, !(!d && !r) && s.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        x && r ? this._renderErrorText() : null,
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose.a93c561a.js.map
