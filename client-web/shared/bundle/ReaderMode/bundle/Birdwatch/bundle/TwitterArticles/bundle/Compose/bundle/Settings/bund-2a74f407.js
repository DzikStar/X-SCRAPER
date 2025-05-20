"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"],
    {
        949626: (e, t, n) => {
            n.d(t, { Z: () => a });
            n(202784);
            var o = n(950822);
            const a = (e) => (0, o.Z)("div", e);
        },
        333241: (e, t, n) => {
            n.d(t, { Z: () => k });
            n(136728);
            var o = n(202784),
                a = n(638236),
                r = n(811176),
                l = n(332920),
                c = n.n(l),
                s = n(415506),
                i = n(516951),
                d = n(443781),
                p = n(376293),
                m = n(847607),
                g = n(417714),
                u = n(988823);
            const f = "block",
                b = "mute",
                h = "removeFollower",
                y = "report",
                E = "share",
                w = c().j7bb1a43,
                x = c().hef5960c,
                k = (0, u.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: n, onClose: l, onMute: c, onRemoveFollower: u, onReportUser: k, onShare: C, onUnblock: S, onUnmute: v, user: P } = e,
                        Z = [],
                        T = (t, n) => {
                            const { confirm: o, onClose: a } = e;
                            if (t) {
                                const { label: e, ...r } = t;
                                o({ confirmButtonLabel: e, ...r })
                                    .then(n, i.Z)
                                    .finally(a);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !P.protected &&
                        !P.blocking &&
                        !P.blocked_by &&
                        Z.push({
                            Icon: a.Z,
                            onClick: () => {
                                l(), C();
                            },
                            testID: E,
                            text: x,
                        });
                    !P.blocking &&
                        Z.push({
                            ...(0, m.N1)(
                                P,
                                () => {
                                    l(), c();
                                },
                                () => {
                                    l(), v();
                                },
                            ),
                            testID: b,
                        });
                    P.followed_by &&
                        Z.push({
                            ...(0, g.l)({
                                removeFollowerAction: (e) => {
                                    T(e, u);
                                },
                                user: P,
                            }),
                            testID: h,
                        }),
                        Z.push((0, p.op)({ blockAction: (e) => T(e, n), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: p.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => T(e, S), user: P })),
                        Z.push({
                            Icon: s.default,
                            onClick: () => {
                                l(), k();
                            },
                            testID: y,
                            text: w({ screenName: P.screen_name }),
                        });
                    const I = Z.map(({ Icon: e, onClick: t, testID: n, text: o }) => ({ text: o, onClick: t, Icon: e, testID: n }));
                    return o.createElement(r.Z, { items: I, onCloseRequested: l });
                });
        },
        123702: (e, t, n) => {
            n.d(t, { K: () => o });
            const o = function (e, t = {}) {
                const n = { listUnicodeChar: t.listUnicodeChar ?? void 0, stripListLeaders: t.stripListLeaders ?? !0, gfm: t.gfm ?? !0, useImgAltText: t.useImgAltText ?? !0, abbr: t.abbr ?? !1, replaceLinksWithURL: t.replaceLinksWithURL ?? !1, htmlTagsToSkip: t.htmlTagsToSkip ?? [], throwError: t.throwError ?? !1 };
                let o = e || "";
                o = o.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*/gm, "");
                try {
                    n.stripListLeaders && (o = n.listUnicodeChar ? o.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, `${n.listUnicodeChar} $1`) : o.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1")),
                        n.gfm &&
                            (o = o
                                .replace(/\n={2,}/g, "\n")
                                .replace(/~{3}.*\n/g, "")
                                .replace(/~~/g, "")
                                .replace(/`{3}.*\n/g, "")),
                        n.abbr && (o = o.replace(/\*\[.*\]:.*\n/, "")),
                        (o = o.replace(/<[^>]*>/g, ""));
                    let e = new RegExp("<[^>]*>", "g");
                    if (n.htmlTagsToSkip.length > 0) {
                        const t = `(?!${n.htmlTagsToSkip.join("|")})`;
                        e = new RegExp(`<${t}[^>]*>`, "ig");
                    }
                    o = o
                        .replace(e, "")
                        .replace(/^[=\-]{2,}\s*$/g, "")
                        .replace(/\[\^.+?\](\: .*?$)?/g, "")
                        .replace(/\s{0,2}\[.*?\]: .*?$/g, "")
                        .replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, n.useImgAltText ? "$1" : "")
                        .replace(/\[([^\]]*?)\][\[\(].*?[\]\)]/g, n.replaceLinksWithURL ? "$2" : "$1")
                        .replace(/^(\n)?\s{0,3}>\s?/gm, "$1")
                        .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "")
                        .replace(/^(\n)?\s{0,}#{1,6}\s*( (.+))? +#+$|^(\n)?\s{0,}#{1,6}\s*( (.+))?$/gm, "$1$3$4$6")
                        .replace(/([\*]+)(\S)(.*?\S)??\1/g, "$2$3")
                        .replace(/(^|\W)([_]+)(\S)(.*?\S)??\2($|\W)/g, "$1$3$4$5")
                        .replace(/(`{3,})(.*?)\1/gm, "$2")
                        .replace(/`(.+?)`/g, "$1")
                        .replace(/~(.*?)~/g, "$1");
                } catch (t) {
                    if (n.throwError) throw t;
                    return e;
                }
                return o;
            };
        },
        972198: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(202784);
            const o = (e) => {
                const { children: t } = e;
                return t;
            };
        },
        659426: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                a = n(392237),
                r = n(949626);
            const l = a.default.create((e) => ({ root: { display: "flex", overflow: "hidden" } })),
                c = (e) => {
                    const { author: t, children: n } = e,
                        a = `https://www.twitter.com/${t.screen_name}`;
                    return o.createElement(r.Z, { itemProp: "author", itemScope: !0, itemType: "https://schema.org/Person", style: l.root }, o.createElement("meta", { content: t.name, itemProp: "name" }), o.createElement("meta", { content: t.screen_name, itemProp: "additionalName" }), o.createElement("meta", { content: a, itemProp: "url" }), o.createElement("meta", { content: t.profile_image_url_https, itemProp: "image" }), n);
                };
        },
        933869: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(202784),
                a = n(688715),
                r = n(392237),
                l = n(332920),
                c = n.n(l),
                s = n(281312),
                i = n(805e3);
            const d = c().ibd021f2,
                p = c().bbef69c4,
                m = c().g5092766,
                g = c().a2d5c006,
                u = c().g37bb2d0,
                f = (0, a.ju)("https://help.x.com/using-twitter/how-to-retweet#prompt"),
                b = r.default.create((e) => ({ glassIcon: { alignSelf: "center", borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.primary, color: "white", fontSize: e.fontSizes.subtext2, marginEnd: 7, padding: 4 }, glassIconExpanded: { fontSize: e.fontSizes.headline1, marginEnd: 0, marginBottom: e.spaces.space12 } })),
                h = ({ articleNudgeFollowed: e, link: t, onClick: n, shouldShowArticleNudgeTip: a }) => {
                    const r = o.createElement(s.default, { style: b.glassIcon }),
                        l = o.createElement(s.default, { style: [b.glassIcon, b.glassIconExpanded] });
                    return o.createElement(i.Z, { buttonLabel: m, condensedText: e ? g : d, expanded: a, heading: e ? g : d, icon: r, iconExpanded: l, isExpandable: !0, learnMoreLink: f, link: t, onPress: n, subheading: e ? u : p });
                };
        },
        553161: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(202784),
                a = n(332920),
                r = n.n(a),
                l = n(805e3),
                c = n(467691);
            const s = r().g7135e44,
                i = r().h9b6d468,
                d = r().af5cd00e,
                p = r().e29c651e,
                m = (e) => {
                    const {
                            action: t,
                            actionTaken: n,
                            forwardPivotInfo: { landingUrl: a, text: r },
                            onActionTaken: m,
                        } = e,
                        g = t === c.S.like ? s : i;
                    return o.createElement(l.Z, { buttonLabel: d, condensedText: p, expanded: !n, heading: r.text, key: "misinfo-nudge", link: a.url, onPress: () => m(t, p), subheading: g });
                },
                g = o.memo(m);
        },
        931974: (e, t, n) => {
            n.d(t, { Z: () => w });
            var o = n(807896),
                a = n(202784),
                r = n(325686),
                l = n(731708),
                c = n(696591),
                s = n(154003),
                i = n(530732),
                d = n(392237),
                p = n(332920),
                m = n.n(p),
                g = n(211971),
                u = n(58399),
                f = n(686689),
                b = n(946409);
            const h = m().e29c651e,
                y = ({ action: e, actionTaken: t, onActionTaken: n, payload: { cta_title: d, cta_url: p, heading: m, icon_name: y, post_cta_text: w, subheading: x } }) => {
                    const k = a.useCallback(() => n(e, w?.text || h), [e, n, w]),
                        C = p && (0, b.s9)(p),
                        S = ((e, t) => {
                            const n = { style: [E.iconPrimaryColor, t ? E.iconPostAction : E.iconPreAction] };
                            return "error_circle" === e ? a.createElement(g.default, (0, o.Z)({ testID: "error_circle_icon" }, n)) : null;
                        })(y, t),
                        v = w ? a.createElement(f.Z, (0, o.Z)({ style: E.postActionText }, w)) : a.createElement(l.ZP, { style: E.postActionText }, h),
                        P = m ? a.createElement(c.Z, { align: "center", size: "title4", style: E.text, weight: "bold" }, m) : null,
                        Z = d && C ? a.createElement(s.ZP, { link: C, onPress: k, style: E.ctaButton, type: "brandFilled" }, d) : null;
                    return t ? a.createElement(i.Z, { focusable: !0, link: C, onPress: k, style: [E.container, E.containerPostAction] }, ({ isHovered: e }) => a.createElement(a.Fragment, null, S, v, a.createElement(u.default, { style: [e ? E.iconPrimaryColor : E.iconGrayColor, E.rightIcon] }))) : a.createElement(r.Z, { focusable: !0, style: [E.container, E.containerPreAction] }, S, P, a.createElement(f.Z, (0, o.Z)({ alignment: "Center", color: "gray700" }, x)), Z);
                },
                E = d.default.create((e) => ({ container: { alignItems: "center", backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.small, margin: e.spaces.space12 }, containerPreAction: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space20 }, containerPostAction: { flexDirection: "row", padding: e.spaces.space12 }, iconPrimaryColor: { color: e.colors.primary }, iconGrayColor: { color: e.colors.gray300 }, iconPreAction: { fontSize: e.fontSizes.title4, paddingBottom: e.spaces.space12 }, iconPostAction: { fontSize: e.fontSizes.headline1, paddingEnd: e.spaces.space4 }, rightIcon: { fontSize: e.fontSizes.body, paddingStart: e.spaces.space4 }, text: { textAlign: "center", paddingBottom: e.spaces.space16 }, postActionText: { paddingEnd: e.spaces.space2 }, ctaButton: { marginTop: e.spaces.space16 } })),
                w = a.memo(y);
        },
        805e3: (e, t, n) => {
            n.d(t, { Z: () => E });
            var o = n(202784),
                a = n(325686),
                r = n(696591),
                l = n(731708),
                c = n(154003),
                s = n(530732),
                i = n(466792),
                d = n(392237),
                p = n(332920),
                m = n.n(p),
                g = n(211971),
                u = n(711223),
                f = n(58399);
            const b = m().i859a9d4,
                h = m().gc45a90a,
                y = d.default.create((e) => ({ container: { alignItems: "center", backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.small, margin: e.spaces.space12 }, containerExpanded: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space20 }, containerCondensed: { flexDirection: "row", padding: e.spaces.space12 }, iconPrimaryColor: { color: e.colors.primary }, iconGrayColor: { color: e.colors.gray300 }, iconExpanded: { fontSize: e.fontSizes.title4, paddingBottom: e.spaces.space12 }, iconCondensed: { fontSize: e.fontSizes.headline1, paddingEnd: e.spaces.space4 }, learnMore: { color: e.colors.link, paddingBottom: e.spaces.space16 }, rightIcon: { fontSize: e.fontSizes.body, paddingStart: e.spaces.space4 }, text: { textAlign: "center", paddingBottom: e.spaces.space16 }, condensedText: { paddingEnd: e.spaces.space2 }, infoButton: { marginStart: "auto", marginEnd: `calc(-1 * ${e.spaces.space8})` }, infoIconPrimary: { color: e.colors.primary }, infoIconGray: { color: e.colors.gray300 } })),
                E = ({ buttonLabel: e, condensedText: t, expanded: n, heading: d, icon: p, iconExpanded: m, isExpandable: E = !1, learnMoreLink: w, link: x, onPress: k, subheading: C }) => {
                    const [S, v] = o.useState(n),
                        P = (e) => {
                            e.preventDefault(), e.stopPropagation(), v(!0);
                        };
                    return S ? o.createElement(a.Z, { focusable: !0, style: [y.container, y.containerExpanded] }, m || p || o.createElement(g.default, { style: [y.iconPrimaryColor, y.iconExpanded] }), o.createElement(r.Z, { align: "center", size: "title4", style: y.text, weight: "bold" }, d), o.createElement(r.Z, { align: "center", color: "gray700", style: y.text }, C), w ? o.createElement(l.ZP, { align: "center", link: w, style: y.learnMore }, b) : null, o.createElement(c.ZP, { link: x, onPress: k, type: "brandFilled" }, e)) : o.createElement(s.Z, { focusable: !0, link: x, onPress: k, style: [y.container, y.containerCondensed] }, ({ isHovered: e }) => o.createElement(o.Fragment, null, p || o.createElement(g.default, { style: [y.iconPrimaryColor, y.iconCondensed] }), o.createElement(l.ZP, { style: y.condensedText }, t), E ? o.createElement(i.Z, null, ({ isHovered: e }) => o.createElement(c.ZP, { "aria-label": h, icon: o.createElement(u.default, { style: e ? y.infoIconPrimary : y.infoIconGray }), onClick: P, size: "xSmall", style: y.infoButton, type: "brandText" })) : o.createElement(f.default, { style: [e ? y.iconPrimaryColor : y.iconGrayColor, y.rightIcon] })));
                };
        },
        467691: (e, t, n) => {
            n.d(t, { S: () => a, w: () => o });
            const o = { payload: "payload", forwardPivot: "forwardPivot", article: "article" },
                a = { like: "like", retweet: "retweet", share: "share" };
        },
        965283: (e, t, n) => {
            n.d(t, { p: () => r });
            var o = n(950152),
                a = n(467691);
            const r = (e, t, n, r) => {
                const l = ((e, t = []) => t.find(({ action: t }) => t.toLowerCase() === e.toLowerCase())?.payload)(e, n);
                return l ? { source: a.w.payload, payload: l } : ((e, t) => !(t?.displayType !== o.x.SoftIntervention || !t?.engagementNudge || (e !== a.S.retweet && e !== a.S.like && e !== a.S.share)))(e, t) ? { source: a.w.forwardPivot } : e === a.S.retweet && r ? { source: a.w.article } : { source: void 0 };
            };
        },
        989631: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(202784),
                a = n(325686),
                r = n(952428),
                l = n(872405),
                c = n(823161),
                s = n(154003),
                i = n(731708),
                d = n(392237),
                p = n(332920),
                m = n.n(p);
            const g = m().df45f564,
                u = m().i569ff3e;
            class f extends o.PureComponent {
                componentDidMount() {
                    const { onImpression: e } = this.props;
                    e && e();
                }
                render() {
                    const { avatarUrl: e, onClick: t, style: n, to: d, userName: p, withButton: m, withConversationLine: f } = this.props,
                        h = e && p;
                    return o.createElement(r.Z, { link: d, onClick: t, style: [b.root, n] }, o.createElement(l.Z, { avatarCell: h ? o.createElement(a.Z, { style: [b.avatarColumn, !f && b.avatarColumnWithoutLine] }, f ? o.createElement(a.Z, { style: b.conversationLine }) : null, o.createElement(c.default, { size: "large", uri: e })) : null, avatarCellStyle: b.conversationConnector, cellStyle: m ? b.buttonContainer : h ? b.labelWithAvatar : b.label }, m ? o.createElement(s.ZP, { role: "none", size: "xSmall", style: b.button, type: "brandOutlined" }, g) : o.createElement(i.ZP, { color: "link", style: b.enlargeTouchTarget }, u)));
                }
            }
            f.defaultProps = { withButton: !1, withConversationLine: !1 };
            const b = d.default.create((e) => ({ root: { overflow: "hidden", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space2 }, avatarColumn: { flexDirection: "column", flexGrow: 0, alignItems: "center", paddingBottom: e.spaces.space4 }, avatarColumnWithoutLine: { paddingTop: e.spaces.space12 }, conversationConnector: { alignItems: "center", display: "flex", position: "relative" }, label: { flexGrow: 1, paddingVertical: e.spaces.space4 }, labelWithAvatar: { flexGrow: 1, justifyContent: "center" }, conversationLine: { backgroundColor: e.colors.gray200, flexGrow: 1, flexShrink: 1, width: e.componentDimensions.conversationLineWidth, marginBottom: e.spaces.space4 }, buttonContainer: { paddingVertical: e.spaces.space4, flexDirection: "row", flexGrow: 1 }, button: { marginVertical: e.spaces.space4 }, enlargeTouchTarget: { paddingVertical: e.spaces.space8 } }));
        },
        864479: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(807896),
                a = n(202784),
                r = n(771099);
            const l = (e) => (t) => a.createElement(r.$6, null, (n) => a.createElement(e, (0, o.Z)({}, t, { isInSidebar: n })));
        },
        156707: (e, t, n) => {
            n.d(t, { W: () => o });
            const o = { trust: !1, output: "mathml" };
        },
        540985: (e, t, n) => {
            n.d(t, { W: () => a.W, Z: () => r });
            n(202784);
            var o = n(523561),
                a = n(156707);
            const r = (0, o.Z)({ loader: () => Promise.all([n.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"), n.e("loader.TexBlock")]).then(n.bind(n, 753440)) });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407.b4d7effa.js.map
