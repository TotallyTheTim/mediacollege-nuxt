<template>
    <section>

        <div class="bg-overlay"></div>
        <div class="grid">
            <h1 class="fontify">Our locations</h1>
            <div class="item big">
                <div class="map">
                    <div style="overflow:hidden;width: 100%;position: relative;">
                        <iframe width="100%" height="auto" src="https://maps.google.com/maps?width=&amp;height=&amp;hl=en&amp;q=Amsterdam%2C%20Nederland+(Amsterdam%20HQ)&amp;ie=UTF8&amp;t=&amp;z=11&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
                <div class="innerbig">
                <h3>Amsterdam HQ</h3>
                <b>Mail us!</b>
                <a href="mailto:info.amsterdam@timeforbooze.net">info.amsterdam@timeforbooze.net</a>
                <b>Visit us!</b>
                <p>1234AB Amsterdam, North Holland</p>
                </div>
            </div>
            <div class="item">
                <h3>Moscow</h3>
                <b>Mail us!</b>
                <a href="mailto:info.moscow@timeforbooze.net">info.moscow@timeforbooze.net</a>
                <b>Visit us!</b>
                <p>5678CD Moscow, Moscow</p>
            </div>
            <div class="item">
                <h3>Paris</h3>
                <b>Mail us!</b>
                <a href="mailto:info.paris@timeforbooze.net">info.paris@timeforbooze.net</a>
                <b>Visit us!</b>
                <p>9012EF Paris, Île-de-France</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .bg-overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.75;
        background: var(--midtone);
    }
    .fontify{
        padding: 15px;
        background: var(--light);
        color: black;
        font-size: 42px;
        font-weight: initial;
        grid-column: span 6;
    }
    .item{
        background: var(--light);
        color: black;
        padding: 15px;
        grid-column: span 1;
    }
    .big{
        display: flex;
        justify-content: stretch;
        grid-column: span 4;
    }
    b{
        display: block;
        margin-top: 15px;
    }
    a{
        color: var(--dark);
        text-decoration: underline;
        cursor: pointer;
        line-height: 150%;
        display: block;
    }
    .innerbig{
        padding:0 15px;
        width: max-content;
    }
    @media (max-width: 1650px) {
        .item {
            grid-column: span 3;
        }
        .big {
            grid-column: span 6;
        }
        @media (max-width: 875px) {
            .item {
                grid-column: span 6;
            }

            .big {
                flex-direction: column;
            }

            .innerbig {
                padding: 15px 0 0;
            }
        }
    }
    .map{
        flex: 1;
    }
    section{
        position: relative;
        color: white;
        padding: 85px;
        background-color: var(--midtone);
        /*background-image: url('https://therealbarman.com/wp-content/uploads/2018/08/Bar-Background.png');*/
        background-image: url('https://picsum.photos/1440/720?random=4');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    section:after{
        bottom: unset;
        top: -3vw;
    }
</style>