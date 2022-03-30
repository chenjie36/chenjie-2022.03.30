<template>
    <div class="animateEx">
        <!-- 竖屏 -->
        <div class="animateEx-imgBox errorDirection">
            <img class="animateEx-imgBox-img" src="../assets/img/scape.png" alt="">
            <span class="animateEx-imgBox-tooltipWord">请旋转手机至横屏使用</span>
        </div>

        <!-- 横屏 -->
        <div class="rightDirection">方向正确，可以正常使用</div>
    </div>
</template>

<style lang='scss' scoped>
@media screen and (orientation:portrait) {
    //竖屏
    .animateEx {
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: rgba($color: #000000, $alpha: 0.5);
        &-imgBox {
            width: 300px;
            height: 180px;
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -150px;
            margin-top: -90px;
            text-align: center;
            &-img {
                width: 100%;
                height: 100%;
                transform: rotate(-90deg);
                animation: scape 1000ms ease-in-out infinite;
            }
            @keyframes scape {
                0% {
                    transform: rotate(-90deg);
                }
                100% {
                    transform: rotate(0);
                }

            }
            &-tooltipWord {
                margin-top: 80px;
                color: #fff;
            }
        }
        .rightDirection {
            display: none;
        }
    }
}
@media screen and (orientation:landscape) {
    //横屏
    .animateEx {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        .errorDirection {
            display: none;
        }
        .rightDirection {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }
    }
}

</style>
