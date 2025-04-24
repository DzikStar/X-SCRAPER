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
                c = n(674132),
                l = n.n(c),
                i = n(415506),
                s = n(516951),
                d = n(443781),
                p = n(376293),
                m = n(847607),
                u = n(417714),
                g = n(988823);
            const f = "block",
                b = "mute",
                y = "removeFollower",
                h = "report",
                E = "share",
                w = l().j7bb1a43,
                x = l().hef5960c,
                k = (0, g.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: n, onClose: c, onMute: l, onRemoveFollower: g, onReportUser: k, onShare: C, onUnblock: v, onUnmute: P, user: Z } = e,
                        S = [],
                        I = (t, n) => {
                            const { confirm: o, onClose: a } = e;
                            if (t) {
                                const { label: e, ...r } = t;
                                o({ confirmButtonLabel: e, ...r })
                                    .then(n, s.Z)
                                    .finally(a);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !Z.protected &&
                        !Z.blocking &&
                        !Z.blocked_by &&
                        S.push({
                            Icon: a.Z,
                            onClick: () => {
                                c(), C();
                            },
                            testID: E,
                            text: x,
                        });
                    !Z.blocking &&
                        S.push({
                            ...(0, m.N1)(
                                Z,
                                () => {
                                    c(), l();
                                },
                                () => {
                                    c(), P();
                                },
                            ),
                            testID: b,
                        });
                    Z.followed_by &&
                        S.push({
                            ...(0, u.l)({
                                removeFollowerAction: (e) => {
                                    I(e, g);
                                },
                                user: Z,
                            }),
                            testID: y,
                        }),
                        S.push((0, p.op)({ blockAction: (e) => I(e, n), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: p.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => I(e, v), user: Z })),
                        S.push({
                            Icon: i.default,
                            onClick: () => {
                                c(), k();
                            },
                            testID: h,
                            text: w({ screenName: Z.screen_name }),
                        });
                    const T = S.map(({ Icon: e, onClick: t, testID: n, text: o }) => ({ text: o, onClick: t, Icon: e, testID: n }));
                    return o.createElement(r.Z, { items: T, onCloseRequested: c });
                });
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
            n.d(t, { Z: () => l });
            var o = n(202784),
                a = n(392237),
                r = n(949626);
            const c = a.default.create((e) => ({ root: { display: "flex", overflow: "hidden" } })),
                l = (e) => {
                    const { author: t, children: n } = e,
                        a = `https://www.twitter.com/${t.screen_name}`;
                    return o.createElement(r.Z, { itemProp: "author", itemScope: !0, itemType: "https://schema.org/Person", style: c.root }, o.createElement("meta", { content: t.name, itemProp: "name" }), o.createElement("meta", { content: t.screen_name, itemProp: "additionalName" }), o.createElement("meta", { content: a, itemProp: "url" }), o.createElement("meta", { content: t.profile_image_url_https, itemProp: "image" }), n);
                };
        },
        933869: (e, t, n) => {
            n.d(t, { Z: () => y });
            var o = n(202784),
                a = n(688715),
                r = n(392237),
                c = n(674132),
                l = n.n(c),
                i = n(281312),
                s = n(805e3);
            const d = l().ibd021f2,
                p = l().bbef69c4,
                m = l().g5092766,
                u = l().a2d5c006,
                g = l().g37bb2d0,
                f = (0, a.ju)("https://help.x.com/using-twitter/how-to-retweet#prompt"),
                b = r.default.create((e) => ({ glassIcon: { alignSelf: "center", borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.primary, color: "white", fontSize: e.fontSizes.subtext2, marginEnd: 7, padding: 4 }, glassIconExpanded: { fontSize: e.fontSizes.headline1, marginEnd: 0, marginBottom: e.spaces.space12 } })),
                y = ({ articleNudgeFollowed: e, link: t, onClick: n, shouldShowArticleNudgeTip: a }) => {
                    const r = o.createElement(i.default, { style: b.glassIcon }),
                        c = o.createElement(i.default, { style: [b.glassIcon, b.glassIconExpanded] });
                    return o.createElement(s.Z, { buttonLabel: m, condensedText: e ? u : d, expanded: a, heading: e ? u : d, icon: r, iconExpanded: c, isExpandable: !0, learnMoreLink: f, link: t, onPress: n, subheading: e ? g : p });
                };
        },
        553161: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                a = n(674132),
                r = n.n(a),
                c = n(805e3),
                l = n(467691);
            const i = r().g7135e44,
                s = r().h9b6d468,
                d = r().af5cd00e,
                p = r().e29c651e,
                m = (e) => {
                    const {
                            action: t,
                            actionTaken: n,
                            forwardPivotInfo: { landingUrl: a, text: r },
                            onActionTaken: m,
                        } = e,
                        u = t === l.S.like ? i : s;
                    return o.createElement(c.Z, { buttonLabel: d, condensedText: p, expanded: !n, heading: r.text, key: "misinfo-nudge", link: a.url, onPress: () => m(t, p), subheading: u });
                },
                u = o.memo(m);
        },
        931974: (e, t, n) => {
            n.d(t, { Z: () => w });
            var o = n(807896),
                a = n(202784),
                r = n(325686),
                c = n(731708),
                l = n(696591),
                i = n(154003),
                s = n(530732),
                d = n(392237),
                p = n(674132),
                m = n.n(p),
                u = n(211971),
                g = n(58399),
                f = n(686689),
                b = n(946409);
            const y = m().e29c651e,
                h = ({ action: e, actionTaken: t, onActionTaken: n, payload: { cta_title: d, cta_url: p, heading: m, icon_name: h, post_cta_text: w, subheading: x } }) => {
                    const k = a.useCallback(() => n(e, w?.text || y), [e, n, w]),
                        C = p && (0, b.s9)(p),
                        v = ((e, t) => {
                            const n = { style: [E.iconPrimaryColor, t ? E.iconPostAction : E.iconPreAction] };
                            return "error_circle" === e ? a.createElement(u.default, (0, o.Z)({ testID: "error_circle_icon" }, n)) : null;
                        })(h, t),
                        P = w ? a.createElement(f.Z, (0, o.Z)({ style: E.postActionText }, w)) : a.createElement(c.ZP, { style: E.postActionText }, y),
                        Z = m ? a.createElement(l.Z, { align: "center", size: "title4", style: E.text, weight: "bold" }, m) : null,
                        S = d && C ? a.createElement(i.ZP, { link: C, onPress: k, style: E.ctaButton, type: "brandFilled" }, d) : null;
                    return t ? a.createElement(s.Z, { focusable: !0, link: C, onPress: k, style: [E.container, E.containerPostAction] }, ({ isHovered: e }) => a.createElement(a.Fragment, null, v, P, a.createElement(g.default, { style: [e ? E.iconPrimaryColor : E.iconGrayColor, E.rightIcon] }))) : a.createElement(r.Z, { focusable: !0, style: [E.container, E.containerPreAction] }, v, Z, a.createElement(f.Z, (0, o.Z)({ alignment: "Center", color: "gray700" }, x)), S);
                },
                E = d.default.create((e) => ({ container: { alignItems: "center", backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.small, margin: e.spaces.space12 }, containerPreAction: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space20 }, containerPostAction: { flexDirection: "row", padding: e.spaces.space12 }, iconPrimaryColor: { color: e.colors.primary }, iconGrayColor: { color: e.colors.gray300 }, iconPreAction: { fontSize: e.fontSizes.title4, paddingBottom: e.spaces.space12 }, iconPostAction: { fontSize: e.fontSizes.headline1, paddingEnd: e.spaces.space4 }, rightIcon: { fontSize: e.fontSizes.body, paddingStart: e.spaces.space4 }, text: { textAlign: "center", paddingBottom: e.spaces.space16 }, postActionText: { paddingEnd: e.spaces.space2 }, ctaButton: { marginTop: e.spaces.space16 } })),
                w = a.memo(h);
        },
        805e3: (e, t, n) => {
            n.d(t, { Z: () => E });
            var o = n(202784),
                a = n(325686),
                r = n(696591),
                c = n(731708),
                l = n(154003),
                i = n(530732),
                s = n(466792),
                d = n(392237),
                p = n(674132),
                m = n.n(p),
                u = n(211971),
                g = n(711223),
                f = n(58399);
            const b = m().i859a9d4,
                y = m().gc45a90a,
                h = d.default.create((e) => ({ container: { alignItems: "center", backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.small, margin: e.spaces.space12 }, containerExpanded: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space20 }, containerCondensed: { flexDirection: "row", padding: e.spaces.space12 }, iconPrimaryColor: { color: e.colors.primary }, iconGrayColor: { color: e.colors.gray300 }, iconExpanded: { fontSize: e.fontSizes.title4, paddingBottom: e.spaces.space12 }, iconCondensed: { fontSize: e.fontSizes.headline1, paddingEnd: e.spaces.space4 }, learnMore: { color: e.colors.link, paddingBottom: e.spaces.space16 }, rightIcon: { fontSize: e.fontSizes.body, paddingStart: e.spaces.space4 }, text: { textAlign: "center", paddingBottom: e.spaces.space16 }, condensedText: { paddingEnd: e.spaces.space2 }, infoButton: { marginStart: "auto", marginEnd: `calc(-1 * ${e.spaces.space8})` }, infoIconPrimary: { color: e.colors.primary }, infoIconGray: { color: e.colors.gray300 } })),
                E = ({ buttonLabel: e, condensedText: t, expanded: n, heading: d, icon: p, iconExpanded: m, isExpandable: E = !1, learnMoreLink: w, link: x, onPress: k, subheading: C }) => {
                    const [v, P] = o.useState(n),
                        Z = (e) => {
                            e.preventDefault(), e.stopPropagation(), P(!0);
                        };
                    return v ? o.createElement(a.Z, { focusable: !0, style: [h.container, h.containerExpanded] }, m || p || o.createElement(u.default, { style: [h.iconPrimaryColor, h.iconExpanded] }), o.createElement(r.Z, { align: "center", size: "title4", style: h.text, weight: "bold" }, d), o.createElement(r.Z, { align: "center", color: "gray700", style: h.text }, C), w ? o.createElement(c.ZP, { align: "center", link: w, style: h.learnMore }, b) : null, o.createElement(l.ZP, { link: x, onPress: k, type: "brandFilled" }, e)) : o.createElement(i.Z, { focusable: !0, link: x, onPress: k, style: [h.container, h.containerCondensed] }, ({ isHovered: e }) => o.createElement(o.Fragment, null, p || o.createElement(u.default, { style: [h.iconPrimaryColor, h.iconCondensed] }), o.createElement(c.ZP, { style: h.condensedText }, t), E ? o.createElement(s.Z, null, ({ isHovered: e }) => o.createElement(l.ZP, { "aria-label": y, icon: o.createElement(g.default, { style: e ? h.infoIconPrimary : h.infoIconGray }), onClick: Z, size: "xSmall", style: h.infoButton, type: "brandText" })) : o.createElement(f.default, { style: [e ? h.iconPrimaryColor : h.iconGrayColor, h.rightIcon] })));
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
                const c = ((e, t = []) => t.find(({ action: t }) => t.toLowerCase() === e.toLowerCase())?.payload)(e, n);
                return c ? { source: a.w.payload, payload: c } : ((e, t) => !(t?.displayType !== o.x.SoftIntervention || !t?.engagementNudge || (e !== a.S.retweet && e !== a.S.like && e !== a.S.share)))(e, t) ? { source: a.w.forwardPivot } : e === a.S.retweet && r ? { source: a.w.article } : { source: void 0 };
            };
        },
        989631: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(202784),
                a = n(325686),
                r = n(952428),
                c = n(872405),
                l = n(823161),
                i = n(154003),
                s = n(731708),
                d = n(392237),
                p = n(674132),
                m = n.n(p);
            const u = m().df45f564,
                g = m().i569ff3e;
            class f extends o.PureComponent {
                componentDidMount() {
                    const { onImpression: e } = this.props;
                    e && e();
                }
                render() {
                    const { avatarUrl: e, onClick: t, style: n, to: d, userName: p, withButton: m, withConversationLine: f } = this.props,
                        y = e && p;
                    return o.createElement(r.Z, { link: d, onClick: t, style: [b.root, n] }, o.createElement(c.Z, { avatarCell: y ? o.createElement(a.Z, { style: [b.avatarColumn, !f && b.avatarColumnWithoutLine] }, f ? o.createElement(a.Z, { style: b.conversationLine }) : null, o.createElement(l.default, { size: "large", uri: e })) : null, avatarCellStyle: b.conversationConnector, cellStyle: m ? b.buttonContainer : y ? b.labelWithAvatar : b.label }, m ? o.createElement(i.ZP, { role: "none", size: "xSmall", style: b.button, type: "brandOutlined" }, u) : o.createElement(s.ZP, { color: "link", style: b.enlargeTouchTarget }, g)));
                }
            }
            f.defaultProps = { withButton: !1, withConversationLine: !1 };
            const b = d.default.create((e) => ({ root: { overflow: "hidden", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space2 }, avatarColumn: { flexDirection: "column", flexGrow: 0, alignItems: "center", paddingBottom: e.spaces.space4 }, avatarColumnWithoutLine: { paddingTop: e.spaces.space12 }, conversationConnector: { alignItems: "center", display: "flex", position: "relative" }, label: { flexGrow: 1, paddingVertical: e.spaces.space4 }, labelWithAvatar: { flexGrow: 1, justifyContent: "center" }, conversationLine: { backgroundColor: e.colors.gray200, flexGrow: 1, flexShrink: 1, width: e.componentDimensions.conversationLineWidth, marginBottom: e.spaces.space4 }, buttonContainer: { paddingVertical: e.spaces.space4, flexDirection: "row", flexGrow: 1 }, button: { marginVertical: e.spaces.space4 }, enlargeTouchTarget: { paddingVertical: e.spaces.space8 } }));
        },
        864479: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                a = n(202784),
                r = n(771099);
            const c = (e) => (t) => a.createElement(r.$6, null, (n) => a.createElement(e, (0, o.Z)({}, t, { isInSidebar: n })));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407.a9ab9a6a.js.map
