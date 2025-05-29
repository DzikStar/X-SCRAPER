"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.LeaveThisConversation", "icons/IconAtOff-js"],
    {
        265008: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var l = n(202784),
                a = n(111677),
                o = n.n(a),
                c = n(293115),
                i = n(817682);
            const r = o().bb16cc76,
                s = o().j33c9fc6,
                d = ({ onCancel: e, onConfirm: t }) => l.createElement(c.nO, { namespace: { element: "leave_this_conversation_confirmation_sheet" } }, l.createElement(i.Z, { actionLabel: r, onAction: t, onClose: e, onSecondaryAction: e, secondaryActionLabel: s }));
        },
        817682: (e, t, n) => {
            n.d(t, { Z: () => S });
            var l = n(202784),
                a = n(325686),
                o = n(688715),
                c = n(731708),
                i = n(529356),
                r = n(392237),
                s = n(111677),
                d = n.n(s),
                m = n(890899),
                p = n(616894),
                u = n(165243),
                h = n(725516);
            const f = d().aed79c54,
                E = d().h12044a4,
                g = d().f100e566,
                y = d().a0d68f4e,
                b = d().b00255b6,
                Z = d().geea29ee,
                w = d().c54678e8,
                v = d().ga4fa180,
                A = d().h8dde772,
                C = d().i859a9d4,
                L = (0, o.ju)("https://help.x.com/using-twitter/mentions-and-replies#mention-control"),
                P = () => l.createElement(l.Fragment, null, l.createElement(c.ZP, null, E), l.createElement(a.Z, { style: x.details }, l.createElement(m.default, { style: x.icon }), l.createElement(a.Z, null, l.createElement(c.ZP, { style: x.title }, g), l.createElement(c.ZP, null, y)), l.createElement(p.default, { style: x.icon }), l.createElement(a.Z, null, l.createElement(c.ZP, { style: x.title }, b), l.createElement(c.ZP, null, Z)), l.createElement(u.default, { style: x.icon }), l.createElement(a.Z, null, l.createElement(c.ZP, { style: x.title }, w), l.createElement(c.ZP, null, v)))),
                _ = () => l.createElement(a.Z, { style: x.footerContainer }, l.createElement(c.ZP, { align: "center" }, A, " ", l.createElement(c.ZP, { color: "text", link: L, style: x.footerLearnMoreLink, withUnderline: !0 }, C))),
                z = () => l.createElement(c.ZP, { style: x.headline }, f),
                x = r.default.create((e) => ({ details: { display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: e.spaces.space24, gridRowGap: e.spaces.space24, paddingTop: e.spaces.space32 }, footerContainer: { display: "flex", alignItems: "center" }, footerLearnMoreLink: { whiteSpace: "nowrap" }, headline: { fontSize: e.fontSizes.title2 }, icon: { color: e.colors.text, width: e.spaces.space24, height: e.spacesPx.space24 }, image: { width: "100%" }, title: { color: e.colors.text, fontSize: e.fontSizes.headline2, fontWeight: e.fontWeights.medium, paddingBottom: e.spaces.space4 } })),
                S = (e) => {
                    const { actionLabel: t, onAction: n, onClose: a, onSecondaryAction: o, secondaryActionLabel: c } = e,
                        r = (0, h.z)();
                    l.useEffect(() => {
                        r.scribeAction("impression");
                    }, [r]);
                    const s = o
                            ? (e) => {
                                  r.scribeAction("secondary_cta"), o?.(e);
                              }
                            : void 0,
                        d = a
                            ? () => {
                                  r.scribeAction("close"), a();
                              }
                            : void 0;
                    return l.createElement(i.Z, {
                        actionLabel: t,
                        footer: l.createElement(_, null),
                        graphicDisplayMode: "none",
                        headline: l.createElement(z, null),
                        isFullHeightOnMobile: !0,
                        onAction: (e) => {
                            r.scribeAction("primary_cta"), n(e);
                        },
                        onClose: d,
                        onSecondaryAction: s,
                        secondaryActionLabel: c,
                        subtext: l.createElement(P, null),
                        withBottomPadding: !0,
                    });
                };
        },
        890899: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            var l = n(202784),
                a = n(890601),
                o = n(783427),
                c = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M20.29 2.293L18.5 4.081C16.73 2.625 14.47 1.75 12 1.75 6.33 1.75 1.75 6.339 1.75 12c0 2.471.87 4.739 2.33 6.509l-1.79 1.784 1.42 1.414 18-18-1.42-1.414zM9.21 13.377c-.2-.498-.28-1.086-.19-1.725.25-1.769 1.65-2.798 2.89-2.623.41.057.79.242 1.12.525l-3.82 3.823zm5.24-5.245c-.6-.567-1.37-.958-2.26-1.083-2.58-.363-4.79 1.719-5.15 4.325-.18 1.243.08 2.487.68 3.487L5.5 17.086C4.4 15.685 3.75 13.919 3.75 12c0-4.556 3.69-8.25 8.25-8.25 1.91 0 3.68.655 5.08 1.754l-2.63 2.628zM7.2 21.06l1.49-1.497c1.02.442 2.13.687 3.31.687 1.59 0 3.08-.451 4.34-1.233l1.05 1.7c-1.57.972-3.42 1.533-5.39 1.533-1.74 0-3.37-.43-4.8-1.19zm4.07-4.069l4.72-4.722-.03.321c.03 1.145.92 2.122 2.1 2.23.91.083 1.62-.357 1.84-.99.2-.585.35-1.224.35-1.83 0-1.174-.25-2.29-.69-3.301l1.5-1.497c.76 1.432 1.19 3.065 1.19 4.798 0 .901-.21 1.77-.46 2.477-.59 1.731-2.34 2.478-3.91 2.334-1.24-.112-2.29-.729-3-1.626-.87 1.125-2.16 1.847-3.61 1.806z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const r = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.LeaveThisConversation.84a82c5a.js.map
