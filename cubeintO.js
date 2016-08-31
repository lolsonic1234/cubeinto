console.log("We are running on CUBEINT Official Ver.3");
console.log("Hello there, I am the creator of CUBEINT. My name is Anthony M. DaLuz. If you are reading this feel free to poke around and have fun. Just do me a favor and dont steal anything yeh?");
console.log(".....");
console.log("OH RIGHT! Contact info! You can contact me on skype or hotmail. (Skype = anthony.daluz1) & (Email = anthonydaluz@hotmail.com)");

var outdeg = 0;
var indeg = 0;

var neg = "yes";

var curbox = 1; 

var box1Cubes = 1;
var box1limit = load('b1l');

var box2Cubes = 0;
var box2limit = load('b2l');


// Variables
var stage = load('stage');
var name = load('name');

var gash = load('gash');

var storeOpen = false;
var cubeColor = load('cubeColor');

// Stage 0 Animators.

var outspinner = setInterval(spinOuter, 1);
clearInterval(outspinner);
var inspinner = setInterval(spinIn, 1);
clearInterval(inspinner);
var cashspin = setInterval(spinCash, 1000);
var cashupdate = setInterval(updateCash, 10);

var MAINsystem = {}

MAINsystem["Acheivements"] = {
    scube: load('as'),
    tcube: load('at'),
    fcube: load('af'),
    ffcube: load('aff'),
    sscube: load('ass'),
    ssscube: load('asss'),
    hundo: load("ahundo"),
    thundo: load("athundo"),
    mundo: load("amundo"),
    bundo: load("abundo")
}

MAINsystem["cubes"] = {
    scube: load('bs'),
    tcube: load('bt'),
    fcube: load('bf'),
    ffcube: load('bff'),
    sscube: load('bss'),
    ssscube: load('bsss')
}

MAINsystem["tech"] = {
    autoColScube: load('autoColS'),
    autoBuyScube: load('autoBuyS')
}



// images

var mainCube = "CubeintO - Main Cube.png";
var fuseCubeL = "CubeintO - FusedCube Half (1).png";
var fuseCubeR = "CubeintO - FusedCube Half (2).png";

// Initiantion Function

function intin(){
    document.cookie = "stage=1";
    document.cookie = "name=" + $('.Enteryourname').val();
    document.cookie = "cubeColor=blue";
    document.cookie = "gash=0";
    document.cookie = "b1l=5";
    document.cookie = "b2l=5";
    document.cookie = "as=no";
    document.cookie = "at=no";
    document.cookie = "af=no";
    document.cookie = "aff=no";
    document.cookie = "ass=no";
    document.cookie = "asss=no";
    document.cookie = "ahundo=no";
    document.cookie = "athundo=no";
    document.cookie = "amundo=no";
    document.cookie = "abundo=no";
    document.cookie = "bs=no";
    document.cookie = "bt=no";
    document.cookie = "bf=no";
    document.cookie = "bff=no";
    document.cookie = "bss=no";
    document.cookie = "bsss=no";
    
    
    document.cookie = "autoColS=no";
    document.cookie = "autoBuyS=no";
}

// Code

if(stage == null || stage == '0'){
    outspinner = setInterval(spinOuter, 1);
    inspinner = setInterval(spinIn, 1);
    window.setTimeout(function(){
        $('.playerStart').css({
            opacity: "1",
            zIndex: "1"
        })
    }, 1000)
}

if(stage == '1'){
    outspinner = setInterval(spinOuter, 1);
    inspinner = setInterval(spinIn, 1);
    window.setTimeout(function(){
        $('.continue').css({
            opacity: "1",
            zIndex: "1"
        })
    }, 1000)
}




$('.rightArrow').click(function(){
    if(curbox == 1){
        $('.box' + curbox).css({
            left: "-70vw"
        })
        curbox = 2;
        $('.box' + curbox).css({
            left: "10vw"
        })
        return false;
    }
    
    if(curbox == 2){
        $('.box' + curbox).css({
            left: "-70vw"
        })
        curbox = 3;
        $('.box' + curbox).css({
            left: "10vw"
        })
        return false;
    }
})

$('.leftArrow').click(function(){
    if(curbox == 2){
        $('.box' + curbox).css({
            left: "70vw"
        })
        curbox = 1;
        $('.box' + curbox).css({
            left: "10vw"
        })
        return false;
    }
    
    if(curbox == 3){
        $('.box' + curbox).css({
            left: "70vw"
        })
        curbox = 2;
        $('.box' + curbox).css({
            left: "10vw"
        })
        return false;
    }
})

$('.resumeGameDiv').click(function(){
    cubeColor = "blue";
    fadeIt();
    updateCubeBuy();
    window.setTimeout(function(){
        $('.spawnFirstTime').css({
            zIndex: "-1",
        });
        
        $('.gamefarm').css({
            zIndex: "9",
        });
        clearInterval(inspinner);
        clearInterval(outspinner);
    }, 1000)
});

$('.newGameDiv').click(function(){
    document.cookie = "stage=0";
    fadeIt();
    window.setTimeout(function(){
        $('.playerStart').css({
            opacity: "1",
            zIndex: "1"
        })
        $('.continue').css({
            opacity: "0",
            zIndex: "-9"
        })
    }, 1000)
});



$('.playGameDiv').click(function(){
    if($('.Enteryourname').val().length > 0){
        if($('.Enteryourname').val().toLowerCase() == "mario"){
            alertIt("Sorry Mario, your princess is in <br> another castle.")
        }else if($('.Enteryourname').val().toLowerCase() == "link"){
            alertIt("I think you mean Zelda.")
        }else if($('.Enteryourname').val().toLowerCase() == "sonic"){
            alertIt("Gotta go fest!!!!11one!!1")
        }else if($('.Enteryourname').val().toLowerCase() == "cubeint"){
            alertIt("*cough*")
        }else if($('.Enteryourname').val().toLowerCase() == "aaaaaaaaaaaaaaaaa"){
            alertIt("You better change that.")
        }else if($('.Enteryourname').val().toLowerCase() == "bbbbbbbbbbbbbbbbb"){
            alertIt("Stop it.")
        }else if($('.Enteryourname').val().toLowerCase() == "ccccccccccccccccc"){
            alertIt("Fine god damnit. Just wait 70 years <br> and ill let you use that name.")
        }else if($('.Enteryourname').val().toLowerCase() == "ddddddddddddddddd"){
            alertIt("Jesus christ man just choose a <br> unqiue name!")
        }else if($('.Enteryourname').val().toLowerCase() == "eeeeeeeeeeeeeeeee"){
            alertIt("...")
        }else if($('.Enteryourname').val().toLowerCase() == "fffffffffffffffff"){
            alertIt("I wont give up you know?")
        }else if($('.Enteryourname').val().toLowerCase() == "ggggggggggggggggg"){
            alertIt("Well looks like we will be here <br> for a while...")
        }else if($('.Enteryourname').val().toLowerCase() == "hhhhhhhhhhhhhhhhh"){
            alertIt("Your determination is disturbing.")
        }else if($('.Enteryourname').val().toLowerCase() == "iiiiiiiiiiiiiiiii"){
            alertIt("If you dont stop im going to say <br> some really <b>BAD</b> words.")
        }else if($('.Enteryourname').val().toLowerCase() == "jjjjjjjjjjjjjjjjj"){
            alertIt("Some really bad words.")
        }else if($('.Enteryourname').val().toLowerCase() == "kkkkkkkkkkkkkkkkk"){
            alertIt("Fine I give up go ahead.")
        }else if($('.Enteryourname').val().toLowerCase() == "lllllllllllllllll"){
            alertIt("Im sorry, its the next one. <br> Do the next one.")
        }else if($('.Enteryourname').val().toLowerCase() == "mmmmmmmmmmmmmmmmm"){
            alertIt("I love how there was a 50% <br> chance in which you <br> believed me.")
        }else if($('.Enteryourname').val().toLowerCase() == "nnnnnnnnnnnnnnnnn"){
            alertIt("Want to know my dream? <br> For a youtuber to <br> play this.")
        }else if($('.Enteryourname').val().toLowerCase() == "ooooooooooooooooo"){
            alertIt("My other dream is to have <br> A cube shaped pie.")
        }else if($('.Enteryourname').val().toLowerCase() == "ppppppppppppppppp"){
            alertIt("My final dream is for you to <br> stop trying.")
        }else if($('.Enteryourname').val().toLowerCase() == "qqqqqqqqqqqqqqqqq"){
            alertIt("My final dream is for you to <br> stop trying.")
        }else if($('.Enteryourname').val().toLowerCase() == "rrrrrrrrrrrrrrrrr"){
            alertIt("You are running out letters... <br> s,t,u,v,w,x,y,z are left.")
        }else if($('.Enteryourname').val().toLowerCase() == "sssssssssssssssss"){
            alertIt("Im also running out of patience.")
        }else if($('.Enteryourname').val().toLowerCase() == "ttttttttttttttttt"){
            alertIt("Im dead inside...")
        }else if($('.Enteryourname').val().toLowerCase() == "uuuuuuuuuuuuuuuuu"){
            alertIt("U better stop.")
        }else if($('.Enteryourname').val().toLowerCase() == "vvvvvvvvvvvvvvvvv"){
            alertIt("I have no words. You spent around... <br> 2 minutes doing this.")
        }else if($('.Enteryourname').val().toLowerCase() == "wwwwwwwwwwwwwwwww"){
            alertIt("I guess our little journey is coming <br> to an end.")
        }else if($('.Enteryourname').val().toLowerCase() == "xxxxxxxxxxxxxxxxx"){
            alertIt("Just 2 more letters.....")
        }else if($('.Enteryourname').val().toLowerCase() == "yyyyyyyyyyyyyyyyy"){
            alertIt("You know... I love you.")
        }else if($('.Enteryourname').val().toLowerCase() == "zzzzzzzzzzzzzzzzz"){
            alertIt("Never let anyone stop you from what <br> you do. Stay strong and power <br> through.")
        }else {
            cubeColor = "blue";
            fadeIt();
            intin();
            window.setTimeout(function(){
                $('.spawnFirstTime').css({
                    zIndex: "-1",
                });

                $('.gamefarm').css({
                    zIndex: "9",
                });
                clearInterval(inspinner);
                clearInterval(outspinner);
            }, 1000)
        };
    } else {
        alertIt("Please put in atleast 1 Character")
    };
});



function alertIt(textToAlert){
    $('.Alerter').css({
        position: "absolute",
        opacity: "0.75",
        zIndex: "100",
    });
    $('.alertinfo').html(textToAlert);
    window.setTimeout(function(){
        $('.Alerter').css({
            position: "absolute",
            opacity: "0",
        });
    }, 2000);
    window.setTimeout(function(){
        $('.Alerter').css({
            zIndex: "-9"
        });
        
        $('.alertinfo').html(" ");
    }, 3000);
}


function updateCubeBuy(){
    MAINsystem["cubes"]["scube"] = load('bs');
    
    if(gash >= 10 || MAINsystem["cubes"]["scube"] == "yes"){
        document.cookie = "bs=yes";
        $('.containerShopS').css({
            opacity: "1",
            left: "0vw"
        })
    }
}


function fadeIt(){
    $('.fader').css({
        position: "absolute",
        opacity: "1",
        zIndex: "10",
    });
    window.setTimeout(function(){
        $('.fader').css({
            position: "absolute",
            opacity: "0",
        });
    }, 1000);
    window.setTimeout(function(){
        $('.fader').css({
            zIndex: "-9"
        });
    }, 2000);
}



function load(key){
    var result;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
}



function spinOuter(){
    $('.outerWhiteSpin').css({
        transform: "rotate(" + outdeg + "deg)"
    })
    outdeg += 0.1;
}



function spinIn(){
    $('.innerBlackSpin').css({
        transform: "rotate(" + indeg + "deg)"
    })
    indeg -= 0.1;
}

function updateCash(){
    gash = load('gash')
    
    if(parseInt(gash) >= 0 && parseInt(gash) < 1000){
        $('.cash').text(gash);
    } else if(parseInt(gash) > 999 && parseInt(gash) < 1000000){
        
        $('.cash').text((Number((gash / 1000).toString().match(/^\d+(?:\.\d{0,1})?/))) + "K")
        
    } else if(parseInt(gash) > 999999 && parseInt(gash) < 1000000000){
        
        $('.cash').text((Number((gash / 100000).toString().match(/^\d+(?:\.\d{0,1})?/))) + "M")
        
    } else if(parseInt(gash) > 999999999 && parseInt(gash) < 1000000000000){
        
        $('.cash').text((Number((gash / 100000).toString().match(/^\d+(?:\.\d{0,1})?/))) + "B")
        
    } else {
        $('.cash').text("ERROR");
    }
}

function spinCash(){
    
    if(neg == "yes"){
        $('.cubeCash').css({
            transform: "rotate(" + "10" + "deg)"
        });
        
        neg = "no";
        
        return false;
    }
    if(neg == "no"){
        $('.cubeCash').css({
            transform: "rotate(" + "-10" + "deg)"
        });
        
        neg = "yes";
        
        return false;
    }
}

$('.d1').click(function(){
    if(storeOpen == false){
        storeOpen = true;
        $(".gameStore").css({
            left: "57vw",
            zIndex: "10"
        });
    };
});


$('.d2').click(function(){
    if(storeOpen == false){
        storeOpen = true;
        $(".speedStore").css({
            left: "57vw",
            zIndex: "10"
        });
    };
});


$('.d3').click(function(){
    if(storeOpen == false){
        storeOpen = true;
        $(".techStore").css({
            left: "57vw",
            zIndex: "10"
        });
    };
});


$('.d4').click(function(){
    if(storeOpen == false){
        storeOpen = true;
        $(".gameInfo").css({
            left: "57vw",
            zIndex: "10"
        });
    };
});


$('.d5').click(function(){
    if(storeOpen == false){
        storeOpen = true;
        $(".cad").css({
            left: "57vw",
            zIndex: "10"
        });
    };
});

$('.Xbutton').click(function(){
    if(storeOpen == true){
        storeOpen = false;
        $(".gameInfo").css({
            left: "120vw",
            zIndex: "10"
        });
        $(".gameStore").css({
            left: "120vw",
            zIndex: "10"
        });
        $(".speedStore").css({
            left: "120vw",
            zIndex: "10"
        });
        $(".techStore").css({
            left: "120vw",
            zIndex: "10"
        });
        $(".cad").css({
            left: "120vw",
            zIndex: "10"
        });
    };
});



$('.cubeimg').click(function(){
    box1limit = load('b1l');
    
    var randomX = Math.floor(Math.random() * 32) + 2;
    var randomY = Math.floor(Math.random() * 32) + 2;
    var randomDeg = Math.floor(Math.random() * 360) + 0;
    
    var type = mainCube;
    var box = "1";
    var cash = "cash1";
    var color = "blue";
    
    if(gash >= 1 && box1Cubes < box1limit){
        spawnCube(type, box, randomX, randomY, color, cash, randomDeg, "no");
        document.cookie = "gash=" + (gash - 1);
        gash = load("gash");
        box1Cubes += 1;
    } else if( box1Cubes >= box1limit){
        alertIt('You can only have a maximum of.. <br>' + box1limit + ' cubes of that kind.')
    } else if(gash < 1){
        alertIt('You dont have enough cash.')
    }
})

$('.cubeimgS').click(function(){
    box2limit = load('b1l');
    
    var randomX = Math.floor(Math.random() * 32) + 2;
    var randomY = Math.floor(Math.random() * 32) + 2;
    var randomDeg = Math.floor(Math.random() * 360) + 0;
    
    var type = "split";
    var box = "2";
    var cash = "cash2";
    var color = "none";
    
    if(gash >= 10 && box1Cubes < box1limit){
        spawnCube(type, box, randomX, randomY, color, cash, randomDeg, "split");
        document.cookie = "gash=" + (gash - 10);
        gash = load("gash");
        box2Cubes += 1;
    } else if( box2Cubes >= box2limit){
        alertIt('You can only have a maximum of.. <br>' + box2limit + ' cubes of that kind.')
    } else if(gash < 10){
        alertIt('You dont have enough cash.')
    }
})



function spawnCube(type, box, locationX, locationY, color, cash, deg, special){
    if(special == "no"){
        $('.box' + box).append('<div class="' + cash + '" style="position: absolute; width: 4vw; height: 4vw; background-color: ' + color + '; top: ' + locationY + 'vw; left: ' + locationX + 'vw; background-image: url(' + type + '); background-repeat: no-repeat; background-size: cover; transform: rotate(' + deg + 'deg); transition: transform 1s, background-color 1s, top 1s, left 1s, width 1s, height 1s, opacity 1s;;"></div>');
    } else if(special == "split"){
        $('.box' + box).append('<div class="' + cash + '" style="position: absolute; width: 4vw; height: 4vw; top: ' + locationY + 'vw; left: ' + locationX + 'vw; transform: rotate(' + deg + 'deg); transition: transform 1s, background-color 1s, top 1s, left 1s, width 1s, height 1s; opacity 1s;"><div class="hl" style="background-image: url("' + fuseCubeL + '"); background-repeat: no-repeat; background-size: cover; position: absolute; height: 4vw; width: 4vw;"></div><div class="hr" style="background-image: url("' + fuseCubeR + '"); background-repeat: no-repeat; background-size: cover; position: absolute; height: 4vw; width: 4vw;"></div></div>')
    };
};


$(document).on('mouseenter', '.cash1', function(e) {
    document.cookie = "gash=" + ((gash - 1) + 3);
    gash = load("gash");
    animateRem = this;
    animator(animateRem)
    box1Cubes -= 1;
    updateCubeBuy();
});

function animator(animkill){
    $(animkill).attr("class", "ded")
    $(animkill).css({
        transform: "rotate(1000deg)",
        height: "0vw",
        width: "0vw"
    })
    
    window.setTimeout(function(){
        animkill.remove();
    }, 1000);
}


$(document).on('mouseenter', '.cash2', function(e) {
    document.cookie = "gash=" + ((gash - 1) + 12);
    gash = load("gash");
    animateRem = this;
    animator(animateRem)
    box2Cubes -= 1;
    updateCubeBuy();
});

function animatorSpl(animkill){
    $(animkill).attr("class", "ded")
    $(animkill).css({
        transform: "rotate(0deg)",
        opacity: "0"
    })
    
    $(animkill + ".hfl").css({
        left: "-=10"
    })
    
    $(animkill + ".hfr").css({
        left: "+=10"
    })
    
    window.setTimeout(function(){
        animkill.remove();
    }, 1000);
}






















