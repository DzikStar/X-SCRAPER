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
            n.d(t, { Z: () => _ });
            n(136728);
            var o = n(202784),
                a = n(638236),
                r = n(811176),
                i = n(111677),
                l = n.n(i),
                s = n(415506),
                c = n(516951),
                d = n(376293),
                p = n(847607),
                u = n(417714),
                m = n(988823);
            const b = "block",
                h = "mute",
                g = "removeFollower",
                w = "report",
                f = "share",
                y = l().j7bb1a43,
                E = l().g00b4c55,
                _ = (0, m.M)((e) => {
                    const { onBlock: t, onClose: n, onMute: i, onRemoveFollower: l, onReportUser: m, onShare: _, onUnblock: C, onUnmute: x, user: k } = e,
                        Z = [],
                        S = (t, n) => {
                            const { confirm: o, onClose: a } = e;
                            if (t) {
                                const { label: e, ...r } = t;
                                o({ confirmButtonLabel: e, ...r })
                                    .then(n, c.Z)
                                    .finally(a);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !k.protected &&
                        !k.blocking &&
                        !k.blocked_by &&
                        Z.push({
                            Icon: a.Z,
                            onClick: () => {
                                n(), _();
                            },
                            testID: f,
                            text: E({ screenName: k.screen_name }),
                        });
                    !k.blocking &&
                        Z.push({
                            ...(0, p.N1)(
                                k,
                                () => {
                                    n(), i();
                                },
                                () => {
                                    n(), x();
                                },
                            ),
                            testID: h,
                        });
                    k.followed_by &&
                        Z.push({
                            ...(0, u.l)({
                                removeFollowerAction: (e) => {
                                    S(e, l);
                                },
                                user: k,
                            }),
                            testID: g,
                        }),
                        Z.push((0, d.op)({ blockAction: (e) => S(e, t), source: d.SC.FOLLOWERS_LIST, testID: b, unblockAction: (e) => S(e, C), user: k })),
                        Z.push({
                            Icon: s.default,
                            onClick: () => {
                                n(), m();
                            },
                            testID: w,
                            text: y({ screenName: k.screen_name }),
                        });
                    const T = Z.map(({ Icon: e, onClick: t, testID: n, text: o }) => ({ text: o, onClick: t, Icon: e, testID: n }));
                    return o.createElement(r.Z, { items: T, onCloseRequested: n });
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
                i = n(111677),
                l = n.n(i),
                s = n(281312),
                c = n(805e3);
            const d = l().ibd021f2,
                p = l().bbef69c4,
                u = l().g5092766,
                m = l().a2d5c006,
                b = l().g37bb2d0,
                h = (0, a.ju)("https://help.x.com/using-twitter/how-to-retweet#prompt"),
                g = r.default.create((e) => ({ glassIcon: { alignSelf: "center", borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.primary, color: "white", fontSize: e.fontSizes.subtext2, marginEnd: 7, padding: 4 }, glassIconExpanded: { fontSize: e.fontSizes.headline1, marginEnd: 0, marginBottom: e.spaces.space12 } })),
                w = ({ articleNudgeFollowed: e, link: t, onClick: n, shouldShowArticleNudgeTip: a }) => {
                    const r = o.createElement(s.default, { style: g.glassIcon }),
                        i = o.createElement(s.default, { style: [g.glassIcon, g.glassIconExpanded] });
                    return o.createElement(c.Z, { buttonLabel: u, condensedText: e ? m : d, expanded: a, heading: e ? m : d, icon: r, iconExpanded: i, isExpandable: !0, learnMoreLink: h, link: t, onPress: n, subheading: e ? b : p });
                };
        },
        553161: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(202784),
                a = n(111677),
                r = n.n(a),
                i = n(805e3),
                l = n(467691);
            const s = r().g7135e44,
                c = r().h9b6d468,
                d = r().af5cd00e,
                p = r().e29c651e,
                u = (e) => {
                    const {
                            action: t,
                            actionTaken: n,
                            forwardPivotInfo: { landingUrl: a, text: r },
                            onActionTaken: u,
                        } = e,
                        m = t === l.S.like ? s : c;
                    return o.createElement(i.Z, { buttonLabel: d, condensedText: p, expanded: !n, heading: r.text, key: "misinfo-nudge", link: a.url, onPress: () => u(t, p), subheading: m });
                },
                m = o.memo(u);
        },
        931974: (e, t, n) => {
            n.d(t, { Z: () => E });
            var o = n(807896),
                a = n(202784),
                r = n(325686),
                i = n(731708),
                l = n(696591),
                s = n(154003),
                c = n(530732),
                d = n(392237),
                p = n(111677),
                u = n.n(p),
                m = n(211971),
                b = n(58399),
                h = n(686689),
                g = n(946409);
            const w = u().e29c651e,
                f = ({ action: e, actionTaken: t, onActionTaken: n, payload: { cta_title: d, cta_url: p, heading: u, icon_name: f, post_cta_text: E, subheading: _ } }) => {
                    const C = a.useCallback(() => n(e, E?.text || w), [e, n, E]),
                        x = p && (0, g.s9)(p),
                        k = ((e, t) => {
                            const n = { style: [y.iconPrimaryColor, t ? y.iconPostAction : y.iconPreAction] };
                            return "error_circle" === e ? a.createElement(m.default, (0, o.Z)({ testID: "error_circle_icon" }, n)) : null;
                        })(f, t),
                        Z = E ? a.createElement(h.Z, (0, o.Z)({ style: y.postActionText }, E)) : a.createElement(i.ZP, { style: y.postActionText }, w),
                        S = u ? a.createElement(l.Z, { align: "center", size: "title4", style: y.text, weight: "bold" }, u) : null,
                        T = d && x ? a.createElement(s.ZP, { link: x, onPress: C, style: y.ctaButton, type: "brandFilled" }, d) : null;
                    return t ? a.createElement(c.Z, { focusable: !0, link: x, onPress: C, style: [y.container, y.containerPostAction] }, ({ isHovered: e }) => a.createElement(a.Fragment, null, k, Z, a.createElement(b.default, { style: [e ? y.iconPrimaryColor : y.iconGrayColor, y.rightIcon] }))) : a.createElement(r.Z, { focusable: !0, style: [y.container, y.containerPreAction] }, k, S, a.createElement(h.Z, (0, o.Z)({ alignment: "Center", color: "gray700" }, _)), T);
                },
                y = d.default.create((e) => ({ container: { alignItems: "center", backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.small, margin: e.spaces.space12 }, containerPreAction: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space20 }, containerPostAction: { flexDirection: "row", padding: e.spaces.space12 }, iconPrimaryColor: { color: e.colors.primary }, iconGrayColor: { color: e.colors.gray300 }, iconPreAction: { fontSize: e.fontSizes.title4, paddingBottom: e.spaces.space12 }, iconPostAction: { fontSize: e.fontSizes.headline1, paddingEnd: e.spaces.space4 }, rightIcon: { fontSize: e.fontSizes.body, paddingStart: e.spaces.space4 }, text: { textAlign: "center", paddingBottom: e.spaces.space16 }, postActionText: { paddingEnd: e.spaces.space2 }, ctaButton: { marginTop: e.spaces.space16 } })),
                E = a.memo(f);
        },
        805e3: (e, t, n) => {
            n.d(t, { Z: () => y });
            var o = n(202784),
                a = n(325686),
                r = n(696591),
                i = n(731708),
                l = n(154003),
                s = n(530732),
                c = n(466792),
                d = n(392237),
                p = n(111677),
                u = n.n(p),
                m = n(211971),
                b = n(711223),
                h = n(58399);
            const g = u().i859a9d4,
                w = u().gc45a90a,
                f = d.default.create((e) => ({ container: { alignItems: "center", backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.small, margin: e.spaces.space12 }, containerExpanded: { paddingBottom: e.spaces.space16, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space20 }, containerCondensed: { flexDirection: "row", padding: e.spaces.space12 }, iconPrimaryColor: { color: e.colors.primary }, iconGrayColor: { color: e.colors.gray300 }, iconExpanded: { fontSize: e.fontSizes.title4, paddingBottom: e.spaces.space12 }, iconCondensed: { fontSize: e.fontSizes.headline1, paddingEnd: e.spaces.space4 }, learnMore: { color: e.colors.link, paddingBottom: e.spaces.space16 }, rightIcon: { fontSize: e.fontSizes.body, paddingStart: e.spaces.space4 }, text: { textAlign: "center", paddingBottom: e.spaces.space16 }, condensedText: { paddingEnd: e.spaces.space2 }, infoButton: { marginStart: "auto", marginEnd: `calc(-1 * ${e.spaces.space8})` }, infoIconPrimary: { color: e.colors.primary }, infoIconGray: { color: e.colors.gray300 } })),
                y = ({ buttonLabel: e, condensedText: t, expanded: n, heading: d, icon: p, iconExpanded: u, isExpandable: y = !1, learnMoreLink: E, link: _, onPress: C, subheading: x }) => {
                    const [k, Z] = o.useState(n),
                        S = (e) => {
                            e.preventDefault(), e.stopPropagation(), Z(!0);
                        };
                    return k ? o.createElement(a.Z, { focusable: !0, style: [f.container, f.containerExpanded] }, u || p || o.createElement(m.default, { style: [f.iconPrimaryColor, f.iconExpanded] }), o.createElement(r.Z, { align: "center", size: "title4", style: f.text, weight: "bold" }, d), o.createElement(r.Z, { align: "center", color: "gray700", style: f.text }, x), E ? o.createElement(i.ZP, { align: "center", link: E, style: f.learnMore }, g) : null, o.createElement(l.ZP, { link: _, onPress: C, type: "brandFilled" }, e)) : o.createElement(s.Z, { focusable: !0, link: _, onPress: C, style: [f.container, f.containerCondensed] }, ({ isHovered: e }) => o.createElement(o.Fragment, null, p || o.createElement(m.default, { style: [f.iconPrimaryColor, f.iconCondensed] }), o.createElement(i.ZP, { style: f.condensedText }, t), y ? o.createElement(c.Z, null, ({ isHovered: e }) => o.createElement(l.ZP, { "aria-label": w, icon: o.createElement(b.default, { style: e ? f.infoIconPrimary : f.infoIconGray }), onClick: S, size: "xSmall", style: f.infoButton, type: "brandText" })) : o.createElement(h.default, { style: [e ? f.iconPrimaryColor : f.iconGrayColor, f.rightIcon] })));
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
                const i = ((e, t = []) => t.find(({ action: t }) => t.toLowerCase() === e.toLowerCase())?.payload)(e, n);
                return i ? { source: a.w.payload, payload: i } : ((e, t) => !(t?.displayType !== o.x.SoftIntervention || !t?.engagementNudge || (e !== a.S.retweet && e !== a.S.like && e !== a.S.share)))(e, t) ? { source: a.w.forwardPivot } : e === a.S.retweet && r ? { source: a.w.article } : { source: void 0 };
            };
        },
        989631: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(202784),
                a = n(325686),
                r = n(952428),
                i = n(872405),
                l = n(823161),
                s = n(154003),
                c = n(731708),
                d = n(392237),
                p = n(111677),
                u = n.n(p);
            const m = u().df45f564,
                b = u().i569ff3e;
            class h extends o.PureComponent {
                componentDidMount() {
                    const { onImpression: e } = this.props;
                    e && e();
                }
                render() {
                    const { avatarUrl: e, onClick: t, style: n, to: d, userName: p, withButton: u, withConversationLine: h } = this.props,
                        w = e && p;
                    return o.createElement(r.Z, { link: d, onClick: t, style: [g.root, n] }, o.createElement(i.Z, { avatarCell: w ? o.createElement(a.Z, { style: [g.avatarColumn, !h && g.avatarColumnWithoutLine] }, h ? o.createElement(a.Z, { style: g.conversationLine }) : null, o.createElement(l.default, { size: "large", uri: e })) : null, avatarCellStyle: g.conversationConnector, cellStyle: u ? g.buttonContainer : w ? g.labelWithAvatar : g.label }, u ? o.createElement(s.ZP, { role: "none", size: "xSmall", style: g.button, type: "brandOutlined" }, m) : o.createElement(c.ZP, { color: "link", style: g.enlargeTouchTarget }, b)));
                }
            }
            h.defaultProps = { withButton: !1, withConversationLine: !1 };
            const g = d.default.create((e) => ({ root: { overflow: "hidden", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space2 }, avatarColumn: { flexDirection: "column", flexGrow: 0, alignItems: "center", paddingBottom: e.spaces.space4 }, avatarColumnWithoutLine: { paddingTop: e.spaces.space12 }, conversationConnector: { alignItems: "center", display: "flex", position: "relative" }, label: { flexGrow: 1, paddingVertical: e.spaces.space4 }, labelWithAvatar: { flexGrow: 1, justifyContent: "center" }, conversationLine: { backgroundColor: e.colors.gray200, flexGrow: 1, flexShrink: 1, width: e.componentDimensions.conversationLineWidth, marginBottom: e.spaces.space4 }, buttonContainer: { paddingVertical: e.spaces.space4, flexDirection: "row", flexGrow: 1 }, button: { marginVertical: e.spaces.space4 }, enlargeTouchTarget: { paddingVertical: e.spaces.space8 } }));
        },
        864479: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(807896),
                a = n(202784),
                r = n(771099);
            const i = (e) => (t) => a.createElement(r.$6, null, (n) => a.createElement(e, (0, o.Z)({}, t, { isInSidebar: n })));
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
            const r = (0, o.Z)({ loader: () => Promise.all([n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"), n.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"), n.e("loader.TexBlock")]).then(n.bind(n, 753440)) });
        },
        746795: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(807896),
                a = n(202784),
                r = n(325686),
                i = n(449945),
                l = n(686689),
                s = n(177371),
                c = n(725516);
            const d = "inner_tombstone";
            function p({ children: e, config: t, id: n }) {
                const p = (0, c.z)();
                const u = t.richRevealText?.text || t.revealText,
                    m = t.richText
                        ? a.createElement(l.Z, {
                              alignment: t.richText.alignment,
                              entities: t.richText.entities,
                              onEntityClick: function () {
                                  p.scribe({ action: "open_link", component: d });
                              },
                              rtl: t.richText.rtl,
                              text: t.richText.text,
                          })
                        : t.text;
                return a.createElement(
                    r.Z,
                    { id: n },
                    u
                        ? a.createElement(
                              i.Z,
                              {
                                  label: m,
                                  onReveal: function () {
                                      p.scribe({ action: "click", component: d });
                                  },
                                  render: ({ onActionClick: e, ...t }) => a.createElement(s.Z, (0, o.Z)({}, t, { inline: !0, onClick: e })),
                                  revealLabel: u,
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
                i = n(731708),
                l = n(392237),
                s = n(111677),
                c = n.n(s),
                d = n(53674),
                p = n(443781),
                u = n(533128),
                m = n(400300);
            const b = c().eb748f7e;
            class h extends o.PureComponent {
                constructor(...e) {
                    super(...e), (this._shouldDisable = u.$y.bind(null, this.context.featureSwitches));
                }
                render() {
                    const { endControl: e, onAnalyticsClick: t, style: n, tweet: l, viewerUserId: s } = this.props;
                    return !this._shouldDisable(l, u.d.ViewTweetActivity) && s === l.user.id_str ? o.createElement(a.Z, { style: [g.analyticsContainerWithChildren, n] }, o.createElement(r.Z, { link: `${l.permalink}/analytics`, onPress: t, style: g.analyticsButton, testID: m.Z.analyticsButton }, o.createElement(d.default, { style: g.analyticsIcon }), o.createElement(i.ZP, { color: "gray700" }, b)), e) : null;
                }
            }
            h.contextType = p.rC;
            const g = l.default.create((e) => ({ analyticsIcon: { color: e.colors.gray700, paddingEnd: e.spaces.space4 }, analyticsButton: { paddingVertical: e.spaces.space16, flexDirection: "row", flexGrow: 1 }, analyticsContainerWithChildren: { justifyContent: "space-between", borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px", flexDirection: "row", alignItems: "center" } })),
                w = h;
        },
        587653: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                a = n(891198),
                r = n(98538),
                i = n(731708),
                l = n(111677),
                s = n.n(l),
                c = n(288955);
            const d = (0, n(725516).Z)(({ coinCount: e, isLabel: t, link: n }) => {
                const l = a.ZP.getTruncatedCount(Number(e)),
                    d = o.useMemo(() => ({ actionName: o.createElement(r.Z.Label, null), statDisplay: t ? o.createElement(r.Z.Label, null) : o.createElement(r.Z.Value, { animated: !0, count: Number(e) }) }), [e, t]),
                    p = o.useMemo(() => ({ count: Number(e), displayCoins: l }), [e, l]);
                return o.createElement(c.Z, null, (e) => o.createElement(r.Z, { link: n, onPress: e?.() }, o.createElement(i.ZP, null, o.createElement(s().I18NFormatMessage, { $i18n: "c5064c6f" }, o.cloneElement(d.statDisplay, null, s().b7cff250({ displayCoins: p.displayCoins })), o.cloneElement(d.actionName, null, s().g62dcfbc({ count: p.count }))))));
            });
        },
        494718: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(807896),
                a = n(202784),
                r = n(737082),
                i = n(725405);
            const l = (e) => {
                const t = (0, i.Z)();
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
                i = n(952428),
                l = n(731708),
                s = n(392237),
                c = n(111677),
                d = n.n(c),
                p = n(53674),
                u = n(443781),
                m = n(533128),
                b = n(400300);
            const h = d().c5491b5d;
            class g extends o.PureComponent {
                constructor(...e) {
                    super(...e), (this._shouldDisable = m.$y.bind(null, this.context.featureSwitches));
                }
                render() {
                    const { endControl: e, onEngagementsClick: t, style: n, tweet: s, viewerUserId: c } = this.props,
                        d = !this._shouldDisable(s, m.d.ViewTweetActivity) && c === s.user.id_str,
                        u = this.context.featureSwitches.isTrue("responsive_web_twitter_article_seed_tweet_enabled"),
                        g = r.Z.getLocalizedEntityName({ tweet: s, articlesEnabled: u });
                    return d ? o.createElement(a.Z, { style: [w.engagementsContainerWithChildren, n] }, o.createElement(i.Z, { link: `${s.permalink}/quotes`, onPress: t, style: w.engagementsButton, testID: b.Z.analyticsButton }, o.createElement(p.default, { style: w.engagementsIcon }), o.createElement(l.ZP, { color: "gray700" }, h({ entity: g }))), e) : null;
                }
            }
            g.contextType = u.rC;
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
                const i = r[0],
                    l =
                        n &&
                        (function (e) {
                            const t = o.Z.getOriginalTweet(e),
                                n = t.extended_entities && t.extended_entities.media;
                            return !!(n && n.length > 0) && n.some((e) => "animated_gif" === e.type);
                        })(e);
                return l && t.isTrue("responsive_web_hashtag_highlight_is_enabled") ? i.text : void 0;
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
                i = n(392237),
                l = n(757483),
                s = n(215337),
                c = n(731708),
                d = n(138099),
                p = n(530525),
                u = n(439592),
                m = n(154003),
                b = n(111677),
                h = n.n(b),
                g = n(323265),
                w = n(443781),
                f = n(725516);
            const y = n.p + "promote_popup_image.1af114ea.png",
                E = h().c14cdb18,
                _ = h().be059f7e,
                C = h().c34f845e,
                x = h().c37102aa,
                k = h().ac245c4c,
                Z = h().e4db6326,
                S = (e) => {
                    const { hasSocialContext: t, onDismiss: n } = e,
                        [d, p] = o.useState(!0),
                        u = i.default.theme.colors.white,
                        m = o.useCallback(() => [l.Z.hexToCss(u || i.default.theme.colors.white, 0.2), l.Z.hexToCss(u || i.default.theme.colors.white, 0.5), l.Z.hexToCss(u || i.default.theme.colors.white, 0.1), l.Z.hexToCss(u || i.default.theme.colors.white, 0.1)], [u]),
                        b = { top: t ? 74 : 58 },
                        h = o.useRef(null);
                    o.useEffect(() => {
                        const e = document.querySelector('[data-testid="tweet"]');
                        e && (h.current = e);
                    }, []);
                    return h.current
                        ? d &&
                              (0, a.createPortal)(
                                  o.createElement(
                                      r.Z,
                                      {
                                          onClick: () => {
                                              p(!1), n && n();
                                          },
                                          style: [b, P.promotePopup],
                                      },
                                      o.createElement(r.Z, { style: P.popupTriangle }),
                                      o.createElement(s.Z, { angle: 90, colors: m(), style: P.popupGradient }),
                                      o.createElement(c.ZP, { color: "alwaysBlack" }, _),
                                  ),
                                  h.current,
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
                            o.createElement(p.Z, { "aria-label": "", aspectMode: u.Z.exact(2), image: y }),
                            o.createElement(
                                r.Z,
                                { style: P.contentContainer },
                                o.createElement(r.Z, { style: P.popupTitle }, o.createElement(c.ZP, { align: "left", role: "heading", size: "title4", weight: "heavy" }, C)),
                                o.createElement(c.ZP, null, x),
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
                                    k,
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
                    i = t.isTrue("rweb_quick_promote_boost_enabled"),
                    l = t.isTrue("responsive_web_qp_two_screens_enabled"),
                    s = t.isTrue("responsive_web_qp_full_popup_enabled"),
                    c = e.isFocal ? "small" : "xSmall",
                    d = e.isFocal ? "primaryFilled" : "primaryOutlined";
                function p() {
                    a.wasLoaded ? n.scribe({ page: "tweet", component: "tweet_promote_button", action: "click_label" }) : n.scribe({ page: "tweet", component: "tweet_promote_button", action: "click" });
                }
                function u() {
                    r((e) => ({ ...e, isVisible: !1 }));
                }
                const b = i && g.ZP.isTwitterApp() && g.ZP.isAndroid() ? "quick_promote_lite_web" : l ? "quick_promote_web/targeting" : "quick_promote_web/intro";
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
                    o.createElement(o.Fragment, null, o.createElement(m.ZP, { link: `${e.permalink}/${b}`, onPress: p, size: c, type: d }, E), e.isFocal && a.isVisible && (s ? o.createElement(T, { onDismiss: u, onPromotePress: p, promoteLink: `${e.permalink}/quick_promote_web/intro` }) : o.createElement(S, { hasSocialContext: e.hasSocialContext, onDismiss: u })))
                );
            }
            const P = i.default.create((e) => ({ promotePopup: { backgroundColor: e.colors.yellow400, borderRadius: e.borderRadii.medium, boxShadowColor: e.colors.gray0, boxShadowOffset: { width: -2, height: 2 }, boxShadowOpacity: 0.5, boxShadowRadius: 2, cursor: "default", end: 50, minWidth: 260, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8, position: "absolute", whiteSpace: "nowrap", zIndex: 5 }, popupGradient: { borderRadius: e.borderRadii.medium, height: "100%", position: "absolute", start: 0, top: 0, width: "100%" }, popupTriangle: { borderBottomColor: e.colors.yellow400, borderBottomWidth: 6, borderEndColor: e.colors.buttonWhite, borderEndWidth: 6, borderStartColor: e.colors.buttonWhite, borderStartWidth: 6, borderStyle: "solid", end: 70, position: "absolute", top: -6 }, contentContainer: { paddingHorizontal: e.spaces.space40, paddingBottom: e.spaces.space40, paddingTop: e.spaces.space20 }, popupTitle: { marginVertical: e.spaces.space20 }, boostButton: { marginVertical: e.spaces.space20 } }));
        },
        585041: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(202784),
                a = n(325686),
                r = n(731708),
                i = n(392237),
                l = n(111677),
                s = n.n(l),
                c = n(283379);
            const d = s().g6237a1e,
                p = s().d6b5949e,
                u = (e) => ("paused" === e ? p : d),
                m = (e) => {
                    const { id: t, status: n, style: i } = e,
                        l = "paused" === n;
                    return o.createElement(a.Z, { style: [b.root, i] }, o.createElement(c.default, { style: [b.icon, l ? b.withGray700 : null] }), o.createElement(r.ZP, { color: l ? "gray700" : "text", id: t, size: "subtext2" }, u(n)));
                },
                b = i.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.buttonBlack, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, withGray700: { color: e.colors.gray700 } }));
        },
        549613: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var o = n(202784),
                a = n(325686),
                r = n(392237),
                i = n(952428),
                l = n(731708),
                s = n(891198),
                c = n(98538),
                d = n(111677),
                p = n.n(d),
                u = n(288955),
                m = n(725516);
            const b = p().g5775e46,
                h = r.default.theme.spacesPx.space20;
            class g extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderQuoteTweetTimelinePivot = () => {
                            const { permalink: e } = this.props;
                            return o.createElement(i.Z, { link: `${e}/retweets/with_comments`, onPress: this._handleQuoteTweetPivotScribeOnClick, style: w.quoteTweetPivot, withDarkerInteractiveBackground: !1 }, o.createElement(l.ZP, { color: "primary" }, b));
                        }),
                        (this._getLayoutHandlerForElementWidth = (e) => (t) => {
                            const n = t.nativeEvent.layout.width,
                                o = n && "containerWidth" !== e ? n + h : (n ?? 0);
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
                    return o.createElement(a.Z, { onLayout: this._handleBookmarkStatLayout, style: w.stat }, o.createElement(c.Z, { count: e }, o.createElement(p().I18NFormatMessage, { $i18n: "ef5d531f" }, o.createElement(c.Z.Value, { animated: !0, count: e }, p().bb192c6b({ displayCount: t })), o.createElement(c.Z.Label, null, p().f23d99b0({ count: e })))));
                }
                _renderLikesStat(e) {
                    const { permalink: t } = this.props,
                        n = s.ZP.getTruncatedCount(e);
                    return o.createElement(
                        a.Z,
                        { onLayout: this._handleLikeStatLayout, style: w.stat },
                        o.createElement(u.Z, null, (a) => o.createElement(c.Z, { count: e, link: `${t}/likes`, onPress: a(this._handleLikeTweetScribeOnClick) }, o.createElement(p().I18NFormatMessage, { $i18n: "e4eeeeff" }, o.createElement(c.Z.Value, { animated: !0, count: e }, p().e8866a55({ displayCount: n })), o.createElement(c.Z.Label, null, p().eb3abe45({ count: e }))))),
                    );
                }
                _renderQuotesStat(e) {
                    const { permalink: t } = this.props,
                        n = s.ZP.getTruncatedCount(e);
                    return o.createElement(
                        a.Z,
                        { onLayout: this._handleQuoteStatLayout, style: w.stat },
                        o.createElement(u.Z, null, (a) => o.createElement(c.Z, { count: e, link: `${t}/retweets/with_comments`, onPress: a(this._handleQuoteTweetScribeOnClick) }, o.createElement(p().I18NFormatMessage, { $i18n: "c9174f1f" }, o.createElement(c.Z.Value, { animated: !0, count: e }, p().eff958fb({ displayCount: n })), o.createElement(c.Z.Label, null, p().i5a8c515({ count: e }))))),
                    );
                }
                _renderRetweetsStat(e) {
                    const { permalink: t } = this.props,
                        n = s.ZP.getTruncatedCount(e);
                    return o.createElement(
                        a.Z,
                        { onLayout: this._handleRetweetStatLayout, style: w.stat },
                        o.createElement(u.Z, null, (a) => o.createElement(c.Z, { count: e, link: `${t}/retweets`, onPress: a(this._handleRetweetScribeOnClick) }, o.createElement(p().I18NFormatMessage, { $i18n: "d794bc6d" }, o.createElement(c.Z.Value, { animated: !0, count: e }, p().dd77f9fb({ displayCount: n })), o.createElement(c.Z.Label, null, p().a755b81b({ count: e }))))),
                    );
                }
                _renderStats() {
                    const { bookmarkCount: e, likeCount: t, quoteTweetCount: n, retweetCount: r, style: i } = this.props,
                        { bookmarkStatWidth: l = 0, containerWidth: s = 0, likeStatWidth: c = 0, quoteStatWidth: d = 0, retweetStatWidth: p = 0 } = this.state;
                    let u = 0;
                    const m = [!0, !1, !1, !1];
                    [p, d, c, l].forEach((e, t) => {
                        u + e > s ? ((u = e), (m[t] = !0)) : (u += e);
                    });
                    const b = s;
                    return e || t || n || r ? o.createElement(a.Z, { onLayout: this._handleStatGroupLayout, role: "group", style: [w.container, b ? i : w.hidden] }, m[0] ? o.createElement(a.Z, { role: "separator", style: w.separator }) : null, r ? this._renderRetweetsStat(r) : null, m[1] ? o.createElement(a.Z, { role: "separator", style: w.separator }) : null, n ? this._renderQuotesStat(n) : null, m[2] ? o.createElement(a.Z, { role: "separator", style: w.separator }) : null, t ? this._renderLikesStat(t) : null, m[3] ? o.createElement(a.Z, { role: "separator", style: w.separator }) : null, e ? this._renderBookmarksStat(e) : null) : null;
                }
            }
            const w = r.default.create((e) => ({ container: { flexDirection: "row", flexWrap: "wrap" }, stat: { marginEnd: e.spaces.space20, paddingVertical: e.spaces.space16 }, hidden: { visibility: "hidden" }, quoteTweetPivot: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px", paddingVertical: e.spaces.space16 }, separator: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: "1px", height: "1px", width: "100%" } })),
                f = (0, m.Z)(g);
        },
        131133: (e, t, n) => {
            n.d(t, { cN: () => T, eM: () => x, pZ: () => k });
            var o = n(202784),
                a = n(325686),
                r = n(124964),
                i = n(731708),
                l = n(392237),
                s = n(111677),
                c = n.n(s),
                d = n(265196),
                p = n(421575),
                u = n(863934),
                m = n(686689),
                b = n(177371),
                h = n(946409),
                g = n(618566),
                w = n(788993),
                f = n(827922),
                y = n(725516);
            const E = c().gf5e9ea6,
                _ = c().e2f2b658,
                C = Object.freeze({ see_more: c().ffd9cfe6, discover_more: c().d172116a, more: c().h63a5c3c, more_tweets: c().be5df69e, more_suggestions: c().g11ebd34, browse: c().g4a6901a, browse_tweets: c().h6453e74 });
            function x({ featureSwitches: e, isExpanded: t, topic: n, topicContext: o }) {
                return (0, f.SJ)(o) && t && n.not_interested && (!(e.getStringValue("topics_context_controls_implicit_variation") in C) || e.isTrue("topics_context_controls_implicit_context_x_enabled"));
            }
            const k = ({ onUndoTopicNotInterestedClick: e }) => o.createElement(a.Z, { style: v.tombstone }, o.createElement(b.Z, { actionText: E, children: _, inline: !0, onClick: e })),
                Z = (0, y.Z)((e) => {
                    const { analytics: t, bannerText: n, label: l, link: s, linkText: c, onNotInterestedPress: d, topic: p, withRightControl: b } = e,
                        h = n && "" === n.text,
                        g = c && "" === c.text,
                        w = !g,
                        f = !(h || g);
                    return o.createElement(
                        a.Z,
                        { style: v.topicActions },
                        f && o.createElement(r.Z, null),
                        w &&
                            o.createElement(
                                i.ZP,
                                {
                                    color: "primary",
                                    link: s,
                                    onClick: () => {
                                        t.scribeAction("click");
                                    },
                                    size: "subtext2",
                                    weight: "bold",
                                },
                                c ? o.createElement(m.Z, c) : l,
                            ),
                        b ? o.createElement(a.Z, { style: v.notInterestedButtonWrapper }, o.createElement(u.Z, { onPress: d, size: "small", topicId: p.id, type: "brandText", withIconOnly: !0 })) : null,
                    );
                }),
                S = (e) => {
                    const { isExpanded: t, onNotInterestedPress: n, topic: i } = e,
                        l = i.following ? v.followingTopicButtonWrapper : v.followTopicButtonWrapper,
                        s = [t && l, !t && v.followTopicButtonWrapperNotExpanded],
                        c = t ? v.largeNotInterestedButtonWrapper : v.notInterestedButtonWrapper;
                    return o.createElement(a.Z, { style: v.topicActions }, t ? null : o.createElement(r.Z, { style: v.topicMiddot }), o.createElement(a.Z, { style: s }, o.createElement(d.ZP, { isTransparent: !t, showRelationshipChangeConfirmation: !0, size: t ? "small" : "xSmall", style: v.followTopicButton, textMode: p.q.FollowTopic, topic: i })), n || (t && !i.following) ? o.createElement(a.Z, { style: c }, o.createElement(u.Z, { onPress: n, size: "small", topicId: i.id, type: t ? "primaryOutlined" : "brandText", withIconOnly: !t })) : null);
                };
            function T(e) {
                const { featureSwitches: t, iconSize: n, injectedFeedbackItem: a, isExpanded: r, socialContext: i, topic: l, withLeftPadding: s } = e,
                    { contextType: c, landingUrl: d, topicContext: p } = i,
                    u = d ? (0, h.s9)(d) : void 0,
                    b = p && (0, f.Y8)(p),
                    y = p && (0, f.SJ)(p),
                    E = t.isTrue("media_edge_to_edge_content_enabled"),
                    _ = E ? w.Z.TextOnly : w.Z.Topic,
                    x = a?.markNotInterestedTopic?.onClick,
                    k = p ? (0, g.P)(p) : void 0,
                    T = p?.bannerText ? o.createElement(m.Z, p.bannerText) : i.text;
                if (b && t.getStringValue("topics_context_controls_followed_variation") in C) {
                    const e = C[t.getStringValue("topics_context_controls_followed_variation")];
                    return { iconSize: n, contextType: _, rightControl: o.createElement(Z, { bannerText: i.topicContext && i.topicContext.bannerText, label: e, link: u, linkText: i.topicContext && i.topicContext.linkText, topic: l }), withBottomBorder: !1, withLeftPadding: !(t.isTrue("social_context_and_topic_context_refresh_alignment_enabled") || E), topicData: k, text: T };
                }
                if (y) {
                    if (t.getStringValue("topics_context_controls_implicit_variation") in C) {
                        const e = C[t.getStringValue("topics_context_controls_implicit_variation")];
                        return { iconSize: n, contextType: _, rightControl: o.createElement(Z, { bannerText: i.topicContext && i.topicContext.bannerText, label: e, link: u, linkText: i.topicContext?.linkText, onNotInterestedPress: x, topic: l, withRightControl: t.isTrue("topics_context_controls_implicit_context_x_enabled") }), topicData: k, text: T, withBottomBorder: !1, withLeftPadding: !(t.isTrue("social_context_and_topic_context_refresh_alignment_enabled") || E) };
                    }
                    {
                        const e = o.createElement(S, { isExpanded: r, onNotInterestedPress: x, topic: l });
                        return r ? { bottomControl: e, contextType: c, iconSize: "xLarge", iconStyle: v.iconStyle, textColor: "text", textSize: "headline1", text: i.text, topicData: void 0, withBottomBorder: !0, withLeftPadding: s } : { contextType: c, iconSize: n, iconStyle: v.iconStyle, rightControl: e, topicData: k, text: i.text, withBottomBorder: !0, withLeftPadding: s };
                    }
                }
                return { contextType: c, iconSize: n, text: i.text, withLeftPadding: s };
            }
            const v = l.default.create((e) => ({ tombstone: { paddingBottom: e.componentDimensions.gutterVertical }, iconStyle: { paddingBottom: `calc(${e.spaces.space2} + ${e.spaces.space1})`, marginBottom: e.spaces.space4 }, topicActions: { flexDirection: "row", flexGrow: 1, alignItems: "center", minHeight: e.spaces.space32 }, topicMiddot: { alignSelf: "center", paddingEnd: 0 }, followTopicButton: { marginTop: e.spaces.space1 }, followTopicButtonWrapperNotExpanded: { marginBottom: e.spaces.space2 }, followTopicButtonWrapper: { marginVertical: e.spaces.space4, paddingEnd: e.spaces.space4, width: "50%" }, followingTopicButtonWrapper: { marginVertical: e.spaces.space4, width: "100%" }, notInterestedButtonWrapper: { alignItems: "flex-end", flexGrow: 1 }, largeNotInterestedButtonWrapper: { marginVertical: e.spaces.space4, paddingStart: e.spaces.space4, width: "50%" } }));
        },
        764372: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(202784),
                a = n(325686),
                r = n(254554),
                i = n(392237),
                l = n(265196),
                s = n(421575),
                c = n(686689);
            const d = i.default.create((e) => ({ topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: `-${e.spaces.space8}` } })),
                p = ({ defaultRef: e, topic: t, topicFollowPrompt: n }) => {
                    const { entities: i, text: p } = n?.description || {};
                    return o.createElement(a.Z, { style: d.topicFollowPrompt }, o.createElement(r.Z, { containerRef: e, primaryAction: o.createElement(l.ZP, { showRelationshipChangeConfirmation: !0, textMode: s.q.FollowTopic, topic: t }), text: o.createElement(c.Z, { entities: i, text: p }) }));
                };
        },
        914564: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                a = n(731708),
                r = n(392237),
                i = n(111677),
                l = n.n(i),
                s = n(808525);
            const c = l().aaad27c8;
            function d({ color: e = "magenta500", name: t }) {
                return o.createElement(a.ZP, { color: e }, o.createElement(s.default, { "aria-label": c, style: [p.icon, { backgroundColor: r.default.theme.colors[e] }] }), t);
            }
            const p = r.default.create(({ borderRadii: e, colors: t, fontSizes: n, primaryColorName: o, spaces: a }) => ({ icon: { borderRadius: e.infinite, color: t.whiteOnColor, fontSize: n.subtext3, marginEnd: a.space4, padding: a.space2 } }));
        },
        494569: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(202784);
            const o = (0, n(523561).Z)({ loader: () => Promise.all([n.e("icons.25"), n.e("icons.6"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"), n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"), n.e("loader.Grok")]).then(n.bind(n, 223526)) });
        },
        994057: (e, t, n) => {
            n.d(t, { C: () => c });
            var o = n(202784),
                a = n(392237),
                r = n(731708),
                i = n(111677);
            const l = n.n(i)().aaad27c8,
                s = a.default.create(({ borderRadii: e, colors: t, fontSizes: n, lineHeights: o, paletteName: a, spaces: r }) => ({ label: { backgroundColor: "light" === a ? t.gray800 : t.gray200, border: `${r.space1} solid ${t.cellBackground}`, borderRadius: e.small, color: "light" === a ? t.whiteOnColor : t.text, fontSize: n.subtext3, lineHeight: o.subtext3, margin: "auto", maxWidth: "100%", paddingHorizontal: r.space2, paddingVertical: r.space1, wordBreak: "break-all" } }));
            function c() {
                return o.createElement(r.ZP, { style: s.label }, l);
            }
        },
        756632: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(202784),
                a = n(325686),
                r = n(530525),
                i = n(155727),
                l = n(235902),
                s = n(823161),
                c = n(392237),
                d = n(37341);
            const p = r.Z.createLayoutCache(),
                u = c.default.create((e) => ({ avatar: { display: "block" }, avatarWrapper: { flexShrink: 1, flexGrow: 0, width: "100%" } })),
                m = (e) => {
                    const { avatarRef: t, id: n, link: r, onClick: c, onHoverCardScreenNameClick: m, promotedContent: b, screenName: h, uri: g, userAvatarLabel: w, userId: f, withHoverCard: y = !0, withLink: E = !0, withUserPresence: _ = !1 } = e;
                    return o.createElement(
                        a.Z,
                        { style: u.avatarWrapper },
                        o.createElement(i.Z.Consumer, null, ({ avatarSize: e }) => (_ ? o.createElement(d.Z, { avatarRef: t, id: n, imageLayoutCache: p, onClick: c, onHoverCardScreenNameClick: m, promotedContent: b, screenName: h, size: e, style: u.avatar, uri: g, userAvatarLabel: w, userId: f, withHoverCard: y, withLink: E }) : o.createElement(l.ZP.Provider, { value: { userAvatarLabel: () => w } }, o.createElement(s.default, { avatarRef: t, id: n, imageLayoutCache: p, link: r, onClick: c, onHoverCardScreenNameClick: m, promotedContent: b, screenName: h, size: e, style: u.avatar, uri: g, userId: f, withHoverCard: y, withLink: E })))),
                    );
                };
        },
        400300: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = { analyticsButton: "analyticsButton", promotedIndicator: "promotedIndicator", readerModeBottomBar: "readerModeBottomBar", socialContext: "socialContext", tweet: "tweet" };
        },
        724573: (e, t, n) => {
            n.d(t, { n: () => l });
            var o = n(807896),
                a = n(202784),
                r = n(163889);
            class i extends a.Component {
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
            function l(e) {
                return a.forwardRef((t, n) => a.createElement(i, { tweet: t.tweet }, a.createElement(e, (0, o.Z)({}, t, { ref: n }))));
            }
        },
        375260: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(807896),
                a = n(202784),
                r = n(495580),
                i = n(725405);
            const l = ({ scribeElement: e, ...t }) => {
                const n = (0, i.Z)();
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
            n.d(t, { Z: () => u });
            var o = n(202784),
                a = n(301503),
                r = n(989272),
                i = n(392237),
                l = n(925873),
                s = n(187669),
                c = n(949626),
                d = n(578870);
            const p = "twitter-article-media-caption-id",
                u = ({ caption: e }) => (
                    (0, s.q)(() => {
                        (0, r.fH)(`\n      .${p} .longform-unstyled,\n      .${p} .longform-unstyled a\n       {\n        font-size: ${i.default.theme.fontSizes.subtext2} !important;\n        line-height: ${i.default.theme.lineHeights.subtext2} !important;\n        margin-bottom: 0;\n      }\n\n      .${p} .longform-unstyled-narrow,\n      .${p} .longform-unstyled-narrow a\n       {\n        font-size: ${i.default.theme.fontSizes.subtext2} !important;\n        line-height: ${i.default.theme.lineHeights.subtext2} !important;\n        margin-bottom: 0;\n      }\n\n      .${p} .longform-unstyled,\n      .${p} .longform-unstyled a:not(:hover),\n      .${p} .longform-unstyled-narrow,\n      .${p} .longform-unstyled-narrow a:not(:hover) {\n        color: ${i.default.theme.colors.gray800} !important;\n      }\n    `, p);
                    }),
                    o.createElement(c.Z, { className: p }, o.createElement(d._, { contentState: (0, a.convertToRaw)(l.Z.initEditorState(e).getCurrentContent()) }))
                );
        },
        246134: (e, t, n) => {
            n.d(t, { ZP: () => Be, VN: () => Ce });
            var o = n(202784),
                a = n(325686),
                r = n(537392),
                i = n(786475),
                l = n(530732),
                s = n(103737),
                c = n(530525),
                d = n(439592),
                p = n(167630),
                u = n(661810),
                m = n(731708),
                b = n(891198),
                h = n(392237),
                g = n(111677),
                w = n.n(g),
                f = n(166502),
                y = n(187669),
                E = n(19640),
                _ = n(443781),
                C = n(778955),
                x = n(240089),
                k = n(959959),
                Z = n(793211),
                S = n(725516),
                T = n(794057),
                v = n(727828),
                P = n(751632),
                B = n(470397),
                I = n(966886),
                A = n(155727),
                L = n(823161),
                R = n(366635),
                M = n(23134),
                W = n(952793),
                $ = n(655352),
                z = n(125363),
                D = n(390387),
                N = n(949626);
            const V = h.default.create((e) => ({ root: { display: "flex", overflow: "hidden" } })),
                F = (e) => {
                    const { author: t, children: n } = e,
                        a = `https://www.twitter.com/${t.screen_name}`;
                    return o.createElement(N.Z, { itemProp: "author", itemScope: !0, itemType: "https://schema.org/Person", style: V.root }, o.createElement("meta", { content: t.name, itemProp: "name" }), o.createElement("meta", { content: t.screen_name, itemProp: "additionalName" }), o.createElement("meta", { content: a, itemProp: "url" }), o.createElement("meta", { content: t.profile_image_url_https, itemProp: "image" }), n);
                };
            var H = n(157130),
                O = n(500201),
                G = n(323265);
            const q = w().ced3c85a,
                U = h.default.create((e) => ({ popover: { minWidth: e.spaces.space80, marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space12, justifyContent: "center" }, label: { cursor: "pointer" }, lastEditedText: { color: e.colors.buttonBlack } })),
                j = ({ lastPublishedAtMs: e }) => {
                    const t = G.ZP.isMobileOS(),
                        n = o.useCallback(() => {
                            const t = o.createElement(I.Z, { color: "buttonBlack", humanReadable: !0, timestamp: e });
                            return o.createElement(m.ZP, { size: "subtext1", style: U.lastEditedText }, o.createElement(w().I18NFormatMessage, { $i18n: "a20c0721" }, t));
                        }, [e]);
                    return o.createElement(H.Z, { contentStyle: U.popover, enableHover: !0, preferredVerticalOrientation: t ? "up" : "down", renderContent: n, withArrow: !0, withMask: t }, o.createElement(m.ZP, { color: "gray700", size: "subtext1", style: U.label }, o.createElement(O.default, { "aria-label": q })));
                },
                Q = ({ author: e }) => {
                    const t = (0, W.hC)("super_follow_android_web_subscription_enabled"),
                        n = (0, z.v9)(D._h),
                        r = t && e.super_follow_eligible && !e.super_following && e.id_str !== n,
                        i = e.id_str !== n && !e.following,
                        l = (0, $.ZP)();
                    return o.createElement(a.Z, null, r ? o.createElement(M.C, { buttonType: "primaryFilled", isSuperFollowSubscriptionEnabled: t, referringPage: "article_details", relationshipMode: "subscribe", size: l ? "small" : "xSmall", userId: e.id_str }) : i ? o.createElement(M.C, { buttonType: "primaryFilled", size: l ? "small" : "xSmall", userId: e.id_str }) : null);
                },
                K = h.default.create((e) => ({ container: { flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space24, gap: e.spaces.space8 }, avatar: { marginEnd: e.spaces.space8, flexShrink: 0 }, attribution: { alignItems: "center" } })),
                J = ({ author: e, firstPublishedAtSecs: t, lastPublishedAtSecs: n }) => {
                    const r = Number(1e3 * t),
                        i = Number(1e3 * n),
                        l = r !== i,
                        s = o.createElement(B.Z, null, r ? o.createElement(I.Z, { timestamp: r }) : null, l ? o.createElement(j, { lastPublishedAtMs: i }) : null);
                    return o.createElement(
                        a.Z,
                        { style: K.container },
                        o.createElement(
                            B.Z,
                            { style: K.attribution },
                            o.createElement(
                                F,
                                { author: e },
                                o.createElement(
                                    a.Z,
                                    { style: K.avatar },
                                    o.createElement(A.Z.Consumer, null, ({ avatarSize: t }) => o.createElement(L.default, { screenName: e.screen_name, size: t, uri: e.profile_image_url_https, withHoverCard: !0, withLink: !0 })),
                                ),
                                o.createElement(R.Z, { affiliateBadgeInfo: e.highlightedLabel, isBlueVerified: e.is_blue_verified, isVerified: e.verified, name: e.name, screenName: e.screen_name, screenNameSuffix: s, verifiedType: e.verified_type, withHoverCard: !0, withLink: !0, withStackedLayout: !0 }),
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
                oe = h.default.create((e) => ({ callout: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 }, calloutNarrow: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 } })),
                ae = ({ isNarrow: e, onClose: t }) => o.createElement(te.Z, { onClose: t, style: e ? oe.calloutNarrow : oe.callout, text: ne, withCloseButton: !0 });
            var re = n(688715),
                ie = n(266151);
            const le = h.default.create((e) => ({ callout: { marginBottom: e.spaces.space32 }, calloutNarrow: { marginBottom: e.spaces.space16 } })),
                se = ({ isNarrow: e, onClose: t, onScribeEvent: n }) => {
                    const a = o.useCallback(() => {
                            n?.({ action: "click", component: "inline_callout", element: "help_center_link" });
                        }, [n]),
                        r = o.useMemo(() => ({ learnMoreLink: o.createElement(m.ZP, { color: "text", link: (0, re.ju)("https://help.x.com/using-x/articles"), onClick: a, withUnderline: !0 }) }), [a]),
                        i = o.useMemo(() => o.createElement(w().I18NFormatMessage, { $i18n: "a9ce2dd5" }, o.cloneElement(r.learnMoreLink, null, w().edf9101f)), [r]);
                    return o.createElement(te.Z, { Icon: ie.default, headline: Ce, onClose: t, style: e ? le.calloutNarrow : le.callout, text: i, type: "primary", withCloseButton: !0 });
                };
            n(571372);
            var ce = n(578870),
                de = n(691533),
                pe = n(459679),
                ue = n(512110),
                me = n(335923),
                be = n(540985),
                he = n(790082);
            const ge = h.default.theme.aspectRatios.maxTimelineImage,
                we = h.default.theme.aspectRatios.minTimelineImage,
                fe = (e) => {
                    const { block: t, blockProps: n, contentState: a } = e,
                        r = t.getEntityAt(0),
                        i = t.getText(),
                        l = r ? a.getEntity(r) : null,
                        { hasPostPreloaded: c, isPostBatchingEnabled: d, media: p, onScribeEvent: m, publishedPost: b } = n || {},
                        h = b?.id_str,
                        g = o.useCallback((e) => o.createElement(he.Z, { caption: e.text }), []),
                        w = (0, W.hC)("responsive_web_twitter_article_latex_enabled"),
                        f = (() => {
                            if (l) {
                                if (l.type === T.DC.TWEET) return "tweet";
                                if (l.type === T.DC.MEDIA) {
                                    const e = l.getData().mediaItems;
                                    return e.length > 1 ? "images" : e[0].mediaCategory;
                                }
                            }
                        })();
                    if (
                        (o.useEffect(() => {
                            m?.({ action: "impression", element: f });
                        }, [m, f]),
                        !l)
                    )
                        return null;
                    const y = () => {
                            m?.({ action: "click", element: f });
                        },
                        E = l.getData();
                    if (l.type === T.DC.TWEET) {
                        const { tweetId: e } = E;
                        return o.createElement(ue.ZP, { hasPostPreloaded: c, isPostBatchingEnabled: d, onClick: y, style: ye.atomicBlock, tweetId: e, withActionsDisabled: !1 });
                    }
                    if (l.type === T.DC.MEDIA) {
                        const e = E.mediaItems.map((e) => p?.find((t) => t.media_id === e.mediaId)),
                            t = (0, pe.Z)(e, (e) => (0, k.W5)(e, b)),
                            n = E.caption ? { text: E.caption, entities: [] } : void 0;
                        return t ? o.createElement(s.Z, { caption: n, hasSensitiveMedia: b?.possibly_sensitive, mediaDetails: t, mediaVisibilityResults: b?.mediaVisibilityResults, onClick: y, renderCaption: g, showBorder: !1, singleImageMaxAspectRatio: ge, singleImageMinAspectRatio: we, style: [ye.fullWidth, ye.atomicBlock], tweetId: h ?? "0" }) : null;
                    }
                    if (l.type === T.DC.DIVIDER) return o.createElement(u.Z, { style: [ye.atomicBlock, ye.fullWidth] });
                    if (l.type === T.DC.MARKDOWN) {
                        const { markdown: e } = E;
                        return o.createElement(me.Z, { markdownText: e, style: [ye.atomicBlock, ye.fullWidth] });
                    }
                    return l.type === T.DC.LATEX && w ? o.createElement(be.Z, { displayMode: !0, style: [ye.atomicBlock, ye.fullWidth], tex: i }) : null;
                },
                ye = h.default.create((e) => ({ fullWidth: { width: "100%" }, atomicBlock: { marginBottom: e.spaces.space28 } })),
                Ee = (e) => o.createElement(de.Z, { hideOnError: !0 }, o.createElement(fe, e));
            function _e({ hasPostPreloaded: e, isPostBatchingEnabled: t, onScribeEvent: n, publishedPost: a, twitterArticle: r }) {
                const i = (function (e) {
                    try {
                        if (!e.content_state) return;
                        const t = (0, Z.K7)(e.content_state);
                        if (!t.entityMap || !t.blocks) throw new Error("Malformed RawDraftContentState");
                        return t;
                    } catch (e) {}
                })(r);
                if (!i) return null;
                const l = r.media_entities ?? [],
                    s = { atomic: { component: Ee, editable: !1, props: { media: l, onScribeEvent: n, publishedPost: a, hasPostPreloaded: e, isPostBatchingEnabled: t } } };
                return o.createElement(ce._, { componentByType: s, contentState: i, onScribeEvent: n, paragraphFontSizeOverride: "headline2" });
            }
            const Ce = w().g345246c,
                xe = w().b14efa0a,
                ke = w().afdccedb;
            function Ze(e) {
                const { author: t, fetchTweetsIfNeeded: n, minContentThreshold: h, onContainerPress: g, onLearnMoreCalloutImpression: w, onScribeEvent: B, publishedPost: I, renderInTweet: A, shouldShowLearnMoreCallout: L, twitterArticle: R, withActionBar: M, withReplyLink: W } = e,
                    { featureSwitches: $, userClaims: z, viewerUserId: D } = o.useContext(_.rC),
                    N = $.isTrue("subscriptions_feature_article_composer") && !z.isTrueAndEnabled("subscriptions_feature_article_composer"),
                    V = $.isTrue("responsive_web_twitter_article_batch_posts"),
                    F = (0, S.z)(),
                    H = o.useCallback(
                        (e) => {
                            B ? B(e) : F.scribe(e);
                        },
                        [F, B],
                    ),
                    O = R?.lifecycle_state?.lifecycle === E.f.Draft,
                    [G, q] = o.useState(!1),
                    [U, j] = o.useState(!!L),
                    [Q, K] = o.useState(D === t?.id_str && O),
                    Y = R.cover_media,
                    X = (0, k.W5)(Y, I),
                    ee = (0, k.tY)(Y),
                    te = (0, k.Si)(),
                    ne = R.content_state,
                    oe = M && (!ne || !h || ne.blocks?.length >= h);
                (0, y.q)(() => {
                    H({ action: "impression", component: "article" }), ee && H({ action: "impression", element: "cover_image" }), L && (H({ action: "impression", element: "inline_callout" }), w?.());
                });
                const re = o.useMemo(() => {
                        const e = V && ne ? (0, Z.B$)(ne, T.DC.TWEET) : null;
                        return e?.map((e) => e?.data?.tweetId)?.filter(Boolean);
                    }, [ne, V]),
                    ie = o.useCallback(() => {
                        if (ne && re && re.length > 0) {
                            const e = (0, f.Z)(re, 40);
                            Promise.all(e.map((e) => n(e))).finally(() => {
                                q(!0);
                            });
                        }
                    }, [ne, re, n]);
                o.useEffect(() => {
                    ie();
                }, [ie]);
                const le = !!ne,
                    ce = o.useCallback(
                        (e) => {
                            const t = e ? Te : Se,
                                n = U ? t.paddingTopWithCallout : t.paddingTop;
                            return A ? [n] : [t.content, n, !D && t.paddingBottomLoggedOut];
                        },
                        [D, U, A],
                    ),
                    de = (0, r.Zx)(({ containerWidth: e }) => i.Z.isNarrowScreenWidth(e)),
                    pe = I?.reply_count;
                return o.createElement(
                    l.Z,
                    { interactive: !!g, interactiveStyles: ve, onPress: g || void 0, testID: "twitterArticleReadView" },
                    ee
                        ? o.createElement(
                              a.Z,
                              { style: Se.marginBottom },
                              I && X
                                  ? o.createElement(s.Z, {
                                        hasSensitiveMedia: I?.possibly_sensitive,
                                        mediaDetails: [X],
                                        mediaVisibilityResults: I?.mediaVisibilityResults,
                                        onClick: () => {
                                            H({ action: "click", element: "cover_media" });
                                        },
                                        showBorder: !1,
                                        showRoundCorners: !1,
                                        singleImageMaxAspectRatio: te,
                                        singleImageMinAspectRatio: te,
                                        tweetId: I?.id_str ?? "0",
                                    })
                                  : o.createElement(c.Z, { "aria-label": xe, aspectMode: d.Z.exact(te), image: ee }),
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
                        o.createElement(P.ZP, { size: de ? "title3" : "title1", style: de ? Te.title : Se.title, title: R.title, weight: "heavy" }),
                        t && R.metadata?.first_published_at_secs && R.lifecycle_state?.modified_at_secs ? o.createElement(J, { author: t, firstPublishedAtSecs: R.metadata.first_published_at_secs, lastPublishedAtSecs: R.lifecycle_state.modified_at_secs }) : null,
                        le ? o.createElement(o.Fragment, null, oe && I ? o.createElement(C.Z, { allowBookmarkInActionsBar: !0, style: Se.actionBar, tweet: I, withAnalyticsAction: !0, withCount: !0 }) : null, o.createElement(a.Z, { style: Se.body, testID: "twitterArticleRichTextView" }, o.createElement(_e, { hasPostPreloaded: G, isPostBatchingEnabled: V, onScribeEvent: H, publishedPost: I, twitterArticle: R }))) : O ? null : o.createElement(p.Z, { style: Se.loadingStyle }),
                        N ? o.createElement(v.Z, { variant: "ArticlesReader" }) : null,
                        W && I && pe
                            ? o.createElement(
                                  o.Fragment,
                                  null,
                                  o.createElement(u.Z, { spacing: de ? "space24" : "space32" }),
                                  o.createElement(
                                      m.ZP,
                                      {
                                          align: "center",
                                          link: I.permalink,
                                          onPress: () => {
                                              H({ action: "click", component: "footer", element: "read_replies" });
                                          },
                                      },
                                      ke({ displayCount: b.ZP.getTruncatedCount(pe), count: pe }),
                                  ),
                              )
                            : null,
                        t
                            ? o.createElement(
                                  o.Fragment,
                                  null,
                                  o.createElement(u.Z, { spacing: de ? "space24" : "space32" }),
                                  o.createElement(x.ZP, {
                                      cellClickable: !1,
                                      decoration: !!D && x.ET,
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
            const Se = h.default.create((e) => ({ body: { paddingTop: e.spaces.space20 }, content: { paddingBottom: e.spaces.space80, paddingHorizontal: e.spaces.space48 }, paddingBottomLoggedOut: { paddingBottom: `calc(${e.spaces.space80} + ${e.spaces.space64})` }, hoverStyle: { cursor: "initial" }, paddingTopWithCallout: { paddingTop: e.spaces.space32 }, paddingTop: { paddingTop: e.spaces.space2 }, marginBottom: { marginBottom: e.spaces.space24 }, title: { marginTop: e.spaces.space12, lineHeight: `calc(${e.spaces.space40} + ${e.spaces.space4})` }, actionBar: { height: e.spaces.space48, borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", marginTop: e.spaces.space4 }, loadingStyle: { marginHorizontal: "auto", marginVertical: e.spaces.space20 } })),
                Te = h.default.create((e) => ({ content: { paddingBottom: `calc(${e.spaces.space56} * 2)`, paddingHorizontal: e.spaces.space16 }, paddingBottomLoggedOut: { paddingBottom: e.spaces.space56 }, paddingTopWithCallout: { paddingTop: e.spaces.space16 }, title: { marginTop: e.spaces.space12, lineHeight: e.lineHeights.title3 } })),
                ve = { hoverStyle: Se.hoverStyle },
                Pe = ee(o.memo(Ze)),
                Be = o.memo(Pe);
        },
        751632: (e, t, n) => {
            n.d(t, { ZP: () => d });
            var o = n(202784),
                a = n(325686),
                r = n(731708),
                i = n(392237),
                l = n(111677);
            const s = n.n(l)().gd11f228,
                c = i.default.create((e) => ({ titlePlaceholder: { opacity: 0.4 }, titleWrapper: { width: "100%" } })),
                d = ({ numberOfLines: e, size: t = "body", style: n, title: i, weight: l = "bold" }) => o.createElement(a.Z, { style: [c.titleWrapper, !i && c.titlePlaceholder] }, o.createElement(r.ZP, { dir: "auto", numberOfLines: e, size: t, style: n, testID: "twitter-article-title", weight: l }, i || s));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407.74c216da.js.map
