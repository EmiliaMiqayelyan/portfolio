<template>
  <div id="large-header" class="large-header">
<!--    <canvas id="demo-canvas"></canvas>-->
  </div>
</template>

<script>
export default {
  name: "AnimationPage",

  data() {
    return {
      width: 0,
      height: 0,
      largeHeader: null,
      canvas: null,
      ctx: null,
      points: [],
      target: { x: 0, y: 0 },
      animateHeader: true
    };
  },

  mounted() {
    this.initHeader();
    this.initAnimation();
    this.addListeners();
  },

  methods: {
    initHeader() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.target = { x: this.width / 2, y: this.height / 2 };

      this.largeHeader = document.getElementById("large-header");
      this.largeHeader.style.height = this.height + "px";

      this.canvas = document.getElementById("demo-canvas");
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.ctx = this.canvas.getContext("2d");

      this.points = [];

      for (let x = 0; x < this.width; x += this.width / 20) {
        for (let y = 0; y < this.height; y += this.height / 20) {
          let px = x + Math.random() * (this.width / 20);
          let py = y + Math.random() * (this.height / 20);
          let p = { x: px, originX: px, y: py, originY: py, active: 0, circle: null };
          this.points.push(p);
        }
      }

      for (let i = 0; i < this.points.length; i++) {
        let closest = [];
        let p1 = this.points[i];
        for (let j = 0; j < this.points.length; j++) {
          let p2 = this.points[j];
          if (p1 !== p2) {
            if (closest.length < 5) {
              closest.push(p2);
            } else {
              for (let k = 0; k < 5; k++) {
                if (this.getDistance(p1, p2) < this.getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  break;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      for (let i in this.points) {
        let c = this.Circle(this.points[i], 2 + Math.random() * 2, "rgba(255,255,255,0.3)");
        this.points[i].circle = c;
      }
    },

    addListeners() {
      if (!("ontouchstart" in window)) {
        window.addEventListener("mousemove", this.mouseMove);
      }
      window.addEventListener("scroll", this.scrollCheck);
      window.addEventListener("resize", this.resize);
    },

    mouseMove(e) {
      let posx = 0;
      let posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      this.target.x = posx;
      this.target.y = posy;
    },

    scrollCheck() {
      this.animateHeader = document.body.scrollTop <= this.height;
    },

    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.largeHeader.style.height = this.height + 'px';
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    },

    initAnimation() {
      this.animate();
      for (let i in this.points) {
        this.shiftPoint(this.points[i]);
      }
    },

    animate() {
      if (this.animateHeader) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (let i in this.points) {
            if (Math.abs(this.getDistance(this.target, this.points[i])) < 4000) {
              this.points[i].active = 0.3;
              this.points[i].circle.active = 0.6;
            } else if (Math.abs(this.getDistance(this.target, this.points[i])) < 20000) {
              this.points[i].active = 0.1;
              this.points[i].circle.active = 0.3;
            } else if (Math.abs(this.getDistance(this.target, this.points[i])) < 40000) {
              this.points[i].active = 0.02;
              this.points[i].circle.active = 0.1;
            } else {
              this.points[i].active = 0;
              this.points[i].circle.active = 0;
            }

            this.drawLines(this.points[i]);
            this.points[i].circle.draw();
        }
      }
      requestAnimationFrame(this.animate);
    },


    shiftPoint(p) {
      let _this = this;
      let duration = 1 + Math.random();

      let startX = p.x;
      let startY = p.y;
      let targetX = p.originX - 50 + Math.random() * 100;
      let targetY = p.originY - 50 + Math.random() * 100;

      let startTime = performance.now();

      function animateStep(timestamp) {
        let elapsed = (timestamp - startTime) / 1000;
        let t = Math.min(1, elapsed / duration);

        p.x = _this.lerp(startX, targetX, t);
        p.y = _this.lerp(startY, targetY, t);

        if (t < 1) {
          requestAnimationFrame(animateStep);
        } else {
          _this.shiftPoint(p);
        }
      }

      requestAnimationFrame(animateStep);
    },

    lerp(a, b, t) {
      return a + t * (b - a);
    },

    drawLines(p) {
      if (!p.active) return;
      for (let i in p.closest) {
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(p.closest[i].x, p.closest[i].y);
        this.ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
        this.ctx.stroke();
      }
    },

    Circle(pos, rad, color) {
      let _this = this;

      return {
        pos: pos || null,
        radius: rad || null,
        color: color || null,
        draw() {
          if (!_this.active) return;
          _this.ctx.beginPath();
          _this.ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
          _this.ctx.fillStyle = 'rgba(156,217,249,' + _this.active + ')';
          _this.ctx.fill();
        }
      };
    },

    getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
  }
};
</script>

<style>

/* Header */
.large-header {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  z-index: 1;
}

.main-title {
  position: absolute;
  margin: 0;
  padding: 0;
  color: #f9f1e9;
  text-align: center;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

.demo-1 .main-title {
  text-transform: uppercase;
  font-size: 4.2em;
  letter-spacing: 0.1em;
}

.main-title .thin {
  font-weight: 200;
}

@media only screen and (max-width: 768px) {
  .demo-1 .main-title {
    font-size: 3em;
  }
}
</style>
