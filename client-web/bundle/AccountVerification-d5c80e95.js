"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountVerification-d5c80e95"],
    {
        537668: (e, t, r) => {
            r.d(t, { Dh: () => b, ZP: () => E });
            r(571372);
            var n = r(202784),
                a = r(946847),
                o = r(111677),
                i = r.n(o),
                s = r(516951),
                l = r(323265),
                c = r(316325);
            const d = i().d4f88600,
                m = i().b192ccae,
                h = i().a0487504,
                p = i().fff7d93c,
                u = i().g969bfae,
                Z = i().gb2f35e4,
                y = l.ZP.isTwitterApp() ? { external: !0, pathname: "twitter://settings/account", openInSameFrame: !0 } : { pathname: "/settings/account", openInSameFrame: !0 },
                b = l.ZP.isTwitterApp() ? { external: !0, pathname: "twitter://profiles/edit", openInSameFrame: !0 } : { external: !0, pathname: "/settings/profile", openInSameFrame: !0 },
                E = ({ accountViolations: e }) => {
                    const t = [c.fX.PROFILE_COMPLETION, c.fX.ACCOUNT_SECURITY],
                        r = { [c.fX.PROFILE_COMPLETION]: { actionLink: b, buttonText: p, description: Z, title: u }, [c.fX.ACCOUNT_SECURITY]: { actionLink: y, buttonText: d, description: h, title: m } },
                        o = t.find((t) => e.violations?.some((e) => e.violation_category === t && e.violation_status === c.Tq.OUT_OF_COMPLIANCE));
                    if (void 0 === o) throw new Error("cannot render Account violations without valid violations");
                    const { actionLink: i, buttonText: l, description: E, title: g } = r[o];
                    return n.createElement(a.Z, { actionLabel: l, actionLink: i, graphicDisplayMode: "none", headline: g, onAction: s.Z, onClose: s.Z, subtext: E, withCloseButton: !1 });
                };
        },
        853137: (e, t, r) => {
            r.d(t, { ZP: () => I });
            var n = r(202784),
                a = r(325686),
                o = r(731708),
                i = r(946847),
                s = r(154003),
                l = r(111677),
                c = r.n(l),
                d = r(817480),
                m = r(161821),
                h = r(516951),
                p = r(555079),
                u = r(695829);
            const Z = c().j24c37b2,
                y = c().c1df579e,
                b = c().bbef41c2,
                E = c().be03ecca,
                g = c().a411926a,
                C = c().c69a40de,
                _ = c().c83a1662,
                f = { "10minutemail": [""], aol: ["aol.com"], gmail: ["googlemail.com", "gmail.com"], gmx: ["gmx.com"], icloud: ["icloud.com", "me.com", "mac.com"], "mail.com": ["mail.com"], outlook: ["outlook.com"], protonmail: ["protonmail.com", "pm.me"], sendinblue: ["sendinblue.com"], tutanota: ["tutanota.com"], yahoo: ["yahoo.com"], yandex: ["yandex.com"], zoho: ["zoho.com"] },
                I = (e) => {
                    const { accountSettingsLink: t, email: r, handleOnClickInvalid: l, handleOnClickValid: I, isNarrow: v } = e,
                        k = 0 === r.length;
                    if (
                        k ||
                        ((e) => {
                            const [, t] = e.split("@"),
                                r = `${(0, d.Z)((0, m.Z)(f))
                                    .filter((e) => e)
                                    .map((e) => e.replace(".", "\\."))
                                    .join("|")}`;
                            return new RegExp(r, "i").test(t);
                        })(r)
                    ) {
                        const e = k ? C : _,
                            r = k ? ((e) => n.createElement(c().I18NFormatMessage, { $i18n: "jf9308af" }, n.createElement(o.ZP, { link: e }, c().e1e878ee)))(t) : ((e) => n.createElement(c().I18NFormatMessage, { $i18n: "e9976a41" }, n.createElement(o.ZP, { link: e }, c().b9635182)))(t);
                        return n.createElement(i.Z, { actionLabel: Z, graphicDisplayMode: "none", headline: e, onAction: l, onClose: h.Z, subtext: r, withCloseButton: !1 });
                    }
                    return n.createElement(a.Z, { style: [u.Z.container, v && u.Z.narrowContainer] }, n.createElement(o.ZP, { "aria-level": 1, id: p.Q_, role: "heading", size: "title4", style: u.Z.header, weight: "heavy" }, g), n.createElement(a.Z, { style: u.Z.scrollableContainer }, n.createElement(o.ZP, { color: "gray700" }, b), ((w = E), n.createElement(o.ZP, { size: "subtext2", style: u.Z.subheading, weight: "heavy" }, w)), ((P = r), n.createElement(o.ZP, { style: u.Z.subtext }, P))), n.createElement(s.ZP, { onClick: I, style: u.Z.buttonFixed, type: "brandFilled" }, y));
                    var P, w;
                };
        },
        878432: (e, t, r) => {
            r.d(t, { Z: () => b });
            var n = r(202784),
                a = r(325686),
                o = r(688715),
                i = r(731708),
                s = r(154003),
                l = r(111677),
                c = r.n(l),
                d = r(555079),
                m = r(695829),
                h = r(179596);
            const p = c().j163be32,
                u = c().gaf821c8,
                Z = (0, o.ju)("https://help.x.com/managing-your-account/twitter-verified-accounts"),
                y = n.createElement(c().I18NFormatMessage, { $i18n: "e5b4cc43" }, n.createElement(i.ZP, { link: Z }, c().e1ac0f9b)),
                b = ({ handleOnClick: e, isNarrow: t }) => n.createElement(a.Z, { style: m.Z.largeBannerContainer }, n.createElement(h.Z, { isNarrow: t, type: h.l.START }), n.createElement(a.Z, { style: [m.Z.container, m.Z.verticalCenter, t && m.Z.narrowContainer] }, n.createElement(i.ZP, { "aria-level": 1, id: d.Q_, role: "heading", size: "title4", style: m.Z.header, weight: "heavy" }, u), n.createElement(i.ZP, { color: "gray700" }, y), n.createElement(s.ZP, { onClick: e, style: m.Z.buttonPadded, type: "brandFilled" }, p)));
        },
        748869: (e, t, r) => {
            r.d(t, { ZP: () => _ });
            var n = r(202784),
                a = r(325686),
                o = r(731708),
                i = r(111677),
                s = r.n(i),
                l = r(555079),
                c = r(801501),
                d = r(316325),
                m = r(326437),
                h = r(695829),
                p = r(179596),
                u = r(71620),
                Z = r(668214),
                y = r(946194);
            const b = (0, Z.Z)()
                    .propsFromState(() => ({ errors: y.EK, status: y.rX }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("ACCOUNT_VERIFICATION_INTAKE_LOADING"), fetchAuthenticationResult: y.kb, resetAuthenticationResult: y.DA, resetDocumentIdProcess: y.QH, setNextFlow: y.JA, setPreviousFlow: y.Jj }))
                    .withAnalytics(),
                E = s().h2d4ba56,
                g = s().i2051842;
            class C extends n.Component {
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
                    const { errors: r, setNextFlow: n, status: a } = this.props,
                        { retryCount: o } = this.state;
                    ((a !== e.status && this._isPollingDone(a)) || (r.length !== e.errors.length && r.length) || (o !== t.retryCount && 5 === o)) && this._stopTimer(), a === e.status || a !== d.WS.CONCLUSIVE || r.length || (this._handleScribe("success"), n());
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
                    return this._handleScribe("failure"), n.createElement(m.Z, { onButtonClick: this._handleErrorButtonClick });
                }
                _renderLoading() {
                    return n.createElement(a.Z, { style: h.Z.largeBannerContainer }, n.createElement(p.Z, { isNarrow: this.props.isNarrow, type: p.l.LOADING }), n.createElement(a.Z, { style: [h.Z.container, h.Z.verticalCenter, this.props.isNarrow && h.Z.narrowContainer] }, n.createElement(o.ZP, { "aria-level": 1, id: l.Q_, role: "heading", size: "title4", style: h.Z.header, weight: "heavy" }, E), n.createElement(o.ZP, { color: "gray700" }, g)));
                }
                render() {
                    return this._isErrorState() ? this._renderError() : this._renderLoading();
                }
            }
            const _ = b(C);
        },
        71448: (e, t, r) => {
            r.d(t, { Z: () => Z });
            var n = r(202784),
                a = r(325686),
                o = r(731708),
                i = r(371344),
                s = r(952428),
                l = r(111677),
                c = r.n(l),
                d = r(178519),
                m = r(197110),
                h = r(555079),
                p = r(695829);
            const u = c().h9270b1c,
                Z = ({ documentFormats: e, isNarrow: t, onCountryClick: r }) => {
                    const [l, c] = n.useState(new RegExp("", "i")),
                        Z = n.useMemo(() => (e ? Object.keys(e).sort((t, r) => e[t].country.localeCompare(e[r].country)) : []), [e]);
                    return n.createElement(
                        a.Z,
                        { "aria-labelledby": h.Q_, role: "group", style: [p.Z.container, t && p.Z.narrowContainer] },
                        n.createElement(
                            a.Z,
                            { style: p.Z.fixedContainer },
                            n.createElement(o.ZP, { "aria-level": 1, id: h.Q_, role: "heading", size: "title4", style: p.Z.header, weight: "heavy" }, m.qp),
                            n.createElement(
                                a.Z,
                                { style: [p.Z.contentContainer, p.Z.topPaddingSmall] },
                                n.createElement(i.Z, {
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
                        n.createElement(
                            a.Z,
                            { style: p.Z.scrollableContainer },
                            Z.map((t) => (e && e[t].country.match(l) ? n.createElement(s.Z, { key: t, onClick: () => r(t, e[t].country), style: [p.Z.listItem, p.Z.bottomBorder], withInteractiveStyling: !0 }, n.createElement(o.ZP, null, e[t].country)) : null)),
                        ),
                    );
                };
        },
        240550: (e, t, r) => {
            r.d(t, { Z: () => m });
            var n = r(202784),
                a = r(325686),
                o = r(731708),
                i = r(952428),
                s = r(161821),
                l = r(197110),
                c = r(555079),
                d = r(695829);
            const m = ({ documentFormats: e, idCountry: t, isNarrow: r, onTypeClick: m }) => {
                const h = n.useMemo(() => (e && t ? (0, s.Z)(e[t].id_types).sort((e, t) => e.name.localeCompare(t.name)) : []), [e, t]);
                return n.createElement(
                    a.Z,
                    { "aria-labelledby": c.Q_, role: "group", style: [d.Z.container, r && d.Z.narrowContainer] },
                    n.createElement(a.Z, { style: d.Z.fixedContainer }, n.createElement(o.ZP, { "aria-level": 1, id: c.Q_, role: "heading", size: "title4", style: d.Z.header, weight: "heavy" }, l.xn)),
                    n.createElement(
                        a.Z,
                        { style: [d.Z.contentContainer, d.Z.scrollableContainer, d.Z.topPaddingSmall] },
                        h.map(({ id_type: e, name: t }) => n.createElement(i.Z, { key: e, onClick: () => m(e, t), style: [d.Z.listItem, d.Z.bottomBorder], withInteractiveStyling: !0 }, n.createElement(o.ZP, null, t))),
                    ),
                );
            };
        },
        197110: (e, t, r) => {
            r.d(t, { qp: () => Z, ZP: () => f, xn: () => b });
            var n = r(202784),
                a = r(154003),
                o = r(111677),
                i = r.n(o),
                s = r(316325),
                l = r(133931),
                c = r(695829),
                d = r(668214),
                m = r(946194);
            const h = (0, d.Z)()
                    .propsFromState(() => ({ documentFormats: m.kg, idCountry: m.Xu, idType: m._g }))
                    .propsFromActions(() => ({ setNextFlow: m.JA }))
                    .withAnalytics(),
                p = i().e43425fa,
                u = i().e43672a0,
                Z = i().b246aa5e,
                y = i().d6fb5878,
                b = i().b72f97cc,
                E = i().b2ab6008,
                g = i().c1df579e,
                C = (e, t) => (e && t ? e[t].country : y),
                _ = (e, t, r) => (e && t && r ? e[t].id_types[r].name : E),
                f = h((e) => {
                    const { documentFormats: t, idCountry: r, idType: o, isNarrow: i, setNextFlow: d } = e;
                    return n.createElement(l.Z, {
                        button: n.createElement(a.ZP, { disabled: !(r && o), onClick: () => d(), style: c.Z.buttonFixed, type: "brandFilled" }, g),
                        description: u,
                        isNarrow: i,
                        items: [
                            { description: C(t, r), label: Z, nextStep: s.pl.ID_COUNTRY_SELECT },
                            { description: _(t, r, o), disabled: !r, label: b, nextStep: s.pl.ID_TYPE_SELECT },
                        ],
                        title: p,
                    });
                });
        },
        326437: (e, t, r) => {
            r.d(t, { Z: () => Z });
            var n = r(202784),
                a = r(946847),
                o = r(111677),
                i = r.n(o),
                s = r(516951),
                l = r(88656),
                c = r(837090);
            const d = i().fc2a5c92,
                m = i().jf4b6f70,
                h = c.vu,
                p = c.nb,
                u = i().d338f53e,
                Z = ({ error: e, onButtonClick: t }) => {
                    const r = e instanceof l.Z ? e.status : void 0;
                    let o = u,
                        i = d,
                        Z = m;
                    return 429 === r && ((o = c.k6), (i = h), (Z = p)), n.createElement(a.Z, { actionLabel: o, graphicDisplayMode: "none", headline: i, onAction: t, onClose: s.Z, subtext: Z, withCloseButton: !1 });
                };
        },
        778434: (e, t, r) => {
            r.d(t, { Z: () => G });
            var n = r(202784),
                a = r(325686),
                o = r(731708),
                i = r(96083),
                s = r(154003),
                l = r(392237),
                c = r(111677),
                d = r.n(c),
                m = r(555079),
                h = r(716233),
                p = r(312771),
                u = r(837090),
                Z = r(695829),
                y = r(71620),
                b = r(668214),
                E = r(946194),
                g = r(497294);
            const C = (e) => {
                    const t = (0, E.$G)(e);
                    return t ? (0, g.m3)(e, t)[0] : void 0;
                },
                _ = (e) => {
                    const t = (0, E.B_)(e);
                    return t ? (0, g.m3)(e, t)[0] : void 0;
                },
                f = (0, b.Z)()
                    .propsFromState(() => ({ backID: E.$G, backImage: C, documentFormats: E.kg, frontID: E.B_, frontImage: _, idCountry: E.Xu, idType: E._g, isConfirmed: E.aN, uploadEntityId: E.QO, uploadErrors: E.rT, uploadFetchStatus: E._z, uploadRequestError: E.Od }))
                    .propsFromActions(() => ({ addMedia: g.rA, createLocalApiErrorHandler: (0, y.zr)("ACCOUNT_VERIFICATION_INTAKE_UPLOAD"), processMultipleMedia: g.G$, removeMedia: g.TU, resetAuthenticationResult: E.DA, resetDocumentIdProcess: E.QH, resetIntakeUpload: E.S5, setBackID: E.Tc, setFrontID: E.$q, setNextFlow: E.JA, toggleCheckboxConfirmation: E.yw, verifyIdDocument: E.O2 }))
                    .withAnalytics();
            var I = r(15038),
                v = r(293615),
                k = r(373554),
                P = r(304059),
                w = r(751170);
            const x = ["application/pdf", "image/bmp", "image/jpeg", "image/png", "image/tiff"];
            class D extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleDragDrop = (e) => {
                            const { onChange: t } = this.props,
                                r = e.find((e) => x.includes(e.type));
                            r && t([r]);
                        }),
                        (this._renderDragDropTarget = () => {
                            const { "aria-label": e, onChange: t } = this.props;
                            return n.createElement(k.Z, { acceptGifs: !1, acceptImages: !1, acceptVideo: !1, "aria-label": e, customMimeTypes: x, icon: n.createElement(v.default, { style: F.mediaPickerIcon }), onChange: t, size: "small", style: F.mediaPicker, withIcon: !0 });
                        }),
                        (this._getResizeIfNeeded = (e) => {
                            const t = e.externalMediaDetails && e.externalMediaDetails.height / e.externalMediaDetails.width;
                            return t && t > 1 ? "width" : "height";
                        }),
                        (this._renderPreview = (e) => {
                            const { onRemove: t } = this.props;
                            return n.createElement(P.Z, { borderRadius: w.A.MEDIUM, mediaItem: e, onRemove: t, resizeIfNeeded: this._getResizeIfNeeded(e), style: F.mediaPreview, withCloseButton: !0 });
                        });
                }
                render() {
                    const { mediaItem: e, title: t } = this.props,
                        r = e ? this._renderPreview(e) : this._renderDragDropTarget();
                    return n.createElement(a.Z, { style: F.dragDropContainer }, n.createElement(o.ZP, { weight: "bold" }, t), n.createElement(I.ZP, { onFilesAdded: this._handleDragDrop, style: F.dragDropComponent }, r));
                }
            }
            const F = l.default.create((e) => ({ dragDropContainer: { flex: 1, marginTop: e.spaces.space16, maxWidth: "50%", minWidth: `calc(${e.spaces.space80} + ${e.spaces.space48})` }, dragDropComponent: { borderColor: e.colors.borderColor, borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: e.borderWidths.small, boxSizing: "border-box", flexGrow: 0, height: 135, marginVertical: e.spaces.space8, overflow: "hidden" }, mediaPicker: { borderStyle: "none", borderRadius: "none", flex: "auto" }, mediaPickerIcon: { color: e.colors.primary }, mediaPreview: { justifyContent: "center", flex: 1 } })),
                S = D;
            var T = r(326437);
            const N = "verification-checkbox-label",
                A = d().ff1d68f8,
                M = n.createElement(d().I18NFormatMessage, { $i18n: "bfb355fb" }, n.createElement(o.ZP, { link: u.LT }, d().d20f76cb)),
                R = d().bdada5a6,
                O = d().edfed0f6,
                L = d().def5015d({ back_of_document: "" }),
                B = d().b09aade6,
                U = d().b40ed190,
                z = d().c6650b56,
                W = d().d171ed16,
                $ = n.createElement(d().I18NFormatMessage, { $i18n: "d65a41c3" }, n.createElement(o.ZP, { link: u.vW }, d().b8deb156)),
                Q = d().c1df579e;
            class V extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSubmit = () => {
                            const { createLocalApiErrorHandler: e, handleOnClick: t = () => {}, verifyIdDocument: r } = this.props;
                            r().catch(e()), t();
                        }),
                        (this._handleAddBackMedia = (e) => {
                            const { addMedia: t, processMultipleMedia: r, setBackID: n } = this.props;
                            t(e, { location: h.vC.Verification }).then((e) => {
                                e.map((e) => {
                                    const t = e.id;
                                    n(t);
                                }),
                                    r(e, { onFailure: this._handleRemoveBackID });
                            });
                        }),
                        (this._handleRemoveBackID = () => {
                            const { backID: e, removeMedia: t, setBackID: r } = this.props;
                            e && (t(e), r(void 0));
                        }),
                        (this._handleAddFrontMedia = (e) => {
                            const { addMedia: t, processMultipleMedia: r, setFrontID: n } = this.props;
                            t(e, { location: h.vC.Verification }).then((e) => {
                                e.map((e) => {
                                    const t = e.id;
                                    n(t);
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
                            return t === p.ZP.FAILED || !!e.length;
                        }),
                        (this._isUploading = () => {
                            const { uploadFetchStatus: e } = this.props;
                            return e === p.ZP.LOADING;
                        }),
                        (this._renderCheckbox = () => {
                            const { isConfirmed: e } = this.props;
                            return n.createElement(a.Z, { style: [Z.Z.contentContainer, Z.Z.checkboxContainer] }, n.createElement(a.Z, { style: Z.Z.checkbox }, n.createElement(i.Z, { "aria-labelledby": N, checked: e, onChange: this._handleCheckboxChange })), n.createElement(a.Z, { id: N, style: Z.Z.checkboxText }, n.createElement(o.ZP, { color: "gray700" }, W), n.createElement(o.ZP, { color: "gray700", style: Z.Z.text }, $)));
                        }),
                        (this._needsBackside = () => {
                            const { documentFormats: e, idCountry: t, idType: r } = this.props;
                            return e && t && r && e[t].id_types[r].needs_backside;
                        }),
                        (this._renderUploadTargets = () => {
                            const { backImage: e, frontImage: t } = this.props,
                                r = this._needsBackside(),
                                o = r ? O : z,
                                i = r ? R : U;
                            return n.createElement(a.Z, { "aria-labelledby": m.Q_, role: "group", style: j.gridContainer }, n.createElement(S, { "aria-label": o, mediaItem: t, onChange: this._handleAddFrontMedia, onRemove: this._handleRemoveFrontID, title: i }), r && n.createElement(S, { "aria-label": B, mediaItem: e, onChange: this._handleAddBackMedia, onRemove: this._handleRemoveBackID, title: L }));
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
                    return this._handleScribe("failure"), n.createElement(T.Z, { error: e, onButtonClick: this._handleErrorButtonClick });
                }
                _render() {
                    const { backID: e, frontID: t, isConfirmed: r, isNarrow: i } = this.props,
                        l = (this._needsBackside() && !e) || !t || !r || this._isUploading();
                    return n.createElement(a.Z, { style: [Z.Z.container, i && Z.Z.narrowContainer] }, n.createElement(o.ZP, { "aria-level": 1, id: m.Q_, role: "heading", size: "title4", style: Z.Z.header, weight: "heavy" }, A), n.createElement(a.Z, { style: Z.Z.scrollableContainer }, n.createElement(o.ZP, { color: "gray700" }, M), this._renderUploadTargets(), this._renderCheckbox()), n.createElement(s.ZP, { disabled: l, onPress: this._handleSubmit, style: Z.Z.buttonFixed, type: "brandFilled" }, Q));
                }
                render() {
                    return this._isErrorState() ? this._renderError() : this._render();
                }
            }
            const j = l.default.create((e) => ({ gridContainer: { flexDirection: "row", flexWrap: "wrap", gap: e.spaces.space16 } })),
                G = f(V);
        },
        594610: (e, t, r) => {
            r.d(t, { FW: () => k, ZP: () => P });
            var n = r(202784),
                a = r(325686),
                o = r(731708),
                i = r(154003),
                s = r(111677),
                l = r.n(s),
                c = r(744531),
                d = r(555079),
                m = r(316325),
                h = r(837090),
                p = r(695829),
                u = r(668214),
                Z = r(946194);
            const y = (0, u.Z)()
                    .propsFromState(() => ({ authenticityType: Z.XV, authenticityData: Z.zH, idCountryName: Z.Wv, idTypeName: Z.P6, notabilityCategory: Z.Ep, notabilitySubcategory: Z.Bf, notabilityData: Z.Sh }))
                    .propsFromActions(() => ({ verifyAccount: Z.s8 })),
                b = l().a91bb144,
                E = l().affce770,
                g = l().i0864918,
                C = l().c7942074,
                _ = l().b8121daa,
                f = l().d247ca70,
                I = l().b51afbb2,
                v = l().cc87b01c,
                k = (e) => {
                    const { authenticityType: t, createLocalApiErrorHandler: r, handleOnClick: s, isNarrow: u, notabilityCategory: Z, notabilityData: y, notabilitySubcategory: k, verifyAccount: P } = e,
                        w = (e) => n.createElement(o.ZP, { size: "subtext2", style: p.Z.subheading, weight: "heavy" }, e);
                    return n.createElement(
                        a.Z,
                        { style: [p.Z.container, u && p.Z.narrowContainer] },
                        n.createElement(o.ZP, { "aria-level": 1, id: d.Q_, role: "heading", size: "title4", style: p.Z.header, weight: "heavy" }, v),
                        n.createElement(
                            a.Z,
                            { style: p.Z.scrollableContainer },
                            n.createElement(o.ZP, { color: "gray700" }, f),
                            w(g),
                            Z && n.createElement(o.ZP, { style: p.Z.subtext }, h.aR[Z]),
                            k && ((x = h._v[k]), n.createElement(a.Z, null, w(C), n.createElement(o.ZP, { style: p.Z.subtext }, x))),
                            y &&
                                ((e) => {
                                    const t = (0, c.Z)(e, "newsType"),
                                        r = Object.values(t).flat();
                                    return n.createElement(
                                        a.Z,
                                        null,
                                        w(_),
                                        r.map((e, t) => n.createElement(o.ZP, { key: t, style: p.Z.subtext }, e)),
                                    );
                                })(y),
                            w(I),
                            t &&
                                ((e) => {
                                    const t = { [m.L_.IDENTITY_DOCUMENT]: l().e43425fa, [m.L_.EMAIL]: l().a411926a, [m.L_.WEBSITE]: l().e1c78796 };
                                    return (r = t[e]), n.createElement(o.ZP, { style: p.Z.subtext }, r);
                                    var r;
                                })(t),
                            n.createElement(o.ZP, { color: "gray700", style: p.Z.contentContainer }, E),
                        ),
                        n.createElement(
                            i.ZP,
                            {
                                onClick: () => {
                                    P().catch(r()), s();
                                },
                                style: p.Z.buttonFixed,
                                type: "brandFilled",
                            },
                            b,
                        ),
                    );
                    var x;
                },
                P = y(k);
        },
        804582: (e, t, r) => {
            r.d(t, { ZP: () => b });
            var n = r(202784),
                a = r(325686),
                o = r(891198),
                i = r(731708),
                s = r(154003),
                l = r(111677),
                c = r.n(l),
                d = r(323265),
                m = r(443781),
                h = r(555079),
                p = r(695829),
                u = r(179596);
            const Z = c().ec6801cc,
                y = c().j24c37b2,
                b = ({ daysForDecision: e = 14, isNarrow: t, link: r, onSurveyClick: l, surveyUrl: b }) => {
                    const { featureSwitches: E } = n.useContext(m.rC),
                        g = E.isTrue("identity_verification_notable_demo_survey");
                    return n.createElement(a.Z, { style: p.Z.largeBannerContainer }, n.createElement(u.Z, { isNarrow: t, type: u.l.SENT }), n.createElement(a.Z, { style: [p.Z.container, p.Z.verticalCenter, t && p.Z.narrowContainer] }, n.createElement(i.ZP, { "aria-level": 1, id: h.Q_, role: "heading", size: "title4", style: p.Z.header, weight: "heavy" }, Z), n.createElement(i.ZP, { color: "gray700" }, ((C = e), n.createElement(c().I18NFormatMessage, { $i18n: "a1c39f5b", days: o.ZP.getFormattedCount(C) }))), g && b && n.createElement(i.ZP, { color: "gray700", style: p.Z.text }, n.createElement(c().I18NFormatMessage, { $i18n: "ja826537" }, n.createElement(i.ZP, { link: { pathname: b, openInSameFrame: d.ZP.isAndroid() && d.ZP.isTwitterApp() }, onClick: l }, c().i6ef95ec))), n.createElement(s.ZP, { link: { pathname: r, openInSameFrame: !0 }, style: p.Z.buttonPadded, type: "brandFilled" }, y)));
                    var C;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountVerification-d5c80e95.8bce843a.js.map
