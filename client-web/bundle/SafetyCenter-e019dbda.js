"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SafetyCenter-e019dbda"],
    {
        229333: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(202784),
                a = r(466999),
                n = r(325686),
                l = r(392237),
                s = r(111677);
            const i = r.n(s)().e5b0063d;
            let c = 0;
            class d extends o.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        r = i({ title: t });
                    return o.createElement(n.Z, { "aria-labelledby": this._listDomId, role: "region" }, o.createElement(a.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: l.default.visuallyHidden }, t), o.createElement(n.Z, { "aria-label": r }, e));
                }
            }
            const u = d;
        },
        414939: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                a = r(325686),
                n = r(392237);
            class l extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement(a.Z, { style: s.root });
                }
            }
            const s = n.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                i = l;
        },
        965245: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(807896),
                a = r(202784),
                n = r(229333),
                l = r(414939),
                s = r(334346);
            const i = ({ accessibilityTitle: e, footer: t = a.createElement(l.Z, null), ...r }) => {
                const i = a.createElement(s.C, (0, o.Z)({}, r, { footer: t }));
                return e ? a.createElement(n.Z, { title: e }, i) : i;
            };
        },
        171482: (e, t, r) => {
            r.d(t, { Z: () => d, b: () => c });
            var o = r(202784),
                a = r(392237),
                n = r(868634),
                l = r(731708);
            const s = a.default.create((e) => ({ receivedLabel: { backgroundColor: e.colors.blue50 }, receivedLabelText: { color: e.colors.blue900 }, noViolationLabel: { backgroundColor: e.colors.gray50 }, noViolationLabelText: { color: e.colors.gray900 }, violationLabel: { backgroundColor: e.colors.green50 }, violationLabelText: { color: e.colors.green900 }, supportLabel: { backgroundColor: e.colors.purple50 }, supportLabelText: { color: e.colors.purple900 }, contextNeededLabel: { backgroundColor: e.colors.orange50 }, contextNeededLabelText: { color: e.colors.orange900 }, reservedLabel: { backgroundColor: e.colors.gray50 }, reservedLabelText: { color: e.colors.gray900 } })),
                i = { Received: { label: s.receivedLabel, labelText: s.receivedLabelText }, NoViolation: { label: s.noViolationLabel, labelText: s.noViolationLabelText }, Violation: { label: s.violationLabel, labelText: s.violationLabelText }, Support: { label: s.supportLabel, labelText: s.supportLabelText }, NeedMoreContext: { label: s.contextNeededLabel, labelText: s.contextNeededLabelText }, Reserved1: { label: s.reservedLabel, labelText: s.reservedLabelText }, Reserved2: { label: s.reservedLabel, labelText: s.reservedLabelText }, Appealed: { label: s.reservedLabel, labelText: s.reservedLabelText }, Detected: { label: s.reservedLabel, labelText: s.reservedLabelText } },
                c = ({ statusLabel: { text: e, type: t } }) => {
                    const r = i[t];
                    return e ? o.createElement(n.ZP, { bold: !0, style: r?.label }, o.createElement(l.ZP, { style: r?.labelText }, e)) : null;
                },
                d = o.memo(c);
        },
        43138: (e, t, r) => {
            r.d(t, { Z: () => p });
            var o = r(202784),
                a = r(325686),
                n = r(731708),
                l = r(392237),
                s = r(111677),
                i = r.n(s),
                c = r(171482);
            const d = ({ datetime: e, statusLabel: t }) => o.createElement(a.Z, { style: u.root }, o.createElement(a.Z, { style: u.statusLabel }, o.createElement(c.b, { statusLabel: t })), o.createElement(n.ZP, { size: "body", style: u.date }, ((e) => (0, i().da44942d)(new Date(e)))(e))),
                u = l.default.create((e) => ({ root: { display: "grid", width: "100%", justifyContent: "space-between", alignItems: "center", gridTemplateAreas: "'StatusLabel Date'" }, statusLabel: { gridArea: "StatusLabel" }, date: { gridArea: "Date", fontSize: e.fontSizes.body, fontWeight: e.fontWeights.medium, color: e.colors.gray600 } })),
                p = o.memo(d);
        },
        222718: (e, t, r) => {
            r.d(t, { Z: () => y });
            var o = r(202784),
                a = r(325686),
                n = r(537392),
                l = r(10656),
                s = r(655352),
                i = r(555079),
                c = r(500002),
                d = r(625661),
                u = r(449067),
                p = r(655543),
                m = r(715601),
                h = r(392237);
            const b = h.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...h.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class f extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? o.createElement(a.Z, { style: b.fill }, o.createElement(m.Z, { style: b.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return o.createElement(n.ZP, null, ({ containerWidth: e }) => (l.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: r, screenType: a, showBackButtonOnRoot: n, showSubtitleOnRoot: l, showSubtitleOnWideDetail: i, showTitleOnRoot: c, withBottomBorder: d, withDetailOpen: p, ...m } = this.props;
                    return o.createElement(o.Fragment, null, (0, s.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(u.Z.Configure, m), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: r, appBarStyle: n, backLocation: l, documentTitle: s, headerless: c, history: p, leftControl: m, middleControl: h, onBackClick: f, rightControl: y, screenType: g, searchBoxOptions: E, secondaryBar: v, showBackButtonOnRoot: _, showSubtitleOnRoot: w, showSubtitleOnWideDetail: Z, showTitleOnRoot: C, subtitle: x, title: T, titleIconCell: k, titleIconCellSize: S, withDetailOpen: L, withSearchBox: P, withTweetButton: I, withWideContainer: B } = this.props,
                        R = "root" === g,
                        D = "secondaryRoot" === g,
                        N = "primaryDetail" === g,
                        O = (N && Z) || (R && w),
                        A = (R && !_) || (N && e),
                        z = (R && !C) || (N && e && !C),
                        W = R ? i.ey : N ? i.vX : void 0,
                        F = o.createElement(a.Z, { style: b.appBarContainer }, o.createElement(d.ZP, { backLocation: l, fixed: !1, hideBackButton: A, history: p, leftControl: m, middleControl: h, onBackClick: f, rightControl: y, secondaryBar: v, style: n, subtitle: O ? x : void 0, title: z ? void 0 : T, titleDomId: W, titleIconCell: k, titleIconCellSize: S, withWideContainer: B })),
                        M = R || (D && L) ? null : o.createElement(u.Z.Configure, { SideNavButton: t, TabBar: r, backLocation: l, documentTitle: s, headerless: c, middleControl: h, onBackClick: f, rightControl: y, searchBoxOptions: E, subtitle: x, title: T, withSearchBox: P, withTweetButton: I });
                    return o.createElement(o.Fragment, null, M, F);
                }
            }
            (f.contextType = p.Z), (f.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const y = (0, c.ZP)(f);
        },
        496364: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                a = r(107267),
                n = r(791632),
                l = r(222718);
            const s = (e) => {
                const t = (0, a.useHistory)();
                return (0, n.HD)(t) ? e.children || null : o.createElement(l.Z, e);
            };
        },
        334346: (e, t, r) => {
            r.d(t, { C: () => i, Z: () => s });
            var o = r(807896),
                a = r(202784),
                n = r(524084),
                l = r(768572);
            const s = "stable_sort_index",
                i = a.forwardRef((e, t) => {
                    const r = e.cacheKey;
                    return a.createElement(l.ZP, { identifier: r }, a.createElement(n.Z, (0, o.Z)({ ref: t }, e)));
                });
        },
        507651: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(807896),
                a = r(202784),
                n = r(107267),
                l = r(403556),
                s = r(791632);
            const i = (e) => {
                    const t = (0, n.useHistory)(),
                        { isCompact: r, ...i } = e;
                    return a.createElement(l.Z, (0, o.Z)({}, i, { isCompact: r || (0, s.HD)(t) }));
                },
                c = a.memo(i);
        },
        524084: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                a = r(523561),
                n = r(195560);
            const l = (0, a.Z)({ loader: () => r.e("loader.AbsolutePower").then(r.bind(r, 590136)), renderPlaceholder: (e, t) => o.createElement(n.Z, { hasError: e, onRetry: t }) });
        },
        127218: (e, t, r) => {
            r.d(t, { C: () => y });
            var o = r(202784),
                a = r(614983),
                n = r.n(a),
                l = r(437429),
                s = r.n(l),
                i = r(57074),
                c = r.n(i),
                d = r(10622),
                u = r.n(d),
                p = r(585488),
                m = r(71620),
                h = r(163889),
                b = r(312771),
                f = r(535338);
            function y(e, t, r) {
                const [a, l] = o.useState(!1),
                    [i, d] = o.useState(null),
                    y = s()(),
                    g = c()(t),
                    E = (0, m.po)(),
                    v = (0, f.p)(e, g, r);
                return o.useMemo(() => {
                    const t = (0, p.getRequest)(e).params?.metadata?.sliceInfoPath;
                    n()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: r, previous_cursor: o } =
                            (function (e, t) {
                                try {
                                    n()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let r = e;
                                    for (const e of t) n()(!!r, "The provided path is invalid."), n()("string" == typeof e, "Unexpected value for path!"), (r = r?.[e]);
                                    return r;
                                } catch (e) {
                                    return void (0, h.ZP)(e.message);
                                }
                            })(v, t) || {},
                        s = (t) => {
                            a ||
                                (l(!0),
                                u()(y, e, { ...g, cursor: t }).subscribe({
                                    complete: () => {
                                        l(!1);
                                    },
                                    error: (e) => {
                                        l(!1), d(e), E(e);
                                    },
                                }));
                        },
                        c = () => {
                            r && s(r);
                        },
                        m = () => {
                            o && s(o);
                        },
                        f = () => {
                            s(void 0);
                        };
                    return i ? { subsequentFetchStatus: b.ZP.FAILED, error: i, fetchNext: c, fetchPrevious: m, refetch: f, data: v, hasNext: Boolean(r), hasPrevious: Boolean(o) } : { subsequentFetchStatus: a ? b.ZP.LOADING : b.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: m, refetch: f, data: v, hasNext: Boolean(r), hasPrevious: Boolean(o) };
                }, [e, v, a, i, y, g, E]);
            }
        },
        970701: (e, t, r) => {
            r.r(t), r.d(t, { default: () => ye });
            var o = r(816290),
                a = r(202784),
                n = r(325686),
                l = (r(585488), r(107267)),
                s = r(537392),
                i = r(731708),
                c = r(392237),
                d = r(111677),
                u = r.n(d),
                p = r(450681),
                m = r(187669),
                h = r(430759),
                b = r(43138),
                f = r(807896),
                y = r(293723),
                g = r(136483),
                E = r(171482);
            const v = "StepTimelineEvent",
                _ = "ConnectorLine",
                w = "Completed",
                Z = "InProgress",
                C = "Awaiting",
                x = ({ eventExplanation: e, eventStatus: t, headerText: r, inlineLink: o, inlineLinkText: l, showConnectorLine: s, statusLabel: c }) => {
                    if (!r && !c) return null;
                    return a.createElement(
                        n.Z,
                        { focusable: !0, role: "listitem", style: k.root, testID: v },
                        a.createElement(
                            n.Z,
                            { style: k.dotArea },
                            (() => {
                                switch (t) {
                                    case "Completed":
                                        return a.createElement(y.default, { "aria-hidden": !0, style: k.dotCompleted, testID: w });
                                    case "InProgress":
                                        return a.createElement(n.Z, { style: k.dotInProgressAura, testID: Z }, a.createElement(g.default, { "aria-hidden": !0, style: k.dotInProgress }));
                                    case "Awaiting":
                                        return a.createElement(g.default, { "aria-hidden": !0, style: k.dotAwaiting, testID: C });
                                    default:
                                        return null;
                                }
                            })(),
                        ),
                        a.createElement(n.Z, { style: k.lineArea }, s ? a.createElement(n.Z, { style: k.line, testID: _ }) : null),
                        a.createElement(n.Z, { style: k.labelArea }, c ? a.createElement(E.Z, { statusLabel: c }) : r ? a.createElement(i.ZP, { "aria-level": 2, role: "heading", weight: "bold" }, r) : void 0),
                        a.createElement(n.Z, { style: k.explanationArea }, a.createElement(i.ZP, { color: "gray700", style: c ? k.explanationWithStatusLabel : void 0 }, e, " ", o && l ? a.createElement(i.ZP, { link: o }, l) : null)),
                    );
                },
                T = "25px",
                k = c.default.create((e) => ({ root: { display: "grid", gridTemplateColumns: `${T} 1fr`, gridTemplateAreas: "'dot label' 'line explanation'", columnGap: e.spaces.space8 }, dotArea: { gridArea: "dot", justifySelf: "center", alignSelf: "center", zIndex: 2 }, lineArea: { gridArea: "line", zIndex: 1 }, labelArea: { gridArea: "label", alignSelf: "center" }, explanationArea: { gridArea: "explanation" }, explanationWithStatusLabel: { marginTop: e.spaces.space8 }, dotCompleted: { width: 18, height: 18, color: e.colors.blue500 }, dotInProgress: { width: 13, height: 13, color: e.colors.blue500 }, dotAwaiting: { width: 18, height: 18, stroke: e.colors.nestedBorderColor, strokeWidth: e.componentDimensions.conversationLineWidth, fill: e.colors.cellBackground }, dotInProgressAura: { width: T, height: T, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#8DCCF7", borderRadius: "100%", position: "relative" }, nonLineStyles: { alignSelf: "flex-start" }, line: { backgroundColor: e.colors.nestedBorderColor, marginHorizontal: "auto", width: e.componentDimensions.conversationLineWidth, marginTop: "-5px", marginBottom: "-25px", flexGrow: 1 } })),
                S = a.memo(x),
                L = ({ stepTimelineSteps: e }) =>
                    a.createElement(
                        n.Z,
                        { role: "list", style: P.root },
                        e.map((t, r) => {
                            const o = e.length - 1 === r;
                            return a.createElement(S, (0, f.Z)({ key: r }, t, { showConnectorLine: !o }));
                        }),
                    ),
                P = c.default.create((e) => ({ root: { display: "grid", gap: e.spaces.space16 } }));
            var I = r(736063),
                B = r(10656),
                R = r(725516),
                D = r(535338),
                N = r(206859),
                O = r(10012),
                A = r(688715),
                z = r(593866),
                W = r(189700),
                F = r(200112);
            const M = "gray700",
                H = u().c2d0494a,
                V = u().ibf33bae,
                q = u().e846ae32,
                j = u().e3647d08,
                $ = { link: a.createElement(i.ZP, { link: (0, A.ju)("https://help.x.com/rules-and-policies/twitter-law-enforcement-support") }) },
                G = { link: a.createElement(i.ZP, { link: "https://findahelpline.com/i/iasp" }) },
                K = u().h7fa9240,
                U = u().fb2ff552,
                X = u().bb57e8c0,
                Y = u().b9ce59ba,
                J = ({ actionedReportType: e }) => {
                    const t = [
                        { decoration: a.createElement(W.default, { style: Q.icon }), label: V, description: q },
                        { decoration: a.createElement(F.default, { style: Q.icon }), label: j, description: a.createElement(i.ZP, { color: M, style: Q.lawEnforcementRecommendation, testID: "lawEnforcementText" }, a.createElement(u().I18NFormatMessage, { $i18n: "e6c21d5b" }, a.cloneElement($.link, null, u().a288ca36))) },
                    ];
                    switch (e) {
                        case "EncouragingSelfHarm":
                            return a.createElement(a.Fragment, null, a.createElement(i.ZP, { color: M }, "\n", a.createElement("strong", null, K, " "), " ", U, "\n\n", a.createElement("strong", null, X, " "), a.createElement(i.ZP, { style: Q.selfHarmLabel }, a.createElement(u().I18NFormatMessage, { $i18n: "ef72b01b" }, a.cloneElement(G.link, null, u().d42899ad))), "\n\n", Y));
                        case "NonConsensualNudity":
                        case "PrivateInfo":
                            return a.createElement(a.Fragment, null, a.createElement(i.ZP, { role: "heading", size: "headline1", style: Q.headline, weight: "heavy" }, H), a.createElement(z.Z, { items: t }));
                        default:
                            return null;
                    }
                },
                Q = c.default.create((e) => ({ icon: { color: e.colors.primary, height: "1.5rem", marginEnd: e.spaces.space20, marginTop: e.spaces.space2 }, headline: { marginBottom: e.spaces.space8, marginTop: e.spaces.space20 }, selfHarmLabel: { whiteSpace: "pre-line" }, lawEnforcementRecommendation: { marginTop: e.spaces.space4 } })),
                ee = a.memo(J),
                te = u().b6dc1984,
                re = u().b0a16894,
                oe = [u().d4716820, u().e899a534, u().d9c4e7ae],
                ae = u().afb51066,
                ne = "gray700",
                le = () =>
                    a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(i.ZP, { "aria-level": 2, role: "header", size: "headline1", style: se.headline, weight: "heavy" }, te),
                        a.createElement(i.ZP, { color: ne, size: "body", weight: "normal" }, re),
                        a.createElement(
                            "ul",
                            null,
                            oe.map((e, t) => a.createElement("li", { key: t }, a.createElement(i.ZP, { color: ne, size: "body", weight: "normal" }, e))),
                        ),
                        a.createElement(i.ZP, { color: ne, size: "body", weight: "normal" }, ae),
                    ),
                se = c.default.create((e) => ({ headline: { marginBottom: e.spaces.space8, marginTop: e.spaces.space20 } })),
                ie = a.memo(le),
                ce = (e) =>
                    e.map((e) => {
                        const { header: t, inline_link: r, inline_link_text: o, message: a, progress: n, report_status_label: l, report_status_label_text: s } = e;
                        return { headerText: t || "", statusLabel: l && s ? { type: l, text: s } : void 0, eventStatus: n, eventExplanation: a ? a.replace(/\\n/g, "\n") : "", inlineLink: r, inlineLinkText: o };
                    }),
                de = (e) => new Date(parseInt(e, 10)).toISOString(),
                ue = u().fb35e52a,
                pe = u().h810143c,
                me = { context: "REPORT_DETAIL" },
                he = o.Z,
                be = () => {
                    const e = (0, l.useParams)(),
                        t = (0, D.p)(he, { reportId: e.reportId || "" }),
                        r = (0, R.z)(),
                        o = a.useRef(),
                        { setReportStatus: c } = a.useContext(O.wP),
                        d = t?.viewer_v2?.user_results?.result?.report_detail;
                    (0, m.q)(() => {
                        c(t?.viewer_v2?.user_results?.result?.report_detail?.report_status);
                    }),
                        (0, m.q)(() => {
                            r.scribe({ page: "safety_center", section: "report_detail", action: "impression", data: { report_details: { report_flow_id: d?.report_flow_id ? d.report_flow_id : void 0 } } });
                        }),
                        a.useEffect(() => {
                            o.current && o.current.focus();
                        }, [o, d]);
                    const u = a.useCallback(() => {
                        r.scribe({ page: "safety_center", section: "report_detail", element: "view_rule", action: "click", data: { report_details: { report_flow_id: d?.report_flow_id ? d.report_flow_id : void 0 } } });
                    }, [d?.report_flow_id, r]);
                    if (!d) return null;
                    const f = d.last_update_time,
                        y = d.header,
                        g = d.report_entities_results,
                        E = d.rule_link,
                        v = d.progress_steps,
                        _ = { type: d.report_status_label, text: d.report_status_label_text };
                    return a.createElement(
                        a.Fragment,
                        null,
                        _ ? ((e, t) => a.createElement(s.ZP, null, ({ windowWidth: r }) => (B.Z.isTwoColumnLayout(r) ? null : a.createElement(n.Z, { testID: "ReportStatusWithDate" }, a.createElement(b.Z, { datetime: de(t), statusLabel: e })))))(_, f) : null,
                        a.createElement(n.Z, { focusable: !0, ref: o, role: "heading" }, a.createElement(i.ZP, { size: "title4", style: fe.header, weight: "heavy" }, y)),
                        a.createElement(i.ZP, { link: E, onClick: u }, ue),
                        g ? a.createElement(n.Z, { style: fe.reportEntities }, a.createElement(h.Z, { carousel: !0, report: (0, p.Z)(g) })) : null,
                        a.createElement(L, { stepTimelineSteps: ce(v) }),
                        ((e) => {
                            switch (e.report_status) {
                                case "Open":
                                    return a.createElement(ie, null);
                                case "Reviewed":
                                    return a.createElement(ee, { actionedReportType: e?.actioned_report_type });
                                default:
                                    return null;
                            }
                        })(d),
                    );
                },
                fe = c.default.create((e) => ({ contentBody: { alignItems: "left", marginTop: e.spaces.space20, marginBottom: `calc(${e.spaces.space64} + ${c.default.iPhoneOffsetBottom})`, marginHorizontal: e.spaces.space16 }, header: { marginVertical: e.spaces.space8 }, reportEntities: { marginBottom: e.spaces.space16 } })),
                ye = (e) => a.createElement(N.Z, { screenType: "primaryDetail", title: pe }, a.createElement(n.Z, { style: fe.contentBody }, a.createElement(I.H, { errorConfig: me }, a.createElement(be, null))));
        },
        655152: (e, t, r) => {
            r.r(t), r.d(t, { default: () => fe });
            var o = r(202784),
                a = r(111677),
                n = r.n(a),
                l = r(744891),
                s = (r(585488), r(457311)),
                i = r(187669),
                c = r(736063),
                d = r(725516),
                u = r(127218),
                p = r(107267),
                m = r(786475),
                h = r(537392),
                b = r(965245),
                f = r(395085),
                y = r(277660),
                g = r.n(y),
                E = r(58881),
                v = r(392237),
                _ = r(530732),
                w = r(325686),
                Z = r(868634),
                C = r(731708),
                x = r(157130),
                T = r(443781),
                k = r(110548);
            const S = (e) => {
                    const t = e.split(""),
                        r = t[0],
                        a = ((e) => {
                            switch (e) {
                                case "1":
                                    return "Open";
                                case "2":
                                    return "Resolved";
                                default:
                                    return null;
                            }
                        })(r),
                        n = ((e) => {
                            switch (e) {
                                case "1":
                                    return "Tweet";
                                case "2":
                                    return "User";
                                case "3":
                                    return "Multi-Tweet";
                                default:
                                    return null;
                            }
                        })(t[1]),
                        l = ((e, t) => {
                            if ("1" === t) return null;
                            switch (e) {
                                case "0":
                                    return "Lock, G";
                                case "1":
                                    return "Suspension, G";
                                case "2":
                                    return "Suspension, S";
                                case "3":
                                    return "Lock, S";
                                default:
                                    return null;
                            }
                        })(t[2], r),
                        s = ((e) => {
                            switch (e) {
                                case "0":
                                    return "Abusive Behavior";
                                case "1":
                                    return "Hateful Conduct";
                                case "2":
                                    return "Glorification of Violence";
                                case "3":
                                    return "Self Harm";
                                case "4":
                                    return "Exposing Private Info";
                                case "5":
                                    return "Non-Consensual Nudity";
                                case "6":
                                    return "Violent Threats";
                                default:
                                    return null;
                            }
                        })(t[3]);
                    return () => o.createElement(w.Z, { style: L.popoverContainer }, s && o.createElement(Z.ZP, { background: "magenta500" }, o.createElement(C.ZP, null, s)), l && o.createElement(Z.ZP, { background: "purple500" }, o.createElement(C.ZP, null, l)), n && o.createElement(Z.ZP, { background: "green500" }, o.createElement(C.ZP, null, n)), a && o.createElement(Z.ZP, { background: "orange500" }, o.createElement(C.ZP, null, a)));
                },
                L = v.default.create((e) => ({ debugTag: { maxWidth: "fit-content", position: "absolute", end: e.spaces.space4, bottom: e.spaces.space4, backgroundColor: e.colors.purple500, padding: e.spaces.space2, borderRadius: e.spaces.space4, zIndex: k.ZP.layersZIndex }, popoverContainer: { height: "fit-content", flex: "row", gap: e.spaces.space4, margin: e.spaces.space32 } })),
                P = ({ reportId: e }) => {
                    const { featureSwitches: t } = o.useContext(T.rC);
                    return t.isTrue("sc_mock_data_enabled") ? o.createElement(w.Z, { style: L.debugTag }, o.createElement(x.Z, { enableHover: !0, renderContent: S(e) }, o.createElement(C.ZP, null, e))) : null;
                };
            var I = r(422649),
                B = r(815753),
                R = r(43138);
            const D = n().h542c98a,
                N = ({ payload: e, removeTweetContent: t }) => {
                    const { create_time: r, first_report_entity_results: a, message: n, report_status: l, report_status_label: s, report_status_label_text: i, update_time: c } = g()(I.Z, e),
                        d = o.useMemo(() => ({ type: s, text: i }), [s, i]),
                        u = ((e, t, r) => {
                            switch (r) {
                                case "Reviewed":
                                    return t;
                                case "Open":
                                    return e;
                                default:
                                    return;
                            }
                        })(r, c, l);
                    if (!(u && n && l && a)) return null;
                    const p = n.concat(" ");
                    return o.createElement(w.Z, { style: O.root }, o.createElement(R.Z, { datetime: u, statusLabel: d }), o.createElement(C.ZP, { style: O.messageStyles }, p, o.createElement(C.ZP, { color: "link", withInteractiveStyling: !0 }, D)), o.createElement(B.Z, { removeTweetContent: t, report_entity_results: a }));
                },
                O = v.default.create((e) => ({ root: { display: "flex", flexDirection: "column", width: "100%", height: "100%", justifyContent: "center" }, horizontalFlex: { display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }, dateStyles: { fontSize: e.fontSizes.body, fontWeight: e.fontWeights.medium, color: e.colors.gray600 }, messageStyles: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space16 } })),
                A = N,
                z = { focusedStyle: E.Z.generate({ backgroundColor: "transparent", color: v.default.theme.colors.primary }).focusedStyle },
                W = v.default.create((e) => ({ root: { padding: e.spaces.space24, borderEndColor: e.colors.transparent, borderEndWidth: e.spaces.space2, borderBottomWidth: e.spaces.space1, borderBottomColor: e.colors.gray50, cursor: "pointer" }, activeStyles: { borderEndColor: e.colors.blue500, borderEndWidth: e.spaces.space2 }, removeBottomBorder: { borderBottomColor: e.colors.transparent } })),
                F = ({ activeReportId: e, checkActive: t = !0, lastItem: r, payload: a }) => {
                    const n = g()(f.Z, a),
                        l = (0, d.z)(),
                        s = ((e, t, r) => !(!r || !t) && e === t)(e, n.id, !0),
                        i = o.useCallback(() => {
                            l.scribe({ page: "safety_center", component: "report_item", action: "click", data: { report_details: { report_flow_id: n.report_flow_id ? n.report_flow_id : void 0 } } });
                        }, [n.report_flow_id, l]),
                        c = o.useMemo(() => ({ pathname: `/i/safety_center/reports/${n.id}`, anchorless: !0, state: { lockScroll: !0 } }), [n.id]),
                        u = o.useMemo(() => [W.root, s && W.activeStyles, r && W.removeBottomBorder], [s, r]);
                    return n.id ? o.createElement(_.Z, { "aria-selected": s, interactiveStyles: z, link: c, onPress: i, role: "tab", style: u, testID: "DesktopReportItem" }, o.createElement(P, { reportId: n.id }), o.createElement(N, { payload: n, removeTweetContent: !0 })) : null;
                };
            var M = r(626610);
            const H = { focusedStyle: E.Z.generate({ backgroundColor: "transparent", color: v.default.theme.colors.primary }).focusedStyle },
                V = ({ payload: e }) => {
                    const t = g()(M.Z, e),
                        r = (0, d.z)(),
                        a = o.useCallback(
                            (e) => {
                                r.scribe({ page: "safety_center", component: "report_item", action: "click", data: { report_details: { report_flow_id: t.report_flow_id ? t.report_flow_id : void 0 } } });
                            },
                            [t.report_flow_id, r],
                        ),
                        n = o.useMemo(() => ({ pathname: `/i/safety_center/reports/${t.id}`, anchorless: !0, state: { lockScroll: !0 } }), [t.id]),
                        l = o.useMemo(() => [q.root, v.default.isDarkMode() ? q.darkModeBorder : q.lightModeShadow], []);
                    return t.id ? o.createElement(_.Z, { interactiveStyles: H, link: n, onPress: a, style: l, testID: "MobileReportItem" }, o.createElement(P, { reportId: t.id }), o.createElement(A, { payload: t })) : null;
                },
                q = v.default.create((e) => ({ root: { margin: e.spaces.space16, padding: e.spaces.space16, borderRadius: e.borderRadii.large }, darkModeBorder: { backgroundColor: e.colors.elevatedBackground, borderColor: e.colors.borderColor, borderWidth: e.spaces.space1 }, lightModeShadow: { boxShadow: e.boxShadows.small } })),
                j = o.memo(V),
                $ = (e) => e.id,
                G = (e, t) => (m.Z.isNarrowScreenWidth(e) ? (e) => o.createElement(j, { payload: e }) : (e) => o.createElement(F, { activeReportId: t, payload: e })),
                K = (e) => {
                    if (!m.Z.isNarrowScreenWidth(e)) return "tablist";
                },
                U = ({ cacheKey: e, handleFetchNext: t, hasNext: r, items: a, renderEmptyState: n }) => {
                    const { pathname: l } = (0, p.useLocation)(),
                        s = o.useMemo(() => {
                            const e = (0, p.matchPath)(l, { path: "/i/safety_center/reports/:reportId" });
                            return e?.params.reportId;
                        }, [l]);
                    return a ? (0 !== a.length ? o.createElement(h.ZP, null, ({ screenWidth: r }) => o.createElement(b.Z, { cacheKey: e, identityFunction: $, items: a, noItemsRenderer: n, onNearEnd: t, renderer: G(r, s), role: K(r), withoutHeadroom: !0 })) : r ? (t(), null) : o.createElement(o.Fragment, null, n())) : null;
                },
                X = l.Z,
                Y = n().i07c24fa,
                J = { context: "SafetyCenterOpenReportItemTimeline" },
                Q = () => o.createElement(s.Z, { header: Y }),
                ee = () => {
                    const { data: e, fetchNext: t, hasNext: r } = (0, u.C)(X, {}),
                        a = (0, d.z)();
                    (0, i.q)(() => {
                        a.scribe({ page: "safety_center", section: "open_reports_timeline", action: "impression" });
                    });
                    const n = e.viewer_v2?.user_results?.result;
                    if ("User" !== n?.__typename) return null;
                    const l = n?.open_reports?.items;
                    return o.createElement(U, { cacheKey: "SlicesRelay_OpenReportItemTimeline_SafetyCenter", handleFetchNext: t, hasNext: r, items: l, renderEmptyState: Q });
                };
            function te() {
                return o.createElement(c.H, { errorConfig: J }, o.createElement(ee, null));
            }
            const re = r(174349).Z,
                oe = n().e6e11d12,
                ae = { context: "SafetyCenterResolvedReportItemTimeline" },
                ne = () => o.createElement(s.Z, { header: oe }),
                le = () => {
                    const { data: e, fetchNext: t, hasNext: r } = (0, u.C)(re, {}),
                        a = (0, d.z)();
                    (0, i.q)(() => {
                        a.scribe({ page: "safety_center", section: "resolved_reports_timeline", action: "impression" });
                    });
                    const n = e.viewer_v2?.user_results?.result;
                    if ("User" !== n?.__typename) return null;
                    const l = n?.reviewed_reports?.items;
                    return o.createElement(U, { cacheKey: "SlicesRelay_ResolvedReportItemTimeline_SafetyCenter", handleFetchNext: t, hasNext: r, items: l, renderEmptyState: ne });
                };
            function se() {
                return o.createElement(c.H, { errorConfig: ae }, o.createElement(le, null));
            }
            var ie = r(507651),
                ce = r(206859),
                de = r(10012);
            const ue = n().fd00a76a,
                pe = n().c197728e,
                me = n().f4422d78,
                he = "/i/safety_center/reports/open",
                be = "/i/safety_center/reports/resolved",
                fe = (e) => {
                    const t = e.history.location.pathname,
                        { reportStatus: r, setReportStatus: a } = o.useContext(de.wP),
                        n = ((e, t) => (e.includes(be) || "Reviewed" === t ? "Resolved" : e.includes(he) || "Open" === t ? "Open" : void 0))(t, r),
                        [l, s] = o.useState(void 0);
                    o.useEffect(() => {
                        s(n);
                    }, [n]);
                    const i = o.useMemo(
                            () => [
                                {
                                    to: he,
                                    key: "reportsOpen",
                                    label: ue,
                                    retainScrollPosition: !1,
                                    isActive: () => "Open" === l,
                                    onClick: () => {
                                        s("Open"), a("Open");
                                    },
                                },
                                {
                                    to: be,
                                    key: "reportsResolved",
                                    label: pe,
                                    retainScrollPosition: !1,
                                    isActive: () => "Resolved" === l,
                                    onClick: () => {
                                        s("Resolved"), a("Reviewed");
                                    },
                                },
                            ],
                            [l, a],
                        ),
                        c = o.useMemo(() => o.createElement(ie.Z, { "aria-label": me, links: i }), [i]);
                    return o.createElement(ce.Z, { screenType: "root", secondaryBar: c, title: me }, "Resolved" === l ? o.createElement(se, null) : o.createElement(te, null));
                };
        },
        206859: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(202784),
                a = r(108362),
                n = r(392237),
                l = r(496364),
                s = r(655352);
            const i = n.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" } })),
                c = ({ children: e, screenType: t, secondaryBar: r, title: n }) => {
                    const c = (0, s.ZP)();
                    return o.createElement(l.Z, { backLocation: "/", screenType: t, secondaryBar: !c && r, title: n }, c && r, o.createElement(a.Z, { style: i.contentRoot }, e));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SafetyCenter-e019dbda.7fbc790a.js.map
