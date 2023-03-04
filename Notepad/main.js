let session =0;
document.querySelector('.add').addEventListener('click', () => {
    document.querySelector('.poped').style.display = 'flex';
    document.querySelector('.pad').style.filter = "blur(3px)";
})

const createTask = (inputText) => {
    session++
    let div = document.createElement('div');
    div.classList.add('textbox');
    let text = document.createElement('p');
    text.classList.add('content');
    text.innerText = inputText;
    div.append(text);
    let div1 = document.createElement('div'); 
    let tick = document.createElement('span');
    tick.classList.add('material-symbols-outlined');
    tick.innerText = 'done';
    tick.classList.add('completed')
    tick.classList.add(`complete${session}`);
    div1.append(tick);
    let del = document.createElement('span');
    del.classList.add('material-symbols-outlined');
    del.innerText = 'delete';
    del.classList.add('deleted');
    del.classList.add(`delete${session}`);
    div1.append(del);
    let time = document.createElement('p');
    time.classList.add('date');
    let n = new Date();
    let hh = n.getHours()
    let hhtoms = n.getHours()*360000; // converting hours to milliseconds
    let mm = n.getMinutes();
    let mmtoms = n.getMinutes()*60000; // converting minutes to milliseconds
    time.innerText = `${hh}:${mm}`;
    let time1 = document.createElement('p');
    time1.classList.add('hiddenTime');
    let consoleTime = hhtoms + mmtoms;
    // console.log(typeof hhtoms);
    // console.log(typeof mmtoms);
    // console.log(consoleTime);
    time1.innerText = consoleTime;
    div.append(time1);
    div1.append(time);
    div.append(div1);
    return div;
}

document.querySelector('.new_task').addEventListener('click', () => {
    let x = document.getElementById('newtextid').value;

    let div = createTask(x);
    document.querySelector('.pad').append(div);

    // document.querySelector('.pad').addEventListener('click', (event)=>{
    //     console.log(event);
    // })

    document.querySelector(`.delete${session}`).addEventListener('mouseover', (event) => {
        event.path[2].style.backgroundColor = '#c50e0e';
    })
    document.querySelector(`.delete${session}`).addEventListener('mouseout', (event) => {
        event.path[2].style.backgroundColor = '#FFFAD7';
    })
    document.querySelector(`.complete${session}`).addEventListener('mouseover', (event) => {
        event.path[2].style.backgroundColor = '#0ec53c';
    })
    document.querySelector(`.complete${session}`).addEventListener('mouseout', (event) => {
        event.path[2].style.backgroundColor = '#FFFAD7';
    })

    document.querySelector(`.delete${session}`).addEventListener('click', (event) => {
        document.querySelector('.pad').removeChild(event.path[2])
    })

    document.querySelector('.poped').style.display = 'none';
    document.querySelector('.pad').style.filter = "none";
    document.getElementById('newtextid').value = "";

    document.querySelector(`.complete${session}`).addEventListener('click', (event) => {
        // console.log(event);
        let cdiv = document.createElement('div');
        let ctask = document.createElement('p');
        let button = document.createElement('span');
        button.classList.add('material-symbols-outlined');
        button.classList.add('cl');
        button.innerText = 'cancel';
        cdiv.append(button);
        ctask.innerText = event.path[2].querySelector('.content').innerText;
        cdiv.append(ctask);
        let ctime = document.createElement('p');
        ctime.classList.add('ctime');
        let tet = new Date();
        let hh = tet.getHours()*360000; // converting hours to milliseconds
        let mm = tet.getMinutes()*60000; // converting minutes to milliseconds
        let tetm = hh + mm;
        // console.log(tetm);
        let tctm = event.path[2].querySelector('.hiddenTime').innerText;
        // console.log(tctm);
        let gottime = (tetm - tctm)/(1000*60);
        ctime.innerText = `Took ${gottime} minutes to complete`
        cdiv.append(ctime);
        // let qwe = event.path[2].querySelector('.date').innerText;
        // console.log(qwe);
        document.querySelector('.stored_fav').append(cdiv);
        document.querySelector('.pad').removeChild(event.path[2]);

        document.querySelector('.cl').addEventListener('click', () => {
            document.querySelector('.stored_fav').style.display = 'none';
            document.querySelector('.pad').style.filter = "none";
        })
    })

})

document.querySelector('.fav').addEventListener('click', () => {
    document.querySelector('.stored_fav').style.display = 'flex';
    document.querySelector('.pad').style.filter = 'blur(3px)';
})

document.querySelector('.textcl').addEventListener('click', () => {
    document.querySelector('.poped').style.display = 'none';
    document.querySelector('.pad').style.filter = "none";
})