<template>
    <div class="logo-parts-holder">
        <img class="background" src="~/assets/logo/bg.png" title="time for booze big background" alt="time for booze big background">
        <img class="bottle" src="~/assets/logo/bottle.png" title="time for booze big bottle" alt="time for booze big bottle">
        <img class="clock" src="~/assets/logo/clock.png" title="time for booze big clock" alt="time for booze big clock">
        <img class="time" src="~/assets/logo/time.png" title="time for booze big text time" alt="time for booze big text time">
        <img class="for" src="~/assets/logo/for.png" title="time for booze big text for" alt="time for booze big text for">
        <img class="booze" src="~/assets/logo/booze.png" title="time for booze big text booze" alt="time for booze big text booze">
    </div>
</template>

<style scoped>
    .logo{
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .logo-parts-holder{
        position: relative;
        animation: scale-up 1s ease-out;
    }
    .logo-parts-holder > img {
        position: absolute;
        transition: .3s ease-in-out;
    }

    .time:hover,.for:hover,.bottle:hover{
        transform: scale(1.1) rotate(2deg);
    }
    .booze:hover{
        transform: skew(5deg) rotate(-3deg) translate(3px, -2px);
    }
    .clock:hover{
        transform: translate(10px,5px) rotate(36deg) scale(1.2) ;
    }
    .background{
        position: absolute;
        left: 33px;
        top: 33px;
        width: 89%;
    }
    .bottle{
        position: absolute;
        left: 105px;
        top: 211px;
        width: 20.5%;
    }
    .clock{
        position: absolute;
        left: 331px;
        top: 166px;
        width: 32.0%;
    }
    .time{
        position: absolute;
        left: 148px;
        top: 109px;
        width: 34.0%;
    }
    .for{
        position: absolute;
        left: 230px;
        top: 205px;
        width: 14.2%;
    }
    .booze{
        position: absolute;
        left: 235px;
        top: 333px;
        width: 40.0%;
    }

    @keyframes scale-up {
        0%{transform: scale(.5); opacity: 0;}
        100%{transform: scale(1); opacity: 1;}
    }
</style>