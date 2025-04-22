"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountVerification-6107ac1a"],
    {
        980407: (e, t, r) => {
            r.d(t, { Z: () => b, w: () => m });
            var o = r(202784),
                a = r(325686),
                n = r(108362),
                i = r(386802),
                l = r(392237),
                s = r(652904),
                c = r(555079),
                d = r(625661),
                h = r(449067),
                p = r(715601);
            class m extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: r, backLocation: n, centerTitle: i, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: m, onBackClick: b, rightControl: y, secondaryBar: g, subtitle: Z, title: C } = this.props,
                                { isModal: E } = this.context;
                            return o.createElement(a.Z, { style: E ? [u.childViewAppBarRoot, u.appBarZindex] : u.appBarZindex }, o.createElement(d.ZP, { backButtonType: r || (E ? "close" : "back"), backLocation: n, centerTitle: i, fixed: !E, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: m, onBackClick: b, ref: e, rightControl: y, secondaryBar: g, style: [E && u.appBarModal, t], subtitle: Z, title: C, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: r } = this.context;
                            t && (r ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: r, containerStyle: i, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: m, title: b, withoutBottomBarMobile: y } = this.props,
                        { isModal: g } = this.context,
                        Z = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(s.Z, null, o.createElement(h.Z.Configure, { documentTitle: l, headerless: !0, title: b }), o.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [u.root, g && u.rootModal] }, !g && Z, o.createElement(n.Z, { isFullWidth: c, isLarge: d, style: [u.container, g && u.containerModal, i] }, g ? o.createElement(p.Z, { style: u.viewport }, Z, r) : r), t ? o.createElement(a.Z, { style: [u.bottomBarModal, !g && !y && u.bottomBarMobile] }, o.createElement(n.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = i.Z);
            const u = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = m;
        },
        537668: (e, t, r) => {
            r.d(t, { Dh: () => g, ZP: () => Z });
            r(571372);
            var o = r(202784),
                a = r(946847),
                n = r(674132),
                i = r.n(n),
                l = r(516951),
                s = r(323265),
                c = r(316325);
            const d = i().d4f88600,
                h = i().b192ccae,
                p = i().a0487504,
                m = i().fff7d93c,
                u = i().g969bfae,
                b = i().gb2f35e4,
                y = s.ZP.isTwitterApp() ? { external: !0, pathname: "twitter://settings/account", openInSameFrame: !0 } : { pathname: "/settings/account", openInSameFrame: !0 },
                g = s.ZP.isTwitterApp() ? { external: !0, pathname: "twitter://profiles/edit", openInSameFrame: !0 } : { external: !0, pathname: "/settings/profile", openInSameFrame: !0 },
                Z = ({ accountViolations: e }) => {
                    const t = [c.fX.PROFILE_COMPLETION, c.fX.ACCOUNT_SECURITY],
                        r = { [c.fX.PROFILE_COMPLETION]: { actionLink: g, buttonText: m, description: b, title: u }, [c.fX.ACCOUNT_SECURITY]: { actionLink: y, buttonText: d, description: p, title: h } },
                        n = t.find((t) => e.violations?.some((e) => e.violation_category === t && e.violation_status === c.Tq.OUT_OF_COMPLIANCE));
                    if (void 0 === n) throw new Error("cannot render Account violations without valid violations");
                    const { actionLink: i, buttonText: s, description: Z, title: C } = r[n];
                    return o.createElement(a.Z, { actionLabel: s, actionLink: i, graphicDisplayMode: "none", headline: C, onAction: l.Z, onClose: l.Z, subtext: Z, withCloseButton: !1 });
                };
        },
        853137: (e, t, r) => {
            r.d(t, { ZP: () => k });
            var o = r(202784),
                a = r(325686),
                n = r(731708),
                i = r(946847),
                l = r(154003),
                s = r(674132),
                c = r.n(s),
                d = r(817480),
                h = r(161821),
                p = r(516951),
                m = r(555079),
                u = r(695829);
            const b = c().j24c37b2,
                y = c().c1df579e,
                g = c().bbef41c2,
                Z = c().be03ecca,
                C = c().a411926a,
                E = c().c69a40de,
                f = c().c83a1662,
                _ = { "10minutemail": [""], aol: ["aol.com"], gmail: ["googlemail.com", "gmail.com"], gmx: ["gmx.com"], icloud: ["icloud.com", "me.com", "mac.com"], "mail.com": ["mail.com"], outlook: ["outlook.com"], protonmail: ["protonmail.com", "pm.me"], sendinblue: ["sendinblue.com"], tutanota: ["tutanota.com"], yahoo: ["yahoo.com"], yandex: ["yandex.com"], zoho: ["zoho.com"] },
                k = (e) => {
                    const { accountSettingsLink: t, email: r, handleOnClickInvalid: s, handleOnClickValid: k, isNarrow: I } = e,
                        v = 0 === r.length;
                    if (
                        v ||
                        ((e) => {
                            const [, t] = e.split("@"),
                                r = `${(0, d.Z)((0, h.Z)(_))
                                    .filter((e) => e)
                                    .map((e) => e.replace(".", "\\."))
                                    .join("|")}`;
                            return new RegExp(r, "i").test(t);
                        })(r)
                    ) {
                        const e = v ? E : f,
                            r = v ? ((e) => o.createElement(c().I18NFormatMessage, { $i18n: "jf9308af" }, o.createElement(n.ZP, { link: e }, c().e1e878ee)))(t) : ((e) => o.createElement(c().I18NFormatMessage, { $i18n: "e9976a41" }, o.createElement(n.ZP, { link: e }, c().b9635182)))(t);
                        return o.createElement(i.Z, { actionLabel: b, graphicDisplayMode: "none", headline: e, onAction: s, onClose: p.Z, subtext: r, withCloseButton: !1 });
                    }
                    return o.createElement(a.Z, { style: [u.Z.container, I && u.Z.narrowContainer] }, o.createElement(n.ZP, { "aria-level": 1, id: m.Q_, role: "heading", size: "title4", style: u.Z.header, weight: "heavy" }, C), o.createElement(a.Z, { style: u.Z.scrollableContainer }, o.createElement(n.ZP, { color: "gray700" }, g), ((w = Z), o.createElement(n.ZP, { size: "subtext2", style: u.Z.subheading, weight: "heavy" }, w)), ((x = r), o.createElement(n.ZP, { style: u.Z.subtext }, x))), o.createElement(l.ZP, { onClick: k, style: u.Z.buttonFixed, type: "brandFilled" }, y));
                    var x, w;
                };
        },
        878432: (e, t, r) => {
            r.d(t, { Z: () => g });
            var o = r(202784),
                a = r(325686),
                n = r(688715),
                i = r(731708),
                l = r(154003),
                s = r(674132),
                c = r.n(s),
                d = r(555079),
                h = r(695829),
                p = r(179596);
            const m = c().j163be32,
                u = c().gaf821c8,
                b = (0, n.ju)("https://help.x.com/managing-your-account/twitter-verified-accounts"),
                y = o.createElement(c().I18NFormatMessage, { $i18n: "e5b4cc43" }, o.createElement(i.ZP, { link: b }, c().e1ac0f9b)),
                g = ({ handleOnClick: e, isNarrow: t }) => o.createElement(a.Z, { style: h.Z.largeBannerContainer }, o.createElement(p.Z, { isNarrow: t, type: p.l.START }), o.createElement(a.Z, { style: [h.Z.container, h.Z.verticalCenter, t && h.Z.narrowContainer] }, o.createElement(i.ZP, { "aria-level": 1, id: d.Q_, role: "heading", size: "title4", style: h.Z.header, weight: "heavy" }, u), o.createElement(i.ZP, { color: "gray700" }, y), o.createElement(l.ZP, { onClick: e, style: h.Z.buttonPadded, type: "brandFilled" }, m)));
        },
        748869: (e, t, r) => {
            r.d(t, { ZP: () => f });
            var o = r(202784),
                a = r(325686),
                n = r(731708),
                i = r(674132),
                l = r.n(i),
                s = r(555079),
                c = r(801501),
                d = r(316325),
                h = r(326437),
                p = r(695829),
                m = r(179596),
                u = r(71620),
                b = r(668214),
                y = r(946194);
            const g = (0, b.Z)()
                    .propsFromState(() => ({ errors: y.EK, status: y.rX }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("ACCOUNT_VERIFICATION_INTAKE_LOADING"), fetchAuthenticationResult: y.kb, resetAuthenticationResult: y.DA, resetDocumentIdProcess: y.QH, setNextFlow: y.JA, setPreviousFlow: y.Jj }))
                    .withAnalytics(),
                Z = l().h2d4ba56,
                C = l().i2051842;
            class E extends o.Component {
                constructor(e) {
                    super(e),
                        (this._handleErrorButtonClick = () => {
                            this.props.resetDocumentIdProcess(), this.props.setPreviousFlow();
                        }),
                        (this._isPollingDone = (e) => e === d.WS.NOT_STARTED || e === d.WS.CONCLUSIVE || e === d.WS.INCONCLUSIVE),
                        (this.state = { retryCount: 0 });
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchAuthenticationResult: t } = this.props;
                    t().catch(e()),
                        (this._pollingTimer = new c.Z(5e3).interval(() => {
                            t().catch(() => {
                                this.setState((e) => ({ retryCount: e.retryCount + 1 })), e();
                            });
                        })),
                        this._pollingTimer.start();
                }
                componentDidUpdate(e, t) {
                    const { errors: r, setNextFlow: o, status: a } = this.props,
                        { retryCount: n } = this.state;
                    ((a !== e.status && this._isPollingDone(a)) || (r.length !== e.errors.length && r.length) || (n !== t.retryCount && 5 === n)) && this._stopTimer(), a === e.status || a !== d.WS.CONCLUSIVE || r.length || (this._handleScribe("success"), o());
                }
                componentWillUnmount() {
                    this._stopTimer();
                }
                _handleScribe(e) {
                    const { analytics: t } = this.props;
                    t.scribe({ ...t.contextualScribeNamespace, element: "process", action: e, data: t.contextualScribeData });
                }
                _isErrorState() {
                    const { errors: e, status: t } = this.props;
                    return e.length || t === d.WS.INCONCLUSIVE || t === d.WS.NOT_STARTED || 5 === this.state.retryCount;
                }
                _stopTimer() {
                    this._pollingTimer && this._pollingTimer.stop();
                }
                _renderError() {
                    return this._handleScribe("failure"), o.createElement(h.Z, { onButtonClick: this._handleErrorButtonClick });
                }
                _renderLoading() {
                    return o.createElement(a.Z, { style: p.Z.largeBannerContainer }, o.createElement(m.Z, { isNarrow: this.props.isNarrow, type: m.l.LOADING }), o.createElement(a.Z, { style: [p.Z.container, p.Z.verticalCenter, this.props.isNarrow && p.Z.narrowContainer] }, o.createElement(n.ZP, { "aria-level": 1, id: s.Q_, role: "heading", size: "title4", style: p.Z.header, weight: "heavy" }, Z), o.createElement(n.ZP, { color: "gray700" }, C)));
                }
                render() {
                    return this._isErrorState() ? this._renderError() : this._renderLoading();
                }
            }
            const f = g(E);
        },
        71448: (e, t, r) => {
            r.d(t, { Z: () => b });
            var o = r(202784),
                a = r(325686),
                n = r(731708),
                i = r(371344),
                l = r(952428),
                s = r(674132),
                c = r.n(s),
                d = r(178519),
                h = r(197110),
                p = r(555079),
                m = r(695829);
            const u = c().h9270b1c,
                b = ({ documentFormats: e, isNarrow: t, onCountryClick: r }) => {
                    const [s, c] = o.useState(new RegExp("", "i")),
                        b = o.useMemo(() => (e ? Object.keys(e).sort((t, r) => e[t].country.localeCompare(e[r].country)) : []), [e]);
                    return o.createElement(
                        a.Z,
                        { "aria-labelledby": p.Q_, role: "group", style: [m.Z.container, t && m.Z.narrowContainer] },
                        o.createElement(
                            a.Z,
                            { style: m.Z.fixedContainer },
                            o.createElement(n.ZP, { "aria-level": 1, id: p.Q_, role: "heading", size: "title4", style: m.Z.header, weight: "heavy" }, h.qp),
                            o.createElement(
                                a.Z,
                                { style: [m.Z.contentContainer, m.Z.topPaddingSmall] },
                                o.createElement(i.Z, {
                                    Icon: d.default,
                                    onChange: (e) =>
                                        c(
                                            new RegExp(
                                                e.target.value.replace(/\W/g, (e) => `\\${e}`),
                                                "i",
                                            ),
                                        ),
                                    placeholder: u,
                                }),
                            ),
                        ),
                        o.createElement(
                            a.Z,
                            { style: m.Z.scrollableContainer },
                            b.map((t) => (e && e[t].country.match(s) ? o.createElement(l.Z, { key: t, onClick: () => r(t, e[t].country), style: [m.Z.listItem, m.Z.bottomBorder], withInteractiveStyling: !0 }, o.createElement(n.ZP, null, e[t].country)) : null)),
                        ),
                    );
                };
        },
        240550: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(202784),
                a = r(325686),
                n = r(731708),
                i = r(952428),
                l = r(161821),
                s = r(197110),
                c = r(555079),
                d = r(695829);
            const h = ({ documentFormats: e, idCountry: t, isNarrow: r, onTypeClick: h }) => {
                const p = o.useMemo(() => (e && t ? (0, l.Z)(e[t].id_types).sort((e, t) => e.name.localeCompare(t.name)) : []), [e, t]);
                return o.createElement(
                    a.Z,
                    { "aria-labelledby": c.Q_, role: "group", style: [d.Z.container, r && d.Z.narrowContainer] },
                    o.createElement(a.Z, { style: d.Z.fixedContainer }, o.createElement(n.ZP, { "aria-level": 1, id: c.Q_, role: "heading", size: "title4", style: d.Z.header, weight: "heavy" }, s.xn)),
                    o.createElement(
                        a.Z,
                        { style: [d.Z.contentContainer, d.Z.scrollableContainer, d.Z.topPaddingSmall] },
                        p.map(({ id_type: e, name: t }) => o.createElement(i.Z, { key: e, onClick: () => h(e, t), style: [d.Z.listItem, d.Z.bottomBorder], withInteractiveStyling: !0 }, o.createElement(n.ZP, null, t))),
                    ),
                );
            };
        },
        197110: (e, t, r) => {
            r.d(t, { qp: () => b, ZP: () => _, xn: () => g });
            var o = r(202784),
                a = r(154003),
                n = r(674132),
                i = r.n(n),
                l = r(316325),
                s = r(133931),
                c = r(695829),
                d = r(668214),
                h = r(946194);
            const p = (0, d.Z)()
                    .propsFromState(() => ({ documentFormats: h.kg, idCountry: h.Xu, idType: h._g }))
                    .propsFromActions(() => ({ setNextFlow: h.JA }))
                    .withAnalytics(),
                m = i().e43425fa,
                u = i().e43672a0,
                b = i().b246aa5e,
                y = i().d6fb5878,
                g = i().b72f97cc,
                Z = i().b2ab6008,
                C = i().c1df579e,
                E = (e, t) => (e && t ? e[t].country : y),
                f = (e, t, r) => (e && t && r ? e[t].id_types[r].name : Z),
                _ = p((e) => {
                    const { documentFormats: t, idCountry: r, idType: n, isNarrow: i, setNextFlow: d } = e;
                    return o.createElement(s.Z, {
                        button: o.createElement(a.ZP, { disabled: !(r && n), onClick: () => d(), style: c.Z.buttonFixed, type: "brandFilled" }, C),
                        description: u,
                        isNarrow: i,
                        items: [
                            { description: E(t, r), label: b, nextStep: l.pl.ID_COUNTRY_SELECT },
                            { description: f(t, r, n), disabled: !r, label: g, nextStep: l.pl.ID_TYPE_SELECT },
                        ],
                        title: m,
                    });
                });
        },
        326437: (e, t, r) => {
            r.d(t, { Z: () => b });
            var o = r(202784),
                a = r(946847),
                n = r(674132),
                i = r.n(n),
                l = r(516951),
                s = r(88656),
                c = r(837090);
            const d = i().fc2a5c92,
                h = i().jf4b6f70,
                p = c.vu,
                m = c.nb,
                u = i().d338f53e,
                b = ({ error: e, onButtonClick: t }) => {
                    const r = e instanceof s.Z ? e.status : void 0;
                    let n = u,
                        i = d,
                        b = h;
                    return 429 === r && ((n = c.k6), (i = p), (b = m)), o.createElement(a.Z, { actionLabel: n, graphicDisplayMode: "none", headline: i, onAction: t, onClose: l.Z, subtext: b, withCloseButton: !1 });
                };
        },
        778434: (e, t, r) => {
            r.d(t, { Z: () => G });
            var o = r(202784),
                a = r(325686),
                n = r(731708),
                i = r(96083),
                l = r(154003),
                s = r(392237),
                c = r(674132),
                d = r.n(c),
                h = r(555079),
                p = r(716233),
                m = r(312771),
                u = r(837090),
                b = r(695829),
                y = r(71620),
                g = r(668214),
                Z = r(946194),
                C = r(497294);
            const E = (e) => {
                    const t = (0, Z.$G)(e);
                    return t ? (0, C.m3)(e, t)[0] : void 0;
                },
                f = (e) => {
                    const t = (0, Z.B_)(e);
                    return t ? (0, C.m3)(e, t)[0] : void 0;
                },
                _ = (0, g.Z)()
                    .propsFromState(() => ({ backID: Z.$G, backImage: E, documentFormats: Z.kg, frontID: Z.B_, frontImage: f, idCountry: Z.Xu, idType: Z._g, isConfirmed: Z.aN, uploadEntityId: Z.QO, uploadErrors: Z.rT, uploadFetchStatus: Z._z, uploadRequestError: Z.Od }))
                    .propsFromActions(() => ({ addMedia: C.rA, createLocalApiErrorHandler: (0, y.zr)("ACCOUNT_VERIFICATION_INTAKE_UPLOAD"), processMultipleMedia: C.G$, removeMedia: C.TU, resetAuthenticationResult: Z.DA, resetDocumentIdProcess: Z.QH, resetIntakeUpload: Z.S5, setBackID: Z.Tc, setFrontID: Z.$q, setNextFlow: Z.JA, toggleCheckboxConfirmation: Z.yw, verifyIdDocument: Z.O2 }))
                    .withAnalytics();
            var k = r(15038),
                I = r(293615),
                v = r(373554),
                x = r(304059),
                w = r(751170);
            const P = ["application/pdf", "image/bmp", "image/jpeg", "image/png", "image/tiff"];
            class F extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleDragDrop = (e) => {
                            const { onChange: t } = this.props,
                                r = e.find((e) => P.includes(e.type));
                            r && t([r]);
                        }),
                        (this._renderDragDropTarget = () => {
                            const { "aria-label": e, onChange: t } = this.props;
                            return o.createElement(v.Z, { acceptGifs: !1, acceptImages: !1, acceptVideo: !1, "aria-label": e, customMimeTypes: P, icon: o.createElement(I.default, { style: D.mediaPickerIcon }), onChange: t, size: "small", style: D.mediaPicker, withIcon: !0 });
                        }),
                        (this._getResizeIfNeeded = (e) => {
                            const t = e.externalMediaDetails && e.externalMediaDetails.height / e.externalMediaDetails.width;
                            return t && t > 1 ? "width" : "height";
                        }),
                        (this._renderPreview = (e) => {
                            const { onRemove: t } = this.props;
                            return o.createElement(x.Z, { borderRadius: w.A.MEDIUM, mediaItem: e, onRemove: t, resizeIfNeeded: this._getResizeIfNeeded(e), style: D.mediaPreview, withCloseButton: !0 });
                        });
                }
                render() {
                    const { mediaItem: e, title: t } = this.props,
                        r = e ? this._renderPreview(e) : this._renderDragDropTarget();
                    return o.createElement(a.Z, { style: D.dragDropContainer }, o.createElement(n.ZP, { weight: "bold" }, t), o.createElement(k.ZP, { onFilesAdded: this._handleDragDrop, style: D.dragDropComponent }, r));
                }
            }
            const D = s.default.create((e) => ({ dragDropContainer: { flex: 1, marginTop: e.spaces.space16, maxWidth: "50%", minWidth: `calc(${e.spaces.space80} + ${e.spaces.space48})` }, dragDropComponent: { borderColor: e.colors.borderColor, borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: e.borderWidths.small, boxSizing: "border-box", flexGrow: 0, height: 135, marginVertical: e.spaces.space8, overflow: "hidden" }, mediaPicker: { borderStyle: "none", borderRadius: "none", flex: "auto" }, mediaPickerIcon: { color: e.colors.primary }, mediaPreview: { justifyContent: "center", flex: 1 } })),
                T = F;
            var S = r(326437);
            const B = "verification-checkbox-label",
                R = d().ff1d68f8,
                A = o.createElement(d().I18NFormatMessage, { $i18n: "bfb355fb" }, o.createElement(n.ZP, { link: u.LT }, d().d20f76cb)),
                N = d().bdada5a6,
                M = d().edfed0f6,
                L = d().def5015d({ back_of_document: "" }),
                O = d().b09aade6,
                W = d().b40ed190,
                z = d().c6650b56,
                U = d().d171ed16,
                $ = o.createElement(d().I18NFormatMessage, { $i18n: "d65a41c3" }, o.createElement(n.ZP, { link: u.vW }, d().b8deb156)),
                V = d().c1df579e;
            class j extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSubmit = () => {
                            const { createLocalApiErrorHandler: e, handleOnClick: t = () => {}, verifyIdDocument: r } = this.props;
                            r().catch(e()), t();
                        }),
                        (this._handleAddBackMedia = (e) => {
                            const { addMedia: t, processMultipleMedia: r, setBackID: o } = this.props;
                            t(e, { location: p.vC.Verification }).then((e) => {
                                e.map((e) => {
                                    const t = e.id;
                                    o(t);
                                }),
                                    r(e, { onFailure: this._handleRemoveBackID });
                            });
                        }),
                        (this._handleRemoveBackID = () => {
                            const { backID: e, removeMedia: t, setBackID: r } = this.props;
                            e && (t(e), r(void 0));
                        }),
                        (this._handleAddFrontMedia = (e) => {
                            const { addMedia: t, processMultipleMedia: r, setFrontID: o } = this.props;
                            t(e, { location: p.vC.Verification }).then((e) => {
                                e.map((e) => {
                                    const t = e.id;
                                    o(t);
                                }),
                                    r(e, { onFailure: this._handleRemoveFrontID });
                            });
                        }),
                        (this._handleRemoveFrontID = () => {
                            const { frontID: e, removeMedia: t, setFrontID: r } = this.props;
                            e && (t(e), r(void 0));
                        }),
                        (this._handleCheckboxChange = () => {
                            this.props.toggleCheckboxConfirmation();
                        }),
                        (this._handleErrorButtonClick = () => {
                            this._resetForm(), this.props.resetDocumentIdProcess();
                        }),
                        (this._isErrorState = () => {
                            const { uploadErrors: e, uploadFetchStatus: t } = this.props;
                            return t === m.ZP.FAILED || !!e.length;
                        }),
                        (this._isUploading = () => {
                            const { uploadFetchStatus: e } = this.props;
                            return e === m.ZP.LOADING;
                        }),
                        (this._renderCheckbox = () => {
                            const { isConfirmed: e } = this.props;
                            return o.createElement(a.Z, { style: [b.Z.contentContainer, b.Z.checkboxContainer] }, o.createElement(a.Z, { style: b.Z.checkbox }, o.createElement(i.Z, { "aria-labelledby": B, checked: e, onChange: this._handleCheckboxChange })), o.createElement(a.Z, { id: B, style: b.Z.checkboxText }, o.createElement(n.ZP, { color: "gray700" }, U), o.createElement(n.ZP, { color: "gray700", style: b.Z.text }, $)));
                        }),
                        (this._needsBackside = () => {
                            const { documentFormats: e, idCountry: t, idType: r } = this.props;
                            return e && t && r && e[t].id_types[r].needs_backside;
                        }),
                        (this._renderUploadTargets = () => {
                            const { backImage: e, frontImage: t } = this.props,
                                r = this._needsBackside(),
                                n = r ? M : z,
                                i = r ? N : W;
                            return o.createElement(a.Z, { "aria-labelledby": h.Q_, role: "group", style: Q.gridContainer }, o.createElement(T, { "aria-label": n, mediaItem: t, onChange: this._handleAddFrontMedia, onRemove: this._handleRemoveFrontID, title: i }), r && o.createElement(T, { "aria-label": O, mediaItem: e, onChange: this._handleAddBackMedia, onRemove: this._handleRemoveBackID, title: L }));
                        });
                }
                componentDidMount() {
                    this.props.resetAuthenticationResult(), this.props.resetDocumentIdProcess();
                }
                componentDidUpdate(e) {
                    const { uploadEntityId: t } = this.props;
                    t !== e.uploadEntityId && t && !this._isErrorState() && (this._handleScribe("success"), this._resetForm(), this.props.setNextFlow());
                }
                componentWillUnmount() {
                    this._resetForm();
                }
                _resetForm() {
                    this._handleRemoveBackID(), this._handleRemoveFrontID(), this.props.resetIntakeUpload();
                }
                _handleScribe(e) {
                    const { analytics: t } = this.props;
                    t.scribe({ ...t.contextualScribeNamespace, element: "upload", action: e, data: t.contextualScribeData });
                }
                _renderError() {
                    const { uploadRequestError: e } = this.props;
                    return this._handleScribe("failure"), o.createElement(S.Z, { error: e, onButtonClick: this._handleErrorButtonClick });
                }
                _render() {
                    const { backID: e, frontID: t, isConfirmed: r, isNarrow: i } = this.props,
                        s = (this._needsBackside() && !e) || !t || !r || this._isUploading();
                    return o.createElement(a.Z, { style: [b.Z.container, i && b.Z.narrowContainer] }, o.createElement(n.ZP, { "aria-level": 1, id: h.Q_, role: "heading", size: "title4", style: b.Z.header, weight: "heavy" }, R), o.createElement(a.Z, { style: b.Z.scrollableContainer }, o.createElement(n.ZP, { color: "gray700" }, A), this._renderUploadTargets(), this._renderCheckbox()), o.createElement(l.ZP, { disabled: s, onPress: this._handleSubmit, style: b.Z.buttonFixed, type: "brandFilled" }, V));
                }
                render() {
                    return this._isErrorState() ? this._renderError() : this._render();
                }
            }
            const Q = s.default.create((e) => ({ gridContainer: { flexDirection: "row", flexWrap: "wrap", gap: e.spaces.space16 } })),
                G = _(j);
        },
        594610: (e, t, r) => {
            r.d(t, { FW: () => v, ZP: () => x });
            var o = r(202784),
                a = r(325686),
                n = r(731708),
                i = r(154003),
                l = r(674132),
                s = r.n(l),
                c = r(744531),
                d = r(555079),
                h = r(316325),
                p = r(837090),
                m = r(695829),
                u = r(668214),
                b = r(946194);
            const y = (0, u.Z)()
                    .propsFromState(() => ({ authenticityType: b.XV, authenticityData: b.zH, idCountryName: b.Wv, idTypeName: b.P6, notabilityCategory: b.Ep, notabilitySubcategory: b.Bf, notabilityData: b.Sh }))
                    .propsFromActions(() => ({ verifyAccount: b.s8 })),
                g = s().a91bb144,
                Z = s().affce770,
                C = s().i0864918,
                E = s().c7942074,
                f = s().b8121daa,
                _ = s().d247ca70,
                k = s().b51afbb2,
                I = s().cc87b01c,
                v = (e) => {
                    const { authenticityType: t, createLocalApiErrorHandler: r, handleOnClick: l, isNarrow: u, notabilityCategory: b, notabilityData: y, notabilitySubcategory: v, verifyAccount: x } = e,
                        w = (e) => o.createElement(n.ZP, { size: "subtext2", style: m.Z.subheading, weight: "heavy" }, e);
                    return o.createElement(
                        a.Z,
                        { style: [m.Z.container, u && m.Z.narrowContainer] },
                        o.createElement(n.ZP, { "aria-level": 1, id: d.Q_, role: "heading", size: "title4", style: m.Z.header, weight: "heavy" }, I),
                        o.createElement(
                            a.Z,
                            { style: m.Z.scrollableContainer },
                            o.createElement(n.ZP, { color: "gray700" }, _),
                            w(C),
                            b && o.createElement(n.ZP, { style: m.Z.subtext }, p.aR[b]),
                            v && ((P = p._v[v]), o.createElement(a.Z, null, w(E), o.createElement(n.ZP, { style: m.Z.subtext }, P))),
                            y &&
                                ((e) => {
                                    const t = (0, c.Z)(e, "newsType"),
                                        r = Object.values(t).flat();
                                    return o.createElement(
                                        a.Z,
                                        null,
                                        w(f),
                                        r.map((e, t) => o.createElement(n.ZP, { key: t, style: m.Z.subtext }, e)),
                                    );
                                })(y),
                            w(k),
                            t &&
                                ((e) => {
                                    const t = { [h.L_.IDENTITY_DOCUMENT]: s().e43425fa, [h.L_.EMAIL]: s().a411926a, [h.L_.WEBSITE]: s().e1c78796 };
                                    return (r = t[e]), o.createElement(n.ZP, { style: m.Z.subtext }, r);
                                    var r;
                                })(t),
                            o.createElement(n.ZP, { color: "gray700", style: m.Z.contentContainer }, Z),
                        ),
                        o.createElement(
                            i.ZP,
                            {
                                onClick: () => {
                                    x().catch(r()), l();
                                },
                                style: m.Z.buttonFixed,
                                type: "brandFilled",
                            },
                            g,
                        ),
                    );
                    var P;
                },
                x = y(v);
        },
        804582: (e, t, r) => {
            r.d(t, { ZP: () => g });
            var o = r(202784),
                a = r(325686),
                n = r(891198),
                i = r(731708),
                l = r(154003),
                s = r(674132),
                c = r.n(s),
                d = r(323265),
                h = r(443781),
                p = r(555079),
                m = r(695829),
                u = r(179596);
            const b = c().ec6801cc,
                y = c().j24c37b2,
                g = ({ daysForDecision: e = 14, isNarrow: t, link: r, onSurveyClick: s, surveyUrl: g }) => {
                    const { featureSwitches: Z } = o.useContext(h.rC),
                        C = Z.isTrue("identity_verification_notable_demo_survey");
                    return o.createElement(a.Z, { style: m.Z.largeBannerContainer }, o.createElement(u.Z, { isNarrow: t, type: u.l.SENT }), o.createElement(a.Z, { style: [m.Z.container, m.Z.verticalCenter, t && m.Z.narrowContainer] }, o.createElement(i.ZP, { "aria-level": 1, id: p.Q_, role: "heading", size: "title4", style: m.Z.header, weight: "heavy" }, b), o.createElement(i.ZP, { color: "gray700" }, ((E = e), o.createElement(c().I18NFormatMessage, { $i18n: "a1c39f5b", days: n.ZP.getFormattedCount(E) }))), C && g && o.createElement(i.ZP, { color: "gray700", style: m.Z.text }, o.createElement(c().I18NFormatMessage, { $i18n: "ja826537" }, o.createElement(i.ZP, { link: { pathname: g, openInSameFrame: d.ZP.isAndroid() && d.ZP.isTwitterApp() }, onClick: s }, c().i6ef95ec))), o.createElement(l.ZP, { link: { pathname: r, openInSameFrame: !0 }, style: m.Z.buttonPadded, type: "brandFilled" }, y)));
                    var E;
                };
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => Z });
            var o = r(202784),
                a = r(325686),
                n = r(913973),
                i = r(731708),
                l = r(950822),
                s = r(466792),
                c = r(58881),
                d = r(530732),
                h = r(352924),
                p = r(392237);
            class m extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, h.F)()),
                        (this.descriptionId = (0, h.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: r } = this.props;
                            r && !t && r(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: h, helpText: m, label: b, name: y, testID: g } = this.props,
                        Z = c.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = c.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        E = r ? Z : C;
                    return o.createElement(s.Z, { disabled: h }, (s) => o.createElement(a.Z, { role: "label", style: [u.root, !h && u.interactive], testID: g }, o.createElement(a.Z, { style: u.topContainer }, o.createElement(i.ZP, { id: this.labelId }, b), o.createElement(a.Z, { style: u.radioContainer }, o.createElement(d.Z, { interactiveStyles: E, interactivityState: s, style: u.radioBackground }, o.createElement(a.Z, { style: [u.circle, r && u.circleActive, h && u.circleDisabled, r && h && u.circleCheckedAndDisabled] }, r ? o.createElement(n.default, { style: u.checkMark }) : null)), (0, l.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: h, name: y, onChange: this._handleChange, ref: this._setRef, style: [u.nativeControl], type: "radio" }))), m ? o.createElement(i.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: u.helpText }, m) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            m.defaultProps = { disabled: !1, checked: !1 };
            const u = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                b = m,
                y = "radioGroup";
            let g = 1;
            class Z extends o.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: r } = this.props;
                            r(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (r) => {
                            (this._radioRefs[e] = r), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${g}_LABEL`),
                        (g += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: r, label: n, name: l, options: s, value: c } = this.props;
                    return o.createElement(
                        a.Z,
                        { "aria-label": e, "aria-labelledby": n && !e ? this._labelId : void 0, role: "radiogroup", style: r && C.disabled, testID: `${y}${l}` },
                        n ? o.createElement(a.Z, { id: this._labelId, role: "label", style: C.header }, o.createElement(i.ZP, { style: C.label, weight: "bold" }, n), t ? o.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => o.createElement(b, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: l, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            Z.defaultProps = { disabled: !1 };
            const C = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountVerification-6107ac1a.743eaf1a.js.map
