


function generatePass(length) {

    let result = '';
    let num = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789!%&#';
    let numlength = num.length;
    let passwords = []


    for ( let i = 0; i < 4; i++ ) {
        result = ""

        for ( let i = 0; i < length; i++ ) {
            result += num.charAt(Math.floor(Math.random() * numlength ));
        }

        passwords.push(result)
    }

    document.getElementById('passwordone').innerText = passwords[0] 
    document.getElementById('passwordtwo').innerText = passwords[1]
    document.getElementById('passwordthree').innerText = passwords[2]
    document.getElementById('passwordfour').innerText = passwords[3]
}

document.getElementById('generatebtn').onclick = function() {generatePass(10)};
