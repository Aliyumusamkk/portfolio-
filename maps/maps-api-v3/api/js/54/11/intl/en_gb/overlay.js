google.maps.__gjsload__('overlay', function(_) {
    var Wx = function(a) {
            this.g = a
        },
        Dpa = function() {},
        Xx = function(a) {
            a.ju = a.ju || new Dpa;
            return a.ju
        },
        Epa = function(a) {
            this.Ea = new _.oj(() => {
                const b = a.ju;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Sr && a.onAdd) a.onAdd();
                        b.Sr = !0;
                        a.draw()
                    }
                } else {
                    if (b.Sr)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Sr = !1
                }
            }, 0)
        },
        Fpa = function(a, b) {
            const c = Xx(a);
            let d = c.Yq;
            d || (d = c.Yq = new Epa(a));
            _.zb(c.Va || [], _.ch);
            var e = c.sb = c.sb || new _.Qla;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.uy = c.uy || new Wx(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.pj(d.Ea);
            c.Va = [_.ah(a, "panes_changed", e), _.ah(f, "zoom_changed", e), _.ah(f, "offset_changed", e), _.ah(b, "projection_changed", e), _.ah(f, "projectioncenterq_changed", e)];
            _.pj(d.Ea);
            b instanceof _.th ? (_.hi(b, "Ox"), _.fi(b, 148440)) : b instanceof _.Bi && (_.hi(b, "Oxs"),
                _.fi(b, 181451))
        },
        Kpa = function(a) {
            if (a) {
                var b = a.getMap();
                if (Gpa(a) !== b && b && b instanceof _.th) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Hpa(b, a, c.overlayLayer) : c.vb.then(({
                        fa: d
                    }) => {
                        const e = new Ipa(b, d);
                        d.Qb(e);
                        c.overlayLayer = e;
                        Jpa(a);
                        Kpa(a)
                    })
                }
            }
        },
        Jpa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.i.ef(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Gpa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Lpa = function(a, b) {
            a.g.get("projection") !=
                b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        };
    _.ua(Wx, _.oh);
    Wx.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.cg(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var Yx = {};
    _.ua(Epa, _.oh);
    Yx.Be = function(a) {
        if (a) {
            var b = a.getMap();
            (Xx(a).ay || null) !== b && (b && Fpa(a, b), Xx(a).ay = b)
        }
    };
    Yx.ef = function(a) {
        const b = Xx(a);
        var c = b.sb;
        c && c.unbindAll();
        (c = b.uy) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Va && _.zb(b.Va, _.ch);
        b.Va = null;
        b.Yq && (b.Yq.Ea.Sc(), b.Yq = null);
        delete Xx(a).ay
    };
    var Zx = {},
        Hpa = class {
            constructor(a, b, c) {
                this.map = a;
                this.g = b;
                this.i = c;
                this.h = !1;
                _.hi(this.map, "Ox");
                _.fi(this.map, 148440);
                c.Be(this)
            }
            draw() {
                this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
                this.g.draw && this.g.draw()
            }
        },
        Ipa = class {
            constructor(a, b) {
                this.l = a;
                this.i = b;
                this.g = null;
                this.h = []
            }
            dispose() {}
            jc(a, b, c, d, e, f, g, k) {
                const m = this.g = this.g || new _.Mt(this.l, this.i, () => {});
                m.jc(a, b, c, d, e, f, g, k);
                for (const q of this.h) Lpa(q, m), q.draw()
            }
            Be(a) {
                this.h.push(a);
                this.g && Lpa(a, this.g);
                this.i.refresh()
            }
            ef(a) {
                _.Ob(this.h,
                    a)
            }
        };
    Zx.Be = Kpa;
    Zx.ef = Jpa;
    _.Ug("overlay", {
        ow: function(a) {
            if (a) {
                (0, Yx.ef)(a);
                (0, Zx.ef)(a);
                var b = a.getMap();
                b && (b instanceof _.th ? (0, Zx.Be)(a) : (0, Yx.Be)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.np(a, {
                Ve: ({
                    event: b
                }) => {
                    _.fo(b.La)
                },
                zd: b => _.$o(b),
                Oj: b => _.ap(b),
                ve: b => _.ap(b),
                Qd: b => _.bp(b)
            }).Hl(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.Zg);
            a.addEventListener("contextmenu", _.Zg);
            a.addEventListener("dblclick", _.Zg);
            a.addEventListener("mousedown", _.Zg);
            a.addEventListener("mousemove", _.Zg);
            a.addEventListener("MSPointerDown",
                _.Zg);
            a.addEventListener("pointerdown", _.Zg);
            a.addEventListener("touchstart", _.Zg);
            a.addEventListener("wheel", _.Zg)
        }
    });
});