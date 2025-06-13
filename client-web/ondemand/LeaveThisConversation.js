"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.LeaveThisConversation"],
    {
        265008: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var a = n(202784),
                l = n(111677),
                o = n.n(l),
                c = n(293115),
                i = n(817682);
            const r = o().bb16cc76,
                s = o().j33c9fc6,
                d = ({ onCancel: e, onConfirm: t }) => a.createElement(c.nO, { namespace: { element: "leave_this_conversation_confirmation_sheet" } }, a.createElement(i.Z, { actionLabel: r, onAction: t, onClose: e, onSecondaryAction: e, secondaryActionLabel: s }));
        },
        817682: (e, t, n) => {
            n.d(t, { Z: () => x });
            var a = n(202784),
                l = n(325686),
                o = n(688715),
                c = n(731708),
                i = n(529356),
                r = n(392237),
                s = n(111677),
                d = n.n(s),
                m = n(890899),
                p = n(616894),
                u = n(165243),
                f = n(725516);
            const E = d().aed79c54,
                h = d().h12044a4,
                y = d().f100e566,
                b = d().a0d68f4e,
                g = d().b00255b6,
                Z = d().geea29ee,
                w = d().c54678e8,
                A = d().ga4fa180,
                C = d().h8dde772,
                P = d().i859a9d4,
                _ = (0, o.ju)("https://help.x.com/using-twitter/mentions-and-replies#mention-control"),
                L = () => a.createElement(a.Fragment, null, a.createElement(c.ZP, null, h), a.createElement(l.Z, { style: k.details }, a.createElement(m.default, { style: k.icon }), a.createElement(l.Z, null, a.createElement(c.ZP, { style: k.title }, y), a.createElement(c.ZP, null, b)), a.createElement(p.default, { style: k.icon }), a.createElement(l.Z, null, a.createElement(c.ZP, { style: k.title }, g), a.createElement(c.ZP, null, Z)), a.createElement(u.default, { style: k.icon }), a.createElement(l.Z, null, a.createElement(c.ZP, { style: k.title }, w), a.createElement(c.ZP, null, A)))),
                v = () => a.createElement(l.Z, { style: k.footerContainer }, a.createElement(c.ZP, { align: "center" }, C, " ", a.createElement(c.ZP, { color: "text", link: _, style: k.footerLearnMoreLink, withUnderline: !0 }, P))),
                S = () => a.createElement(c.ZP, { style: k.headline }, E),
                k = r.default.create((e) => ({ details: { display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: e.spaces.space24, gridRowGap: e.spaces.space24, paddingTop: e.spaces.space32 }, footerContainer: { display: "flex", alignItems: "center" }, footerLearnMoreLink: { whiteSpace: "nowrap" }, headline: { fontSize: e.fontSizes.title2 }, icon: { color: e.colors.text, width: e.spaces.space24, height: e.spacesPx.space24 }, image: { width: "100%" }, title: { color: e.colors.text, fontSize: e.fontSizes.headline2, fontWeight: e.fontWeights.medium, paddingBottom: e.spaces.space4 } })),
                x = (e) => {
                    const { actionLabel: t, onAction: n, onClose: l, onSecondaryAction: o, secondaryActionLabel: c } = e,
                        r = (0, f.z)();
                    a.useEffect(() => {
                        r.scribeAction("impression");
                    }, [r]);
                    const s = o
                            ? (e) => {
                                  r.scribeAction("secondary_cta"), o?.(e);
                              }
                            : void 0,
                        d = l
                            ? () => {
                                  r.scribeAction("close"), l();
                              }
                            : void 0;
                    return a.createElement(i.Z, {
                        actionLabel: t,
                        footer: a.createElement(v, null),
                        graphicDisplayMode: "none",
                        headline: a.createElement(S, null),
                        isFullHeightOnMobile: !0,
                        onAction: (e) => {
                            r.scribeAction("primary_cta"), n(e);
                        },
                        onClose: d,
                        onSecondaryAction: s,
                        secondaryActionLabel: c,
                        subtext: a.createElement(L, null),
                        withBottomPadding: !0,
                    });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.LeaveThisConversation.4860fe0a.js.map
