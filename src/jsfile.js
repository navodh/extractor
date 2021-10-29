/*const displayDate = () => {
        let gotData = prompt('Enter your link')
        gotData = gotData.split('/')[3].replace('watch?v=','')
        document.write(`<h1 align='center'>Your video id successfully generated <i>${gotData}</i> </h1>`)
    }*/
//document.getElementById('myBtn').addEventListener('click', displayDate)
const yalo = async() => {
    let res = document.getElementById('yturl').value;
    if (!res.includes('https://') || !res.includes('youtu')){
        return alert('Give me a vaild url baka!');
    }

    if (res.includes('/shorts/')) {
        if (res.includes('?feature=share')) {
            var hjk = res.split('/')[4].replace('?feature=share', '')
            res = hjk
        } else {
            var yui = res.split('/')[4]
            res = yui
        }
    } else if (res.includes('watch')) {
        var tsts = res.replace('watch?v=', '')
        var hmm = tsts.split('/')[3]
        res = hmm
    } else {
        var yoo = res.split('/')[3]
        res = yoo
    }

    let link = `https://i.ytimg.com/vi/${res}/0.jpg`


    await document.write(`<h1 style="margin: 0;
    position: absolute;
    top: 25%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-family: sans-serif;
    font-size: 40px;
    width: fit-content;
    text-shadow: 3px 1px 4px grey;
    text-align: center;">Your Link Was Sucessfully Generated ! <br> <a href="${link}" target="_blank">Here is the link!</a></h1>`);
}    
