"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountVerification-9a517202"],
    {
        179596: (e, t, i) => {
            i.d(t, { Z: () => d, l: () => n });
            var l = i(202784),
                E = i(325686),
                a = i(530525),
                I = i(439592),
                r = i(392237);
            const N = "https://abs.twimg.com/images/verification-form-start.png",
                p = "https://abs.twimg.com/images/verification-form-loading.png",
                T = "https://abs.twimg.com/images/verification-form-sent.png",
                s = 600,
                o = 1200,
                n = Object.freeze({ START: "start", LOADING: "loading", SENT: "sent" }),
                _ = {
                    [n.START]: {
                        aspectRatio: 2,
                        default: N,
                        variants: [
                            { uri: N, width: s, height: 300 },
                            { uri: "https://abs.twimg.com/images/verification-form-start-large.png", width: o, height: 600 },
                        ],
                    },
                    [n.LOADING]: {
                        aspectRatio: 1.5,
                        default: p,
                        variants: [
                            { uri: p, width: s, height: 400 },
                            { uri: "https://abs.twimg.com/images/verification-form-loading-large.png", width: o, height: 800 },
                        ],
                    },
                    [n.SENT]: {
                        aspectRatio: 2,
                        default: T,
                        variants: [
                            { uri: T, width: s, height: 300 },
                            { uri: "https://abs.twimg.com/images/verification-form-sent-large.png", width: o, height: 600 },
                        ],
                    },
                },
                A = r.default.create(() => ({ narrowBanner: { flex: 1 } })),
                d = ({ isNarrow: e, type: t }) => {
                    const i = _[t],
                        r = l.createElement(a.Z, { "aria-label": "", aspectMode: e ? I.Z.COVER : I.Z.exact(i.aspectRatio), customVariants: i.variants, image: i.default });
                    return e ? l.createElement(E.Z, { style: A.narrowBanner }, r) : r;
                };
        },
        971092: (e, t, i) => {
            i.d(t, { ZP: () => F });
            var l = i(202784),
                E = i(325686),
                a = i(731708),
                I = i(154003),
                r = i(111677),
                N = i.n(r),
                p = i(555079),
                T = i(316325),
                s = i(837090),
                o = i(695829);
            const n = N().b772cd66,
                _ = N().j3da4dea,
                A = (e) => {
                    const t = N().da44942d,
                        i = new Date(e);
                    return l.createElement(N().I18NFormatMessage, { $i18n: "b7be91bf", date: t(i) });
                },
                d = N().j94e995e,
                R = N().da458d6c,
                O = N().j4ed9f0e,
                C = N().b1ade780,
                G = N().b1ade780,
                c = N().j3da4dea,
                S = (e) => {
                    const t = N().da44942d,
                        i = new Date(e);
                    return l.createElement(N().I18NFormatMessage, { $i18n: "jcb00a95", date: t(i) });
                },
                L = N().aab67626,
                b = (e) => {
                    const t = N().da44942d,
                        i = new Date(e);
                    return l.createElement(N().I18NFormatMessage, { $i18n: "j92ea4b9", date: t(i) });
                },
                m = N().d3c1e25e,
                u = l.createElement(N().I18NFormatMessage, { $i18n: "jbcd22b1" }, l.createElement(a.ZP, { link: s.yK }, N().a8b4500e)),
                F = ({ applicationSubmissionTimeInMs: e, decisionMadeTimeInMs: t, isNarrow: i, link: r, status: N }) => {
                    const F = { [T.pY.DISABLED]: { title: s.vu, content: s.nb, button: s.k6 }, [T.pY.INTAKE_PROGRESS]: { title: null, content: null, button: null }, [T.pY.LOCKED]: { title: _, content: t ? A(t) : R, button: s.k6 }, [T.pY.NEW_ACCOUNT]: { title: _, content: G, button: s.k6 }, [T.pY.NOT_ELIGIBLE]: { title: _, content: C, button: s.k6 }, [T.pY.NOT_STARTED]: { title: null, content: null, button: null }, [T.pY.VERIFICATION_DENIED]: { title: c, content: t ? S(t) : d, button: n }, [T.pY.VERIFICATION_PENDING]: { title: L, content: e ? b(e) : O, button: n }, [T.pY.VERIFIED]: { title: m, content: u, button: n } },
                        { button: D, content: y, title: M } = F[N];
                    return M && y ? l.createElement(E.Z, { style: [o.Z.container, o.Z.verticalCenter, o.Z.appBarOffset, i && o.Z.narrowContainer] }, l.createElement(a.ZP, { "aria-level": 1, id: p.Q_, role: "heading", size: "title4", style: o.Z.header, weight: "heavy" }, M), l.createElement(a.ZP, { color: "gray700" }, y), l.createElement(I.ZP, { link: { pathname: r, openInSameFrame: !0 }, style: o.Z.buttonPadded, type: "brandFilled" }, D)) : null;
                };
        },
        57435: (e, t, i) => {
            i.d(t, { Z: () => p });
            var l = i(807896),
                E = i(202784),
                a = i(946847),
                I = i(516951),
                r = i(668214),
                N = i(946194);
            const p = (0, r.Z)()
                .propsFromActions(() => ({ setNextFlow: N.JA, setPreviousFlow: N.Jj }))
                .withAnalytics()((e) => {
                const { analytics: t, graphicDisplayMode: i = "none", onAction: r, onTertiaryAction: N, setNextFlow: p, setPreviousFlow: T, tertiaryActionLabel: s, tertiaryActionLink: o, withCloseButton: n = !1, ..._ } = e,
                    A = N || (o ? I.Z : () => T());
                return E.createElement(
                    a.Z,
                    (0, l.Z)(
                        {
                            graphicDisplayMode: i,
                            onAction: (e) => {
                                t.scribe({ ...t.contextualScribeNamespace, element: "CTA", action: "click", data: t.contextualScribeData }), r ? r(e) : s ? p() : T();
                            },
                            onTertiaryAction: A,
                            tertiaryActionLabel: s,
                            tertiaryActionLink: o,
                            withCloseButton: n,
                        },
                        _,
                    ),
                );
            });
        },
        201325: (e, t, i) => {
            i.d(t, { ZP: () => y });
            var l = i(807896),
                E = i(202784),
                a = i(325686),
                I = i(731708),
                r = i(891198),
                N = i(855488),
                p = i(96083),
                T = i(154003),
                s = i(392237),
                o = i(111677),
                n = i.n(o),
                _ = i(161821),
                A = i(665285),
                d = i(555079),
                R = i(782535),
                O = i(695829),
                C = i(668214),
                G = i(946194);
            const c = (e) => {
                    const t = (0, G.TC)(e);
                    return t?.inputData ?? [];
                },
                S = (0, C.Z)()
                    .propsFromState(() => ({ currentStep: G.J9, formHistory: c }))
                    .propsFromActions(() => ({ setFormStepData: G.eW, setNextFlow: G.JA, updateFormHistory: G.AM }))
                    .withAnalytics(),
                L = "verification-checkbox-label",
                b = n().i33cf692,
                m = n().c1df579e,
                u = n().b679ff6a,
                F = (e) =>
                    (0, A.Z)(e, !1, !1) &&
                    ((e) => {
                        if (e.includes("://")) {
                            const t = e.split("://");
                            return "http" === t[0] || "https" === t[0];
                        }
                        return !0;
                    })(e),
                D = s.default.create((e) => ({ input: { paddingHorizontal: 0 }, addFieldText: { alignSelf: "flex-start", marginStart: e.borderWidths.medium, paddingTop: e.spaces.space12 }, checkboxContainer: { paddingTop: 0 } })),
                y = S((e) => {
                    const { addFieldText: t = b, allowAddFields: i = !1, analytics: s, buttonText: o = m, confirmationText: n, currentStep: A, description: C, formHistory: G, isNarrow: c, items: S, maxItems: y = 10, nextFormStep: M, setFormStepData: U, setNextFlow: P, title: Y, updateFormHistory: W } = e,
                        [h, V] = E.useState(
                            ((e = [], t = []) => {
                                const i = {},
                                    [l = {}] = e.slice(-1);
                                return (
                                    t.length
                                        ? t.forEach((t, E) => {
                                              const a = e[E] ?? { ...l, required: !1 };
                                              i[E] = { ...a, value: t };
                                          })
                                        : e.forEach((e, t) => {
                                              i[t] = { ...e, value: "" };
                                          }),
                                    i
                                );
                            })(S, G),
                        ),
                        [x, f] = E.useState(!1),
                        [v, g] = E.useState(!1),
                        [K, B] = E.useState(!0),
                        [w, Z] = E.useState(null),
                        H = S.length;
                    E.useEffect(() => {
                        const e = (0, _.Z)(h),
                            t = (i ? e.slice(0, H) : e).every((e) => F(e.value)),
                            l = !t || !(!n || v);
                        f(t), B(l);
                    }, [i, n, h, v, H]);
                    const q = (e, t) => {
                        Z(
                            setTimeout(() => {
                                const i = !F(e);
                                return V({ ...h, [t]: { ...h[t], isUrlInvalid: i, value: e } });
                            }, 2e3),
                        );
                    };
                    return E.createElement(
                        a.Z,
                        { style: [O.Z.container, c && O.Z.narrowContainer] },
                        E.createElement(I.ZP, { "aria-level": 1, id: d.Q_, role: "heading", size: "title4", style: O.Z.header, weight: "heavy" }, Y),
                        E.createElement(
                            a.Z,
                            { style: O.Z.scrollableContainer },
                            C && E.createElement(I.ZP, { color: "gray700" }, C),
                            E.createElement(
                                a.Z,
                                { "aria-labelledby": d.Q_, role: "group", style: O.Z.contentContainer },
                                Object.keys(h).map((e, t) => {
                                    const { isUrlInvalid: i, labelGenerator: a = null, required: I, value: p, ...T } = h[e],
                                        s = T.label || "",
                                        o = T.name || `${A}-${e}`,
                                        n = T.errorText || u,
                                        _ = r.ZP.getFormattedCount(t + 1),
                                        d = a ? a({ n: _ }) : s;
                                    return E.createElement(
                                        N.Z,
                                        (0, l.Z)({}, T, {
                                            errorText: n,
                                            invalid: i,
                                            key: e,
                                            label: d,
                                            name: o,
                                            onBlur: () =>
                                                ((e) => {
                                                    clearTimeout(w);
                                                    const t = !F(h[e].value);
                                                    return V({ ...h, [e]: { ...h[e], isUrlInvalid: t } });
                                                })(e),
                                            onChange: (t) =>
                                                ((e, t) => {
                                                    clearTimeout(w);
                                                    let i = !1;
                                                    const { value: l } = e.target;
                                                    return h[t].isUrlInvalid ? (i = !F(l)) : q(l, t), V({ ...h, [t]: { ...h[t], isUrlInvalid: i, value: l } });
                                                })(t, e),
                                            style: D.input,
                                            value: p,
                                        }),
                                    );
                                }),
                                i && x && Object.keys(h).length < y
                                    ? E.createElement(
                                          I.ZP,
                                          {
                                              color: "primary",
                                              onPress: () =>
                                                  V(
                                                      ((e) => {
                                                          const t = Object.keys(e).length;
                                                          return { ...e, [t]: { ...e[t - 1], required: !1, value: "" } };
                                                      })(h),
                                                  ),
                                              style: D.addFieldText,
                                          },
                                          t,
                                      )
                                    : null,
                            ),
                            n && E.createElement(a.Z, { style: [O.Z.contentContainer, O.Z.checkboxContainer, D.checkboxContainer] }, E.createElement(a.Z, { style: O.Z.checkbox }, E.createElement(p.Z, { "aria-labelledby": L, checked: v, onChange: () => g(!v) })), E.createElement(a.Z, { id: L, style: O.Z.checkboxText }, E.createElement(I.ZP, { color: "gray700" }, n))),
                        ),
                        E.createElement(
                            T.ZP,
                            {
                                disabled: K,
                                onClick: () => {
                                    const e = ((e) => {
                                            let t = {};
                                            return (
                                                (0, _.Z)(e).forEach((e) => {
                                                    if (e.dataKey) {
                                                        const i = t[e.dataKey] ?? [],
                                                            l = e.value ?? "";
                                                        t = { ...t, [e.dataKey]: [...i, l] };
                                                    }
                                                }),
                                                t
                                            );
                                        })(h),
                                        t = Object.keys(e).map((e) => (0, R.D1)(e));
                                    U(A, e), s.scribe({ ...s.contextualScribeNamespace, element: "CTA", action: "click", data: { ...s.contextualScribeData, verification_application_details: { ...s.contextualScribeData.verification_application_details, notability_method: t } } }), W(((e) => (0, _.Z)(e).map((e) => e.value ?? ""))(h)), P(M);
                                },
                                style: O.Z.buttonFixed,
                                type: "brandFilled",
                            },
                            o,
                        ),
                    );
                });
        },
        886225: (e, t, i) => {
            i.d(t, { C: () => _ });
            var l = i(705753),
                E = (i(136728), i(316325)),
                a = i(957561);
            const I = { hasId: !0, hasEmail: !0, hasWebsite: !0 },
                r = { [E.eV.ACTIVISM]: { hasId: !0, hasEmail: !1, hasWebsite: !0, subtype: { [E.Y_.ACTIVIST]: { hasId: !0, hasEmail: !1, hasWebsite: !0 } } }, [E.eV.COMPANY]: { hasId: !1, hasEmail: !0, hasWebsite: !0, subtype: { [E.QP.COMPANY]: { hasId: !1, hasEmail: !0, hasWebsite: !0 }, [E.QP.EXECUTIVE]: { hasId: !0, hasEmail: !0, hasWebsite: !0 } } }, [E.eV.ENTERTAINMENT]: { hasId: !1, hasEmail: !1, hasWebsite: !0, subtype: { [E.nS.ENTERTAINMENT_INDIVIDUAL]: { hasId: !1, hasEmail: !1, hasWebsite: !1 }, [E.nS.ENTERTAINMENT_COMPANY]: { hasId: !1, hasEmail: !1, hasWebsite: !0 }, [E.nS.PRODUCTION]: { hasId: !1, hasEmail: !1, hasWebsite: !0 } } }, [E.eV.GOVERNMENT]: { hasId: !1, hasEmail: !1, hasWebsite: !0, subtype: { [E.aF.CANDIDATE]: { hasId: !0, hasEmail: !1, hasWebsite: !0 } } }, [E.eV.INFLUENCER_OTHER]: { hasId: !0, hasEmail: !1, hasWebsite: !0, subtype: { [E.Yp.INFLUENTIAL_INDIVIDUAL]: { hasId: !0, hasEmail: !1, hasWebsite: !0 }, [E.Yp.CONTENT_CREATOR]: { hasId: !1, hasEmail: !1, hasWebsite: !0 } } }, [E.eV.NEWS]: { hasId: !1, hasEmail: !0, hasWebsite: !0, subtype: { [E.DY.JOURNALIST]: { hasId: !0, hasEmail: !0, hasWebsite: !0 }, [E.DY.FREELANCER]: { hasId: !0, hasEmail: !1, hasWebsite: !0 }, [E.DY.ORGANIZATION]: { hasId: !1, hasEmail: !0, hasWebsite: !0 } } }, [E.eV.SPORTS]: { hasId: !0, hasEmail: !1, hasWebsite: !0, subtype: { [E.R2.SPORTS_INDIVIDUAL]: { hasId: !0, hasEmail: !1, hasWebsite: !0 }, [E.R2.SPORTS_ENTITY]: { hasId: !1, hasEmail: !1, hasWebsite: !0 }, [E.R2.GAMING_INDIVIDUAL]: { hasId: !0, hasEmail: !1, hasWebsite: !0 } } } },
                N = (e, t) => (e && t ? a.$S[e][t] : a.YB),
                p = (e, t, i) => {
                    const l = N(t, i).items;
                    let a = I;
                    t && i ? (a = r[t].subtype[i]) : t && (a = r[t]);
                    const p = [];
                    return a.hasId && p.push({ helpText: l[E.L_.IDENTITY_DOCUMENT].subtext, label: l[E.L_.IDENTITY_DOCUMENT].label, value: E.L_.IDENTITY_DOCUMENT }), a.hasEmail && e && p.push({ helpText: l[E.L_.EMAIL].subtext, label: l[E.L_.EMAIL].label, value: E.L_.EMAIL }), a.hasWebsite && p.push({ helpText: l[E.L_.WEBSITE].subtext, label: l[E.L_.WEBSITE].label, value: E.L_.WEBSITE }), p;
                },
                T = Object.freeze({
                    [E.pl.AUTHENTICITY_TYPE_SELECT]: ({ notabilityCategory: e, notabilitySubcategory: t, userEmail: i }) => ({
                        type: "radio",
                        props: {
                            description: N(e, t).description,
                            getNextFormStep: (e) => {
                                switch (e) {
                                    case E.L_.IDENTITY_DOCUMENT:
                                        return E.pl.INTAKE_TYPE_SELECT;
                                    case E.L_.EMAIL:
                                        return E.pl.EMAIL_VERIFICATION;
                                    case E.L_.WEBSITE:
                                        return E.pl.SITE_VERIFICATION;
                                    default:
                                        return E.pl.THANK_YOU;
                                }
                            },
                            items: p(i, e, t),
                            title: a.YB.title,
                        },
                    }),
                    [E.pl.SITE_VERIFICATION]: ({ notabilityCategory: e, notabilitySubcategory: t }) => {
                        const i = N(e, t).items[E.L_.WEBSITE];
                        return { type: "input", props: { title: a.OF.title, description: i.description || a.OF.description, items: [{ dataKey: E.S.WEBSITE, label: i.inputLabel || a.OF.websiteLabel, required: !0 }] } };
                    },
                    [E.pl.WEBSITE_REFERENCE_CONFIRM_AUTOFILL]: ({ notabilityCategory: e, notabilityData: t, notabilitySubcategory: i, setFormStepData: l, setNextFlow: I, setPreviousFlow: r }) => {
                        let N = [];
                        switch (e) {
                            case E.eV.COMPANY:
                            case E.eV.ACTIVISM:
                                N = t?.leadershipReferenceUrl ?? [];
                                break;
                            case E.eV.INFLUENCER_OTHER:
                            case E.eV.ENTERTAINMENT:
                                N = t?.mainReferenceUrl ?? [];
                                break;
                            case E.eV.GOVERNMENT:
                                N = t?.publicReferenceUrl ?? [];
                                break;
                            case E.eV.NEWS:
                                N = t?.authorReferenceUrl ?? [];
                                break;
                            case E.eV.SPORTS:
                                N = t?.teamReferenceUrl ?? [];
                        }
                        let p = a.nv,
                            T = () => I(E.pl.AUTHENTICITY_TYPE_SELECT);
                        switch (i) {
                            case E.an.CONTENT_CREATOR:
                                (p = a.ut), (T = () => r());
                                break;
                            case E.an.ENTERTAINMENT_INDIVIDUAL:
                                (p = a.O9), (T = () => r());
                                break;
                            case E.an.OFFICE:
                                (p = a.x4),
                                    (T = () => {
                                        l(E.pl.AUTHENTICITY_TYPE_SELECT, E.L_.EMAIL), I(E.pl.EMAIL_VERIFICATION);
                                    });
                                break;
                            case E.an.OFFICIAL:
                                (p = a.i0),
                                    (T = () => {
                                        l(E.pl.AUTHENTICITY_TYPE_SELECT, E.L_.IDENTITY_DOCUMENT), I(E.pl.INTAKE_TYPE_SELECT);
                                    });
                        }
                        return {
                            type: "info",
                            props: {
                                ...p,
                                onAction: () => {
                                    l(E.pl.AUTHENTICITY_TYPE_SELECT, E.L_.WEBSITE), l(E.pl.SITE_VERIFICATION, { [E.S.WEBSITE]: N }), I(E.pl.REVIEW_SUBMIT);
                                },
                                onTertiaryAction: () => T(),
                            },
                        };
                    },
                    [E.pl.WEBSITE_REFERENCE_CONFIRM_PROCEED]: { type: "info", props: { ...a.iU } },
                });
            var s = i(537668),
                o = i(837090);
            const n = Object.freeze({
                    [E.pl.NOTABILITY_CATEGORY_SELECT]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({
                        type: "radio",
                        props: {
                            description: o.$c.description,
                            getNextFormStep: (e) => {
                                switch (e) {
                                    case E.eV.ACTIVISM:
                                        return E.pl.ACTIVIST_SUBCATEGORY;
                                    case E.eV.INFLUENCER_OTHER:
                                        return E.pl.INFLUENCER_SUBCATEGORY;
                                    case E.eV.COMPANY:
                                        return E.pl.COMPANY_SUBCATEGORY;
                                    case E.eV.ENTERTAINMENT:
                                        return E.pl.ENTERTAINMENT_QUALIFICATIONS;
                                    case E.eV.GOVERNMENT:
                                        return E.pl.GOVERNMENT_SUBCATEGORY;
                                    case E.eV.NEWS:
                                        return E.pl.NEWS_QUALIFICATIONS;
                                    case E.eV.SPORTS:
                                        return E.pl.SPORTS_SUBCATEGORY;
                                    case E.eV.GAMING:
                                        return E.pl.GAMING_SUBCATEGORY;
                                    default:
                                        return null;
                                }
                            },
                            items: [
                                { label: o.sI[E.eV.ACTIVISM], value: E.eV.ACTIVISM },
                                { label: o.sI[E.eV.COMPANY], value: E.eV.COMPANY },
                                { label: o.sI[E.eV.ENTERTAINMENT], value: E.eV.ENTERTAINMENT },
                                { label: o.sI[E.eV.GAMING], value: E.eV.GAMING },
                                { label: o.sI[E.eV.GOVERNMENT], value: E.eV.GOVERNMENT },
                                { label: o.sI[E.eV.NEWS], value: E.eV.NEWS },
                                { label: o.sI[E.eV.SPORTS], value: E.eV.SPORTS },
                                { label: o.sI[E.eV.INFLUENCER_OTHER], value: E.eV.INFLUENCER_OTHER },
                            ],
                            title: o.$c.title,
                        },
                    }),
                    [E.pl.ACTIVIST_QUALIFICATIONS]: {
                        type: "radio",
                        props: {
                            title: o._$.title,
                            description: o._$.description,
                            items: [
                                { ...o._$.items[0], value: E.GG.GOOGLE },
                                { ...o._$.items[1], value: E.GG.WIKIPEDIA },
                                { ...o._$.items[2], value: E.GG.NEWS },
                                { ...o._$.items[3], value: E.GG.LEADERSHIP },
                            ],
                            getNextFormStep: (e) => (e === E.GG.GOOGLE ? E.pl.ACTIVIST_GOOGLE_TRENDS : e === E.GG.WIKIPEDIA ? E.pl.ACTIVIST_WIKIPEDIA : e === E.GG.NEWS ? E.pl.ACTIVIST_NEWS : e === E.GG.LEADERSHIP ? E.pl.ACTIVIST_LEADERSHIP : void 0),
                        },
                    },
                    [E.pl.ACTIVIST_SUBCATEGORY]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({
                        type: "radio",
                        props: {
                            title: o.sx.title,
                            description: o.sx.description,
                            items: [
                                { ...o.sx.items[0], value: E.Y_.ACTIVIST },
                                { ...o.sx.items[1], value: E.DY.JOURNALIST },
                                { ...o.sx.items[2], value: E.QP.COMPANY },
                            ],
                            getNextFormStep: (i) => (i === E.Y_.ACTIVIST ? (e || t ? E.pl.ACTIVIST_QUALIFICATIONS : E.pl.ACTIVIST_QUALIFICATIONS_INELIGIBLE) : i === E.DY.JOURNALIST ? E.pl.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION : i === E.QP.COMPANY ? E.pl.COMPANY_NOTABILITY_METHOD : void 0),
                        },
                    }),
                    [E.pl.ACTIVIST_GOOGLE_TRENDS]: { type: "input", props: { title: o.OE.title, description: o.OE.description, items: [{ dataKey: E.GG.GOOGLE, label: o.OE.label, required: !0 }] } },
                    [E.pl.ACTIVIST_LEADERSHIP]: { type: "input", props: { title: o.VT.title, description: o.VT.description, items: [{ dataKey: E.GG.LEADERSHIP, label: o.VT.label, required: !0 }], confirmationText: o.VT.confirmationText } },
                    [E.pl.ACTIVIST_NEWS]: { type: "input", props: { title: o.A4.title, description: o.A4.description, items: [...Array(3).fill({ dataKey: E.GG.NEWS, labelGenerator: o.A4.articleLabelGenerator, required: !0 })], allowAddFields: !0, addFieldText: o.A4.addFieldText, maxItems: 10 } },
                    [E.pl.ACTIVIST_WIKIPEDIA]: { type: "input", props: { title: o.to.title, description: o.to.description, items: [{ dataKey: E.GG.WIKIPEDIA, label: o.to.label, required: !0 }] } },
                    [E.pl.ACTIVIST_QUALIFICATIONS_INELIGIBLE]: { type: "info", props: { headline: o._$.notEligibleTitle, subtext: o._$.notEligibleDescription, actionLabel: o._$.notEligibleButton } },
                    [E.pl.COMPANY_SUBCATEGORY]: {
                        type: "radio",
                        props: {
                            ...o.yw,
                            items: [
                                { ...o.yw.items[0], value: E.QP.COMPANY },
                                { ...o.yw.items[1], value: E.DY.JOURNALIST },
                                { ...o.yw.items[2], value: E.QP.EXECUTIVE },
                            ],
                            getNextFormStep: (e) => (e === E.QP.COMPANY ? E.pl.COMPANY_NOTABILITY_METHOD : e === E.QP.EXECUTIVE ? E.pl.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM : e === E.DY.JOURNALIST ? E.pl.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION : void 0),
                        },
                    },
                    [E.pl.COMPANY_NOTABILITY_METHOD]: ({ followersEligible: e = !1 }) => {
                        const t = [
                            { ...o.lp.items[0], value: E.GG.GOOGLE },
                            { ...o.lp.items[1], value: E.GG.WIKIPEDIA },
                            { ...o.lp.items[2], value: E.GG.STOCK },
                            { ...o.lp.items[3], value: E.GG.NEWS },
                        ];
                        return { type: "radio", props: { ...o.lp, items: e ? t : t.slice(0, -1), getNextFormStep: (e) => (e === E.GG.GOOGLE ? E.pl.COMPANY_GOOGLE_TRENDS : e === E.GG.WIKIPEDIA ? E.pl.COMPANY_WIKIPEDIA : e === E.GG.STOCK ? E.pl.COMPANY_STOCK_EXCHANGE : e === E.GG.NEWS ? E.pl.COMPANY_NEWS_REFERENCE : void 0) } };
                    },
                    [E.pl.COMPANY_GOOGLE_TRENDS]: ({ followersEligible: e }) => ({ type: "input", props: { title: o.bG.title, description: o.bG.description, items: [{ dataKey: E.GG.GOOGLE, label: o.bG.label, required: !0 }], nextFormStep: e ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.COMPANY_NEWS_REFERENCE } }),
                    [E.pl.COMPANY_WIKIPEDIA]: ({ followersEligible: e }) => ({ type: "input", props: { title: o.V2.title, description: o.V2.description, items: [{ dataKey: E.GG.WIKIPEDIA, label: o.V2.label, required: !0 }], nextFormStep: e ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.COMPANY_NEWS_REFERENCE } }),
                    [E.pl.COMPANY_STOCK_EXCHANGE]: ({ followersEligible: e }) => ({ type: "input", props: { title: o.Zt.title, description: o.Zt.description, items: [{ dataKey: E.GG.STOCK, label: o.Zt.label, required: !0 }], nextFormStep: e ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.COMPANY_NEWS_REFERENCE } }),
                    [E.pl.COMPANY_NEWS_REFERENCE]: { type: "input", props: { title: o.DO.title, description: o.DO.description, items: [...Array(3).fill({ dataKey: E.GG.NEWS, labelGenerator: o.DO.articleLabelGenerator, required: !0 })], allowAddFields: !0, addFieldText: o.DO.addFieldText } },
                    [E.pl.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM]: { type: "screenName", props: { ...o.DI } },
                    [E.pl.COMPANY_INDIVIDUAL_NOTABILITY_METHOD]: {
                        type: "radio",
                        props: {
                            ...o.xS,
                            items: [
                                { ...o.xS.items[0], value: E.GG.NEWS },
                                { ...o.xS.items[1], value: E.GG.LEADERSHIP },
                            ],
                            getNextFormStep: (e) => (e === E.GG.NEWS ? E.pl.COMPANY_INDIVIDUAL_NEWS_REFERENCE : e === E.GG.LEADERSHIP ? E.pl.COMPANY_INDIVIDUAL_LEADERSHIP : void 0),
                        },
                    },
                    [E.pl.COMPANY_INDIVIDUAL_NEWS_REFERENCE]: { type: "input", props: { title: o.Wi.title, description: o.Wi.description, items: [...Array(3).fill({ dataKey: E.GG.NEWS, labelGenerator: o.Wi.articleLabelGenerator, required: !0 })], allowAddFields: !0, addFieldText: o.Wi.addFieldText } },
                    [E.pl.COMPANY_INDIVIDUAL_LEADERSHIP]: { type: "input", props: { title: o.D8.title, description: o.D8.description, items: [{ dataKey: E.GG.LEADERSHIP, label: o.D8.label, required: !0 }], confirmationText: o.D8.confirmationText } },
                    [E.pl.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({ type: "input", props: { title: o.Yc.title, description: o.Yc.description, items: [{ dataKey: E.GG.GOOGLE, label: o.Yc.label, required: !0 }], nextFormStep: e || t ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.ENTERTAINMENT_COMPANY_NEWS_REFERENCE } }),
                    [E.pl.ENTERTAINMENT_COMPANY_NEWS_REFERENCE]: { type: "input", props: { title: o.uC.title, description: o.uC.description, items: [...Array(3).fill({ dataKey: E.GG.NEWS, labelGenerator: o.uC.articleLabelGenerator, required: !0 })], allowAddFields: !0, addFieldText: o.uC.addFieldText } },
                    [E.pl.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => {
                        const i = [
                            { ...o.qv.items[0], value: E.GG.GOOGLE },
                            { ...o.qv.items[1], value: E.GG.WIKIPEDIA },
                            { ...o.qv.items[2], value: E.GG.STOCK },
                            { ...o.qv.items[3], value: E.GG.NEWS },
                        ];
                        return { type: "radio", props: { ...o.qv, items: e || t ? i : i.slice(0, -1), getNextFormStep: (e) => (e === E.GG.GOOGLE ? E.pl.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS : e === E.GG.WIKIPEDIA ? E.pl.ENTERTAINMENT_COMPANY_WIKIPEDIA : e === E.GG.STOCK ? E.pl.ENTERTAINMENT_COMPANY_STOCK_REFERENCE : e === E.GG.NEWS ? E.pl.ENTERTAINMENT_COMPANY_NEWS_REFERENCE : void 0) } };
                    },
                    [E.pl.ENTERTAINMENT_COMPANY_STOCK_REFERENCE]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({ type: "input", props: { title: o.GP.title, description: o.GP.description, items: [{ dataKey: E.GG.STOCK, label: o.GP.label, required: !0 }], nextFormStep: e || t ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.ENTERTAINMENT_COMPANY_NEWS_REFERENCE } }),
                    [E.pl.ENTERTAINMENT_COMPANY_WIKIPEDIA]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({ type: "input", props: { title: o.lW.title, description: o.lW.description, items: [{ dataKey: E.GG.WIKIPEDIA, label: o.lW.label, required: !0 }], nextFormStep: e || t ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.ENTERTAINMENT_COMPANY_NEWS_REFERENCE } }),
                    [E.pl.ENTERTAINMENT_INDIVIDUAL_IMDB_URL]: { type: "input", props: { title: o.sK.title, description: o.sK.description, items: [{ dataKey: E.GG.IMDB, label: o.sK.label, required: !0 }] } },
                    [E.pl.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL]: { type: "input", props: { title: o.eN.title, description: o.eN.description, items: [{ dataKey: E.GG.MAIN, label: o.eN.label, required: !0 }] } },
                    [E.pl.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS]: { type: "input", props: { title: o.A8.title, description: o.A8.description, items: [...Array(3).fill({ dataKey: E.GG.NEWS, labelGenerator: o.DO.articleLabelGenerator, required: !0 })], addFieldText: o.A8.addFieldText, allowAddFields: !0, maxItems: 10 } },
                    [E.pl.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS]: {
                        type: "radio",
                        props: {
                            title: o.YZ.title,
                            description: o.YZ.description,
                            items: [
                                { helpText: o.YZ.items[0].description, label: o.YZ.items[0].label, value: E.GG.IMDB },
                                { helpText: o.YZ.items[1].description, label: o.YZ.items[1].label, value: E.GG.NEWS },
                            ],
                            getNextFormStep: (e) => (e === E.GG.IMDB ? E.pl.ENTERTAINMENT_INDIVIDUAL_IMDB_URL : e === E.GG.NEWS ? E.pl.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS : void 0),
                        },
                    },
                    [E.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({ type: "input", props: { title: o.$_.title, description: o.$_.description, items: [{ dataKey: E.GG.GOOGLE, label: o.$_.label, required: !0 }], nextFormStep: e || t ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE } }),
                    [E.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE]: { type: "input", props: { title: o.Yo.title, description: o.Yo.description, items: [...Array(3).fill({ dataKey: E.GG.NEWS, labelGenerator: o.Yo.articleLabelGenerator, required: !0 })], allowAddFields: !0, addFieldText: o.Yo.addFieldText } },
                    [E.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => {
                        const i = [
                            { ...o.Bw.items[0], value: E.GG.GOOGLE },
                            { ...o.Bw.items[1], value: E.GG.WIKIPEDIA },
                            { ...o.Bw.items[2], value: E.GG.STOCK },
                            { ...o.Bw.items[3], value: E.GG.NEWS },
                        ];
                        return { type: "radio", props: { ...o.Bw, items: e || t ? i : i.slice(0, -1), getNextFormStep: (e) => (e === E.GG.GOOGLE ? E.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS : e === E.GG.WIKIPEDIA ? E.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA : e === E.GG.STOCK ? E.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE : e === E.GG.NEWS ? E.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE : void 0) } };
                    },
                    [E.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({ type: "input", props: { title: o.hd.title, description: o.hd.description, items: [{ dataKey: E.GG.STOCK, label: o.hd.label, required: !0 }], nextFormStep: e || t ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE } }),
                    [E.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({ type: "input", props: { title: o.zp.title, description: o.zp.description, items: [{ dataKey: E.GG.WIKIPEDIA, label: o.zp.label, required: !0 }], nextFormStep: e || t ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE } }),
                    [E.pl.ENTERTAINMENT_QUALIFICATIONS]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({
                        type: "radio",
                        props: {
                            title: o.HB.title,
                            description: o.HB.description,
                            items: [
                                { ...o.HB.items[0], value: E.nS.ENTERTAINMENT_COMPANY },
                                { ...o.HB.items[1], value: E.Yp.CONTENT_CREATOR },
                                { ...o.HB.items[2], value: E.nS.ENTERTAINMENT_INDIVIDUAL },
                                { ...o.HB.items[3], value: E.nS.PRODUCTION },
                            ],
                            getNextFormStep: (i) => (i === E.nS.ENTERTAINMENT_COMPANY ? E.pl.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD : i === E.nS.ENTERTAINMENT_INDIVIDUAL ? E.pl.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS : i === E.nS.PRODUCTION ? E.pl.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD : i === E.Yp.CONTENT_CREATOR ? (e || t ? E.pl.CONTENT_CREATOR_QUALIFICATIONS : E.pl.INFLUENCER_QUALIFICATIONS_INELIGIBLE) : void 0),
                        },
                    }),
                    [E.pl.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM]: { type: "info", props: { headline: o.ib.candidateTitle, subtext: o.ib.candidateDescription, actionLabel: o.ib.confirmButtonLabel, tertiaryActionLabel: o.ib.declineButtonLabel } },
                    [E.pl.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS]: { type: "input", props: { title: o.l4.title, description: o.l4.description, items: [...Array(5).fill({ dataKey: E.GG.NEWS, labelGenerator: o.l4.articleLabelGenerator, required: !0 })], addFieldText: o.l4.addFieldText, allowAddFields: !0, maxItems: 10 } },
                    [E.pl.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM]: { type: "info", props: { headline: o.CV.candidateTitle, subtext: o.CV.candidateDescription, actionLabel: o.CV.confirmButtonLabel, tertiaryActionLabel: o.CV.declineButtonLabel, tertiaryActionLink: s.Dh } },
                    [E.pl.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL]: { type: "input", props: { title: o.cc.title, description: o.cc.description, items: [{ dataKey: E.GG.PUBLIC, label: o.cc.websiteLabel, required: !0 }] } },
                    [E.pl.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS]: { type: "input", props: { title: o.nJ.title, description: o.nJ.description, items: [...Array(5).fill({ dataKey: E.GG.NEWS, labelGenerator: o.nJ.articleLabelGenerator, required: !0 })], addFieldText: o.nJ.addFieldText, allowAddFields: !0, maxItems: 10 } },
                    [E.pl.GOVERNMENT_OFFICE_PROFILE_CONFIRM]: { type: "info", props: { headline: o.CV.officeTitle, subtext: o.CV.officeDescription, actionLabel: o.CV.confirmButtonLabel, tertiaryActionLabel: o.CV.declineButtonLabel, tertiaryActionLink: s.Dh } },
                    [E.pl.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL]: { type: "input", props: { title: o.II.title, description: o.II.description, items: [{ dataKey: E.GG.PUBLIC, label: o.II.websiteLabel, required: !0 }] } },
                    [E.pl.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM]: { type: "info", props: { headline: o.ib.officialTitle, subtext: o.ib.officialDescription, actionLabel: o.ib.confirmButtonLabel, tertiaryActionLabel: o.ib.declineButtonLabel } },
                    [E.pl.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS]: { type: "input", props: { title: o.cB.title, description: o.cB.description, items: [...Array(5).fill({ dataKey: E.GG.NEWS, labelGenerator: o.cB.articleLabelGenerator, required: !0 })], addFieldText: o.cB.addFieldText, allowAddFields: !0, maxItems: 10 } },
                    [E.pl.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM]: { type: "info", props: { headline: o.CV.officialTitle, subtext: o.CV.officialDescription, actionLabel: o.CV.confirmButtonLabel, tertiaryActionLabel: o.CV.declineButtonLabel, tertiaryActionLink: s.Dh } },
                    [E.pl.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL]: { type: "input", props: { title: o.Uz.title, description: o.Uz.description, items: [{ dataKey: E.GG.PUBLIC, label: o.Uz.websiteLabel, required: !0 }] } },
                    [E.pl.GOVERNMENT_SUBCATEGORY]: {
                        type: "radio",
                        props: {
                            title: o.jn.title,
                            description: o.jn.description,
                            items: [
                                { ...o.jn.items[0], value: E.aF.OFFICIAL },
                                { ...o.jn.items[1], value: E.aF.CANDIDATE },
                                { ...o.jn.items[2], value: E.aF.OFFICE },
                            ],
                            getNextFormStep: (e) => (e === E.aF.OFFICIAL ? E.pl.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM : e === E.aF.CANDIDATE ? E.pl.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM : e === E.aF.OFFICE ? E.pl.GOVERNMENT_OFFICE_PROFILE_CONFIRM : void 0),
                        },
                    },
                    [E.pl.CONTENT_CREATOR_GOOGLE_TRENDS]: { type: "input", props: { title: o.Tq.title, description: o.Tq.description, items: [{ dataKey: E.GG.GOOGLE, label: o.Tq.label, required: !0 }] } },
                    [E.pl.CONTENT_CREATOR_NEWS]: { type: "input", props: { title: o.Fx.title, description: o.Fx.description, items: [...Array(3).fill({ dataKey: E.GG.NEWS, labelGenerator: o.Fx.articleLabelGenerator, required: !0 })], allowAddFields: !0, addFieldText: o.Fx.addFieldText, maxItems: 10 } },
                    [E.pl.CONTENT_CREATOR_QUALIFICATIONS]: {
                        type: "radio",
                        props: {
                            title: o.Pk.title,
                            description: o.Pk.description,
                            items: [
                                { ...o.Pk.items[0], value: E.GG.GOOGLE },
                                { ...o.Pk.items[1], value: E.GG.WIKIPEDIA },
                                { ...o.Pk.items[2], value: E.GG.NEWS },
                            ],
                            getNextFormStep: (e) => (e === E.GG.GOOGLE ? E.pl.CONTENT_CREATOR_GOOGLE_TRENDS : e === E.GG.WIKIPEDIA ? E.pl.CONTENT_CREATOR_WIKIPEDIA : e === E.GG.NEWS ? E.pl.CONTENT_CREATOR_NEWS : void 0),
                        },
                    },
                    [E.pl.CONTENT_CREATOR_WIKIPEDIA]: { type: "input", props: { title: o.z6.title, description: o.z6.description, items: [{ dataKey: E.GG.WIKIPEDIA, label: o.z6.label, required: !0 }] } },
                    [E.pl.CREATOR_PROFILE]: { type: "input", props: { title: o.$r.title, description: o.$r.description, items: [{ dataKey: E.GG.MAIN, label: o.$r.items[0].label, required: !0 }] } },
                    [E.pl.INFLUENCER_GOOGLE_TRENDS]: { type: "input", props: { title: o.AL.title, description: o.AL.description, items: [{ dataKey: E.GG.GOOGLE, label: o.AL.label, required: !0 }] } },
                    [E.pl.INFLUENCER_NEWS]: { type: "input", props: { title: o.P4.title, description: o.P4.description, items: [...Array(3).fill({ dataKey: E.GG.NEWS, labelGenerator: o.P4.articleLabelGenerator, required: !0 })], allowAddFields: !0, addFieldText: o.P4.addFieldText, maxItems: 10 } },
                    [E.pl.INFLUENCER_QUALIFICATIONS]: {
                        type: "radio",
                        props: {
                            title: o.lH.title,
                            description: o.lH.description,
                            items: [
                                { ...o.lH.items[0], value: E.GG.GOOGLE },
                                { ...o.lH.items[1], value: E.GG.WIKIPEDIA },
                                { ...o.lH.items[2], value: E.GG.NEWS },
                            ],
                            getNextFormStep: (e) => (e === E.GG.GOOGLE ? E.pl.INFLUENCER_GOOGLE_TRENDS : e === E.GG.WIKIPEDIA ? E.pl.INFLUENCER_WIKIPEDIA : e === E.GG.NEWS ? E.pl.INFLUENCER_NEWS : void 0),
                        },
                    },
                    [E.pl.INFLUENCER_QUALIFICATIONS_INELIGIBLE]: { type: "info", props: { headline: o.lH.notEligibleTitle, subtext: o.lH.notEligibleDescription, actionLabel: o.lH.notEligibleButton } },
                    [E.pl.INFLUENCER_SUBCATEGORY]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({
                        type: "radio",
                        props: {
                            ...o.oK,
                            items: [
                                { ...o.oK.items[0], value: E.Yp.CONTENT_CREATOR },
                                { ...o.oK.items[1], value: E.Yp.INFLUENTIAL_INDIVIDUAL },
                            ],
                            getNextFormStep: (i) => (i === E.Yp.CONTENT_CREATOR ? (e || t ? E.pl.CONTENT_CREATOR_QUALIFICATIONS : E.pl.INFLUENCER_QUALIFICATIONS_INELIGIBLE) : i === E.Yp.INFLUENTIAL_INDIVIDUAL ? (e || t ? E.pl.INFLUENCER_QUALIFICATIONS : E.pl.INFLUENCER_QUALIFICATIONS_INELIGIBLE) : void 0),
                        },
                    }),
                    [E.pl.INFLUENCER_WIKIPEDIA]: { type: "input", props: { title: o.f.title, description: o.f.description, items: [{ dataKey: E.GG.WIKIPEDIA, label: o.f.label, required: !0 }] } },
                    [E.pl.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS]: { type: "input", props: { title: o.OO.title, description: o.OO.description, items: [...Array(3).fill({ dataKey: E.GG.ARTICLES, labelGenerator: o.OO.articleNumerationLabelGenerator, required: !0 })], addFieldText: o.OO.addFieldText, allowAddFields: !0, maxItems: 10 } },
                    [E.pl.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS]: { type: "input", props: { title: o.OO.title, description: o.OO.description, items: [...Array(3).fill({ dataKey: E.GG.ARTICLES, labelGenerator: o.OO.articleNumerationLabelGenerator, required: !0 })], addFieldText: o.OO.addFieldText, allowAddFields: !0, maxItems: 10 } },
                    [E.pl.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL]: { type: "input", props: { title: o.H1.title, description: o.H1.description, items: [{ dataKey: E.GG.AUTHOR, label: o.H1.websiteLabel, required: !0 }], confirmationText: o.H1.confirmationText } },
                    [E.pl.NEWS_NOTABILITY_CRITERIA_CONFIRMATION]: { type: "info", props: { headline: o.cv.title, subtext: o.cv.description, actionLabel: o.cv.actionLabel, tertiaryActionLabel: o.cv.tertiaryActionLabel } },
                    [E.pl.NEWS_QUALIFICATIONS]: {
                        type: "radio",
                        props: {
                            title: o._f.title,
                            description: o._f.description,
                            items: [
                                { helpText: o._f.items[0].description, label: o._f.items[0].label, value: E.DY.JOURNALIST },
                                { helpText: o._f.items[1].description, label: o._f.items[1].label, value: E.DY.FREELANCER },
                                { helpText: o._f.items[2].description, label: o._f.items[2].label, value: E.DY.ORGANIZATION },
                            ],
                            getNextFormStep: (e) => (e === E.DY.JOURNALIST ? E.pl.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION : e === E.DY.FREELANCER ? E.pl.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS : e === E.DY.ORGANIZATION ? E.pl.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION : void 0),
                        },
                    },
                    [E.pl.NEWS_JOURNALIST_CRITERIA_CONFIRMATION]: { type: "info", props: { ...o.QQ, tertiaryActionLink: s.Dh } },
                    [E.pl.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION]: { type: "screenName", props: { ...o.fC } },
                    [E.pl.NEWS_JOURNALIST_QUALIFICATIONS]: {
                        type: "radio",
                        props: {
                            title: o.ne.title,
                            description: o.ne.description,
                            items: [
                                { helpText: o.ne.items[0].description, label: o.ne.items[0].label, value: E.GG.AUTHOR },
                                { helpText: o.ne.items[1].description, label: o.ne.items[1].label, value: E.GG.ARTICLES },
                            ],
                            getNextFormStep: (e) => (e === E.GG.ARTICLES ? E.pl.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS : e === E.GG.AUTHOR ? E.pl.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL : void 0),
                        },
                    },
                    [E.pl.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION]: { type: "info", props: { headline: o.If.title, subtext: o.If.description, actionLabel: o.If.confirmButtonLabel, tertiaryActionLabel: o.If.declineButtonLabel, tertiaryActionLink: s.Dh } },
                    [E.pl.NEWS_ORGANIZATION_QUALIFICATIONS]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({ type: "radio", props: { title: o.$$.title, description: o.$$.description, items: [{ helpText: o.$$.items[0].description, label: o.$$.items[0].label, value: E.GG.GOOGLE }, { helpText: o.$$.items[1].description, label: o.$$.items[1].label, value: E.GG.WIKIPEDIA }, { helpText: o.$$.items[2].description, label: o.$$.items[2].label, value: E.GG.STOCK }, ...(e || t ? [{ helpText: o.$$.items[3].description, label: o.$$.items[3].label, value: E.GG.ARTICLES }] : [])], getNextFormStep: (e) => (e === E.GG.GOOGLE ? E.pl.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL : e === E.GG.WIKIPEDIA ? E.pl.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL : e === E.GG.STOCK ? E.pl.NEWS_CREDIBILITY_STOCK_REFERENCE_URL : e === E.GG.ARTICLES ? E.pl.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS : void 0) } }),
                    [E.pl.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({ type: "input", props: { title: o.Qt.title, description: o.Qt.description, items: [{ dataKey: E.GG.GOOGLE, label: o.Qt.label, required: !0 }], nextFormStep: e || t ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS } }),
                    [E.pl.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({ type: "input", props: { title: o.Dm.title, description: o.Dm.description, items: [{ dataKey: E.GG.WIKIPEDIA, label: o.Dm.label, required: !0 }], nextFormStep: e || t ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS } }),
                    [E.pl.NEWS_CREDIBILITY_STOCK_REFERENCE_URL]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({ type: "input", props: { title: o.U$.title, description: o.U$.description, items: [{ dataKey: E.GG.STOCK, label: o.U$.label, required: !0 }], nextFormStep: e || t ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS } }),
                    [E.pl.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS]: { type: "input", props: { title: o.Tm.title, description: o.Tm.description, items: [...Array(3).fill({ dataKey: E.GG.ARTICLES, labelGenerator: o.Tm.articleLabelGenerator, required: !0 })], addFieldText: o.Tm.addFieldText, allowAddFields: !0, maxItems: 10 } },
                    [E.pl.GAMING_SUBCATEGORY]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({
                        type: "radio",
                        props: {
                            ...o.Rp,
                            items: [
                                { ...o.Rp.items[0], value: E.R2.GAMING_INDIVIDUAL },
                                { ...o.Rp.items[1], value: E.DY.JOURNALIST },
                                { ...o.Rp.items[2], value: E.Yp.CONTENT_CREATOR },
                                { ...o.Rp.items[3], value: E.QP.COMPANY },
                            ],
                            getNextFormStep: (i) => (i === E.R2.GAMING_INDIVIDUAL ? (e ? E.pl.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM : E.pl.GAMING_INDIVIDUAL_INELIGIBLE) : i === E.DY.JOURNALIST ? E.pl.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION : i === E.Yp.CONTENT_CREATOR ? (e || t ? E.pl.CONTENT_CREATOR_QUALIFICATIONS : E.pl.INFLUENCER_QUALIFICATIONS_INELIGIBLE) : i === E.QP.COMPANY ? E.pl.COMPANY_NOTABILITY_METHOD : void 0),
                        },
                    }),
                    [E.pl.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS]: { type: "input", props: { title: o.yT.title, description: o.yT.description, items: [...Array(3).fill({ dataKey: E.GG.NEWS, labelGenerator: o.yT.articleLabelGenerator, required: !0 })], allowAddFields: !0, addFieldText: o.yT.addFieldText, maxItems: 10 } },
                    [E.pl.GAMING_INDIVIDUAL_NOTABILITY_METHOD]: {
                        type: "radio",
                        props: {
                            title: o.bE.title,
                            description: o.bE.description,
                            items: [
                                { helpText: o.bE.items[0].description, label: o.bE.items[0].label, value: E.GG.NEWS },
                                { helpText: o.bE.items[1].description, label: o.bE.items[1].label, value: E.GG.TEAM },
                            ],
                            getNextFormStep: (e) => (e === E.GG.TEAM ? E.pl.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL : e === E.GG.NEWS ? E.pl.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS : void 0),
                        },
                    },
                    [E.pl.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL]: { type: "input", props: { title: o.Hd.title, description: o.Hd.description, items: [{ dataKey: E.GG.TEAM, label: o.Hd.websiteLabel, required: !0 }] } },
                    [E.pl.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS]: { type: "input", props: { title: o.iq.title, description: o.iq.description, items: [...Array(3).fill({ dataKey: E.GG.NEWS, labelGenerator: o.iq.articleLabelGenerator, required: !0 })], allowAddFields: !0, addFieldText: o.iq.addFieldText, maxItems: 10 } },
                    [E.pl.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL]: { type: "input", props: { title: o.Tr.title, description: o.Tr.description, items: [{ dataKey: E.GG.TEAM, label: o.Tr.websiteLabel, required: !0 }] } },
                    [E.pl.SPORTS_ENTITY_NOTABILITY_METHOD]: ({ followersEligible: e = !1 }) => {
                        const t = [
                            { ...o.uu.items[0], value: E.GG.GOOGLE },
                            { ...o.uu.items[1], value: E.GG.WIKIPEDIA },
                            { ...o.uu.items[2], value: E.GG.STOCK },
                            { ...o.uu.items[3], value: E.GG.TEAM },
                            { ...o.uu.items[4], value: E.GG.NEWS },
                        ];
                        return { type: "radio", props: { ...o.uu, items: e ? t : t.slice(0, -1), getNextFormStep: (e) => (e === E.GG.GOOGLE ? E.pl.SPORTS_ENTITY_GOOGLE_TRENDS : e === E.GG.WIKIPEDIA ? E.pl.SPORTS_ENTITY_WIKIPEDIA : e === E.GG.STOCK ? E.pl.SPORTS_ENTITY_STOCK_REFERENCE : e === E.GG.TEAM ? E.pl.SPORTS_ENTITY_WEBSITE : e === E.GG.NEWS ? E.pl.SPORTS_ENTITY_NEWS_REFERENCE : void 0) } };
                    },
                    [E.pl.SPORTS_ENTITY_GOOGLE_TRENDS]: ({ followersEligible: e }) => ({ type: "input", props: { title: o.J5.title, description: o.J5.description, items: [{ dataKey: E.GG.GOOGLE, label: o.J5.label, required: !0 }], nextFormStep: e ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.SPORTS_ENTITY_NEWS_REFERENCE } }),
                    [E.pl.SPORTS_ENTITY_WIKIPEDIA]: ({ followersEligible: e }) => ({ type: "input", props: { title: o.C_.title, description: o.C_.description, items: [{ dataKey: E.GG.WIKIPEDIA, label: o.C_.label, required: !0 }], nextFormStep: e ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.SPORTS_ENTITY_NEWS_REFERENCE } }),
                    [E.pl.SPORTS_ENTITY_STOCK_REFERENCE]: ({ followersEligible: e }) => ({ type: "input", props: { title: o.sj.title, description: o.sj.description, items: [{ dataKey: E.GG.STOCK, label: o.sj.label, required: !0 }], nextFormStep: e ? E.pl.AUTHENTICITY_TYPE_SELECT : E.pl.SPORTS_ENTITY_NEWS_REFERENCE } }),
                    [E.pl.SPORTS_ENTITY_WEBSITE]: ({ followersEligible: e }) => ({ type: "input", props: { title: o.$Z.title, description: o.$Z.description, items: [{ dataKey: E.GG.TEAM, label: o.$Z.label, required: !0 }], nextFormStep: e ? E.pl.WEBSITE_REFERENCE_CONFIRM_AUTOFILL : E.pl.SPORTS_ENTITY_NEWS_REFERENCE } }),
                    [E.pl.SPORTS_ENTITY_NEWS_REFERENCE]: { type: "input", props: { title: o.Kj.title, description: o.Kj.description, items: [...Array(3).fill({ dataKey: E.GG.NEWS, labelGenerator: o.Kj.articleLabelGenerator, required: !0 })], allowAddFields: !0, addFieldText: o.Kj.addFieldText, maxItems: 10 } },
                    [E.pl.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM]: { type: "screenName", props: { ...o.ig } },
                    [E.pl.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM]: { type: "screenName", props: { ...o.We } },
                    [E.pl.SPORTS_INDIVIDUAL_NOTABILITY_METHOD]: {
                        type: "radio",
                        props: {
                            title: o.j_.title,
                            description: o.j_.description,
                            items: [
                                { helpText: o.j_.items[0].description, label: o.j_.items[0].label, value: E.GG.NEWS },
                                { helpText: o.j_.items[1].description, label: o.j_.items[1].label, value: E.GG.TEAM },
                            ],
                            getNextFormStep: (e) => (e === E.GG.TEAM ? E.pl.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL : e === E.GG.NEWS ? E.pl.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS : void 0),
                        },
                    },
                    [E.pl.GAMING_INDIVIDUAL_INELIGIBLE]: { type: "info", props: { ...o.k_ } },
                    [E.pl.SPORTS_SUBCATEGORY]: ({ followersEligible: e = !1, mentionsEligible: t = !1 }) => ({
                        type: "radio",
                        props: {
                            ...o.Vf,
                            items: [
                                { ...o.Vf.items[0], value: E.R2.SPORTS_INDIVIDUAL },
                                { ...o.Vf.items[1], value: E.R2.SPORTS_ENTITY },
                                { ...o.Vf.items[2], value: E.DY.JOURNALIST },
                                { ...o.Vf.items[3], value: E.Yp.CONTENT_CREATOR },
                            ],
                            getNextFormStep: (i) => (i === E.R2.SPORTS_INDIVIDUAL ? E.pl.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM : i === E.R2.SPORTS_ENTITY ? E.pl.SPORTS_ENTITY_NOTABILITY_METHOD : i === E.DY.JOURNALIST ? E.pl.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION : i === E.Yp.CONTENT_CREATOR ? (e || t ? E.pl.CONTENT_CREATOR_QUALIFICATIONS : E.pl.INFLUENCER_QUALIFICATIONS_INELIGIBLE) : void 0),
                        },
                    }),
                }),
                _ = Object.freeze({ ...T, ...n, ...l.k });
        },
        400796: (e, t, i) => {
            i.d(t, { S: () => l });
            i(202784);
            const l = { Info: "info", Input: "input", Pivot: "pivot", Radio: "radio", ScreenName: "screenName" };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountVerification-9a517202.0d62e01a.js.map
