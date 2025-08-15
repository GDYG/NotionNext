/**
 * 网站美化动效相关
 */
module.exports = {
  // 鼠标点击烟花特效
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || true, // 开关
  // 烟花色彩，感谢 https://github.com/Vixcity 提交的色彩
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // ANIMATE.css 动画
  ANIMATE_CSS_URL:
    process.env.NEXT_PUBLIC_ANIMATE_CSS_URL ||
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' // 动画CDN
}
