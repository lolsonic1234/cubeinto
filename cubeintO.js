@import url(https://fonts.googleapis.com/css?family=Syncopate);
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700);

body {
 overflow: hidden;
 background-color: black;
}

.spawnFirstTime {
    z-index: 9;
    background-color: dimgrey;
    position: absolute;
    left: 0vw;
    top: 0vw;
    height: 1000vw;
    width: 100vw;
}

.outerWhiteSpin {
    background-color: white;
    position: absolute;
    height: 42vw;
    width: 42vw;
    top: 4vw;
    left: 29.5vw;
}

.innerBlackSpin {
    background-color: black;
    position: absolute;
    height: 40vw;
    width: 40vw;
    top: 5vw;
    left: 30.5vw;
    opacity: 0.5;
}

.Enteryourname {
    position: absolute;
    height: 4vw;
    width: 27.5vw;
    font-family: "Roboto Condensed";
    text-align: center;
    font-size: 2.1vw;
    border-radius: 10px;
    border-style: solid;
    border-color: gray;
    top: 20vw;
    left: 36.5vw;
}

.playGameText {
    color: black;
    font-family: Syncopate;
    font-size: 3vw;
    margin-left: 2.25vw;
    margin-top: 0.75vw;
}

.playGameDiv {
    position: absolute;
    top: 30vw;
    left: 43vw;
    width: 15vw;
    height: 5vw;
    background-color: white;
    border-style: solid;
    border-radius: 25px;
    border-color: gray;
    transition: border-color 1s, background-color 1s;
}

.playGameDiv:hover {
    position: absolute;
    top: 30vw;
    left: 43vw;
    width: 15vw;
    height: 5vw;
    background-color: darkgray;
    border-style: solid;
    border-radius: 25px;
    border-color: dimgray;
    transition: border-color 1s, background-color 1s;
}



.resumeGameDiv {
    position: absolute;
    top: 30vw;
    left: 38.5vw;
    width: 24vw;
    height: 5vw;
    background-color: white;
    border-style: solid;
    border-radius: 25px;
    border-color: gray;
    transition: border-color 1s, background-color 1s;
}

.resumeGameDiv:hover {
    position: absolute;
    top: 30vw;
    left: 38.5vw;
    width: 24vw;
    height: 5vw;
    background-color: darkgray;
    border-style: solid;
    border-radius: 25px;
    border-color: dimgray;
    transition: border-color 1s, background-color 1s;
}



.newGameDiv {
    position: absolute;
    top: 20vw;
    left: 37vw;
    width: 27vw;
    height: 5vw;
    background-color: white;
    border-style: solid;
    border-radius: 25px;
    border-color: gray;
    transition: border-color 1s, background-color 1s;
}

.newGameDiv:hover {
    position: absolute;
    top: 20vw;
    left: 37vw;
    width: 27vw;
    height: 5vw;
    background-color: darkgray;
    border-style: solid;
    border-radius: 25px;
    border-color: dimgray;
    transition: border-color 1s, background-color 1s;
}






.Gametitle {
    text-align: center;
    color: white;
}

.Titlediv {
    position: absolute;
    top: 4vw;
    left: 34vw;
    width: 33vw;
    height: 7vw;
    background-color: white;
    border-style: solid;
    border-radius: 25px;
    border-color: gray;
}

.titleh1 {
    color: black;
    font-family: Syncopate;
    font-size: 3.6vw;
    margin-left: 2.25vw;
    margin-top: 1.4vw;
}

.playerStart {
    position: absolute;
    opacity: 0;
    transition: opacity 2s;
    z-index: -9;
}

.continue{
    position: absolute;
    opacity: 0;
    transition: opacity 2s;
    z-index: -9;
}

.Alerter {
    position: absolute;
    top: -1vw;
    left: -1vw;
    z-index: 0;
    background-color: white;
    width: 1000vw;
    height: 1000vw;
    opacity: 0;
    transition: opacity 1s;
}

.alertinfo {
    position: absolute;
    top: 5vw;
    left: 5vw;
    font-size: 5vw;
    font-family: Arial;
}

.fader {
    position: absolute;
    top: -1vw;
    left: -1vw;
    z-index: 0;
    background-color: black;
    width: 1000vw;
    height: 1000vw;
    opacity: 0;
    transition: opacity 1s;
}

.gamefarm {
    z-index: -1;
    background-color: aliceblue;
    position: absolute;
    left: 0vw;
    top: 0vw;
    height: 1000vw;
    width: 100vw;
}

.title {
    color: black;
    font-family: Syncopate;
    font-size: 3.6vw;
    margin-left: 33vw;
    margin-top: 1.4vw;
}

.titleHolder {
    position: absolute;
    background-color: white;
    width: 100vw;
    height: 6vw;
}

.farmHolder {
    position: absolute;
    width: 55vw;
    height: 39.5vw;
    top: 7vw;
    left: 1vw;
    background-color: #EFEFFF;
    border-color: #CCCCFF;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 6px;
    overflow-x: hidden;
}

.d1 {
    position: absolute;
    top: 7vw;
    height: 6.5vw;
    width: 40.5vw;
    left: 58vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    background-color: #EFEFFF;
    border-color: #CCCCFF;
    transition: border-color 0.5s, background-color 0.5s;
}

.d1:hover {
    position: absolute;
    top: 7vw;
    height: 6.5vw;
    width: 40.5vw;
    left: 58vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    background-color: #ECDFFF;
    border-color: #EECCFF;
    transition: border-color 0.5s, background-color 0.5s;
}

.d1t {
    margin: 0.5vw;
    font-size: 5vw;
    font-family: "Roboto Condensed";
    text-align: center;
}

.d2 {
    position: absolute;
    top: 15.25vw;
    height: 6.5vw;
    width: 40.5vw;
    left: 58vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    background-color: #EFEFFF;
    border-color: #CCCCFF;
    transition: border-color 0.5s, background-color 0.5s;
}

.d2:hover {
    position: absolute;
    top: 15.25vw;
    height: 6.5vw;
    width: 40.5vw;
    left: 58vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    background-color: #ECDFFF;
    border-color: #EECCFF;
    transition: border-color 0.5s, background-color 0.5s;
}

.d2t {
    margin: 0.5vw;
    font-size: 5vw;
    font-family: "Roboto Condensed";
    text-align: center;
}

.d3 {
    position: absolute;
    top: 23.5vw;
    height: 6.5vw;
    width: 40.5vw;
    left: 58vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    background-color: #EFEFFF;
    border-color: #CCCCFF;
    transition: border-color 0.5s, background-color 0.5s;
}

.d3:hover {
    position: absolute;
    top: 23.5vw;
    height: 6.5vw;
    width: 40.5vw;
    left: 58vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    background-color: #ECDFFF;
    border-color: #EECCFF;
    transition: border-color 0.5s, background-color 0.5s;
}

.d3t {
    margin: 0.5vw;
    font-size: 5vw;
    font-family: "Roboto Condensed";
    text-align: center;
}

.d4 {
    position: absolute;
    top: 31.75vw;
    height: 6.5vw;
    width: 40.5vw;
    left: 58vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    background-color: #EFEFFF;
    border-color: #CCCCFF;
    transition: border-color 0.5s, background-color 0.5s;
}

.d4:hover {
    position: absolute;
    top: 31.75vw;
    height: 6.5vw;
    width: 40.5vw;
    left: 58vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    background-color: #ECDFFF;
    border-color: #EECCFF;
    transition: border-color 0.5s, background-color 0.5s;
}

.d4t {
    margin: 0.5vw;
    font-size: 5vw;
    font-family: "Roboto Condensed";
    text-align: center;
}

.d5 {
    position: absolute;
    top: 40vw;
    height: 6.5vw;
    width: 40.5vw;
    left: 58vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    background-color: #EFEFFF;
    border-color: #CCCCFF;
    transition: border-color 0.5s, background-color 0.5s;
}

.d5:hover {
    position: absolute;
    top: 40vw;
    height: 6.5vw;
    width: 40.5vw;
    left: 58vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    background-color: #ECDFFF;
    border-color: #EECCFF;
    transition: border-color 0.5s, background-color 0.5s;
}

.d5t {
    margin: 0.5vw;
    font-size: 5vw;
    font-family: "Roboto Condensed";
    text-align: center;
}

.gameStore {
    position: absolute;
    height: 39.5vw;
    width: 42vw;
    background-color: aliceblue;
    top: 7vw;
    left: 120vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    border-color: #CCCCFF;
    transition: left 1s;
}

.speedStore {
    position: absolute;
    height: 39.5vw;
    width: 42vw;
    background-color: aliceblue;
    top: 7vw;
    left: 120vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    border-color: #CCCCFF;
    transition: left 1s;
}

.techStore {
    position: absolute;
    height: 39.5vw;
    width: 42vw;
    background-color: aliceblue;
    top: 7vw;
    left: 120vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    border-color: #CCCCFF;
    transition: left 1s;
}

.gameInfo {
    position: absolute;
    height: 39.5vw;
    width: 42vw;
    background-color: aliceblue;
    top: 7vw;
    left: 120vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    border-color: #CCCCFF;
    transition: left 1s;
}

.cad {
    position: absolute;
    height: 39.5vw;
    width: 42vw;
    background-color: aliceblue;
    top: 7vw;
    left: 120vw;
    border-style: solid;
    border-width: 0.5vw;
    border-radius: 5px;
    border-color: #CCCCFF;
    transition: left 1s;
}

.Xbutton {
    width: 2.5vw;
    height: 2.5vw;
    background-color: red;
    font-size: 1.1vw;
    text-align: center;
    margin-top: -1.5vw;
}


.d1tt {
    margin: -2.4vw;
    font-size: 3vw;
    font-family: "Arial Black";
    text-align: center;
}


.d2tt {
    margin: -2.4vw;
    font-size: 3vw;
    font-family: "Arial Black";
    text-align: center;
}


.d3tt {
    margin: -2.4vw;
    font-size: 3vw;
    font-family: "Arial Black";
    text-align: center;
}


.d4tt {
    margin: -2.4vw;
    font-size: 3vw;
    font-family: "Arial Black";
    text-align: center;
}

.leftArrow {
    position: absolute;
    width: 3vw;
    top: 7.4vw;
    left: 1.4vw;
    border-style: solid;
    height: 19vw;
    border-width: 0.5vw;
    background-color: lightblue;
}

.rightArrow {
    position: absolute;
    width: 3vw;
    top: 26.8vw;
    left: 1.4vw;
    border-style: solid;
    height: 19.5vw;    
    border-width: 0.5vw;
    background-color: lightblue;
}

.btext1 {
    font-size: 4.2vw;
    margin-top: 7vw;
    text-align: center;
}

.btext2 {
    font-size: 4.2vw;
    margin-top: 7vw;
    text-align: center;
}

.box1 {
    height: 38vw;
    width: 38vw;
    position: absolute;
    background-color: lightgray;
    top: 0.9vw;
    left: 10vw;
    transition: left 1s;
}

.box2 {
    height: 38vw;
    width: 38vw;
    position: absolute;
    background-color: lightgray;
    top: 0.9vw;
    left: 70vw;
    transition: left 1s;
}

.box3 {
    height: 38vw;
    width: 38vw;
    position: absolute;
    background-color: lightgray;
    top: 0.9vw;
    left: 70vw;
    transition: left 1s;
}

.cubeCash {
    position: absolute;
    width: 6vw;
    height: 6vw;
    background-image: url("CubeintO - Main Cube.png");
    background-repeat: no-repeat;
    background-size: cover;
    top: 1vw;
    left: 34vw;
    background-color: blue;
    transform: rotate(0deg);
    transition: transform 1s;
}

.cash {
    position: absolute;
    top: 1.8vw;
    color: white;
    font-family: "Arial Black";
    left: 34.2vw;
    font-size: 1.46vw;
}

.containerShopC {
    background-color: lightblue;
    position: absolute;
    top: 8vw;
    height: 8vw;
    width: 42vw;
}

.cubeimgText {
    position: absolute;
    left: 8vw;
    top: -1.1vw;
    font-size: 3vw;
    font-family: "Arial"
}

.cubeimg {
    position: absolute;
    height: 6vw;
    width: 6vw;
    background-color: blue;
    background-image: url("CubeintO - Main Cube.png");
    background-repeat: no-repeat;
    background-size: cover;
    top: 1vw;
    left: 1vw;
    transition: background-color 1s;
}

.cubeimg:hover {
    position: absolute;
    height: 6vw;
    width: 6vw;
    background-color: darkcyan;
    background-image: url("CubeintO - Main Cube.png");
    background-repeat: no-repeat;
    background-size: cover;
    top: 1vw;
    left: 1vw;
    transition: background-color 1s;
}



