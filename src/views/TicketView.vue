<template>
    <main>
        <link href="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
        <div class="movie-ticket">

            <div class="container-fluid">
                <!-- Item -->
                <div class="ui-item">
                    <!-- Head -->
                    <div class="ui-head">
                        <!-- Background Image -->
                        <img src="../assets/cropped.jpg" alt=""
                            class="img-responsive bg-img">
                        <!-- Transparent Background -->
                        <div class="ui-trans clearfix">
                            <!-- Image -->
                            <img src="https://www.bootdey.com/image/300x300/87CEFA/000000" alt=""
                                class="img-responsive">
                            <!-- Details -->
                            <div class="ui-details clearfix">
                                <!-- Movie Name -->
                                <h2><a href="#">Final destination</a></h2>
                                <!-- Labels -->
                                <a href="#" class="label">2014</a>
                                <a href="#" class="label">PG - 13</a>
                                <a href="#" class="label">143 min</a>
                                <a href="#" class="label">Action</a>
                                <a href="#" class="label">Adventures</a>
                                <!-- Paragraph -->
                                <p>Nemo enim ipsam volup tatem quia volup tas sit asper natur aut odit aut fugit volup
                                    quia volup tas sit asper natur aut odit aut fugit volup tatem sequi nesc iunt.</p>
                                <!-- Heading -->
                                <h4><span>Director</span>:</h4>
                                <!-- Director Name -->
                                <h5><a href="#">Joss Whedon</a></h5>
                                <!-- Heading -->
                                <h4><span>Writers</span>:</h4>
                                <!-- Writers -->
                                <h5><a href="#"> Joss Whedon (screenplay), Zak Penn (story)</a></h5>
                                <!-- Heading -->
                                <h4><span>Stars</span>:</h4>
                                <!-- Stars -->
                                <h5><a href="#">Slorm Mckency. ,</a> <a href="#">Maring lawyent ,</a> <a href="#">Lowin
                                        cleanting</a></h5>
                            </div>
                        </div>
                    </div>
                    <!-- Review -->
                    <div class="ui-review">
                        <!-- Heading -->
                        <h3>Final destination</h3>
                        <!-- Paragraph -->
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo.</p>
                        <!-- Buttons -->
                        <a :href="`/Paie`" class="ui-btn bg-red"><i class="fa fa-ticket"></i> Buy Tickets</a>
                        <a :href="`/h`" class="ui-btn bg-green"><i class="fa fa-dot-circle-o"></i> Back</a>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="js">

</script>
<style lang="css">
@import url('http://fonts.googleapis.com/css?family=Open+Sans:300,400italic,400,600,700');

p {
    margin: 2px 0px;
    padding: 0px;
    margin-bottom: 5px;
    line-height: 28px;
}

.View {
 
    margin-left: 580px;
 
    
}

a {
    text-decoration: none;
    color: #777;
}

a:hover,
a:active,
a:focus {
    outline: 0;
    text-decoration: none;
    color: #999;
}

hr {
    margin: 10px 0px;
    padding: 0px;
    border-top: 0px;
    border-bottom: 1px solid #eee;
}

.bg-red {
    background-color: #f75353 !important;
}

.bg-green {
    background-color: #51d466 !important;
}

/* General CSS */
body {
    background: #f4f8fd;
}

/* UI - X */
.movie-ticket {
    max-width: 650px;
    margin: 60px auto;
}

/* Head */
.movie-ticket .ui-item .ui-head {
    position: relative;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.movie-ticket .ui-item .ui-head img.bg-img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

@media(max-width: 660px) {
    .movie-ticket .ui-item .ui-head img.bg-img {
        display: none;
    }
}

/* Transparent Background */
.movie-ticket .ui-head .ui-trans {
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    padding: 25px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

@media(max-width: 660px) {
    .movie-ticket .ui-head .ui-trans {
        background: #fff;
        position: inherit;
        border: 1px solid #ddd;
        border-bottom: 0px;
    }
}

.movie-ticket .ui-head .ui-trans img {
    max-width: 180px;
    float: left;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 0px 10px 0px #000;
}

@media(max-width: 660px) {
    .movie-ticket .ui-item .ui-trans img {
        float: none;
        margin-bottom: 15px;
        box-shadow: none;
    }
}

/* Details */
.movie-ticket .ui-trans .ui-details {
    margin-left: 205px;
}

@media(max-width: 660px) {
    .movie-ticket .ui-trans .ui-details {
        margin-left: 0px;
    }
}

/* Heading */
.movie-ticket .ui-trans .ui-details h2 {
    font-size: 28px;
    line-height: 38px;
    font-weight: 300;
}

.movie-ticket .ui-trans .ui-details h2>a {
    color: #fff;
}

@media(max-width: 660px) {
    .movie-ticket .ui-trans .ui-details h2>a {
        color: #555;
    }
}

/* Label */
.movie-ticket .ui-trans .ui-details a.label {
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin: 5px 2px;
    display: inline-block;
    background: rgba(0, 0, 0, 0.3);
}

@media(max-width: 660px) {
    .movie-ticket .ui-trans .ui-details a.label {
        border: 1px solid #ccc;
        color: #555;
        background: transparent;
    }
}

.movie-ticket .ui-trans .ui-details p {
    font-size: 12px;
    line-height: 23px;
    color: #fff;
    margin-bottom: 5px;
}

@media(max-width: 660px) {
    .movie-ticket .ui-trans .ui-details p {
        color: #555;
    }
}

/* Small Headings */
.movie-ticket .ui-trans .ui-details h4 {
    color: #fff;
    font-size: 12px;
    line-height: 23px;
    margin: 0px;
    width: 100px;
    float: left;
    font-weight: 600;
}

@media(max-width: 660px) {
    .movie-ticket .ui-trans .ui-details h4 {
        color: #555;
        width: 70px;
    }
}

.movie-ticket .ui-trans .ui-details h4>span {
    display: inline-block;
    width: 75px;
}

@media(max-width: 660px) {
    .movie-ticket .ui-trans .ui-details h4>span {
        width: 55px;
    }
}

.movie-ticket .ui-trans .ui-details h5 {
    margin-left: 100px;
    font-size: 12px;
    line-height: 23px;
    font-weight: 400;
}

@media(max-width: 660px) {
    .movie-ticket .ui-trans .ui-details h5 {
        margin-left: 65px;
    }
}

.movie-ticket .ui-trans .ui-details h5>a {
    color: #fff;
}

@media(max-width: 660px) {
    .movie-ticket .ui-trans .ui-details h5>a {
        color: #555;
    }
}

/* Review */
.movie-ticket .ui-item .ui-review {
    border: 1px solid #ddd;
    padding: 15px 20px 15px;
    border-top: 0px;
    background: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

@media(max-width: 660px) {
    .movie-ticket .ui-item .ui-review {
        border-top: 1px solid #ddd;
    }
}

/* Heading */
.movie-ticket .ui-item .ui-review h3 {
    font-size: 16px;
    line-height: 26px;
    display: inline-block;
}

/* Paragraph */
.movie-ticket .ui-item .ui-review p {
    font-size: 13px;
    line-height: 28px;
    color: #777;
    margin-bottom: 10px;
}

/* Button */
.movie-ticket .ui-item .ui-review a.ui-btn {
    display: inline-block;
    margin: 0px 5px 8px 0px;
    padding: 5px 10px;
    color: #fff;
    font-size: 13px;
    line-height: 23px;
    font-weight: 600;
    border-radius: 2px;
}

.movie-ticket .ui-item .ui-review a.ui-btn>i {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    padding-right: 7px;
    margin-right: 3px;
}
</style>