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
            n.d(t, { Z: () => C });
            n(136728);
            var o = n(202784),
                a = n(638236),
                r = n(811176),
                l = n(111677),
                i = n.n(l),
                s = n(415506),
                c = n(516951),
                d = n(443781),
                u = n(376293),
                p = n(847607),
                m = n(417714),
                h = n(988823);
            const b = "block",
                g = "mute",
                w = "removeFollower",
                f = "report",
                y = "share",
                E = i().j7bb1a43,
                _ = i().hef5960c,
                C = (0, h.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: n, onClose: l, onMute: i, onRemoveFollower: h, onReportUser: C, onShare: k, onUnblock: x, onUnmute: Z, user: S } = e,
                        T = [],
                        v = (t, n) => {
                            const { confirm: o, onClose: a } = e;
                            if (t) {
                                const { label: e, ...r } = t;
                                o({ confirmButtonLabel: e, ...r })
                                    .then(n, c.Z)
                                    .finally(a);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !S.protected &&
                        !S.blocking &&
                        !S.blocked_by &&
                        T.push({
                            Icon: a.Z,
                            onClick: () => {
                                l(), k();
                            },
                            testID: y,
                            text: _,
                        });
                    !S.blocking &&
                        T.push({
                            ...(0, p.N1)(
                                S,
                                () => {
                                    l(), i();
                                },
                                () => {
                                    l(), Z();
                                },
                            ),
                            testID: g,
                        });
                    S.followed_by &&
                        T.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    v(e, h);
                                },
                                user: S,
                            }),
                            testID: w,
                        }),
                        T.push((0, u.op)({ blockAction: (e) => v(e, n), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: b, unblockAction: (e) => v(e, x), user: S })),
                        T.push({
                            Icon: s.default,
                            onClick: () => {
                                l(), C();
                            },
                            testID: f,
                            text: E({ screenName: S.screen_name }),
                        });
                    const P = T.map(({ Icon: e, onClick: t, testID: n, text: o }) => ({ text: o, onClick: t, Icon: e, testID: n }));
                    return o.createElement(r.Z, { items: P, onCloseRequested: l });
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
                        .replace(/(\*+)(.*?)\1/g, "$2")
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
        933869: (e, t, n) => {
            n.d(t, { Z: () => w });
            var o = n(202784),
                a = n(688715),
                r = n(392237),
                l = n(111677),
                i = n.n(l),
                s = n(281312),
                c = n(805e3);
            const d = i().ibd021f2,
                u = i().bbef69c4,
                p = i().g5092766,
                m = i().a2d5c006,
                h = i().g37bb2d0,
                b = (0, a.ju)("https://help.x.com/using-twitter/how-to-retweet#prompt"),
                g = r.default.create((e) => ({ glassIcon: { alignSelf: "center", borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.primary, color: "white", fontSize: e.fontSizes.subtext2, marginEnd: 7, padding: 4 }, glassIconExpanded: { fontSize: e.fontSizes.headline1, marginEnd: 0, marginBottom: e.spaces.space12 } })),
                w = ({ articleNudgeFollowed: e, link: t, onClick: n, shouldShowArticleNudgeTip: a }) => {
                    const r = o.createElement(s.default, { style: g.glassIcon }),
                        l = o.createElement(s.default, { style: [g.glassIcon, g.glassIconExpanded] });
                    return o.createElement(c.Z, { buttonLabel: p, condensedText: e ? m : d, expanded: a, heading: e ? m : d, icon: r, iconExpanded: l, isExpandable: !0, learnMoreLink: b, link: t, onPress: n, subheading: e ? h : u });
                };
        },
        553161: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(202784),
                a = n(111677),
                r = n.n(a),
                l = n(805e3),
                i = n(467691);
            const s = r().g7135e44,
                c = r().h9b6d468,
                d = r().af5cd00e,
                u = r().e29c651e,
                p = (e) => {
                    const {
                            action: t,
                            actionTaken: n,
                            forwardPivotInfo: { landingUrl: a, text: r },
                            onActionTaken: p,
                        } = e,
                        m = t === i.S.like ? s : c;
                    return o.createElement(l.Z, { buttonLabel: d, condensedText: u, expanded: !n, heading: r.text, key: "misinfo-nudge", link: a.url, onPress: () => p(t, u), subheading: m });
                },
                m = o.memo(p);
        },
        931974: (e, t, n) => {
            n.d(t, { Z: () => E });
            var o = n(807896),
                a = n(202784),
                r = n(325686),
                l = n(731708),
                i = n(696591),
                s = n(154003),
                c = n(530732),
                d = n(392237),
                u = n(111677),
                p = n.n(u),
                m = n(211971),
                h = n(58399),
                b = n(686689),
                g = n(946409);
            const w = p().e29c651e,
                f = ({ action: e, actionTaken: t, onActionTaken: n, payload: { cta_title: d, cta_url: u, heading: p, icon_name: f, post_cta_text: E, subheading: _ } }) => {
                    const C = a.useCallback(() => n(e, E?.text || w), [e, n, E]),
                        k = u && (0, g.s9)(u),
                        x = ((e, t) => {
                            const n = { style: [y.iconPrimaryColor, t ? y.iconPostAction : y.iconPreAction] };
                            return "error_circle" === e ? a.createElement(m.default, (0, o.Z)({ testID: "error_circle_icon" }, n)) : null;
                        })(f, t),
                        Z = E ? a.createElement(b.Z, (0, o.Z)({ style: y.postActionText }, E)) : a.createElement(l.ZP, { style: y.postActionText }, w),
                        S = p ? a.createElement(i.Z, { align: "center", size: "title4", style: y.text, weight: "bold" }, p) : null,
                        T = d && k ? a.createElement(s.ZP, { link: k, onPress: C, style: y.ctaButton, type: "brandFilled" }, d) : null;
                    return t ? a.createElement(c.Z, { focusable: !0, link: k, onPress: C, style: [y.container, y.containerPostAction] }, ({ isHovered: e }) => a.createElement(a.Fragment, null, x, Z, a.createElement(h.default, { style: [e ? y.iconPrimaryColor : y.iconGrayColor, y.rightIcon] }))) : a.createElement(r.Z, { focusable: !0, style: [y.container, y.containerPreAction] }, x, S, a.createElement(b.Z, (0, o.Z)({ alignment: "Center", color: "gray700" }, _)), T);
                },
                y = d.default.create((e) => ({ container: { alignItems: "center", backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.small, margin: e.spaces.space12 }, containerPreAction: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space20 }, containerPostAction: { flexDirection: "row", padding: e.spaces.space12 }, iconPrimaryColor: { color: e.colors.primary }, iconGrayColor: { color: e.colors.gray300 }, iconPreAction: { fontSize: e.fontSizes.title4, paddingBottom: e.spaces.space12 }, iconPostAction: { fontSize: e.fontSizes.headline1, paddingEnd: e.spaces.space4 }, rightIcon: { fontSize: e.fontSizes.body, paddingStart: e.spaces.space4 }, text: { textAlign: "center", paddingBottom: e.spaces.space16 }, postActionText: { paddingEnd: e.spaces.space2 }, ctaButton: { marginTop: e.spaces.space16 } })),
                E = a.memo(f);
        },
        805e3: (e, t, n) => {
            n.d(t, { Z: () => y });
            var o = n(202784),
                a = n(325686),
                r = n(696591),
                l = n(731708),
                i = n(154003),
                s = n(530732),
                c = n(466792),
                d = n(392237),
                u = n(111677),
                p = n.n(u),
                m = n(211971),
                h = n(711223),
                b = n(58399);
            const g = p().i859a9d4,
                w = p().gc45a90a,
                f = d.default.create((e) => ({ container: { alignItems: "center", backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.small, margin: e.spaces.space12 }, containerExpanded: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space20 }, containerCondensed: { flexDirection: "row", padding: e.spaces.space12 }, iconPrimaryColor: { color: e.colors.primary }, iconGrayColor: { color: e.colors.gray300 }, iconExpanded: { fontSize: e.fontSizes.title4, paddingBottom: e.spaces.space12 }, iconCondensed: { fontSize: e.fontSizes.headline1, paddingEnd: e.spaces.space4 }, learnMore: { color: e.colors.link, paddingBottom: e.spaces.space16 }, rightIcon: { fontSize: e.fontSizes.body, paddingStart: e.spaces.space4 }, text: { textAlign: "center", paddingBottom: e.spaces.space16 }, condensedText: { paddingEnd: e.spaces.space2 }, infoButton: { marginStart: "auto", marginEnd: `calc(-1 * ${e.spaces.space8})` }, infoIconPrimary: { color: e.colors.primary }, infoIconGray: { color: e.colors.gray300 } })),
                y = ({ buttonLabel: e, condensedText: t, expanded: n, heading: d, icon: u, iconExpanded: p, isExpandable: y = !1, learnMoreLink: E, link: _, onPress: C, subheading: k }) => {
                    const [x, Z] = o.useState(n),
                        S = (e) => {
                            e.preventDefault(), e.stopPropagation(), Z(!0);
                        };
                    return x ? o.createElement(a.Z, { focusable: !0, style: [f.container, f.containerExpanded] }, p || u || o.createElement(m.default, { style: [f.iconPrimaryColor, f.iconExpanded] }), o.createElement(r.Z, { align: "center", size: "title4", style: f.text, weight: "bold" }, d), o.createElement(r.Z, { align: "center", color: "gray700", style: f.text }, k), E ? o.createElement(l.ZP, { align: "center", link: E, style: f.learnMore }, g) : null, o.createElement(i.ZP, { link: _, onPress: C, type: "brandFilled" }, e)) : o.createElement(s.Z, { focusable: !0, link: _, onPress: C, style: [f.container, f.containerCondensed] }, ({ isHovered: e }) => o.createElement(o.Fragment, null, u || o.createElement(m.default, { style: [f.iconPrimaryColor, f.iconCondensed] }), o.createElement(l.ZP, { style: f.condensedText }, t), y ? o.createElement(c.Z, null, ({ isHovered: e }) => o.createElement(i.ZP, { "aria-label": w, icon: o.createElement(h.default, { style: e ? f.infoIconPrimary : f.infoIconGray }), onClick: S, size: "xSmall", style: f.infoButton, type: "brandText" })) : o.createElement(b.default, { style: [e ? f.iconPrimaryColor : f.iconGrayColor, f.rightIcon] })));
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
            n.d(t, { Z: () => b });
            var o = n(202784),
                a = n(325686),
                r = n(952428),
                l = n(872405),
                i = n(823161),
                s = n(154003),
                c = n(731708),
                d = n(392237),
                u = n(111677),
                p = n.n(u);
            const m = p().df45f564,
                h = p().i569ff3e;
            class b extends o.PureComponent {
                componentDidMount() {
                    const { onImpression: e } = this.props;
                    e && e();
                }
                render() {
                    const { avatarUrl: e, onClick: t, style: n, to: d, userName: u, withButton: p, withConversationLine: b } = this.props,
                        w = e && u;
                    return o.createElement(r.Z, { link: d, onClick: t, style: [g.root, n] }, o.createElement(l.Z, { avatarCell: w ? o.createElement(a.Z, { style: [g.avatarColumn, !b && g.avatarColumnWithoutLine] }, b ? o.createElement(a.Z, { style: g.conversationLine }) : null, o.createElement(i.default, { size: "large", uri: e })) : null, avatarCellStyle: g.conversationConnector, cellStyle: p ? g.buttonContainer : w ? g.labelWithAvatar : g.label }, p ? o.createElement(s.ZP, { role: "none", size: "xSmall", style: g.button, type: "brandOutlined" }, m) : o.createElement(c.ZP, { color: "link", style: g.enlargeTouchTarget }, h)));
                }
            }
            b.defaultProps = { withButton: !1, withConversationLine: !1 };
            const g = d.default.create((e) => ({ root: { overflow: "hidden", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space2 }, avatarColumn: { flexDirection: "column", flexGrow: 0, alignItems: "center", paddingBottom: e.spaces.space4 }, avatarColumnWithoutLine: { paddingTop: e.spaces.space12 }, conversationConnector: { alignItems: "center", display: "flex", position: "relative" }, label: { flexGrow: 1, paddingVertical: e.spaces.space4 }, labelWithAvatar: { flexGrow: 1, justifyContent: "center" }, conversationLine: { backgroundColor: e.colors.gray200, flexGrow: 1, flexShrink: 1, width: e.componentDimensions.conversationLineWidth, marginBottom: e.spaces.space4 }, buttonContainer: { paddingVertical: e.spaces.space4, flexDirection: "row", flexGrow: 1 }, button: { marginVertical: e.spaces.space4 }, enlargeTouchTarget: { paddingVertical: e.spaces.space8 } }));
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
            const r = (0, o.Z)({ loader: () => Promise.all([n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"), n.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"), n.e("loader.TexBlock")]).then(n.bind(n, 753440)) });
        },
        746795: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(807896),
                a = n(202784),
                r = n(325686),
                l = n(449945),
                i = n(686689),
                s = n(177371),
                c = n(725516);
            const d = "inner_tombstone";
            function u({ children: e, config: t, id: n }) {
                const u = (0, c.z)();
                const p = t.richRevealText?.text || t.revealText,
                    m = t.richText
                        ? a.createElement(i.Z, {
                              alignment: t.richText.alignment,
                              entities: t.richText.entities,
                              onEntityClick: function () {
                                  u.scribe({ action: "open_link", component: d });
                              },
                              rtl: t.richText.rtl,
                              text: t.richText.text,
                          })
                        : t.text;
                return a.createElement(
                    r.Z,
                    { id: n },
                    p
                        ? a.createElement(
                              l.Z,
                              {
                                  label: m,
                                  onReveal: function () {
                                      u.scribe({ action: "click", component: d });
                                  },
                                  render: ({ onActionClick: e, ...t }) => a.createElement(s.Z, (0, o.Z)({}, t, { inline: !0, onClick: e })),
                                  revealLabel: p,
                              },
                              e,
                          )
                        : a.createElement(s.Z, { inline: !0 }, m),
                );
            }
        },
        184482: (e, t, n) => {
            n.d(t, { Z: () => w });
            var o = n(202784),
                a = n(325686),
                r = n(952428),
                l = n(731708),
                i = n(392237),
                s = n(111677),
                c = n.n(s),
                d = n(53674),
                u = n(443781),
                p = n(533128),
                m = n(400300);
            const h = c().eb748f7e;
            class b extends o.PureComponent {
                constructor(...e) {
                    super(...e), (this._shouldDisable = p.$y.bind(null, this.context.featureSwitches));
                }
                render() {
                    const { endControl: e, onAnalyticsClick: t, style: n, tweet: i, viewerUserId: s } = this.props;
                    return !this._shouldDisable(i, p.d.ViewTweetActivity) && s === i.user.id_str ? o.createElement(a.Z, { style: [g.analyticsContainerWithChildren, n] }, o.createElement(r.Z, { link: `${i.permalink}/analytics`, onPress: t, style: g.analyticsButton, testID: m.Z.analyticsButton }, o.createElement(d.default, { style: g.analyticsIcon }), o.createElement(l.ZP, { color: "gray700" }, h)), e) : null;
                }
            }
            b.contextType = u.rC;
            const g = i.default.create((e) => ({ analyticsIcon: { color: e.colors.gray700, paddingEnd: e.spaces.space4 }, analyticsButton: { paddingVertical: e.spaces.space16, flexDirection: "row", flexGrow: 1 }, analyticsContainerWithChildren: { justifyContent: "space-between", borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px", flexDirection: "row", alignItems: "center" } })),
                w = b;
        },
        587653: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                a = n(891198),
                r = n(98538),
                l = n(731708),
                i = n(111677),
                s = n.n(i),
                c = n(288955);
            const d = (0, n(725516).Z)(({ coinCount: e, isLabel: t, link: n }) => {
                const i = a.ZP.getTruncatedCount(Number(e)),
                    d = o.useMemo(() => ({ actionName: o.createElement(r.Z.Label, null), statDisplay: t ? o.createElement(r.Z.Label, null) : o.createElement(r.Z.Value, { animated: !0, count: Number(e) }) }), [e, t]),
                    u = o.useMemo(() => ({ count: Number(e), displayCoins: i }), [e, i]);
                return o.createElement(c.Z, null, (e) => o.createElement(r.Z, { link: n, onPress: e?.() }, o.createElement(l.ZP, null, o.createElement(s().I18NFormatMessage, { $i18n: "c5064c6f" }, o.cloneElement(d.statDisplay, null, s().b7cff250({ displayCoins: u.displayCoins })), o.cloneElement(d.actionName, null, s().g62dcfbc({ count: u.count }))))));
            });
        },
        494718: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(807896),
                a = n(202784),
                r = n(737082),
                l = n(725405);
            const i = (e) => {
                const t = (0, l.Z)();
                return a.createElement(
                    r.Z,
                    (0, o.Z)({}, e, {
                        handleAnchorAction: () => {
                            t.scribe({ component: "conversation_control_prompt", element: "see_conversation", action: "click" });
                        },
                        handleAnchorOpen: (e) => {
                            t.scribe({ element: e, action: "click" });
                        },
                        handleAnchorSecondaryAction: () => {
                            t.scribe({ component: "conversation_control_prompt", element: "ok", action: "click" });
                        },
                        handleHeadsUpImpression: (e, n) => {
                            t.scribe({ element: "heads_up_context", action: n, data: { tweet_id: e } });
                        },
                    }),
                );
            };
        },
        741105: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(202784),
                a = n(325686),
                r = n(782261),
                l = n(952428),
                i = n(731708),
                s = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(53674),
                p = n(443781),
                m = n(533128),
                h = n(400300);
            const b = d().c5491b5d;
            class g extends o.PureComponent {
                constructor(...e) {
                    super(...e), (this._shouldDisable = m.$y.bind(null, this.context.featureSwitches));
                }
                render() {
                    const { endControl: e, onEngagementsClick: t, style: n, tweet: s, viewerUserId: c } = this.props,
                        d = !this._shouldDisable(s, m.d.ViewTweetActivity) && c === s.user.id_str,
                        p = this.context.featureSwitches.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        g = r.Z.getLocalizedEntityName({ tweet: s, articlesEnabled: p });
                    return d ? o.createElement(a.Z, { style: [w.engagementsContainerWithChildren, n] }, o.createElement(l.Z, { link: `${s.permalink}/quotes`, onPress: t, style: w.engagementsButton, testID: h.Z.analyticsButton }, o.createElement(u.default, { style: w.engagementsIcon }), o.createElement(i.ZP, { color: "gray700" }, b({ entity: g }))), e) : null;
                }
            }
            g.contextType = p.rC;
            const w = s.default.create((e) => ({ engagementsIcon: { color: e.colors.gray700, paddingEnd: e.spaces.space4 }, engagementsButton: { paddingVertical: e.spaces.space16, flexDirection: "row", flexGrow: 1 }, engagementsContainerWithChildren: { justifyContent: "space-between", borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px", flexDirection: "row", alignItems: "center" } })),
                f = g;
        },
        592711: (e, t, n) => {
            n.d(t, { f5: () => a, xR: () => r });
            var o = n(782261);
            function a(e, t, n) {
                const a = o.Z.getOriginalTweet(e),
                    r = a?.entities?.hashtags;
                if (!Array.isArray(r) || r.length < 1) return;
                const l = r[0],
                    i =
                        n &&
                        (function (e) {
                            const t = o.Z.getOriginalTweet(e),
                                n = t.extended_entities && t.extended_entities.media;
                            return !!(n && n.length > 0) && n.some((e) => "animated_gif" === e.type);
                        })(e);
                return i && t.isTrue("responsive_web_hashtag_highlight_is_enabled") ? l.text : void 0;
            }
            function r(e, t) {
                if (e && t.isTrue("responsive_web_hashtag_highlight_show_avatar")) return e.profile_image_url_https;
            }
        },
        447373: (e, t, n) => {
            n.d(t, { Z: () => v });
            var o = n(202784),
                a = n(928316),
                r = n(325686),
                l = n(392237),
                i = n(757483),
                s = n(215337),
                c = n(731708),
                d = n(138099),
                u = n(530525),
                p = n(439592),
                m = n(154003),
                h = n(111677),
                b = n.n(h),
                g = n(323265),
                w = n(443781),
                f = n(725516);
            const y = n.p + "promote_popup_image.1af114ea.png",
                E = b().c14cdb18,
                _ = b().be059f7e,
                C = b().c34f845e,
                k = b().c37102aa,
                x = b().ac245c4c,
                Z = b().e4db6326,
                S = (e) => {
                    const { hasSocialContext: t, onDismiss: n } = e,
                        [d, u] = o.useState(!0),
                        p = l.default.theme.colors.white,
                        m = o.useCallback(() => [i.Z.hexToCss(p || l.default.theme.colors.white, 0.2), i.Z.hexToCss(p || l.default.theme.colors.white, 0.5), i.Z.hexToCss(p || l.default.theme.colors.white, 0.1), i.Z.hexToCss(p || l.default.theme.colors.white, 0.1)], [p]),
                        h = { top: t ? 74 : 58 },
                        b = o.useRef(null);
                    o.useEffect(() => {
                        const e = document.querySelector('[data-testid="tweet"]');
                        e && (b.current = e);
                    }, []);
                    return b.current
                        ? d &&
                              (0, a.createPortal)(
                                  o.createElement(
                                      r.Z,
                                      {
                                          onClick: () => {
                                              u(!1), n && n();
                                          },
                                          style: [h, P.promotePopup],
                                      },
                                      o.createElement(r.Z, { style: P.popupTriangle }),
                                      o.createElement(s.Z, { angle: 90, colors: m(), style: P.popupGradient }),
                                      o.createElement(c.ZP, { color: "alwaysBlack" }, _),
                                  ),
                                  b.current,
                              )
                        : null;
                },
                T = (e) => {
                    const { onDismiss: t, onPromotePress: n, promoteLink: a } = e;
                    return o.createElement(
                        d.Z,
                        { onMaskClick: t, type: "bottom", withMask: !0 },
                        o.createElement(
                            r.Z,
                            null,
                            o.createElement(u.Z, { "aria-label": "", aspectMode: p.Z.exact(2), image: y }),
                            o.createElement(
                                r.Z,
                                { style: P.contentContainer },
                                o.createElement(r.Z, { style: P.popupTitle }, o.createElement(c.ZP, { align: "left", role: "heading", size: "title4", weight: "heavy" }, C)),
                                o.createElement(c.ZP, null, k),
                                o.createElement(
                                    m.ZP,
                                    {
                                        link: a,
                                        onClick: function () {
                                            t(), n();
                                        },
                                        style: P.boostButton,
                                        type: "primaryFilled",
                                    },
                                    x,
                                ),
                                o.createElement(m.ZP, { onClick: t, type: "secondaryFilled" }, Z),
                            ),
                        ),
                    );
                };
            function v(e) {
                const { featureSwitches: t } = (0, w.QZ)(),
                    n = (0, f.z)(),
                    [a, r] = o.useState({ isVisible: !1, wasLoaded: !1 }),
                    l = t.isTrue("rweb_quick_promote_boost_enabled"),
                    i = t.isTrue("responsive_web_qp_two_screens_enabled"),
                    s = t.isTrue("responsive_web_qp_full_popup_enabled"),
                    c = e.isFocal ? "small" : "xSmall",
                    d = e.isFocal ? "primaryFilled" : "primaryOutlined";
                function u() {
                    a.wasLoaded ? n.scribe({ page: "tweet", component: "tweet_promote_button", action: "click_label" }) : n.scribe({ page: "tweet", component: "tweet_promote_button", action: "click" });
                }
                function p() {
                    r((e) => ({ ...e, isVisible: !1 }));
                }
                const h = l && g.ZP.isTwitterApp() && g.ZP.isAndroid() ? "quick_promote_lite_web" : i ? "quick_promote_web/targeting" : "quick_promote_web/intro";
                return (
                    o.useEffect(() => {
                        if (e.isFocal) {
                            n.scribe({ page: "tweet", component: "tweet_promote_button", action: "load" });
                            const e = localStorage.getItem("lastPromotePopup");
                            if (e) {
                                if (Date.now() - parseInt(e, 10) < 6048e5) return;
                            }
                            localStorage.setItem("lastPromotePopup", Date.now().toString()), r((e) => ({ ...e, isVisible: !0, wasLoaded: !0 })), n.scribe({ page: "tweet", component: "tweet_promote_button_popup", action: "load" });
                        }
                    }, []),
                    o.createElement(o.Fragment, null, o.createElement(m.ZP, { link: `${e.permalink}/${h}`, onPress: u, size: c, type: d }, E), e.isFocal && a.isVisible && (s ? o.createElement(T, { onDismiss: p, onPromotePress: u, promoteLink: `${e.permalink}/quick_promote_web/intro` }) : o.createElement(S, { hasSocialContext: e.hasSocialContext, onDismiss: p })))
                );
            }
            const P = l.default.create((e) => ({ promotePopup: { backgroundColor: e.colors.yellow400, borderRadius: e.borderRadii.medium, boxShadowColor: e.colors.gray0, boxShadowOffset: { width: -2, height: 2 }, boxShadowOpacity: 0.5, boxShadowRadius: 2, cursor: "default", end: 50, minWidth: 260, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8, position: "absolute", whiteSpace: "nowrap", zIndex: 5 }, popupGradient: { borderRadius: e.borderRadii.medium, height: "100%", position: "absolute", start: 0, top: 0, width: "100%" }, popupTriangle: { borderBottomColor: e.colors.yellow400, borderBottomWidth: 6, borderEndColor: e.colors.buttonWhite, borderEndWidth: 6, borderStartColor: e.colors.buttonWhite, borderStartWidth: 6, borderStyle: "solid", end: 70, position: "absolute", top: -6 }, contentContainer: { paddingHorizontal: e.spaces.space40, paddingBottom: e.spaces.space40, paddingTop: e.spaces.space20 }, popupTitle: { marginVertical: e.spaces.space20 }, boostButton: { marginVertical: e.spaces.space20 } }));
        },
        585041: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(202784),
                a = n(325686),
                r = n(731708),
                l = n(392237),
                i = n(111677),
                s = n.n(i),
                c = n(283379);
            const d = s().g6237a1e,
                u = s().d6b5949e,
                p = (e) => ("paused" === e ? u : d),
                m = (e) => {
                    const { id: t, status: n, style: l } = e,
                        i = "paused" === n;
                    return o.createElement(a.Z, { style: [h.root, l] }, o.createElement(c.default, { style: [h.icon, i ? h.withGray700 : null] }), o.createElement(r.ZP, { color: i ? "gray700" : "text", id: t, size: "subtext2" }, p(n)));
                },
                h = l.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.buttonBlack, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, withGray700: { color: e.colors.gray700 } }));
        },
        549613: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var o = n(202784),
                a = n(325686),
                r = n(392237),
                l = n(952428),
                i = n(731708),
                s = n(891198),
                c = n(98538),
                d = n(111677),
                u = n.n(d),
                p = n(288955),
                m = n(725516);
            const h = u().g5775e46,
                b = r.default.theme.spacesPx.space20;
            class g extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderQuoteTweetTimelinePivot = () => {
                            const { permalink: e } = this.props;
                            return o.createElement(l.Z, { link: `${e}/retweets/with_comments`, onPress: this._handleQuoteTweetPivotScribeOnClick, style: w.quoteTweetPivot, withDarkerInteractiveBackground: !1 }, o.createElement(i.ZP, { color: "primary" }, h));
                        }),
                        (this._getLayoutHandlerForElementWidth = (e) => (t) => {
                            const n = t.nativeEvent.layout.width,
                                o = n && "containerWidth" !== e ? n + b : (n ?? 0);
                            o !== this.state[e] && this.setState({ [e]: o });
                        }),
                        (this._handleBookmarkStatLayout = this._getLayoutHandlerForElementWidth("bookmarkStatWidth")),
                        (this._handleLikeStatLayout = this._getLayoutHandlerForElementWidth("likeStatWidth")),
                        (this._handleQuoteStatLayout = this._getLayoutHandlerForElementWidth("quoteStatWidth")),
                        (this._handleRetweetStatLayout = this._getLayoutHandlerForElementWidth("retweetStatWidth")),
                        (this._handleStatGroupLayout = this._getLayoutHandlerForElementWidth("containerWidth")),
                        (this._handleLikeTweetScribeOnClick = () => {
                            this.props.analytics.scribe({ action: "click", element: "like_stat" });
                        }),
                        (this._handleQuoteTweetScribeOnClick = () => {
                            this.props.analytics.scribe({ action: "click", element: "quote_tweet_stat" });
                        }),
                        (this._handleQuoteTweetPivotScribeOnClick = () => {
                            this.props.analytics.scribe({ action: "click", element: "quote_tweet_pivot" });
                        }),
                        (this._handleRetweetScribeOnClick = () => {
                            this.props.analytics.scribe({ action: "click", element: "retweet_stat" });
                        }),
                        (this.state = { bookmarkStatWidth: void 0, containerWidth: void 0, likeStatWidth: void 0, quoteStatWidth: void 0, retweetStatWidth: void 0 });
                }
                componentDidMount() {
                    const { analytics: e, isNonCompliantTweet: t } = this.props;
                    t && e.scribe({ element: "quote_tweet_pivot", action: "impression" });
                }
                render() {
                    const { isNonCompliantTweet: e } = this.props;
                    return e ? this._renderQuoteTweetTimelinePivot() : this._renderStats();
                }
                _renderBookmarksStat(e) {
                    const t = s.ZP.getTruncatedCount(e);
                    return o.createElement(a.Z, { onLayout: this._handleBookmarkStatLayout, style: w.stat }, o.createElement(c.Z, { count: e }, o.createElement(u().I18NFormatMessage, { $i18n: "ef5d531f" }, o.createElement(c.Z.Value, { animated: !0, count: e }, u().bb192c6b({ displayCount: t })), o.createElement(c.Z.Label, null, u().f23d99b0({ count: e })))));
                }
                _renderLikesStat(e) {
                    const { permalink: t } = this.props,
                        n = s.ZP.getTruncatedCount(e);
                    return o.createElement(
                        a.Z,
                        { onLayout: this._handleLikeStatLayout, style: w.stat },
                        o.createElement(p.Z, null, (a) => o.createElement(c.Z, { count: e, link: `${t}/likes`, onPress: a(this._handleLikeTweetScribeOnClick) }, o.createElement(u().I18NFormatMessage, { $i18n: "e4eeeeff" }, o.createElement(c.Z.Value, { animated: !0, count: e }, u().e8866a55({ displayCount: n })), o.createElement(c.Z.Label, null, u().eb3abe45({ count: e }))))),
                    );
                }
                _renderQuotesStat(e) {
                    const { permalink: t } = this.props,
                        n = s.ZP.getTruncatedCount(e);
                    return o.createElement(
                        a.Z,
                        { onLayout: this._handleQuoteStatLayout, style: w.stat },
                        o.createElement(p.Z, null, (a) => o.createElement(c.Z, { count: e, link: `${t}/retweets/with_comments`, onPress: a(this._handleQuoteTweetScribeOnClick) }, o.createElement(u().I18NFormatMessage, { $i18n: "c9174f1f" }, o.createElement(c.Z.Value, { animated: !0, count: e }, u().eff958fb({ displayCount: n })), o.createElement(c.Z.Label, null, u().i5a8c515({ count: e }))))),
                    );
                }
                _renderRetweetsStat(e) {
                    const { permalink: t } = this.props,
                        n = s.ZP.getTruncatedCount(e);
                    return o.createElement(
                        a.Z,
                        { onLayout: this._handleRetweetStatLayout, style: w.stat },
                        o.createElement(p.Z, null, (a) => o.createElement(c.Z, { count: e, link: `${t}/retweets`, onPress: a(this._handleRetweetScribeOnClick) }, o.createElement(u().I18NFormatMessage, { $i18n: "d794bc6d" }, o.createElement(c.Z.Value, { animated: !0, count: e }, u().dd77f9fb({ displayCount: n })), o.createElement(c.Z.Label, null, u().a755b81b({ count: e }))))),
                    );
                }
                _renderStats() {
                    const { bookmarkCount: e, likeCount: t, quoteTweetCount: n, retweetCount: r, style: l } = this.props,
                        { bookmarkStatWidth: i = 0, containerWidth: s = 0, likeStatWidth: c = 0, quoteStatWidth: d = 0, retweetStatWidth: u = 0 } = this.state;
                    let p = 0;
                    const m = [!0, !1, !1, !1];
                    [u, d, c, i].forEach((e, t) => {
                        p + e > s ? ((p = e), (m[t] = !0)) : (p += e);
                    });
                    const h = s;
                    return e || t || n || r ? o.createElement(a.Z, { onLayout: this._handleStatGroupLayout, role: "group", style: [w.container, h ? l : w.hidden] }, m[0] ? o.createElement(a.Z, { role: "separator", style: w.separator }) : null, r ? this._renderRetweetsStat(r) : null, m[1] ? o.createElement(a.Z, { role: "separator", style: w.separator }) : null, n ? this._renderQuotesStat(n) : null, m[2] ? o.createElement(a.Z, { role: "separator", style: w.separator }) : null, t ? this._renderLikesStat(t) : null, m[3] ? o.createElement(a.Z, { role: "separator", style: w.separator }) : null, e ? this._renderBookmarksStat(e) : null) : null;
                }
            }
            const w = r.default.create((e) => ({ container: { flexDirection: "row", flexWrap: "wrap" }, stat: { marginEnd: e.spaces.space20, paddingVertical: e.spaces.space16 }, hidden: { visibility: "hidden" }, quoteTweetPivot: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px", paddingVertical: e.spaces.space16 }, separator: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px", height: "1px", width: "100%" } })),
                f = (0, m.Z)(g);
        },
        131133: (e, t, n) => {
            n.d(t, { cN: () => T, eM: () => k, pZ: () => x });
            var o = n(202784),
                a = n(325686),
                r = n(124964),
                l = n(731708),
                i = n(392237),
                s = n(111677),
                c = n.n(s),
                d = n(265196),
                u = n(421575),
                p = n(863934),
                m = n(686689),
                h = n(177371),
                b = n(946409),
                g = n(618566),
                w = n(788993),
                f = n(827922),
                y = n(725516);
            const E = c().gf5e9ea6,
                _ = c().e2f2b658,
                C = Object.freeze({ see_more: c().ffd9cfe6, discover_more: c().d172116a, more: c().h63a5c3c, more_tweets: c().be5df69e, more_suggestions: c().g11ebd34, browse: c().g4a6901a, browse_tweets: c().h6453e74 });
            function k({ featureSwitches: e, isExpanded: t, topic: n, topicContext: o }) {
                return (0, f.SJ)(o) && t && n.not_interested && (!(e.getStringValue("topics_context_controls_implicit_variation") in C) || e.isTrue("topics_context_controls_implicit_context_x_enabled"));
            }
            const x = ({ onUndoTopicNotInterestedClick: e }) => o.createElement(a.Z, { style: v.tombstone }, o.createElement(h.Z, { actionText: E, children: _, inline: !0, onClick: e })),
                Z = (0, y.Z)((e) => {
                    const { analytics: t, bannerText: n, label: i, link: s, linkText: c, onNotInterestedPress: d, topic: u, withRightControl: h } = e,
                        b = n && "" === n.text,
                        g = c && "" === c.text,
                        w = !g,
                        f = !(b || g);
                    return o.createElement(
                        a.Z,
                        { style: v.topicActions },
                        f && o.createElement(r.Z, null),
                        w &&
                            o.createElement(
                                l.ZP,
                                {
                                    color: "primary",
                                    link: s,
                                    onClick: () => {
                                        t.scribeAction("click");
                                    },
                                    size: "subtext2",
                                    weight: "bold",
                                },
                                c ? o.createElement(m.Z, c) : i,
                            ),
                        h ? o.createElement(a.Z, { style: v.notInterestedButtonWrapper }, o.createElement(p.Z, { onPress: d, size: "small", topicId: u.id, type: "brandText", withIconOnly: !0 })) : null,
                    );
                }),
                S = (e) => {
                    const { isExpanded: t, onNotInterestedPress: n, topic: l } = e,
                        i = l.following ? v.followingTopicButtonWrapper : v.followTopicButtonWrapper,
                        s = [t && i, !t && v.followTopicButtonWrapperNotExpanded],
                        c = t ? v.largeNotInterestedButtonWrapper : v.notInterestedButtonWrapper;
                    return o.createElement(a.Z, { style: v.topicActions }, t ? null : o.createElement(r.Z, { style: v.topicMiddot }), o.createElement(a.Z, { style: s }, o.createElement(d.ZP, { isTransparent: !t, showRelationshipChangeConfirmation: !0, size: t ? "small" : "xSmall", style: v.followTopicButton, textMode: u.q.FollowTopic, topic: l })), n || (t && !l.following) ? o.createElement(a.Z, { style: c }, o.createElement(p.Z, { onPress: n, size: "small", topicId: l.id, type: t ? "primaryOutlined" : "brandText", withIconOnly: !t })) : null);
                };
            function T(e) {
                const { featureSwitches: t, iconSize: n, injectedFeedbackItem: a, isExpanded: r, socialContext: l, topic: i, withLeftPadding: s } = e,
                    { contextType: c, landingUrl: d, topicContext: u } = l,
                    p = d ? (0, b.s9)(d) : void 0,
                    h = u && (0, f.Y8)(u),
                    y = u && (0, f.SJ)(u),
                    E = t.isTrue("media_edge_to_edge_content_enabled"),
                    _ = E ? w.Z.TextOnly : w.Z.Topic,
                    k = a?.markNotInterestedTopic?.onClick,
                    x = u ? (0, g.P)(u) : void 0,
                    T = u?.bannerText ? o.createElement(m.Z, u.bannerText) : l.text;
                if (h && t.getStringValue("topics_context_controls_followed_variation") in C) {
                    const e = C[t.getStringValue("topics_context_controls_followed_variation")];
                    return { iconSize: n, contextType: _, rightControl: o.createElement(Z, { bannerText: l.topicContext && l.topicContext.bannerText, label: e, link: p, linkText: l.topicContext && l.topicContext.linkText, topic: i }), withBottomBorder: !1, withLeftPadding: !(t.isTrue("social_context_and_topic_context_refresh_alignment_enabled") || E), topicData: x, text: T };
                }
                if (y) {
                    if (t.getStringValue("topics_context_controls_implicit_variation") in C) {
                        const e = C[t.getStringValue("topics_context_controls_implicit_variation")];
                        return { iconSize: n, contextType: _, rightControl: o.createElement(Z, { bannerText: l.topicContext && l.topicContext.bannerText, label: e, link: p, linkText: l.topicContext?.linkText, onNotInterestedPress: k, topic: i, withRightControl: t.isTrue("topics_context_controls_implicit_context_x_enabled") }), topicData: x, text: T, withBottomBorder: !1, withLeftPadding: !(t.isTrue("social_context_and_topic_context_refresh_alignment_enabled") || E) };
                    }
                    {
                        const e = o.createElement(S, { isExpanded: r, onNotInterestedPress: k, topic: i });
                        return r ? { bottomControl: e, contextType: c, iconSize: "xLarge", iconStyle: v.iconStyle, textColor: "text", textSize: "headline1", text: l.text, topicData: void 0, withBottomBorder: !0, withLeftPadding: s } : { contextType: c, iconSize: n, iconStyle: v.iconStyle, rightControl: e, topicData: x, text: l.text, withBottomBorder: !0, withLeftPadding: s };
                    }
                }
                return { contextType: c, iconSize: n, text: l.text, withLeftPadding: s };
            }
            const v = i.default.create((e) => ({ tombstone: { paddingBottom: e.componentDimensions.gutterVertical }, iconStyle: { paddingBottom: `calc(${e.spaces.space2} + ${e.spaces.space1})`, marginBottom: e.spaces.space4 }, topicActions: { flexDirection: "row", flexGrow: 1, alignItems: "center", minHeight: e.spaces.space32 }, topicMiddot: { alignSelf: "center", paddingEnd: 0 }, followTopicButton: { marginTop: e.spaces.space1 }, followTopicButtonWrapperNotExpanded: { marginBottom: e.spaces.space2 }, followTopicButtonWrapper: { marginVertical: e.spaces.space4, paddingEnd: e.spaces.space4, width: "50%" }, followingTopicButtonWrapper: { marginVertical: e.spaces.space4, width: "100%" }, notInterestedButtonWrapper: { alignItems: "flex-end", flexGrow: 1 }, largeNotInterestedButtonWrapper: { marginVertical: e.spaces.space4, paddingStart: e.spaces.space4, width: "50%" } }));
        },
        764372: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                a = n(325686),
                r = n(254554),
                l = n(392237),
                i = n(265196),
                s = n(421575),
                c = n(686689);
            const d = l.default.create((e) => ({ topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: `-${e.spaces.space8}` } })),
                u = ({ defaultRef: e, topic: t, topicFollowPrompt: n }) => {
                    const { entities: l, text: u } = n?.description || {};
                    return o.createElement(a.Z, { style: d.topicFollowPrompt }, o.createElement(r.Z, { containerRef: e, primaryAction: o.createElement(i.ZP, { showRelationshipChangeConfirmation: !0, textMode: s.q.FollowTopic, topic: t }), text: o.createElement(c.Z, { entities: l, text: u }) }));
                };
        },
        914564: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                a = n(731708),
                r = n(392237),
                l = n(111677),
                i = n.n(l),
                s = n(808525);
            const c = i().aaad27c8;
            function d({ color: e = "magenta500", name: t }) {
                return o.createElement(a.ZP, { color: e }, o.createElement(s.default, { "aria-label": c, style: [u.icon, { backgroundColor: r.default.theme.colors[e] }] }), t);
            }
            const u = r.default.create(({ borderRadii: e, colors: t, fontSizes: n, primaryColorName: o, spaces: a }) => ({ icon: { borderRadius: e.infinite, color: t.whiteOnColor, fontSize: n.subtext3, marginEnd: a.space4, padding: a.space2 } }));
        },
        494569: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(202784);
            const o = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        n.e("loader.Grok"),
                    ]).then(n.bind(n, 223526)),
            });
        },
        994057: (e, t, n) => {
            n.d(t, { C: () => c });
            var o = n(202784),
                a = n(392237),
                r = n(731708),
                l = n(111677);
            const i = n.n(l)().aaad27c8,
                s = a.default.create(({ borderRadii: e, colors: t, fontSizes: n, lineHeights: o, paletteName: a, spaces: r }) => ({ label: { backgroundColor: "light" === a ? t.gray800 : t.gray200, border: `${r.space1} solid ${t.cellBackground}`, borderRadius: e.small, color: "light" === a ? t.whiteOnColor : t.text, fontSize: n.subtext3, lineHeight: o.subtext3, margin: "auto", maxWidth: "100%", paddingHorizontal: r.space2, paddingVertical: r.space1, wordBreak: "break-all" } }));
            function c() {
                return o.createElement(r.ZP, { style: s.label }, i);
            }
        },
        756632: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(202784),
                a = n(325686),
                r = n(530525),
                l = n(155727),
                i = n(235902),
                s = n(823161),
                c = n(392237),
                d = n(37341);
            const u = r.Z.createLayoutCache(),
                p = c.default.create((e) => ({ avatar: { display: "block" }, avatarWrapper: { flexShrink: 1, flexGrow: 0, width: "100%" } })),
                m = (e) => {
                    const { avatarRef: t, id: n, link: r, onClick: c, onHoverCardScreenNameClick: m, promotedContent: h, screenName: b, uri: g, userAvatarLabel: w, userId: f, withHoverCard: y = !0, withLink: E = !0, withUserPresence: _ = !1 } = e;
                    return o.createElement(
                        a.Z,
                        { style: p.avatarWrapper },
                        o.createElement(l.Z.Consumer, null, ({ avatarSize: e }) => (_ ? o.createElement(d.Z, { avatarRef: t, id: n, imageLayoutCache: u, onClick: c, onHoverCardScreenNameClick: m, promotedContent: h, screenName: b, size: e, style: p.avatar, uri: g, userAvatarLabel: w, userId: f, withHoverCard: y, withLink: E }) : o.createElement(i.ZP.Provider, { value: { userAvatarLabel: () => w } }, o.createElement(s.default, { avatarRef: t, id: n, imageLayoutCache: u, link: r, onClick: c, onHoverCardScreenNameClick: m, promotedContent: h, screenName: b, size: e, style: p.avatar, uri: g, userId: f, withHoverCard: y, withLink: E })))),
                    );
                };
        },
        400300: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = { analyticsButton: "analyticsButton", promotedIndicator: "promotedIndicator", readerModeBottomBar: "readerModeBottomBar", socialContext: "socialContext", tweet: "tweet" };
        },
        724573: (e, t, n) => {
            n.d(t, { n: () => i });
            var o = n(807896),
                a = n(202784),
                r = n(163889);
            class l extends a.Component {
                componentDidCatch(e, t) {
                    try {
                        const { tweet: a } = this.props;
                        !this.props.tweet.user.protected && e && "object" == typeof e && (0, r.Hj)(e, { extra: { componentStack: ((n = t.componentStack), (o = 2e3), n.length > o ? `${n.slice(0, o - 3)}...` : n), tweetId: a.id_str } });
                    } catch {}
                    var n, o;
                    throw e;
                }
                render() {
                    const { children: e } = this.props;
                    return e;
                }
            }
            function i(e) {
                return a.forwardRef((t, n) => a.createElement(l, { tweet: t.tweet }, a.createElement(e, (0, o.Z)({}, t, { ref: n }))));
            }
        },
        375260: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(807896),
                a = n(202784),
                r = n(495580),
                l = n(725405);
            const i = ({ scribeElement: e, ...t }) => {
                const n = (0, l.Z)();
                return a.createElement(
                    r.Z,
                    (0, o.Z)({}, t, {
                        onAction: () => {
                            n.scribe({ component: "conversation_control_prompt", element: "see_conversation", action: "click" });
                        },
                        onOpen: () => {
                            n.scribe({ element: e, action: "click" });
                        },
                        onSecondaryAction: () => {
                            n.scribe({ component: "conversation_control_prompt", element: "ok", action: "click" });
                        },
                    }),
                );
            };
        },
        578870: (e, t, n) => {
            n.d(t, { _: () => r });
            var o = n(202784),
                a = n(524496);
            function r(e) {
                return o.createElement(a.Z, e);
            }
        },
        790082: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(202784),
                a = n(301503),
                r = n(989272),
                l = n(392237),
                i = n(925873),
                s = n(187669),
                c = n(949626),
                d = n(578870);
            const u = "twitter-article-media-caption-id",
                p = ({ caption: e }) => (
                    (0, s.q)(() => {
                        (0, r.fH)(`\n      .${u} .longform-unstyled,\n      .${u} .longform-unstyled a\n       {\n        font-size: ${l.default.theme.fontSizes.subtext2} !important;\n        line-height: ${l.default.theme.lineHeights.subtext2} !important;\n        margin-bottom: 0;\n      }\n\n      .${u} .longform-unstyled-narrow,\n      .${u} .longform-unstyled-narrow a\n       {\n        font-size: ${l.default.theme.fontSizes.subtext2} !important;\n        line-height: ${l.default.theme.lineHeights.subtext2} !important;\n        margin-bottom: 0;\n      }\n\n      .${u} .longform-unstyled,\n      .${u} .longform-unstyled a:not(:hover),\n      .${u} .longform-unstyled-narrow,\n      .${u} .longform-unstyled-narrow a:not(:hover) {\n        color: ${l.default.theme.colors.gray800} !important;\n      }\n    `, u);
                    }),
                    o.createElement(c.Z, { className: u }, o.createElement(d._, { contentState: (0, a.convertToRaw)(i.Z.initEditorState(e).getCurrentContent()) }))
                );
        },
        246134: (e, t, n) => {
            n.d(t, { ZP: () => De, VN: () => Ce });
            var o = n(202784),
                a = n(325686),
                r = n(537392),
                l = n(786475),
                i = n(530732),
                s = n(103737),
                c = n(530525),
                d = n(439592),
                u = n(167630),
                p = n(661810),
                m = n(731708),
                h = n(891198),
                b = n(392237),
                g = n(111677),
                w = n.n(g),
                f = n(166502),
                y = n(187669),
                E = n(19640),
                _ = n(443781),
                C = n(778955),
                k = n(240089),
                x = n(959959),
                Z = n(793211),
                S = n(725516),
                T = n(794057),
                v = n(727828),
                P = n(751632),
                D = n(470397),
                B = n(966886),
                M = n(155727),
                I = n(823161),
                A = n(366635),
                L = n(23134),
                R = n(952793),
                W = n(655352),
                $ = n(125363),
                z = n(390387),
                N = n(949626);
            const V = b.default.create((e) => ({ root: { display: "flex", overflow: "hidden" } })),
                F = (e) => {
                    const { author: t, children: n } = e,
                        a = `https://www.twitter.com/${t.screen_name}`;
                    return o.createElement(N.Z, { itemProp: "author", itemScope: !0, itemType: "https://schema.org/Person", style: V.root }, o.createElement("meta", { content: t.name, itemProp: "name" }), o.createElement("meta", { content: t.screen_name, itemProp: "additionalName" }), o.createElement("meta", { content: a, itemProp: "url" }), o.createElement("meta", { content: t.profile_image_url_https, itemProp: "image" }), n);
                };
            var H = n(157130),
                O = n(500201),
                G = n(323265);
            const q = w().ced3c85a,
                U = b.default.create((e) => ({ popover: { minWidth: e.spaces.space80, marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space12, justifyContent: "center" }, label: { cursor: "pointer" }, lastEditedText: { color: e.colors.buttonBlack } })),
                j = ({ lastPublishedAtMs: e }) => {
                    const t = G.ZP.isMobileOS(),
                        n = o.useCallback(() => {
                            const t = o.createElement(B.Z, { color: "buttonBlack", humanReadable: !0, timestamp: e });
                            return o.createElement(m.ZP, { size: "subtext1", style: U.lastEditedText }, o.createElement(w().I18NFormatMessage, { $i18n: "a20c0721" }, t));
                        }, [e]);
                    return o.createElement(H.Z, { contentStyle: U.popover, enableHover: !0, preferredVerticalOrientation: t ? "up" : "down", renderContent: n, withArrow: !0, withMask: t }, o.createElement(m.ZP, { color: "gray700", size: "subtext1", style: U.label }, o.createElement(O.default, { "aria-label": q })));
                },
                Q = ({ author: e }) => {
                    const t = (0, R.hC)("super_follow_android_web_subscription_enabled"),
                        n = (0, $.v9)(z._h),
                        r = t && e.super_follow_eligible && !e.super_following && e.id_str !== n,
                        l = e.id_str !== n && !e.following,
                        i = (0, W.ZP)();
                    return o.createElement(a.Z, null, r ? o.createElement(L.C, { buttonType: "primaryFilled", isSuperFollowSubscriptionEnabled: t, referringPage: "article_details", relationshipMode: "subscribe", size: i ? "small" : "xSmall", userId: e.id_str }) : l ? o.createElement(L.C, { buttonType: "primaryFilled", size: i ? "small" : "xSmall", userId: e.id_str }) : null);
                },
                K = b.default.create((e) => ({ container: { flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space24, gap: e.spaces.space8 }, avatar: { marginEnd: e.spaces.space8, flexShrink: 0 }, attribution: { alignItems: "center" } })),
                J = ({ author: e, firstPublishedAtSecs: t, lastPublishedAtSecs: n }) => {
                    const r = Number(1e3 * t),
                        l = Number(1e3 * n),
                        i = r !== l,
                        s = o.createElement(D.Z, null, r ? o.createElement(B.Z, { timestamp: r }) : null, i ? o.createElement(j, { lastPublishedAtMs: l }) : null);
                    return o.createElement(
                        a.Z,
                        { style: K.container },
                        o.createElement(
                            D.Z,
                            { style: K.attribution },
                            o.createElement(
                                F,
                                { author: e },
                                o.createElement(
                                    a.Z,
                                    { style: K.avatar },
                                    o.createElement(M.Z.Consumer, null, ({ avatarSize: t }) => o.createElement(I.default, { screenName: e.screen_name, size: t, uri: e.profile_image_url_https, withHoverCard: !0, withLink: !0 })),
                                ),
                                o.createElement(A.Z, { affiliateBadgeInfo: e.highlightedLabel, isBlueVerified: e.is_blue_verified, isVerified: e.verified, name: e.name, screenName: e.screen_name, screenNameSuffix: s, verifiedType: e.verified_type, withHoverCard: !0, withLink: !0, withStackedLayout: !0 }),
                            ),
                        ),
                        o.createElement(Q, { author: e }),
                    );
                };
            var Y = n(668214),
                X = n(836255);
            const ee = (0, Y.Z)().propsFromActions(() => ({ fetchTweetsIfNeeded: X.Z.fetchMultipleIfNeeded }));
            var te = n(834324);
            const ne = w().b375ece0,
                oe = b.default.create((e) => ({ callout: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 }, calloutNarrow: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 } })),
                ae = ({ isNarrow: e, onClose: t }) => o.createElement(te.Z, { onClose: t, style: e ? oe.calloutNarrow : oe.callout, text: ne, withCloseButton: !0 });
            var re = n(688715),
                le = n(266151);
            const ie = b.default.create((e) => ({ callout: { marginBottom: e.spaces.space32 }, calloutNarrow: { marginBottom: e.spaces.space16 } })),
                se = ({ isNarrow: e, onClose: t, onScribeEvent: n }) => {
                    const a = o.useCallback(() => {
                            n?.({ action: "click", component: "inline_callout", element: "help_center_link" });
                        }, [n]),
                        r = o.useMemo(() => ({ learnMoreLink: o.createElement(m.ZP, { color: "text", link: (0, re.ju)("https://help.x.com/using-x/articles"), onClick: a, withUnderline: !0 }) }), [a]),
                        l = o.useMemo(() => o.createElement(w().I18NFormatMessage, { $i18n: "a9ce2dd5" }, o.cloneElement(r.learnMoreLink, null, w().edf9101f)), [r]);
                    return o.createElement(te.Z, { Icon: le.default, headline: Ce, onClose: t, style: e ? ie.calloutNarrow : ie.callout, text: l, type: "primary", withCloseButton: !0 });
                };
            n(571372);
            var ce = n(578870),
                de = n(691533),
                ue = n(459679),
                pe = n(512110),
                me = n(335923),
                he = n(540985),
                be = n(790082);
            const ge = b.default.theme.aspectRatios.maxTimelineImage,
                we = b.default.theme.aspectRatios.minTimelineImage,
                fe = (e) => {
                    const { block: t, blockProps: n, contentState: a } = e,
                        r = t.getEntityAt(0),
                        l = t.getText(),
                        i = r ? a.getEntity(r) : null,
                        { hasPostPreloaded: c, isPostBatchingEnabled: d, media: u, onScribeEvent: m, publishedPost: h } = n || {},
                        b = h?.id_str,
                        g = o.useCallback((e) => o.createElement(be.Z, { caption: e.text }), []),
                        w = (0, R.hC)("responsive_web_twitter_article_latex_enabled"),
                        f = (() => {
                            if (i) {
                                if (i.type === T.DC.TWEET) return "tweet";
                                if (i.type === T.DC.MEDIA) {
                                    const e = i.getData().mediaItems;
                                    return e.length > 1 ? "images" : e[0].mediaCategory;
                                }
                            }
                        })();
                    if (
                        (o.useEffect(() => {
                            m?.({ action: "impression", element: f });
                        }, [m, f]),
                        !i)
                    )
                        return null;
                    const y = () => {
                            m?.({ action: "click", element: f });
                        },
                        E = i.getData();
                    if (i.type === T.DC.TWEET) {
                        const { tweetId: e } = E;
                        return o.createElement(pe.ZP, { hasPostPreloaded: c, isPostBatchingEnabled: d, onClick: y, style: ye.atomicBlock, tweetId: e, withActionsDisabled: !1 });
                    }
                    if (i.type === T.DC.MEDIA) {
                        const e = E.mediaItems.map((e) => u?.find((t) => t.media_id === e.mediaId)),
                            t = (0, ue.Z)(e, (e) => (0, x.W5)(e, h)),
                            n = E.caption ? { text: E.caption, entities: [] } : void 0;
                        return t ? o.createElement(s.Z, { caption: n, hasSensitiveMedia: h?.possibly_sensitive, mediaDetails: t, mediaVisibilityResults: h?.mediaVisibilityResults, onClick: y, renderCaption: g, showBorder: !1, singleImageMaxAspectRatio: ge, singleImageMinAspectRatio: we, style: [ye.fullWidth, ye.atomicBlock], tweetId: b ?? "0" }) : null;
                    }
                    if (i.type === T.DC.DIVIDER) return o.createElement(p.Z, { style: [ye.atomicBlock, ye.fullWidth] });
                    if (i.type === T.DC.MARKDOWN) {
                        const { markdown: e } = E;
                        return o.createElement(me.Z, { markdownText: e, style: [ye.atomicBlock, ye.fullWidth] });
                    }
                    return i.type === T.DC.LATEX && w ? o.createElement(he.Z, { displayMode: !0, style: [ye.atomicBlock, ye.fullWidth], tex: l }) : null;
                },
                ye = b.default.create((e) => ({ fullWidth: { width: "100%" }, atomicBlock: { marginBottom: e.spaces.space28 } })),
                Ee = (e) => o.createElement(de.Z, { hideOnError: !0 }, o.createElement(fe, e));
            function _e({ hasPostPreloaded: e, isPostBatchingEnabled: t, onScribeEvent: n, publishedPost: a, twitterArticle: r }) {
                const l = (function (e) {
                    try {
                        if (!e.content_state) return;
                        const t = (0, Z.K7)(e.content_state);
                        if (!t.entityMap || !t.blocks) throw new Error("Malformed RawDraftContentState");
                        return t;
                    } catch (e) {}
                })(r);
                if (!l) return null;
                const i = r.media_entities ?? [],
                    s = { atomic: { component: Ee, editable: !1, props: { media: i, onScribeEvent: n, publishedPost: a, hasPostPreloaded: e, isPostBatchingEnabled: t } } };
                return o.createElement(ce._, { componentByType: s, contentState: l, onScribeEvent: n, paragraphFontSizeOverride: "headline2" });
            }
            const Ce = w().g345246c,
                ke = w().b14efa0a,
                xe = w().afdccedb;
            function Ze(e) {
                const { author: t, fetchTweetsIfNeeded: n, minContentThreshold: b, onContainerPress: g, onLearnMoreCalloutImpression: w, onScribeEvent: D, publishedPost: B, renderInTweet: M, shouldShowLearnMoreCallout: I, twitterArticle: A, withActionBar: L, withReplyLink: R } = e,
                    { featureSwitches: W, userClaims: $, viewerUserId: z } = o.useContext(_.rC),
                    N = W.isTrue("subscriptions_feature_article_composer") && !$.isTrueAndEnabled("subscriptions_feature_article_composer"),
                    V = W.isTrue("responsive_web_twitter_article_batch_posts"),
                    F = (0, S.z)(),
                    H = o.useCallback(
                        (e) => {
                            D ? D(e) : F.scribe(e);
                        },
                        [F, D],
                    ),
                    O = A?.lifecycle_state?.lifecycle === E.f.Draft,
                    [G, q] = o.useState(!1),
                    [U, j] = o.useState(!!I),
                    [Q, K] = o.useState(z === t?.id_str && O),
                    Y = A.cover_media,
                    X = (0, x.W5)(Y, B),
                    ee = (0, x.tY)(Y),
                    te = (0, x.Si)(),
                    ne = A.content_state,
                    oe = L && (!ne || !b || ne.blocks?.length >= b);
                (0, y.q)(() => {
                    H({ action: "impression", component: "article" }), ee && H({ action: "impression", element: "cover_image" }), I && (H({ action: "impression", element: "inline_callout" }), w?.());
                });
                const re = o.useMemo(() => {
                        const e = V && ne ? (0, Z.B$)(ne, T.DC.TWEET) : null;
                        return e?.map((e) => e?.data?.tweetId)?.filter(Boolean);
                    }, [ne, V]),
                    le = o.useCallback(() => {
                        if (ne && re && re.length > 0) {
                            const e = (0, f.Z)(re, 40);
                            Promise.all(e.map((e) => n(e))).finally(() => {
                                q(!0);
                            });
                        }
                    }, [ne, re, n]);
                o.useEffect(() => {
                    le();
                }, [le]);
                const ie = !!ne,
                    ce = o.useCallback(
                        (e) => {
                            const t = e ? Te : Se,
                                n = U ? t.paddingTopWithCallout : t.paddingTop;
                            return M ? [n] : [t.content, n, !z && t.paddingBottomLoggedOut];
                        },
                        [z, U, M],
                    ),
                    de = (0, r.Zx)(({ containerWidth: e }) => l.Z.isNarrowScreenWidth(e)),
                    ue = B?.reply_count;
                return o.createElement(
                    i.Z,
                    { interactive: !!g, interactiveStyles: ve, onPress: g || void 0, testID: "twitterArticleReadView" },
                    ee
                        ? o.createElement(
                              a.Z,
                              { style: Se.marginBottom },
                              B && X
                                  ? o.createElement(s.Z, {
                                        hasSensitiveMedia: B?.possibly_sensitive,
                                        mediaDetails: [X],
                                        mediaVisibilityResults: B?.mediaVisibilityResults,
                                        onClick: () => {
                                            H({ action: "click", element: "cover_media" });
                                        },
                                        showBorder: !1,
                                        showRoundCorners: !1,
                                        singleImageMaxAspectRatio: te,
                                        singleImageMinAspectRatio: te,
                                        tweetId: B?.id_str ?? "0",
                                    })
                                  : o.createElement(c.Z, { "aria-label": ke, aspectMode: d.Z.exact(te), image: ee }),
                          )
                        : null,
                    o.createElement(
                        a.Z,
                        { style: ce(de) },
                        U
                            ? o.createElement(se, {
                                  isNarrow: de,
                                  onClose: () => {
                                      j(!1);
                                  },
                                  onScribeEvent: H,
                              })
                            : null,
                        Q
                            ? o.createElement(ae, {
                                  isNarrow: de,
                                  onClose: () => {
                                      K(!1);
                                  },
                              })
                            : null,
                        o.createElement(P.ZP, { size: de ? "title3" : "title1", style: de ? Te.title : Se.title, title: A.title, weight: "heavy" }),
                        t && A.metadata?.first_published_at_secs && A.lifecycle_state?.modified_at_secs ? o.createElement(J, { author: t, firstPublishedAtSecs: A.metadata.first_published_at_secs, lastPublishedAtSecs: A.lifecycle_state.modified_at_secs }) : null,
                        ie ? o.createElement(o.Fragment, null, oe && B ? o.createElement(C.Z, { allowBookmarkInActionsBar: !0, style: Se.actionBar, tweet: B, withAnalyticsAction: !0, withCount: !0 }) : null, o.createElement(a.Z, { style: Se.body, testID: "twitterArticleRichTextView" }, o.createElement(_e, { hasPostPreloaded: G, isPostBatchingEnabled: V, onScribeEvent: H, publishedPost: B, twitterArticle: A }))) : O ? null : o.createElement(u.Z, { style: Se.loadingStyle }),
                        N ? o.createElement(v.Z, { variant: "ArticlesReader" }) : null,
                        R && B && ue
                            ? o.createElement(
                                  o.Fragment,
                                  null,
                                  o.createElement(p.Z, { spacing: de ? "space24" : "space32" }),
                                  o.createElement(
                                      m.ZP,
                                      {
                                          align: "center",
                                          link: B.permalink,
                                          onPress: () => {
                                              H({ action: "click", component: "footer", element: "read_replies" });
                                          },
                                      },
                                      xe({ displayCount: h.ZP.getTruncatedCount(ue), count: ue }),
                                  ),
                              )
                            : null,
                        t
                            ? o.createElement(
                                  o.Fragment,
                                  null,
                                  o.createElement(p.Z, { spacing: de ? "space24" : "space32" }),
                                  o.createElement(k.ZP, {
                                      cellClickable: !1,
                                      decoration: !!z && k.ET,
                                      displayMode: "UserDetailed",
                                      onFollowClick: () => {
                                          H({ action: "click", component: "footer", element: "follow" });
                                      },
                                      userId: t.id_str,
                                  }),
                              )
                            : null,
                    ),
                );
            }
            const Se = b.default.create((e) => ({ body: { paddingTop: e.spaces.space20 }, content: { paddingBottom: e.spaces.space80, paddingHorizontal: e.spaces.space48 }, paddingBottomLoggedOut: { paddingBottom: `calc(${e.spaces.space80} + ${e.spaces.space64})` }, hoverStyle: { cursor: "initial" }, paddingTopWithCallout: { paddingTop: e.spaces.space32 }, paddingTop: { paddingTop: e.spaces.space2 }, marginBottom: { marginBottom: e.spaces.space24 }, title: { marginTop: e.spaces.space12, lineHeight: `calc(${e.spaces.space40} + ${e.spaces.space4})` }, actionBar: { height: e.spaces.space48, borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", marginTop: e.spaces.space4 }, loadingStyle: { marginHorizontal: "auto", marginVertical: e.spaces.space20 } })),
                Te = b.default.create((e) => ({ content: { paddingBottom: `calc(${e.spaces.space56} * 2)`, paddingHorizontal: e.spaces.space16 }, paddingBottomLoggedOut: { paddingBottom: e.spaces.space56 }, paddingTopWithCallout: { paddingTop: e.spaces.space16 }, title: { marginTop: e.spaces.space12, lineHeight: e.lineHeights.title3 } })),
                ve = { hoverStyle: Se.hoverStyle },
                Pe = ee(o.memo(Ze)),
                De = o.memo(Pe);
        },
        751632: (e, t, n) => {
            n.d(t, { ZP: () => d });
            var o = n(202784),
                a = n(325686),
                r = n(731708),
                l = n(392237),
                i = n(111677);
            const s = n.n(i)().gd11f228,
                c = l.default.create((e) => ({ titlePlaceholder: { opacity: 0.4 }, titleWrapper: { width: "100%" } })),
                d = ({ numberOfLines: e, size: t = "body", style: n, title: l, weight: i = "bold" }) => o.createElement(a.Z, { style: [c.titleWrapper, !l && c.titlePlaceholder] }, o.createElement(r.ZP, { dir: "auto", numberOfLines: e, size: t, style: n, testID: "twitter-article-title", weight: i }, l || s));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407.09c2ba8a.js.map
