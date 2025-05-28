"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.recruitingOrganizationLoader"],
    {
        623701: (e, t, n) => {
            n.r(t), n.d(t, { default: () => S });
            var r = n(351322),
                i = n(807896),
                a = n(202784),
                o = n(325686),
                l = n(688715),
                c = n(952428),
                s = n(366635),
                u = n(731708),
                g = n(530525),
                m = n(872405),
                p = n(155727),
                d = n(823161),
                f = n(392237),
                _ = n(111677),
                y = n.n(_),
                b = n(668214),
                z = n(386619);
            const C = (e, t) => z.Z.select(e, t.entry.content.rest_id),
                v = (0, b.Z)().propsFromState(() => ({ recruitingOrganization: C })),
                h = ({ recruitingOrganization: e }) => {
                    const t = e?.profile?.screen_name,
                        n = t ? (0, l.ju)(`https://x.com/${t}/jobs`) : void 0,
                        r = null !== n;
                    return a.createElement(c.Z, { link: n, style: x.root, withoutInteractiveStyles: !r }, a.createElement(E, { recruitingOrganization: e }, a.createElement(Z, { recruitingOrganization: e })));
                },
                Z = ({ recruitingOrganization: e }) => {
                    if (!e || !e.profile) return null;
                    const t = e?.job_count,
                        { headline: n, is_blue_verified: r, name: i, screen_name: l, verified: c, verified_type: g } = e.profile;
                    return a.createElement(o.Z, { style: x.recruitingOrganizationCell }, a.createElement(o.Z, { style: x.orgInfo }, a.createElement(s.Z, { isBlueVerified: r, isVerified: c, name: i, screenName: l, verifiedType: g }), t ? a.createElement(u.ZP, { color: "gray900", size: "subtext1" }, j.open_jobs({ jobCount: t, tcc_organization_open_job_count: "" })) : null), a.createElement(o.Z, { style: x.headline }, n ? a.createElement(u.ZP, { color: "gray900", size: "subtext1" }, n) : null));
                },
                w = g.Z.createLayoutCache(),
                E = ({ children: e, recruitingOrganization: t }) => a.createElement(m.Z, { avatarCell: a.createElement(O, { recruitingOrganization: t }), avatarCellStyle: x.avatarColumn, cellStyle: x.bodyColumn }, e),
                O = ({ recruitingOrganization: e }) => {
                    const t = e?.profile,
                        n = t?.screen_name,
                        r = t?.profile_image_url_https,
                        o = { "aria-hidden": !0, focusable: !1, imageLayoutCache: w, screenName: n, style: x.avatar, uri: r, shape: "square" };
                    return a.createElement(p.Z.Consumer, null, ({ avatarSize: e }) => a.createElement(d.default, (0, i.Z)({ size: e }, o)));
                },
                j = { open_jobs: y().g566e973 },
                x = f.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, avatar: { display: "block", width: "100%" }, avatarColumn: { justifyContent: "flex-start" }, bodyColumn: { flexGrow: 1 }, userName: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, userDecoration: { flexShrink: 1 }, actionBar: { justifyContent: "end", marginTop: e.spaces.space8 }, recruitingOrganizationCell: {}, orgInfo: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, headline: { gap: e.spaces.space8 } })),
                k = v(a.memo(h)),
                S = r.iH({ component: k }).getHandler();
        },
        386619: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(502909),
                i = n(600823);
            const a = (0, r.ZP)({ namespace: "recruitingOrganizations" }),
                o = i.Z.register(a);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.recruitingOrganizationLoader.5b207daa.js.map
