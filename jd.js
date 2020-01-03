"use strict";
var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    r = function() {
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        return function(t, e, n) {
            return e && o(t.prototype, e), n && o(t, n), t
        }
    }();

function s(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}! function a(r, u, s) {
    function l(e, t) {
        if (!u[e]) {
            if (!r[e]) {
                var n = "function" == typeof require && require;
                if (!t && n) return n(e, !0);
                if (d) return d(e, !0);
                var o = new Error("Cannot find module '" + e + "'");
                throw o.code = "MODULE_NOT_FOUND", o
            }
            var i = u[e] = {
                exports: {}
            };
            r[e][0].call(i.exports, function(t) {
                return l(r[e][1][t] || t)
            }, i, i.exports, a, r, u, s)
        }
        return u[e].exports
    }
    for (var d = "function" == typeof require && require, t = 0; t < s.length; t++) l(s[t]);
    return l
}({
    1: [
        function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var f = t("../utils/utils"),
                o = (r(i, [{
                    key: "get",
                    value: function() {
                        var e = this;
                        fetch(this.detailurl, {
                            method: "POST",
                            mode: "cors",
                            credentials: "include",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: "functionId=bombnian_getTaskDetail&body={}&client=wh5&clientVersion=1.0.0"
                        }).then(function(t) {
                            return t.json()
                        }).then(function(t) {
                            e.data = t.data.result, e.outputTextarea.value = "获取数据成功\n已加购物车：" + e.data.taskVos[1].times + "/" + e.data.taskVos[1].productInfoVos.length + "\n已逛店铺：" + e.data.taskVos[2].times + "/" + e.data.taskVos[2].browseShopVo.length + "\n已逛会场：" + e.data.taskVos[3].times + "/" + e.data.taskVos[3].shoppingActivityVos.length + "\n已参与互动：" + e.data.taskVos[4].times + "/" + e.data.taskVos[4].shoppingActivityVos.length + "\n已看直播：" + e.data.taskVos[5].times + "/" + e.data.taskVos[5].shoppingActivityVos.length + "\n已LBS定位：" + e.data.taskVos[6].times + "/1", e.list()
                        })
                    }
                }, {
                    key: "list",
                    value: function() {
                        var t = this,
                            e = document.createElement("div");
                        e.innerHTML = '\n        <div style="margin:10px;">\n        <input id="timer" type="text" placeholder="提交间隔时间+随机100~500毫秒【默认:1000毫秒】" style="width:80vw;height: 25px;border: solid 1px #000;border-radius: 5px;margin: 10px auto;display: block;">\n        <button class="raise" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">一键炸年兽</button>\n        <button class="shop" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">逛逛好店</button>\n        <button class="product" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">好物加购</button>\n        <button class="shopping" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">逛逛会场</button>\n        <button class="activity" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">好玩互动</button>\n        <button class="video" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">视频直播</button>\n        <button class="record" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">LBS定位</button>\n        <button class="help" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">帮作者助力</button>\n        <button class="invite" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">获取邀请链接</button>\n        <button class="auto" style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">一键完成任务</button>\n        </div>', this.container.appendChild(e);
                        var n = document.querySelector("#timer"),
                            o = document.querySelector(".shop"),
                            i = document.querySelector(".help"),
                            a = document.querySelector(".activity"),
                            r = document.querySelector(".video"),
                            u = document.querySelector(".record"),
                            s = document.querySelector(".shopping"),
                            l = document.querySelector(".invite"),
                            d = document.querySelector(".raise"),
                            c = document.querySelector(".auto"),
                            p = document.querySelector(".product");
                        n.onchange = function() {
                            t.timer = +n.value || 1e3
                        }, o.addEventListener("click", function() {
                            f.default.outPutLog(t.outputTextarea, "开始自动逛逛好店任务"), t.send(t.data.taskVos[2].browseShopVo, t.data.taskVos[2].taskId)
                        }), p.addEventListener("click", function() {
                            f.default.outPutLog(t.outputTextarea, "开始自动好物加购任务"), t.send(t.data.taskVos[1].productInfoVos, t.data.taskVos[1].taskId)
                        }), s.addEventListener("click", function() {
                            f.default.outPutLog(t.outputTextarea, "开始自动逛逛会场任务"), t.send(t.data.taskVos[3].shoppingActivityVos, t.data.taskVos[3].taskId)
                        }), a.addEventListener("click", function() {
                            f.default.outPutLog(t.outputTextarea, "开始自动好玩互动任务"), t.send(t.data.taskVos[4].shoppingActivityVos, t.data.taskVos[4].taskId)
                        }), r.addEventListener("click", function() {
                            f.default.outPutLog(t.outputTextarea, "开始自动视频直播任务"), t.send(t.data.taskVos[5].shoppingActivityVos, t.data.taskVos[5].taskId)
                        }), u.addEventListener("click", function() {
                            f.default.outPutLog(t.outputTextarea, "开始自动LBS定位任务"), t.send([t.data.taskVos[6].simpleRecordInfoVo], t.data.taskVos[6].taskId)
                        }), l.addEventListener("click", function() {
                            f.default.copyText("https://bunearth.m.jd.com/babelDiy/SGFJVMOZADGTQCZWGEYU/4PWgqmrFHunn8C38mJA712fufguU/index.html?shareType=taskHelp&inviteId=" + t.data.inviteId + "&taskId=1&itemId=" + t.data.taskVos[0].assistTaskDetailVo.itemId + "&shareFrom=key")
                        }), i.addEventListener("click", function() {
                            t.invite()
                        }), d.addEventListener("click", function() {
                            t.raise()
                        });
                        var h = document.createEvent("MouseEvents");
                        h.initEvent("click", !0, !0), c.addEventListener("click", function() {
                            f.default.outPutLog(t.outputTextarea, "一键自动开始任务！"), d.dispatchEvent(h), o.dispatchEvent(h), a.dispatchEvent(h), r.dispatchEvent(h), s.dispatchEvent(h), p.dispatchEvent(h)
                        })
                    }
                }, {
                    key: "send",
                    value: function(t, e) {
                        for (var o = this, n = t.length, i = 0; i < n; i++)! function(e, t, n) {
                            setTimeout(function() {
                                fetch("https://api.m.jd.com/client.action?functionId=bombnian_collectScore", {
                                    method: "POST",
                                    mode: "cors",
                                    credentials: "include",
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded"
                                    },
                                    body: t
                                }).then(function(t) {
                                    return t.json()
                                }).then(function(t) {
                                    f.default.outPutLog(o.outputTextarea, (new Date).toLocaleString() + " 操作成功！任务序号：" + (e + 1) + "/" + n), n <= e + 1 && f.default.outPutLog(o.outputTextarea, (new Date).toLocaleString() + " 当前任务已完成!")
                                })
                            }, (o.timer + f.default.random(300, 500)) * e)
                        }(i, 'functionId=bombnian_collectScore&body={"taskId":' + e + ',"itemId":"' + t[i].itemId + '"}&client=wh5&clientVersion=1.0.0', n)
                    }
                }, {
                    key: "invite",
                    value: function() {
                        var e = this;
                        fetch("https://api.m.jd.com/client.action?functionId=bombnian_collectScore", {
                            method: "POST",
                            mode: "cors",
                            credentials: "include",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: 'functionId=bombnian_collectScore&body={"inviteId":"24XImW3clprtbOVFpBPrZNAtohhbcfXf","taskId":1,"itemId":"A3Lr5SRYpG46x"}&client=wh5&clientVersion=1.0.0'
                        }).then(function(t) {
                            return t.json()
                        }).then(function(t) {
                            f.default.outPutLog(e.outputTextarea, (new Date).toLocaleString() + " 操作成功！谢谢你的助力！")
                        })
                    }
                }, {
                    key: "join",
                    value: function() {
                        var e = this;
                        fetch("https://api.m.jd.com/client.action?functionId=bombnian_pk_joinGroup", {
                            method: "POST",
                            mode: "cors",
                            credentials: "include",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: 'functionId=bombnian_pk_joinGroup&body={"inviteId":"VlU-EZopQidWJ6s2oG2sfIHInYsPApTbtntxKA1MAWPJSGYsX6Se6Dv3","confirmFlag":1}&client=wh5&clientVersion=1.0.0'
                        }).then(function(t) {
                            return t.json()
                        }).then(function(t) {
                            0 == t.data.bizCode ? f.default.outPutLog(e.outputTextarea, (new Date).toLocaleString() + " 操作成功！加入成功！") : f.default.outPutLog(e.outputTextarea, (new Date).toLocaleString() + " 操作失败，好像满人了哦")
                        })
                    }
                }, {
                    key: "raise",
                    value: function() {
                        var e = this;
                        fetch("https://api.m.jd.com/client.action?functionId=bombnian_raise", {
                            method: "POST",
                            mode: "cors",
                            credentials: "include",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: "functionId=bombnian_raise&body={}&client=wh5&clientVersion=1.0.0"
                        }).then(function(t) {
                            return t.json()
                        }).then(function(t) {
                            0 == t.data.bizCode ? f.default.outPutLog(e.outputTextarea, (new Date).toLocaleString() + " 操作成功！获取奖励如下:" + JSON.stringify(t.data.result.levelUpAward)) : f.default.outPutLog(e.outputTextarea, (new Date).toLocaleString() + " 操作失败！" + t.data.bizMsg)
                        })
                    }
                }]), i);

            function i(t, e, n) {
                s(this, i), this.detailurl = "https://api.m.jd.com/client.action?functionId=bombnian_getTaskDetail", this.data = [], this.timer = 1e3, this.params = t, this.container = e, this.outputTextarea = n
            }
            n.default = o
        }, {
            "../utils/utils": 13
        }
    ],
    2: [
        function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var u = t("../utils/utils"),
                o = (r(i, [{
                    key: "get",
                    value: function() {
                        this.list()
                    }
                }, {
                    key: "list",
                    value: function() {
                        var t = this,
                            e = document.createElement("div");
                        e.innerHTML = '\n        <div style="margin:10px;">\n        <input id="timer" type="text" placeholder="提交间隔时间+随机100~500毫秒【默认:1000毫秒】" style="width:80vw;height: 25px;border: solid 1px #000;border-radius: 5px;margin: 10px auto;display: block;">\n        <button class="visit" style="width: 200px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">一键浏览店铺</button>\n        <button class="linkgame" style="width: 200px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">一键小游戏</button>\n        <button class="exchange" style="width: 200px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">一键福币兑换</button>\n        <button class="auto" style="width: 200px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block">一键自动完成</button></div>', this.container.appendChild(e);
                        var n = document.querySelector("#timer"),
                            o = document.querySelector(".exchange"),
                            i = document.querySelector(".visit"),
                            a = document.querySelector(".linkgame"),
                            r = document.querySelector(".auto");
                        n.onchange = function() {
                            t.timer = +n.value || 1e3
                        }, o.addEventListener("click", function() {
                            u.default.outPutLog(t.outputTextarea, "开始自动福币兑换"), t.send()
                        }), i.addEventListener("click", function() {
                            u.default.outPutLog(t.outputTextarea, "开始自动浏览店铺"), t.visit()
                        }), a.addEventListener("click", function() {
                            u.default.outPutLog(t.outputTextarea, "开始自动小游戏"), t.game()
                        }), r.addEventListener("click", function() {
                            u.default.outPutLog(t.outputTextarea, "开始自动全部任务"), t.send(), t.visit(), t.game()
                        })
                    }
                }, {
                    key: "send",
                    value: function() {
                        for (var i = this, t = function(t) {
                            var e, n, o;
                            e = t, n = length, o = {
                                clientVersion: "1.0.0",
                                client: "wh5",
                                uuid: "15727505818691431184273",
                                area: "",
                                appid: "publicUseApi",
                                functionId: "brandcity_spring_getLottery",
                                body: {
                                    actionType: 2,
                                    taskId: "" + (t + 1)
                                }
                            }, setTimeout(function() {
                                fetch(i.url + "?" + u.default.stringify(o), {
                                    credentials: "include"
                                }).then(function(t) {
                                    return t.json()
                                }).then(function(t) {
                                    u.default.outPutLog(i.outputTextarea, (new Date).toLocaleString() + " 操作成功！任务序号：" + (e + 1) + "/" + n), n <= e + 1 && u.default.outPutLog(i.outputTextarea, (new Date).toLocaleString() + " 当前任务已完成!")
                                })
                            }, (i.timer + u.default.random(300, 500)) * e)
                        }, e = 0; e < 12; e++) t(e)
                    }
                }, {
                    key: "visit",
                    value: function() {
                        for (var n = this, t = 0; t < 80; t++)! function(e) {
                            var t = {
                                clientVersion: "1.0.0",
                                client: "wh5",
                                uuid: "15727505818691431184273",
                                area: "",
                                appid: "publicUseApi",
                                functionId: "brandcity_spring_randomVisit",
                                body: {
                                    uuid: "15727505818691431184273"
                                }
                            };
                            setTimeout(function() {
                                fetch(n.url + "?" + u.default.stringify(t), {
                                    credentials: "include"
                                }).then(function(t) {
                                    return t.json()
                                }).then(function(t) {
                                    u.default.outPutLog(n.outputTextarea, (new Date).toLocaleString() + " 操作成功！任务序号：" + (e + 1) + "/80"), 80 <= e + 1 && u.default.outPutLog(n.outputTextarea, (new Date).toLocaleString() + " 当前任务已完成!")
                                })
                            }, (n.timer + u.default.random(300, 500)) * e)
                        }(t)
                    }
                }, {
                    key: "game",
                    value: function() {
                        for (var o = this, t = function(t) {
                            var e, n;
                            n = {
                                clientVersion: "1.0.0",
                                client: "wh5",
                                uuid: "15727505818691431184273",
                                area: "",
                                appid: "publicUseApi",
                                functionId: "brandcity_spring_getLottery",
                                body: {
                                    actionType: 4,
                                    taskId: (e = t) + 1
                                }
                            }, setTimeout(function() {
                                fetch(o.url + "?" + u.default.stringify(n), {
                                    credentials: "include"
                                }).then(function(t) {
                                    return t.json()
                                }).then(function(t) {
                                    u.default.outPutLog(o.outputTextarea, (new Date).toLocaleString() + " 操作成功！任务序号：" + (e + 1) + "/6"), 6 <= e + 1 && u.default.outPutLog(o.outputTextarea, (new Date).toLocaleString() + " 当前任务已完成!")
                                })
                            }, (o.timer + u.default.random(300, 500)) * e)
                        }, e = 0; e < 6; e++) t(e)
                    }
                }]), i);

            function i(t, e, n) {
                s(this, i), this.url = "https://api.m.jd.com/client.action", this.timer = 1e3, this.params = t, this.container = e, this.outputTextarea = n
            }
            n.default = o
        }, {
            "../utils/utils": 13
        }
    ],
    3: [
        function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });

            function o() {
                s(this, o)
            }(n.default = o).title = "京东领券助手", o.version = "v0.2.2", o.author = "krapnik", o.timingFlag = !1, o.UAFlag = !1, o.locationHref = window.location.href, o.localeTime = "", o.intervalId = 0, o.intervalSpan = 500, o.JDAppUA = "jdapp;android;8.4.2;8.0.0;;network/wifi;model/Mi Note 2;osVer/26;appBuild/71043;psn/|7;psq/1;uid/;adk/;ads/;pap/JA2015_311210|8.4.2|ANDROID 8.0.0;osv/8.0.0;pv/2.23;jdv/;ref/com.jingdong.app.mall.WebActivity;partner/huawei;apprpd/Home_Main;Mozilla/5.0 (Linux; Android 8.0.0; Mi Note 2 Build/OPR1.170623.032; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/71.0.3578.99 Mobile Safari/537.36", o.JDUserInfoURL = "https://wq.jd.com/user/info/QueryJDUserInfo?sceneid=11110&sceneval=2&g_login_type=1", o.JDTimeInfoURL = "https://api.m.jd.com/client.action?functionId=babelActivityGetShareInfo&client=wh5"
        }, {}
    ],
    4: [
        function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = t("../utils/utils"),
                i = (r(a, [{
                    key: "get",
                    value: function() {
                        var t = this.detailurl.replace("{pid}", this.couponParams.pid);
                        o.default.createJsonp(t, !0)
                    }
                }, {
                    key: "jsonp",
                    value: function(t) {
                        console.log(t);
                        var e = JSON.parse(t.data),
                            n = e.data;
                        n ? (this.couponList = [], e.success ? (this.couponList.push({
                            pid: n.productId,
                            title: n.name,
                            detail: n.description,
                            imgUrl: n.imgUrl
                        }), this.list()) : alert("请检查该页面优惠券的有效性！")) : o.default.outPutLog(this.outputTextarea, "领券结果:" + t.data)
                    }
                }, {
                    key: "list",
                    value: function() {
                        var t = this,
                            e = document.createElement("div");
                        e.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>优惠券</h3>", e.setAttribute("style", "display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;");
                        for (var n = 0; n < this.couponList.length; n++) {
                            var o = this.couponList[n],
                                i = document.createElement("div");
                            i.setAttribute("style", "display:flex;flex-direction:row;padding:10px 0;border-bottom:1px solid #999"), i.innerHTML = '<img style="width:120px;height:100%;margin-right:10vw;display: block;" src="' + o.imgUrl + '" />\n                <div>\n                    <h3 style="margin-bottom:10px">' + o.title + '</h3><p style="margin-bottom:10px">' + o.detail + '</p>\n                    <button class="receive" style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">\n                        <a style="color: #fff;text-decoration: none;">直接领取</a>\n                    </button>\n                </div>', e.appendChild(i)
                        }
                        this.container.appendChild(e), document.querySelector(".receive").addEventListener("click", function() {
                            t.send()
                        })
                    }
                }, {
                    key: "send",
                    value: function() {
                        this.outputTextarea.style.display = "block";
                        for (var t = 0; t < this.couponList.length; t++) {
                            var e = this.couponList[t],
                                n = this.url.replace("{pid}", e.pid);
                            o.default.createJsonp(n, !0)
                        }
                    }
                }]), a);

            function a(t, e, n) {
                s(this, a), this.url = "https://vip.jr.jd.com/goldcoin/purchase?id={pid}&callback=", this.detailurl = "https://vip.jr.jd.com/goldcoin/goods/{pid}?callback=", this.couponList = [], this.couponParams = t, this.container = e, this.outputTextarea = n, window.addEventListener("message", this.jsonp.bind(this), !1)
            }
            n.default = i
        }, {
            "../utils/utils": 13
        }
    ],
    5: [
        function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = t("../utils/utils"),
                i = (r(a, [{
                    key: "get",
                    value: function() {
                        var i = this;
                        fetch(this.detailurl, {
                            credentials: "include"
                        }).then(function(t) {
                            return t.json()
                        }).then(function(t) {
                            if (i.couponList = [], 0 == t.resultCode) {
                                for (var e = t.resultData.data.data, n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o && i.couponList.push({
                                        pid: o.productId,
                                        exchangeStatus: 3 == o.exchangeStatus ? "已抢光" : 2 == o.exchangeStatus ? "已领取" : "可领取",
                                        detail: o.description,
                                        startDate: new Date(o.startDate).toLocaleString(),
                                        discountAmount: o.discountAmount,
                                        imgUrl: o.imgUrl,
                                        flag: !1
                                    })
                                }
                                i.list()
                            } else alert("请检查该页面优惠券的有效性！")
                        })
                    }
                }, {
                    key: "jsonp",
                    value: function(t) {
                        JSON.parse(t.data).data, o.default.outPutLog(this.outputTextarea, "领券结果:" + t.data)
                    }
                }, {
                    key: "list",
                    value: function() {
                        var i = this,
                            e = document.createElement("div");
                        e.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>优惠券</h3><p style='margin: 5px 0;color:red'>请先点击列表项选择领取的券</p>", e.setAttribute("style", "display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;");
                        for (var t = function(t) {
                            var n = i.couponList[t],
                                o = document.createElement("div");
                            o.setAttribute("style", "display:flex;flex-direction:row;text-align:left;border:1px solid gray;border-radius: 10px;margin-top:5px;padding: 5px"), o.setAttribute("data-item", "coupon"), o.innerHTML = '<img style="width:120px;height:100%;margin-right:10vw;display: block;" src="' + n.imgUrl + '" />\n                <div>\n                    <h3 style="margin-bottom:10px user-select: none;pointer-events:none;">' + n.detail + '</h3><p style="user-select: none;pointer-events:none;margin-bottom:10px">消耗金币：' + n.discountAmount + "<br>开始时间：" + n.startDate + "<br>状态：" + n.exchangeStatus + '</p>\n                    <button class="receive" data-id=' + t + ' style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">\n                        <a style="color: #fff;text-decoration: none;user-select: none;pointer-events:none;">直接领取</a>\n                    </button>\n                </div>', e.appendChild(o), o.addEventListener("click", function(t) {
                                var e = t.target;
                                e.getAttribute("data-item") || e.parentNode == o ? (n.flag ? o.style.border = "1px solid gray" : o.style.border = "1px solid red", n.flag = !n.flag) : e.getAttribute("data-id") && i.singleSend(+e.getAttribute("data-id"))
                            })
                        }, n = 0; n < this.couponList.length; n++) t(n);
                        this.container.appendChild(e)
                    }
                }, {
                    key: "send",
                    value: function() {
                        this.outputTextarea.style.display = "block";
                        for (var t = 0; t < this.couponList.length; t++) {
                            var e = this.couponList[t],
                                n = this.url.replace("{pid}", e.pid);
                            e.flag && o.default.createJsonp(n, !0)
                        }
                    }
                }, {
                    key: "singleSend",
                    value: function(t) {
                        this.outputTextarea.style.display = "block";
                        var e = this.couponList[t],
                            n = this.url.replace("{pid}", e.pid);
                        o.default.createJsonp(n, !0)
                    }
                }]), a);

            function a(t, e, n) {
                s(this, a), this.url = "https://vip.jr.jd.com/goldcoin/purchase?id={pid}&callback=", this.detailurl = "https://ms.jr.jd.com/gw/generic/hy/h5/m/gateFloorById?reqData={%22floorId%22:44,%22pageChannel%22:%22spike%22}", this.couponList = [], this.couponParams = t, this.container = e, this.outputTextarea = n, window.addEventListener("message", this.jsonp.bind(this), !1)
            }
            n.default = i
        }, {
            "../utils/utils": 13
        }
    ],
    6: [
        function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = t("../utils/utils"),
                i = (r(a, [{
                    key: "get",
                    value: function() {
                        this.couponList = [];
                        var t = window._couponData.batchinfo,
                            e = [];
                        for (var n in t) e && e instanceof Array && (e = t[n]);
                        for (var o = 0; o < e.length; o++) {
                            var i = e[o],
                                a = i.limitStr,
                                r = i.discount,
                                u = i.quota,
                                s = i.constraintBeginTime,
                                l = i.constraintEndTime;
                            this.couponList.push({
                                limitStr: a,
                                discount: r,
                                constraintEndTime: l,
                                constraintBeginTime: s,
                                quota: u,
                                flag: !1
                            })
                        }
                        this.list()
                    }
                }, {
                    key: "list",
                    value: function() {
                        var i = this,
                            e = document.createElement("div");
                        e.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>优惠券</h3><p style='margin: 5px 0;color:red'>请先点击列表项选择领取的券</p>", e.setAttribute("style", "display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;");
                        for (var t = function(t) {
                            var n = i.couponList[t],
                                o = document.createElement("div");
                            o.setAttribute("style", "padding:10px 0;border:1px solid gray;border-radius: 10px;margin-top:5px;padding: 5px"), o.setAttribute("data-item", "coupon"), o.innerHTML = '<h4 style="user-select: none;pointer-events:none;">' + n.quota + "-" + n.discount + '</h4>\n                                <p style="user-select: none;pointer-events:none;margin-bottom:10px">范围：' + n.limitStr + "<br/>时间：" + n.constraintBeginTime + "-" + n.constraintEndTime + '</p>\n                                <button data="coupon" style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;">直接领取</button>', e.appendChild(o), o.addEventListener("click", function(t) {
                                var e = t.target;
                                e.getAttribute("data-item") || e.parentNode == o ? (n.flag ? o.style.border = "1px solid gray" : o.style.border = "1px solid red", n.flag = !n.flag) : e.getAttribute("data") && i.send()
                            })
                        }, n = 0; n < this.couponList.length; n++) t(n);
                        this.container.appendChild(e)
                    }
                }, {
                    key: "send",
                    value: function() {
                        this.outputTextarea.style.display = "block";
                        var t = this.url.replace("{key}", this.couponParams.key).replace("{roleId}", this.couponParams.roleId);
                        o.default.createJsonp(t, !1)
                    }
                }, {
                    key: "jsonp",
                    value: function(t) {
                        o.default.outPutLog(this.outputTextarea, "领券结果:" + JSON.stringify(t))
                    }
                }]), a);

            function a(t, e, n) {
                s(this, a), this.url = "https://s.m.jd.com/activemcenter/mfreecoupon/getcoupon?key={key}&roleId={roleId}", this.couponList = [], this.couponParams = t, this.container = e, this.outputTextarea = n, window.getcoupon = this.jsonp.bind(this)
            }
            n.default = i
        }, {
            "../utils/utils": 13
        }
    ],
    7: [
        function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = t("../utils/utils"),
                o = (r(a, [{
                    key: "get",
                    value: function() {
                        this.couponList = [];
                        for (var t = window.__react_data__.activityData.floorList, e = 0; e < t.length; e++) {
                            var n = t[e];
                            if ("free_coupon" == n.template || "finance_coupon" == n.template)
                                for (var o = 0; o < n.couponList.length; o++) {
                                    var i = n.couponList[o],
                                        a = i.scene,
                                        r = i.args || i.cpId,
                                        u = i.jsonSrv ? JSON.parse(i.jsonSrv).cid : "",
                                        s = i.discount,
                                        l = i.picUrl || i.picture,
                                        d = i.status,
                                        c = i.limit + "," + i.scope;
                                    this.couponList.push({
                                        discount: s,
                                        details: c,
                                        scene: a,
                                        args: r,
                                        status: d,
                                        couponbatch: u,
                                        picUrl: l,
                                        flag: !1
                                    })
                                }
                        }
                        this.list()
                    }
                }, {
                    key: "list",
                    value: function() {
                        var e = this,
                            i = document.createElement("div");
                        i.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>优惠券</h3><p style='margin: 5px 0;color:red'>请先点击列表项选择领取的券</p>", i.setAttribute("style", "display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;");
                        for (var t = function(t) {
                            var n = e.couponList[t],
                                o = document.createElement("div");
                            o.setAttribute("style", "display:flex;flex-direction:row;padding:10px 0;border:1px solid gray;border-radius: 10px;margin-top:5px;padding: 5px"), o.setAttribute("data-item", "coupon"), "1" == n.scene ? o.innerHTML = '<img style="user-select: none;pointer-events:none;width:120px;height:100%;padding-right:10vw;display: block;" src="' + n.picUrl + '" />\n                <div">\n                    <p style="user-select: none;pointer-events:none;margin-bottom:10px">状态：' + ("0" == n.status ? "可领取" : "1" == n.status ? "已领取" : "已领光") + "<br/>说明：" + n.details + '</p>\n                    <button style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">\n                        <a href=\'https://so.m.jd.com/list/couponSearch.action?couponbatch=' + n.couponbatch + '\' target="_blank" style="color: #fff;text-decoration: none;">可用商品</a>\n                    </button>\n                    <button style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">\n                        <a href=\'https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"' + e.couponParams.activityId + '","scene":' + n.scene + ',"args":"' + n.args + '"}&client=wh5\' target="_blank" style="color: #fff;text-decoration: none;">直接领取</a>\n                    </button>\n                </div>' : "3" == n.scene && (o.innerHTML = '<img style="user-select: none;pointer-events:none;width:120px;height:100%;padding-right:10vw;display: block;" src="' + n.picUrl + '" />\n                <div">\n                <p style="user-select: none;pointer-events:none;margin-bottom:10px">状态：' + ("0" == n.status ? "可领取" : "1" == n.status ? "已领取" : "已领光") + '</p>\n                <button style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">\n                    <a href=\'https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"' + e.couponParams.activityId + '","scene":' + n.scene + ',"actKey":"' + n.args + '"}&client=wh5\' target="_blank" style="color: #fff;text-decoration: none;">直接领取</a>\n                </button>\n                </div>'), i.appendChild(o), o.addEventListener("click", function(t) {
                                var e = t.target;
                                !e.getAttribute("data-item") && e.parentNode != o || (n.flag ? o.style.border = "1px solid gray" : o.style.border = "1px solid red", n.flag = !n.flag)
                            })
                        }, n = 0; n < this.couponList.length; n++) t(n);
                        this.container.appendChild(i)
                    }
                }, {
                    key: "send",
                    value: function() {
                        var o = this;
                        this.outputTextarea.style.display = "block";
                        for (var t = function(e) {
                            var t = o.couponList[e],
                                n = "";
                            "1" == t.scene ? n = 'https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"' + o.couponParams.activityId + '","scene":' + t.scene + ',"args":"' + t.args + '"}&client=wh5' : "3" == t.scene && (n = 'https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"' + o.couponParams.activityId + '","scene":' + t.scene + ',"actKey":"' + t.args + '"}&client=wh5'), t.flag && fetch(n, {
                                credentials: "include"
                            }).then(function(t) {
                                return t.json()
                            }).then(function(t) {
                                t.errmsg ? i.default.outPutLog(o.outputTextarea, "第" + (e + 1) + "张 领券结果:" + t.errmsg) : i.default.outPutLog(o.outputTextarea, "第" + (e + 1) + "张 领券结果:" + t.subCodeMsg)
                            })
                        }, e = 0; e < this.couponList.length; e++) t(e)
                    }
                }]), a);

            function a(t, e, n) {
                s(this, a), this.url = "https://api.m.jd.com/client.action?functionId=newBabelAwardCollection", this.couponList = [], this.couponParams = t, this.container = e, this.outputTextarea = n
            }
            n.default = o
        }, {
            "../utils/utils": 13
        }
    ],
    8: [
        function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = t("../utils/utils"),
                i = (r(a, [{
                    key: "get",
                    value: function() {
                        var t = this.detailurl.replace("{pid}", this.couponParams.pid);
                        o.default.createJsonp(t, !0)
                    }
                }, {
                    key: "jsonp",
                    value: function(t) {
                        console.log(t);
                        var e = JSON.parse(t.data),
                            n = e.data;
                        n ? (this.couponList = [], e.success ? (this.couponList.push({
                            pid: n.productId,
                            title: n.name,
                            detail: n.description,
                            imgUrl: n.imgUrl
                        }), this.list()) : alert("请检查该页面优惠券的有效性！")) : o.default.outPutLog(this.outputTextarea, "领券结果:" + t.data)
                    }
                }, {
                    key: "list",
                    value: function() {
                        var t = this,
                            e = document.createElement("div");
                        e.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>优惠券</h3>", e.setAttribute("style", "display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;");
                        for (var n = 0; n < this.couponList.length; n++) {
                            var o = this.couponList[n],
                                i = document.createElement("div");
                            i.setAttribute("style", "display:flex;flex-direction:row;padding:10px 0;border-bottom:1px solid #999"), i.innerHTML = '<img style="width:120px;height:100%;margin-right:10vw;display: block;" src="' + o.imgUrl + '" />\n                <div>\n                    <h3 style="margin-bottom:10px">' + o.title + '</h3><p style="margin-bottom:10px">' + o.detail + '</p>\n                    <button class="receive" style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">\n                        <a style="color: #fff;text-decoration: none;">直接领取</a>\n                    </button>\n                </div>', e.appendChild(i)
                        }
                        this.container.appendChild(e), document.querySelector(".receive").addEventListener("click", function() {
                            t.send()
                        })
                    }
                }, {
                    key: "send",
                    value: function() {
                        this.outputTextarea.style.display = "block";
                        for (var t = 0; t < this.couponList.length; t++) {
                            var e = this.couponList[t],
                                n = this.url.replace("{pid}", e.pid);
                            o.default.createJsonp(n, !0)
                        }
                    }
                }]), a);

            function a(t, e, n) {
                s(this, a), this.url = "https://vip.jr.jd.com/goldcoin/purchase?id={pid}&callback=", this.detailurl = "https://vip.jr.jd.com/goldcoin/product/{pid}?callback=", this.couponList = [], this.couponParams = t, this.container = e, this.outputTextarea = n, window.addEventListener("message", this.jsonp.bind(this), !1)
            }
            n.default = i
        }, {
            "../utils/utils": 13
        }
    ],
    9: [
        function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = t("../utils/utils"),
                o = (r(a, [{
                    key: "get",
                    value: function() {
                        var c = this;
                        this.couponList = [], fetch(this.detailurl, {
                            credentials: "include"
                        }).then(function(t) {
                            return t.json()
                        }).then(function(t) {
                            for (var e = t.rs.wholeCategoryCoupon, n = 0; n < e.length; n++) {
                                var o = e[n],
                                    i = o.giftAmount,
                                    a = o.discount,
                                    r = o.quota,
                                    u = o.couponState,
                                    s = o.activtyId,
                                    l = o.limitStr,
                                    d = o.hour;
                                c.couponList.push({
                                    giftAmount: i,
                                    activityId: s,
                                    discount: a,
                                    quota: r,
                                    hour: d,
                                    limitStr: l,
                                    couponState: u,
                                    flag: !1
                                })
                            }
                            c.list()
                        })
                    }
                }, {
                    key: "list",
                    value: function() {
                        var i = this,
                            e = document.createElement("div");
                        e.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>优惠券</h3><p style='margin: 5px 0;color:red'>点击列表项选择要领取的券</p>", e.setAttribute("style", "display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;");
                        for (var t = function(t) {
                            var n = i.couponList[t],
                                o = document.createElement("div");
                            o.setAttribute("style", "text-align:left;border:1px solid gray;border-radius: 10px;margin-top:5px;padding: 5px"), o.setAttribute("data-item", "coupon"), o.innerHTML = '<h3 style="user-select: none;pointer-events:none;">折扣：' + n.quota + "-" + n.discount + '</h3>\n                                    <p style="margin-bottom:10px;user-select: none;pointer-events:none;">状态：' + (1 == n.couponState ? "可领取" : 6 == n.couponState ? "已领光" : "不可领取") + "<br/>说明：" + n.limitStr + "<br/>兑换礼金：" + n.giftAmount + "<br/>领取时间：" + (n.hour || "现在可领") + '</p>\n                                    <button class="receive" data-id=' + t + ' style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;">直接领取</button>', e.appendChild(o), o.addEventListener("click", function(t) {
                                var e = t.target;
                                e.getAttribute("data-item") || e.parentNode == o ? (n.flag ? o.style.border = "1px solid gray" : o.style.border = "1px solid red", n.flag = !n.flag) : e.getAttribute("data-id") && i.singleSend(+e.getAttribute("data-id"))
                            }, !1)
                        }, n = 0; n < this.couponList.length; n++) t(n);
                        this.container.appendChild(e)
                    }
                }, {
                    key: "send",
                    value: function() {
                        var o = this;
                        this.outputTextarea.style.display = "block";
                        for (var t = function(t) {
                            var e = o.couponList[t],
                                n = o.url.replace("{activityId}", e.activityId);
                            e.flag && fetch(n, {
                                credentials: "include"
                            }).then(function(t) {
                                return t.json()
                            }).then(function(t) {
                                i.default.outPutLog(o.outputTextarea, e.quota + "-" + e.discount + " 领券结果:" + t.msg)
                            })
                        }, e = 0; e < this.couponList.length; e++) t(e)
                    }
                }, {
                    key: "singleSend",
                    value: function(t) {
                        var e = this;
                        this.outputTextarea.style.display = "block";
                        var n = this.couponList[t],
                            o = this.url.replace("{activityId}", n.activityId);
                        fetch(o, {
                            credentials: "include"
                        }).then(function(t) {
                            return t.json()
                        }).then(function(t) {
                            i.default.outPutLog(e.outputTextarea, n.quota + "-" + n.discount + " 领券结果:" + t.msg)
                        })
                    }
                }]), a);

            function a(t, e, n) {
                s(this, a), this.url = "https://rsp.jd.com/coupon/receiveDayCoupon/v1?locationCode=10002&lt=m&an=plus.mobile&getType=1&discount=10&couponKey=&platform=3&eventId=MPlusCoupon_Get&eid=&fp=&getType=1&activityId={activityId}", this.detailurl = "https://rsp.jd.com/coupon/dayCouponList/v1/?lt=m&an=plus.mobile&couponType=0_1", this.couponList = [], this.couponParams = t, this.container = e, this.outputTextarea = n
            }
            n.default = o
        }, {
            "../utils/utils": 13
        }
    ],
    10: [
        function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = t("../utils/utils"),
                o = (r(a, [{
                    key: "get",
                    value: function() {
                        var p = this;
                        this.couponList = [], fetch(this.detailurl, {
                            credentials: "include"
                        }).then(function(t) {
                            return t.json()
                        }).then(function(t) {
                            for (var e = t.data.hotFloor.resultList, n = 0; n < e.length; n++) {
                                var o = e[n],
                                    i = o.name,
                                    a = o.disCount,
                                    r = o.quota,
                                    u = o.skuImage,
                                    s = o.skuId,
                                    l = o.time,
                                    d = o.putKey,
                                    c = o.batchId;
                                p.couponList.push({
                                    name: i,
                                    putKey: d,
                                    skuImage: u,
                                    discount: a,
                                    quota: r,
                                    skuId: s,
                                    batchId: c,
                                    time: l,
                                    flag: !1
                                })
                            }
                            p.list()
                        })
                    }
                }, {
                    key: "list",
                    value: function() {
                        var i = this,
                            e = document.createElement("div");
                        e.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>优惠券</h3><p style='margin: 5px 0;color:red'>请先点击列表项选择领取的券</p>", e.setAttribute("style", "display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;");
                        for (var t = function(t) {
                            var n = i.couponList[t],
                                o = document.createElement("div");
                            o.setAttribute("style", "display:flex;flex-direction:row;padding:10px 0;border:1px solid gray;border-radius: 10px;margin-top:5px;padding: 5px"), o.setAttribute("data-item", "coupon"), o.innerHTML = '<img style="user-select: none;pointer-events:none;width:120px;height:100%;padding-right:10vw;display: block;" src="' + n.skuImage + '" />\n                                <div style="text-align: left">\n                                <h4 style="user-select: none;pointer-events:none;">' + n.name + '</h4>\n                                <p style="user-select: none;pointer-events:none;margin-bottom:10px">折扣：' + n.quota + "-" + n.discount + "<br/>下场时间：" + n.time + '</p>\n                                <button  class="receive" data-id=' + t + ' style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;">直接领取</button>\n                                </div>', e.appendChild(o), o.addEventListener("click", function(t) {
                                var e = t.target;
                                e.getAttribute("data-item") || e.parentNode == o ? (n.flag ? o.style.border = "1px solid gray" : o.style.border = "1px solid red", n.flag = !n.flag) : e.getAttribute("data-id") && i.singleSend(+e.getAttribute("data-id"))
                            })
                        }, n = 0; n < this.couponList.length; n++) t(n);
                        this.container.appendChild(e)
                    }
                }, {
                    key: "send",
                    value: function() {
                        var o = this;
                        this.outputTextarea.style.display = "block";
                        for (var t = function(t) {
                            var e = o.couponList[t],
                                n = 'https://api.m.jd.com/client.action?functionId=receiveSeckillCoupon&body=%7B"roleId"%3A"' + encodeURIComponent(e.putKey) + '"%2C"source"%3A"home_subsidy"%2C"floorType"%3A0%2C"skuId"%3A"' + e.skuId + '"%2C"quota"%3A"' + e.quota + '"%2C"disCount"%3A"' + e.discount + '"%2C"batchId"%3A"' + e.batchId + '"%7D&client=m&appid=XPMSGC2019';
                            fetch(n, {
                                method: "POST",
                                mode: "cors",
                                credentials: "include",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }
                            }).then(function(t) {
                                return t.json()
                            }).then(function(t) {
                                i.default.outPutLog(o.outputTextarea, e.quota + "-" + e.discount + " 领券结果:" + t.resultMsg)
                            })
                        }, e = 0; e < this.couponList.length; e++) t(e)
                    }
                }, {
                    key: "singleSend",
                    value: function(t) {
                        var e = this;
                        this.outputTextarea.style.display = "block";
                        var n = this.couponList[t],
                            o = 'https://api.m.jd.com/client.action?functionId=receiveSeckillCoupon&body=%7B"roleId"%3A"' + encodeURIComponent(n.putKey) + '"%2C"source"%3A"home_subsidy"%2C"floorType"%3A0%2C"skuId"%3A"' + n.skuId + '"%2C"quota"%3A"' + n.quota + '"%2C"disCount"%3A"' + n.discount + '"%2C"batchId"%3A"' + n.batchId + '"%7D&client=m&appid=XPMSGC2019';
                        fetch(o, {
                            method: "POST",
                            mode: "cors",
                            credentials: "include",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }).then(function(t) {
                            return t.json()
                        }).then(function(t) {
                            i.default.outPutLog(e.outputTextarea, n.quota + "-" + n.discount + " 领券结果:" + t.resultMsg)
                        })
                    }
                }]), a);

            function a(t, e, n) {
                s(this, a), this.url = "https://api.m.jd.com/client.action?functionId=newBabelAwardCollection", this.detailurl = "https://api.m.jd.com/client.action?functionId=getBillionSubsidyInfo&body=%7B%22source%22:%22home_subsidy%22%7D&appid=XPMSGC2019", this.couponList = [], this.couponParams = t, this.container = e, this.outputTextarea = n
            }
            n.default = o
        }, {
            "../utils/utils": 13
        }
    ],
    11: [
        function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = t("../utils/utils"),
                o = (r(a, [{
                    key: "get",
                    value: function() {
                        var n = this;
                        this.couponList = [];
                        var t = this.detailurl.replace("{couponBusinessId}", this.couponParams.couponBusinessId);
                        fetch(t).then(function(t) {
                            return t.json()
                        }).then(function(t) {
                            var e = JSON.parse(t.data).baiCouponInfo;
                            t.isSuccess ? (n.couponList.push({
                                couponBusinessId: JSON.parse(t.data).baiCouponDetailsNext.couponBusinessId,
                                platform: e.platform,
                                title: e.title,
                                detail: e.detail
                            }), n.list()) : alert("请检查该页面优惠券的有效性！")
                        })
                    }
                }, {
                    key: "list",
                    value: function() {
                        var t = document.createElement("div");
                        t.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin-top: 5px;padding: 0 37.5vw 5px;'>优惠券</h3>", t.setAttribute("style", "display:flex;flex-direction:column;padding: 5px;margin-top: 5px;border: 1px solid #000;");
                        for (var e = 0; e < this.couponList.length; e++) {
                            var n = this.couponList[e],
                                o = document.createElement("div");
                            o.setAttribute("style", "padding:10px 0;border-bottom:1px solid #999"), o.innerHTML = "<h3>" + n.title + "</h3><p>" + n.detail + "</p><p>可用范围：" + n.platform + '</p>\n                                <button style="width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;">\n                                    <a href=\'http://opencredit.jd.com/act/get/coupon?couponBusinessId=' + n.couponBusinessId + '&actId=004\' target="_blank" style="color: #fff;text-decoration: none;">直接领取</a>\n                                </button>', t.appendChild(o)
                        }
                        this.container.appendChild(t)
                    }
                }, {
                    key: "send",
                    value: function() {
                        var o = this;
                        this.outputTextarea.style.display = "block";
                        for (var t = function(e) {
                            var t = o.couponList[e],
                                n = o.url.replace("{couponBusinessId}", t.couponBusinessId);
                            fetch(n).then(function(t) {
                                return t.json()
                            }).then(function(t) {
                                t.isSuccess ? i.default.outPutLog(o.outputTextarea, "第" + (e + 1) + "张 领券结果:领取成功！}") : i.default.outPutLog(o.outputTextarea, "第" + (e + 1) + "张 领券结果:领取失败！")
                            })
                        }, e = 0; e < this.couponList.length; e++) t(e)
                    }
                }]), a);

            function a(t, e, n) {
                s(this, a), this.url = "https://opencredit.jd.com/act/get/coupon?couponBusinessId={couponBusinessId}&actId=004", this.detailurl = "http://opencredit.jd.com/act/get/couponInfo?couponBusinessId={couponBusinessId}", this.couponList = [], this.couponParams = t, this.container = e, this.outputTextarea = n
            }
            n.default = o
        }, {
            "../utils/utils": 13
        }
    ],
    12: [
        function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var l, o, d, i, c = t("./coupons/newBabelAwardCollection"),
                p = t("./utils/utils"),
                h = t("./coupons/whtieCoupon"),
                f = t("./coupons/purchase"),
                m = t("./coupons/receiveDayCoupon"),
                g = t("./coupons/secKillCoupon"),
                b = t("./coupons/mfreecoupon"),
                y = t("./coupons/coinPurchase"),
                v = t("./coupons/gcConvert"),
                x = t("./activitys/MonsterNian"),
                k = t("./config/config"),
                w = t("./activitys/brandCitySpring");
            (o = l = l || {})[o.none = 0] = "none", o.receiveCoupons = "receiveCoupons", o.newBabelAwardCollection = "newBabelAwardCollection", o.whiteCoupon = "whiteCoupon", o.purchase = "purchase", o.receiveDayCoupon = "receiveDayCoupon", o.secKillCoupon = "secKillCoupon", o.mfreecoupon = "mfreecoupon", o.coinPurchase = "coinPurchase", o.GcConvert = "GcConvert", (i = d = d || {})[i.none = 0] = "none", i.monsterNian = "monsterNian", i.brandCitySpring = "brandCitySpring";
            var L = void 0,
                T = void 0,
                a = 0,
                r = void 0,
                I = document.createElement("div"),
                S = document.createElement("div"),
                u = document.createElement("div"),
                s = document.createElement("div"),
                C = document.createElement("input"),
                A = document.createElement("button"),
                j = document.createElement("div"),
                P = document.createElement("input"),
                E = document.createElement("div"),
                M = document.createElement("button"),
                _ = document.createElement("button"),
                D = document.createElement("textarea"),
                F = document.createElement("div"),
                H = document.createElement("div"),
                q = document.createElement("div"),
                B = document.createElement("div"),
                V = document.createElement("div");

            function U() {
                L ? (F.setAttribute("style", "border: 1px solid #000;"), F.innerHTML = "<h3 style='border-bottom: 1px solid #2196F3;display: inline-block;margin: 5px;padding: 0 37.5vw 5px;'>操作区</h3>", C.type = "text", C.placeholder = "请输入获取时间的刷新频率【毫秒】", C.setAttribute("style", "width:80vw;height: 25px;border: solid 1px #000;border-radius: 5px;margin: 10px auto;display: block;"), A.innerHTML = "重置频率", A.setAttribute("style", "width: 80px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;"), A.addEventListener("click", function() {
                    var t = Math.trunc(+C.value);
                    if (!k.default.intervalSpan) return alert("请检查输入的刷新频率是否有误！(只能为大于0的数字)"), !1;
                    k.default.intervalSpan = t, window.clearInterval(k.default.intervalId), k.default.intervalId = window.setInterval(J, k.default.intervalSpan)
                }), P.type = "text", P.placeholder = "定时领券时间【格式:13:59:59:950】", P.setAttribute("style", "width:80vw;height: 25px;border: solid 1px #000;border-radius: 5px;margin: 10px;"), _.innerHTML = "定时指定领取", _.addEventListener("click", function() {
                    var t = p.default.formateTime(P.value);
                    if (!t || t < 0) return alert("请检查定时领券时间的格式是否有误！"), !1;
                    k.default.timingFlag = !k.default.timingFlag, a = t, D.style.display = "block", P.disabled = k.default.timingFlag, k.default.timingFlag ? (_.innerHTML = "取消指定领取", p.default.outPutLog(D, "已开启定时领取")) : (_.innerHTML = "定时指定领取", p.default.outPutLog(D, "已关闭定时领取"))
                }), M.addEventListener("click", function() {
                    L && L.send(D)
                }), _.setAttribute("style", "width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px;"), M.innerHTML = "一键指定领取", M.setAttribute("style", "width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px;"), D.setAttribute("style", "width: 90vw;height: 40vw;border: 1px solid #868686;border-radius: 10px;overflow-y: scroll;margin:5px auto;display:none"), D.setAttribute("disabled", "disabled"), F.append(s), s.append(u), s.append(C), s.append(A), F.append(j), j.append(P), j.append(E), E.append(M), E.append(_)) : (D.setAttribute("style", "width: 90vw;height: 40vw;border: 1px solid #868686;border-radius: 10px;overflow-y: scroll;margin:5px auto;"), D.setAttribute("disabled", "disabled")), V.innerHTML = "当前帐号：未登录", F.append(V), I.append(F), F.append(D)
            }

            function O() {
                B.setAttribute("style", "border: 1px solid #000;margin:10px"), B.innerHTML = '<h3 style=\'border-bottom: 1px solid #2196F3;display: inline-block;margin: 5px;\'>活动推荐</h3>\n    <p style="color:red;font-weight:bold;"><a style="color:red" href="https://bunearth.m.jd.com/babelDiy/Zeus/4PWgqmrFHunn8C38mJA712fufguU/index.html#/wxhome" target="_blank">全民炸年兽</a></p>\n    <p style="color:red;font-weight:bold;"><a style="color:red" href="https://bunearth.m.jd.com/babelDiy/Zeus/w6y8PYbzhgHJc8Lu1weihPReR2T/index.html#/home" target="_blank">十二生肖来送福</a></p>', I.append(B)
            }

            function J() {
                fetch(k.default.JDTimeInfoURL).then(function(t) {
                    return t.json()
                }).then(function(t) {
                    r = p.default.formatDate(t.time), k.default.localeTime = new Date(+t.time).toLocaleString() + ":" + r.substr(-3, 3), u.innerHTML = "京东时间：" + k.default.localeTime + "<br/>当前获取时间的间隔频率：" + k.default.intervalSpan + "毫秒", k.default.timingFlag && a <= +r && (p.default.outPutLog(D, "定时领取开始！当前时间：" + k.default.localeTime), k.default.timingFlag = !k.default.timingFlag, L && L.send(D), P.disabled = k.default.timingFlag, _.innerHTML = "定时指定领取", p.default.outPutLog(D, "定时领取已结束！"))
                })
            }
            Object.assign(window, {
                getLoginMsg: function(t) {
                    t.base.nickname && (V.innerHTML = "当前帐号：" + t.base.nickname)
                },
                krapnik: function() {},
                Utils: p.default,
                Config: k.default
            });
            var N;
            ! function(t) {
                switch (document.querySelector("html").style.fontSize = "18px", document.body.innerHTML = "", document.body.style.backgroundColor = "#ffffff", document.body.style.textAlign = "center", document.body.style.maxWidth = "100vw", I.setAttribute("style", "border: 1px solid #000;padding: 5px;margin: 5px;"), S.innerHTML = '<h1 style="font-weight:700">' + k.default.title + " " + k.default.version + "</h1>\n                        <h3>author:" + k.default.author + '</h3>\n                        <div style="display: flex;flex-direction: row;justify-content: center;">\n                        <iframe src="https://ghbtns.com/github-btn.html?user=krapnikkk&repo=JDCouponAssistant&type=star&count=true" frameborder="0" scrolling="0" width="90px" height="21px"></iframe>\n                        <a href="tencent://message/?uin=708873725Menu=yes" target="_blank" title="发起QQ聊天"><img src="http://bizapp.qq.com/webimg/01_online.gif" alt="QQ" style="margin:0px;"></a>\n                        </div>', I.append(S), document.body.append(I), H.setAttribute("style", "border: 1px solid #000;margin:10px"), H.innerHTML = '<h3 style=\'border-bottom: 1px solid #2196F3;display: inline-block;margin: 5px;\'>推广区</h3>\n    <p style="color:red;font-weight:bold;"><a  style="color:red" href="http://krapnik.cn/project/jd/dayTask.html" target="_blank">每日京东红包汇总</a></p>', I.append(H), t) {
                    case l.none:
                        break;
                    case l.newBabelAwardCollection:
                        var e = k.default.locationHref.match(/active\/(\S*)\/index/)[1];
                        L = new c.default({
                            activityId: e
                        }, I, D);
                        break;
                    case l.whiteCoupon:
                        var n = p.default.GetQueryString("couponBusinessId");
                        L = new h.default({
                            couponBusinessId: n
                        }, I, D);
                        break;
                    case l.purchase:
                        var o = p.default.GetQueryString("pid");
                        L = new f.default({
                            pid: o
                        }, I, D);
                        break;
                    case l.coinPurchase:
                        var i = p.default.GetQueryString("gid");
                        L = new y.default({
                            pid: i
                        }, I, D);
                        break;
                    case l.receiveDayCoupon:
                        L = new m.default(null, I, D);
                        break;
                    case l.secKillCoupon:
                        L = new g.default(null, I, D);
                        break;
                    case l.GcConvert:
                        L = new v.default(null, I, D);
                        break;
                    case l.mfreecoupon:
                        var a = p.default.GetQueryString("roleId"),
                            r = p.default.GetQueryString("key");
                        L = new b.default({
                            roleId: a,
                            key: r
                        }, I, D);
                        break;
                    case d.monsterNian:
                        T = new x.default(null, I, D), k.default.UAFlag = !0;
                        break;
                    case d.brandCitySpring:
                        T = new w.default(null, I, D)
                }
                var u, s;
                k.default.UAFlag && ((u = document.createElement("div")).innerHTML = '<div style="border: 1px solid #000;margin:10px"><h2>该活动需要设置user-Agent为京东APP</h2><p><a style="color:red" href="https://jingyan.baidu.com/article/20095761d41761cb0621b46f.html" target="_blank">点击查看教程</a></p><button style="width: 120px;height:30px;background-color: #2196F3;border-radius: 5px;border: 0;color:#fff;margin:5px auto;display:block" onclick=Utils.copyText(Config.JDAppUA)>复制user-Agent</button></div>', I.append(u)), L ? (k.default.intervalId = window.setInterval(J, k.default.intervalSpan), U(), L.get()) : T ? (U(), O(), T.get()) : (p.default.loadCss("https://meyerweb.com/eric/tools/css/reset/reset200802.css"), (s = document.createElement("h4")).innerHTML = '<h4>页面地址暂未被扩展或者有误！</h4><p>本插件只能在指定活动地址或领券地址使用！</p><p>如果这是个活动地址或领券地址，可以<a href="tencent://message/?uin=708873725Menu=yes" target="_blank" title="发起QQ聊天">联系作者</a>扩展~</p>', S.append(s), q.setAttribute("style", "border: 1px solid #000;margin:10px"), q.innerHTML = '<h3 style=\'border-bottom: 1px solid #2196F3;display: inline-block;margin: 5px;\'>好券推荐</h3>\n    <p style="color:red;font-weight:bold;">\n    <a style="color:red" href="https://m.jr.jd.com/member/9GcConvert/?channel=01-shouye-191214" target="_blank">9金币抢兑</a>\n    </p>\n    <p style="color:red;font-weight:bold;">\n    <a style="color:red" href="https://coupon.m.jd.com/coupons/show.action?key=26ef0709795d4fb793d41e7a8b0acac2&roleId=26885907&to=https://shop.m.jd.com/?shopId=1000132921&sceneval=2&time=1577796913938" target="_blank">自营键鼠199-100</a>\n    </p>\n    <p style="color:red;font-weight:bold;">\n    <a style="color:red" href="https://pro.m.jd.com/wq/active/FYXPxE3J9bnJ5LHvRMBNf4gJxMb/index.html" target="_blank">零食满99-88</a>\n    </p>', I.append(q), O()), p.default.createJsonp(k.default.JDUserInfoURL + "&callback=getLoginMsg")
            }((N = l.none, window.location.host.includes("jd.com") && (window.__react_data__ ? N = l.newBabelAwardCollection : window.Queries ? N = l.whiteCoupon : k.default.locationHref.includes("gcmall/index.html#/details?pid=") ? N = l.purchase : k.default.locationHref.includes("member/gcmall/index.html#/details?gid") ? N = l.coinPurchase : k.default.locationHref.includes("plus.m.jd.com/coupon/") ? N = l.receiveDayCoupon : k.default.locationHref.includes("9GcConvert") ? N = l.GcConvert : /babelDiy\/(\S*)\/index/.test(k.default.locationHref) ? N = l.secKillCoupon : /coupons\/show.action\?key=(\S*)&roleId=(\S*)/.test(k.default.locationHref) && (N = l.mfreecoupon), k.default.locationHref.includes("bunearth.m.jd.com") && (k.default.locationHref.includes("4PWgqmrFHunn8C38mJA712fufguU") ? N = d.monsterNian : k.default.locationHref.includes("w6y8PYbzhgHJc8Lu1weihPReR2T") && (N = d.brandCitySpring))), N)), console.clear(), window.console && (console.group("%c京东领券助手", "color:#009a61; font-size: 36px; font-weight: 400"), console.log("%c本插件仅供学习交流使用\n作者:krapnik \ngithub:https://github.com/krapnikkk/JDCouponAssistant", "color:#009a61"), console.groupEnd()),
                function() {
                    var t = document.createElement("script");
                    t.src = "https://hm.baidu.com/hm.js?d86d4ff3f6d089df2b41eb0735194c0d";
                    var e = document.getElementsByTagName("script")[0];
                    e.parentNode.insertBefore(t, e)
                }()
        }, {
            "./activitys/MonsterNian": 1,
            "./activitys/brandCitySpring": 2,
            "./config/config": 3,
            "./coupons/coinPurchase": 4,
            "./coupons/gcConvert": 5,
            "./coupons/mfreecoupon": 6,
            "./coupons/newBabelAwardCollection": 7,
            "./coupons/purchase": 8,
            "./coupons/receiveDayCoupon": 9,
            "./coupons/secKillCoupon": 10,
            "./coupons/whtieCoupon": 11,
            "./utils/utils": 13
        }
    ],
    13: [
        function(t, e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), window.jsonpBind = function(t) {
                o.jsonpBind(JSON.stringify(t))
            };
            var o = (r(i, null, [{
                key: "formateDate",
                value: function(t) {
                    var e = new Date(+t),
                        n = e.getHours(),
                        o = e.getMinutes(),
                        i = e.getSeconds(),
                        a = e.getMilliseconds();
                    return n < 10 && (n = "0" + n), o < 10 && (o = "0" + o), i < 10 && (i = "0" + i), a < 10 ? a = "00" + a : a < 100 && 10 <= a && (a = "0" + a), n + "" + o + i + a
                }
            }, {
                key: "obtainLocal",
                value: function(t) {
                    return t.replace(/(?:(?:^|.*;\s*)3AB9D23F7A4B3C9B\s*=\s*([^;]*).*$)|^.*$/, "$1")
                }
            }, {
                key: "getCookie",
                value: function() {
                    return document.cookie
                }
            }, {
                key: "formatDate",
                value: function(t) {
                    var e = new Date(+t),
                        n = e.getHours(),
                        o = e.getMinutes(),
                        i = e.getSeconds(),
                        a = e.getMilliseconds();
                    return n < 10 && (n = "0" + n), o < 10 && (o = "0" + o), i < 10 && (i = "0" + i), a < 10 ? a = "00" + a : a < 100 && 10 <= a && (a = "0" + a), n + "" + o + i + a
                }
            }, {
                key: "GetQueryString",
                value: function(t) {
                    var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
                        n = window.location.search.substr(1).match(e);
                    if (!n) {
                        var o = window.location.hash;
                        n = o.substr(o.indexOf("?") + 1, o.length - o.indexOf("?")).match(e)
                    }
                    return null != n ? n[2] : ""
                }
            }, {
                key: "getQueryStringByName",
                value: function(t) {
                    t = t.replace(/#.*/, "");
                    var e = /\?[a-zA-Z0-9\=\&\%\$\-\_\.\+\!\*\'\(\)\,]+/.exec(t);
                    return e ? decodeURIComponent(e[0]) : ""
                }
            }, {
                key: "formateTime",
                value: function(t) {
                    return Math.trunc(+t.replace(/[:|：]+/gi, ""))
                }
            }, {
                key: "createJsonp",
                value: function(t, e) {
                    var n = 1 < arguments.length && void 0 !== e && e,
                        o = document.createElement("script");
                    n && (t += "jsonpBind"), document.getElementsByTagName("head")[0].appendChild(o), o.setAttribute("src", t)
                }
            }, {
                key: "jsonpBind",
                value: function(t) {
                    postMessage(t, "*")
                }
            }, {
                key: "outPutLog",
                value: function(t, e) {
                    t.value ? t.value = t.value + "\n" + e : t.value = e
                }
            }, {
                key: "random",
                value: function(t, e) {
                    return Math.floor(Math.random() * (e - t + 1) + t)
                }
            }, {
                key: "copyText",
                value: function(t) {
                    if ("" !== t) {
                        var e = document.querySelector(".oInput");
                        e || ((e = document.createElement("input")).className = "oInput", document.body.appendChild(e)), e.style.display = "block", e.value = t, e.select(), document.execCommand("Copy"), e.style.display = "none", alert("内容已经复制到黏贴板啦")
                    } else alert("好像没有需要复制的内容哦！")
                }
            }, {
                key: "loadCss",
                value: function(t) {
                    var e = document.createElement("link");
                    e.type = "text/css", e.rel = "stylesheet", e.href = t, document.getElementsByTagName("head")[0].appendChild(e)
                }
            }, {
                key: "stringify",
                value: function(e) {
                    var n = this;
                    return Object.keys(e).map(function(t) {
                        return console.log(), t + "=" + (n.isObject(e[t]) ? JSON.stringify(e[t]) : encodeURIComponent(e[t]))
                    }).join("&")
                }
            }, {
                key: "isObject",
                value: function(t) {
                    var e = void 0 === t ? "undefined" : a(t);
                    return null != t && ("object" == e || "function" == e)
                }
            }]), i);

            function i() {
                s(this, i)
            }
            n.default = o
        }, {}
    ]
}, {}, [12]);