"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.LeaveThisConversation", "icons/IconNotificationsOff-js"],
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
                C = d().h8dde772,
                L = d().i859a9d4,
                A = (0, o.ju)("https://help.x.com/using-twitter/mentions-and-replies#mention-control"),
                P = () => l.createElement(l.Fragment, null, l.createElement(c.ZP, null, E), l.createElement(a.Z, { style: z.details }, l.createElement(m.default, { style: z.icon }), l.createElement(a.Z, null, l.createElement(c.ZP, { style: z.title }, g), l.createElement(c.ZP, null, y)), l.createElement(p.default, { style: z.icon }), l.createElement(a.Z, null, l.createElement(c.ZP, { style: z.title }, b), l.createElement(c.ZP, null, Z)), l.createElement(u.default, { style: z.icon }), l.createElement(a.Z, null, l.createElement(c.ZP, { style: z.title }, w), l.createElement(c.ZP, null, v)))),
                _ = () => l.createElement(a.Z, { style: z.footerContainer }, l.createElement(c.ZP, { align: "center" }, C, " ", l.createElement(c.ZP, { color: "text", link: A, style: z.footerLearnMoreLink, withUnderline: !0 }, L))),
                x = () => l.createElement(c.ZP, { style: z.headline }, f),
                z = r.default.create((e) => ({ details: { display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: e.spaces.space24, gridRowGap: e.spaces.space24, paddingTop: e.spaces.space32 }, footerContainer: { display: "flex", alignItems: "center" }, footerLearnMoreLink: { whiteSpace: "nowrap" }, headline: { fontSize: e.fontSizes.title2 }, icon: { color: e.colors.text, width: e.spaces.space24, height: e.spacesPx.space24 }, image: { width: "100%" }, title: { color: e.colors.text, fontSize: e.fontSizes.headline2, fontWeight: e.fontWeights.medium, paddingBottom: e.spaces.space4 } })),
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
                        headline: l.createElement(x, null),
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
        165243: (e, t, n) => {
            n.r(t), n.d(t, { default: () => r });
            var l = n(202784),
                a = n(890601),
                o = n(783427),
                c = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M20.29 2.29l-2.34 2.34C16.47 3.01 14.34 2 12 2 7.93 2 4.51 5.02 4 9.05L2.87 18h1.72l-2.3 2.29 1.42 1.42 18-18-1.42-1.42zM6.59 16H5.13l.85-6.7C6.36 6.27 8.94 4 12 4c1.79 0 3.42.78 4.54 2.05L6.59 16zM12 22c-1.57 0-2.98-.73-3.89-1.86l1.42-1.43c.55.78 1.45 1.29 2.47 1.29 1.31 0 2.42-.83 2.83-2H12v-2h6.86l-.74-5.87 1.76-1.76c.05.22.08.44.11.67L21.14 18H16.9c-.46 2.28-2.48 4-4.9 4z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const r = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.LeaveThisConversation.f594f48a.js.map
