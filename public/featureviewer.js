/*! feature-viewer 2017-03-03 */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  function c(a) {
    var b = "length" in a && a.length,
      c = _.type(a);
    return "function" === c || _.isWindow(a)
      ? !1
      : 1 === a.nodeType && b
      ? !0
      : "array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a);
  }
  function d(a, b, c) {
    if (_.isFunction(b))
      return _.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return _.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (ha.test(b)) return _.filter(b, a, c);
      b = _.filter(b, a);
    }
    return _.grep(a, function (a) {
      return U.call(b, a) >= 0 !== c;
    });
  }
  function e(a, b) {
    for (; (a = a[b]) && 1 !== a.nodeType; );
    return a;
  }
  function f(a) {
    var b = (oa[a] = {});
    return (
      _.each(a.match(na) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  function g() {
    Z.removeEventListener("DOMContentLoaded", g, !1),
      a.removeEventListener("load", g, !1),
      _.ready();
  }
  function h() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = _.expando + h.uid++);
  }
  function i(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(ua, "-$1").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : ta.test(c)
              ? _.parseJSON(c)
              : c;
        } catch (e) {}
        sa.set(a, b, c);
      } else c = void 0;
    return c;
  }
  function j() {
    return !0;
  }
  function k() {
    return !1;
  }
  function l() {
    try {
      return Z.activeElement;
    } catch (a) {}
  }
  function m(a, b) {
    return _.nodeName(a, "table") &&
      _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function n(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function o(a) {
    var b = Ka.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function p(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"));
  }
  function q(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        ra.hasData(a) &&
        ((f = ra.access(a)), (g = ra.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c]);
      }
      sa.hasData(a) &&
        ((h = sa.access(a)), (i = _.extend({}, h)), sa.set(b, i));
    }
  }
  function r(a, b) {
    var c = a.getElementsByTagName
      ? a.getElementsByTagName(b || "*")
      : a.querySelectorAll
      ? a.querySelectorAll(b || "*")
      : [];
    return void 0 === b || (b && _.nodeName(a, b)) ? _.merge([a], c) : c;
  }
  function s(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && ya.test(a.type)
      ? (b.checked = a.checked)
      : ("input" === c || "textarea" === c) &&
        (b.defaultValue = a.defaultValue);
  }
  function t(b, c) {
    var d,
      e = _(c.createElement(b)).appendTo(c.body),
      f =
        a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
          ? d.display
          : _.css(e[0], "display");
    return e.detach(), f;
  }
  function u(a) {
    var b = Z,
      c = Oa[a];
    return (
      c ||
        ((c = t(a, b)),
        ("none" !== c && c) ||
          ((Na = (
            Na || _("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = Na[0].contentDocument),
          b.write(),
          b.close(),
          (c = t(a, b)),
          Na.detach()),
        (Oa[a] = c)),
      c
    );
  }
  function v(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || Ra(a)),
      c && (g = c.getPropertyValue(b) || c[b]),
      c &&
        ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)),
        Qa.test(g) &&
          Pa.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function w(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  function x(a, b) {
    if (b in a) return b;
    for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--; )
      if (((b = Xa[e] + c), b in a)) return b;
    return d;
  }
  function y(a, b, c) {
    var d = Ta.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function z(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += _.css(a, c + wa[f], !0, e)),
        d
          ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)),
            "margin" !== c &&
              (g -= _.css(a, "border" + wa[f] + "Width", !0, e)))
          : ((g += _.css(a, "padding" + wa[f], !0, e)),
            "padding" !== c &&
              (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
    return g;
  }
  function A(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ra(a),
      g = "border-box" === _.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = v(a, b, f)), (0 > e || null == e) && (e = a.style[b]), Qa.test(e))
      )
        return e;
      (d = g && (Y.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function B(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = ra.get(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                xa(d) &&
                (f[g] = ra.access(d, "olddisplay", u(d.nodeName))))
            : ((e = xa(d)),
              ("none" === c && e) ||
                ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function C(a, b, c, d, e) {
    return new C.prototype.init(a, b, c, d, e);
  }
  function D() {
    return (
      setTimeout(function () {
        Ya = void 0;
      }),
      (Ya = _.now())
    );
  }
  function E(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      (c = wa[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function F(a, b, c) {
    for (
      var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function G(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = {},
      n = a.style,
      o = a.nodeType && xa(a),
      p = ra.get(a, "fxshow");
    c.queue ||
      ((h = _._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      l.always(function () {
        l.always(function () {
          h.unqueued--, _.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [n.overflow, n.overflowX, n.overflowY]),
        (j = _.css(a, "display")),
        (k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j),
        "inline" === k &&
          "none" === _.css(a, "float") &&
          (n.display = "inline-block")),
      c.overflow &&
        ((n.overflow = "hidden"),
        l.always(function () {
          (n.overflow = c.overflow[0]),
            (n.overflowX = c.overflow[1]),
            (n.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), $a.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (o ? "hide" : "show"))
        ) {
          if ("show" !== e || !p || void 0 === p[d]) continue;
          o = !0;
        }
        m[d] = (p && p[d]) || _.style(a, d);
      } else j = void 0;
    if (_.isEmptyObject(m))
      "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
    else {
      p ? "hidden" in p && (o = p.hidden) : (p = ra.access(a, "fxshow", {})),
        f && (p.hidden = !o),
        o
          ? _(a).show()
          : l.done(function () {
              _(a).hide();
            }),
        l.done(function () {
          var b;
          ra.remove(a, "fxshow");
          for (b in m) _.style(a, b, m[b]);
        });
      for (d in m)
        (g = F(o ? p[d] : 0, d, l)),
          d in p ||
            ((p[d] = g.start),
            o &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function H(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = _.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        _.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = _.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function I(a, b, c) {
    var d,
      e,
      f = 0,
      g = bb.length,
      h = _.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = Ya || D(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: _.extend({}, b),
        opts: _.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Ya || D(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = _.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    for (H(k, j.opts.specialEasing); g > f; f++)
      if ((d = bb[f].call(j, a, k, j.opts))) return d;
    return (
      _.map(k, F, j),
      _.isFunction(j.opts.start) && j.opts.start.call(a, j),
      _.fx.timer(_.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  function J(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(na) || [];
      if (_.isFunction(c))
        for (; (d = f[e++]); )
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function K(a, b, c, d) {
    function e(h) {
      var i;
      return (
        (f[h] = !0),
        _.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || g || f[j]
            ? g
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), e(j), !1);
        }),
        i
      );
    }
    var f = {},
      g = a === tb;
    return e(b.dataTypes[0]) || (!f["*"] && e("*"));
  }
  function L(a, b) {
    var c,
      d,
      e = _.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && _.extend(!0, a, d), a;
  }
  function M(a, b, c) {
    for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function N(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    for (f = k.shift(); f; )
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  function O(a, b, c, d) {
    var e;
    if (_.isArray(b))
      _.each(b, function (b, e) {
        c || yb.test(a)
          ? d(a, e)
          : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== _.type(b)) d(a, b);
    else for (e in b) O(a + "[" + e + "]", b[e], c, d);
  }
  function P(a) {
    return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  var Q = [],
    R = Q.slice,
    S = Q.concat,
    T = Q.push,
    U = Q.indexOf,
    V = {},
    W = V.toString,
    X = V.hasOwnProperty,
    Y = {},
    Z = a.document,
    $ = "2.1.4",
    _ = function (a, b) {
      return new _.fn.init(a, b);
    },
    aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ba = /^-ms-/,
    ca = /-([\da-z])/gi,
    da = function (a, b) {
      return b.toUpperCase();
    };
  (_.fn = _.prototype =
    {
      jquery: $,
      constructor: _,
      selector: "",
      length: 0,
      toArray: function () {
        return R.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : R.call(this);
      },
      pushStack: function (a) {
        var b = _.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a, b) {
        return _.each(this, a, b);
      },
      map: function (a) {
        return this.pushStack(
          _.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(R.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: T,
      sort: Q.sort,
      splice: Q.splice,
    }),
    (_.extend = _.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || _.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (_.isPlainObject(d) || (e = _.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && _.isArray(c) ? c : []))
                        : (f = c && _.isPlainObject(c) ? c : {}),
                      (g[b] = _.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    _.extend({
      expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === _.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        return !_.isArray(a) && a - parseFloat(a) + 1 >= 0;
      },
      isPlainObject: function (a) {
        return "object" !== _.type(a) || a.nodeType || _.isWindow(a)
          ? !1
          : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf")
          ? !1
          : !0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? V[W.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        var b,
          c = eval;
        (a = _.trim(a)),
          a &&
            (1 === a.indexOf("use strict")
              ? ((b = Z.createElement("script")),
                (b.text = a),
                Z.head.appendChild(b).parentNode.removeChild(b))
              : c(a));
      },
      camelCase: function (a) {
        return a.replace(ba, "ms-").replace(ca, da);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b, d) {
        var e,
          f = 0,
          g = a.length,
          h = c(a);
        if (d) {
          if (h) for (; g > f && ((e = b.apply(a[f], d)), e !== !1); f++);
          else for (f in a) if (((e = b.apply(a[f], d)), e === !1)) break;
        } else if (h)
          for (; g > f && ((e = b.call(a[f], f, a[f])), e !== !1); f++);
        else for (f in a) if (((e = b.call(a[f], f, a[f])), e === !1)) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(aa, "");
      },
      makeArray: function (a, b) {
        var d = b || [];
        return (
          null != a &&
            (c(Object(a))
              ? _.merge(d, "string" == typeof a ? [a] : a)
              : T.call(d, a)),
          d
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : U.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, d) {
        var e,
          f = 0,
          g = a.length,
          h = c(a),
          i = [];
        if (h) for (; g > f; f++) (e = b(a[f], f, d)), null != e && i.push(e);
        else for (f in a) (e = b(a[f], f, d)), null != e && i.push(e);
        return S.apply([], i);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, e;
        return (
          "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          _.isFunction(a)
            ? ((d = R.call(arguments, 2)),
              (e = function () {
                return a.apply(b || this, d.concat(R.call(arguments)));
              }),
              (e.guid = a.guid = a.guid || _.guid++),
              e)
            : void 0
        );
      },
      now: Date.now,
      support: Y,
    }),
    _.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (a, b) {
        V["[object " + b + "]"] = b.toLowerCase();
      }
    );
  var ea = (function (a) {
    function b(a, b, c, d) {
      var e, f, g, h, i, j, l, n, o, p;
      if (
        ((b ? b.ownerDocument || b : O) !== G && F(b),
        (b = b || G),
        (c = c || []),
        (h = b.nodeType),
        "string" != typeof a || !a || (1 !== h && 9 !== h && 11 !== h))
      )
        return c;
      if (!d && I) {
        if (11 !== h && (e = sa.exec(a)))
          if ((g = e[1])) {
            if (9 === h) {
              if (((f = b.getElementById(g)), !f || !f.parentNode)) return c;
              if (f.id === g) return c.push(f), c;
            } else if (
              b.ownerDocument &&
              (f = b.ownerDocument.getElementById(g)) &&
              M(b, f) &&
              f.id === g
            )
              return c.push(f), c;
          } else {
            if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
            if ((g = e[3]) && v.getElementsByClassName)
              return $.apply(c, b.getElementsByClassName(g)), c;
          }
        if (v.qsa && (!J || !J.test(a))) {
          if (
            ((n = l = N),
            (o = b),
            (p = 1 !== h && a),
            1 === h && "object" !== b.nodeName.toLowerCase())
          ) {
            for (
              j = z(a),
                (l = b.getAttribute("id"))
                  ? (n = l.replace(ua, "\\$&"))
                  : b.setAttribute("id", n),
                n = "[id='" + n + "'] ",
                i = j.length;
              i--;

            )
              j[i] = n + m(j[i]);
            (o = (ta.test(a) && k(b.parentNode)) || b), (p = j.join(","));
          }
          if (p)
            try {
              return $.apply(c, o.querySelectorAll(p)), c;
            } catch (q) {
            } finally {
              l || b.removeAttribute("id");
            }
        }
      }
      return B(a.replace(ia, "$1"), b, c, d);
    }
    function c() {
      function a(c, d) {
        return (
          b.push(c + " ") > w.cacheLength && delete a[b.shift()],
          (a[c + " "] = d)
        );
      }
      var b = [];
      return a;
    }
    function d(a) {
      return (a[N] = !0), a;
    }
    function e(a) {
      var b = G.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function f(a, b) {
      for (var c = a.split("|"), d = a.length; d--; ) w.attrHandle[c[d]] = b;
    }
    function g(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || V) - (~a.sourceIndex || V);
      if (d) return d;
      if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function h(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function i(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function j(a) {
      return d(function (b) {
        return (
          (b = +b),
          d(function (c, d) {
            for (var e, f = a([], c.length, b), g = f.length; g--; )
              c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function k(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    function l() {}
    function m(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function n(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = Q++;
      return b.first
        ? function (b, c, f) {
            for (; (b = b[d]); ) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j = [P, f];
            if (g) {
              for (; (b = b[d]); )
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              for (; (b = b[d]); )
                if (1 === b.nodeType || e) {
                  if (
                    ((i = b[N] || (b[N] = {})),
                    (h = i[d]) && h[0] === P && h[1] === f)
                  )
                    return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function o(a) {
      return a.length > 1
        ? function (b, c, d) {
            for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function p(a, c, d) {
      for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
      return d;
    }
    function q(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function r(a, b, c, e, f, g) {
      return (
        e && !e[N] && (e = r(e)),
        f && !f[N] && (f = r(f, g)),
        d(function (d, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            r = d || p(b || "*", h.nodeType ? [h] : h, []),
            s = !a || (!d && b) ? r : q(r, m, a, h, i),
            t = c ? (f || (d ? a : o || e) ? [] : g) : s;
          if ((c && c(s, t, h, i), e))
            for (j = q(t, n), e(j, [], h, i), k = j.length; k--; )
              (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
          if (d) {
            if (f || a) {
              if (f) {
                for (j = [], k = t.length; k--; )
                  (l = t[k]) && j.push((s[k] = l));
                f(null, (t = []), j, i);
              }
              for (k = t.length; k--; )
                (l = t[k]) &&
                  (j = f ? aa(d, l) : m[k]) > -1 &&
                  (d[j] = !(g[j] = l));
            }
          } else (t = q(t === g ? t.splice(o, t.length) : t)), f ? f(null, g, t, i) : $.apply(g, t);
        })
      );
    }
    function s(a) {
      for (
        var b,
          c,
          d,
          e = a.length,
          f = w.relative[a[0].type],
          g = f || w.relative[" "],
          h = f ? 1 : 0,
          i = n(
            function (a) {
              return a === b;
            },
            g,
            !0
          ),
          j = n(
            function (a) {
              return aa(b, a) > -1;
            },
            g,
            !0
          ),
          k = [
            function (a, c, d) {
              var e =
                (!f && (d || c !== C)) ||
                ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
              return (b = null), e;
            },
          ];
        e > h;
        h++
      )
        if ((c = w.relative[a[h].type])) k = [n(o(k), c)];
        else {
          if (((c = w.filter[a[h].type].apply(null, a[h].matches)), c[N])) {
            for (d = ++h; e > d && !w.relative[a[d].type]; d++);
            return r(
              h > 1 && o(k),
              h > 1 &&
                m(
                  a
                    .slice(0, h - 1)
                    .concat({ value: " " === a[h - 2].type ? "*" : "" })
                ).replace(ia, "$1"),
              c,
              d > h && s(a.slice(h, d)),
              e > d && s((a = a.slice(d))),
              e > d && m(a)
            );
          }
          k.push(c);
        }
      return o(k);
    }
    function t(a, c) {
      var e = c.length > 0,
        f = a.length > 0,
        g = function (d, g, h, i, j) {
          var k,
            l,
            m,
            n = 0,
            o = "0",
            p = d && [],
            r = [],
            s = C,
            t = d || (f && w.find.TAG("*", j)),
            u = (P += null == s ? 1 : Math.random() || 0.1),
            v = t.length;
          for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
            if (f && k) {
              for (l = 0; (m = a[l++]); )
                if (m(k, g, h)) {
                  i.push(k);
                  break;
                }
              j && (P = u);
            }
            e && ((k = !m && k) && n--, d && p.push(k));
          }
          if (((n += o), e && o !== n)) {
            for (l = 0; (m = c[l++]); ) m(p, r, g, h);
            if (d) {
              if (n > 0) for (; o--; ) p[o] || r[o] || (r[o] = Y.call(i));
              r = q(r);
            }
            $.apply(i, r),
              j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
          }
          return j && ((P = u), (C = s)), p;
        };
      return e ? d(g) : g;
    }
    var u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N = "sizzle" + 1 * new Date(),
      O = a.document,
      P = 0,
      Q = 0,
      R = c(),
      S = c(),
      T = c(),
      U = function (a, b) {
        return a === b && (E = !0), 0;
      },
      V = 1 << 31,
      W = {}.hasOwnProperty,
      X = [],
      Y = X.pop,
      Z = X.push,
      $ = X.push,
      _ = X.slice,
      aa = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      ba =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ca = "[\\x20\\t\\r\\n\\f]",
      da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ea = da.replace("w", "w#"),
      fa =
        "\\[" +
        ca +
        "*(" +
        da +
        ")(?:" +
        ca +
        "*([*^$|!~]?=)" +
        ca +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        ea +
        "))|)" +
        ca +
        "*\\]",
      ga =
        ":(" +
        da +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        fa +
        ")*)|.*)\\)|)",
      ha = new RegExp(ca + "+", "g"),
      ia = new RegExp(
        "^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$",
        "g"
      ),
      ja = new RegExp("^" + ca + "*," + ca + "*"),
      ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
      la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
      ma = new RegExp(ga),
      na = new RegExp("^" + ea + "$"),
      oa = {
        ID: new RegExp("^#(" + da + ")"),
        CLASS: new RegExp("^\\.(" + da + ")"),
        TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + fa),
        PSEUDO: new RegExp("^" + ga),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ca +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ca +
            "*(?:([+-]|)" +
            ca +
            "*(\\d+)|))" +
            ca +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + ba + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ca +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ca +
            "*((?:-\\d)?\\d*)" +
            ca +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      pa = /^(?:input|select|textarea|button)$/i,
      qa = /^h\d$/i,
      ra = /^[^{]+\{\s*\[native \w/,
      sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ta = /[+~]/,
      ua = /'|\\/g,
      va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
      wa = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      xa = function () {
        F();
      };
    try {
      $.apply((X = _.call(O.childNodes)), O.childNodes),
        X[O.childNodes.length].nodeType;
    } catch (ya) {
      $ = {
        apply: X.length
          ? function (a, b) {
              Z.apply(a, _.call(b));
            }
          : function (a, b) {
              for (var c = a.length, d = 0; (a[c++] = b[d++]); );
              a.length = c - 1;
            },
      };
    }
    (v = b.support = {}),
      (y = b.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (F = b.setDocument =
        function (a) {
          var b,
            c,
            d = a ? a.ownerDocument || a : O;
          return d !== G && 9 === d.nodeType && d.documentElement
            ? ((G = d),
              (H = d.documentElement),
              (c = d.defaultView),
              c &&
                c !== c.top &&
                (c.addEventListener
                  ? c.addEventListener("unload", xa, !1)
                  : c.attachEvent && c.attachEvent("onunload", xa)),
              (I = !y(d)),
              (v.attributes = e(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (v.getElementsByTagName = e(function (a) {
                return (
                  a.appendChild(d.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (v.getElementsByClassName = ra.test(d.getElementsByClassName)),
              (v.getById = e(function (a) {
                return (
                  (H.appendChild(a).id = N),
                  !d.getElementsByName || !d.getElementsByName(N).length
                );
              })),
              v.getById
                ? ((w.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && I) {
                      var c = b.getElementById(a);
                      return c && c.parentNode ? [c] : [];
                    }
                  }),
                  (w.filter.ID = function (a) {
                    var b = a.replace(va, wa);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete w.find.ID,
                  (w.filter.ID = function (a) {
                    var b = a.replace(va, wa);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (w.find.TAG = v.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : v.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (w.find.CLASS =
                v.getElementsByClassName &&
                function (a, b) {
                  return I ? b.getElementsByClassName(a) : void 0;
                }),
              (K = []),
              (J = []),
              (v.qsa = ra.test(d.querySelectorAll)) &&
                (e(function (a) {
                  (H.appendChild(a).innerHTML =
                    "<a id='" +
                    N +
                    "'></a><select id='" +
                    N +
                    "-\f]' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                    a.querySelectorAll("[id~=" + N + "-]").length ||
                      J.push("~="),
                    a.querySelectorAll(":checked").length || J.push(":checked"),
                    a.querySelectorAll("a#" + N + "+*").length ||
                      J.push(".#.+[+~]");
                }),
                e(function (a) {
                  var b = d.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      J.push("name" + ca + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      J.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    J.push(",.*:");
                })),
              (v.matchesSelector = ra.test(
                (L =
                  H.matches ||
                  H.webkitMatchesSelector ||
                  H.mozMatchesSelector ||
                  H.oMatchesSelector ||
                  H.msMatchesSelector)
              )) &&
                e(function (a) {
                  (v.disconnectedMatch = L.call(a, "div")),
                    L.call(a, "[s!='']:x"),
                    K.push("!=", ga);
                }),
              (J = J.length && new RegExp(J.join("|"))),
              (K = K.length && new RegExp(K.join("|"))),
              (b = ra.test(H.compareDocumentPosition)),
              (M =
                b || ra.test(H.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b)
                        for (; (b = b.parentNode); ) if (b === a) return !0;
                      return !1;
                    }),
              (U = b
                ? function (a, b) {
                    if (a === b) return (E = !0), 0;
                    var c =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c
                      ? c
                      : ((c =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & c ||
                        (!v.sortDetached && b.compareDocumentPosition(a) === c)
                          ? a === d || (a.ownerDocument === O && M(O, a))
                            ? -1
                            : b === d || (b.ownerDocument === O && M(O, b))
                            ? 1
                            : D
                            ? aa(D, a) - aa(D, b)
                            : 0
                          : 4 & c
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (E = !0), 0;
                    var c,
                      e = 0,
                      f = a.parentNode,
                      h = b.parentNode,
                      i = [a],
                      j = [b];
                    if (!f || !h)
                      return a === d
                        ? -1
                        : b === d
                        ? 1
                        : f
                        ? -1
                        : h
                        ? 1
                        : D
                        ? aa(D, a) - aa(D, b)
                        : 0;
                    if (f === h) return g(a, b);
                    for (c = a; (c = c.parentNode); ) i.unshift(c);
                    for (c = b; (c = c.parentNode); ) j.unshift(c);
                    for (; i[e] === j[e]; ) e++;
                    return e
                      ? g(i[e], j[e])
                      : i[e] === O
                      ? -1
                      : j[e] === O
                      ? 1
                      : 0;
                  }),
              d)
            : G;
        }),
      (b.matches = function (a, c) {
        return b(a, null, null, c);
      }),
      (b.matchesSelector = function (a, c) {
        if (
          ((a.ownerDocument || a) !== G && F(a),
          (c = c.replace(la, "='$1']")),
          v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c)))
        )
          try {
            var d = L.call(a, c);
            if (
              d ||
              v.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return b(c, G, null, [a]).length > 0;
      }),
      (b.contains = function (a, b) {
        return (a.ownerDocument || a) !== G && F(a), M(a, b);
      }),
      (b.attr = function (a, b) {
        (a.ownerDocument || a) !== G && F(a);
        var c = w.attrHandle[b.toLowerCase()],
          d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
        return void 0 !== d
          ? d
          : v.attributes || !I
          ? a.getAttribute(b)
          : (d = a.getAttributeNode(b)) && d.specified
          ? d.value
          : null;
      }),
      (b.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (b.uniqueSort = function (a) {
        var b,
          c = [],
          d = 0,
          e = 0;
        if (
          ((E = !v.detectDuplicates),
          (D = !v.sortStable && a.slice(0)),
          a.sort(U),
          E)
        ) {
          for (; (b = a[e++]); ) b === a[e] && (d = c.push(e));
          for (; d--; ) a.splice(c[d], 1);
        }
        return (D = null), a;
      }),
      (x = b.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            e = a.nodeType;
          if (e) {
            if (1 === e || 9 === e || 11 === e) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
            } else if (3 === e || 4 === e) return a.nodeValue;
          } else for (; (b = a[d++]); ) c += x(b);
          return c;
        }),
      (w = b.selectors =
        {
          cacheLength: 50,
          createPseudo: d,
          match: oa,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(va, wa)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || b.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && b.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return oa.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      ma.test(c) &&
                      (b = z(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(va, wa).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = R[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) &&
                  R(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, c, d) {
              return function (e) {
                var f = b.attr(e, a);
                return null == f
                  ? "!=" === c
                  : c
                  ? ((f += ""),
                    "=" === c
                      ? f === d
                      : "!=" === c
                      ? f !== d
                      : "^=" === c
                      ? d && 0 === f.indexOf(d)
                      : "*=" === c
                      ? d && f.indexOf(d) > -1
                      : "$=" === c
                      ? d && f.slice(-d.length) === d
                      : "~=" === c
                      ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1
                      : "|=" === c
                      ? f === d || f.slice(0, d.length + 1) === d + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h;
                    if (q) {
                      if (f) {
                        for (; p; ) {
                          for (l = b; (l = l[p]); )
                            if (
                              h
                                ? l.nodeName.toLowerCase() === r
                                : 1 === l.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        for (
                          k = q[N] || (q[N] = {}),
                            j = k[a] || [],
                            n = j[0] === P && j[1],
                            m = j[0] === P && j[2],
                            l = n && q.childNodes[n];
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop());

                        )
                          if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [P, n, m];
                            break;
                          }
                      } else if (
                        s &&
                        (j = (b[N] || (b[N] = {}))[a]) &&
                        j[0] === P
                      )
                        m = j[1];
                      else
                        for (
                          ;
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop()) &&
                          ((h
                            ? l.nodeName.toLowerCase() !== r
                            : 1 !== l.nodeType) ||
                            !++m ||
                            (s && ((l[N] || (l[N] = {}))[a] = [P, m]),
                            l !== b));

                        );
                      return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, c) {
              var e,
                f =
                  w.pseudos[a] ||
                  w.setFilters[a.toLowerCase()] ||
                  b.error("unsupported pseudo: " + a);
              return f[N]
                ? f(c)
                : f.length > 1
                ? ((e = [a, a, "", c]),
                  w.setFilters.hasOwnProperty(a.toLowerCase())
                    ? d(function (a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; )
                          (d = aa(a, e[g])), (a[d] = !(b[d] = e[g]));
                      })
                    : function (a) {
                        return f(a, 0, e);
                      })
                : f;
            },
          },
          pseudos: {
            not: d(function (a) {
              var b = [],
                c = [],
                e = A(a.replace(ia, "$1"));
              return e[N]
                ? d(function (a, b, c, d) {
                    for (var f, g = e(a, null, d, []), h = a.length; h--; )
                      (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, d, f) {
                    return (
                      (b[0] = a), e(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: d(function (a) {
              return function (c) {
                return b(a, c).length > 0;
              };
            }),
            contains: d(function (a) {
              return (
                (a = a.replace(va, wa)),
                function (b) {
                  return (b.textContent || b.innerText || x(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: d(function (a) {
              return (
                na.test(a || "") || b.error("unsupported lang: " + a),
                (a = a.replace(va, wa).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = I
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === H;
            },
            focus: function (a) {
              return (
                a === G.activeElement &&
                (!G.hasFocus || G.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !w.pseudos.empty(a);
            },
            header: function (a) {
              return qa.test(a.nodeName);
            },
            input: function (a) {
              return pa.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: j(function () {
              return [0];
            }),
            last: j(function (a, b) {
              return [b - 1];
            }),
            eq: j(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: j(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: j(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: j(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: j(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (w.pseudos.nth = w.pseudos.eq);
    for (u in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      w.pseudos[u] = h(u);
    for (u in { submit: !0, reset: !0 }) w.pseudos[u] = i(u);
    return (
      (l.prototype = w.filters = w.pseudos),
      (w.setFilters = new l()),
      (z = b.tokenize =
        function (a, c) {
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = S[a + " "];
          if (k) return c ? 0 : k.slice(0);
          for (h = a, i = [], j = w.preFilter; h; ) {
            (!d || (e = ja.exec(h))) &&
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (d = !1),
              (e = ka.exec(h)) &&
                ((d = e.shift()),
                f.push({ value: d, type: e[0].replace(ia, " ") }),
                (h = h.slice(d.length)));
            for (g in w.filter)
              !(e = oa[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((d = e.shift()),
                f.push({ value: d, type: g, matches: e }),
                (h = h.slice(d.length)));
            if (!d) break;
          }
          return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
        }),
      (A = b.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = T[a + " "];
          if (!f) {
            for (b || (b = z(a)), c = b.length; c--; )
              (f = s(b[c])), f[N] ? d.push(f) : e.push(f);
            (f = T(a, t(e, d))), (f.selector = a);
          }
          return f;
        }),
      (B = b.select =
        function (a, b, c, d) {
          var e,
            f,
            g,
            h,
            i,
            j = "function" == typeof a && a,
            l = !d && z((a = j.selector || a));
          if (((c = c || []), 1 === l.length)) {
            if (
              ((f = l[0] = l[0].slice(0)),
              f.length > 2 &&
                "ID" === (g = f[0]).type &&
                v.getById &&
                9 === b.nodeType &&
                I &&
                w.relative[f[1].type])
            ) {
              if (
                ((b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0]),
                !b)
              )
                return c;
              j && (b = b.parentNode), (a = a.slice(f.shift().value.length));
            }
            for (
              e = oa.needsContext.test(a) ? 0 : f.length;
              e-- && ((g = f[e]), !w.relative[(h = g.type)]);

            )
              if (
                (i = w.find[h]) &&
                (d = i(
                  g.matches[0].replace(va, wa),
                  (ta.test(f[0].type) && k(b.parentNode)) || b
                ))
              ) {
                if ((f.splice(e, 1), (a = d.length && m(f)), !a))
                  return $.apply(c, d), c;
                break;
              }
          }
          return (
            (j || A(a, l))(d, b, !I, c, (ta.test(a) && k(b.parentNode)) || b), c
          );
        }),
      (v.sortStable = N.split("").sort(U).join("") === N),
      (v.detectDuplicates = !!E),
      F(),
      (v.sortDetached = e(function (a) {
        return 1 & a.compareDocumentPosition(G.createElement("div"));
      })),
      e(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        f("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (v.attributes &&
        e(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        f("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      e(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        f(ba, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      b
    );
  })(a);
  (_.find = ea),
    (_.expr = ea.selectors),
    (_.expr[":"] = _.expr.pseudos),
    (_.unique = ea.uniqueSort),
    (_.text = ea.getText),
    (_.isXMLDoc = ea.isXML),
    (_.contains = ea.contains);
  var fa = _.expr.match.needsContext,
    ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ha = /^.[^:#\[\.,]*$/;
  (_.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? _.find.matchesSelector(d, a)
          ? [d]
          : []
        : _.find.matches(
            a,
            _.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    _.fn.extend({
      find: function (a) {
        var b,
          c = this.length,
          d = [],
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            _(a).filter(function () {
              for (b = 0; c > b; b++) if (_.contains(e[b], this)) return !0;
            })
          );
        for (b = 0; c > b; b++) _.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? _.unique(d) : d)),
          (d.selector = this.selector ? this.selector + " " + a : a),
          d
        );
      },
      filter: function (a) {
        return this.pushStack(d(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(d(this, a || [], !0));
      },
      is: function (a) {
        return !!d(
          this,
          "string" == typeof a && fa.test(a) ? _(a) : a || [],
          !1
        ).length;
      },
    });
  var ia,
    ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ka = (_.fn.init = function (a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (
          ((c =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : ja.exec(a)),
          !c || (!c[1] && b))
        )
          return !b || b.jquery
            ? (b || ia).find(a)
            : this.constructor(b).find(a);
        if (c[1]) {
          if (
            ((b = b instanceof _ ? b[0] : b),
            _.merge(
              this,
              _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)
            ),
            ga.test(c[1]) && _.isPlainObject(b))
          )
            for (c in b)
              _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        return (
          (d = Z.getElementById(c[2])),
          d && d.parentNode && ((this.length = 1), (this[0] = d)),
          (this.context = Z),
          (this.selector = a),
          this
        );
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : _.isFunction(a)
        ? "undefined" != typeof ia.ready
          ? ia.ready(a)
          : a(_)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          _.makeArray(a, this));
    });
  (ka.prototype = _.fn), (ia = _(Z));
  var la = /^(?:parents|prev(?:Until|All))/,
    ma = { children: !0, contents: !0, next: !0, prev: !0 };
  _.extend({
    dir: function (a, b, c) {
      for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
        if (1 === a.nodeType) {
          if (e && _(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
  }),
    _.fn.extend({
      has: function (a) {
        var b = _(a, this),
          c = b.length;
        return this.filter(function () {
          for (var a = 0; c > a; a++) if (_.contains(this, b[a])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g =
              fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && _.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? _.unique(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? U.call(_(a), this[0])
            : U.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(_.unique(_.merge(this.get(), _(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    }),
    _.each(
      {
        parent: function (a) {
          var b = a.parentNode;
          return b && 11 !== b.nodeType ? b : null;
        },
        parents: function (a) {
          return _.dir(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
          return _.dir(a, "parentNode", c);
        },
        next: function (a) {
          return e(a, "nextSibling");
        },
        prev: function (a) {
          return e(a, "previousSibling");
        },
        nextAll: function (a) {
          return _.dir(a, "nextSibling");
        },
        prevAll: function (a) {
          return _.dir(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
          return _.dir(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
          return _.dir(a, "previousSibling", c);
        },
        siblings: function (a) {
          return _.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return _.sibling(a.firstChild);
        },
        contents: function (a) {
          return a.contentDocument || _.merge([], a.childNodes);
        },
      },
      function (a, b) {
        _.fn[a] = function (c, d) {
          var e = _.map(this, b, c);
          return (
            "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = _.filter(d, e)),
            this.length > 1 &&
              (ma[a] || _.unique(e), la.test(a) && e.reverse()),
            this.pushStack(e)
          );
        };
      }
    );
  var na = /\S+/g,
    oa = {};
  (_.Callbacks = function (a) {
    a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
    var b,
      c,
      d,
      e,
      g,
      h,
      i = [],
      j = !a.once && [],
      k = function (f) {
        for (
          b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0;
          i && g > h;
          h++
        )
          if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
            b = !1;
            break;
          }
        (d = !1),
          i && (j ? j.length && k(j.shift()) : b ? (i = []) : l.disable());
      },
      l = {
        add: function () {
          if (i) {
            var c = i.length;
            !(function f(b) {
              _.each(b, function (b, c) {
                var d = _.type(c);
                "function" === d
                  ? (a.unique && l.has(c)) || i.push(c)
                  : c && c.length && "string" !== d && f(c);
              });
            })(arguments),
              d ? (g = i.length) : b && ((e = c), k(b));
          }
          return this;
        },
        remove: function () {
          return (
            i &&
              _.each(arguments, function (a, b) {
                for (var c; (c = _.inArray(b, i, c)) > -1; )
                  i.splice(c, 1), d && (g >= c && g--, h >= c && h--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? _.inArray(a, i) > -1 : !(!i || !i.length);
        },
        empty: function () {
          return (i = []), (g = 0), this;
        },
        disable: function () {
          return (i = j = b = void 0), this;
        },
        disabled: function () {
          return !i;
        },
        lock: function () {
          return (j = void 0), b || l.disable(), this;
        },
        locked: function () {
          return !j;
        },
        fireWith: function (a, b) {
          return (
            !i ||
              (c && !j) ||
              ((b = b || []),
              (b = [a, b.slice ? b.slice() : b]),
              d ? j.push(b) : k(b)),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!c;
        },
      };
    return l;
  }),
    _.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", _.Callbacks("once memory"), "resolved"],
            ["reject", "fail", _.Callbacks("once memory"), "rejected"],
            ["notify", "progress", _.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return _.Deferred(function (c) {
                _.each(b, function (b, f) {
                  var g = _.isFunction(a[b]) && a[b];
                  e[f[1]](function () {
                    var a = g && g.apply(this, arguments);
                    a && _.isFunction(a.promise)
                      ? a
                          .promise()
                          .done(c.resolve)
                          .fail(c.reject)
                          .progress(c.notify)
                      : c[f[0] + "With"](
                          this === d ? c.promise() : this,
                          g ? [a] : arguments
                        );
                  });
                }),
                  (a = null);
              }).promise();
            },
            promise: function (a) {
              return null != a ? _.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          _.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b,
          c,
          d,
          e = 0,
          f = R.call(arguments),
          g = f.length,
          h = 1 !== g || (a && _.isFunction(a.promise)) ? g : 0,
          i = 1 === h ? a : _.Deferred(),
          j = function (a, c, d) {
            return function (e) {
              (c[a] = this),
                (d[a] = arguments.length > 1 ? R.call(arguments) : e),
                d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
            };
          };
        if (g > 1)
          for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)
            f[e] && _.isFunction(f[e].promise)
              ? f[e]
                  .promise()
                  .done(j(e, d, f))
                  .fail(i.reject)
                  .progress(j(e, c, b))
              : --h;
        return h || i.resolveWith(d, f), i.promise();
      },
    });
  var pa;
  (_.fn.ready = function (a) {
    return _.ready.promise().done(a), this;
  }),
    _.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? _.readyWait++ : _.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --_.readyWait : _.isReady) ||
          ((_.isReady = !0),
          (a !== !0 && --_.readyWait > 0) ||
            (pa.resolveWith(Z, [_]),
            _.fn.triggerHandler &&
              (_(Z).triggerHandler("ready"), _(Z).off("ready"))));
      },
    }),
    (_.ready.promise = function (b) {
      return (
        pa ||
          ((pa = _.Deferred()),
          "complete" === Z.readyState
            ? setTimeout(_.ready)
            : (Z.addEventListener("DOMContentLoaded", g, !1),
              a.addEventListener("load", g, !1))),
        pa.promise(b)
      );
    }),
    _.ready.promise();
  var qa = (_.access = function (a, b, c, d, e, f, g) {
    var h = 0,
      i = a.length,
      j = null == c;
    if ("object" === _.type(c)) {
      e = !0;
      for (h in c) _.access(a, b, h, c[h], !0, f, g);
    } else if (
      void 0 !== d &&
      ((e = !0),
      _.isFunction(d) || (g = !0),
      j &&
        (g
          ? (b.call(a, d), (b = null))
          : ((j = b),
            (b = function (a, b, c) {
              return j.call(_(a), c);
            }))),
      b)
    )
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  });
  (_.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  }),
    (h.uid = 1),
    (h.accepts = _.acceptData),
    (h.prototype = {
      key: function (a) {
        if (!h.accepts(a)) return 0;
        var b = {},
          c = a[this.expando];
        if (!c) {
          c = h.uid++;
          try {
            (b[this.expando] = { value: c }), Object.defineProperties(a, b);
          } catch (d) {
            (b[this.expando] = c), _.extend(a, b);
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c;
      },
      set: function (a, b, c) {
        var d,
          e = this.key(a),
          f = this.cache[e];
        if ("string" == typeof b) f[b] = c;
        else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
        else for (d in b) f[d] = b[d];
        return f;
      },
      get: function (a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b];
      },
      access: function (a, b, c) {
        var d;
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? ((d = this.get(a, b)),
            void 0 !== d ? d : this.get(a, _.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];
        if (void 0 === b) this.cache[f] = {};
        else {
          _.isArray(b)
            ? (d = b.concat(b.map(_.camelCase)))
            : ((e = _.camelCase(b)),
              b in g
                ? (d = [b, e])
                : ((d = e), (d = d in g ? [d] : d.match(na) || []))),
            (c = d.length);
          for (; c--; ) delete g[d[c]];
        }
      },
      hasData: function (a) {
        return !_.isEmptyObject(this.cache[a[this.expando]] || {});
      },
      discard: function (a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      },
    });
  var ra = new h(),
    sa = new h(),
    ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ua = /([A-Z])/g;
  _.extend({
    hasData: function (a) {
      return sa.hasData(a) || ra.hasData(a);
    },
    data: function (a, b, c) {
      return sa.access(a, b, c);
    },
    removeData: function (a, b) {
      sa.remove(a, b);
    },
    _data: function (a, b, c) {
      return ra.access(a, b, c);
    },
    _removeData: function (a, b) {
      ra.remove(a, b);
    },
  }),
    _.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = sa.get(f)), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))
          ) {
            for (c = g.length; c--; )
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = _.camelCase(d.slice(5))), i(f, d, e[d])));
            ra.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              sa.set(this, a);
            })
          : qa(
              this,
              function (b) {
                var c,
                  d = _.camelCase(a);
                if (f && void 0 === b) {
                  if (((c = sa.get(f, a)), void 0 !== c)) return c;
                  if (((c = sa.get(f, d)), void 0 !== c)) return c;
                  if (((c = i(f, d, void 0)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    var c = sa.get(this, d);
                    sa.set(this, d, b),
                      -1 !== a.indexOf("-") &&
                        void 0 !== c &&
                        sa.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          sa.remove(this, a);
        });
      },
    }),
    _.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = ra.get(a, b)),
            c &&
              (!d || _.isArray(c)
                ? (d = ra.access(a, b, _.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = _.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = _._queueHooks(a, b),
          g = function () {
            _.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          ra.get(a, c) ||
          ra.access(a, c, {
            empty: _.Callbacks("once memory").add(function () {
              ra.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    _.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? _.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          _.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = _.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        for (
          "string" != typeof a && ((b = a), (a = void 0)), a = a || "fx";
          g--;

        )
          (c = ra.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    wa = ["Top", "Right", "Bottom", "Left"],
    xa = function (a, b) {
      return (
        (a = b || a),
        "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
      );
    },
    ya = /^(?:checkbox|radio)$/i;
  !(function () {
    var a = Z.createDocumentFragment(),
      b = a.appendChild(Z.createElement("div")),
      c = Z.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var za = "undefined";
  Y.focusinBubbles = "onfocusin" in a;
  var Aa = /^key/,
    Ba = /^(?:mouse|pointer|contextmenu)|click/,
    Ca = /^(?:focusinfocus|focusoutblur)$/,
    Da = /^([^.]*)(?:\.(.+)|)$/;
  (_.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = ra.get(a);
      if (q)
        for (
          c.handler && ((f = c), (c = f.handler), (e = f.selector)),
            c.guid || (c.guid = _.guid++),
            (i = q.events) || (i = q.events = {}),
            (g = q.handle) ||
              (g = q.handle =
                function (b) {
                  return typeof _ !== za && _.event.triggered !== b.type
                    ? _.event.dispatch.apply(a, arguments)
                    : void 0;
                }),
            b = (b || "").match(na) || [""],
            j = b.length;
          j--;

        )
          (h = Da.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n &&
              ((l = _.event.special[n] || {}),
              (n = (e ? l.delegateType : l.bindType) || n),
              (l = _.event.special[n] || {}),
              (k = _.extend(
                {
                  type: n,
                  origType: p,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && _.expr.match.needsContext.test(e),
                  namespace: o.join("."),
                },
                f
              )),
              (m = i[n]) ||
                ((m = i[n] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(n, g, !1))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (_.event.global[n] = !0));
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = ra.hasData(a) && ra.get(a);
      if (q && (i = q.events)) {
        for (b = (b || "").match(na) || [""], j = b.length; j--; )
          if (
            ((h = Da.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n)
          ) {
            for (
              l = _.event.special[n] || {},
                n = (d ? l.delegateType : l.bindType) || n,
                m = i[n] || [],
                h =
                  h[2] &&
                  new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                g = f = m.length;
              f--;

            )
              (k = m[f]),
                (!e && p !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                _.removeEvent(a, n, q.handle),
              delete i[n]);
          } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
        _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = [d || Z],
        n = X.call(b, "type") ? b.type : b,
        o = X.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((g = h = d = d || Z),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !Ca.test(n + _.event.triggered) &&
          (n.indexOf(".") >= 0 &&
            ((o = n.split(".")), (n = o.shift()), o.sort()),
          (j = n.indexOf(":") < 0 && "on" + n),
          (b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = o.join(".")),
          (b.namespace_re = b.namespace
            ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : _.makeArray(c, [b])),
          (l = _.event.special[n] || {}),
          e || !l.trigger || l.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !l.noBubble && !_.isWindow(d)) {
          for (
            i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode);
            g;
            g = g.parentNode
          )
            m.push(g), (h = g);
          h === (d.ownerDocument || Z) &&
            m.push(h.defaultView || h.parentWindow || a);
        }
        for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
          (b.type = f > 1 ? i : l.bindType || n),
            (k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle")),
            k && k.apply(g, c),
            (k = j && g[j]),
            k &&
              k.apply &&
              _.acceptData(g) &&
              ((b.result = k.apply(g, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = n),
          e ||
            b.isDefaultPrevented() ||
            (l._default && l._default.apply(m.pop(), c) !== !1) ||
            !_.acceptData(d) ||
            (j &&
              _.isFunction(d[n]) &&
              !_.isWindow(d) &&
              ((h = d[j]),
              h && (d[j] = null),
              (_.event.triggered = n),
              d[n](),
              (_.event.triggered = void 0),
              h && (d[j] = h))),
          b.result
        );
      }
    },
    dispatch: function (a) {
      a = _.event.fix(a);
      var b,
        c,
        d,
        e,
        f,
        g = [],
        h = R.call(arguments),
        i = (ra.get(this, "events") || {})[a.type] || [],
        j = _.event.special[a.type] || {};
      if (
        ((h[0] = a),
        (a.delegateTarget = this),
        !j.preDispatch || j.preDispatch.call(this, a) !== !1)
      ) {
        for (
          g = _.event.handlers.call(this, a, i), b = 0;
          (e = g[b++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = e.elem, c = 0;
            (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();

          )
            (!a.namespace_re || a.namespace_re.test(f.namespace)) &&
              ((a.handleObj = f),
              (a.data = f.data),
              (d = (
                (_.event.special[f.origType] || {}).handle || f.handler
              ).apply(e.elem, h)),
              void 0 !== d &&
                (a.result = d) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        return j.postDispatch && j.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? _(e, this).index(i) >= 0
                    : _.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = b.button;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((c = a.target.ownerDocument || Z),
            (d = c.documentElement),
            (e = c.body),
            (a.pageX =
              b.clientX +
              ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
              ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
              ((d && d.clientTop) || (e && e.clientTop) || 0))),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[_.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      for (
        g ||
          (this.fixHooks[e] = g =
            Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}),
          d = g.props ? this.props.concat(g.props) : this.props,
          a = new _.Event(f),
          b = d.length;
        b--;

      )
        (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = Z),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        g.filter ? g.filter(a, f) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== l() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === l() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            _.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return _.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = _.extend(new _.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (_.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }),
    (_.Event = function (a, b) {
      return this instanceof _.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? j
                  : k))
            : (this.type = a),
          b && _.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || _.now()),
          void (this[_.expando] = !0))
        : new _.Event(a, b);
    }),
    (_.Event.prototype = {
      isDefaultPrevented: k,
      isPropagationStopped: k,
      isImmediatePropagationStopped: k,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = j),
          a && a.preventDefault && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = j),
          a && a.stopPropagation && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = j),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    _.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        _.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !_.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    Y.focusinBubbles ||
      _.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          _.event.simulate(b, a.target, _.event.fix(a), !0);
        };
        _.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = ra.access(d, b);
            e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = ra.access(d, b) - 1;
            e
              ? ra.access(d, b, e)
              : (d.removeEventListener(a, c, !0), ra.remove(d, b));
          },
        };
      }),
    _.fn.extend({
      on: function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && ((c = c || b), (b = void 0));
          for (g in a) this.on(g, b, c, a[g], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d &&
              ("string" == typeof b
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          d === !1)
        )
          d = k;
        else if (!d) return this;
        return (
          1 === e &&
            ((f = d),
            (d = function (a) {
              return _().off(a), f.apply(this, arguments);
            }),
            (d.guid = f.guid || (f.guid = _.guid++))),
          this.each(function () {
            _.event.add(this, a, d, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            _(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
          c === !1 && (c = k),
          this.each(function () {
            _.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          _.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? _.event.trigger(a, b, c, !0) : void 0;
      },
    });
  var Ea =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Fa = /<([\w:]+)/,
    Ga = /<|&#?\w+;/,
    Ha = /<(?:script|style|link)/i,
    Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ja = /^$|\/(?:java|ecma)script/i,
    Ka = /^true\/(.*)/,
    La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Ma = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (Ma.optgroup = Ma.option),
    (Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead),
    (Ma.th = Ma.td),
    _.extend({
      clone: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = _.contains(a.ownerDocument, a);
        if (
          !(
            Y.noCloneChecked ||
            (1 !== a.nodeType && 11 !== a.nodeType) ||
            _.isXMLDoc(a)
          )
        )
          for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++)
            s(f[d], g[d]);
        if (b)
          if (c)
            for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++)
              q(f[d], g[d]);
          else q(a, h);
        return (
          (g = r(h, "script")), g.length > 0 && p(g, !i && r(a, "script")), h
        );
      },
      buildFragment: function (a, b, c, d) {
        for (
          var e,
            f,
            g,
            h,
            i,
            j,
            k = b.createDocumentFragment(),
            l = [],
            m = 0,
            n = a.length;
          n > m;
          m++
        )
          if (((e = a[m]), e || 0 === e))
            if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
            else if (Ga.test(e)) {
              for (
                f = f || k.appendChild(b.createElement("div")),
                  g = (Fa.exec(e) || ["", ""])[1].toLowerCase(),
                  h = Ma[g] || Ma._default,
                  f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2],
                  j = h[0];
                j--;

              )
                f = f.lastChild;
              _.merge(l, f.childNodes),
                (f = k.firstChild),
                (f.textContent = "");
            } else l.push(b.createTextNode(e));
        for (k.textContent = "", m = 0; (e = l[m++]); )
          if (
            (!d || -1 === _.inArray(e, d)) &&
            ((i = _.contains(e.ownerDocument, e)),
            (f = r(k.appendChild(e), "script")),
            i && p(f),
            c)
          )
            for (j = 0; (e = f[j++]); ) Ja.test(e.type || "") && c.push(e);
        return k;
      },
      cleanData: function (a) {
        for (
          var b, c, d, e, f = _.event.special, g = 0;
          void 0 !== (c = a[g]);
          g++
        ) {
          if (
            _.acceptData(c) &&
            ((e = c[ra.expando]), e && (b = ra.cache[e]))
          ) {
            if (b.events)
              for (d in b.events)
                f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
            ra.cache[e] && delete ra.cache[e];
          }
          delete sa.cache[c[sa.expando]];
        }
      },
    }),
    _.fn.extend({
      text: function (a) {
        return qa(
          this,
          function (a) {
            return void 0 === a
              ? _.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = m(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = m(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function (a, b) {
        for (
          var c, d = a ? _.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        )
          b || 1 !== c.nodeType || _.cleanData(r(c)),
            c.parentNode &&
              (b && _.contains(c.ownerDocument, c) && p(r(c, "script")),
              c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (_.cleanData(r(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return _.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return qa(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !Ha.test(a) &&
              !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = a.replace(Ea, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (_.cleanData(r(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              _.cleanData(r(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, b) {
        a = S.apply([], a);
        var c,
          d,
          e,
          f,
          g,
          h,
          i = 0,
          j = this.length,
          k = this,
          l = j - 1,
          m = a[0],
          p = _.isFunction(m);
        if (p || (j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)))
          return this.each(function (c) {
            var d = k.eq(c);
            p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          j &&
          ((c = _.buildFragment(a, this[0].ownerDocument, !1, this)),
          (d = c.firstChild),
          1 === c.childNodes.length && (c = d),
          d)
        ) {
          for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++)
            (g = c),
              i !== l &&
                ((g = _.clone(g, !0, !0)), f && _.merge(e, r(g, "script"))),
              b.call(this[i], g, i);
          if (f)
            for (
              h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0;
              f > i;
              i++
            )
              (g = e[i]),
                Ja.test(g.type || "") &&
                  !ra.access(g, "globalEval") &&
                  _.contains(h, g) &&
                  (g.src
                    ? _._evalUrl && _._evalUrl(g.src)
                    : _.globalEval(g.textContent.replace(La, "")));
        }
        return this;
      },
    }),
    _.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        _.fn[a] = function (a) {
          for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++)
            (c = g === f ? this : this.clone(!0)),
              _(e[g])[b](c),
              T.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var Na,
    Oa = {},
    Pa = /^margin/,
    Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
    Ra = function (b) {
      return b.ownerDocument.defaultView.opener
        ? b.ownerDocument.defaultView.getComputedStyle(b, null)
        : a.getComputedStyle(b, null);
    };
  !(function () {
    function b() {
      (g.style.cssText =
        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:2px;width:9px;position:absolute"),
        (g.innerHTML = ""),
        e.appendChild(f);
      var b = a.getComputedStyle(g, null);
      (c = "1%" !== b.top), (d = "4px" === b.width), e.removeChild(f);
    }
    var c,
      d,
      e = Z.documentElement,
      f = Z.createElement("div"),
      g = Z.createElement("div");
    g.style &&
      ((g.style.backgroundClip = "content-box"),
      (g.cloneNode(!0).style.backgroundClip = ""),
      (Y.clearCloneStyle = "content-box" === g.style.backgroundClip),
      (f.style.cssText =
        "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
      f.appendChild(g),
      a.getComputedStyle &&
        _.extend(Y, {
          pixelPosition: function () {
            return b(), c;
          },
          boxSizingReliable: function () {
            return null == d && b(), d;
          },
          reliableMarginRight: function () {
            var b,
              c = g.appendChild(Z.createElement("div"));
            return (
              (c.style.cssText = g.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (c.style.marginRight = c.style.width = "0"),
              (g.style.width = "1px"),
              e.appendChild(f),
              (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
              e.removeChild(f),
              g.removeChild(c),
              b
            );
          },
        }));
  })(),
    (_.swap = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var Sa = /^(none|table(?!-c[ea]).+)/,
    Ta = new RegExp("^(" + va + ")(.*)$", "i"),
    Ua = new RegExp("^([+-])=(" + va + ")", "i"),
    Va = { position: "absolute", visibility: "hidden", display: "block" },
    Wa = { letterSpacing: "0", fontWeight: "700" },
    Xa = ["Webkit", "O", "Moz", "ms"];
  _.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = v(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = _.camelCase(b),
          i = a.style;
        return (
          (b = _.cssProps[h] || (_.cssProps[h] = x(i, h))),
          (g = _.cssHooks[b] || _.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              "string" === f &&
                (e = Ua.exec(c)) &&
                ((c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b))),
                (f = "number")),
              null != c &&
                c === c &&
                ("number" !== f || _.cssNumber[h] || (c += "px"),
                Y.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (i[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c)),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = _.camelCase(b);
      return (
        (b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h))),
        (g = _.cssHooks[b] || _.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = v(a, b, d)),
        "normal" === e && b in Wa && (e = Wa[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || _.isNumeric(f) ? f || 0 : e)
          : e
      );
    },
  }),
    _.each(["height", "width"], function (a, b) {
      _.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth
              ? _.swap(a, Va, function () {
                  return A(a, b, d);
                })
              : A(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && Ra(a);
          return y(
            a,
            c,
            d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0
          );
        },
      };
    }),
    (_.cssHooks.marginRight = w(Y.reliableMarginRight, function (a, b) {
      return b
        ? _.swap(a, { display: "inline-block" }, v, [a, "marginRight"])
        : void 0;
    })),
    _.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (_.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Pa.test(a) || (_.cssHooks[a + b].set = y);
    }),
    _.fn.extend({
      css: function (a, b) {
        return qa(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (_.isArray(b)) {
              for (d = Ra(a), e = b.length; e > g; g++)
                f[b[g]] = _.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? _.style(a, b, c) : _.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return B(this, !0);
      },
      hide: function () {
        return B(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              xa(this) ? _(this).show() : _(this).hide();
            });
      },
    }),
    (_.Tween = C),
    (C.prototype = {
      constructor: C,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (_.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = C.propHooks[this.prop];
        return a && a.get ? a.get(this) : C.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = C.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                _.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : C.propHooks._default.set(this),
          this
        );
      },
    }),
    (C.prototype.init.prototype = C.prototype),
    (C.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = _.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          _.fx.step[a.prop]
            ? _.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop])
            ? _.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (C.propHooks.scrollTop = C.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (_.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (_.fx = C.prototype.init),
    (_.fx.step = {});
  var Ya,
    Za,
    $a = /^(?:toggle|show|hide)$/,
    _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
    ab = /queueHooks$/,
    bb = [G],
    cb = {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = _a.exec(b),
            f = (e && e[3]) || (_.cssNumber[a] ? "" : "px"),
            g =
              (_.cssNumber[a] || ("px" !== f && +d)) &&
              _a.exec(_.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do (h = h || ".5"), (g /= h), _.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return (
            e &&
              ((g = c.start = +g || +d || 0),
              (c.unit = f),
              (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
            c
          );
        },
      ],
    };
  (_.Animation = _.extend(I, {
    tweener: function (a, b) {
      _.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (cb[c] = cb[c] || []), cb[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? bb.unshift(a) : bb.push(a);
    },
  })),
    (_.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? _.extend({}, a)
          : {
              complete: c || (!c && b) || (_.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !_.isFunction(b) && b),
            };
      return (
        (d.duration = _.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in _.fx.speeds
          ? _.fx.speeds[d.duration]
          : _.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          _.isFunction(d.old) && d.old.call(this),
            d.queue && _.dequeue(this, d.queue);
        }),
        d
      );
    }),
    _.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(xa)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = _.isEmptyObject(a),
          f = _.speed(b, c, d),
          g = function () {
            var b = I(this, _.extend({}, a), f);
            (e || ra.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = _.timers,
              g = ra.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && _.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = ra.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = _.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                _.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    _.each(["toggle", "show", "hide"], function (a, b) {
      var c = _.fn[b];
      _.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(E(b, !0), a, d, e);
      };
    }),
    _.each(
      {
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        _.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (_.timers = []),
    (_.fx.tick = function () {
      var a,
        b = 0,
        c = _.timers;
      for (Ya = _.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || _.fx.stop(), (Ya = void 0);
    }),
    (_.fx.timer = function (a) {
      _.timers.push(a), a() ? _.fx.start() : _.timers.pop();
    }),
    (_.fx.interval = 13),
    (_.fx.start = function () {
      Za || (Za = setInterval(_.fx.tick, _.fx.interval));
    }),
    (_.fx.stop = function () {
      clearInterval(Za), (Za = null);
    }),
    (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (_.fn.delay = function (a, b) {
      return (
        (a = _.fx ? _.fx.speeds[a] || a : a),
        (b = b || "fx"),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      var a = Z.createElement("input"),
        b = Z.createElement("select"),
        c = b.appendChild(Z.createElement("option"));
      (a.type = "checkbox"),
        (Y.checkOn = "" !== a.value),
        (Y.optSelected = c.selected),
        (b.disabled = !0),
        (Y.optDisabled = !c.disabled),
        (a = Z.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (Y.radioValue = "t" === a.value);
    })();
  var db,
    eb,
    fb = _.expr.attrHandle;
  _.fn.extend({
    attr: function (a, b) {
      return qa(this, _.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        _.removeAttr(this, a);
      });
    },
  }),
    _.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === za
            ? _.prop(a, b, c)
            : ((1 === f && _.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db))),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = _.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                  ? e
                  : (a.setAttribute(b, c + ""), c)
                : void _.removeAttr(a, b));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(na);
        if (f && 1 === a.nodeType)
          for (; (c = f[e++]); )
            (d = _.propFix[c] || c),
              _.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (eb = {
      set: function (a, b, c) {
        return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    _.each(_.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = fb[b] || _.find.attr;
      fb[b] = function (a, b, d) {
        var e, f;
        return (
          d ||
            ((f = fb[b]),
            (fb[b] = e),
            (e = null != c(a, b, d) ? b.toLowerCase() : null),
            (fb[b] = f)),
          e
        );
      };
    });
  var gb = /^(?:input|select|textarea|button)$/i;
  _.fn.extend({
    prop: function (a, b) {
      return qa(this, _.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[_.propFix[a] || a];
      });
    },
  }),
    _.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !_.isXMLDoc(a)),
            f && ((b = _.propFix[b] || b), (e = _.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href
              ? a.tabIndex
              : -1;
          },
        },
      },
    }),
    Y.optSelected ||
      (_.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
      }),
    _.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        _.propFix[this.toLowerCase()] = this;
      }
    );
  var hb = /[\t\r\n\f]/g;
  _.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (_.isFunction(a))
        return this.each(function (b) {
          _(this).addClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(na) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")))
          ) {
            for (f = 0; (e = b[f++]); )
              d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            (g = _.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0 === arguments.length || ("string" == typeof a && a),
        i = 0,
        j = this.length;
      if (_.isFunction(a))
        return this.each(function (b) {
          _(this).removeClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(na) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(hb, " ") : "")))
          ) {
            for (f = 0; (e = b[f++]); )
              for (; d.indexOf(" " + e + " ") >= 0; )
                d = d.replace(" " + e + " ", " ");
            (g = a ? _.trim(d) : ""), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : _.isFunction(a)
        ? this.each(function (c) {
            _(this).toggleClass(a.call(this, c, this.className, b), b);
          })
        : this.each(function () {
            if ("string" === c)
              for (
                var b, d = 0, e = _(this), f = a.match(na) || [];
                (b = f[d++]);

              )
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            else
              (c === za || "boolean" === c) &&
                (this.className &&
                  ra.set(this, "__className__", this.className),
                (this.className =
                  this.className || a === !1
                    ? ""
                    : ra.get(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
  });
  var ib = /\r/g;
  _.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = _.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, _(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : _.isArray(e) &&
                    (e = _.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  _.valHooks[this.type] ||
                  _.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
          );
      }
    },
  }),
    _.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = _.find.attr(a, "value");
            return null != b ? b : _.trim(_.text(a));
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                (c.selected || i === e) &&
                  (Y.optDisabled
                    ? !c.disabled
                    : null === c.getAttribute("disabled")) &&
                  (!c.parentNode.disabled ||
                    !_.nodeName(c.parentNode, "optgroup")))
              ) {
                if (((b = _(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            for (
              var c, d, e = a.options, f = _.makeArray(b), g = e.length;
              g--;

            )
              (d = e[g]), (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    _.each(["radio", "checkbox"], function () {
      (_.valHooks[this] = {
        set: function (a, b) {
          return _.isArray(b)
            ? (a.checked = _.inArray(_(a).val(), b) >= 0)
            : void 0;
        },
      }),
        Y.checkOn ||
          (_.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    }),
    _.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        _.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    _.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    });
  var jb = _.now(),
    kb = /\?/;
  (_.parseJSON = function (a) {
    return JSON.parse(a + "");
  }),
    (_.parseXML = function (a) {
      var b, c;
      if (!a || "string" != typeof a) return null;
      try {
        (c = new DOMParser()), (b = c.parseFromString(a, "text/xml"));
      } catch (d) {
        b = void 0;
      }
      return (
        (!b || b.getElementsByTagName("parsererror").length) &&
          _.error("Invalid XML: " + a),
        b
      );
    });
  var lb = /#.*$/,
    mb = /([?&])_=[^&]*/,
    nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    pb = /^(?:GET|HEAD)$/,
    qb = /^\/\//,
    rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    sb = {},
    tb = {},
    ub = "*/".concat("*"),
    vb = a.location.href,
    wb = rb.exec(vb.toLowerCase()) || [];
  _.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: vb,
      type: "GET",
      isLocal: ob.test(wb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ub,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": _.parseJSON,
        "text xml": _.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a);
    },
    ajaxPrefilter: J(sb),
    ajaxTransport: J(tb),
    ajax: function (a, b) {
      function c(a, b, c, g) {
        var i,
          k,
          r,
          s,
          u,
          w = b;
        2 !== t &&
          ((t = 2),
          h && clearTimeout(h),
          (d = void 0),
          (f = g || ""),
          (v.readyState = a > 0 ? 4 : 0),
          (i = (a >= 200 && 300 > a) || 304 === a),
          c && (s = M(l, v, c)),
          (s = N(l, s, v, i)),
          i
            ? (l.ifModified &&
                ((u = v.getResponseHeader("Last-Modified")),
                u && (_.lastModified[e] = u),
                (u = v.getResponseHeader("etag")),
                u && (_.etag[e] = u)),
              204 === a || "HEAD" === l.type
                ? (w = "nocontent")
                : 304 === a
                ? (w = "notmodified")
                : ((w = s.state), (k = s.data), (r = s.error), (i = !r)))
            : ((r = w), (a || !w) && ((w = "error"), 0 > a && (a = 0))),
          (v.status = a),
          (v.statusText = (b || w) + ""),
          i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
          v.statusCode(q),
          (q = void 0),
          j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]),
          p.fireWith(m, [v, w]),
          j &&
            (n.trigger("ajaxComplete", [v, l]),
            --_.active || _.event.trigger("ajaxStop")));
      }
      "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = _.ajaxSetup({}, b),
        m = l.context || l,
        n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
        o = _.Deferred(),
        p = _.Callbacks("once memory"),
        q = l.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!g)
                for (g = {}; (b = nb.exec(f)); ) g[b[1].toLowerCase()] = b[2];
              b = g[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? f : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return t || (l.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > t) for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = a || u;
            return d && d.abort(b), c(0, b), this;
          },
        };
      if (
        ((o.promise(v).complete = p.add),
        (v.success = v.done),
        (v.error = v.fail),
        (l.url = ((a || l.url || vb) + "")
          .replace(lb, "")
          .replace(qb, wb[1] + "//")),
        (l.type = b.method || b.type || l.method || l.type),
        (l.dataTypes = _.trim(l.dataType || "*")
          .toLowerCase()
          .match(na) || [""]),
        null == l.crossDomain &&
          ((i = rb.exec(l.url.toLowerCase())),
          (l.crossDomain = !(
            !i ||
            (i[1] === wb[1] &&
              i[2] === wb[2] &&
              (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                (wb[3] || ("http:" === wb[1] ? "80" : "443")))
          ))),
        l.data &&
          l.processData &&
          "string" != typeof l.data &&
          (l.data = _.param(l.data, l.traditional)),
        K(sb, l, b, v),
        2 === t)
      )
        return v;
      (j = _.event && l.global),
        j && 0 === _.active++ && _.event.trigger("ajaxStart"),
        (l.type = l.type.toUpperCase()),
        (l.hasContent = !pb.test(l.type)),
        (e = l.url),
        l.hasContent ||
          (l.data &&
            ((e = l.url += (kb.test(e) ? "&" : "?") + l.data), delete l.data),
          l.cache === !1 &&
            (l.url = mb.test(e)
              ? e.replace(mb, "$1_=" + jb++)
              : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)),
        l.ifModified &&
          (_.lastModified[e] &&
            v.setRequestHeader("If-Modified-Since", _.lastModified[e]),
          _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])),
        ((l.data && l.hasContent && l.contentType !== !1) || b.contentType) &&
          v.setRequestHeader("Content-Type", l.contentType),
        v.setRequestHeader(
          "Accept",
          l.dataTypes[0] && l.accepts[l.dataTypes[0]]
            ? l.accepts[l.dataTypes[0]] +
                ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "")
            : l.accepts["*"]
        );
      for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
      if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
        return v.abort();
      u = "abort";
      for (k in { success: 1, error: 1, complete: 1 }) v[k](l[k]);
      if ((d = K(tb, l, b, v))) {
        (v.readyState = 1),
          j && n.trigger("ajaxSend", [v, l]),
          l.async &&
            l.timeout > 0 &&
            (h = setTimeout(function () {
              v.abort("timeout");
            }, l.timeout));
        try {
          (t = 1), d.send(r, c);
        } catch (w) {
          if (!(2 > t)) throw w;
          c(-1, w);
        }
      } else c(-1, "No Transport");
      return v;
    },
    getJSON: function (a, b, c) {
      return _.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return _.get(a, void 0, b, "script");
    },
  }),
    _.each(["get", "post"], function (a, b) {
      _[b] = function (a, c, d, e) {
        return (
          _.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          _.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    (_._evalUrl = function (a) {
      return _.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    _.fn.extend({
      wrapAll: function (a) {
        var b;
        return _.isFunction(a)
          ? this.each(function (b) {
              _(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = _(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function (a) {
        return _.isFunction(a)
          ? this.each(function (b) {
              _(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = _(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = _.isFunction(a);
        return this.each(function (c) {
          _(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            _.nodeName(this, "body") || _(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (_.expr.filters.hidden = function (a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }),
    (_.expr.filters.visible = function (a) {
      return !_.expr.filters.hidden(a);
    });
  var xb = /%20/g,
    yb = /\[\]$/,
    zb = /\r?\n/g,
    Ab = /^(?:submit|button|image|reset|file)$/i,
    Bb = /^(?:input|select|textarea|keygen)/i;
  (_.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = _.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional),
      _.isArray(a) || (a.jquery && !_.isPlainObject(a)))
    )
      _.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) O(c, a[c], b, e);
    return d.join("&").replace(xb, "+");
  }),
    _.fn.extend({
      serialize: function () {
        return _.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = _.prop(this, "elements");
          return a ? _.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !_(this).is(":disabled") &&
              Bb.test(this.nodeName) &&
              !Ab.test(a) &&
              (this.checked || !ya.test(a))
            );
          })
          .map(function (a, b) {
            var c = _(this).val();
            return null == c
              ? null
              : _.isArray(c)
              ? _.map(c, function (a) {
                  return { name: b.name, value: a.replace(zb, "\r\n") };
                })
              : { name: b.name, value: c.replace(zb, "\r\n") };
          })
          .get();
      },
    }),
    (_.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (a) {}
    });
  var Cb = 0,
    Db = {},
    Eb = { 0: 200, 1223: 204 },
    Fb = _.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function () {
      for (var a in Db) Db[a]();
    }),
    (Y.cors = !!Fb && "withCredentials" in Fb),
    (Y.ajax = Fb = !!Fb),
    _.ajaxTransport(function (a) {
      var b;
      return Y.cors || (Fb && !a.crossDomain)
        ? {
            send: function (c, d) {
              var e,
                f = a.xhr(),
                g = ++Cb;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c["X-Requested-With"] ||
                  (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) f.setRequestHeader(e, c[e]);
              (b = function (a) {
                return function () {
                  b &&
                    (delete Db[g],
                    (b = f.onload = f.onerror = null),
                    "abort" === a
                      ? f.abort()
                      : "error" === a
                      ? d(f.status, f.statusText)
                      : d(
                          Eb[f.status] || f.status,
                          f.statusText,
                          "string" == typeof f.responseText
                            ? { text: f.responseText }
                            : void 0,
                          f.getAllResponseHeaders()
                        ));
                };
              }),
                (f.onload = b()),
                (f.onerror = b("error")),
                (b = Db[g] = b("abort"));
              try {
                f.send((a.hasContent && a.data) || null);
              } catch (h) {
                if (b) throw h;
              }
            },
            abort: function () {
              b && b();
            },
          }
        : void 0;
    }),
    _.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (a) {
          return _.globalEval(a), a;
        },
      },
    }),
    _.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    _.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (d, e) {
            (b = _("<script>")
              .prop({ async: !0, charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && e("error" === a.type ? 404 : 200, a.type);
                })
              )),
              Z.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Gb = [],
    Hb = /(=)\?(?=&|$)|\?\?/;
  _.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Gb.pop() || _.expando + "_" + jb++;
      return (this[a] = !0), a;
    },
  }),
    _.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Hb.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              !(b.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Hb.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            _.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Hb, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || _.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Gb.push(e)),
              g && _.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (_.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || Z);
      var d = ga.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = _.buildFragment([a], b, e)),
          e && e.length && _(e).remove(),
          _.merge([], d.childNodes));
    });
  var Ib = _.fn.load;
  (_.fn.load = function (a, b, c) {
    if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h >= 0 && ((d = _.trim(a.slice(h))), (a = a.slice(0, h))),
      _.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        _.ajax({ url: a, type: e, dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              function (a, b) {
                g.each(c, f || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    _.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        _.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (_.expr.filters.animated = function (a) {
      return _.grep(_.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var Jb = a.document.documentElement;
  (_.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = _.css(a, "position"),
        l = _(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = _.css(a, "top")),
        (i = _.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        _.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    _.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                _.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            _.contains(b, d)
              ? (typeof d.getBoundingClientRect !== za &&
                  (e = d.getBoundingClientRect()),
                (c = P(f)),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft,
                })
              : e
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === _.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                _.nodeName(a[0], "html") || (d = a.offset()),
                (d.top += _.css(a[0], "borderTopWidth", !0)),
                (d.left += _.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - d.top - _.css(c, "marginTop", !0),
              left: b.left - d.left - _.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var a = this.offsetParent || Jb;
            a && !_.nodeName(a, "html") && "static" === _.css(a, "position");

          )
            a = a.offsetParent;
          return a || Jb;
        });
      },
    }),
    _.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function (e) {
          return qa(
            this,
            function (b, e, f) {
              var g = P(b);
              return void 0 === f
                ? g
                  ? g[c]
                  : b[e]
                : void (g
                    ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset)
                    : (b[e] = f));
            },
            b,
            e,
            arguments.length,
            null
          );
        };
      }
    ),
    _.each(["top", "left"], function (a, b) {
      _.cssHooks[b] = w(Y.pixelPosition, function (a, c) {
        return c
          ? ((c = v(a, b)), Qa.test(c) ? _(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    _.each({ Height: "height", Width: "width" }, function (a, b) {
      _.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          _.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return qa(
              this,
              function (b, c, d) {
                var e;
                return _.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? _.css(b, c, g)
                  : _.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    (_.fn.size = function () {
      return this.length;
    }),
    (_.fn.andSelf = _.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return _;
      });
  var Kb = a.jQuery,
    Lb = a.$;
  return (
    (_.noConflict = function (b) {
      return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _;
    }),
    typeof b === za && (a.jQuery = a.$ = _),
    _
  );
}),
  !(function () {
    function a(a) {
      return a && (a.ownerDocument || a.document || a).documentElement;
    }
    function b(a) {
      return (
        a &&
        ((a.ownerDocument && a.ownerDocument.defaultView) ||
          (a.document && a) ||
          a.defaultView)
      );
    }
    function c(a, b) {
      return b > a ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }
    function d(a) {
      return null === a ? NaN : +a;
    }
    function e(a) {
      return !isNaN(a);
    }
    function f(a) {
      return {
        left: function (b, c, d, e) {
          for (
            arguments.length < 3 && (d = 0),
              arguments.length < 4 && (e = b.length);
            e > d;

          ) {
            var f = (d + e) >>> 1;
            a(b[f], c) < 0 ? (d = f + 1) : (e = f);
          }
          return d;
        },
        right: function (b, c, d, e) {
          for (
            arguments.length < 3 && (d = 0),
              arguments.length < 4 && (e = b.length);
            e > d;

          ) {
            var f = (d + e) >>> 1;
            a(b[f], c) > 0 ? (e = f) : (d = f + 1);
          }
          return d;
        },
      };
    }
    function g(a) {
      return a.length;
    }
    function h(a) {
      for (var b = 1; (a * b) % 1; ) b *= 10;
      return b;
    }
    function i(a, b) {
      for (var c in b)
        Object.defineProperty(a.prototype, c, { value: b[c], enumerable: !1 });
    }
    function j() {
      this._ = Object.create(null);
    }
    function k(a) {
      return (a += "") === og || a[0] === pg ? pg + a : a;
    }
    function l(a) {
      return (a += "")[0] === pg ? a.slice(1) : a;
    }
    function m(a) {
      return k(a) in this._;
    }
    function n(a) {
      return (a = k(a)) in this._ && delete this._[a];
    }
    function o() {
      var a = [];
      for (var b in this._) a.push(l(b));
      return a;
    }
    function p() {
      var a = 0;
      for (var b in this._) ++a;
      return a;
    }
    function q() {
      for (var a in this._) return !1;
      return !0;
    }
    function r() {
      this._ = Object.create(null);
    }
    function s(a) {
      return a;
    }
    function t(a, b, c) {
      return function () {
        var d = c.apply(b, arguments);
        return d === b ? a : d;
      };
    }
    function u(a, b) {
      if (b in a) return b;
      b = b.charAt(0).toUpperCase() + b.slice(1);
      for (var c = 0, d = qg.length; d > c; ++c) {
        var e = qg[c] + b;
        if (e in a) return e;
      }
    }
    function v() {}
    function w() {}
    function x(a) {
      function b() {
        for (var b, d = c, e = -1, f = d.length; ++e < f; )
          (b = d[e].on) && b.apply(this, arguments);
        return a;
      }
      var c = [],
        d = new j();
      return (
        (b.on = function (b, e) {
          var f,
            g = d.get(b);
          return arguments.length < 2
            ? g && g.on
            : (g &&
                ((g.on = null),
                (c = c.slice(0, (f = c.indexOf(g))).concat(c.slice(f + 1))),
                d.remove(b)),
              e && c.push(d.set(b, { on: e })),
              a);
        }),
        b
      );
    }
    function y() {
      bg.event.preventDefault();
    }
    function z() {
      for (var a, b = bg.event; (a = b.sourceEvent); ) b = a;
      return b;
    }
    function A(a) {
      for (var b = new w(), c = 0, d = arguments.length; ++c < d; )
        b[arguments[c]] = x(b);
      return (
        (b.of = function (c, d) {
          return function (e) {
            try {
              var f = (e.sourceEvent = bg.event);
              (e.target = a), (bg.event = e), b[e.type].apply(c, d);
            } finally {
              bg.event = f;
            }
          };
        }),
        b
      );
    }
    function B(a) {
      return sg(a, wg), a;
    }
    function C(a) {
      return "function" == typeof a
        ? a
        : function () {
            return tg(a, this);
          };
    }
    function D(a) {
      return "function" == typeof a
        ? a
        : function () {
            return ug(a, this);
          };
    }
    function E(a, b) {
      function c() {
        this.removeAttribute(a);
      }
      function d() {
        this.removeAttributeNS(a.space, a.local);
      }
      function e() {
        this.setAttribute(a, b);
      }
      function f() {
        this.setAttributeNS(a.space, a.local, b);
      }
      function g() {
        var c = b.apply(this, arguments);
        null == c ? this.removeAttribute(a) : this.setAttribute(a, c);
      }
      function h() {
        var c = b.apply(this, arguments);
        null == c
          ? this.removeAttributeNS(a.space, a.local)
          : this.setAttributeNS(a.space, a.local, c);
      }
      return (
        (a = bg.ns.qualify(a)),
        null == b
          ? a.local
            ? d
            : c
          : "function" == typeof b
          ? a.local
            ? h
            : g
          : a.local
          ? f
          : e
      );
    }
    function F(a) {
      return a.trim().replace(/\s+/g, " ");
    }
    function G(a) {
      return new RegExp("(?:^|\\s+)" + bg.requote(a) + "(?:\\s+|$)", "g");
    }
    function H(a) {
      return (a + "").trim().split(/^|\s+/);
    }
    function I(a, b) {
      function c() {
        for (var c = -1; ++c < e; ) a[c](this, b);
      }
      function d() {
        for (var c = -1, d = b.apply(this, arguments); ++c < e; ) a[c](this, d);
      }
      a = H(a).map(J);
      var e = a.length;
      return "function" == typeof b ? d : c;
    }
    function J(a) {
      var b = G(a);
      return function (c, d) {
        if ((e = c.classList)) return d ? e.add(a) : e.remove(a);
        var e = c.getAttribute("class") || "";
        d
          ? ((b.lastIndex = 0),
            b.test(e) || c.setAttribute("class", F(e + " " + a)))
          : c.setAttribute("class", F(e.replace(b, " ")));
      };
    }
    function K(a, b, c) {
      function d() {
        this.style.removeProperty(a);
      }
      function e() {
        this.style.setProperty(a, b, c);
      }
      function f() {
        var d = b.apply(this, arguments);
        null == d
          ? this.style.removeProperty(a)
          : this.style.setProperty(a, d, c);
      }
      return null == b ? d : "function" == typeof b ? f : e;
    }
    function L(a, b) {
      function c() {
        delete this[a];
      }
      function d() {
        this[a] = b;
      }
      function e() {
        var c = b.apply(this, arguments);
        null == c ? delete this[a] : (this[a] = c);
      }
      return null == b ? c : "function" == typeof b ? e : d;
    }
    function M(a) {
      function b() {
        var b = this.ownerDocument,
          c = this.namespaceURI;
        return c ? b.createElementNS(c, a) : b.createElement(a);
      }
      function c() {
        return this.ownerDocument.createElementNS(a.space, a.local);
      }
      return "function" == typeof a ? a : (a = bg.ns.qualify(a)).local ? c : b;
    }
    function N() {
      var a = this.parentNode;
      a && a.removeChild(this);
    }
    function O(a) {
      return { __data__: a };
    }
    function P(a) {
      return function () {
        return vg(this, a);
      };
    }
    function Q(a) {
      return (
        arguments.length || (a = c),
        function (b, c) {
          return b && c ? a(b.__data__, c.__data__) : !b - !c;
        }
      );
    }
    function R(a, b) {
      for (var c = 0, d = a.length; d > c; c++)
        for (var e, f = a[c], g = 0, h = f.length; h > g; g++)
          (e = f[g]) && b(e, g, c);
      return a;
    }
    function S(a) {
      return sg(a, yg), a;
    }
    function T(a) {
      var b, c;
      return function (d, e, f) {
        var g,
          h = a[f].update,
          i = h.length;
        for (
          f != c && ((c = f), (b = 0)), e >= b && (b = e + 1);
          !(g = h[b]) && ++b < i;

        );
        return g;
      };
    }
    function U(a, b, c) {
      function d() {
        var b = this[g];
        b && (this.removeEventListener(a, b, b.$), delete this[g]);
      }
      function e() {
        var e = i(b, dg(arguments));
        d.call(this),
          this.addEventListener(a, (this[g] = e), (e.$ = c)),
          (e._ = b);
      }
      function f() {
        var b,
          c = new RegExp("^__on([^.]+)" + bg.requote(a) + "$");
        for (var d in this)
          if ((b = d.match(c))) {
            var e = this[d];
            this.removeEventListener(b[1], e, e.$), delete this[d];
          }
      }
      var g = "__on" + a,
        h = a.indexOf("."),
        i = V;
      h > 0 && (a = a.slice(0, h));
      var j = zg.get(a);
      return j && ((a = j), (i = W)), h ? (b ? e : d) : b ? v : f;
    }
    function V(a, b) {
      return function (c) {
        var d = bg.event;
        (bg.event = c), (b[0] = this.__data__);
        try {
          a.apply(this, b);
        } finally {
          bg.event = d;
        }
      };
    }
    function W(a, b) {
      var c = V(a, b);
      return function (a) {
        var b = this,
          d = a.relatedTarget;
        (d && (d === b || 8 & d.compareDocumentPosition(b))) || c.call(b, a);
      };
    }
    function X(c) {
      var d = ".dragsuppress-" + ++Bg,
        e = "click" + d,
        f = bg
          .select(b(c))
          .on("touchmove" + d, y)
          .on("dragstart" + d, y)
          .on("selectstart" + d, y);
      if (
        (null == Ag &&
          (Ag = "onselectstart" in c ? !1 : u(c.style, "userSelect")),
        Ag)
      ) {
        var g = a(c).style,
          h = g[Ag];
        g[Ag] = "none";
      }
      return function (a) {
        if ((f.on(d, null), Ag && (g[Ag] = h), a)) {
          var b = function () {
            f.on(e, null);
          };
          f.on(
            e,
            function () {
              y(), b();
            },
            !0
          ),
            setTimeout(b, 0);
        }
      };
    }
    function Y(a, c) {
      c.changedTouches && (c = c.changedTouches[0]);
      var d = a.ownerSVGElement || a;
      if (d.createSVGPoint) {
        var e = d.createSVGPoint();
        if (0 > Cg) {
          var f = b(a);
          if (f.scrollX || f.scrollY) {
            d = bg
              .select("body")
              .append("svg")
              .style(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  margin: 0,
                  padding: 0,
                  border: "none",
                },
                "important"
              );
            var g = d[0][0].getScreenCTM();
            (Cg = !(g.f || g.e)), d.remove();
          }
        }
        return (
          Cg
            ? ((e.x = c.pageX), (e.y = c.pageY))
            : ((e.x = c.clientX), (e.y = c.clientY)),
          (e = e.matrixTransform(a.getScreenCTM().inverse())),
          [e.x, e.y]
        );
      }
      var h = a.getBoundingClientRect();
      return [
        c.clientX - h.left - a.clientLeft,
        c.clientY - h.top - a.clientTop,
      ];
    }
    function Z() {
      return bg.event.changedTouches[0].identifier;
    }
    function $(a) {
      return a > 0 ? 1 : 0 > a ? -1 : 0;
    }
    function _(a, b, c) {
      return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
    }
    function aa(a) {
      return a > 1 ? 0 : -1 > a ? Fg : Math.acos(a);
    }
    function ba(a) {
      return a > 1 ? Ig : -1 > a ? -Ig : Math.asin(a);
    }
    function ca(a) {
      return ((a = Math.exp(a)) - 1 / a) / 2;
    }
    function da(a) {
      return ((a = Math.exp(a)) + 1 / a) / 2;
    }
    function ea(a) {
      return ((a = Math.exp(2 * a)) - 1) / (a + 1);
    }
    function fa(a) {
      return (a = Math.sin(a / 2)) * a;
    }
    function ga() {}
    function ha(a, b, c) {
      return this instanceof ha
        ? ((this.h = +a), (this.s = +b), void (this.l = +c))
        : arguments.length < 2
        ? a instanceof ha
          ? new ha(a.h, a.s, a.l)
          : va("" + a, wa, ha)
        : new ha(a, b, c);
    }
    function ia(a, b, c) {
      function d(a) {
        return (
          a > 360 ? (a -= 360) : 0 > a && (a += 360),
          60 > a
            ? f + ((g - f) * a) / 60
            : 180 > a
            ? g
            : 240 > a
            ? f + ((g - f) * (240 - a)) / 60
            : f
        );
      }
      function e(a) {
        return Math.round(255 * d(a));
      }
      var f, g;
      return (
        (a = isNaN(a) ? 0 : (a %= 360) < 0 ? a + 360 : a),
        (b = isNaN(b) ? 0 : 0 > b ? 0 : b > 1 ? 1 : b),
        (c = 0 > c ? 0 : c > 1 ? 1 : c),
        (g = 0.5 >= c ? c * (1 + b) : c + b - c * b),
        (f = 2 * c - g),
        new ra(e(a + 120), e(a), e(a - 120))
      );
    }
    function ja(a, b, c) {
      return this instanceof ja
        ? ((this.h = +a), (this.c = +b), void (this.l = +c))
        : arguments.length < 2
        ? a instanceof ja
          ? new ja(a.h, a.c, a.l)
          : a instanceof la
          ? na(a.l, a.a, a.b)
          : na((a = xa((a = bg.rgb(a)).r, a.g, a.b)).l, a.a, a.b)
        : new ja(a, b, c);
    }
    function ka(a, b, c) {
      return (
        isNaN(a) && (a = 0),
        isNaN(b) && (b = 0),
        new la(c, Math.cos((a *= Jg)) * b, Math.sin(a) * b)
      );
    }
    function la(a, b, c) {
      return this instanceof la
        ? ((this.l = +a), (this.a = +b), void (this.b = +c))
        : arguments.length < 2
        ? a instanceof la
          ? new la(a.l, a.a, a.b)
          : a instanceof ja
          ? ka(a.h, a.c, a.l)
          : xa((a = ra(a)).r, a.g, a.b)
        : new la(a, b, c);
    }
    function ma(a, b, c) {
      var d = (a + 16) / 116,
        e = d + b / 500,
        f = d - c / 200;
      return (
        (e = oa(e) * Ug),
        (d = oa(d) * Vg),
        (f = oa(f) * Wg),
        new ra(
          qa(3.2404542 * e - 1.5371385 * d - 0.4985314 * f),
          qa(-0.969266 * e + 1.8760108 * d + 0.041556 * f),
          qa(0.0556434 * e - 0.2040259 * d + 1.0572252 * f)
        )
      );
    }
    function na(a, b, c) {
      return a > 0
        ? new ja(Math.atan2(c, b) * Kg, Math.sqrt(b * b + c * c), a)
        : new ja(NaN, NaN, a);
    }
    function oa(a) {
      return a > 0.206893034 ? a * a * a : (a - 4 / 29) / 7.787037;
    }
    function pa(a) {
      return a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787037 * a + 4 / 29;
    }
    function qa(a) {
      return Math.round(
        255 * (0.00304 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - 0.055)
      );
    }
    function ra(a, b, c) {
      return this instanceof ra
        ? ((this.r = ~~a), (this.g = ~~b), void (this.b = ~~c))
        : arguments.length < 2
        ? a instanceof ra
          ? new ra(a.r, a.g, a.b)
          : va("" + a, ra, ia)
        : new ra(a, b, c);
    }
    function sa(a) {
      return new ra(a >> 16, (a >> 8) & 255, 255 & a);
    }
    function ta(a) {
      return sa(a) + "";
    }
    function ua(a) {
      return 16 > a
        ? "0" + Math.max(0, a).toString(16)
        : Math.min(255, a).toString(16);
    }
    function va(a, b, c) {
      a = a.toLowerCase();
      var d,
        e,
        f,
        g = 0,
        h = 0,
        i = 0;
      if ((d = /([a-z]+)\((.*)\)/.exec(a)))
        switch (((e = d[2].split(",")), d[1])) {
          case "hsl":
            return c(
              parseFloat(e[0]),
              parseFloat(e[1]) / 100,
              parseFloat(e[2]) / 100
            );
          case "rgb":
            return b(za(e[0]), za(e[1]), za(e[2]));
        }
      return (f = Zg.get(a))
        ? b(f.r, f.g, f.b)
        : (null == a ||
            "#" !== a.charAt(0) ||
            isNaN((f = parseInt(a.slice(1), 16))) ||
            (4 === a.length
              ? ((g = (3840 & f) >> 4),
                (g = (g >> 4) | g),
                (h = 240 & f),
                (h = (h >> 4) | h),
                (i = 15 & f),
                (i = (i << 4) | i))
              : 7 === a.length &&
                ((g = (16711680 & f) >> 16),
                (h = (65280 & f) >> 8),
                (i = 255 & f))),
          b(g, h, i));
    }
    function wa(a, b, c) {
      var d,
        e,
        f = Math.min((a /= 255), (b /= 255), (c /= 255)),
        g = Math.max(a, b, c),
        h = g - f,
        i = (g + f) / 2;
      return (
        h
          ? ((e = 0.5 > i ? h / (g + f) : h / (2 - g - f)),
            (d =
              a == g
                ? (b - c) / h + (c > b ? 6 : 0)
                : b == g
                ? (c - a) / h + 2
                : (a - b) / h + 4),
            (d *= 60))
          : ((d = NaN), (e = i > 0 && 1 > i ? 0 : d)),
        new ha(d, e, i)
      );
    }
    function xa(a, b, c) {
      (a = ya(a)), (b = ya(b)), (c = ya(c));
      var d = pa((0.4124564 * a + 0.3575761 * b + 0.1804375 * c) / Ug),
        e = pa((0.2126729 * a + 0.7151522 * b + 0.072175 * c) / Vg),
        f = pa((0.0193339 * a + 0.119192 * b + 0.9503041 * c) / Wg);
      return la(116 * e - 16, 500 * (d - e), 200 * (e - f));
    }
    function ya(a) {
      return (a /= 255) <= 0.04045
        ? a / 12.92
        : Math.pow((a + 0.055) / 1.055, 2.4);
    }
    function za(a) {
      var b = parseFloat(a);
      return "%" === a.charAt(a.length - 1) ? Math.round(2.55 * b) : b;
    }
    function Aa(a) {
      return "function" == typeof a
        ? a
        : function () {
            return a;
          };
    }
    function Ba(a) {
      return function (b, c, d) {
        return (
          2 === arguments.length &&
            "function" == typeof c &&
            ((d = c), (c = null)),
          Ca(b, c, a, d)
        );
      };
    }
    function Ca(a, b, c, d) {
      function e() {
        var a,
          b = i.status;
        if ((!b && Ea(i)) || (b >= 200 && 300 > b) || 304 === b) {
          try {
            a = c.call(f, i);
          } catch (d) {
            return void g.error.call(f, d);
          }
          g.load.call(f, a);
        } else g.error.call(f, i);
      }
      var f = {},
        g = bg.dispatch("beforesend", "progress", "load", "error"),
        h = {},
        i = new XMLHttpRequest(),
        j = null;
      return (
        !this.XDomainRequest ||
          "withCredentials" in i ||
          !/^(http(s)?:)?\/\//.test(a) ||
          (i = new XDomainRequest()),
        "onload" in i
          ? (i.onload = i.onerror = e)
          : (i.onreadystatechange = function () {
              i.readyState > 3 && e();
            }),
        (i.onprogress = function (a) {
          var b = bg.event;
          bg.event = a;
          try {
            g.progress.call(f, i);
          } finally {
            bg.event = b;
          }
        }),
        (f.header = function (a, b) {
          return (
            (a = (a + "").toLowerCase()),
            arguments.length < 2
              ? h[a]
              : (null == b ? delete h[a] : (h[a] = b + ""), f)
          );
        }),
        (f.mimeType = function (a) {
          return arguments.length ? ((b = null == a ? null : a + ""), f) : b;
        }),
        (f.responseType = function (a) {
          return arguments.length ? ((j = a), f) : j;
        }),
        (f.response = function (a) {
          return (c = a), f;
        }),
        ["get", "post"].forEach(function (a) {
          f[a] = function () {
            return f.send.apply(f, [a].concat(dg(arguments)));
          };
        }),
        (f.send = function (c, d, e) {
          if (
            (2 === arguments.length &&
              "function" == typeof d &&
              ((e = d), (d = null)),
            i.open(c, a, !0),
            null == b || "accept" in h || (h.accept = b + ",*/*"),
            i.setRequestHeader)
          )
            for (var k in h) i.setRequestHeader(k, h[k]);
          return (
            null != b && i.overrideMimeType && i.overrideMimeType(b),
            null != j && (i.responseType = j),
            null != e &&
              f.on("error", e).on("load", function (a) {
                e(null, a);
              }),
            g.beforesend.call(f, i),
            i.send(null == d ? null : d),
            f
          );
        }),
        (f.abort = function () {
          return i.abort(), f;
        }),
        bg.rebind(f, g, "on"),
        null == d ? f : f.get(Da(d))
      );
    }
    function Da(a) {
      return 1 === a.length
        ? function (b, c) {
            a(null == b ? c : null);
          }
        : a;
    }
    function Ea(a) {
      var b = a.responseType;
      return b && "text" !== b ? a.response : a.responseText;
    }
    function Fa() {
      var a = Ga(),
        b = Ha() - a;
      b > 24
        ? (isFinite(b) && (clearTimeout(bh), (bh = setTimeout(Fa, b))),
          (ah = 0))
        : ((ah = 1), dh(Fa));
    }
    function Ga() {
      var a = Date.now();
      for (ch = $g; ch; ) a >= ch.t && (ch.f = ch.c(a - ch.t)), (ch = ch.n);
      return a;
    }
    function Ha() {
      for (var a, b = $g, c = 1 / 0; b; )
        b.f
          ? (b = a ? (a.n = b.n) : ($g = b.n))
          : (b.t < c && (c = b.t), (b = (a = b).n));
      return (_g = a), c;
    }
    function Ia(a, b) {
      return b - (a ? Math.ceil(Math.log(a) / Math.LN10) : 1);
    }
    function Ja(a, b) {
      var c = Math.pow(10, 3 * ng(8 - b));
      return {
        scale:
          b > 8
            ? function (a) {
                return a / c;
              }
            : function (a) {
                return a * c;
              },
        symbol: a,
      };
    }
    function Ka(a) {
      var b = a.decimal,
        c = a.thousands,
        d = a.grouping,
        e = a.currency,
        f =
          d && c
            ? function (a, b) {
                for (
                  var e = a.length, f = [], g = 0, h = d[0], i = 0;
                  e > 0 &&
                  h > 0 &&
                  (i + h + 1 > b && (h = Math.max(1, b - i)),
                  f.push(a.substring((e -= h), e + h)),
                  !((i += h + 1) > b));

                )
                  h = d[(g = (g + 1) % d.length)];
                return f.reverse().join(c);
              }
            : s;
      return function (a) {
        var c = fh.exec(a),
          d = c[1] || " ",
          g = c[2] || ">",
          h = c[3] || "-",
          i = c[4] || "",
          j = c[5],
          k = +c[6],
          l = c[7],
          m = c[8],
          n = c[9],
          o = 1,
          p = "",
          q = "",
          r = !1,
          s = !0;
        switch (
          (m && (m = +m.substring(1)),
          (j || ("0" === d && "=" === g)) && ((j = d = "0"), (g = "=")),
          n)
        ) {
          case "n":
            (l = !0), (n = "g");
            break;
          case "%":
            (o = 100), (q = "%"), (n = "f");
            break;
          case "p":
            (o = 100), (q = "%"), (n = "r");
            break;
          case "b":
          case "o":
          case "x":
          case "X":
            "#" === i && (p = "0" + n.toLowerCase());
          case "c":
            s = !1;
          case "d":
            (r = !0), (m = 0);
            break;
          case "s":
            (o = -1), (n = "r");
        }
        "$" === i && ((p = e[0]), (q = e[1])),
          "r" != n || m || (n = "g"),
          null != m &&
            ("g" == n
              ? (m = Math.max(1, Math.min(21, m)))
              : ("e" == n || "f" == n) && (m = Math.max(0, Math.min(20, m)))),
          (n = gh.get(n) || La);
        var t = j && l;
        return function (a) {
          var c = q;
          if (r && a % 1) return "";
          var e =
            0 > a || (0 === a && 0 > 1 / a)
              ? ((a = -a), "-")
              : "-" === h
              ? ""
              : h;
          if (0 > o) {
            var i = bg.formatPrefix(a, m);
            (a = i.scale(a)), (c = i.symbol + q);
          } else a *= o;
          a = n(a, m);
          var u,
            v,
            w = a.lastIndexOf(".");
          if (0 > w) {
            var x = s ? a.lastIndexOf("e") : -1;
            0 > x
              ? ((u = a), (v = ""))
              : ((u = a.substring(0, x)), (v = a.substring(x)));
          } else (u = a.substring(0, w)), (v = b + a.substring(w + 1));
          !j && l && (u = f(u, 1 / 0));
          var y = p.length + u.length + v.length + (t ? 0 : e.length),
            z = k > y ? new Array((y = k - y + 1)).join(d) : "";
          return (
            t && (u = f(z + u, z.length ? k - v.length : 1 / 0)),
            (e += p),
            (a = u + v),
            ("<" === g
              ? e + a + z
              : ">" === g
              ? z + e + a
              : "^" === g
              ? z.substring(0, (y >>= 1)) + e + a + z.substring(y)
              : e + (t ? a : z + a)) + c
          );
        };
      };
    }
    function La(a) {
      return a + "";
    }
    function Ma() {
      this._ = new Date(
        arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]
      );
    }
    function Na(a, b, c) {
      function d(b) {
        var c = a(b),
          d = f(c, 1);
        return d - b > b - c ? c : d;
      }
      function e(c) {
        return b((c = a(new ih(c - 1))), 1), c;
      }
      function f(a, c) {
        return b((a = new ih(+a)), c), a;
      }
      function g(a, d, f) {
        var g = e(a),
          h = [];
        if (f > 1) for (; d > g; ) c(g) % f || h.push(new Date(+g)), b(g, 1);
        else for (; d > g; ) h.push(new Date(+g)), b(g, 1);
        return h;
      }
      function h(a, b, c) {
        try {
          ih = Ma;
          var d = new Ma();
          return (d._ = a), g(d, b, c);
        } finally {
          ih = Date;
        }
      }
      (a.floor = a), (a.round = d), (a.ceil = e), (a.offset = f), (a.range = g);
      var i = (a.utc = Oa(a));
      return (
        (i.floor = i),
        (i.round = Oa(d)),
        (i.ceil = Oa(e)),
        (i.offset = Oa(f)),
        (i.range = h),
        a
      );
    }
    function Oa(a) {
      return function (b, c) {
        try {
          ih = Ma;
          var d = new Ma();
          return (d._ = b), a(d, c)._;
        } finally {
          ih = Date;
        }
      };
    }
    function Pa(a) {
      function b(a) {
        function b(b) {
          for (var c, e, f, g = [], h = -1, i = 0; ++h < d; )
            37 === a.charCodeAt(h) &&
              (g.push(a.slice(i, h)),
              null != (e = kh[(c = a.charAt(++h))]) && (c = a.charAt(++h)),
              (f = C[c]) && (c = f(b, null == e ? ("e" === c ? " " : "0") : e)),
              g.push(c),
              (i = h + 1));
          return g.push(a.slice(i, h)), g.join("");
        }
        var d = a.length;
        return (
          (b.parse = function (b) {
            var d = { y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null },
              e = c(d, a, b, 0);
            if (e != b.length) return null;
            "p" in d && (d.H = (d.H % 12) + 12 * d.p);
            var f = null != d.Z && ih !== Ma,
              g = new (f ? Ma : ih)();
            return (
              "j" in d
                ? g.setFullYear(d.y, 0, d.j)
                : "w" in d && ("W" in d || "U" in d)
                ? (g.setFullYear(d.y, 0, 1),
                  g.setFullYear(
                    d.y,
                    0,
                    "W" in d
                      ? ((d.w + 6) % 7) + 7 * d.W - ((g.getDay() + 5) % 7)
                      : d.w + 7 * d.U - ((g.getDay() + 6) % 7)
                  ))
                : g.setFullYear(d.y, d.m, d.d),
              g.setHours(d.H + ((d.Z / 100) | 0), d.M + (d.Z % 100), d.S, d.L),
              f ? g._ : g
            );
          }),
          (b.toString = function () {
            return a;
          }),
          b
        );
      }
      function c(a, b, c, d) {
        for (var e, f, g, h = 0, i = b.length, j = c.length; i > h; ) {
          if (d >= j) return -1;
          if (((e = b.charCodeAt(h++)), 37 === e)) {
            if (
              ((g = b.charAt(h++)),
              (f = D[g in kh ? b.charAt(h++) : g]),
              !f || (d = f(a, c, d)) < 0)
            )
              return -1;
          } else if (e != c.charCodeAt(d++)) return -1;
        }
        return d;
      }
      function d(a, b, c) {
        w.lastIndex = 0;
        var d = w.exec(b.slice(c));
        return d ? ((a.w = x.get(d[0].toLowerCase())), c + d[0].length) : -1;
      }
      function e(a, b, c) {
        u.lastIndex = 0;
        var d = u.exec(b.slice(c));
        return d ? ((a.w = v.get(d[0].toLowerCase())), c + d[0].length) : -1;
      }
      function f(a, b, c) {
        A.lastIndex = 0;
        var d = A.exec(b.slice(c));
        return d ? ((a.m = B.get(d[0].toLowerCase())), c + d[0].length) : -1;
      }
      function g(a, b, c) {
        y.lastIndex = 0;
        var d = y.exec(b.slice(c));
        return d ? ((a.m = z.get(d[0].toLowerCase())), c + d[0].length) : -1;
      }
      function h(a, b, d) {
        return c(a, C.c.toString(), b, d);
      }
      function i(a, b, d) {
        return c(a, C.x.toString(), b, d);
      }
      function j(a, b, d) {
        return c(a, C.X.toString(), b, d);
      }
      function k(a, b, c) {
        var d = t.get(b.slice(c, (c += 2)).toLowerCase());
        return null == d ? -1 : ((a.p = d), c);
      }
      var l = a.dateTime,
        m = a.date,
        n = a.time,
        o = a.periods,
        p = a.days,
        q = a.shortDays,
        r = a.months,
        s = a.shortMonths;
      (b.utc = function (a) {
        function c(a) {
          try {
            ih = Ma;
            var b = new ih();
            return (b._ = a), d(b);
          } finally {
            ih = Date;
          }
        }
        var d = b(a);
        return (
          (c.parse = function (a) {
            try {
              ih = Ma;
              var b = d.parse(a);
              return b && b._;
            } finally {
              ih = Date;
            }
          }),
          (c.toString = d.toString),
          c
        );
      }),
        (b.multi = b.utc.multi = hb);
      var t = bg.map(),
        u = Ra(p),
        v = Sa(p),
        w = Ra(q),
        x = Sa(q),
        y = Ra(r),
        z = Sa(r),
        A = Ra(s),
        B = Sa(s);
      o.forEach(function (a, b) {
        t.set(a.toLowerCase(), b);
      });
      var C = {
          a: function (a) {
            return q[a.getDay()];
          },
          A: function (a) {
            return p[a.getDay()];
          },
          b: function (a) {
            return s[a.getMonth()];
          },
          B: function (a) {
            return r[a.getMonth()];
          },
          c: b(l),
          d: function (a, b) {
            return Qa(a.getDate(), b, 2);
          },
          e: function (a, b) {
            return Qa(a.getDate(), b, 2);
          },
          H: function (a, b) {
            return Qa(a.getHours(), b, 2);
          },
          I: function (a, b) {
            return Qa(a.getHours() % 12 || 12, b, 2);
          },
          j: function (a, b) {
            return Qa(1 + hh.dayOfYear(a), b, 3);
          },
          L: function (a, b) {
            return Qa(a.getMilliseconds(), b, 3);
          },
          m: function (a, b) {
            return Qa(a.getMonth() + 1, b, 2);
          },
          M: function (a, b) {
            return Qa(a.getMinutes(), b, 2);
          },
          p: function (a) {
            return o[+(a.getHours() >= 12)];
          },
          S: function (a, b) {
            return Qa(a.getSeconds(), b, 2);
          },
          U: function (a, b) {
            return Qa(hh.sundayOfYear(a), b, 2);
          },
          w: function (a) {
            return a.getDay();
          },
          W: function (a, b) {
            return Qa(hh.mondayOfYear(a), b, 2);
          },
          x: b(m),
          X: b(n),
          y: function (a, b) {
            return Qa(a.getFullYear() % 100, b, 2);
          },
          Y: function (a, b) {
            return Qa(a.getFullYear() % 1e4, b, 4);
          },
          Z: fb,
          "%": function () {
            return "%";
          },
        },
        D = {
          a: d,
          A: e,
          b: f,
          B: g,
          c: h,
          d: _a,
          e: _a,
          H: bb,
          I: bb,
          j: ab,
          L: eb,
          m: $a,
          M: cb,
          p: k,
          S: db,
          U: Ua,
          w: Ta,
          W: Va,
          x: i,
          X: j,
          y: Xa,
          Y: Wa,
          Z: Ya,
          "%": gb,
        };
      return b;
    }
    function Qa(a, b, c) {
      var d = 0 > a ? "-" : "",
        e = (d ? -a : a) + "",
        f = e.length;
      return d + (c > f ? new Array(c - f + 1).join(b) + e : e);
    }
    function Ra(a) {
      return new RegExp("^(?:" + a.map(bg.requote).join("|") + ")", "i");
    }
    function Sa(a) {
      for (var b = new j(), c = -1, d = a.length; ++c < d; )
        b.set(a[c].toLowerCase(), c);
      return b;
    }
    function Ta(a, b, c) {
      lh.lastIndex = 0;
      var d = lh.exec(b.slice(c, c + 1));
      return d ? ((a.w = +d[0]), c + d[0].length) : -1;
    }
    function Ua(a, b, c) {
      lh.lastIndex = 0;
      var d = lh.exec(b.slice(c));
      return d ? ((a.U = +d[0]), c + d[0].length) : -1;
    }
    function Va(a, b, c) {
      lh.lastIndex = 0;
      var d = lh.exec(b.slice(c));
      return d ? ((a.W = +d[0]), c + d[0].length) : -1;
    }
    function Wa(a, b, c) {
      lh.lastIndex = 0;
      var d = lh.exec(b.slice(c, c + 4));
      return d ? ((a.y = +d[0]), c + d[0].length) : -1;
    }
    function Xa(a, b, c) {
      lh.lastIndex = 0;
      var d = lh.exec(b.slice(c, c + 2));
      return d ? ((a.y = Za(+d[0])), c + d[0].length) : -1;
    }
    function Ya(a, b, c) {
      return /^[+-]\d{4}$/.test((b = b.slice(c, c + 5)))
        ? ((a.Z = -b), c + 5)
        : -1;
    }
    function Za(a) {
      return a + (a > 68 ? 1900 : 2e3);
    }
    function $a(a, b, c) {
      lh.lastIndex = 0;
      var d = lh.exec(b.slice(c, c + 2));
      return d ? ((a.m = d[0] - 1), c + d[0].length) : -1;
    }
    function _a(a, b, c) {
      lh.lastIndex = 0;
      var d = lh.exec(b.slice(c, c + 2));
      return d ? ((a.d = +d[0]), c + d[0].length) : -1;
    }
    function ab(a, b, c) {
      lh.lastIndex = 0;
      var d = lh.exec(b.slice(c, c + 3));
      return d ? ((a.j = +d[0]), c + d[0].length) : -1;
    }
    function bb(a, b, c) {
      lh.lastIndex = 0;
      var d = lh.exec(b.slice(c, c + 2));
      return d ? ((a.H = +d[0]), c + d[0].length) : -1;
    }
    function cb(a, b, c) {
      lh.lastIndex = 0;
      var d = lh.exec(b.slice(c, c + 2));
      return d ? ((a.M = +d[0]), c + d[0].length) : -1;
    }
    function db(a, b, c) {
      lh.lastIndex = 0;
      var d = lh.exec(b.slice(c, c + 2));
      return d ? ((a.S = +d[0]), c + d[0].length) : -1;
    }
    function eb(a, b, c) {
      lh.lastIndex = 0;
      var d = lh.exec(b.slice(c, c + 3));
      return d ? ((a.L = +d[0]), c + d[0].length) : -1;
    }
    function fb(a) {
      var b = a.getTimezoneOffset(),
        c = b > 0 ? "-" : "+",
        d = (ng(b) / 60) | 0,
        e = ng(b) % 60;
      return c + Qa(d, "0", 2) + Qa(e, "0", 2);
    }
    function gb(a, b, c) {
      mh.lastIndex = 0;
      var d = mh.exec(b.slice(c, c + 1));
      return d ? c + d[0].length : -1;
    }
    function hb(a) {
      for (var b = a.length, c = -1; ++c < b; ) a[c][0] = this(a[c][0]);
      return function (b) {
        for (var c = 0, d = a[c]; !d[1](b); ) d = a[++c];
        return d[0](b);
      };
    }
    function ib() {}
    function jb(a, b, c) {
      var d = (c.s = a + b),
        e = d - a,
        f = d - e;
      c.t = a - f + (b - e);
    }
    function kb(a, b) {
      a && qh.hasOwnProperty(a.type) && qh[a.type](a, b);
    }
    function lb(a, b, c) {
      var d,
        e = -1,
        f = a.length - c;
      for (b.lineStart(); ++e < f; ) (d = a[e]), b.point(d[0], d[1], d[2]);
      b.lineEnd();
    }
    function mb(a, b) {
      var c = -1,
        d = a.length;
      for (b.polygonStart(); ++c < d; ) lb(a[c], b, 1);
      b.polygonEnd();
    }
    function nb() {
      function a(a, b) {
        (a *= Jg), (b = (b * Jg) / 2 + Fg / 4);
        var c = a - d,
          g = c >= 0 ? 1 : -1,
          h = g * c,
          i = Math.cos(b),
          j = Math.sin(b),
          k = f * j,
          l = e * i + k * Math.cos(h),
          m = k * g * Math.sin(h);
        sh.add(Math.atan2(m, l)), (d = a), (e = i), (f = j);
      }
      var b, c, d, e, f;
      (th.point = function (g, h) {
        (th.point = a),
          (d = (b = g) * Jg),
          (e = Math.cos((h = ((c = h) * Jg) / 2 + Fg / 4))),
          (f = Math.sin(h));
      }),
        (th.lineEnd = function () {
          a(b, c);
        });
    }
    function ob(a) {
      var b = a[0],
        c = a[1],
        d = Math.cos(c);
      return [d * Math.cos(b), d * Math.sin(b), Math.sin(c)];
    }
    function pb(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }
    function qb(a, b) {
      return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0],
      ];
    }
    function rb(a, b) {
      (a[0] += b[0]), (a[1] += b[1]), (a[2] += b[2]);
    }
    function sb(a, b) {
      return [a[0] * b, a[1] * b, a[2] * b];
    }
    function tb(a) {
      var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
      (a[0] /= b), (a[1] /= b), (a[2] /= b);
    }
    function ub(a) {
      return [Math.atan2(a[1], a[0]), ba(a[2])];
    }
    function vb(a, b) {
      return ng(a[0] - b[0]) < Dg && ng(a[1] - b[1]) < Dg;
    }
    function wb(a, b) {
      a *= Jg;
      var c = Math.cos((b *= Jg));
      xb(c * Math.cos(a), c * Math.sin(a), Math.sin(b));
    }
    function xb(a, b, c) {
      ++uh, (wh += (a - wh) / uh), (xh += (b - xh) / uh), (yh += (c - yh) / uh);
    }
    function yb() {
      function a(a, e) {
        a *= Jg;
        var f = Math.cos((e *= Jg)),
          g = f * Math.cos(a),
          h = f * Math.sin(a),
          i = Math.sin(e),
          j = Math.atan2(
            Math.sqrt(
              (j = c * i - d * h) * j +
                (j = d * g - b * i) * j +
                (j = b * h - c * g) * j
            ),
            b * g + c * h + d * i
          );
        (vh += j),
          (zh += j * (b + (b = g))),
          (Ah += j * (c + (c = h))),
          (Bh += j * (d + (d = i))),
          xb(b, c, d);
      }
      var b, c, d;
      Fh.point = function (e, f) {
        e *= Jg;
        var g = Math.cos((f *= Jg));
        (b = g * Math.cos(e)),
          (c = g * Math.sin(e)),
          (d = Math.sin(f)),
          (Fh.point = a),
          xb(b, c, d);
      };
    }
    function zb() {
      Fh.point = wb;
    }
    function Ab() {
      function a(a, b) {
        a *= Jg;
        var c = Math.cos((b *= Jg)),
          g = c * Math.cos(a),
          h = c * Math.sin(a),
          i = Math.sin(b),
          j = e * i - f * h,
          k = f * g - d * i,
          l = d * h - e * g,
          m = Math.sqrt(j * j + k * k + l * l),
          n = d * g + e * h + f * i,
          o = m && -aa(n) / m,
          p = Math.atan2(m, n);
        (Ch += o * j),
          (Dh += o * k),
          (Eh += o * l),
          (vh += p),
          (zh += p * (d + (d = g))),
          (Ah += p * (e + (e = h))),
          (Bh += p * (f + (f = i))),
          xb(d, e, f);
      }
      var b, c, d, e, f;
      (Fh.point = function (g, h) {
        (b = g), (c = h), (Fh.point = a), (g *= Jg);
        var i = Math.cos((h *= Jg));
        (d = i * Math.cos(g)),
          (e = i * Math.sin(g)),
          (f = Math.sin(h)),
          xb(d, e, f);
      }),
        (Fh.lineEnd = function () {
          a(b, c), (Fh.lineEnd = zb), (Fh.point = wb);
        });
    }
    function Bb(a, b) {
      function c(c, d) {
        return (c = a(c, d)), b(c[0], c[1]);
      }
      return (
        a.invert &&
          b.invert &&
          (c.invert = function (c, d) {
            return (c = b.invert(c, d)), c && a.invert(c[0], c[1]);
          }),
        c
      );
    }
    function Cb() {
      return !0;
    }
    function Db(a, b, c, d, e) {
      var f = [],
        g = [];
      if (
        (a.forEach(function (a) {
          if (!((b = a.length - 1) <= 0)) {
            var b,
              c = a[0],
              d = a[b];
            if (vb(c, d)) {
              e.lineStart();
              for (var h = 0; b > h; ++h) e.point((c = a[h])[0], c[1]);
              return void e.lineEnd();
            }
            var i = new Fb(c, a, null, !0),
              j = new Fb(c, null, i, !1);
            (i.o = j),
              f.push(i),
              g.push(j),
              (i = new Fb(d, a, null, !1)),
              (j = new Fb(d, null, i, !0)),
              (i.o = j),
              f.push(i),
              g.push(j);
          }
        }),
        g.sort(b),
        Eb(f),
        Eb(g),
        f.length)
      ) {
        for (var h = 0, i = c, j = g.length; j > h; ++h) g[h].e = i = !i;
        for (var k, l, m = f[0]; ; ) {
          for (var n = m, o = !0; n.v; ) if ((n = n.n) === m) return;
          (k = n.z), e.lineStart();
          do {
            if (((n.v = n.o.v = !0), n.e)) {
              if (o)
                for (var h = 0, j = k.length; j > h; ++h)
                  e.point((l = k[h])[0], l[1]);
              else d(n.x, n.n.x, 1, e);
              n = n.n;
            } else {
              if (o) {
                k = n.p.z;
                for (var h = k.length - 1; h >= 0; --h)
                  e.point((l = k[h])[0], l[1]);
              } else d(n.x, n.p.x, -1, e);
              n = n.p;
            }
            (n = n.o), (k = n.z), (o = !o);
          } while (!n.v);
          e.lineEnd();
        }
      }
    }
    function Eb(a) {
      if ((b = a.length)) {
        for (var b, c, d = 0, e = a[0]; ++d < b; )
          (e.n = c = a[d]), (c.p = e), (e = c);
        (e.n = c = a[0]), (c.p = e);
      }
    }
    function Fb(a, b, c, d) {
      (this.x = a),
        (this.z = b),
        (this.o = c),
        (this.e = d),
        (this.v = !1),
        (this.n = this.p = null);
    }
    function Gb(a, b, c, d) {
      return function (e, f) {
        function g(b, c) {
          var d = e(b, c);
          a((b = d[0]), (c = d[1])) && f.point(b, c);
        }
        function h(a, b) {
          var c = e(a, b);
          q.point(c[0], c[1]);
        }
        function i() {
          (s.point = h), q.lineStart();
        }
        function j() {
          (s.point = g), q.lineEnd();
        }
        function k(a, b) {
          p.push([a, b]);
          var c = e(a, b);
          u.point(c[0], c[1]);
        }
        function l() {
          u.lineStart(), (p = []);
        }
        function m() {
          k(p[0][0], p[0][1]), u.lineEnd();
          var a,
            b = u.clean(),
            c = t.buffer(),
            d = c.length;
          if ((p.pop(), o.push(p), (p = null), d))
            if (1 & b) {
              a = c[0];
              var e,
                d = a.length - 1,
                g = -1;
              if (d > 0) {
                for (
                  v || (f.polygonStart(), (v = !0)), f.lineStart();
                  ++g < d;

                )
                  f.point((e = a[g])[0], e[1]);
                f.lineEnd();
              }
            } else
              d > 1 && 2 & b && c.push(c.pop().concat(c.shift())),
                n.push(c.filter(Hb));
        }
        var n,
          o,
          p,
          q = b(f),
          r = e.invert(d[0], d[1]),
          s = {
            point: g,
            lineStart: i,
            lineEnd: j,
            polygonStart: function () {
              (s.point = k),
                (s.lineStart = l),
                (s.lineEnd = m),
                (n = []),
                (o = []);
            },
            polygonEnd: function () {
              (s.point = g),
                (s.lineStart = i),
                (s.lineEnd = j),
                (n = bg.merge(n));
              var a = Nb(r, o);
              n.length
                ? (v || (f.polygonStart(), (v = !0)), Db(n, Jb, a, c, f))
                : a &&
                  (v || (f.polygonStart(), (v = !0)),
                  f.lineStart(),
                  c(null, null, 1, f),
                  f.lineEnd()),
                v && (f.polygonEnd(), (v = !1)),
                (n = o = null);
            },
            sphere: function () {
              f.polygonStart(),
                f.lineStart(),
                c(null, null, 1, f),
                f.lineEnd(),
                f.polygonEnd();
            },
          },
          t = Ib(),
          u = b(t),
          v = !1;
        return s;
      };
    }
    function Hb(a) {
      return a.length > 1;
    }
    function Ib() {
      var a,
        b = [];
      return {
        lineStart: function () {
          b.push((a = []));
        },
        point: function (b, c) {
          a.push([b, c]);
        },
        lineEnd: v,
        buffer: function () {
          var c = b;
          return (b = []), (a = null), c;
        },
        rejoin: function () {
          b.length > 1 && b.push(b.pop().concat(b.shift()));
        },
      };
    }
    function Jb(a, b) {
      return (
        ((a = a.x)[0] < 0 ? a[1] - Ig - Dg : Ig - a[1]) -
        ((b = b.x)[0] < 0 ? b[1] - Ig - Dg : Ig - b[1])
      );
    }
    function Kb(a) {
      var b,
        c = NaN,
        d = NaN,
        e = NaN;
      return {
        lineStart: function () {
          a.lineStart(), (b = 1);
        },
        point: function (f, g) {
          var h = f > 0 ? Fg : -Fg,
            i = ng(f - c);
          ng(i - Fg) < Dg
            ? (a.point(c, (d = (d + g) / 2 > 0 ? Ig : -Ig)),
              a.point(e, d),
              a.lineEnd(),
              a.lineStart(),
              a.point(h, d),
              a.point(f, d),
              (b = 0))
            : e !== h &&
              i >= Fg &&
              (ng(c - e) < Dg && (c -= e * Dg),
              ng(f - h) < Dg && (f -= h * Dg),
              (d = Lb(c, d, f, g)),
              a.point(e, d),
              a.lineEnd(),
              a.lineStart(),
              a.point(h, d),
              (b = 0)),
            a.point((c = f), (d = g)),
            (e = h);
        },
        lineEnd: function () {
          a.lineEnd(), (c = d = NaN);
        },
        clean: function () {
          return 2 - b;
        },
      };
    }
    function Lb(a, b, c, d) {
      var e,
        f,
        g = Math.sin(a - c);
      return ng(g) > Dg
        ? Math.atan(
            (Math.sin(b) * (f = Math.cos(d)) * Math.sin(c) -
              Math.sin(d) * (e = Math.cos(b)) * Math.sin(a)) /
              (e * f * g)
          )
        : (b + d) / 2;
    }
    function Mb(a, b, c, d) {
      var e;
      if (null == a)
        (e = c * Ig),
          d.point(-Fg, e),
          d.point(0, e),
          d.point(Fg, e),
          d.point(Fg, 0),
          d.point(Fg, -e),
          d.point(0, -e),
          d.point(-Fg, -e),
          d.point(-Fg, 0),
          d.point(-Fg, e);
      else if (ng(a[0] - b[0]) > Dg) {
        var f = a[0] < b[0] ? Fg : -Fg;
        (e = (c * f) / 2), d.point(-f, e), d.point(0, e), d.point(f, e);
      } else d.point(b[0], b[1]);
    }
    function Nb(a, b) {
      var c = a[0],
        d = a[1],
        e = [Math.sin(c), -Math.cos(c), 0],
        f = 0,
        g = 0;
      sh.reset();
      for (var h = 0, i = b.length; i > h; ++h) {
        var j = b[h],
          k = j.length;
        if (k)
          for (
            var l = j[0],
              m = l[0],
              n = l[1] / 2 + Fg / 4,
              o = Math.sin(n),
              p = Math.cos(n),
              q = 1;
            ;

          ) {
            q === k && (q = 0), (a = j[q]);
            var r = a[0],
              s = a[1] / 2 + Fg / 4,
              t = Math.sin(s),
              u = Math.cos(s),
              v = r - m,
              w = v >= 0 ? 1 : -1,
              x = w * v,
              y = x > Fg,
              z = o * t;
            if (
              (sh.add(Math.atan2(z * w * Math.sin(x), p * u + z * Math.cos(x))),
              (f += y ? v + w * Gg : v),
              y ^ (m >= c) ^ (r >= c))
            ) {
              var A = qb(ob(l), ob(a));
              tb(A);
              var B = qb(e, A);
              tb(B);
              var C = (y ^ (v >= 0) ? -1 : 1) * ba(B[2]);
              (d > C || (d === C && (A[0] || A[1]))) &&
                (g += y ^ (v >= 0) ? 1 : -1);
            }
            if (!q++) break;
            (m = r), (o = t), (p = u), (l = a);
          }
      }
      return (-Dg > f || (Dg > f && 0 > sh)) ^ (1 & g);
    }
    function Ob(a) {
      function b(a, b) {
        return Math.cos(a) * Math.cos(b) > f;
      }
      function c(a) {
        var c, f, i, j, k;
        return {
          lineStart: function () {
            (j = i = !1), (k = 1);
          },
          point: function (l, m) {
            var n,
              o = [l, m],
              p = b(l, m),
              q = g ? (p ? 0 : e(l, m)) : p ? e(l + (0 > l ? Fg : -Fg), m) : 0;
            if (
              (!c && (j = i = p) && a.lineStart(),
              p !== i &&
                ((n = d(c, o)),
                (vb(c, n) || vb(o, n)) &&
                  ((o[0] += Dg), (o[1] += Dg), (p = b(o[0], o[1])))),
              p !== i)
            )
              (k = 0),
                p
                  ? (a.lineStart(), (n = d(o, c)), a.point(n[0], n[1]))
                  : ((n = d(c, o)), a.point(n[0], n[1]), a.lineEnd()),
                (c = n);
            else if (h && c && g ^ p) {
              var r;
              q & f ||
                !(r = d(o, c, !0)) ||
                ((k = 0),
                g
                  ? (a.lineStart(),
                    a.point(r[0][0], r[0][1]),
                    a.point(r[1][0], r[1][1]),
                    a.lineEnd())
                  : (a.point(r[1][0], r[1][1]),
                    a.lineEnd(),
                    a.lineStart(),
                    a.point(r[0][0], r[0][1])));
            }
            !p || (c && vb(c, o)) || a.point(o[0], o[1]),
              (c = o),
              (i = p),
              (f = q);
          },
          lineEnd: function () {
            i && a.lineEnd(), (c = null);
          },
          clean: function () {
            return k | ((j && i) << 1);
          },
        };
      }
      function d(a, b, c) {
        var d = ob(a),
          e = ob(b),
          g = [1, 0, 0],
          h = qb(d, e),
          i = pb(h, h),
          j = h[0],
          k = i - j * j;
        if (!k) return !c && a;
        var l = (f * i) / k,
          m = (-f * j) / k,
          n = qb(g, h),
          o = sb(g, l),
          p = sb(h, m);
        rb(o, p);
        var q = n,
          r = pb(o, q),
          s = pb(q, q),
          t = r * r - s * (pb(o, o) - 1);
        if (!(0 > t)) {
          var u = Math.sqrt(t),
            v = sb(q, (-r - u) / s);
          if ((rb(v, o), (v = ub(v)), !c)) return v;
          var w,
            x = a[0],
            y = b[0],
            z = a[1],
            A = b[1];
          x > y && ((w = x), (x = y), (y = w));
          var B = y - x,
            C = ng(B - Fg) < Dg,
            D = C || Dg > B;
          if (
            (!C && z > A && ((w = z), (z = A), (A = w)),
            D
              ? C
                ? (z + A > 0) ^ (v[1] < (ng(v[0] - x) < Dg ? z : A))
                : z <= v[1] && v[1] <= A
              : (B > Fg) ^ (x <= v[0] && v[0] <= y))
          ) {
            var E = sb(q, (-r + u) / s);
            return rb(E, o), [v, ub(E)];
          }
        }
      }
      function e(b, c) {
        var d = g ? a : Fg - a,
          e = 0;
        return (
          -d > b ? (e |= 1) : b > d && (e |= 2),
          -d > c ? (e |= 4) : c > d && (e |= 8),
          e
        );
      }
      var f = Math.cos(a),
        g = f > 0,
        h = ng(f) > Dg,
        i = nc(a, 6 * Jg);
      return Gb(b, c, i, g ? [0, -a] : [-Fg, a - Fg]);
    }
    function Pb(a, b, c, d) {
      return function (e) {
        var f,
          g = e.a,
          h = e.b,
          i = g.x,
          j = g.y,
          k = h.x,
          l = h.y,
          m = 0,
          n = 1,
          o = k - i,
          p = l - j;
        if (((f = a - i), o || !(f > 0))) {
          if (((f /= o), 0 > o)) {
            if (m > f) return;
            n > f && (n = f);
          } else if (o > 0) {
            if (f > n) return;
            f > m && (m = f);
          }
          if (((f = c - i), o || !(0 > f))) {
            if (((f /= o), 0 > o)) {
              if (f > n) return;
              f > m && (m = f);
            } else if (o > 0) {
              if (m > f) return;
              n > f && (n = f);
            }
            if (((f = b - j), p || !(f > 0))) {
              if (((f /= p), 0 > p)) {
                if (m > f) return;
                n > f && (n = f);
              } else if (p > 0) {
                if (f > n) return;
                f > m && (m = f);
              }
              if (((f = d - j), p || !(0 > f))) {
                if (((f /= p), 0 > p)) {
                  if (f > n) return;
                  f > m && (m = f);
                } else if (p > 0) {
                  if (m > f) return;
                  n > f && (n = f);
                }
                return (
                  m > 0 && (e.a = { x: i + m * o, y: j + m * p }),
                  1 > n && (e.b = { x: i + n * o, y: j + n * p }),
                  e
                );
              }
            }
          }
        }
      };
    }
    function Qb(a, b, c, d) {
      function e(d, e) {
        return ng(d[0] - a) < Dg
          ? e > 0
            ? 0
            : 3
          : ng(d[0] - c) < Dg
          ? e > 0
            ? 2
            : 1
          : ng(d[1] - b) < Dg
          ? e > 0
            ? 1
            : 0
          : e > 0
          ? 3
          : 2;
      }
      function f(a, b) {
        return g(a.x, b.x);
      }
      function g(a, b) {
        var c = e(a, 1),
          d = e(b, 1);
        return c !== d
          ? c - d
          : 0 === c
          ? b[1] - a[1]
          : 1 === c
          ? a[0] - b[0]
          : 2 === c
          ? a[1] - b[1]
          : b[0] - a[0];
      }
      return function (h) {
        function i(a) {
          for (var b = 0, c = q.length, d = a[1], e = 0; c > e; ++e)
            for (var f, g = 1, h = q[e], i = h.length, j = h[0]; i > g; ++g)
              (f = h[g]),
                j[1] <= d
                  ? f[1] > d && _(j, f, a) > 0 && ++b
                  : f[1] <= d && _(j, f, a) < 0 && --b,
                (j = f);
          return 0 !== b;
        }
        function j(f, h, i, j) {
          var k = 0,
            l = 0;
          if (
            null == f ||
            (k = e(f, i)) !== (l = e(h, i)) ||
            (g(f, h) < 0) ^ (i > 0)
          ) {
            do j.point(0 === k || 3 === k ? a : c, k > 1 ? d : b);
            while ((k = (k + i + 4) % 4) !== l);
          } else j.point(h[0], h[1]);
        }
        function k(e, f) {
          return e >= a && c >= e && f >= b && d >= f;
        }
        function l(a, b) {
          k(a, b) && h.point(a, b);
        }
        function m() {
          (D.point = o),
            q && q.push((r = [])),
            (y = !0),
            (x = !1),
            (v = w = NaN);
        }
        function n() {
          p && (o(s, t), u && x && B.rejoin(), p.push(B.buffer())),
            (D.point = l),
            x && h.lineEnd();
        }
        function o(a, b) {
          (a = Math.max(-Hh, Math.min(Hh, a))),
            (b = Math.max(-Hh, Math.min(Hh, b)));
          var c = k(a, b);
          if ((q && r.push([a, b]), y))
            (s = a),
              (t = b),
              (u = c),
              (y = !1),
              c && (h.lineStart(), h.point(a, b));
          else if (c && x) h.point(a, b);
          else {
            var d = { a: { x: v, y: w }, b: { x: a, y: b } };
            C(d)
              ? (x || (h.lineStart(), h.point(d.a.x, d.a.y)),
                h.point(d.b.x, d.b.y),
                c || h.lineEnd(),
                (z = !1))
              : c && (h.lineStart(), h.point(a, b), (z = !1));
          }
          (v = a), (w = b), (x = c);
        }
        var p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z,
          A = h,
          B = Ib(),
          C = Pb(a, b, c, d),
          D = {
            point: l,
            lineStart: m,
            lineEnd: n,
            polygonStart: function () {
              (h = B), (p = []), (q = []), (z = !0);
            },
            polygonEnd: function () {
              (h = A), (p = bg.merge(p));
              var b = i([a, d]),
                c = z && b,
                e = p.length;
              (c || e) &&
                (h.polygonStart(),
                c && (h.lineStart(), j(null, null, 1, h), h.lineEnd()),
                e && Db(p, f, b, j, h),
                h.polygonEnd()),
                (p = q = r = null);
            },
          };
        return D;
      };
    }
    function Rb(a) {
      var b = 0,
        c = Fg / 3,
        d = fc(a),
        e = d(b, c);
      return (
        (e.parallels = function (a) {
          return arguments.length
            ? d((b = (a[0] * Fg) / 180), (c = (a[1] * Fg) / 180))
            : [(b / Fg) * 180, (c / Fg) * 180];
        }),
        e
      );
    }
    function Sb(a, b) {
      function c(a, b) {
        var c = Math.sqrt(f - 2 * e * Math.sin(b)) / e;
        return [c * Math.sin((a *= e)), g - c * Math.cos(a)];
      }
      var d = Math.sin(a),
        e = (d + Math.sin(b)) / 2,
        f = 1 + d * (2 * e - d),
        g = Math.sqrt(f) / e;
      return (
        (c.invert = function (a, b) {
          var c = g - b;
          return [
            Math.atan2(a, c) / e,
            ba((f - (a * a + c * c) * e * e) / (2 * e)),
          ];
        }),
        c
      );
    }
    function Tb() {
      function a(a, b) {
        (Jh += e * a - d * b), (d = a), (e = b);
      }
      var b, c, d, e;
      (Oh.point = function (f, g) {
        (Oh.point = a), (b = d = f), (c = e = g);
      }),
        (Oh.lineEnd = function () {
          a(b, c);
        });
    }
    function Ub(a, b) {
      Kh > a && (Kh = a),
        a > Mh && (Mh = a),
        Lh > b && (Lh = b),
        b > Nh && (Nh = b);
    }
    function Vb() {
      function a(a, b) {
        g.push("M", a, ",", b, f);
      }
      function b(a, b) {
        g.push("M", a, ",", b), (h.point = c);
      }
      function c(a, b) {
        g.push("L", a, ",", b);
      }
      function d() {
        h.point = a;
      }
      function e() {
        g.push("Z");
      }
      var f = Wb(4.5),
        g = [],
        h = {
          point: a,
          lineStart: function () {
            h.point = b;
          },
          lineEnd: d,
          polygonStart: function () {
            h.lineEnd = e;
          },
          polygonEnd: function () {
            (h.lineEnd = d), (h.point = a);
          },
          pointRadius: function (a) {
            return (f = Wb(a)), h;
          },
          result: function () {
            if (g.length) {
              var a = g.join("");
              return (g = []), a;
            }
          },
        };
      return h;
    }
    function Wb(a) {
      return (
        "m0," +
        a +
        "a" +
        a +
        "," +
        a +
        " 0 1,1 0," +
        -2 * a +
        "a" +
        a +
        "," +
        a +
        " 0 1,1 0," +
        2 * a +
        "z"
      );
    }
    function Xb(a, b) {
      (wh += a), (xh += b), ++yh;
    }
    function Yb() {
      function a(a, d) {
        var e = a - b,
          f = d - c,
          g = Math.sqrt(e * e + f * f);
        (zh += (g * (b + a)) / 2),
          (Ah += (g * (c + d)) / 2),
          (Bh += g),
          Xb((b = a), (c = d));
      }
      var b, c;
      Qh.point = function (d, e) {
        (Qh.point = a), Xb((b = d), (c = e));
      };
    }
    function Zb() {
      Qh.point = Xb;
    }
    function $b() {
      function a(a, b) {
        var c = a - d,
          f = b - e,
          g = Math.sqrt(c * c + f * f);
        (zh += (g * (d + a)) / 2),
          (Ah += (g * (e + b)) / 2),
          (Bh += g),
          (g = e * a - d * b),
          (Ch += g * (d + a)),
          (Dh += g * (e + b)),
          (Eh += 3 * g),
          Xb((d = a), (e = b));
      }
      var b, c, d, e;
      (Qh.point = function (f, g) {
        (Qh.point = a), Xb((b = d = f), (c = e = g));
      }),
        (Qh.lineEnd = function () {
          a(b, c);
        });
    }
    function _b(a) {
      function b(b, c) {
        a.moveTo(b + g, c), a.arc(b, c, g, 0, Gg);
      }
      function c(b, c) {
        a.moveTo(b, c), (h.point = d);
      }
      function d(b, c) {
        a.lineTo(b, c);
      }
      function e() {
        h.point = b;
      }
      function f() {
        a.closePath();
      }
      var g = 4.5,
        h = {
          point: b,
          lineStart: function () {
            h.point = c;
          },
          lineEnd: e,
          polygonStart: function () {
            h.lineEnd = f;
          },
          polygonEnd: function () {
            (h.lineEnd = e), (h.point = b);
          },
          pointRadius: function (a) {
            return (g = a), h;
          },
          result: v,
        };
      return h;
    }
    function ac(a) {
      function b(a) {
        return (h ? d : c)(a);
      }
      function c(b) {
        return dc(b, function (c, d) {
          (c = a(c, d)), b.point(c[0], c[1]);
        });
      }
      function d(b) {
        function c(c, d) {
          (c = a(c, d)), b.point(c[0], c[1]);
        }
        function d() {
          (t = NaN), (y.point = f), b.lineStart();
        }
        function f(c, d) {
          var f = ob([c, d]),
            g = a(c, d);
          e(
            t,
            u,
            s,
            v,
            w,
            x,
            (t = g[0]),
            (u = g[1]),
            (s = c),
            (v = f[0]),
            (w = f[1]),
            (x = f[2]),
            h,
            b
          ),
            b.point(t, u);
        }
        function g() {
          (y.point = c), b.lineEnd();
        }
        function i() {
          d(), (y.point = j), (y.lineEnd = k);
        }
        function j(a, b) {
          f((l = a), (m = b)),
            (n = t),
            (o = u),
            (p = v),
            (q = w),
            (r = x),
            (y.point = f);
        }
        function k() {
          e(t, u, s, v, w, x, n, o, l, p, q, r, h, b), (y.lineEnd = g), g();
        }
        var l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y = {
            point: c,
            lineStart: d,
            lineEnd: g,
            polygonStart: function () {
              b.polygonStart(), (y.lineStart = i);
            },
            polygonEnd: function () {
              b.polygonEnd(), (y.lineStart = d);
            },
          };
        return y;
      }
      function e(b, c, d, h, i, j, k, l, m, n, o, p, q, r) {
        var s = k - b,
          t = l - c,
          u = s * s + t * t;
        if (u > 4 * f && q--) {
          var v = h + n,
            w = i + o,
            x = j + p,
            y = Math.sqrt(v * v + w * w + x * x),
            z = Math.asin((x /= y)),
            A =
              ng(ng(x) - 1) < Dg || ng(d - m) < Dg
                ? (d + m) / 2
                : Math.atan2(w, v),
            B = a(A, z),
            C = B[0],
            D = B[1],
            E = C - b,
            F = D - c,
            G = t * E - s * F;
          ((G * G) / u > f ||
            ng((s * E + t * F) / u - 0.5) > 0.3 ||
            g > h * n + i * o + j * p) &&
            (e(b, c, d, h, i, j, C, D, A, (v /= y), (w /= y), x, q, r),
            r.point(C, D),
            e(C, D, A, v, w, x, k, l, m, n, o, p, q, r));
        }
      }
      var f = 0.5,
        g = Math.cos(30 * Jg),
        h = 16;
      return (
        (b.precision = function (a) {
          return arguments.length
            ? ((h = (f = a * a) > 0 && 16), b)
            : Math.sqrt(f);
        }),
        b
      );
    }
    function bc(a) {
      var b = ac(function (b, c) {
        return a([b * Kg, c * Kg]);
      });
      return function (a) {
        return gc(b(a));
      };
    }
    function cc(a) {
      this.stream = a;
    }
    function dc(a, b) {
      return {
        point: b,
        sphere: function () {
          a.sphere();
        },
        lineStart: function () {
          a.lineStart();
        },
        lineEnd: function () {
          a.lineEnd();
        },
        polygonStart: function () {
          a.polygonStart();
        },
        polygonEnd: function () {
          a.polygonEnd();
        },
      };
    }
    function ec(a) {
      return fc(function () {
        return a;
      })();
    }
    function fc(a) {
      function b(a) {
        return (a = h(a[0] * Jg, a[1] * Jg)), [a[0] * m + i, j - a[1] * m];
      }
      function c(a) {
        return (
          (a = h.invert((a[0] - i) / m, (j - a[1]) / m)),
          a && [a[0] * Kg, a[1] * Kg]
        );
      }
      function d() {
        h = Bb((g = jc(r, t, u)), f);
        var a = f(p, q);
        return (i = n - a[0] * m), (j = o + a[1] * m), e();
      }
      function e() {
        return k && ((k.valid = !1), (k = null)), b;
      }
      var f,
        g,
        h,
        i,
        j,
        k,
        l = ac(function (a, b) {
          return (a = f(a, b)), [a[0] * m + i, j - a[1] * m];
        }),
        m = 150,
        n = 480,
        o = 250,
        p = 0,
        q = 0,
        r = 0,
        t = 0,
        u = 0,
        v = Gh,
        w = s,
        x = null,
        y = null;
      return (
        (b.stream = function (a) {
          return (
            k && (k.valid = !1), (k = gc(v(g, l(w(a))))), (k.valid = !0), k
          );
        }),
        (b.clipAngle = function (a) {
          return arguments.length
            ? ((v = null == a ? ((x = a), Gh) : Ob((x = +a) * Jg)), e())
            : x;
        }),
        (b.clipExtent = function (a) {
          return arguments.length
            ? ((y = a),
              (w = a ? Qb(a[0][0], a[0][1], a[1][0], a[1][1]) : s),
              e())
            : y;
        }),
        (b.scale = function (a) {
          return arguments.length ? ((m = +a), d()) : m;
        }),
        (b.translate = function (a) {
          return arguments.length ? ((n = +a[0]), (o = +a[1]), d()) : [n, o];
        }),
        (b.center = function (a) {
          return arguments.length
            ? ((p = (a[0] % 360) * Jg), (q = (a[1] % 360) * Jg), d())
            : [p * Kg, q * Kg];
        }),
        (b.rotate = function (a) {
          return arguments.length
            ? ((r = (a[0] % 360) * Jg),
              (t = (a[1] % 360) * Jg),
              (u = a.length > 2 ? (a[2] % 360) * Jg : 0),
              d())
            : [r * Kg, t * Kg, u * Kg];
        }),
        bg.rebind(b, l, "precision"),
        function () {
          return (
            (f = a.apply(this, arguments)), (b.invert = f.invert && c), d()
          );
        }
      );
    }
    function gc(a) {
      return dc(a, function (b, c) {
        a.point(b * Jg, c * Jg);
      });
    }
    function hc(a, b) {
      return [a, b];
    }
    function ic(a, b) {
      return [a > Fg ? a - Gg : -Fg > a ? a + Gg : a, b];
    }
    function jc(a, b, c) {
      return a
        ? b || c
          ? Bb(lc(a), mc(b, c))
          : lc(a)
        : b || c
        ? mc(b, c)
        : ic;
    }
    function kc(a) {
      return function (b, c) {
        return (b += a), [b > Fg ? b - Gg : -Fg > b ? b + Gg : b, c];
      };
    }
    function lc(a) {
      var b = kc(a);
      return (b.invert = kc(-a)), b;
    }
    function mc(a, b) {
      function c(a, b) {
        var c = Math.cos(b),
          h = Math.cos(a) * c,
          i = Math.sin(a) * c,
          j = Math.sin(b),
          k = j * d + h * e;
        return [Math.atan2(i * f - k * g, h * d - j * e), ba(k * f + i * g)];
      }
      var d = Math.cos(a),
        e = Math.sin(a),
        f = Math.cos(b),
        g = Math.sin(b);
      return (
        (c.invert = function (a, b) {
          var c = Math.cos(b),
            h = Math.cos(a) * c,
            i = Math.sin(a) * c,
            j = Math.sin(b),
            k = j * f - i * g;
          return [Math.atan2(i * f + j * g, h * d + k * e), ba(k * d - h * e)];
        }),
        c
      );
    }
    function nc(a, b) {
      var c = Math.cos(a),
        d = Math.sin(a);
      return function (e, f, g, h) {
        var i = g * b;
        null != e
          ? ((e = oc(c, e)),
            (f = oc(c, f)),
            (g > 0 ? f > e : e > f) && (e += g * Gg))
          : ((e = a + g * Gg), (f = a - 0.5 * i));
        for (var j, k = e; g > 0 ? k > f : f > k; k -= i)
          h.point((j = ub([c, -d * Math.cos(k), -d * Math.sin(k)]))[0], j[1]);
      };
    }
    function oc(a, b) {
      var c = ob(b);
      (c[0] -= a), tb(c);
      var d = aa(-c[1]);
      return ((-c[2] < 0 ? -d : d) + 2 * Math.PI - Dg) % (2 * Math.PI);
    }
    function pc(a, b, c) {
      var d = bg.range(a, b - Dg, c).concat(b);
      return function (a) {
        return d.map(function (b) {
          return [a, b];
        });
      };
    }
    function qc(a, b, c) {
      var d = bg.range(a, b - Dg, c).concat(b);
      return function (a) {
        return d.map(function (b) {
          return [b, a];
        });
      };
    }
    function rc(a) {
      return a.source;
    }
    function sc(a) {
      return a.target;
    }
    function tc(a, b, c, d) {
      var e = Math.cos(b),
        f = Math.sin(b),
        g = Math.cos(d),
        h = Math.sin(d),
        i = e * Math.cos(a),
        j = e * Math.sin(a),
        k = g * Math.cos(c),
        l = g * Math.sin(c),
        m = 2 * Math.asin(Math.sqrt(fa(d - b) + e * g * fa(c - a))),
        n = 1 / Math.sin(m),
        o = m
          ? function (a) {
              var b = Math.sin((a *= m)) * n,
                c = Math.sin(m - a) * n,
                d = c * i + b * k,
                e = c * j + b * l,
                g = c * f + b * h;
              return [
                Math.atan2(e, d) * Kg,
                Math.atan2(g, Math.sqrt(d * d + e * e)) * Kg,
              ];
            }
          : function () {
              return [a * Kg, b * Kg];
            };
      return (o.distance = m), o;
    }
    function uc() {
      function a(a, e) {
        var f = Math.sin((e *= Jg)),
          g = Math.cos(e),
          h = ng((a *= Jg) - b),
          i = Math.cos(h);
        (Rh += Math.atan2(
          Math.sqrt((h = g * Math.sin(h)) * h + (h = d * f - c * g * i) * h),
          c * f + d * g * i
        )),
          (b = a),
          (c = f),
          (d = g);
      }
      var b, c, d;
      (Sh.point = function (e, f) {
        (b = e * Jg),
          (c = Math.sin((f *= Jg))),
          (d = Math.cos(f)),
          (Sh.point = a);
      }),
        (Sh.lineEnd = function () {
          Sh.point = Sh.lineEnd = v;
        });
    }
    function vc(a, b) {
      function c(b, c) {
        var d = Math.cos(b),
          e = Math.cos(c),
          f = a(d * e);
        return [f * e * Math.sin(b), f * Math.sin(c)];
      }
      return (
        (c.invert = function (a, c) {
          var d = Math.sqrt(a * a + c * c),
            e = b(d),
            f = Math.sin(e),
            g = Math.cos(e);
          return [Math.atan2(a * f, d * g), Math.asin(d && (c * f) / d)];
        }),
        c
      );
    }
    function wc(a, b) {
      function c(a, b) {
        g > 0 ? -Ig + Dg > b && (b = -Ig + Dg) : b > Ig - Dg && (b = Ig - Dg);
        var c = g / Math.pow(e(b), f);
        return [c * Math.sin(f * a), g - c * Math.cos(f * a)];
      }
      var d = Math.cos(a),
        e = function (a) {
          return Math.tan(Fg / 4 + a / 2);
        },
        f =
          a === b
            ? Math.sin(a)
            : Math.log(d / Math.cos(b)) / Math.log(e(b) / e(a)),
        g = (d * Math.pow(e(a), f)) / f;
      return f
        ? ((c.invert = function (a, b) {
            var c = g - b,
              d = $(f) * Math.sqrt(a * a + c * c);
            return [
              Math.atan2(a, c) / f,
              2 * Math.atan(Math.pow(g / d, 1 / f)) - Ig,
            ];
          }),
          c)
        : yc;
    }
    function xc(a, b) {
      function c(a, b) {
        var c = f - b;
        return [c * Math.sin(e * a), f - c * Math.cos(e * a)];
      }
      var d = Math.cos(a),
        e = a === b ? Math.sin(a) : (d - Math.cos(b)) / (b - a),
        f = d / e + a;
      return ng(e) < Dg
        ? hc
        : ((c.invert = function (a, b) {
            var c = f - b;
            return [Math.atan2(a, c) / e, f - $(e) * Math.sqrt(a * a + c * c)];
          }),
          c);
    }
    function yc(a, b) {
      return [a, Math.log(Math.tan(Fg / 4 + b / 2))];
    }
    function zc(a) {
      var b,
        c = ec(a),
        d = c.scale,
        e = c.translate,
        f = c.clipExtent;
      return (
        (c.scale = function () {
          var a = d.apply(c, arguments);
          return a === c ? (b ? c.clipExtent(null) : c) : a;
        }),
        (c.translate = function () {
          var a = e.apply(c, arguments);
          return a === c ? (b ? c.clipExtent(null) : c) : a;
        }),
        (c.clipExtent = function (a) {
          var g = f.apply(c, arguments);
          if (g === c) {
            if ((b = null == a)) {
              var h = Fg * d(),
                i = e();
              f([
                [i[0] - h, i[1] - h],
                [i[0] + h, i[1] + h],
              ]);
            }
          } else b && (g = null);
          return g;
        }),
        c.clipExtent(null)
      );
    }
    function Ac(a, b) {
      return [Math.log(Math.tan(Fg / 4 + b / 2)), -a];
    }
    function Bc(a) {
      return a[0];
    }
    function Cc(a) {
      return a[1];
    }
    function Dc(a) {
      for (var b = a.length, c = [0, 1], d = 2, e = 2; b > e; e++) {
        for (; d > 1 && _(a[c[d - 2]], a[c[d - 1]], a[e]) <= 0; ) --d;
        c[d++] = e;
      }
      return c.slice(0, d);
    }
    function Ec(a, b) {
      return a[0] - b[0] || a[1] - b[1];
    }
    function Fc(a, b, c) {
      return (c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0]);
    }
    function Gc(a, b, c, d) {
      var e = a[0],
        f = c[0],
        g = b[0] - e,
        h = d[0] - f,
        i = a[1],
        j = c[1],
        k = b[1] - i,
        l = d[1] - j,
        m = (h * (i - j) - l * (e - f)) / (l * g - h * k);
      return [e + m * g, i + m * k];
    }
    function Hc(a) {
      var b = a[0],
        c = a[a.length - 1];
      return !(b[0] - c[0] || b[1] - c[1]);
    }
    function Ic() {
      bd(this), (this.edge = this.site = this.circle = null);
    }
    function Jc(a) {
      var b = ci.pop() || new Ic();
      return (b.site = a), b;
    }
    function Kc(a) {
      Uc(a), _h.remove(a), ci.push(a), bd(a);
    }
    function Lc(a) {
      var b = a.circle,
        c = b.x,
        d = b.cy,
        e = { x: c, y: d },
        f = a.P,
        g = a.N,
        h = [a];
      Kc(a);
      for (
        var i = f;
        i.circle && ng(c - i.circle.x) < Dg && ng(d - i.circle.cy) < Dg;

      )
        (f = i.P), h.unshift(i), Kc(i), (i = f);
      h.unshift(i), Uc(i);
      for (
        var j = g;
        j.circle && ng(c - j.circle.x) < Dg && ng(d - j.circle.cy) < Dg;

      )
        (g = j.N), h.push(j), Kc(j), (j = g);
      h.push(j), Uc(j);
      var k,
        l = h.length;
      for (k = 1; l > k; ++k)
        (j = h[k]), (i = h[k - 1]), $c(j.edge, i.site, j.site, e);
      (i = h[0]),
        (j = h[l - 1]),
        (j.edge = Yc(i.site, j.site, null, e)),
        Tc(i),
        Tc(j);
    }
    function Mc(a) {
      for (var b, c, d, e, f = a.x, g = a.y, h = _h._; h; )
        if (((d = Nc(h, g) - f), d > Dg)) h = h.L;
        else {
          if (((e = f - Oc(h, g)), !(e > Dg))) {
            d > -Dg
              ? ((b = h.P), (c = h))
              : e > -Dg
              ? ((b = h), (c = h.N))
              : (b = c = h);
            break;
          }
          if (!h.R) {
            b = h;
            break;
          }
          h = h.R;
        }
      var i = Jc(a);
      if ((_h.insert(b, i), b || c)) {
        if (b === c)
          return (
            Uc(b),
            (c = Jc(b.site)),
            _h.insert(i, c),
            (i.edge = c.edge = Yc(b.site, i.site)),
            Tc(b),
            void Tc(c)
          );
        if (!c) return void (i.edge = Yc(b.site, i.site));
        Uc(b), Uc(c);
        var j = b.site,
          k = j.x,
          l = j.y,
          m = a.x - k,
          n = a.y - l,
          o = c.site,
          p = o.x - k,
          q = o.y - l,
          r = 2 * (m * q - n * p),
          s = m * m + n * n,
          t = p * p + q * q,
          u = { x: (q * s - n * t) / r + k, y: (m * t - p * s) / r + l };
        $c(c.edge, j, o, u),
          (i.edge = Yc(j, a, null, u)),
          (c.edge = Yc(a, o, null, u)),
          Tc(b),
          Tc(c);
      }
    }
    function Nc(a, b) {
      var c = a.site,
        d = c.x,
        e = c.y,
        f = e - b;
      if (!f) return d;
      var g = a.P;
      if (!g) return -1 / 0;
      c = g.site;
      var h = c.x,
        i = c.y,
        j = i - b;
      if (!j) return h;
      var k = h - d,
        l = 1 / f - 1 / j,
        m = k / j;
      return l
        ? (-m +
            Math.sqrt(
              m * m - 2 * l * ((k * k) / (-2 * j) - i + j / 2 + e - f / 2)
            )) /
            l +
            d
        : (d + h) / 2;
    }
    function Oc(a, b) {
      var c = a.N;
      if (c) return Nc(c, b);
      var d = a.site;
      return d.y === b ? d.x : 1 / 0;
    }
    function Pc(a) {
      (this.site = a), (this.edges = []);
    }
    function Qc(a) {
      for (
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = a[0][0],
          m = a[1][0],
          n = a[0][1],
          o = a[1][1],
          p = $h,
          q = p.length;
        q--;

      )
        if (((f = p[q]), f && f.prepare()))
          for (h = f.edges, i = h.length, g = 0; i > g; )
            (k = h[g].end()),
              (d = k.x),
              (e = k.y),
              (j = h[++g % i].start()),
              (b = j.x),
              (c = j.y),
              (ng(d - b) > Dg || ng(e - c) > Dg) &&
                (h.splice(
                  g,
                  0,
                  new _c(
                    Zc(
                      f.site,
                      k,
                      ng(d - l) < Dg && o - e > Dg
                        ? { x: l, y: ng(b - l) < Dg ? c : o }
                        : ng(e - o) < Dg && m - d > Dg
                        ? { x: ng(c - o) < Dg ? b : m, y: o }
                        : ng(d - m) < Dg && e - n > Dg
                        ? { x: m, y: ng(b - m) < Dg ? c : n }
                        : ng(e - n) < Dg && d - l > Dg
                        ? { x: ng(c - n) < Dg ? b : l, y: n }
                        : null
                    ),
                    f.site,
                    null
                  )
                ),
                ++i);
    }
    function Rc(a, b) {
      return b.angle - a.angle;
    }
    function Sc() {
      bd(this), (this.x = this.y = this.arc = this.site = this.cy = null);
    }
    function Tc(a) {
      var b = a.P,
        c = a.N;
      if (b && c) {
        var d = b.site,
          e = a.site,
          f = c.site;
        if (d !== f) {
          var g = e.x,
            h = e.y,
            i = d.x - g,
            j = d.y - h,
            k = f.x - g,
            l = f.y - h,
            m = 2 * (i * l - j * k);
          if (!(m >= -Eg)) {
            var n = i * i + j * j,
              o = k * k + l * l,
              p = (l * n - j * o) / m,
              q = (i * o - k * n) / m,
              l = q + h,
              r = di.pop() || new Sc();
            (r.arc = a),
              (r.site = e),
              (r.x = p + g),
              (r.y = l + Math.sqrt(p * p + q * q)),
              (r.cy = l),
              (a.circle = r);
            for (var s = null, t = bi._; t; )
              if (r.y < t.y || (r.y === t.y && r.x <= t.x)) {
                if (!t.L) {
                  s = t.P;
                  break;
                }
                t = t.L;
              } else {
                if (!t.R) {
                  s = t;
                  break;
                }
                t = t.R;
              }
            bi.insert(s, r), s || (ai = r);
          }
        }
      }
    }
    function Uc(a) {
      var b = a.circle;
      b &&
        (b.P || (ai = b.N), bi.remove(b), di.push(b), bd(b), (a.circle = null));
    }
    function Vc(a) {
      for (
        var b, c = Zh, d = Pb(a[0][0], a[0][1], a[1][0], a[1][1]), e = c.length;
        e--;

      )
        (b = c[e]),
          (!Wc(b, a) ||
            !d(b) ||
            (ng(b.a.x - b.b.x) < Dg && ng(b.a.y - b.b.y) < Dg)) &&
            ((b.a = b.b = null), c.splice(e, 1));
    }
    function Wc(a, b) {
      var c = a.b;
      if (c) return !0;
      var d,
        e,
        f = a.a,
        g = b[0][0],
        h = b[1][0],
        i = b[0][1],
        j = b[1][1],
        k = a.l,
        l = a.r,
        m = k.x,
        n = k.y,
        o = l.x,
        p = l.y,
        q = (m + o) / 2,
        r = (n + p) / 2;
      if (p === n) {
        if (g > q || q >= h) return;
        if (m > o) {
          if (f) {
            if (f.y >= j) return;
          } else f = { x: q, y: i };
          c = { x: q, y: j };
        } else {
          if (f) {
            if (f.y < i) return;
          } else f = { x: q, y: j };
          c = { x: q, y: i };
        }
      } else if (((d = (m - o) / (p - n)), (e = r - d * q), -1 > d || d > 1))
        if (m > o) {
          if (f) {
            if (f.y >= j) return;
          } else f = { x: (i - e) / d, y: i };
          c = { x: (j - e) / d, y: j };
        } else {
          if (f) {
            if (f.y < i) return;
          } else f = { x: (j - e) / d, y: j };
          c = { x: (i - e) / d, y: i };
        }
      else if (p > n) {
        if (f) {
          if (f.x >= h) return;
        } else f = { x: g, y: d * g + e };
        c = { x: h, y: d * h + e };
      } else {
        if (f) {
          if (f.x < g) return;
        } else f = { x: h, y: d * h + e };
        c = { x: g, y: d * g + e };
      }
      return (a.a = f), (a.b = c), !0;
    }
    function Xc(a, b) {
      (this.l = a), (this.r = b), (this.a = this.b = null);
    }
    function Yc(a, b, c, d) {
      var e = new Xc(a, b);
      return (
        Zh.push(e),
        c && $c(e, a, b, c),
        d && $c(e, b, a, d),
        $h[a.i].edges.push(new _c(e, a, b)),
        $h[b.i].edges.push(new _c(e, b, a)),
        e
      );
    }
    function Zc(a, b, c) {
      var d = new Xc(a, null);
      return (d.a = b), (d.b = c), Zh.push(d), d;
    }
    function $c(a, b, c, d) {
      a.a || a.b
        ? a.l === c
          ? (a.b = d)
          : (a.a = d)
        : ((a.a = d), (a.l = b), (a.r = c));
    }
    function _c(a, b, c) {
      var d = a.a,
        e = a.b;
      (this.edge = a),
        (this.site = b),
        (this.angle = c
          ? Math.atan2(c.y - b.y, c.x - b.x)
          : a.l === b
          ? Math.atan2(e.x - d.x, d.y - e.y)
          : Math.atan2(d.x - e.x, e.y - d.y));
    }
    function ad() {
      this._ = null;
    }
    function bd(a) {
      a.U = a.C = a.L = a.R = a.P = a.N = null;
    }
    function cd(a, b) {
      var c = b,
        d = b.R,
        e = c.U;
      e ? (e.L === c ? (e.L = d) : (e.R = d)) : (a._ = d),
        (d.U = e),
        (c.U = d),
        (c.R = d.L),
        c.R && (c.R.U = c),
        (d.L = c);
    }
    function dd(a, b) {
      var c = b,
        d = b.L,
        e = c.U;
      e ? (e.L === c ? (e.L = d) : (e.R = d)) : (a._ = d),
        (d.U = e),
        (c.U = d),
        (c.L = d.R),
        c.L && (c.L.U = c),
        (d.R = c);
    }
    function ed(a) {
      for (; a.L; ) a = a.L;
      return a;
    }
    function fd(a, b) {
      var c,
        d,
        e,
        f = a.sort(gd).pop();
      for (Zh = [], $h = new Array(a.length), _h = new ad(), bi = new ad(); ; )
        if (((e = ai), f && (!e || f.y < e.y || (f.y === e.y && f.x < e.x))))
          (f.x !== c || f.y !== d) &&
            (($h[f.i] = new Pc(f)), Mc(f), (c = f.x), (d = f.y)),
            (f = a.pop());
        else {
          if (!e) break;
          Lc(e.arc);
        }
      b && (Vc(b), Qc(b));
      var g = { cells: $h, edges: Zh };
      return (_h = bi = Zh = $h = null), g;
    }
    function gd(a, b) {
      return b.y - a.y || b.x - a.x;
    }
    function hd(a, b, c) {
      return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
    }
    function id(a) {
      return a.x;
    }
    function jd(a) {
      return a.y;
    }
    function kd() {
      return { leaf: !0, nodes: [], point: null, x: null, y: null };
    }
    function ld(a, b, c, d, e, f) {
      if (!a(b, c, d, e, f)) {
        var g = 0.5 * (c + e),
          h = 0.5 * (d + f),
          i = b.nodes;
        i[0] && ld(a, i[0], c, d, g, h),
          i[1] && ld(a, i[1], g, d, e, h),
          i[2] && ld(a, i[2], c, h, g, f),
          i[3] && ld(a, i[3], g, h, e, f);
      }
    }
    function md(a, b, c, d, e, f, g) {
      var h,
        i = 1 / 0;
      return (
        (function j(a, k, l, m, n) {
          if (!(k > f || l > g || d > m || e > n)) {
            if ((o = a.point)) {
              var o,
                p = b - a.x,
                q = c - a.y,
                r = p * p + q * q;
              if (i > r) {
                var s = Math.sqrt((i = r));
                (d = b - s), (e = c - s), (f = b + s), (g = c + s), (h = o);
              }
            }
            for (
              var t = a.nodes,
                u = 0.5 * (k + m),
                v = 0.5 * (l + n),
                w = b >= u,
                x = c >= v,
                y = (x << 1) | w,
                z = y + 4;
              z > y;
              ++y
            )
              if ((a = t[3 & y]))
                switch (3 & y) {
                  case 0:
                    j(a, k, l, u, v);
                    break;
                  case 1:
                    j(a, u, l, m, v);
                    break;
                  case 2:
                    j(a, k, v, u, n);
                    break;
                  case 3:
                    j(a, u, v, m, n);
                }
          }
        })(a, d, e, f, g),
        h
      );
    }
    function nd(a, b) {
      (a = bg.rgb(a)), (b = bg.rgb(b));
      var c = a.r,
        d = a.g,
        e = a.b,
        f = b.r - c,
        g = b.g - d,
        h = b.b - e;
      return function (a) {
        return (
          "#" +
          ua(Math.round(c + f * a)) +
          ua(Math.round(d + g * a)) +
          ua(Math.round(e + h * a))
        );
      };
    }
    function od(a, b) {
      var c,
        d = {},
        e = {};
      for (c in a) c in b ? (d[c] = rd(a[c], b[c])) : (e[c] = a[c]);
      for (c in b) c in a || (e[c] = b[c]);
      return function (a) {
        for (c in d) e[c] = d[c](a);
        return e;
      };
    }
    function pd(a, b) {
      return (
        (a = +a),
        (b = +b),
        function (c) {
          return a * (1 - c) + b * c;
        }
      );
    }
    function qd(a, b) {
      var c,
        d,
        e,
        f = (fi.lastIndex = gi.lastIndex = 0),
        g = -1,
        h = [],
        i = [];
      for (a += "", b += ""; (c = fi.exec(a)) && (d = gi.exec(b)); )
        (e = d.index) > f &&
          ((e = b.slice(f, e)), h[g] ? (h[g] += e) : (h[++g] = e)),
          (c = c[0]) === (d = d[0])
            ? h[g]
              ? (h[g] += d)
              : (h[++g] = d)
            : ((h[++g] = null), i.push({ i: g, x: pd(c, d) })),
          (f = gi.lastIndex);
      return (
        f < b.length && ((e = b.slice(f)), h[g] ? (h[g] += e) : (h[++g] = e)),
        h.length < 2
          ? i[0]
            ? ((b = i[0].x),
              function (a) {
                return b(a) + "";
              })
            : function () {
                return b;
              }
          : ((b = i.length),
            function (a) {
              for (var c, d = 0; b > d; ++d) h[(c = i[d]).i] = c.x(a);
              return h.join("");
            })
      );
    }
    function rd(a, b) {
      for (
        var c, d = bg.interpolators.length;
        --d >= 0 && !(c = bg.interpolators[d](a, b));

      );
      return c;
    }
    function sd(a, b) {
      var c,
        d = [],
        e = [],
        f = a.length,
        g = b.length,
        h = Math.min(a.length, b.length);
      for (c = 0; h > c; ++c) d.push(rd(a[c], b[c]));
      for (; f > c; ++c) e[c] = a[c];
      for (; g > c; ++c) e[c] = b[c];
      return function (a) {
        for (c = 0; h > c; ++c) e[c] = d[c](a);
        return e;
      };
    }
    function td(a) {
      return function (b) {
        return 0 >= b ? 0 : b >= 1 ? 1 : a(b);
      };
    }
    function ud(a) {
      return function (b) {
        return 1 - a(1 - b);
      };
    }
    function vd(a) {
      return function (b) {
        return 0.5 * (0.5 > b ? a(2 * b) : 2 - a(2 - 2 * b));
      };
    }
    function wd(a) {
      return a * a;
    }
    function xd(a) {
      return a * a * a;
    }
    function yd(a) {
      if (0 >= a) return 0;
      if (a >= 1) return 1;
      var b = a * a,
        c = b * a;
      return 4 * (0.5 > a ? c : 3 * (a - b) + c - 0.75);
    }
    function zd(a) {
      return function (b) {
        return Math.pow(b, a);
      };
    }
    function Ad(a) {
      return 1 - Math.cos(a * Ig);
    }
    function Bd(a) {
      return Math.pow(2, 10 * (a - 1));
    }
    function Cd(a) {
      return 1 - Math.sqrt(1 - a * a);
    }
    function Dd(a, b) {
      var c;
      return (
        arguments.length < 2 && (b = 0.45),
        arguments.length
          ? (c = (b / Gg) * Math.asin(1 / a))
          : ((a = 1), (c = b / 4)),
        function (d) {
          return 1 + a * Math.pow(2, -10 * d) * Math.sin(((d - c) * Gg) / b);
        }
      );
    }
    function Ed(a) {
      return (
        a || (a = 1.70158),
        function (b) {
          return b * b * ((a + 1) * b - a);
        }
      );
    }
    function Fd(a) {
      return 1 / 2.75 > a
        ? 7.5625 * a * a
        : 2 / 2.75 > a
        ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
        : 2.5 / 2.75 > a
        ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
        : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
    }
    function Gd(a, b) {
      (a = bg.hcl(a)), (b = bg.hcl(b));
      var c = a.h,
        d = a.c,
        e = a.l,
        f = b.h - c,
        g = b.c - d,
        h = b.l - e;
      return (
        isNaN(g) && ((g = 0), (d = isNaN(d) ? b.c : d)),
        isNaN(f)
          ? ((f = 0), (c = isNaN(c) ? b.h : c))
          : f > 180
          ? (f -= 360)
          : -180 > f && (f += 360),
        function (a) {
          return ka(c + f * a, d + g * a, e + h * a) + "";
        }
      );
    }
    function Hd(a, b) {
      (a = bg.hsl(a)), (b = bg.hsl(b));
      var c = a.h,
        d = a.s,
        e = a.l,
        f = b.h - c,
        g = b.s - d,
        h = b.l - e;
      return (
        isNaN(g) && ((g = 0), (d = isNaN(d) ? b.s : d)),
        isNaN(f)
          ? ((f = 0), (c = isNaN(c) ? b.h : c))
          : f > 180
          ? (f -= 360)
          : -180 > f && (f += 360),
        function (a) {
          return ia(c + f * a, d + g * a, e + h * a) + "";
        }
      );
    }
    function Id(a, b) {
      (a = bg.lab(a)), (b = bg.lab(b));
      var c = a.l,
        d = a.a,
        e = a.b,
        f = b.l - c,
        g = b.a - d,
        h = b.b - e;
      return function (a) {
        return ma(c + f * a, d + g * a, e + h * a) + "";
      };
    }
    function Jd(a, b) {
      return (
        (b -= a),
        function (c) {
          return Math.round(a + b * c);
        }
      );
    }
    function Kd(a) {
      var b = [a.a, a.b],
        c = [a.c, a.d],
        d = Md(b),
        e = Ld(b, c),
        f = Md(Nd(c, b, -e)) || 0;
      b[0] * c[1] < c[0] * b[1] &&
        ((b[0] *= -1), (b[1] *= -1), (d *= -1), (e *= -1)),
        (this.rotate =
          (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * Kg),
        (this.translate = [a.e, a.f]),
        (this.scale = [d, f]),
        (this.skew = f ? Math.atan2(e, f) * Kg : 0);
    }
    function Ld(a, b) {
      return a[0] * b[0] + a[1] * b[1];
    }
    function Md(a) {
      var b = Math.sqrt(Ld(a, a));
      return b && ((a[0] /= b), (a[1] /= b)), b;
    }
    function Nd(a, b, c) {
      return (a[0] += c * b[0]), (a[1] += c * b[1]), a;
    }
    function Od(a, b) {
      var c,
        d = [],
        e = [],
        f = bg.transform(a),
        g = bg.transform(b),
        h = f.translate,
        i = g.translate,
        j = f.rotate,
        k = g.rotate,
        l = f.skew,
        m = g.skew,
        n = f.scale,
        o = g.scale;
      return (
        h[0] != i[0] || h[1] != i[1]
          ? (d.push("translate(", null, ",", null, ")"),
            e.push({ i: 1, x: pd(h[0], i[0]) }, { i: 3, x: pd(h[1], i[1]) }))
          : d.push(i[0] || i[1] ? "translate(" + i + ")" : ""),
        j != k
          ? (j - k > 180 ? (k += 360) : k - j > 180 && (j += 360),
            e.push({
              i: d.push(d.pop() + "rotate(", null, ")") - 2,
              x: pd(j, k),
            }))
          : k && d.push(d.pop() + "rotate(" + k + ")"),
        l != m
          ? e.push({
              i: d.push(d.pop() + "skewX(", null, ")") - 2,
              x: pd(l, m),
            })
          : m && d.push(d.pop() + "skewX(" + m + ")"),
        n[0] != o[0] || n[1] != o[1]
          ? ((c = d.push(d.pop() + "scale(", null, ",", null, ")")),
            e.push(
              { i: c - 4, x: pd(n[0], o[0]) },
              { i: c - 2, x: pd(n[1], o[1]) }
            ))
          : (1 != o[0] || 1 != o[1]) && d.push(d.pop() + "scale(" + o + ")"),
        (c = e.length),
        function (a) {
          for (var b, f = -1; ++f < c; ) d[(b = e[f]).i] = b.x(a);
          return d.join("");
        }
      );
    }
    function Pd(a, b) {
      return (
        (b = (b -= a = +a) || 1 / b),
        function (c) {
          return (c - a) / b;
        }
      );
    }
    function Qd(a, b) {
      return (
        (b = (b -= a = +a) || 1 / b),
        function (c) {
          return Math.max(0, Math.min(1, (c - a) / b));
        }
      );
    }
    function Rd(a) {
      for (var b = a.source, c = a.target, d = Td(b, c), e = [b]; b !== d; )
        (b = b.parent), e.push(b);
      for (var f = e.length; c !== d; ) e.splice(f, 0, c), (c = c.parent);
      return e;
    }
    function Sd(a) {
      for (var b = [], c = a.parent; null != c; )
        b.push(a), (a = c), (c = c.parent);
      return b.push(a), b;
    }
    function Td(a, b) {
      if (a === b) return a;
      for (
        var c = Sd(a), d = Sd(b), e = c.pop(), f = d.pop(), g = null;
        e === f;

      )
        (g = e), (e = c.pop()), (f = d.pop());
      return g;
    }
    function Ud(a) {
      a.fixed |= 2;
    }
    function Vd(a) {
      a.fixed &= -7;
    }
    function Wd(a) {
      (a.fixed |= 4), (a.px = a.x), (a.py = a.y);
    }
    function Xd(a) {
      a.fixed &= -5;
    }
    function Yd(a, b, c) {
      var d = 0,
        e = 0;
      if (((a.charge = 0), !a.leaf))
        for (var f, g = a.nodes, h = g.length, i = -1; ++i < h; )
          (f = g[i]),
            null != f &&
              (Yd(f, b, c),
              (a.charge += f.charge),
              (d += f.charge * f.cx),
              (e += f.charge * f.cy));
      if (a.point) {
        a.leaf ||
          ((a.point.x += Math.random() - 0.5),
          (a.point.y += Math.random() - 0.5));
        var j = b * c[a.point.index];
        (a.charge += a.pointCharge = j),
          (d += j * a.point.x),
          (e += j * a.point.y);
      }
      (a.cx = d / a.charge), (a.cy = e / a.charge);
    }
    function Zd(a, b) {
      return (
        bg.rebind(a, b, "sort", "children", "value"),
        (a.nodes = a),
        (a.links = de),
        a
      );
    }
    function $d(a, b) {
      for (var c = [a]; null != (a = c.pop()); )
        if ((b(a), (e = a.children) && (d = e.length)))
          for (var d, e; --d >= 0; ) c.push(e[d]);
    }
    function _d(a, b) {
      for (var c = [a], d = []; null != (a = c.pop()); )
        if ((d.push(a), (f = a.children) && (e = f.length)))
          for (var e, f, g = -1; ++g < e; ) c.push(f[g]);
      for (; null != (a = d.pop()); ) b(a);
    }
    function ae(a) {
      return a.children;
    }
    function be(a) {
      return a.value;
    }
    function ce(a, b) {
      return b.value - a.value;
    }
    function de(a) {
      return bg.merge(
        a.map(function (a) {
          return (a.children || []).map(function (b) {
            return { source: a, target: b };
          });
        })
      );
    }
    function ee(a) {
      return a.x;
    }
    function fe(a) {
      return a.y;
    }
    function ge(a, b, c) {
      (a.y0 = b), (a.y = c);
    }
    function he(a) {
      return bg.range(a.length);
    }
    function ie(a) {
      for (var b = -1, c = a[0].length, d = []; ++b < c; ) d[b] = 0;
      return d;
    }
    function je(a) {
      for (var b, c = 1, d = 0, e = a[0][1], f = a.length; f > c; ++c)
        (b = a[c][1]) > e && ((d = c), (e = b));
      return d;
    }
    function ke(a) {
      return a.reduce(le, 0);
    }
    function le(a, b) {
      return a + b[1];
    }
    function me(a, b) {
      return ne(a, Math.ceil(Math.log(b.length) / Math.LN2 + 1));
    }
    function ne(a, b) {
      for (var c = -1, d = +a[0], e = (a[1] - d) / b, f = []; ++c <= b; )
        f[c] = e * c + d;
      return f;
    }
    function oe(a) {
      return [bg.min(a), bg.max(a)];
    }
    function pe(a, b) {
      return a.value - b.value;
    }
    function qe(a, b) {
      var c = a._pack_next;
      (a._pack_next = b),
        (b._pack_prev = a),
        (b._pack_next = c),
        (c._pack_prev = b);
    }
    function re(a, b) {
      (a._pack_next = b), (b._pack_prev = a);
    }
    function se(a, b) {
      var c = b.x - a.x,
        d = b.y - a.y,
        e = a.r + b.r;
      return 0.999 * e * e > c * c + d * d;
    }
    function te(a) {
      function b(a) {
        (k = Math.min(a.x - a.r, k)),
          (l = Math.max(a.x + a.r, l)),
          (m = Math.min(a.y - a.r, m)),
          (n = Math.max(a.y + a.r, n));
      }
      if ((c = a.children) && (j = c.length)) {
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = 1 / 0,
          l = -1 / 0,
          m = 1 / 0,
          n = -1 / 0;
        if (
          (c.forEach(ue),
          (d = c[0]),
          (d.x = -d.r),
          (d.y = 0),
          b(d),
          j > 1 && ((e = c[1]), (e.x = e.r), (e.y = 0), b(e), j > 2))
        )
          for (
            f = c[2],
              xe(d, e, f),
              b(f),
              qe(d, f),
              d._pack_prev = f,
              qe(f, e),
              e = d._pack_next,
              g = 3;
            j > g;
            g++
          ) {
            xe(d, e, (f = c[g]));
            var o = 0,
              p = 1,
              q = 1;
            for (h = e._pack_next; h !== e; h = h._pack_next, p++)
              if (se(h, f)) {
                o = 1;
                break;
              }
            if (1 == o)
              for (
                i = d._pack_prev;
                i !== h._pack_prev && !se(i, f);
                i = i._pack_prev, q++
              );
            o
              ? (q > p || (p == q && e.r < d.r)
                  ? re(d, (e = h))
                  : re((d = i), e),
                g--)
              : (qe(d, f), (e = f), b(f));
          }
        var r = (k + l) / 2,
          s = (m + n) / 2,
          t = 0;
        for (g = 0; j > g; g++)
          (f = c[g]),
            (f.x -= r),
            (f.y -= s),
            (t = Math.max(t, f.r + Math.sqrt(f.x * f.x + f.y * f.y)));
        (a.r = t), c.forEach(ve);
      }
    }
    function ue(a) {
      a._pack_next = a._pack_prev = a;
    }
    function ve(a) {
      delete a._pack_next, delete a._pack_prev;
    }
    function we(a, b, c, d) {
      var e = a.children;
      if (((a.x = b += d * a.x), (a.y = c += d * a.y), (a.r *= d), e))
        for (var f = -1, g = e.length; ++f < g; ) we(e[f], b, c, d);
    }
    function xe(a, b, c) {
      var d = a.r + c.r,
        e = b.x - a.x,
        f = b.y - a.y;
      if (d && (e || f)) {
        var g = b.r + c.r,
          h = e * e + f * f;
        (g *= g), (d *= d);
        var i = 0.5 + (d - g) / (2 * h),
          j =
            Math.sqrt(Math.max(0, 2 * g * (d + h) - (d -= h) * d - g * g)) /
            (2 * h);
        (c.x = a.x + i * e + j * f), (c.y = a.y + i * f - j * e);
      } else (c.x = a.x + d), (c.y = a.y);
    }
    function ye(a, b) {
      return a.parent == b.parent ? 1 : 2;
    }
    function ze(a) {
      var b = a.children;
      return b.length ? b[0] : a.t;
    }
    function Ae(a) {
      var b,
        c = a.children;
      return (b = c.length) ? c[b - 1] : a.t;
    }
    function Be(a, b, c) {
      var d = c / (b.i - a.i);
      (b.c -= d), (b.s += c), (a.c += d), (b.z += c), (b.m += c);
    }
    function Ce(a) {
      for (var b, c = 0, d = 0, e = a.children, f = e.length; --f >= 0; )
        (b = e[f]), (b.z += c), (b.m += c), (c += b.s + (d += b.c));
    }
    function De(a, b, c) {
      return a.a.parent === b.parent ? a.a : c;
    }
    function Ee(a) {
      return (
        1 +
        bg.max(a, function (a) {
          return a.y;
        })
      );
    }
    function Fe(a) {
      return (
        a.reduce(function (a, b) {
          return a + b.x;
        }, 0) / a.length
      );
    }
    function Ge(a) {
      var b = a.children;
      return b && b.length ? Ge(b[0]) : a;
    }
    function He(a) {
      var b,
        c = a.children;
      return c && (b = c.length) ? He(c[b - 1]) : a;
    }
    function Ie(a) {
      return { x: a.x, y: a.y, dx: a.dx, dy: a.dy };
    }
    function Je(a, b) {
      var c = a.x + b[3],
        d = a.y + b[0],
        e = a.dx - b[1] - b[3],
        f = a.dy - b[0] - b[2];
      return (
        0 > e && ((c += e / 2), (e = 0)),
        0 > f && ((d += f / 2), (f = 0)),
        { x: c, y: d, dx: e, dy: f }
      );
    }
    function Ke(a) {
      var b = a[0],
        c = a[a.length - 1];
      return c > b ? [b, c] : [c, b];
    }
    function Le(a) {
      return a.rangeExtent ? a.rangeExtent() : Ke(a.range());
    }
    function Me(a, b, c, d) {
      var e = c(a[0], a[1]),
        f = d(b[0], b[1]);
      return function (a) {
        return f(e(a));
      };
    }
    function Ne(a, b) {
      var c,
        d = 0,
        e = a.length - 1,
        f = a[d],
        g = a[e];
      return (
        f > g && ((c = d), (d = e), (e = c), (c = f), (f = g), (g = c)),
        (a[d] = b.floor(f)),
        (a[e] = b.ceil(g)),
        a
      );
    }
    function Oe(a) {
      return a
        ? {
            floor: function (b) {
              return Math.floor(b / a) * a;
            },
            ceil: function (b) {
              return Math.ceil(b / a) * a;
            },
          }
        : ri;
    }
    function Pe(a, b, c, d) {
      var e = [],
        f = [],
        g = 0,
        h = Math.min(a.length, b.length) - 1;
      for (
        a[h] < a[0] && ((a = a.slice().reverse()), (b = b.slice().reverse()));
        ++g <= h;

      )
        e.push(c(a[g - 1], a[g])), f.push(d(b[g - 1], b[g]));
      return function (b) {
        var c = bg.bisect(a, b, 1, h) - 1;
        return f[c](e[c](b));
      };
    }
    function Qe(a, b, c, d) {
      function e() {
        var e = Math.min(a.length, b.length) > 2 ? Pe : Me,
          i = d ? Qd : Pd;
        return (g = e(a, b, i, c)), (h = e(b, a, i, rd)), f;
      }
      function f(a) {
        return g(a);
      }
      var g, h;
      return (
        (f.invert = function (a) {
          return h(a);
        }),
        (f.domain = function (b) {
          return arguments.length ? ((a = b.map(Number)), e()) : a;
        }),
        (f.range = function (a) {
          return arguments.length ? ((b = a), e()) : b;
        }),
        (f.rangeRound = function (a) {
          return f.range(a).interpolate(Jd);
        }),
        (f.clamp = function (a) {
          return arguments.length ? ((d = a), e()) : d;
        }),
        (f.interpolate = function (a) {
          return arguments.length ? ((c = a), e()) : c;
        }),
        (f.ticks = function (b) {
          return Ue(a, b);
        }),
        (f.tickFormat = function (b, c) {
          return Ve(a, b, c);
        }),
        (f.nice = function (b) {
          return Se(a, b), e();
        }),
        (f.copy = function () {
          return Qe(a, b, c, d);
        }),
        e()
      );
    }
    function Re(a, b) {
      return bg.rebind(a, b, "range", "rangeRound", "interpolate", "clamp");
    }
    function Se(a, b) {
      return Ne(a, Oe(Te(a, b)[2]));
    }
    function Te(a, b) {
      null == b && (b = 10);
      var c = Ke(a),
        d = c[1] - c[0],
        e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10)),
        f = (b / d) * e;
      return (
        0.15 >= f ? (e *= 10) : 0.35 >= f ? (e *= 5) : 0.75 >= f && (e *= 2),
        (c[0] = Math.ceil(c[0] / e) * e),
        (c[1] = Math.floor(c[1] / e) * e + 0.5 * e),
        (c[2] = e),
        c
      );
    }
    function Ue(a, b) {
      return bg.range.apply(bg, Te(a, b));
    }
    function Ve(a, b, c) {
      var d = Te(a, b);
      if (c) {
        var e = fh.exec(c);
        if ((e.shift(), "s" === e[8])) {
          var f = bg.formatPrefix(Math.max(ng(d[0]), ng(d[1])));
          return (
            e[7] || (e[7] = "." + We(f.scale(d[2]))),
            (e[8] = "f"),
            (c = bg.format(e.join(""))),
            function (a) {
              return c(f.scale(a)) + f.symbol;
            }
          );
        }
        e[7] || (e[7] = "." + Xe(e[8], d)), (c = e.join(""));
      } else c = ",." + We(d[2]) + "f";
      return bg.format(c);
    }
    function We(a) {
      return -Math.floor(Math.log(a) / Math.LN10 + 0.01);
    }
    function Xe(a, b) {
      var c = We(b[2]);
      return a in si
        ? Math.abs(c - We(Math.max(ng(b[0]), ng(b[1])))) + +("e" !== a)
        : c - 2 * ("%" === a);
    }
    function Ye(a, b, c, d) {
      function e(a) {
        return (
          (c ? Math.log(0 > a ? 0 : a) : -Math.log(a > 0 ? 0 : -a)) /
          Math.log(b)
        );
      }
      function f(a) {
        return c ? Math.pow(b, a) : -Math.pow(b, -a);
      }
      function g(b) {
        return a(e(b));
      }
      return (
        (g.invert = function (b) {
          return f(a.invert(b));
        }),
        (g.domain = function (b) {
          return arguments.length
            ? ((c = b[0] >= 0), a.domain((d = b.map(Number)).map(e)), g)
            : d;
        }),
        (g.base = function (c) {
          return arguments.length ? ((b = +c), a.domain(d.map(e)), g) : b;
        }),
        (g.nice = function () {
          var b = Ne(d.map(e), c ? Math : ui);
          return a.domain(b), (d = b.map(f)), g;
        }),
        (g.ticks = function () {
          var a = Ke(d),
            g = [],
            h = a[0],
            i = a[1],
            j = Math.floor(e(h)),
            k = Math.ceil(e(i)),
            l = b % 1 ? 2 : b;
          if (isFinite(k - j)) {
            if (c) {
              for (; k > j; j++) for (var m = 1; l > m; m++) g.push(f(j) * m);
              g.push(f(j));
            } else
              for (g.push(f(j)); j++ < k; )
                for (var m = l - 1; m > 0; m--) g.push(f(j) * m);
            for (j = 0; g[j] < h; j++);
            for (k = g.length; g[k - 1] > i; k--);
            g = g.slice(j, k);
          }
          return g;
        }),
        (g.tickFormat = function (a, b) {
          if (!arguments.length) return ti;
          arguments.length < 2
            ? (b = ti)
            : "function" != typeof b && (b = bg.format(b));
          var d,
            h = Math.max(0.1, a / g.ticks().length),
            i = c ? ((d = 1e-12), Math.ceil) : ((d = -1e-12), Math.floor);
          return function (a) {
            return a / f(i(e(a) + d)) <= h ? b(a) : "";
          };
        }),
        (g.copy = function () {
          return Ye(a.copy(), b, c, d);
        }),
        Re(g, a)
      );
    }
    function Ze(a, b, c) {
      function d(b) {
        return a(e(b));
      }
      var e = $e(b),
        f = $e(1 / b);
      return (
        (d.invert = function (b) {
          return f(a.invert(b));
        }),
        (d.domain = function (b) {
          return arguments.length
            ? (a.domain((c = b.map(Number)).map(e)), d)
            : c;
        }),
        (d.ticks = function (a) {
          return Ue(c, a);
        }),
        (d.tickFormat = function (a, b) {
          return Ve(c, a, b);
        }),
        (d.nice = function (a) {
          return d.domain(Se(c, a));
        }),
        (d.exponent = function (g) {
          return arguments.length
            ? ((e = $e((b = g))), (f = $e(1 / b)), a.domain(c.map(e)), d)
            : b;
        }),
        (d.copy = function () {
          return Ze(a.copy(), b, c);
        }),
        Re(d, a)
      );
    }
    function $e(a) {
      return function (b) {
        return 0 > b ? -Math.pow(-b, a) : Math.pow(b, a);
      };
    }
    function _e(a, b) {
      function c(c) {
        return f[
          ((e.get(c) || ("range" === b.t ? e.set(c, a.push(c)) : NaN)) - 1) %
            f.length
        ];
      }
      function d(b, c) {
        return bg.range(a.length).map(function (a) {
          return b + c * a;
        });
      }
      var e, f, g;
      return (
        (c.domain = function (d) {
          if (!arguments.length) return a;
          (a = []), (e = new j());
          for (var f, g = -1, h = d.length; ++g < h; )
            e.has((f = d[g])) || e.set(f, a.push(f));
          return c[b.t].apply(c, b.a);
        }),
        (c.range = function (a) {
          return arguments.length
            ? ((f = a), (g = 0), (b = { t: "range", a: arguments }), c)
            : f;
        }),
        (c.rangePoints = function (e, h) {
          arguments.length < 2 && (h = 0);
          var i = e[0],
            j = e[1],
            k =
              a.length < 2
                ? ((i = (i + j) / 2), 0)
                : (j - i) / (a.length - 1 + h);
          return (
            (f = d(i + (k * h) / 2, k)),
            (g = 0),
            (b = { t: "rangePoints", a: arguments }),
            c
          );
        }),
        (c.rangeRoundPoints = function (e, h) {
          arguments.length < 2 && (h = 0);
          var i = e[0],
            j = e[1],
            k =
              a.length < 2
                ? ((i = j = Math.round((i + j) / 2)), 0)
                : ((j - i) / (a.length - 1 + h)) | 0;
          return (
            (f = d(
              i +
                Math.round((k * h) / 2 + (j - i - (a.length - 1 + h) * k) / 2),
              k
            )),
            (g = 0),
            (b = { t: "rangeRoundPoints", a: arguments }),
            c
          );
        }),
        (c.rangeBands = function (e, h, i) {
          arguments.length < 2 && (h = 0), arguments.length < 3 && (i = h);
          var j = e[1] < e[0],
            k = e[j - 0],
            l = e[1 - j],
            m = (l - k) / (a.length - h + 2 * i);
          return (
            (f = d(k + m * i, m)),
            j && f.reverse(),
            (g = m * (1 - h)),
            (b = { t: "rangeBands", a: arguments }),
            c
          );
        }),
        (c.rangeRoundBands = function (e, h, i) {
          arguments.length < 2 && (h = 0), arguments.length < 3 && (i = h);
          var j = e[1] < e[0],
            k = e[j - 0],
            l = e[1 - j],
            m = Math.floor((l - k) / (a.length - h + 2 * i));
          return (
            (f = d(k + Math.round((l - k - (a.length - h) * m) / 2), m)),
            j && f.reverse(),
            (g = Math.round(m * (1 - h))),
            (b = { t: "rangeRoundBands", a: arguments }),
            c
          );
        }),
        (c.rangeBand = function () {
          return g;
        }),
        (c.rangeExtent = function () {
          return Ke(b.a[0]);
        }),
        (c.copy = function () {
          return _e(a, b);
        }),
        c.domain(a)
      );
    }
    function af(a, b) {
      function f() {
        var c = 0,
          d = b.length;
        for (h = []; ++c < d; ) h[c - 1] = bg.quantile(a, c / d);
        return g;
      }
      function g(a) {
        return isNaN((a = +a)) ? void 0 : b[bg.bisect(h, a)];
      }
      var h;
      return (
        (g.domain = function (b) {
          return arguments.length ? ((a = b.map(d).filter(e).sort(c)), f()) : a;
        }),
        (g.range = function (a) {
          return arguments.length ? ((b = a), f()) : b;
        }),
        (g.quantiles = function () {
          return h;
        }),
        (g.invertExtent = function (c) {
          return (
            (c = b.indexOf(c)),
            0 > c
              ? [NaN, NaN]
              : [c > 0 ? h[c - 1] : a[0], c < h.length ? h[c] : a[a.length - 1]]
          );
        }),
        (g.copy = function () {
          return af(a, b);
        }),
        f()
      );
    }
    function bf(a, b, c) {
      function d(b) {
        return c[Math.max(0, Math.min(g, Math.floor(f * (b - a))))];
      }
      function e() {
        return (f = c.length / (b - a)), (g = c.length - 1), d;
      }
      var f, g;
      return (
        (d.domain = function (c) {
          return arguments.length
            ? ((a = +c[0]), (b = +c[c.length - 1]), e())
            : [a, b];
        }),
        (d.range = function (a) {
          return arguments.length ? ((c = a), e()) : c;
        }),
        (d.invertExtent = function (b) {
          return (
            (b = c.indexOf(b)), (b = 0 > b ? NaN : b / f + a), [b, b + 1 / f]
          );
        }),
        (d.copy = function () {
          return bf(a, b, c);
        }),
        e()
      );
    }
    function cf(a, b) {
      function c(c) {
        return c >= c ? b[bg.bisect(a, c)] : void 0;
      }
      return (
        (c.domain = function (b) {
          return arguments.length ? ((a = b), c) : a;
        }),
        (c.range = function (a) {
          return arguments.length ? ((b = a), c) : b;
        }),
        (c.invertExtent = function (c) {
          return (c = b.indexOf(c)), [a[c - 1], a[c]];
        }),
        (c.copy = function () {
          return cf(a, b);
        }),
        c
      );
    }
    function df(a) {
      function b(a) {
        return +a;
      }
      return (
        (b.invert = b),
        (b.domain = b.range =
          function (c) {
            return arguments.length ? ((a = c.map(b)), b) : a;
          }),
        (b.ticks = function (b) {
          return Ue(a, b);
        }),
        (b.tickFormat = function (b, c) {
          return Ve(a, b, c);
        }),
        (b.copy = function () {
          return df(a);
        }),
        b
      );
    }
    function ef() {
      return 0;
    }
    function ff(a) {
      return a.innerRadius;
    }
    function gf(a) {
      return a.outerRadius;
    }
    function hf(a) {
      return a.startAngle;
    }
    function jf(a) {
      return a.endAngle;
    }
    function kf(a) {
      return a && a.padAngle;
    }
    function lf(a, b, c, d) {
      return (a - c) * b - (b - d) * a > 0 ? 0 : 1;
    }
    function mf(a, b, c, d, e) {
      var f = a[0] - b[0],
        g = a[1] - b[1],
        h = (e ? d : -d) / Math.sqrt(f * f + g * g),
        i = h * g,
        j = -h * f,
        k = a[0] + i,
        l = a[1] + j,
        m = b[0] + i,
        n = b[1] + j,
        o = (k + m) / 2,
        p = (l + n) / 2,
        q = m - k,
        r = n - l,
        s = q * q + r * r,
        t = c - d,
        u = k * n - m * l,
        v = (0 > r ? -1 : 1) * Math.sqrt(t * t * s - u * u),
        w = (u * r - q * v) / s,
        x = (-u * q - r * v) / s,
        y = (u * r + q * v) / s,
        z = (-u * q + r * v) / s,
        A = w - o,
        B = x - p,
        C = y - o,
        D = z - p;
      return (
        A * A + B * B > C * C + D * D && ((w = y), (x = z)),
        [
          [w - i, x - j],
          [(w * c) / t, (x * c) / t],
        ]
      );
    }
    function nf(a) {
      function b(b) {
        function g() {
          j.push("M", f(a(k), h));
        }
        for (
          var i, j = [], k = [], l = -1, m = b.length, n = Aa(c), o = Aa(d);
          ++l < m;

        )
          e.call(this, (i = b[l]), l)
            ? k.push([+n.call(this, i, l), +o.call(this, i, l)])
            : k.length && (g(), (k = []));
        return k.length && g(), j.length ? j.join("") : null;
      }
      var c = Bc,
        d = Cc,
        e = Cb,
        f = of,
        g = f.key,
        h = 0.7;
      return (
        (b.x = function (a) {
          return arguments.length ? ((c = a), b) : c;
        }),
        (b.y = function (a) {
          return arguments.length ? ((d = a), b) : d;
        }),
        (b.defined = function (a) {
          return arguments.length ? ((e = a), b) : e;
        }),
        (b.interpolate = function (a) {
          return arguments.length
            ? ((g =
                "function" == typeof a ? (f = a) : (f = Ai.get(a) || of).key),
              b)
            : g;
        }),
        (b.tension = function (a) {
          return arguments.length ? ((h = a), b) : h;
        }),
        b
      );
    }
    function of(a) {
      return a.join("L");
    }
    function pf(a) {
      return of(a) + "Z";
    }
    function qf(a) {
      for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c; )
        e.push("H", (d[0] + (d = a[b])[0]) / 2, "V", d[1]);
      return c > 1 && e.push("H", d[0]), e.join("");
    }
    function rf(a) {
      for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c; )
        e.push("V", (d = a[b])[1], "H", d[0]);
      return e.join("");
    }
    function sf(a) {
      for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c; )
        e.push("H", (d = a[b])[0], "V", d[1]);
      return e.join("");
    }
    function tf(a, b) {
      return a.length < 4 ? of(a) : a[1] + wf(a.slice(1, -1), xf(a, b));
    }
    function uf(a, b) {
      return a.length < 3
        ? of(a)
        : a[0] +
            wf((a.push(a[0]), a), xf([a[a.length - 2]].concat(a, [a[1]]), b));
    }
    function vf(a, b) {
      return a.length < 3 ? of(a) : a[0] + wf(a, xf(a, b));
    }
    function wf(a, b) {
      if (b.length < 1 || (a.length != b.length && a.length != b.length + 2))
        return of(a);
      var c = a.length != b.length,
        d = "",
        e = a[0],
        f = a[1],
        g = b[0],
        h = g,
        i = 1;
      if (
        (c &&
          ((d +=
            "Q" +
            (f[0] - (2 * g[0]) / 3) +
            "," +
            (f[1] - (2 * g[1]) / 3) +
            "," +
            f[0] +
            "," +
            f[1]),
          (e = a[1]),
          (i = 2)),
        b.length > 1)
      ) {
        (h = b[1]),
          (f = a[i]),
          i++,
          (d +=
            "C" +
            (e[0] + g[0]) +
            "," +
            (e[1] + g[1]) +
            "," +
            (f[0] - h[0]) +
            "," +
            (f[1] - h[1]) +
            "," +
            f[0] +
            "," +
            f[1]);
        for (var j = 2; j < b.length; j++, i++)
          (f = a[i]),
            (h = b[j]),
            (d +=
              "S" +
              (f[0] - h[0]) +
              "," +
              (f[1] - h[1]) +
              "," +
              f[0] +
              "," +
              f[1]);
      }
      if (c) {
        var k = a[i];
        d +=
          "Q" +
          (f[0] + (2 * h[0]) / 3) +
          "," +
          (f[1] + (2 * h[1]) / 3) +
          "," +
          k[0] +
          "," +
          k[1];
      }
      return d;
    }
    function xf(a, b) {
      for (
        var c, d = [], e = (1 - b) / 2, f = a[0], g = a[1], h = 1, i = a.length;
        ++h < i;

      )
        (c = f),
          (f = g),
          (g = a[h]),
          d.push([e * (g[0] - c[0]), e * (g[1] - c[1])]);
      return d;
    }
    function yf(a) {
      if (a.length < 3) return of(a);
      var b = 1,
        c = a.length,
        d = a[0],
        e = d[0],
        f = d[1],
        g = [e, e, e, (d = a[1])[0]],
        h = [f, f, f, d[1]],
        i = [e, ",", f, "L", Cf(Di, g), ",", Cf(Di, h)];
      for (a.push(a[c - 1]); ++b <= c; )
        (d = a[b]),
          g.shift(),
          g.push(d[0]),
          h.shift(),
          h.push(d[1]),
          Df(i, g, h);
      return a.pop(), i.push("L", d), i.join("");
    }
    function zf(a) {
      if (a.length < 4) return of(a);
      for (var b, c = [], d = -1, e = a.length, f = [0], g = [0]; ++d < 3; )
        (b = a[d]), f.push(b[0]), g.push(b[1]);
      for (c.push(Cf(Di, f) + "," + Cf(Di, g)), --d; ++d < e; )
        (b = a[d]),
          f.shift(),
          f.push(b[0]),
          g.shift(),
          g.push(b[1]),
          Df(c, f, g);
      return c.join("");
    }
    function Af(a) {
      for (var b, c, d = -1, e = a.length, f = e + 4, g = [], h = []; ++d < 4; )
        (c = a[d % e]), g.push(c[0]), h.push(c[1]);
      for (b = [Cf(Di, g), ",", Cf(Di, h)], --d; ++d < f; )
        (c = a[d % e]),
          g.shift(),
          g.push(c[0]),
          h.shift(),
          h.push(c[1]),
          Df(b, g, h);
      return b.join("");
    }
    function Bf(a, b) {
      var c = a.length - 1;
      if (c)
        for (
          var d,
            e,
            f = a[0][0],
            g = a[0][1],
            h = a[c][0] - f,
            i = a[c][1] - g,
            j = -1;
          ++j <= c;

        )
          (d = a[j]),
            (e = j / c),
            (d[0] = b * d[0] + (1 - b) * (f + e * h)),
            (d[1] = b * d[1] + (1 - b) * (g + e * i));
      return yf(a);
    }
    function Cf(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }
    function Df(a, b, c) {
      a.push(
        "C",
        Cf(Bi, b),
        ",",
        Cf(Bi, c),
        ",",
        Cf(Ci, b),
        ",",
        Cf(Ci, c),
        ",",
        Cf(Di, b),
        ",",
        Cf(Di, c)
      );
    }
    function Ef(a, b) {
      return (b[1] - a[1]) / (b[0] - a[0]);
    }
    function Ff(a) {
      for (
        var b = 0,
          c = a.length - 1,
          d = [],
          e = a[0],
          f = a[1],
          g = (d[0] = Ef(e, f));
        ++b < c;

      )
        d[b] = (g + (g = Ef((e = f), (f = a[b + 1])))) / 2;
      return (d[b] = g), d;
    }
    function Gf(a) {
      for (
        var b, c, d, e, f = [], g = Ff(a), h = -1, i = a.length - 1;
        ++h < i;

      )
        (b = Ef(a[h], a[h + 1])),
          ng(b) < Dg
            ? (g[h] = g[h + 1] = 0)
            : ((c = g[h] / b),
              (d = g[h + 1] / b),
              (e = c * c + d * d),
              e > 9 &&
                ((e = (3 * b) / Math.sqrt(e)),
                (g[h] = e * c),
                (g[h + 1] = e * d)));
      for (h = -1; ++h <= i; )
        (e =
          (a[Math.min(i, h + 1)][0] - a[Math.max(0, h - 1)][0]) /
          (6 * (1 + g[h] * g[h]))),
          f.push([e || 0, g[h] * e || 0]);
      return f;
    }
    function Hf(a) {
      return a.length < 3 ? of(a) : a[0] + wf(a, Gf(a));
    }
    function If(a) {
      for (var b, c, d, e = -1, f = a.length; ++e < f; )
        (b = a[e]),
          (c = b[0]),
          (d = b[1] - Ig),
          (b[0] = c * Math.cos(d)),
          (b[1] = c * Math.sin(d));
      return a;
    }
    function Jf(a) {
      function b(b) {
        function i() {
          p.push("M", h(a(r), l), k, j(a(q.reverse()), l), "Z");
        }
        for (
          var m,
            n,
            o,
            p = [],
            q = [],
            r = [],
            s = -1,
            t = b.length,
            u = Aa(c),
            v = Aa(e),
            w =
              c === d
                ? function () {
                    return n;
                  }
                : Aa(d),
            x =
              e === f
                ? function () {
                    return o;
                  }
                : Aa(f);
          ++s < t;

        )
          g.call(this, (m = b[s]), s)
            ? (q.push([(n = +u.call(this, m, s)), (o = +v.call(this, m, s))]),
              r.push([+w.call(this, m, s), +x.call(this, m, s)]))
            : q.length && (i(), (q = []), (r = []));
        return q.length && i(), p.length ? p.join("") : null;
      }
      var c = Bc,
        d = Bc,
        e = 0,
        f = Cc,
        g = Cb,
        h = of,
        i = h.key,
        j = h,
        k = "L",
        l = 0.7;
      return (
        (b.x = function (a) {
          return arguments.length ? ((c = d = a), b) : d;
        }),
        (b.x0 = function (a) {
          return arguments.length ? ((c = a), b) : c;
        }),
        (b.x1 = function (a) {
          return arguments.length ? ((d = a), b) : d;
        }),
        (b.y = function (a) {
          return arguments.length ? ((e = f = a), b) : f;
        }),
        (b.y0 = function (a) {
          return arguments.length ? ((e = a), b) : e;
        }),
        (b.y1 = function (a) {
          return arguments.length ? ((f = a), b) : f;
        }),
        (b.defined = function (a) {
          return arguments.length ? ((g = a), b) : g;
        }),
        (b.interpolate = function (a) {
          return arguments.length
            ? ((i =
                "function" == typeof a ? (h = a) : (h = Ai.get(a) || of).key),
              (j = h.reverse || h),
              (k = h.closed ? "M" : "L"),
              b)
            : i;
        }),
        (b.tension = function (a) {
          return arguments.length ? ((l = a), b) : l;
        }),
        b
      );
    }
    function Kf(a) {
      return a.radius;
    }
    function Lf(a) {
      return [a.x, a.y];
    }
    function Mf(a) {
      return function () {
        var b = a.apply(this, arguments),
          c = b[0],
          d = b[1] - Ig;
        return [c * Math.cos(d), c * Math.sin(d)];
      };
    }
    function Nf() {
      return 64;
    }
    function Of() {
      return "circle";
    }
    function Pf(a) {
      var b = Math.sqrt(a / Fg);
      return (
        "M0," +
        b +
        "A" +
        b +
        "," +
        b +
        " 0 1,1 0," +
        -b +
        "A" +
        b +
        "," +
        b +
        " 0 1,1 0," +
        b +
        "Z"
      );
    }
    function Qf(a) {
      return function () {
        var b, c;
        (b = this[a]) &&
          (c = b[b.active]) &&
          (--b.count ? delete b[b.active] : delete this[a],
          (b.active += 0.5),
          c.event && c.event.interrupt.call(this, this.__data__, c.index));
      };
    }
    function Rf(a, b, c) {
      return sg(a, Ki), (a.namespace = b), (a.id = c), a;
    }
    function Sf(a, b, c, d) {
      var e = a.id,
        f = a.namespace;
      return R(
        a,
        "function" == typeof c
          ? function (a, g, h) {
              a[f][e].tween.set(b, d(c.call(a, a.__data__, g, h)));
            }
          : ((c = d(c)),
            function (a) {
              a[f][e].tween.set(b, c);
            })
      );
    }
    function Tf(a) {
      return (
        null == a && (a = ""),
        function () {
          this.textContent = a;
        }
      );
    }
    function Uf(a) {
      return null == a ? "__transition__" : "__transition_" + a + "__";
    }
    function Vf(a, b, c, d, e) {
      var f = a[c] || (a[c] = { active: 0, count: 0 }),
        g = f[d];
      if (!g) {
        var h = e.time;
        (g = f[d] =
          {
            tween: new j(),
            time: h,
            delay: e.delay,
            duration: e.duration,
            ease: e.ease,
            index: b,
          }),
          (e = null),
          ++f.count,
          bg.timer(
            function (e) {
              function i(c) {
                if (f.active > d) return k();
                var e = f[f.active];
                e &&
                  (--f.count,
                  delete f[f.active],
                  e.event && e.event.interrupt.call(a, a.__data__, e.index)),
                  (f.active = d),
                  g.event && g.event.start.call(a, a.__data__, b),
                  g.tween.forEach(function (c, d) {
                    (d = d.call(a, a.__data__, b)) && p.push(d);
                  }),
                  (m = g.ease),
                  (l = g.duration),
                  bg.timer(
                    function () {
                      return (o.c = j(c || 1) ? Cb : j), 1;
                    },
                    0,
                    h
                  );
              }
              function j(c) {
                if (f.active !== d) return 1;
                for (var e = c / l, h = m(e), i = p.length; i > 0; )
                  p[--i].call(a, h);
                return e >= 1
                  ? (g.event && g.event.end.call(a, a.__data__, b), k())
                  : void 0;
              }
              function k() {
                return --f.count ? delete f[d] : delete a[c], 1;
              }
              var l,
                m,
                n = g.delay,
                o = ch,
                p = [];
              return (o.t = n + h), e >= n ? i(e - n) : void (o.c = i);
            },
            0,
            h
          );
      }
    }
    function Wf(a, b, c) {
      a.attr("transform", function (a) {
        var d = b(a);
        return "translate(" + (isFinite(d) ? d : c(a)) + ",0)";
      });
    }
    function Xf(a, b, c) {
      a.attr("transform", function (a) {
        var d = b(a);
        return "translate(0," + (isFinite(d) ? d : c(a)) + ")";
      });
    }
    function Yf(a) {
      return a.toISOString();
    }
    function Zf(a, b, c) {
      function d(b) {
        return a(b);
      }
      function e(a, c) {
        var d = a[1] - a[0],
          e = d / c,
          f = bg.bisect(Ti, e);
        return f == Ti.length
          ? [
              b.year,
              Te(
                a.map(function (a) {
                  return a / 31536e6;
                }),
                c
              )[2],
            ]
          : f
          ? b[e / Ti[f - 1] < Ti[f] / e ? f - 1 : f]
          : [Wi, Te(a, c)[2]];
      }
      return (
        (d.invert = function (b) {
          return $f(a.invert(b));
        }),
        (d.domain = function (b) {
          return arguments.length ? (a.domain(b), d) : a.domain().map($f);
        }),
        (d.nice = function (a, b) {
          function c(c) {
            return !isNaN(c) && !a.range(c, $f(+c + 1), b).length;
          }
          var f = d.domain(),
            g = Ke(f),
            h = null == a ? e(g, 10) : "number" == typeof a && e(g, a);
          return (
            h && ((a = h[0]), (b = h[1])),
            d.domain(
              Ne(
                f,
                b > 1
                  ? {
                      floor: function (b) {
                        for (; c((b = a.floor(b))); ) b = $f(b - 1);
                        return b;
                      },
                      ceil: function (b) {
                        for (; c((b = a.ceil(b))); ) b = $f(+b + 1);
                        return b;
                      },
                    }
                  : a
              )
            )
          );
        }),
        (d.ticks = function (a, b) {
          var c = Ke(d.domain()),
            f =
              null == a
                ? e(c, 10)
                : "number" == typeof a
                ? e(c, a)
                : !a.range && [{ range: a }, b];
          return (
            f && ((a = f[0]), (b = f[1])),
            a.range(c[0], $f(+c[1] + 1), 1 > b ? 1 : b)
          );
        }),
        (d.tickFormat = function () {
          return c;
        }),
        (d.copy = function () {
          return Zf(a.copy(), b, c);
        }),
        Re(d, a)
      );
    }
    function $f(a) {
      return new Date(a);
    }
    function _f(a) {
      return JSON.parse(a.responseText);
    }
    function ag(a) {
      var b = eg.createRange();
      return b.selectNode(eg.body), b.createContextualFragment(a.responseText);
    }
    var bg = { version: "3.5.6" },
      cg = [].slice,
      dg = function (a) {
        return cg.call(a);
      },
      eg = this.document;
    if (eg)
      try {
        dg(eg.documentElement.childNodes)[0].nodeType;
      } catch (fg) {
        dg = function (a) {
          for (var b = a.length, c = new Array(b); b--; ) c[b] = a[b];
          return c;
        };
      }
    if (
      (Date.now ||
        (Date.now = function () {
          return +new Date();
        }),
      eg)
    )
      try {
        eg.createElement("DIV").style.setProperty("opacity", 0, "");
      } catch (gg) {
        var hg = this.Element.prototype,
          ig = hg.setAttribute,
          jg = hg.setAttributeNS,
          kg = this.CSSStyleDeclaration.prototype,
          lg = kg.setProperty;
        (hg.setAttribute = function (a, b) {
          ig.call(this, a, b + "");
        }),
          (hg.setAttributeNS = function (a, b, c) {
            jg.call(this, a, b, c + "");
          }),
          (kg.setProperty = function (a, b, c) {
            lg.call(this, a, b + "", c);
          });
      }
    (bg.ascending = c),
      (bg.descending = function (a, b) {
        return a > b ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
      }),
      (bg.min = function (a, b) {
        var c,
          d,
          e = -1,
          f = a.length;
        if (1 === arguments.length) {
          for (; ++e < f; )
            if (null != (d = a[e]) && d >= d) {
              c = d;
              break;
            }
          for (; ++e < f; ) null != (d = a[e]) && c > d && (c = d);
        } else {
          for (; ++e < f; )
            if (null != (d = b.call(a, a[e], e)) && d >= d) {
              c = d;
              break;
            }
          for (; ++e < f; )
            null != (d = b.call(a, a[e], e)) && c > d && (c = d);
        }
        return c;
      }),
      (bg.max = function (a, b) {
        var c,
          d,
          e = -1,
          f = a.length;
        if (1 === arguments.length) {
          for (; ++e < f; )
            if (null != (d = a[e]) && d >= d) {
              c = d;
              break;
            }
          for (; ++e < f; ) null != (d = a[e]) && d > c && (c = d);
        } else {
          for (; ++e < f; )
            if (null != (d = b.call(a, a[e], e)) && d >= d) {
              c = d;
              break;
            }
          for (; ++e < f; )
            null != (d = b.call(a, a[e], e)) && d > c && (c = d);
        }
        return c;
      }),
      (bg.extent = function (a, b) {
        var c,
          d,
          e,
          f = -1,
          g = a.length;
        if (1 === arguments.length) {
          for (; ++f < g; )
            if (null != (d = a[f]) && d >= d) {
              c = e = d;
              break;
            }
          for (; ++f < g; )
            null != (d = a[f]) && (c > d && (c = d), d > e && (e = d));
        } else {
          for (; ++f < g; )
            if (null != (d = b.call(a, a[f], f)) && d >= d) {
              c = e = d;
              break;
            }
          for (; ++f < g; )
            null != (d = b.call(a, a[f], f)) &&
              (c > d && (c = d), d > e && (e = d));
        }
        return [c, e];
      }),
      (bg.sum = function (a, b) {
        var c,
          d = 0,
          f = a.length,
          g = -1;
        if (1 === arguments.length)
          for (; ++g < f; ) e((c = +a[g])) && (d += c);
        else for (; ++g < f; ) e((c = +b.call(a, a[g], g))) && (d += c);
        return d;
      }),
      (bg.mean = function (a, b) {
        var c,
          f = 0,
          g = a.length,
          h = -1,
          i = g;
        if (1 === arguments.length)
          for (; ++h < g; ) e((c = d(a[h]))) ? (f += c) : --i;
        else for (; ++h < g; ) e((c = d(b.call(a, a[h], h)))) ? (f += c) : --i;
        return i ? f / i : void 0;
      }),
      (bg.quantile = function (a, b) {
        var c = (a.length - 1) * b + 1,
          d = Math.floor(c),
          e = +a[d - 1],
          f = c - d;
        return f ? e + f * (a[d] - e) : e;
      }),
      (bg.median = function (a, b) {
        var f,
          g = [],
          h = a.length,
          i = -1;
        if (1 === arguments.length)
          for (; ++i < h; ) e((f = d(a[i]))) && g.push(f);
        else for (; ++i < h; ) e((f = d(b.call(a, a[i], i)))) && g.push(f);
        return g.length ? bg.quantile(g.sort(c), 0.5) : void 0;
      }),
      (bg.variance = function (a, b) {
        var c,
          f,
          g = a.length,
          h = 0,
          i = 0,
          j = -1,
          k = 0;
        if (1 === arguments.length)
          for (; ++j < g; )
            e((c = d(a[j]))) &&
              ((f = c - h), (h += f / ++k), (i += f * (c - h)));
        else
          for (; ++j < g; )
            e((c = d(b.call(a, a[j], j)))) &&
              ((f = c - h), (h += f / ++k), (i += f * (c - h)));
        return k > 1 ? i / (k - 1) : void 0;
      }),
      (bg.deviation = function () {
        var a = bg.variance.apply(this, arguments);
        return a ? Math.sqrt(a) : a;
      });
    var mg = f(c);
    (bg.bisectLeft = mg.left),
      (bg.bisect = bg.bisectRight = mg.right),
      (bg.bisector = function (a) {
        return f(
          1 === a.length
            ? function (b, d) {
                return c(a(b), d);
              }
            : a
        );
      }),
      (bg.shuffle = function (a, b, c) {
        (f = arguments.length) < 3 && ((c = a.length), 2 > f && (b = 0));
        for (var d, e, f = c - b; f; )
          (e = (Math.random() * f--) | 0),
            (d = a[f + b]),
            (a[f + b] = a[e + b]),
            (a[e + b] = d);
        return a;
      }),
      (bg.permute = function (a, b) {
        for (var c = b.length, d = new Array(c); c--; ) d[c] = a[b[c]];
        return d;
      }),
      (bg.pairs = function (a) {
        for (
          var b,
            c = 0,
            d = a.length - 1,
            e = a[0],
            f = new Array(0 > d ? 0 : d);
          d > c;

        )
          f[c] = [(b = e), (e = a[++c])];
        return f;
      }),
      (bg.zip = function () {
        if (!(d = arguments.length)) return [];
        for (var a = -1, b = bg.min(arguments, g), c = new Array(b); ++a < b; )
          for (var d, e = -1, f = (c[a] = new Array(d)); ++e < d; )
            f[e] = arguments[e][a];
        return c;
      }),
      (bg.transpose = function (a) {
        return bg.zip.apply(bg, a);
      }),
      (bg.keys = function (a) {
        var b = [];
        for (var c in a) b.push(c);
        return b;
      }),
      (bg.values = function (a) {
        var b = [];
        for (var c in a) b.push(a[c]);
        return b;
      }),
      (bg.entries = function (a) {
        var b = [];
        for (var c in a) b.push({ key: c, value: a[c] });
        return b;
      }),
      (bg.merge = function (a) {
        for (var b, c, d, e = a.length, f = -1, g = 0; ++f < e; )
          g += a[f].length;
        for (c = new Array(g); --e >= 0; )
          for (d = a[e], b = d.length; --b >= 0; ) c[--g] = d[b];
        return c;
      });
    var ng = Math.abs;
    (bg.range = function (a, b, c) {
      if (
        (arguments.length < 3 &&
          ((c = 1), arguments.length < 2 && ((b = a), (a = 0))),
        (b - a) / c === 1 / 0)
      )
        throw new Error("infinite range");
      var d,
        e = [],
        f = h(ng(c)),
        g = -1;
      if (((a *= f), (b *= f), (c *= f), 0 > c))
        for (; (d = a + c * ++g) > b; ) e.push(d / f);
      else for (; (d = a + c * ++g) < b; ) e.push(d / f);
      return e;
    }),
      (bg.map = function (a, b) {
        var c = new j();
        if (a instanceof j)
          a.forEach(function (a, b) {
            c.set(a, b);
          });
        else if (Array.isArray(a)) {
          var d,
            e = -1,
            f = a.length;
          if (1 === arguments.length) for (; ++e < f; ) c.set(e, a[e]);
          else for (; ++e < f; ) c.set(b.call(a, (d = a[e]), e), d);
        } else for (var g in a) c.set(g, a[g]);
        return c;
      });
    var og = "__proto__",
      pg = "\x00";
    i(j, {
      has: m,
      get: function (a) {
        return this._[k(a)];
      },
      set: function (a, b) {
        return (this._[k(a)] = b);
      },
      remove: n,
      keys: o,
      values: function () {
        var a = [];
        for (var b in this._) a.push(this._[b]);
        return a;
      },
      entries: function () {
        var a = [];
        for (var b in this._) a.push({ key: l(b), value: this._[b] });
        return a;
      },
      size: p,
      empty: q,
      forEach: function (a) {
        for (var b in this._) a.call(this, l(b), this._[b]);
      },
    }),
      (bg.nest = function () {
        function a(b, g, h) {
          if (h >= f.length) return d ? d.call(e, g) : c ? g.sort(c) : g;
          for (
            var i, k, l, m, n = -1, o = g.length, p = f[h++], q = new j();
            ++n < o;

          )
            (m = q.get((i = p((k = g[n]))))) ? m.push(k) : q.set(i, [k]);
          return (
            b
              ? ((k = b()),
                (l = function (c, d) {
                  k.set(c, a(b, d, h));
                }))
              : ((k = {}),
                (l = function (c, d) {
                  k[c] = a(b, d, h);
                })),
            q.forEach(l),
            k
          );
        }
        function b(a, c) {
          if (c >= f.length) return a;
          var d = [],
            e = g[c++];
          return (
            a.forEach(function (a, e) {
              d.push({ key: a, values: b(e, c) });
            }),
            e
              ? d.sort(function (a, b) {
                  return e(a.key, b.key);
                })
              : d
          );
        }
        var c,
          d,
          e = {},
          f = [],
          g = [];
        return (
          (e.map = function (b, c) {
            return a(c, b, 0);
          }),
          (e.entries = function (c) {
            return b(a(bg.map, c, 0), 0);
          }),
          (e.key = function (a) {
            return f.push(a), e;
          }),
          (e.sortKeys = function (a) {
            return (g[f.length - 1] = a), e;
          }),
          (e.sortValues = function (a) {
            return (c = a), e;
          }),
          (e.rollup = function (a) {
            return (d = a), e;
          }),
          e
        );
      }),
      (bg.set = function (a) {
        var b = new r();
        if (a) for (var c = 0, d = a.length; d > c; ++c) b.add(a[c]);
        return b;
      }),
      i(r, {
        has: m,
        add: function (a) {
          return (this._[k((a += ""))] = !0), a;
        },
        remove: n,
        values: o,
        size: p,
        empty: q,
        forEach: function (a) {
          for (var b in this._) a.call(this, l(b));
        },
      }),
      (bg.behavior = {}),
      (bg.rebind = function (a, b) {
        for (var c, d = 1, e = arguments.length; ++d < e; )
          a[(c = arguments[d])] = t(a, b, b[c]);
        return a;
      });
    var qg = ["webkit", "ms", "moz", "Moz", "o", "O"];
    (bg.dispatch = function () {
      for (var a = new w(), b = -1, c = arguments.length; ++b < c; )
        a[arguments[b]] = x(a);
      return a;
    }),
      (w.prototype.on = function (a, b) {
        var c = a.indexOf("."),
          d = "";
        if ((c >= 0 && ((d = a.slice(c + 1)), (a = a.slice(0, c))), a))
          return arguments.length < 2 ? this[a].on(d) : this[a].on(d, b);
        if (2 === arguments.length) {
          if (null == b)
            for (a in this) this.hasOwnProperty(a) && this[a].on(d, null);
          return this;
        }
      }),
      (bg.event = null),
      (bg.requote = function (a) {
        return a.replace(rg, "\\$&");
      });
    var rg = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
      sg = {}.__proto__
        ? function (a, b) {
            a.__proto__ = b;
          }
        : function (a, b) {
            for (var c in b) a[c] = b[c];
          },
      tg = function (a, b) {
        return b.querySelector(a);
      },
      ug = function (a, b) {
        return b.querySelectorAll(a);
      },
      vg = function (a, b) {
        var c = a.matches || a[u(a, "matchesSelector")];
        return (vg = function (a, b) {
          return c.call(a, b);
        })(a, b);
      };
    "function" == typeof Sizzle &&
      ((tg = function (a, b) {
        return Sizzle(a, b)[0] || null;
      }),
      (ug = Sizzle),
      (vg = Sizzle.matchesSelector)),
      (bg.selection = function () {
        return bg.select(eg.documentElement);
      });
    var wg = (bg.selection.prototype = []);
    (wg.select = function (a) {
      var b,
        c,
        d,
        e,
        f = [];
      a = C(a);
      for (var g = -1, h = this.length; ++g < h; ) {
        f.push((b = [])), (b.parentNode = (d = this[g]).parentNode);
        for (var i = -1, j = d.length; ++i < j; )
          (e = d[i])
            ? (b.push((c = a.call(e, e.__data__, i, g))),
              c && "__data__" in e && (c.__data__ = e.__data__))
            : b.push(null);
      }
      return B(f);
    }),
      (wg.selectAll = function (a) {
        var b,
          c,
          d = [];
        a = D(a);
        for (var e = -1, f = this.length; ++e < f; )
          for (var g = this[e], h = -1, i = g.length; ++h < i; )
            (c = g[h]) &&
              (d.push((b = dg(a.call(c, c.__data__, h, e)))),
              (b.parentNode = c));
        return B(d);
      });
    var xg = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/",
    };
    (bg.ns = {
      prefix: xg,
      qualify: function (a) {
        var b = a.indexOf(":"),
          c = a;
        return (
          b >= 0 && ((c = a.slice(0, b)), (a = a.slice(b + 1))),
          xg.hasOwnProperty(c) ? { space: xg[c], local: a } : a
        );
      },
    }),
      (wg.attr = function (a, b) {
        if (arguments.length < 2) {
          if ("string" == typeof a) {
            var c = this.node();
            return (
              (a = bg.ns.qualify(a)),
              a.local ? c.getAttributeNS(a.space, a.local) : c.getAttribute(a)
            );
          }
          for (b in a) this.each(E(b, a[b]));
          return this;
        }
        return this.each(E(a, b));
      }),
      (wg.classed = function (a, b) {
        if (arguments.length < 2) {
          if ("string" == typeof a) {
            var c = this.node(),
              d = (a = H(a)).length,
              e = -1;
            if ((b = c.classList)) {
              for (; ++e < d; ) if (!b.contains(a[e])) return !1;
            } else
              for (b = c.getAttribute("class"); ++e < d; )
                if (!G(a[e]).test(b)) return !1;
            return !0;
          }
          for (b in a) this.each(I(b, a[b]));
          return this;
        }
        return this.each(I(a, b));
      }),
      (wg.style = function (a, c, d) {
        var e = arguments.length;
        if (3 > e) {
          if ("string" != typeof a) {
            2 > e && (c = "");
            for (d in a) this.each(K(d, a[d], c));
            return this;
          }
          if (2 > e) {
            var f = this.node();
            return b(f).getComputedStyle(f, null).getPropertyValue(a);
          }
          d = "";
        }
        return this.each(K(a, c, d));
      }),
      (wg.property = function (a, b) {
        if (arguments.length < 2) {
          if ("string" == typeof a) return this.node()[a];
          for (b in a) this.each(L(b, a[b]));
          return this;
        }
        return this.each(L(a, b));
      }),
      (wg.text = function (a) {
        return arguments.length
          ? this.each(
              "function" == typeof a
                ? function () {
                    var b = a.apply(this, arguments);
                    this.textContent = null == b ? "" : b;
                  }
                : null == a
                ? function () {
                    this.textContent = "";
                  }
                : function () {
                    this.textContent = a;
                  }
            )
          : this.node().textContent;
      }),
      (wg.html = function (a) {
        return arguments.length
          ? this.each(
              "function" == typeof a
                ? function () {
                    var b = a.apply(this, arguments);
                    this.innerHTML = null == b ? "" : b;
                  }
                : null == a
                ? function () {
                    this.innerHTML = "";
                  }
                : function () {
                    this.innerHTML = a;
                  }
            )
          : this.node().innerHTML;
      }),
      (wg.append = function (a) {
        return (
          (a = M(a)),
          this.select(function () {
            return this.appendChild(a.apply(this, arguments));
          })
        );
      }),
      (wg.insert = function (a, b) {
        return (
          (a = M(a)),
          (b = C(b)),
          this.select(function () {
            return this.insertBefore(
              a.apply(this, arguments),
              b.apply(this, arguments) || null
            );
          })
        );
      }),
      (wg.remove = function () {
        return this.each(N);
      }),
      (wg.data = function (a, b) {
        function c(a, c) {
          var d,
            e,
            f,
            g = a.length,
            l = c.length,
            m = Math.min(g, l),
            n = new Array(l),
            o = new Array(l),
            p = new Array(g);
          if (b) {
            var q,
              r = new j(),
              s = new Array(g);
            for (d = -1; ++d < g; )
              r.has((q = b.call((e = a[d]), e.__data__, d)))
                ? (p[d] = e)
                : r.set(q, e),
                (s[d] = q);
            for (d = -1; ++d < l; )
              (e = r.get((q = b.call(c, (f = c[d]), d))))
                ? e !== !0 && ((n[d] = e), (e.__data__ = f))
                : (o[d] = O(f)),
                r.set(q, !0);
            for (d = -1; ++d < g; ) r.get(s[d]) !== !0 && (p[d] = a[d]);
          } else {
            for (d = -1; ++d < m; )
              (e = a[d]),
                (f = c[d]),
                e ? ((e.__data__ = f), (n[d] = e)) : (o[d] = O(f));
            for (; l > d; ++d) o[d] = O(c[d]);
            for (; g > d; ++d) p[d] = a[d];
          }
          (o.update = n),
            (o.parentNode = n.parentNode = p.parentNode = a.parentNode),
            h.push(o),
            i.push(n),
            k.push(p);
        }
        var d,
          e,
          f = -1,
          g = this.length;
        if (!arguments.length) {
          for (a = new Array((g = (d = this[0]).length)); ++f < g; )
            (e = d[f]) && (a[f] = e.__data__);
          return a;
        }
        var h = S([]),
          i = B([]),
          k = B([]);
        if ("function" == typeof a)
          for (; ++f < g; )
            c((d = this[f]), a.call(d, d.parentNode.__data__, f));
        else for (; ++f < g; ) c((d = this[f]), a);
        return (
          (i.enter = function () {
            return h;
          }),
          (i.exit = function () {
            return k;
          }),
          i
        );
      }),
      (wg.datum = function (a) {
        return arguments.length
          ? this.property("__data__", a)
          : this.property("__data__");
      }),
      (wg.filter = function (a) {
        var b,
          c,
          d,
          e = [];
        "function" != typeof a && (a = P(a));
        for (var f = 0, g = this.length; g > f; f++) {
          e.push((b = [])), (b.parentNode = (c = this[f]).parentNode);
          for (var h = 0, i = c.length; i > h; h++)
            (d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d);
        }
        return B(e);
      }),
      (wg.order = function () {
        for (var a = -1, b = this.length; ++a < b; )
          for (var c, d = this[a], e = d.length - 1, f = d[e]; --e >= 0; )
            (c = d[e]) &&
              (f && f !== c.nextSibling && f.parentNode.insertBefore(c, f),
              (f = c));
        return this;
      }),
      (wg.sort = function (a) {
        a = Q.apply(this, arguments);
        for (var b = -1, c = this.length; ++b < c; ) this[b].sort(a);
        return this.order();
      }),
      (wg.each = function (a) {
        return R(this, function (b, c, d) {
          a.call(b, b.__data__, c, d);
        });
      }),
      (wg.call = function (a) {
        var b = dg(arguments);
        return a.apply((b[0] = this), b), this;
      }),
      (wg.empty = function () {
        return !this.node();
      }),
      (wg.node = function () {
        for (var a = 0, b = this.length; b > a; a++)
          for (var c = this[a], d = 0, e = c.length; e > d; d++) {
            var f = c[d];
            if (f) return f;
          }
        return null;
      }),
      (wg.size = function () {
        var a = 0;
        return (
          R(this, function () {
            ++a;
          }),
          a
        );
      });
    var yg = [];
    (bg.selection.enter = S),
      (bg.selection.enter.prototype = yg),
      (yg.append = wg.append),
      (yg.empty = wg.empty),
      (yg.node = wg.node),
      (yg.call = wg.call),
      (yg.size = wg.size),
      (yg.select = function (a) {
        for (var b, c, d, e, f, g = [], h = -1, i = this.length; ++h < i; ) {
          (d = (e = this[h]).update),
            g.push((b = [])),
            (b.parentNode = e.parentNode);
          for (var j = -1, k = e.length; ++j < k; )
            (f = e[j])
              ? (b.push((d[j] = c = a.call(e.parentNode, f.__data__, j, h))),
                (c.__data__ = f.__data__))
              : b.push(null);
        }
        return B(g);
      }),
      (yg.insert = function (a, b) {
        return (
          arguments.length < 2 && (b = T(this)), wg.insert.call(this, a, b)
        );
      }),
      (bg.select = function (b) {
        var c;
        return (
          "string" == typeof b
            ? ((c = [tg(b, eg)]), (c.parentNode = eg.documentElement))
            : ((c = [b]), (c.parentNode = a(b))),
          B([c])
        );
      }),
      (bg.selectAll = function (a) {
        var b;
        return (
          "string" == typeof a
            ? ((b = dg(ug(a, eg))), (b.parentNode = eg.documentElement))
            : ((b = a), (b.parentNode = null)),
          B([b])
        );
      }),
      (wg.on = function (a, b, c) {
        var d = arguments.length;
        if (3 > d) {
          if ("string" != typeof a) {
            2 > d && (b = !1);
            for (c in a) this.each(U(c, a[c], b));
            return this;
          }
          if (2 > d) return (d = this.node()["__on" + a]) && d._;
          c = !1;
        }
        return this.each(U(a, b, c));
      });
    var zg = bg.map({ mouseenter: "mouseover", mouseleave: "mouseout" });
    eg &&
      zg.forEach(function (a) {
        "on" + a in eg && zg.remove(a);
      });
    var Ag,
      Bg = 0;
    bg.mouse = function (a) {
      return Y(a, z());
    };
    var Cg = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
    (bg.touch = function (a, b, c) {
      if ((arguments.length < 3 && ((c = b), (b = z().changedTouches)), b))
        for (var d, e = 0, f = b.length; f > e; ++e)
          if ((d = b[e]).identifier === c) return Y(a, d);
    }),
      (bg.behavior.drag = function () {
        function a() {
          this.on("mousedown.drag", f).on("touchstart.drag", g);
        }
        function c(a, b, c, f, g) {
          return function () {
            function h() {
              var a,
                c,
                d = b(m, p);
              d &&
                ((a = d[0] - t[0]),
                (c = d[1] - t[1]),
                (o |= a | c),
                (t = d),
                n({
                  type: "drag",
                  x: d[0] + j[0],
                  y: d[1] + j[1],
                  dx: a,
                  dy: c,
                }));
            }
            function i() {
              b(m, p) &&
                (r.on(f + q, null).on(g + q, null),
                s(o && bg.event.target === l),
                n({ type: "dragend" }));
            }
            var j,
              k = this,
              l = bg.event.target,
              m = k.parentNode,
              n = d.of(k, arguments),
              o = 0,
              p = a(),
              q = ".drag" + (null == p ? "" : "-" + p),
              r = bg
                .select(c(l))
                .on(f + q, h)
                .on(g + q, i),
              s = X(l),
              t = b(m, p);
            e
              ? ((j = e.apply(k, arguments)), (j = [j.x - t[0], j.y - t[1]]))
              : (j = [0, 0]),
              n({ type: "dragstart" });
          };
        }
        var d = A(a, "drag", "dragstart", "dragend"),
          e = null,
          f = c(v, bg.mouse, b, "mousemove", "mouseup"),
          g = c(Z, bg.touch, s, "touchmove", "touchend");
        return (
          (a.origin = function (b) {
            return arguments.length ? ((e = b), a) : e;
          }),
          bg.rebind(a, d, "on")
        );
      }),
      (bg.touches = function (a, b) {
        return (
          arguments.length < 2 && (b = z().touches),
          b
            ? dg(b).map(function (b) {
                var c = Y(a, b);
                return (c.identifier = b.identifier), c;
              })
            : []
        );
      });
    var Dg = 1e-6,
      Eg = Dg * Dg,
      Fg = Math.PI,
      Gg = 2 * Fg,
      Hg = Gg - Dg,
      Ig = Fg / 2,
      Jg = Fg / 180,
      Kg = 180 / Fg,
      Lg = Math.SQRT2,
      Mg = 2,
      Ng = 4;
    (bg.interpolateZoom = function (a, b) {
      function c(a) {
        var b = a * s;
        if (r) {
          var c = da(p),
            g = (f / (Mg * m)) * (c * ea(Lg * b + p) - ca(p));
          return [d + g * j, e + g * k, (f * c) / da(Lg * b + p)];
        }
        return [d + a * j, e + a * k, f * Math.exp(Lg * b)];
      }
      var d = a[0],
        e = a[1],
        f = a[2],
        g = b[0],
        h = b[1],
        i = b[2],
        j = g - d,
        k = h - e,
        l = j * j + k * k,
        m = Math.sqrt(l),
        n = (i * i - f * f + Ng * l) / (2 * f * Mg * m),
        o = (i * i - f * f - Ng * l) / (2 * i * Mg * m),
        p = Math.log(Math.sqrt(n * n + 1) - n),
        q = Math.log(Math.sqrt(o * o + 1) - o),
        r = q - p,
        s = (r || Math.log(i / f)) / Lg;
      return (c.duration = 1e3 * s), c;
    }),
      (bg.behavior.zoom = function () {
        function a(a) {
          a.on(F, l)
            .on(Pg + ".zoom", n)
            .on("dblclick.zoom", o)
            .on(I, m);
        }
        function c(a) {
          return [(a[0] - z.x) / z.k, (a[1] - z.y) / z.k];
        }
        function d(a) {
          return [a[0] * z.k + z.x, a[1] * z.k + z.y];
        }
        function e(a) {
          z.k = Math.max(C[0], Math.min(C[1], a));
        }
        function f(a, b) {
          (b = d(b)), (z.x += a[0] - b[0]), (z.y += a[1] - b[1]);
        }
        function g(b, c, d, g) {
          (b.__chart__ = { x: z.x, y: z.y, k: z.k }),
            e(Math.pow(2, g)),
            f((q = c), d),
            (b = bg.select(b)),
            D > 0 && (b = b.transition().duration(D)),
            b.call(a.event);
        }
        function h() {
          v &&
            v.domain(
              u
                .range()
                .map(function (a) {
                  return (a - z.x) / z.k;
                })
                .map(u.invert)
            ),
            x &&
              x.domain(
                w
                  .range()
                  .map(function (a) {
                    return (a - z.y) / z.k;
                  })
                  .map(w.invert)
              );
        }
        function i(a) {
          E++ || a({ type: "zoomstart" });
        }
        function j(a) {
          h(), a({ type: "zoom", scale: z.k, translate: [z.x, z.y] });
        }
        function k(a) {
          --E || (a({ type: "zoomend" }), (q = null));
        }
        function l() {
          function a() {
            (l = 1), f(bg.mouse(e), n), j(h);
          }
          function d() {
            m.on(G, null).on(H, null), o(l && bg.event.target === g), k(h);
          }
          var e = this,
            g = bg.event.target,
            h = J.of(e, arguments),
            l = 0,
            m = bg.select(b(e)).on(G, a).on(H, d),
            n = c(bg.mouse(e)),
            o = X(e);
          Ji.call(e), i(h);
        }
        function m() {
          function a() {
            var a = bg.touches(o);
            return (
              (n = z.k),
              a.forEach(function (a) {
                a.identifier in q && (q[a.identifier] = c(a));
              }),
              a
            );
          }
          function b() {
            var b = bg.event.target;
            bg.select(b).on(u, d).on(v, h), w.push(b);
            for (
              var c = bg.event.changedTouches, e = 0, f = c.length;
              f > e;
              ++e
            )
              q[c[e].identifier] = null;
            var i = a(),
              j = Date.now();
            if (1 === i.length) {
              if (500 > j - t) {
                var k = i[0];
                g(
                  o,
                  k,
                  q[k.identifier],
                  Math.floor(Math.log(z.k) / Math.LN2) + 1
                ),
                  y();
              }
              t = j;
            } else if (i.length > 1) {
              var k = i[0],
                l = i[1],
                m = k[0] - l[0],
                n = k[1] - l[1];
              r = m * m + n * n;
            }
          }
          function d() {
            var a,
              b,
              c,
              d,
              g = bg.touches(o);
            Ji.call(o);
            for (var h = 0, i = g.length; i > h; ++h, d = null)
              if (((c = g[h]), (d = q[c.identifier]))) {
                if (b) break;
                (a = c), (b = d);
              }
            if (d) {
              var k = (k = c[0] - a[0]) * k + (k = c[1] - a[1]) * k,
                l = r && Math.sqrt(k / r);
              (a = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2]),
                (b = [(b[0] + d[0]) / 2, (b[1] + d[1]) / 2]),
                e(l * n);
            }
            (t = null), f(a, b), j(p);
          }
          function h() {
            if (bg.event.touches.length) {
              for (
                var b = bg.event.changedTouches, c = 0, d = b.length;
                d > c;
                ++c
              )
                delete q[b[c].identifier];
              for (var e in q) return void a();
            }
            bg.selectAll(w).on(s, null), x.on(F, l).on(I, m), A(), k(p);
          }
          var n,
            o = this,
            p = J.of(o, arguments),
            q = {},
            r = 0,
            s = ".zoom-" + bg.event.changedTouches[0].identifier,
            u = "touchmove" + s,
            v = "touchend" + s,
            w = [],
            x = bg.select(o),
            A = X(o);
          b(), i(p), x.on(F, null).on(I, b);
        }
        function n() {
          var a = J.of(this, arguments);
          s
            ? clearTimeout(s)
            : (Ji.call(this), (p = c((q = r || bg.mouse(this)))), i(a)),
            (s = setTimeout(function () {
              (s = null), k(a);
            }, 50)),
            y(),
            e(Math.pow(2, 0.002 * Og()) * z.k),
            f(q, p),
            j(a);
        }
        function o() {
          var a = bg.mouse(this),
            b = Math.log(z.k) / Math.LN2;
          g(
            this,
            a,
            c(a),
            bg.event.shiftKey ? Math.ceil(b) - 1 : Math.floor(b) + 1
          );
        }
        var p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          z = { x: 0, y: 0, k: 1 },
          B = [960, 500],
          C = Qg,
          D = 250,
          E = 0,
          F = "mousedown.zoom",
          G = "mousemove.zoom",
          H = "mouseup.zoom",
          I = "touchstart.zoom",
          J = A(a, "zoomstart", "zoom", "zoomend");
        return (
          Pg ||
            (Pg =
              "onwheel" in eg
                ? ((Og = function () {
                    return -bg.event.deltaY * (bg.event.deltaMode ? 120 : 1);
                  }),
                  "wheel")
                : "onmousewheel" in eg
                ? ((Og = function () {
                    return bg.event.wheelDelta;
                  }),
                  "mousewheel")
                : ((Og = function () {
                    return -bg.event.detail;
                  }),
                  "MozMousePixelScroll")),
          (a.event = function (a) {
            a.each(function () {
              var a = J.of(this, arguments),
                b = z;
              Hi
                ? bg
                    .select(this)
                    .transition()
                    .each("start.zoom", function () {
                      (z = this.__chart__ || { x: 0, y: 0, k: 1 }), i(a);
                    })
                    .tween("zoom:zoom", function () {
                      var c = B[0],
                        d = B[1],
                        e = q ? q[0] : c / 2,
                        f = q ? q[1] : d / 2,
                        g = bg.interpolateZoom(
                          [(e - z.x) / z.k, (f - z.y) / z.k, c / z.k],
                          [(e - b.x) / b.k, (f - b.y) / b.k, c / b.k]
                        );
                      return function (b) {
                        var d = g(b),
                          h = c / d[2];
                        (this.__chart__ = z =
                          { x: e - d[0] * h, y: f - d[1] * h, k: h }),
                          j(a);
                      };
                    })
                    .each("interrupt.zoom", function () {
                      k(a);
                    })
                    .each("end.zoom", function () {
                      k(a);
                    })
                : ((this.__chart__ = z), i(a), j(a), k(a));
            });
          }),
          (a.translate = function (b) {
            return arguments.length
              ? ((z = { x: +b[0], y: +b[1], k: z.k }), h(), a)
              : [z.x, z.y];
          }),
          (a.scale = function (b) {
            return arguments.length
              ? ((z = { x: z.x, y: z.y, k: +b }), h(), a)
              : z.k;
          }),
          (a.scaleExtent = function (b) {
            return arguments.length
              ? ((C = null == b ? Qg : [+b[0], +b[1]]), a)
              : C;
          }),
          (a.center = function (b) {
            return arguments.length ? ((r = b && [+b[0], +b[1]]), a) : r;
          }),
          (a.size = function (b) {
            return arguments.length ? ((B = b && [+b[0], +b[1]]), a) : B;
          }),
          (a.duration = function (b) {
            return arguments.length ? ((D = +b), a) : D;
          }),
          (a.x = function (b) {
            return arguments.length
              ? ((v = b), (u = b.copy()), (z = { x: 0, y: 0, k: 1 }), a)
              : v;
          }),
          (a.y = function (b) {
            return arguments.length
              ? ((x = b), (w = b.copy()), (z = { x: 0, y: 0, k: 1 }), a)
              : x;
          }),
          bg.rebind(a, J, "on")
        );
      });
    var Og,
      Pg,
      Qg = [0, 1 / 0];
    (bg.color = ga),
      (ga.prototype.toString = function () {
        return this.rgb() + "";
      }),
      (bg.hsl = ha);
    var Rg = (ha.prototype = new ga());
    (Rg.brighter = function (a) {
      return (
        (a = Math.pow(0.7, arguments.length ? a : 1)),
        new ha(this.h, this.s, this.l / a)
      );
    }),
      (Rg.darker = function (a) {
        return (
          (a = Math.pow(0.7, arguments.length ? a : 1)),
          new ha(this.h, this.s, a * this.l)
        );
      }),
      (Rg.rgb = function () {
        return ia(this.h, this.s, this.l);
      }),
      (bg.hcl = ja);
    var Sg = (ja.prototype = new ga());
    (Sg.brighter = function (a) {
      return new ja(
        this.h,
        this.c,
        Math.min(100, this.l + Tg * (arguments.length ? a : 1))
      );
    }),
      (Sg.darker = function (a) {
        return new ja(
          this.h,
          this.c,
          Math.max(0, this.l - Tg * (arguments.length ? a : 1))
        );
      }),
      (Sg.rgb = function () {
        return ka(this.h, this.c, this.l).rgb();
      }),
      (bg.lab = la);
    var Tg = 18,
      Ug = 0.95047,
      Vg = 1,
      Wg = 1.08883,
      Xg = (la.prototype = new ga());
    (Xg.brighter = function (a) {
      return new la(
        Math.min(100, this.l + Tg * (arguments.length ? a : 1)),
        this.a,
        this.b
      );
    }),
      (Xg.darker = function (a) {
        return new la(
          Math.max(0, this.l - Tg * (arguments.length ? a : 1)),
          this.a,
          this.b
        );
      }),
      (Xg.rgb = function () {
        return ma(this.l, this.a, this.b);
      }),
      (bg.rgb = ra);
    var Yg = (ra.prototype = new ga());
    (Yg.brighter = function (a) {
      a = Math.pow(0.7, arguments.length ? a : 1);
      var b = this.r,
        c = this.g,
        d = this.b,
        e = 30;
      return b || c || d
        ? (b && e > b && (b = e),
          c && e > c && (c = e),
          d && e > d && (d = e),
          new ra(
            Math.min(255, b / a),
            Math.min(255, c / a),
            Math.min(255, d / a)
          ))
        : new ra(e, e, e);
    }),
      (Yg.darker = function (a) {
        return (
          (a = Math.pow(0.7, arguments.length ? a : 1)),
          new ra(a * this.r, a * this.g, a * this.b)
        );
      }),
      (Yg.hsl = function () {
        return wa(this.r, this.g, this.b);
      }),
      (Yg.toString = function () {
        return "#" + ua(this.r) + ua(this.g) + ua(this.b);
      });
    var Zg = bg.map({
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    });
    Zg.forEach(function (a, b) {
      Zg.set(a, sa(b));
    }),
      (bg.functor = Aa),
      (bg.xhr = Ba(s)),
      (bg.dsv = function (a, b) {
        function c(a, c, f) {
          arguments.length < 3 && ((f = c), (c = null));
          var g = Ca(a, b, null == c ? d : e(c), f);
          return (
            (g.row = function (a) {
              return arguments.length
                ? g.response(null == (c = a) ? d : e(a))
                : c;
            }),
            g
          );
        }
        function d(a) {
          return c.parse(a.responseText);
        }
        function e(a) {
          return function (b) {
            return c.parse(b.responseText, a);
          };
        }
        function f(b) {
          return b.map(g).join(a);
        }
        function g(a) {
          return h.test(a) ? '"' + a.replace(/\"/g, '""') + '"' : a;
        }
        var h = new RegExp('["' + a + "\n]"),
          i = a.charCodeAt(0);
        return (
          (c.parse = function (a, b) {
            var d;
            return c.parseRows(a, function (a, c) {
              if (d) return d(a, c - 1);
              var e = new Function(
                "d",
                "return {" +
                  a
                    .map(function (a, b) {
                      return JSON.stringify(a) + ": d[" + b + "]";
                    })
                    .join(",") +
                  "}"
              );
              d = b
                ? function (a, c) {
                    return b(e(a), c);
                  }
                : e;
            });
          }),
          (c.parseRows = function (a, b) {
            function c() {
              if (k >= j) return g;
              if (e) return (e = !1), f;
              var b = k;
              if (34 === a.charCodeAt(b)) {
                for (var c = b; c++ < j; )
                  if (34 === a.charCodeAt(c)) {
                    if (34 !== a.charCodeAt(c + 1)) break;
                    ++c;
                  }
                k = c + 2;
                var d = a.charCodeAt(c + 1);
                return (
                  13 === d
                    ? ((e = !0), 10 === a.charCodeAt(c + 2) && ++k)
                    : 10 === d && (e = !0),
                  a.slice(b + 1, c).replace(/""/g, '"')
                );
              }
              for (; j > k; ) {
                var d = a.charCodeAt(k++),
                  h = 1;
                if (10 === d) e = !0;
                else if (13 === d)
                  (e = !0), 10 === a.charCodeAt(k) && (++k, ++h);
                else if (d !== i) continue;
                return a.slice(b, k - h);
              }
              return a.slice(b);
            }
            for (
              var d, e, f = {}, g = {}, h = [], j = a.length, k = 0, l = 0;
              (d = c()) !== g;

            ) {
              for (var m = []; d !== f && d !== g; ) m.push(d), (d = c());
              (b && null == (m = b(m, l++))) || h.push(m);
            }
            return h;
          }),
          (c.format = function (b) {
            if (Array.isArray(b[0])) return c.formatRows(b);
            var d = new r(),
              e = [];
            return (
              b.forEach(function (a) {
                for (var b in a) d.has(b) || e.push(d.add(b));
              }),
              [e.map(g).join(a)]
                .concat(
                  b.map(function (b) {
                    return e
                      .map(function (a) {
                        return g(b[a]);
                      })
                      .join(a);
                  })
                )
                .join("\n")
            );
          }),
          (c.formatRows = function (a) {
            return a.map(f).join("\n");
          }),
          c
        );
      }),
      (bg.csv = bg.dsv(",", "text/csv")),
      (bg.tsv = bg.dsv("	", "text/tab-separated-values"));
    var $g,
      _g,
      ah,
      bh,
      ch,
      dh =
        this[u(this, "requestAnimationFrame")] ||
        function (a) {
          setTimeout(a, 17);
        };
    (bg.timer = function (a, b, c) {
      var d = arguments.length;
      2 > d && (b = 0), 3 > d && (c = Date.now());
      var e = c + b,
        f = { c: a, t: e, f: !1, n: null };
      _g ? (_g.n = f) : ($g = f),
        (_g = f),
        ah || ((bh = clearTimeout(bh)), (ah = 1), dh(Fa));
    }),
      (bg.timer.flush = function () {
        Ga(), Ha();
      }),
      (bg.round = function (a, b) {
        return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a);
      });
    var eh = [
      "y",
      "z",
      "a",
      "f",
      "p",
      "n",
      "µ",
      "m",
      "",
      "k",
      "M",
      "G",
      "T",
      "P",
      "E",
      "Z",
      "Y",
    ].map(Ja);
    bg.formatPrefix = function (a, b) {
      var c = 0;
      return (
        a &&
          (0 > a && (a *= -1),
          b && (a = bg.round(a, Ia(a, b))),
          (c = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10)),
          (c = Math.max(-24, Math.min(24, 3 * Math.floor((c - 1) / 3))))),
        eh[8 + c / 3]
      );
    };
    var fh =
        /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
      gh = bg.map({
        b: function (a) {
          return a.toString(2);
        },
        c: function (a) {
          return String.fromCharCode(a);
        },
        o: function (a) {
          return a.toString(8);
        },
        x: function (a) {
          return a.toString(16);
        },
        X: function (a) {
          return a.toString(16).toUpperCase();
        },
        g: function (a, b) {
          return a.toPrecision(b);
        },
        e: function (a, b) {
          return a.toExponential(b);
        },
        f: function (a, b) {
          return a.toFixed(b);
        },
        r: function (a, b) {
          return (a = bg.round(a, Ia(a, b))).toFixed(
            Math.max(0, Math.min(20, Ia(a * (1 + 1e-15), b)))
          );
        },
      }),
      hh = (bg.time = {}),
      ih = Date;
    Ma.prototype = {
      getDate: function () {
        return this._.getUTCDate();
      },
      getDay: function () {
        return this._.getUTCDay();
      },
      getFullYear: function () {
        return this._.getUTCFullYear();
      },
      getHours: function () {
        return this._.getUTCHours();
      },
      getMilliseconds: function () {
        return this._.getUTCMilliseconds();
      },
      getMinutes: function () {
        return this._.getUTCMinutes();
      },
      getMonth: function () {
        return this._.getUTCMonth();
      },
      getSeconds: function () {
        return this._.getUTCSeconds();
      },
      getTime: function () {
        return this._.getTime();
      },
      getTimezoneOffset: function () {
        return 0;
      },
      valueOf: function () {
        return this._.valueOf();
      },
      setDate: function () {
        jh.setUTCDate.apply(this._, arguments);
      },
      setDay: function () {
        jh.setUTCDay.apply(this._, arguments);
      },
      setFullYear: function () {
        jh.setUTCFullYear.apply(this._, arguments);
      },
      setHours: function () {
        jh.setUTCHours.apply(this._, arguments);
      },
      setMilliseconds: function () {
        jh.setUTCMilliseconds.apply(this._, arguments);
      },
      setMinutes: function () {
        jh.setUTCMinutes.apply(this._, arguments);
      },
      setMonth: function () {
        jh.setUTCMonth.apply(this._, arguments);
      },
      setSeconds: function () {
        jh.setUTCSeconds.apply(this._, arguments);
      },
      setTime: function () {
        jh.setTime.apply(this._, arguments);
      },
    };
    var jh = Date.prototype;
    (hh.year = Na(
      function (a) {
        return (a = hh.day(a)), a.setMonth(0, 1), a;
      },
      function (a, b) {
        a.setFullYear(a.getFullYear() + b);
      },
      function (a) {
        return a.getFullYear();
      }
    )),
      (hh.years = hh.year.range),
      (hh.years.utc = hh.year.utc.range),
      (hh.day = Na(
        function (a) {
          var b = new ih(2e3, 0);
          return b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), b;
        },
        function (a, b) {
          a.setDate(a.getDate() + b);
        },
        function (a) {
          return a.getDate() - 1;
        }
      )),
      (hh.days = hh.day.range),
      (hh.days.utc = hh.day.utc.range),
      (hh.dayOfYear = function (a) {
        var b = hh.year(a);
        return Math.floor(
          (a - b - 6e4 * (a.getTimezoneOffset() - b.getTimezoneOffset())) /
            864e5
        );
      }),
      [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ].forEach(function (a, b) {
        b = 7 - b;
        var c = (hh[a] = Na(
          function (a) {
            return (
              (a = hh.day(a)).setDate(a.getDate() - ((a.getDay() + b) % 7)), a
            );
          },
          function (a, b) {
            a.setDate(a.getDate() + 7 * Math.floor(b));
          },
          function (a) {
            var c = hh.year(a).getDay();
            return (
              Math.floor((hh.dayOfYear(a) + ((c + b) % 7)) / 7) - (c !== b)
            );
          }
        ));
        (hh[a + "s"] = c.range),
          (hh[a + "s"].utc = c.utc.range),
          (hh[a + "OfYear"] = function (a) {
            var c = hh.year(a).getDay();
            return Math.floor((hh.dayOfYear(a) + ((c + b) % 7)) / 7);
          });
      }),
      (hh.week = hh.sunday),
      (hh.weeks = hh.sunday.range),
      (hh.weeks.utc = hh.sunday.utc.range),
      (hh.weekOfYear = hh.sundayOfYear);
    var kh = { "-": "", _: " ", 0: "0" },
      lh = /^\s*\d+/,
      mh = /^%/;
    bg.locale = function (a) {
      return { numberFormat: Ka(a), timeFormat: Pa(a) };
    };
    var nh = bg.locale({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""],
      dateTime: "%a %b %e %X %Y",
      date: "%m/%d/%Y",
      time: "%H:%M:%S",
      periods: ["AM", "PM"],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    });
    (bg.format = nh.numberFormat),
      (bg.geo = {}),
      (ib.prototype = {
        s: 0,
        t: 0,
        add: function (a) {
          jb(a, this.t, oh),
            jb(oh.s, this.s, this),
            this.s ? (this.t += oh.t) : (this.s = oh.t);
        },
        reset: function () {
          this.s = this.t = 0;
        },
        valueOf: function () {
          return this.s;
        },
      });
    var oh = new ib();
    bg.geo.stream = function (a, b) {
      a && ph.hasOwnProperty(a.type) ? ph[a.type](a, b) : kb(a, b);
    };
    var ph = {
        Feature: function (a, b) {
          kb(a.geometry, b);
        },
        FeatureCollection: function (a, b) {
          for (var c = a.features, d = -1, e = c.length; ++d < e; )
            kb(c[d].geometry, b);
        },
      },
      qh = {
        Sphere: function (a, b) {
          b.sphere();
        },
        Point: function (a, b) {
          (a = a.coordinates), b.point(a[0], a[1], a[2]);
        },
        MultiPoint: function (a, b) {
          for (var c = a.coordinates, d = -1, e = c.length; ++d < e; )
            (a = c[d]), b.point(a[0], a[1], a[2]);
        },
        LineString: function (a, b) {
          lb(a.coordinates, b, 0);
        },
        MultiLineString: function (a, b) {
          for (var c = a.coordinates, d = -1, e = c.length; ++d < e; )
            lb(c[d], b, 0);
        },
        Polygon: function (a, b) {
          mb(a.coordinates, b);
        },
        MultiPolygon: function (a, b) {
          for (var c = a.coordinates, d = -1, e = c.length; ++d < e; )
            mb(c[d], b);
        },
        GeometryCollection: function (a, b) {
          for (var c = a.geometries, d = -1, e = c.length; ++d < e; )
            kb(c[d], b);
        },
      };
    bg.geo.area = function (a) {
      return (rh = 0), bg.geo.stream(a, th), rh;
    };
    var rh,
      sh = new ib(),
      th = {
        sphere: function () {
          rh += 4 * Fg;
        },
        point: v,
        lineStart: v,
        lineEnd: v,
        polygonStart: function () {
          sh.reset(), (th.lineStart = nb);
        },
        polygonEnd: function () {
          var a = 2 * sh;
          (rh += 0 > a ? 4 * Fg + a : a),
            (th.lineStart = th.lineEnd = th.point = v);
        },
      };
    (bg.geo.bounds = (function () {
      function a(a, b) {
        t.push((u = [(k = a), (m = a)])), l > b && (l = b), b > n && (n = b);
      }
      function b(b, c) {
        var d = ob([b * Jg, c * Jg]);
        if (r) {
          var e = qb(r, d),
            f = [e[1], -e[0], 0],
            g = qb(f, e);
          tb(g), (g = ub(g));
          var i = b - o,
            j = i > 0 ? 1 : -1,
            p = g[0] * Kg * j,
            q = ng(i) > 180;
          if (q ^ (p > j * o && j * b > p)) {
            var s = g[1] * Kg;
            s > n && (n = s);
          } else if (
            ((p = ((p + 360) % 360) - 180), q ^ (p > j * o && j * b > p))
          ) {
            var s = -g[1] * Kg;
            l > s && (l = s);
          } else l > c && (l = c), c > n && (n = c);
          q
            ? o > b
              ? h(k, b) > h(k, m) && (m = b)
              : h(b, m) > h(k, m) && (k = b)
            : m >= k
            ? (k > b && (k = b), b > m && (m = b))
            : b > o
            ? h(k, b) > h(k, m) && (m = b)
            : h(b, m) > h(k, m) && (k = b);
        } else a(b, c);
        (r = d), (o = b);
      }
      function c() {
        v.point = b;
      }
      function d() {
        (u[0] = k), (u[1] = m), (v.point = a), (r = null);
      }
      function e(a, c) {
        if (r) {
          var d = a - o;
          s += ng(d) > 180 ? d + (d > 0 ? 360 : -360) : d;
        } else (p = a), (q = c);
        th.point(a, c), b(a, c);
      }
      function f() {
        th.lineStart();
      }
      function g() {
        e(p, q),
          th.lineEnd(),
          ng(s) > Dg && (k = -(m = 180)),
          (u[0] = k),
          (u[1] = m),
          (r = null);
      }
      function h(a, b) {
        return (b -= a) < 0 ? b + 360 : b;
      }
      function i(a, b) {
        return a[0] - b[0];
      }
      function j(a, b) {
        return b[0] <= b[1] ? b[0] <= a && a <= b[1] : a < b[0] || b[1] < a;
      }
      var k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v = {
          point: a,
          lineStart: c,
          lineEnd: d,
          polygonStart: function () {
            (v.point = e),
              (v.lineStart = f),
              (v.lineEnd = g),
              (s = 0),
              th.polygonStart();
          },
          polygonEnd: function () {
            th.polygonEnd(),
              (v.point = a),
              (v.lineStart = c),
              (v.lineEnd = d),
              0 > sh
                ? ((k = -(m = 180)), (l = -(n = 90)))
                : s > Dg
                ? (n = 90)
                : -Dg > s && (l = -90),
              (u[0] = k),
              (u[1] = m);
          },
        };
      return function (a) {
        (n = m = -(k = l = 1 / 0)), (t = []), bg.geo.stream(a, v);
        var b = t.length;
        if (b) {
          t.sort(i);
          for (var c, d = 1, e = t[0], f = [e]; b > d; ++d)
            (c = t[d]),
              j(c[0], e) || j(c[1], e)
                ? (h(e[0], c[1]) > h(e[0], e[1]) && (e[1] = c[1]),
                  h(c[0], e[1]) > h(e[0], e[1]) && (e[0] = c[0]))
                : f.push((e = c));
          for (
            var g, c, o = -1 / 0, b = f.length - 1, d = 0, e = f[b];
            b >= d;
            e = c, ++d
          )
            (c = f[d]),
              (g = h(e[1], c[0])) > o && ((o = g), (k = c[0]), (m = e[1]));
        }
        return (
          (t = u = null),
          1 / 0 === k || 1 / 0 === l
            ? [
                [NaN, NaN],
                [NaN, NaN],
              ]
            : [
                [k, l],
                [m, n],
              ]
        );
      };
    })()),
      (bg.geo.centroid = function (a) {
        (uh = vh = wh = xh = yh = zh = Ah = Bh = Ch = Dh = Eh = 0),
          bg.geo.stream(a, Fh);
        var b = Ch,
          c = Dh,
          d = Eh,
          e = b * b + c * c + d * d;
        return Eg > e &&
          ((b = zh),
          (c = Ah),
          (d = Bh),
          Dg > vh && ((b = wh), (c = xh), (d = yh)),
          (e = b * b + c * c + d * d),
          Eg > e)
          ? [NaN, NaN]
          : [Math.atan2(c, b) * Kg, ba(d / Math.sqrt(e)) * Kg];
      });
    var uh,
      vh,
      wh,
      xh,
      yh,
      zh,
      Ah,
      Bh,
      Ch,
      Dh,
      Eh,
      Fh = {
        sphere: v,
        point: wb,
        lineStart: yb,
        lineEnd: zb,
        polygonStart: function () {
          Fh.lineStart = Ab;
        },
        polygonEnd: function () {
          Fh.lineStart = yb;
        },
      },
      Gh = Gb(Cb, Kb, Mb, [-Fg, -Fg / 2]),
      Hh = 1e9;
    (bg.geo.clipExtent = function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g = {
          stream: function (a) {
            return e && (e.valid = !1), (e = f(a)), (e.valid = !0), e;
          },
          extent: function (h) {
            return arguments.length
              ? ((f = Qb(
                  (a = +h[0][0]),
                  (b = +h[0][1]),
                  (c = +h[1][0]),
                  (d = +h[1][1])
                )),
                e && ((e.valid = !1), (e = null)),
                g)
              : [
                  [a, b],
                  [c, d],
                ];
          },
        };
      return g.extent([
        [0, 0],
        [960, 500],
      ]);
    }),
      ((bg.geo.conicEqualArea = function () {
        return Rb(Sb);
      }).raw = Sb),
      (bg.geo.albers = function () {
        return bg.geo
          .conicEqualArea()
          .rotate([96, 0])
          .center([-0.6, 38.7])
          .parallels([29.5, 45.5])
          .scale(1070);
      }),
      (bg.geo.albersUsa = function () {
        function a(a) {
          var f = a[0],
            g = a[1];
          return (b = null), c(f, g), b || (d(f, g), b) || e(f, g), b;
        }
        var b,
          c,
          d,
          e,
          f = bg.geo.albers(),
          g = bg.geo
            .conicEqualArea()
            .rotate([154, 0])
            .center([-2, 58.5])
            .parallels([55, 65]),
          h = bg.geo
            .conicEqualArea()
            .rotate([157, 0])
            .center([-3, 19.9])
            .parallels([8, 18]),
          i = {
            point: function (a, c) {
              b = [a, c];
            },
          };
        return (
          (a.invert = function (a) {
            var b = f.scale(),
              c = f.translate(),
              d = (a[0] - c[0]) / b,
              e = (a[1] - c[1]) / b;
            return (
              e >= 0.12 && 0.234 > e && d >= -0.425 && -0.214 > d
                ? g
                : e >= 0.166 && 0.234 > e && d >= -0.214 && -0.115 > d
                ? h
                : f
            ).invert(a);
          }),
          (a.stream = function (a) {
            var b = f.stream(a),
              c = g.stream(a),
              d = h.stream(a);
            return {
              point: function (a, e) {
                b.point(a, e), c.point(a, e), d.point(a, e);
              },
              sphere: function () {
                b.sphere(), c.sphere(), d.sphere();
              },
              lineStart: function () {
                b.lineStart(), c.lineStart(), d.lineStart();
              },
              lineEnd: function () {
                b.lineEnd(), c.lineEnd(), d.lineEnd();
              },
              polygonStart: function () {
                b.polygonStart(), c.polygonStart(), d.polygonStart();
              },
              polygonEnd: function () {
                b.polygonEnd(), c.polygonEnd(), d.polygonEnd();
              },
            };
          }),
          (a.precision = function (b) {
            return arguments.length
              ? (f.precision(b), g.precision(b), h.precision(b), a)
              : f.precision();
          }),
          (a.scale = function (b) {
            return arguments.length
              ? (f.scale(b),
                g.scale(0.35 * b),
                h.scale(b),
                a.translate(f.translate()))
              : f.scale();
          }),
          (a.translate = function (b) {
            if (!arguments.length) return f.translate();
            var j = f.scale(),
              k = +b[0],
              l = +b[1];
            return (
              (c = f
                .translate(b)
                .clipExtent([
                  [k - 0.455 * j, l - 0.238 * j],
                  [k + 0.455 * j, l + 0.238 * j],
                ])
                .stream(i).point),
              (d = g
                .translate([k - 0.307 * j, l + 0.201 * j])
                .clipExtent([
                  [k - 0.425 * j + Dg, l + 0.12 * j + Dg],
                  [k - 0.214 * j - Dg, l + 0.234 * j - Dg],
                ])
                .stream(i).point),
              (e = h
                .translate([k - 0.205 * j, l + 0.212 * j])
                .clipExtent([
                  [k - 0.214 * j + Dg, l + 0.166 * j + Dg],
                  [k - 0.115 * j - Dg, l + 0.234 * j - Dg],
                ])
                .stream(i).point),
              a
            );
          }),
          a.scale(1070)
        );
      });
    var Ih,
      Jh,
      Kh,
      Lh,
      Mh,
      Nh,
      Oh = {
        point: v,
        lineStart: v,
        lineEnd: v,
        polygonStart: function () {
          (Jh = 0), (Oh.lineStart = Tb);
        },
        polygonEnd: function () {
          (Oh.lineStart = Oh.lineEnd = Oh.point = v), (Ih += ng(Jh / 2));
        },
      },
      Ph = {
        point: Ub,
        lineStart: v,
        lineEnd: v,
        polygonStart: v,
        polygonEnd: v,
      },
      Qh = {
        point: Xb,
        lineStart: Yb,
        lineEnd: Zb,
        polygonStart: function () {
          Qh.lineStart = $b;
        },
        polygonEnd: function () {
          (Qh.point = Xb), (Qh.lineStart = Yb), (Qh.lineEnd = Zb);
        },
      };
    (bg.geo.path = function () {
      function a(a) {
        return (
          a &&
            ("function" == typeof h && f.pointRadius(+h.apply(this, arguments)),
            (g && g.valid) || (g = e(f)),
            bg.geo.stream(a, g)),
          f.result()
        );
      }
      function b() {
        return (g = null), a;
      }
      var c,
        d,
        e,
        f,
        g,
        h = 4.5;
      return (
        (a.area = function (a) {
          return (Ih = 0), bg.geo.stream(a, e(Oh)), Ih;
        }),
        (a.centroid = function (a) {
          return (
            (wh = xh = yh = zh = Ah = Bh = Ch = Dh = Eh = 0),
            bg.geo.stream(a, e(Qh)),
            Eh
              ? [Ch / Eh, Dh / Eh]
              : Bh
              ? [zh / Bh, Ah / Bh]
              : yh
              ? [wh / yh, xh / yh]
              : [NaN, NaN]
          );
        }),
        (a.bounds = function (a) {
          return (
            (Mh = Nh = -(Kh = Lh = 1 / 0)),
            bg.geo.stream(a, e(Ph)),
            [
              [Kh, Lh],
              [Mh, Nh],
            ]
          );
        }),
        (a.projection = function (a) {
          return arguments.length
            ? ((e = (c = a) ? a.stream || bc(a) : s), b())
            : c;
        }),
        (a.context = function (a) {
          return arguments.length
            ? ((f = null == (d = a) ? new Vb() : new _b(a)),
              "function" != typeof h && f.pointRadius(h),
              b())
            : d;
        }),
        (a.pointRadius = function (b) {
          return arguments.length
            ? ((h = "function" == typeof b ? b : (f.pointRadius(+b), +b)), a)
            : h;
        }),
        a.projection(bg.geo.albersUsa()).context(null)
      );
    }),
      (bg.geo.transform = function (a) {
        return {
          stream: function (b) {
            var c = new cc(b);
            for (var d in a) c[d] = a[d];
            return c;
          },
        };
      }),
      (cc.prototype = {
        point: function (a, b) {
          this.stream.point(a, b);
        },
        sphere: function () {
          this.stream.sphere();
        },
        lineStart: function () {
          this.stream.lineStart();
        },
        lineEnd: function () {
          this.stream.lineEnd();
        },
        polygonStart: function () {
          this.stream.polygonStart();
        },
        polygonEnd: function () {
          this.stream.polygonEnd();
        },
      }),
      (bg.geo.projection = ec),
      (bg.geo.projectionMutator = fc),
      ((bg.geo.equirectangular = function () {
        return ec(hc);
      }).raw = hc.invert =
        hc),
      (bg.geo.rotation = function (a) {
        function b(b) {
          return (b = a(b[0] * Jg, b[1] * Jg)), (b[0] *= Kg), (b[1] *= Kg), b;
        }
        return (
          (a = jc((a[0] % 360) * Jg, a[1] * Jg, a.length > 2 ? a[2] * Jg : 0)),
          (b.invert = function (b) {
            return (
              (b = a.invert(b[0] * Jg, b[1] * Jg)),
              (b[0] *= Kg),
              (b[1] *= Kg),
              b
            );
          }),
          b
        );
      }),
      (ic.invert = hc),
      (bg.geo.circle = function () {
        function a() {
          var a = "function" == typeof d ? d.apply(this, arguments) : d,
            b = jc(-a[0] * Jg, -a[1] * Jg, 0).invert,
            e = [];
          return (
            c(null, null, 1, {
              point: function (a, c) {
                e.push((a = b(a, c))), (a[0] *= Kg), (a[1] *= Kg);
              },
            }),
            { type: "Polygon", coordinates: [e] }
          );
        }
        var b,
          c,
          d = [0, 0],
          e = 6;
        return (
          (a.origin = function (b) {
            return arguments.length ? ((d = b), a) : d;
          }),
          (a.angle = function (d) {
            return arguments.length ? ((c = nc((b = +d) * Jg, e * Jg)), a) : b;
          }),
          (a.precision = function (d) {
            return arguments.length ? ((c = nc(b * Jg, (e = +d) * Jg)), a) : e;
          }),
          a.angle(90)
        );
      }),
      (bg.geo.distance = function (a, b) {
        var c,
          d = (b[0] - a[0]) * Jg,
          e = a[1] * Jg,
          f = b[1] * Jg,
          g = Math.sin(d),
          h = Math.cos(d),
          i = Math.sin(e),
          j = Math.cos(e),
          k = Math.sin(f),
          l = Math.cos(f);
        return Math.atan2(
          Math.sqrt((c = l * g) * c + (c = j * k - i * l * h) * c),
          i * k + j * l * h
        );
      }),
      (bg.geo.graticule = function () {
        function a() {
          return { type: "MultiLineString", coordinates: b() };
        }
        function b() {
          return bg
            .range(Math.ceil(f / q) * q, e, q)
            .map(m)
            .concat(bg.range(Math.ceil(j / r) * r, i, r).map(n))
            .concat(
              bg
                .range(Math.ceil(d / o) * o, c, o)
                .filter(function (a) {
                  return ng(a % q) > Dg;
                })
                .map(k)
            )
            .concat(
              bg
                .range(Math.ceil(h / p) * p, g, p)
                .filter(function (a) {
                  return ng(a % r) > Dg;
                })
                .map(l)
            );
        }
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = 10,
          p = o,
          q = 90,
          r = 360,
          s = 2.5;
        return (
          (a.lines = function () {
            return b().map(function (a) {
              return { type: "LineString", coordinates: a };
            });
          }),
          (a.outline = function () {
            return {
              type: "Polygon",
              coordinates: [
                m(f).concat(
                  n(i).slice(1),
                  m(e).reverse().slice(1),
                  n(j).reverse().slice(1)
                ),
              ],
            };
          }),
          (a.extent = function (b) {
            return arguments.length
              ? a.majorExtent(b).minorExtent(b)
              : a.minorExtent();
          }),
          (a.majorExtent = function (b) {
            return arguments.length
              ? ((f = +b[0][0]),
                (e = +b[1][0]),
                (j = +b[0][1]),
                (i = +b[1][1]),
                f > e && ((b = f), (f = e), (e = b)),
                j > i && ((b = j), (j = i), (i = b)),
                a.precision(s))
              : [
                  [f, j],
                  [e, i],
                ];
          }),
          (a.minorExtent = function (b) {
            return arguments.length
              ? ((d = +b[0][0]),
                (c = +b[1][0]),
                (h = +b[0][1]),
                (g = +b[1][1]),
                d > c && ((b = d), (d = c), (c = b)),
                h > g && ((b = h), (h = g), (g = b)),
                a.precision(s))
              : [
                  [d, h],
                  [c, g],
                ];
          }),
          (a.step = function (b) {
            return arguments.length
              ? a.majorStep(b).minorStep(b)
              : a.minorStep();
          }),
          (a.majorStep = function (b) {
            return arguments.length ? ((q = +b[0]), (r = +b[1]), a) : [q, r];
          }),
          (a.minorStep = function (b) {
            return arguments.length ? ((o = +b[0]), (p = +b[1]), a) : [o, p];
          }),
          (a.precision = function (b) {
            return arguments.length
              ? ((s = +b),
                (k = pc(h, g, 90)),
                (l = qc(d, c, s)),
                (m = pc(j, i, 90)),
                (n = qc(f, e, s)),
                a)
              : s;
          }),
          a
            .majorExtent([
              [-180, -90 + Dg],
              [180, 90 - Dg],
            ])
            .minorExtent([
              [-180, -80 - Dg],
              [180, 80 + Dg],
            ])
        );
      }),
      (bg.geo.greatArc = function () {
        function a() {
          return {
            type: "LineString",
            coordinates: [
              b || d.apply(this, arguments),
              c || e.apply(this, arguments),
            ],
          };
        }
        var b,
          c,
          d = rc,
          e = sc;
        return (
          (a.distance = function () {
            return bg.geo.distance(
              b || d.apply(this, arguments),
              c || e.apply(this, arguments)
            );
          }),
          (a.source = function (c) {
            return arguments.length
              ? ((d = c), (b = "function" == typeof c ? null : c), a)
              : d;
          }),
          (a.target = function (b) {
            return arguments.length
              ? ((e = b), (c = "function" == typeof b ? null : b), a)
              : e;
          }),
          (a.precision = function () {
            return arguments.length ? a : 0;
          }),
          a
        );
      }),
      (bg.geo.interpolate = function (a, b) {
        return tc(a[0] * Jg, a[1] * Jg, b[0] * Jg, b[1] * Jg);
      }),
      (bg.geo.length = function (a) {
        return (Rh = 0), bg.geo.stream(a, Sh), Rh;
      });
    var Rh,
      Sh = {
        sphere: v,
        point: v,
        lineStart: uc,
        lineEnd: v,
        polygonStart: v,
        polygonEnd: v,
      },
      Th = vc(
        function (a) {
          return Math.sqrt(2 / (1 + a));
        },
        function (a) {
          return 2 * Math.asin(a / 2);
        }
      );
    (bg.geo.azimuthalEqualArea = function () {
      return ec(Th);
    }).raw = Th;
    var Uh = vc(function (a) {
      var b = Math.acos(a);
      return b && b / Math.sin(b);
    }, s);
    ((bg.geo.azimuthalEquidistant = function () {
      return ec(Uh);
    }).raw = Uh),
      ((bg.geo.conicConformal = function () {
        return Rb(wc);
      }).raw = wc),
      ((bg.geo.conicEquidistant = function () {
        return Rb(xc);
      }).raw = xc);
    var Vh = vc(function (a) {
      return 1 / a;
    }, Math.atan);
    ((bg.geo.gnomonic = function () {
      return ec(Vh);
    }).raw = Vh),
      (yc.invert = function (a, b) {
        return [a, 2 * Math.atan(Math.exp(b)) - Ig];
      }),
      ((bg.geo.mercator = function () {
        return zc(yc);
      }).raw = yc);
    var Wh = vc(function () {
      return 1;
    }, Math.asin);
    (bg.geo.orthographic = function () {
      return ec(Wh);
    }).raw = Wh;
    var Xh = vc(
      function (a) {
        return 1 / (1 + a);
      },
      function (a) {
        return 2 * Math.atan(a);
      }
    );
    ((bg.geo.stereographic = function () {
      return ec(Xh);
    }).raw = Xh),
      (Ac.invert = function (a, b) {
        return [-b, 2 * Math.atan(Math.exp(a)) - Ig];
      }),
      ((bg.geo.transverseMercator = function () {
        var a = zc(Ac),
          b = a.center,
          c = a.rotate;
        return (
          (a.center = function (a) {
            return a ? b([-a[1], a[0]]) : ((a = b()), [a[1], -a[0]]);
          }),
          (a.rotate = function (a) {
            return a
              ? c([a[0], a[1], a.length > 2 ? a[2] + 90 : 90])
              : ((a = c()), [a[0], a[1], a[2] - 90]);
          }),
          c([0, 0, 90])
        );
      }).raw = Ac),
      (bg.geom = {}),
      (bg.geom.hull = function (a) {
        function b(a) {
          if (a.length < 3) return [];
          var b,
            e = Aa(c),
            f = Aa(d),
            g = a.length,
            h = [],
            i = [];
          for (b = 0; g > b; b++)
            h.push([+e.call(this, a[b], b), +f.call(this, a[b], b), b]);
          for (h.sort(Ec), b = 0; g > b; b++) i.push([h[b][0], -h[b][1]]);
          var j = Dc(h),
            k = Dc(i),
            l = k[0] === j[0],
            m = k[k.length - 1] === j[j.length - 1],
            n = [];
          for (b = j.length - 1; b >= 0; --b) n.push(a[h[j[b]][2]]);
          for (b = +l; b < k.length - m; ++b) n.push(a[h[k[b]][2]]);
          return n;
        }
        var c = Bc,
          d = Cc;
        return arguments.length
          ? b(a)
          : ((b.x = function (a) {
              return arguments.length ? ((c = a), b) : c;
            }),
            (b.y = function (a) {
              return arguments.length ? ((d = a), b) : d;
            }),
            b);
      }),
      (bg.geom.polygon = function (a) {
        return sg(a, Yh), a;
      });
    var Yh = (bg.geom.polygon.prototype = []);
    (Yh.area = function () {
      for (var a, b = -1, c = this.length, d = this[c - 1], e = 0; ++b < c; )
        (a = d), (d = this[b]), (e += a[1] * d[0] - a[0] * d[1]);
      return 0.5 * e;
    }),
      (Yh.centroid = function (a) {
        var b,
          c,
          d = -1,
          e = this.length,
          f = 0,
          g = 0,
          h = this[e - 1];
        for (arguments.length || (a = -1 / (6 * this.area())); ++d < e; )
          (b = h),
            (h = this[d]),
            (c = b[0] * h[1] - h[0] * b[1]),
            (f += (b[0] + h[0]) * c),
            (g += (b[1] + h[1]) * c);
        return [f * a, g * a];
      }),
      (Yh.clip = function (a) {
        for (
          var b,
            c,
            d,
            e,
            f,
            g,
            h = Hc(a),
            i = -1,
            j = this.length - Hc(this),
            k = this[j - 1];
          ++i < j;

        ) {
          for (
            b = a.slice(),
              a.length = 0,
              e = this[i],
              f = b[(d = b.length - h) - 1],
              c = -1;
            ++c < d;

          )
            (g = b[c]),
              Fc(g, k, e)
                ? (Fc(f, k, e) || a.push(Gc(f, g, k, e)), a.push(g))
                : Fc(f, k, e) && a.push(Gc(f, g, k, e)),
              (f = g);
          h && a.push(a[0]), (k = e);
        }
        return a;
      });
    var Zh,
      $h,
      _h,
      ai,
      bi,
      ci = [],
      di = [];
    (Pc.prototype.prepare = function () {
      for (var a, b = this.edges, c = b.length; c--; )
        (a = b[c].edge), (a.b && a.a) || b.splice(c, 1);
      return b.sort(Rc), b.length;
    }),
      (_c.prototype = {
        start: function () {
          return this.edge.l === this.site ? this.edge.a : this.edge.b;
        },
        end: function () {
          return this.edge.l === this.site ? this.edge.b : this.edge.a;
        },
      }),
      (ad.prototype = {
        insert: function (a, b) {
          var c, d, e;
          if (a) {
            if (((b.P = a), (b.N = a.N), a.N && (a.N.P = b), (a.N = b), a.R)) {
              for (a = a.R; a.L; ) a = a.L;
              a.L = b;
            } else a.R = b;
            c = a;
          } else
            this._
              ? ((a = ed(this._)),
                (b.P = null),
                (b.N = a),
                (a.P = a.L = b),
                (c = a))
              : ((b.P = b.N = null), (this._ = b), (c = null));
          for (b.L = b.R = null, b.U = c, b.C = !0, a = b; c && c.C; )
            (d = c.U),
              c === d.L
                ? ((e = d.R),
                  e && e.C
                    ? ((c.C = e.C = !1), (d.C = !0), (a = d))
                    : (a === c.R && (cd(this, c), (a = c), (c = a.U)),
                      (c.C = !1),
                      (d.C = !0),
                      dd(this, d)))
                : ((e = d.L),
                  e && e.C
                    ? ((c.C = e.C = !1), (d.C = !0), (a = d))
                    : (a === c.L && (dd(this, c), (a = c), (c = a.U)),
                      (c.C = !1),
                      (d.C = !0),
                      cd(this, d))),
              (c = a.U);
          this._.C = !1;
        },
        remove: function (a) {
          a.N && (a.N.P = a.P), a.P && (a.P.N = a.N), (a.N = a.P = null);
          var b,
            c,
            d,
            e = a.U,
            f = a.L,
            g = a.R;
          if (
            ((c = f ? (g ? ed(g) : f) : g),
            e ? (e.L === a ? (e.L = c) : (e.R = c)) : (this._ = c),
            f && g
              ? ((d = c.C),
                (c.C = a.C),
                (c.L = f),
                (f.U = c),
                c !== g
                  ? ((e = c.U),
                    (c.U = a.U),
                    (a = c.R),
                    (e.L = a),
                    (c.R = g),
                    (g.U = c))
                  : ((c.U = e), (e = c), (a = c.R)))
              : ((d = a.C), (a = c)),
            a && (a.U = e),
            !d)
          ) {
            if (a && a.C) return void (a.C = !1);
            do {
              if (a === this._) break;
              if (a === e.L) {
                if (
                  ((b = e.R),
                  b.C && ((b.C = !1), (e.C = !0), cd(this, e), (b = e.R)),
                  (b.L && b.L.C) || (b.R && b.R.C))
                ) {
                  (b.R && b.R.C) ||
                    ((b.L.C = !1), (b.C = !0), dd(this, b), (b = e.R)),
                    (b.C = e.C),
                    (e.C = b.R.C = !1),
                    cd(this, e),
                    (a = this._);
                  break;
                }
              } else if (
                ((b = e.L),
                b.C && ((b.C = !1), (e.C = !0), dd(this, e), (b = e.L)),
                (b.L && b.L.C) || (b.R && b.R.C))
              ) {
                (b.L && b.L.C) ||
                  ((b.R.C = !1), (b.C = !0), cd(this, b), (b = e.L)),
                  (b.C = e.C),
                  (e.C = b.L.C = !1),
                  dd(this, e),
                  (a = this._);
                break;
              }
              (b.C = !0), (a = e), (e = e.U);
            } while (!a.C);
            a && (a.C = !1);
          }
        },
      }),
      (bg.geom.voronoi = function (a) {
        function b(a) {
          var b = new Array(a.length),
            d = h[0][0],
            e = h[0][1],
            f = h[1][0],
            g = h[1][1];
          return (
            fd(c(a), h).cells.forEach(function (c, h) {
              var i = c.edges,
                j = c.site,
                k = (b[h] = i.length
                  ? i.map(function (a) {
                      var b = a.start();
                      return [b.x, b.y];
                    })
                  : j.x >= d && j.x <= f && j.y >= e && j.y <= g
                  ? [
                      [d, g],
                      [f, g],
                      [f, e],
                      [d, e],
                    ]
                  : []);
              k.point = a[h];
            }),
            b
          );
        }
        function c(a) {
          return a.map(function (a, b) {
            return {
              x: Math.round(f(a, b) / Dg) * Dg,
              y: Math.round(g(a, b) / Dg) * Dg,
              i: b,
            };
          });
        }
        var d = Bc,
          e = Cc,
          f = d,
          g = e,
          h = ei;
        return a
          ? b(a)
          : ((b.links = function (a) {
              return fd(c(a))
                .edges.filter(function (a) {
                  return a.l && a.r;
                })
                .map(function (b) {
                  return { source: a[b.l.i], target: a[b.r.i] };
                });
            }),
            (b.triangles = function (a) {
              var b = [];
              return (
                fd(c(a)).cells.forEach(function (c, d) {
                  for (
                    var e,
                      f,
                      g = c.site,
                      h = c.edges.sort(Rc),
                      i = -1,
                      j = h.length,
                      k = h[j - 1].edge,
                      l = k.l === g ? k.r : k.l;
                    ++i < j;

                  )
                    (e = k),
                      (f = l),
                      (k = h[i].edge),
                      (l = k.l === g ? k.r : k.l),
                      d < f.i &&
                        d < l.i &&
                        hd(g, f, l) < 0 &&
                        b.push([a[d], a[f.i], a[l.i]]);
                }),
                b
              );
            }),
            (b.x = function (a) {
              return arguments.length ? ((f = Aa((d = a))), b) : d;
            }),
            (b.y = function (a) {
              return arguments.length ? ((g = Aa((e = a))), b) : e;
            }),
            (b.clipExtent = function (a) {
              return arguments.length
                ? ((h = null == a ? ei : a), b)
                : h === ei
                ? null
                : h;
            }),
            (b.size = function (a) {
              return arguments.length
                ? b.clipExtent(a && [[0, 0], a])
                : h === ei
                ? null
                : h && h[1];
            }),
            b);
      });
    var ei = [
      [-1e6, -1e6],
      [1e6, 1e6],
    ];
    (bg.geom.delaunay = function (a) {
      return bg.geom.voronoi().triangles(a);
    }),
      (bg.geom.quadtree = function (a, b, c, d, e) {
        function f(a) {
          function f(a, b, c, d, e, f, g, h) {
            if (!isNaN(c) && !isNaN(d))
              if (a.leaf) {
                var i = a.x,
                  k = a.y;
                if (null != i)
                  if (ng(i - c) + ng(k - d) < 0.01) j(a, b, c, d, e, f, g, h);
                  else {
                    var l = a.point;
                    (a.x = a.y = a.point = null),
                      j(a, l, i, k, e, f, g, h),
                      j(a, b, c, d, e, f, g, h);
                  }
                else (a.x = c), (a.y = d), (a.point = b);
              } else j(a, b, c, d, e, f, g, h);
          }
          function j(a, b, c, d, e, g, h, i) {
            var j = 0.5 * (e + h),
              k = 0.5 * (g + i),
              l = c >= j,
              m = d >= k,
              n = (m << 1) | l;
            (a.leaf = !1),
              (a = a.nodes[n] || (a.nodes[n] = kd())),
              l ? (e = j) : (h = j),
              m ? (g = k) : (i = k),
              f(a, b, c, d, e, g, h, i);
          }
          var k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t = Aa(h),
            u = Aa(i);
          if (null != b) (p = b), (q = c), (r = d), (s = e);
          else if (
            ((r = s = -(p = q = 1 / 0)), (l = []), (m = []), (o = a.length), g)
          )
            for (n = 0; o > n; ++n)
              (k = a[n]),
                k.x < p && (p = k.x),
                k.y < q && (q = k.y),
                k.x > r && (r = k.x),
                k.y > s && (s = k.y),
                l.push(k.x),
                m.push(k.y);
          else
            for (n = 0; o > n; ++n) {
              var v = +t((k = a[n]), n),
                w = +u(k, n);
              p > v && (p = v),
                q > w && (q = w),
                v > r && (r = v),
                w > s && (s = w),
                l.push(v),
                m.push(w);
            }
          var x = r - p,
            y = s - q;
          x > y ? (s = q + x) : (r = p + y);
          var z = kd();
          if (
            ((z.add = function (a) {
              f(z, a, +t(a, ++n), +u(a, n), p, q, r, s);
            }),
            (z.visit = function (a) {
              ld(a, z, p, q, r, s);
            }),
            (z.find = function (a) {
              return md(z, a[0], a[1], p, q, r, s);
            }),
            (n = -1),
            null == b)
          ) {
            for (; ++n < o; ) f(z, a[n], l[n], m[n], p, q, r, s);
            --n;
          } else a.forEach(z.add);
          return (l = m = a = k = null), z;
        }
        var g,
          h = Bc,
          i = Cc;
        return (g = arguments.length)
          ? ((h = id),
            (i = jd),
            3 === g && ((e = c), (d = b), (c = b = 0)),
            f(a))
          : ((f.x = function (a) {
              return arguments.length ? ((h = a), f) : h;
            }),
            (f.y = function (a) {
              return arguments.length ? ((i = a), f) : i;
            }),
            (f.extent = function (a) {
              return arguments.length
                ? (null == a
                    ? (b = c = d = e = null)
                    : ((b = +a[0][0]),
                      (c = +a[0][1]),
                      (d = +a[1][0]),
                      (e = +a[1][1])),
                  f)
                : null == b
                ? null
                : [
                    [b, c],
                    [d, e],
                  ];
            }),
            (f.size = function (a) {
              return arguments.length
                ? (null == a
                    ? (b = c = d = e = null)
                    : ((b = c = 0), (d = +a[0]), (e = +a[1])),
                  f)
                : null == b
                ? null
                : [d - b, e - c];
            }),
            f);
      }),
      (bg.interpolateRgb = nd),
      (bg.interpolateObject = od),
      (bg.interpolateNumber = pd),
      (bg.interpolateString = qd);
    var fi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      gi = new RegExp(fi.source, "g");
    (bg.interpolate = rd),
      (bg.interpolators = [
        function (a, b) {
          var c = typeof b;
          return (
            "string" === c
              ? Zg.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b)
                ? nd
                : qd
              : b instanceof ga
              ? nd
              : Array.isArray(b)
              ? sd
              : "object" === c && isNaN(b)
              ? od
              : pd
          )(a, b);
        },
      ]),
      (bg.interpolateArray = sd);
    var hi = function () {
        return s;
      },
      ii = bg.map({
        linear: hi,
        poly: zd,
        quad: function () {
          return wd;
        },
        cubic: function () {
          return xd;
        },
        sin: function () {
          return Ad;
        },
        exp: function () {
          return Bd;
        },
        circle: function () {
          return Cd;
        },
        elastic: Dd,
        back: Ed,
        bounce: function () {
          return Fd;
        },
      }),
      ji = bg.map({
        in: s,
        out: ud,
        "in-out": vd,
        "out-in": function (a) {
          return vd(ud(a));
        },
      });
    (bg.ease = function (a) {
      var b = a.indexOf("-"),
        c = b >= 0 ? a.slice(0, b) : a,
        d = b >= 0 ? a.slice(b + 1) : "in";
      return (
        (c = ii.get(c) || hi),
        (d = ji.get(d) || s),
        td(d(c.apply(null, cg.call(arguments, 1))))
      );
    }),
      (bg.interpolateHcl = Gd),
      (bg.interpolateHsl = Hd),
      (bg.interpolateLab = Id),
      (bg.interpolateRound = Jd),
      (bg.transform = function (a) {
        var b = eg.createElementNS(bg.ns.prefix.svg, "g");
        return (bg.transform = function (a) {
          if (null != a) {
            b.setAttribute("transform", a);
            var c = b.transform.baseVal.consolidate();
          }
          return new Kd(c ? c.matrix : ki);
        })(a);
      }),
      (Kd.prototype.toString = function () {
        return (
          "translate(" +
          this.translate +
          ")rotate(" +
          this.rotate +
          ")skewX(" +
          this.skew +
          ")scale(" +
          this.scale +
          ")"
        );
      });
    var ki = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
    (bg.interpolateTransform = Od),
      (bg.layout = {}),
      (bg.layout.bundle = function () {
        return function (a) {
          for (var b = [], c = -1, d = a.length; ++c < d; ) b.push(Rd(a[c]));
          return b;
        };
      }),
      (bg.layout.chord = function () {
        function a() {
          var a,
            j,
            l,
            m,
            n,
            o = {},
            p = [],
            q = bg.range(f),
            r = [];
          for (c = [], d = [], a = 0, m = -1; ++m < f; ) {
            for (j = 0, n = -1; ++n < f; ) j += e[m][n];
            p.push(j), r.push(bg.range(f)), (a += j);
          }
          for (
            g &&
              q.sort(function (a, b) {
                return g(p[a], p[b]);
              }),
              h &&
                r.forEach(function (a, b) {
                  a.sort(function (a, c) {
                    return h(e[b][a], e[b][c]);
                  });
                }),
              a = (Gg - k * f) / a,
              j = 0,
              m = -1;
            ++m < f;

          ) {
            for (l = j, n = -1; ++n < f; ) {
              var s = q[m],
                t = r[s][n],
                u = e[s][t],
                v = j,
                w = (j += u * a);
              o[s + "-" + t] = {
                index: s,
                subindex: t,
                startAngle: v,
                endAngle: w,
                value: u,
              };
            }
            (d[s] = {
              index: s,
              startAngle: l,
              endAngle: j,
              value: (j - l) / a,
            }),
              (j += k);
          }
          for (m = -1; ++m < f; )
            for (n = m - 1; ++n < f; ) {
              var x = o[m + "-" + n],
                y = o[n + "-" + m];
              (x.value || y.value) &&
                c.push(
                  x.value < y.value
                    ? { source: y, target: x }
                    : { source: x, target: y }
                );
            }
          i && b();
        }
        function b() {
          c.sort(function (a, b) {
            return i(
              (a.source.value + a.target.value) / 2,
              (b.source.value + b.target.value) / 2
            );
          });
        }
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j = {},
          k = 0;
        return (
          (j.matrix = function (a) {
            return arguments.length
              ? ((f = (e = a) && e.length), (c = d = null), j)
              : e;
          }),
          (j.padding = function (a) {
            return arguments.length ? ((k = a), (c = d = null), j) : k;
          }),
          (j.sortGroups = function (a) {
            return arguments.length ? ((g = a), (c = d = null), j) : g;
          }),
          (j.sortSubgroups = function (a) {
            return arguments.length ? ((h = a), (c = null), j) : h;
          }),
          (j.sortChords = function (a) {
            return arguments.length ? ((i = a), c && b(), j) : i;
          }),
          (j.chords = function () {
            return c || a(), c;
          }),
          (j.groups = function () {
            return d || a(), d;
          }),
          j
        );
      }),
      (bg.layout.force = function () {
        function a(a) {
          return function (b, c, d, e) {
            if (b.point !== a) {
              var f = b.cx - a.x,
                g = b.cy - a.y,
                h = e - c,
                i = f * f + g * g;
              if (i > (h * h) / q) {
                if (o > i) {
                  var j = b.charge / i;
                  (a.px -= f * j), (a.py -= g * j);
                }
                return !0;
              }
              if (b.point && i && o > i) {
                var j = b.pointCharge / i;
                (a.px -= f * j), (a.py -= g * j);
              }
            }
            return !b.charge;
          };
        }
        function b(a) {
          (a.px = bg.event.x), (a.py = bg.event.y), h.resume();
        }
        var c,
          d,
          e,
          f,
          g,
          h = {},
          i = bg.dispatch("start", "tick", "end"),
          j = [1, 1],
          k = 0.9,
          l = li,
          m = mi,
          n = -30,
          o = ni,
          p = 0.1,
          q = 0.64,
          r = [],
          t = [];
        return (
          (h.tick = function () {
            if ((d *= 0.99) < 0.005)
              return i.end({ type: "end", alpha: (d = 0) }), !0;
            var b,
              c,
              h,
              l,
              m,
              o,
              q,
              s,
              u,
              v = r.length,
              w = t.length;
            for (c = 0; w > c; ++c)
              (h = t[c]),
                (l = h.source),
                (m = h.target),
                (s = m.x - l.x),
                (u = m.y - l.y),
                (o = s * s + u * u) &&
                  ((o = (d * f[c] * ((o = Math.sqrt(o)) - e[c])) / o),
                  (s *= o),
                  (u *= o),
                  (m.x -= s * (q = l.weight / (m.weight + l.weight))),
                  (m.y -= u * q),
                  (l.x += s * (q = 1 - q)),
                  (l.y += u * q));
            if ((q = d * p) && ((s = j[0] / 2), (u = j[1] / 2), (c = -1), q))
              for (; ++c < v; )
                (h = r[c]), (h.x += (s - h.x) * q), (h.y += (u - h.y) * q);
            if (n)
              for (Yd((b = bg.geom.quadtree(r)), d, g), c = -1; ++c < v; )
                (h = r[c]).fixed || b.visit(a(h));
            for (c = -1; ++c < v; )
              (h = r[c]),
                h.fixed
                  ? ((h.x = h.px), (h.y = h.py))
                  : ((h.x -= (h.px - (h.px = h.x)) * k),
                    (h.y -= (h.py - (h.py = h.y)) * k));
            i.tick({ type: "tick", alpha: d });
          }),
          (h.nodes = function (a) {
            return arguments.length ? ((r = a), h) : r;
          }),
          (h.links = function (a) {
            return arguments.length ? ((t = a), h) : t;
          }),
          (h.size = function (a) {
            return arguments.length ? ((j = a), h) : j;
          }),
          (h.linkDistance = function (a) {
            return arguments.length
              ? ((l = "function" == typeof a ? a : +a), h)
              : l;
          }),
          (h.distance = h.linkDistance),
          (h.linkStrength = function (a) {
            return arguments.length
              ? ((m = "function" == typeof a ? a : +a), h)
              : m;
          }),
          (h.friction = function (a) {
            return arguments.length ? ((k = +a), h) : k;
          }),
          (h.charge = function (a) {
            return arguments.length
              ? ((n = "function" == typeof a ? a : +a), h)
              : n;
          }),
          (h.chargeDistance = function (a) {
            return arguments.length ? ((o = a * a), h) : Math.sqrt(o);
          }),
          (h.gravity = function (a) {
            return arguments.length ? ((p = +a), h) : p;
          }),
          (h.theta = function (a) {
            return arguments.length ? ((q = a * a), h) : Math.sqrt(q);
          }),
          (h.alpha = function (a) {
            return arguments.length
              ? ((a = +a),
                d
                  ? (d = a > 0 ? a : 0)
                  : a > 0 &&
                    (i.start({ type: "start", alpha: (d = a) }),
                    bg.timer(h.tick)),
                h)
              : d;
          }),
          (h.start = function () {
            function a(a, d) {
              if (!c) {
                for (c = new Array(i), h = 0; i > h; ++h) c[h] = [];
                for (h = 0; k > h; ++h) {
                  var e = t[h];
                  c[e.source.index].push(e.target),
                    c[e.target.index].push(e.source);
                }
              }
              for (var f, g = c[b], h = -1, j = g.length; ++h < j; )
                if (!isNaN((f = g[h][a]))) return f;
              return Math.random() * d;
            }
            var b,
              c,
              d,
              i = r.length,
              k = t.length,
              o = j[0],
              p = j[1];
            for (b = 0; i > b; ++b) ((d = r[b]).index = b), (d.weight = 0);
            for (b = 0; k > b; ++b)
              (d = t[b]),
                "number" == typeof d.source && (d.source = r[d.source]),
                "number" == typeof d.target && (d.target = r[d.target]),
                ++d.source.weight,
                ++d.target.weight;
            for (b = 0; i > b; ++b)
              (d = r[b]),
                isNaN(d.x) && (d.x = a("x", o)),
                isNaN(d.y) && (d.y = a("y", p)),
                isNaN(d.px) && (d.px = d.x),
                isNaN(d.py) && (d.py = d.y);
            if (((e = []), "function" == typeof l))
              for (b = 0; k > b; ++b) e[b] = +l.call(this, t[b], b);
            else for (b = 0; k > b; ++b) e[b] = l;
            if (((f = []), "function" == typeof m))
              for (b = 0; k > b; ++b) f[b] = +m.call(this, t[b], b);
            else for (b = 0; k > b; ++b) f[b] = m;
            if (((g = []), "function" == typeof n))
              for (b = 0; i > b; ++b) g[b] = +n.call(this, r[b], b);
            else for (b = 0; i > b; ++b) g[b] = n;
            return h.resume();
          }),
          (h.resume = function () {
            return h.alpha(0.1);
          }),
          (h.stop = function () {
            return h.alpha(0);
          }),
          (h.drag = function () {
            return (
              c ||
                (c = bg.behavior
                  .drag()
                  .origin(s)
                  .on("dragstart.force", Ud)
                  .on("drag.force", b)
                  .on("dragend.force", Vd)),
              arguments.length
                ? void this.on("mouseover.force", Wd)
                    .on("mouseout.force", Xd)
                    .call(c)
                : c
            );
          }),
          bg.rebind(h, i, "on")
        );
      });
    var li = 20,
      mi = 1,
      ni = 1 / 0;
    (bg.layout.hierarchy = function () {
      function a(e) {
        var f,
          g = [e],
          h = [];
        for (e.depth = 0; null != (f = g.pop()); )
          if ((h.push(f), (j = c.call(a, f, f.depth)) && (i = j.length))) {
            for (var i, j, k; --i >= 0; )
              g.push((k = j[i])), (k.parent = f), (k.depth = f.depth + 1);
            d && (f.value = 0), (f.children = j);
          } else
            d && (f.value = +d.call(a, f, f.depth) || 0), delete f.children;
        return (
          _d(e, function (a) {
            var c, e;
            b && (c = a.children) && c.sort(b),
              d && (e = a.parent) && (e.value += a.value);
          }),
          h
        );
      }
      var b = ce,
        c = ae,
        d = be;
      return (
        (a.sort = function (c) {
          return arguments.length ? ((b = c), a) : b;
        }),
        (a.children = function (b) {
          return arguments.length ? ((c = b), a) : c;
        }),
        (a.value = function (b) {
          return arguments.length ? ((d = b), a) : d;
        }),
        (a.revalue = function (b) {
          return (
            d &&
              ($d(b, function (a) {
                a.children && (a.value = 0);
              }),
              _d(b, function (b) {
                var c;
                b.children || (b.value = +d.call(a, b, b.depth) || 0),
                  (c = b.parent) && (c.value += b.value);
              })),
            b
          );
        }),
        a
      );
    }),
      (bg.layout.partition = function () {
        function a(b, c, d, e) {
          var f = b.children;
          if (
            ((b.x = c),
            (b.y = b.depth * e),
            (b.dx = d),
            (b.dy = e),
            f && (g = f.length))
          ) {
            var g,
              h,
              i,
              j = -1;
            for (d = b.value ? d / b.value : 0; ++j < g; )
              a((h = f[j]), c, (i = h.value * d), e), (c += i);
          }
        }
        function b(a) {
          var c = a.children,
            d = 0;
          if (c && (e = c.length))
            for (var e, f = -1; ++f < e; ) d = Math.max(d, b(c[f]));
          return 1 + d;
        }
        function c(c, f) {
          var g = d.call(this, c, f);
          return a(g[0], 0, e[0], e[1] / b(g[0])), g;
        }
        var d = bg.layout.hierarchy(),
          e = [1, 1];
        return (
          (c.size = function (a) {
            return arguments.length ? ((e = a), c) : e;
          }),
          Zd(c, d)
        );
      }),
      (bg.layout.pie = function () {
        function a(g) {
          var h,
            i = g.length,
            j = g.map(function (c, d) {
              return +b.call(a, c, d);
            }),
            k = +("function" == typeof d ? d.apply(this, arguments) : d),
            l = ("function" == typeof e ? e.apply(this, arguments) : e) - k,
            m = Math.min(
              Math.abs(l) / i,
              +("function" == typeof f ? f.apply(this, arguments) : f)
            ),
            n = m * (0 > l ? -1 : 1),
            o = (l - i * n) / bg.sum(j),
            p = bg.range(i),
            q = [];
          return (
            null != c &&
              p.sort(
                c === oi
                  ? function (a, b) {
                      return j[b] - j[a];
                    }
                  : function (a, b) {
                      return c(g[a], g[b]);
                    }
              ),
            p.forEach(function (a) {
              q[a] = {
                data: g[a],
                value: (h = j[a]),
                startAngle: k,
                endAngle: (k += h * o + n),
                padAngle: m,
              };
            }),
            q
          );
        }
        var b = Number,
          c = oi,
          d = 0,
          e = Gg,
          f = 0;
        return (
          (a.value = function (c) {
            return arguments.length ? ((b = c), a) : b;
          }),
          (a.sort = function (b) {
            return arguments.length ? ((c = b), a) : c;
          }),
          (a.startAngle = function (b) {
            return arguments.length ? ((d = b), a) : d;
          }),
          (a.endAngle = function (b) {
            return arguments.length ? ((e = b), a) : e;
          }),
          (a.padAngle = function (b) {
            return arguments.length ? ((f = b), a) : f;
          }),
          a
        );
      });
    var oi = {};
    bg.layout.stack = function () {
      function a(h, i) {
        if (!(m = h.length)) return h;
        var j = h.map(function (c, d) {
            return b.call(a, c, d);
          }),
          k = j.map(function (b) {
            return b.map(function (b, c) {
              return [f.call(a, b, c), g.call(a, b, c)];
            });
          }),
          l = c.call(a, k, i);
        (j = bg.permute(j, l)), (k = bg.permute(k, l));
        var m,
          n,
          o,
          p,
          q = d.call(a, k, i),
          r = j[0].length;
        for (o = 0; r > o; ++o)
          for (e.call(a, j[0][o], (p = q[o]), k[0][o][1]), n = 1; m > n; ++n)
            e.call(a, j[n][o], (p += k[n - 1][o][1]), k[n][o][1]);
        return h;
      }
      var b = s,
        c = he,
        d = ie,
        e = ge,
        f = ee,
        g = fe;
      return (
        (a.values = function (c) {
          return arguments.length ? ((b = c), a) : b;
        }),
        (a.order = function (b) {
          return arguments.length
            ? ((c = "function" == typeof b ? b : pi.get(b) || he), a)
            : c;
        }),
        (a.offset = function (b) {
          return arguments.length
            ? ((d = "function" == typeof b ? b : qi.get(b) || ie), a)
            : d;
        }),
        (a.x = function (b) {
          return arguments.length ? ((f = b), a) : f;
        }),
        (a.y = function (b) {
          return arguments.length ? ((g = b), a) : g;
        }),
        (a.out = function (b) {
          return arguments.length ? ((e = b), a) : e;
        }),
        a
      );
    };
    var pi = bg.map({
        "inside-out": function (a) {
          var b,
            c,
            d = a.length,
            e = a.map(je),
            f = a.map(ke),
            g = bg.range(d).sort(function (a, b) {
              return e[a] - e[b];
            }),
            h = 0,
            i = 0,
            j = [],
            k = [];
          for (b = 0; d > b; ++b)
            (c = g[b]),
              i > h ? ((h += f[c]), j.push(c)) : ((i += f[c]), k.push(c));
          return k.reverse().concat(j);
        },
        reverse: function (a) {
          return bg.range(a.length).reverse();
        },
        default: he,
      }),
      qi = bg.map({
        silhouette: function (a) {
          var b,
            c,
            d,
            e = a.length,
            f = a[0].length,
            g = [],
            h = 0,
            i = [];
          for (c = 0; f > c; ++c) {
            for (b = 0, d = 0; e > b; b++) d += a[b][c][1];
            d > h && (h = d), g.push(d);
          }
          for (c = 0; f > c; ++c) i[c] = (h - g[c]) / 2;
          return i;
        },
        wiggle: function (a) {
          var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = a.length,
            l = a[0],
            m = l.length,
            n = [];
          for (n[0] = i = j = 0, c = 1; m > c; ++c) {
            for (b = 0, e = 0; k > b; ++b) e += a[b][c][1];
            for (b = 0, f = 0, h = l[c][0] - l[c - 1][0]; k > b; ++b) {
              for (
                d = 0, g = (a[b][c][1] - a[b][c - 1][1]) / (2 * h);
                b > d;
                ++d
              )
                g += (a[d][c][1] - a[d][c - 1][1]) / h;
              f += g * a[b][c][1];
            }
            (n[c] = i -= e ? (f / e) * h : 0), j > i && (j = i);
          }
          for (c = 0; m > c; ++c) n[c] -= j;
          return n;
        },
        expand: function (a) {
          var b,
            c,
            d,
            e = a.length,
            f = a[0].length,
            g = 1 / e,
            h = [];
          for (c = 0; f > c; ++c) {
            for (b = 0, d = 0; e > b; b++) d += a[b][c][1];
            if (d) for (b = 0; e > b; b++) a[b][c][1] /= d;
            else for (b = 0; e > b; b++) a[b][c][1] = g;
          }
          for (c = 0; f > c; ++c) h[c] = 0;
          return h;
        },
        zero: ie,
      });
    (bg.layout.histogram = function () {
      function a(a, f) {
        for (
          var g,
            h,
            i = [],
            j = a.map(c, this),
            k = d.call(this, j, f),
            l = e.call(this, k, j, f),
            f = -1,
            m = j.length,
            n = l.length - 1,
            o = b ? 1 : 1 / m;
          ++f < n;

        )
          (g = i[f] = []), (g.dx = l[f + 1] - (g.x = l[f])), (g.y = 0);
        if (n > 0)
          for (f = -1; ++f < m; )
            (h = j[f]),
              h >= k[0] &&
                h <= k[1] &&
                ((g = i[bg.bisect(l, h, 1, n) - 1]), (g.y += o), g.push(a[f]));
        return i;
      }
      var b = !0,
        c = Number,
        d = oe,
        e = me;
      return (
        (a.value = function (b) {
          return arguments.length ? ((c = b), a) : c;
        }),
        (a.range = function (b) {
          return arguments.length ? ((d = Aa(b)), a) : d;
        }),
        (a.bins = function (b) {
          return arguments.length
            ? ((e =
                "number" == typeof b
                  ? function (a) {
                      return ne(a, b);
                    }
                  : Aa(b)),
              a)
            : e;
        }),
        (a.frequency = function (c) {
          return arguments.length ? ((b = !!c), a) : b;
        }),
        a
      );
    }),
      (bg.layout.pack = function () {
        function a(a, f) {
          var g = c.call(this, a, f),
            h = g[0],
            i = e[0],
            j = e[1],
            k =
              null == b
                ? Math.sqrt
                : "function" == typeof b
                ? b
                : function () {
                    return b;
                  };
          if (
            ((h.x = h.y = 0),
            _d(h, function (a) {
              a.r = +k(a.value);
            }),
            _d(h, te),
            d)
          ) {
            var l = (d * (b ? 1 : Math.max((2 * h.r) / i, (2 * h.r) / j))) / 2;
            _d(h, function (a) {
              a.r += l;
            }),
              _d(h, te),
              _d(h, function (a) {
                a.r -= l;
              });
          }
          return (
            we(
              h,
              i / 2,
              j / 2,
              b ? 1 : 1 / Math.max((2 * h.r) / i, (2 * h.r) / j)
            ),
            g
          );
        }
        var b,
          c = bg.layout.hierarchy().sort(pe),
          d = 0,
          e = [1, 1];
        return (
          (a.size = function (b) {
            return arguments.length ? ((e = b), a) : e;
          }),
          (a.radius = function (c) {
            return arguments.length
              ? ((b = null == c || "function" == typeof c ? c : +c), a)
              : b;
          }),
          (a.padding = function (b) {
            return arguments.length ? ((d = +b), a) : d;
          }),
          Zd(a, c)
        );
      }),
      (bg.layout.tree = function () {
        function a(a, e) {
          var k = g.call(this, a, e),
            l = k[0],
            m = b(l);
          if ((_d(m, c), (m.parent.m = -m.z), $d(m, d), j)) $d(l, f);
          else {
            var n = l,
              o = l,
              p = l;
            $d(l, function (a) {
              a.x < n.x && (n = a),
                a.x > o.x && (o = a),
                a.depth > p.depth && (p = a);
            });
            var q = h(n, o) / 2 - n.x,
              r = i[0] / (o.x + h(o, n) / 2 + q),
              s = i[1] / (p.depth || 1);
            $d(l, function (a) {
              (a.x = (a.x + q) * r), (a.y = a.depth * s);
            });
          }
          return k;
        }
        function b(a) {
          for (
            var b, c = { A: null, children: [a] }, d = [c];
            null != (b = d.pop());

          )
            for (var e, f = b.children, g = 0, h = f.length; h > g; ++g)
              d.push(
                ((f[g] = e =
                  {
                    _: f[g],
                    parent: b,
                    children: ((e = f[g].children) && e.slice()) || [],
                    A: null,
                    a: null,
                    z: 0,
                    m: 0,
                    c: 0,
                    s: 0,
                    t: null,
                    i: g,
                  }).a = e)
              );
          return c.children[0];
        }
        function c(a) {
          var b = a.children,
            c = a.parent.children,
            d = a.i ? c[a.i - 1] : null;
          if (b.length) {
            Ce(a);
            var f = (b[0].z + b[b.length - 1].z) / 2;
            d ? ((a.z = d.z + h(a._, d._)), (a.m = a.z - f)) : (a.z = f);
          } else d && (a.z = d.z + h(a._, d._));
          a.parent.A = e(a, d, a.parent.A || c[0]);
        }
        function d(a) {
          (a._.x = a.z + a.parent.m), (a.m += a.parent.m);
        }
        function e(a, b, c) {
          if (b) {
            for (
              var d,
                e = a,
                f = a,
                g = b,
                i = e.parent.children[0],
                j = e.m,
                k = f.m,
                l = g.m,
                m = i.m;
              (g = Ae(g)), (e = ze(e)), g && e;

            )
              (i = ze(i)),
                (f = Ae(f)),
                (f.a = a),
                (d = g.z + l - e.z - j + h(g._, e._)),
                d > 0 && (Be(De(g, a, c), a, d), (j += d), (k += d)),
                (l += g.m),
                (j += e.m),
                (m += i.m),
                (k += f.m);
            g && !Ae(f) && ((f.t = g), (f.m += l - k)),
              e && !ze(i) && ((i.t = e), (i.m += j - m), (c = a));
          }
          return c;
        }
        function f(a) {
          (a.x *= i[0]), (a.y = a.depth * i[1]);
        }
        var g = bg.layout.hierarchy().sort(null).value(null),
          h = ye,
          i = [1, 1],
          j = null;
        return (
          (a.separation = function (b) {
            return arguments.length ? ((h = b), a) : h;
          }),
          (a.size = function (b) {
            return arguments.length
              ? ((j = null == (i = b) ? f : null), a)
              : j
              ? null
              : i;
          }),
          (a.nodeSize = function (b) {
            return arguments.length
              ? ((j = null == (i = b) ? null : f), a)
              : j
              ? i
              : null;
          }),
          Zd(a, g)
        );
      }),
      (bg.layout.cluster = function () {
        function a(a, f) {
          var g,
            h = b.call(this, a, f),
            i = h[0],
            j = 0;
          _d(i, function (a) {
            var b = a.children;
            b && b.length
              ? ((a.x = Fe(b)), (a.y = Ee(b)))
              : ((a.x = g ? (j += c(a, g)) : 0), (a.y = 0), (g = a));
          });
          var k = Ge(i),
            l = He(i),
            m = k.x - c(k, l) / 2,
            n = l.x + c(l, k) / 2;
          return (
            _d(
              i,
              e
                ? function (a) {
                    (a.x = (a.x - i.x) * d[0]), (a.y = (i.y - a.y) * d[1]);
                  }
                : function (a) {
                    (a.x = ((a.x - m) / (n - m)) * d[0]),
                      (a.y = (1 - (i.y ? a.y / i.y : 1)) * d[1]);
                  }
            ),
            h
          );
        }
        var b = bg.layout.hierarchy().sort(null).value(null),
          c = ye,
          d = [1, 1],
          e = !1;
        return (
          (a.separation = function (b) {
            return arguments.length ? ((c = b), a) : c;
          }),
          (a.size = function (b) {
            return arguments.length ? ((e = null == (d = b)), a) : e ? null : d;
          }),
          (a.nodeSize = function (b) {
            return arguments.length ? ((e = null != (d = b)), a) : e ? d : null;
          }),
          Zd(a, b)
        );
      }),
      (bg.layout.treemap = function () {
        function a(a, b) {
          for (var c, d, e = -1, f = a.length; ++e < f; )
            (d = (c = a[e]).value * (0 > b ? 0 : b)),
              (c.area = isNaN(d) || 0 >= d ? 0 : d);
        }
        function b(c) {
          var f = c.children;
          if (f && f.length) {
            var g,
              h,
              i,
              j = l(c),
              k = [],
              m = f.slice(),
              o = 1 / 0,
              p =
                "slice" === n
                  ? j.dx
                  : "dice" === n
                  ? j.dy
                  : "slice-dice" === n
                  ? 1 & c.depth
                    ? j.dy
                    : j.dx
                  : Math.min(j.dx, j.dy);
            for (
              a(m, (j.dx * j.dy) / c.value), k.area = 0;
              (i = m.length) > 0;

            )
              k.push((g = m[i - 1])),
                (k.area += g.area),
                "squarify" !== n || (h = d(k, p)) <= o
                  ? (m.pop(), (o = h))
                  : ((k.area -= k.pop().area),
                    e(k, p, j, !1),
                    (p = Math.min(j.dx, j.dy)),
                    (k.length = k.area = 0),
                    (o = 1 / 0));
            k.length && (e(k, p, j, !0), (k.length = k.area = 0)), f.forEach(b);
          }
        }
        function c(b) {
          var d = b.children;
          if (d && d.length) {
            var f,
              g = l(b),
              h = d.slice(),
              i = [];
            for (a(h, (g.dx * g.dy) / b.value), i.area = 0; (f = h.pop()); )
              i.push(f),
                (i.area += f.area),
                null != f.z &&
                  (e(i, f.z ? g.dx : g.dy, g, !h.length),
                  (i.length = i.area = 0));
            d.forEach(c);
          }
        }
        function d(a, b) {
          for (
            var c, d = a.area, e = 0, f = 1 / 0, g = -1, h = a.length;
            ++g < h;

          )
            (c = a[g].area) && (f > c && (f = c), c > e && (e = c));
          return (
            (d *= d),
            (b *= b),
            d ? Math.max((b * e * o) / d, d / (b * f * o)) : 1 / 0
          );
        }
        function e(a, b, c, d) {
          var e,
            f = -1,
            g = a.length,
            h = c.x,
            j = c.y,
            k = b ? i(a.area / b) : 0;
          if (b == c.dx) {
            for ((d || k > c.dy) && (k = c.dy); ++f < g; )
              (e = a[f]),
                (e.x = h),
                (e.y = j),
                (e.dy = k),
                (h += e.dx = Math.min(c.x + c.dx - h, k ? i(e.area / k) : 0));
            (e.z = !0), (e.dx += c.x + c.dx - h), (c.y += k), (c.dy -= k);
          } else {
            for ((d || k > c.dx) && (k = c.dx); ++f < g; )
              (e = a[f]),
                (e.x = h),
                (e.y = j),
                (e.dx = k),
                (j += e.dy = Math.min(c.y + c.dy - j, k ? i(e.area / k) : 0));
            (e.z = !1), (e.dy += c.y + c.dy - j), (c.x += k), (c.dx -= k);
          }
        }
        function f(d) {
          var e = g || h(d),
            f = e[0];
          return (
            (f.x = 0),
            (f.y = 0),
            (f.dx = j[0]),
            (f.dy = j[1]),
            g && h.revalue(f),
            a([f], (f.dx * f.dy) / f.value),
            (g ? c : b)(f),
            m && (g = e),
            e
          );
        }
        var g,
          h = bg.layout.hierarchy(),
          i = Math.round,
          j = [1, 1],
          k = null,
          l = Ie,
          m = !1,
          n = "squarify",
          o = 0.5 * (1 + Math.sqrt(5));
        return (
          (f.size = function (a) {
            return arguments.length ? ((j = a), f) : j;
          }),
          (f.padding = function (a) {
            function b(b) {
              var c = a.call(f, b, b.depth);
              return null == c
                ? Ie(b)
                : Je(b, "number" == typeof c ? [c, c, c, c] : c);
            }
            function c(b) {
              return Je(b, a);
            }
            if (!arguments.length) return k;
            var d;
            return (
              (l =
                null == (k = a)
                  ? Ie
                  : "function" == (d = typeof a)
                  ? b
                  : "number" === d
                  ? ((a = [a, a, a, a]), c)
                  : c),
              f
            );
          }),
          (f.round = function (a) {
            return arguments.length
              ? ((i = a ? Math.round : Number), f)
              : i != Number;
          }),
          (f.sticky = function (a) {
            return arguments.length ? ((m = a), (g = null), f) : m;
          }),
          (f.ratio = function (a) {
            return arguments.length ? ((o = a), f) : o;
          }),
          (f.mode = function (a) {
            return arguments.length ? ((n = a + ""), f) : n;
          }),
          Zd(f, h)
        );
      }),
      (bg.random = {
        normal: function (a, b) {
          var c = arguments.length;
          return (
            2 > c && (b = 1),
            1 > c && (a = 0),
            function () {
              var c, d, e;
              do
                (c = 2 * Math.random() - 1),
                  (d = 2 * Math.random() - 1),
                  (e = c * c + d * d);
              while (!e || e > 1);
              return a + b * c * Math.sqrt((-2 * Math.log(e)) / e);
            }
          );
        },
        logNormal: function () {
          var a = bg.random.normal.apply(bg, arguments);
          return function () {
            return Math.exp(a());
          };
        },
        bates: function (a) {
          var b = bg.random.irwinHall(a);
          return function () {
            return b() / a;
          };
        },
        irwinHall: function (a) {
          return function () {
            for (var b = 0, c = 0; a > c; c++) b += Math.random();
            return b;
          };
        },
      }),
      (bg.scale = {});
    var ri = { floor: s, ceil: s };
    bg.scale.linear = function () {
      return Qe([0, 1], [0, 1], rd, !1);
    };
    var si = { s: 1, g: 1, p: 1, r: 1, e: 1 };
    bg.scale.log = function () {
      return Ye(bg.scale.linear().domain([0, 1]), 10, !0, [1, 10]);
    };
    var ti = bg.format(".0e"),
      ui = {
        floor: function (a) {
          return -Math.ceil(-a);
        },
        ceil: function (a) {
          return -Math.floor(-a);
        },
      };
    (bg.scale.pow = function () {
      return Ze(bg.scale.linear(), 1, [0, 1]);
    }),
      (bg.scale.sqrt = function () {
        return bg.scale.pow().exponent(0.5);
      }),
      (bg.scale.ordinal = function () {
        return _e([], { t: "range", a: [[]] });
      }),
      (bg.scale.category10 = function () {
        return bg.scale.ordinal().range(vi);
      }),
      (bg.scale.category20 = function () {
        return bg.scale.ordinal().range(wi);
      }),
      (bg.scale.category20b = function () {
        return bg.scale.ordinal().range(xi);
      }),
      (bg.scale.category20c = function () {
        return bg.scale.ordinal().range(yi);
      });
    var vi = [
        2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330,
        8355711, 12369186, 1556175,
      ].map(ta),
      wi = [
        2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728,
        16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194,
        8355711, 13092807, 12369186, 14408589, 1556175, 10410725,
      ].map(ta),
      xi = [
        3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115,
        13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490,
        14049643, 15177372, 8077683, 10834324, 13528509, 14589654,
      ].map(ta),
      yi = [
        3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259,
        16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312,
        12369372, 14342891, 6513507, 9868950, 12434877, 14277081,
      ].map(ta);
    (bg.scale.quantile = function () {
      return af([], []);
    }),
      (bg.scale.quantize = function () {
        return bf(0, 1, [0, 1]);
      }),
      (bg.scale.threshold = function () {
        return cf([0.5], [0, 1]);
      }),
      (bg.scale.identity = function () {
        return df([0, 1]);
      }),
      (bg.svg = {}),
      (bg.svg.arc = function () {
        function a() {
          var a = Math.max(0, +c.apply(this, arguments)),
            j = Math.max(0, +d.apply(this, arguments)),
            k = g.apply(this, arguments) - Ig,
            l = h.apply(this, arguments) - Ig,
            m = Math.abs(l - k),
            n = k > l ? 0 : 1;
          if ((a > j && ((o = j), (j = a), (a = o)), m >= Hg))
            return b(j, n) + (a ? b(a, 1 - n) : "") + "Z";
          var o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y,
            z,
            A = 0,
            B = 0,
            C = [];
          if (
            ((r = (+i.apply(this, arguments) || 0) / 2) &&
              ((q =
                f === zi
                  ? Math.sqrt(a * a + j * j)
                  : +f.apply(this, arguments)),
              n || (B *= -1),
              j && (B = ba((q / j) * Math.sin(r))),
              a && (A = ba((q / a) * Math.sin(r)))),
            j)
          ) {
            (s = j * Math.cos(k + B)),
              (t = j * Math.sin(k + B)),
              (u = j * Math.cos(l - B)),
              (v = j * Math.sin(l - B));
            var D = Math.abs(l - k - 2 * B) <= Fg ? 0 : 1;
            if (B && (lf(s, t, u, v) === n) ^ D) {
              var E = (k + l) / 2;
              (s = j * Math.cos(E)), (t = j * Math.sin(E)), (u = v = null);
            }
          } else s = t = 0;
          if (a) {
            (w = a * Math.cos(l - A)),
              (x = a * Math.sin(l - A)),
              (y = a * Math.cos(k + A)),
              (z = a * Math.sin(k + A));
            var F = Math.abs(k - l + 2 * A) <= Fg ? 0 : 1;
            if (A && (lf(w, x, y, z) === 1 - n) ^ F) {
              var G = (k + l) / 2;
              (w = a * Math.cos(G)), (x = a * Math.sin(G)), (y = z = null);
            }
          } else w = x = 0;
          if (
            (o = Math.min(Math.abs(j - a) / 2, +e.apply(this, arguments))) >
            0.001
          ) {
            p = (j > a) ^ n ? 0 : 1;
            var H =
                null == y
                  ? [w, x]
                  : null == u
                  ? [s, t]
                  : Gc([s, t], [y, z], [u, v], [w, x]),
              I = s - H[0],
              J = t - H[1],
              K = u - H[0],
              L = v - H[1],
              M =
                1 /
                Math.sin(
                  Math.acos(
                    (I * K + J * L) /
                      (Math.sqrt(I * I + J * J) * Math.sqrt(K * K + L * L))
                  ) / 2
                ),
              N = Math.sqrt(H[0] * H[0] + H[1] * H[1]);
            if (null != u) {
              var O = Math.min(o, (j - N) / (M + 1)),
                P = mf(null == y ? [w, x] : [y, z], [s, t], j, O, n),
                Q = mf([u, v], [w, x], j, O, n);
              o === O
                ? C.push(
                    "M",
                    P[0],
                    "A",
                    O,
                    ",",
                    O,
                    " 0 0,",
                    p,
                    " ",
                    P[1],
                    "A",
                    j,
                    ",",
                    j,
                    " 0 ",
                    (1 - n) ^ lf(P[1][0], P[1][1], Q[1][0], Q[1][1]),
                    ",",
                    n,
                    " ",
                    Q[1],
                    "A",
                    O,
                    ",",
                    O,
                    " 0 0,",
                    p,
                    " ",
                    Q[0]
                  )
                : C.push("M", P[0], "A", O, ",", O, " 0 1,", p, " ", Q[0]);
            } else C.push("M", s, ",", t);
            if (null != y) {
              var R = Math.min(o, (a - N) / (M - 1)),
                S = mf([s, t], [y, z], a, -R, n),
                T = mf([w, x], null == u ? [s, t] : [u, v], a, -R, n);
              o === R
                ? C.push(
                    "L",
                    T[0],
                    "A",
                    R,
                    ",",
                    R,
                    " 0 0,",
                    p,
                    " ",
                    T[1],
                    "A",
                    a,
                    ",",
                    a,
                    " 0 ",
                    n ^ lf(T[1][0], T[1][1], S[1][0], S[1][1]),
                    ",",
                    1 - n,
                    " ",
                    S[1],
                    "A",
                    R,
                    ",",
                    R,
                    " 0 0,",
                    p,
                    " ",
                    S[0]
                  )
                : C.push("L", T[0], "A", R, ",", R, " 0 0,", p, " ", S[0]);
            } else C.push("L", w, ",", x);
          } else
            C.push("M", s, ",", t),
              null != u &&
                C.push("A", j, ",", j, " 0 ", D, ",", n, " ", u, ",", v),
              C.push("L", w, ",", x),
              null != y &&
                C.push("A", a, ",", a, " 0 ", F, ",", 1 - n, " ", y, ",", z);
          return C.push("Z"), C.join("");
        }
        function b(a, b) {
          return (
            "M0," +
            a +
            "A" +
            a +
            "," +
            a +
            " 0 1," +
            b +
            " 0," +
            -a +
            "A" +
            a +
            "," +
            a +
            " 0 1," +
            b +
            " 0," +
            a
          );
        }
        var c = ff,
          d = gf,
          e = ef,
          f = zi,
          g = hf,
          h = jf,
          i = kf;
        return (
          (a.innerRadius = function (b) {
            return arguments.length ? ((c = Aa(b)), a) : c;
          }),
          (a.outerRadius = function (b) {
            return arguments.length ? ((d = Aa(b)), a) : d;
          }),
          (a.cornerRadius = function (b) {
            return arguments.length ? ((e = Aa(b)), a) : e;
          }),
          (a.padRadius = function (b) {
            return arguments.length ? ((f = b == zi ? zi : Aa(b)), a) : f;
          }),
          (a.startAngle = function (b) {
            return arguments.length ? ((g = Aa(b)), a) : g;
          }),
          (a.endAngle = function (b) {
            return arguments.length ? ((h = Aa(b)), a) : h;
          }),
          (a.padAngle = function (b) {
            return arguments.length ? ((i = Aa(b)), a) : i;
          }),
          (a.centroid = function () {
            var a = (+c.apply(this, arguments) + +d.apply(this, arguments)) / 2,
              b =
                (+g.apply(this, arguments) + +h.apply(this, arguments)) / 2 -
                Ig;
            return [Math.cos(b) * a, Math.sin(b) * a];
          }),
          a
        );
      });
    var zi = "auto";
    bg.svg.line = function () {
      return nf(s);
    };
    var Ai = bg.map({
      linear: of,
      "linear-closed": pf,
      step: qf,
      "step-before": rf,
      "step-after": sf,
      basis: yf,
      "basis-open": zf,
      "basis-closed": Af,
      bundle: Bf,
      cardinal: vf,
      "cardinal-open": tf,
      "cardinal-closed": uf,
      monotone: Hf,
    });
    Ai.forEach(function (a, b) {
      (b.key = a), (b.closed = /-closed$/.test(a));
    });
    var Bi = [0, 2 / 3, 1 / 3, 0],
      Ci = [0, 1 / 3, 2 / 3, 0],
      Di = [0, 1 / 6, 2 / 3, 1 / 6];
    (bg.svg.line.radial = function () {
      var a = nf(If);
      return (a.radius = a.x), delete a.x, (a.angle = a.y), delete a.y, a;
    }),
      (rf.reverse = sf),
      (sf.reverse = rf),
      (bg.svg.area = function () {
        return Jf(s);
      }),
      (bg.svg.area.radial = function () {
        var a = Jf(If);
        return (
          (a.radius = a.x),
          delete a.x,
          (a.innerRadius = a.x0),
          delete a.x0,
          (a.outerRadius = a.x1),
          delete a.x1,
          (a.angle = a.y),
          delete a.y,
          (a.startAngle = a.y0),
          delete a.y0,
          (a.endAngle = a.y1),
          delete a.y1,
          a
        );
      }),
      (bg.svg.chord = function () {
        function a(a, h) {
          var i = b(this, f, a, h),
            j = b(this, g, a, h);
          return (
            "M" +
            i.p0 +
            d(i.r, i.p1, i.a1 - i.a0) +
            (c(i, j)
              ? e(i.r, i.p1, i.r, i.p0)
              : e(i.r, i.p1, j.r, j.p0) +
                d(j.r, j.p1, j.a1 - j.a0) +
                e(j.r, j.p1, i.r, i.p0)) +
            "Z"
          );
        }
        function b(a, b, c, d) {
          var e = b.call(a, c, d),
            f = h.call(a, e, d),
            g = i.call(a, e, d) - Ig,
            k = j.call(a, e, d) - Ig;
          return {
            r: f,
            a0: g,
            a1: k,
            p0: [f * Math.cos(g), f * Math.sin(g)],
            p1: [f * Math.cos(k), f * Math.sin(k)],
          };
        }
        function c(a, b) {
          return a.a0 == b.a0 && a.a1 == b.a1;
        }
        function d(a, b, c) {
          return "A" + a + "," + a + " 0 " + +(c > Fg) + ",1 " + b;
        }
        function e(a, b, c, d) {
          return "Q 0,0 " + d;
        }
        var f = rc,
          g = sc,
          h = Kf,
          i = hf,
          j = jf;
        return (
          (a.radius = function (b) {
            return arguments.length ? ((h = Aa(b)), a) : h;
          }),
          (a.source = function (b) {
            return arguments.length ? ((f = Aa(b)), a) : f;
          }),
          (a.target = function (b) {
            return arguments.length ? ((g = Aa(b)), a) : g;
          }),
          (a.startAngle = function (b) {
            return arguments.length ? ((i = Aa(b)), a) : i;
          }),
          (a.endAngle = function (b) {
            return arguments.length ? ((j = Aa(b)), a) : j;
          }),
          a
        );
      }),
      (bg.svg.diagonal = function () {
        function a(a, e) {
          var f = b.call(this, a, e),
            g = c.call(this, a, e),
            h = (f.y + g.y) / 2,
            i = [f, { x: f.x, y: h }, { x: g.x, y: h }, g];
          return (
            (i = i.map(d)), "M" + i[0] + "C" + i[1] + " " + i[2] + " " + i[3]
          );
        }
        var b = rc,
          c = sc,
          d = Lf;
        return (
          (a.source = function (c) {
            return arguments.length ? ((b = Aa(c)), a) : b;
          }),
          (a.target = function (b) {
            return arguments.length ? ((c = Aa(b)), a) : c;
          }),
          (a.projection = function (b) {
            return arguments.length ? ((d = b), a) : d;
          }),
          a
        );
      }),
      (bg.svg.diagonal.radial = function () {
        var a = bg.svg.diagonal(),
          b = Lf,
          c = a.projection;
        return (
          (a.projection = function (a) {
            return arguments.length ? c(Mf((b = a))) : b;
          }),
          a
        );
      }),
      (bg.svg.symbol = function () {
        function a(a, d) {
          return (Ei.get(b.call(this, a, d)) || Pf)(c.call(this, a, d));
        }
        var b = Of,
          c = Nf;
        return (
          (a.type = function (c) {
            return arguments.length ? ((b = Aa(c)), a) : b;
          }),
          (a.size = function (b) {
            return arguments.length ? ((c = Aa(b)), a) : c;
          }),
          a
        );
      });
    var Ei = bg.map({
      circle: Pf,
      cross: function (a) {
        var b = Math.sqrt(a / 5) / 2;
        return (
          "M" +
          -3 * b +
          "," +
          -b +
          "H" +
          -b +
          "V" +
          -3 * b +
          "H" +
          b +
          "V" +
          -b +
          "H" +
          3 * b +
          "V" +
          b +
          "H" +
          b +
          "V" +
          3 * b +
          "H" +
          -b +
          "V" +
          b +
          "H" +
          -3 * b +
          "Z"
        );
      },
      diamond: function (a) {
        var b = Math.sqrt(a / (2 * Gi)),
          c = b * Gi;
        return "M0," + -b + "L" + c + ",0 0," + b + " " + -c + ",0Z";
      },
      square: function (a) {
        var b = Math.sqrt(a) / 2;
        return (
          "M" +
          -b +
          "," +
          -b +
          "L" +
          b +
          "," +
          -b +
          " " +
          b +
          "," +
          b +
          " " +
          -b +
          "," +
          b +
          "Z"
        );
      },
      "triangle-down": function (a) {
        var b = Math.sqrt(a / Fi),
          c = (b * Fi) / 2;
        return "M0," + c + "L" + b + "," + -c + " " + -b + "," + -c + "Z";
      },
      "triangle-up": function (a) {
        var b = Math.sqrt(a / Fi),
          c = (b * Fi) / 2;
        return "M0," + -c + "L" + b + "," + c + " " + -b + "," + c + "Z";
      },
    });
    bg.svg.symbolTypes = Ei.keys();
    var Fi = Math.sqrt(3),
      Gi = Math.tan(30 * Jg);
    (wg.transition = function (a) {
      for (
        var b,
          c,
          d = Hi || ++Li,
          e = Uf(a),
          f = [],
          g = Ii || { time: Date.now(), ease: yd, delay: 0, duration: 250 },
          h = -1,
          i = this.length;
        ++h < i;

      ) {
        f.push((b = []));
        for (var j = this[h], k = -1, l = j.length; ++k < l; )
          (c = j[k]) && Vf(c, k, e, d, g), b.push(c);
      }
      return Rf(f, e, d);
    }),
      (wg.interrupt = function (a) {
        return this.each(null == a ? Ji : Qf(Uf(a)));
      });
    var Hi,
      Ii,
      Ji = Qf(Uf()),
      Ki = [],
      Li = 0;
    (Ki.call = wg.call),
      (Ki.empty = wg.empty),
      (Ki.node = wg.node),
      (Ki.size = wg.size),
      (bg.transition = function (a, b) {
        return a && a.transition
          ? Hi
            ? a.transition(b)
            : a
          : bg.selection().transition(a);
      }),
      (bg.transition.prototype = Ki),
      (Ki.select = function (a) {
        var b,
          c,
          d,
          e = this.id,
          f = this.namespace,
          g = [];
        a = C(a);
        for (var h = -1, i = this.length; ++h < i; ) {
          g.push((b = []));
          for (var j = this[h], k = -1, l = j.length; ++k < l; )
            (d = j[k]) && (c = a.call(d, d.__data__, k, h))
              ? ("__data__" in d && (c.__data__ = d.__data__),
                Vf(c, k, f, e, d[f][e]),
                b.push(c))
              : b.push(null);
        }
        return Rf(g, f, e);
      }),
      (Ki.selectAll = function (a) {
        var b,
          c,
          d,
          e,
          f,
          g = this.id,
          h = this.namespace,
          i = [];
        a = D(a);
        for (var j = -1, k = this.length; ++j < k; )
          for (var l = this[j], m = -1, n = l.length; ++m < n; )
            if ((d = l[m])) {
              (f = d[h][g]),
                (c = a.call(d, d.__data__, m, j)),
                i.push((b = []));
              for (var o = -1, p = c.length; ++o < p; )
                (e = c[o]) && Vf(e, o, h, g, f), b.push(e);
            }
        return Rf(i, h, g);
      }),
      (Ki.filter = function (a) {
        var b,
          c,
          d,
          e = [];
        "function" != typeof a && (a = P(a));
        for (var f = 0, g = this.length; g > f; f++) {
          e.push((b = []));
          for (var c = this[f], h = 0, i = c.length; i > h; h++)
            (d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d);
        }
        return Rf(e, this.namespace, this.id);
      }),
      (Ki.tween = function (a, b) {
        var c = this.id,
          d = this.namespace;
        return arguments.length < 2
          ? this.node()[d][c].tween.get(a)
          : R(
              this,
              null == b
                ? function (b) {
                    b[d][c].tween.remove(a);
                  }
                : function (e) {
                    e[d][c].tween.set(a, b);
                  }
            );
      }),
      (Ki.attr = function (a, b) {
        function c() {
          this.removeAttribute(h);
        }
        function d() {
          this.removeAttributeNS(h.space, h.local);
        }
        function e(a) {
          return null == a
            ? c
            : ((a += ""),
              function () {
                var b,
                  c = this.getAttribute(h);
                return (
                  c !== a &&
                  ((b = g(c, a)),
                  function (a) {
                    this.setAttribute(h, b(a));
                  })
                );
              });
        }
        function f(a) {
          return null == a
            ? d
            : ((a += ""),
              function () {
                var b,
                  c = this.getAttributeNS(h.space, h.local);
                return (
                  c !== a &&
                  ((b = g(c, a)),
                  function (a) {
                    this.setAttributeNS(h.space, h.local, b(a));
                  })
                );
              });
        }
        if (arguments.length < 2) {
          for (b in a) this.attr(b, a[b]);
          return this;
        }
        var g = "transform" == a ? Od : rd,
          h = bg.ns.qualify(a);
        return Sf(this, "attr." + a, b, h.local ? f : e);
      }),
      (Ki.attrTween = function (a, b) {
        function c(a, c) {
          var d = b.call(this, a, c, this.getAttribute(e));
          return (
            d &&
            function (a) {
              this.setAttribute(e, d(a));
            }
          );
        }
        function d(a, c) {
          var d = b.call(this, a, c, this.getAttributeNS(e.space, e.local));
          return (
            d &&
            function (a) {
              this.setAttributeNS(e.space, e.local, d(a));
            }
          );
        }
        var e = bg.ns.qualify(a);
        return this.tween("attr." + a, e.local ? d : c);
      }),
      (Ki.style = function (a, c, d) {
        function e() {
          this.style.removeProperty(a);
        }
        function f(c) {
          return null == c
            ? e
            : ((c += ""),
              function () {
                var e,
                  f = b(this).getComputedStyle(this, null).getPropertyValue(a);
                return (
                  f !== c &&
                  ((e = rd(f, c)),
                  function (b) {
                    this.style.setProperty(a, e(b), d);
                  })
                );
              });
        }
        var g = arguments.length;
        if (3 > g) {
          if ("string" != typeof a) {
            2 > g && (c = "");
            for (d in a) this.style(d, a[d], c);
            return this;
          }
          d = "";
        }
        return Sf(this, "style." + a, c, f);
      }),
      (Ki.styleTween = function (a, c, d) {
        function e(e, f) {
          var g = c.call(
            this,
            e,
            f,
            b(this).getComputedStyle(this, null).getPropertyValue(a)
          );
          return (
            g &&
            function (b) {
              this.style.setProperty(a, g(b), d);
            }
          );
        }
        return arguments.length < 3 && (d = ""), this.tween("style." + a, e);
      }),
      (Ki.text = function (a) {
        return Sf(this, "text", a, Tf);
      }),
      (Ki.remove = function () {
        var a = this.namespace;
        return this.each("end.transition", function () {
          var b;
          this[a].count < 2 && (b = this.parentNode) && b.removeChild(this);
        });
      }),
      (Ki.ease = function (a) {
        var b = this.id,
          c = this.namespace;
        return arguments.length < 1
          ? this.node()[c][b].ease
          : ("function" != typeof a && (a = bg.ease.apply(bg, arguments)),
            R(this, function (d) {
              d[c][b].ease = a;
            }));
      }),
      (Ki.delay = function (a) {
        var b = this.id,
          c = this.namespace;
        return arguments.length < 1
          ? this.node()[c][b].delay
          : R(
              this,
              "function" == typeof a
                ? function (d, e, f) {
                    d[c][b].delay = +a.call(d, d.__data__, e, f);
                  }
                : ((a = +a),
                  function (d) {
                    d[c][b].delay = a;
                  })
            );
      }),
      (Ki.duration = function (a) {
        var b = this.id,
          c = this.namespace;
        return arguments.length < 1
          ? this.node()[c][b].duration
          : R(
              this,
              "function" == typeof a
                ? function (d, e, f) {
                    d[c][b].duration = Math.max(1, a.call(d, d.__data__, e, f));
                  }
                : ((a = Math.max(1, a)),
                  function (d) {
                    d[c][b].duration = a;
                  })
            );
      }),
      (Ki.each = function (a, b) {
        var c = this.id,
          d = this.namespace;
        if (arguments.length < 2) {
          var e = Ii,
            f = Hi;
          try {
            (Hi = c),
              R(this, function (b, e, f) {
                (Ii = b[d][c]), a.call(b, b.__data__, e, f);
              });
          } finally {
            (Ii = e), (Hi = f);
          }
        } else
          R(this, function (e) {
            var f = e[d][c];
            (
              f.event || (f.event = bg.dispatch("start", "end", "interrupt"))
            ).on(a, b);
          });
        return this;
      }),
      (Ki.transition = function () {
        for (
          var a,
            b,
            c,
            d,
            e = this.id,
            f = ++Li,
            g = this.namespace,
            h = [],
            i = 0,
            j = this.length;
          j > i;
          i++
        ) {
          h.push((a = []));
          for (var b = this[i], k = 0, l = b.length; l > k; k++)
            (c = b[k]) &&
              ((d = c[g][e]),
              Vf(c, k, g, f, {
                time: d.time,
                ease: d.ease,
                delay: d.delay + d.duration,
                duration: d.duration,
              })),
              a.push(c);
        }
        return Rf(h, g, f);
      }),
      (bg.svg.axis = function () {
        function a(a) {
          a.each(function () {
            var a,
              j = bg.select(this),
              k = this.__chart__ || c,
              l = (this.__chart__ = c.copy()),
              m = null == i ? (l.ticks ? l.ticks.apply(l, h) : l.domain()) : i,
              n = null == b ? (l.tickFormat ? l.tickFormat.apply(l, h) : s) : b,
              o = j.selectAll(".tick").data(m, l),
              p = o
                .enter()
                .insert("g", ".domain")
                .attr("class", "tick")
                .style("opacity", Dg),
              q = bg.transition(o.exit()).style("opacity", Dg).remove(),
              r = bg.transition(o.order()).style("opacity", 1),
              t = Math.max(e, 0) + g,
              u = Le(l),
              v = j.selectAll(".domain").data([0]),
              w =
                (v.enter().append("path").attr("class", "domain"),
                bg.transition(v));
            p.append("line"), p.append("text");
            var x,
              y,
              z,
              A,
              B = p.select("line"),
              C = r.select("line"),
              D = o.select("text").text(n),
              E = p.select("text"),
              F = r.select("text"),
              G = "top" === d || "left" === d ? -1 : 1;
            if (
              ("bottom" === d || "top" === d
                ? ((a = Wf),
                  (x = "x"),
                  (z = "y"),
                  (y = "x2"),
                  (A = "y2"),
                  D.attr("dy", 0 > G ? "0em" : ".71em").style(
                    "text-anchor",
                    "middle"
                  ),
                  w.attr(
                    "d",
                    "M" + u[0] + "," + G * f + "V0H" + u[1] + "V" + G * f
                  ))
                : ((a = Xf),
                  (x = "y"),
                  (z = "x"),
                  (y = "y2"),
                  (A = "x2"),
                  D.attr("dy", ".32em").style(
                    "text-anchor",
                    0 > G ? "end" : "start"
                  ),
                  w.attr(
                    "d",
                    "M" + G * f + "," + u[0] + "H0V" + u[1] + "H" + G * f
                  )),
              B.attr(A, G * e),
              E.attr(z, G * t),
              C.attr(y, 0).attr(A, G * e),
              F.attr(x, 0).attr(z, G * t),
              l.rangeBand)
            ) {
              var H = l,
                I = H.rangeBand() / 2;
              k = l = function (a) {
                return H(a) + I;
              };
            } else k.rangeBand ? (k = l) : q.call(a, l, k);
            p.call(a, k, l), r.call(a, l, l);
          });
        }
        var b,
          c = bg.scale.linear(),
          d = Mi,
          e = 6,
          f = 6,
          g = 3,
          h = [10],
          i = null;
        return (
          (a.scale = function (b) {
            return arguments.length ? ((c = b), a) : c;
          }),
          (a.orient = function (b) {
            return arguments.length ? ((d = b in Ni ? b + "" : Mi), a) : d;
          }),
          (a.ticks = function () {
            return arguments.length ? ((h = arguments), a) : h;
          }),
          (a.tickValues = function (b) {
            return arguments.length ? ((i = b), a) : i;
          }),
          (a.tickFormat = function (c) {
            return arguments.length ? ((b = c), a) : b;
          }),
          (a.tickSize = function (b) {
            var c = arguments.length;
            return c ? ((e = +b), (f = +arguments[c - 1]), a) : e;
          }),
          (a.innerTickSize = function (b) {
            return arguments.length ? ((e = +b), a) : e;
          }),
          (a.outerTickSize = function (b) {
            return arguments.length ? ((f = +b), a) : f;
          }),
          (a.tickPadding = function (b) {
            return arguments.length ? ((g = +b), a) : g;
          }),
          (a.tickSubdivide = function () {
            return arguments.length && a;
          }),
          a
        );
      });
    var Mi = "bottom",
      Ni = { top: 1, right: 1, bottom: 1, left: 1 };
    bg.svg.brush = function () {
      function a(b) {
        b.each(function () {
          var b = bg
              .select(this)
              .style("pointer-events", "all")
              .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
              .on("mousedown.brush", f)
              .on("touchstart.brush", f),
            g = b.selectAll(".background").data([0]);
          g
            .enter()
            .append("rect")
            .attr("class", "background")
            .style("visibility", "hidden")
            .style("cursor", "crosshair"),
            b
              .selectAll(".extent")
              .data([0])
              .enter()
              .append("rect")
              .attr("class", "extent")
              .style("cursor", "move");
          var h = b.selectAll(".resize").data(p, s);
          h.exit().remove(),
            h
              .enter()
              .append("g")
              .attr("class", function (a) {
                return "resize " + a;
              })
              .style("cursor", function (a) {
                return Oi[a];
              })
              .append("rect")
              .attr("x", function (a) {
                return /[ew]$/.test(a) ? -3 : null;
              })
              .attr("y", function (a) {
                return /^[ns]/.test(a) ? -3 : null;
              })
              .attr("width", 6)
              .attr("height", 6)
              .style("visibility", "hidden"),
            h.style("display", a.empty() ? "none" : null);
          var i,
            l = bg.transition(b),
            m = bg.transition(g);
          j &&
            ((i = Le(j)), m.attr("x", i[0]).attr("width", i[1] - i[0]), d(l)),
            k &&
              ((i = Le(k)),
              m.attr("y", i[0]).attr("height", i[1] - i[0]),
              e(l)),
            c(l);
        });
      }
      function c(a) {
        a.selectAll(".resize").attr("transform", function (a) {
          return "translate(" + l[+/e$/.test(a)] + "," + m[+/^s/.test(a)] + ")";
        });
      }
      function d(a) {
        a.select(".extent").attr("x", l[0]),
          a.selectAll(".extent,.n>rect,.s>rect").attr("width", l[1] - l[0]);
      }
      function e(a) {
        a.select(".extent").attr("y", m[0]),
          a.selectAll(".extent,.e>rect,.w>rect").attr("height", m[1] - m[0]);
      }
      function f() {
        function f() {
          32 == bg.event.keyCode &&
            (D || ((t = null), (F[0] -= l[1]), (F[1] -= m[1]), (D = 2)), y());
        }
        function p() {
          32 == bg.event.keyCode &&
            2 == D &&
            ((F[0] += l[1]), (F[1] += m[1]), (D = 0), y());
        }
        function q() {
          var a = bg.mouse(v),
            b = !1;
          u && ((a[0] += u[0]), (a[1] += u[1])),
            D ||
              (bg.event.altKey
                ? (t || (t = [(l[0] + l[1]) / 2, (m[0] + m[1]) / 2]),
                  (F[0] = l[+(a[0] < t[0])]),
                  (F[1] = m[+(a[1] < t[1])]))
                : (t = null)),
            B && r(a, j, 0) && (d(z), (b = !0)),
            C && r(a, k, 1) && (e(z), (b = !0)),
            b && (c(z), x({ type: "brush", mode: D ? "move" : "resize" }));
        }
        function r(a, b, c) {
          var d,
            e,
            f = Le(b),
            i = f[0],
            j = f[1],
            k = F[c],
            p = c ? m : l,
            q = p[1] - p[0];
          return (
            D && ((i -= k), (j -= q + k)),
            (d = (c ? o : n) ? Math.max(i, Math.min(j, a[c])) : a[c]),
            D
              ? (e = (d += k) + q)
              : (t && (k = Math.max(i, Math.min(j, 2 * t[c] - d))),
                d > k ? ((e = d), (d = k)) : (e = k)),
            p[0] != d || p[1] != e
              ? (c ? (h = null) : (g = null), (p[0] = d), (p[1] = e), !0)
              : void 0
          );
        }
        function s() {
          q(),
            z
              .style("pointer-events", "all")
              .selectAll(".resize")
              .style("display", a.empty() ? "none" : null),
            bg.select("body").style("cursor", null),
            G.on("mousemove.brush", null)
              .on("mouseup.brush", null)
              .on("touchmove.brush", null)
              .on("touchend.brush", null)
              .on("keydown.brush", null)
              .on("keyup.brush", null),
            E(),
            x({ type: "brushend" });
        }
        var t,
          u,
          v = this,
          w = bg.select(bg.event.target),
          x = i.of(v, arguments),
          z = bg.select(v),
          A = w.datum(),
          B = !/^(n|s)$/.test(A) && j,
          C = !/^(e|w)$/.test(A) && k,
          D = w.classed("extent"),
          E = X(v),
          F = bg.mouse(v),
          G = bg.select(b(v)).on("keydown.brush", f).on("keyup.brush", p);
        if (
          (bg.event.changedTouches
            ? G.on("touchmove.brush", q).on("touchend.brush", s)
            : G.on("mousemove.brush", q).on("mouseup.brush", s),
          z.interrupt().selectAll("*").interrupt(),
          D)
        )
          (F[0] = l[0] - F[0]), (F[1] = m[0] - F[1]);
        else if (A) {
          var H = +/w$/.test(A),
            I = +/^n/.test(A);
          (u = [l[1 - H] - F[0], m[1 - I] - F[1]]),
            (F[0] = l[H]),
            (F[1] = m[I]);
        } else bg.event.altKey && (t = F.slice());
        z
          .style("pointer-events", "none")
          .selectAll(".resize")
          .style("display", null),
          bg.select("body").style("cursor", w.style("cursor")),
          x({ type: "brushstart" }),
          q();
      }
      var g,
        h,
        i = A(a, "brushstart", "brush", "brushend"),
        j = null,
        k = null,
        l = [0, 0],
        m = [0, 0],
        n = !0,
        o = !0,
        p = Pi[0];
      return (
        (a.event = function (a) {
          a.each(function () {
            var a = i.of(this, arguments),
              b = { x: l, y: m, i: g, j: h },
              c = this.__chart__ || b;
            (this.__chart__ = b),
              Hi
                ? bg
                    .select(this)
                    .transition()
                    .each("start.brush", function () {
                      (g = c.i),
                        (h = c.j),
                        (l = c.x),
                        (m = c.y),
                        a({ type: "brushstart" });
                    })
                    .tween("brush:brush", function () {
                      var c = sd(l, b.x),
                        d = sd(m, b.y);
                      return (
                        (g = h = null),
                        function (e) {
                          (l = b.x = c(e)),
                            (m = b.y = d(e)),
                            a({ type: "brush", mode: "resize" });
                        }
                      );
                    })
                    .each("end.brush", function () {
                      (g = b.i),
                        (h = b.j),
                        a({ type: "brush", mode: "resize" }),
                        a({ type: "brushend" });
                    })
                : (a({ type: "brushstart" }),
                  a({ type: "brush", mode: "resize" }),
                  a({ type: "brushend" }));
          });
        }),
        (a.x = function (b) {
          return arguments.length ? ((j = b), (p = Pi[(!j << 1) | !k]), a) : j;
        }),
        (a.y = function (b) {
          return arguments.length ? ((k = b), (p = Pi[(!j << 1) | !k]), a) : k;
        }),
        (a.clamp = function (b) {
          return arguments.length
            ? (j && k
                ? ((n = !!b[0]), (o = !!b[1]))
                : j
                ? (n = !!b)
                : k && (o = !!b),
              a)
            : j && k
            ? [n, o]
            : j
            ? n
            : k
            ? o
            : null;
        }),
        (a.extent = function (b) {
          var c, d, e, f, i;
          return arguments.length
            ? (j &&
                ((c = b[0]),
                (d = b[1]),
                k && ((c = c[0]), (d = d[0])),
                (g = [c, d]),
                j.invert && ((c = j(c)), (d = j(d))),
                c > d && ((i = c), (c = d), (d = i)),
                (c != l[0] || d != l[1]) && (l = [c, d])),
              k &&
                ((e = b[0]),
                (f = b[1]),
                j && ((e = e[1]), (f = f[1])),
                (h = [e, f]),
                k.invert && ((e = k(e)), (f = k(f))),
                e > f && ((i = e), (e = f), (f = i)),
                (e != m[0] || f != m[1]) && (m = [e, f])),
              a)
            : (j &&
                (g
                  ? ((c = g[0]), (d = g[1]))
                  : ((c = l[0]),
                    (d = l[1]),
                    j.invert && ((c = j.invert(c)), (d = j.invert(d))),
                    c > d && ((i = c), (c = d), (d = i)))),
              k &&
                (h
                  ? ((e = h[0]), (f = h[1]))
                  : ((e = m[0]),
                    (f = m[1]),
                    k.invert && ((e = k.invert(e)), (f = k.invert(f))),
                    e > f && ((i = e), (e = f), (f = i)))),
              j && k
                ? [
                    [c, e],
                    [d, f],
                  ]
                : j
                ? [c, d]
                : k && [e, f]);
        }),
        (a.clear = function () {
          return a.empty() || ((l = [0, 0]), (m = [0, 0]), (g = h = null)), a;
        }),
        (a.empty = function () {
          return (!!j && l[0] == l[1]) || (!!k && m[0] == m[1]);
        }),
        bg.rebind(a, i, "on")
      );
    };
    var Oi = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize",
      },
      Pi = [
        ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
        ["e", "w"],
        ["n", "s"],
        [],
      ],
      Qi = (hh.format = nh.timeFormat),
      Ri = Qi.utc,
      Si = Ri("%Y-%m-%dT%H:%M:%S.%LZ");
    (Qi.iso =
      Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z")
        ? Yf
        : Si),
      (Yf.parse = function (a) {
        var b = new Date(a);
        return isNaN(b) ? null : b;
      }),
      (Yf.toString = Si.toString),
      (hh.second = Na(
        function (a) {
          return new ih(1e3 * Math.floor(a / 1e3));
        },
        function (a, b) {
          a.setTime(a.getTime() + 1e3 * Math.floor(b));
        },
        function (a) {
          return a.getSeconds();
        }
      )),
      (hh.seconds = hh.second.range),
      (hh.seconds.utc = hh.second.utc.range),
      (hh.minute = Na(
        function (a) {
          return new ih(6e4 * Math.floor(a / 6e4));
        },
        function (a, b) {
          a.setTime(a.getTime() + 6e4 * Math.floor(b));
        },
        function (a) {
          return a.getMinutes();
        }
      )),
      (hh.minutes = hh.minute.range),
      (hh.minutes.utc = hh.minute.utc.range),
      (hh.hour = Na(
        function (a) {
          var b = a.getTimezoneOffset() / 60;
          return new ih(36e5 * (Math.floor(a / 36e5 - b) + b));
        },
        function (a, b) {
          a.setTime(a.getTime() + 36e5 * Math.floor(b));
        },
        function (a) {
          return a.getHours();
        }
      )),
      (hh.hours = hh.hour.range),
      (hh.hours.utc = hh.hour.utc.range),
      (hh.month = Na(
        function (a) {
          return (a = hh.day(a)), a.setDate(1), a;
        },
        function (a, b) {
          a.setMonth(a.getMonth() + b);
        },
        function (a) {
          return a.getMonth();
        }
      )),
      (hh.months = hh.month.range),
      (hh.months.utc = hh.month.utc.range);
    var Ti = [
        1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5,
        864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6,
      ],
      Ui = [
        [hh.second, 1],
        [hh.second, 5],
        [hh.second, 15],
        [hh.second, 30],
        [hh.minute, 1],
        [hh.minute, 5],
        [hh.minute, 15],
        [hh.minute, 30],
        [hh.hour, 1],
        [hh.hour, 3],
        [hh.hour, 6],
        [hh.hour, 12],
        [hh.day, 1],
        [hh.day, 2],
        [hh.week, 1],
        [hh.month, 1],
        [hh.month, 3],
        [hh.year, 1],
      ],
      Vi = Qi.multi([
        [
          ".%L",
          function (a) {
            return a.getMilliseconds();
          },
        ],
        [
          ":%S",
          function (a) {
            return a.getSeconds();
          },
        ],
        [
          "%I:%M",
          function (a) {
            return a.getMinutes();
          },
        ],
        [
          "%I %p",
          function (a) {
            return a.getHours();
          },
        ],
        [
          "%a %d",
          function (a) {
            return a.getDay() && 1 != a.getDate();
          },
        ],
        [
          "%b %d",
          function (a) {
            return 1 != a.getDate();
          },
        ],
        [
          "%B",
          function (a) {
            return a.getMonth();
          },
        ],
        ["%Y", Cb],
      ]),
      Wi = {
        range: function (a, b, c) {
          return bg.range(Math.ceil(a / c) * c, +b, c).map($f);
        },
        floor: s,
        ceil: s,
      };
    (Ui.year = hh.year),
      (hh.scale = function () {
        return Zf(bg.scale.linear(), Ui, Vi);
      });
    var Xi = Ui.map(function (a) {
        return [a[0].utc, a[1]];
      }),
      Yi = Ri.multi([
        [
          ".%L",
          function (a) {
            return a.getUTCMilliseconds();
          },
        ],
        [
          ":%S",
          function (a) {
            return a.getUTCSeconds();
          },
        ],
        [
          "%I:%M",
          function (a) {
            return a.getUTCMinutes();
          },
        ],
        [
          "%I %p",
          function (a) {
            return a.getUTCHours();
          },
        ],
        [
          "%a %d",
          function (a) {
            return a.getUTCDay() && 1 != a.getUTCDate();
          },
        ],
        [
          "%b %d",
          function (a) {
            return 1 != a.getUTCDate();
          },
        ],
        [
          "%B",
          function (a) {
            return a.getUTCMonth();
          },
        ],
        ["%Y", Cb],
      ]);
    (Xi.year = hh.year.utc),
      (hh.scale.utc = function () {
        return Zf(bg.scale.linear(), Xi, Yi);
      }),
      (bg.text = Ba(function (a) {
        return a.responseText;
      })),
      (bg.json = function (a, b) {
        return Ca(a, "application/json", _f, b);
      }),
      (bg.html = function (a, b) {
        return Ca(a, "text/html", ag, b);
      }),
      (bg.xml = Ba(function (a) {
        return a.responseXML;
      })),
      "function" == typeof define && define.amd
        ? define(bg)
        : "object" == typeof module && module.exports && (module.exports = bg),
      (this.d3 = bg);
  })(),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(
              a.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          c.tip().hasClass("in") || "in" == c.hoverState
            ? void (c.hoverState = "in")
            : (clearTimeout(c.timeout),
              (c.hoverState = "in"),
              c.options.delay && c.options.delay.show
                ? void (c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show();
                  }, c.options.delay.show))
                : c.show())
        );
      }),
      (c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          c.isInStateTrue()
            ? void 0
            : (clearTimeout(c.timeout),
              (c.hoverState = "out"),
              c.options.delay && c.options.delay.hide
                ? void (c.timeout = setTimeout(function () {
                    "out" == c.hoverState && c.hide();
                  }, c.options.delay.hide))
                : c.hide())
        );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.getPosition(this.$viewport);
            (h =
              "bottom" == h && k.bottom + m > o.bottom
                ? "top"
                : "top" == h && k.top - m < o.top
                ? "bottom"
                : "right" == h && k.right + l > o.width
                ? "left"
                : "left" == h && k.left - l < o.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var p = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(p, h);
          var q = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", q)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : q();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top += g),
          (b.left += h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element &&
              e.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(g),
          g.isDefaultPrevented()
            ? void 0
            : (f.removeClass("in"),
              a.support.transition && f.hasClass("fade")
                ? f
                    .one("bsTransitionEnd", d)
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d(),
              (this.hoverState = null),
              this)
        );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = window.SVGElement && c instanceof window.SVGElement,
          g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
          h = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          i = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, h, i, g);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          b
            ? ((c.inState.click = !c.inState.click),
              c.isInStateTrue() ? c.enter(c) : c.leave(c))
            : c.tip().hasClass("in")
            ? c.leave(c)
            : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              (a.$tip = null),
              (a.$arrow = null),
              (a.$viewport = null),
              (a.$element = null);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery);
var FeatureViewer = (function () {
  function a(a, b, c) {
    function d(a, b) {
      R !== {} && d3.select(R.id).style("fill", R.originalColor),
        "path" !== b.type &&
          "line" !== b.type &&
          ((R = {
            id: a,
            originalColor: d3.select(a).style("fill") || b.color,
          }),
          d3.select(a).style("fill", "orangered"));
    }
    function e(a, b) {
      for (var c = a - 110, d = "", e = 0; e < b.length; e++)
        if (W(b[e].x) < c && W(b[e + 1].x) > c) {
          d = c - W(b[e].x) < W(b[e + 1].x) - c ? b[e] : b[e + 1];
          break;
        }
      return d;
    }
    function f(a) {
      return W(a.x === a.y ? a.x - 0.4 : a.x);
    }
    function g(a) {
      return a.x === a.y
        ? W(a.x + 0.4) - W(a.x - 0.4) < 2
          ? 2
          : W(a.x + 0.4) - W(a.x - 0.4)
        : W(a.y) - W(a.x);
    }
    function h(a) {
      var b = [];
      return (
        a.forEach(function (a) {
          if (b === []) b.push(a.y), (a.level = 0);
          else {
            for (var c = !1, d = 0; d < b.length; d++)
              if (a.x > b[d]) {
                (c = !0), (a.level = d), (b[d] = a.y);
                break;
              }
            c === !1 && (b.push(a.y), (a.level = b.length - 1));
          }
        }),
        b.length
      );
    }
    function i(a, b, c) {
      if (
        "number" != typeof a ||
        -1 > a ||
        a > 1 ||
        "string" != typeof b ||
        ("r" != b[0] && "#" != b[0]) ||
        ("string" != typeof c && "undefined" != typeof c)
      )
        return null;
      this.sbcRip ||
        (this.sbcRip = function (a) {
          var b = a.length,
            c = new Object();
          if (b > 9) {
            if (((a = a.split(",")), a.length < 3 || a.length > 4)) return null;
            (c[0] = d(a[0].slice(4))),
              (c[1] = d(a[1])),
              (c[2] = d(a[2])),
              (c[3] = a[3] ? parseFloat(a[3]) : -1);
          } else {
            if (8 == b || 6 == b || 4 > b) return null;
            6 > b &&
              (a =
                "#" +
                a[1] +
                a[1] +
                a[2] +
                a[2] +
                a[3] +
                a[3] +
                (b > 4 ? a[4] + "" + a[4] : "")),
              (a = d(a.slice(1), 16)),
              (c[0] = (a >> 16) & 255),
              (c[1] = (a >> 8) & 255),
              (c[2] = 255 & a),
              (c[3] =
                9 == b || 5 == b
                  ? e((((a >> 24) & 255) / 255) * 1e4) / 1e4
                  : -1);
          }
          return c;
        });
      var d = parseInt,
        e = Math.round,
        f = b.length > 9,
        f = "string" == typeof c ? (c.length > 9 ? !0 : "c" == c ? !f : !1) : f,
        g = 0 > a,
        a = g ? -1 * a : a,
        c = c && "c" != c ? c : g ? "#000000" : "#FFFFFF",
        h = sbcRip(b),
        i = sbcRip(c);
      return h && i
        ? f
          ? "rgb(" +
            e((i[0] - h[0]) * a + h[0]) +
            "," +
            e((i[1] - h[1]) * a + h[1]) +
            "," +
            e((i[2] - h[2]) * a + h[2]) +
            (h[3] < 0 && i[3] < 0
              ? ")"
              : "," +
                (h[3] > -1 && i[3] > -1
                  ? e(1e4 * ((i[3] - h[3]) * a + h[3])) / 1e4
                  : i[3] < 0
                  ? h[3]
                  : i[3]) +
                ")")
          : "#" +
            (
              4294967296 +
              16777216 *
                (h[3] > -1 && i[3] > -1
                  ? e(255 * ((i[3] - h[3]) * a + h[3]))
                  : i[3] > -1
                  ? e(255 * i[3])
                  : h[3] > -1
                  ? e(255 * h[3])
                  : 255) +
              65536 * e((i[0] - h[0]) * a + h[0]) +
              256 * e((i[1] - h[1]) * a + h[1]) +
              e((i[2] - h[2]) * a + h[2])
            )
              .toString(16)
              .slice(h[3] > -1 || i[3] > -1 ? 1 : 3)
        : null;
    }
    function j(a) {
      G.append("g")
        .attr("class", "x axis Xaxis")
        .attr("transform", "translate(0," + (a + 20) + ")")
        .call(ea);
    }
    function k(a) {
      G.selectAll(".Xaxis").attr("transform", "translate(0," + (a + 20) + ")");
    }
    function l(a) {
      F.attr("height", a + 60 + "px"),
        F.select("clippath rect").attr("height", a + 60 + "px");
    }
    function m() {
      (H = F.append("g")
        .attr("class", "pro axis")
        .attr("transform", "translate(0," + T.top + ")")),
        n();
    }
    function n() {
      (I = H.selectAll(".yaxis").data(K).enter().append("g")),
        I.append("polygon")
          .attr("class", function (a) {
            return a.filter ? a.filter.split(" ").join("_") + "Arrow" : "Arrow";
          })
          .style("stroke", "")
          .style("fill", "#DFD5D3")
          .attr("points", function (a) {
            return (
              T.left -
              105 +
              "," +
              (a.y - 3) +
              ", " +
              (T.left - 105) +
              "," +
              (a.y + 12) +
              ", " +
              (T.left - 15) +
              "," +
              (a.y + 12) +
              ", " +
              (T.left - 7) +
              "," +
              (a.y + 4.5) +
              ", " +
              (T.left - 15) +
              "," +
              (a.y - 3)
            );
          }),
        I.append("text")
          .attr("class", "yaxis")
          .attr("text-anchor", "start")
          .attr("x", function () {
            return T.left - 102;
          })
          .attr("y", function (a) {
            return a.y + 8;
          })
          .text(function (a) {
            return a.title;
          });
    }
    function o(a) {
      a.on("mousedown", function () {
        (brush_elm = F.select(".brush").node()),
          (new_click_event = new Event("mousedown")),
          (new_click_event.pageX = d3.event.pageX),
          (new_click_event.clientX = d3.event.clientX),
          (new_click_event.pageY = d3.event.pageY),
          (new_click_event.clientY = d3.event.clientY),
          brush_elm && brush_elm.dispatchEvent(new_click_event);
      });
    }
    function p() {
      G.append("g")
        .attr("class", "brush")
        .call(ja)
        .selectAll("rect")
        .attr("height", L + 50);
    }
    function q() {
      d3.select(b).selectAll("div.selectedRect").remove(),
        R !== {} && (d3.select(R.id).style("fill", R.originalColor), (R = {}));
      var c = ja.extent(),
        d = Math.abs(c[0] - c[1]);
      if (c[0] < c[1])
        var e = parseInt(c[0] - 1),
          f = parseInt(c[1] + 1);
      else
        var e = parseInt(c[1] + 1),
          f = parseInt(c[0] - 1);
      var g = Z(d);
      if (!ja.empty() && d > P) {
        Q.length = d;
        var h = (B / d).toFixed(1);
        $(b + " .zoomUnit").text(h.toString()),
          D.showSequence &&
            !A &&
            g &&
            G.selectAll(".AA").empty() &&
            ((Q = { length: d, start: e, end: f }),
            (N = e),
            ha.sequence(a.substring(e - 1, f), 20, N - 1)),
          W.domain(c),
          X.range(c);
        var i = N ? N : E.start;
        t(C, i),
          u(),
          CustomEvent &&
            y.dispatchEvent(
              new CustomEvent(x.events.ZOOM_EVENT, {
                detail: { start: e, end: f, zoom: h },
              })
            ),
          x.trigger &&
            x.trigger(x.events.ZOOM_EVENT, { start: e, end: f, zoom: h }),
          d3.select(b).selectAll(".brush").call(ja.clear());
      } else d3.select(b).selectAll(".brush").call(ja.clear());
    }
    function r() {
      (U = $(b).width() - T.left - T.right - 17),
        d3.select(b + " svg").attr("width", U + T.left + T.right),
        d3.select(b + " clippath>rect").attr("width", U),
        D.brushActive && d3.select(b + " .background").attr("width", U),
        d3.select(b).selectAll(".brush").call(ja.clear());
      var c = Z(Q.length);
      D.showSequence &&
        !A &&
        (c !== !1 || G.selectAll(".AA").empty()
          ? c === !0 &&
            G.selectAll(".AA").empty() &&
            ha.sequence(a.substring(Q.start - 1, Q.end), 20, Q.start - 1)
          : G.selectAll(".seqGroup").remove()),
        W.range([5, U - 5]),
        X.domain([0, U]),
        t(C, Q.start),
        u();
    }
    function s() {
      $(".zoomUnit").text("1"),
        W.domain([E.start, E.end]),
        X.range([E.start, E.end]);
      var c = Z(E.end - E.start);
      D.showSequence &&
        !A &&
        (c !== !1 || G.selectAll(".AA").empty()
          ? Q.length === B ||
            c !== !0 ||
            G.selectAll(".AA").empty() ||
            (G.selectAll(".seqGroup").remove(),
            ha.sequence(a.substring(E.start - 1, E.end), 20, E.start))
          : G.selectAll(".seqGroup").remove()),
        (Q = { length: E.end - E.start, start: E.start, end: E.end }),
        (N = 0),
        t(C, E.start),
        u(),
        CustomEvent &&
          y.dispatchEvent(
            new CustomEvent(x.events.ZOOM_EVENT, {
              detail: { start: 1, end: a.length, zoom: 1 },
            })
          ),
        x.trigger &&
          x.trigger(x.events.ZOOM_EVENT, { start: 1, end: a.length, zoom: 1 }),
        d3.select(b).selectAll(".brush").call(ja.clear());
    }
    function t(a, b) {
      a.forEach(function (a) {
        "rect" === a.type
          ? ia.rectangle(a)
          : "multipleRect" === a.type
          ? ia.multiRec(a)
          : "unique" === a.type
          ? ia.unique(a)
          : "path" === a.type
          ? ia.path(a)
          : "line" === a.type
          ? ia.line(a)
          : "text" === a.type && ia.text(a, b);
      });
    }
    function u() {
      G.transition().duration(500).select(".x.axis").call(ea);
    }
    function v() {
      var a = d3
        .select(".chart")
        .append("div")
        .attr("class", "Vline")
        .style("position", "absolute")
        .style("z-index", "19")
        .style("width", "1px")
        .style("height", L + 50 + "px")
        .style("top", "30px")
        .style("background", "#000");
      d3.select(".chart").on("mousemove.Vline", function () {
        (mousex = d3.mouse(this)[0] - 2), a.style("left", mousex + "px");
      });
    }
    function w(b, c) {
      if ("undefined" == typeof c)
        var c = {
          showAxis: !1,
          showSequence: !1,
          brushActive: !1,
          verticalLine: !1,
          toolbar: !1,
          bubbleHelp: !1,
          unit: "units",
          zoomMax: 50,
        };
      if (
        ($.fn.popover ||
          ((c.bubbleHelp = !1),
          console.warn(
            "The bubble help requires tooltip and popover bootstrap js libraries. The feature viewer will continue to work, but without the info bubble"
          )),
        c.zoomMax && (P = c.zoomMax),
        c.unit || (c.unit = "units"),
        c.animation && (S = c.animation),
        c.toolbar === !0)
      ) {
        var d = $(b + " .svgHeader").length
          ? d3.select(b + " .svgHeader")
          : d3.select(b).append("div").attr("class", "svgHeader");
        if (!$(b + " .header-position").length) {
          var e = d
            .append("div")
            .attr("class", "header-position")
            .style("display", "inline-block")
            .style("margin", "15px 10px 0px")
            .style("padding", "0px")
            .style("line-height", "32px");
          e
            .append("div")
            .attr("class", "position-label")
            .style("padding", "0px 5px")
            .style("display", "inline-block")
            .style("padding", "0px")
            .style("font-weight", "700")
            .text("Position  :  "),
            e
              .append("div")
              .style("display", "inline-block")
              .style("padding", "0px")
              .style("padding-left", "5px")
              .append("div")
              .style("min-width", "50px")
              .attr("id", "zoomPosition")
              .text("0");
        }
        if (!$(b + " .header-zoom").length) {
          var f = d
            .append("div")
            .attr("class", "header-zoom")
            .style("display", "inline-block")
            .style("margin", "15px 0px 0px")
            .style("padding", "0px")
            .style("line-height", "32px");
          f
            .append("div")
            .attr("class", "zoom-label")
            .style("padding", "0px 5px")
            .style("display", "inline-block")
            .style("padding", "0px")
            .style("font-weight", "700")
            .text("Zoom : "),
            f
              .append("div")
              .style("display", "inline-block")
              .style("padding", "0px")
              .append("div")
              .style("min-width", "50px")
              .style("padding-left", "5px")
              .append("span")
              .text("x ")
              .append("span")
              .attr("class", "zoomUnit")
              .text("1");
        }
        var f = $(b + " .header-zoom").length
          ? d3.select(b + " .header-zoom")
          : d;
        if (c.bubbleHelp === !0 && !$(b + " .header-help").length) {
          var g =
              "<div><strong>To zoom in :</strong> Left click to select area of interest</div><div><strong>To zoom out :</strong> Right click to reset the scale</div><div><strong>Zoom max  :</strong> Limited to <strong>" +
              P.toString() +
              " " +
              c.unit +
              "</strong></div>",
            h = f
              .append("div")
              .style("display", "inline-block")
              .style("margin", "0px")
              .style("margin-right", "5px")
              .style("padding", "0px"),
            i = h
              .append("a")
              .attr("type", "button")
              .attr("class", "header-help")
              .attr("data-toggle", "popover")
              .attr("data-placement", "auto left")
              .attr("title", "Help")
              .attr("data-content", g)
              .style("font-size", "14px");
          i
            .append("span")
            .attr("class", "label label-as-badge label-info")
            .style("font-weight", "700")
            .style("border-radius", "3px")
            .style("box-shadow", "inset 0px 0px 4px rgba(0,0,0,0.10)")
            .style("color", "#fff")
            .html("<span class='state'>Show</span> help"),
            $(function () {
              $('[data-toggle="popover"]').popover({ html: !0 }),
                $(b + " .header-help").on("hide.bs.popover", function () {
                  $(this).find(".state").text("Show");
                }),
                $(b + " .header-help").on("show.bs.popover", function () {
                  $(this).find(".state").text("Hide");
                });
            });
        }
      }
      (F = d3
        .select(b)
        .append("svg")
        .attr("width", U + T.left + T.right)
        .attr("height", V + T.top + T.bottom)
        .style("z-index", "2")
        .on("contextmenu", function (a, b) {
          d3.event.preventDefault(), s();
        })),
        (y = z.getElementsByTagName("svg")[0]),
        (G = F.append("g").attr(
          "transform",
          "translate(" + T.left + "," + T.top + ")"
        ));
      var k = G.append("defs");
      k.append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("width", U)
        .attr("height", V);
      var n = k
        .append("filter")
        .attr("id", "dropshadow")
        .attr("height", "200%");
      n
        .append("feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", 3)
        .attr("result", "blur"),
        n
          .append("feOffset")
          .attr("in", "blur")
          .attr("dx", -2)
          .attr("dy", 2)
          .attr("result", "offsetBlur");
      var o = n.append("feMerge");
      o.append("feMergeNode").attr("in", "offsetBlur"),
        o.append("feMergeNode").attr("in", "SourceGraphic"),
        G.on("mousemove", function () {
          var d = D.brushActive
              ? d3.mouse(d3.select(".background").node())
              : d3.mouse(G.node()),
            e = Math.round(X(d[0]));
          c.positionWithoutLetter || (e += a[e - 1] || ""),
            $(b + " #zoomPosition").text(e);
        }),
        c.showSequence &&
          !A &&
          ((D.showSequence = !0),
          Z(E.end - E.start) &&
            ha.sequence(a.substring(E.start - 1, E.end), L, E.start),
          C.push({
            data: a,
            name: "Sequence",
            className: "AA",
            color: "black",
            type: "text",
          }),
          K.push({ title: "Sequence", y: L - 8 })),
        c.showAxis && j(L),
        m(),
        c.brushActive && ((D.brushActive = !0), (O = !0), p()),
        c.verticalLine && ((D.verticalLine = !0), v()),
        l(L);
    }
    var x = this;
    this.events = {
      FEATURE_SELECTED_EVENT: "feature-viewer-position-selected",
      ZOOM_EVENT: "feature-viewer-zoom-altered",
    };
    var y,
      b = b,
      z = document.getElementById(b.substring(1)),
      a = a,
      A = Number.isInteger(a) ? a : null,
      B = A | a.length,
      C = [],
      D = { showSequence: !1, brushActive: !1, verticalLine: !1 },
      E = { start: 1, end: B };
    c &&
      c.offset &&
      ((E = c.offset),
      E.start < 1 &&
        ((E.start = 1),
        console.warn(
          "WARNING ! offset.start should be > 0. Thus, it has been reset to 1."
        )));
    var F,
      G,
      H,
      I,
      J = 0,
      K = [],
      L = 20,
      M = 0,
      N = 0,
      O = !1,
      P = 50,
      Q = { length: E.end - E.start, start: E.start, end: E.end },
      R = {},
      S = !0;
    d3.select(b)
      .style("position", "relative")
      .style("padding", "0px")
      .style("z-index", "2");
    var T = { top: 10, right: 20, bottom: 20, left: 110 },
      U = $(b).width() - T.left - T.right - 17,
      V = 600 - T.top - T.bottom,
      W = d3.scale
        .linear()
        .domain([E.start, E.end])
        .range([5, U - 5]),
      X = d3.scale.linear().domain([0, U]).range([E.start, E.end]);
    (d3.helper = {}),
      (d3.helper.tooltip = function (a) {
        function f(c) {
          c.on("mouseover.tooltip", function (c, d) {
            d3.select("body").selectAll("div.tooltip").remove();
            var f = d3.mouse(i),
              h = f[0] > U;
            if (
              (h
                ? (g = d3.select(b).append("div").attr("class", "tooltip3"))
                : ((g = d3.select(b).append("div").attr("class", "tooltip2")),
                  g.style({ left: f[0] - 15 + "px" })),
              g.style({
                top: f[1] - 55 + "px",
                "background-color": "#eee",
                width: "auto",
                "max-width": "170px",
                height: "auto",
                "max-height": "43px",
                padding: "5px",
                font: "14px sans-serif",
                "text-align": "center",
                position: "absolute",
                "z-index": 45,
                "box-shadow": "0 1px 2px 0 #656565",
              }),
              "path" === a.type)
            )
              var k =
                  '<p style="margin:2px;color:' +
                  j +
                  '">start : <span>' +
                  c[0].x +
                  "</span></p>",
                l =
                  '<p style="margin:2px;color:' +
                  j +
                  '">end : <span>' +
                  c[1].x +
                  "</span></p>";
            else if ("line" === a.type) {
              var m = e(f[0], c);
              if (m.description)
                var k =
                    '<p style="margin:2px;font-weight:700;color:' +
                    j +
                    '">' +
                    m.x +
                    " : <span> " +
                    m.y +
                    "</span></p>",
                  l =
                    '<p style="margin:2px;color:' +
                    j +
                    ';font-size:14px">' +
                    m.description +
                    "</p>";
              else
                var k =
                    '<p style="margin:2px;color:' +
                    j +
                    '">position : <span id="tLineX">' +
                    m.x +
                    "</span></p>",
                  l =
                    '<p style="margin:2px;color:' +
                    j +
                    '">count : <span id="tLineC">' +
                    m.y +
                    "</span></p>";
            } else if ("unique" === a.type || c.x === c.y) {
              var k =
                '<p style="margin:2px;font-weight:700;color:' +
                j +
                '">' +
                c.x +
                "</p>";
              if (c.description)
                var l =
                  '<p style="margin:2px;color:' +
                  j +
                  ';font-size:14px">' +
                  c.description +
                  "</p>";
              else var l = "";
            } else {
              var k =
                '<p style="margin:2px;font-weight:700;color:' +
                j +
                '">' +
                c.x +
                " - " +
                c.y +
                "</p>";
              if (c.description)
                var l =
                  '<p style="margin:2px;color:' +
                  j +
                  ';font-size:14px">' +
                  c.description +
                  "</p>";
              else var l = "";
            }
            g.html(k + l),
              h &&
                g.style({
                  left:
                    f[0] + 10 - g.node().getBoundingClientRect().width + "px",
                });
          })
            .on("mousemove.tooltip", function (b, c) {
              if ("line" === a.type) {
                var d = d3.mouse(i),
                  f = e(d[0], b);
                if (f.description)
                  var h =
                      '<p style="margin:2px;color:' +
                      j +
                      '">' +
                      f.x +
                      " : <span> " +
                      f.y +
                      "</span></p>",
                    k =
                      '<p style="margin:2px;color:' +
                      j +
                      ';font-size:14px">' +
                      f.description +
                      "</p>";
                else
                  var h =
                      '<p style="margin:2px;color:' +
                      j +
                      '">position : <span id="tLineX">' +
                      f.x +
                      "</span></p>",
                    k =
                      '<p style="margin:2px;color:' +
                      j +
                      '">count : <span id="tLineC">' +
                      f.y +
                      "</span></p>";
                g.html(h + k);
              }
              if (void 0 !== g) {
                var d = d3.mouse(i),
                  l = d[0] > U;
                l
                  ? (g.attr("class", "tooltip3"),
                    g.style({
                      left:
                        d[0] +
                        10 -
                        g.node().getBoundingClientRect().width +
                        "px",
                      top: d[1] - 55 + "px",
                    }))
                  : (g.attr("class", "tooltip2"),
                    g.style({ left: d[0] - 15 + "px", top: d[1] - 55 + "px" }));
              }
            })
            .on("mouseout.tooltip", function (a, b) {
              g.remove();
            })
            .on("click", function (c, f) {
              var g, j, k, l, m;
              if ("text" === this.nodeName) {
                var n = "#" + this.previousSibling.id;
                "#" !== n.nodeName && d(n, a);
              } else d(this, a);
              var o = D.brushActive
                ? d3.select(".background").attr("width")
                : G.node().getBBox().width;
              if (
                (d3.select("body").selectAll("div.selectedRect").remove(),
                (h = d3.select(b).append("div").attr("class", "selectedRect")),
                "path" === a.type)
              )
                (g = c[0].x), (j = c[1].x);
              else if ("line" === a.type) {
                var p = d3.mouse(i);
                (m = e(p[0], c)), (g = m.x - 0.5), (j = m.x + 0.5);
              } else
                "unique" === a.type || c.x === c.y
                  ? ((g = c.x - 0.4), (j = c.y + 0.4))
                  : ((g = c.x), (j = c.y));
              if (
                (W(g) < 0 && W(j) > o
                  ? ((k = T.left), (l = parseInt(o) + 5))
                  : W(g) < 0
                  ? ((k = T.left), (l = W(j)))
                  : W(j) > o
                  ? ((k = W(g) + T.left), (l = parseInt(o) - W(g)), (l += 5))
                  : ((k = W(g) + T.left), (l = W(j) - W(g))),
                h.style({
                  left: k + "px",
                  top: $(b + " .svgHeader").length ? "60px" : "10px",
                  "background-color": "rgba(0, 0, 0, 0.2)",
                  width: l + "px",
                  height: L + 50 + "px",
                  position: "absolute",
                  "z-index": -1,
                  "box-shadow": "0 1px 2px 0 #656565",
                }),
                CustomEvent)
              ) {
                var q = new CustomEvent(x.events.FEATURE_SELECTED_EVENT, {
                  detail: {
                    start:
                      "path" === a.type
                        ? c[0].x
                        : "line" === a.type
                        ? m.x
                        : c.x,
                    end:
                      "path" === a.type
                        ? c[1].x
                        : "line" === a.type
                        ? m.y
                        : c.y,
                    id:
                      "path" === a.type
                        ? c[0].id
                        : "line" === a.type
                        ? m.id
                        : c.id,
                    description:
                      "path" === a.type
                        ? c[0].description
                        : "line" === a.type
                        ? m.description
                        : c.description,
                  },
                });
                y.dispatchEvent(q);
              } else console.warn("CustomEvent is not defined....");
              x.trigger &&
                x.trigger(x.events.FEATURE_SELECTED_EVENT, {
                  start:
                    "path" === a.type ? c[0].x : "line" === a.type ? m.x : c.x,
                  end:
                    "path" === a.type ? c[1].x : "line" === a.type ? m.y : c.y,
                  id:
                    "path" === a.type
                      ? c[0].id
                      : "line" === a.type
                      ? m.id
                      : c.id,
                  description:
                    "path" === a.type
                      ? c[0].description
                      : "line" === a.type
                      ? m.description
                      : c.description,
                });
            });
        }
        var g,
          h,
          i = d3.select(b).node(),
          j = c.tooltipColor ? c.tooltipColor : "orangered";
        return (
          (f.attr = function (a) {
            return arguments.length ? ((attrs = a), this) : attrs;
          }),
          (f.style = function (a) {
            return arguments.length ? ((styles = a), this) : styles;
          }),
          f
        );
      });
    var Y = function (a) {
        return W(a.x);
      },
      Z = function (a) {
        return U / a > 5;
      },
      _ = function (a) {
        return W(a.y) - W(a.x);
      };
    (this.onFeatureSelected = function (a) {
      y.addEventListener(x.events.FEATURE_SELECTED_EVENT, a);
    }),
      (this.onZoom = function (a) {
        y.addEventListener(x.events.ZOOM_EVENT, a);
      });
    var aa = d3.svg
        .line()
        .interpolate("step-before")
        .x(function (a) {
          return W(a.x);
        })
        .y(function (a) {
          return 10 * -a.y + J;
        }),
      ba = d3.svg
        .line()
        .x(function (a) {
          return W(a.x);
        })
        .y(function (a) {
          return 10 * ca(-a.y) + J;
        }),
      ca = d3.scale.linear().domain([0, -30]).range([0, -20]),
      da = d3.svg
        .line()
        .interpolate("linear")
        .x(function (a) {
          return W(a.x);
        })
        .y(function (a) {
          return a.y + 6;
        }),
      ea = d3.svg.axis().scale(W).tickFormat(d3.format("d")).orient("bottom"),
      fa = d3.scale
        .ordinal()
        .domain([0, K.length])
        .rangeRoundBands([0, 500], 0.1),
      ga =
        (d3.svg
          .axis()
          .scale(fa)
          .tickValues(K)
          .tickFormat(function (a) {
            return a;
          })
          .orient("left"),
        {
          path: function (a) {
            a.data.sort(function (a, b) {
              return a.x - b.x;
            });
            var b = h(a.data);
            (a.data = a.data.map(function (a) {
              return [
                {
                  x: a.x,
                  y: 0,
                  id: a.id,
                  description: a.description,
                  color: a.color,
                },
                { x: a.y, y: a.level + 1, id: a.id },
                { x: a.y, y: 0, id: a.id },
              ];
            })),
              (J = 10 * b + 5),
              (a.height = 10 * b + 5);
          },
          line: function (a) {
            a.height || (a.height = 10);
            var b = parseInt(a.height),
              c = 0;
            for (var d in a.data) {
              a.data[d].sort(function (a, b) {
                return a.x - b.x;
              }),
                0 !== a.data[d][0].y &&
                  a.data[d].unshift({ x: a.data[d][0].x - 1, y: 0 }),
                0 !== a.data[d][a.data[d].length - 1].y &&
                  a.data[d].push({
                    x: a.data[d][a.data[d].length - 1].x + 1,
                    y: 0,
                  });
              var e = Math.max.apply(
                Math,
                a.data[d].map(function (a) {
                  return Math.abs(a.y);
                })
              );
              (c = e > c ? e : c),
                (a.data[d] = [
                  a.data[d].map(function (a) {
                    return {
                      x: a.x,
                      y: a.y,
                      id: a.id,
                      description: a.description,
                    };
                  }),
                ]);
            }
            ca.range([0, -b]).domain([0, -c]),
              (J = 10 * b + 5),
              (a.level = c),
              (a.shift = 10 * b + 5);
          },
          multipleRect: function (a) {
            a.data.sort(function (a, b) {
              return a.x - b.x;
            }),
              (M = h(a.data)),
              (J = 10 * M + 5);
          },
        }),
      ha = {
        typeIdentifier: function (a) {
          if ("rect" === a.type)
            ga.multipleRect(a),
              K.push({ title: a.name, y: L, filter: a.filter }),
              ha.rectangle(a, L);
          else if ("text" === a.type)
            ha.sequence(a.data, L),
              K.push({ title: a.name, y: L, filter: a.filter }),
              W.range([5, U - 5]);
          else if ("unique" === a.type)
            ha.unique(a, L), K.push({ title: a.name, y: L, filter: a.filter });
          else if ("multipleRect" === a.type)
            ga.multipleRect(a),
              ha.multipleRect(a, L, M),
              K.push({ title: a.name, y: L, filter: a.filter }),
              (L += 10 * (M - 1));
          else if ("path" === a.type)
            ga.path(a),
              ha.path(a, L),
              (L += J),
              K.push({ title: a.name, y: L - 10, filter: a.filter });
          else if ("line" === a.type) {
            Array.isArray(a.data[0]) || (a.data = [a.data]),
              Array.isArray(a.color) || (a.color = [a.color]);
            var b = !1;
            a.data.forEach(function (a) {
              a.filter(function (a) {
                return a.y < 0;
              }).length && (b = !0);
            }),
              ga.line(a),
              ha.line(a, L),
              (L += J),
              K.push({ title: a.name, y: L - 10, filter: a.filter }),
              (L += b ? J - 5 : 0);
          }
        },
        sequence: function (a, b, c) {
          if (!c) var c = 0;
          G.append("g")
            .attr("class", "seqGroup")
            .selectAll(".AA")
            .data(a)
            .enter()
            .append("text")
            .attr("clip-path", "url(#clip)")
            .attr("class", "AA")
            .attr("text-anchor", "middle")
            .attr("x", function (a, b) {
              return W.range([5, U - 5])(b + c);
            })
            .attr("y", b)
            .attr("font-size", "14px")
            .attr("font-family", "monospace")
            .text(function (a, b) {
              return a;
            });
        },
        rectangle: function (a, b) {
          a.height || (a.height = 12);
          for (
            var c = a.height,
              d = c + c / 3,
              e = c / 2 - 6,
              h = G.append("g")
                .attr("class", "rectangle")
                .attr("clip-path", "url(#clip)")
                .attr("transform", "translate(0," + b + ")"),
              i = [],
              j = 0;
            M > j;
            j++
          )
            i.push([
              { x: 1, y: j * d + e },
              { x: B, y: j * d + e },
            ]);
          h.selectAll(".line" + a.className)
            .data(i)
            .enter()
            .append("path")
            .attr("d", da)
            .attr("class", function () {
              return "line" + a.className;
            })
            .style("z-index", "0")
            .style("stroke", a.color)
            .style("stroke-width", "1px");
          var k = h
            .selectAll("." + a.className + "Group")
            .data(a.data)
            .enter()
            .append("g")
            .attr("class", a.className + "Group")
            .attr("transform", function (a) {
              return "translate(" + f(a) + ",0)";
            });
          k
            .append("rect")
            .attr("class", "element " + a.className)
            .attr("id", function (a) {
              return "f" + a.id;
            })
            .attr("y", function (a) {
              return a.level * d;
            })
            .attr("width", g)
            .attr("height", c)
            .style("fill", function (b) {
              return b.color || a.color;
            })
            .style("z-index", "13")
            .call(d3.helper.tooltip(a)),
            k
              .append("text")
              .attr("class", "element " + a.className + "Text")
              .attr("y", function (a) {
                return a.level * d + c / 2;
              })
              .attr("dy", "0.35em")
              .style("font-size", "14px")
              .text(function (a) {
                return a.description;
              })
              .style("fill", "black")
              .style("z-index", "15")
              .style("visibility", function (a) {
                return a.description &&
                  W(a.y) - W(a.x) > 8 * a.description.length &&
                  c > 11
                  ? "visible"
                  : "hidden";
              })
              .call(d3.helper.tooltip(a)),
            o(k);
          var l = c > 12 ? c - 6 : 0;
          L += 2 > M ? l : (M - 1) * d + l;
        },
        unique: function (a, b) {
          var c = G.append("g")
              .attr("class", "uniquePosition")
              .attr("transform", "translate(0," + b + ")"),
            d = [];
          d.push([
            { x: 1, y: 0 },
            { x: B, y: 0 },
          ]),
            c
              .selectAll(".line" + a.className)
              .data(d)
              .enter()
              .append("path")
              .attr("clip-path", "url(#clip)")
              .attr("d", da)
              .attr("class", "line" + a.className)
              .style("z-index", "0")
              .style("stroke", a.color)
              .style("stroke-width", "1px"),
            c
              .selectAll("." + a.className)
              .data(a.data)
              .enter()
              .append("rect")
              .attr("clip-path", "url(#clip)")
              .attr("class", "element " + a.className)
              .attr("id", function (a) {
                return "f" + a.id;
              })
              .attr("x", function (a) {
                return W(a.x - 0.4);
              })
              .attr("width", function (a) {
                return W(a.x + 0.4) - W(a.x - 0.4) < 2
                  ? 2
                  : W(a.x + 0.4) - W(a.x - 0.4);
              })
              .attr("height", 12)
              .style("fill", function (b) {
                return b.color || a.color;
              })
              .style("z-index", "3")
              .call(d3.helper.tooltip(a)),
            o(c);
        },
        path: function (a, b) {
          var c = G.append("g")
              .attr("class", "pathing")
              .attr("transform", "translate(0," + b + ")"),
            d = [];
          d.push([
            { x: 1, y: 0 },
            { x: B, y: 0 },
          ]),
            c
              .selectAll(".line" + a.className)
              .data(d)
              .enter()
              .append("path")
              .attr("clip-path", "url(#clip)")
              .attr("d", aa)
              .attr("class", "line" + a.className)
              .style("z-index", "0")
              .style("stroke", a.color)
              .style("stroke-width", "1px"),
            c
              .selectAll("." + a.className)
              .data(a.data)
              .enter()
              .append("path")
              .attr("clip-path", "url(#clip)")
              .attr("class", "element " + a.className)
              .attr("id", function (a) {
                return "f" + a[0].id;
              })
              .attr("d", aa)
              .style("fill", "none")
              .style("stroke", function (b) {
                return b[0].color || a.color;
              })
              .style("z-index", "3")
              .style("stroke-width", "2px")
              .call(d3.helper.tooltip(a)),
            o(c);
        },
        line: function (a, b) {
          a.interpolation || (a.interpolation = "monotone"),
            void 0 === a.fill && (a.fill = !0);
          var c = G.append("g")
              .attr("class", "lining")
              .attr("transform", "translate(0," + b + ")"),
            d = [];
          d.push([
            { x: 1, y: 0 },
            { x: B, y: 0 },
          ]),
            c
              .selectAll(".line" + a.className)
              .data(d)
              .enter()
              .append("path")
              .attr("clip-path", "url(#clip)")
              .attr("d", aa)
              .attr("class", "line" + a.className)
              .style("z-index", "0")
              .style("stroke", "black")
              .style("stroke-width", "1px"),
            a.data.forEach(function (b, d, e) {
              c.selectAll("." + a.className + d)
                .data(b)
                .enter()
                .append("path")
                .attr("clip-path", "url(#clip)")
                .attr("class", "element " + a.className + " " + a.className + d)
                .attr("d", ba.interpolate(a.interpolation))
                .style(
                  "fill",
                  a.fill ? i(0.6, a.color[d]) || i(0.6, "#000") : "none"
                )
                .style("stroke", a.color[d] || "#000")
                .style("z-index", "3")
                .style("stroke-width", "2px")
                .call(d3.helper.tooltip(a));
            }),
            o(c);
        },
        multipleRect: function (a, b, c) {
          for (
            var d = 8,
              e = 10,
              f = G.append("g")
                .attr("class", "multipleRects")
                .attr("transform", "translate(0," + b + ")"),
              g = 0;
            c > g;
            g++
          )
            f.append("path")
              .attr(
                "d",
                da([
                  { x: 1, y: g * e - 2 },
                  { x: B, y: g * e - 2 },
                ])
              )
              .attr("class", function () {
                return "line" + a.className;
              })
              .style("z-index", "0")
              .style("stroke", a.color)
              .style("stroke-width", "1px");
          f
            .selectAll("." + a.className)
            .data(a.data)
            .enter()
            .append("rect")
            .attr("clip-path", "url(#clip)")
            .attr("class", "element " + a.className)
            .attr("id", function (a) {
              return "f" + a.id;
            })
            .attr("x", Y)
            .attr("y", function (a) {
              return a.level * e;
            })
            .attr("width", _)
            .attr("height", d)
            .style("fill", function (b) {
              return b.color || a.color;
            })
            .style("z-index", "13")
            .call(d3.helper.tooltip(a)),
            o(f);
        },
      };
    (this.showFilteredFeature = function (a, b, c) {
      var d = (H.selectAll("." + a + "Arrow"), T.left - 105),
        e = T.left - 7,
        f = F.append("linearGradient")
          .attr("y1", "0")
          .attr("y2", "0")
          .attr("x1", d)
          .attr("x2", e)
          .attr("id", "gradient")
          .attr("spreadMethod", "pad")
          .attr("gradientUnits", "userSpaceOnUse");
      f.append("stop")
        .attr("offset", "0.3")
        .attr("stop-color", "#DFD5D3")
        .attr("stop-opacity", 1);
      var g = f
        .append("stop")
        .attr("offset", "1")
        .attr("stop-opacity", 1)
        .attr("stop-color", "#DFD5D3");
      g.attr("stop-color", b);
      var h = "url(#gradient)",
        i = "url(#dropshadow)";
      c && ((h = "url(" + c + "#gradient)"), (i = "url(" + c + "#dropshadow)"));
      var j = H.selectAll("." + a + "Arrow")
        .style("fill", h)
        .style("stroke", "")
        .attr("filter", i);
      j.attr("points", function (a) {
        return (
          T.left -
          105 +
          "," +
          (a.y - 3) +
          ", " +
          (T.left - 105) +
          "," +
          (a.y + 12) +
          ", " +
          (T.left - 10) +
          "," +
          (a.y + 12) +
          ", " +
          (T.left - 2) +
          "," +
          (a.y + 4.5) +
          ", " +
          (T.left - 10) +
          "," +
          (a.y - 3)
        );
      });
    }),
      (this.hideFilteredFeature = function (a) {
        H.selectAll("." + a + "Arrow")
          .style("fill", "rgba(95,46,38,0.2)")
          .attr("filter", "")
          .attr("points", function (a) {
            return (
              T.left -
              105 +
              "," +
              (a.y - 3) +
              ", " +
              (T.left - 105) +
              "," +
              (a.y + 12) +
              ", " +
              (T.left - 15) +
              "," +
              (a.y + 12) +
              ", " +
              (T.left - 7) +
              "," +
              (a.y + 4.5) +
              ", " +
              (T.left - 15) +
              "," +
              (a.y - 3)
            );
          });
      });
    var ia = {
        rectangle: function (a) {
          G.selectAll(".line" + a.className).attr(
            "d",
            da.x(function (a) {
              return W(a.x);
            })
          );
          S
            ? ((transit1 = G.selectAll("." + a.className + "Group")
                .transition()
                .duration(500)),
              (transit2 = G.selectAll("." + a.className)
                .transition()
                .duration(500)))
            : ((transit1 = G.selectAll("." + a.className + "Group")),
              (transit2 = G.selectAll("." + a.className))),
            transit1.attr("transform", function (a) {
              return "translate(" + f(a) + ",0)";
            }),
            transit2.attr("width", g),
            G.selectAll("." + a.className + "Text").style(
              "visibility",
              function (b) {
                return b.description &&
                  W(b.y) - W(b.x) > 8 * b.description.length &&
                  a.height > 11
                  ? "visible"
                  : "hidden";
              }
            );
        },
        multiRec: function (a) {
          G.selectAll("." + a.className)
            .attr("x", function (a) {
              return W(a.x);
            })
            .attr("width", function (a) {
              return W(a.y) - W(a.x);
            });
        },
        unique: function (a) {
          G.selectAll(".line" + a.className).attr(
            "d",
            da.x(function (a) {
              return W(a.x);
            })
          );
          var b;
          (b = S
            ? G.selectAll("." + a.className)
                .transition()
                .duration(500)
            : G.selectAll("." + a.className)),
            b
              .attr("x", function (a) {
                return W(a.x - 0.4);
              })
              .attr("width", function (a) {
                return W(a.x + 0.4) - W(a.x - 0.4) < 2
                  ? 2
                  : W(a.x + 0.4) - W(a.x - 0.4);
              });
        },
        path: function (a) {
          G.selectAll(".line" + a.className).attr(
            "d",
            aa
              .x(function (a) {
                return W(a.x);
              })
              .y(function (b) {
                return 10 * -b.y + a.height;
              })
          );
          var b;
          (b = S
            ? G.selectAll("." + a.className)
                .transition()
                .duration(500)
            : G.selectAll("." + a.className)),
            b.attr(
              "d",
              aa.y(function (b) {
                return 10 * -b.y + a.height;
              })
            );
        },
        line: function (a) {
          ca.range([0, -a.height]).domain([0, -a.level]),
            G.selectAll(".line" + a.className).attr(
              "d",
              ba.y(function (b) {
                return 10 * ca(-b.y) + a.shift;
              })
            );
          var b;
          (b = S
            ? G.selectAll("." + a.className)
                .transition()
                .duration(500)
            : G.selectAll("." + a.className)),
            b.attr(
              "d",
              ba
                .y(function (b) {
                  return 10 * ca(-b.y) + a.shift;
                })
                .interpolate(a.interpolation)
            );
        },
        text: function (a, b) {
          var c;
          (c = S
            ? G.selectAll("." + a.className)
                .transition()
                .duration(500)
            : G.selectAll("." + a.className)),
            c.attr("x", function (a, c) {
              return W(c + b);
            });
        },
      },
      ja = d3.svg.brush().x(W).on("brushend", q);
    (this.zoom = function (a, b) {
      var c = Q.start < a && Q.end > b;
      c || G.selectAll(".seqGroup").remove(), ja.extent([a, b]), q();
    }),
      (this.resetZoom = function (a, b) {
        s();
      });
    var ka = function () {
      r();
    };
    $(window).on("resize", ka),
      (this.addRectSelection = function (a) {
        var c,
          e,
          f,
          g,
          h = d3.select(a),
          i = h.data(),
          j = D.brushActive
            ? d3.select(".background").attr("width")
            : G.node().getBBox().width;
        d3.select("body").selectAll("div.selectedRect").remove();
        var k = { type: h[0][0].tagName, color: h.style("fill") };
        d(a, k);
        var l = d3.select(b).append("div").attr("class", "selectedRect");
        3 === i[0].length
          ? ((c = i[0][0].x), (e = i[0][1].x))
          : i[0].x === i[0].y
          ? ((c = i[0].x - 0.5), (e = i[0].y + 0.5))
          : ((c = i[0].x), (e = i[0].y)),
          W(c) < 0
            ? ((f = T.left), (g = W(e)))
            : W(e) > j
            ? ((f = W(c) + T.left), (g = j - W(c)))
            : ((f = W(c) + T.left), (g = W(e) - W(c))),
          l.style({
            left: f + "px",
            top: "60px",
            "background-color": "rgba(0, 0, 0, 0.2)",
            width: g + "px",
            height: L + 50 + "px",
            position: "absolute",
            "z-index": -1,
            "box-shadow": "0 1px 2px 0 #656565",
          });
      }),
      w(b, c),
      (this.addFeature = function (a) {
        (L += 20),
          C.push(a),
          ha.typeIdentifier(a),
          n(),
          k(L),
          l(L),
          D.brushActive && G.selectAll(".brush rect").attr("height", L + 50),
          D.verticalLine &&
            d3.selectAll(".Vline").style("height", L + 50 + "px"),
          d3.selectAll(".element")[0].length > 1500 && (S = !1);
      }),
      (this.clearInstance = function () {
        $(window).off("resize", ka),
          (F = null),
          (y = null),
          (G = null),
          (I = null),
          (H = null),
          (C = null),
          (sbcRip = null),
          (d3.helper = {});
      });
  }
  return a;
})();
"object" == typeof module &&
  "object" == typeof module.exports &&
  (module.exports = FeatureViewer);
