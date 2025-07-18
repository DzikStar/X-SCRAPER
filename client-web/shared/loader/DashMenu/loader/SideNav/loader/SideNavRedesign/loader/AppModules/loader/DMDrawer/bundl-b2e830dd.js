"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"],
    {
        835305: (t, e, n) => {
            n.d(e, { DraftJS: () => o, TV: () => i, wK: () => c, xs: () => r });
            n(571372);
            const r = Object.freeze({ Bold: "Bold", Italic: "Italic" }),
                o = Object.freeze({ Bold: "BOLD", Italic: "ITALIC", Strikethrough: "STRIKETHROUGH" });
            function i(t) {
                switch (t) {
                    case o.Bold:
                        return r.Bold;
                    case o.Italic:
                        return r.Italic;
                    default:
                        throw new Error(`invalid draftjs_style [${t}]`);
                }
            }
            function c(t) {
                return o[t];
            }
        },
        855125: (t, e, n) => {
            n.d(e, { Z: () => d });
            var r = n(202784),
                o = n(731708),
                i = n(58881),
                c = n(530732),
                a = n(537392),
                l = n(786475),
                s = n(392237);
            const u = s.default.create((t) => ({ interactiveView: { cursor: "pointer", display: "inline" } })),
                d = ({ children: t, fontSize: e, isActive: n, link: d, onScribeEvent: f, style: g }) => {
                    const y = (0, a.Zx)(({ containerWidth: t }) => l.Z.isNarrowScreenWidth(t)),
                        h = () => {
                            f?.({ action: "open_link", component: "link" });
                        },
                        p = e || (y ? "body" : "headline2");
                    return r.createElement(c.Z, { interactiveStyles: i.Z.generate({ backgroundColor: "none", color: s.default.theme.colors.primary }), style: [g, u.interactiveView] }, ({ isFocused: e, isFocusedWithin: i, isHovered: c, isPressed: a }) => r.createElement(o.ZP, { color: e || i || c || a || n ? "link" : "text", link: d, onPress: h, size: p, withUnderline: !0 }, t));
                };
        },
        202253: (t, e, n) => {
            n.d(e, { KR: () => S, NA: () => C, RU: () => v, U_: () => E, aF: () => k, ez: () => m });
            var r = n(202784),
                o = n(584713),
                i = n(323265),
                c = n(900783),
                a = n(157130),
                l = n(669474),
                s = n(392237),
                u = n(855125);
            function d(t, e) {
                const n = (0, o.Z)(t.getText());
                for (let t = 0; t < n.length; t++) {
                    const r = n[t].indices;
                    r && 2 === r.length && e(r[0], r[1]);
                }
            }
            const f = { clipPath: "circle(0% at center)" };
            function g(t, e, n) {
                t.findEntityRanges((t) => {
                    const e = t.getEntity(),
                        r = e ? n.getEntity(e) : null;
                    return !!r && "LINK" === r.getType();
                }, e);
            }
            const y = (t, e) => (n) => {
                    if (!n.entityKey) return null;
                    const o = { pathname: n.contentState.getEntity(n.entityKey).getData().url, external: !0 };
                    return r.createElement(u.Z, { fontSize: e, link: o, onScribeEvent: t }, n.children);
                },
                h = (t, e, n) => (o) => {
                    if (!o.entityKey) return null;
                    const i = o.children,
                        c = o.contentState.getEntity(o.entityKey).getData().url,
                        l = { pathname: c, external: !0 };
                    return r.createElement(a.Z, { animationDuration: "normal", onDismiss: n, onOpen: e, renderContent: t(i, c), withArrow: !0, wrapperStyle: w.popoverAnchor }, ({ isPopoverShown: t }) => r.createElement(u.Z, { isActive: t, link: l }, i));
                },
                p = (t, e) => (n) => {
                    const i = (0, o.Z)(n.decoratedText)[0];
                    if (!i) return null;
                    const c = (0, l.nt)(i);
                    if (!c) return null;
                    const a = { pathname: (0, l.ie)(c, n.decoratedText) || "", external: !0 };
                    return r.createElement(u.Z, { fontSize: e, link: a, onScribeEvent: t }, n.children);
                },
                E = (t, e, n) => ({ strategy: g, component: h(t, e, n) });
            function m(t, e) {
                return { strategy: g, component: y(t, e) };
            }
            function C(t, e) {
                return { strategy: d, component: p(t, e) };
            }
            const S = {
                    strategy: d,
                    component: function (t) {
                        return r.createElement("span", { style: { color: s.default.theme.colors.link } }, t.children);
                    },
                },
                k = {
                    strategy: function (t, e, n) {
                        t.findEntityRanges((t) => {
                            const e = t.getEntity(),
                                r = e && n.getEntity(e);
                            return !(!r || r.type !== c.Z.TWEMOJI);
                        }, e);
                    },
                    component: (t) => {
                        const { children: e, contentState: n, entityKey: o } = t,
                            c = (o && n.getEntity(o)) || {};
                        return !(i.ZP.isFirefox() && i.ZP.firefoxVersion() < 49)
                            ? r.Children.map(e, (t) => {
                                  const e = r.Children.map(t, (t) => r.createElement("span", { style: f }, t))[0];
                                  return r.cloneElement(r.createElement("span", null), { style: ((n = (c.data && c.data.url) || ""), { backgroundImage: `url("${n}")`, backgroundSize: "1em 1em", padding: "0.15em", backgroundPosition: "center", backgroundRepeat: "no-repeat", WebkitTextFillColor: "transparent" }) }, e);
                                  var n;
                              })
                            : e;
                    },
                },
                v = {
                    strategy: function (t, e) {
                        const n = (function (t, e, n) {
                            const r = e.getText();
                            let o, i;
                            for (; (o = t.exec(r)); ) (i = o.index), n(i, i + o[0].length);
                        })(/\r/g, t, e);
                        if (n) return e(n, n + 1);
                    },
                    component: function () {
                        return "\n";
                    },
                },
                w = s.default.create((t) => ({ popoverAnchor: { display: "inline" } }));
        },
        925873: (t, e, n) => {
            n.d(e, { Z: () => s });
            var r = n(301503),
                o = n(900783),
                i = n(899492);
            var c = n(115150);
            n(571372);
            const a = (t) => t.getCurrentContent().getPlainText();
            var l = n(202253);
            n(136728);
            const s = {
                getContentStateFromRaw: (t) => {
                    try {
                        const e = t ? JSON.parse(t) : void 0;
                        if (!e?.entityMap || !e?.blocks) throw new Error("Malformed RawDraftContentState");
                        return e;
                    } catch {
                        return;
                    }
                },
                initEditorState: function (
                    t = "",
                    e = (function () {
                        return { decorators: [l.KR, l.aF, l.RU] };
                    })(),
                ) {
                    let n;
                    n = "string" == typeof t ? r.ContentState.createFromText(t) : (0, r.convertFromRaw)(t);
                    const o = new r.CompositeDecorator(e.decorators),
                        i = r.EditorState.createWithContent(n, o);
                    return r.EditorState.moveSelectionToEnd(i);
                },
                insertTextAtCursor: function (t, e) {
                    const n = t.getCurrentContent(),
                        o = t.getSelection(),
                        i = r.Modifier.insertText(n, o, e);
                    return r.EditorState.push(t, i, "insert-characters");
                },
                convertEmojiToEntities: function (t) {
                    const e = r.EditorState.set(t, { allowUndo: !1 });
                    let n = e.getCurrentContent(),
                        c = 0;
                    return (
                        n.getBlocksAsArray().forEach((t) => {
                            i.Z.getTwemojiEntities(t.getText()).forEach((i) => {
                                if (!Array.isArray(i.indices)) return;
                                if (2 !== i.indices.length) return;
                                const a = n.createEntity(o.Z.TWEMOJI, o.p.IMMUTABLE, { url: i.url || null, id: c });
                                c += 1;
                                const l = a.getLastCreatedEntityKey(),
                                    s = t.getKey(),
                                    [u, d] = i.indices,
                                    f = e.getSelection().merge({ anchorKey: s, anchorOffset: u, focusKey: s, focusOffset: d, isBackward: !1 });
                                n = r.Modifier.applyEntity(a, f, l);
                            });
                        }),
                        r.EditorState.set(e, { allowUndo: !0, currentContent: n })
                    );
                },
                convertMentionsToEntities: (t) => {
                    const e = r.EditorState.set(t, { allowUndo: !1 });
                    let n = e.getCurrentContent(),
                        i = 0;
                    return (
                        n.getBlocksAsArray().forEach((t) => {
                            (0, c.Z)(t.getText()).forEach((c) => {
                                if (!Array.isArray(c.indices)) return;
                                if (2 !== c.indices.length) return;
                                const a = n.createEntity(o.Z.MENTION, o.p.IMMUTABLE, { id: i, screenName: c.screenName });
                                i += 1;
                                const l = a.getLastCreatedEntityKey(),
                                    s = t.getKey(),
                                    [u, d] = c.indices,
                                    f = e.getSelection().merge({ anchorKey: s, anchorOffset: u, focusKey: s, focusOffset: d, isBackward: !1 });
                                n = r.Modifier.applyEntity(a, f, l);
                            });
                        }),
                        r.EditorState.set(e, { allowUndo: !0, currentContent: n })
                    );
                },
                updateOverflowStyle: function (t, e, n = !1) {
                    let o;
                    const i = t.getSelection();
                    let c = r.EditorState.set(t, { allowUndo: !1 });
                    const a = t.getCurrentContent().getSelectionBefore(),
                        l = t.getCurrentContent().getSelectionAfter(),
                        s = t.getCurrentContent().getBlocksAsArray(),
                        u = "number" == typeof e && e > -1;
                    let d;
                    if (
                        (u &&
                            (d = (function (t, e) {
                                let n = 0;
                                for (const r of t) {
                                    const t = r.getText().length;
                                    if (n + t >= e) return { blockKey: r.key, offset: e - n };
                                    n += t + 1;
                                }
                                return null;
                            })(s, e)),
                        n &&
                            ((c = (function (t, e) {
                                const n = t.getCurrentContent(),
                                    o = n.getFirstBlock(),
                                    i = n.getLastBlock(),
                                    c = e || { blockKey: i.key, offset: i.getText().length },
                                    a = t.getSelection().merge({ anchorKey: o.key, anchorOffset: 0, focusKey: c.blockKey, focusOffset: c.offset, isBackward: !1 }),
                                    l = r.Modifier.removeInlineStyle(t.getCurrentContent(), a, "overflow");
                                return r.EditorState.push(t, l, "change-inline-style");
                            })(c, d)),
                            (o = !0)),
                        u &&
                            ((c = (function (t, e) {
                                if (!e) return t;
                                const { blockKey: n, offset: o } = e,
                                    i = t.getCurrentContent(),
                                    c = i.getLastBlock(),
                                    a = (function (t, e, n = 0) {
                                        const r = t.getBlockForKey(e);
                                        if (!r) return;
                                        const o = r.getEntityAt(n);
                                        if (!o) return n;
                                        const i = t.getEntity(o)?.data?.id;
                                        if (void 0 === i) return n;
                                        let c = n;
                                        for (let e = n - 1; e >= 0; e--) {
                                            const n = r.getEntityAt(e),
                                                o = n && t.getEntity(n);
                                            if (!o || !o.data || o.data.id !== i) {
                                                c = e + 1;
                                                break;
                                            }
                                        }
                                        return c;
                                    })(i, n, o),
                                    l = t.getSelection().merge({ anchorKey: n, anchorOffset: a, focusKey: c.key, focusOffset: c.getText().length, isBackward: !1 }),
                                    s = r.Modifier.applyInlineStyle(i, l, "overflow");
                                return r.EditorState.push(t, s, "change-inline-style");
                            })(c, d)),
                            (o = !0)),
                        o)
                    ) {
                        c = r.EditorState.forceSelection(c, i);
                        let e = c.getCurrentContent();
                        (e = e.set("selectionBefore", a)), (e = e.set("selectionAfter", l)), (c = r.EditorState.set(t, { allowUndo: !0, currentContent: e }));
                    }
                    return c;
                },
                getAtomicEntity: function (t) {
                    const e = t.block.getEntityAt(0);
                    return e ? t.contentState.getEntity(e) : null;
                },
                getBlockCount: (t) => t.getCurrentContent().getBlocksAsArray().length,
                getCharacterCount: (t) => a(t).length,
                getPlainText: a,
                getTrimmedPlainText: (t) => t.getPlainText().trim(),
                getWordCount: (t) =>
                    a(t)
                        .split(/\s+/)
                        .filter((t) => !!t).length,
                truncateText: (t, e) => {
                    const n = t.getBlocksAsArray();
                    let o = 0,
                        i = 0,
                        c = !1;
                    const a = [];
                    for (; !c && n[o]; ) {
                        const t = n[o],
                            l = t.getLength();
                        if (i + l > e) {
                            c = !0;
                            const n = t.getText().slice(0, e - i),
                                o = r.ContentState.createFromText(`${n}...`);
                            a.push(o.getFirstBlock());
                        } else a.push(t);
                        (i += l + 1), o++;
                    }
                    if (c) {
                        const t = r.ContentState.createFromBlockArray(a);
                        return { value: r.EditorState.createWithContent(t).getCurrentContent(), isTruncated: c };
                    }
                    return { value: t, isTruncated: c };
                },
            };
        },
        584713: (t, e, n) => {
            n.d(e, { Z: () => l });
            var r = n(814187),
                o = n(925885),
                i = n(115150),
                c = n(832142),
                a = n(525802);
            function l(t, e) {
                const n = (0, c.Z)(t, e)
                    .concat((0, i.Z)(t))
                    .concat((0, o.Z)(t, { checkUrlOverlap: !1 }))
                    .concat((0, r.Z)(t));
                return 0 == n.length ? [] : ((0, a.Z)(n), n);
            }
        },
        730895: (t, e, n) => {
            var r = n(821176);
            t.exports = function () {
                var t = r(this),
                    e = "";
                return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
            };
        },
        890103: (t, e, n) => {
            var r = n(609859),
                o = n(807400),
                i = n(396616),
                c = n(730895),
                a = n(824229),
                l = r.RegExp,
                s = l.prototype;
            o &&
                a(function () {
                    var t = !0;
                    try {
                        l(".", "d");
                    } catch (e) {
                        t = !1;
                    }
                    var e = {},
                        n = "",
                        r = t ? "dgimsy" : "gimsy",
                        o = function (t, r) {
                            Object.defineProperty(e, t, {
                                get: function () {
                                    return (n += r), !0;
                                },
                            });
                        },
                        i = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var c in (t && (i.hasIndices = "d"), i)) o(c, i[c]);
                    return Object.getOwnPropertyDescriptor(s, "flags").get.call(e) !== r || n !== r;
                }) &&
                i(s, "flags", { configurable: !0, get: c });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd.6034624a.js.map
