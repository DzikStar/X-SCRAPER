(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.EmojiPicker"],
    {
        841280: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { default: () => je });
            var i = o(807896),
                s = o(202784),
                r = (o(136728), o(901951), o(928316)),
                n = o(214997),
                a = o(325686),
                c = o(161821),
                l = o(459679),
                h = o(301049),
                d = o(731708),
                u = o(154003),
                m = o(186879),
                p = o(424028),
                f = o(392237),
                g = o(763023),
                _ = o(466792),
                y = o(58881);
            const v = y.Z.generate({ backgroundColor: "transparent", color: f.default.theme.colors.primary });
            class S extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleClick = () => {
                            const { category: e, onClick: t } = this.props;
                            t(e);
                        }),
                        (this._handleKeyDown = (e) => {
                            const { key: t } = e,
                                { altKey: o, ctrlKey: i, metaKey: s } = e;
                            o || i || s || (t === h.Z.Enter && (this._handleClick(), e.preventDefault(), e.stopPropagation()));
                        });
                }
                render() {
                    const { icon: e, isActive: t, isDisabled: o } = this.props;
                    return s.createElement(_.Z, { disabled: o }, ({ isFocusedWithin: i, isHovered: r, isPressed: n }) => s.createElement(a.Z, { style: w.container }, s.createElement(a.Z, { "aria-disabled": o, onClick: this._handleClick, onKeyDown: i ? this._handleKeyDown : void 0, role: "button", style: [w.iconWrapper, r || t ? void 0 : w.faded, v.transitionStyle, r && v.hoverStyle, n && v.pressedStyle, i && v.focusedStyle] }, e), s.createElement(a.Z, { style: [w.border, t ? { backgroundColor: f.default.theme.colors.primary } : null] })));
                }
            }
            const w = f.default.create((e) => ({ container: { flex: 1 }, iconWrapper: { width: "100%", alignItems: "center", paddingVertical: e.spaces.space4, cursor: "pointer" }, border: { height: e.borderWidths.large, width: "100%", borderRadius: e.borderRadii.infinite }, faded: { filter: "grayscale(100%) contrast(80%)", opacity: 0.5 } })),
                k = S,
                C = { people: "😀", nature: "🐻", food: "🍔", activity: "⚽️", travel: "🚘", objects: "💡", symbols: "🔣", flags: "🚩", recent: "🕑" };
            class E extends s.PureComponent {
                render() {
                    const { activeCategory: e, categories: t, disableAll: o, onAnchorClick: i } = this.props;
                    return s.createElement(
                        a.Z,
                        { style: j.root },
                        t.map((t) => {
                            const { anchorless: r, emojis: n, id: a, name: c } = t,
                                l = (n && 0 === n.length) || o,
                                h = !!e && t.id === e.id;
                            return r ? null : s.createElement(k, { category: t, icon: this._getIcon(a, c), isActive: h, isDisabled: l, key: a, onClick: i });
                        }),
                    );
                }
                _getIcon(e, t) {
                    const { emojiData: o } = this.props,
                        i = o[C[e]];
                    return s.createElement(g.Z, { "aria-label": t, emoji: i });
                }
            }
            const j = f.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between" } })),
                R = E;
            var D = o(822240),
                T = o(457311),
                b = o(347522);
            class P extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleHover = () => {
                            const { emoji: e, onHover: t } = this.props;
                            t && t(e);
                        }),
                        (this._handleFocus = () => {
                            const { emoji: e, onFocus: t } = this.props;
                            t && t(e);
                        }),
                        (this._getBackgroundPositionStyle = () => {
                            const { emoji: e, spriteSheetColumns: t, spriteSheetRows: o } = this.props,
                                i = this.props.spritePosition || e.sprite_position,
                                s = 100 / (o - 1);
                            return `${(100 / (t - 1)) * i[0]}% ${s * i[1]}%`;
                        }),
                        (this._handleClick = () => {
                            const { emoji: e, onSelect: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { ariaDescendantId: e, emoji: t, emojiName: o, spriteUrl: i } = this.props,
                        r = { backgroundImage: `url(${i})`, backgroundPosition: this._getBackgroundPositionStyle(), backgroundSize: `${100 * this.props.spriteSheetColumns}% ${100 * this.props.spriteSheetRows}%` };
                    return s.createElement(_.Z, { onFocusRingGained: this._handleFocus, onHoverIn: this._handleHover }, ({ isFocused: i, isHovered: n, isPressed: c }) => s.createElement(a.Z, { "aria-label": o || t.name, "aria-selected": !!e, id: e, onClick: this._handleClick, role: "option", style: [Z.container, I.transitionStyle, n && I.hoverStyle, c && I.pressedStyle, (i || e) && I.focusedStyle] }, s.createElement(a.Z, { style: [r, Z.emoji] })));
                }
            }
            const I = y.Z.generate({ backgroundColor: f.default.theme.colors.transparent, color: f.default.theme.colors.gray700 }),
                Z = f.default.create((e) => ({ container: { alignItems: "center", borderRadius: e.borderRadii.small, boxSizing: "border-box", padding: b.u8.EmojiGutter }, emoji: { display: "inline-block", outlineStyle: "none", height: b.u8.EmojiHeight, width: b.u8.EmojiWidth } })),
                x = P;
            class F extends s.PureComponent {
                render() {
                    const { children: e, style: t, withTopBorder: o } = this.props;
                    return s.createElement(a.Z, { style: [H.root, o && H.topBorder, t] }, e);
                }
            }
            F.defaultProps = { withTopBorder: !1 };
            const H = f.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.borderColor, padding: e.spaces.space12 }, topBorder: { borderTopWidth: e.borderWidths.small } })),
                L = F;
            var M = o(166502),
                A = o(157130);
            class O extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._createDismissOnSelect = (e) => (t) => {
                            const { onSelect: o } = this.props;
                            e(), o && o(t);
                        }),
                        (this._getEmojisForActiveSkinTone = (e) => {
                            const { activeSkinTone: t, emoji: o, ...r } = this.props,
                                { codepoint: n } = t,
                                { skin_variations: a } = o,
                                c = [s.createElement(x, (0, i.Z)({}, r, { emoji: { ...o }, key: "none", onSelect: this._createDismissOnSelect(e), spritePosition: o.sprite_position }))];
                            for (const t in a)
                                if (n && t.indexOf(n) >= 0) {
                                    const { sprite_position: n, unified: l } = a[t];
                                    c.push(s.createElement(x, (0, i.Z)({}, r, { emoji: { ...o, text: l }, key: t, onSelect: this._createDismissOnSelect(e), spritePosition: n })));
                                }
                            return c;
                        }),
                        (this.renderEmojis = (e) => {
                            const t = (0, M.Z)(this._getEmojisForActiveSkinTone(e), 10);
                            return s.createElement(
                                a.Z,
                                { style: z.emojisContainer },
                                t.map((e, t) => s.createElement(a.Z, { key: t, style: z.row }, e)),
                            );
                        });
                }
                render() {
                    const { activeSkinTone: e, emoji: t, onSelect: o, ...r } = this.props;
                    return s.createElement(A.Z, { contentStyle: z.contentStyle, renderContent: this.renderEmojis, withArrow: !0 }, s.createElement(x, (0, i.Z)({}, r, { emoji: t, spritePosition: t.sprite_position })));
                }
            }
            const z = f.default.create((e) => ({ row: { flexDirection: "row" }, contentStyle: { minWidth: "100%" }, emojisContainer: { padding: e.spaces.space12 } })),
                B = O;
            var U = o(583841);
            const N = function (e) {
                    const { activeSkinTone: t, ...o } = e,
                        { emoji: r } = e,
                        { skin_variations: n } = r,
                        { codepoint: a } = t,
                        c = (0, U.XF)(n, a),
                        l = a && n && n[a];
                    return 0 !== c || l ? (1 === c && l ? s.createElement(x, (0, i.Z)({}, o, { spritePosition: l.sprite_position })) : s.createElement(B, (0, i.Z)({}, o, { activeSkinTone: t }))) : s.createElement(x, (0, i.Z)({}, o, { spritePosition: r.sprite_position }));
                },
                W = s.forwardRef(function (e, t) {
                    const [o, n] = s.useState(!0),
                        a = s.useRef({
                            containerRef: null,
                            intersectionObserver:
                                window.IntersectionObserver &&
                                new window.IntersectionObserver((e, t) => {
                                    const { intersectionObserver: o } = a.current;
                                    e.some((e) => e.isIntersecting) && o && (o.disconnect(), n(!1));
                                }),
                        });
                    s.useLayoutEffect(() => {
                        o && e.isActiveCategory && n(!1);
                    }, [o, e.isActiveCategory]),
                        s.useEffect(() => {
                            const { containerRef: e, intersectionObserver: t } = a.current;
                            e && t && t.observe(e);
                        }, [a.current.containerRef, a.current.intersectionObserver]);
                    const c = s.useMemo(
                        () => (e) => {
                            const o = r.findDOMNode(e);
                            o instanceof HTMLElement ? (a.current.containerRef = o) : (a.current.containerRef = null), "function" == typeof t && t(e);
                        },
                        [t],
                    );
                    return o ? s.createElement(K, (0, i.Z)({ ref: c }, e, { withPlaceholder: !0 })) : s.createElement(K, (0, i.Z)({}, e, { ref: t }));
                });
            class K extends s.PureComponent {
                constructor(e) {
                    super(e),
                        (this._top = 0),
                        (this._bottom = 0),
                        (this._renderEmptyState = () => {
                            const { notFoundHeader: e, notFoundMessage: t } = b.uiStrings;
                            return s.createElement(T.Z, { header: e, message: t });
                        }),
                        (this.updatePosition = () => {
                            const e = r.findDOMNode(this._containerRef.current),
                                t = e && e.parentNode;
                            if (e && e instanceof window.HTMLElement && t && t instanceof window.HTMLElement) {
                                const { height: o, top: i } = e.getBoundingClientRect(),
                                    { top: s } = t.getBoundingClientRect();
                                (this._top = i - s + t.scrollTop), (this._bottom = this._top + o);
                            }
                        }),
                        (this.getTop = () => this._top),
                        (this.getBottom = () => this._bottom),
                        (this.updateDisplay = (e) => {
                            const t = r.findDOMNode(this._containerRef.current);
                            t && t instanceof window.HTMLElement && t.style && (t.style.display = e ? "flex" : "none");
                        }),
                        (this._containerRef = s.createRef());
                }
                componentDidMount() {
                    this.updatePosition();
                }
                componentDidUpdate(e) {
                    e.emojiIDs !== this.props.emojiIDs && this.updatePosition();
                }
                render() {
                    const { emojiIDs: e, headerButton: t, name: o, onStickyHeaderRef: i, withEmptyState: r } = this.props,
                        n = e.length > 0 || r;
                    return s.createElement(a.Z, { key: o, ref: this._containerRef }, s.createElement(a.Z, { "aria-label": o, key: o, ref: this._containerRef, role: "group", style: n ? $.shown : $.hidden }, s.createElement(a.Z, { ref: i, style: $.headerContainer }, s.createElement(L, { style: $.headerSection, withTopBorder: !0 }, s.createElement(d.ZP, { size: "headline2", style: $.header, weight: "bold" }, o), t)), r ? this._renderEmptyState() : s.createElement(L, null, this._renderEmojis())));
                }
                _renderEmojis() {
                    const { emojiIDs: e, rowSize: t } = this.props,
                        o = Math.ceil(e.length / t),
                        i = (0, D.Z)(0, o);
                    return s.createElement(
                        a.Z,
                        { style: $.emojiGroup },
                        i.map((o) => {
                            const i = e.slice(o * t, (o + 1) * t);
                            return s.createElement(a.Z, { key: `emoji-row-${o}`, style: $.emojiRow }, this.props.withPlaceholder ? s.createElement(a.Z, { style: [$.rowItem, $.spacer] }) : this._renderRow(i));
                        }),
                    );
                }
                _renderRow(e) {
                    const { activeSkinTone: t, ariaDescendantId: o, data: r, focusedEmojiId: n, onEmojiFocus: c, onEmojiHover: l, onFocusedEmojiRef: h, onSelect: d, rowSize: u, spriteUrl: m } = this.props;
                    return (0, D.Z)(0, u).map((u) => {
                        const p = e[u];
                        if (!p) return s.createElement(a.Z, { key: `row-spacer-${u}`, style: $.rowItem }, s.createElement(a.Z, { style: $.spacer }));
                        const f = r.emojis[p.toLowerCase()];
                        if (!f) return null;
                        const g = !!f.skin_variations,
                            { spriteSheetColumns: _, spriteSheetRows: y } = r,
                            v = { ariaDescendantId: p === n ? o : void 0, emoji: f, onFocus: c, onHover: l, onSelect: d, spriteUrl: m, spriteSheetRows: y, spriteSheetColumns: _ };
                        return s.createElement(a.Z, { key: f.unified, ref: p === n ? h : void 0, style: $.rowItem }, g ? s.createElement(N, (0, i.Z)({}, v, { activeSkinTone: t })) : s.createElement(x, v));
                    });
                }
            }
            K.defaultProps = { headerButton: null, rowSize: b.c0, withEmptyState: !1 };
            const $ = f.default.create((e) => ({ emojiGroup: { flexDirection: "column", flexWrap: "wrap" }, emojiRow: { flexDirection: "row", justifyContent: "space-between" }, header: { paddingHorizontal: e.spaces.space4 }, headerSection: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, headerContainer: { position: "sticky", top: 0, zIndex: 1 }, hidden: { display: "none" }, shown: { display: "flex" }, rowItem: { flex: 1 }, spacer: { alignSelf: "center", margin: b.u8.EmojiGutter, height: b.u8.EmojiHeight, width: b.u8.EmojiWidth } }));
            var V = o(337637),
                G = o(7330),
                q = o(543718);
            class J {
                constructor(e, t, o) {
                    (this._categories = e), (this._rowSize = o), (this._emojis = t);
                }
                getInitialFocus() {
                    const e = (0, V.Z)(this._categories, (e) => e.emojis.length > 0);
                    return this.formatFocusParams(0, 0, this._categories[e]);
                }
                getCategoryById(e) {
                    const t = (0, V.Z)(this._categories, (t) => t.id === e);
                    return this._categories[t];
                }
                getPreviousCategory(e) {
                    if (e === b.WD.Search) return;
                    const t = (0, V.Z)(this._categories, (t) => t.id === e);
                    return (0, G.Z)(this._categories.slice(0, t), (e) => e.emojis.length > 0);
                }
                getNextCategory(e) {
                    if (e === b.WD.Search) return;
                    const t = (0, V.Z)(this._categories, (t) => t.id === e) + 1;
                    return (0, q.Z)(this._categories.slice(t, this._categories.length), (e) => e.emojis.length > 0);
                }
                getCategoryLastRow(e) {
                    const { length: t } = e.emojis;
                    return t < this._rowSize ? 0 : Math.ceil(t / this._rowSize) - 1;
                }
                getLastRowLength(e) {
                    const { length: t } = e.emojis;
                    return t ? t % this._rowSize || this._rowSize : 0;
                }
                formatFocusParams(e, t, o) {
                    const i = o.emojis[e * this._rowSize + t];
                    return { focusRow: e, focusCol: t, focusCategoryId: o.id, focusItem: i, previewEmoji: this._emojis[i] };
                }
                focusCategory(e) {
                    return this.formatFocusParams(0, 0, this.getCategoryById(e));
                }
                focusNextColumn({ focusCategoryId: e, focusCol: t, focusRow: o }) {
                    if (o < 0 || t < 0 || !e) return this.getInitialFocus();
                    let i = o,
                        s = t,
                        r = this.getCategoryById(e);
                    if (i * this._rowSize + s + 1 >= r.emojis.length) {
                        if (((r = this.getNextCategory(e)), !r)) return this.formatFocusParams(o, t, this.getCategoryById(e));
                        (i = 0), (s = 0);
                    } else (i += s === this._rowSize - 1 ? 1 : 0), (s = s === this._rowSize - 1 ? 0 : s + 1);
                    return this.formatFocusParams(i, s, r);
                }
                focusPreviousColumn({ focusCategoryId: e, focusCol: t, focusRow: o }) {
                    if (o < 0 || t < 0 || !e) return this.getInitialFocus();
                    let i = o,
                        s = t,
                        r = this.getCategoryById(e);
                    if (i * this._rowSize + s - 1 < 0) {
                        if (((r = this.getPreviousCategory(e)), !r)) return this.formatFocusParams(o, t, this.getCategoryById(e));
                        (i = this.getCategoryLastRow(r)), (s = this.getLastRowLength(r) - 1);
                    } else (i -= 0 === s ? 1 : 0), (s = 0 === s ? this._rowSize - 1 : s - 1);
                    return this.formatFocusParams(i, s, r);
                }
                focusNextRow({ focusCategoryId: e, focusCol: t, focusRow: o }) {
                    if (o < 0 || t < 0 || !e) return this.getInitialFocus();
                    let i = o,
                        s = t,
                        r = this.getCategoryById(e);
                    if (i * this._rowSize + s + this._rowSize >= r.emojis.length)
                        if (i < this.getCategoryLastRow(r)) (i += 1), (s = this.getLastRowLength(r) - 1);
                        else {
                            if (((r = this.getNextCategory(e)), !r)) return this.formatFocusParams(o, t, this.getCategoryById(e));
                            (i = 0), (s = Math.min(s, r.emojis.length - 1));
                        }
                    else i += 1;
                    return this.formatFocusParams(i, s, r);
                }
                focusPreviousRow({ focusCategoryId: e, focusCol: t, focusRow: o }) {
                    if (o < 0 || t < 0 || !e) return this.getInitialFocus();
                    let i = o,
                        s = t,
                        r = this.getCategoryById(e);
                    if (i * this._rowSize + s - this._rowSize < 0) {
                        if (((r = this.getPreviousCategory(e)), !r)) return this.formatFocusParams(o, t, this.getCategoryById(e));
                        (i = this.getCategoryLastRow(r)), (s = Math.min(s, this.getLastRowLength(r) - 1));
                    } else i -= 1;
                    return this.formatFocusParams(i, s, r);
                }
            }
            var X = o(956272),
                Y = o(516951),
                Q = o(666536),
                ee = o(371344),
                te = o(166852);
            function oe(e, t) {
                const o = [...t];
                let i = 0,
                    s = e;
                for (; i < o.length; ) {
                    const e = s.children[o[i]];
                    if (!e) break;
                    (i += 1), (s = e);
                }
                return { node: s, tail: o.slice(i) };
            }
            function ie(e, t, o) {
                const { node: i, tail: s } = oe(e, t);
                let r = i;
                s.forEach((e, t) => {
                    const o = { results: [], children: {} };
                    (r.children[e] = o), (r = o);
                }),
                    r.results ? r.results.push(o) : (r.results = [o]);
            }
            function se(e, t) {
                const { node: o, tail: i } = oe(e, t);
                if (!o || i.length > 0) return [];
                const s = [];
                return (
                    (function e(t) {
                        t.results.length && s.push(...t.results), (0, c.Z)(t.children).forEach((t) => e(t));
                    })(o),
                    (0, te.Z)(s)
                );
            }
            const re = (e, t) => {
                    const o = (0, te.Z)(e),
                        i = (0, te.Z)(t);
                    return o.filter((e) => i.indexOf(e) >= 0);
                },
                ne = class {
                    constructor(e) {
                        (this._getRelevantEmojis = (e, t) => {
                            const o = {};
                            for (const i in e) {
                                const s = e[i],
                                    { search: r } = s;
                                -1 !== r.indexOf(t) && (o[i] = s);
                            }
                            return o;
                        }),
                            (this._insertEmojisToTrie = (e, t, o) => {
                                for (const i in e) {
                                    ie(o, t, e[i]);
                                }
                            }),
                            (this._data = e),
                            (this._index = { results: [], children: {} }),
                            (this._originalEmojis = this._data.emojis);
                    }
                    search(e, t) {
                        const o = t && t.maxResults ? t.maxResults : 75;
                        let i = [];
                        const s = this._originalEmojis,
                            r = this._index;
                        if (e.length) {
                            let t = e.toLowerCase().split(/[\s|,|\-|_]+/);
                            t = t.slice(0, 2);
                            const o = t
                                .map((e) => {
                                    let t = [];
                                    const o = se(r, e),
                                        i = this._getRelevantEmojis(s, e),
                                        n = ((e, t) => {
                                            const o = {};
                                            for (const i in e)
                                                if (t === i) o[i] = 0;
                                                else {
                                                    const { search: s } = e[i],
                                                        r = s.split(","),
                                                        n = (0, V.Z)(r, (e) => e === t),
                                                        a = -1 !== n ? n : s.indexOf(t) + 1;
                                                    -1 !== a && (o[i] = a + 1);
                                                }
                                            return o;
                                        })(i, e);
                                    return 0 === o.length ? (this._insertEmojisToTrie(i, e, r), (t = se(r, e))) : (t = o), t.sort((e, t) => n[e.id] - n[t.id]), t;
                                })
                                .filter((e) => !!e);
                            i = o.length > 1 ? re(...o) : o.length ? o[0] : [];
                        }
                        return i.length > o && (i = i.slice(0, o)), i;
                    }
                },
                ae = s.forwardRef((e, t) => {
                    const { autoFocus: o = !1, maxResults: i = 75, onSearch: r = Y.Z, data: n, ariaActiveDescendant: c, categoriesDomId: l } = e,
                        h = s.useState("")[1],
                        d = s.useMemo(() => new ne(n), [n]),
                        u = s.useMemo(
                            () =>
                                (0, Q.Z)(function (e) {
                                    const t = d.search(e, { maxResults: i });
                                    r(e, t);
                                }, 100),
                            [d, i, r],
                        ),
                        m = s.useCallback(
                            (e) => {
                                const t = (e.target && e.target.value) || "";
                                h(t), u(t);
                            },
                            [h, u],
                        ),
                        p = s.useCallback(() => {
                            h(""), u("");
                        }, [h, u]);
                    return s.createElement(a.Z, { role: "combobox" }, s.createElement(ee.Z, { Icon: X.default, ariaActiveDescendant: c, ariaControls: l, ariaExpanded: !0, ariaLabel: b.uiStrings.search, autoFocus: o, leftAligned: !0, onChange: m, onClear: p, placeholder: b.uiStrings.search, ref: t, style: ce.fieldTextInput, styleType: "pill", withClearButton: !0 }));
                }),
                ce = f.default.create((e) => ({ fieldTextInput: { margin: e.spaces.space4 } })),
                le = s.memo(ae);
            var he = o(913973);
            class de extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleFocus = () => {
                            const { onFocus: e, skinTone: t } = this.props;
                            e && e(t);
                        }),
                        (this._handleFocusLost = () => {
                            const { onFocusLost: e, skinTone: t } = this.props;
                            e && e(t);
                        }),
                        (this._handleHover = () => {
                            const { onHover: e, skinTone: t } = this.props;
                            e && e(t);
                        }),
                        (this._handleHoverLeave = () => {
                            const { onHoverLeave: e, skinTone: t } = this.props;
                            e && e(t);
                        }),
                        (this._handleClick = () => {
                            const { onSelect: e, skinTone: t } = this.props;
                            e && e(t);
                        }),
                        (this._handleKeyDown = (e) => {
                            const { key: t } = e,
                                { altKey: o, ctrlKey: i, metaKey: s } = e;
                            o || i || s || (t === h.Z.Enter && (this._handleClick(), e.preventDefault(), e.stopPropagation()));
                        });
                }
                render() {
                    const { "aria-label": e, isSelected: t, role: o, skinTone: i, style: r } = this.props,
                        n = y.Z.generate({ backgroundColor: i.color, color: f.default.theme.colors.white });
                    return s.createElement(_.Z, { onFocusRingGained: this._handleFocus, onFocusRingLost: this._handleFocusLost, onHoverIn: this._handleHover, onHoverOut: this._handleHoverLeave }, ({ isFocused: c, isHovered: l, isPressed: h }) => s.createElement(a.Z, { "aria-checked": !!t, "aria-label": e, focusable: !0, onClick: this._handleClick, onKeyDown: c ? this._handleKeyDown : void 0, role: o || "button", style: r }, s.createElement(a.Z, { style: [ue.root, { backgroundColor: i.color }, n.transitionStyle, (l || c) && n.focusedStyle, (h || t) && ue.selected] }, t ? s.createElement(he.default, { style: ue.checkmarkIcon }) : null)));
                }
            }
            const ue = f.default.create((e) => ({ outer: { paddingStart: e.spaces.space4 }, root: { alignItems: "center", justifyContent: "center", height: "1.25em", width: "1.25em", borderRadius: e.borderRadii.infinite }, selected: { boxShadow: `0 0 0 ${e.borderWidths.medium} ${e.colors.primary}` }, checkmarkIcon: { height: "1em", width: "1em", color: e.colors.cellBackground } })),
                me = de;
            class pe extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showPalette: !1, focusedOption: void 0, hoveredOption: void 0 }),
                        (this._renderPalette = () => {
                            const { activeSkinTone: e } = this.props;
                            return s.createElement(
                                a.Z,
                                { role: "radiogroup", style: fe.palette },
                                (0, c.Z)(b.Zx).map((t) => {
                                    const o = t === e;
                                    return s.createElement(me, { "aria-label": t.name, isSelected: o, key: t.id, onFocus: this._handleSkinToneFocus, onFocusLost: this._handleSkinToneFocusLost, onHover: this._handleSkinToneHover, onHoverLeave: this._handleSkinToneHoverLeave, onSelect: this._handleSkinToneSelectionClick, role: "radio", skinTone: t, style: fe.skinToneOption });
                                }),
                            );
                        }),
                        (this._renderCurrentSkinTone = () => {
                            const { activeSkinTone: e } = this.props;
                            return s.createElement(me, { "aria-label": b.uiStrings.skintext, isSelected: !0, onSelect: this._handleShowPaletteClick, skinTone: e });
                        }),
                        (this._handleShowPaletteClick = () => {
                            this.setState({ showPalette: !0 });
                        }),
                        (this._handleSkinToneSelectionClick = (e) => {
                            this.setState({ showPalette: !1 }), this.props.onSelect(e);
                        }),
                        (this._handleSkinToneHover = (e) => {
                            this.setState({ hoveredOption: e }, this._handlePreview);
                        }),
                        (this._handleSkinToneHoverLeave = (e) => {
                            this.setState({ hoveredOption: void 0 }, this._handlePreview);
                        }),
                        (this._handleSkinToneFocus = (e) => {
                            this.setState({ focusedOption: e }, this._handlePreview);
                        }),
                        (this._handleSkinToneFocusLost = (e) => {
                            this.setState({ focusedOption: void 0 }, this._handlePreview);
                        }),
                        (this._handlePreview = () => {
                            const { onPreview: e } = this.props;
                            e && e(this.state.hoveredOption || this.state.focusedOption);
                        });
                }
                render() {
                    const { showPalette: e } = this.state,
                        { style: t } = this.props;
                    return s.createElement(a.Z, { style: t }, e ? this._renderPalette() : this._renderCurrentSkinTone());
                }
            }
            const fe = f.default.create((e) => ({ palette: { flexDirection: "row" }, skinToneOption: { paddingHorizontal: e.spaces.space2 } })),
                ge = pe;
            var _e = o(948729);
            const ye = "emojiPicker2",
                ve = [b.WD.Search, b.WD.Recent],
                Se = "emoji_picker_categories_dom_id";
            class we extends s.PureComponent {
                constructor(e) {
                    super(e),
                        (this._categoryRefs = {}),
                        (this._scrollRef = s.createRef()),
                        (this._searchRef = s.createRef()),
                        (this._selectedEmojis = []),
                        (this._shouldScrollToFocusedItem = !0),
                        (this._shouldUpdateScrollPosition = !1),
                        (this._renderAnchors = (e) => {
                            const { activeCategory: t, query: o } = this.state;
                            return s.createElement(R, { activeCategory: o ? void 0 : t, categories: e, disableAll: !!o, emojiData: this._uncompressedData.emojis, onAnchorClick: this._handleAnchorClick });
                        }),
                        (this._renderSearch = () => s.createElement(le, { ariaActiveDescendant: this.state.ariaDescendantId, autoFocus: !0, categoriesDomId: Se, data: this._uncompressedData, onSearch: this._handleSearch, ref: this._searchRef })),
                        (this._renderCategories = (e) => {
                            const { rowSize: t, spriteUrl: o } = this.props,
                                { activeCategory: r, activeSkinTone: a, ariaDescendantId: c, focusCategoryId: l, focusItem: h, query: d } = this.state;
                            return s.createElement(
                                n.Z,
                                { id: Se, onMouseLeave: this._handleClearPreview, onScroll: this._handleScroll, ref: this._scrollRef, role: "listbox", scrollEventThrottle: 100, style: ke.categoriesContainer },
                                e.map((e, n) => {
                                    const m = l === e.id,
                                        p = r && r.id === e.id,
                                        f = { activeSkinTone: a, ariaDescendantId: m ? c : void 0, data: this._uncompressedData, emojiIDs: e.emojis, focusedEmojiId: m ? h : void 0, id: e.id, isActiveCategory: p, name: e.name, onEmojiFocus: this._handleEmojiPreview, onEmojiHover: this._handleEmojiPreview, onFocusedEmojiRef: m ? this._handleFocusedItemRef : void 0, onSelect: this._handleSelect, onStickyHeaderRef: p ? this._handleStickyHeaderRef : void 0, rowSize: t, spriteUrl: o };
                                    return e.id === b.WD.Recent && (f.headerButton = s.createElement(u.ZP, { "aria-label": b.uiStrings.clear, onPress: this._handleClearRecent, size: "xSmall", type: "brandText" }, b.uiStrings.clear)), e.id === b.WD.Search && (f.withEmptyState = !e.emojis.length && !!d), s.createElement(W, (0, i.Z)({}, f, { key: e.name, ref: this._setCategoryRef(`category-${e.id}`) }));
                                }),
                            );
                        }),
                        (this._scrollEmojiIntoViewIfNeeded = () => {
                            this._shouldScrollToFocusedItem && this._focusedItemRef && ((0, U.up)(this._getScrollParent(), this._focusedItemRef, this._getStickyHeaderOffset()), (this._shouldScrollToFocusedItem = !1));
                        }),
                        (this._handleStickyHeaderRef = (e) => {
                            (this._stickyHeaderRef = e), (this._stickyHeaderHeight = void 0), (this._shouldScrollToFocusedItem = !0);
                        }),
                        (this._handleFocusedItemRef = (e) => {
                            (this._focusedItemRef = e), this._scrollEmojiIntoViewIfNeeded();
                        }),
                        (this._getStickyHeaderOffset = () => {
                            if (void 0 === this._stickyHeaderHeight) {
                                const e = this._stickyHeaderRef;
                                if (e) {
                                    const { height: t } = e.getBoundingClientRect();
                                    this._stickyHeaderHeight = t;
                                }
                            }
                            return this._stickyHeaderHeight || 0;
                        }),
                        (this._handleSkinToneSelect = (e) => {
                            this.setState({ activeSkinTone: e, previewSkinTone: void 0, withDescription: !0 }), this._focusSearch();
                        }),
                        (this._handleSkinTonePreview = (e) => {
                            this.setState({ previewSkinTone: e, withDescription: !1 });
                        }),
                        (this._renderPreview = () => {
                            const { activeSkinTone: e, previewEmoji: t, previewSkinTone: o } = this.state,
                                i = t || this._defaultPreviewEmoji,
                                r = o || e;
                            return s.createElement(u.ZP, { "aria-label": i.name, icon: s.createElement(g.Z, { emoji: i, skinTone: r, style: ke.twemoji }), onClick: this._handlePreviewClick, type: "brandText" });
                        }),
                        (this._handlePreviewClick = () => {
                            const { previewEmoji: e } = this.state,
                                t = e || this._defaultPreviewEmoji;
                            this._handleSelect(t);
                        }),
                        (this._renderEmojiDescription = () => {
                            const { previewEmoji: e } = this.state;
                            return e ? s.createElement(d.ZP, { align: "left", color: "gray700", numberOfLines: 1, size: "subtext2", style: ke.emojiDescription }, e.name) : null;
                        }),
                        (this._renderFooter = () => {
                            const { withDescription: e } = this.state;
                            return s.createElement(a.Z, { style: ke.footer }, this._renderPreview(), e ? this._renderEmojiDescription() : null, s.createElement(ge, { activeSkinTone: this.state.activeSkinTone, onPreview: this._handleSkinTonePreview, onSelect: this._handleSkinToneSelect, style: ke.skinTonePicker }));
                        }),
                        (this._setCategoryRef = (e) => (t) => {
                            t && (this._categoryRefs[e] = t);
                        }),
                        (this._handleKeyDown = (e) => {
                            const { key: t } = e,
                                { altKey: o, ctrlKey: i, metaKey: s } = e,
                                { focusCategoryId: r, focusCol: n, focusItem: a, focusRow: c } = this.state,
                                l = { focusRow: c, focusCol: n, focusCategoryId: r };
                            if (!(o || i || s)) return t === h.Z.ArrowDown ? (this._updateFocus(this._focusHelper.focusNextRow(l)), void e.preventDefault()) : t === h.Z.ArrowUp ? (this._updateFocus(this._focusHelper.focusPreviousRow(l)), void e.preventDefault()) : t === h.Z.ArrowRight ? (this._updateFocus(this._focusHelper.focusNextColumn(l)), void e.preventDefault()) : t === h.Z.ArrowLeft ? (this._updateFocus(this._focusHelper.focusPreviousColumn(l)), void e.preventDefault()) : t === h.Z.Enter && a ? (this._handleSelect(this._uncompressedData.emojis[a]), void e.preventDefault()) : void 0;
                        }),
                        (this._updateFocus = (e) => {
                            const { ariaDescendantId: t, focusItem: o } = this.state,
                                i = o !== e.focusItem;
                            (this._shouldScrollToFocusedItem = i), this.setState({ ...e, ariaDescendantId: i ? (0, U.A1)() : t });
                        }),
                        (this._handleScroll = () => {
                            this._updateActiveCategory();
                        }),
                        (this._handleSearch = (e, t) => {
                            const o = t ? t.map((e) => e.unified) : [];
                            (0, c.Z)(this._categoryRefs).forEach((t) => {
                                t && "search" !== t.props.id && t.updateDisplay(!e);
                            }),
                                this.setState({ searchResults: o, query: e }),
                                this._scrollTo(0);
                        }),
                        (this._handleSelect = (e) => {
                            const { onSelect: t } = this.props,
                                { activeSkinTone: o } = this.state,
                                i = (0, U.Nw)(e, o);
                            t && t(i);
                            const s = [];
                            for (let t = this._selectedEmojis.length; t >= 0; t--) {
                                const o = t === this._selectedEmojis.length ? e.unified : this._selectedEmojis[t];
                                s.indexOf(o) < 0 && s.push(o);
                            }
                            this._selectedEmojis = s.reverse();
                        }),
                        (this._handleClearRecent = (e) => {
                            (this._selectedEmojis = []),
                                this.setState({ recentlyUsed: [], activeCategory: this._staticCategories()[0] }, () => {
                                    this._shouldUpdateScrollPosition = !0;
                                });
                        }),
                        (this._getActiveCategory = () => {
                            const e = this._scrollRef.current && r.findDOMNode(this._scrollRef.current);
                            let t = this.state.activeCategory;
                            if (e && e instanceof window.HTMLElement) {
                                const { scrollTop: o } = e;
                                for (let e = 0; e < this._categories.length; e++) {
                                    const i = this._categories[e],
                                        s = this._categoryRefs[`category-${i.id}`];
                                    if (s && o >= s.getTop() && o < s.getBottom()) {
                                        t = i;
                                        break;
                                    }
                                }
                            }
                            return t;
                        }),
                        (this._updateActiveCategory = () => {
                            const e = this._getActiveCategory();
                            e !== this.state.activeCategory && this.setState({ activeCategory: e });
                        }),
                        (this._getUpdatedRecentlyUsedEmojiList = () => {
                            const { recentlyUsed: e } = this.state,
                                { rowSize: t } = this.props;
                            if (0 === this._selectedEmojis.length) return e;
                            const o = -2 * t;
                            return [...e.filter((e) => this._selectedEmojis.indexOf(e) < 0), ...this._selectedEmojis].slice(o);
                        }),
                        (this._handleClearPreview = () => {
                            this.state.previewEmoji && this.setState({ previewEmoji: void 0 });
                        }),
                        (this._handleEmojiPreview = (e) => {
                            e !== this.state.previewEmoji && this.setState({ previewEmoji: e });
                        }),
                        (this._handleAnchorClick = (e) => {
                            this._shouldUpdateScrollPosition && ((this._shouldUpdateScrollPosition = !1), (0, c.Z)(this._categoryRefs).forEach((e) => e.updatePosition()));
                            const t = this._categoryRefs[`category-${e.id}`];
                            0 !== e.emojis.length && (this.setState({ activeCategory: e }), t && this._scrollTo(t.getTop() + 1), this.state.focusItem && this._updateFocus(this._focusHelper.focusCategory(e.id))), this._focusSearch();
                        }),
                        (this._focusSearch = () => {
                            this._searchRef.current && this._searchRef.current.focus();
                        }),
                        (this._scrollTo = (e) => {
                            this._scrollRef.current && this._scrollRef.current.scrollTo({ y: e, animated: !1 });
                        }),
                        (this._staticCategories = () => this._categories.filter((e) => -1 === ve.indexOf(e.id)));
                    const { emojiInfo: t } = this.props;
                    (this._uncompressedData = (0, _e.W)(t || {})), (this._categories = this._uncompressedData.categories), (this._searchCategoryInitialValue = { anchorless: !0, id: b.WD.Search, name: b.uiStrings.searchCategoryName, emojis: [] }), (this._recentlyUsedCategoryInitialValue = { id: b.WD.Recent, name: b.uiStrings.recentCategoryName, emojis: [] }), (this._defaultPreviewEmoji = this._uncompressedData.emojis[this.props.previewEmojiCodepoint]), this._categories.unshift(this._recentlyUsedCategoryInitialValue), (this._focusHelper = new J(this._categories, this._uncompressedData.emojis, e.rowSize)), (this.state = { activeCategory: this._categories[1], activeSkinTone: b.Zx[e.defaultSkinTone], ariaDescendantId: (0, U.A1)(), categories: [this._searchCategoryInitialValue, ...this._categories], focusRow: -1, focusCol: -1, recentlyUsed: [], previewSkinTone: void 0, query: "", searchResults: [], withDescription: !0 });
                }
                componentWillUnmount() {
                    m.ZP.set(ye, { recentlyUsed: this._getUpdatedRecentlyUsedEmojiList(), activeSkinToneId: this.state.activeSkinTone.id });
                }
                componentDidMount() {
                    m.ZP.get(ye).then((e) => {
                        if (e && "object" == typeof e) {
                            const { recentlyUsed: t = [], activeSkinToneId: o } = e,
                                i = "string" == typeof o && b.Zx[o],
                                s = { recentlyUsed: Array.isArray(t) ? (0, l.Z)(t, (e) => ("string" == typeof e ? e : void 0)) : [], activeCategory: this._categories[1], ...(i ? { activeSkinTone: i } : {}) };
                            this.setState(s), (this._shouldUpdateScrollPosition = !0);
                        }
                    });
                }
                componentDidUpdate(e, t) {
                    const { categories: o, recentlyUsed: i, searchResults: s } = this.state,
                        { rowSize: r } = this.props;
                    if (t.searchResults !== s || t.recentlyUsed !== i) {
                        const e = { ...this._searchCategoryInitialValue, emojis: s },
                            t = { ...this._recentlyUsedCategoryInitialValue, emojis: i.length ? [...i].reverse() : [] };
                        this.setState({ activeCategory: this._getActiveCategory(), categories: [e, t].concat(this._staticCategories()), focusCategoryId: void 0, focusCol: -1, focusRow: -1, focusItem: void 0 });
                    }
                    (t.categories === o && e.rowSize === r) || (this._focusHelper = new J(o, this._uncompressedData.emojis, r));
                }
                _getScrollParent() {
                    if (!this._scrollParent) {
                        const e = r.findDOMNode(this._scrollRef.current);
                        this._scrollParent = e instanceof window.Element ? e : void 0;
                    }
                    return this._scrollParent;
                }
                render() {
                    const { partialRender: e } = this.props,
                        { recentlyUsed: t, searchResults: o } = this.state,
                        i = { ...this._searchCategoryInitialValue, emojis: o },
                        r = { ...this._recentlyUsedCategoryInitialValue, emojis: t.length ? [...t].reverse() : [] },
                        n = this._staticCategories(),
                        a = [i, r].concat(n),
                        c = [i, r, n[0]];
                    return s.createElement(p.Z, { onKeyDown: this._handleKeyDown, style: ke.root }, s.createElement(L, { style: ke.searchSection }, this._renderSearch()), s.createElement(L, { style: ke.anchorsSection }, this._renderAnchors(a)), this._renderCategories(e ? c : a), s.createElement(L, { style: ke.footerContainer, withTopBorder: !0 }, this._renderFooter()));
                }
            }
            we.defaultProps = { defaultSkinTone: b.wN.None, partialRender: !1, previewEmojiCodepoint: "👋", rowSize: b.c0 };
            const ke = f.default.create((e) => ({ root: { flexShrink: 1, flexGrow: 1 }, categoriesContainer: { flexShrink: 1, overflowY: "auto" }, searchSection: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge, padding: 0 }, anchorsSection: { padding: 0, marginTop: e.spaces.space4 }, footer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }, footerContainer: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge }, emojiDescription: { paddingHorizontal: e.spaces.space12, maxWidth: "180px", flex: 1 }, twemoji: { height: "2em", width: "2em" }, skinTonePicker: { marginHorizontal: e.spaces.space12 } })),
                Ce = we;
            var Ee = o(822946);
            function je(e) {
                return s.createElement(Ce, (0, i.Z)({}, e, { emojiInfo: Ee.default }));
            }
        },
        763023: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => l });
            var i = o(202784),
                s = o(992942),
                r = o(392237),
                n = o(347522),
                a = o(583841);
            const c = r.default.create((e) => ({ root: { height: n.u8.EmojiHeight, width: n.u8.EmojiWidth } })),
                l = function ({ "aria-label": e, emoji: t, skinTone: o, style: r }) {
                    const n = (0, a.al)(t, o);
                    return n ? i.createElement(s.Z, { alt: t.name, "aria-label": e, draggable: !1, resizeMode: "stretch", source: n, style: [c.root, r] }) : null;
                };
        },
        347522: (e, t, o) => {
            "use strict";
            o.d(t, { WD: () => d, Zx: () => c, c0: () => u, u8: () => h, uiStrings: () => l, wN: () => n });
            var i = o(674132),
                s = o.n(i),
                r = o(392237);
            const n = { None: "none", Light: "light", MediumLight: "medium-light", Medium: "medium", MediumDark: "medium-dark", Dark: "dark" },
                a = { [n.Light]: "1f3fb", [n.MediumLight]: "1f3fc", [n.Medium]: "1f3fd", [n.MediumDark]: "1f3fe", [n.Dark]: "1f3ff" },
                c = { [n.None]: { id: n.None, name: s().ff3dd27c, color: "#FFDC5D" }, [n.Light]: { codepoint: a[n.Light], id: n.Light, name: s().b554fcf4, color: "#F7DECE" }, [n.MediumLight]: { codepoint: a[n.MediumLight], id: n.MediumLight, name: s().j590b148, color: "#F3D2A2" }, [n.Medium]: { codepoint: a[n.Medium], id: n.Medium, name: s().e7d4ee86, color: "#D5AB88" }, [n.MediumDark]: { codepoint: a[n.MediumDark], id: n.MediumDark, name: s().ia423ebc, color: "#AF7E57" }, [n.Dark]: { codepoint: a[n.Dark], id: n.Dark, name: s().a2cf0942, color: "#7C533E" } },
                l = { search: s().j824dc06, notFoundHeader: s().fffb3384, notFoundMessage: s().j3d20752, skintext: s().d67ad796, clear: s().e6388bfa, recentCategoryName: s().j7c67eca, searchCategoryName: s().da539d38 },
                h = { EmojiWidth: r.default.theme.spaces.space20, EmojiHeight: r.default.theme.spaces.space20, EmojiGutter: r.default.theme.spaces.space4 },
                d = { Search: "search", Recent: "recent", People: "people", Nature: "nature", Foods: "foods", Activity: "activity", Places: "places", Objects: "objects", Symbols: "symbols", Flags: "flags", Custom: "custom" },
                u = 9;
        },
        948729: (e, t, o) => {
            "use strict";
            o.d(t, { W: () => c });
            o(136728);
            var i = o(697926);
            const s = { name: "a", keywords: "j", sprite_position: "k", skin_variations: "l" },
                r = { unified: "key", skin_tone: "d", sprite_position: "k" },
                n = (e) => {
                    const t = [],
                        o = (e, o) => {
                            e &&
                                (Array.isArray(e) ? e : [e]).forEach((e) => {
                                    (o ? e.split(/[-|_|\s]+/) : [e]).forEach((e) => {
                                        const o = e.toLowerCase();
                                        -1 === t.indexOf(o) && t.push(o);
                                    });
                                });
                        };
                    return o(e.short_names, !0), o(e.name, !0), o(e.keywords, !1), t.join(",");
                },
                a = (e, t) => {
                    for (const o in t) (e[o] = e[t[o]]), delete e[t[o]];
                },
                c = (e) => {
                    const t = JSON.parse(JSON.stringify(e));
                    t.compressed = !1;
                    for (const e in t.emojis) {
                        const o = t.emojis[e];
                        a(o, s),
                            (o.id = e),
                            (o.unified = e),
                            (o.short_names = [e]),
                            o.text || (o.text = ""),
                            (o.search = n(o)),
                            o.skin_variations &&
                                (o.skin_variations.forEach((e) => {
                                    a(e, r);
                                }),
                                (o.skin_variations = (0, i.Z)(o.skin_variations, (e) => {
                                    const { skin_tone: t } = e;
                                    let o = t[0];
                                    for (let e = 1; e < t.length; e++) o += `+${t[e]}`;
                                    return o;
                                })));
                    }
                    return t;
                };
        },
        583841: (e, t, o) => {
            "use strict";
            o.d(t, { A1: () => c, Nw: () => a, XF: () => r, al: () => n, up: () => l });
            var i = o(899492);
            const s = (e, t) => {
                    const o = t && t.codepoint;
                    if (!(o && r(e.skin_variations, o) > 1)) return o && e.skin_variations && e.skin_variations[o] ? e.skin_variations[o] : void 0;
                },
                r = (e = {}, t) => {
                    let o = 0;
                    for (const i in e) t && i.indexOf(t) >= 0 && (o += 1);
                    return o;
                },
                n = (e, t) => {
                    const o = (s(e, t) || e).unified;
                    return i.Z.getTwemojiUrl(o);
                },
                a = (e, t) => {
                    const { name: o, short_names: i, text: r } = e,
                        n = s(e, t),
                        a = n ? n.unified : e.unified;
                    return { id: e.id || i[0], name: o, text: r || a, unified: a };
                },
                c = () => `emojiPicker-${Math.random()}`;
            function l(e, t, o = 0) {
                if (e && t) {
                    const { height: i, top: s } = e.getBoundingClientRect(),
                        r = s + o,
                        { bottom: n, top: a } = t.getBoundingClientRect(),
                        c = i + s;
                    if (a < r) {
                        const t = r - a;
                        e.scrollTop = Math.max(0, e.scrollTop - t);
                    } else if (a > c || n > c) {
                        const t = n - c;
                        e.scrollTop = Math.max(0, e.scrollTop + t);
                    }
                }
            }
        },
        166502: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => i });
            const i = (e, t) => {
                const o = null == e ? 0 : e.length;
                if (!o || t < 1) return [];
                let i = 0,
                    s = 0;
                const r = new Array(Math.ceil(o / t));
                for (; i < o; ) (r[s] = e.slice(i, (i += t))), (s += 1);
                return r;
            };
        },
        666536: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => r });
            var i = o(936386),
                s = o.n(i);
            const r = (e, t, o) => s()(e, t, o);
        },
        822240: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => i });
            o(136728);
            const i = (e, t, o = 1) => {
                const i = [];
                for (let s = e; o > 0 ? s < t : s > t; s += o) i.push(s);
                return i;
            };
        },
        936386: (e) => {
            function t(e, t, o) {
                var i, s, r, n, a;
                function c() {
                    var l = Date.now() - n;
                    l < t && l >= 0 ? (i = setTimeout(c, t - l)) : ((i = null), o || ((a = e.apply(r, s)), (r = s = null)));
                }
                null == t && (t = 100);
                var l = function () {
                    (r = this), (s = arguments), (n = Date.now());
                    var l = o && !i;
                    return i || (i = setTimeout(c, t)), l && ((a = e.apply(r, s)), (r = s = null)), a;
                };
                return (
                    (l.clear = function () {
                        i && (clearTimeout(i), (i = null));
                    }),
                    (l.flush = function () {
                        i && ((a = e.apply(r, s)), (r = s = null), clearTimeout(i), (i = null));
                    }),
                    l
                );
            }
            (t.debounce = t), (e.exports = t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.EmojiPicker.1c505fba.js.map
