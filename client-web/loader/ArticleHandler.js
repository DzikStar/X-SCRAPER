"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ArticleHandler"],
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
            r.d(t, { Z: () => P });
            var i = r(202784),
                a = r(325686),
                n = r(638009),
                o = r(352924),
                l = r(470397),
                c = r(731708),
                s = r(966886),
                d = r(154003),
                m = r(682474),
                u = r(392237),
                p = r(530525),
                b = r(439592),
                h = r(126962),
                g = r(952428),
                Z = r(530732),
                x = r(111677),
                E = r.n(x),
                v = r(490359),
                y = r(769471),
                C = r(415725),
                w = r(725405),
                f = r(500002),
                _ = r(71620),
                k = r(668214),
                z = r(502909),
                I = r(600823);
            const S = (0, z.ZP)({ namespace: "articles" }),
                A = I.Z.register(S),
                D = (e, t) => A.select(e, t.id.toString()),
                H = (0, k.Z)()
                    .propsFromState(() => ({ article: D }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("ARTICLE_SUMMARY") })),
                B = E().afb7e8f8,
                L = u.default.create((e) => ({ horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, text: { marginBottom: e.spaces.space4 }, buttonContainer: { alignItems: "flex-start", marginTop: e.spaces.space12, marginBottom: e.spaces.space16 }, imageContainer: { borderRadius: e.borderRadii.large, height: 100, marginStart: e.componentDimensions.gutterHorizontal, overflow: "hidden", width: 100 }, container: { flexDirection: "column", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, middotGroup: { marginBottom: e.spaces.space8 } })),
                P = (0, f.ZP)(
                    H(({ article: e, createLocalApiErrorHandler: t, id: r, location: x, socialContext: E, withInternalLink: f }) => {
                        const _ = (0, w.Z)(),
                            k = i.useContext(n.ZP),
                            { article_url: z, description: I, domain: S, image_url: A, publish_date: D, title: H } = e || {},
                            P = { domain: o.b(), timestamp: o.b(), title: o.b(), description: o.b(), adFree: o.b(), socialContext: o.b() },
                            R = [P.domain, P.timestamp, P.title, P.description, P.socialContext],
                            F = i.useMemo(() => {
                                const e = (0, v.Z)(_.contextualScribeData.items || []) || {};
                                return { url: z, items: [(0, y.Z)({}, e, { article_details: { publisher_name: S, is_showing_label: !1, is_ad_free: !1 } })] };
                            }, [_.contextualScribeData.items, z, S]),
                            M = i.useCallback(() => {
                                _.scribe({ action: "impression", data: F });
                            }, [_, F]);
                        if (
                            (i.useEffect(() => {
                                M();
                            }, [M]),
                            !e)
                        )
                            return null;
                        const { contextImageUrls: U, landingUrl: O, text: T } = E || {},
                            W = A ? { url: A, height: 750, width: 1250 } : void 0,
                            V = { pathname: z, external: !0 },
                            j = (e) => {
                                _.scribe({ element: f ? "read_article" : "article_header", action: "open_link", data: F });
                            },
                            q = () => {
                                _.scribe({ element: "conversation_view", action: "click", data: F });
                            },
                            G = O ? k.getLinkFromUrtUrl(O) : void 0,
                            $ = G ? k.withAnchorless(G) : void 0,
                            N = $
                                ? {
                                      ...$,
                                      pathname: `${$.pathname}?time_window=${(() => {
                                          const e = x?.query?.time_window;
                                          return Number(e) || 24;
                                      })()}`,
                                  }
                                : void 0,
                            Q = i.createElement(i.Fragment, null, i.createElement(a.Z, { style: L.horizontalContainer }, i.createElement(a.Z, { style: L.textContainer }, i.createElement(l.Z, { style: L.middotGroup }, S && i.createElement(c.ZP, { color: "gray700", id: P.domain, size: "subtext2", weight: "bold" }, S), D && i.createElement(c.ZP, { color: "gray700", id: P.timestamp, size: "subtext2" }, i.createElement(s.Z, { timestamp: D }))), i.createElement(c.ZP, { color: "text", id: P.title, link: N, numberOfLines: 3, size: "headline2", style: L.text, weight: "bold", withInteractiveStyling: !1 }, H), I ? i.createElement(c.ZP, { id: P.description, numberOfLines: 2 }, I) : null, f ? i.createElement(a.Z, { style: L.buttonContainer }, i.createElement(d.ZP, { link: V, onClick: j, size: "xSmall", type: "primaryOutlined" }, B)) : null), W ? i.createElement(a.Z, { style: L.imageContainer }, i.createElement(m.Z, { ratio: u.default.theme.aspectRatios.square }, i.createElement(p.Z, { "aria-label": "", aspectMode: b.Z.SQUARE, image: W }))) : null), i.createElement(h.Z, { contextType: "Facepile", iconSize: "large", id: P.socialContext, text: T, textSize: "subtext2", userAvatarUrls: U, withLeftPadding: !1, withTextCentered: !0 }));
                        return f ? i.createElement(C.Z, { exact: !1, path: N?.pathname || "" }, (e) => i.createElement(g.Z, { "aria-labelledby": R.join(" "), "aria-selected": e, link: N, onClick: q, role: "article", style: L.container }, Q)) : i.createElement(Z.Z, { link: V, onClick: j, style: [L.container, L.bottomBorder] }, Q);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ArticleHandler.173c54ca.js.map
