const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
var typeEffect = 0;

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false})
        .then(localMediaStream => {
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch(err => console.error('Error: ', err));
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    return setInterval(() => {
        ctx.drawImage(video,0,0,width,height);

        if (typeEffect) {
            let pixels = ctx.getImageData(0,0,width,height);
            console.log('Entro');
            switch (typeEffect) {
                case 1:
                    // Effect red
                    pixels = redEffect(pixels);
                    break;
                case 2:
                    //rgbSplit effect
                    pixels = rgbSplit(pixels);
                    ctx.globalAlpha = .8;
                    break;
                default:
                    //Custom user
                    pixels = greenScreen(pixels);
                    break;
            }
            ctx.putImageData(pixels,0,0);
        }
    }, 30);
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i] =  pixels.data[i] + 100;//red
        pixels.data[i+1] = pixels.data[i+1] - 50;//green
        pixels.data[i+2] = pixels.data[i+2] * .5; //blue
        
    }
    return pixels;
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i-150] =  pixels.data[i];//red
        pixels.data[i+100] = pixels.data[i+1];//green
        pixels.data[i-150] = pixels.data[i+2]; //blue
        
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });

    for (i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // take it out!
        pixels.data[i + 3] = 0;
        }
    }

    return pixels;
}

function takePhoto() {
    //Play sound
    snap.currentTime = 0;
    snap.play();

    //Get data of canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Photo of Test">`;
    strip.insertBefore(link, strip.firstChild);
}

function changeEffect() {
    typeEffect = +this.value;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
document.getElementsByName('effect').forEach(effect => effect.addEventListener('change', changeEffect));