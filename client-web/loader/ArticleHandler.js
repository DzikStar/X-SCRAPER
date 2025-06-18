"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ArticleHandler", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        415725: (e, t, r) => {
            r.d(t, { Z: () => s });
            var i = r(202784),
                a = r(325686),
                n = r(392237),
                o = r(822228);
            const l = "activeRoute",
                c = n.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...n.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                s = ({ children: e, ...t }) => i.createElement(o.Z, t, (t) => i.createElement(a.Z, { style: t && c.activeRoot, testID: l }, "function" == typeof e ? e(t) : e, t ? i.createElement(a.Z, { pointerEvents: "none", style: c.overlay }) : null));
        },
        546608: (e, t, r) => {
            r.d(t, { Z: () => M });
            var i = r(202784),
                a = r(325686),
                n = r(638009),
                o = r(352924),
                l = r(470397),
                c = r(731708),
                s = r(966886),
                d = r(154003),
                m = r(682474),
                h = r(392237),
                u = r(530525),
                g = r(439592),
                p = r(126962),
                b = r(952428),
                v = r(530732),
                Z = r(111677),
                E = r.n(Z),
                w = r(490359),
                x = r(769471),
                y = r(415725),
                C = r(725405),
                f = r(500002),
                z = r(71620),
                _ = r(668214),
                k = r(502909),
                D = r(600823);
            const I = (0, k.ZP)({ namespace: "articles" }),
                S = D.Z.register(I),
                A = (e, t) => S.select(e, t.id.toString()),
                B = (0, _.Z)()
                    .propsFromState(() => ({ article: A }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, z.zr)("ARTICLE_SUMMARY") })),
                H = E().afb7e8f8,
                L = h.default.create((e) => ({ horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, text: { marginBottom: e.spaces.space4 }, buttonContainer: { alignItems: "flex-start", marginTop: e.spaces.space12, marginBottom: e.spaces.space16 }, imageContainer: { borderRadius: e.borderRadii.large, height: 100, marginStart: e.componentDimensions.gutterHorizontal, overflow: "hidden", width: 100 }, container: { flexDirection: "column", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, middotGroup: { marginBottom: e.spaces.space8 } })),
                M = (0, f.ZP)(
                    B(({ article: e, createLocalApiErrorHandler: t, id: r, location: Z, socialContext: E, withInternalLink: f }) => {
                        const z = (0, C.Z)(),
                            _ = i.useContext(n.ZP),
                            { article_url: k, description: D, domain: I, image_url: S, publish_date: A, title: B } = e || {},
                            M = { domain: o.b(), timestamp: o.b(), title: o.b(), description: o.b(), adFree: o.b(), socialContext: o.b() },
                            F = [M.domain, M.timestamp, M.title, M.description, M.socialContext],
                            P = i.useMemo(() => {
                                const e = (0, w.Z)(z.contextualScribeData.items || []) || {};
                                return { url: k, items: [(0, x.Z)({}, e, { article_details: { publisher_name: I, is_showing_label: !1, is_ad_free: !1 } })] };
                            }, [z.contextualScribeData.items, k, I]),
                            R = i.useCallback(() => {
                                z.scribe({ action: "impression", data: P });
                            }, [z, P]);
                        if (
                            (i.useEffect(() => {
                                R();
                            }, [R]),
                            !e)
                        )
                            return null;
                        const { contextImageUrls: U, landingUrl: V, text: j } = E || {},
                            O = S ? { url: S, height: 750, width: 1250 } : void 0,
                            T = { pathname: k, external: !0 },
                            W = (e) => {
                                z.scribe({ element: f ? "read_article" : "article_header", action: "open_link", data: P });
                            },
                            q = () => {
                                z.scribe({ element: "conversation_view", action: "click", data: P });
                            },
                            G = V ? _.getLinkFromUrtUrl(V) : void 0,
                            $ = G ? _.withAnchorless(G) : void 0,
                            N = $
                                ? {
                                      ...$,
                                      pathname: `${$.pathname}?time_window=${(() => {
                                          const e = Z?.query?.time_window;
                                          return Number(e) || 24;
                                      })()}`,
                                  }
                                : void 0,
                            Q = i.createElement(i.Fragment, null, i.createElement(a.Z, { style: L.horizontalContainer }, i.createElement(a.Z, { style: L.textContainer }, i.createElement(l.Z, { style: L.middotGroup }, I && i.createElement(c.ZP, { color: "gray700", id: M.domain, size: "subtext2", weight: "bold" }, I), A && i.createElement(c.ZP, { color: "gray700", id: M.timestamp, size: "subtext2" }, i.createElement(s.Z, { timestamp: A }))), i.createElement(c.ZP, { color: "text", id: M.title, link: N, numberOfLines: 3, size: "headline2", style: L.text, weight: "bold", withInteractiveStyling: !1 }, B), D ? i.createElement(c.ZP, { id: M.description, numberOfLines: 2 }, D) : null, f ? i.createElement(a.Z, { style: L.buttonContainer }, i.createElement(d.ZP, { link: T, onClick: W, size: "xSmall", type: "primaryOutlined" }, H)) : null), O ? i.createElement(a.Z, { style: L.imageContainer }, i.createElement(m.Z, { ratio: h.default.theme.aspectRatios.square }, i.createElement(u.Z, { "aria-label": "", aspectMode: g.Z.SQUARE, image: O }))) : null), i.createElement(p.Z, { contextType: "Facepile", iconSize: "large", id: M.socialContext, text: j, textSize: "subtext2", userAvatarUrls: U, withLeftPadding: !1, withTextCentered: !0 }));
                        return f ? i.createElement(y.Z, { exact: !1, path: N?.pathname || "" }, (e) => i.createElement(b.Z, { "aria-labelledby": F.join(" "), "aria-selected": e, link: N, onClick: q, role: "article", style: L.container }, Q)) : i.createElement(v.Z, { link: T, onClick: W, style: [L.container, L.bottomBorder] }, Q);
                    }),
                );
        },
        521380: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(459643),
                a = r(942893),
                n = r(351322),
                o = r(202784),
                l = r(546608);
            const c = (e) => {
                    const { entry: t } = e;
                    return o.createElement(l.Z, { id: t.content.articleId, socialContext: t.content.socialContext?.generalContext || void 0, withInternalLink: !0 });
                },
                s = n
                    .iH({
                        component: c,
                        shouldDisplayBorder: (0, i.Z)(!0),
                        isFocusable: (0, i.Z)(!0),
                        getScribeDataItem: (e) =>
                            ((e) => {
                                const { articleId: t } = e.content;
                                return a.Z.getArticleItem(t, e.itemMetadata.clientEventInfo);
                            })(e),
                    })
                    .getHandler();
        },
        246492: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var i = r(202784),
                a = r(890601),
                n = r(783427),
                o = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        264171: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var i = r(202784),
                a = r(890601),
                n = r(783427),
                o = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var i = r(202784),
                a = r(890601),
                n = r(783427),
                o = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        262009: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var i = r(202784),
                a = r(890601),
                n = r(783427),
                o = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var i = r(202784),
                a = r(890601),
                n = r(783427),
                o = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        490359: (e, t, r) => {
            r.d(t, { Z: () => i });
            const i = (e) => (Array.isArray(e) ? e[0] : void 0);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ArticleHandler.571ee86a.js.map
